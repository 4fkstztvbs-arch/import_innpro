# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-27

Vstup: `premiumstoresk_20260827_0947.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **5577**
- Návrh **zvýšiť** cenu: **406** produktov
- Návrh **znížiť** cenu: **872** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4299** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **155**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (406)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 228.90 € | **240.50 €** | 8.0 % | **13.5 %** | 229.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 34.50 € | **41.00 €** | 16.3 % | **38.3 %** | 34.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovačka G21 Nefrit | 117.50 € | **123.90 €** | 9.6 % | **15.6 %** | 117.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 34.50 € | **40.50 €** | 35.6 % | **59.2 %** | 34.65 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 49.50 € | **55.50 €** | 10.0 % | **23.3 %** | 49.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **75.50 €** | 27.8 % | **38.8 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.50 € | **27.00 €** | 10.1 % | **38.2 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL CHARGEES3 | 114.50 € | **119.90 €** | 10.4 % | **15.6 %** | 114.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 42.00 € | **47.00 €** | 23.6 % | **38.3 %** | 42.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.00 € | **30.90 €** | 34.4 % | **59.7 %** | 26.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 68.90 € | **73.50 €** | 12.7 % | **20.2 %** | 69.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM diaľkovo ovládaná zásuvka | 56.50 € | **60.50 €** | 28.1 % | **37.2 %** | 56.54 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 16.50 € | **20.50 €** | 12.4 % | **39.6 %** | 16.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight otočná IP kamera | 34.50 € | **38.50 €** | 25.1 % | **39.6 %** | 34.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sous vide G21 Maestro, WiFi, 1200 W | 107.90 € | **111.90 €** | 11.9 % | **16.1 %** | 111.91 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 22dB | 17.00 € | **20.90 €** | 16.3 % | **43.0 %** | 17.13 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 4... | 27.00 € | **30.50 €** | 22.5 % | **38.4 %** | 27.07 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 11.00 € | **14.50 €** | 8.0 % | **42.4 %** | 11.16 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 48.90 € | **52.00 €** | 15.2 % | **22.5 %** | 49.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 16.00 € | **19.00 €** | 13.8 % | **35.1 %** | 16.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mobilný ovládač GameSir X5 Lite GN Bright Green | 25.50 € | **28.50 €** | 16.1 % | **29.7 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 37.00 € | **39.90 €** | 7.7 % | **16.1 %** | 37.23 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 26.90 € | **29.50 €** | 15.2 % | **26.3 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 14.90 € | **17.50 €** | 10.9 % | **30.3 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka IP66, vodotesná a prachotesná | 15.00 € | **17.50 €** | 33.4 % | **55.7 %** | 15.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 25.00 € | **27.50 €** | 22.2 % | **34.4 %** | 25.24 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 43.00 € | **45.50 €** | 14.8 % | **21.5 %** | 43.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE TH60E3B | 79.00 € | **81.50 €** | 6.7 % | **10.1 %** | 79.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 14.50 € | **16.90 €** | 18.7 % | **38.4 %** | 14.54 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 22.50 € | **24.90 €** | 12.7 % | **24.7 %** | 22.68 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 37.50 € | **39.50 €** | 26.6 % | **33.4 %** | 37.53 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight ručná akumulátorová píla, 150mm | 41.50 € | **43.50 €** | 14.6 % | **20.1 %** | 41.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight akumulátorové záhradné nožnice | 63.50 € | **65.50 €** | 16.4 % | **20.1 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 14.00 € | **15.90 €** | 25.1 % | **42.1 %** | 14.07 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka USB-C, 90W, PD fast charger | 13.90 € | **15.50 €** | 20.1 % | **33.9 %** | 15.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 22.50 € | **24.00 €** | 32.4 % | **41.2 %** | 22.66 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **71.00 €** | 27.8 % | **30.5 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 27.00 € | **28.50 €** | 13.7 % | **20.1 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bežecký pás Acra GB4500N pre chôdzu a pomalý beh | 397.90 € | **399.00 €** | 7.1 % | **7.4 %** | 399.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 62.90 € | **64.00 €** | 10.6 % | **12.6 %** | 62.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Black | 16.90 € | **18.00 €** | 11.8 % | **19.1 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Blue | 16.90 € | **18.00 €** | 11.8 % | **19.1 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Red | 16.90 € | **18.00 €** | 11.8 % | **19.1 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C White | 16.90 € | **18.00 €** | 11.8 % | **19.1 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia otočná IP kamera | 37.50 € | **38.50 €** | 39.0 % | **42.7 %** | 37.54 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 22.00 € | **23.00 €** | 37.2 % | **43.4 %** | 22.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 14.00 € | **15.00 €** | 16.4 % | **24.7 %** | 14.21 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.50 € | **11.50 €** | 33.0 % | **45.6 %** | 10.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 48.50 € | **49.50 €** | 20.0 % | **22.4 %** | 48.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny bezkontaktný alkohol tester, F... | 57.00 € | **58.00 €** | 27.3 % | **29.5 %** | 57.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 15.00 € | **16.00 €** | 30.0 % | **38.7 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.50 € | **18.50 €** | 9.2 % | **15.4 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 71.00 € | **71.90 €** | 17.6 % | **19.1 %** | 71.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 13.00 € | **13.90 €** | 32.1 % | **41.3 %** | 13.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.00 € | **11.90 €** | 35.1 % | **46.1 %** | 11.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.00 € | **16.90 €** | 28.2 % | **35.4 %** | 16.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.00 € | **31.90 €** | 18.8 % | **22.2 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 17.00 € | **17.90 €** | 39.0 % | **46.4 %** | 17.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Mercusys MC510 3MPx, venkovní, IP PTZ... | 34.00 € | **34.90 €** | 9.3 % | **12.2 %** | 34.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 24.00 € | **24.90 €** | 40.1 % | **45.3 %** | 24.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 16.00 € | **16.90 €** | 31.9 % | **39.3 %** | 16.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1004500 | 51.00 € | **51.90 €** | 10.1 % | **12.0 %** | 51.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GS  G7-SE Wired Controller XBOx &PC Or | 39.00 € | **39.90 €** | 10.2 % | **12.8 %** | 39.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.10 € | **8.90 €** | 6.6 % | **17.1 %** | 8.11 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.60 € | **5.40 €** | 32.1 % | **55.1 %** | 4.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 6.60 € | **7.40 €** | 29.9 % | **45.7 %** | 6.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 6.10 € | **6.90 €** | 21.9 % | **37.8 %** | 6.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.50 € | **8.20 €** | 35.2 % | **47.8 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 9.80 € | **10.50 €** | 37.6 % | **47.4 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 16.90 € | **17.50 €** | 10.4 % | **14.3 %** | 16.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 20.90 € | **21.50 €** | 42.4 % | **46.5 %** | 21.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 21.90 € | **22.50 €** | 28.3 % | **31.8 %** | 22.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 38.90 € | **39.50 €** | 15.1 % | **16.9 %** | 38.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **6.00 €** | 24.0 % | **37.8 %** | 5.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.00 € | **4.60 €** | 33.8 % | **53.9 %** | 4.01 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.00 € | **9.60 €** | 36.3 % | **45.3 %** | 9.04 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **4.10 €** | 31.7 % | **54.3 %** | 3.57 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 15.90 € | **16.50 €** | 19.0 % | **23.5 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 9.90 € | **10.50 €** | 40.0 % | **48.5 %** | 10.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 19.50 € | **20.00 €** | 13.6 % | **16.5 %** | 19.53 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 32.00 € | **32.50 €** | 18.0 % | **19.9 %** | 32.04 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 23.00 € | **23.50 €** | 7.3 % | **9.6 %** | 23.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor úniku horľavých plynov. Polovodičov... | 14.00 € | **14.50 €** | 36.5 % | **41.4 %** | 14.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lokátor Premium, Find My kompatibilný | 13.00 € | **13.50 €** | 14.8 % | **19.2 %** | 13.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 31.50 € | **32.00 €** | 29.5 % | **31.5 %** | 31.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacia dóza G21 2 L, marinovacia | 23.00 € | **23.50 €** | 16.7 % | **19.3 %** | 23.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 14.00 € | **14.50 €** | 43.7 % | **48.8 %** | 14.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nepriamy germicidný UV žiarič | 62.00 € | **62.50 €** | 38.2 % | **39.3 %** | 62.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.00 € | **30.50 €** | 36.9 % | **39.2 %** | 30.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izbová anténa, DVB-T2/FM, 36dB | 14.00 € | **14.50 €** | 39.1 % | **44.1 %** | 14.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight drevený snehuliak, 4x LED, 2x AA | 13.00 € | **13.50 €** | 41.9 % | **47.3 %** | 13.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 12.00 € | **12.50 €** | 41.8 % | **47.7 %** | 12.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 12.00 € | **12.50 €** | 41.8 % | **47.7 %** | 12.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-M1000 2směrový studiový, XLR | 58.00 € | **58.50 €** | 9.5 % | **10.4 %** | 58.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 13.00 € | **13.50 €** | 41.9 % | **47.3 %** | 13.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 13.00 € | **13.50 €** | 41.9 % | **47.3 %** | 13.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA301 umývateľná handrič... | 12.00 € | **12.50 €** | 8.8 % | **13.3 %** | 12.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra žiarovka TP-Link Tapo L430C(2-pack) E14, 4,8W,... | 28.00 € | **28.50 €** | 30.7 % | **33.0 %** | 28.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-F8C lavalier-kardioidný | 38.00 € | **38.50 €** | 9.1 % | **10.6 %** | 38.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.00 € | **11.50 €** | 34.3 % | **40.4 %** | 11.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight koaxiálny kábel CC120, voľne, 100m | 25.00 € | **25.50 €** | 37.2 % | **40.0 %** | 25.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 40.00 € | **40.50 €** | 35.1 % | **36.7 %** | 40.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 32.00 € | **32.50 €** | 31.2 % | **33.2 %** | 32.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Perfection brown | 211.00 € | **211.50 €** | 17.9 % | **18.2 %** | 211.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Perfection Cappuccino | 211.00 € | **211.50 €** | 17.9 % | **18.2 %** | 211.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Perfection white | 211.00 € | **211.50 €** | 17.9 % | **18.2 %** | 211.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.00 € | **18.50 €** | 35.3 % | **39.0 %** | 18.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-PVM3000L superkardioidní puškový, XLR | 104.00 € | **104.50 €** | 6.6 % | **7.1 %** | 104.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 24.00 € | **24.50 €** | 17.9 % | **20.4 %** | 24.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Palm svetlé drevo 500 ml | 22.00 € | **22.50 €** | 9.3 % | **11.7 %** | 22.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.00 € | **22.50 €** | 9.3 % | **11.7 %** | 22.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Palm tmavé drevo 500 ml | 22.00 € | **22.50 €** | 9.3 % | **11.7 %** | 22.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 71.00 € | **71.50 €** | 38.4 % | **39.3 %** | 71.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny kapesny kompresor mini | 38.50 € | **39.00 €** | 16.8 % | **18.3 %** | 38.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odšťavovač G21 Gracioso horizontal | 208.50 € | **209.00 €** | 16.5 % | **16.8 %** | 208.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 17.50 € | **18.00 €** | 20.8 % | **24.2 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.00 € | **12.50 €** | 40.2 % | **46.0 %** | 12.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 12.00 € | **12.50 €** | 38.8 % | **44.6 %** | 12.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Honey Night 160 ml | 11.00 € | **11.50 €** | 12.2 % | **17.3 %** | 11.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 103.00 € | **103.50 €** | 34.5 % | **35.1 %** | 103.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 24.00 € | **24.50 €** | 42.4 % | **45.4 %** | 24.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 24.00 € | **24.50 €** | 42.4 % | **45.4 %** | 24.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 27.00 € | **27.50 €** | 31.3 % | **33.7 %** | 27.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočné záves, cencúle, 360 LED, 9m x 0... | 24.00 € | **24.50 €** | 42.4 % | **45.4 %** | 24.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA411 Vodotesná podložka... | 17.00 € | **17.50 €** | 11.0 % | **14.3 %** | 17.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 22.00 € | **22.50 €** | 16.8 % | **19.5 %** | 22.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samolepiace hodiny G21 Fashion Style | 12.00 € | **12.50 €** | 13.0 % | **17.8 %** | 12.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 13.50 € | **14.00 €** | 28.1 % | **32.8 %** | 13.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-PVM3000M studiový stereofonní, XLR | 89.00 € | **89.50 €** | 6.4 % | **7.0 %** | 89.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.00 € | **23.50 €** | 14.0 % | **16.5 %** | 23.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 6 zásuviek, 3m, 3 x 1mm2,... | 16.00 € | **16.50 €** | 43.7 % | **48.2 %** | 16.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.00 € | **19.50 €** | 34.8 % | **38.3 %** | 19.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-V01 stereofonní kondenzátorový,TRS | 11.00 € | **11.50 €** | 5.5 % | **10.3 %** | 11.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.00 € | **11.50 €** | 28.5 % | **34.3 %** | 11.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stropné osvetlenie prachotesné, G13, pre 2x ... | 21.00 € | **21.50 €** | 35.0 % | **38.2 %** | 21.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 35.50 € | **36.00 €** | 43.0 % | **45.0 %** | 35.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.00 € | **16.50 €** | 31.3 % | **35.4 %** | 16.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.00 € | **10.50 €** | 26.6 % | **33.0 %** | 10.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rotačná kefa pre Dyson V8, V10, V12, V15 | 26.00 € | **26.50 €** | 30.0 % | **32.5 %** | 26.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight spodný kĺbový nadstavec pre Dyson V7, V8, V1... | 13.00 € | **13.50 €** | 28.3 % | **33.2 %** | 13.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 16.00 € | **16.50 €** | 14.4 % | **18.0 %** | 16.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.00 € | **28.50 €** | 19.6 % | **21.8 %** | 28.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 24.00 € | **24.50 €** | 33.5 % | **36.2 %** | 24.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 15.00 € | **15.50 €** | 26.6 % | **30.9 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 21.00 € | **21.50 €** | 26.4 % | **29.4 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 25.00 € | **25.50 €** | 18.3 % | **20.7 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 25.00 € | **25.50 €** | 18.3 % | **20.7 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 37.50 € | **38.00 €** | 12.0 % | **13.5 %** | 38.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.00 € | **26.50 €** | 40.0 % | **42.7 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 22760-56/RH | 30.00 € | **30.50 €** | 10.2 % | **12.0 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal FW501815 | 135.00 € | **135.50 €** | 8.9 % | **9.3 %** | 135.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente G4 robotický vysavač | 117.00 € | **117.50 €** | 9.1 % | **9.6 %** | 117.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-G4 | 117.00 € | **117.50 €** | 9.1 % | **9.6 %** | 117.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-L6 | 152.00 € | **152.50 €** | 6.2 % | **6.6 %** | 152.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Icequeen-Wh | 19.00 € | **19.50 €** | 5.2 % | **8.0 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE SuChef | 83.00 € | **83.50 €** | 8.4 % | **9.1 %** | 83.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Grip Red | 78.50 € | **79.00 €** | 10.0 % | **10.7 %** | 78.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Grip White | 78.50 € | **79.00 €** | 10.0 % | **10.7 %** | 78.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 750 | 111.00 € | **111.50 €** | 6.0 % | **6.5 %** | 111.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.00 € | **19.50 €** | 5.3 % | **8.1 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Black | 71.00 € | **71.50 €** | 9.6 % | **10.4 %** | 71.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CDG1S514ESH | 238.00 € | **238.50 €** | 7.7 % | **8.0 %** | 238.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELECTROLUX 300 CIR60430CB | 373.00 € | **373.50 €** | 7.0 % | **7.1 %** | 373.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 96.50 € | **96.90 €** | 40.7 % | **41.3 %** | 96.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada BOYA BY-WM4 Pro-K6 | 108.50 € | **108.90 €** | 6.7 % | **7.1 %** | 108.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 76.50 € | **76.90 €** | 38.3 % | **39.1 %** | 76.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT161E | 108.50 € | **108.90 €** | 6.1 % | **6.5 %** | 108.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.50 € | **84.90 €** | 9.2 % | **9.7 %** | 84.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson MIC201IBT | 113.50 € | **113.90 €** | 11.6 % | **12.0 %** | 113.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 06A1 | 104.50 € | **104.90 €** | 7.2 % | **7.6 %** | 104.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool MBNA910X | 242.50 € | **242.90 €** | 8.0 % | **8.1 %** | 242.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, týždeň, 1 režim | 4.00 € | **4.40 €** | 23.7 % | **36.0 %** | 4.01 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.10 € | **5.50 €** | 43.5 % | **54.7 %** | 5.15 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.50 € | **10.90 €** | 35.3 % | **40.4 %** | 10.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 9.60 € | **10.00 €** | 33.2 % | **38.7 %** | 9.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Car Flame do auta čierny 100ml,... | 13.50 € | **13.90 €** | 11.3 % | **14.6 %** | 13.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 12.50 € | **12.90 €** | 30.3 % | **34.5 %** | 12.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 10.50 € | **10.90 €** | 7.2 % | **11.3 %** | 10.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 10.50 € | **10.90 €** | 6.7 % | **10.8 %** | 10.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 14.50 € | **14.90 €** | 42.4 % | **46.3 %** | 14.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.50 € | **14.90 €** | 45.2 % | **49.2 %** | 14.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacia dóza G21 680 ml, nerezová | 11.50 € | **11.90 €** | 15.0 % | **19.0 %** | 11.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 na pitie, 350 ml, nerezová | 11.50 € | **11.90 €** | 15.0 % | **19.0 %** | 11.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 na pitie, 350 ml, oceľovo šedá | 11.50 € | **11.90 €** | 15.0 % | **19.0 %** | 11.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Bloom tmavé drevo 200 ml | 13.50 € | **13.90 €** | 10.2 % | **13.5 %** | 13.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 12.50 € | **12.90 €** | 35.3 % | **39.7 %** | 12.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter digitálny V33 | 11.50 € | **11.90 €** | 42.1 % | **47.0 %** | 11.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 13.50 € | **13.90 €** | 32.2 % | **36.2 %** | 13.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 13.50 € | **13.90 €** | 38.6 % | **42.7 %** | 13.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 11.50 € | **11.90 €** | 5.5 % | **9.2 %** | 11.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.50 € | **10.90 €** | 6.7 % | **10.8 %** | 10.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rotačná kefa pre DysonV6, V7, V8, V10, V11 | 12.50 € | **12.90 €** | 27.0 % | **31.1 %** | 12.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 13.50 € | **13.90 €** | 33.8 % | **37.8 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.4 % | **14.2 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 2.90 € | **3.30 €** | 19.7 % | **36.2 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.20 € | **4.60 €** | 35.5 % | **48.4 %** | 4.24 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 4.70 € | **5.10 €** | 34.5 % | **46.0 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný dvojramenný konzolový držiak pre plo... | 30.50 € | **30.90 €** | 31.8 % | **33.5 %** | 30.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.50 € | **18.90 €** | 12.6 % | **15.0 %** | 18.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.50 € | **20.90 €** | 27.8 % | **30.3 %** | 20.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 31.50 € | **31.90 €** | 37.0 % | **38.7 %** | 31.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.50 € | **18.90 €** | 12.6 % | **15.0 %** | 18.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.50 € | **27.90 €** | 40.4 % | **42.5 %** | 27.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan svetlé drevo 350 ml | 17.50 € | **17.90 €** | 6.5 % | **8.9 %** | 17.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacia dóza G21 1900 ml, nerezová | 16.50 € | **16.90 €** | 15.4 % | **18.2 %** | 16.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 25.50 € | **25.90 €** | 32.5 % | **34.5 %** | 25.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vysielač BOYA BY-TX8 Pro na mikrofón | 36.50 € | **36.90 €** | 7.9 % | **9.1 %** | 36.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 33.50 € | **33.90 €** | 17.2 % | **18.6 %** | 33.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá FIXED Pods 2, bezdrôtové, TWS, biela | 24.50 € | **24.90 €** | 6.2 % | **7.9 %** | 24.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra žiarovka TP-Link Tapo L535E E27, 8,7W, 230V, c... | 23.50 € | **23.90 €** | 30.6 % | **32.8 %** | 23.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.50 € | **24.90 €** | 36.1 % | **38.3 %** | 24.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-A7H | 18.50 € | **18.90 €** | 7.7 % | **10.1 %** | 18.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 17.50 € | **17.90 €** | 33.6 % | **36.6 %** | 17.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 35.50 € | **35.90 €** | 31.9 % | **33.4 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Žehlička Nedis IRONCL250 naparovacia | 39.50 € | **39.90 €** | 5.3 % | **6.4 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 30.50 € | **30.90 €** | 11.8 % | **13.3 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.50 € | **18.90 €** | 10.1 % | **12.5 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.50 € | **16.90 €** | 35.8 % | **39.1 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Mano 3219 90020 | 55.50 € | **55.90 €** | 9.4 % | **10.2 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi 6 AX3000 Router (M30/E) | 37.50 € | **37.90 €** | 6.7 % | **7.8 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 615W Precise | 56.50 € | **56.90 €** | 8.0 % | **8.7 %** | 56.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 10/100 8-Port Switch (DES-108) | 20.50 € | **20.90 €** | 12.5 % | **14.7 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GameSir-T4n Lite wireless controller (white) | 20.50 € | **20.90 €** | 7.3 % | **9.4 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir T4n Nova Lite (ružový) | 20.50 € | **20.90 €** | 6.9 % | **9.0 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir T4n Nova Lite (zelený) | 20.50 € | **20.90 €** | 6.9 % | **9.0 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir T4n Nova Lite (žltý) | 20.50 € | **20.90 €** | 6.9 % | **9.0 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-L7 | 270.50 € | **270.90 €** | 7.9 % | **8.0 %** | 270.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GV520E15 | 285.50 € | **285.90 €** | 6.0 % | **6.2 %** | 285.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.60 € | **6.90 €** | 32.5 % | **38.5 %** | 6.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 3.70 € | **4.00 €** | 36.1 % | **47.2 %** | 3.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.20 € | **3.50 €** | 34.1 % | **46.7 %** | 3.21 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.30 € | **9.60 €** | 34.3 % | **38.6 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.30 € | **9.60 €** | 34.3 % | **38.6 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.10 € | **6.30 €** | 32.6 % | **37.0 %** | 6.11 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely | 2.30 € | **2.50 €** | 35.5 % | **47.3 %** | 2.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 4.80 € | **5.00 €** | 37.9 % | **43.6 %** | 4.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 7.50 € | **7.70 €** | 28.1 % | **31.5 %** | 7.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 7.00 € | **7.20 €** | 19.8 % | **23.2 %** | 7.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka, 16A, biela, vypínač | 1.80 € | **2.00 €** | 34.3 % | **49.2 %** | 1.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.10 € | **2.30 €** | 16.9 % | **28.1 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.40 € | **5.60 €** | 20.0 % | **24.4 %** | 5.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.80 € | **10.00 €** | 38.1 % | **40.9 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GV663B65 | 502.90 € | **503.00 €** | 6.4 % | **6.4 %** | 502.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 22.90 € | **23.00 €** | 32.6 % | **33.2 %** | 22.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 17.90 € | **18.00 €** | 44.7 % | **45.5 %** | 17.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.90 € | **21.00 €** | 37.7 % | **38.4 %** | 20.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom LECCE, ... | 21.90 € | **22.00 €** | 37.8 % | **38.4 %** | 21.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 16.90 € | **17.00 €** | 44.5 % | **45.3 %** | 16.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 16.90 € | **17.00 €** | 44.5 % | **45.3 %** | 16.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 29.90 € | **30.00 €** | 34.8 % | **35.3 %** | 29.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight projekčné hodiny s meteostanicou | 26.90 € | **27.00 €** | 41.7 % | **42.3 %** | 26.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 41.90 € | **42.00 €** | 17.3 % | **17.5 %** | 41.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 37.90 € | **38.00 €** | 9.8 % | **10.1 %** | 37.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 39.90 € | **40.00 €** | 37.9 % | **38.2 %** | 39.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 21.90 € | **22.00 €** | 24.6 % | **25.2 %** | 21.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-M2D všesměrový klopový, Lightning | 22.90 € | **23.00 €** | 9.6 % | **10.1 %** | 22.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prijímač BOYA BY-WM4RXD bezdrátový, iOS, dosah 60m | 45.90 € | **46.00 €** | 9.8 % | **10.1 %** | 45.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prijímač BOYA BY-WM4RXU bezdrátový, USB-C, Android, ... | 45.90 € | **46.00 €** | 9.8 % | **10.1 %** | 45.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor PRO, 20W, 1840lm, 5000K, IP65 | 8.70 € | **8.80 €** | 43.2 % | **44.8 %** | 8.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 49.90 € | **50.00 €** | 63.3 % | **63.6 %** | 49.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 21.90 € | **22.00 €** | 7.2 % | **7.7 %** | 21.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.20 € | **9.30 €** | 24.2 % | **25.6 %** | 9.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 39.90 € | **40.00 €** | 33.6 % | **33.9 %** | 39.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 17.90 € | **18.00 €** | 34.5 % | **35.3 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 30.90 € | **31.00 €** | 52.1 % | **52.6 %** | 31.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 38.90 € | **39.00 €** | 11.5 % | **11.8 %** | 39.16 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sada 3 LED vianočných darčekov, 48x LED, IP44 | 34.90 € | **35.00 €** | 12.8 % | **13.1 %** | 35.23 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Verto II 9,6 V 1423 90000 bílý/zlatý | 30.90 € | **31.00 €** | 12.1 % | **12.5 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT 51016 | 48.90 € | **49.00 €** | 7.0 % | **7.2 %** | 48.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.90 € | **41.00 €** | 7.9 % | **8.2 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.60 € | **5.70 €** | 35.1 % | **37.5 %** | 5.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR senzor pro E27 žiarovku, biely | 6.80 € | **6.90 €** | 44.0 % | **46.1 %** | 6.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.10 € | **6.20 €** | 34.4 % | **36.6 %** | 6.15 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.30 € | **7.40 €** | 43.7 % | **45.7 %** | 7.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.30 € | **7.40 €** | 43.7 % | **45.7 %** | 7.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR stropný senzor, interiérový, biely | 7.30 € | **7.40 €** | 43.7 % | **45.7 %** | 7.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka s viečkom, biela | 6.30 € | **6.40 €** | 34.1 % | **36.2 %** | 6.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.80 € | **5.90 €** | 9.2 % | **11.0 %** | 5.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 6.60 € | **6.70 €** | 32.5 % | **34.5 %** | 6.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.80 € | **6.90 €** | 43.2 % | **45.3 %** | 6.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.80 € | **6.90 €** | 43.2 % | **45.3 %** | 6.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 6.10 € | **6.20 €** | 13.5 % | **15.3 %** | 6.19 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.30 € | **5.40 €** | 34.7 % | **37.2 %** | 5.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.30 € | **4.40 €** | 52.0 % | **55.5 %** | 4.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight cestovný adaptér do Veľkej Británie, typ G | 4.80 € | **4.90 €** | 17.9 % | **20.4 %** | 4.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB A+C 20W fast charger | 6.30 € | **6.40 €** | 34.8 % | **36.9 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.30 € | **4.40 €** | 33.4 % | **36.5 %** | 4.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 2.40 € | **2.50 €** | 12.8 % | **17.5 %** | 2.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.40 € | **2.50 €** | 42.4 % | **48.4 %** | 2.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.60 € | **3.70 €** | 42.8 % | **46.7 %** | 3.65 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 2.00 € | **2.10 €** | 41.4 % | **48.5 %** | 2.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viazacie nylonové pásky, 3,6 x 150mm, čierna... | 1.00 € | **1.10 €** | 29.0 % | **42.0 %** | 1.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izolačná páska, 38mm x 0,13mm x 10m, čierna | 1.00 € | **1.10 €** | 29.0 % | **42.0 %** | 1.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 1.70 € | **1.80 €** | 31.6 % | **39.4 %** | 1.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.80 € | **3.90 €** | 29.3 % | **32.7 %** | 3.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací kábel pre LED pásy, 8mm zacvakáv... | 1.20 € | **1.30 €** | 39.4 % | **51.0 %** | 1.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 1.90 € | **2.00 €** | 50.0 % | **57.9 %** | 1.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.50 € | **1.60 €** | 35.5 % | **44.5 %** | 1.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 12W, E27, 6000K... | 1.40 € | **1.50 €** | 38.8 % | **48.7 %** | 1.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 2.90 € | **3.00 €** | 34.7 % | **39.4 %** | 2.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 1.90 € | **2.00 €** | 33.2 % | **40.2 %** | 1.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.90 € | **2.00 €** | 29.8 % | **36.6 %** | 1.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.50 € | **3.60 €** | 37.5 % | **41.4 %** | 3.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 3.60 € | **3.70 €** | 32.4 % | **36.1 %** | 3.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.10 € | **3.20 €** | 31.3 % | **35.5 %** | 3.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.30 € | **3.40 €** | 34.1 % | **38.2 %** | 3.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka, priama, IP40, čierna-oranžová | 3.10 € | **3.20 €** | 34.1 % | **38.4 %** | 3.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 3.80 € | **3.90 €** | 34.3 % | **37.9 %** | 3.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **2.20 €** | 33.4 % | **39.7 %** | 2.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.00 € | **1.10 €** | 42.6 % | **56.9 %** | 1.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.00 € | **1.10 €** | 42.6 % | **56.9 %** | 1.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 8W, E14, 3000K, 720lm | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.60 € | **2.70 €** | 32.9 % | **38.1 %** | 2.68 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.50 € | **3.60 €** | 33.6 % | **37.4 %** | 3.58 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.00 € | **3.10 €** | 12.4 % | **16.1 %** | 3.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.50 € | **3.60 €** | 37.5 % | **41.4 %** | 3.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.60 € | **3.70 €** | 41.4 % | **45.3 %** | 3.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kefka na čistenie filtra pre Dyson Airwrap | 3.90 € | **4.00 €** | 19.7 % | **22.7 %** | 3.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.40 € | **2.50 €** | 29.2 % | **34.6 %** | 2.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.40 € | **3.50 €** | 32.9 % | **36.8 %** | 3.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.60 € | **2.70 €** | 22.2 % | **26.9 %** | 2.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 0.90 € | **1.00 €** | 28.4 % | **42.6 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 0.90 € | **1.00 €** | 28.4 % | **42.6 %** | 0.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 0.90 € | **1.00 €** | 28.4 % | **42.6 %** | 0.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.80 € | **0.90 €** | 22.7 % | **38.1 %** | 0.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight SCART kábel, SCART konektor - SCART konektor... | 1.80 € | **1.90 €** | 30.7 % | **37.9 %** | 1.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.80 € | **1.90 €** | 29.5 % | **36.7 %** | 1.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight anténny rozbočovač hybridný priamy | 1.80 € | **1.90 €** | 28.4 % | **35.5 %** | 1.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.50 € | **8.60 €** | 35.0 % | **36.6 %** | 8.54 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 13.90 € | **14.00 €** | 35.5 % | **36.5 %** | 13.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 8.80 € | **8.90 €** | 44.2 % | **45.9 %** | 8.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 8.80 € | **8.90 €** | 44.2 % | **45.9 %** | 8.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2x 10A, biely-sivý | 3.20 € | **3.30 €** | 35.5 % | **39.7 %** | 3.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight magnetický USB-C/Lightning kábel, USB-C kone... | 5.20 € | **5.30 €** | 40.5 % | **43.2 %** | 5.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.90 € | **10.00 €** | 25.6 % | **26.8 %** | 9.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda strieborná, závesná, ča... | 7.50 € | **7.60 €** | 50.6 % | **52.6 %** | 7.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 11.90 € | **12.00 €** | 36.8 % | **38.0 %** | 11.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 6.70 € | **6.80 €** | 30.9 % | **32.9 %** | 6.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.10 € | **9.20 €** | 38.0 % | **39.5 %** | 9.16 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 12.90 € | **13.00 €** | 25.3 % | **26.3 %** | 12.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.50 € | **9.60 €** | 30.5 % | **31.8 %** | 9.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.50 € | **4.60 €** | 42.9 % | **46.1 %** | 4.57 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-M17R směrový, TRS, závit 1/4” | 10.90 € | **11.00 €** | 9.3 % | **10.3 %** | 10.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 14.90 € | **15.00 €** | 21.6 % | **22.4 %** | 14.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 5.40 € | **5.50 €** | 22.3 % | **24.6 %** | 5.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.40 € | **5.50 €** | 33.8 % | **36.3 %** | 5.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 10.90 € | **11.00 €** | 30.7 % | **31.9 %** | 10.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 4.70 € | **4.80 €** | 34.5 % | **37.4 %** | 4.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 13.90 € | **14.00 €** | 13.5 % | **14.3 %** | 13.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 7.40 € | **7.50 €** | 36.4 % | **38.3 %** | 7.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.00 € | **5.10 €** | 15.8 % | **18.1 %** | 5.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 7.90 € | **8.00 €** | 36.7 % | **38.4 %** | 7.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.40 € | **7.50 €** | 36.4 % | **38.3 %** | 7.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 7.90 € | **8.00 €** | 10.9 % | **12.3 %** | 7.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.20 € | **3.30 €** | 16.1 % | **19.8 %** | 3.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 3.70 € | **3.80 €** | 16.6 % | **19.7 %** | 3.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 3.70 € | **3.80 €** | 36.1 % | **39.8 %** | 3.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 8.40 € | **8.50 €** | 43.5 % | **45.2 %** | 8.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 6.50 € | **6.60 €** | 28.0 % | **29.9 %** | 6.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 7.20 € | **7.30 €** | 23.0 % | **24.7 %** | 7.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne nástenné svetlo, teplá a studená... | 8.00 € | **8.10 €** | 31.1 % | **32.8 %** | 8.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight filter pre Dyson V11, V15 | 6.90 € | **7.00 €** | 29.0 % | **30.8 %** | 6.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stĺpcový filter pre Dyson V12 | 5.90 € | **6.00 €** | 24.3 % | **26.4 %** | 5.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 6.90 € | **7.00 €** | 19.1 % | **20.8 %** | 6.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight držiak DVB-T a internetové antény na stenu, ... | 7.90 € | **8.00 €** | 27.7 % | **29.3 %** | 7.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.40 € | **9.50 €** | 21.1 % | **22.4 %** | 9.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.70 € | **4.80 €** | 16.9 % | **19.3 %** | 4.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 9.80 € | **9.90 €** | 29.1 % | **30.5 %** | 9.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 8.30 € | **8.40 €** | 52.7 % | **54.5 %** | 8.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.20 € | **4.30 €** | 8.7 % | **11.3 %** | 4.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.50 € | **4.60 €** | 30.7 % | **33.6 %** | 4.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.20 € | **4.30 €** | 9.1 % | **11.7 %** | 4.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.30 € | **9.40 €** | 30.1 % | **31.5 %** | 9.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.70 € | **4.80 €** | 20.5 % | **23.1 %** | 4.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 5.90 € | **6.00 €** | 23.3 % | **25.4 %** | 5.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight senzor pre meteostanice TE110 | 5.20 € | **5.30 €** | 18.1 % | **20.4 %** | 5.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.60 € | **8.70 €** | 5.6 % | **6.8 %** | 8.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Honey Day 160 ml | 10.90 € | **11.00 €** | 11.2 % | **12.2 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 6.90 € | **7.00 €** | 42.4 % | **44.4 %** | 7.03 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lokátor na bicykel, Find My kompatibilný | 14.90 € | **15.00 €** | 36.1 % | **37.0 %** | 15.16 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevená vianočná hviezda, závesná, časov... | 10.90 € | **11.00 €** | 33.7 % | **34.9 %** | 11.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 109.90 € | **110.00 €** | 19.9 % | **20.0 %** | 109.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odšťavovač G21 Chamberi horizontal | 158.90 € | **159.00 €** | 11.1 % | **11.2 %** | 159.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna smart WIFI meteostanica | 98.90 € | **99.00 €** | 20.0 % | **20.2 %** | 99.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový | 81.90 € | **82.00 €** | 6.9 % | **7.0 %** | 82.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 05A1 | 102.90 € | **103.00 €** | 7.8 % | **7.9 %** | 102.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BMGB25332BG | 176.90 € | **177.00 €** | 7.7 % | **7.7 %** | 176.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE F4142PW | 221.90 € | **222.00 €** | 8.0 % | **8.1 %** | 221.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (872)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Geneinno T1-Pro 150m 4K UHD podvodný dron | 2872.00 € | **2645.50 €** | 15.0 % | **5.9 %** | 2645.65 € | stávame sa najlacnejší |
| 3D skener Revopoint MetroY Ultra – edícia CCM | 2573.90 € | **2350.00 €** | 15.0 % | **5.0 %** | 1623.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Creality Sermoon S1 | 2561.00 € | **2374.50 €** | 15.0 % | **6.6 %** | 2374.69 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon P1 | 3158.50 € | **3020.50 €** | 15.0 % | **10.0 %** | 3020.71 € | stávame sa najlacnejší |
| Samsung Z Fold8 Ultra 5G 512GB Violet | 2640.90 € | **2520.50 €** | 10.0 % | **5.0 %** | 1775.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Lavender | 2416.50 € | **2306.90 €** | 10.0 % | **5.0 %** | 1503.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Cream | 2416.50 € | **2306.90 €** | 10.0 % | **5.0 %** | 1690.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HILG64220SW | 269.00 € | **164.00 €** | 72.3 % | **5.1 %** | 152.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE77S85H | 2185.90 € | **2086.50 €** | 10.0 % | **5.0 %** | 1339.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 FLEX EES42210IX | 669.00 € | **575.50 €** | 22.1 % | **5.0 %** | 417.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GS620C10S | 429.00 € | **343.00 €** | 33.8 % | **6.9 %** | 343.40 € | stávame sa najlacnejší |
| Electrolux EIV84550 | 766.99 € | **686.90 €** | 17.3 % | **5.1 %** | 525.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje F492PW | 239.00 € | **170.00 €** | 48.9 % | **5.9 %** | 170.18 € | stávame sa najlacnejší |
| Gorenje W2PNEI84A1SW | 439.00 € | **370.50 €** | 35.3 % | **14.2 %** | 370.74 € | stávame sa najlacnejší |
| Beko BM3WFU3941WBW | 439.00 € | **372.50 €** | 23.9 % | **5.1 %** | 359.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE FN617EES5 | 469.00 € | **404.50 €** | 24.0 % | **6.9 %** | 404.80 € | stávame sa najlacnejší |
| Samsung OLED QE65S85H | 1366.00 € | **1303.90 €** | 10.0 % | **5.0 %** | 880.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 FLEX EES42210L | 529.00 € | **474.50 €** | 17.1 % | **5.0 %** | 375.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 683.00 € | **632.00 €** | 15.0 % | **6.4 %** | 632.40 € | stávame sa najlacnejší |
| BEKO CTB 6250 W | 159.00 € | **109.90 €** | 52.0 % | **5.0 %** | 87.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CTB 6250 B | 159.00 € | **109.90 €** | 52.0 % | **5.0 %** | 90.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Micro RGB MRE55R85H | 1045.90 € | **998.50 €** | 10.0 % | **5.0 %** | 869.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 540.50 € | **493.50 €** | 15.0 % | **5.0 %** | 486.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D Tlačiareň Creality K1 MAX | 543.50 € | **497.00 €** | 15.0 % | **5.2 %** | 497.06 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 576.00 € | **529.90 €** | 15.0 % | **5.8 %** | 529.95 € | stávame sa najlacnejší |
| ELECTROLUX 300 EFC226R | 369.00 € | **325.90 €** | 19.0 % | **5.1 %** | 284.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 528.50 € | **486.00 €** | 15.0 % | **5.7 %** | 486.39 € | stávame sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM20 Helmet s ... | 597.50 € | **556.00 €** | 15.0 % | **7.0 %** | 556.46 € | stávame sa najlacnejší |
| Electrolux 700 SENSE Hob2Hood LFG516X | 399.00 € | **358.50 €** | 17.0 % | **5.1 %** | 250.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GV520E10 | 339.00 € | **298.90 €** | 19.2 % | **5.1 %** | 299.00 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 600.90 € | **560.90 €** | 15.0 % | **7.3 %** | 561.00 € | stávame sa najlacnejší |
| ETA Vital Air II 2302 90000, černá | 209.99 € | **170.00 €** | 34.1 % | **8.6 %** | 170.30 € | stávame sa najlacnejší |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 767.50 € | **728.90 €** | 15.0 % | **9.2 %** | 729.00 € | stávame sa najlacnejší |
| MOVA K30 akumulátorový mopový stojanový vysávač | 422.90 € | **386.50 €** | 15.0 % | **5.1 %** | 164.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EOF3H40TH | 339.00 € | **303.90 €** | 17.2 % | **5.1 %** | 249.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LIB60420CK | 299.00 € | **264.50 €** | 18.9 % | **5.2 %** | 219.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 402.90 € | **368.90 €** | 15.0 % | **5.3 %** | 369.00 € | stávame sa najlacnejší |
| Gorenje NRK6182PS4 | 359.00 € | **326.00 €** | 18.0 % | **7.1 %** | 326.22 € | stávame sa najlacnejší |
| Electrolux EOF3H50BK | 299.00 € | **267.90 €** | 17.3 % | **5.1 %** | 219.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux KGS64362XX | 269.00 € | **238.00 €** | 18.7 % | **5.0 %** | 188.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 401.00 € | **370.50 €** | 15.0 % | **6.2 %** | 370.83 € | stávame sa najlacnejší |
| Robot na čistenie bazénov Wybot L1 | 649.90 € | **619.90 €** | 15.0 % | **9.7 %** | 620.00 € | stávame sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 418.90 € | **388.90 €** | 15.0 % | **6.8 %** | 389.00 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 409.50 € | **379.90 €** | 15.0 % | **6.7 %** | 379.95 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 370.00 € | **341.00 €** | 15.0 % | **6.0 %** | 341.39 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-105-WH bílá barva | 370.00 € | **341.00 €** | 15.0 % | **6.0 %** | 341.39 € | stávame sa najlacnejší |
| GARRETT AT Max 8,5 x 11" INTL – detektor kovov | 757.50 € | **729.90 €** | 15.0 % | **10.8 %** | 730.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 363A | 599.00 € | **571.90 €** | 10.0 % | **5.0 %** | 561.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 685.90 € | **659.90 €** | 15.0 % | **10.7 %** | 660.00 € | stávame sa najlacnejší |
| ROWENTA RO 3985 EA | 99.90 € | **75.00 €** | 46.3 % | **9.8 %** | 75.38 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M1 | 544.50 € | **519.90 €** | 15.0 % | **9.8 %** | 520.00 € | stávame sa najlacnejší |
| Electrolux EOD3H40BX | 299.00 € | **274.90 €** | 14.2 % | **5.0 %** | 229.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LKR64022AX | 529.50 € | **505.50 €** | 10.0 % | **5.0 %** | 484.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant Moza Racing RS V2 RS25 | 426.00 € | **402.00 €** | 15.0 % | **8.5 %** | 402.29 € | stávame sa najlacnejší |
| Detektor kovov GARRETT Ace Apex 8,5x11+MS-3 | 503.50 € | **479.90 €** | 15.0 % | **9.6 %** | 480.00 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 273.50 € | **249.90 €** | 15.0 % | **5.1 %** | 248.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Neo QLED QE43QN70H | 504.50 € | **481.50 €** | 10.0 % | **5.0 %** | 475.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E7K1-6BP | 92.00 € | **69.00 €** | 47.6 % | **10.7 %** | 69.09 € | stávame sa najlacnejší |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 261.00 € | **238.50 €** | 15.0 % | **5.1 %** | 229.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baza na joystick Moza Racing AB9 Force Feedback | 532.90 € | **510.50 €** | 15.0 % | **10.2 %** | 510.75 € | stávame sa najlacnejší |
| ETA Presto 2094 90000, bílý | 114.99 € | **92.90 €** | 30.4 % | **5.4 %** | 86.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RP619EEW5 | 480.90 € | **458.90 €** | 10.1 % | **5.0 %** | 458.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LIR 60430 | 329.00 € | **307.50 €** | 12.4 % | **5.1 %** | 223.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 210G | 472.90 € | **451.50 €** | 10.0 % | **5.0 %** | 367.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 Pro+ 5G 8/256GB Brown | 463.90 € | **442.90 €** | 10.1 % | **5.1 %** | 318.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WMD44MB | 455.90 € | **435.00 €** | 10.1 % | **5.0 %** | 348.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHK 26373 XBR6EA AI AdaptiveCo | 554.90 € | **534.50 €** | 10.0 % | **6.0 %** | 534.70 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP Z22P PRO s 22-palcovým doty... | 318.50 € | **298.90 €** | 15.0 % | **7.9 %** | 299.00 € | stávame sa najlacnejší |
| LENOVO IDEA TAB PRO (ZAE40120CZ) | 432.00 € | **412.50 €** | 10.0 % | **5.0 %** | 345.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIM12300X | 229.00 € | **209.50 €** | 14.9 % | **5.1 %** | 191.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO M8 PRO 5G 12/512GB Silver | 429.90 € | **410.50 €** | 10.0 % | **5.0 %** | 295.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFN26540XP | 460.50 € | **441.90 €** | 10.1 % | **5.7 %** | 442.00 € | stávame sa najlacnejší |
| ELECTROLUX LHR3233CK | 199.00 € | **181.50 €** | 15.4 % | **5.3 %** | 128.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono M7 Pro 3D Printer | 447.00 € | **429.50 €** | 14.9 % | **10.4 %** | 429.67 € | stávame sa najlacnejší |
| Electrolux CFG526R | 377.90 € | **360.50 €** | 10.1 % | **5.0 %** | 263.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Mini LED UE43M70H | 379.50 € | **362.50 €** | 10.0 % | **5.1 %** | 359.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 61.00 € | **44.00 €** | 53.9 % | **11.0 %** | 44.50 € | stávame sa najlacnejší |
| Samsung UE55U8072F UHD | 362.50 € | **345.90 €** | 10.1 % | **5.1 %** | 341.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RK14CPS4 | 361.50 € | **345.00 €** | 10.0 % | **5.0 %** | 300.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 196.00 € | **179.50 €** | 15.0 % | **5.3 %** | 179.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant MOZA RACING CS Pro RS093 | 363.00 € | **346.50 €** | 14.9 % | **9.7 %** | 346.90 € | stávame sa najlacnejší |
| ETA Storio II 2043 90030 černá | 346.50 € | **330.90 €** | 10.0 % | **5.1 %** | 269.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 235 | 458.50 € | **442.90 €** | 10.1 % | **6.4 %** | 442.97 € | stávame sa najlacnejší |
| Waydoo submersible | 287.50 € | **271.90 €** | 15.0 % | **8.8 %** | 272.00 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 200.50 € | **184.90 €** | 15.1 % | **6.1 %** | 185.00 € | stávame sa najlacnejší |
| Whirlpool MWSC 833 SB | 330.00 € | **315.00 €** | 10.0 % | **5.0 %** | 269.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B5RCNA406HW | 540.50 € | **525.50 €** | 10.0 % | **6.9 %** | 525.90 € | stávame sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (strieborné) | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 129.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (zelené) | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 129.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB 11 8/256GB (ZAFR0272CZ) | 304.90 € | **290.90 €** | 10.1 % | **5.0 %** | 275.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LKR64022AW | 491.90 € | **478.00 €** | 10.1 % | **7.0 %** | 478.10 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-1400-24 UPS 1400W 24V čist... | 241.50 € | **228.00 €** | 15.1 % | **8.6 %** | 228.29 € | stávame sa najlacnejší |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 485.00 € | **471.50 €** | 10.0 % | **6.9 %** | 471.80 € | stávame sa najlacnejší |
| Uperfect UPi B7 10.1" 1920x1200 60Hz Portable Monitor | 151.90 € | **138.90 €** | 15.1 % | **5.3 %** | 138.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B5RCNA416HXBR | 455.50 € | **442.50 €** | 10.1 % | **6.9 %** | 442.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 48.90 € | **36.00 €** | 43.9 % | **6.0 %** | 36.50 € | stávame sa najlacnejší |
| Koleso MOZA RS068 FSR V2 (PC) | 678.50 € | **665.90 €** | 15.0 % | **12.9 %** | 666.00 € | stávame sa najlacnejší |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 711.50 € | **698.90 €** | 10.1 % | **8.1 %** | 699.00 € | stávame sa najlacnejší |
| BEKO HIC 64401 | 159.00 € | **146.50 €** | 14.0 % | **5.0 %** | 143.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight laserová vodováha 12 línií, 360 °, zelený laser | 153.50 € | **141.00 €** | 50.2 % | **38.0 %** | 141.50 € | stávame sa najlacnejší |
| Diagnostický skener pre motocykle ANCEL MT100 PRO | 145.00 € | **132.90 €** | 14.8 % | **5.2 %** | 99.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 0028 92020 | 79.99 € | **68.00 €** | 32.0 % | **12.2 %** | 68.13 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-700-12 UPS 700W 12V čistý ... | 135.50 € | **123.90 €** | 15.1 % | **5.3 %** | 116.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT černé | 164.90 € | **153.50 €** | 13.1 % | **5.2 %** | 139.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT stříbrné | 164.90 € | **153.50 €** | 13.1 % | **5.2 %** | 139.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 146.90 € | **135.50 €** | 15.1 % | **6.2 %** | 135.90 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A1 Urban (či... | 338.90 € | **327.90 €** | 15.1 % | **11.3 %** | 328.00 € | stávame sa najlacnejší |
| Shifter Moza Racing HGP RS039 | 154.50 € | **143.50 €** | 15.1 % | **6.9 %** | 143.90 € | stávame sa najlacnejší |
| Arzopa D156 (hnedý) 15,6" digitálny fotorámik | 125.90 € | **115.00 €** | 15.0 % | **5.0 %** | 61.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FoodSaver VS5910X | 281.90 € | **271.00 €** | 10.0 % | **5.7 %** | 271.39 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-1050-24 UPS 1050W 24V čist... | 158.50 € | **147.90 €** | 15.0 % | **7.3 %** | 147.92 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK KARMA PRO 10x32 | 170.50 € | **159.90 €** | 15.1 % | **7.9 %** | 160.00 € | stávame sa najlacnejší |
| Reproduktory Edifier R2750DB 2.0 (čierne) | 200.50 € | **189.90 €** | 14.9 % | **8.9 %** | 190.00 € | stávame sa najlacnejší |
| UNI-T UT521 tester uzemnenia | 140.00 € | **129.50 €** | 15.0 % | **6.4 %** | 129.67 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1715, 2x bezdrátový ... | 205.90 € | **195.50 €** | 15.0 % | **9.2 %** | 195.90 € | stávame sa najlacnejší |
| Beko BU1154HCN | 289.00 € | **278.90 €** | 13.2 % | **9.2 %** | 279.00 € | stávame sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **197.00 €** | 14.9 % | **9.4 %** | 197.15 € | stávame sa najlacnejší |
| Domo DO9079KR-PROMO | 294.50 € | **284.50 €** | 10.1 % | **6.3 %** | 284.83 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120P | 191.00 € | **181.00 €** | 15.0 % | **9.0 %** | 181.38 € | stávame sa najlacnejší |
| Maxxo VM Master | 247.50 € | **237.50 €** | 10.2 % | **5.7 %** | 237.90 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120 | 182.90 € | **173.00 €** | 15.1 % | **8.9 %** | 173.42 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A1 Pro (čier... | 328.50 € | **318.90 €** | 15.0 % | **11.6 %** | 319.00 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A1 Pro (stri... | 328.50 € | **318.90 €** | 15.0 % | **11.6 %** | 319.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 44GW | 205.50 € | **196.00 €** | 10.1 % | **5.0 %** | 192.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Orbitrek REBEL ACTIVE RBA-1011 | 144.50 € | **135.00 €** | 15.1 % | **7.5 %** | 135.05 € | stávame sa najlacnejší |
| Whirlpool W7F HP33 A | 347.00 € | **337.50 €** | 10.0 % | **7.0 %** | 337.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 67.50 € | **58.00 €** | 43.9 % | **23.7 %** | 58.50 € | stávame sa najlacnejší |
| Braun SI1009OR | 32.90 € | **23.50 €** | 54.8 % | **10.6 %** | 23.75 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-500-12 UPS 500W 12V čistý ... | 107.50 € | **98.50 €** | 14.8 % | **5.2 %** | 94.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 4/128GB šedá (65579) | 195.90 € | **187.00 €** | 10.1 % | **5.1 %** | 135.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Q7 BF Black | 187.90 € | **179.00 €** | 10.2 % | **5.0 %** | 177.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HDD 3.5" 6TB 256MB Seagate SKYHAWK pro kamerové syst... | 349.50 € | **340.90 €** | 15.0 % | **12.2 %** | 341.00 € | stávame sa najlacnejší |
| Ultima Poseidon D60 Soundbar | 178.00 € | **169.50 €** | 15.0 % | **9.5 %** | 169.90 € | stávame sa najlacnejší |
| Niceboy Charles i4 Plus Black | 177.90 € | **169.50 €** | 10.2 % | **5.0 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus White | 177.90 € | **169.50 €** | 10.2 % | **5.0 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 326.00 € | **317.90 €** | 14.9 % | **12.1 %** | 318.00 € | stávame sa najlacnejší |
| Maxxo VM Chamber Line 90 | 572.50 € | **564.50 €** | 10.0 % | **8.5 %** | 564.67 € | stávame sa najlacnejší |
| Blesk GODOX V100 TTL pre Canon | 315.00 € | **307.00 €** | 15.0 % | **12.1 %** | 307.34 € | stávame sa najlacnejší |
| Kuchyňský robot Ruhhy 25728 | 152.00 € | **144.00 €** | 14.9 % | **8.8 %** | 144.35 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 47.50 € | **39.50 €** | 38.3 % | **15.0 %** | 39.90 € | stávame sa najlacnejší |
| Tefal SV9201E0 | 196.90 € | **189.00 €** | 10.0 % | **5.6 %** | 189.10 € | stávame sa najlacnejší |
| Sušič vlasov MOVA Flip 10 | 192.90 € | **185.00 €** | 15.1 % | **10.4 %** | 185.38 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim BLACK | 39.90 € | **32.00 €** | 35.4 % | **8.6 %** | 32.32 € | stávame sa najlacnejší |
| Guzzanti GZ 48S | 165.50 € | **158.00 €** | 10.0 % | **5.1 %** | 143.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 116.90 € | **109.50 €** | 15.1 % | **7.8 %** | 109.90 € | stávame sa najlacnejší |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 158.90 € | **151.50 €** | 15.0 % | **9.7 %** | 151.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 52.00 € | **44.90 €** | 43.7 % | **24.0 %** | 45.00 € | stávame sa najlacnejší |
| Kávovar HiBREW H11 1450 W | 112.50 € | **105.50 €** | 15.0 % | **7.9 %** | 105.66 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (sivá) | 92.00 € | **85.00 €** | 14.8 % | **6.1 %** | 85.22 € | stávame sa najlacnejší |
| Zátěžová vesta HMS KOR20 20 kg | 87.50 € | **80.50 €** | 15.2 % | **6.0 %** | 80.90 € | stávame sa najlacnejší |
| Electrolux EB61C4DB | 149.90 € | **143.00 €** | 10.1 % | **5.0 %** | 127.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 31.50 € | **24.90 €** | 54.8 % | **22.4 %** | 25.00 € | stávame sa najlacnejší |
| Tesla GSM-LITE zesilovač/opakovač 900/1800 MHz - kom... | 191.50 € | **184.90 €** | 14.9 % | **11.0 %** | 184.91 € | stávame sa najlacnejší |
| Bezdrôtový adaptér do auta Ottocast OttoAibox E2 Car... | 145.50 € | **138.90 €** | 14.9 % | **9.7 %** | 139.00 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 210.50 € | **204.00 €** | 15.1 % | **11.6 %** | 204.39 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa A1 GAMUT 15,6" | 85.00 € | **78.50 €** | 15.0 % | **6.2 %** | 78.90 € | stávame sa najlacnejší |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 88.90 € | **82.50 €** | 15.1 % | **6.8 %** | 82.79 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect Z14-3S M140G12 14'' 2240x1... | 345.00 € | **338.90 €** | 14.9 % | **12.9 %** | 339.00 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 75.00 € | **68.90 €** | 14.8 % | **5.5 %** | 67.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teplomer a vlhkomer CO2 SwitchBot Meter Pro | 71.90 € | **65.90 €** | 15.0 % | **5.4 %** | 45.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV6812E0 | 56.90 € | **50.90 €** | 17.9 % | **5.5 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 73.50 € | **67.50 €** | 15.1 % | **5.7 %** | 66.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 84.50 € | **78.50 €** | 15.2 % | **7.0 %** | 78.78 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 130.50 € | **124.50 €** | 15.2 % | **9.9 %** | 124.83 € | stávame sa najlacnejší |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 86.50 € | **80.50 €** | 15.2 % | **7.2 %** | 80.90 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **25.00 €** | 59.7 % | **29.2 %** | 25.50 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 23.50 € | **17.90 €** | 38.1 % | **5.2 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 24.50 € | **18.90 €** | 53.3 % | **18.3 %** | 19.00 € | stávame sa najlacnejší |
| Redmi A7 Pro 4/64GB Black | 126.50 € | **120.90 €** | 10.1 % | **5.2 %** | 94.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tuner 3 White Přenosné rádio | 122.50 € | **116.90 €** | 10.2 % | **5.2 %** | 106.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko HNU61422B | 123.50 € | **117.90 €** | 10.3 % | **5.3 %** | 114.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice WS 9050 | 70.50 € | **64.90 €** | 15.1 % | **5.9 %** | 64.96 € | stávame sa najlacnejší |
| Evolveo StrongVision Solar 4G | 129.00 € | **123.50 €** | 10.0 % | **5.3 %** | 103.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič hrudníku DBX BUSHIDO ARC-1500 | 69.00 € | **63.50 €** | 14.8 % | **5.7 %** | 54.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 19.50 € | **14.00 €** | 46.8 % | **5.4 %** | 6.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 80.50 € | **75.00 €** | 15.3 % | **7.4 %** | 75.30 € | stávame sa najlacnejší |
| Dynamický mikrofón Maono PD200W (čierny) | 74.00 € | **68.50 €** | 15.0 % | **6.5 %** | 68.87 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **27.00 €** | 59.9 % | **32.9 %** | 27.50 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 81.50 € | **76.00 €** | 14.7 % | **7.0 %** | 76.50 € | stávame sa najlacnejší |
| KMP C81V / PGI-525BK, CLI-526C/M/Y | 23.99 € | **18.50 €** | 67.8 % | **29.4 %** | 18.59 € | stávame sa najlacnejší |
| Ultimea Aura A50 Pro Soundbar | 134.90 € | **129.50 €** | 15.0 % | **10.4 %** | 129.90 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 63.00 € | **57.90 €** | 14.9 % | **5.6 %** | 44.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight projekčné hodiny s rádiom a budíkom | 23.00 € | **17.90 €** | 49.1 % | **16.1 %** | 18.00 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 97.00 € | **91.90 €** | 15.0 % | **9.0 %** | 91.96 € | stávame sa najlacnejší |
| Tefal RK812110 | 109.50 € | **104.50 €** | 10.2 % | **5.1 %** | 104.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 80.50 € | **75.50 €** | 14.9 % | **7.7 %** | 75.66 € | stávame sa najlacnejší |
| Výrobník ledu TEESA EASY ICE TSA5009 | 79.50 € | **74.50 €** | 15.2 % | **8.0 %** | 74.72 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 804.50 € | **799.50 €** | 15.0 % | **14.3 %** | 799.79 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 80.50 € | **75.50 €** | 15.2 % | **8.0 %** | 75.89 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 144.50 € | **139.50 €** | 15.2 % | **11.2 %** | 139.89 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, hliní... | 32.50 € | **27.50 €** | 58.6 % | **34.2 %** | 27.90 € | stávame sa najlacnejší |
| Herný volant MOZA RACING KS Pro RS095 | 351.50 € | **346.50 €** | 14.7 % | **13.1 %** | 346.90 € | stávame sa najlacnejší |
| Webová kamera EMEET SmartCam S600L | 65.00 € | **60.00 €** | 14.7 % | **5.9 %** | 60.41 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 27.90 € | **23.00 €** | 59.0 % | **31.0 %** | 23.50 € | stávame sa najlacnejší |
| Solight PIR interiérový senzor, do krabičky od vypín... | 13.50 € | **8.70 €** | 121.3 % | **42.6 %** | 8.80 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, plast... | 30.50 € | **25.90 €** | 59.0 % | **35.0 %** | 26.00 € | stávame sa najlacnejší |
| Arzopa Portable Monitor Z1FC 16,1" | 119.50 € | **114.90 €** | 14.9 % | **10.4 %** | 114.93 € | stávame sa najlacnejší |
| Guzzanti GZ 90A1 | 132.50 € | **127.90 €** | 10.4 % | **6.5 %** | 127.95 € | stávame sa najlacnejší |
| G3ferrari G1020400 Pizza trouba, 2 min | 225.50 € | **220.90 €** | 10.2 % | **7.9 %** | 220.99 € | stávame sa najlacnejší |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 56.00 € | **51.50 €** | 14.8 % | **5.5 %** | 44.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 21.00 € | **16.50 €** | 37.4 % | **7.9 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LONGER RAY5 mini 3,5 W laserový gravír | 104.50 € | **100.00 €** | 14.9 % | **10.0 %** | 100.14 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 57.50 € | **53.00 €** | 14.8 % | **5.8 %** | 53.27 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1718 | 211.00 € | **206.50 €** | 14.9 % | **12.4 %** | 206.81 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.50 € | **48.00 €** | 15.5 % | **5.6 %** | 48.40 € | stávame sa najlacnejší |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 25.50 € | **21.00 €** | 59.8 % | **31.6 %** | 21.50 € | stávame sa najlacnejší |
| UMAX VisionBook 10T LTE | 94.90 € | **90.50 €** | 10.4 % | **5.3 %** | 84.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Coffio, pákový kávovar, nerez | 98.90 € | **94.50 €** | 10.3 % | **5.4 %** | 94.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AeroStar T300 | 59.90 € | **55.50 €** | 13.9 % | **5.5 %** | 55.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 216.00 € | **211.90 €** | 15.0 % | **12.8 %** | 212.00 € | stávame sa najlacnejší |
| MSI PRO MP273A | 88.50 € | **84.50 €** | 10.4 % | **5.4 %** | 77.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110 regulácia 230V cez I... | 19.00 € | **15.00 €** | 33.7 % | **5.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER ES60 reproduktor černý | 94.90 € | **90.90 €** | 10.1 % | **5.4 %** | 89.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO331L | 105.90 € | **101.90 €** | 9.4 % | **5.3 %** | 101.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 32.00 € | **28.00 €** | 20.0 % | **5.0 %** | 28.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 182.50 € | **178.50 €** | 15.0 % | **12.5 %** | 178.51 € | stávame sa najlacnejší |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.58 € | stávame sa najlacnejší |
| Armodd Candywatch 5 GPS Silver - 9154 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.58 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.90 € | **21.90 €** | 39.1 % | **17.6 %** | 22.00 € | stávame sa najlacnejší |
| Braun SI3042VI | 39.90 € | **35.90 €** | 26.8 % | **14.1 %** | 36.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 13.90 € | **9.90 €** | 48.1 % | **5.5 %** | 10.00 € | stávame sa najlacnejší |
| Tlakový stroj HiBREW H7B Cob | 572.50 € | **568.50 €** | 15.0 % | **14.2 %** | 568.67 € | stávame sa najlacnejší |
| Hrazda multifunkční REBEL ACTIVE RBA-2401 | 58.50 € | **54.50 €** | 14.7 % | **6.8 %** | 54.84 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 59.50 € | **55.50 €** | 15.0 % | **7.3 %** | 55.89 € | stávame sa najlacnejší |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 59.50 € | **55.50 €** | 14.7 % | **7.0 %** | 55.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 99.00 € | **95.00 €** | 14.7 % | **10.1 %** | 95.39 € | stávame sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 73.50 € | **69.50 €** | 14.8 % | **8.6 %** | 69.90 € | stávame sa najlacnejší |
| Moza Racing RS050 adaptér na volant + univerzálny HUB | 45.50 € | **41.50 €** | 15.5 % | **5.3 %** | 41.90 € | stávame sa najlacnejší |
| Solight LED núdzové osvetlenie, 4W, 200lm, IP65, LiF... | 35.00 € | **31.00 €** | 37.3 % | **21.6 %** | 31.50 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 18.90 € | **14.90 €** | 39.2 % | **9.7 %** | 15.00 € | stávame sa najlacnejší |
| Solight univerzálny zdroj pre netbooky a notebooky, ... | 17.90 € | **13.90 €** | 66.7 % | **29.4 %** | 14.00 € | stávame sa najlacnejší |
| Maxxo CD03 rádio | 137.90 € | **134.00 €** | 10.2 % | **7.1 %** | 134.10 € | stávame sa najlacnejší |
| Uni-T UT207B digitálny klešťový multimeter | 84.90 € | **81.00 €** | 15.0 % | **9.7 %** | 81.39 € | stávame sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 101.90 € | **98.00 €** | 10.3 % | **6.1 %** | 98.39 € | stávame sa najlacnejší |
| Solight digitálne hodiny s bluetooth synchronizáciou | 14.90 € | **11.00 €** | 51.8 % | **12.1 %** | 11.50 € | stávame sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Explorer | 55.90 € | **52.00 €** | 15.0 % | **6.9 %** | 52.10 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256A | 46.90 € | **43.00 €** | 15.3 % | **5.7 %** | 43.39 € | stávame sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 šedá | 50.90 € | **47.00 €** | 15.0 % | **6.1 %** | 47.49 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 54.90 € | **51.00 €** | 38.3 % | **28.4 %** | 51.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 22.90 € | **19.00 €** | 54.6 % | **28.3 %** | 19.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 22.90 € | **19.00 €** | 54.6 % | **28.3 %** | 19.50 € | stávame sa najlacnejší |
| Solight bezdrôtová nabíjačka, Qi2, MagSafe kompatibilná | 23.90 € | **20.00 €** | 54.2 % | **29.0 %** | 20.50 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 19.90 € | **16.00 €** | 43.0 % | **15.0 %** | 16.50 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0837 SOS FM/ AM, powerbanka 10... | 40.50 € | **36.90 €** | 15.6 % | **5.3 %** | 36.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 20.50 € | **16.90 €** | 29.7 % | **6.9 %** | 16.95 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 50W, 4... | 33.50 € | **29.90 €** | 38.0 % | **23.1 %** | 30.00 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 63.50 € | **59.90 €** | 14.7 % | **8.2 %** | 60.00 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 16.50 € | **12.90 €** | 35.0 % | **5.5 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 5 zásuviek, USB A+C 20W P... | 13.50 € | **9.90 €** | 48.7 % | **9.1 %** | 10.00 € | stávame sa najlacnejší |
| Televízny adaptér do auta MAX Ottocast CA361-C4 | 55.50 € | **52.00 €** | 15.2 % | **7.9 %** | 52.17 € | stávame sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 86.50 € | **83.00 €** | 15.2 % | **10.5 %** | 83.19 € | stávame sa najlacnejší |
| Turecký kávovar HiBREW CM1179_EU | 49.50 € | **46.00 €** | 15.3 % | **7.1 %** | 46.21 € | stávame sa najlacnejší |
| Blesk GODOX V1Pro TTL pre Nikon | 269.50 € | **266.00 €** | 15.0 % | **13.5 %** | 266.35 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 55.00 € | **51.50 €** | 14.9 % | **7.6 %** | 51.89 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 77.50 € | **74.00 €** | 15.4 % | **10.1 %** | 74.39 € | stávame sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 271.50 € | **268.00 €** | 10.2 % | **8.8 %** | 268.39 € | stávame sa najlacnejší |
| Mini stepper REBEL ACTIVE RBA-3229 | 44.00 € | **40.50 €** | 14.9 % | **5.7 %** | 40.89 € | stávame sa najlacnejší |
| ROWENTA RO 3923 EA | 78.90 € | **75.50 €** | 10.2 % | **5.4 %** | 66.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV6840E0 | 75.90 € | **72.50 €** | 10.2 % | **5.3 %** | 67.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 82.90 € | **79.50 €** | 15.2 % | **10.5 %** | 79.89 € | stávame sa najlacnejší |
| Ottocast CA400-S 4-in-1 Carplay/Android adapter (black) | 72.90 € | **69.50 €** | 15.2 % | **9.8 %** | 69.90 € | stávame sa najlacnejší |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 USB-C Mini | 196.90 € | **193.50 €** | 15.1 % | **13.1 %** | 193.90 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 56.90 € | **53.50 €** | 15.0 % | **8.1 %** | 53.61 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - white | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 228.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - black | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 239.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač vlhkosti dreva Uni-T UT377B | 40.00 € | **36.90 €** | 14.8 % | **5.9 %** | 31.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.00 € | **32.90 €** | 15.0 % | **5.1 %** | 32.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stropné svietidlo Yeelight C2201C300 | 45.00 € | **41.90 €** | 14.5 % | **6.6 %** | 41.96 € | stávame sa najlacnejší |
| Cycplus AS2 mini electric pump | 45.00 € | **41.90 €** | 14.9 % | **7.0 %** | 41.99 € | stávame sa najlacnejší |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 60.00 € | **56.90 €** | 39.6 % | **32.4 %** | 57.00 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Travel 12x50 | 72.00 € | **68.90 €** | 14.7 % | **9.8 %** | 69.00 € | stávame sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 72.00 € | **68.90 €** | 14.7 % | **9.8 %** | 69.00 € | stávame sa najlacnejší |
| Inteligentná zásuvka IMOU CE2P, sada 4 ks | 36.90 € | **33.90 €** | 14.9 % | **5.6 %** | 9.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| USB WiFi adaptér duální VU+ 2,4/5GHz/600Mbps s ANTÉN... | 35.50 € | **32.50 €** | 15.8 % | **6.0 %** | 26.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová vesta HMS KTO05 | 35.50 € | **32.50 €** | 15.1 % | **5.4 %** | 27.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 37.00 € | **34.00 €** | 14.6 % | **5.3 %** | 29.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.00 € | **33.00 €** | 14.6 % | **5.0 %** | 32.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Štúdiové slúchadlá Maono MH700 (čierne) | 34.90 € | **31.90 €** | 15.2 % | **5.3 %** | 31.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 37.50 € | **34.50 €** | 15.6 % | **6.4 %** | 34.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Akumulátor pre DJI Avata 2 | 121.00 € | **118.00 €** | 14.9 % | **12.1 %** | 118.01 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 121.00 € | **118.00 €** | 14.9 % | **12.0 %** | 118.04 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 92.50 € | **89.50 €** | 15.1 % | **11.4 %** | 89.54 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 92.50 € | **89.50 €** | 15.1 % | **11.4 %** | 89.54 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 287.90 € | **284.90 €** | 15.0 % | **13.8 %** | 284.96 € | stávame sa najlacnejší |
| Solight prídavná zásuvka pre GSM zásuvku | 38.90 € | **35.90 €** | 46.1 % | **34.8 %** | 36.00 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 24.00 € | **21.00 €** | 33.4 % | **16.7 %** | 21.22 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 17.00 € | **14.00 €** | 40.2 % | **15.4 %** | 14.23 € | stávame sa najlacnejší |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 48.00 € | **45.00 €** | 14.5 % | **7.4 %** | 45.25 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 39.00 € | **36.00 €** | 14.9 % | **6.1 %** | 36.29 € | stávame sa najlacnejší |
| EDIFIER T5s subwoofer černý | 129.00 € | **126.00 €** | 10.0 % | **7.4 %** | 126.32 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 41.00 € | **38.00 €** | 14.7 % | **6.3 %** | 38.36 € | stávame sa najlacnejší |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 104.50 € | **101.50 €** | 15.1 % | **11.8 %** | 101.88 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 137.50 € | **134.50 €** | 15.0 % | **12.5 %** | 134.89 € | stávame sa najlacnejší |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 62.50 € | **59.50 €** | 15.5 % | **9.9 %** | 59.89 € | stávame sa najlacnejší |
| Skříň kempingová Cattara 13480 MODICA | 65.50 € | **62.50 €** | 15.1 % | **9.8 %** | 62.90 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 87.00 € | **84.00 €** | 14.8 % | **10.9 %** | 84.44 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-oranžová | 61.00 € | **58.00 €** | 14.8 % | **9.1 %** | 58.50 € | stávame sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 163.90 € | **161.00 €** | 15.0 % | **12.9 %** | 161.25 € | stávame sa najlacnejší |
| Clutch Pedal Moza Racing CRP2 RS067 | 105.90 € | **103.00 €** | 15.1 % | **12.0 %** | 103.33 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 127.90 € | **125.00 €** | 10.2 % | **7.7 %** | 125.49 € | stávame sa najlacnejší |
| Solight cestovný adaptér s USB do Spojených štátov, ... | 12.90 € | **10.00 €** | 61.4 % | **25.1 %** | 10.50 € | stávame sa najlacnejší |
| Digitálny merací prístroj Uni-T UT220 | 47.90 € | **45.00 €** | 15.0 % | **8.0 %** | 45.39 € | stávame sa najlacnejší |
| Dálkový ovladač 4-kan. k pohonu vrat IN SL-600, 1000... | 28.50 € | **25.90 €** | 15.7 % | **5.1 %** | 19.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera autodráha GO Škoda Rally | 59.50 € | **56.90 €** | 10.5 % | **5.7 %** | 53.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NB614.DG | 55.50 € | **52.90 €** | 10.5 % | **5.3 %** | 52.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Vědro 55076 PROFI s ná SOE55076 | 51.50 € | **48.90 €** | 10.6 % | **5.0 %** | 48.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-9   9 kg (150x20... | 34.50 € | **31.90 €** | 14.5 % | **5.9 %** | 31.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšie osvetlenie so senzorom Siena, ... | 21.50 € | **18.90 €** | 38.5 % | **21.8 %** | 19.00 € | stávame sa najlacnejší |
| EDIFIER ES20 reproduktor béžový | 51.50 € | **48.90 €** | 11.0 % | **5.4 %** | 49.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 22.50 € | **19.90 €** | 55.2 % | **37.2 %** | 20.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100(1-pack) regulácia 23... | 13.50 € | **10.90 €** | 31.3 % | **6.0 %** | 8.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 18.50 € | **15.90 €** | 38.9 % | **19.4 %** | 15.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, sivé, 20W, 1... | 14.50 € | **11.90 €** | 37.7 % | **13.0 %** | 12.00 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, plast, 2 zásuvky, hran... | 14.50 € | **11.90 €** | 58.4 % | **30.0 %** | 12.00 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 12.50 € | **9.90 €** | 47.9 % | **17.2 %** | 10.00 € | stávame sa najlacnejší |
| MERACH spinningové kolo MR-S26B2-EU (čierne) | 177.50 € | **174.90 €** | 14.9 % | **13.2 %** | 175.00 € | stávame sa najlacnejší |
| Škrabadlo pre mačky Petkit | 30.50 € | **28.00 €** | 14.4 % | **5.0 %** | 26.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-8   8 kg (150x20... | 34.00 € | **31.50 €** | 14.8 % | **6.4 %** | 30.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 34.00 € | **31.50 €** | 14.8 % | **6.4 %** | 31.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 12.00 € | **9.50 €** | 49.2 % | **18.1 %** | 9.60 € | stávame sa najlacnejší |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 33.50 € | **31.00 €** | 14.5 % | **5.9 %** | 31.29 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 32.50 € | **30.00 €** | 15.5 % | **6.6 %** | 30.36 € | stávame sa najlacnejší |
| Rowenta RH1833E0 | 149.50 € | **147.00 €** | 10.3 % | **8.4 %** | 147.38 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierna oceľ) | 30.50 € | **28.00 €** | 14.6 % | **5.2 %** | 28.38 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900WD (biela) | 50.00 € | **47.50 €** | 14.6 % | **8.9 %** | 47.88 € | stávame sa najlacnejší |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 34.50 € | **32.00 €** | 15.1 % | **6.8 %** | 32.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 71.00 € | **68.50 €** | 14.6 % | **10.6 %** | 68.89 € | stávame sa najlacnejší |
| Uni-T UT206B digitálny klešťový multimeter | 69.50 € | **67.00 €** | 14.8 % | **10.6 %** | 67.39 € | stávame sa najlacnejší |
| Uni-T UT210C Mini digitálny klešťový multimeter | 40.50 € | **38.00 €** | 15.5 % | **8.4 %** | 38.39 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 110.50 € | **108.00 €** | 14.9 % | **12.3 %** | 108.39 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 35.50 € | **33.00 €** | 15.6 % | **7.5 %** | 33.39 € | stávame sa najlacnejší |
| Uni-T UT216A digitálny klešťový multimeter | 54.50 € | **52.00 €** | 15.4 % | **10.1 %** | 52.39 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 194.50 € | **192.00 €** | 15.0 % | **13.5 %** | 192.39 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 94.00 € | **91.50 €** | 14.9 % | **11.8 %** | 91.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 62.50 € | **60.00 €** | 14.9 % | **10.3 %** | 60.39 € | stávame sa najlacnejší |
| Uni-T UT320T 2-v-1 teplomer | 35.50 € | **33.00 €** | 15.3 % | **7.2 %** | 33.39 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT331+ | 42.50 € | **40.00 €** | 15.7 % | **8.9 %** | 40.39 € | stávame sa najlacnejší |
| Uni-T UT362H Anemometer | 170.00 € | **167.50 €** | 14.9 % | **13.2 %** | 167.89 € | stávame sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 104.50 € | **102.00 €** | 15.1 % | **12.3 %** | 102.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 119.00 € | **116.50 €** | 14.9 % | **12.5 %** | 116.89 € | stávame sa najlacnejší |
| Robotický čistič okien MOVA N1 (biely) | 287.50 € | **285.00 €** | 14.9 % | **13.9 %** | 285.39 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 34.00 € | **31.50 €** | 47.3 % | **36.4 %** | 31.90 € | stávame sa najlacnejší |
| AMIKO 9265+ DVB-S2/T2/C kombo přijímač 4K - SLEVA NA... | 66.00 € | **63.50 €** | 15.0 % | **10.6 %** | 63.90 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 17A, 200W, IP20 | 24.50 € | **22.00 €** | 55.4 % | **39.5 %** | 22.50 € | stávame sa najlacnejší |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 15.50 € | **13.00 €** | 49.3 % | **25.2 %** | 13.50 € | stávame sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 15.99 € | **13.50 €** | 35.6 % | **14.4 %** | 13.85 € | stávame sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 72.90 € | **70.50 €** | 15.0 % | **11.2 %** | 70.89 € | stávame sa najlacnejší |
| Tester batérií Uni-T UT675A | 86.90 € | **84.50 €** | 15.0 % | **11.8 %** | 84.89 € | stávame sa najlacnejší |
| Recenzia zariadenia Uni-T RCD UT582+ | 104.90 € | **102.50 €** | 15.1 % | **12.5 %** | 102.89 € | stávame sa najlacnejší |
| Merač LCR Uni-T UT612 | 137.90 € | **135.50 €** | 15.1 % | **13.1 %** | 135.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600 | 73.90 € | **71.50 €** | 14.9 % | **11.2 %** | 71.89 € | stávame sa najlacnejší |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 10.50 € | **8.10 €** | 60.5 % | **23.8 %** | 8.20 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB, 3m, sada s 12V adapté... | 13.90 € | **11.50 €** | 41.3 % | **16.9 %** | 11.63 € | stávame sa najlacnejší |
| Hasicí přístroj práškový 2 kg ABC | 29.90 € | **27.50 €** | 15.8 % | **6.5 %** | 22.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Clean Twist M Ergo Mobile | 46.90 € | **44.50 €** | 10.7 % | **5.0 %** | 39.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 28.90 € | **26.50 €** | 15.7 % | **6.1 %** | 22.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo HDO, aktivní venkovní anténa | 54.90 € | **52.50 €** | 10.8 % | **5.9 %** | 51.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (biele) | 25.90 € | **23.50 €** | 15.9 % | **5.1 %** | 22.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Stone šedé dřevo 500ml SIXTOL | 32.90 € | **30.50 €** | 15.6 % | **7.2 %** | 30.60 € | stávame sa najlacnejší |
| Uni-T UT202BT Inteligentný svorkový multimeter | 40.90 € | **38.50 €** | 15.4 % | **8.6 %** | 38.89 € | stávame sa najlacnejší |
| Solight účastnícka zásuvka koncová so SAT, útlm: 3dB | 7.10 € | **4.80 €** | 55.6 % | **5.2 %** | 4.90 € | stávame sa najlacnejší |
| CANON PIXMA TS3752i Blue | 48.00 € | **45.90 €** | 10.2 % | **5.4 %** | 38.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3751i White | 48.00 € | **45.90 €** | 10.2 % | **5.4 %** | 39.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 26.00 € | **23.90 €** | 54.3 % | **41.8 %** | 24.00 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 16.00 € | **13.90 €** | 53.0 % | **33.0 %** | 14.00 € | stávame sa najlacnejší |
| CrockPot CSC113X Pomalý hrnec 3,5 l | 75.00 € | **72.90 €** | 10.1 % | **7.0 %** | 72.93 € | stávame sa najlacnejší |
| Torras Ostand Spin Case for iPhone 16 Plus (Black) | 26.50 € | **24.50 €** | 14.9 % | **6.2 %** | 13.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff S60ZBTPF Inteligentná zásuvka ZigBee (2ks) | 26.50 € | **24.50 €** | 14.6 % | **6.0 %** | 13.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Sada nádobí SWING B 4ks | 36.50 € | **34.50 €** | 11.3 % | **5.2 %** | 29.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C320WS | 45.90 € | **43.90 €** | 10.3 % | **5.5 %** | 42.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0835 SOS FM/ AM, Bluetooth, po... | 23.50 € | **21.50 €** | 16.2 % | **6.3 %** | 20.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 24.50 € | **22.50 €** | 15.5 % | **6.1 %** | 22.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 34.50 € | **32.50 €** | 14.6 % | **8.0 %** | 32.51 € | stávame sa najlacnejší |
| Russell Hobbs 27011-56 | 46.90 € | **44.90 €** | 10.3 % | **5.6 %** | 44.99 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 28.50 € | **26.50 €** | 14.8 % | **6.8 %** | 26.59 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 33.90 € | **31.90 €** | 39.0 % | **30.8 %** | 32.00 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, biela | 24.90 € | **22.90 €** | 59.2 % | **46.4 %** | 23.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.90 € | **8.90 €** | 45.5 % | **18.8 %** | 9.00 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 11.50 € | **9.50 €** | 57.1 % | **29.8 %** | 9.60 € | stávame sa najlacnejší |
| Beko Mezikus PCSKM | 59.90 € | **57.90 €** | 10.3 % | **6.6 %** | 58.00 € | stávame sa najlacnejší |
| Beko Mezikus PCSKW | 59.90 € | **57.90 €** | 10.3 % | **6.6 %** | 58.00 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.50 €** | 14.7 % | **11.0 %** | 59.63 € | stávame sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 129.00 € | **127.00 €** | 14.9 % | **13.1 %** | 127.13 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Dvojkanálová nabíjačka lítiových batérií SkyRC PC108... | 226.50 € | **224.50 €** | 15.0 % | **14.0 %** | 224.66 € | stávame sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 24.50 € | **22.50 €** | 14.5 % | **5.1 %** | 22.75 € | stávame sa najlacnejší |
| GUZZANTI GZ 101 | 160.50 € | **158.50 €** | 10.1 % | **8.7 %** | 158.80 € | stávame sa najlacnejší |
| Herný pedál PXN Vector X Clutch | 105.50 € | **103.50 €** | 15.0 % | **12.8 %** | 103.83 € | stávame sa najlacnejší |
| Inteligentné hodinky BlitzWolf BW-AT5 (oranžové) | 34.50 € | **32.50 €** | 15.3 % | **8.6 %** | 32.85 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierne) | 30.00 € | **28.00 €** | 14.3 % | **6.7 %** | 28.38 € | stávame sa najlacnejší |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 125.50 € | **123.50 €** | 15.2 % | **13.3 %** | 123.89 € | stávame sa najlacnejší |
| Solight budík s Qi bezdrôtovú nabíjačkou | 17.50 € | **15.50 €** | 52.0 % | **34.6 %** | 15.90 € | stávame sa najlacnejší |
| Solight wifi Smart LED svetelný pás, RGB, 5m, sada s... | 29.00 € | **27.00 €** | 47.5 % | **37.4 %** | 27.50 € | stávame sa najlacnejší |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 12.00 € | **10.00 €** | 47.4 % | **22.8 %** | 10.50 € | stávame sa najlacnejší |
| Solight axiálny ventilátor s časovačom | 18.00 € | **16.00 €** | 50.1 % | **33.4 %** | 16.50 € | stávame sa najlacnejší |
| Solight digitální hodiny s bluetooth synchronizáciou | 16.00 € | **14.00 €** | 49.9 % | **31.1 %** | 14.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 22.00 € | **20.00 €** | 54.3 % | **40.3 %** | 20.50 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE81WIFI | 6.60 € | **4.70 €** | 49.9 % | **6.7 %** | 4.80 € | stávame sa najlacnejší |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 52.90 € | **51.00 €** | 15.4 % | **11.2 %** | 51.08 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (zlaté) | 29.90 € | **28.00 €** | 15.3 % | **8.0 %** | 28.38 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 41.90 € | **40.00 €** | 15.3 % | **10.1 %** | 40.46 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 41.90 € | **40.00 €** | 15.3 % | **10.1 %** | 40.46 € | stávame sa najlacnejší |
| TP-LINK Tapo C110 Home Sec. Wi-Fi Camera | 32.50 € | **30.90 €** | 10.7 % | **5.3 %** | 21.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Držák fólií (rolí) PARAT ROYAL | 31.50 € | **29.90 €** | 10.9 % | **5.2 %** | 27.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus G1 bicycle computer | 21.50 € | **19.90 €** | 15.0 % | **6.4 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Magnetické filtre Freewell ND NEO 2 „Standard Day“ –... | 28.50 € | **26.90 €** | 15.6 % | **9.1 %** | 26.92 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7400 | 33.50 € | **31.90 €** | 14.9 % | **9.4 %** | 31.96 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 25.50 € | **23.90 €** | 37.8 % | **29.1 %** | 24.00 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 23.50 € | **21.90 €** | 39.1 % | **29.6 %** | 22.00 € | stávame sa najlacnejší |
| Solight lokátor kľúčenka, Find My kompatibilný | 22.50 € | **20.90 €** | 43.5 % | **33.3 %** | 21.00 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 5.50 € | **3.90 €** | 53.1 % | **8.6 %** | 4.00 € | stávame sa najlacnejší |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 15.50 € | **13.90 €** | 55.0 % | **39.0 %** | 14.00 € | stávame sa najlacnejší |
| Nabíjecí bezdrátová podložka pro telefony Compass | 17.50 € | **15.90 €** | 16.6 % | **6.0 %** | 16.00 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0833 analogové přenosné solární | 17.50 € | **15.90 €** | 15.8 % | **5.2 %** | 16.00 € | stávame sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 124.50 € | **122.90 €** | 15.1 % | **13.6 %** | 122.91 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 209.50 € | **207.90 €** | 15.0 % | **14.1 %** | 207.93 € | stávame sa najlacnejší |
| Lamp LED Neewer TL120C RGB | 205.50 € | **203.90 €** | 15.0 % | **14.1 %** | 203.94 € | stávame sa najlacnejší |
| Inteligentný digitálny multimeter UNI-T UT123D | 22.00 € | **20.50 €** | 15.2 % | **7.3 %** | 19.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UV filter Freewell pre DJI Mini 5 Pro | 19.50 € | **18.00 €** | 15.6 % | **6.7 %** | 18.04 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 17 Pro Max so 17 mm držiakom | 74.00 € | **72.50 €** | 14.7 % | **12.4 %** | 72.54 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 28.00 € | **26.50 €** | 15.2 % | **9.0 %** | 26.56 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 265 s teploměrem | 18.50 € | **17.00 €** | 16.5 % | **7.1 %** | 17.16 € | stávame sa najlacnejší |
| D-LINK WiFi AX1500 Range Extender (E15) | 42.50 € | **41.00 €** | 11.3 % | **7.4 %** | 41.20 € | stávame sa najlacnejší |
| Koloběžka Spidoo Kruzzel 25628 růžová | 47.50 € | **46.00 €** | 14.8 % | **11.2 %** | 46.20 € | stávame sa najlacnejší |
| Vlákno HP ASA Creality (čierne) | 23.50 € | **22.00 €** | 14.6 % | **7.3 %** | 22.27 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 121.00 € | **119.50 €** | 14.9 % | **13.5 %** | 119.79 € | stávame sa najlacnejší |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 23.50 € | **22.00 €** | 14.8 % | **7.5 %** | 22.33 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7160 | 23.50 € | **22.00 €** | 14.7 % | **7.4 %** | 22.36 € | stávame sa najlacnejší |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 26.00 € | **24.50 €** | 15.1 % | **8.4 %** | 24.88 € | stávame sa najlacnejší |
| Digitálny klešťový merač Uni-T UT202R | 25.50 € | **24.00 €** | 15.5 % | **8.7 %** | 24.39 € | stávame sa najlacnejší |
| Merač hladiny hluku Uni-T UT35 | 123.50 € | **122.00 €** | 15.2 % | **13.8 %** | 122.39 € | stávame sa najlacnejší |
| Tefal BL16GE30 | 58.50 € | **57.00 €** | 10.3 % | **7.5 %** | 57.39 € | stávame sa najlacnejší |
| DOMO DO42102SV | 99.50 € | **98.00 €** | 10.1 % | **8.5 %** | 98.39 € | stávame sa najlacnejší |
| PRIMO PR406IM | 128.50 € | **127.00 €** | 10.2 % | **8.9 %** | 127.39 € | stávame sa najlacnejší |
| Zdroj Alcad AL-105 (2xvýstup, 12V/100mA) napájecí | 15.50 € | **14.00 €** | 16.7 % | **5.4 %** | 14.39 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 108.50 € | **107.00 €** | 14.9 % | **13.3 %** | 107.39 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 25.00 € | **23.50 €** | 38.0 % | **29.7 %** | 23.90 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 64.00 € | **62.50 €** | 35.8 % | **32.6 %** | 62.90 € | stávame sa najlacnejší |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 52.00 € | **50.50 €** | 15.0 % | **11.7 %** | 50.90 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 120.50 € | **119.00 €** | 14.8 % | **13.4 %** | 119.48 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 27.50 € | **26.00 €** | 39.3 % | **31.7 %** | 26.50 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 20.50 € | **19.00 €** | 48.5 % | **37.7 %** | 19.50 € | stávame sa najlacnejší |
| Solight detektor oxidu uhoľnatého a horľavých plynov | 15.50 € | **14.00 €** | 20.6 % | **8.9 %** | 14.50 € | stávame sa najlacnejší |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 34.50 € | **33.00 €** | 55.5 % | **48.7 %** | 33.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 33.50 € | **32.00 €** | 14.6 % | **9.5 %** | 32.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, USB A+C, 2 ... | 21.50 € | **20.00 €** | 43.3 % | **33.3 %** | 20.50 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 17.50 € | **16.00 €** | 44.6 % | **32.2 %** | 16.50 € | stávame sa najlacnejší |
| ETA 5180 91010 sklo | 13.99 € | **12.50 €** | 27.7 % | **14.1 %** | 12.60 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 STD | 109.90 € | **108.50 €** | 15.0 % | **13.6 %** | 108.73 € | stávame sa najlacnejší |
| Tefal FW402HE0 | 130.90 € | **129.50 €** | 10.3 % | **9.1 %** | 129.90 € | stávame sa najlacnejší |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 5.10 € | **3.70 €** | 54.1 % | **11.8 %** | 3.80 € | stávame sa najlacnejší |
| Sluchátka NEDIS HPWD1201BK Hi-Fi televizní s 6 m kab... | 18.90 € | **17.50 €** | 15.3 % | **6.7 %** | 12.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Onyx BS2400 | 30.90 € | **29.50 €** | 10.1 % | **5.1 %** | 25.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.B | 34.90 € | **33.50 €** | 10.3 % | **5.9 %** | 29.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.NBL | 34.90 € | **33.50 €** | 10.3 % | **5.9 %** | 31.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet Portable NBP003LBL | 34.90 € | **33.50 €** | 10.3 % | **5.9 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **59.50 €** | 15.3 % | **12.7 %** | 59.63 € | stávame sa najlacnejší |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 54.90 € | **53.50 €** | 15.2 % | **12.2 %** | 53.68 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 25.90 € | **24.50 €** | 15.4 % | **9.1 %** | 24.78 € | stávame sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 55.90 € | **54.50 €** | 15.4 % | **12.5 %** | 54.89 € | stávame sa najlacnejší |
| Ariete ART 808/05 | 60.90 € | **59.50 €** | 10.7 % | **8.1 %** | 59.89 € | stávame sa najlacnejší |
| ALI MiTag set 3ks Google Find My APD006 | 37.90 € | **36.50 €** | 11.1 % | **7.0 %** | 36.89 € | stávame sa najlacnejší |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 26.90 € | **25.50 €** | 15.5 % | **9.5 %** | 25.89 € | stávame sa najlacnejší |
| Solight závesné príslušenstvo pre LED panely 60x60, ... | 5.00 € | **3.80 €** | 39.2 % | **5.8 %** | 3.90 € | stávame sa najlacnejší |
| Solight vypínač do vlhka, jednopólový, biely | 7.30 € | **6.10 €** | 59.1 % | **33.0 %** | 6.20 € | stávame sa najlacnejší |
| MAXXO DH 919 Extra Tea | 13.69 € | **12.50 €** | 36.6 % | **24.7 %** | 12.57 € | stávame sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 24.00 € | **22.90 €** | 14.6 % | **9.4 %** | 22.98 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 18.00 € | **16.90 €** | 44.9 % | **36.0 %** | 17.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **34.90 €** | 38.3 % | **34.0 %** | 35.00 € | stávame sa najlacnejší |
| Solight detektor dymu s WIFI pripojením | 18.00 € | **16.90 €** | 41.5 % | **32.9 %** | 17.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 26.00 € | **24.90 €** | 42.8 % | **36.8 %** | 25.00 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 16.00 € | **14.90 €** | 38.4 % | **28.9 %** | 15.00 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Indie, typ D | 6.50 € | **5.40 €** | 59.7 % | **32.6 %** | 5.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 11.00 € | **9.90 €** | 45.4 % | **30.9 %** | 10.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 5.30 € | **4.20 €** | 33.8 % | **6.0 %** | 4.30 € | stávame sa najlacnejší |
| Koloběžka s pumpovanými koly NILS Extreme HC300 červená | 118.00 € | **116.90 €** | 14.8 % | **13.7 %** | 116.99 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 158.50 € | **157.50 €** | 5.8 % | **5.2 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Badmintonový set REBEL ACTIVE RBA-4102 | 11.90 € | **10.90 €** | 16.6 % | **6.8 %** | 7.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **15.50 €** | 15.3 % | **8.4 %** | 13.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set PowerClean M+náhr. zdarma | 20.50 € | **19.50 €** | 10.7 % | **5.3 %** | 17.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá, PO | 21.50 € | **20.50 €** | 12.3 % | **7.0 %** | 18.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 15.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.90 € | **10.90 €** | 15.6 % | **5.9 %** | 9.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Jóga válec Dharma REBEL ACTIVE RBA-3062-PU | 12.90 € | **11.90 €** | 14.9 % | **6.0 %** | 11.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pedrini MyMoka Indukce modrá 3 porce | 40.90 € | **39.90 €** | 10.3 % | **7.6 %** | 39.91 € | stávame sa najlacnejší |
| Herný stojan ONIKUMA ST-2 (biely) | 13.90 € | **12.90 €** | 16.3 % | **7.9 %** | 12.93 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 32.90 € | **31.90 €** | 14.8 % | **11.4 %** | 31.96 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 17.50 € | **16.50 €** | 15.8 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 17.50 € | **16.50 €** | 15.9 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| Hyper PLA Filament Creality (Grey) | 12.50 € | **11.50 €** | 16.4 % | **7.1 %** | 11.58 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.90 € | **18.90 €** | 43.7 % | **36.5 %** | 19.00 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.90 € | **9.90 €** | 46.2 % | **32.8 %** | 10.00 € | stávame sa najlacnejší |
| Solight teplomer | 10.50 € | **9.50 €** | 50.3 % | **36.0 %** | 9.60 € | stávame sa najlacnejší |
| Roborock Q10 PF čistiaci robot (čierny) | 217.90 € | **216.90 €** | 14.4 % | **13.9 %** | 217.00 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 – strieborné + hnedý ... | 32.50 € | **31.50 €** | 14.7 % | **11.2 %** | 31.63 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.50 € | **31.50 €** | 14.7 % | **11.2 %** | 31.63 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 v zlatej farbe s biel... | 32.50 € | **31.50 €** | 14.7 % | **11.2 %** | 31.63 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (čierny) | 182.50 € | **181.50 €** | 14.9 % | **14.3 %** | 181.63 € | stávame sa najlacnejší |
| Inteligentný WiFi nástenný spínač SONOFF M5-1C-80 (1... | 17.00 € | **16.00 €** | 15.2 % | **8.4 %** | 16.13 € | stávame sa najlacnejší |
| Sada 6 denných filtrov Freewell Standard pre DJI Flip | 26.50 € | **25.50 €** | 15.0 % | **10.7 %** | 25.63 € | stávame sa najlacnejší |
| Puzdro Freewell pre Iphone 15 PRO MAX so 17 mm držiakom | 46.00 € | **45.00 €** | 14.4 % | **12.0 %** | 45.13 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (black) | 44.50 € | **43.50 €** | 15.6 % | **13.0 %** | 43.63 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 27.50 € | **26.50 €** | 15.7 % | **11.5 %** | 26.67 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 48.50 € | **47.50 €** | 15.3 % | **13.0 %** | 47.69 € | stávame sa najlacnejší |
| Colmi V69 smartwatch (black) | 40.50 € | **39.50 €** | 14.9 % | **12.1 %** | 39.71 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze GTR 3 Pro (striebro) | 29.00 € | **28.00 €** | 14.8 % | **10.9 %** | 28.21 € | stávame sa najlacnejší |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 16.71 € | stávame sa najlacnejší |
| Vodotesný batoh na fotoaparát Puluz PU5011B (čierny) | 21.50 € | **20.50 €** | 15.9 % | **10.5 %** | 20.71 € | stávame sa najlacnejší |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 17.50 € | **16.50 €** | 15.6 % | **9.0 %** | 16.75 € | stávame sa najlacnejší |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 37.50 € | **36.50 €** | 15.0 % | **12.0 %** | 36.79 € | stávame sa najlacnejší |
| Resto 93511 Pánev 28 cm | 34.00 € | **33.00 €** | 10.3 % | **7.0 %** | 33.30 € | stávame sa najlacnejší |
| Habotest HT126A Digitálny univerzálny multimeter | 26.00 € | **25.00 €** | 14.8 % | **10.4 %** | 25.30 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT811 (čierne) | 20.50 € | **19.50 €** | 15.4 % | **9.8 %** | 19.80 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (červené) | 36.50 € | **35.50 €** | 15.2 % | **12.1 %** | 35.82 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 36.50 € | **35.50 €** | 15.2 % | **12.1 %** | 35.82 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.33 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 35.00 € | **34.00 €** | 14.2 % | **11.0 %** | 34.36 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 27.50 € | **26.50 €** | 15.6 % | **11.4 %** | 26.89 € | stávame sa najlacnejší |
| Recenzia zariadenia SMD Uni-T UT116A | 25.50 € | **24.50 €** | 14.3 % | **9.8 %** | 24.89 € | stávame sa najlacnejší |
| Tester napätia a spojitosti Uni-T UT18D | 40.50 € | **39.50 €** | 8.6 % | **5.9 %** | 39.89 € | stávame sa najlacnejší |
| Uni-T UT210B Mini digitálny klešťový multimeter | 23.50 € | **22.50 €** | 14.7 % | **9.8 %** | 22.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 470.50 € | **469.50 €** | 8.7 % | **8.5 %** | 469.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 904.50 € | **903.50 €** | 15.0 % | **14.8 %** | 903.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 28.00 € | **27.00 €** | 14.5 % | **10.4 %** | 27.39 € | stávame sa najlacnejší |
| DOMO DO354VD | 130.50 € | **129.50 €** | 8.5 % | **7.7 %** | 129.89 € | stávame sa najlacnejší |
| Kaon MZ-52, satelitní přijímač Skylink | 60.50 € | **59.50 €** | 7.3 % | **5.6 %** | 59.89 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 17.50 € | **16.50 €** | 43.6 % | **35.4 %** | 16.90 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 24.50 € | **23.50 €** | 42.7 % | **36.9 %** | 23.90 € | stávame sa najlacnejší |
| Tefal OptiGrill GC7P0810 | 99.50 € | **98.50 €** | 10.5 % | **9.3 %** | 98.90 € | stávame sa najlacnejší |
| Girmi PE1600 | 16.50 € | **15.50 €** | 12.4 % | **5.6 %** | 15.90 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 64.00 € | **63.00 €** | 15.1 % | **13.3 %** | 63.42 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.00 €** | 47.4 % | **39.2 %** | 17.50 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.00 €** | 47.4 % | **39.2 %** | 17.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 27.00 € | **26.00 €** | 47.2 % | **41.8 %** | 26.50 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 15.00 € | **14.00 €** | 38.3 % | **29.0 %** | 14.50 € | stávame sa najlacnejší |
| Solight doplnkový pohybový senzor pre GSM alarm 1D11 | 32.00 € | **31.00 €** | 41.0 % | **36.6 %** | 31.50 € | stávame sa najlacnejší |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 21.00 € | **20.00 €** | 46.4 % | **39.5 %** | 20.50 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (biela) | 85.90 € | **85.00 €** | 15.1 % | **13.9 %** | 85.22 € | stávame sa najlacnejší |
| Ultrazvukový merací prístroj na hrúbku Uni-T UT345A | 86.90 € | **86.00 €** | 7.4 % | **6.3 %** | 86.39 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191T | 70.90 € | **70.00 €** | 12.7 % | **11.3 %** | 70.39 € | stávame sa najlacnejší |
| CrockPot CSC062X | 155.90 € | **155.00 €** | 6.0 % | **5.4 %** | 155.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 119.90 € | **119.00 €** | 34.9 % | **33.9 %** | 119.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.90 € | **78.00 €** | 15.3 % | **14.0 %** | 78.50 € | stávame sa najlacnejší |
| Leifheit Perfect Steam Air Board S/M | 14.90 € | **14.00 €** | 12.1 % | **5.3 %** | 13.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI držák do auta s Magsafe AMS06BK | 15.90 € | **15.00 €** | 11.3 % | **5.0 %** | 14.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight rozbočka kocka, 3x 16A + USB A+C, biela, vyp... | 10.00 € | **9.10 €** | 48.6 % | **35.3 %** | 9.20 € | stávame sa najlacnejší |
| Smart Switch WiFi + RF 433 Sonoff T2 EU TX (3-channe... | 12.90 € | **12.00 €** | 15.3 % | **7.2 %** | 12.29 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.00 €** | 47.3 % | **37.0 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.00 €** | 47.3 % | **37.0 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.00 €** | 47.3 % | **37.0 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 12.90 € | **12.00 €** | 44.9 % | **34.8 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.90 € | **14.00 €** | 12.0 % | **5.2 %** | 14.50 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.90 € | **11.00 €** | 45.7 % | **34.7 %** | 11.50 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 13.90 € | **13.00 €** | 39.9 % | **30.8 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.90 € | **10.00 €** | 46.7 % | **34.6 %** | 10.50 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.90 € | **14.00 €** | 47.7 % | **38.8 %** | 14.50 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 12.90 € | **12.00 €** | 40.4 % | **30.6 %** | 12.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.90 € | **10.00 €** | 33.9 % | **22.8 %** | 10.50 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.90 € | **10.00 €** | 19.3 % | **9.4 %** | 10.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 14.90 € | **14.00 €** | 16.8 % | **9.8 %** | 14.50 € | stávame sa najlacnejší |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 10.90 € | **10.00 €** | 41.8 % | **30.1 %** | 10.50 € | stávame sa najlacnejší |
| Solight anténny adaptér, s napájací výhybkou, 100mA | 5.30 € | **4.40 €** | 55.0 % | **28.7 %** | 4.50 € | stávame sa najlacnejší |
| TP-LINK TL-WA855RE Wireless N Extender | 18.90 € | **18.00 €** | 10.5 % | **5.2 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dotykový nástenný vypínač Sonoff TX T5 ... | 22.90 € | **22.00 €** | 15.1 % | **10.5 %** | 22.08 € | stávame sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.90 € | **18.00 €** | 11.3 % | **6.0 %** | 18.09 € | stávame sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 26.90 € | **26.00 €** | 13.1 % | **9.3 %** | 26.39 € | stávame sa najlacnejší |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.90 € | **17.00 €** | 16.2 % | **10.4 %** | 17.42 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 48.90 € | **48.00 €** | 14.9 % | **12.8 %** | 48.46 € | stávame sa najlacnejší |
| FoodSaver FSR2002 | 16.90 € | **16.00 €** | 12.2 % | **6.2 %** | 16.49 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 22.90 € | **22.00 €** | 23.7 % | **18.8 %** | 22.50 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 27.90 € | **27.00 €** | 25.4 % | **21.3 %** | 27.50 € | stávame sa najlacnejší |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.90 € | **17.00 €** | 46.6 % | **39.2 %** | 17.50 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.90 € | **16.00 €** | 35.5 % | **28.3 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 23.90 € | **23.00 €** | 38.4 % | **33.2 %** | 23.50 € | stávame sa najlacnejší |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.90 € | **47.00 €** | 38.5 % | **35.9 %** | 47.50 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.90 € | **39.00 €** | 38.6 % | **35.4 %** | 39.50 € | stávame sa najlacnejší |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 24.90 € | **24.00 €** | 38.3 % | **33.3 %** | 24.50 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, UGR | 23.90 € | **23.00 €** | 38.4 % | **33.2 %** | 23.50 € | stávame sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.90 € | **45.00 €** | 41.6 % | **38.8 %** | 45.50 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 24.90 € | **24.00 €** | 28.7 % | **24.0 %** | 24.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.90 € | **41.00 €** | 34.9 % | **32.0 %** | 41.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 19.90 € | **19.00 €** | 34.4 % | **28.3 %** | 19.50 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 20.90 € | **20.00 €** | 39.0 % | **33.1 %** | 20.50 € | stávame sa najlacnejší |
| Solight batériová kamera WiFi so solárnym panelom | 58.90 € | **58.00 €** | 35.6 % | **33.5 %** | 58.50 € | stávame sa najlacnejší |
| Solight vonkajšia IP kamera s LED světlom | 31.90 € | **31.00 €** | 34.0 % | **30.2 %** | 31.50 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.90 € | **17.00 €** | 33.6 % | **26.9 %** | 17.50 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.90 € | **55.00 €** | 36.4 % | **34.2 %** | 55.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.90 € | **29.00 €** | 20.3 % | **16.7 %** | 29.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.90 € | **33.00 €** | 25.7 % | **22.4 %** | 33.50 € | stávame sa najlacnejší |
| Sati Café al’Italienne 1 kg zrno | 21.90 € | **21.00 €** | 10.0 % | **5.5 %** | 21.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.90 € | **19.00 €** | 39.6 % | **33.3 %** | 19.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 4.20 € | **3.40 €** | 36.0 % | **10.1 %** | 3.50 € | stávame sa najlacnejší |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.90 € | **7.20 €** | 47.3 % | **34.3 %** | 7.30 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 4.20 € | **3.50 €** | 54.5 % | **28.8 %** | 3.60 € | stávame sa najlacnejší |
| Banquet Pánev nepř. GRANITE P 20 ind | 10.50 € | **9.80 €** | 13.1 % | **5.5 %** | 7.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 8.10 € | **7.40 €** | 47.3 % | **34.6 %** | 7.50 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 799.50 € | **798.90 €** | 15.0 % | **14.9 %** | 799.00 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 | 298.50 € | **297.90 €** | 15.0 % | **14.7 %** | 298.00 € | stávame sa najlacnejší |
| D-LINK AX9U | 17.50 € | **16.90 €** | 10.6 % | **6.8 %** | 13.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ORYX X220 Iris | 19.50 € | **18.90 €** | 10.6 % | **7.2 %** | 16.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DGS-108) | 21.50 € | **20.90 €** | 10.0 % | **6.9 %** | 20.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.50 € | **26.90 €** | 10.0 % | **7.6 %** | 26.91 € | stávame sa najlacnejší |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 19.50 € | **18.90 €** | 15.4 % | **11.8 %** | 18.91 € | stávame sa najlacnejší |
| Mio Smartbox IV | 30.50 € | **29.90 €** | 7.5 % | **5.4 %** | 29.99 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **44.90 €** | 15.5 % | **14.0 %** | 44.99 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.50 € | **44.90 €** | 15.5 % | **14.0 %** | 44.99 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM603 růžová | 35.50 € | **34.90 €** | 7.8 % | **6.0 %** | 34.99 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.50 € | **27.90 €** | 37.2 % | **34.3 %** | 28.00 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 36.50 € | **35.90 €** | 39.8 % | **37.5 %** | 36.00 € | stávame sa najlacnejší |
| GUZZANTIGZ 3601 | 28.50 € | **27.90 €** | 11.7 % | **9.4 %** | 28.00 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **19.90 €** | 38.4 % | **34.4 %** | 20.00 € | stávame sa najlacnejší |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.50 € | **19.90 €** | 48.5 % | **44.2 %** | 20.00 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 22.50 € | **21.90 €** | 11.2 % | **8.2 %** | 22.00 € | stávame sa najlacnejší |
| Solight domáca kamera s nočným svetlom a hodinami | 34.50 € | **33.90 €** | 36.7 % | **34.3 %** | 34.00 € | stávame sa najlacnejší |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.50 € | **60.90 €** | 19.8 % | **18.7 %** | 61.00 € | stávame sa najlacnejší |
| NEDIS WIFIWC10WT SmartLife vypínač Wi-Fi, řídicí jed... | 26.50 € | **25.90 €** | 15.3 % | **12.7 %** | 26.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 46.50 € | **45.90 €** | 13.5 % | **12.0 %** | 46.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 17.50 € | **16.90 €** | 37.2 % | **32.5 %** | 17.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 26.50 € | **25.90 €** | 36.8 % | **33.7 %** | 26.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 38.50 € | **37.90 €** | 39.5 % | **37.4 %** | 38.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.50 € | **63.90 €** | 21.1 % | **20.0 %** | 64.00 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 49dB | 25.50 € | **24.90 €** | 30.6 % | **27.5 %** | 25.00 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 24.50 € | **23.90 €** | 36.2 % | **32.9 %** | 24.00 € | stávame sa najlacnejší |
| Solight LED svetielko s diaľkovým ovládaním, 5 LED, ... | 6.70 € | **6.10 €** | 55.2 % | **41.3 %** | 6.20 € | stávame sa najlacnejší |
| Solight USB-C 20W fast charger | 5.90 € | **5.30 €** | 47.1 % | **32.2 %** | 5.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.70 € | **4.10 €** | 49.3 % | **30.2 %** | 4.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 3m | 6.20 € | **5.60 €** | 48.7 % | **34.3 %** | 5.70 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 4.40 € | **3.80 €** | 55.5 % | **34.3 %** | 3.90 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.40 € | **2.80 €** | 56.2 % | **28.6 %** | 2.90 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 4.00 € | **3.40 €** | 53.4 % | **30.4 %** | 3.50 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 4.00 € | **3.40 €** | 53.4 % | **30.4 %** | 3.50 € | stávame sa najlacnejší |
| Solight spätná klapka pre AV01, AV02 | 2.30 € | **1.70 €** | 47.2 % | **8.8 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Pánev nepř. GRANITE P 24 ind | 14.50 € | **13.90 €** | 11.3 % | **6.7 %** | 13.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Defender Taška na notebook 15,6", Geek | 14.50 € | **13.90 €** | 10.5 % | **5.9 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čelovka 2v1 Superfire TH04 – 600 lm, USB-C, 5 režimo... | 12.50 € | **11.90 €** | 16.1 % | **10.6 %** | 11.92 € | stávame sa najlacnejší |
| Budík analogový TechnoLine Modell K red | 16.50 € | **15.90 €** | 16.6 % | **12.4 %** | 15.96 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 13.50 € | **12.90 €** | 47.5 % | **41.0 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.50 € | **12.90 €** | 14.0 % | **8.9 %** | 13.00 € | stávame sa najlacnejší |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 12.50 € | **11.90 €** | 16.9 % | **11.3 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.50 € | **14.90 €** | 45.9 % | **40.2 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 12.50 € | **11.90 €** | 27.0 % | **20.9 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **13.90 €** | 47.4 % | **41.3 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 13.50 € | **12.90 €** | 56.1 % | **49.2 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 15.50 € | **14.90 €** | 46.0 % | **40.4 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 10.00 € | **9.40 €** | 38.3 % | **30.0 %** | 9.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.50 € | **14.90 €** | 39.9 % | **34.4 %** | 15.00 € | stávame sa najlacnejší |
| Solight nabíjacie nočné LED svetielko s pohybovým a ... | 8.50 € | **7.90 €** | 53.9 % | **43.0 %** | 8.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.50 € | **10.90 €** | 38.3 % | **31.1 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 16.50 € | **15.90 €** | 40.0 % | **34.9 %** | 16.00 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 15.50 € | **14.90 €** | 47.4 % | **41.7 %** | 15.00 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 10.50 € | **9.90 €** | 17.1 % | **10.4 %** | 10.00 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 12.50 € | **11.90 €** | 46.9 % | **39.8 %** | 12.00 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.50 € | **12.90 €** | 36.3 % | **30.3 %** | 13.00 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.20 €** | 45.5 % | **32.6 %** | 6.30 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.30 € | **4.70 €** | 47.6 % | **30.9 %** | 4.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 10.50 € | **9.90 €** | 43.7 % | **35.5 %** | 10.00 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostaniciam TE81, TE8... | 5.30 € | **4.70 €** | 50.7 % | **33.6 %** | 4.80 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 8.60 € | **8.00 €** | 53.7 % | **42.9 %** | 8.10 € | stávame sa najlacnejší |
| Sada pro přežití SURVIVAL 32v1 Trizand 19920 | 15.50 € | **14.90 €** | 14.6 % | **10.1 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 12.50 € | **11.90 €** | 26.1 % | **20.0 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo, 150+150lm, Li... | 8.60 € | **8.00 €** | 53.7 % | **42.9 %** | 8.10 € | stávame sa najlacnejší |
| Samsung VG-SCFC43SGMXC | 123.50 € | **122.90 €** | 10.3 % | **9.7 %** | 122.91 € | stávame sa najlacnejší |
| Ležérny cvičebný bicykel MERACH MR-S23B1-EU (čierny) | 232.50 € | **231.90 €** | 15.0 % | **14.7 %** | 232.00 € | stávame sa najlacnejší |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 8.30 € | **7.80 €** | 55.5 % | **46.1 %** | 7.90 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 140.50 € | **140.00 €** | 5.4 % | **5.0 %** | 130.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo vodní filtry 3+1 | 13.00 € | **12.50 €** | 21.9 % | **17.2 %** | 12.51 € | stávame sa najlacnejší |
| Leifheit Potah na žehlicí prkno Cotton C | 10.50 € | **10.00 €** | 12.6 % | **7.3 %** | 10.04 € | stávame sa najlacnejší |
| Leifheit Čistič na okna s rozprašovačem | 10.50 € | **10.00 €** | 14.4 % | **9.0 %** | 10.04 € | stávame sa najlacnejší |
| Pohybové čidlo ORBIS ISIMAT+ | 22.50 € | **22.00 €** | 14.4 % | **11.9 %** | 22.06 € | stávame sa najlacnejší |
| Webová kamera EMEET Piko (čierna) | 51.00 € | **50.50 €** | 14.9 % | **13.8 %** | 50.56 € | stávame sa najlacnejší |
| Filtrácia CPL Freewell do DJI Air 3S | 18.00 € | **17.50 €** | 13.6 % | **10.5 %** | 17.58 € | stávame sa najlacnejší |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.50 € | **39.00 €** | 16.1 % | **14.6 %** | 39.09 € | stávame sa najlacnejší |
| Solight LED kovový vianočný stromček, 2x AA | 5.10 € | **4.60 €** | 54.1 % | **39.0 %** | 4.70 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 5.30 € | **4.80 €** | 55.6 % | **40.9 %** | 4.90 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 7.70 € | **7.20 €** | 53.4 % | **43.5 %** | 7.30 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 300mm, čierna... | 2.50 € | **2.00 €** | 56.3 % | **25.1 %** | 2.10 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 5 sériový - lustrový, biely | 3.90 € | **3.40 €** | 40.9 % | **22.9 %** | 3.50 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka, IP44, čierna | 4.60 € | **4.10 €** | 49.0 % | **32.8 %** | 4.20 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 2m | 3.90 € | **3.40 €** | 48.2 % | **29.2 %** | 3.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 4.30 € | **3.80 €** | 46.9 % | **29.8 %** | 3.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.40 € | **4.90 €** | 46.8 % | **33.2 %** | 5.00 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 6.40 € | **5.90 €** | 53.5 % | **41.5 %** | 6.00 € | stávame sa najlacnejší |
| Dvojkanálový nástenný spínač SONOFF MINI-2GS-E Matter. | 22.00 € | **21.50 €** | 14.7 % | **12.1 %** | 21.63 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 19.50 € | **19.00 €** | 16.1 % | **13.1 %** | 19.15 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 23.00 € | **22.50 €** | 15.0 % | **12.5 %** | 22.65 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1019 | 13.50 € | **13.00 €** | 14.4 % | **10.2 %** | 13.16 € | stávame sa najlacnejší |
| ScanPart vodní filtr kompatibilní 4ks | 16.00 € | **15.50 €** | 10.1 % | **6.7 %** | 15.67 € | stávame sa najlacnejší |
| LED lampa RGB Puluz pre fotoaparát PU560B | 16.00 € | **15.50 €** | 13.7 % | **10.2 %** | 15.67 € | stávame sa najlacnejší |
| Filament Anycubic TPU (sivý) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Inteligentný termostat WiFi Avatto WT20R-BH-3A-W-WiFi | 30.50 € | **30.00 €** | 15.5 % | **13.7 %** | 30.19 € | stávame sa najlacnejší |
| Girmi PE3600 | 39.50 € | **39.00 €** | 10.9 % | **9.5 %** | 39.19 € | stávame sa najlacnejší |
| Inteligentné hodinky Colmi P86 (strieborné) | 21.00 € | **20.50 €** | 14.6 % | **11.9 %** | 20.71 € | stávame sa najlacnejší |
| Leifheit Stěrka na dlažbu Classic s tele | 12.00 € | **11.50 €** | 10.1 % | **5.5 %** | 11.73 € | stávame sa najlacnejší |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 155.50 € | **155.00 €** | 14.4 % | **14.0 %** | 155.25 € | stávame sa najlacnejší |
| PULUZ PU3224B Držiak na telefón čierny | 14.50 € | **14.00 €** | 16.5 % | **12.5 %** | 14.25 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 13.50 € | **13.00 €** | 25.4 % | **20.8 %** | 13.25 € | stávame sa najlacnejší |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.50 € | **19.00 €** | 14.1 % | **11.2 %** | 19.25 € | stávame sa najlacnejší |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.50 € | **18.00 €** | 10.4 % | **7.4 %** | 18.25 € | stávame sa najlacnejší |
| TWS QCY MeloBuds Pro HT08 headphones, ANC (gold) | 32.50 € | **32.00 €** | 14.7 % | **13.0 %** | 32.28 € | stávame sa najlacnejší |
| Mini detektor úniku plynu Habotest HT61 | 17.50 € | **17.00 €** | 16.6 % | **13.3 %** | 17.29 € | stávame sa najlacnejší |
| Centrala Bramka WiFi MSH450MA Meross | 19.50 € | **19.00 €** | 15.0 % | **12.0 %** | 19.30 € | stávame sa najlacnejší |
| HP 15,6" Taška Prelude | 16.50 € | **16.00 €** | 26.4 % | **22.6 %** | 16.31 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky C10 (biele) | 13.50 € | **13.00 €** | 16.4 % | **12.1 %** | 13.32 € | stávame sa najlacnejší |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.50 € | **15.00 €** | 16.8 % | **13.0 %** | 15.33 € | stávame sa najlacnejší |
| EMEET SmartCam S600 webová kamera | 52.00 € | **51.50 €** | 14.6 % | **13.5 %** | 51.84 € | stávame sa najlacnejší |
| Meteorologická stanice TechniSat IMETEO 400 | 32.50 € | **32.00 €** | 15.6 % | **13.8 %** | 32.38 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 17.00 € | **16.50 €** | 13.4 % | **10.0 %** | 16.88 € | stávame sa najlacnejší |
| Ardes AR4B01B | 45.50 € | **45.00 €** | 10.0 % | **8.8 %** | 45.39 € | stávame sa najlacnejší |
| Salente Combo-4In1-Ss | 135.50 € | **135.00 €** | 14.2 % | **13.8 %** | 135.39 € | stávame sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 38.50 € | **38.00 €** | 15.3 % | **13.8 %** | 38.39 € | stávame sa najlacnejší |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 16.00 € | **15.50 €** | 39.0 % | **34.6 %** | 15.90 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 14.00 € | **13.50 €** | 38.8 % | **33.8 %** | 13.90 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 13.00 € | **12.50 €** | 38.5 % | **33.2 %** | 12.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 14.00 € | **13.50 €** | 21.2 % | **16.9 %** | 13.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.50 €** | 26.4 % | **23.3 %** | 19.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 35.00 € | **34.50 €** | 34.4 % | **32.5 %** | 34.90 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 14.00 € | **13.50 €** | 32.8 % | **28.1 %** | 13.90 € | stávame sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 38.00 € | **37.50 €** | 32.0 % | **30.3 %** | 37.90 € | stávame sa najlacnejší |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 23.00 € | **22.50 €** | 39.2 % | **36.2 %** | 22.90 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 29.00 € | **28.50 €** | 27.6 % | **25.4 %** | 28.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **47.50 €** | 54.5 % | **52.9 %** | 47.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 22.00 € | **21.50 €** | 25.3 % | **22.5 %** | 21.90 € | stávame sa najlacnejší |
| Solight štrbinová hubica pre Dyson V7, V8, V10, V11,... | 11.00 € | **10.50 €** | 31.9 % | **25.9 %** | 10.90 € | stávame sa najlacnejší |
| Solight 40mm kulma na dlhé vlasy pre Dyson Airwrap (... | 21.00 € | **20.50 €** | 30.3 % | **27.2 %** | 20.90 € | stávame sa najlacnejší |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 29.00 € | **28.50 €** | 9.0 % | **7.1 %** | 28.90 € | stávame sa najlacnejší |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 22.00 € | **21.50 €** | 14.7 % | **12.0 %** | 21.90 € | stávame sa najlacnejší |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 27.00 € | **26.50 €** | 35.7 % | **33.2 %** | 26.90 € | stávame sa najlacnejší |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.50 € | **26.00 €** | 11.2 % | **9.1 %** | 26.40 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 20.00 € | **19.50 €** | 24.7 % | **21.6 %** | 19.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 23.00 € | **22.50 €** | 34.3 % | **31.4 %** | 22.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 124.50 € | **124.00 €** | 22.5 % | **22.0 %** | 124.41 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.50 € | **21.00 €** | 15.1 % | **12.4 %** | 21.42 € | stávame sa najlacnejší |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.50 € | **29.00 €** | 14.9 % | **13.0 %** | 29.44 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CCPA Apple Carplay/Andr... | 37.50 € | **37.00 €** | 15.4 % | **13.9 %** | 37.49 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit 2AIR | 33.50 € | **33.00 €** | 15.9 % | **14.2 %** | 33.49 € | stávame sa najlacnejší |
| DOMO DO754K | 36.50 € | **36.00 €** | 10.4 % | **8.9 %** | 36.49 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA X12 | 17.50 € | **17.00 €** | 15.6 % | **12.3 %** | 17.49 € | stávame sa najlacnejší |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 44.50 € | **44.00 €** | 15.4 % | **14.1 %** | 44.49 € | stávame sa najlacnejší |
| ETA Aromo 0064 90000 bílý | 13.99 € | **13.50 €** | 10.3 % | **6.5 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.90 € | **85.50 €** | 15.2 % | **14.7 %** | 85.56 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 77.90 € | **77.50 €** | 15.0 % | **14.4 %** | 77.79 € | stávame sa najlacnejší |
| Razer Goliathus Mobile Stealth Ed. | 10.90 € | **10.50 €** | 13.6 % | **9.4 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo TopSound černý | 12.90 € | **12.50 €** | 10.4 % | **7.0 %** | 11.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI CN GaN 33W, USB-C+USB, bílá CHPD0020 | 13.90 € | **13.50 €** | 10.9 % | **7.7 %** | 13.55 € | stávame sa najlacnejší |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 14.90 € | **14.50 €** | 9.8 % | **6.9 %** | 14.59 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 9.00 € | **8.60 €** | 53.7 % | **46.9 %** | 8.70 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka Fast, IP68, 5-9mm, ... | 4.20 € | **3.80 €** | 55.9 % | **41.1 %** | 3.90 € | stávame sa najlacnejší |
| Ali pouzdro Mag-Skin iP17 ProMax PAS0029 | 14.90 € | **14.50 €** | 11.8 % | **8.8 %** | 14.63 € | stávame sa najlacnejší |
| CL držák vent. horiz., černý HANDYDRIVEK | 10.90 € | **10.50 €** | 12.3 % | **8.2 %** | 10.68 € | stávame sa najlacnejší |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.90 € | **13.50 €** | 20.3 % | **16.9 %** | 13.71 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.90 € | **10.50 €** | 17.1 % | **12.8 %** | 10.72 € | stávame sa najlacnejší |
| Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps | 13.90 € | **13.50 €** | 16.5 % | **13.2 %** | 13.79 € | stávame sa najlacnejší |
| Marvo HG8928 sluchátka s mikrofonem | 12.90 € | **12.50 €** | 13.1 % | **9.6 %** | 12.79 € | stávame sa najlacnejší |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.90 € | **15.50 €** | 10.5 % | **7.7 %** | 15.83 € | stávame sa najlacnejší |
| Superfire TH04-S,1000lmm USB-C čelová baterka | 14.90 € | **14.50 €** | 15.7 % | **12.6 %** | 14.88 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 1.60 € | **1.20 €** | 58.6 % | **19.0 %** | 1.30 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, priama, IP44, čierna | 2.10 € | **1.70 €** | 51.1 % | **22.3 %** | 1.80 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 2.10 € | **1.70 €** | 55.2 % | **25.6 %** | 1.80 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 250mm, natura... | 2.00 € | **1.60 €** | 56.3 % | **25.1 %** | 1.70 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, s priebežnou zásuvkou | 1.70 € | **1.30 €** | 44.0 % | **10.1 %** | 1.40 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek | 2.80 € | **2.40 €** | 48.8 % | **27.5 %** | 2.50 € | stávame sa najlacnejší |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 5.10 € | **4.70 €** | 40.1 % | **29.1 %** | 4.80 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-80W (2-kanálový) inteligentný dotykov... | 22.90 € | **22.50 €** | 15.8 % | **13.8 %** | 22.54 € | stávame sa najlacnejší |
| BWT náhradní vodní filtr 3+1ks REFILL | 16.90 € | **16.50 €** | 11.9 % | **9.2 %** | 16.63 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60Mi | 27.90 € | **27.50 €** | 15.4 % | **13.7 %** | 27.64 € | stávame sa najlacnejší |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 43.90 € | **43.50 €** | 15.0 % | **13.9 %** | 43.69 € | stávame sa najlacnejší |
| WiFi extender REBEL KOM1032 | 24.90 € | **24.50 €** | 15.7 % | **13.8 %** | 24.69 € | stávame sa najlacnejší |
| ZigBee LCD senzor teploty Sonoff SNZB-02LD (so sondou) | 17.90 € | **17.50 €** | 17.3 % | **14.6 %** | 17.70 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **31.50 €** | 16.9 % | **15.4 %** | 31.70 € | stávame sa najlacnejší |
| Baterka Superfire TF02 | 63.90 € | **63.50 €** | 15.1 % | **14.4 %** | 63.71 € | stávame sa najlacnejší |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 20.90 € | **20.50 €** | 15.0 % | **12.8 %** | 20.75 € | stávame sa najlacnejší |
| Girmi BL0301 | 28.90 € | **28.50 €** | 10.8 % | **9.3 %** | 28.79 € | stávame sa najlacnejší |
| Evolveo Motion D1, ovladač s klávesnicí | 33.90 € | **33.50 €** | 8.1 % | **6.8 %** | 33.80 € | stávame sa najlacnejší |
| Zvukový zosilňovač Blitzwolf AS-22, 45 W, Bluetooth ... | 41.90 € | **41.50 €** | 15.1 % | **14.0 %** | 41.80 € | stávame sa najlacnejší |
| Latarka Superfire L3 P90 | 29.90 € | **29.50 €** | 14.9 % | **13.4 %** | 29.84 € | stávame sa najlacnejší |
| Leifheit LinoLift 500 85359 | 55.90 € | **55.50 €** | 11.9 % | **11.1 %** | 55.89 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256 | 26.90 € | **26.50 €** | 10.5 % | **8.8 %** | 26.89 € | stávame sa najlacnejší |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 21.90 € | **21.50 €** | 7.5 % | **5.5 %** | 21.89 € | stávame sa najlacnejší |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **35.50 €** | 15.0 % | **13.7 %** | 35.89 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 8.30 € | **8.00 €** | 47.7 % | **42.3 %** | 8.10 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 3.10 € | **2.80 €** | 52.7 % | **38.0 %** | 2.90 € | stávame sa najlacnejší |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.20 €** | 56.3 % | **25.1 %** | 1.30 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, zdierka 5,5 ... | 1.10 € | **0.80 €** | 54.2 % | **12.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.70 €** | 57.9 % | **34.2 %** | 1.80 € | stávame sa najlacnejší |
| Solight vypínač šnúrový, jednopólový priechodný, čierny | 1.10 € | **0.80 €** | 54.2 % | **12.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, uhlová, IP44, čierna | 2.10 € | **1.80 €** | 49.8 % | **28.4 %** | 1.90 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.60 € | **1.30 €** | 44.5 % | **17.4 %** | 1.40 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.20 € | **0.90 €** | 59.9 % | **20.0 %** | 1.00 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 3.00 € | **2.70 €** | 46.0 % | **31.4 %** | 2.80 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.60 € | **6.30 €** | 32.5 % | **26.5 %** | 6.40 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.60 € | **6.30 €** | 32.5 % | **26.5 %** | 6.40 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 1 jednopólový, biely | 3.00 € | **2.70 €** | 41.8 % | **27.6 %** | 2.80 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.40 € | **1.10 €** | 47.8 % | **16.1 %** | 1.20 € | stávame sa najlacnejší |
| Solight rozbočovač, 5 x 2,5A, biely | 1.90 € | **1.60 €** | 47.1 % | **23.9 %** | 1.70 € | stávame sa najlacnejší |
| Solight fast charger do auta 30W USB-C + A | 4.10 € | **3.80 €** | 46.2 % | **35.5 %** | 3.90 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 6 striedavý - schodiskový, b... | 3.00 € | **2.70 €** | 41.0 % | **26.9 %** | 2.80 € | stávame sa najlacnejší |
| Solight LED stmievateľná stolná lampička s klipom bi... | 9.40 € | **9.20 €** | 11.2 % | **8.9 %** | 9.30 € | stávame sa najlacnejší |
| Solight profesionálný kliešťový multimeter, 10mA - 1... | 9.90 € | **9.70 €** | 28.2 % | **25.6 %** | 9.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.90 € | **8.70 €** | 17.1 % | **14.5 %** | 8.80 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.40 € | **8.20 €** | 43.8 % | **40.4 %** | 8.30 € | stávame sa najlacnejší |
| Solight LED svetelný pás so svetelným a pohybovým se... | 5.90 € | **5.70 €** | 39.0 % | **34.3 %** | 5.80 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.70 € | **4.50 €** | 41.0 % | **35.0 %** | 4.60 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.40 € | **5.20 €** | 45.4 % | **40.0 %** | 5.30 € | stávame sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E2... | 2.50 € | **2.30 €** | 50.6 % | **38.5 %** | 2.40 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.30 € | **4.10 €** | 35.5 % | **29.2 %** | 4.20 € | stávame sa najlacnejší |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.60 € | **2.40 €** | 36.4 % | **25.9 %** | 2.50 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.70 € | **2.50 €** | 37.2 % | **27.0 %** | 2.60 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.30 €** | 28.3 % | **24.3 %** | 6.40 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.30 €** | 8.7 % | **5.4 %** | 6.40 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.20 € | **3.00 €** | 32.1 % | **23.8 %** | 3.10 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, čierny | 2.60 € | **2.40 €** | 35.5 % | **25.1 %** | 2.50 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.20 € | **3.00 €** | 37.7 % | **29.0 %** | 3.10 € | stávame sa najlacnejší |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.30 € | **4.10 €** | 38.7 % | **32.3 %** | 4.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 8.00 € | **7.80 €** | 36.9 % | **33.5 %** | 7.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **3.40 €** | 15.7 % | **9.3 %** | 3.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.50 € | **7.30 €** | 38.9 % | **35.2 %** | 7.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.30 € | **5.10 €** | 21.0 % | **16.5 %** | 5.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.00 € | **4.80 €** | 36.4 % | **31.0 %** | 4.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.30 € | **5.10 €** | 37.2 % | **32.0 %** | 5.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.70 € | **6.50 €** | 37.6 % | **33.4 %** | 6.60 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.30 €** | 34.2 % | **26.6 %** | 3.40 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.70 € | **3.50 €** | 45.3 % | **37.5 %** | 3.60 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 4.50 € | **4.30 €** | 37.0 % | **30.9 %** | 4.40 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.90 € | **5.70 €** | 45.4 % | **40.4 %** | 5.80 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.70 € | **7.50 €** | 44.2 % | **40.5 %** | 7.60 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.60 € | **3.40 €** | 24.5 % | **17.6 %** | 3.50 € | stávame sa najlacnejší |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 6.50 € | **6.30 €** | 42.1 % | **37.7 %** | 6.40 € | stávame sa najlacnejší |
| Solight lišta pre akumulátorovú pílu RNP100/A/A1 | 1.50 € | **1.30 €** | 22.0 % | **5.7 %** | 1.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm, rozb... | 2.00 € | **1.80 €** | 52.0 % | **36.8 %** | 1.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 6000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 4000K, 720lm | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 4000K, 720lm | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.20 € | **1.00 €** | 39.4 % | **16.1 %** | 1.10 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.10 €** | 40.9 % | **19.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.10 €** | 40.9 % | **19.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, IP20, biela | 1.20 € | **1.00 €** | 43.5 % | **19.6 %** | 1.10 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.70 € | **1.50 €** | 45.5 % | **28.4 %** | 1.60 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 1.90 € | **1.70 €** | 33.2 % | **19.1 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.90 € | **1.70 €** | 23.6 % | **10.6 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **1.80 €** | 23.2 % | **10.9 %** | 1.90 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.80 € | **2.60 €** | 35.5 % | **25.8 %** | 2.70 € | stávame sa najlacnejší |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.90 € | **2.70 €** | 23.4 % | **14.9 %** | 2.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.90 € | **3.70 €** | 26.3 % | **19.8 %** | 3.80 € | stávame sa najlacnejší |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.60 € | **9.40 €** | 54.6 % | **51.3 %** | 9.50 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.10 € | **7.90 €** | 11.1 % | **8.3 %** | 8.00 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.50 € | **8.30 €** | 33.7 % | **30.5 %** | 8.40 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, čierna | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, biela | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight digitálny merač spotreby el. energie, veľký ... | 10.00 € | **9.80 €** | 25.1 % | **22.6 %** | 9.90 € | stávame sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 10.00 € | **9.80 €** | 45.7 % | **42.8 %** | 9.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.60 € | **7.40 €** | 24.8 % | **21.5 %** | 7.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.10 € | **7.90 €** | 36.9 % | **33.5 %** | 8.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **6.90 €** | 13.4 % | **10.2 %** | 7.00 € | stávame sa najlacnejší |
| Senzor Uni-T Flex Clamp UT-CS09D | 55.00 € | **54.90 €** | 14.9 % | **14.7 %** | 54.94 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757W | 28.00 € | **27.90 €** | 15.2 % | **14.8 %** | 27.96 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 181 | 20.00 € | **19.90 €** | 15.2 % | **14.6 %** | 19.96 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 47.00 € | **46.90 €** | 14.6 % | **14.3 %** | 46.97 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/B | 17.00 € | **16.90 €** | 14.6 % | **13.9 %** | 16.99 € | stávame sa najlacnejší |
| Niceboy Aura 5 ANC | 45.00 € | **44.90 €** | 18.1 % | **17.8 %** | 44.99 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 6.70 € | **6.60 €** | 30.6 % | **28.7 %** | 6.65 € | stávame sa najlacnejší |
| Súprava celodenných filtrov Freewell Real Locking s ... | 220.00 € | **219.90 €** | 14.9 % | **14.9 %** | 219.94 € | stávame sa najlacnejší |

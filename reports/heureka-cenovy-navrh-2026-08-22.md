# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-22

Vstup: `premiumstoresk_20260822_2134.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **5512**
- Návrh **zvýšiť** cenu: **387** produktov
- Návrh **znížiť** cenu: **797** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4328** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **91**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (387)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Salente Combo-4In1 | 125.00 € | **132.90 €** | 8.4 % | **15.2 %** | 125.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mobilný ovládač GameSir X5s (biely) | 48.00 € | **54.50 €** | 14.6 % | **30.2 %** | 48.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL CHARGEES3 | 114.50 € | **119.50 €** | 10.4 % | **15.2 %** | 114.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia IP kamera s LED světlom | 33.00 € | **37.50 €** | 38.6 % | **57.5 %** | 33.14 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 16.50 € | **20.50 €** | 12.4 % | **39.6 %** | 16.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje RK4182PW4 | 281.00 € | **285.00 €** | 6.5 % | **8.0 %** | 281.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 12.90 € | **16.90 €** | 5.5 % | **38.2 %** | 16.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.90 € | **25.50 €** | 36.1 % | **58.5 %** | 21.92 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 36.50 € | **40.00 €** | 26.1 % | **38.2 %** | 36.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight ručná akumulátorová píla, 150mm | 41.50 € | **45.00 €** | 14.6 % | **24.3 %** | 41.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 51.00 € | **54.50 €** | 28.4 % | **37.3 %** | 51.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 13.50 € | **17.00 €** | 8.7 % | **36.8 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 9.70 € | **12.90 €** | 5.0 % | **39.7 %** | 12.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GV663B65 | 502.90 € | **506.00 €** | 6.4 % | **7.0 %** | 502.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 9.40 € | **12.50 €** | 5.6 % | **40.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 21.50 € | **24.50 €** | 19.6 % | **36.2 %** | 24.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka USB-C, 90W, PD fast charger | 13.90 € | **16.90 €** | 20.1 % | **46.0 %** | 16.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 37.00 € | **39.90 €** | 7.7 % | **16.1 %** | 37.23 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 6.20 € | **8.80 €** | 5.9 % | **50.3 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Perfect Steam Air Board L/Uni | 13.90 € | **16.50 €** | 12.4 % | **33.5 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (black) | 11.90 € | **14.50 €** | 16.7 % | **42.2 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 18.00 € | **20.50 €** | 26.3 % | **43.8 %** | 18.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 28.00 € | **30.50 €** | 5.0 % | **14.4 %** | 28.12 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.50 € | **64.00 €** | 19.8 % | **24.7 %** | 63.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 06A1 | 104.50 € | **107.00 €** | 7.2 % | **9.8 %** | 104.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástenná lampička CELE, 1x GU10, biela | 7.60 € | **9.90 €** | 5.4 % | **37.4 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo s displejom, 200lm, ... | 6.90 € | **9.10 €** | 6.2 % | **40.1 %** | 9.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Žehlicí prkno Classic S Basic | 28.90 € | **31.00 €** | 10.8 % | **18.9 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 47RB | 142.90 € | **145.00 €** | 10.1 % | **11.7 %** | 142.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 21.90 € | **23.90 €** | 24.6 % | **36.0 %** | 21.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 39.50 € | **41.50 €** | 15.0 % | **20.8 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný panel Backlit, 40W, 3600lm, 400... | 16.00 € | **18.00 €** | 22.6 % | **37.9 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Black | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Blue | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Red | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C White | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo vodní filtry 3+1 | 11.90 € | **13.50 €** | 11.6 % | **26.6 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 6 zásuviek, 3m, 3 x 1mm2,... | 15.00 € | **16.50 €** | 34.8 % | **48.2 %** | 15.11 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless controler GameSir T4n (white) | 24.50 € | **25.90 €** | 14.6 % | **21.2 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 9.20 € | **10.50 €** | 29.2 % | **47.4 %** | 9.21 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 24.90 € | **26.00 €** | 28.7 % | **34.4 %** | 25.53 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 62.90 € | **64.00 €** | 10.6 % | **12.6 %** | 62.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 15W, 1000lm, 40... | 9.80 € | **10.90 €** | 26.3 % | **40.4 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Thermo Reflect L/Universal | 13.90 € | **15.00 €** | 12.4 % | **21.3 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **6.40 €** | 24.0 % | **47.0 %** | 5.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 22.50 € | **23.50 €** | 30.3 % | **36.1 %** | 22.53 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia otočná IP kamera | 37.50 € | **38.50 €** | 39.0 % | **42.7 %** | 37.54 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.50 € | **17.50 €** | 32.2 % | **40.2 %** | 16.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 11.50 € | **12.50 €** | 31.3 % | **42.7 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi 6 AX3000 Router (M30/E) | 38.90 € | **39.90 €** | 10.7 % | **13.5 %** | 38.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Black | 71.00 € | **71.90 €** | 9.6 % | **11.0 %** | 71.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 16.00 € | **16.90 €** | 31.9 % | **39.3 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GS  G7-SE Wired Controller XBOx &PC Or | 39.00 € | **39.90 €** | 10.2 % | **12.8 %** | 39.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6182PS4 | 328.00 € | **328.90 €** | 7.8 % | **8.1 %** | 328.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.10 € | **8.90 €** | 6.6 % | **17.1 %** | 8.11 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 9.80 € | **10.50 €** | 31.9 % | **41.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá ONIKUMA X25 (čierne) | 13.90 € | **14.50 €** | 16.4 % | **21.4 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 19.50 € | **20.00 €** | 13.6 % | **16.5 %** | 19.53 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izbová anténa, DVB-T2/FM, 36dB | 14.00 € | **14.50 €** | 39.1 % | **44.1 %** | 14.06 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **47.50 €** | 35.9 % | **37.3 %** | 47.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 71.00 € | **71.50 €** | 17.6 % | **18.4 %** | 71.24 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 14.00 € | **14.50 €** | 43.7 % | **48.8 %** | 14.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.00 € | **10.50 €** | 41.4 % | **48.5 %** | 10.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nepriamy germicidný UV žiarič | 62.00 € | **62.50 €** | 38.2 % | **39.3 %** | 62.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.00 € | **30.50 €** | 36.9 % | **39.2 %** | 30.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dezinfekčná bezozónová UV lampa 100W | 42.00 € | **42.50 €** | 33.7 % | **35.3 %** | 42.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight drevený snehuliak, 4x LED, 2x AA | 13.00 € | **13.50 €** | 41.9 % | **47.3 %** | 13.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 21.00 € | **21.50 €** | 43.1 % | **46.5 %** | 21.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 12.00 € | **12.50 €** | 41.8 % | **47.7 %** | 12.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 12.00 € | **12.50 €** | 41.8 % | **47.7 %** | 12.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 103.00 € | **103.50 €** | 34.5 % | **35.1 %** | 103.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 13.00 € | **13.50 €** | 41.9 % | **47.3 %** | 13.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 31.00 € | **31.50 €** | 52.6 % | **55.0 %** | 31.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.00 € | **11.50 €** | 34.3 % | **40.4 %** | 11.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 22.00 € | **22.50 €** | 28.9 % | **31.8 %** | 22.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight koaxiálny kábel CC120, voľne, 100m | 25.00 € | **25.50 €** | 37.2 % | **40.0 %** | 25.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 40.00 € | **40.50 €** | 35.1 % | **36.7 %** | 40.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 22.00 € | **22.50 €** | 37.7 % | **40.8 %** | 22.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 32.00 € | **32.50 €** | 31.2 % | **33.2 %** | 32.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.00 € | **26.50 €** | 34.4 % | **37.0 %** | 26.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.00 € | **26.50 €** | 34.4 % | **37.0 %** | 26.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 22.00 € | **22.50 €** | 28.5 % | **31.4 %** | 22.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 12.00 € | **12.50 €** | 31.0 % | **36.4 %** | 12.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.00 € | **12.50 €** | 22.0 % | **27.0 %** | 12.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 31.00 € | **31.50 €** | 34.3 % | **36.4 %** | 31.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 71.00 € | **71.50 €** | 38.4 % | **39.3 %** | 71.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 39.00 € | **39.50 €** | 16.5 % | **18.0 %** | 39.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 19.00 € | **19.50 €** | 45.0 % | **48.9 %** | 19.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 12.00 € | **12.50 €** | 38.8 % | **44.6 %** | 12.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.00 € | **12.50 €** | 40.2 % | **46.0 %** | 12.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 24.00 € | **24.50 €** | 42.4 % | **45.4 %** | 24.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 24.00 € | **24.50 €** | 42.4 % | **45.4 %** | 24.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočné záves, cencúle, 360 LED, 9m x 0... | 24.00 € | **24.50 €** | 42.4 % | **45.4 %** | 24.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.00 € | **23.50 €** | 33.9 % | **36.9 %** | 23.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 13.00 € | **13.50 €** | 32.1 % | **37.2 %** | 13.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 22.00 € | **22.50 €** | 16.8 % | **19.5 %** | 22.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.00 € | **23.50 €** | 14.0 % | **16.5 %** | 23.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 10.00 € | **10.50 €** | 31.8 % | **38.4 %** | 10.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.00 € | **19.50 €** | 34.8 % | **38.3 %** | 19.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 23.00 € | **23.50 €** | 27.7 % | **30.5 %** | 23.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stropné osvetlenie prachotesné, G13, pre 2x ... | 21.00 € | **21.50 €** | 35.0 % | **38.2 %** | 21.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.00 € | **11.50 €** | 35.1 % | **41.2 %** | 11.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.00 € | **16.50 €** | 31.3 % | **35.4 %** | 16.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.00 € | **10.50 €** | 26.6 % | **33.0 %** | 10.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 10.00 € | **10.50 €** | 28.8 % | **35.3 %** | 10.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.00 € | **28.50 €** | 19.6 % | **21.8 %** | 28.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.00 € | **44.50 €** | 11.0 % | **12.3 %** | 44.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 14.00 € | **14.50 €** | 38.8 % | **43.8 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 14.00 € | **14.50 €** | 21.2 % | **25.5 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 14.00 € | **14.50 €** | 21.1 % | **25.4 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 24.00 € | **24.50 €** | 29.6 % | **32.4 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 22.00 € | **22.50 €** | 30.2 % | **33.1 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 14.00 € | **14.50 €** | 40.0 % | **45.0 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie so senzorom Siena, ... | 19.00 € | **19.50 €** | 22.4 % | **25.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy PILOT S10 Rear Cam | 24.00 € | **24.50 €** | 8.6 % | **10.8 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Air Board M Compact | 55.00 € | **55.50 €** | 9.1 % | **10.1 %** | 55.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 35.00 € | **35.50 €** | 7.9 % | **9.4 %** | 35.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálny digitálny multimeter UNI-T UT191T | 72.00 € | **72.50 €** | 14.4 % | **15.2 %** | 72.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Detektor kovov UNI-T UT387E | 44.00 € | **44.50 €** | 7.7 % | **8.9 %** | 44.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UNI-T UT501A tester izolačného odporu | 59.00 € | **59.50 €** | 13.2 % | **14.1 %** | 59.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s podperou, 3 x 10A, biely | 1.90 € | **2.40 €** | 8.8 % | **37.4 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CrockPot CSC062X | 156.00 € | **156.50 €** | 6.1 % | **6.5 %** | 156.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Roborock Qrevo C Pro Black | 607.00 € | **607.50 €** | 5.3 % | **5.4 %** | 607.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Icequeen-Wh | 19.00 € | **19.50 €** | 5.2 % | **8.0 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9252I | 252.00 € | **252.50 €** | 7.9 % | **8.1 %** | 252.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver VS5910X | 275.00 € | **275.50 €** | 7.3 % | **7.5 %** | 275.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Svetelný merač UNI-T UT383 | 17.00 € | **17.50 €** | 14.5 % | **17.9 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Garett ROSE Gold Mesh Steel | 67.00 € | **67.50 €** | 9.0 % | **9.8 %** | 67.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Garett ROSE Gold Solid Steel | 67.00 € | **67.50 €** | 9.0 % | **9.8 %** | 67.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 615W Precise | 56.00 € | **56.50 €** | 7.2 % | **8.1 %** | 56.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 22.50 € | **23.00 €** | 10.5 % | **13.0 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.00 € | **19.50 €** | 5.3 % | **8.1 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 94.50 € | **94.90 €** | 37.8 % | **38.4 %** | 94.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 76.50 € | **76.90 €** | 38.3 % | **39.1 %** | 76.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente G4 robotický vysavač | 115.50 € | **115.90 €** | 7.7 % | **8.1 %** | 115.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-G4 | 115.50 € | **115.90 €** | 7.7 % | **8.1 %** | 115.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson MIC201IBT | 113.50 € | **113.90 €** | 11.6 % | **12.0 %** | 113.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje F492PW | 169.50 € | **169.90 €** | 5.6 % | **5.9 %** | 169.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.50 € | **10.90 €** | 35.3 % | **40.4 %** | 10.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 11.50 € | **11.90 €** | 36.1 % | **40.8 %** | 11.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 12.50 € | **12.90 €** | 30.3 % | **34.5 %** | 12.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 10.50 € | **10.90 €** | 7.2 % | **11.3 %** | 10.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 10.50 € | **10.90 €** | 6.7 % | **10.8 %** | 10.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 14.50 € | **14.90 €** | 42.4 % | **46.3 %** | 14.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.50 € | **14.90 €** | 45.2 % | **49.2 %** | 14.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter digitálny V33 | 11.50 € | **11.90 €** | 42.1 % | **47.0 %** | 11.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 13.50 € | **13.90 €** | 38.6 % | **42.7 %** | 13.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rotačná kefa pre DysonV6, V7, V8, V10, V11 | 12.50 € | **12.90 €** | 27.0 % | **31.1 %** | 12.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 12W, 900lm, ... | 8.40 € | **8.80 €** | 38.0 % | **44.5 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.4 % | **14.2 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástenný keramický ohrievač, 2000 W, biely | 39.50 € | **39.90 €** | 4.8 % | **5.9 %** | 39.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 17.50 € | **17.90 €** | 43.1 % | **46.4 %** | 17.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný dvojramenný konzolový držiak pre plo... | 30.50 € | **30.90 €** | 31.8 % | **33.5 %** | 30.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.50 € | **17.90 €** | 43.3 % | **46.6 %** | 17.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.50 € | **20.90 €** | 34.1 % | **36.7 %** | 20.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.50 € | **20.90 €** | 20.5 % | **22.9 %** | 20.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.50 € | **20.90 €** | 27.8 % | **30.3 %** | 20.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 31.50 € | **31.90 €** | 37.0 % | **38.7 %** | 31.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 25.50 € | **25.90 €** | 25.3 % | **27.2 %** | 25.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.50 € | **16.90 €** | 35.8 % | **39.1 %** | 16.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 37.50 € | **37.90 €** | 10.4 % | **11.6 %** | 37.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.50 € | **27.90 €** | 40.4 % | **42.5 %** | 27.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 25.50 € | **25.90 €** | 32.5 % | **34.5 %** | 25.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny bezkontaktný alkohol tester, F... | 57.50 € | **57.90 €** | 28.4 % | **29.3 %** | 57.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 24.50 € | **24.90 €** | 43.0 % | **45.3 %** | 24.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.50 € | **24.90 €** | 36.1 % | **38.3 %** | 24.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 16.50 € | **16.90 €** | 36.1 % | **39.3 %** | 16.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.50 € | **25.90 €** | 25.3 % | **27.3 %** | 25.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 22.50 € | **22.90 €** | 21.5 % | **23.7 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 43.50 € | **43.90 €** | 40.0 % | **41.3 %** | 43.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 19.50 € | **19.90 €** | 31.7 % | **34.4 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 19.50 € | **19.90 €** | 31.7 % | **34.4 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 23.50 € | **23.90 €** | 33.9 % | **36.2 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 33.50 € | **33.90 €** | 51.0 % | **52.8 %** | 33.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 20.50 € | **20.90 €** | 36.4 % | **39.0 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight domáca kamera s nočným svetlom a hodinami | 34.50 € | **34.90 €** | 36.7 % | **38.3 %** | 34.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 21.50 € | **21.90 €** | 19.6 % | **21.8 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.50 € | **18.90 €** | 10.1 % | **12.5 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multimeter Uni-T UT256 | 26.50 € | **26.90 €** | 8.8 % | **10.5 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálny digitálny multimeter UNI-T UT191E | 57.50 € | **57.90 €** | 9.1 % | **9.8 %** | 57.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tester napätia a spojitosti Uni-T UT15B | 26.50 € | **26.90 €** | 6.9 % | **8.5 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tester káblov HDMI UNI-T UT681HDMI | 18.50 € | **18.90 €** | 7.3 % | **9.6 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM40T | 29.50 € | **29.90 €** | 11.1 % | **12.6 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 321990020 | 55.50 € | **55.90 €** | 9.4 % | **10.2 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kaon MZ-52, satelitní přijímač Skylink | 60.50 € | **60.90 €** | 7.3 % | **8.0 %** | 60.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 10/100 8-Port Switch (DES-108) | 20.50 € | **20.90 €** | 12.5 % | **14.7 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.50 € | **39.90 €** | 16.1 % | **17.2 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 471.50 € | **471.90 €** | 9.0 % | **9.0 %** | 471.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| WYBOT C1 Pro – bezdrôtový robot na čistenie bazénov | 417.50 € | **417.90 €** | 5.5 % | **5.6 %** | 417.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-L7 | 270.50 € | **270.90 €** | 7.9 % | **8.0 %** | 270.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Boombox 3 BLACK | 307.50 € | **307.90 €** | 8.7 % | **8.9 %** | 307.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WOI4S8PPM1SX | 449.50 € | **449.90 €** | 6.7 % | **6.8 %** | 449.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 8.10 € | **8.30 €** | 38.3 % | **41.8 %** | 8.19 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.70 € | **8.90 €** | 6.8 % | **9.3 %** | 8.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely | 2.30 € | **2.50 €** | 35.5 % | **47.3 %** | 2.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 4.80 € | **5.00 €** | 37.9 % | **43.6 %** | 4.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 5.30 € | **5.50 €** | 6.4 % | **10.4 %** | 5.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 5.30 € | **5.50 €** | 6.4 % | **10.4 %** | 5.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 7.60 € | **7.80 €** | 30.1 % | **33.5 %** | 7.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka IP54, sivá | 1.90 € | **2.10 €** | 12.8 % | **24.6 %** | 1.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 6.20 € | **6.40 €** | 6.6 % | **10.0 %** | 6.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 5m | 5.60 € | **5.80 €** | 6.6 % | **10.4 %** | 5.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka, 16A, biela, vypínač | 1.80 € | **2.00 €** | 34.3 % | **49.2 %** | 1.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.00 € | **1.20 €** | 23.2 % | **47.8 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.70 € | **1.90 €** | 22.3 % | **36.7 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lišta pre akumulátorovú pílu RNP100/A/A1 | 1.30 € | **1.50 €** | 5.7 % | **22.0 %** | 1.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **2.30 €** | 33.4 % | **46.1 %** | 2.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.40 € | **8.60 €** | 15.2 % | **17.9 %** | 8.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.30 € | **9.50 €** | 30.1 % | **32.9 %** | 9.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.80 € | **10.00 €** | 38.1 % | **40.9 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sada LED sviečok s časovačom, 4ks, 6,5cm, ba... | 9.80 € | **10.00 €** | 50.3 % | **53.4 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 317.90 € | **318.00 €** | 12.1 % | **12.1 %** | 317.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 659.90 € | **660.00 €** | 10.7 % | **10.7 %** | 659.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 560.90 € | **561.00 €** | 7.3 % | **7.4 %** | 560.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Partybox Club 120 | 265.90 € | **266.00 €** | 9.8 % | **9.8 %** | 265.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GV520E15 | 290.90 € | **291.00 €** | 8.0 % | **8.1 %** | 290.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 8.20 € | **8.30 €** | 53.6 % | **55.5 %** | 8.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 22.90 € | **23.00 €** | 32.6 % | **33.2 %** | 22.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 17.90 € | **18.00 €** | 44.7 % | **45.5 %** | 17.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.90 € | **21.00 €** | 37.7 % | **38.4 %** | 20.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom LECCE, ... | 21.90 € | **22.00 €** | 37.8 % | **38.4 %** | 21.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.90 € | **20.00 €** | 33.0 % | **33.7 %** | 19.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 16.90 € | **17.00 €** | 44.5 % | **45.3 %** | 16.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 16.90 € | **17.00 €** | 44.5 % | **45.3 %** | 16.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 29.90 € | **30.00 €** | 34.8 % | **35.3 %** | 29.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 17.90 € | **18.00 €** | 34.5 % | **35.3 %** | 17.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor PRO, 20W, 1840lm, 5000K, IP65 | 8.70 € | **8.80 €** | 43.2 % | **44.8 %** | 8.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 49.90 € | **50.00 €** | 63.3 % | **63.6 %** | 49.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 35.90 € | **36.00 €** | 44.6 % | **45.0 %** | 35.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 21.90 € | **22.00 €** | 7.2 % | **7.7 %** | 21.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplomer | 9.20 € | **9.30 €** | 31.7 % | **33.1 %** | 9.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.20 € | **9.30 €** | 24.2 % | **25.6 %** | 9.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 39.90 € | **40.00 €** | 33.6 % | **33.9 %** | 39.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 28.90 € | **29.00 €** | 8.6 % | **9.0 %** | 29.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 26.90 € | **27.00 €** | 35.2 % | **35.7 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal B817S255 | 29.90 € | **30.00 €** | 5.5 % | **5.8 %** | 29.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mio Smartbox IV | 30.90 € | **31.00 €** | 8.6 % | **8.9 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 10/100 5-Port Switch (DES-105) | 17.90 € | **18.00 €** | 5.5 % | **6.0 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka NILS Extreme HM603 růžová | 35.90 € | **36.00 €** | 9.1 % | **9.4 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.60 € | **5.70 €** | 35.1 % | **37.5 %** | 5.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 6.80 € | **6.90 €** | 32.6 % | **34.5 %** | 6.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR senzor pro E27 žiarovku, biely | 6.80 € | **6.90 €** | 44.0 % | **46.1 %** | 6.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.10 € | **6.20 €** | 34.4 % | **36.6 %** | 6.15 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.30 € | **6.40 €** | 26.5 % | **28.5 %** | 6.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.30 € | **6.40 €** | 26.5 % | **28.5 %** | 6.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.30 € | **7.40 €** | 43.7 % | **45.7 %** | 7.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda červená, závesná, 60cm,... | 4.30 € | **4.40 €** | 42.7 % | **46.0 %** | 4.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.30 € | **7.40 €** | 43.7 % | **45.7 %** | 7.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR senzor nástenný, vonkajší, biely | 7.10 € | **7.20 €** | 33.0 % | **34.9 %** | 7.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR stropný senzor, interiérový, biely | 7.30 € | **7.40 €** | 43.7 % | **45.7 %** | 7.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.60 € | **4.70 €** | 32.1 % | **35.0 %** | 4.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka s viečkom, biela | 6.30 € | **6.40 €** | 34.1 % | **36.2 %** | 6.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.80 € | **5.90 €** | 9.2 % | **11.0 %** | 5.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 4.80 € | **4.90 €** | 35.0 % | **37.8 %** | 4.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 6.60 € | **6.70 €** | 32.5 % | **34.5 %** | 6.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.80 € | **6.90 €** | 43.2 % | **45.3 %** | 6.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.80 € | **6.90 €** | 43.2 % | **45.3 %** | 6.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 7.10 € | **7.20 €** | 39.8 % | **41.7 %** | 7.19 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 7.80 € | **7.90 €** | 33.2 % | **34.9 %** | 7.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 6.60 € | **6.70 €** | 29.9 % | **31.9 %** | 6.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.30 € | **4.40 €** | 52.0 % | **55.5 %** | 4.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 6.30 € | **6.40 €** | 42.7 % | **44.9 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 4.80 € | **4.90 €** | 33.6 % | **36.4 %** | 4.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 7.80 € | **7.90 €** | 19.2 % | **20.7 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 4.30 € | **4.40 €** | 30.9 % | **34.0 %** | 4.40 € | dobehnutie 2. najlacnejšieho konkurenta |
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
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.60 €** | 31.7 % | **35.5 %** | 3.57 € | dobehnutie 2. najlacnejšieho konkurenta |
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
| Solight kefka na čistenie filtra pre Dyson Airwrap | 3.90 € | **4.00 €** | 19.7 % | **22.7 %** | 3.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.40 € | **2.50 €** | 29.2 % | **34.6 %** | 2.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 2.80 € | **2.90 €** | 27.9 % | **32.5 %** | 2.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.40 € | **3.50 €** | 32.9 % | **36.8 %** | 3.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.80 € | **2.90 €** | 31.6 % | **36.3 %** | 2.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 3.40 € | **3.50 €** | 10.1 % | **13.4 %** | 3.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 4 x 10A, čierny | 2.50 € | **2.60 €** | 30.3 % | **35.5 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.40 € | **1.50 €** | 26.5 % | **35.5 %** | 1.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight fast charger do auta 30W USB-C + A | 3.90 € | **4.00 €** | 39.1 % | **42.6 %** | 4.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, biela, 2m | 3.50 € | **3.60 €** | 33.0 % | **36.8 %** | 3.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 3.90 € | **4.00 €** | 33.2 % | **36.6 %** | 4.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.50 € | **1.60 €** | 28.4 % | **36.9 %** | 1.61 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 0.90 € | **1.00 €** | 28.4 % | **42.6 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 0.90 € | **1.00 €** | 28.4 % | **42.6 %** | 0.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 0.90 € | **1.00 €** | 28.4 % | **42.6 %** | 0.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 0.80 € | **0.90 €** | 32.7 % | **49.3 %** | 0.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 0.80 € | **0.90 €** | 32.7 % | **49.3 %** | 0.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.80 € | **0.90 €** | 22.7 % | **38.1 %** | 0.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka 201, priemer 3mm x 140mm, AC napäti... | 0.60 € | **0.70 €** | 16.1 % | **35.5 %** | 0.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight SCART kábel, SCART konektor - SCART konektor... | 1.80 € | **1.90 €** | 30.7 % | **37.9 %** | 1.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight náhradný lievik pre 1T08, 5ks | 1.60 € | **1.70 €** | 6.6 % | **13.3 %** | 1.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.80 € | **1.90 €** | 29.5 % | **36.7 %** | 1.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight anténny rozbočovač hybridný priamy | 1.80 € | **1.90 €** | 28.4 % | **35.5 %** | 1.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 1.80 € | **1.90 €** | 26.2 % | **33.2 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.50 € | **8.60 €** | 35.0 % | **36.6 %** | 8.54 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 8.80 € | **8.90 €** | 44.2 % | **45.9 %** | 8.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 8.80 € | **8.90 €** | 44.2 % | **45.9 %** | 8.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.00 € | **7.10 €** | 43.7 % | **45.8 %** | 7.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight magnetický USB-C/Lightning kábel, USB-C kone... | 5.20 € | **5.30 €** | 40.5 % | **43.2 %** | 5.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.90 € | **10.00 €** | 25.6 % | **26.8 %** | 9.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda strieborná, závesná, ča... | 7.50 € | **7.60 €** | 50.6 % | **52.6 %** | 7.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 11.90 € | **12.00 €** | 36.8 % | **38.0 %** | 11.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 13.90 € | **14.00 €** | 31.9 % | **32.8 %** | 13.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 6.70 € | **6.80 €** | 30.9 % | **32.9 %** | 6.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.10 € | **9.20 €** | 38.0 % | **39.5 %** | 9.16 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 12.90 € | **13.00 €** | 25.3 % | **26.3 %** | 12.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.50 € | **9.60 €** | 30.5 % | **31.8 %** | 9.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.50 € | **4.60 €** | 42.9 % | **46.1 %** | 4.57 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.40 € | **5.50 €** | 33.8 % | **36.3 %** | 5.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 10.90 € | **11.00 €** | 30.7 % | **31.9 %** | 10.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 4.70 € | **4.80 €** | 34.5 % | **37.4 %** | 4.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 9.00 € | **9.10 €** | 5.1 % | **6.3 %** | 9.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 7.40 € | **7.50 €** | 36.4 % | **38.3 %** | 7.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.00 € | **5.10 €** | 15.8 % | **18.1 %** | 5.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 6.00 € | **6.10 €** | 33.3 % | **35.5 %** | 6.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 7.90 € | **8.00 €** | 36.7 % | **38.4 %** | 7.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.40 € | **7.50 €** | 36.4 % | **38.3 %** | 7.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 7.90 € | **8.00 €** | 10.9 % | **12.3 %** | 7.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.20 € | **3.30 €** | 16.1 % | **19.8 %** | 3.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 3.70 € | **3.80 €** | 16.6 % | **19.7 %** | 3.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 3.70 € | **3.80 €** | 36.1 % | **39.8 %** | 3.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 8.40 € | **8.50 €** | 43.5 % | **45.2 %** | 8.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 18W, E27, 4000K... | 2.20 € | **2.30 €** | 44.2 % | **50.8 %** | 2.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne nástenné svetlo, teplá a studená... | 8.60 € | **8.70 €** | 41.0 % | **42.6 %** | 8.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight filter pre Dyson V11, V15 | 6.90 € | **7.00 €** | 29.0 % | **30.8 %** | 6.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 6.90 € | **7.00 €** | 19.1 % | **20.8 %** | 6.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight držiak DVB-T a internetové antény na stenu, ... | 7.90 € | **8.00 €** | 27.7 % | **29.3 %** | 7.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 8.50 € | **8.60 €** | 5.7 % | **6.9 %** | 8.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 6.00 € | **6.10 €** | 11.6 % | **13.5 %** | 6.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.70 € | **4.80 €** | 16.9 % | **19.3 %** | 4.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 4.40 € | **4.50 €** | 21.3 % | **24.0 %** | 4.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 8.30 € | **8.40 €** | 52.7 % | **54.5 %** | 8.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.20 € | **4.30 €** | 8.7 % | **11.3 %** | 4.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.50 € | **4.60 €** | 30.7 % | **33.6 %** | 4.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.20 € | **4.30 €** | 9.1 % | **11.7 %** | 4.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 4.20 € | **4.30 €** | 6.0 % | **8.6 %** | 4.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.20 € | **5.30 €** | 33.4 % | **35.9 %** | 5.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 5.90 € | **6.00 €** | 23.3 % | **25.4 %** | 5.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight senzor pre meteostanice TE110 | 5.20 € | **5.30 €** | 18.1 % | **20.4 %** | 5.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 7.70 € | **7.80 €** | 32.9 % | **34.6 %** | 7.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.40 € | **8.50 €** | 32.1 % | **33.7 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 9.60 € | **9.70 €** | 32.7 % | **34.1 %** | 9.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovový vianočný stromček, 2x AA | 4.70 € | **4.80 €** | 42.0 % | **45.1 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.20 € | **4.30 €** | 33.4 % | **36.6 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 4.90 € | **5.00 €** | 33.7 % | **36.4 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 109.90 € | **110.00 €** | 19.9 % | **20.0 %** | 109.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANDY CBT6130/3X | 65.90 € | **66.00 €** | 8.4 % | **8.6 %** | 65.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (797)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravírovací stroj xTool P3 80W | 6803.00 € | **6503.00 €** | 15.0 % | **9.9 %** | 6503.49 € | stávame sa najlacnejší |
| GORENJE F4142PW | 359.00 € | **221.90 €** | 74.8 % | **8.0 %** | 222.00 € | stávame sa najlacnejší |
| BEKO BMGB25332BG | 309.00 € | **176.90 €** | 88.1 % | **7.7 %** | 177.00 € | stávame sa najlacnejší |
| Gorenje NRK619DA2XL4 | 599.00 € | **468.90 €** | 34.2 % | **5.1 %** | 454.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1441.90 € | **1346.50 €** | 15.0 % | **7.4 %** | 1346.85 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool P2S (sivý) | 3588.00 € | **3499.90 €** | 15.0 % | **12.2 %** | 3500.00 € | stávame sa najlacnejší |
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 1066.50 € | **998.90 €** | 15.0 % | **7.7 %** | 999.00 € | stávame sa najlacnejší |
| Creality Falcon 2 Pro S 22W laserový gravírovací stroj | 819.50 € | **757.90 €** | 15.0 % | **6.4 %** | 758.00 € | stávame sa najlacnejší |
| Robot na čistenie bazénov WYBOT M1C | 730.50 € | **669.90 €** | 15.0 % | **5.4 %** | 670.00 € | stávame sa najlacnejší |
| Gorenje RK4182PS4 | 379.00 € | **319.50 €** | 26.3 % | **6.5 %** | 319.90 € | stávame sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 682.50 € | **631.50 €** | 15.0 % | **6.4 %** | 631.75 € | stávame sa najlacnejší |
| Gorenje W2PNEI84A1SW | 439.00 € | **389.00 €** | 35.3 % | **19.9 %** | 389.47 € | stávame sa najlacnejší |
| Whirlpool MBNA910X | 289.00 € | **242.50 €** | 28.7 % | **8.0 %** | 242.90 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 575.50 € | **529.90 €** | 15.0 % | **5.9 %** | 529.95 € | stávame sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM20 Helmet s ... | 597.00 € | **555.50 €** | 15.0 % | **7.0 %** | 555.89 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 3075 Arcus Wi-Fi | 468.90 € | **428.00 €** | 15.0 % | **5.0 %** | 391.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 230290000 | 209.99 € | **170.00 €** | 34.1 % | **8.6 %** | 170.30 € | stávame sa najlacnejší |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 525.50 € | **489.00 €** | 15.0 % | **7.0 %** | 489.37 € | stávame sa najlacnejší |
| Herný volant pre nákladné vozidlá Moza Racing RS071 ... | 532.90 € | **501.00 €** | 15.0 % | **8.1 %** | 501.10 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 400.50 € | **369.90 €** | 15.0 % | **6.2 %** | 370.00 € | stávame sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 439.00 € | **409.00 €** | 14.8 % | **6.9 %** | 409.40 € | stávame sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 418.50 € | **388.90 €** | 15.0 % | **6.9 %** | 389.00 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 409.00 € | **379.90 €** | 15.0 % | **6.8 %** | 379.95 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 | 377.50 € | **348.90 €** | 15.0 % | **6.3 %** | 349.00 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3431B 1600W 12V | 305.00 € | **278.50 €** | 15.0 % | **5.0 %** | 278.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus T2 smart bike trainer | 615.90 € | **589.90 €** | 15.0 % | **10.2 %** | 590.00 € | stávame sa najlacnejší |
| Blesk GODOX AD600BMII Wistro s uchytením Bowens | 564.00 € | **538.90 €** | 15.0 % | **9.8 %** | 539.00 € | stávame sa najlacnejší |
| Solight profesionálna smart WIFI meteostanica | 123.50 € | **98.90 €** | 49.9 % | **20.0 %** | 99.00 € | stávame sa najlacnejší |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 402.90 € | **378.90 €** | 15.0 % | **8.2 %** | 379.00 € | stávame sa najlacnejší |
| Letové pedále MOZA Racing AS019 | 371.90 € | **349.00 €** | 15.1 % | **8.0 %** | 349.01 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Cyberpad (modrý) | 473.90 € | **451.00 €** | 15.0 % | **9.4 %** | 451.50 € | stávame sa najlacnejší |
| Inteligentný cyklotrenažér Cycplus T2H | 407.50 € | **384.90 €** | 15.0 % | **8.6 %** | 385.00 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP Z22P PRO s 22-palcovým doty... | 330.90 € | **308.90 €** | 15.0 % | **7.4 %** | 309.00 € | stávame sa najlacnejší |
| HDD 3.5" 6TB 256MB Seagate SKYHAWK pro kamerové syst... | 349.00 € | **327.90 €** | 15.0 % | **8.0 %** | 328.00 € | stávame sa najlacnejší |
| Variabilní posilovací lavice HMS L1237 | 241.90 € | **220.90 €** | 15.1 % | **5.1 %** | 199.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cyklotrenažér Cycplus T3 | 849.90 € | **828.90 €** | 15.0 % | **12.2 %** | 829.00 € | stávame sa najlacnejší |
| Reproduktory Edifier S360DB 2.1 (hnedé) | 359.50 € | **338.50 €** | 14.9 % | **8.2 %** | 338.90 € | stávame sa najlacnejší |
| Whirlpool WHK 26373 XBR6EA AI AdaptiveCo | 554.90 € | **534.50 €** | 10.0 % | **6.0 %** | 534.70 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1350.00 € | **1329.90 €** | 15.0 % | **13.3 %** | 1330.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 98.50 € | **78.90 €** | 44.0 % | **15.3 %** | 79.00 € | stávame sa najlacnejší |
| Mechanický eliptický trenažér HMS H6512 | 224.90 € | **205.50 €** | 15.1 % | **5.1 %** | 165.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 65.00 € | **45.90 €** | 58.6 % | **12.0 %** | 46.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 87.90 € | **68.90 €** | 43.8 % | **12.7 %** | 69.00 € | stávame sa najlacnejší |
| Měnič napětí EPever IPower IP2000-42-Plus-T 2000W 48V | 220.00 € | **201.50 €** | 14.9 % | **5.2 %** | 185.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Variabilní posilovací lavice HMS L5166 | 211.50 € | **193.50 €** | 14.9 % | **5.2 %** | 192.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZEUSLAP Z16H 16" prenosný monitor | 246.90 € | **228.90 €** | 15.1 % | **6.7 %** | 229.00 € | stávame sa najlacnejší |
| Gramofon KRUGER & MATZ TT-602 | 204.90 € | **187.00 €** | 15.1 % | **5.0 %** | 187.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 225.90 € | **208.00 €** | 15.0 % | **5.9 %** | 208.39 € | stávame sa najlacnejší |
| Ultima Apollo S90 Soundbar | 326.50 € | **308.90 €** | 14.9 % | **8.7 %** | 309.00 € | stávame sa najlacnejší |
| Lavice pod velkou činku HMS Premium LS3061 | 203.00 € | **185.50 €** | 14.9 % | **5.0 %** | 164.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 195.90 € | **178.90 €** | 15.1 % | **5.1 %** | 179.00 € | stávame sa najlacnejší |
| Průmyslový endoskop Ermenrich Seek VE70 Fialový | 187.00 € | **171.00 €** | 14.9 % | **5.1 %** | 170.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic SC-MAX3500 | 669.00 € | **653.90 €** | 11.8 % | **9.3 %** | 653.95 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 200.00 € | **184.90 €** | 15.0 % | **6.3 %** | 185.00 € | stávame sa najlacnejší |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 261.00 € | **246.00 €** | 15.0 % | **8.4 %** | 246.09 € | stávame sa najlacnejší |
| Činkový set v kufru HMS SKC20 2x10 kg | 169.50 € | **154.90 €** | 14.9 % | **5.0 %** | 119.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 60 Ah  Victron Energy AGM Sup... | 180.00 € | **165.50 €** | 14.2 % | **5.0 %** | 146.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO BT 2 anthrazit/black 0000/3973 ... | 169.90 € | **155.50 €** | 15.0 % | **5.3 %** | 149.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Průmyslový endoskop Ermenrich Seek VE50 Fialový | 161.00 € | **147.00 €** | 15.0 % | **5.0 %** | 147.05 € | stávame sa najlacnejší |
| Guzzanti GZ 210G | 472.90 € | **458.90 €** | 10.0 % | **6.8 %** | 459.00 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah VIPOW BAT0496 | 255.00 € | **241.00 €** | 14.9 % | **8.6 %** | 241.49 € | stávame sa najlacnejší |
| Lavice s hyperextenzí a opěrou HMS Premium LSR8311 | 156.50 € | **142.90 €** | 15.0 % | **5.0 %** | 111.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 485.00 € | **471.50 €** | 10.0 % | **6.9 %** | 471.80 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 172.00 € | **158.50 €** | 14.8 % | **5.8 %** | 158.90 € | stávame sa najlacnejší |
| LG F4A10S7NWH | 352.90 € | **339.50 €** | 10.1 % | **5.9 %** | 339.90 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-1400-24 UPS 1400W 24V čist... | 241.00 € | **227.90 €** | 15.0 % | **8.7 %** | 228.00 € | stávame sa najlacnejší |
| HDD 3.5" 1TB 64MB Seagate SKYHAWK pro kamerové systé... | 152.50 € | **139.50 €** | 14.9 % | **5.1 %** | 139.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Veslovací trenažér MERACH MR-R02B10 (čierny) | 412.50 € | **399.90 €** | 15.0 % | **11.5 %** | 400.00 € | stávame sa najlacnejší |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 711.50 € | **698.90 €** | 10.1 % | **8.1 %** | 699.00 € | stávame sa najlacnejší |
| Victron Energy VE.Bus BMS | 146.50 € | **133.90 €** | 14.9 % | **5.0 %** | 114.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činkový set HMS SGG30BAR 2x15 kg litina | 148.00 € | **135.50 €** | 15.0 % | **5.3 %** | 101.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 62.00 € | **49.50 €** | 37.7 % | **10.0 %** | 49.90 € | stávame sa najlacnejší |
| Solight laserová vodováha 12 línií, 360 °, zelený laser | 153.50 € | **141.00 €** | 50.2 % | **38.0 %** | 141.50 € | stávame sa najlacnejší |
| D-LINK WiFi AC USB 3.0 Adaptér (DWA-182) | 35.90 € | **23.50 €** | 63.7 % | **7.2 %** | 23.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Polohovatelná lavice HMS L 8015 | 139.90 € | **127.90 €** | 15.0 % | **5.1 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 273.50 € | **261.50 €** | 15.0 % | **10.0 %** | 261.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 76.50 € | **64.50 €** | 43.6 % | **21.1 %** | 64.90 € | stávame sa najlacnejší |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 146.50 € | **134.50 €** | 15.0 % | **5.5 %** | 134.90 € | stávame sa najlacnejší |
| ETA 002892020 | 79.99 € | **68.00 €** | 32.0 % | **12.2 %** | 68.13 € | stávame sa najlacnejší |
| Boxovací pytel DBX BUSHIDO 150 cm 50 kg | 126.50 € | **115.50 €** | 15.0 % | **5.0 %** | 95.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-TA51L3C-0360 5.0 Mpix venkovní IP kamera s IR... | 129.50 € | **118.50 €** | 15.2 % | **5.4 %** | 109.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-1050-24 UPS 1050W 24V čist... | 158.50 € | **147.50 €** | 15.1 % | **7.1 %** | 147.69 € | stávame sa najlacnejší |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 59.50 € | **48.90 €** | 40.2 % | **15.2 %** | 49.00 € | stávame sa najlacnejší |
| Variabilní posilovací lavice s expandéry HMS L1217 | 127.00 € | **116.50 €** | 14.8 % | **5.3 %** | 96.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chladící box TEESA TSA6004 40l, 12V/24V/230V/baterie... | 261.50 € | **251.00 €** | 15.0 % | **10.4 %** | 251.29 € | stávame sa najlacnejší |
| MAXXO VM Profi | 109.00 € | **98.90 €** | 21.6 % | **10.4 %** | 99.00 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK KARMA PRO 10x32 | 170.00 € | **159.90 €** | 14.9 % | **8.0 %** | 160.00 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 222.50 € | **212.50 €** | 15.0 % | **9.9 %** | 212.80 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1715, 2x bezdrátový ... | 205.50 € | **195.50 €** | 14.9 % | **9.3 %** | 195.90 € | stávame sa najlacnejší |
| Polohovatelná lavice HMS Premium L8022 | 114.50 € | **104.90 €** | 15.0 % | **5.4 %** | 86.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Orbitrek REBEL ACTIVE RBA-1011 | 144.00 € | **134.50 €** | 14.9 % | **7.3 %** | 134.82 € | stávame sa najlacnejší |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 67.50 € | **58.00 €** | 43.9 % | **23.7 %** | 58.50 € | stávame sa najlacnejší |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 148.90 € | **139.50 €** | 15.1 % | **7.9 %** | 139.90 € | stávame sa najlacnejší |
| Rovná lavice HMS Premium L8012 | 106.00 € | **96.90 €** | 15.0 % | **5.1 %** | 77.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Polohovatelná lavice HMS L8021 | 106.00 € | **96.90 €** | 15.0 % | **5.1 %** | 84.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 204.50 € | **195.50 €** | 14.9 % | **9.9 %** | 195.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 78.50 € | **69.50 €** | 44.3 % | **27.8 %** | 69.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 78.50 € | **69.50 €** | 44.3 % | **27.8 %** | 69.90 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Canon | 127.90 € | **119.00 €** | 15.1 % | **7.1 %** | 119.10 € | stávame sa najlacnejší |
| Kuchyňský robot Ruhhy 25728 | 152.00 € | **143.50 €** | 15.0 % | **8.6 %** | 143.78 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 138.00 € | **129.50 €** | 14.9 % | **7.9 %** | 129.90 € | stávame sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 64.50 € | **56.00 €** | 46.2 % | **27.0 %** | 56.50 € | stávame sa najlacnejší |
| Twist stepper s expandéry a úchopy HMS S 3096 zelený | 95.00 € | **86.90 €** | 15.0 % | **5.2 %** | 69.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 131.00 € | **122.90 €** | 14.9 % | **7.8 %** | 123.00 € | stávame sa najlacnejší |
| Twist stepper s expandéry a úchopy HMS S 3085 růžový | 97.50 € | **89.50 €** | 15.0 % | **5.5 %** | 69.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Twist stepper s expandéry a úchopy HMS S 3085 zelený | 97.50 € | **89.50 €** | 15.0 % | **5.5 %** | 69.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Twist stepper s expandéry a držadlem HMS S 8004 | 97.50 € | **89.50 €** | 15.0 % | **5.5 %** | 73.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činkový set v kufru HMS STC21 21 kg | 97.50 € | **89.50 €** | 15.0 % | **5.5 %** | 80.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal SV9201E0 | 196.90 € | **189.00 €** | 10.0 % | **5.6 %** | 189.10 € | stávame sa najlacnejší |
| Chromované profesionální činky HMS PREMIUM HH10 2 x ... | 87.50 € | **79.90 €** | 15.2 % | **5.2 %** | 74.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nastavitelné činky HMS HL05 3v1 | 89.00 € | **81.50 €** | 14.9 % | **5.3 %** | 74.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX V860III TTL pre Sony | 204.50 € | **197.00 €** | 15.0 % | **10.8 %** | 197.50 € | stávame sa najlacnejší |
| Intelligent self-cleaning cat litterbox UBPet C20 | 284.90 € | **277.50 €** | 15.0 % | **12.0 %** | 277.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 52.00 € | **44.90 €** | 43.7 % | **24.0 %** | 45.00 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP WL HD | 86.50 € | **79.50 €** | 14.8 % | **5.5 %** | 79.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 204.90 € | **197.90 €** | 15.0 % | **11.1 %** | 197.99 € | stávame sa najlacnejší |
| Whirlpool WHK 22373 X6EA AI AdaptiveCool | 505.90 € | **498.90 €** | 10.1 % | **8.6 %** | 499.00 € | stávame sa najlacnejší |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 158.50 € | **151.50 €** | 14.9 % | **9.8 %** | 151.90 € | stávame sa najlacnejší |
| Ultimea Poseidon D70 Soundbar | 166.50 € | **159.50 €** | 15.1 % | **10.2 %** | 159.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 48.90 € | **42.00 €** | 43.9 % | **23.6 %** | 42.50 € | stávame sa najlacnejší |
| Eliptický trenažér MERACH MR-E33B4 | 424.90 € | **418.00 €** | 15.0 % | **13.1 %** | 418.20 € | stávame sa najlacnejší |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 31.50 € | **24.90 €** | 54.0 % | **21.7 %** | 25.00 € | stávame sa najlacnejší |
| Twist stepper s expandéry HMS S 3033 růžový | 76.50 € | **69.90 €** | 15.3 % | **5.3 %** | 37.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Twist stepper s expandéry HMS S 3033 zelený | 76.50 € | **69.90 €** | 15.3 % | **5.3 %** | 37.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Twist stepper s expandéry HMS S 3033 žlutý | 76.50 € | **69.90 €** | 15.3 % | **5.3 %** | 37.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mini stepper s expandéry a úchopy HMS S 3038 | 76.50 € | **69.90 €** | 15.3 % | **5.3 %** | 56.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární se zaměřovačem LEVENHUK Camo ... | 80.50 € | **73.90 €** | 14.8 % | **5.4 %** | 73.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **88.90 €** | 14.9 % | **6.9 %** | 89.00 € | stávame sa najlacnejší |
| Rotoped DeerRun S500 Pro (čierny) | 246.50 € | **239.90 €** | 15.1 % | **12.0 %** | 240.00 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 88.50 € | **82.00 €** | 14.9 % | **6.5 %** | 82.26 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 88.50 € | **82.00 €** | 14.9 % | **6.5 %** | 82.26 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 41.00 € | **34.50 €** | 38.3 % | **16.3 %** | 34.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 40.50 € | **34.00 €** | 59.2 % | **33.7 %** | 34.50 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 115.90 € | **109.50 €** | 15.1 % | **8.7 %** | 109.90 € | stávame sa najlacnejší |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 92.90 € | **86.50 €** | 15.0 % | **7.1 %** | 86.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky + časový spí... | 18.90 € | **12.50 €** | 60.6 % | **6.2 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chromované profesionální činky HMS PREMIUM HH06 2 x ... | 72.00 € | **65.90 €** | 14.9 % | **5.2 %** | 62.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární panel CARCLEVER 35so30, nabíječka 30W | 74.00 € | **67.90 €** | 14.7 % | **5.2 %** | 65.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová vesta HMS KOR20 20 kg | 87.00 € | **80.90 €** | 14.7 % | **6.7 %** | 80.94 € | stávame sa najlacnejší |
| Inteligentná batéria pre DJI Mini 5 Pro | 87.00 € | **80.90 €** | 14.8 % | **6.7 %** | 81.00 € | stávame sa najlacnejší |
| Polyuretanová jednoručka HMS HPC 10 kg | 69.90 € | **63.90 €** | 14.9 % | **5.1 %** | 54.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Novis Kettle K1 Novis neomint | 131.50 € | **125.50 €** | 10.2 % | **5.2 %** | 116.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice WS 9050 | 70.50 € | **64.50 €** | 15.2 % | **5.4 %** | 64.69 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 85.50 € | **79.50 €** | 15.2 % | **7.1 %** | 79.79 € | stávame sa najlacnejší |
| Rowenta RH98A9WO | 284.50 € | **278.50 €** | 10.0 % | **7.7 %** | 278.80 € | stávame sa najlacnejší |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 115.50 € | **109.50 €** | 15.0 % | **9.0 %** | 109.90 € | stávame sa najlacnejší |
| Herný volant MOZA RACING KS Pro RS095 | 352.50 € | **346.50 €** | 15.1 % | **13.1 %** | 346.90 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Sony | 122.90 € | **117.00 €** | 15.0 % | **9.5 %** | 117.50 € | stávame sa najlacnejší |
| Candy TCA273D3-S | 286.50 € | **280.90 €** | 10.0 % | **7.9 %** | 281.00 € | stávame sa najlacnejší |
| JBL Tuner 3 White Přenosné rádio | 122.50 € | **116.90 €** | 10.2 % | **5.2 %** | 117.00 € | stávame sa najlacnejší |
| Diaľkový spúšťač GODOX X3 TTL pre Sony | 75.00 € | **69.50 €** | 14.7 % | **6.3 %** | 69.52 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 81.50 € | **76.00 €** | 14.9 % | **7.1 %** | 76.29 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 27.00 € | **21.50 €** | 38.2 % | **10.1 %** | 21.90 € | stávame sa najlacnejší |
| Diaľkový spúšťač GODOX X3 TTL pre Canon | 73.00 € | **67.50 €** | 14.7 % | **6.0 %** | 67.90 € | stávame sa najlacnejší |
| Beko B3RCSO255S | 280.00 € | **274.50 €** | 10.0 % | **7.9 %** | 274.90 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **27.00 €** | 59.9 % | **32.9 %** | 27.50 € | stávame sa najlacnejší |
| KMP C81V / PGI-525BK, CLI-526C/M/Y | 23.99 € | **18.50 €** | 67.8 % | **29.4 %** | 18.59 € | stávame sa najlacnejší |
| Ultima Apollo S70 Ultra Soundbar | 204.90 € | **199.50 €** | 15.0 % | **12.0 %** | 199.90 € | stávame sa najlacnejší |
| TEFAL HB 643138 | 54.90 € | **49.50 €** | 17.1 % | **5.6 %** | 49.90 € | stávame sa najlacnejší |
| Solight projekčné hodiny s rádiom a budíkom | 23.00 € | **17.90 €** | 49.1 % | **16.1 %** | 18.00 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 80.00 € | **74.90 €** | 14.7 % | **7.4 %** | 74.99 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 75.00 € | **69.90 €** | 14.8 % | **7.0 %** | 70.00 € | stávame sa najlacnejší |
| Chromované profesionální činky HMS PREMIUM HH09 2 x ... | 59.50 € | **54.50 €** | 15.3 % | **5.6 %** | 50.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 96.90 € | **91.90 €** | 15.1 % | **9.1 %** | 91.96 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 209.90 € | **204.90 €** | 15.1 % | **12.3 %** | 205.00 € | stávame sa najlacnejší |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 313.90 € | **308.90 €** | 15.0 % | **13.2 %** | 309.00 € | stávame sa najlacnejší |
| Gorenje W3NGPI74A3S | 266.90 € | **261.90 €** | 10.0 % | **8.0 %** | 262.00 € | stávame sa najlacnejší |
| Bezdrôtový ovládač GameSir G7 Pro WC Wuchang Edition | 96.00 € | **91.00 €** | 14.8 % | **8.8 %** | 91.12 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 63.50 € | **58.50 €** | 14.9 % | **5.8 %** | 58.79 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, hliní... | 32.50 € | **27.50 €** | 58.6 % | **34.2 %** | 27.90 € | stávame sa najlacnejší |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 124.50 € | **119.50 €** | 14.9 % | **10.2 %** | 119.90 € | stávame sa najlacnejší |
| GODOX SB-USW80120 Softbox s dáždnikom | 66.00 € | **61.00 €** | 14.7 % | **6.0 %** | 61.50 € | stávame sa najlacnejší |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 85.90 € | **81.00 €** | 15.1 % | **8.5 %** | 81.10 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1718 | 210.90 € | **206.00 €** | 15.0 % | **12.3 %** | 206.47 € | stávame sa najlacnejší |
| Solight PIR interiérový senzor, do krabičky od vypín... | 13.50 € | **8.70 €** | 121.3 % | **42.6 %** | 8.80 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 57.50 € | **52.90 €** | 14.9 % | **5.7 %** | 52.99 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, plast... | 30.50 € | **25.90 €** | 59.0 % | **35.0 %** | 26.00 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 20.50 € | **15.90 €** | 45.8 % | **13.1 %** | 16.00 € | stávame sa najlacnejší |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 119.50 € | **114.90 €** | 15.1 % | **10.7 %** | 114.99 € | stávame sa najlacnejší |
| Výrobník ledu TEESA EASY ICE TSA5009 | 79.00 € | **74.50 €** | 14.6 % | **8.1 %** | 74.72 € | stávame sa najlacnejší |
| Guzzanti GZ 210A | 221.00 € | **216.50 €** | 10.0 % | **7.8 %** | 216.80 € | stávame sa najlacnejší |
| Solight otočná IP kamera | 39.00 € | **34.50 €** | 41.4 % | **25.1 %** | 34.90 € | stávame sa najlacnejší |
| Blesk GODOX TT600 | 81.50 € | **77.00 €** | 15.0 % | **8.7 %** | 77.50 € | stávame sa najlacnejší |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 25.50 € | **21.00 €** | 59.8 % | **31.6 %** | 21.50 € | stávame sa najlacnejší |
| Reproduktory Edifier R1100 2.0 (čierne) | 78.50 € | **74.00 €** | 15.0 % | **8.4 %** | 74.50 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 123.90 € | **119.50 €** | 15.1 % | **11.0 %** | 119.90 € | stávame sa najlacnejší |
| Polyuretanová jednoručka HMS HPC 7,5 kg | 50.90 € | **46.50 €** | 15.1 % | **5.1 %** | 42.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Explorer | 55.90 € | **51.50 €** | 15.1 % | **6.1 %** | 51.89 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s nočným svetielko... | 32.90 € | **28.50 €** | 38.9 % | **20.3 %** | 28.90 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 334.00 € | **329.90 €** | 14.9 % | **13.5 %** | 330.00 € | stávame sa najlacnejší |
| Tesla GSM-LTE zesilovač/opakovač 900/1800 MHz - komp... | 184.00 € | **179.90 €** | 10.6 % | **8.1 %** | 179.91 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 216.00 € | **211.90 €** | 15.0 % | **12.8 %** | 212.00 € | stávame sa najlacnejší |
| Solight detektor spalín CO + alarm, 85dB, 3x AA batéria | 15.50 € | **11.50 €** | 44.0 % | **6.9 %** | 1.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.58 € | stávame sa najlacnejší |
| Armodd Candywatch 5 GPS Silver - 9154 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.58 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.90 € | **21.90 €** | 39.1 % | **17.6 %** | 22.00 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 20.90 € | **16.90 €** | 43.0 % | **15.7 %** | 17.00 € | stávame sa najlacnejší |
| Veslovací trenažér MERACH MR-R14R1 (hnedý) | 388.90 € | **384.90 €** | 15.0 % | **13.8 %** | 385.00 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 75.50 € | **71.50 €** | 15.4 % | **9.3 %** | 71.65 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.00 € | **48.00 €** | 14.5 % | **5.7 %** | 48.19 € | stávame sa najlacnejší |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 85.50 € | **81.50 €** | 14.9 % | **9.5 %** | 81.75 € | stávame sa najlacnejší |
| Catlink BayMax Lite intelligent self-cleaning cat li... | 357.50 € | **353.50 €** | 15.1 % | **13.8 %** | 353.75 € | stávame sa najlacnejší |
| Okuliare XREAL 1S pre rozšírenú realitu | 529.50 € | **525.50 €** | 15.0 % | **14.2 %** | 525.80 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 69.50 € | **65.50 €** | 14.9 % | **8.3 %** | 65.89 € | stávame sa najlacnejší |
| Solight dezinfekčná UV lampa 100W | 49.50 € | **45.50 €** | 49.7 % | **37.6 %** | 45.90 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **14.00 €** | 47.4 % | **14.6 %** | 14.50 € | stávame sa najlacnejší |
| Solight LED núdzové osvetlenie, 4W, 200lm, IP65, LiF... | 35.00 € | **31.00 €** | 37.3 % | **21.6 %** | 31.50 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 18.90 € | **14.90 €** | 39.2 % | **9.7 %** | 15.00 € | stávame sa najlacnejší |
| Solight univerzálny zdroj pre netbooky a notebooky, ... | 17.90 € | **13.90 €** | 66.7 % | **29.4 %** | 14.00 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 214.90 € | **211.00 €** | 15.1 % | **13.0 %** | 211.39 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 22.90 € | **19.00 €** | 54.6 % | **28.3 %** | 19.50 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 24.90 € | **21.00 €** | 59.2 % | **34.2 %** | 21.50 € | stávame sa najlacnejší |
| Solight bezdrôtová nabíjačka, Qi2, MagSafe kompatibilná | 23.90 € | **20.00 €** | 54.2 % | **29.0 %** | 20.50 € | stávame sa najlacnejší |
| Nastavitelné činky HMS HL03 2 x 2,5 kg | 42.50 € | **38.90 €** | 15.3 % | **5.6 %** | 35.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hohem microphone (2TX + 1RX + charging case) | 67.50 € | **63.90 €** | 15.2 % | **9.0 %** | 63.99 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 50W, 4... | 33.50 € | **29.90 €** | 38.0 % | **23.1 %** | 30.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 22.50 € | **18.90 €** | 55.2 % | **30.3 %** | 19.00 € | stávame sa najlacnejší |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 19.50 € | **15.90 €** | 46.0 % | **19.0 %** | 16.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5 zásuviek, USB A+C 20W P... | 13.50 € | **9.90 €** | 48.7 % | **9.1 %** | 10.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 15.50 € | **11.90 €** | 56.3 % | **20.0 %** | 12.00 € | stávame sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 73.50 € | **69.90 €** | 15.0 % | **9.3 %** | 69.99 € | stávame sa najlacnejší |
| DeerRun Q2 Mestský elektrický bežecký pás (čierny) | 196.50 € | **192.90 €** | 15.0 % | **12.9 %** | 193.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban (ružový) | 196.50 € | **192.90 €** | 15.0 % | **12.9 %** | 193.00 € | stávame sa najlacnejší |
| Balanční podložka REBEL ACTIVE RBA-3104-58 | 44.00 € | **40.50 €** | 15.0 % | **5.9 %** | 27.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chromované profesionální činky HMS PREMIUM HH07 2 x ... | 46.00 € | **42.50 €** | 14.5 % | **5.8 %** | 38.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 16.00 € | **12.50 €** | 37.5 % | **7.4 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 72.00 € | **68.50 €** | 14.8 % | **9.3 %** | 68.79 € | stávame sa najlacnejší |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 72.50 € | **69.00 €** | 14.7 % | **9.2 %** | 69.39 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Nikon | 123.00 € | **119.50 €** | 15.0 % | **11.7 %** | 119.90 € | stávame sa najlacnejší |
| Termoregulačný inteligentný pelech Petoneer Cozy Sofa | 103.90 € | **100.50 €** | 15.1 % | **11.3 %** | 100.54 € | stávame sa najlacnejší |
| BOBOVR S3 PRO Battery Relief Strap for Meta Quest 3 ... | 67.90 € | **64.50 €** | 15.2 % | **9.4 %** | 64.77 € | stávame sa najlacnejší |
| Rowenta RO3725EA | 76.90 € | **73.50 €** | 10.5 % | **5.6 %** | 73.90 € | stávame sa najlacnejší |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 68.90 € | **65.50 €** | 15.0 % | **9.3 %** | 65.90 € | stávame sa najlacnejší |
| Sonar Flytec V080 s kapacitou 20 000 mAh pre loď na ... | 251.90 € | **248.50 €** | 15.1 % | **13.5 %** | 248.90 € | stávame sa najlacnejší |
| Jednoruční nakládací činka HMS SG01 | 37.90 € | **34.50 €** | 15.6 % | **5.2 %** | 31.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 56.90 € | **53.50 €** | 15.1 % | **8.3 %** | 53.52 € | stávame sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 40.90 € | **37.50 €** | 15.0 % | **5.4 %** | 37.63 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7981 | 38.00 € | **34.90 €** | 14.4 % | **5.1 %** | 34.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 60.00 € | **56.90 €** | 39.6 % | **32.4 %** | 57.00 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 13.00 € | **9.90 €** | 45.0 % | **10.4 %** | 10.00 € | stávame sa najlacnejší |
| Solight lokátor Premium, Find My kompatibilný | 16.00 € | **12.90 €** | 41.2 % | **13.9 %** | 13.00 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Travel 12x50 | 72.00 € | **68.90 €** | 14.8 % | **9.9 %** | 69.00 € | stávame sa najlacnejší |
| Prenosná pumpa Flextail Max Pump 2 Plus (biela) | 34.90 € | **31.90 €** | 15.4 % | **5.5 %** | 22.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 8235 gold | 39.50 € | **36.50 €** | 13.7 % | **5.1 %** | 32.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 8235 chrom | 39.50 € | **36.50 €** | 13.7 % | **5.1 %** | 32.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 41.00 € | **38.00 €** | 14.9 % | **6.5 %** | 38.09 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP OL133ED s 13,3-palcovým dot... | 221.90 € | **218.90 €** | 15.1 % | **13.5 %** | 219.00 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 19.90 € | **16.90 €** | 43.0 % | **21.5 %** | 17.00 € | stávame sa najlacnejší |
| Solight prídavná zásuvka pre GSM zásuvku | 38.90 € | **35.90 €** | 46.1 % | **34.8 %** | 36.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 24.90 € | **21.90 €** | 55.2 % | **36.5 %** | 22.00 € | stávame sa najlacnejší |
| EDIFIER T5s subwoofer černý | 129.00 € | **126.00 €** | 10.0 % | **7.4 %** | 126.11 € | stávame sa najlacnejší |
| EDIFIER T5s subwoofer hnědý | 129.00 € | **126.00 €** | 10.0 % | **7.4 %** | 126.11 € | stávame sa najlacnejší |
| Shifter Moza Racing HGP RS039 | 154.50 € | **151.50 €** | 15.1 % | **12.9 %** | 151.67 € | stávame sa najlacnejší |
| Skříň kempingová Cattara 13480 MODICA | 65.50 € | **62.50 €** | 15.2 % | **10.0 %** | 62.80 € | stávame sa najlacnejší |
| Kamera EMOS IP-1300 LANTERN /4074/ GoSmart venkovní ... | 119.50 € | **116.50 €** | 11.6 % | **8.8 %** | 116.89 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 31.50 € | **28.50 €** | 38.6 % | **25.4 %** | 28.90 € | stávame sa najlacnejší |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 182.50 € | **179.50 €** | 15.0 % | **13.2 %** | 179.90 € | stávame sa najlacnejší |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 25.00 € | **22.00 €** | 47.1 % | **29.4 %** | 22.50 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-oranžová | 61.00 € | **58.00 €** | 14.9 % | **9.3 %** | 58.50 € | stávame sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 163.90 € | **161.00 €** | 15.1 % | **13.1 %** | 161.34 € | stávame sa najlacnejší |
| Solight cestovný adaptér s USB do Spojených štátov, ... | 12.90 € | **10.00 €** | 61.4 % | **25.1 %** | 10.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 50.90 € | **48.00 €** | 15.3 % | **8.7 %** | 48.29 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **20.00 €** | 38.1 % | **20.6 %** | 20.50 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1500mA, stabiliz... | 9.90 € | **7.20 €** | 45.3 % | **5.7 %** | 7.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 287.50 € | **284.90 €** | 15.0 % | **13.9 %** | 284.96 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 20.50 € | **17.90 €** | 41.5 % | **23.5 %** | 18.00 € | stávame sa najlacnejší |
| EDIFIER ES20 reproduktor béžový | 51.50 € | **48.90 €** | 11.0 % | **5.4 %** | 49.00 € | stávame sa najlacnejší |
| Výrobok X.A.2 | 48.50 € | **45.90 €** | 15.0 % | **8.9 %** | 46.00 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, sivé, 20W, 1... | 14.50 € | **11.90 €** | 37.7 % | **13.0 %** | 12.00 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, plast, 2 zásuvky, hran... | 14.50 € | **11.90 €** | 58.4 % | **30.0 %** | 12.00 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 17.50 € | **14.90 €** | 44.6 % | **23.1 %** | 15.00 € | stávame sa najlacnejší |
| WHIRLPOOL AKR 749/1 IX | 121.50 € | **118.90 €** | 7.9 % | **5.6 %** | 119.00 € | stávame sa najlacnejší |
| Polyuretanová jednoručka HMS HPC 5 kg | 35.00 € | **32.50 €** | 14.5 % | **6.3 %** | 29.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester autobatérií UNI-T UT673A | 36.00 € | **33.50 €** | 14.4 % | **6.5 %** | 33.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 32.50 € | **30.00 €** | 15.6 % | **6.7 %** | 30.09 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0837 SOS FM/ AM, powerbanka 10... | 40.00 € | **37.50 €** | 14.3 % | **7.2 %** | 37.59 € | stávame sa najlacnejší |
| Televes DAT BOSS LR 700 TFORCE LTE700 | 123.00 € | **120.50 €** | 14.8 % | **12.5 %** | 120.73 € | stávame sa najlacnejší |
| Sada filtrov Freewell Insta360 Luna Ultra na každode... | 60.50 € | **58.00 €** | 15.0 % | **10.3 %** | 58.38 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierna oceľ) | 30.50 € | **28.00 €** | 14.6 % | **5.2 %** | 28.38 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **14.50 €** | 47.5 % | **25.8 %** | 14.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 47.00 € | **44.50 €** | 15.1 % | **9.0 %** | 44.90 € | stávame sa najlacnejší |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 47.00 € | **44.50 €** | 15.1 % | **9.0 %** | 44.90 € | stávame sa najlacnejší |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 45.50 € | **43.00 €** | 15.5 % | **9.1 %** | 43.43 € | stávame sa najlacnejší |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 52.50 € | **50.00 €** | 14.6 % | **9.2 %** | 50.46 € | stávame sa najlacnejší |
| Aroma difuzer Stone šedé dřevo 500ml SIXTOL | 32.50 € | **30.00 €** | 14.3 % | **5.5 %** | 30.50 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 17A, 200W, IP20 | 24.50 € | **22.00 €** | 55.4 % | **39.5 %** | 22.50 € | stávame sa najlacnejší |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 15.50 € | **13.00 €** | 49.3 % | **25.2 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 28.50 € | **26.00 €** | 53.4 % | **40.0 %** | 26.50 € | stávame sa najlacnejší |
| Ariete Steam Mop 10in1 4164 | 54.90 € | **52.50 €** | 10.2 % | **5.3 %** | 50.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, biela | 24.90 € | **22.50 €** | 59.2 % | **43.8 %** | 22.90 € | stávame sa najlacnejší |
| Solight účastnícka zásuvka koncová so SAT, útlm: 3dB | 7.10 € | **4.80 €** | 55.6 % | **5.2 %** | 4.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 11.50 € | **9.30 €** | 57.1 % | **27.1 %** | 9.40 € | stávame sa najlacnejší |
| Káblové slúchadlá Oneodio A71 (čierno-červené) | 31.00 € | **28.90 €** | 14.1 % | **6.4 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 26.00 € | **23.90 €** | 54.3 % | **41.8 %** | 24.00 € | stávame sa najlacnejší |
| Koloběžka s pumpovanými koly NILS Extreme HC300 červená | 118.00 € | **115.90 €** | 14.9 % | **12.9 %** | 115.99 € | stávame sa najlacnejší |
| Roborock Q10 PF čistiaci robot (čierny) | 219.00 € | **216.90 €** | 15.0 % | **13.9 %** | 217.00 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine  WT 8500 gold | 25.50 € | **23.50 €** | 16.0 % | **6.9 %** | 21.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Veslo pro paddleboard REBEL ACTIVE | 21.90 € | **19.90 €** | 16.1 % | **5.5 %** | 18.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka EMOS WI 522 /B0555BL/, 5 000 mAh, 20 W+Wi... | 25.50 € | **23.50 €** | 14.3 % | **5.3 %** | 23.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka EMOS WI 522 /B0555GY/, 5 000 mAh, 20 W+Wi... | 25.50 € | **23.50 €** | 14.3 % | **5.3 %** | 23.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Impregnace na kožené oděvy INPRODUCTS WAX 400 ml | 28.50 € | **26.50 €** | 14.6 % | **6.6 %** | 26.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2 | 39.00 € | **37.00 €** | 14.5 % | **8.7 %** | 37.04 € | stávame sa najlacnejší |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 85.00 € | **83.00 €** | 14.8 % | **12.1 %** | 83.08 € | stávame sa najlacnejší |
| Napájací zdroj FNIRSI 100 W | 37.00 € | **35.00 €** | 15.1 % | **8.9 %** | 35.08 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 33.90 € | **31.90 €** | 39.0 % | **30.8 %** | 32.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.90 € | **8.90 €** | 45.5 % | **18.8 %** | 9.00 € | stávame sa najlacnejší |
| Beko Mezikus PCSKM | 59.90 € | **57.90 €** | 10.3 % | **6.6 %** | 58.00 € | stávame sa najlacnejší |
| Beko Mezikus PCSKW | 59.90 € | **57.90 €** | 10.3 % | **6.6 %** | 58.00 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 30.00 € | **28.00 €** | 12.5 % | **5.0 %** | 28.12 € | stávame sa najlacnejší |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 116.50 € | **114.50 €** | 14.9 % | **12.9 %** | 114.67 € | stávame sa najlacnejší |
| Automat na horkou vodu NEDIS KAWD100FBK / 2.5 l / ov... | 64.50 € | **62.50 €** | 14.7 % | **11.2 %** | 62.69 € | stávame sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 124.50 € | **122.50 €** | 15.2 % | **13.3 %** | 122.76 € | stávame sa najlacnejší |
| TEESA AIR FRYER TSA8046W | 52.50 € | **50.50 €** | 15.5 % | **11.1 %** | 50.79 € | stávame sa najlacnejší |
| GUZZANTI GZ 101 | 160.50 € | **158.50 €** | 10.1 % | **8.7 %** | 158.80 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16KT s 16-palcovým dotykov... | 206.00 € | **204.00 €** | 14.9 % | **13.8 %** | 204.34 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierne) | 30.00 € | **28.00 €** | 14.3 % | **6.7 %** | 28.38 € | stávame sa najlacnejší |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 39.50 € | **37.50 €** | 15.3 % | **9.4 %** | 37.88 € | stávame sa najlacnejší |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 76.50 € | **74.50 €** | 15.4 % | **12.4 %** | 74.88 € | stávame sa najlacnejší |
| Solight budík s Qi bezdrôtovú nabíjačkou | 17.50 € | **15.50 €** | 52.0 % | **34.6 %** | 15.90 € | stávame sa najlacnejší |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 17.50 € | **15.50 €** | 52.0 % | **34.6 %** | 15.90 € | stávame sa najlacnejší |
| Solight akumulátorové záhradné nožnice | 65.50 € | **63.50 €** | 20.1 % | **16.4 %** | 63.90 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 15.00 € | **13.00 €** | 48.7 % | **28.9 %** | 13.50 € | stávame sa najlacnejší |
| Solight wifi Smart LED svetelný pás, RGB, 5m, sada s... | 29.00 € | **27.00 €** | 47.5 % | **37.4 %** | 27.50 € | stávame sa najlacnejší |
| Solight axiálny ventilátor s časovačom | 18.00 € | **16.00 €** | 50.1 % | **33.4 %** | 16.50 € | stávame sa najlacnejší |
| Solight digitální hodiny s bluetooth synchronizáciou | 16.00 € | **14.00 €** | 49.9 % | **31.1 %** | 14.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 102.90 € | **101.00 €** | 15.1 % | **13.0 %** | 101.04 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 181.90 € | **180.00 €** | 10.1 % | **8.9 %** | 180.10 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 111.90 € | **110.00 €** | 15.0 % | **13.0 %** | 110.38 € | stávame sa najlacnejší |
| Solight digitálne hodiny s bluetooth synchronizáciou | 14.90 € | **13.00 €** | 51.8 % | **32.4 %** | 13.50 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE81WIFI | 6.60 € | **4.70 €** | 49.9 % | **6.7 %** | 4.80 € | stávame sa najlacnejší |
| Ručný multimeter do auta UNI-T UT107 | 30.90 € | **29.00 €** | 14.8 % | **7.8 %** | 29.29 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (zlaté) | 29.90 € | **28.00 €** | 15.3 % | **8.0 %** | 28.38 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 40.90 € | **39.00 €** | 38.1 % | **31.7 %** | 39.50 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 16.90 € | **15.00 €** | 38.6 % | **23.1 %** | 15.50 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 18.90 € | **17.00 €** | 46.6 % | **31.9 %** | 17.50 € | stávame sa najlacnejší |
| Solight nočné LED RGB svetielko so svetelným senzoro... | 5.50 € | **3.80 €** | 54.7 % | **6.9 %** | 3.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KMP B-T55 (TN 1050) | 29.50 € | **27.90 €** | 11.4 % | **5.4 %** | 26.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight lokátor kľúčenka, Find My kompatibilný | 22.50 € | **20.90 €** | 43.5 % | **33.3 %** | 21.00 € | stávame sa najlacnejší |
| Rýchlonabíjací kábel SDC DJI Power pre Inspire 3 | 20.50 € | **18.90 €** | 13.9 % | **5.0 %** | 19.00 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 5.50 € | **3.90 €** | 53.1 % | **8.6 %** | 4.00 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0833 analogové přenosné solární | 17.50 € | **15.90 €** | 15.9 % | **5.3 %** | 16.00 € | stávame sa najlacnejší |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 57.50 € | **56.00 €** | 15.0 % | **12.0 %** | 56.04 € | stávame sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 27.50 € | **26.00 €** | 15.6 % | **9.3 %** | 26.09 € | stávame sa najlacnejší |
| Baterie olověná  12V / 65Ah  EMOS bezúdržbový akumul... | 172.00 € | **170.50 €** | 12.8 % | **11.8 %** | 170.63 € | stávame sa najlacnejší |
| G3Ferrari G2013900 Artiko Výrobník ledu | 127.50 € | **126.00 €** | 10.1 % | **8.8 %** | 126.15 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 16 s 17 mm uchytením | 46.00 € | **44.50 €** | 14.9 % | **11.1 %** | 44.67 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 16 Pro s 17 mm uchytením | 46.00 € | **44.50 €** | 14.9 % | **11.1 %** | 44.67 € | stávame sa najlacnejší |
| D-LINK WiFi AX1500 Range Extender (E15) | 42.50 € | **41.00 €** | 11.3 % | **7.4 %** | 41.20 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 137.50 € | **136.00 €** | 15.0 % | **13.7 %** | 136.22 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 13.00 € | **11.50 €** | 20.9 % | **7.0 %** | 11.79 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 25.50 € | **24.00 €** | 16.0 % | **9.2 %** | 24.29 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 25.50 € | **24.00 €** | 16.0 % | **9.2 %** | 24.29 € | stávame sa najlacnejší |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 28.50 € | **27.00 €** | 15.6 % | **9.5 %** | 27.29 € | stávame sa najlacnejší |
| Hrazda multifunkční REBEL ACTIVE RBA-2401 | 58.50 € | **57.00 €** | 14.8 % | **11.9 %** | 57.29 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 25.00 € | **23.50 €** | 38.0 % | **29.7 %** | 23.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **34.50 €** | 38.3 % | **32.5 %** | 34.90 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CP2A | 28.50 € | **27.00 €** | 15.7 % | **9.6 %** | 27.49 € | stávame sa najlacnejší |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 27.50 € | **26.00 €** | 14.8 % | **8.5 %** | 26.49 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 27.50 € | **26.00 €** | 39.3 % | **31.7 %** | 26.50 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 20.50 € | **19.00 €** | 48.5 % | **37.7 %** | 19.50 € | stávame sa najlacnejší |
| Elektrický ohřívač Lumni Kaminer 26374 | 23.50 € | **22.00 €** | 15.2 % | **7.8 %** | 22.50 € | stávame sa najlacnejší |
| Solight detektor oxidu uhoľnatého a horľavých plynov | 15.50 € | **14.00 €** | 20.6 % | **8.9 %** | 14.50 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 12.50 € | **11.00 €** | 46.9 % | **29.2 %** | 11.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 33.50 € | **32.00 €** | 14.6 % | **9.5 %** | 32.50 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 232.50 € | **231.00 €** | 9.4 % | **8.7 %** | 231.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, USB A+C, 2 ... | 21.50 € | **20.00 €** | 43.3 % | **33.3 %** | 20.50 € | stávame sa najlacnejší |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 75.50 € | **74.00 €** | 15.1 % | **12.8 %** | 74.50 € | stávame sa najlacnejší |
| ETA 518091010 | 13.99 € | **12.50 €** | 27.7 % | **14.1 %** | 12.60 € | stávame sa najlacnejší |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 67.90 € | **66.50 €** | 15.0 % | **12.6 %** | 66.69 € | stávame sa najlacnejší |
| SONOFF NSPanel Pro 120 Smart Control Panel Matter Wi... | 112.90 € | **111.50 €** | 15.1 % | **13.7 %** | 111.84 € | stávame sa najlacnejší |
| Tefal FW402HE0 | 130.90 € | **129.50 €** | 10.3 % | **9.1 %** | 129.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 2m | 5.10 € | **3.70 €** | 46.5 % | **6.3 %** | 3.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 5.10 € | **3.70 €** | 54.1 % | **11.8 %** | 3.80 € | stávame sa najlacnejší |
| BELKIN SCREENFORCE™ UltraGlass2 OVA134zz | 29.90 € | **28.50 €** | 11.3 % | **6.0 %** | 28.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 27.90 € | **26.50 €** | 14.9 % | **9.1 %** | 26.56 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 32.90 € | **31.50 €** | 15.0 % | **10.1 %** | 31.69 € | stávame sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 36.90 € | **35.50 €** | 10.5 % | **6.3 %** | 35.86 € | stávame sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 19.90 € | **18.50 €** | 15.4 % | **7.3 %** | 18.88 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 7.40 € | **6.10 €** | 47.8 % | **21.9 %** | 6.20 € | stávame sa najlacnejší |
| Solight závesné príslušenstvo pre LED panely 60x60, ... | 5.00 € | **3.80 €** | 39.2 % | **5.8 %** | 3.90 € | stávame sa najlacnejší |
| Solight vypínač do vlhka, jednopólový, biely | 7.30 € | **6.10 €** | 59.1 % | **33.0 %** | 6.20 € | stávame sa najlacnejší |
| MAXXO DH 919 Extra Tea | 13.69 € | **12.50 €** | 36.6 % | **24.7 %** | 12.57 € | stávame sa najlacnejší |
| Yeelight Pura Monitor Light Bar Pro | 59.00 € | **57.90 €** | 14.9 % | **12.8 %** | 57.99 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 37.00 € | **35.90 €** | 41.8 % | **37.5 %** | 36.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **34.90 €** | 38.3 % | **34.0 %** | 35.00 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 25.00 € | **23.90 €** | 13.9 % | **8.9 %** | 24.00 € | stávame sa najlacnejší |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 25.00 € | **23.90 €** | 13.9 % | **8.9 %** | 24.00 € | stávame sa najlacnejší |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 25.00 € | **23.90 €** | 13.9 % | **8.9 %** | 24.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 26.00 € | **24.90 €** | 42.8 % | **36.8 %** | 25.00 € | stávame sa najlacnejší |
| Polarizer Filter Freewell for DJI Avata 2 | 19.00 € | **17.90 €** | 13.7 % | **7.1 %** | 18.00 € | stávame sa najlacnejší |
| Sada 2 filtrov Freewell Gradient pre DJI Air 3S | 28.00 € | **26.90 €** | 14.1 % | **9.6 %** | 27.00 € | stávame sa najlacnejší |
| Turistická rybářská židle, skládací s taškou | 15.00 € | **13.90 €** | 13.5 % | **5.2 %** | 12.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Měkké činky HMS CM07 2 x 1,5 kg | 13.00 € | **11.90 €** | 14.8 % | **5.0 %** | 10.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight cestovný adaptér do Indie, typ D | 6.50 € | **5.40 €** | 59.7 % | **32.6 %** | 5.50 € | stávame sa najlacnejší |
| Fixed Slim Traveller 45W FIXCG45S-2CD-WH | 24.50 € | **23.50 €** | 10.2 % | **5.7 %** | 19.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Polyuretanová jednoručka HMS HPC 2,5 kg | 18.50 € | **17.50 €** | 14.2 % | **8.0 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pedrini MyMoka Indukce modrá 3 porce | 40.90 € | **39.90 €** | 10.3 % | **7.6 %** | 39.91 € | stávame sa najlacnejší |
| Waterproof diving case PULUZ for Insta360 X4 | 62.50 € | **61.50 €** | 15.0 % | **13.1 %** | 61.54 € | stávame sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 59.90 € | **58.90 €** | 7.4 % | **5.6 %** | 58.95 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 35.00 € | **34.00 €** | 14.4 % | **11.1 %** | 34.09 € | stávame sa najlacnejší |
| Cabletech UCH0022-S | 22.50 € | **21.50 €** | 16.1 % | **10.9 %** | 21.59 € | stávame sa najlacnejší |
| Kruger & Matz KM1303 | 17.50 € | **16.50 €** | 14.7 % | **8.2 %** | 16.59 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **11.90 €** | 47.3 % | **35.9 %** | 12.00 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.90 € | **9.90 €** | 46.2 % | **32.8 %** | 10.00 € | stávame sa najlacnejší |
| UV Filter Freewell for DJI Avata 2 | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 28.90 € | **27.90 €** | 15.7 % | **11.7 %** | 28.00 € | stávame sa najlacnejší |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 43.50 € | **42.50 €** | 14.7 % | **12.1 %** | 42.66 € | stávame sa najlacnejší |
| Filtračný nástavec Black Glow Mist Freewell pre Osmo... | 19.50 € | **18.50 €** | 14.9 % | **9.0 %** | 18.67 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 19.50 € | **18.50 €** | 15.0 % | **9.1 %** | 18.67 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra Glow Mist 1/8 | 19.50 € | **18.50 €** | 15.0 % | **9.1 %** | 18.67 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell O... | 19.50 € | **18.50 €** | 14.9 % | **9.0 %** | 18.67 € | stávame sa najlacnejší |
| Filtračný systém Freewell UV Osmo Pocket 4P | 19.50 € | **18.50 €** | 14.9 % | **9.0 %** | 18.67 € | stávame sa najlacnejší |
| ND filter Freewell Insta360 Luna Ultra ND64 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| ND filter Freewell Insta360 Luna Ultra ND8 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| ND filter Freewell pre Insta360 Luna Ultra ND1000 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| ND filter Freewell pre Insta360 Luna Ultra ND32 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.4 %** | 21.19 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 138.50 € | **137.50 €** | 15.1 % | **14.2 %** | 137.69 € | stávame sa najlacnejší |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 16.71 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (modrý) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.21 € | stávame sa najlacnejší |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket 4P ND16 ND/PL | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Freewell Osmo Pocket 4P ND8 ND/PL filter | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND32/PL | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND64/PL | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND16 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND32 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND8 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell pre Osmo Pocket ND64 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 16.77 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 19.50 € | **18.50 €** | 16.2 % | **10.3 %** | 18.79 € | stávame sa najlacnejší |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 42.00 € | **41.00 €** | 14.7 % | **12.0 %** | 41.29 € | stávame sa najlacnejší |
| Resto 93511 Pánev 28 cm | 34.00 € | **33.00 €** | 10.3 % | **7.0 %** | 33.30 € | stávame sa najlacnejší |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 72.00 € | **71.00 €** | 14.7 % | **13.1 %** | 71.31 € | stávame sa najlacnejší |
| Bezdrôtové napájadlo pre domáce zvieratá Rojeco 2,5 L | 32.50 € | **31.50 €** | 14.8 % | **11.3 %** | 31.83 € | stávame sa najlacnejší |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 36.00 € | **35.00 €** | 15.0 % | **11.9 %** | 35.38 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 23.00 € | **22.00 €** | 15.1 % | **10.1 %** | 22.39 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB, 3m, sada s 12V adapté... | 14.50 € | **13.50 €** | 47.4 % | **37.2 %** | 13.90 € | stávame sa najlacnejší |
| Tefal OptiGrill GC7P0810 | 99.50 € | **98.50 €** | 10.5 % | **9.3 %** | 98.90 € | stávame sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá, PO | 21.50 € | **20.50 €** | 12.3 % | **7.0 %** | 20.90 € | stávame sa najlacnejší |
| Girmi PE1600 | 16.50 € | **15.50 €** | 12.4 % | **5.6 %** | 15.90 € | stávame sa najlacnejší |
| Powerbanka Baseus Bipow 10000 mAh, 20 W (biela) | 19.00 € | **18.00 €** | 13.6 % | **7.6 %** | 18.40 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 19.00 € | **18.00 €** | 14.3 % | **8.2 %** | 18.42 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (white) | 44.00 € | **43.00 €** | 14.7 % | **12.1 %** | 43.46 € | stávame sa najlacnejší |
| Filament Anycubic TPU (čierny) 1 kg | 22.00 € | **21.00 €** | 14.2 % | **9.0 %** | 21.47 € | stávame sa najlacnejší |
| MEROSS MA151-UN Inteligentný Wi-Fi detektor dymu | 29.00 € | **28.00 €** | 14.6 % | **10.7 %** | 28.49 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.00 €** | 47.4 % | **39.2 %** | 17.50 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.00 €** | 47.4 % | **39.2 %** | 17.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 27.00 € | **26.00 €** | 47.2 % | **41.8 %** | 26.50 € | stávame sa najlacnejší |
| Solight doplnkový pohybový senzor pre GSM alarm 1D11 | 32.00 € | **31.00 €** | 41.0 % | **36.6 %** | 31.50 € | stávame sa najlacnejší |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 21.00 € | **20.00 €** | 46.4 % | **39.5 %** | 20.50 € | stávame sa najlacnejší |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 89.00 € | **88.00 €** | 15.1 % | **13.8 %** | 88.50 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **15.90 €** | 26.9 % | **19.4 %** | 16.00 € | stávame sa najlacnejší |
| JBL Grip Red | 80.90 € | **80.00 €** | 7.3 % | **6.1 %** | 80.20 € | stávame sa najlacnejší |
| JBL Grip White | 80.90 € | **80.00 €** | 7.3 % | **6.1 %** | 80.20 € | stávame sa najlacnejší |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 75.90 € | **75.00 €** | 15.3 % | **13.9 %** | 75.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 119.90 € | **119.00 €** | 34.9 % | **33.9 %** | 119.50 € | stávame sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.90 € | **64.00 €** | 15.1 % | **13.5 %** | 64.50 € | stávame sa najlacnejší |
| Solight rozbočka kocka, 3x 16A + USB A+C, biela, vyp... | 10.00 € | **9.10 €** | 48.6 % | **35.3 %** | 9.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.80 € | **8.90 €** | 48.4 % | **34.7 %** | 9.00 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.90 € | **11.00 €** | 15.6 % | **6.8 %** | 11.26 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.00 €** | 47.3 % | **37.0 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.90 € | **14.00 €** | 12.0 % | **5.2 %** | 14.50 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.90 € | **11.00 €** | 45.7 % | **34.7 %** | 11.50 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 13.90 € | **13.00 €** | 39.9 % | **30.8 %** | 13.50 € | stávame sa najlacnejší |
| Solight detektor úniku horľavých plynov. Polovodičov... | 13.90 € | **13.00 €** | 35.5 % | **26.7 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.90 € | **14.00 €** | 47.7 % | **38.8 %** | 14.50 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 12.90 € | **12.00 €** | 40.4 % | **30.6 %** | 12.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.90 € | **10.00 €** | 33.9 % | **22.8 %** | 10.50 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.90 € | **10.00 €** | 19.3 % | **9.4 %** | 10.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 14.90 € | **14.00 €** | 16.8 % | **9.8 %** | 14.50 € | stávame sa najlacnejší |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 10.90 € | **10.00 €** | 41.8 % | **30.1 %** | 10.50 € | stávame sa najlacnejší |
| UV svietidlo Superfire A5, 365NM | 13.90 € | **13.00 €** | 14.8 % | **7.4 %** | 13.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.80 € | **4.90 €** | 47.4 % | **24.5 %** | 5.00 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 46.90 € | **46.00 €** | 15.1 % | **12.8 %** | 46.08 € | stávame sa najlacnejší |
| BWT náhradní vodní filtr 3+1ks REFILL | 16.90 € | **16.00 €** | 11.9 % | **5.9 %** | 16.09 € | stávame sa najlacnejší |
| Záložní zdroj MHPower DL181-24 Mini UPS 24V 0,5A | 20.90 € | **20.00 €** | 16.1 % | **11.1 %** | 20.29 € | stávame sa najlacnejší |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.90 € | **17.00 €** | 15.2 % | **9.4 %** | 17.39 € | stávame sa najlacnejší |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.90 € | **17.00 €** | 15.4 % | **9.6 %** | 17.39 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 35.90 € | **35.00 €** | 33.4 % | **30.1 %** | 35.50 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 27.90 € | **27.00 €** | 25.4 % | **21.3 %** | 27.50 € | stávame sa najlacnejší |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.90 € | **17.00 €** | 46.6 % | **39.2 %** | 17.50 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.90 € | **16.00 €** | 35.5 % | **28.3 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, UGR | 23.90 € | **23.00 €** | 38.4 % | **33.2 %** | 23.50 € | stávame sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.90 € | **45.00 €** | 41.6 % | **38.8 %** | 45.50 € | stávame sa najlacnejší |
| Solight detektor dymu s WIFI pripojením | 16.90 € | **16.00 €** | 32.9 % | **25.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.90 € | **41.00 €** | 34.9 % | **32.0 %** | 41.50 € | stávame sa najlacnejší |
| Solight batériová kamera WiFi so solárnym panelom | 58.90 € | **58.00 €** | 35.6 % | **33.5 %** | 58.50 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.90 € | **17.00 €** | 33.6 % | **26.9 %** | 17.50 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.90 € | **55.00 €** | 36.4 % | **34.2 %** | 55.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.90 € | **29.00 €** | 20.3 % | **16.7 %** | 29.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.90 € | **33.00 €** | 25.7 % | **22.4 %** | 33.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 48.90 € | **48.00 €** | 20.9 % | **18.7 %** | 48.50 € | stávame sa najlacnejší |
| Sati Café al’Italienne 1 kg zrno | 21.90 € | **21.00 €** | 10.0 % | **5.5 %** | 21.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.90 € | **19.00 €** | 39.6 % | **33.3 %** | 19.50 € | stávame sa najlacnejší |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 7.10 € | **6.30 €** | 55.2 % | **37.7 %** | 6.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 8.20 € | **7.40 €** | 47.8 % | **33.4 %** | 7.50 € | stávame sa najlacnejší |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.90 € | **7.20 €** | 47.3 % | **34.3 %** | 7.30 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 3.60 € | **2.90 €** | 48.6 % | **19.7 %** | 3.00 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 4.20 € | **3.50 €** | 54.5 % | **28.8 %** | 3.60 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.00 € | **3.30 €** | 53.4 % | **26.6 %** | 3.40 € | stávame sa najlacnejší |
| Nabíjecí baterie GP ReCyko 2600 AA (HR6), 6kusů --CE... | 23.50 € | **22.90 €** | 9.3 % | **6.5 %** | 4.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filters ND8/16/32 Freewell for DJI Neo | 20.50 € | **19.90 €** | 15.5 % | **12.1 %** | 19.99 € | stávame sa najlacnejší |
| Náhlavný popruh BOBOVR M3 Pro pre Oculus Quest 3 / Q... | 40.50 € | **39.90 €** | 15.2 % | **13.5 %** | 39.99 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.50 € | **27.90 €** | 37.2 % | **34.3 %** | 28.00 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **19.90 €** | 38.4 % | **34.4 %** | 20.00 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.50 € | **30.90 €** | 20.7 % | **18.4 %** | 31.00 € | stávame sa najlacnejší |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.50 € | **19.90 €** | 48.5 % | **44.2 %** | 20.00 € | stávame sa najlacnejší |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 21.50 € | **20.90 €** | 29.4 % | **25.8 %** | 21.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 18.50 € | **17.90 €** | 39.0 % | **34.5 %** | 18.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 28.50 € | **27.90 €** | 38.6 % | **35.7 %** | 28.00 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **18.90 €** | 36.9 % | **32.7 %** | 19.00 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 27.50 € | **26.90 €** | 15.8 % | **13.3 %** | 27.00 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 22.50 € | **21.90 €** | 11.2 % | **8.2 %** | 22.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 17.50 € | **16.90 €** | 37.2 % | **32.5 %** | 17.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 24.50 € | **23.90 €** | 26.5 % | **23.4 %** | 24.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 38.50 € | **37.90 €** | 39.5 % | **37.4 %** | 38.00 € | stávame sa najlacnejší |
| Solight LED svetielko s diaľkovým ovládaním, 5 LED, ... | 6.70 € | **6.10 €** | 55.2 % | **41.3 %** | 6.20 € | stávame sa najlacnejší |
| Solight USB-C 20W fast charger | 5.90 € | **5.30 €** | 47.1 % | **32.2 %** | 5.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.70 € | **5.10 €** | 30.2 % | **16.5 %** | 5.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.70 € | **5.10 €** | 47.6 % | **32.0 %** | 5.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 3m | 6.20 € | **5.60 €** | 48.7 % | **34.3 %** | 5.70 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 4.40 € | **3.80 €** | 55.5 % | **34.3 %** | 3.90 € | stávame sa najlacnejší |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.70 € | **2.10 €** | 50.4 % | **16.9 %** | 2.20 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.40 € | **2.80 €** | 56.2 % | **28.6 %** | 2.90 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 4.00 € | **3.40 €** | 53.4 % | **30.4 %** | 3.50 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 4.00 € | **3.40 €** | 53.4 % | **30.4 %** | 3.50 € | stávame sa najlacnejší |
| Baterie olověná   6V /  7Ah  EMOS | 12.50 € | **11.90 €** | 13.9 % | **8.5 %** | 11.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 13.50 € | **12.90 €** | 47.5 % | **41.0 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 15.50 € | **14.90 €** | 30.9 % | **25.8 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.50 € | **12.90 €** | 14.0 % | **8.9 %** | 13.00 € | stávame sa najlacnejší |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 12.50 € | **11.90 €** | 16.9 % | **11.3 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.50 € | **14.90 €** | 45.9 % | **40.2 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 12.50 € | **11.90 €** | 27.0 % | **20.9 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **13.90 €** | 47.4 % | **41.3 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 13.50 € | **12.90 €** | 56.1 % | **49.2 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 15.50 € | **14.90 €** | 46.0 % | **40.4 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.50 € | **13.90 €** | 33.7 % | **28.1 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.50 € | **14.90 €** | 39.9 % | **34.4 %** | 15.00 € | stávame sa najlacnejší |
| Solight nabíjacie nočné LED svetielko s pohybovým a ... | 8.50 € | **7.90 €** | 53.9 % | **43.0 %** | 8.00 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, biele, 20W, ... | 12.50 € | **11.90 €** | 36.4 % | **29.9 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.50 € | **10.90 €** | 38.3 % | **31.1 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 16.50 € | **15.90 €** | 40.0 % | **34.9 %** | 16.00 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 15.50 € | **14.90 €** | 47.4 % | **41.7 %** | 15.00 € | stávame sa najlacnejší |
| Teplovzdušný ventilátor TEESA TSA8027 | 14.50 € | **13.90 €** | 13.7 % | **9.0 %** | 14.00 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.50 € | **12.90 €** | 36.3 % | **30.3 %** | 13.00 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.20 €** | 45.5 % | **32.6 %** | 6.30 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 15.50 € | **14.90 €** | 34.3 % | **29.1 %** | 15.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.50 € | **9.90 €** | 11.9 % | **5.5 %** | 10.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.50 € | **9.90 €** | 38.8 % | **30.9 %** | 10.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 12.50 € | **11.90 €** | 22.4 % | **16.6 %** | 12.00 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostaniciam TE81, TE8... | 5.30 € | **4.70 €** | 50.7 % | **33.6 %** | 4.80 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 8.60 € | **8.00 €** | 53.7 % | **42.9 %** | 8.10 € | stávame sa najlacnejší |
| Sada pro přežití SURVIVAL 32v1 Trizand 19920 | 15.50 € | **14.90 €** | 14.7 % | **10.2 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo, 150+150lm, Li... | 8.60 € | **8.00 €** | 53.7 % | **42.9 %** | 8.10 € | stávame sa najlacnejší |
| Medicinbal REBEL ACTIVE RBA-3107-8 35cm 8kg | 37.00 € | **36.50 €** | 6.7 % | **5.2 %** | 21.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight meteostanica, aplikácia Smart Life, extra ve... | 30.00 € | **29.50 €** | 7.7 % | **5.9 %** | 28.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 11.50 € | **11.00 €** | 10.5 % | **5.7 %** | 11.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament ELEGOO PLA+ (čierny) | 12.00 € | **11.50 €** | 14.6 % | **9.9 %** | 11.51 € | stávame sa najlacnejší |
| Leifheit Potah na žehlicí prkno Cotton C | 10.50 € | **10.00 €** | 12.6 % | **7.3 %** | 10.04 € | stávame sa najlacnejší |
| Leifheit Čistič na okna s rozprašovačem | 10.50 € | **10.00 €** | 14.4 % | **9.0 %** | 10.04 € | stávame sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 24.50 € | **24.00 €** | 14.4 % | **12.1 %** | 24.04 € | stávame sa najlacnejší |
| Budík analogový TechnoLine Modell K red | 16.00 € | **15.50 €** | 13.2 % | **9.7 %** | 15.59 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3236 | 34.00 € | **33.50 €** | 14.7 % | **13.1 %** | 33.59 € | stávame sa najlacnejší |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 15.00 € | **14.50 €** | 10.6 % | **6.9 %** | 14.59 € | stávame sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 170.00 € | **169.50 €** | 14.9 % | **14.6 %** | 169.59 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 5.30 € | **4.80 €** | 55.6 % | **40.9 %** | 4.90 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 300mm, čierna... | 2.50 € | **2.00 €** | 56.3 % | **25.1 %** | 2.10 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 5 sériový - lustrový, biely | 3.90 € | **3.40 €** | 40.9 % | **22.9 %** | 3.50 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka, IP44, čierna | 4.60 € | **4.10 €** | 49.0 % | **32.8 %** | 4.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.90 € | **8.40 €** | 17.1 % | **10.5 %** | 8.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.80 € | **4.30 €** | 48.9 % | **33.4 %** | 4.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.60 € | **4.10 €** | 48.4 % | **32.3 %** | 4.20 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 6.40 € | **5.90 €** | 53.5 % | **41.5 %** | 6.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **3.00 €** | 53.0 % | **31.1 %** | 3.10 € | stávame sa najlacnejší |
| CR-PETG Filament Creality (Transparent) | 11.50 € | **11.00 €** | 16.6 % | **11.5 %** | 11.12 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (black) | 45.00 € | **44.50 €** | 14.8 % | **13.6 %** | 44.63 € | stávame sa najlacnejší |
| ScanPart vodní filtr kompatibilní 4ks | 16.00 € | **15.50 €** | 10.1 % | **6.7 %** | 15.67 € | stávame sa najlacnejší |
| Filter Freewell CPL pre Insta360 Luna Ultra | 23.00 € | **22.50 €** | 13.9 % | **11.4 %** | 22.67 € | stávame sa najlacnejší |
| Catlink Fresh smart odor absorber | 35.50 € | **35.00 €** | 15.0 % | **13.4 %** | 35.17 € | stávame sa najlacnejší |
| Filament Anycubic TPU (mliečna biela) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadný) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná modrá) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná zelená) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 17.00 € | **16.50 €** | 15.4 % | **12.0 %** | 16.69 € | stávame sa najlacnejší |
| Girmi PE3600 | 39.50 € | **39.00 €** | 10.9 % | **9.5 %** | 39.19 € | stávame sa najlacnejší |
| PXN-F16 Flight Joystick for PC | 34.50 € | **34.00 €** | 15.3 % | **13.7 %** | 34.21 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 18.00 € | **17.50 €** | 15.0 % | **11.8 %** | 17.72 € | stávame sa najlacnejší |
| Leifheit Stěrka na dlažbu Classic s tele | 12.00 € | **11.50 €** | 10.1 % | **5.5 %** | 11.74 € | stávame sa najlacnejší |
| Meross MSP844(EU) inteligentný rýchlonabíjací napája... | 46.50 € | **46.00 €** | 15.5 % | **14.3 %** | 46.24 € | stávame sa najlacnejší |
| Koloběžka Spidoo Kruzzel 25628 růžová | 46.50 € | **46.00 €** | 12.5 % | **11.3 %** | 46.24 € | stávame sa najlacnejší |
| Xiaomi 22.5W Power Bank 20000mAh Gray | 19.50 € | **19.00 €** | 8.1 % | **5.3 %** | 19.25 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 27.50 € | **27.00 €** | 14.7 % | **12.6 %** | 27.29 € | stávame sa najlacnejší |
| Napájecí zdroj spínaný URZ1169  12V / 5A - 2,1/5,5 | 12.50 € | **12.00 €** | 13.4 % | **8.9 %** | 12.29 € | stávame sa najlacnejší |
| Konektor MC4 pro solární panely, rozbočení 4 panely,... | 15.50 € | **15.00 €** | 16.9 % | **13.1 %** | 15.29 € | stávame sa najlacnejší |
| Solární regulátor PWM Epever VS1024AU, 12/24V, 10A s... | 38.00 € | **37.50 €** | 14.4 % | **12.9 %** | 37.79 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 48.00 € | **47.50 €** | 13.0 % | **11.8 %** | 47.79 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 63.00 € | **62.50 €** | 13.4 % | **12.5 %** | 62.79 € | stávame sa najlacnejší |
| Adaptér KRUGER & MATZ KM0390 (HUB) USB C na port HDM... | 27.50 € | **27.00 €** | 14.4 % | **12.3 %** | 27.29 € | stávame sa najlacnejší |
| Barkan 3400L.W - 4 pohybový prodloužený do 600x400mm... | 58.50 € | **58.00 €** | 14.8 % | **13.8 %** | 58.29 € | stávame sa najlacnejší |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 65.50 € | **65.00 €** | 14.9 % | **14.0 %** | 65.29 € | stávame sa najlacnejší |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.50 € | **85.00 €** | 14.8 % | **14.1 %** | 85.29 € | stávame sa najlacnejší |
| Reproduktory k PC 2.1 Rebel CS-50 | 12.50 € | **12.00 €** | 15.9 % | **11.2 %** | 12.29 € | stávame sa najlacnejší |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 35.50 € | **35.00 €** | 14.6 % | **13.0 %** | 35.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (sivý) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (biely) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Zdroj Alcad AL-105 (2xvýstup, 12V/100mA) napájecí | 14.50 € | **14.00 €** | 9.4 % | **5.6 %** | 14.29 € | stávame sa najlacnejší |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 25.50 € | **25.00 €** | 14.8 % | **12.5 %** | 25.29 € | stávame sa najlacnejší |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 11.50 € | **11.00 €** | 13.3 % | **8.4 %** | 11.29 € | stávame sa najlacnejší |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 50.00 € | **49.50 €** | 10.8 % | **9.7 %** | 49.79 € | stávame sa najlacnejší |
| Leifheit Mop na podlahu Easy Spray XL | 32.50 € | **32.00 €** | 9.2 % | **7.5 %** | 32.32 € | stávame sa najlacnejší |
| Meteorologická stanice TechniSat IMETEO 400 | 32.50 € | **32.00 €** | 15.7 % | **14.0 %** | 32.33 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **45.00 €** | 21.5 % | **20.2 %** | 45.33 € | stávame sa najlacnejší |
| Akumulátor Lipo Tattu 2s 650mAh 95C 7,6V HV z XT30 L... | 10.50 € | **10.00 €** | 16.5 % | **10.9 %** | 10.33 € | stávame sa najlacnejší |
| Smart WiFi Touch Wall Switch Sonoff TX T5 3C (3-chan... | 22.00 € | **21.50 €** | 13.8 % | **11.2 %** | 21.88 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1019 | 13.00 € | **12.50 €** | 10.3 % | **6.1 %** | 12.89 € | stávame sa najlacnejší |
| Nafukovací matrace Rebel RBA-5001-L dvoulůžková 186x... | 24.50 € | **24.00 €** | 14.3 % | **12.0 %** | 24.39 € | stávame sa najlacnejší |
| Leifheit 81520 Pegasus 200 Solid | 37.50 € | **37.00 €** | 12.7 % | **11.2 %** | 37.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 339.50 € | **339.00 €** | 14.9 % | **14.8 %** | 339.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 90.50 € | **90.00 €** | 15.2 % | **14.6 %** | 90.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT GETI GWH04W 5kW (pro FV ohřev... | 338.00 € | **337.50 €** | 15.0 % | **14.8 %** | 337.89 € | stávame sa najlacnejší |
| Ardes AR4B01B | 45.50 € | **45.00 €** | 10.0 % | **8.8 %** | 45.39 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 79.00 € | **78.50 €** | 14.7 % | **14.0 %** | 78.89 € | stávame sa najlacnejší |
| TEESA TSA9017 teplovzdušný ventilátor s imitací krbu... | 58.00 € | **57.50 €** | 14.7 % | **13.7 %** | 57.89 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 149.50 € | **149.00 €** | 14.9 % | **14.5 %** | 149.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 55.00 € | **54.50 €** | 13.5 % | **12.5 %** | 54.89 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 26.00 € | **25.50 €** | 14.3 % | **12.1 %** | 25.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 24.50 € | **24.00 €** | 15.5 % | **13.1 %** | 24.39 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 24.00 € | **23.50 €** | 14.5 % | **12.1 %** | 23.89 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 112.00 € | **111.50 €** | 7.1 % | **6.6 %** | 111.89 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 283.50 € | **283.00 €** | 8.5 % | **8.3 %** | 283.39 € | stávame sa najlacnejší |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 67.50 € | **67.00 €** | 5.9 % | **5.1 %** | 67.39 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 28.00 € | **27.50 €** | 13.0 % | **11.0 %** | 27.89 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 45.00 € | **44.50 €** | 13.1 % | **11.8 %** | 44.89 € | stávame sa najlacnejší |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 229.50 € | **229.00 €** | 6.4 % | **6.2 %** | 229.39 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 113.00 € | **112.50 €** | 10.3 % | **9.8 %** | 112.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 245.50 € | **245.00 €** | 10.4 % | **10.2 %** | 245.39 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 136.00 € | **135.50 €** | 8.4 % | **8.0 %** | 135.89 € | stávame sa najlacnejší |
| REBEL Micropower 1000 | 89.00 € | **88.50 €** | 11.9 % | **11.2 %** | 88.89 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 85.50 € | **85.00 €** | 15.2 % | **14.5 %** | 85.39 € | stávame sa najlacnejší |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 91.50 € | **91.00 €** | 15.0 % | **14.4 %** | 91.39 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 94.50 € | **94.00 €** | 11.9 % | **11.4 %** | 94.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 125.50 € | **125.00 €** | 13.9 % | **13.4 %** | 125.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 202.00 € | **201.50 €** | 14.5 % | **14.2 %** | 201.89 € | stávame sa najlacnejší |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 109.50 € | **109.00 €** | 7.7 % | **7.2 %** | 109.39 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 220.00 € | **219.50 €** | 14.9 % | **14.7 %** | 219.89 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 34.00 € | **33.50 €** | 25.4 % | **23.6 %** | 33.90 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 13.00 € | **12.50 €** | 38.5 % | **33.2 %** | 12.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.50 €** | 26.4 % | **23.3 %** | 19.90 € | stávame sa najlacnejší |
| Inteligentná žiarovka Yeelight W1 GU10 (Biela) | 16.00 € | **15.50 €** | 14.3 % | **10.7 %** | 15.90 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 14.00 € | **13.50 €** | 32.8 % | **28.1 %** | 13.90 € | stávame sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 38.00 € | **37.50 €** | 32.0 % | **30.3 %** | 37.90 € | stávame sa najlacnejší |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 23.00 € | **22.50 €** | 39.2 % | **36.2 %** | 22.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 22.00 € | **21.50 €** | 25.3 % | **22.5 %** | 21.90 € | stávame sa najlacnejší |
| DURACELL baterie DRNEL14 pro Nikon | 20.00 € | **19.50 €** | 10.5 % | **7.8 %** | 19.90 € | stávame sa najlacnejší |
| Teploměr digitální s vlhkoměrem EMOS E0558 | 12.00 € | **11.50 €** | 14.9 % | **10.1 %** | 11.90 € | stávame sa najlacnejší |
| BROTHER DCP-T730DW | 282.50 € | **282.00 €** | 18.4 % | **18.2 %** | 282.40 € | stávame sa najlacnejší |
| Dotykový vypínač svetla ZigBee Avatto TS60-EU-W1 Sin... | 21.00 € | **20.50 €** | 15.0 % | **12.2 %** | 20.90 € | stávame sa najlacnejší |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.50 € | **26.00 €** | 11.2 % | **9.1 %** | 26.40 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 20.00 € | **19.50 €** | 24.7 % | **21.6 %** | 19.90 € | stávame sa najlacnejší |
| HP 15,6" Taška Prelude | 16.50 € | **16.00 €** | 25.8 % | **22.0 %** | 16.40 € | stávame sa najlacnejší |
| KRUPS KP1A3110 Nescafé Dolce Gusto Picco | 54.50 € | **54.00 €** | 9.9 % | **8.9 %** | 54.42 € | stávame sa najlacnejší |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 29.50 € | **29.00 €** | 26.3 % | **24.2 %** | 29.42 € | stávame sa najlacnejší |
| Fixed MagPad, bílá FIXMPAD2-WH | 14.50 € | **14.00 €** | 25.7 % | **21.3 %** | 14.43 € | stávame sa najlacnejší |
| Interaktívne hračky pre mačky 3 v 1 | 10.50 € | **10.00 €** | 13.8 % | **8.4 %** | 10.46 € | stávame sa najlacnejší |
| Superfire BM01 4-in-1 bicycle light | 19.50 € | **19.00 €** | 14.1 % | **11.1 %** | 19.46 € | stávame sa najlacnejší |
| Sluchátka Bluetooth KRUGER & MATZ Street 3 Wireless ... | 34.50 € | **34.00 €** | 7.1 % | **5.5 %** | 34.49 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creallity (Silver) | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.49 € | stávame sa najlacnejší |
| Sequential Shifter Moza Racing SGP RS059 | 134.90 € | **134.50 €** | 15.0 % | **14.6 %** | 134.51 € | stávame sa najlacnejší |
| Electrolux E7K1-6BP | 69.90 € | **69.50 €** | 12.2 % | **11.5 %** | 69.75 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 80.90 € | **80.50 €** | 9.0 % | **8.5 %** | 80.79 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0034 FUN WHEELS LIGHT ... | 111.90 € | **111.50 €** | 15.2 % | **14.8 %** | 111.79 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0033 FUN WHEELS LIGHT ... | 111.90 € | **111.50 €** | 15.2 % | **14.8 %** | 111.79 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa Z1C 16,1'' | 88.90 € | **88.50 €** | 6.2 % | **5.7 %** | 88.81 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT161E | 108.90 € | **108.50 €** | 6.5 % | **6.1 %** | 108.89 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 10.00 € | **9.60 €** | 38.7 % | **33.2 %** | 9.70 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka Fast, IP68, 5-9mm, ... | 4.20 € | **3.80 €** | 55.9 % | **41.1 %** | 3.90 € | stávame sa najlacnejší |
| Ali pouzdro Mag-Skin iP17 ProMax PAS0029 | 14.90 € | **14.50 €** | 11.8 % | **8.8 %** | 14.63 € | stávame sa najlacnejší |
| CL držák vent. horiz., černý HANDYDRIVEK | 10.90 € | **10.50 €** | 12.3 % | **8.2 %** | 10.68 € | stávame sa najlacnejší |
| Hyper PLA Filament Creality (White) | 12.90 € | **12.50 €** | 16.4 % | **12.8 %** | 12.77 € | stávame sa najlacnejší |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.90 € | **15.50 €** | 10.5 % | **7.7 %** | 15.83 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 1.60 € | **1.20 €** | 58.6 % | **19.0 %** | 1.30 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 2.10 € | **1.70 €** | 55.2 % | **25.6 %** | 1.80 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, s priebežnou zásuvkou, IP20... | 1.70 € | **1.30 €** | 44.0 % | **10.1 %** | 1.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 250mm, natura... | 2.00 € | **1.60 €** | 56.3 % | **25.1 %** | 1.70 € | stávame sa najlacnejší |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.80 € | **2.40 €** | 46.9 % | **25.9 %** | 2.50 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, s priebežnou zásuvkou | 1.70 € | **1.30 €** | 44.0 % | **10.1 %** | 1.40 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.40 € | **3.00 €** | 46.3 % | **29.0 %** | 3.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 4.00 € | **3.60 €** | 47.2 % | **32.4 %** | 3.70 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek | 2.80 € | **2.40 €** | 48.8 % | **27.5 %** | 2.50 € | stávame sa najlacnejší |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 5.10 € | **4.70 €** | 40.1 % | **29.1 %** | 4.80 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 5.10 € | **4.70 €** | 46.0 % | **34.5 %** | 4.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 8.10 € | **7.70 €** | 47.3 % | **40.0 %** | 7.80 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757W | 27.90 € | **27.50 €** | 14.9 % | **13.3 %** | 27.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7400 | 31.90 € | **31.50 €** | 9.5 % | **8.1 %** | 31.69 € | stávame sa najlacnejší |
| WiFi extender REBEL KOM1032 | 24.90 € | **24.50 €** | 15.8 % | **14.0 %** | 24.69 € | stávame sa najlacnejší |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 16.90 € | **16.50 €** | 15.7 % | **12.9 %** | 16.69 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **31.50 €** | 16.9 % | **15.4 %** | 31.70 € | stávame sa najlacnejší |
| Aligator Reproduktor pro MagSafe ABSMB01 | 16.90 € | **16.50 €** | 25.8 % | **22.8 %** | 16.72 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.90 € | **39.50 €** | 38.6 % | **37.2 %** | 39.78 € | stávame sa najlacnejší |
| Evolveo Motion D1, ovladač s klávesnicí | 33.90 € | **33.50 €** | 8.1 % | **6.8 %** | 33.79 € | stávame sa najlacnejší |
| D-LINK AX9U | 17.90 € | **17.50 €** | 13.2 % | **10.6 %** | 17.85 € | stávame sa najlacnejší |
| Leifheit LinoLift 500 85359 | 55.90 € | **55.50 €** | 11.9 % | **11.1 %** | 55.89 € | stávame sa najlacnejší |
| Indesit BTW S50400 EU/N | 270.90 € | **270.50 €** | 8.1 % | **8.0 %** | 270.70 € | stávame sa najlacnejší |
| Johansson 6700 Revolution programovatelný zesilovač | 292.90 € | **292.50 €** | 15.0 % | **14.8 %** | 292.79 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 8.30 € | **8.00 €** | 47.7 % | **42.3 %** | 8.10 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.90 € | **6.60 €** | 38.5 % | **32.5 %** | 6.70 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 3.10 € | **2.80 €** | 52.7 % | **38.0 %** | 2.90 € | stávame sa najlacnejší |
| Solight vypínač šnúrový, jednopólový priechodný, biely | 1.10 € | **0.80 €** | 54.2 % | **12.1 %** | 0.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 3000K, 510lm | 1.00 € | **0.70 €** | 53.4 % | **7.4 %** | 0.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI spojka, HDMI zdierka - HDMI zdierka, pr... | 1.10 € | **0.80 €** | 51.6 % | **10.2 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.20 €** | 56.3 % | **25.1 %** | 1.30 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, zdierka 5,5 ... | 1.10 € | **0.80 €** | 54.2 % | **12.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.70 €** | 57.9 % | **34.2 %** | 1.80 € | stávame sa najlacnejší |
| Solight vypínač šnúrový, jednopólový priechodný, čierny | 1.10 € | **0.80 €** | 54.2 % | **12.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, uhlová, IP44, čierna | 2.10 € | **1.80 €** | 49.8 % | **28.4 %** | 1.90 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.20 € | **0.90 €** | 59.9 % | **20.0 %** | 1.00 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.40 € | **1.10 €** | 45.9 % | **14.7 %** | 1.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 3.00 € | **2.70 €** | 46.0 % | **31.4 %** | 2.80 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 1 jednopólový, biely | 3.00 € | **2.70 €** | 41.8 % | **27.6 %** | 2.80 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.40 € | **1.10 €** | 47.8 % | **16.1 %** | 1.20 € | stávame sa najlacnejší |
| Solight rozbočovač, 5 x 2,5A, biely | 1.90 € | **1.60 €** | 47.1 % | **23.9 %** | 1.70 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 6 striedavý - schodiskový, b... | 3.00 € | **2.70 €** | 41.0 % | **26.9 %** | 2.80 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.60 € | **9.30 €** | 38.6 % | **34.3 %** | 9.40 € | stávame sa najlacnejší |
| Solight LED stmievateľná stolná lampička s klipom bi... | 9.40 € | **9.20 €** | 11.2 % | **8.9 %** | 9.30 € | stávame sa najlacnejší |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 9.90 € | **9.70 €** | 21.6 % | **19.1 %** | 9.80 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.40 € | **9.20 €** | 35.7 % | **32.9 %** | 9.30 € | stávame sa najlacnejší |
| Solight profesionálný kliešťový multimeter, 10mA - 1... | 9.90 € | **9.70 €** | 28.2 % | **25.6 %** | 9.80 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.40 € | **8.20 €** | 43.8 % | **40.4 %** | 8.30 € | stávame sa najlacnejší |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 5.20 € | **5.00 €** | 46.8 % | **41.1 %** | 5.10 € | stávame sa najlacnejší |
| Solight LED svetelný pás so svetelným a pohybovým se... | 6.20 € | **6.00 €** | 46.1 % | **41.4 %** | 6.10 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.70 € | **4.50 €** | 41.0 % | **35.0 %** | 4.60 € | stávame sa najlacnejší |
| Solight LED svetelný zdroj do stropných svetiel, 18W... | 5.20 € | **5.00 €** | 46.8 % | **41.1 %** | 5.10 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.40 € | **5.20 €** | 45.4 % | **40.0 %** | 5.30 € | stávame sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E2... | 2.50 € | **2.30 €** | 50.6 % | **38.5 %** | 2.40 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.30 € | **4.10 €** | 35.5 % | **29.2 %** | 4.20 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.70 € | **2.50 €** | 37.2 % | **27.0 %** | 2.60 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.30 €** | 28.3 % | **24.3 %** | 6.40 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.30 €** | 8.7 % | **5.4 %** | 6.40 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.20 € | **3.00 €** | 32.1 % | **23.8 %** | 3.10 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Veľkej Británie, typ G | 4.90 € | **4.70 €** | 20.4 % | **15.4 %** | 4.80 € | stávame sa najlacnejší |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.30 € | **4.10 €** | 38.7 % | **32.3 %** | 4.20 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.40 € | **6.20 €** | 36.9 % | **32.6 %** | 6.30 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 8.00 € | **7.80 €** | 36.9 % | **33.5 %** | 7.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **3.40 €** | 15.7 % | **9.3 %** | 3.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 7.90 € | **7.70 €** | 8.1 % | **5.4 %** | 7.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.50 € | **7.30 €** | 38.9 % | **35.2 %** | 7.40 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.70 € | **3.50 €** | 45.3 % | **37.5 %** | 3.60 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.90 € | **5.70 €** | 45.4 % | **40.4 %** | 5.80 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.70 € | **7.50 €** | 44.2 % | **40.5 %** | 7.60 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.60 € | **3.40 €** | 24.5 % | **17.6 %** | 3.50 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm, rozb... | 2.00 € | **1.80 €** | 52.0 % | **36.8 %** | 1.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 6000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 4000K, 720lm | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 4000K, 720lm | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.20 € | **1.00 €** | 39.4 % | **16.1 %** | 1.10 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.10 €** | 40.9 % | **19.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.10 €** | 40.9 % | **19.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, IP20, biela | 1.20 € | **1.00 €** | 43.5 % | **19.6 %** | 1.10 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 2,5A, biela | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.90 € | **1.70 €** | 23.6 % | **10.6 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **1.80 €** | 23.2 % | **10.9 %** | 1.90 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10A, biely-sivý | 3.30 € | **3.10 €** | 39.7 % | **31.3 %** | 3.20 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.80 € | **2.60 €** | 35.5 % | **25.8 %** | 2.70 € | stávame sa najlacnejší |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.90 € | **2.70 €** | 23.4 % | **14.9 %** | 2.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.90 € | **3.70 €** | 26.3 % | **19.8 %** | 3.80 € | stávame sa najlacnejší |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.60 € | **9.40 €** | 54.6 % | **51.3 %** | 9.50 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, čierna | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.10 € | **4.90 €** | 35.9 % | **30.6 %** | 5.00 € | stávame sa najlacnejší |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.10 € | **5.90 €** | 32.6 % | **28.3 %** | 6.00 € | stávame sa najlacnejší |
| Solight digitálny merač spotreby el. energie, veľký ... | 10.00 € | **9.80 €** | 25.1 % | **22.6 %** | 9.90 € | stávame sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 10.00 € | **9.80 €** | 45.7 % | **42.8 %** | 9.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.60 € | **7.40 €** | 24.8 % | **21.5 %** | 7.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **6.90 €** | 13.4 % | **10.2 %** | 7.00 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SER-500 URZ3418 s opožděný... | 31.00 € | **30.90 €** | 5.7 % | **5.3 %** | 30.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 265 s teploměrem | 17.00 € | **16.90 €** | 7.1 % | **6.5 %** | 16.99 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/B | 17.00 € | **16.90 €** | 14.7 % | **14.0 %** | 16.99 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.90 €** | 8.2 % | **7.9 %** | 40.99 € | stávame sa najlacnejší |
| Solight zástrčka plochá priama, IP20, čierna | 0.80 € | **0.70 €** | 35.5 % | **18.6 %** | 0.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 4000K, 595l... | 1.00 € | **0.90 €** | 23.2 % | **10.9 %** | 0.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 0.50 € | **0.40 €** | 69.4 % | **35.5 %** | 0.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guma posilovací REBEL ACTIVE RBA-3006 TPE Sada posil... | 13.00 € | **12.90 €** | 6.2 % | **5.4 %** | 11.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, biele, 13W, ... | 6.50 € | **6.40 €** | 6.8 % | **5.1 %** | 6.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, sivé, 13W, 9... | 6.50 € | **6.40 €** | 6.8 % | **5.1 %** | 6.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana, 3z, 1,5m, biela | 6.50 € | **6.40 €** | 7.8 % | **6.2 %** | 6.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada 16 barevných kovových autíček 26319 | 12.00 € | **11.90 €** | 14.8 % | **13.8 %** | 11.99 € | stávame sa najlacnejší |

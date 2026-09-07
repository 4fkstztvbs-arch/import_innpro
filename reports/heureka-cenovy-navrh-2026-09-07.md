# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-07

Vstup: `premiumstoresk_20260907_2041.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **6009**
- Návrh **zvýšiť** cenu: **264** produktov
- Návrh **znížiť** cenu: **1609** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4136** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **555**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (264)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Grafický tablet Huion Kamvas Studio 24 KS2401 | 2012.00 € | **2346.00 €** | 15.0 % | **34.1 %** | 2346.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samsung The Frame Pro QE75LS03HW | 2683.50 € | **2799.00 €** | 10.0 % | **14.7 %** | 2683.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 954.50 € | **1014.90 €** | 15.0 % | **22.3 %** | 1014.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mini projektor Phillips N-100 s rozlíšením 480p (biely) | 90.50 € | **117.50 €** | 15.1 % | **49.5 %** | 117.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL 430406 Partybox 710 - black | 533.50 € | **559.00 €** | 10.0 % | **15.2 %** | 533.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projektor Phillips N-160 s rozlíšením 1080p (tmavošedý) | 219.50 € | **241.90 €** | 14.9 % | **26.7 %** | 241.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mini projektor Phillips N-110 s rozlíšením 720p (čie... | 107.50 € | **126.90 €** | 15.0 % | **35.7 %** | 126.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projektor Phillips N-150 s rozlíšením 1080p (tmavošedý) | 190.50 € | **209.00 €** | 15.1 % | **26.3 %** | 209.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux 600 FLEX EES42210IX | 462.90 € | **471.90 €** | 5.0 % | **7.1 %** | 462.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 42.00 € | **49.00 €** | 19.0 % | **38.8 %** | 42.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko B5RCNA416HXBR | 436.50 € | **443.50 €** | 5.1 % | **6.8 %** | 443.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL CHARGEES3 | 114.00 € | **119.90 €** | 9.5 % | **15.2 %** | 119.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 21.50 € | **26.50 €** | 6.0 % | **30.7 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 68.90 € | **73.50 €** | 12.7 % | **20.2 %** | 69.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **73.90 €** | 23.0 % | **30.8 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.00 € | **18.00 €** | 5.2 % | **35.3 %** | 17.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GV663B65 | 504.00 € | **507.90 €** | 6.2 % | **7.1 %** | 504.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 40.50 € | **44.00 €** | 26.7 % | **37.6 %** | 40.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 119.50 € | **122.90 €** | 13.2 % | **16.4 %** | 122.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 19.50 € | **22.90 €** | 31.7 % | **54.6 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 48.90 € | **52.00 €** | 15.2 % | **22.5 %** | 49.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| MEROSS MRS200MA-EU – inteligentný navíjací mechanizm... | 120.90 € | **124.00 €** | 15.1 % | **18.1 %** | 124.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov FREEWELL pre DJI Mavic 4 Pro ND/PL Brig... | 83.90 € | **87.00 €** | 15.2 % | **19.4 %** | 87.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 41.50 € | **44.50 €** | 29.9 % | **39.3 %** | 41.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herní mikrofon Maono DM30RGB (černý) | 37.50 € | **40.50 €** | 6.3 % | **14.8 %** | 40.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mobilný ovládač GameSir X5 Lite GN Bright Green | 25.50 € | **28.50 €** | 16.1 % | **29.7 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 43.00 € | **45.50 €** | 14.8 % | **21.5 %** | 43.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 14.50 € | **16.90 €** | 7.7 % | **25.5 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AX1500 Range Extender (E15) | 41.50 € | **43.90 €** | 8.3 % | **14.5 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 66.90 € | **69.00 €** | 5.2 % | **8.5 %** | 66.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 21.50 € | **23.50 €** | 31.5 % | **43.8 %** | 21.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 15.00 € | **17.00 €** | 12.3 % | **27.3 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Red | 16.50 € | **18.50 €** | 8.8 % | **22.0 %** | 18.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C White | 16.50 € | **18.50 €** | 8.8 % | **22.0 %** | 18.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 14.50 € | **16.50 €** | 25.8 % | **43.2 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 33.00 € | **34.90 €** | 11.3 % | **17.7 %** | 33.03 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Blue | 16.90 € | **18.50 €** | 11.4 % | **22.0 %** | 18.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 27.00 € | **28.50 €** | 13.7 % | **20.1 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter UNI-T UT118B | 26.00 € | **27.50 €** | 9.3 % | **15.6 %** | 27.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter MOVA pre model I10 | 13.50 € | **15.00 €** | 14.8 % | **27.6 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **70.90 €** | 34.0 % | **36.7 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovačka G21 Nefrit | 116.50 € | **117.90 €** | 8.7 % | **10.0 %** | 116.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Black | 65.50 € | **66.90 €** | 5.8 % | **8.1 %** | 65.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Blue | 65.50 € | **66.90 €** | 5.8 % | **8.1 %** | 65.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 22.50 € | **23.90 €** | 40.1 % | **48.8 %** | 23.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 30.50 € | **31.90 €** | 32.1 % | **38.2 %** | 31.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá ONIKUMA GT886 (čierne) | 23.50 € | **24.90 €** | 16.1 % | **23.0 %** | 24.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy ORYX X220 Iris | 19.50 € | **20.90 €** | 10.2 % | **18.1 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie ručné svietidlo, 150+150lm, Li... | 6.80 € | **8.10 €** | 21.5 % | **44.7 %** | 8.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Perfect Steam Air Board L/Uni | 13.90 € | **15.00 €** | 12.0 % | **20.9 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **6.40 €** | 8.9 % | **29.1 %** | 5.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight otočná IP kamera | 34.50 € | **35.50 €** | 25.1 % | **28.7 %** | 34.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EWS6526WC | 311.50 € | **312.50 €** | 7.7 % | **8.1 %** | 312.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sušič vlasov MOVA Flip 10 | 184.00 € | **185.00 €** | 9.8 % | **10.4 %** | 184.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE ToastMax | 47.50 € | **48.50 €** | 11.1 % | **13.4 %** | 47.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal BC50D2V0 | 16.00 € | **17.00 €** | 10.3 % | **17.2 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 6.20 € | **7.20 €** | 17.0 % | **35.8 %** | 6.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.00 € | **12.90 €** | 30.6 % | **40.4 %** | 12.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.00 € | **10.90 €** | 14.5 % | **24.8 %** | 10.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.00 € | **11.90 €** | 34.7 % | **45.7 %** | 11.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.00 € | **16.90 €** | 28.3 % | **35.5 %** | 16.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.00 € | **19.90 €** | 37.2 % | **43.7 %** | 19.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, biela | 27.00 € | **27.90 €** | 21.3 % | **25.4 %** | 27.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.00 € | **29.90 €** | 16.7 % | **20.3 %** | 29.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.00 € | **19.90 €** | 33.3 % | **39.6 %** | 19.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filters ND8/16/32 Freewell for DJI Neo | 17.00 € | **17.90 €** | 13.6 % | **19.6 %** | 17.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.00 € | **39.90 €** | 14.2 % | **16.8 %** | 39.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tablet HOTWAV TAB R9 Plus (čierny) | 275.00 € | **275.90 €** | 7.1 % | **7.4 %** | 275.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko EnergySpin BM3WFU3721WBW | 324.00 € | **324.90 €** | 6.8 % | **7.1 %** | 324.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 9.80 € | **10.50 €** | 18.6 % | **27.0 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický skúter NAVEE GT5 Max | 565.90 € | **566.50 €** | 6.3 % | **6.4 %** | 566.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| WHIRLPOOL WI 7020 P | 330.90 € | **331.50 €** | 7.9 % | **8.1 %** | 330.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 19.90 € | **20.50 €** | 27.2 % | **31.0 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 17.90 € | **18.50 €** | 5.2 % | **8.7 %** | 18.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 43.90 € | **44.50 €** | 5.5 % | **7.0 %** | 44.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 43.90 € | **44.50 €** | 13.8 % | **15.4 %** | 44.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BK | 18.90 € | **19.50 €** | 7.2 % | **10.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Mercusys MC510 3MPx, venkovní, IP PTZ... | 32.90 € | **33.50 €** | 5.8 % | **7.7 %** | 32.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 15.90 € | **16.50 €** | 19.0 % | **23.5 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AC13U | 13.90 € | **14.50 €** | 10.1 % | **14.9 %** | 14.21 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 12.90 € | **13.50 €** | 8.9 % | **14.0 %** | 13.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 47dB | 15.90 € | **16.50 €** | 24.4 % | **29.1 %** | 16.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herná myš ONIKUMA CW953 (čierna) | 12.90 € | **13.50 €** | 15.4 % | **20.7 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Thermo Reflect L/Universal | 13.90 € | **14.50 €** | 12.0 % | **16.8 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 41.00 € | **41.50 €** | 4.9 % | **6.1 %** | 41.06 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny klešťový multimeter Uni-T UT200R | 17.00 € | **17.50 €** | 9.4 % | **12.6 %** | 17.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ručný multimeter do auta UNI-T UT107 | 29.00 € | **29.50 €** | 7.8 % | **9.6 %** | 29.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny kapesny kompresor mini | 39.00 € | **39.50 €** | 18.3 % | **19.8 %** | 39.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| UNI-T UT501A tester izolačného odporu | 57.00 € | **57.50 €** | 9.3 % | **10.3 %** | 57.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Svetelný merač UNI-T UT383 | 16.50 € | **17.00 €** | 11.1 % | **14.5 %** | 16.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 48.00 € | **48.50 €** | 8.7 % | **9.9 %** | 48.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Colmi P71 Smartwatch (Blue) | 18.00 € | **18.50 €** | 12.6 % | **15.7 %** | 18.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 36.00 € | **36.50 €** | 6.3 % | **7.8 %** | 36.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 41.00 € | **41.50 €** | 12.0 % | **13.3 %** | 41.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 85.00 € | **85.50 €** | 5.8 % | **6.4 %** | 85.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 85.00 € | **85.50 €** | 5.8 % | **6.4 %** | 85.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 48.00 € | **48.50 €** | 14.8 % | **16.0 %** | 48.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 46.00 € | **46.50 €** | 10.7 % | **11.9 %** | 46.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor ZEUSLAP P16KT s 16-palcovým dotykov... | 204.00 € | **204.50 €** | 13.8 % | **14.1 %** | 204.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 31.00 € | **31.50 €** | 6.1 % | **7.8 %** | 31.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.00 € | **13.50 €** | 31.3 % | **36.3 %** | 13.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T UT207B digitálny klešťový multimeter | 80.00 € | **80.50 €** | 8.4 % | **9.0 %** | 80.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny mikroohmmer Uni-T UT620C+ | 181.00 € | **181.50 €** | 7.0 % | **7.3 %** | 181.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 465.50 € | **466.00 €** | 7.6 % | **7.7 %** | 465.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 899.50 € | **900.00 €** | 14.3 % | **14.4 %** | 899.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 90.00 € | **90.50 €** | 14.5 % | **15.1 %** | 90.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kontaktný teplomer Uni-T UT325 | 78.00 € | **78.50 €** | 8.4 % | **9.1 %** | 78.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T UT362H Anemometer | 166.00 € | **166.50 €** | 12.2 % | **12.5 %** | 166.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač hladiny hluku Uni-T UT35 | 118.50 € | **119.00 €** | 10.6 % | **11.0 %** | 118.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 115.00 € | **115.50 €** | 11.0 % | **11.5 %** | 115.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 18.00 € | **18.50 €** | 19.7 % | **23.0 %** | 18.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy BR 26SSB6G-S | 347.00 € | **347.50 €** | 9.9 % | **10.1 %** | 347.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stropné svetlo Yeelight C2201C400 | 64.00 € | **64.50 €** | 14.8 % | **15.7 %** | 64.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM40T | 28.50 € | **29.00 €** | 10.9 % | **12.8 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia IP kamera s LED světlom | 30.50 € | **31.00 €** | 14.7 % | **16.6 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT117C | 126.00 € | **126.50 €** | 5.4 % | **5.8 %** | 126.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 10.00 € | **10.50 €** | 25.5 % | **31.7 %** | 10.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell ND1000 Filter pre OSMO Action 6 | 16.00 € | **16.50 €** | 6.7 % | **10.0 %** | 16.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 18.00 € | **18.50 €** | 8.2 % | **11.2 %** | 18.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Schodík pred mačaciu toaletu Catlink Scooper (sivé) | 84.00 € | **84.50 €** | 13.5 % | **14.2 %** | 84.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 29.00 € | **29.50 €** | 32.4 % | **34.7 %** | 29.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **20.50 €** | 46.6 % | **50.3 %** | 20.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Habotest HT86B | 11.00 € | **11.50 €** | 7.6 % | **12.5 %** | 11.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| GameSir G7 HE wired controller (white) | 43.00 € | **43.50 €** | 12.1 % | **13.4 %** | 43.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superfire BM01 4-in-1 bicycle light | 19.00 € | **19.50 €** | 11.1 % | **14.1 %** | 19.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filament Anycubic TPU (čierny) 1 kg | 21.00 € | **21.50 €** | 9.0 % | **11.6 %** | 21.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| AnyCubic ABS-Like Resin Pro 2 (Black) | 14.00 € | **14.50 €** | 12.1 % | **16.1 %** | 14.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| AnyCubic ABS-Like Resin Pro 2 (Grey) | 14.00 € | **14.50 €** | 6.3 % | **10.1 %** | 14.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stabilizátor AOCHUAN X2 s AI senzorom (čierny) | 68.00 € | **68.50 €** | 13.4 % | **14.2 %** | 68.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| CR-Silk PLA Filament Creallity (Silver) | 17.00 € | **17.50 €** | 11.5 % | **14.7 %** | 17.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 10.50 € | **11.00 €** | 26.5 % | **32.5 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 6.60 € | **7.10 €** | 32.5 % | **42.5 %** | 7.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kalibrátor procesov Uni-T UT701 | 181.50 € | **182.00 €** | 7.9 % | **8.2 %** | 182.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D skener Creality Sermoon P1 | 2909.50 € | **2910.00 €** | 5.9 % | **6.0 %** | 2910.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GODOX SB-USW80120 Softbox s dáždnikom | 61.00 € | **61.50 €** | 6.0 % | **6.9 %** | 61.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED Sklo s apl.SG S26 FIXGFADA-1704-BK | 10.50 € | **11.00 €** | 5.5 % | **10.5 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 368.50 € | **369.00 €** | 5.2 % | **5.3 %** | 369.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonická zubná kefka s aplikáciou pre deti, sada konc... | 15.00 € | **15.50 €** | 14.0 % | **17.8 %** | 15.58 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 24.00 € | **24.50 €** | 33.3 % | **36.1 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 64.00 € | **64.50 €** | 12.2 % | **13.0 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 27.50 € | **28.00 €** | 11.4 % | **13.4 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 615W Precise | 56.00 € | **56.50 €** | 7.5 % | **8.4 %** | 56.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 750 | 113.00 € | **113.50 €** | 8.4 % | **8.9 %** | 113.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 279.00 € | **279.50 €** | 7.1 % | **7.3 %** | 279.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.00 € | **18.50 €** | 5.7 % | **8.6 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izbová anténa, DVB-T2/FM, 36dB | 11.50 € | **12.00 €** | 14.3 % | **19.3 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 48.00 € | **48.50 €** | 11.6 % | **12.7 %** | 48.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1346.50 € | **1346.90 €** | 7.4 % | **7.4 %** | 1346.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 195.50 € | **195.90 €** | 9.9 % | **10.1 %** | 195.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 212.50 € | **212.90 €** | 9.9 % | **10.1 %** | 212.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Arzopa A3C Pro 13,3" | 121.50 € | **121.90 €** | 8.3 % | **8.6 %** | 121.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 82.50 € | **82.90 €** | 9.8 % | **10.4 %** | 82.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 74.50 € | **74.90 €** | 12.4 % | **13.0 %** | 74.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM1000 | 91.50 € | **91.90 €** | 6.0 % | **6.5 %** | 91.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Infračervený teplomer Uni-T UT303C+ | 97.50 € | **97.90 €** | 8.8 % | **9.2 %** | 97.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Detektor drôtov UNI-T UT25CL | 139.50 € | **139.90 €** | 11.2 % | **11.5 %** | 139.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Clutch Pedal Moza Racing CRP2 RS067 | 98.50 € | **98.90 €** | 7.1 % | **7.5 %** | 98.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Shifter Moza Racing HGP RS039 | 143.50 € | **143.90 €** | 6.9 % | **7.2 %** | 143.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 89.50 € | **89.90 €** | 14.2 % | **14.7 %** | 89.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.50 € | **84.90 €** | 8.8 % | **9.4 %** | 84.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 13.50 € | **13.90 €** | 4.6 % | **7.7 %** | 13.55 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 9.60 € | **10.00 €** | 33.2 % | **38.7 %** | 9.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny infračervený teplomer -50° +380°C | 13.50 € | **13.90 €** | 35.8 % | **39.9 %** | 13.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 10.50 € | **10.90 €** | 26.5 % | **31.3 %** | 10.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 15.50 € | **15.90 €** | 7.8 % | **10.6 %** | 15.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.50 € | **10.90 €** | 21.6 % | **26.2 %** | 10.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.50 € | **10.90 €** | 14.9 % | **19.3 %** | 10.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP Wireless Mouse 220 Black | 13.50 € | **13.90 €** | 10.5 % | **13.8 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, 24 h., vypínač, 1 režim | 4.70 € | **5.10 €** | 25.3 % | **35.9 %** | 4.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 4.70 € | **5.10 €** | 34.5 % | **46.0 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 29.50 € | **29.90 €** | 12.5 % | **14.1 %** | 29.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.50 € | **17.90 €** | 43.3 % | **46.6 %** | 17.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter Freewell Osmo Pocket ND32/PL | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter Freewell Osmo Pocket ND64/PL | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| ND filter Freewell Osmo Pocket 4P ND16 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| ND filter Freewell Osmo Pocket 4P ND8 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.50 € | **17.90 €** | 12.6 % | **15.2 %** | 17.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač teploty a vlhkosti UNI-T UT333S | 23.50 € | **23.90 €** | 9.7 % | **11.6 %** | 23.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 23.50 € | **23.90 €** | 15.4 % | **17.4 %** | 23.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 18.50 € | **18.90 €** | 17.5 % | **20.0 %** | 18.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 26.50 € | **26.90 €** | 30.4 % | **32.4 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 48.50 € | **48.90 €** | 7.4 % | **8.3 %** | 48.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Klávesnica ONIKUMA MT706 (biela) (QWERTY) | 40.50 € | **40.90 €** | 15.4 % | **16.5 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus AS210 MAX AT1 Max Anoutway – mini pumpa na b... | 39.50 € | **39.90 €** | 12.8 % | **14.0 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit 2AIR | 32.50 € | **32.90 €** | 12.4 % | **13.8 %** | 32.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Palm biele drevo 500 ml | 22.50 € | **22.90 €** | 11.7 % | **13.7 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.50 € | **18.90 €** | 12.6 % | **15.0 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 34.50 € | **34.90 €** | 6.4 % | **7.6 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Evolveo Motion D1, ovladač s klávesnicí | 33.50 € | **33.90 €** | 6.5 % | **7.7 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 17.50 € | **17.90 €** | 19.7 % | **22.4 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AX9U | 17.50 € | **17.90 €** | 10.2 % | **12.7 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510B černá | 36.50 € | **36.90 €** | 7.7 % | **8.9 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 35.50 € | **35.90 €** | 6.0 % | **7.1 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Intelligent self-cleaning cat litterbox UBPet C20 | 277.50 € | **277.90 €** | 12.0 % | **12.2 %** | 277.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň ELEGOO Jupiter 2 | 848.50 € | **848.90 €** | 8.3 % | **8.3 %** | 848.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vibračný tester Uni-T UT315A | 308.50 € | **308.90 €** | 14.9 % | **15.0 %** | 308.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.60 € | **6.90 €** | 32.5 % | **38.5 %** | 6.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.10 € | **2.40 €** | 16.9 % | **33.6 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.70 € | **3.00 €** | 31.4 % | **46.0 %** | 2.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 7.90 € | **8.20 €** | 8.3 % | **12.4 %** | 8.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.70 € | **8.90 €** | 9.0 % | **11.5 %** | 8.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.20 € | **8.40 €** | 40.4 % | **43.8 %** | 8.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.00 € | **5.20 €** | 11.1 % | **15.5 %** | 5.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 5.00 € | **5.20 €** | 8.7 % | **13.0 %** | 5.15 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.50 €** | 5.4 % | **8.7 %** | 6.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.10 € | **5.30 €** | 16.5 % | **21.0 %** | 5.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 6.80 € | **7.00 €** | 40.3 % | **44.4 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 6.50 € | **6.70 €** | 26.7 % | **30.6 %** | 6.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR stropný senzor, interiérový, biely | 6.70 € | **6.90 €** | 31.9 % | **35.8 %** | 6.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 7.80 € | **8.00 €** | 33.5 % | **36.9 %** | 7.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.50 € | **3.70 €** | 12.5 % | **18.9 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 1.90 € | **2.10 €** | 17.0 % | **29.3 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.10 € | **1.30 €** | 19.2 % | **40.9 %** | 1.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.10 € | **3.30 €** | 27.9 % | **36.2 %** | 3.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.70 € | **3.90 €** | 11.4 % | **17.4 %** | 3.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 8.00 € | **8.20 €** | 36.6 % | **40.1 %** | 8.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 9.80 € | **10.00 €** | 36.0 % | **38.7 %** | 9.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.40 € | **9.60 €** | 18.5 % | **21.0 %** | 9.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.00 € | **9.20 €** | 28.6 % | **31.5 %** | 9.16 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.40 € | **7.60 €** | 21.5 % | **24.8 %** | 7.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 8.80 € | **9.00 €** | 38.9 % | **42.1 %** | 9.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.80 € | **10.00 €** | 38.1 % | **40.9 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.30 € | **9.50 €** | 25.6 % | **28.3 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.40 € | **9.60 €** | 24.3 % | **26.9 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 790.90 € | **791.00 €** | 13.8 % | **13.8 %** | 790.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D skener Revopoint POP 4 Premium | 930.90 € | **931.00 €** | 14.9 % | **14.9 %** | 930.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čistiaci robot ULTENIC MX50 | 419.90 € | **420.00 €** | 8.3 % | **8.3 %** | 420.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjacia stanica FOSSIBOT F2400 2400 W (čierna) | 736.90 € | **737.00 €** | 8.7 % | **8.8 %** | 737.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blesk GODOX AD600BMII Wistro s uchytením Bowens | 538.90 € | **539.00 €** | 9.8 % | **9.9 %** | 539.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.90 € | **20.00 €** | 15.9 % | **16.5 %** | 19.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna laserová vodováha - zelený laser | 37.90 € | **38.00 €** | 31.7 % | **32.0 %** | 37.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.90 € | **22.00 €** | 24.8 % | **25.3 %** | 21.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus AS2 mini electric pump | 41.90 € | **42.00 €** | 7.0 % | **7.2 %** | 41.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sada 3 LED vianočných darčekov, 48x LED, IP44 | 33.90 € | **34.00 €** | 9.5 % | **9.9 %** | 34.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 21.90 € | **22.00 €** | 20.3 % | **20.9 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| FENDA F&D A180X | 42.90 € | **43.00 €** | 12.1 % | **12.4 %** | 42.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.90 € | **41.00 €** | 7.9 % | **8.2 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rapoo 9300M set klávesnice a myši černý | 31.90 € | **32.00 €** | 11.3 % | **11.6 %** | 31.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.60 € | **5.70 €** | 34.7 % | **37.1 %** | 5.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.60 € | **7.70 €** | 42.4 % | **44.2 %** | 7.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.60 € | **4.70 €** | 38.0 % | **41.0 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.20 € | **1.30 €** | 30.1 % | **40.9 %** | 1.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.80 € | **2.90 €** | 19.2 % | **23.4 %** | 2.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.40 € | **3.50 €** | 30.4 % | **34.2 %** | 3.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.60 € | **2.70 €** | 32.1 % | **37.2 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.10 € | **1.20 €** | 27.8 % | **39.4 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.90 € | **10.00 €** | 44.2 % | **45.7 %** | 9.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 11.90 € | **12.00 €** | 46.1 % | **47.4 %** | 11.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.00 € | **7.10 €** | 5.4 % | **6.9 %** | 7.06 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.20 € | **5.30 €** | 34.6 % | **37.2 %** | 5.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny merač spotreby el. energie, veľký ... | 9.90 € | **10.00 €** | 23.8 % | **25.1 %** | 9.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.50 €** | 26.3 % | **28.3 %** | 6.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blesk GODOX TT685II TTL pre Olympus | 124.90 € | **125.00 €** | 12.4 % | **12.5 %** | 125.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 0028 92020 | 67.90 € | **68.00 €** | 11.6 % | **11.8 %** | 67.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Magnetický veslařský trenažér HMS ZM1801 | 237.90 € | **238.00 €** | 42881.0 % | **42899.1 %** | 237.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 06A1 | 102.90 € | **103.00 €** | 5.2 % | **5.3 %** | 102.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D skener Creality Sermoon S1 | 2372.90 € | **2373.00 €** | 6.5 % | **6.5 %** | 2373.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| LaserPecker LX2 40W laserový gravír | 1834.90 € | **1835.00 €** | 12.3 % | **12.3 %** | 1835.00 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1609)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravírovací stroj xTool P3 80W | 7402.00 € | **6758.90 €** | 15.0 % | **5.0 %** | 6503.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool P2S (sivý) | 3641.00 € | **3348.90 €** | 15.0 % | **5.8 %** | 3349.00 € | stávame sa najlacnejší |
| Yamaha RX-A8A BLACK | 3849.00 € | **3570.50 €** | 17.8 % | **9.3 %** | 3570.51 € | stávame sa najlacnejší |
| Geneinno T1-Pro 200m 4K UHD podvodný dron | 2654.50 € | **2423.90 €** | 15.0 % | **5.0 %** | 2071.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Geneinno T1-Pro 150m 4K UHD podvodný dron | 2872.00 € | **2645.00 €** | 15.0 % | **5.9 %** | 2645.50 € | stávame sa najlacnejší |
| 3D skener Revopoint MetroY Ultra – edícia CCM | 2573.90 € | **2350.00 €** | 15.0 % | **5.0 %** | 1825.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EOC6H76X | 769.00 € | **546.90 €** | 47.7 % | **5.0 %** | 484.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK6192AXL4 | 559.00 € | **367.00 €** | 67.0 % | **9.6 %** | 367.11 € | stávame sa najlacnejší |
| Samsung OLED QE77S99H | 3613.00 € | **3448.90 €** | 10.0 % | **5.0 %** | 3379.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje FN619EEW5 | 639.00 € | **481.90 €** | 39.3 % | **5.1 %** | 414.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 519.00 € | **367.50 €** | 48.3 % | **5.0 %** | 363.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE65S99H | 2924.90 € | **2791.90 €** | 10.0 % | **5.0 %** | 2758.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EEG69405L | 769.00 € | **636.00 €** | 28.2 % | **6.0 %** | 636.20 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M1 Ultra 20 W 4 v 1 – súprava ... | 2326.50 € | **2198.90 €** | 15.0 % | **8.7 %** | 2199.00 € | stávame sa najlacnejší |
| Gorenje WDSI96A | 499.00 € | **373.50 €** | 40.3 % | **5.0 %** | 359.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Z Fold8 Ultra 5G 512GB Violet | 2649.90 € | **2529.50 €** | 10.0 % | **5.0 %** | 1726.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA SIS 512 TCX | 599.00 € | **484.50 €** | 32.2 % | **7.0 %** | 484.60 € | stávame sa najlacnejší |
| ELECTROLUX PerfectCare 700 EW7TN23372C | 639.00 € | **525.90 €** | 27.6 % | **5.0 %** | 494.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Lavender | 2425.00 € | **2314.90 €** | 10.0 % | **5.0 %** | 1500.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Cream | 2425.00 € | **2314.90 €** | 10.0 % | **5.0 %** | 1600.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 FLEX EES42210L | 529.00 € | **419.50 €** | 32.4 % | **5.0 %** | 369.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HILG64220SW | 269.00 € | **164.50 €** | 71.7 % | **5.0 %** | 152.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA RX-A4A BLACK | 1649.00 € | **1549.00 €** | 16.3 % | **9.3 %** | 1549.04 € | stávame sa najlacnejší |
| Samsung OLED QE77S85H | 2193.50 € | **2093.90 €** | 10.0 % | **5.0 %** | 1349.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Razr Fold 16+512GB Blue | 2190.50 € | **2090.90 €** | 10.0 % | **5.0 %** | 1449.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1545.50 € | **1454.00 €** | 15.0 % | **8.2 %** | 1454.50 € | stávame sa najlacnejší |
| BEKO BDIN38640D | 599.00 € | **508.50 €** | 23.8 % | **5.1 %** | 430.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica TFB 128 TX | 369.00 € | **279.50 €** | 38.7 % | **5.0 %** | 269.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung The Frame Pro QE65LS03HW | 1823.90 € | **1740.90 €** | 10.0 % | **5.0 %** | 1718.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GS520E15W | 339.00 € | **257.90 €** | 38.1 % | **5.1 %** | 257.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GECS5C70XPA | 559.00 € | **478.90 €** | 26.4 % | **8.3 %** | 479.00 € | stávame sa najlacnejší |
| Electrolux EOF3H40TH | 339.00 € | **259.90 €** | 37.0 % | **5.0 %** | 234.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux KGS64362XX | 269.00 € | **191.50 €** | 47.7 % | **5.1 %** | 188.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Creality CR-Scan Raptor 3D Scanner | 950.00 € | **876.90 €** | 15.0 % | **6.2 %** | 877.00 € | stávame sa najlacnejší |
| Xiaomi 17 Ultra 16/512GB Black | 1522.90 € | **1453.90 €** | 10.0 % | **5.0 %** | 1125.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompletný čistiaci robot MOVA Z70 Ultra Roller - sto... | 1616.00 € | **1549.50 €** | 15.0 % | **10.3 %** | 1549.89 € | stávame sa najlacnejší |
| Beko BM3WFU3941WBW | 439.00 € | **373.50 €** | 23.4 % | **5.0 %** | 358.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baza na joystick Moza Racing AY210 (PC) | 746.50 € | **681.50 €** | 15.0 % | **5.0 %** | 681.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE65S85H | 1370.90 € | **1308.50 €** | 10.0 % | **5.0 %** | 880.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Razr 70 Ultra 16+512GB Blue | 1358.00 € | **1296.50 €** | 10.0 % | **5.0 %** | 1188.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Qrevo Edge 2 Pro White | 1275.90 € | **1217.90 €** | 10.0 % | **5.0 %** | 755.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIR17300BCS | 399.00 € | **342.00 €** | 22.5 % | **5.0 %** | 299.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GECS5B70CLI | 599.00 € | **543.50 €** | 15.7 % | **5.0 %** | 470.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MBNA910X | 289.00 € | **236.90 €** | 28.2 % | **5.1 %** | 233.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool OMK38HU0B | 299.00 € | **248.00 €** | 26.6 % | **5.0 %** | 228.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot na čistenie bazénov Wybot L1 | 649.90 € | **598.90 €** | 15.0 % | **6.0 %** | 598.95 € | stávame sa najlacnejší |
| MOTOROLA Signature 16+512GB Carbon | 1095.50 € | **1045.50 €** | 10.0 % | **5.0 %** | 778.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Signature 16+512GB Olive | 1095.50 € | **1045.50 €** | 10.0 % | **5.0 %** | 799.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CTB 6250 W | 159.00 € | **110.50 €** | 51.4 % | **5.2 %** | 92.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CTB 6250 B | 159.00 € | **110.50 €** | 51.4 % | **5.2 %** | 95.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje R619EES5 | 519.00 € | **471.00 €** | 15.7 % | **5.0 %** | 407.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EIS8959 | 1062.50 € | **1014.50 €** | 10.0 % | **5.0 %** | 967.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Micro RGB MRE55R85H | 1049.50 € | **1001.90 €** | 10.0 % | **5.0 %** | 895.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 256GB Black | 1039.50 € | **992.00 €** | 10.0 % | **5.0 %** | 825.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 256GB White | 1039.50 € | **992.00 €** | 10.0 % | **5.0 %** | 825.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 882.90 € | **835.50 €** | 15.0 % | **8.8 %** | 835.64 € | stávame sa najlacnejší |
| GORENJE NRS8182KX | 549.00 € | **501.90 €** | 14.9 % | **5.0 %** | 494.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 Ultra 16/512GB Black | 1035.50 € | **988.50 €** | 10.0 % | **5.0 %** | 899.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHFF 6404 X6E | 1023.50 € | **976.90 €** | 10.0 % | **5.0 %** | 899.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 525.50 € | **479.90 €** | 15.0 % | **5.1 %** | 426.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LHR3233CK | 199.00 € | **153.50 €** | 36.1 % | **5.0 %** | 128.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 17 12/256GB Venture Green | 972.90 € | **928.90 €** | 10.0 % | **5.0 %** | 865.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nano projektor JMGO N1S | 496.50 € | **453.50 €** | 15.0 % | **5.0 %** | 384.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 Ultra 12/256GB Black | 927.90 € | **885.50 €** | 10.0 % | **5.0 %** | 771.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TT-S303 BLACK | 529.00 € | **488.50 €** | 13.8 % | **5.1 %** | 466.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 12+512GB Blue | 876.50 € | **836.50 €** | 10.1 % | **5.0 %** | 613.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 12+512GB Red | 876.50 € | **836.50 €** | 10.1 % | **5.0 %** | 631.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 279.00 € | **239.50 €** | 22.3 % | **5.0 %** | 228.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GV520E10 | 339.00 € | **299.90 €** | 18.8 % | **5.1 %** | 269.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 767.50 € | **728.90 €** | 15.0 % | **9.2 %** | 729.00 € | stávame sa najlacnejší |
| Electrolux ENA7CE19S | 820.50 € | **783.50 €** | 10.0 % | **5.1 %** | 748.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Skywave X70 Soundbar | 612.90 € | **576.00 €** | 15.0 % | **8.1 %** | 576.02 € | stávame sa najlacnejší |
| Herný volant Moza Racing RS V2 RS25 | 426.00 € | **389.50 €** | 15.0 % | **5.1 %** | 329.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB Black | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 692.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB Green | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 692.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB White | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 692.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus T2 smart bike trainer | 625.90 € | **589.90 €** | 15.0 % | **8.4 %** | 590.00 € | stávame sa najlacnejší |
| YAMAHA A-S301 BLACK | 439.00 € | **403.90 €** | 14.1 % | **5.0 %** | 389.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality K1C 2025 | 401.90 € | **366.90 €** | 15.0 % | **5.0 %** | 348.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENA7CE18S1 | 752.50 € | **718.00 €** | 10.1 % | **5.0 %** | 652.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 782.50 € | **748.00 €** | 15.0 % | **10.0 %** | 748.21 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (červený) | 394.00 € | **359.90 €** | 15.0 % | **5.0 %** | 322.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 430.90 € | **396.90 €** | 15.0 % | **5.9 %** | 397.00 € | stávame sa najlacnejší |
| Xiaomi Pad 8 Pro 12/512GB Green (72207) | 742.50 € | **708.90 €** | 10.0 % | **5.0 %** | 607.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň CREALITY SparkX i7 Combo | 391.50 € | **357.90 €** | 15.0 % | **5.1 %** | 318.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 176.50 € | **142.90 €** | 32.0 % | **6.9 %** | 143.00 € | stávame sa najlacnejší |
| Ultimea Skywave X50 Soundbar | 422.90 € | **389.50 €** | 15.1 % | **6.0 %** | 389.72 € | stávame sa najlacnejší |
| GORENJE R4142PW | 319.00 € | **285.90 €** | 17.3 % | **5.1 %** | 241.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 PlayStation 5 Digital + 2x DS5 | 727.50 € | **694.50 €** | 10.0 % | **5.0 %** | 579.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 PlayStation®5 Console–1TB | 727.50 € | **694.50 €** | 10.0 % | **5.0 %** | 599.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW8F5412SAC | 709.90 € | **677.90 €** | 10.0 % | **5.1 %** | 674.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 PlayStation®5 Digital Edition–825GB | 671.50 € | **641.00 €** | 10.0 % | **5.0 %** | 563.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EOF3H50BK | 299.00 € | **268.90 €** | 16.9 % | **5.1 %** | 175.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 8+256GB Blue | 657.50 € | **627.50 €** | 10.1 % | **5.1 %** | 477.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 8+256GB Wood | 657.50 € | **627.50 €** | 10.1 % | **5.1 %** | 495.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač MOVA Z200 Stick | 345.50 € | **315.50 €** | 15.0 % | **5.0 %** | 201.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 919.90 € | **889.90 €** | 15.0 % | **11.3 %** | 890.00 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Pro | 506.00 € | **476.00 €** | 15.0 % | **8.1 %** | 476.18 € | stávame sa najlacnejší |
| Projektor Aurzen Eazze D1 Max | 346.00 € | **316.50 €** | 15.0 % | **5.2 %** | 166.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 433.90 € | **404.90 €** | 15.0 % | **7.3 %** | 404.93 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 424.50 € | **396.00 €** | 15.0 % | **7.3 %** | 396.34 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 | 387.00 € | **358.90 €** | 15.0 % | **6.6 %** | 359.00 € | stávame sa najlacnejší |
| LG FCR5A95WW | 610.50 € | **582.50 €** | 10.1 % | **5.0 %** | 500.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WP E12X WBS EE | 618.50 € | **590.50 €** | 10.0 % | **5.1 %** | 569.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE MO 4250 CLI | 159.00 € | **131.50 €** | 27.4 % | **5.4 %** | 102.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor JMGO PicoPlay+ | 413.00 € | **387.00 €** | 14.9 % | **7.7 %** | 387.20 € | stávame sa najlacnejší |
| Projektor Ultima Poseidon E40 | 402.90 € | **377.00 €** | 15.0 % | **7.7 %** | 377.18 € | stávame sa najlacnejší |
| Whirlpool WHK 26373 XBR6EA AI AdaptiveCo | 556.90 € | **531.90 €** | 10.0 % | **5.1 %** | 499.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENA6LE18S | 549.00 € | **524.00 €** | 10.0 % | **5.0 %** | 505.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Skywave X40 Soundbar | 354.50 € | **329.50 €** | 15.1 % | **6.9 %** | 329.74 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1330.00 € | **1305.00 €** | 13.3 % | **11.2 %** | 1305.29 € | stávame sa najlacnejší |
| Baza na joystick Moza Racing AB9 Force Feedback | 532.90 € | **508.00 €** | 15.0 % | **9.6 %** | 508.42 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M1 | 544.50 € | **519.90 €** | 15.0 % | **9.8 %** | 520.00 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 Max | 428.00 € | **403.50 €** | 14.9 % | **8.4 %** | 403.90 € | stávame sa najlacnejší |
| LENOVO LEGION TAB (ZAEF0021CZ) | 530.90 € | **506.50 €** | 10.1 % | **5.0 %** | 448.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Letové pedále MOZA Racing AS019 | 371.90 € | **347.90 €** | 15.1 % | **7.6 %** | 348.00 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 334.00 € | **310.00 €** | 15.0 % | **6.7 %** | 310.34 € | stávame sa najlacnejší |
| Electrolux LKR64022AX | 515.50 € | **491.90 €** | 10.1 % | **5.0 %** | 453.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor kovov GARRETT Ace Apex 8,5x11+MS-3 | 503.50 € | **479.90 €** | 15.0 % | **9.6 %** | 480.00 € | stávame sa najlacnejší |
| UMAX Webcam W5 | 39.90 € | **16.50 €** | 161.4 % | **8.1 %** | 14.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Neo QLED QE43QN70H | 506.50 € | **483.50 €** | 10.1 % | **5.1 %** | 477.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 69.00 € | **46.00 €** | 58.9 % | **5.9 %** | 46.50 € | stávame sa najlacnejší |
| LG GBBSJ21DPY | 497.50 € | **474.90 €** | 10.1 % | **5.1 %** | 396.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Pro | 264.50 € | **241.90 €** | 15.0 % | **5.2 %** | 200.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 261.00 € | **238.50 €** | 15.0 % | **5.1 %** | 229.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GECS6C70WPA | 499.90 € | **477.50 €** | 10.0 % | **5.1 %** | 415.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Okuliare VITURE XR Luma Pro (veľkosť L) | 394.90 € | **372.50 €** | 11.4 % | **5.1 %** | 355.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 403.00 € | **380.90 €** | 11.1 % | **5.0 %** | 372.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 486.90 € | **464.90 €** | 10.0 % | **5.1 %** | 442.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDIN38441P | 484.50 € | **462.50 €** | 10.1 % | **5.1 %** | 449.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RP619EEW5 | 482.50 € | **460.50 €** | 10.1 % | **5.0 %** | 449.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy BRS 7N3BX-S | 482.90 € | **460.90 €** | 10.1 % | **5.1 %** | 460.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 494.50 € | **473.00 €** | 15.0 % | **10.0 %** | 473.14 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 288.90 € | **267.50 €** | 15.0 % | **6.5 %** | 267.52 € | stávame sa najlacnejší |
| Redmi Note 15 Pro+ 5G 8/256GB Brown | 465.50 € | **444.50 €** | 10.1 % | **5.1 %** | 327.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 8/128GB Green (71768) | 458.90 € | **437.90 €** | 10.1 % | **5.0 %** | 333.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Priemyselná infračervená termokamera Habotest HT820 | 271.50 € | **250.50 €** | 14.0 % | **5.2 %** | 211.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZTE Nubia Air Pro 5G bílý | 459.50 € | **438.50 €** | 10.1 % | **5.1 %** | 429.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B3WFU4841MCC | 461.50 € | **440.50 €** | 10.0 % | **5.0 %** | 432.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rooma Espresso A7 bílá | 560.50 € | **539.50 €** | 10.0 % | **5.9 %** | 539.60 € | stávame sa najlacnejší |
| Electrolux 600 E62LD200S | 444.50 € | **424.00 €** | 10.1 % | **5.0 %** | 380.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW7TN3372C | 557.50 € | **537.00 €** | 10.0 % | **6.0 %** | 537.20 € | stávame sa najlacnejší |
| LG FA2S8V3GN3W | 444.90 € | **424.50 €** | 10.1 % | **5.0 %** | 358.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK620EABK4 | 445.50 € | **425.50 €** | 10.1 % | **5.1 %** | 330.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 305.00 € | **285.00 €** | 14.9 % | **7.4 %** | 285.32 € | stávame sa najlacnejší |
| Guzzanti GZ 340A | 431.90 € | **412.00 €** | 10.1 % | **5.0 %** | 383.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO M8 PRO 5G 12/512GB Silver | 431.50 € | **411.90 €** | 10.0 % | **5.0 %** | 299.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BU1154HCN | 289.00 € | **269.50 €** | 12.8 % | **5.2 %** | 265.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor BlitzWolf BW-V11 | 352.50 € | **333.00 €** | 15.0 % | **8.6 %** | 333.18 € | stávame sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 468.50 € | **449.00 €** | 12.7 % | **8.0 %** | 449.20 € | stávame sa najlacnejší |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 348.90 € | **329.50 €** | 15.0 % | **8.6 %** | 329.71 € | stávame sa najlacnejší |
| Projektor JMGO O2S Ultra | 2398.00 € | **2378.90 €** | 15.0 % | **14.1 %** | 2379.00 € | stávame sa najlacnejší |
| Gorenje NRK620EAW4 | 414.90 € | **395.90 €** | 10.1 % | **5.0 %** | 360.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIM12300X | 229.00 € | **210.00 €** | 14.5 % | **5.0 %** | 175.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tlakový stroj HiBREW H7B Cob | 572.50 € | **553.50 €** | 15.0 % | **11.2 %** | 553.90 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 216.00 € | **197.50 €** | 15.0 % | **5.2 %** | 151.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 210.50 € | **192.00 €** | 15.1 % | **5.0 %** | 173.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 429.50 € | **411.00 €** | 14.9 % | **10.0 %** | 411.04 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE V45i | 330.50 € | **312.00 €** | 15.0 % | **8.6 %** | 312.18 € | stávame sa najlacnejší |
| Beko HII64600AFT | 390.50 € | **372.50 €** | 10.1 % | **5.0 %** | 301.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GS642D90X | 394.90 € | **376.90 €** | 10.1 % | **5.1 %** | 323.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fén MOVA Aero C v ružovej farbe | 206.90 € | **188.90 €** | 15.1 % | **5.1 %** | 138.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB PRO (ZAE40120CZ) | 396.90 € | **378.90 €** | 10.1 % | **5.1 %** | 355.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L3560CDW | 394.50 € | **376.50 €** | 10.1 % | **5.0 %** | 354.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-S303 BLACK | 396.90 € | **378.90 €** | 10.0 % | **5.1 %** | 377.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Okuliare RayNeo X3 Pro AR | 1549.90 € | **1531.90 €** | 15.0 % | **13.7 %** | 1532.00 € | stávame sa najlacnejší |
| Ultima Apollo S90 Soundbar | 326.50 € | **308.90 €** | 14.9 % | **8.7 %** | 309.00 € | stávame sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 255.00 € | **237.50 €** | 14.0 % | **6.2 %** | 237.63 € | stávame sa najlacnejší |
| Samsung Mini LED UE43M70H | 380.90 € | **363.50 €** | 10.0 % | **5.0 %** | 330.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 366.50 € | **349.50 €** | 10.1 % | **5.0 %** | 324.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje DE69CS | 516.50 € | **499.50 €** | 10.1 % | **6.5 %** | 499.55 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (červený) | 292.50 € | **275.50 €** | 15.0 % | **8.3 %** | 275.70 € | stávame sa najlacnejší |
| Odšťavovač G21 Chamberi horizontal | 169.50 € | **152.50 €** | 18.5 % | **6.6 %** | 152.89 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 244.50 € | **227.50 €** | 15.1 % | **7.1 %** | 227.90 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT705 | 289.00 € | **272.00 €** | 15.0 % | **8.2 %** | 272.50 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 | 298.50 € | **281.90 €** | 15.0 % | **8.6 %** | 282.00 € | stávame sa najlacnejší |
| Flytec V020 12000mah návnada loď | 192.00 € | **175.50 €** | 14.9 % | **5.0 %** | 132.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Aurzen Eazze D1G | 196.00 € | **179.50 €** | 14.9 % | **5.2 %** | 166.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 433.00 € | **416.50 €** | 15.0 % | **10.6 %** | 416.68 € | stávame sa najlacnejší |
| Herný volant MOZA RACING CS Pro RS093 | 363.00 € | **346.50 €** | 14.9 % | **9.7 %** | 346.90 € | stávame sa najlacnejší |
| Elektrický bežecký pás MERACH MR-T25B2 | 372.90 € | **356.50 €** | 15.1 % | **10.0 %** | 356.52 € | stávame sa najlacnejší |
| ETA Storio II 2043 90030 černá | 347.90 € | **331.90 €** | 10.1 % | **5.0 %** | 268.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB 11 5G 8/256GB ZAFM0293CZ | 354.90 € | **338.90 €** | 10.1 % | **5.1 %** | 313.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier Airpulse A80 2.0 (hnedé) | 451.90 € | **436.00 €** | 15.0 % | **11.0 %** | 436.50 € | stávame sa najlacnejší |
| Whirlpool TDLR 6240S EU/N | 340.50 € | **324.90 €** | 10.1 % | **5.0 %** | 322.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 335.50 € | **320.00 €** | 13.8 % | **8.5 %** | 320.19 € | stávame sa najlacnejší |
| Okuliare RayNeo Air 4 Pro AR | 315.50 € | **300.00 €** | 11.3 % | **5.9 %** | 300.42 € | stávame sa najlacnejší |
| Guzzanti GZ 235 | 459.90 € | **444.50 €** | 10.0 % | **6.4 %** | 444.54 € | stávame sa najlacnejší |
| ETA 0028 98050 | 79.99 € | **64.90 €** | 30.1 % | **5.6 %** | 64.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MWSC 833 SB | 331.50 € | **316.50 €** | 10.1 % | **5.2 %** | 249.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R9 Pro (červený) | 245.50 € | **230.50 €** | 15.1 % | **8.0 %** | 230.69 € | stávame sa najlacnejší |
| LENOVO IDEA TAB 11 8/256GB (ZAFR0272CZ) | 314.50 € | **299.90 €** | 10.2 % | **5.0 %** | 275.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GI6432BSCWF | 333.50 € | **318.90 €** | 10.0 % | **5.2 %** | 319.00 € | stávame sa najlacnejší |
| BEKO RFSA240M43WN | 399.00 € | **384.50 €** | 13.7 % | **9.6 %** | 384.54 € | stávame sa najlacnejší |
| Beko B5XRCNA366HXB | 524.50 € | **510.00 €** | 10.1 % | **7.0 %** | 510.10 € | stávame sa najlacnejší |
| Candy GD 410B8-S | 316.00 € | **301.90 €** | 10.0 % | **5.1 %** | 294.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Ambito 0516 90000 bílý/tyrkysový | 75.99 € | **61.90 €** | 29.5 % | **5.5 %** | 59.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G57 Power 12+256GB Green | 305.50 € | **291.50 €** | 10.2 % | **5.1 %** | 228.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Stolní mixér, G2013700, 10 ryc | 303.90 € | **289.90 €** | 10.1 % | **5.1 %** | 283.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta GZ5436E0 | 299.90 € | **285.90 €** | 10.1 % | **5.0 %** | 285.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (strieborné) | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 150.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 557.90 € | **543.90 €** | 10.1 % | **7.3 %** | 544.00 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE V25i Pro II | 317.90 € | **304.00 €** | 15.0 % | **10.0 %** | 304.02 € | stávame sa najlacnejší |
| Redmi Note 15 Pro 8/256GB Black | 296.50 € | **282.90 €** | 10.2 % | **5.1 %** | 244.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-L7 | 301.50 € | **287.90 €** | 10.0 % | **5.1 %** | 255.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Základňa volantu MOZA RACING R25 RS091 | 1008.50 € | **994.90 €** | 15.0 % | **13.5 %** | 995.00 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 42.99 € | **29.50 €** | 57.3 % | **7.9 %** | 29.85 € | stávame sa najlacnejší |
| SONY STRDH190 | 297.90 € | **284.50 €** | 10.1 % | **5.1 %** | 274.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-S202D SILVER | 284.50 € | **271.50 €** | 10.1 % | **5.1 %** | 225.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT385 Meracie zariadenie výkonu lasera | 156.50 € | **143.50 €** | 14.9 % | **5.3 %** | 141.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CIO 225 EE/N | 286.50 € | **273.50 €** | 10.1 % | **5.1 %** | 271.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor ZEUSLAP OL133ED s 13,3-palcovým dot... | 221.90 € | **208.90 €** | 15.1 % | **8.3 %** | 209.00 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (čierny) | 335.00 € | **322.00 €** | 14.9 % | **10.5 %** | 322.36 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 172.00 € | **159.00 €** | 14.8 % | **6.2 %** | 159.50 € | stávame sa najlacnejší |
| Electrolux CFG526R | 280.50 € | **267.90 €** | 10.0 % | **5.1 %** | 263.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koleso MOZA RS068 FSR V2 (PC) | 678.50 € | **665.90 €** | 15.0 % | **12.9 %** | 666.00 € | stávame sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (zelené) | 164.50 € | **152.00 €** | 15.0 % | **6.2 %** | 152.13 € | stávame sa najlacnejší |
| Grafický tablet Huion Slate 11 | 274.50 € | **262.00 €** | 15.1 % | **9.8 %** | 262.20 € | stávame sa najlacnejší |
| Diagnostický skener pre motocykle ANCEL MT100 PRO | 145.00 € | **132.90 €** | 14.8 % | **5.2 %** | 99.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HIC 64401 | 159.00 € | **147.00 €** | 13.6 % | **5.0 %** | 142.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Concept LA8383DS | 760.50 € | **748.50 €** | 10.0 % | **8.3 %** | 748.56 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 426.00 € | **414.00 €** | 15.0 % | **11.7 %** | 414.19 € | stávame sa najlacnejší |
| Beko CF200EWN | 259.90 € | **248.00 €** | 10.1 % | **5.0 %** | 214.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas 24 GS2401 | 564.90 € | **553.00 €** | 15.0 % | **12.6 %** | 553.18 € | stávame sa najlacnejší |
| Gorenje RK14CPS4 | 310.50 € | **298.90 €** | 10.1 % | **6.0 %** | 299.00 € | stávame sa najlacnejší |
| TP-Link Tapo RV20 Max Plus | 256.50 € | **244.90 €** | 10.0 % | **5.1 %** | 216.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RV20 Max Plus | 256.50 € | **244.90 €** | 10.0 % | **5.1 %** | 216.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 79.50 € | **67.90 €** | 59.1 % | **35.9 %** | 68.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 228.00 € | **216.50 €** | 13.7 % | **8.0 %** | 216.63 € | stávame sa najlacnejší |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 380.50 € | **369.00 €** | 10.1 % | **6.8 %** | 369.20 € | stávame sa najlacnejší |
| Blesk GODOX V1Pro TTL pre Nikon | 277.00 € | **265.50 €** | 14.9 % | **10.1 %** | 265.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 69.50 € | **58.00 €** | 43.9 % | **20.1 %** | 58.50 € | stávame sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 131.00 € | **119.90 €** | 14.9 % | **5.2 %** | 111.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 3-pack) | 233.50 € | **222.50 €** | 10.2 % | **5.0 %** | 98.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta Extreme Dry Compact DH5250F0 | 243.90 € | **232.90 €** | 10.1 % | **5.1 %** | 190.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 8/256GB Black | 241.50 € | **230.50 €** | 10.2 % | **5.2 %** | 196.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E3T1-3ST | 42.00 € | **31.00 €** | 47.6 % | **9.0 %** | 31.21 € | stávame sa najlacnejší |
| LENOVO IDEA TAB 11 4/128GB (ZAFR0018CZ) | 228.50 € | **217.90 €** | 10.2 % | **5.1 %** | 188.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC772830 | 226.50 € | **215.90 €** | 10.2 % | **5.0 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R2750DB 2.0 (čierne) | 200.50 € | **189.90 €** | 14.9 % | **8.9 %** | 190.00 € | stávame sa najlacnejší |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 699.00 € | **688.50 €** | 7.7 % | **6.1 %** | 688.90 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R10 Pro (čierny) | 227.50 € | **217.00 €** | 15.1 % | **9.8 %** | 217.43 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 227.50 € | **217.00 €** | 15.1 % | **9.8 %** | 217.43 € | stávame sa najlacnejší |
| G3Ferrari G2017500 | 229.90 € | **219.50 €** | 10.0 % | **5.1 %** | 209.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120 | 182.90 € | **172.50 €** | 15.1 % | **8.5 %** | 172.90 € | stávame sa najlacnejší |
| Guzzanti GZ 161 | 247.00 € | **236.90 €** | 9.5 % | **5.0 %** | 235.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 120.50 € | **110.50 €** | 14.8 % | **5.3 %** | 83.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo C420S2 | 212.90 € | **202.90 €** | 10.2 % | **5.0 %** | 188.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 220A | 225.50 € | **215.50 €** | 10.1 % | **5.2 %** | 205.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 338 | 582.50 € | **572.50 €** | 9.9 % | **8.0 %** | 572.54 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 217.50 € | **207.50 €** | 15.1 % | **9.8 %** | 207.82 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 217.50 € | **207.50 €** | 15.1 % | **9.8 %** | 207.82 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120P | 191.00 € | **181.00 €** | 15.0 % | **9.0 %** | 181.38 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 13 GT133 | 220.00 € | **210.00 €** | 15.0 % | **9.8 %** | 210.39 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-Plus 4+64 GB | 129.00 € | **119.00 €** | 14.9 % | **6.0 %** | 119.50 € | stávame sa najlacnejší |
| Braun SI1040GR | 35.90 € | **26.00 €** | 50.6 % | **9.1 %** | 26.17 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 374.50 € | **364.90 €** | 7.9 % | **5.1 %** | 317.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Habotest HT2302 Digitálny tester zemného odporu | 116.00 € | **106.50 €** | 14.9 % | **5.5 %** | 88.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 299.50 € | **290.00 €** | 12.0 % | **8.5 %** | 290.18 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 299.50 € | **290.00 €** | 12.0 % | **8.5 %** | 290.18 € | stávame sa najlacnejší |
| YAMAHA A-S201 BLACK | 245.00 € | **235.50 €** | 9.3 % | **5.0 %** | 235.70 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 214.50 € | **205.00 €** | 15.0 % | **9.9 %** | 205.25 € | stávame sa najlacnejší |
| Inteligentný fotorámik Lexar PX-110BLKGLR (čierny) 11" | 169.00 € | **159.50 €** | 14.9 % | **8.5 %** | 159.90 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 STD | 109.90 € | **100.50 €** | 15.0 % | **5.2 %** | 95.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX TT685II TTL pre Nikon | 127.90 € | **118.50 €** | 15.1 % | **6.6 %** | 118.81 € | stávame sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 59.90 € | **50.50 €** | 24.8 % | **5.2 %** | 46.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun SI1009OR | 32.90 € | **23.50 €** | 54.3 % | **10.2 %** | 23.79 € | stávame sa najlacnejší |
| YAMAHA A-S201 SILVER | 245.00 € | **235.90 €** | 9.1 % | **5.1 %** | 235.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON i-SENSYS MF3010 | 202.90 € | **193.90 €** | 10.0 % | **5.1 %** | 153.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2011300 | 205.50 € | **196.50 €** | 10.1 % | **5.2 %** | 191.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LONGER RAY5 mini 3,5 W laserový gravír | 104.50 € | **95.50 €** | 14.9 % | **5.0 %** | 92.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 23310-56/RH | 54.90 € | **45.90 €** | 36.8 % | **14.4 %** | 46.00 € | stávame sa najlacnejší |
| Redmi Pad 2 4/128GB šedá (65579) | 196.50 € | **187.90 €** | 10.0 % | **5.2 %** | 135.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L2622DW | 184.50 € | **175.90 €** | 10.3 % | **5.1 %** | 164.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC728D10 | 182.50 € | **174.00 €** | 10.2 % | **5.0 %** | 163.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria Jupio Alkaline AA balenie 100ks | 44.00 € | **35.50 €** | 34.5 % | **8.5 %** | 35.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 104.50 € | **96.00 €** | 43.9 % | **32.2 %** | 96.50 € | stávame sa najlacnejší |
| Solight LED vianočná girlanda s ihličím, 7m, 112x LE... | 30.90 € | **22.50 €** | 54.5 % | **12.5 %** | 22.90 € | stávame sa najlacnejší |
| Niceboy Charles i4 Plus Black | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 112.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus White | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 112.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus Black | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 112.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus White | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 112.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP LaserJet Pro MFP M234dw (6GW99F) | 176.90 € | **168.90 €** | 10.1 % | **5.1 %** | 130.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G1018100 Horkovzdušná fritéza | 177.50 € | **169.50 €** | 10.1 % | **5.1 %** | 148.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX U-Box J42 Nano/bez OS | 176.90 € | **168.90 €** | 10.1 % | **5.1 %** | 155.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dozownik karmy PETKIT Fresh Element SOLO 3L | 94.90 € | **86.90 €** | 15.0 % | **5.3 %** | 73.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 48S | 166.50 € | **158.50 €** | 10.3 % | **5.0 %** | 149.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TV držák Kruger&Matz KM1310  (43-100'' 80kg) univerz... | 60.90 € | **52.90 €** | 21.0 % | **5.1 %** | 51.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 58.90 € | **50.90 €** | 21.9 % | **5.4 %** | 50.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 49.90 € | **41.90 €** | 64.6 % | **38.2 %** | 42.00 € | stávame sa najlacnejší |
| Průmyslový endoskop Ermenrich Seek VE50 Fialový | 155.00 € | **147.00 €** | 11.1 % | **5.3 %** | 147.19 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 21.99 € | **14.00 €** | 70.3 % | **8.4 %** | 14.42 € | stávame sa najlacnejší |
| SAMSUNG Odyssey G40B (LS25BG400EUXEN) | 167.90 € | **160.00 €** | 10.2 % | **5.0 %** | 136.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Naparovač odevov Neakasa Magic 1 | 88.00 € | **80.50 €** | 14.8 % | **5.0 %** | 70.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 35.00 € | **27.50 €** | 43.9 % | **13.0 %** | 27.83 € | stávame sa najlacnejší |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 189.50 € | **182.00 €** | 15.1 % | **10.5 %** | 182.50 € | stávame sa najlacnejší |
| XIAOMI Mesh System AX3000 NE (3-pack) | 165.90 € | **158.50 €** | 10.0 % | **5.1 %** | 128.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi N300 Extender (DAP-1325) | 26.90 € | **19.50 €** | 45.6 % | **5.6 %** | 17.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-L6 | 158.00 € | **150.90 €** | 10.0 % | **5.1 %** | 138.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 8x42 | 150.00 € | **142.90 €** | 10.5 % | **5.2 %** | 141.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal HT461138 | 49.90 € | **42.90 €** | 22.2 % | **5.1 %** | 36.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 8501A | 157.50 € | **150.50 €** | 10.0 % | **5.1 %** | 144.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EB61C4DB | 150.50 € | **143.50 €** | 10.1 % | **5.0 %** | 139.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 47.50 € | **40.50 €** | 38.3 % | **17.9 %** | 40.70 € | stávame sa najlacnejší |
| Ultimea Poseidon R3T Soundbar | 90.00 € | **83.00 €** | 14.9 % | **6.0 %** | 83.22 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **41.00 €** | 54.5 % | **32.0 %** | 41.50 € | stávame sa najlacnejší |
| DOMO DO244SV | 147.90 € | **141.00 €** | 10.2 % | **5.0 %** | 132.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.50 € | **21.90 €** | 37.2 % | **5.4 %** | 19.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OfficeJet Pro 8132e AiO HP+ (40Q45B) | 149.50 € | **142.90 €** | 10.1 % | **5.2 %** | 97.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G06 Power 4+256GB Blue | 152.50 € | **145.90 €** | 10.0 % | **5.2 %** | 114.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO4931EA | 135.50 € | **128.90 €** | 10.4 % | **5.0 %** | 106.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dynamický mikrofon Maono PD200x (bílý) | 75.50 € | **68.90 €** | 15.3 % | **5.2 %** | 49.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA G3430 Pink | 147.50 € | **140.90 €** | 10.2 % | **5.2 %** | 132.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX TT600S | 78.50 € | **71.90 €** | 15.0 % | **5.3 %** | 69.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FW5558E0 | 180.50 € | **173.90 €** | 10.1 % | **6.1 %** | 173.96 € | stávame sa najlacnejší |
| Herný volant PXN-V900 Gen2 | 99.50 € | **92.90 €** | 14.8 % | **7.2 %** | 93.00 € | stávame sa najlacnejší |
| Guzzanti GZ 35B1 | 143.00 € | **136.50 €** | 10.0 % | **5.0 %** | 126.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA420 Deodorizačný modul... | 42.00 € | **35.50 €** | 33.9 % | **13.1 %** | 35.75 € | stávame sa najlacnejší |
| IPL epilátor ANLAN 02-ATMY52-0RE | 110.50 € | **104.00 €** | 15.0 % | **8.2 %** | 104.31 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 40.50 € | **34.00 €** | 59.2 % | **33.7 %** | 34.50 € | stávame sa najlacnejší |
| Xiaomi Watch S4 Silver | 144.90 € | **138.50 €** | 10.0 % | **5.1 %** | 119.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON SELPHY CP-1500 Pink | 147.90 € | **141.50 €** | 10.0 % | **5.2 %** | 139.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 115.90 € | **109.50 €** | 15.1 % | **8.7 %** | 109.90 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect Z14-3S M140G12 14'' 2240x1... | 345.00 € | **338.90 €** | 14.9 % | **12.9 %** | 339.00 € | stávame sa najlacnejší |
| G3Ferrari Dvouplotýnkový vařič, G1013800 | 142.00 € | **135.90 €** | 10.0 % | **5.3 %** | 130.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 88.00 € | **81.90 €** | 14.7 % | **6.7 %** | 82.00 € | stávame sa najlacnejší |
| Inteligentná batéria pre DJI Mini 5 Pro | 87.00 € | **80.90 €** | 14.8 % | **6.7 %** | 81.00 € | stávame sa najlacnejší |
| Electrolux EFS 1 W | 21.99 € | **15.90 €** | 48.6 % | **7.5 %** | 9.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Low Sugar Rice Cooker 3000WT | 128.90 € | **122.90 €** | 10.2 % | **5.1 %** | 84.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kodak Friendly Zoom FZ45 Black | 136.90 € | **130.90 €** | 10.0 % | **5.2 %** | 108.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla TE-300 | 27.90 € | **21.90 €** | 35.7 % | **6.6 %** | 9.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rojeco PD5291000m Výcvikový obojok pre psov s 2 oboj... | 71.90 € | **65.90 €** | 15.0 % | **5.4 %** | 54.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-4In1-Ss | 131.00 € | **125.00 €** | 10.0 % | **5.0 %** | 113.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FW501815 | 136.90 € | **130.90 €** | 10.1 % | **5.2 %** | 121.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal EY8328E0 | 124.50 € | **118.50 €** | 10.4 % | **5.1 %** | 114.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálne nočné videnie FNIRSI NVS-40 so záznamom v ... | 69.50 € | **63.50 €** | 15.3 % | **5.4 %** | 60.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Bellagio červený multikapslový | 119.90 € | **113.90 €** | 10.9 % | **5.3 %** | 112.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 72.90 € | **66.90 €** | 15.0 % | **5.6 %** | 66.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tlmič nárazov pre pedále MRP MOZA RACING AS020 | 70.00 € | **64.00 €** | 15.0 % | **5.1 %** | 64.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla 32E325BH 32" HD LED TV | 134.50 € | **128.50 €** | 10.0 % | **5.1 %** | 128.70 € | stávame sa najlacnejší |
| Odšťavovač G21 Gracioso horizontal | 200.00 € | **194.00 €** | 11.8 % | **8.4 %** | 194.22 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 130.50 € | **124.50 €** | 15.2 % | **9.9 %** | 124.83 € | stávame sa najlacnejší |
| Herný volant MOZA RACING KS Pro RS095 | 352.50 € | **346.50 €** | 15.1 % | **13.1 %** | 346.90 € | stávame sa najlacnejší |
| Tefal OptiGrill 2v1 GC773D30 | 167.00 € | **161.00 €** | 10.1 % | **6.1 %** | 161.47 € | stávame sa najlacnejší |
| G3Ferrari G2013900 Artiko Výrobník ledu | 127.90 € | **122.00 €** | 10.1 % | **5.0 %** | 111.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE200 AC750 WiFi Range Extender | 29.90 € | **24.00 €** | 30.8 % | **5.0 %** | 20.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 804.50 € | **798.90 €** | 15.0 % | **14.2 %** | 799.00 € | stávame sa najlacnejší |
| Evolveo StrongVision Solar 4G | 129.50 € | **123.90 €** | 10.0 % | **5.3 %** | 103.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Soundbar JBL Bar 2.0 All-In-One (MK2) | 198.50 € | **192.90 €** | 8.2 % | **5.1 %** | 189.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 119.50 € | **113.90 €** | 10.5 % | **5.3 %** | 113.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sous vide G21 Maestro, WiFi, 1200 W | 114.50 € | **108.90 €** | 18.8 % | **13.0 %** | 108.91 € | stávame sa najlacnejší |
| Blesk GODOX V860III TTL pre Sony | 204.50 € | **198.90 €** | 15.0 % | **11.8 %** | 199.00 € | stávame sa najlacnejší |
| TP-LINK WiFi AC1200 (Deco E4 3-pack) | 120.50 € | **115.00 €** | 10.1 % | **5.0 %** | 93.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Flip 7, černý | 115.50 € | **110.00 €** | 10.3 % | **5.1 %** | 95.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dynamický mikrofón MAONO PD100W (čierny) | 66.00 € | **60.50 €** | 15.0 % | **5.4 %** | 47.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash DY451 PRO s ventilátorom... | 66.00 € | **60.50 €** | 15.0 % | **5.4 %** | 54.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera EMEET SmartCam S600L | 65.00 € | **59.50 €** | 14.7 % | **5.0 %** | 54.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO MGC20130BFB | 82.00 € | **76.50 €** | 13.0 % | **5.4 %** | 74.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C100 IP, FHD, WiFi, prísvit | 29.00 € | **23.50 €** | 29.8 % | **5.1 %** | 22.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dynamický mikrofón Maono PD200W (čierny) | 74.00 € | **68.50 €** | 15.0 % | **6.5 %** | 68.87 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 19.50 € | **14.00 €** | 46.8 % | **5.4 %** | 14.50 € | stávame sa najlacnejší |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 25.50 € | **20.00 €** | 59.8 % | **25.4 %** | 20.50 € | stávame sa najlacnejší |
| Beko HNU61422B | 123.90 € | **118.50 €** | 10.2 % | **5.4 %** | 88.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi A7 Pro 4/64GB Black | 126.90 € | **121.50 €** | 10.0 % | **5.4 %** | 95.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta HU4020F0 | 112.90 € | **107.50 €** | 10.4 % | **5.1 %** | 84.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G06 4+64GB Blue | 117.90 € | **112.50 €** | 10.3 % | **5.2 %** | 98.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Dvouplotýnka, G10047 dvouplotý | 125.90 € | **120.50 €** | 10.1 % | **5.4 %** | 109.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tuner 3 White Přenosné rádio | 122.90 € | **117.50 €** | 10.2 % | **5.3 %** | 106.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Schodíky do toalety PetKit | 64.90 € | **59.50 €** | 15.1 % | **5.6 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 86.90 € | **81.50 €** | 15.0 % | **7.8 %** | 81.89 € | stávame sa najlacnejší |
| Vodotesné puzdro Puluz (45 m) pre iPhone: na podvodn... | 64.90 € | **59.50 €** | 15.0 % | **5.4 %** | 59.90 € | stávame sa najlacnejší |
| Ultimea Aura A50 Pro Soundbar | 134.90 € | **129.50 €** | 15.0 % | **10.4 %** | 129.90 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash C280 (čierna) + 7 ventil... | 62.90 € | **57.50 €** | 15.1 % | **5.2 %** | 44.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 263.90 € | **258.50 €** | 9.1 % | **6.8 %** | 258.90 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 334.00 € | **328.90 €** | 14.9 % | **13.2 %** | 329.00 € | stávame sa najlacnejší |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 63.00 € | **57.90 €** | 14.8 % | **5.5 %** | 55.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS7550i White | 108.50 € | **103.50 €** | 10.4 % | **5.3 %** | 76.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RY6555WH | 106.50 € | **101.50 €** | 10.5 % | **5.3 %** | 82.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DMS-108/E) | 106.50 € | **101.50 €** | 10.3 % | **5.2 %** | 92.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal CY505EE0 | 110.50 € | **105.50 €** | 10.4 % | **5.4 %** | 98.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 56.50 € | **51.50 €** | 15.3 % | **5.1 %** | 44.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 105.50 € | **100.50 €** | 10.3 % | **5.1 %** | 96.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente G4 robotický vysavač | 118.50 € | **113.50 €** | 10.1 % | **5.5 %** | 109.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-G4 | 118.50 € | **113.50 €** | 10.1 % | **5.5 %** | 109.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Yeelight Pura Monitor Light Bar Pro | 59.00 € | **54.00 €** | 14.9 % | **5.2 %** | 53.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42326PC | 114.50 € | **109.50 €** | 10.2 % | **5.4 %** | 109.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 15.50 € | **10.50 €** | 56.3 % | **5.9 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, hliní... | 34.50 € | **29.50 €** | 58.8 % | **35.8 %** | 29.57 € | stávame sa najlacnejší |
| Recenzia zariadenia Uni-T RCD UT582+ | 104.90 € | **99.90 €** | 15.1 % | **9.7 %** | 100.00 € | stávame sa najlacnejší |
| BEKO SIM3126R | 29.00 € | **24.00 €** | 40.2 % | **16.0 %** | 24.10 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Black | 50.50 € | **45.50 €** | 18.4 % | **6.6 %** | 45.79 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Red/Black | 50.50 € | **45.50 €** | 18.4 % | **6.6 %** | 45.79 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 62.50 € | **57.50 €** | 14.9 % | **5.7 %** | 57.89 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 31.50 € | **26.50 €** | 38.6 % | **16.6 %** | 26.90 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 75.50 € | **70.50 €** | 15.4 % | **7.7 %** | 70.90 € | stávame sa najlacnejší |
| Arzopa Portable Monitor Z1FC 16,1" | 119.50 € | **114.50 €** | 14.9 % | **10.0 %** | 114.90 € | stávame sa najlacnejší |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 85.50 € | **80.50 €** | 14.9 % | **8.2 %** | 80.90 € | stávame sa najlacnejší |
| Otočný stojan Puluz 45 cm (biely) | 68.00 € | **63.00 €** | 14.9 % | **6.5 %** | 63.50 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim BLACK | 39.90 € | **35.00 €** | 34.9 % | **18.4 %** | 35.08 € | stávame sa najlacnejší |
| Uni-T UT216A digitálny klešťový multimeter | 54.50 € | **49.90 €** | 15.4 % | **5.6 %** | 49.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, plast... | 30.50 € | **25.90 €** | 59.0 % | **35.0 %** | 26.00 € | stávame sa najlacnejší |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 31.50 € | **26.90 €** | 54.0 % | **31.5 %** | 27.00 € | stávame sa najlacnejší |
| Tefal GC517DE0 | 137.50 € | **132.90 €** | 8.8 % | **5.2 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO3753EA | 96.50 € | **91.90 €** | 10.5 % | **5.2 %** | 89.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA PrimeSound HQ-995X | 181.50 € | **176.90 €** | 9.4 % | **6.7 %** | 176.92 € | stávame sa najlacnejší |
| Salente Coffio, pákový kávovar, nerez | 99.00 € | **94.50 €** | 10.0 % | **5.0 %** | 83.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Vakuovačka Vacu Power 500 | 90.50 € | **86.00 €** | 10.6 % | **5.1 %** | 83.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal B864SA74 | 103.00 € | **98.50 €** | 10.1 % | **5.3 %** | 98.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 55.00 € | **50.50 €** | 14.9 % | **5.5 %** | 50.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický skúter NAVEE E25 Pro | 235.50 € | **231.00 €** | 14.9 % | **12.7 %** | 231.21 € | stávame sa najlacnejší |
| Letecký simulátor MOZA RACING AB6 | 454.00 € | **449.50 €** | 14.9 % | **13.8 %** | 449.90 € | stávame sa najlacnejší |
| TEFAL GC 305012 | 95.90 € | **91.50 €** | 10.2 % | **5.1 %** | 73.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO331L | 106.90 € | **102.50 €** | 10.0 % | **5.5 %** | 90.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 103RB | 214.90 € | **210.50 €** | 8.4 % | **6.2 %** | 210.58 € | stávame sa najlacnejší |
| Kávovar HiBREW H11 1450 W | 108.90 € | **104.50 €** | 15.0 % | **10.3 %** | 104.90 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 123.90 € | **119.50 €** | 15.1 % | **11.0 %** | 119.90 € | stávame sa najlacnejší |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 USB-C Mini | 196.90 € | **192.50 €** | 15.1 % | **12.5 %** | 192.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 14.90 € | **10.50 €** | 49.7 % | **5.5 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AeroStar T300 | 59.90 € | **55.50 €** | 13.5 % | **5.1 %** | 52.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT205E digitálny klešťový multimeter | 49.90 € | **45.50 €** | 15.2 % | **5.0 %** | 45.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 22.90 € | **18.50 €** | 54.6 % | **24.9 %** | 18.90 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 26.00 € | **21.90 €** | 54.3 % | **30.0 %** | 22.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 12.50 € | **8.40 €** | 56.6 % | **5.2 %** | 8.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Arzopa Portable Monitor A1 15,6" | 87.00 € | **82.90 €** | 15.0 % | **9.6 %** | 82.98 € | stávame sa najlacnejší |
| Sada filtrov Freewell „Standard Day“ pre OSMO NANO –... | 46.90 € | **42.90 €** | 15.2 % | **5.3 %** | 19.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax PartyGo1 Play | 84.50 € | **80.50 €** | 10.3 % | **5.1 %** | 62.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AC1200 (Deco E4 2-pack) | 84.90 € | **80.90 €** | 10.5 % | **5.3 %** | 63.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal SV4111E0 | 86.00 € | **82.00 €** | 10.1 % | **5.0 %** | 72.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SALENTE SuChef | 84.90 € | **80.90 €** | 10.5 % | **5.3 %** | 72.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Turecký kávovar HiBREW CM1179_EU | 49.50 € | **45.50 €** | 15.3 % | **6.0 %** | 39.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI DSO-TC3 SigGen 3-v-1 tester tranzistorov – ru... | 50.50 € | **46.50 €** | 14.7 % | **5.6 %** | 42.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT 420 Android TV box | 81.50 € | **77.50 €** | 10.6 % | **5.2 %** | 76.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multimeter Uni-T UT256A | 46.90 € | **42.90 €** | 15.3 % | **5.5 %** | 42.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal IB5100E0 | 93.90 € | **89.90 €** | 10.0 % | **5.4 %** | 89.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny merací prístroj Uni-T UT220 | 47.90 € | **43.90 €** | 15.0 % | **5.4 %** | 43.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny kliešťový merač Habotest HT208D | 47.50 € | **43.50 €** | 15.1 % | **5.4 %** | 43.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 88.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Silver - 9154 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 88.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Prime 3 GPS Black - 9148 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 88.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 242.90 € | **238.90 €** | 8.5 % | **6.7 %** | 239.00 € | stávame sa najlacnejší |
| Ariete ART 4631 | 138.50 € | **134.50 €** | 10.2 % | **7.1 %** | 134.67 € | stávame sa najlacnejší |
| Electrolux E4GK1-4GB | 42.00 € | **38.00 €** | 22.8 % | **11.1 %** | 38.17 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 20.50 € | **16.50 €** | 39.6 % | **12.4 %** | 16.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5 zásuviek, USB A+C 20W P... | 14.00 € | **10.00 €** | 48.2 % | **5.9 %** | 10.29 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 24.00 € | **20.00 €** | 33.4 % | **11.1 %** | 20.38 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 25.50 € | **21.50 €** | 58.5 % | **33.6 %** | 21.90 € | stávame sa najlacnejší |
| Braun IS5247.VI | 189.00 € | **185.00 €** | 10.0 % | **7.7 %** | 185.45 € | stávame sa najlacnejší |
| ROWENTA RO 3985 EA | 76.00 € | **72.00 €** | 10.9 % | **5.1 %** | 72.49 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **13.00 €** | 47.5 % | **12.8 %** | 13.50 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 94.00 € | **90.00 €** | 14.9 % | **10.0 %** | 90.50 € | stávame sa najlacnejší |
| DOMO DO353VD | 84.90 € | **81.00 €** | 10.2 % | **5.1 %** | 76.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Concept OPK5160bc | 181.90 € | **178.00 €** | 10.1 % | **7.8 %** | 178.40 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600 | 73.90 € | **70.00 €** | 14.9 % | **8.9 %** | 70.50 € | stávame sa najlacnejší |
| Photo Studio PULUZ 80 cm (PU5083EU) | 92.90 € | **89.00 €** | 15.0 % | **10.1 %** | 89.50 € | stávame sa najlacnejší |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.90 € | **107.00 €** | 15.1 % | **11.0 %** | 107.50 € | stávame sa najlacnejší |
| Solight digitálne hodiny s bluetooth synchronizáciou | 14.90 € | **11.00 €** | 51.8 % | **12.1 %** | 11.50 € | stávame sa najlacnejší |
| Tefal RK364G10 Coppertinto | 60.50 € | **56.90 €** | 12.2 % | **5.6 %** | 48.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 28.50 € | **24.90 €** | 20.9 % | **5.6 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mobilný ovládač GameSir X5s (čierny) | 45.50 € | **41.90 €** | 14.5 % | **5.5 %** | 38.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT210C Mini digitálny klešťový multimeter | 40.50 € | **36.90 €** | 15.5 % | **5.2 %** | 36.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT331+ | 42.50 € | **38.90 €** | 15.7 % | **5.9 %** | 38.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight bezdrôtová nabíjačka, Qi2, MagSafe kompatibilná | 22.50 € | **18.90 €** | 53.8 % | **29.2 %** | 19.00 € | stávame sa najlacnejší |
| Solight stredný dvojramenný konzolový držiak pre plo... | 32.50 € | **28.90 €** | 43.8 % | **27.9 %** | 29.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 35.50 € | **31.90 €** | 19.8 % | **7.7 %** | 32.00 € | stávame sa najlacnejší |
| Výrobok X.A.2 | 48.50 € | **44.90 €** | 15.0 % | **6.5 %** | 45.00 € | stávame sa najlacnejší |
| Tefal FV6840E0 | 76.50 € | **72.90 €** | 10.7 % | **5.5 %** | 69.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Continenta Dřevěný chlebník | 76.50 € | **72.90 €** | 10.6 % | **5.4 %** | 70.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 89.50 € | **85.90 €** | 14.8 % | **10.2 %** | 86.00 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000A | 131.50 € | **127.90 €** | 15.1 % | **12.0 %** | 128.00 € | stávame sa najlacnejší |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 104.50 € | **100.90 €** | 15.1 % | **11.2 %** | 101.00 € | stávame sa najlacnejší |
| JBL Tune Flex 2 bílá | 78.00 € | **74.50 €** | 10.1 % | **5.2 %** | 62.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune Flex 2 černá | 78.00 € | **74.50 €** | 10.1 % | **5.2 %** | 62.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GS620C10W | 336.00 € | **332.50 €** | 6.3 % | **5.2 %** | 321.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Memory card Samsung EVO Plus microSD 2021 64GB (MB-M... | 47.00 € | **43.50 €** | 14.4 % | **5.9 %** | 35.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stolný statív Puluz PU3070GT | 44.00 € | **40.50 €** | 15.1 % | **5.9 %** | 40.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 110G | 325.50 € | **322.00 €** | 8.1 % | **7.0 %** | 322.12 € | stávame sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 410.50 € | **407.00 €** | 7.0 % | **6.1 %** | 407.37 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 71.00 € | **67.50 €** | 14.6 % | **8.9 %** | 67.90 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 25.50 € | **22.00 €** | 37.8 % | **18.8 %** | 22.50 € | stávame sa najlacnejší |
| Doplnok xTool Smart World pre mBot2 | 82.50 € | **79.00 €** | 15.0 % | **10.1 %** | 79.50 € | stávame sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 15.99 € | **12.50 €** | 35.1 % | **5.6 %** | 12.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester batérií Uni-T UT675A | 86.90 € | **83.50 €** | 15.0 % | **10.5 %** | 83.90 € | stávame sa najlacnejší |
| Ottocast CA400-S 4-in-1 Carplay/Android adapter (black) | 72.90 € | **69.50 €** | 15.2 % | **9.8 %** | 69.90 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Sony | 127.90 € | **124.50 €** | 15.1 % | **12.1 %** | 124.90 € | stávame sa najlacnejší |
| Súprava príslušenstva pre vysávač MOVA P50 PU, P50 U | 42.90 € | **39.50 €** | 15.5 % | **6.3 %** | 33.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 52.90 € | **49.50 €** | 12.8 % | **5.6 %** | 49.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight nabíjačka USB-C, 90W, PD fast charger | 16.90 € | **13.50 €** | 46.0 % | **16.6 %** | 13.90 € | stávame sa najlacnejší |
| Nabíječka baterií GP ReCyko B423 4× AA GP ReCyko 210... | 20.00 € | **16.90 €** | 26.9 % | **7.3 %** | 16.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freewell neutrálny filter ND32 pre OSMO 360 | 65.00 € | **61.90 €** | 14.9 % | **9.4 %** | 62.00 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900WD (biela) | 50.00 € | **46.90 €** | 14.6 % | **7.5 %** | 47.00 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 19.00 € | **15.90 €** | 35.1 % | **13.1 %** | 16.00 € | stávame sa najlacnejší |
| Čistiaci robot PROSCENIC Q20 Plus | 240.00 € | **236.90 €** | 15.0 % | **13.5 %** | 237.00 € | stávame sa najlacnejší |
| BEKO BMGB25332BG | 180.00 € | **176.90 €** | 9.2 % | **7.3 %** | 177.00 € | stávame sa najlacnejší |
| Inteligentná zásuvka IMOU CE2P, sada 4 ks | 36.90 € | **33.90 €** | 14.9 % | **5.6 %** | 9.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Beam 2 černá | 63.90 € | **60.90 €** | 10.6 % | **5.4 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Beam 2 modrá | 63.90 € | **60.90 €** | 10.6 % | **5.4 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit AIR X1 Carplay/Android ... | 36.50 € | **33.50 €** | 15.3 % | **5.9 %** | 22.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné stropné svietidlo CW Yeelight Meteor C300. | 33.90 € | **30.90 €** | 15.4 % | **5.2 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 37.00 € | **34.00 €** | 14.6 % | **5.3 %** | 26.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2904/04 | 69.50 € | **66.50 €** | 10.2 % | **5.5 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Indukční vařič, G1013700, jedn | 70.90 € | **67.90 €** | 10.2 % | **5.6 %** | 63.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO716BL | 84.00 € | **81.00 €** | 9.0 % | **5.1 %** | 76.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Garett ROSE Gold Mesh Steel | 67.90 € | **64.90 €** | 10.1 % | **5.2 %** | 60.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Profi XL + náhrada Static Plus | 62.90 € | **59.90 €** | 10.7 % | **5.4 %** | 56.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PXN-F16 Flight Joystick for PC | 34.50 € | **31.50 €** | 15.3 % | **5.3 %** | 28.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi V89 (nerezová oceľ, zlatá... | 33.50 € | **30.50 €** | 15.5 % | **5.2 %** | 28.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Štúdiové slúchadlá Maono MH700 (čierne) | 34.90 € | **31.90 €** | 15.2 % | **5.3 %** | 31.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO464FR | 62.90 € | **59.90 €** | 10.4 % | **5.1 %** | 59.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 34.50 € | **31.50 €** | 15.1 % | **5.1 %** | 31.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 35.50 € | **32.50 €** | 15.6 % | **5.9 %** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kaon MZ-52, satelitní přijímač Skylink | 62.50 € | **59.50 €** | 10.5 % | **5.2 %** | 59.59 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **9.90 €** | 47.3 % | **13.0 %** | 10.00 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, biela | 24.90 € | **21.90 €** | 59.2 % | **40.0 %** | 22.00 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 39.00 € | **36.00 €** | 14.9 % | **6.1 %** | 36.29 € | stávame sa najlacnejší |
| Ottocast Play2Video Plus Carplay/Android Auto bezdrô... | 70.50 € | **67.50 €** | 15.1 % | **10.2 %** | 67.90 € | stávame sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 16.50 € | **13.50 €** | 56.5 % | **28.1 %** | 13.90 € | stávame sa najlacnejší |
| Sada filtrov Freewell Insta360 Luna Ultra na každode... | 60.50 € | **57.50 €** | 15.0 % | **9.3 %** | 57.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 79.00 € | **76.00 €** | 23.3 % | **18.6 %** | 76.46 € | stávame sa najlacnejší |
| Solight profesionálny bezkontaktný alkohol tester, F... | 55.00 € | **52.00 €** | 39.6 % | **31.9 %** | 52.50 € | stávame sa najlacnejší |
| Slúchadlá QCY HT18 LITE Titanium TWS | 47.00 € | **44.00 €** | 15.1 % | **7.7 %** | 44.50 € | stávame sa najlacnejší |
| Blesk GODOX AD600B TTL Wistro s uchytením Bowens | 676.00 € | **673.00 €** | 15.0 % | **14.4 %** | 673.50 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 18.90 € | **15.90 €** | 37.0 % | **15.2 %** | 16.00 € | stávame sa najlacnejší |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 68.90 € | **66.00 €** | 15.0 % | **10.2 %** | 66.10 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 9.40 € | **6.50 €** | 54.1 % | **6.5 %** | 6.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria Jupio AAA 1000 mAh (mikrotužkové) 4ks, dobíj... | 11.50 € | **8.60 €** | 46.1 % | **9.2 %** | 8.66 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 13.90 € | **11.00 €** | 35.5 % | **7.2 %** | 11.50 € | stávame sa najlacnejší |
| Solight 3z + USB A+C predlžovací prívod - kocka, 2m,... | 13.90 € | **11.00 €** | 49.7 % | **18.5 %** | 11.50 € | stávame sa najlacnejší |
| DOMO DO9046C | 58.90 € | **56.00 €** | 10.5 % | **5.1 %** | 56.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2015706 Emilia 250 | 365.90 € | **363.00 €** | 6.8 % | **6.0 %** | 363.31 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 12.50 € | **9.70 €** | 49.0 % | **15.6 %** | 9.80 € | stávame sa najlacnejší |
| Strong LEAP-AIR Google TV HDMI TV stick | 61.50 € | **58.90 €** | 10.3 % | **5.6 %** | 41.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 730BT Beige | 58.50 € | **55.90 €** | 10.5 % | **5.6 %** | 46.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 730BT Blue | 58.50 € | **55.90 €** | 10.5 % | **5.6 %** | 46.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Flex 2 modrá | 59.50 € | **56.90 €** | 10.3 % | **5.5 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Vědro Profi Compact + mop P | 52.50 € | **49.90 €** | 11.0 % | **5.5 %** | 43.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3751i White | 48.50 € | **45.90 €** | 10.9 % | **5.0 %** | 39.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Aura 5 ANC | 53.50 € | **50.90 €** | 10.9 % | **5.5 %** | 46.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera autodráha GO Škoda Rally | 59.50 € | **56.90 €** | 10.1 % | **5.3 %** | 53.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1019800 Napěňovač Choco-lat | 58.50 € | **55.90 €** | 10.1 % | **5.2 %** | 53.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1013400 | 56.50 € | **53.90 €** | 10.4 % | **5.4 %** | 51.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steba Výrobník Muffinů CM 3 | 60.50 € | **57.90 €** | 10.2 % | **5.5 %** | 55.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maono PD100 Microphone Black | 30.50 € | **27.90 €** | 15.1 % | **5.3 %** | 26.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – strieborné + hnedý ... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 v zlatej farbe s biel... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1004500 | 51.50 € | **48.90 €** | 10.7 % | **5.1 %** | 48.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER ES20 reproduktor béžový | 51.50 € | **48.90 €** | 10.6 % | **5.0 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT320T 2-v-1 teplomer | 35.50 € | **32.90 €** | 15.3 % | **6.9 %** | 32.99 € | stávame sa najlacnejší |
| Joystick PXN-2113 PRO Ovládanie letu PC | 31.50 € | **28.90 €** | 14.6 % | **5.1 %** | 28.99 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 23.50 € | **20.90 €** | 38.1 % | **22.9 %** | 21.00 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **21.90 €** | 44.9 % | **29.5 %** | 22.00 € | stávame sa najlacnejší |
| Maono BA92 Boom Arm Black | 50.50 € | **47.90 €** | 15.2 % | **9.3 %** | 48.00 € | stávame sa najlacnejší |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 16.50 € | **13.90 €** | 54.4 % | **30.0 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **8.90 €** | 49.6 % | **15.8 %** | 9.00 € | stávame sa najlacnejší |
| Solight zásuvka IP66, vodotesná a prachotesná | 17.50 € | **14.90 €** | 55.7 % | **32.5 %** | 15.00 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 12.50 € | **9.90 €** | 47.9 % | **17.2 %** | 10.00 € | stávame sa najlacnejší |
| DOMO DO354VD | 129.50 € | **126.90 €** | 7.3 % | **5.2 %** | 120.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač Niceboy ION Charles i4 - white | 161.50 € | **158.90 €** | 6.9 % | **5.2 %** | 156.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hohem microphone (2TX + 1RX + charging case) | 67.50 € | **64.90 €** | 15.2 % | **10.7 %** | 65.00 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (žltý) | 161.50 € | **158.90 €** | 15.1 % | **13.3 %** | 159.00 € | stávame sa najlacnejší |
| Herný pedál PXN Vector X Clutch | 105.50 € | **102.90 €** | 15.0 % | **12.1 %** | 103.00 € | stávame sa najlacnejší |
| Dvojkanálová nabíjačka lítiových batérií SkyRC PC108... | 226.50 € | **223.90 €** | 15.0 % | **13.7 %** | 224.00 € | stávame sa najlacnejší |
| LIMO BAR TWIN - Black | 59.00 € | **56.50 €** | 10.0 % | **5.4 %** | 42.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 1226 | 189.00 € | **186.50 €** | 6.5 % | **5.1 %** | 172.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (zlaté) | 31.00 € | **28.50 €** | 14.6 % | **5.4 %** | 28.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierna oceľ) | 30.50 € | **28.00 €** | 14.6 % | **5.2 %** | 28.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa DarkFlash B275 (čierna) | 31.00 € | **28.50 €** | 14.4 % | **5.1 %** | 28.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 17.50 € | **15.00 €** | 42.8 % | **22.4 %** | 15.13 € | stávame sa najlacnejší |
| Gorenje F492PW | 175.50 € | **173.00 €** | 9.0 % | **7.4 %** | 173.28 € | stávame sa najlacnejší |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 42.50 € | **40.00 €** | 15.1 % | **8.3 %** | 40.33 € | stávame sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 129.00 € | **126.50 €** | 14.9 % | **12.7 %** | 126.90 € | stávame sa najlacnejší |
| Nastaviteľný stojan na herný volant PXN-A9 (čierny) | 72.00 € | **69.50 €** | 15.0 % | **11.1 %** | 69.90 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 209.50 € | **207.00 €** | 15.0 % | **13.6 %** | 207.50 € | stávame sa najlacnejší |
| Lamp LED Neewer TL120C RGB | 205.50 € | **203.00 €** | 15.0 % | **13.6 %** | 203.50 € | stávame sa najlacnejší |
| JBL Wave Buds 2 černá | 49.90 € | **47.50 €** | 10.5 % | **5.2 %** | 37.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP DeskJet 2920 (89F97B) | 50.90 € | **48.50 €** | 10.3 % | **5.1 %** | 40.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo HDO, aktivní venkovní anténa | 54.90 € | **52.50 €** | 10.4 % | **5.6 %** | 45.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sprchový stan Trizand 23492 | 24.90 € | **22.50 €** | 18.6 % | **7.2 %** | 16.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer VR300 VDSL Router | 53.90 € | **51.50 €** | 10.4 % | **5.4 %** | 48.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO 717 MF | 48.90 € | **46.50 €** | 10.5 % | **5.1 %** | 44.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2877/05 | 49.90 € | **47.50 €** | 10.5 % | **5.2 %** | 46.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (biele) | 25.90 € | **23.50 €** | 15.9 % | **5.1 %** | 22.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT127B | 28.90 € | **26.50 €** | 15.1 % | **5.6 %** | 26.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 62.90 € | **60.50 €** | 10.4 % | **6.2 %** | 60.55 € | stávame sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 55.90 € | **53.50 €** | 15.4 % | **10.4 %** | 53.59 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **14.50 €** | 39.1 % | **19.3 %** | 14.60 € | stávame sa najlacnejší |
| Rozbočovač 4v1 Baseus Metal Gleam Series, USB-C na 4... | 27.00 € | **24.90 €** | 14.5 % | **5.6 %** | 14.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 28.00 € | **25.90 €** | 14.2 % | **5.7 %** | 22.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hlavná kefa pre vysávač MOVA Z50 Ultra | 27.00 € | **24.90 €** | 14.8 % | **5.9 %** | 23.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT201F digitálny klešťový multimeter | 26.00 € | **23.90 €** | 14.6 % | **5.4 %** | 23.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 28.00 € | **25.90 €** | 14.5 % | **5.9 %** | 25.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 Gold | 30.00 € | **27.90 €** | 14.4 % | **6.4 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 27011-56 | 47.00 € | **44.90 €** | 10.1 % | **5.2 %** | 44.99 € | stávame sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **33.90 €** | 53.5 % | **44.5 %** | 34.00 € | stávame sa najlacnejší |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 26.00 € | **23.90 €** | 15.1 % | **5.8 %** | 24.00 € | stávame sa najlacnejší |
| Beko Mezikus PCSKM | 60.00 € | **57.90 €** | 10.0 % | **6.2 %** | 58.00 € | stávame sa najlacnejší |
| Beko Mezikus PCSKW | 60.00 € | **57.90 €** | 10.0 % | **6.2 %** | 58.00 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 16.00 € | **13.90 €** | 38.4 % | **20.2 %** | 14.00 € | stávame sa najlacnejší |
| Alligator 3008G | 45.00 € | **43.00 €** | 10.1 % | **5.2 %** | 22.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff S60ZBTPF Inteligentná zásuvka ZigBee (2ks) | 26.50 € | **24.50 €** | 14.6 % | **6.0 %** | 13.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Pack 6 MAXTRApro PO 2024 | 39.50 € | **37.50 €** | 11.1 % | **5.5 %** | 26.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný fotografický reflektor 5 v 1, 80 × 120 cm | 25.90 € | **23.90 €** | 14.9 % | **6.0 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LIMO BAR ECO - White | 39.90 € | **37.90 €** | 10.9 % | **5.3 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Clean Twist M Ergo Mobile | 46.90 € | **44.90 €** | 10.3 % | **5.6 %** | 39.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-6 litinové neoprenové HE... | 34.50 € | **32.50 €** | 13.1 % | **6.5 %** | 27.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sieťový adaptér SkyRC 15V / 4A | 23.00 € | **21.00 €** | 15.1 % | **5.1 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy PILOT Q2 WiFi | 46.50 € | **44.50 €** | 10.5 % | **5.7 %** | 40.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2957 | 41.90 € | **39.90 €** | 10.6 % | **5.3 %** | 35.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAT3509GY Bezdrátová sluchátka | 46.90 € | **44.90 €** | 10.1 % | **5.4 %** | 41.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 50.00 € | **48.00 €** | 9.5 % | **5.1 %** | 44.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 26.90 € | **24.90 €** | 15.2 % | **6.6 %** | 21.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-PA4010 Powerline Starter Kit | 45.50 € | **43.50 €** | 10.1 % | **5.2 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE500X AX1500 WiFi 6 Extender | 41.90 € | **39.90 €** | 10.3 % | **5.1 %** | 36.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV2839E0 | 34.90 € | **32.90 €** | 11.8 % | **5.4 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 18.50 € | **16.50 €** | 20.3 % | **7.3 %** | 14.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Napěňovač mléka, G1017301, 30 | 46.90 € | **44.90 €** | 10.5 % | **5.7 %** | 42.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO5 Blue | 48.50 € | **46.50 €** | 10.3 % | **5.7 %** | 44.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1009800 | 42.90 € | **40.90 €** | 10.2 % | **5.1 %** | 38.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar SB-820BT Soundbar | 35.50 € | **33.50 €** | 11.5 % | **5.2 %** | 31.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Vědro 55076 PROFI s ná SOE55076 | 51.50 € | **49.50 €** | 10.2 % | **5.9 %** | 48.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530BT Lavender | 40.50 € | **38.50 €** | 11.1 % | **5.6 %** | 37.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Resto 93511 Pánev 28 cm | 34.50 € | **32.50 €** | 11.5 % | **5.0 %** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny klešťový merač Uni-T UT202R | 25.50 € | **23.50 €** | 15.5 % | **6.4 %** | 23.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 25.50 € | **23.50 €** | 15.8 % | **6.7 %** | 23.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 25.00 € | **23.00 €** | 14.5 % | **5.3 %** | 23.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight akumulátorové záhradné nožnice | 63.90 € | **61.90 €** | 16.6 % | **12.9 %** | 62.00 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 9.10 € | **7.10 €** | 45.9 % | **13.9 %** | 7.20 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **58.90 €** | 15.3 % | **11.5 %** | 59.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.90 € | **8.90 €** | 45.5 % | **18.8 %** | 9.00 € | stávame sa najlacnejší |
| Držiak mikrofónu Maono BA37 | 29.90 € | **27.90 €** | 15.3 % | **7.6 %** | 28.00 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.50 €** | 14.7 % | **11.0 %** | 59.63 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 559.00 € | **557.00 €** | 7.0 % | **6.6 %** | 557.25 € | stávame sa najlacnejší |
| Recenzia zariadenia SMD Uni-T UT116A | 25.50 € | **23.50 €** | 14.3 % | **5.3 %** | 23.79 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 18.50 € | **16.50 €** | 38.9 % | **23.9 %** | 16.90 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 23.50 € | **21.50 €** | 39.1 % | **27.2 %** | 21.90 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60T | 32.50 € | **30.50 €** | 15.1 % | **8.0 %** | 30.90 € | stávame sa najlacnejší |
| Russell Hobbs 26810-56/RH | 46.50 € | **44.50 €** | 10.2 % | **5.5 %** | 44.90 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 25.50 € | **23.50 €** | 15.0 % | **6.0 %** | 23.90 € | stávame sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 24.50 € | **22.50 €** | 14.5 % | **5.1 %** | 22.90 € | stávame sa najlacnejší |
| Magnetické filtre Freewell ND NEO 2 „Standard Day“ –... | 28.50 € | **26.50 €** | 15.6 % | **7.5 %** | 26.90 € | stávame sa najlacnejší |
| MOZA RACING RS061 predĺženie stĺpika riadenia | 120.50 € | **118.50 €** | 15.1 % | **13.2 %** | 118.90 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.00 €** | 53.7 % | **39.7 %** | 20.50 € | stávame sa najlacnejší |
| Solight axiálny ventilátor s časovačom | 18.00 € | **16.00 €** | 50.1 % | **33.4 %** | 16.50 € | stávame sa najlacnejší |
| Reproduktory Edifier P12 2.0 (hnedé) | 61.00 € | **59.00 €** | 15.0 % | **11.2 %** | 59.50 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X Pro Standard (čierny) | 55.00 € | **53.00 €** | 14.7 % | **10.5 %** | 53.50 € | stávame sa najlacnejší |
| Blender G21 Perfection brown | 211.90 € | **210.00 €** | 18.5 % | **17.4 %** | 210.46 € | stávame sa najlacnejší |
| Blender G21 Perfection Cappuccino | 211.90 € | **210.00 €** | 18.5 % | **17.4 %** | 210.46 € | stávame sa najlacnejší |
| Blender G21 Perfection red | 211.90 € | **210.00 €** | 18.5 % | **17.4 %** | 210.46 € | stávame sa najlacnejší |
| Blender G21 Perfection white | 211.90 € | **210.00 €** | 18.5 % | **17.4 %** | 210.46 € | stávame sa najlacnejší |
| TP-LINK RE305 AC1200 WiFi Range Extender | 37.90 € | **36.00 €** | 10.8 % | **5.2 %** | 32.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruhové osvetlenie Puluz 20 cm na vlogovanie s držia... | 21.90 € | **20.00 €** | 15.5 % | **5.4 %** | 19.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight batériová kamera WiFi so solárnym panelom | 58.90 € | **57.00 €** | 35.6 % | **31.2 %** | 57.50 € | stávame sa najlacnejší |
| Acer Nitro KG240YP0BI | 60.90 € | **59.00 €** | 10.5 % | **7.1 %** | 59.50 € | stávame sa najlacnejší |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 10.50 € | **8.80 €** | 60.5 % | **34.5 %** | 8.90 € | stávame sa najlacnejší |
| TP-LINK Tapo C110 Home Sec. Wi-Fi Camera | 33.50 € | **31.90 €** | 11.5 % | **6.2 %** | 22.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic sluchátka RZ-B110W | 36.50 € | **34.90 €** | 10.2 % | **5.4 %** | 27.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WHCH520L.CE7 modrá | 37.50 € | **35.90 €** | 10.0 % | **5.3 %** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Pins 4 Black | 32.50 € | **30.90 €** | 11.3 % | **5.9 %** | 23.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Sada nádobí SWING B 4ks | 36.50 € | **34.90 €** | 10.9 % | **6.0 %** | 28.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Pins 4 Black | 32.50 € | **30.90 €** | 11.3 % | **5.9 %** | 25.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo VM Compact | 41.50 € | **39.90 €** | 10.0 % | **5.8 %** | 35.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2020E1 | 36.50 € | **34.90 €** | 10.0 % | **5.2 %** | 31.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2022E1 | 36.50 € | **34.90 €** | 10.0 % | **5.2 %** | 31.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DJI RoboMaster TT celoplošný ochranný kryt vrtule | 23.50 € | **21.90 €** | 14.6 % | **6.8 %** | 18.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solárna lampa Superfire FF7-B, 28W, 2400mAH | 18.50 € | **16.90 €** | 16.4 % | **6.3 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED MagClick 2 s MgSf 15W FIXMCLI2-BK | 32.50 € | **30.90 €** | 11.5 % | **6.0 %** | 27.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný digitálny multimeter UNI-T UT123D | 22.50 € | **20.90 €** | 15.0 % | **6.9 %** | 19.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAK4200CT  bezdrátová sluchátka | 38.50 € | **36.90 €** | 10.4 % | **5.8 %** | 35.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Powerstation Uni FIXPOS-U-BK | 34.50 € | **32.90 €** | 10.3 % | **5.2 %** | 31.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal KO5S08E0 | 35.50 € | **33.90 €** | 11.2 % | **6.2 %** | 33.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT210B Mini digitálny klešťový multimeter | 23.50 € | **21.90 €** | 14.7 % | **6.9 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Anycubic ASA (biely) 1 kg | 18.50 € | **16.90 €** | 15.3 % | **5.4 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vlákno HP ASA Creality (čierne) | 23.50 € | **21.90 €** | 14.6 % | **6.8 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FoodSaver FFC026X | 41.50 € | **39.90 €** | 10.8 % | **6.5 %** | 40.00 € | stávame sa najlacnejší |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 22.50 € | **20.90 €** | 35.4 % | **25.8 %** | 21.00 € | stávame sa najlacnejší |
| Colmi V69 smartwatch (black) | 40.50 € | **38.90 €** | 14.9 % | **10.4 %** | 39.00 € | stávame sa najlacnejší |
| Waterproof diving case PULUZ for Insta360 X4 | 62.50 € | **60.90 €** | 15.0 % | **12.0 %** | 61.00 € | stávame sa najlacnejší |
| Rýchlonabíjací kábel SDC DJI Power pre Inspire 3 | 20.50 € | **18.90 €** | 13.9 % | **5.0 %** | 19.00 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 49dB | 25.50 € | **23.90 €** | 30.6 % | **22.4 %** | 24.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 23.50 € | **21.90 €** | 46.5 % | **36.5 %** | 22.00 € | stávame sa najlacnejší |
| Mini detektor úniku plynu Habotest HT61 | 17.50 € | **15.90 €** | 16.6 % | **6.0 %** | 15.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 15.50 € | **13.90 €** | 53.9 % | **38.0 %** | 14.00 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 15.50 € | **13.90 €** | 30.2 % | **16.7 %** | 14.00 € | stávame sa najlacnejší |
| Solight lokátor Premium, Find My kompatibilný | 14.50 € | **12.90 €** | 43.2 % | **27.4 %** | 13.00 € | stávame sa najlacnejší |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 17.50 € | **15.90 €** | 15.6 % | **5.0 %** | 16.00 € | stávame sa najlacnejší |
| Solight digitální hodiny s bluetooth synchronizáciou | 14.50 € | **12.90 €** | 49.2 % | **32.8 %** | 13.00 € | stávame sa najlacnejší |
| Electrolux LIB60420CK | 205.50 € | **203.90 €** | 8.3 % | **7.5 %** | 203.97 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, biely | 8.30 € | **6.80 €** | 55.5 % | **27.4 %** | 6.90 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 5.40 € | **3.90 €** | 48.8 % | **7.5 %** | 3.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA MediaBox XT850 Android TV 11 box 4K s tunerem ... | 90.00 € | **88.50 €** | 6.8 % | **5.0 %** | 75.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lavazza Crema E Gusto 1000 g | 23.50 € | **22.00 €** | 12.3 % | **5.1 %** | 15.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.B | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 27.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Podlahový mop PROFI cotton plus | 30.50 € | **29.00 €** | 10.8 % | **5.3 %** | 25.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.NBL | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 30.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet Portable NBP003LBL | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 30.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9258M | 37.00 € | **35.50 €** | 10.3 % | **5.8 %** | 33.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diaľkové ovládanie Telesin pre GoPro Hero 13 / 12 / ... | 19.00 € | **17.50 €** | 14.6 % | **5.5 %** | 17.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (ružový) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (žltý) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (zelený) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pedrini MyMoka Indukce modrá 3 porce | 41.00 € | **39.50 €** | 10.2 % | **6.1 %** | 39.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón Maono DM40 Pro (biely) | 52.00 € | **50.50 €** | 12.7 % | **9.5 %** | 50.62 € | stávame sa najlacnejší |
| Mikrofón Maono DM40 Pro (čierny) | 52.00 € | **50.50 €** | 13.6 % | **10.3 %** | 50.62 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise pánev 28 cm | 26.50 € | **25.00 €** | 11.8 % | **5.5 %** | 25.19 € | stávame sa najlacnejší |
| Batéria Jupio C 5000mAh (malé monočlánky) 2ks, dobíj... | 20.00 € | **18.50 €** | 17.7 % | **8.8 %** | 18.70 € | stávame sa najlacnejší |
| Beper BEP-PE165 | 61.00 € | **59.50 €** | 10.1 % | **7.4 %** | 59.80 € | stávame sa najlacnejší |
| Solight budík s Qi bezdrôtovú nabíjačkou | 13.00 € | **11.50 €** | 47.8 % | **30.8 %** | 11.90 € | stávame sa najlacnejší |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 15.00 € | **13.50 €** | 54.0 % | **38.6 %** | 13.90 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 25.00 € | **23.50 €** | 13.9 % | **7.0 %** | 23.90 € | stávame sa najlacnejší |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 25.00 € | **23.50 €** | 13.9 % | **7.0 %** | 23.90 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze GTR 3 Pro (striebro) | 29.00 € | **27.50 €** | 14.8 % | **8.9 %** | 27.90 € | stávame sa najlacnejší |
| Smart WiFi Touch Wall Switch Sonoff TX T5 3C (3-chan... | 22.00 € | **20.50 €** | 13.8 % | **6.0 %** | 20.90 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 28.00 € | **26.50 €** | 14.7 % | **8.6 %** | 26.90 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 17.50 € | **16.00 €** | 32.7 % | **21.3 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 13.50 € | **12.00 €** | 33.4 % | **18.5 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.50 € | **10.00 €** | 38.3 % | **20.3 %** | 10.50 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 13.50 € | **12.00 €** | 55.7 % | **38.4 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 13.50 € | **12.00 €** | 55.7 % | **38.4 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 15.50 € | **14.00 €** | 54.4 % | **39.5 %** | 14.50 € | stávame sa najlacnejší |
| Solight vianočný veniec, priemer 40cm, 15LED, 3x AA,... | 14.50 € | **13.00 €** | 54.7 % | **38.7 %** | 13.50 € | stávame sa najlacnejší |
| Smartphone HOTWAV A17 Pro Max (oranžový) | 117.50 € | **116.00 €** | 15.2 % | **13.7 %** | 116.50 € | stávame sa najlacnejší |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 15.50 € | **14.00 €** | 46.0 % | **31.9 %** | 14.50 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 27.50 € | **26.00 €** | 15.7 % | **9.4 %** | 26.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 17.50 € | **16.00 €** | 44.3 % | **31.9 %** | 16.50 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **44.00 €** | 15.5 % | **11.7 %** | 44.50 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.50 € | **44.00 €** | 15.5 % | **11.7 %** | 44.50 € | stávame sa najlacnejší |
| ETA 5180 91010 sklo | 13.99 € | **12.50 €** | 27.2 % | **13.7 %** | 12.60 € | stávame sa najlacnejší |
| Koloběžka s pumpovanými koly NILS Extreme HC300 červená | 108.90 € | **107.50 €** | 6.4 % | **5.0 %** | 101.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blender G21 Excellent brown | 232.90 € | **231.50 €** | 18.3 % | **17.6 %** | 231.55 € | stávame sa najlacnejší |
| Blender G21 Excellent Cappuccino | 232.90 € | **231.50 €** | 18.3 % | **17.6 %** | 231.55 € | stávame sa najlacnejší |
| Blender G21 Excellent Graphite Black | 232.90 € | **231.50 €** | 18.3 % | **17.6 %** | 231.55 € | stávame sa najlacnejší |
| Blender G21 Excellent red | 232.90 € | **231.50 €** | 18.3 % | **17.6 %** | 231.55 € | stávame sa najlacnejší |
| Blender G21 Excellent white | 232.90 € | **231.50 €** | 18.3 % | **17.6 %** | 231.55 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Canon | 127.90 € | **126.50 €** | 15.1 % | **13.8 %** | 126.60 € | stávame sa najlacnejší |
| Blender G21 Experience White | 253.90 € | **252.50 €** | 18.3 % | **17.6 %** | 252.64 € | stávame sa najlacnejší |
| Thomson MIC201IBT | 114.90 € | **113.50 €** | 12.6 % | **11.2 %** | 113.79 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI Black | 70.90 € | **69.50 €** | 15.3 % | **13.0 %** | 69.90 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 70.90 € | **69.50 €** | 15.3 % | **13.0 %** | 69.90 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 77.90 € | **76.50 €** | 15.0 % | **13.0 %** | 76.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.40 € | **8.00 €** | 35.7 % | **15.5 %** | 8.07 € | stávame sa najlacnejší |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 7.90 € | **6.50 €** | 55.5 % | **28.0 %** | 6.60 € | stávame sa najlacnejší |
| Yeelight stropný reflektor (jedna žiarovka) biely | 19.90 € | **18.50 €** | 15.7 % | **7.6 %** | 11.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alecto FR-115BW Sada vysílaček pro děti | 35.90 € | **34.50 €** | 10.5 % | **6.2 %** | 29.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2012400 | 38.90 € | **37.50 €** | 9.9 % | **5.9 %** | 35.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1020500 | 38.90 € | **37.50 €** | 9.9 % | **5.9 %** | 35.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje H45W | 39.90 € | **38.50 €** | 10.2 % | **6.3 %** | 36.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Yogurella 617 | 27.90 € | **26.50 €** | 10.8 % | **5.2 %** | 25.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák PEGASUS 120 Compact | 29.90 € | **28.50 €** | 10.7 % | **5.5 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO Essential 2, černý | 29.90 € | **28.50 €** | 11.5 % | **6.2 %** | 27.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO Essential 2, červený | 29.90 € | **28.50 €** | 11.5 % | **6.2 %** | 27.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO Essential 2, modrý | 29.90 € | **28.50 €** | 11.5 % | **6.2 %** | 27.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| König & Meyer 16075 | 25.90 € | **24.50 €** | 11.1 % | **5.1 %** | 24.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.90 € | **17.50 €** | 15.0 % | **6.5 %** | 17.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed VR Protective Case FIXMQ-PC-GR | 27.90 € | **26.50 €** | 11.0 % | **5.4 %** | 26.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO hluboká pánev 24 cm | 29.90 € | **28.50 €** | 11.2 % | **6.0 %** | 28.55 € | stávame sa najlacnejší |
| Ariete ART 438/05 | 30.90 € | **29.50 €** | 10.6 % | **5.6 %** | 29.62 € | stávame sa najlacnejší |
| Gens ace G-Tech 6500mAh 11.1V 60C 3S1P Lipo Battery ... | 50.90 € | **49.50 €** | 15.1 % | **11.9 %** | 49.67 € | stávame sa najlacnejší |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 43.90 € | **42.50 €** | 15.0 % | **11.3 %** | 42.90 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22280-56/RH | 62.90 € | **61.50 €** | 21.4 % | **18.7 %** | 61.90 € | stávame sa najlacnejší |
| Tefal Copertinto BL439G10 | 59.90 € | **58.50 €** | 10.5 % | **7.9 %** | 58.90 € | stávame sa najlacnejší |
| Stojan na mikrofón Fifine BM88 (ružový) | 42.90 € | **41.50 €** | 15.1 % | **11.4 %** | 41.90 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 5.30 € | **4.00 €** | 55.6 % | **17.4 %** | 4.10 € | stávame sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 6.80 € | **5.60 €** | 33.9 % | **10.2 %** | 5.67 € | stávame sa najlacnejší |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 6.80 € | **5.60 €** | 54.0 % | **26.8 %** | 5.70 € | stávame sa najlacnejší |
| Solight vypínač do vlhka, jednopólový, biely | 7.30 € | **6.10 €** | 59.1 % | **33.0 %** | 6.20 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 9.20 € | **8.00 €** | 47.8 % | **28.5 %** | 8.10 € | stávame sa najlacnejší |
| MAXXO DH 919 Extra Tea | 13.69 € | **12.50 €** | 36.1 % | **24.2 %** | 12.57 € | stávame sa najlacnejší |
| Solární regulátor PWM Epever VS2024AU, 12/24V, 20A s... | 42.00 € | **40.90 €** | 8.5 % | **5.7 %** | 34.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Onyx BS2400 | 31.00 € | **29.90 €** | 10.1 % | **6.2 %** | 25.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CP2A | 27.00 € | **25.90 €** | 9.6 % | **5.1 %** | 23.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Centrala Bramka WiFi MSH450MA Meross | 19.00 € | **17.90 €** | 13.3 % | **6.8 %** | 17.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P86 (strieborné) | 21.00 € | **19.90 €** | 14.6 % | **8.6 %** | 20.00 € | stávame sa najlacnejší |
| Solight domáca kamera s nočným svetlom a hodinami | 34.00 € | **32.90 €** | 14.9 % | **11.2 %** | 33.00 € | stávame sa najlacnejší |
| Filtrácia CPL Freewell do DJI Air 3S | 18.00 € | **16.90 €** | 13.6 % | **6.7 %** | 17.00 € | stávame sa najlacnejší |
| Polarizer Filter Freewell for DJI Avata 2 | 19.00 € | **17.90 €** | 13.7 % | **7.1 %** | 18.00 € | stávame sa najlacnejší |
| Webová kamera EMEET Piko (čierna) | 51.00 € | **49.90 €** | 14.9 % | **12.4 %** | 50.00 € | stávame sa najlacnejší |
| Solight závesné príslušenstvo pre LED panely 60x60, ... | 5.00 € | **3.90 €** | 39.2 % | **8.6 %** | 3.96 € | stávame sa najlacnejší |
| PGYTech MagGlow lampa pre telefón (sivá) | 17.00 € | **15.90 €** | 14.4 % | **7.0 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anemometer UNI-T UT363 | 16.00 € | **14.90 €** | 14.0 % | **6.2 %** | 12.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Testovanie zariadenia USB Uni-T UT658LOAD | 16.00 € | **14.90 €** | 14.8 % | **6.9 %** | 13.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkčný generátor signálu FNIRSI SG-002 | 17.00 € | **15.90 €** | 13.8 % | **6.4 %** | 15.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Avatto CS20-EU-W WiFi dotykový inteligentný spínač r... | 17.00 € | **15.90 €** | 15.0 % | **7.5 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Honey Day 160 ml | 12.00 € | **10.90 €** | 23.0 % | **11.8 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 17.00 € | **15.90 €** | 36.8 % | **28.0 %** | 16.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 10.00 € | **8.90 €** | 36.4 % | **21.4 %** | 9.00 € | stávame sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 15.00 € | **13.90 €** | 54.2 % | **42.9 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.90 € | **9.80 €** | 54.1 % | **38.6 %** | 9.90 € | stávame sa najlacnejší |
| Solight stredný fixný držiak pre ploché TV, 66cm - 1... | 12.00 € | **10.90 €** | 44.3 % | **31.1 %** | 11.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 9.10 € | **8.00 €** | 55.1 % | **36.4 %** | 8.10 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE90 | 12.00 € | **10.90 €** | 49.6 % | **35.9 %** | 11.00 € | stávame sa najlacnejší |
| LED lampa RGB Puluz pre fotoaparát PU560B | 16.00 € | **14.90 €** | 13.7 % | **5.9 %** | 15.00 € | stávame sa najlacnejší |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenciou | 77.00 € | **75.90 €** | 14.9 % | **13.2 %** | 76.00 € | stávame sa najlacnejší |
| Xiaomi 67W Charging Combo (Type-A) EU | 24.50 € | **23.50 €** | 10.5 % | **6.0 %** | 14.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EZIDRI Síto pro FD1000 ULTRA | 14.50 € | **13.50 €** | 13.0 % | **5.2 %** | 5.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV 1713E0 | 26.50 € | **25.50 €** | 10.5 % | **6.4 %** | 19.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-BK | 22.50 € | **21.50 €** | 10.7 % | **5.7 %** | 16.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Coox Quiche forma 3 díly se skleněnou po | 20.90 € | **19.90 €** | 11.1 % | **5.8 %** | 14.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament PLA Anycubic 1 KG (čierny) | 14.50 € | **13.50 €** | 16.0 % | **8.0 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termoska cest. PENTA 1,5l ner. | 20.90 € | **19.90 €** | 10.9 % | **5.6 %** | 15.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-PETG Filament Creality (Blue) | 11.50 € | **10.50 €** | 16.6 % | **6.4 %** | 6.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechnoLine WS 8005 digitální budík | 22.50 € | **21.50 €** | 11.1 % | **6.1 %** | 17.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-BL | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 12.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-PI | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 12.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-TU | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 12.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 308 Black, 7FP21UE | 21.50 € | **20.50 €** | 10.3 % | **5.2 %** | 16.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čítacia lampa Yeelight Led Neck Book Light | 15.90 € | **14.90 €** | 14.9 % | **7.7 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 64.50 € | **63.50 €** | 7.3 % | **5.6 %** | 60.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530 Black | 28.50 € | **27.50 €** | 10.7 % | **6.8 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Podsie 4 POP White | 19.50 € | **18.50 €** | 11.8 % | **6.1 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-PETG Filament Creality (Transparent) | 11.50 € | **10.50 €** | 16.6 % | **6.4 %** | 8.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Bluetooth Speaker Essential Green | 14.90 € | **13.90 €** | 12.7 % | **5.1 %** | 11.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termoska s pum.CUL.1,9l černá | 21.50 € | **20.50 €** | 12.6 % | **7.3 %** | 18.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PG-540BK Black | 18.90 € | **17.90 €** | 11.2 % | **5.3 %** | 15.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco ESPRESSO BARISTA 1kg | 19.50 € | **18.50 €** | 12.5 % | **6.8 %** | 16.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-541 Color | 23.50 € | **22.50 €** | 11.5 % | **6.7 %** | 20.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-546 Color | 20.90 € | **19.90 €** | 11.9 % | **6.6 %** | 18.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 15.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA X12 | 15.90 € | **14.90 €** | 15.1 % | **7.9 %** | 13.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo P100(2-pack)WiFi zásuvka | 22.50 € | **21.50 €** | 10.9 % | **6.0 %** | 20.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper PLA Filament Creality (Beige) | 13.50 € | **12.50 €** | 16.3 % | **7.7 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper PLA Filament Creality (Yellow) | 13.90 € | **12.90 €** | 16.3 % | **7.9 %** | 11.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 68.00 € | **67.00 €** | 6.7 % | **5.1 %** | 65.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.90 € | **10.90 €** | 15.6 % | **5.9 %** | 9.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 21.90 € | **20.90 €** | 11.3 % | **6.2 %** | 19.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-TI | 22.50 € | **21.50 €** | 10.7 % | **5.7 %** | 20.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G4002300 Odstraňovač žmolků | 22.90 € | **21.90 €** | 10.6 % | **5.8 %** | 21.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **16.50 €** | 11.5 % | **5.1 %** | 16.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed USB-C/Lightning FIXDLS-CL2-WH | 19.50 € | **18.50 €** | 12.0 % | **6.2 %** | 18.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.90 € | **16.90 €** | 11.3 % | **5.1 %** | 16.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 22.50 € | **21.50 €** | 10.8 % | **5.9 %** | 21.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Adria B-4780 bílá | 26.50 € | **25.50 €** | 10.9 % | **6.8 %** | 25.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Buds 8 Lite Black | 20.50 € | **19.50 €** | 12.2 % | **6.8 %** | 19.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO8709P | 29.50 € | **28.50 €** | 10.5 % | **6.8 %** | 28.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smart Switch WiFi + RF 433 Sonoff T2 EU TX (3-channe... | 12.90 € | **11.90 €** | 15.3 % | **6.3 %** | 11.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Onikuma MP006 RGB herná podložka pod myš (čierna) | 11.50 € | **10.50 €** | 16.4 % | **6.3 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.50 € | **25.50 €** | 10.9 % | **6.7 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA X25 (čierne) | 14.90 € | **13.90 €** | 15.3 % | **7.5 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný stojan ONIKUMA ST-2 (ružový) | 11.50 € | **10.50 €** | 15.4 % | **5.4 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO Expertise rendlík 20 cm | 24.50 € | **23.50 €** | 10.7 % | **6.1 %** | 23.51 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **26.90 €** | 11.2 % | **7.2 %** | 26.91 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 114.50 € | **113.50 €** | 10.0 % | **9.1 %** | 113.53 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.40 € | **5.40 €** | 36.9 % | **15.5 %** | 5.48 € | stávame sa najlacnejší |
| Hyper PLA Filament Creality (Grey) | 12.50 € | **11.50 €** | 16.4 % | **7.1 %** | 11.58 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 34.00 € | **33.00 €** | 14.3 % | **10.9 %** | 33.09 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 17.50 € | **16.50 €** | 44.6 % | **36.3 %** | 16.59 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 21.00 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 13.90 € | **12.90 €** | 20.3 % | **11.7 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.90 € | **46.90 €** | 38.5 % | **35.6 %** | 47.00 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.60 € | **5.60 €** | 32.5 % | **12.4 %** | 5.70 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 23.90 € | **22.90 €** | 21.1 % | **16.0 %** | 23.00 € | stávame sa najlacnejší |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 4.50 € | **3.50 €** | 55.0 % | **20.6 %** | 3.60 € | stávame sa najlacnejší |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 14.90 € | **13.90 €** | 15.7 % | **7.9 %** | 14.00 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 13.90 € | **12.90 €** | 39.9 % | **29.8 %** | 13.00 € | stávame sa najlacnejší |
| Graef S 10005 | 113.90 € | **112.90 €** | 10.4 % | **9.4 %** | 113.00 € | stávame sa najlacnejší |
| Solight rotačná kefa pre DysonV6, V7, V8, V10, V11 | 12.90 € | **11.90 €** | 31.1 % | **20.9 %** | 12.00 € | stávame sa najlacnejší |
| Ariete SteamStyle 4301, violet | 32.90 € | **31.90 €** | 9.9 % | **6.6 %** | 32.00 € | stávame sa najlacnejší |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.90 € | **9.90 €** | 38.0 % | **25.4 %** | 10.00 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-80W (2-kanálový) inteligentný dotykov... | 22.90 € | **21.90 €** | 15.8 % | **10.7 %** | 22.00 € | stávame sa najlacnejší |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA X20 (čierne) | 19.90 € | **18.90 €** | 16.0 % | **10.1 %** | 19.00 € | stávame sa najlacnejší |
| Selfie tyč Puluz pre Insta360 One RS / X2 / X3 / X4 ... | 12.90 € | **11.90 €** | 15.3 % | **6.3 %** | 12.00 € | stávame sa najlacnejší |
| Solight anténny adaptér, s napájací výhybkou, 100mA | 5.30 € | **4.30 €** | 55.0 % | **25.8 %** | 4.40 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 262.90 € | **261.90 €** | 15.0 % | **14.6 %** | 262.00 € | stávame sa najlacnejší |
| Latarka Superfire L3 P90 | 29.90 € | **28.90 €** | 14.9 % | **11.1 %** | 29.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 19.90 € | **18.90 €** | 39.6 % | **32.6 %** | 19.00 € | stávame sa najlacnejší |
| Beko B3RCSO255S | 275.90 € | **274.90 €** | 8.0 % | **7.6 %** | 275.00 € | stávame sa najlacnejší |
| Slúchadlá TWS QCY Ailybuds E20 HT13 (biele) | 14.00 € | **13.00 €** | 13.8 % | **5.7 %** | 13.13 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **35.00 €** | 38.3 % | **34.4 %** | 35.16 € | stávame sa najlacnejší |
| ScanPart vodní filtr kompatibilní 4ks | 16.50 € | **15.50 €** | 13.2 % | **6.3 %** | 15.67 € | stávame sa najlacnejší |
| Leifheit Stěrka na dlažbu Classic s tele | 12.50 € | **11.50 €** | 14.3 % | **5.2 %** | 11.69 € | stávame sa najlacnejší |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 13.00 € | **12.00 €** | 47.8 % | **36.4 %** | 12.20 € | stávame sa najlacnejší |
| Diaľkový spúšťač GODOX X3 TTL pre Canon | 73.00 € | **72.00 €** | 14.7 % | **13.1 %** | 72.20 € | stávame sa najlacnejší |
| Beko VRT86325VI | 199.00 € | **198.00 €** | 7.2 % | **6.6 %** | 198.22 € | stávame sa najlacnejší |
| San Marco SUPREMO 1 kg zrno | 22.50 € | **21.50 €** | 11.3 % | **6.3 %** | 21.79 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900G (čierna) | 51.00 € | **50.00 €** | 14.5 % | **12.2 %** | 50.30 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT811 (čierne) | 20.50 € | **19.50 €** | 15.4 % | **9.8 %** | 19.80 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (červené) | 36.50 € | **35.50 €** | 15.2 % | **12.1 %** | 35.82 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.33 € | stávame sa najlacnejší |
| Solární regulátor MPPT GETI GWH04W 5kW (pro FV ohřev... | 356.50 € | **355.50 €** | 21.7 % | **21.3 %** | 355.89 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 255.50 € | **254.50 €** | 13.1 % | **12.6 %** | 254.89 € | stávame sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 100.50 € | **99.50 €** | 10.7 % | **9.6 %** | 99.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 148.50 € | **147.50 €** | 11.5 % | **10.8 %** | 147.89 € | stávame sa najlacnejší |
| Nutribullet NB614.DG | 55.50 € | **54.50 €** | 10.1 % | **8.1 %** | 54.89 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.50 € | **30.50 €** | 20.7 % | **16.9 %** | 30.90 € | stávame sa najlacnejší |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.50 € | **28.50 €** | 14.9 % | **11.0 %** | 28.90 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB, 3m, sada s 12V adapté... | 14.50 € | **13.50 €** | 47.4 % | **37.2 %** | 13.90 € | stávame sa najlacnejší |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.50 € | **19.50 €** | 48.5 % | **41.3 %** | 19.90 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **13.50 €** | 47.4 % | **37.2 %** | 13.90 € | stávame sa najlacnejší |
| Solight high bay, 200W, 28000lm, 120°, Meanwell,  50... | 94.50 € | **93.50 €** | 20.0 % | **18.8 %** | 93.90 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.50 € | **17.50 €** | 39.0 % | **31.5 %** | 17.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.50 € | **14.50 €** | 39.9 % | **30.8 %** | 14.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 49.50 € | **48.50 €** | 38.6 % | **35.8 %** | 48.90 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.50 € | **10.50 €** | 41.2 % | **29.0 %** | 10.90 € | stávame sa najlacnejší |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.50 € | **14.50 €** | 16.8 % | **9.3 %** | 14.90 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.50 € | **12.50 €** | 47.1 % | **36.2 %** | 12.90 € | stávame sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá, PO | 21.50 € | **20.50 €** | 11.8 % | **6.6 %** | 20.90 € | stávame sa najlacnejší |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **21.50 €** | 10.3 % | **5.4 %** | 21.90 € | stávame sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK690B černá | 37.50 € | **36.50 €** | 10.9 % | **7.9 %** | 36.90 € | stávame sa najlacnejší |
| DOMO DO9279W | 51.50 € | **50.50 €** | 10.9 % | **8.8 %** | 50.90 € | stávame sa najlacnejší |
| Girmi PE1600 | 16.50 € | **15.50 €** | 12.1 % | **5.3 %** | 15.90 € | stávame sa najlacnejší |
| PULUZ PU3224B Držiak na telefón čierny | 14.50 € | **13.50 €** | 16.5 % | **8.5 %** | 13.90 € | stávame sa najlacnejší |
| DURACELL baterie DRNEL14 pro Nikon | 20.50 € | **19.50 €** | 11.6 % | **6.2 %** | 19.90 € | stávame sa najlacnejší |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.50 € | **18.50 €** | 14.1 % | **8.3 %** | 18.90 € | stávame sa najlacnejší |
| Herná myš ONIKUMA DM02 (čierna) | 16.50 € | **15.50 €** | 14.9 % | **8.0 %** | 15.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 14.50 € | **13.50 €** | 34.1 % | **24.9 %** | 13.90 € | stávame sa najlacnejší |
| TWS QCY MeloBuds Pro HT08 headphones, ANC (gold) | 32.50 € | **31.50 €** | 14.7 % | **11.2 %** | 31.90 € | stávame sa najlacnejší |
| Čelovka 2v1 Superfire TH04 – 600 lm, USB-C, 5 režimo... | 12.50 € | **11.50 €** | 16.1 % | **6.9 %** | 11.90 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 27.00 € | **26.00 €** | 47.2 % | **41.8 %** | 26.50 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 22.00 € | **21.00 €** | 38.4 % | **32.1 %** | 21.50 € | stávame sa najlacnejší |
| Solight doplnkový pohybový senzor pre GSM alarm 1D11 | 32.00 € | **31.00 €** | 41.0 % | **36.6 %** | 31.50 € | stávame sa najlacnejší |
| CrockPot CSC113X Pomalý hrnec 3,5 l | 75.00 € | **74.00 €** | 9.7 % | **8.3 %** | 74.50 € | stávame sa najlacnejší |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 89.00 € | **88.00 €** | 15.1 % | **13.8 %** | 88.50 € | stávame sa najlacnejší |
| Metal selfie stick 2 m PULUZ for Insta360 One RS/X2/... | 14.00 € | **13.00 €** | 13.7 % | **5.6 %** | 13.50 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash B275 (biela) | 29.00 € | **28.00 €** | 14.9 % | **10.9 %** | 28.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 71.00 € | **70.00 €** | 14.2 % | **12.6 %** | 70.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 103.00 € | **102.00 €** | 30.6 % | **29.3 %** | 102.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 79.00 € | **78.00 €** | 15.5 % | **14.0 %** | 78.50 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (čierne) | 99.00 € | **98.00 €** | 14.8 % | **13.6 %** | 98.50 € | stávame sa najlacnejší |
| Sati Café al’Italienne 1 kg zrno | 22.00 € | **21.00 €** | 10.1 % | **5.1 %** | 21.50 € | stávame sa najlacnejší |
| BEKO B5RCNA406HXB3 | 522.00 € | **521.00 €** | 7.0 % | **6.8 %** | 521.50 € | stávame sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 396.00 € | **395.00 €** | 7.0 % | **6.7 %** | 395.50 € | stávame sa najlacnejší |
| TP-LINK Archer T3U WiFi Adaptér | 16.90 € | **15.90 €** | 11.9 % | **5.3 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač LCR Uni-T UT612 | 134.90 € | **134.00 €** | 12.6 % | **11.8 %** | 134.39 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 89.90 € | **89.00 €** | 6.8 % | **5.8 %** | 89.39 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 207.90 € | **207.00 €** | 8.9 % | **8.5 %** | 207.39 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 193.90 € | **193.00 €** | 9.2 % | **8.7 %** | 193.39 € | stávame sa najlacnejší |
| Motorcycle Intercom EJEAS MS8-SE | 86.90 € | **86.00 €** | 15.1 % | **13.9 %** | 86.50 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 87.90 € | **87.00 €** | 12.7 % | **11.5 %** | 87.50 € | stávame sa najlacnejší |
| Domo DO7345H | 147.90 € | **147.00 €** | 10.3 % | **9.6 %** | 147.50 € | stávame sa najlacnejší |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 97.90 € | **97.00 €** | 20.2 % | **19.1 %** | 97.50 € | stávame sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.90 € | **64.00 €** | 15.1 % | **13.5 %** | 64.50 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 106.90 € | **106.00 €** | 13.2 % | **12.3 %** | 106.50 € | stávame sa najlacnejší |
| Leifheit Vakuovací role 30x600 cm | 14.90 € | **14.00 €** | 12.0 % | **5.2 %** | 12.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera GO 64270 Škoda Fabia RS Rally 2 | 12.90 € | **12.00 €** | 13.5 % | **5.6 %** | 10.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G2017100 kuchyňská váha | 15.90 € | **15.00 €** | 11.4 % | **5.1 %** | 14.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo L630 | 10.50 € | **9.60 €** | 15.0 % | **5.2 %** | 9.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 5.50 € | **4.60 €** | 55.8 % | **30.3 %** | 4.70 € | stávame sa najlacnejší |
| Sati Décafeinated 500 g zrno | 12.90 € | **12.00 €** | 13.5 % | **5.6 %** | 12.25 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 13.90 € | **13.00 €** | 20.6 % | **12.8 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.00 €** | 47.3 % | **37.0 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.90 € | **12.00 €** | 47.7 % | **37.4 %** | 12.50 € | stávame sa najlacnejší |
| Solight detektor úniku horľavých plynov. Polovodičov... | 13.90 € | **13.00 €** | 27.8 % | **19.6 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.90 € | **14.00 €** | 47.7 % | **38.8 %** | 14.50 € | stávame sa najlacnejší |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 12.90 € | **12.00 €** | 34.5 % | **25.1 %** | 12.50 € | stávame sa najlacnejší |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.90 € | **13.00 €** | 20.3 % | **12.6 %** | 13.50 € | stávame sa najlacnejší |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 14.90 € | **14.00 €** | 33.7 % | **25.6 %** | 14.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 3m, 3 zásuvky IP44,... | 13.90 € | **13.00 €** | 35.8 % | **27.0 %** | 13.50 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.90 € | **10.00 €** | 17.1 % | **7.4 %** | 10.50 € | stávame sa najlacnejší |
| UV svietidlo Superfire A5, 365NM | 13.90 € | **13.00 €** | 14.8 % | **7.4 %** | 13.50 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 5 sériový - lustrový, biely | 3.90 € | **3.00 €** | 40.9 % | **8.4 %** | 3.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T3U Plus WiFi Adaptér | 19.90 € | **19.00 €** | 10.3 % | **5.3 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 17.90 € | **17.00 €** | 46.6 % | **39.2 %** | 17.05 € | stávame sa najlacnejší |
| TEFAL XA 800512 | 17.90 € | **17.00 €** | 12.5 % | **6.8 %** | 17.08 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.13 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 25.90 € | **25.00 €** | 14.2 % | **10.2 %** | 25.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3224 | 26.90 € | **26.00 €** | 14.7 % | **10.9 %** | 26.39 € | stávame sa najlacnejší |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.90 € | **17.00 €** | 16.2 % | **10.4 %** | 17.42 € | stávame sa najlacnejší |
| San Marco Pur Arabica Premium 1 kg zrno | 22.90 € | **22.00 €** | 10.1 % | **5.8 %** | 22.42 € | stávame sa najlacnejší |
| FoodSaver FVB015X | 18.90 € | **18.00 €** | 12.2 % | **6.9 %** | 18.46 € | stávame sa najlacnejší |
| Domo DO9215AV | 32.90 € | **32.00 €** | 10.3 % | **7.3 %** | 32.50 € | stávame sa najlacnejší |
| Solight projekčné hodiny s rádiom a budíkom | 21.90 € | **21.00 €** | 50.3 % | **44.1 %** | 21.50 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s nočným svetielko... | 28.90 € | **28.00 €** | 35.0 % | **30.8 %** | 28.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 16.90 € | **16.00 €** | 46.6 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 17A, 200W, IP20 | 22.90 € | **22.00 €** | 45.2 % | **39.5 %** | 22.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 22.90 € | **22.00 €** | 32.6 % | **27.4 %** | 22.50 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.90 € | **39.00 €** | 38.6 % | **35.4 %** | 39.50 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.90 € | **25.00 €** | 39.1 % | **34.2 %** | 25.50 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, UGR | 23.90 € | **23.00 €** | 38.4 % | **33.2 %** | 23.50 € | stávame sa najlacnejší |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 24.90 € | **24.00 €** | 45.3 % | **40.1 %** | 24.50 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 400... | 31.90 € | **31.00 €** | 55.0 % | **50.6 %** | 31.50 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.90 € | **20.00 €** | 30.3 % | **24.7 %** | 20.50 € | stávame sa najlacnejší |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 33.90 € | **33.00 €** | 45.0 % | **41.1 %** | 33.50 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.90 € | **24.00 €** | 38.3 % | **33.3 %** | 24.50 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Terni, 12W... | 26.90 € | **26.00 €** | 38.7 % | **34.0 %** | 26.50 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 39.90 € | **39.00 €** | 19.2 % | **16.5 %** | 39.50 € | stávame sa najlacnejší |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 26.90 € | **26.00 €** | 34.3 % | **29.8 %** | 26.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 19.90 € | **19.00 €** | 34.4 % | **28.3 %** | 19.50 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 23.90 € | **23.00 €** | 36.2 % | **31.0 %** | 23.50 € | stávame sa najlacnejší |
| Tefal DN853BE0 | 53.90 € | **53.00 €** | 8.5 % | **6.7 %** | 53.50 € | stávame sa najlacnejší |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 39.90 € | **39.00 €** | 33.6 % | **30.6 %** | 39.50 € | stávame sa najlacnejší |
| DOMO DO754K | 35.90 € | **35.00 €** | 8.2 % | **5.5 %** | 35.50 € | stávame sa najlacnejší |
| Tefal Coppertinto KI280G10 | 30.90 € | **30.00 €** | 9.8 % | **6.6 %** | 30.50 € | stávame sa najlacnejší |
| Solight lokátor pre batožinu, Find My kompatibilný | 22.90 € | **22.00 €** | 35.8 % | **30.5 %** | 22.50 € | stávame sa najlacnejší |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 26.90 € | **26.00 €** | 35.2 % | **30.6 %** | 26.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 23.90 € | **23.00 €** | 36.1 % | **30.9 %** | 23.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 23.90 € | **23.00 €** | 40.0 % | **34.7 %** | 23.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 39.90 € | **39.00 €** | 39.2 % | **36.0 %** | 39.50 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 21.90 € | **21.00 €** | 10.7 % | **6.2 %** | 21.50 € | stávame sa najlacnejší |
| Adapter, quick release MOZA RACING RS07 for R21/R16/... | 49.90 € | **49.00 €** | 7.5 % | **5.6 %** | 49.50 € | stávame sa najlacnejší |
| PS5 Laysara: Summit Kingdom Collector's | 63.90 € | **63.00 €** | 8.2 % | **6.7 %** | 63.50 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 46.90 € | **46.00 €** | 14.3 % | **12.1 %** | 46.50 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 325.90 € | **325.00 €** | 10.7 % | **10.4 %** | 325.39 € | stávame sa najlacnejší |
| Beko BDFN26540WP | 414.90 € | **414.00 €** | 7.0 % | **6.8 %** | 414.50 € | stávame sa najlacnejší |
| Solight časový spínač, týždeň, 1 režim | 4.70 € | **3.90 €** | 45.3 % | **20.6 %** | 4.00 € | stávame sa najlacnejší |
| Solight LED nástenná dekorácia vianočný stromček, 24... | 4.00 € | **3.20 €** | 45.2 % | **16.1 %** | 3.30 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, čierny | 9.40 € | **8.70 €** | 54.1 % | **42.6 %** | 8.80 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 8.30 € | **7.60 €** | 47.0 % | **34.6 %** | 7.70 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 1 jednopólový, biely | 3.00 € | **2.30 €** | 41.8 % | **8.7 %** | 2.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.90 € | **7.20 €** | 47.3 % | **34.3 %** | 7.30 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.70 € | **4.00 €** | 49.3 % | **27.0 %** | 4.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 3m | 6.20 € | **5.50 €** | 48.7 % | **31.9 %** | 5.60 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 4.00 € | **3.30 €** | 53.4 % | **26.6 %** | 3.40 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.60 € | **3.90 €** | 53.9 % | **30.5 %** | 4.00 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 – Advanced Edition | 953.50 € | **952.90 €** | 15.0 % | **14.9 %** | 953.00 € | stávame sa najlacnejší |
| Okuliare XREAL 1S pre rozšírenú realitu | 518.50 € | **517.90 €** | 12.6 % | **12.5 %** | 518.00 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 888.50 € | **887.90 €** | 6.9 % | **6.8 %** | 888.00 € | stávame sa najlacnejší |
| Whirlpool WHK 22373 X6EA AI AdaptiveCool | 498.50 € | **497.90 €** | 8.1 % | **8.0 %** | 498.00 € | stávame sa najlacnejší |
| Candy BR 10N3BX-S | 487.50 € | **486.90 €** | 9.4 % | **9.3 %** | 487.00 € | stávame sa najlacnejší |
| Gorenje WE694A1 | 348.50 € | **347.90 €** | 6.9 % | **6.7 %** | 348.00 € | stávame sa najlacnejší |
| Fagor 4LVF-637ADIT | 444.50 € | **443.90 €** | 7.0 % | **6.8 %** | 444.00 € | stávame sa najlacnejší |
| Ariete Breakfast Bollitore 2846, černá | 17.50 € | **16.90 €** | 10.5 % | **6.8 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT Penguin MEI 2,7l černá + 2ks filtru | 20.50 € | **19.90 €** | 10.2 % | **6.9 %** | 19.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42602S | 40.50 € | **39.90 €** | 10.9 % | **9.3 %** | 39.99 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 36.50 € | **35.90 €** | 39.8 % | **37.5 %** | 36.00 € | stávame sa najlacnejší |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 19.50 € | **18.90 €** | 13.6 % | **10.1 %** | 19.00 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 22.50 € | **21.90 €** | 12.7 % | **9.7 %** | 22.00 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 32.50 € | **31.90 €** | 33.2 % | **30.8 %** | 32.00 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 21.50 € | **20.90 €** | 21.8 % | **18.4 %** | 21.00 € | stávame sa najlacnejší |
| Solight LED núdzové osvetlenie, 4W, 200lm, IP65, LiF... | 31.50 € | **30.90 €** | 23.6 % | **21.2 %** | 31.00 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 32.50 € | **31.90 €** | 33.2 % | **30.8 %** | 32.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 24.50 € | **23.90 €** | 19.9 % | **17.0 %** | 24.00 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 20.50 € | **19.90 €** | 43.2 % | **39.0 %** | 20.00 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256 | 26.50 € | **25.90 €** | 8.8 % | **6.3 %** | 26.00 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 55.50 € | **54.90 €** | 7.3 % | **6.1 %** | 55.00 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, voľne, 100m | 25.50 € | **24.90 €** | 40.0 % | **36.7 %** | 25.00 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 26.50 € | **25.90 €** | 19.5 % | **16.8 %** | 26.00 € | stávame sa najlacnejší |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 20.50 € | **19.90 €** | 42.9 % | **38.8 %** | 20.00 € | stávame sa najlacnejší |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 40.50 € | **39.90 €** | 36.7 % | **34.7 %** | 40.00 € | stávame sa najlacnejší |
| Solight rotačná kefa pre Dyson V8, V10, V12, V15 | 26.50 € | **25.90 €** | 32.5 % | **29.5 %** | 26.00 € | stávame sa najlacnejší |
| Tefal HT652538 | 58.50 € | **57.90 €** | 9.6 % | **8.5 %** | 58.00 € | stávame sa najlacnejší |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 30.50 € | **29.90 €** | 52.8 % | **49.8 %** | 30.00 € | stávame sa najlacnejší |
| Double monitor mount 13-30" Huanuo HNDS6 | 47.50 € | **46.90 €** | 10.5 % | **9.1 %** | 47.00 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 20.50 € | **19.90 €** | 38.8 % | **34.7 %** | 20.00 € | stávame sa najlacnejší |
| Solight lokátor kľúčenka, Find My kompatibilný | 19.50 € | **18.90 €** | 39.7 % | **35.4 %** | 19.00 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.50 € | **16.90 €** | 24.6 % | **20.3 %** | 17.00 € | stávame sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 19.50 € | **18.90 €** | 18.6 % | **14.9 %** | 19.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 54.50 € | **53.90 €** | 25.5 % | **24.1 %** | 54.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 17.50 € | **16.90 €** | 13.5 % | **9.7 %** | 17.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 3 zásuvky IP44, 3 x 2... | 21.50 € | **20.90 €** | 22.1 % | **18.7 %** | 21.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.50 € | **32.90 €** | 18.6 % | **16.5 %** | 33.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 42.50 € | **41.90 €** | 20.4 % | **18.7 %** | 42.00 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 42.50 € | **41.90 €** | 9.4 % | **7.8 %** | 42.00 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 42.50 € | **41.90 €** | 9.4 % | **7.8 %** | 42.00 € | stávame sa najlacnejší |
| Herné slúchadlá Onikuma B2 (čierne) | 21.50 € | **20.90 €** | 11.6 % | **8.5 %** | 21.00 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 35.50 € | **34.90 €** | 12.1 % | **10.2 %** | 35.00 € | stávame sa najlacnejší |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 36.50 € | **35.90 €** | 12.0 % | **10.1 %** | 36.00 € | stávame sa najlacnejší |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 37.50 € | **36.90 €** | 9.4 % | **7.7 %** | 37.00 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.50 € | **26.90 €** | 40.4 % | **37.4 %** | 27.00 € | stávame sa najlacnejší |
| Filament Anycubic TPU (sivý) 1 kg | 20.50 € | **19.90 €** | 11.6 % | **8.3 %** | 20.00 € | stávame sa najlacnejší |
| Solight prídavná zásuvka pre GSM zásuvku | 36.50 € | **35.90 €** | 37.1 % | **34.8 %** | 36.00 € | stávame sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 56.50 € | **55.90 €** | 28.1 % | **26.7 %** | 56.00 € | stávame sa najlacnejší |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 42.50 € | **41.90 €** | 11.7 % | **10.2 %** | 42.00 € | stávame sa najlacnejší |
| Baterka Superfire TF02 | 63.50 € | **62.90 €** | 14.4 % | **13.3 %** | 63.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.50 € | **25.90 €** | 42.7 % | **39.4 %** | 26.00 € | stávame sa najlacnejší |
| Solight nepriamy germicidný UV žiarič | 62.50 € | **61.90 €** | 39.3 % | **38.0 %** | 62.00 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.40 € | **6.80 €** | 55.1 % | **42.5 %** | 6.90 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 6.70 € | **6.10 €** | 46.8 % | **33.7 %** | 6.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 6.20 € | **5.60 €** | 47.4 % | **33.1 %** | 5.70 € | stávame sa najlacnejší |
| Solight spätná klapka pre AV01, AV02 | 2.10 € | **1.50 €** | 51.1 % | **7.9 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.50 € | **3.90 €** | 23.6 % | **7.1 %** | 3.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 2.70 € | **2.10 €** | 52.4 % | **18.6 %** | 2.20 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 300mm, natura... | 3.40 € | **2.80 €** | 55.3 % | **27.9 %** | 2.90 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.90 € | **3.30 €** | 53.2 % | **29.6 %** | 3.40 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.90 € | **3.30 €** | 53.2 % | **29.6 %** | 3.40 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 3.20 € | **2.60 €** | 54.9 % | **25.8 %** | 2.70 € | stávame sa najlacnejší |
| Fixed řemínek AWU 49mm FIXNST2-1029-RD | 16.50 € | **15.90 €** | 10.7 % | **6.7 %** | 4.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák MagMount Vent FIXMMT-V-BK | 14.50 € | **13.90 €** | 11.2 % | **6.6 %** | 10.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune110 white | 11.50 € | **10.90 €** | 14.7 % | **8.7 %** | 7.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WR820N WiFi N Router | 14.50 € | **13.90 €** | 12.3 % | **7.6 %** | 10.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 655 Yellow, CZ112AE | 16.50 € | **15.90 €** | 10.9 % | **6.8 %** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U AC600 WiFi Adaptér | 12.50 € | **11.90 €** | 12.8 % | **7.4 %** | 10.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo L530E | 11.50 € | **10.90 €** | 11.4 % | **5.6 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 14.50 € | **13.90 €** | 12.5 % | **7.8 %** | 12.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Pánev nepř. GRANITE P 24 ind | 14.50 € | **13.90 €** | 10.9 % | **6.3 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Defender Taška na notebook 15,6", Geek | 14.50 € | **13.90 €** | 10.1 % | **5.5 %** | 13.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-Hepa | 12.50 € | **11.90 €** | 12.5 % | **7.1 %** | 11.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UNI-T UT658DUAL tester zásuviek USB | 12.50 € | **11.90 €** | 13.8 % | **8.3 %** | 11.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco INTENSO 500 g | 12.50 € | **11.90 €** | 13.8 % | **8.3 %** | 11.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENCO ICR-210 černá | 16.50 € | **15.90 €** | 10.6 % | **6.6 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELDONEX EKS4040SL | 11.50 € | **10.90 €** | 14.3 % | **8.3 %** | 10.96 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 13.50 € | **12.90 €** | 47.5 % | **41.0 %** | 13.00 € | stávame sa najlacnejší |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.50 € | **15.90 €** | 38.0 % | **33.0 %** | 16.00 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 15.50 € | **14.90 €** | 30.9 % | **25.8 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.50 € | **11.90 €** | 42.7 % | **35.9 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 16.50 € | **15.90 €** | 43.2 % | **38.0 %** | 16.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **13.90 €** | 47.4 % | **41.3 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 13.50 € | **12.90 €** | 56.1 % | **49.2 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 10.50 € | **9.90 €** | 38.4 % | **30.5 %** | 10.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.50 € | **9.90 €** | 35.3 % | **27.6 %** | 10.00 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 14.50 € | **13.90 €** | 18.6 % | **13.7 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 11.50 € | **10.90 €** | 45.9 % | **38.2 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 10.50 € | **9.90 €** | 47.4 % | **39.0 %** | 10.00 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 15.50 € | **14.90 €** | 47.4 % | **41.7 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED vianočné dekorácie, zasnežená krajina s ... | 7.10 € | **6.50 €** | 55.2 % | **42.1 %** | 6.60 € | stávame sa najlacnejší |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 14.50 € | **13.90 €** | 45.0 % | **39.0 %** | 14.00 € | stávame sa najlacnejší |
| Solight sada LED sviečok z prírodného vosku, 3ks, AAA | 12.50 € | **11.90 €** | 43.7 % | **36.8 %** | 12.00 € | stávame sa najlacnejší |
| Solight digitálny týždenný časový spínač, 16 režimov... | 8.60 € | **8.00 €** | 45.1 % | **34.9 %** | 8.10 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.50 € | **15.90 €** | 35.4 % | **30.4 %** | 16.00 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.50 € | **9.90 €** | 41.3 % | **33.3 %** | 10.00 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, plast, 2 zásuvky, hran... | 12.50 € | **11.90 €** | 36.6 % | **30.0 %** | 12.00 € | stávame sa najlacnejší |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.50 € | **9.90 €** | 33.0 % | **25.4 %** | 10.00 € | stávame sa najlacnejší |
| Solight spodný kĺbový nadstavec pre Dyson V7, V8, V1... | 13.50 € | **12.90 €** | 33.2 % | **27.3 %** | 13.00 € | stávame sa najlacnejší |
| Solight cestovný adaptér s USB do Spojených štátov, ... | 10.50 € | **9.90 €** | 31.3 % | **23.8 %** | 10.00 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 16.50 € | **15.90 €** | 10.0 % | **6.0 %** | 16.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.50 € | **13.90 €** | 45.2 % | **39.2 %** | 14.00 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 16.50 € | **15.90 €** | 9.2 % | **5.2 %** | 16.00 € | stávame sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 16.50 € | **15.90 €** | 9.2 % | **5.3 %** | 16.00 € | stávame sa najlacnejší |
| Herné reproduktory Onikuma L2 | 12.50 € | **11.90 €** | 16.4 % | **10.8 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 2A, 24W, IP20 | 10.00 € | **9.40 €** | 50.8 % | **41.8 %** | 9.50 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 8.60 € | **8.00 €** | 53.7 % | **42.9 %** | 8.10 € | stávame sa najlacnejší |
| AMIKO 9265+ DVB-S2/T2/C kombo přijímač 4K | 70.50 € | **69.90 €** | 6.0 % | **5.1 %** | 63.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash F1 (biela) + 6 ventiláto... | 116.50 € | **115.90 €** | 15.0 % | **14.4 %** | 115.93 € | stávame sa najlacnejší |
| KRUPS KP143GF0 Nescafé Dolce Gusto Mini | 100.50 € | **99.90 €** | 10.1 % | **9.4 %** | 99.99 € | stávame sa najlacnejší |
| IMOU S800 PRO palubná kamera, 4K | 99.50 € | **98.90 €** | 6.3 % | **5.6 %** | 99.00 € | stávame sa najlacnejší |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 71.50 € | **70.90 €** | 39.3 % | **38.2 %** | 71.00 € | stávame sa najlacnejší |
| Solight laserová vodováha 12 línií, 360 °, zelený laser | 141.50 € | **140.90 €** | 38.5 % | **37.9 %** | 141.00 € | stávame sa najlacnejší |
| Solight high bay, 100W, 14000lm, 120°, Philips, MW, ... | 85.50 € | **84.90 €** | 20.2 % | **19.3 %** | 85.00 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (biela) | 83.50 € | **82.90 €** | 11.9 % | **11.1 %** | 83.00 € | stávame sa najlacnejší |
| Ovládacia páka lietadla MOZA RACING MHG | 109.50 € | **108.90 €** | 12.8 % | **12.2 %** | 109.00 € | stávame sa najlacnejší |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 8.30 € | **7.80 €** | 55.5 % | **46.1 %** | 7.90 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim | 29.00 € | **28.50 €** | 8.6 % | **6.7 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PG-545BK Black | 17.00 € | **16.50 €** | 10.6 % | **7.3 %** | 15.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB01N 75 cm modrý | 13.50 € | **13.00 €** | 9.5 % | **5.5 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní gymnastický míč HMS YB03N 65 cm šedý | 13.50 € | **13.00 €** | 9.5 % | **5.5 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530BT Beige | 39.00 € | **38.50 €** | 7.0 % | **5.6 %** | 37.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530BT Blue | 39.00 € | **38.50 €** | 7.0 % | **5.6 %** | 37.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530BT White | 39.00 € | **38.50 €** | 7.0 % | **5.6 %** | 37.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Aromo 0064 90000 bílý | 14.00 € | **13.50 €** | 10.1 % | **6.1 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Hyper PETG Creality (zelený) | 11.00 € | **10.50 €** | 12.8 % | **7.6 %** | 10.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal ZP2M04E0 | 23.00 € | **22.50 €** | 9.5 % | **7.2 %** | 22.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Grip White | 76.00 € | **75.50 €** | 6.1 % | **5.4 %** | 75.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED pouzdro pro SG S26+ FIXOP3-1705-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED 2 skla SG A57 5G FIXGFADA-1703-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED Sklo apl. SG S26+ FIXGFADA-1705-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 4.00 € | **3.50 €** | 53.4 % | **34.2 %** | 3.51 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.50 € | **13.00 €** | 13.2 % | **9.0 %** | 13.04 € | stávame sa najlacnejší |
| Beper Bt602-H Vaflovač 780W | 24.50 € | **24.00 €** | 11.5 % | **9.2 %** | 24.04 € | stávame sa najlacnejší |
| Solight LED svetielko s diaľkovým ovládaním, 5 LED, ... | 6.70 € | **6.20 €** | 55.2 % | **43.6 %** | 6.26 € | stávame sa najlacnejší |
| Filament PLA ELEGOO (Szary) | 10.50 € | **10.00 €** | 13.2 % | **7.8 %** | 10.06 € | stávame sa najlacnejší |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 6.10 € | **5.60 €** | 54.5 % | **41.8 %** | 5.67 € | stávame sa najlacnejší |
| Beper Bp101-H Elektrický Citrusovač | 19.50 € | **19.00 €** | 12.4 % | **9.6 %** | 19.08 € | stávame sa najlacnejší |
| Solight skúšačka, 6V - 380V AC/DC, LED diódy | 5.30 € | **4.80 €** | 47.1 % | **33.2 %** | 4.90 € | stávame sa najlacnejší |
| Solight LED svetelný pás so svetelným a pohybovým se... | 6.20 € | **5.70 €** | 46.1 % | **34.3 %** | 5.80 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.10 € | **4.60 €** | 18.1 % | **6.5 %** | 4.70 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 10.00 € | **9.50 €** | 38.3 % | **31.4 %** | 9.60 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, pletená, 35x LE... | 6.10 € | **5.60 €** | 54.5 % | **41.8 %** | 5.70 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.20 € | **5.70 €** | 53.7 % | **41.3 %** | 5.80 € | stávame sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 9.50 € | **9.00 €** | 45.7 % | **38.1 %** | 9.10 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 7.70 € | **7.20 €** | 53.4 % | **43.5 %** | 7.30 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10A, biely-sivý | 3.30 € | **2.80 €** | 39.7 % | **18.6 %** | 2.90 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka, IP44, čierna | 4.60 € | **4.10 €** | 49.0 % | **32.8 %** | 4.20 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 6.50 € | **6.00 €** | 45.2 % | **34.0 %** | 6.10 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.80 € | **3.30 €** | 48.5 % | **29.0 %** | 3.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 5.40 € | **4.90 €** | 47.3 % | **33.7 %** | 5.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 4.30 € | **3.80 €** | 46.9 % | **29.8 %** | 3.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 4.60 € | **4.10 €** | 49.0 % | **32.8 %** | 4.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 4.60 € | **4.10 €** | 48.4 % | **32.3 %** | 4.20 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.50 € | **2.00 €** | 56.3 % | **25.1 %** | 2.10 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka Fast, IP68, 5-9mm, ... | 4.20 € | **3.70 €** | 55.9 % | **37.4 %** | 3.80 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **3.00 €** | 53.0 % | **31.1 %** | 3.10 € | stávame sa najlacnejší |
| Ariete Ice Machine 651 | 99.50 € | **99.00 €** | 10.4 % | **9.8 %** | 99.13 € | stávame sa najlacnejší |
| Dvojkanálový nástenný spínač SONOFF MINI-2GS-E Matter. | 22.00 € | **21.50 €** | 14.7 % | **12.1 %** | 21.63 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **11.00 €** | 49.6 % | **43.1 %** | 11.15 € | stávame sa najlacnejší |
| Domo DO 264 AP | 59.00 € | **58.50 €** | 10.1 % | **9.1 %** | 58.67 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 143.50 € | **143.00 €** | 8.1 % | **7.7 %** | 143.17 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 12.50 € | **12.00 €** | 16.7 % | **12.0 %** | 12.19 € | stávame sa najlacnejší |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 16.50 € | **16.00 €** | 25.4 % | **21.6 %** | 16.25 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 15.50 € | **15.00 €** | 47.4 % | **42.6 %** | 15.25 € | stávame sa najlacnejší |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 45.50 € | **45.00 €** | 8.5 % | **7.4 %** | 45.25 € | stávame sa najlacnejší |
| Maxxo HiFi Tuner TR05 | 138.50 € | **138.00 €** | 10.3 % | **9.9 %** | 138.25 € | stávame sa najlacnejší |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.50 € | **18.00 €** | 10.0 % | **7.1 %** | 18.25 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 17.50 € | **17.00 €** | 43.6 % | **39.5 %** | 17.28 € | stávame sa najlacnejší |
| Resto 90504 French press 800ml | 13.50 € | **13.00 €** | 13.7 % | **9.5 %** | 13.29 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.50 € | **65.00 €** | 9.5 % | **8.7 %** | 65.29 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.50 € | **12.00 €** | 16.5 % | **11.9 %** | 12.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (sivý) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 86.00 € | **85.50 €** | 8.4 % | **7.8 %** | 85.79 € | stávame sa najlacnejší |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **22.00 €** | 12.0 % | **9.5 %** | 22.30 € | stávame sa najlacnejší |
| ETA Presto 2094 90000, bílý | 94.00 € | **93.50 €** | 6.3 % | **5.7 %** | 93.80 € | stávame sa najlacnejší |
| Rowenta RH1239WO | 161.50 € | **161.00 €** | 9.0 % | **8.7 %** | 161.30 € | stávame sa najlacnejší |
| Strong SRT84 Terestriální HDMI přijímač | 28.50 € | **28.00 €** | 11.1 % | **9.1 %** | 28.30 € | stávame sa najlacnejší |
| Gorenje BMX201M2BG | 171.50 € | **171.00 €** | 9.3 % | **9.0 %** | 171.30 € | stávame sa najlacnejší |
| AMICA MV 447 ADW | 413.50 € | **413.00 €** | 7.1 % | **7.0 %** | 413.30 € | stávame sa najlacnejší |
| Concept ETV8360bcN | 526.50 € | **526.00 €** | 7.1 % | **7.0 %** | 526.30 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 22.50 € | **22.00 €** | 11.2 % | **8.7 %** | 22.32 € | stávame sa najlacnejší |
| Elektrický masážny prístroj na tvár Guasha ANLAN 02-... | 35.50 € | **35.00 €** | 15.5 % | **13.9 %** | 35.33 € | stávame sa najlacnejší |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.50 € | **11.00 €** | 11.7 % | **6.8 %** | 11.33 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 22.50 € | **22.00 €** | 9.3 % | **6.9 %** | 22.35 € | stávame sa najlacnejší |
| Bravo Eddie B-4821 šedý | 29.50 € | **29.00 €** | 9.7 % | **7.9 %** | 29.38 € | stávame sa najlacnejší |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.50 € | **60.00 €** | 10.0 % | **9.1 %** | 60.38 € | stávame sa najlacnejší |
| Sati Crema 1 kg zrno | 20.50 € | **20.00 €** | 8.3 % | **5.6 %** | 20.38 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.50 € | **18.00 €** | 12.6 % | **9.5 %** | 18.39 € | stávame sa najlacnejší |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 15.50 € | **15.00 €** | 46.0 % | **41.3 %** | 15.39 € | stávame sa najlacnejší |
| Leifheit LinoLift 500 85359 | 55.00 € | **54.50 €** | 9.7 % | **8.7 %** | 54.89 € | stávame sa najlacnejší |
| Leifheit sušák Comfort Tower 420 | 48.00 € | **47.50 €** | 9.3 % | **8.2 %** | 47.89 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 31.00 € | **30.50 €** | 10.0 % | **8.2 %** | 30.89 € | stávame sa najlacnejší |
| DOMO DO42329PC | 115.00 € | **114.50 €** | 7.5 % | **7.1 %** | 114.89 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 86.50 € | **86.00 €** | 10.3 % | **9.7 %** | 86.39 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191T | 67.50 € | **67.00 €** | 7.3 % | **6.5 %** | 67.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 241.50 € | **241.00 €** | 13.1 % | **12.9 %** | 241.39 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 71.50 € | **71.00 €** | 6.4 % | **5.7 %** | 71.39 € | stávame sa najlacnejší |
| CrockPot CSC062X | 158.00 € | **157.50 €** | 7.1 % | **6.8 %** | 157.89 € | stávame sa najlacnejší |
| Laica VT3509 | 12.00 € | **11.50 €** | 10.5 % | **5.9 %** | 11.89 € | stávame sa najlacnejší |
| DOMO DO9286IB | 249.00 € | **248.50 €** | 6.2 % | **6.0 %** | 248.89 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 271.00 € | **270.50 €** | 5.4 % | **5.2 %** | 270.89 € | stávame sa najlacnejší |
| Vákuovačka G21 Onyx | 54.00 € | **53.50 €** | 8.4 % | **7.4 %** | 53.89 € | stávame sa najlacnejší |
| Leifheit Stěrka na okna XL 2v1 (40 cm) s | 16.50 € | **16.00 €** | 10.5 % | **7.2 %** | 16.39 € | stávame sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 1-pack) | 99.00 € | **98.50 €** | 6.9 % | **6.4 %** | 98.89 € | stávame sa najlacnejší |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 15.00 € | **14.50 €** | 10.2 % | **6.5 %** | 14.89 € | stávame sa najlacnejší |
| D-LINK 5-Port Gigabit Switch (DGS-105) | 16.00 € | **15.50 €** | 10.2 % | **6.8 %** | 15.89 € | stávame sa najlacnejší |
| Tesla GSM-LITE zesilovač/opakovač 900/1800 MHz - kom... | 179.00 € | **178.50 €** | 7.9 % | **7.6 %** | 178.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 119.50 € | **119.00 €** | 8.8 % | **8.4 %** | 119.39 € | stávame sa najlacnejší |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.00 € | **35.50 €** | 8.4 % | **6.9 %** | 35.90 € | stávame sa najlacnejší |
| Solight wifi Smart LED svetelný pás, RGB, 5m, sada s... | 28.00 € | **27.50 €** | 42.5 % | **39.9 %** | 27.90 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 13.00 € | **12.50 €** | 38.5 % | **33.2 %** | 12.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **13.50 €** | 29.0 % | **24.4 %** | 13.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 21.00 € | **20.50 €** | 38.4 % | **35.1 %** | 20.90 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 24.00 € | **23.50 €** | 29.6 % | **26.9 %** | 23.90 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 22.00 € | **21.50 €** | 35.3 % | **32.2 %** | 21.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 35.00 € | **34.50 €** | 34.4 % | **32.5 %** | 34.90 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 24.00 € | **23.50 €** | 42.0 % | **39.1 %** | 23.90 € | stávame sa najlacnejší |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 21.00 € | **20.50 €** | 43.1 % | **39.7 %** | 20.90 € | stávame sa najlacnejší |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 12.00 € | **11.50 €** | 38.8 % | **33.0 %** | 11.90 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 13.00 € | **12.50 €** | 41.9 % | **36.4 %** | 12.90 € | stávame sa najlacnejší |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 17.00 € | **16.50 €** | 45.3 % | **41.1 %** | 16.90 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 12.00 € | **11.50 €** | 38.0 % | **32.2 %** | 11.90 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 15.00 € | **14.50 €** | 42.6 % | **37.9 %** | 14.90 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 318.00 € | **317.50 €** | 12.1 % | **11.9 %** | 317.90 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 660.00 € | **659.50 €** | 10.7 % | **10.6 %** | 659.90 € | stávame sa najlacnejší |
| Solight detektor dymu s WIFI pripojením | 17.00 € | **16.50 €** | 29.8 % | **26.0 %** | 16.90 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 12.00 € | **11.50 €** | 41.0 % | **35.1 %** | 11.90 € | stávame sa najlacnejší |
| Solight LED solárne stĺpikové osvetlenie Palermo, 5W... | 30.00 € | **29.50 €** | 35.3 % | **33.0 %** | 29.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, sivé, 20W, 1... | 12.00 € | **11.50 €** | 14.0 % | **9.2 %** | 11.90 € | stávame sa najlacnejší |
| Solight LED vonkajší stĺpik Ragusa 500, 7W, 450lm, 3... | 23.00 € | **22.50 €** | 8.8 % | **6.5 %** | 22.90 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.00 € | **25.50 €** | 34.4 % | **31.8 %** | 25.90 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 25.00 € | **24.50 €** | 29.2 % | **26.6 %** | 24.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **47.50 €** | 54.5 % | **52.9 %** | 47.90 € | stávame sa najlacnejší |
| Tefal OptiGrill GC7P0810 | 98.00 € | **97.50 €** | 8.4 % | **7.8 %** | 97.90 € | stávame sa najlacnejší |
| Tefal FW402HE0 | 129.00 € | **128.50 €** | 8.3 % | **7.9 %** | 128.90 € | stávame sa najlacnejší |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 11.00 € | **10.50 €** | 31.9 % | **25.9 %** | 10.90 € | stávame sa najlacnejší |
| Solight štrbinová hubica pre Dyson V7, V8, V10, V11,... | 11.00 € | **10.50 €** | 31.9 % | **25.9 %** | 10.90 € | stávame sa najlacnejší |
| ETA 410090000 | 331.50 € | **331.00 €** | 7.0 % | **6.8 %** | 331.40 € | stávame sa najlacnejší |
| Pedrini Infinity červená 6 porcí | 36.00 € | **35.50 €** | 9.7 % | **8.2 %** | 35.90 € | stávame sa najlacnejší |
| Guzzanti GZ 137 | 33.00 € | **32.50 €** | 9.5 % | **7.8 %** | 32.90 € | stávame sa najlacnejší |
| Domo DO7059S | 36.00 € | **35.50 €** | 8.5 % | **7.0 %** | 35.90 € | stávame sa najlacnejší |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 29.00 € | **28.50 €** | 18.7 % | **16.6 %** | 28.90 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 24.00 € | **23.50 €** | 8.2 % | **6.0 %** | 23.90 € | stávame sa najlacnejší |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.00 € | **60.50 €** | 18.9 % | **17.9 %** | 60.90 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (čierny) | 176.00 € | **175.50 €** | 10.8 % | **10.5 %** | 175.90 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 13.00 € | **12.50 €** | 20.2 % | **15.6 %** | 12.90 € | stávame sa najlacnejší |
| HP 15-fd0324nc (D42VYEA) | 674.00 € | **673.50 €** | 6.9 % | **6.8 %** | 673.90 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0304ncx (D9MH3EA) | 904.00 € | **903.50 €** | 6.9 % | **6.8 %** | 903.90 € | stávame sa najlacnejší |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 81.00 € | **80.50 €** | 8.5 % | **7.8 %** | 80.90 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.00 € | **20.50 €** | 12.4 % | **9.7 %** | 20.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.00 € | **22.50 €** | 14.0 % | **11.5 %** | 22.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 26.00 € | **25.50 €** | 30.3 % | **27.8 %** | 25.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 45.00 € | **44.50 €** | 20.7 % | **19.4 %** | 44.90 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 15.00 € | **14.50 €** | 55.4 % | **50.2 %** | 14.90 € | stávame sa najlacnejší |
| SONY WFC510L modrá | 38.50 € | **38.00 €** | 13.6 % | **12.1 %** | 38.40 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 14.00 € | **13.50 €** | 15.4 % | **11.3 %** | 13.90 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 17.00 € | **16.50 €** | 16.3 % | **12.9 %** | 16.90 € | stávame sa najlacnejší |
| Solight WIFI zásuvka s meraním spotreby | 12.00 € | **11.50 €** | 36.6 % | **30.9 %** | 11.90 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 20.00 € | **19.50 €** | 37.9 % | **34.5 %** | 19.90 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 105.50 € | **105.00 €** | 10.1 % | **9.6 %** | 105.40 € | stávame sa najlacnejší |
| Beko BDIN38646D | 496.00 € | **495.50 €** | 7.0 % | **6.9 %** | 495.90 € | stávame sa najlacnejší |
| Fagor 4LVF-638ADIT | 470.00 € | **469.50 €** | 6.9 % | **6.8 %** | 469.90 € | stávame sa najlacnejší |
| AMICA DI 6401 PSB | 179.00 € | **178.50 €** | 9.0 % | **8.7 %** | 178.90 € | stávame sa najlacnejší |
| Guzzanti GZ 1836A | 259.00 € | **258.50 €** | 7.2 % | **7.0 %** | 258.90 € | stávame sa najlacnejší |
| Blender G21 Comfort Graphite Black | 151.50 € | **151.00 €** | 12.7 % | **12.3 %** | 151.41 € | stávame sa najlacnejší |
| Electrolux EF167 | 14.50 € | **14.00 €** | 12.3 % | **8.4 %** | 14.42 € | stávame sa najlacnejší |
| Resto 90502 French press Atria 800 ml | 11.50 € | **11.00 €** | 12.9 % | **8.0 %** | 11.42 € | stávame sa najlacnejší |
| G3Ferrari G1022300 | 136.50 € | **136.00 €** | 10.2 % | **9.8 %** | 136.42 € | stávame sa najlacnejší |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 17.50 € | **17.00 €** | 11.2 % | **8.1 %** | 17.42 € | stávame sa najlacnejší |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 114.50 € | **114.00 €** | 12.3 % | **11.8 %** | 114.42 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 10.50 € | **10.00 €** | 45.9 % | **39.0 %** | 10.43 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 36.50 € | **36.00 €** | 34.6 % | **32.8 %** | 36.44 € | stávame sa najlacnejší |
| YAMAHA YWA-10 BL | 57.50 € | **57.00 €** | 12.5 % | **11.5 %** | 57.44 € | stávame sa najlacnejší |
| DOMO DO9283EK | 18.50 € | **18.00 €** | 12.7 % | **9.7 %** | 18.46 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 33.50 € | **33.00 €** | 33.4 % | **31.5 %** | 33.48 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.50 € | **19.00 €** | 38.3 % | **34.8 %** | 19.48 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Classic Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.49 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Eccentric Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.49 € | stávame sa najlacnejší |
| Leifheit Stěrka XL40 cm s teles.tyčí | 25.50 € | **25.00 €** | 11.5 % | **9.3 %** | 25.49 € | stávame sa najlacnejší |
| Mio Smartbox IV | 31.50 € | **31.00 €** | 10.1 % | **8.3 %** | 31.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.50 € | **28.00 €** | 16.0 % | **14.0 %** | 28.49 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 131.90 € | **131.50 €** | 5.4 % | **5.1 %** | 131.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.90 € | **64.50 €** | 6.1 % | **5.5 %** | 64.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 75.90 € | **75.50 €** | 8.6 % | **8.0 %** | 75.59 € | stávame sa najlacnejší |
| G3Ferrari G1022600 | 120.90 € | **120.50 €** | 10.2 % | **9.8 %** | 120.70 € | stávame sa najlacnejší |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.90 € | **110.50 €** | 10.2 % | **9.8 %** | 110.70 € | stávame sa najlacnejší |
| TESLA EliteCook K70 Ultra | 147.90 € | **147.50 €** | 10.2 % | **9.9 %** | 147.79 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 141.90 € | **141.50 €** | 9.4 % | **9.1 %** | 141.79 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 207.90 € | **207.50 €** | 11.6 % | **11.4 %** | 207.79 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 64.90 € | **64.50 €** | 7.6 % | **7.0 %** | 64.79 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 108.90 € | **108.50 €** | 6.6 % | **6.2 %** | 108.79 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 240.90 € | **240.50 €** | 8.7 % | **8.5 %** | 240.79 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0033 FUN WHEELS LIGHT ... | 110.90 € | **110.50 €** | 14.5 % | **14.1 %** | 110.79 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0034 FUN WHEELS LIGHT ... | 110.90 € | **110.50 €** | 14.5 % | **14.1 %** | 110.79 € | stávame sa najlacnejší |
| Rowenta RO6164EA | 142.90 € | **142.50 €** | 8.7 % | **8.4 %** | 142.80 € | stávame sa najlacnejší |
| G3Ferrari G10152 horkovzdušná trouba | 146.90 € | **146.50 €** | 9.1 % | **8.8 %** | 146.80 € | stávame sa najlacnejší |
| Girmi FG9201 | 116.90 € | **116.50 €** | 10.1 % | **9.7 %** | 116.82 € | stávame sa najlacnejší |
| Girmi FG4101 | 139.90 € | **139.50 €** | 10.1 % | **9.7 %** | 139.83 € | stávame sa najlacnejší |
| GUZZANTI GZ 101 | 157.90 € | **157.50 €** | 7.9 % | **7.6 %** | 157.88 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 233.90 € | **233.50 €** | 9.5 % | **9.4 %** | 233.88 € | stávame sa najlacnejší |
| Nescafé Dolce Gusto Latte Macchiato 30ca | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 4.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR009001 | 10.90 € | **10.50 €** | 12.3 % | **8.2 %** | 6.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U Nano WiFi Adaptér | 10.90 € | **10.50 €** | 11.3 % | **7.2 %** | 8.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U Plus WiFi Adaptér | 14.90 € | **14.50 €** | 11.0 % | **8.1 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto ESPRESSO 30 cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CAFE AU LAIT 30Cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NESCAFÉ® DG Flat White kapsle 30 ks | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI držák do auta s Magsafe AMS06BK | 15.90 € | **15.50 €** | 11.0 % | **8.2 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo TopSound černý | 12.90 € | **12.50 €** | 10.1 % | **6.6 %** | 10.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON GI-41 BK Black | 10.90 € | **10.50 €** | 13.9 % | **9.7 %** | 8.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdr XRN14P5G/PX7 FIXOP3-1432-BK | 11.90 € | **11.50 €** | 10.1 % | **6.4 %** | 10.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CAPPUCCINO 30 cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 9.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní gymnastický míč HMS YB03N 75 cm černý | 14.90 € | **14.50 €** | 8.5 % | **5.6 %** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Razer Goliathus Mobile Stealth Ed. | 10.90 € | **10.50 €** | 13.2 % | **9.0 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.90 € | **15.50 €** | 10.1 % | **7.3 %** | 15.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI CN GaN 33W, USB-C+USB, bílá CHPD0020 | 13.90 € | **13.50 €** | 10.5 % | **7.3 %** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Marvo HG8928 sluchátka s mikrofonem | 12.90 € | **12.50 €** | 12.8 % | **9.3 %** | 12.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ali pouzdro Mag-Skin iP17 ProMax PAS0029 | 14.90 € | **14.50 €** | 11.3 % | **8.4 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá TWS QCY MeloBuds HT16 (čierne) | 14.90 € | **14.50 €** | 9.5 % | **6.6 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 5.00 € | **4.60 €** | 56.3 % | **43.8 %** | 4.64 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 8.30 € | **7.90 €** | 47.7 % | **40.5 %** | 8.00 € | stávame sa najlacnejší |
| Solight LED vianočná gula sklenená, 10LED, 2x AA, IP20 | 4.70 € | **4.30 €** | 52.8 % | **39.8 %** | 4.40 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 4.50 € | **4.10 €** | 53.7 % | **40.1 %** | 4.20 € | stávame sa najlacnejší |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 9.10 € | **8.70 €** | 42.3 % | **36.0 %** | 8.80 € | stávame sa najlacnejší |
| Superior FREEDOM 4v1 USB | 11.90 € | **11.50 €** | 13.8 % | **10.0 %** | 11.71 € | stávame sa najlacnejší |
| CL držák vent. horiz., černý HANDYDRIVEK | 10.90 € | **10.50 €** | 11.9 % | **7.8 %** | 10.71 € | stávame sa najlacnejší |
| Sati Ethiopia Moka Sidamo 500 g zrno | 11.90 € | **11.50 €** | 9.1 % | **5.4 %** | 11.75 € | stávame sa najlacnejší |
| Leifheit Perfect Steam Air Board S/M | 14.90 € | **14.50 €** | 11.6 % | **8.7 %** | 14.79 € | stávame sa najlacnejší |
| Maxxo vodní filtry 3+1 | 11.90 € | **11.50 €** | 11.2 % | **7.5 %** | 11.79 € | stávame sa najlacnejší |
| ETA 713240002 | 11.90 € | **11.50 €** | 12.9 % | **9.1 %** | 11.79 € | stávame sa najlacnejší |
| Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps | 13.90 € | **13.50 €** | 16.5 % | **13.2 %** | 13.79 € | stávame sa najlacnejší |
| Solight multimeter digitálny V33 | 11.90 € | **11.50 €** | 20.5 % | **16.4 %** | 11.84 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Potenza, 2... | 11.90 € | **11.50 €** | 38.6 % | **33.9 %** | 11.86 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.90 € | **12.50 €** | 38.5 % | **34.2 %** | 12.87 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.90 € | **12.50 €** | 38.5 % | **34.2 %** | 12.87 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.90 € | **14.50 €** | 21.6 % | **18.4 %** | 14.87 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.90 € | **10.50 €** | 46.2 % | **40.9 %** | 10.87 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.60 € | **1.20 €** | 44.5 % | **8.4 %** | 1.30 € | stávame sa najlacnejší |
| Solight SCART kábel, SCART konektor - SCART konektor... | 2.10 € | **1.70 €** | 52.4 % | **23.4 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.40 € | **2.00 €** | 56.1 % | **30.1 %** | 2.10 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 250mm, natura... | 2.00 € | **1.60 €** | 56.3 % | **25.1 %** | 1.70 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, vypí... | 3.30 € | **2.90 €** | 49.9 % | **31.7 %** | 3.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 2m | 3.00 € | **2.60 €** | 49.6 % | **29.7 %** | 2.70 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek | 2.80 € | **2.40 €** | 48.8 % | **27.5 %** | 2.50 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **1.90 €** | 52.0 % | **25.6 %** | 2.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 1 zásuvka, 16A/3680W,... | 6.10 € | **5.70 €** | 55.0 % | **44.8 %** | 5.72 € | stávame sa najlacnejší |
| Solight LED kovový vianočný stromček, 2x AA | 4.80 € | **4.40 €** | 54.9 % | **42.0 %** | 4.49 € | stávame sa najlacnejší |
| Krüger&Matz HL-CP03 bezdrátový adaptér CarPlay - And... | 21.90 € | **21.50 €** | 8.0 % | **6.0 %** | 21.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT202BT Inteligentný svorkový multimeter | 37.90 € | **37.50 €** | 7.0 % | **5.8 %** | 37.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 16.90 € | **16.50 €** | 8.1 % | **5.5 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 22.90 € | **22.50 €** | 8.0 % | **6.1 %** | 22.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.90 € | **22.50 €** | 13.7 % | **11.7 %** | 22.59 € | stávame sa najlacnejší |
| Bravo Kery B-4660 400W bílý | 35.90 € | **35.50 €** | 10.7 % | **9.5 %** | 35.63 € | stávame sa najlacnejší |
| Rapoo E9270p bezdrátová klávesnice černá | 37.90 € | **37.50 €** | 10.4 % | **9.3 %** | 37.63 € | stávame sa najlacnejší |
| Uni-T UT201R digitálny klešťový multimeter | 22.90 € | **22.50 €** | 16.0 % | **14.0 %** | 22.69 € | stávame sa najlacnejší |
| Zelmer ZHM2459S | 39.90 € | **39.50 €** | 15.2 % | **14.0 %** | 39.70 € | stávame sa najlacnejší |
| Leifheit Combi Clean M + náhr. Static | 21.90 € | **21.50 €** | 14.9 % | **12.8 %** | 21.71 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 29.90 € | **29.50 €** | 47.1 % | **45.2 %** | 29.72 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan biely lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.75 € | stávame sa najlacnejší |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 20.90 € | **20.50 €** | 15.0 % | **12.8 %** | 20.75 € | stávame sa najlacnejší |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 17.90 € | **17.50 €** | 13.3 % | **10.7 %** | 17.75 € | stávame sa najlacnejší |
| Electrolux E200SM | 17.90 € | **17.50 €** | 21.0 % | **18.3 %** | 17.76 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm tmavé drevo 500 ml | 22.90 € | **22.50 €** | 13.7 % | **11.7 %** | 22.79 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan bílé dřevo 350ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.79 € | stávame sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-9   9 kg (150x20... | 31.90 € | **31.50 €** | 6.3 % | **5.0 %** | 31.79 € | stávame sa najlacnejší |
| Leifheit Classic Siena 180 Easy | 26.90 € | **26.50 €** | 11.2 % | **9.5 %** | 26.79 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 16.90 € | **16.50 €** | 24.5 % | **21.5 %** | 16.79 € | stávame sa najlacnejší |
| Beper BEP-BC261 | 31.90 € | **31.50 €** | 7.5 % | **6.1 %** | 31.79 € | stávame sa najlacnejší |
| Russell Hobbs 24010-56 | 40.90 € | **40.50 €** | 10.5 % | **9.5 %** | 40.79 € | stávame sa najlacnejší |
| Gorenje SIH1800BLT | 19.90 € | **19.50 €** | 14.8 % | **12.5 %** | 19.79 € | stávame sa najlacnejší |
| ALI MiTag set 3ks Google Find My APD006 | 37.90 € | **37.50 €** | 10.7 % | **9.5 %** | 37.79 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.90 € | **25.50 €** | 21.4 % | **19.5 %** | 25.79 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **31.50 €** | 16.5 % | **15.0 %** | 31.80 € | stávame sa najlacnejší |
| Gorenje MVC72HGA | 29.90 € | **29.50 €** | 10.1 % | **8.6 %** | 29.80 € | stávame sa najlacnejší |
| Bezkontaktný laserový teplomer Habotest HT650B | 17.90 € | **17.50 €** | 15.2 % | **12.6 %** | 17.83 € | stávame sa najlacnejší |
| Ufesa Rouge BP3443 | 31.90 € | **31.50 €** | 9.3 % | **8.0 %** | 31.83 € | stávame sa najlacnejší |
| Sati Espresso Intenso 1 kg zrno | 17.90 € | **17.50 €** | 7.8 % | **5.3 %** | 17.88 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, šedá s rukoväťou | 18.90 € | **18.50 €** | 17.6 % | **15.1 %** | 18.89 € | stávame sa najlacnejší |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 55.90 € | **55.50 €** | 7.8 % | **7.0 %** | 55.89 € | stávame sa najlacnejší |
| Gorenje NRK6182PS4 | 334.90 € | **334.50 €** | 7.1 % | **7.0 %** | 334.70 € | stávame sa najlacnejší |
| Amica MI 446 TBIM | 528.90 € | **528.50 €** | 6.1 % | **6.0 %** | 528.70 € | stávame sa najlacnejší |
| Johansson 6700 Revolution programovatelný zesilovač | 270.90 € | **270.50 €** | 6.7 % | **6.5 %** | 270.79 € | stávame sa najlacnejší |
| Whirlpool WOI118PT2SSMA | 767.90 € | **767.50 €** | 6.0 % | **6.0 %** | 767.80 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.40 € | **5.10 €** | 45.4 % | **37.3 %** | 5.20 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.90 € | **5.60 €** | 45.4 % | **38.0 %** | 5.70 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 10.00 € | **9.70 €** | 26.8 % | **23.0 %** | 9.80 € | stávame sa najlacnejší |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x ... | 3.10 € | **2.80 €** | 52.7 % | **38.0 %** | 2.90 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.20 € | **2.90 €** | 53.9 % | **39.5 %** | 3.00 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.30 € | **1.00 €** | 60.1 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight prepojovací konektor flexibilný pre COB LED ... | 2.00 € | **1.70 €** | 52.0 % | **29.2 %** | 1.80 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.70 €** | 57.9 % | **34.2 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.80 €** | 56.6 % | **34.3 %** | 1.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.30 € | **1.00 €** | 46.8 % | **12.9 %** | 1.10 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 4000K, 720lm | 1.30 € | **1.00 €** | 46.8 % | **12.9 %** | 1.10 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 2,5 x 200mm, natura... | 1.10 € | **0.80 €** | 59.7 % | **16.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 200mm, čierna... | 1.50 € | **1.20 €** | 52.4 % | **22.0 %** | 1.30 € | stávame sa najlacnejší |
| Solight vypínač šnúrový, jednopólový priechodný, čierny | 1.10 € | **0.80 €** | 54.2 % | **12.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, biela | 2.10 € | **1.80 €** | 49.8 % | **28.4 %** | 1.90 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky | 2.00 € | **1.70 €** | 40.2 % | **19.1 %** | 1.80 € | stávame sa najlacnejší |
| Solight zástrčka priama s úchytom, IP20, biela | 1.30 € | **1.00 €** | 46.8 % | **12.9 %** | 1.10 € | stávame sa najlacnejší |
| Solight zásuvka, 16A, biela, vypínač | 2.00 € | **1.70 €** | 49.2 % | **26.8 %** | 1.80 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.60 € | **1.30 €** | 51.3 % | **22.9 %** | 1.40 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 150mm, čierna... | 1.20 € | **0.90 €** | 54.9 % | **16.1 %** | 1.00 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 3.30 € | **3.00 €** | 49.1 % | **35.5 %** | 3.03 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.90 € | **2.60 €** | 50.2 % | **34.6 %** | 2.64 € | stávame sa najlacnejší |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.20 € | **4.90 €** | 46.3 % | **37.8 %** | 5.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.50 € | **7.20 €** | 38.3 % | **32.7 %** | 7.30 € | stávame sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.40 € | **2.10 €** | 57.4 % | **37.7 %** | 2.20 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.40 € | **2.10 €** | 46.7 % | **28.4 %** | 2.20 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, biely | 2.80 € | **2.50 €** | 45.9 % | **30.3 %** | 2.60 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, čierny | 2.80 € | **2.50 €** | 45.9 % | **30.3 %** | 2.60 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.90 € | **1.60 €** | 36.7 % | **15.1 %** | 1.70 € | stávame sa najlacnejší |
| Solight zástrčka gumová do vlhka a prachu, priama, I... | 2.30 € | **2.00 €** | 47.2 % | **28.0 %** | 2.10 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.80 € | **4.50 €** | 13.8 % | **6.7 %** | 4.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.30 € | **5.00 €** | 38.1 % | **30.3 %** | 5.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.60 € | **7.30 €** | 37.0 % | **31.6 %** | 7.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **6.80 €** | 36.1 % | **30.4 %** | 6.90 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 6 striedavý - schodiskový, b... | 3.00 € | **2.70 €** | 41.0 % | **26.9 %** | 2.80 € | stávame sa najlacnejší |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.60 € | **9.30 €** | 54.6 % | **49.7 %** | 9.40 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 9.70 € | **9.40 €** | 22.5 % | **18.7 %** | 9.50 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.80 € | **9.60 €** | 33.9 % | **31.2 %** | 9.61 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 4ks, 6,5cm, ba... | 9.80 € | **9.60 €** | 50.3 % | **47.3 %** | 9.70 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 8.90 € | **8.70 €** | 45.9 % | **42.6 %** | 8.80 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 8.80 € | **8.60 €** | 44.2 % | **41.0 %** | 8.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.90 € | **8.70 €** | 33.3 % | **30.3 %** | 8.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.30 € | **4.10 €** | 11.7 % | **6.5 %** | 4.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.60 € | **2.40 €** | 47.8 % | **36.4 %** | 2.41 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely | 2.50 € | **2.30 €** | 47.3 % | **35.5 %** | 2.32 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.90 € | **5.70 €** | 11.0 % | **7.3 %** | 5.80 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.00 € | **7.80 €** | 38.4 % | **34.9 %** | 7.90 € | stávame sa najlacnejší |
| Solight nabíjacie nočné LED svetielko s pohybovým a ... | 8.00 € | **7.80 €** | 44.9 % | **41.2 %** | 7.90 € | stávame sa najlacnejší |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 7.90 € | **7.70 €** | 10.9 % | **8.1 %** | 7.80 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 3.60 € | **3.40 €** | 35.5 % | **28.0 %** | 3.50 € | stávame sa najlacnejší |
| Solight prodlužovací prívodný kábel k vianočným reťa... | 2.20 € | **2.00 €** | 44.2 % | **31.1 %** | 2.10 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 8.00 € | **7.80 €** | 36.6 % | **33.2 %** | 7.90 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.50 € | **2.30 €** | 50.6 % | **38.5 %** | 2.40 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.70 € | **3.50 €** | 46.7 % | **38.8 %** | 3.60 € | stávame sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E2... | 2.50 € | **2.30 €** | 50.6 % | **38.5 %** | 2.40 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 6.20 € | **6.00 €** | 15.1 % | **11.4 %** | 6.10 € | stávame sa najlacnejší |
| Solight PIR senzor pro E27 žiarovku, biely | 6.80 € | **6.60 €** | 44.0 % | **39.7 %** | 6.70 € | stávame sa najlacnejší |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 6.70 € | **6.50 €** | 30.9 % | **27.0 %** | 6.60 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.20 € | **3.00 €** | 35.5 % | **27.0 %** | 3.10 € | stávame sa najlacnejší |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 4.70 € | **4.50 €** | 42.0 % | **36.0 %** | 4.60 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.60 € | **3.40 €** | 52.4 % | **44.0 %** | 3.50 € | stávame sa najlacnejší |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.60 € | **2.40 €** | 36.4 % | **25.9 %** | 2.50 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.60 € | **1.40 €** | 36.9 % | **19.8 %** | 1.50 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.20 € | **3.00 €** | 37.7 % | **29.0 %** | 3.10 € | stávame sa najlacnejší |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.40 € | **5.20 €** | 33.8 % | **28.9 %** | 5.30 € | stávame sa najlacnejší |
| Solight účastnícka zásuvka koncová so SAT, útlm: 3dB | 5.00 € | **4.80 €** | 9.6 % | **5.2 %** | 4.90 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka s viečkom, biela | 6.40 € | **6.20 €** | 36.2 % | **32.0 %** | 6.30 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP40, čierna-oranžová | 3.10 € | **2.90 €** | 34.1 % | **25.4 %** | 3.00 € | stávame sa najlacnejší |
| Solight filter pre Dyson V11, V15 | 6.90 € | **6.70 €** | 29.0 % | **25.2 %** | 6.80 € | stávame sa najlacnejší |
| Solight kefka na čistenie filtra pre Dyson Airwrap | 4.00 € | **3.80 €** | 22.7 % | **16.6 %** | 3.90 € | stávame sa najlacnejší |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 7.00 € | **6.80 €** | 20.8 % | **17.4 %** | 6.90 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.20 € | **7.00 €** | 36.8 % | **33.0 %** | 7.10 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Indie, typ D | 5.50 € | **5.30 €** | 35.1 % | **30.2 %** | 5.40 € | stávame sa najlacnejší |
| Solight fast charger do auta 30W USB-C + A | 4.00 € | **3.80 €** | 42.6 % | **35.5 %** | 3.90 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.30 € | **6.10 €** | 34.8 % | **30.5 %** | 6.20 € | stávame sa najlacnejší |
| Solight USB-C 20W fast charger | 5.50 € | **5.30 €** | 37.2 % | **32.2 %** | 5.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.60 € | **2.40 €** | 32.9 % | **22.7 %** | 2.50 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 2.60 € | **2.40 €** | 18.8 % | **9.6 %** | 2.50 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.50 € | **3.30 €** | 33.6 % | **26.0 %** | 3.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 2.70 € | **2.50 €** | 34.7 % | **24.7 %** | 2.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.70 € | **2.50 €** | 26.9 % | **17.5 %** | 2.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.10 € | **2.90 €** | 16.1 % | **8.7 %** | 3.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.30 € | **4.10 €** | 11.3 % | **6.2 %** | 4.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.80 € | **7.60 €** | 33.8 % | **30.4 %** | 7.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.00 € | **4.80 €** | 36.4 % | **31.0 %** | 4.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.70 € | **4.50 €** | 37.0 % | **31.1 %** | 4.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.30 € | **5.10 €** | 35.9 % | **30.8 %** | 5.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.80 € | **4.60 €** | 16.1 % | **11.3 %** | 4.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.00 € | **5.80 €** | 25.4 % | **21.2 %** | 5.90 € | stávame sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 5.30 € | **5.10 €** | 35.9 % | **30.8 %** | 5.20 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostaniciam TE81, TE8... | 4.20 € | **4.00 €** | 19.4 % | **13.7 %** | 4.10 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.60 € | **3.40 €** | 41.4 % | **33.5 %** | 3.50 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.60 € | **3.40 €** | 35.5 % | **28.0 %** | 3.50 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.20 € | **3.00 €** | 34.1 % | **25.7 %** | 3.10 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.00 € | **3.80 €** | 11.4 % | **5.8 %** | 3.90 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 6.00 € | **5.80 €** | 43.9 % | **39.1 %** | 5.90 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.70 € | **3.50 €** | 45.3 % | **37.5 %** | 3.60 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 4.50 € | **4.30 €** | 37.0 % | **30.9 %** | 4.40 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.60 € | **3.40 €** | 24.5 % | **17.6 %** | 3.50 € | stávame sa najlacnejší |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 6.40 € | **6.20 €** | 39.9 % | **35.5 %** | 6.30 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.10 € | **0.90 €** | 35.5 % | **10.9 %** | 1.00 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 0.90 € | **0.70 €** | 38.1 % | **7.4 %** | 0.80 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 1.00 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 1.00 € | stávame sa najlacnejší |
| Solight izolačná páska, 38mm x 0,13mm x 10m, čierna | 1.10 € | **0.90 €** | 42.0 % | **16.1 %** | 1.00 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.10 € | **0.90 €** | 35.5 % | **10.9 %** | 1.00 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 1.10 € | **0.90 €** | 49.1 % | **22.0 %** | 1.00 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | stávame sa najlacnejší |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.40 € | **1.20 €** | 45.9 % | **25.1 %** | 1.30 € | stávame sa najlacnejší |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm, rozb... | 2.00 € | **1.80 €** | 52.0 % | **36.8 %** | 1.90 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.90 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.50 € | **1.30 €** | 35.5 % | **17.4 %** | 1.40 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 30x mini LED, 3m, 3 x... | 1.90 € | **1.70 €** | 51.4 % | **35.5 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 6000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, sviečka 4W, E14, 3000K, ... | 1.90 € | **1.70 €** | 51.4 % | **35.5 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 3000K, 720lm | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 4000K, 720lm | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 1.30 € | **1.10 €** | 28.9 % | **9.1 %** | 1.20 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, s priebežnou zásuvkou | 1.50 € | **1.30 €** | 27.0 % | **10.1 %** | 1.40 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, IP20, biela | 1.20 € | **1.00 €** | 43.5 % | **19.6 %** | 1.10 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.40 € | **1.20 €** | 40.5 % | **20.4 %** | 1.30 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, uhlová, IP44, čierna | 1.90 € | **1.70 €** | 35.5 % | **21.2 %** | 1.80 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 2,5A, biela | 1.20 € | **1.00 €** | 35.5 % | **12.9 %** | 1.10 € | stávame sa najlacnejší |
| Solight rozbočovač, 5 x 2,5A, biely | 1.80 € | **1.60 €** | 39.4 % | **23.9 %** | 1.70 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.40 € | **1.20 €** | 32.4 % | **13.4 %** | 1.30 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.80 € | **1.60 €** | 33.0 % | **18.3 %** | 1.70 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.00 € | **0.80 €** | 42.6 % | **14.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 1.90 € | **1.70 €** | 33.2 % | **19.1 %** | 1.80 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 2.00 € | **1.80 €** | 40.2 % | **26.2 %** | 1.90 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.90 € | **1.70 €** | 29.8 % | **16.1 %** | 1.80 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 8mm zacvakáv... | 1.20 € | **1.00 €** | 39.4 % | **16.1 %** | 1.10 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 3.80 € | **3.60 €** | 41.1 % | **33.6 %** | 3.70 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.30 € | **2.10 €** | 46.1 % | **33.4 %** | 2.20 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.30 € | **3.10 €** | 46.6 % | **37.7 %** | 3.20 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.30 € | **2.10 €** | 50.8 % | **37.7 %** | 2.20 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.30 € | **2.10 €** | 50.8 % | **37.7 %** | 2.20 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 3.90 € | **3.70 €** | 44.8 % | **37.4 %** | 3.80 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 2,5W, 3000K, 215lm | 2.30 € | **2.10 €** | 50.8 % | **37.7 %** | 2.20 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka IP54, sivá | 3.90 € | **3.70 €** | 22.9 % | **16.6 %** | 3.80 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, matný čierny | 2.40 € | **2.20 €** | 37.4 % | **26.0 %** | 2.30 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.40 € | **3.20 €** | 38.2 % | **30.1 %** | 3.30 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 2.80 € | **2.60 €** | 35.5 % | **25.8 %** | 2.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.90 € | **3.70 €** | 32.7 % | **25.9 %** | 3.80 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE81WIFI | 4.10 € | **3.90 €** | 16.6 % | **10.9 %** | 4.00 € | stávame sa najlacnejší |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 3.90 € | **3.70 €** | 35.5 % | **28.6 %** | 3.80 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 2.80 € | **2.60 €** | 35.5 % | **25.8 %** | 2.70 € | stávame sa najlacnejší |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 5.10 € | **4.90 €** | 44.0 % | **38.3 %** | 5.00 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.60 € | **6.40 €** | 32.5 % | **28.5 %** | 6.50 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 8.10 € | **7.90 €** | 17.0 % | **14.1 %** | 8.00 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, čierna | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, biela | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 9.60 € | **9.40 €** | 10.2 % | **7.9 %** | 9.50 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 6.60 € | **6.40 €** | 44.2 % | **39.9 %** | 6.50 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.60 € | **4.40 €** | 46.1 % | **39.7 %** | 4.50 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 9.00 € | **8.80 €** | 44.6 % | **41.4 %** | 8.90 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 9.60 € | **9.40 €** | 7.8 % | **5.6 %** | 9.50 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 10.00 € | **9.80 €** | 39.0 % | **36.2 %** | 9.90 € | stávame sa najlacnejší |
| Solight teplomer | 9.70 € | **9.50 €** | 38.8 % | **36.0 %** | 9.60 € | stávame sa najlacnejší |
| Solight rozbočka kocka, 3x 16A + USB A+C, biela, vyp... | 9.20 € | **9.00 €** | 36.7 % | **33.8 %** | 9.10 € | stávame sa najlacnejší |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.10 € | **5.90 €** | 34.4 % | **30.0 %** | 6.00 € | stávame sa najlacnejší |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.10 € | **8.90 €** | 38.0 % | **35.0 %** | 9.00 € | stávame sa najlacnejší |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.60 € | **4.40 €** | 38.5 % | **32.5 %** | 4.50 € | stávame sa najlacnejší |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 9.60 € | **9.40 €** | 19.3 % | **16.9 %** | 9.50 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 7.10 € | **6.90 €** | 36.5 % | **32.6 %** | 7.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.60 € | **5.40 €** | 35.1 % | **30.3 %** | 5.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.10 € | **5.90 €** | 35.9 % | **31.4 %** | 6.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.50 € | **8.30 €** | 35.8 % | **32.6 %** | 8.40 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 9.70 € | **9.50 €** | 36.2 % | **33.4 %** | 9.60 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 52.00 € | **51.90 €** | 5.5 % | **5.3 %** | 51.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.00 € | **17.90 €** | 6.7 % | **6.1 %** | 17.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA100 sada pre výmenu vy... | 19.00 € | **18.90 €** | 5.6 % | **5.0 %** | 18.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal BL16GE30 | 56.00 € | **55.90 €** | 5.2 % | **5.1 %** | 55.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Huanuo HNDS8 double monitor mount 13-32" | 52.00 € | **51.90 €** | 5.8 % | **5.6 %** | 51.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne | 28.00 € | **27.90 €** | 6.8 % | **6.4 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 31.00 € | **30.90 €** | 5.9 % | **5.6 %** | 30.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-BP654 | 27.00 € | **26.90 €** | 10.4 % | **10.0 %** | 26.92 € | stávame sa najlacnejší |
| Bravo B-4813 Žehlička SERENA červená | 46.00 € | **45.90 €** | 10.1 % | **9.8 %** | 45.92 € | stávame sa najlacnejší |
| Senzor Uni-T Flex Clamp UT-CS09D | 55.00 € | **54.90 €** | 14.9 % | **14.7 %** | 54.94 € | stávame sa najlacnejší |
| Candy CFT610/5X/1 | 48.00 € | **47.90 €** | 6.8 % | **6.6 %** | 47.95 € | stávame sa najlacnejší |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 17.00 € | **16.90 €** | 45.3 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| ETA Verto II 1423 90000 bílý/zlatý | 31.00 € | **30.90 €** | 12.1 % | **11.7 %** | 30.96 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 50.00 € | **49.90 €** | 63.6 % | **63.3 %** | 49.99 € | stávame sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **35.90 €** | 45.0 % | **44.6 %** | 35.99 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 45.00 € | **44.90 €** | 7.0 % | **6.8 %** | 44.99 € | stávame sa najlacnejší |
| Electrolux E3HB1-4GG | 24.00 € | **23.90 €** | 7.1 % | **6.6 %** | 23.99 € | stávame sa najlacnejší |
| Russell Hobbs 26800-56/RH | 26.00 € | **25.90 €** | 7.3 % | **6.9 %** | 25.99 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 5.90 € | **5.80 €** | 46.2 % | **43.8 %** | 5.85 € | stávame sa najlacnejší |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.40 € | **7.30 €** | 45.7 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 4.90 € | **4.80 €** | 34.6 % | **31.8 %** | 4.87 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 1.10 € | **1.00 €** | 49.1 % | **35.5 %** | 1.02 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 12W, E27, 6000K... | 1.50 € | **1.40 €** | 48.7 % | **38.8 %** | 1.46 € | stávame sa najlacnejší |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.80 € | **1.70 €** | 38.1 % | **30.4 %** | 1.76 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, zdierka 5,5 ... | 0.90 € | **0.80 €** | 26.2 % | **12.1 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 1.00 € | **0.90 €** | 42.6 % | **28.4 %** | 0.95 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, čierna | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight anténny rozbočovač hybridný priamy | 1.90 € | **1.80 €** | 35.5 % | **28.4 %** | 1.89 € | stávame sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 11.00 € | **10.90 €** | 8.0 % | **7.0 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.70 € | **8.60 €** | 6.8 % | **5.6 %** | 8.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka G9, 4,5W, 3000K, 400lm | 2.80 € | **2.70 €** | 49.8 % | **44.4 %** | 2.71 € | stávame sa najlacnejší |
| Vlákno Creality TPU (biele) | 16.00 € | **15.90 €** | 13.5 % | **12.8 %** | 15.94 € | stávame sa najlacnejší |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.30 € | **3.20 €** | 19.8 % | **16.1 %** | 3.29 € | stávame sa najlacnejší |
| Solight držiak DVB-T a internetové antény na stenu, ... | 8.00 € | **7.90 €** | 29.3 % | **27.7 %** | 7.99 € | stávame sa najlacnejší |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 226.00 € | **225.90 €** | 5.1 % | **5.1 %** | 225.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 69.00 € | **68.90 €** | 5.6 % | **5.5 %** | 68.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete XVapor Comfort 4145/BL | 82.00 € | **81.90 €** | 10.0 % | **9.9 %** | 81.96 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 124.00 € | **123.90 €** | 6.3 % | **6.2 %** | 123.99 € | stávame sa najlacnejší |

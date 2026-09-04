# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-04

Vstup: `premiumstoresk_20260904_2044.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **5940**
- Návrh **zvýšiť** cenu: **234** produktov
- Návrh **znížiť** cenu: **540** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5166** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **82**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (234)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Meteorologická stanice TechniSat IMETEO X6 | 111.50 € | **125.50 €** | 5.0 % | **18.2 %** | 125.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 65FQK9070 ULTRA HD 4K QLED SMART ANDROID TV | 658.50 € | **672.00 €** | 5324.2 % | **5435.4 %** | 672.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| TechniSat DIGITRADIO BT 2 gray 0001/3973 reproduktor... | 154.50 € | **167.50 €** | 5.0 % | **13.9 %** | 167.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Perfection brown | 200.50 € | **210.00 €** | 12.1 % | **17.4 %** | 210.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje FN619EEW5 | 481.90 € | **490.90 €** | 5.1 % | **7.0 %** | 481.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Hurricane H7 Plus | 163.90 € | **172.00 €** | 10.1 % | **15.5 %** | 163.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 380.50 € | **388.50 €** | 5.0 % | **7.2 %** | 388.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Perfection Cappuccino | 203.50 € | **210.00 €** | 13.8 % | **17.4 %** | 210.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 32FWI5670 SMART ANDROID TV FULL HD BÍLÁ | 245.50 € | **251.90 €** | 9.4 % | **12.2 %** | 251.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 417.50 € | **421.50 €** | 12.6 % | **13.7 %** | 417.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| ROWENTA RO 3985 EA | 72.00 € | **76.00 €** | 5.1 % | **10.9 %** | 72.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 52127 Set Clean Twist M Ergo | 39.90 € | **43.90 €** | 5.1 % | **15.6 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Black | 66.90 € | **70.90 €** | 8.1 % | **14.5 %** | 66.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Blue | 66.90 € | **70.90 €** | 8.1 % | **14.5 %** | 66.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO MGC20130BFB | 76.50 € | **79.90 €** | 5.4 % | **10.1 %** | 76.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Tune 670NC white | 60.90 € | **64.00 €** | 5.3 % | **10.7 %** | 60.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 15.90 € | **18.90 €** | 15.2 % | **37.0 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 15W, 1000lm, 40... | 8.80 € | **10.90 €** | 13.4 % | **40.4 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Barkan 464XL | 123.50 € | **125.50 €** | 22.2 % | **24.2 %** | 125.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice TechniSat IMETEO 400 | 29.50 € | **31.50 €** | 5.5 % | **12.7 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná zástrčka WiFi Gosund SP111 3680W 16A, Tuya | 10.00 € | **11.90 €** | 12.8 % | **34.2 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.00 € | **31.90 €** | 9.5 % | **16.5 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá FIXED Pods 2, bezdrôtové, TWS, biela | 23.00 € | **24.90 €** | 1.5 % | **9.8 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 21.50 € | **23.00 €** | 6.1 % | **13.5 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 19.50 € | **21.00 €** | 11.1 % | **19.6 %** | 21.13 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 11.50 € | **13.00 €** | 22.5 % | **38.5 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herná náhlavná súprava ONIKUMA B5 (ružová) | 14.50 € | **16.00 €** | 14.0 % | **25.8 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálny digitálny multimeter UNI-T UT191T | 67.50 € | **68.90 €** | 7.3 % | **9.5 %** | 67.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač hladiny hluku Uni-T UT35 | 119.50 € | **120.90 €** | 11.5 % | **12.8 %** | 119.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálny digitálny multimeter UNI-T UT191E | 55.50 € | **56.90 €** | 7.3 % | **10.0 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless controler GameSir T4n (white) | 24.50 € | **25.90 €** | 14.6 % | **21.2 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multifunkčná baterka SuperFire G20, 470 lm, USB | 19.50 € | **20.90 €** | 14.1 % | **22.2 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 466.50 € | **467.90 €** | 7.8 % | **8.1 %** | 466.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 900.50 € | **901.90 €** | 14.4 % | **14.6 %** | 900.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 27.50 € | **28.50 €** | 11.4 % | **15.4 %** | 27.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 15.50 € | **16.50 €** | 10.8 % | **18.0 %** | 16.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rýchlovarná kanvica Hyundai VK690B černá | 35.90 € | **36.90 €** | 6.2 % | **9.1 %** | 36.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| NEDIS SAMP42222WT domovní zesilovač (1x vstup, 2x vý... | 20.50 € | **21.50 €** | 9.4 % | **14.7 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal BC50D2V0 | 16.00 € | **17.00 €** | 10.3 % | **17.2 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje F492PW | 172.50 € | **173.50 €** | 7.1 % | **7.7 %** | 172.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nutribullet NB614.DG | 54.00 € | **54.90 €** | 7.1 % | **8.9 %** | 54.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 5.80 € | **6.60 €** | 16.4 % | **32.5 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 5.80 € | **6.60 €** | 16.4 % | **32.5 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal RK812110 | 108.90 € | **109.50 €** | 9.2 % | **9.8 %** | 108.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 155.00 € | **155.50 €** | 14.0 % | **14.4 %** | 155.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| IVO I133 aktivní rozbočovač 8x výstup"F" 18dB zisk +... | 55.00 € | **55.50 €** | 15.8 % | **16.8 %** | 55.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Budík analogový TechnoLine WT 757BK | 26.00 € | **26.50 €** | 7.6 % | **9.6 %** | 26.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrátový detektor pohybu ORNO OR-MA-701 | 10.00 € | **10.50 €** | 8.3 % | **13.7 %** | 10.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA301 umývateľná handrič... | 12.00 € | **12.50 €** | 8.8 % | **13.3 %** | 12.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.50 € | **13.00 €** | 16.7 % | **21.3 %** | 12.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 615W Precise | 56.00 € | **56.50 €** | 7.6 % | **8.6 %** | 56.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.00 € | **85.50 €** | 14.6 % | **15.3 %** | 85.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 37.00 € | **37.50 €** | 19.9 % | **21.6 %** | 37.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 138.00 € | **138.50 €** | 15.1 % | **15.6 %** | 138.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mini stepper Rebel Active RBA-3226 | 52.00 € | **52.50 €** | 5.7 % | **6.7 %** | 52.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kruger&Matz KM0127 brašna na rám kola | 12.00 € | **12.50 €** | 9.9 % | **14.4 %** | 12.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra žiarovka TP-Link Tapo L430C(2-pack) E14, 4,8W,... | 28.00 € | **28.50 €** | 30.7 % | **33.0 %** | 28.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA520 Umývateľný HEPA fi... | 20.00 € | **20.50 €** | 10.6 % | **13.4 %** | 20.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA310 Umývateľná mopovac... | 20.00 € | **20.50 €** | 10.6 % | **13.4 %** | 20.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hula hoop REBEL ACTIVE RBA-3066-BL se závažím a masá... | 11.00 € | **11.50 €** | 20.4 % | **25.8 %** | 11.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA411 Vodotesná podložka... | 17.00 € | **17.50 €** | 11.0 % | **14.3 %** | 17.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 750 | 113.00 € | **113.50 €** | 8.6 % | **9.0 %** | 113.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 279.00 € | **279.50 €** | 7.2 % | **7.4 %** | 279.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 22.00 € | **22.50 €** | 10.6 % | **13.1 %** | 22.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 226.00 € | **226.50 €** | 5.2 % | **5.5 %** | 226.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 28.00 € | **28.50 €** | 17.3 % | **19.4 %** | 28.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 139.00 € | **139.50 €** | 7.8 % | **8.2 %** | 139.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Honey Night 160 ml | 11.00 € | **11.50 €** | 12.6 % | **17.8 %** | 11.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 168.00 € | **168.50 €** | 16.1 % | **16.4 %** | 168.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samolepiace hodiny G21 Fashion Style | 12.00 € | **12.50 €** | 13.0 % | **17.8 %** | 12.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 41.50 € | **42.00 €** | 16.1 % | **17.5 %** | 41.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-PVM3000M studiový stereofonní, XLR | 89.00 € | **89.50 €** | 6.4 % | **7.0 %** | 89.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA TE-344 venkovní anténa | 27.00 € | **27.50 €** | 43.4 % | **46.0 %** | 27.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Excellent brown | 230.50 € | **231.00 €** | 17.1 % | **17.4 %** | 231.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Excellent Cappuccino | 230.50 € | **231.00 €** | 17.1 % | **17.4 %** | 231.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Excellent white | 230.50 € | **231.00 €** | 17.1 % | **17.4 %** | 231.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Perfection red | 209.50 € | **210.00 €** | 17.1 % | **17.4 %** | 210.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Perfection white | 209.50 € | **210.00 €** | 17.1 % | **17.4 %** | 210.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacie fólie G21 sáčky 40 x 50 cm, 50 ks, hladké | 11.50 € | **12.00 €** | 11.6 % | **16.4 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 33.00 € | **33.50 €** | 31.5 % | **33.4 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.00 € | **16.50 €** | 33.8 % | **38.0 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.00 € | **31.50 €** | 18.8 % | **20.7 %** | 31.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.00 € | **18.50 €** | 35.3 % | **39.0 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 24.00 € | **24.50 €** | 33.3 % | **36.1 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.00 € | **11.50 €** | 35.1 % | **41.2 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 45.00 € | **45.50 €** | 7.0 % | **8.2 %** | 45.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.00 € | **13.50 €** | 41.7 % | **47.1 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 27.00 € | **27.50 €** | 13.7 % | **15.8 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UNI-T UT501A tester izolačného odporu | 58.00 € | **58.50 €** | 11.2 % | **12.2 %** | 58.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 22.00 € | **22.50 €** | 8.7 % | **11.2 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 17.00 € | **17.50 €** | 39.5 % | **43.6 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO461FR | 36.00 € | **36.50 €** | 7.5 % | **9.0 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AX1500 Range Extender (E15) | 41.00 € | **41.50 €** | 7.0 % | **8.3 %** | 41.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 15.00 € | **15.50 €** | 12.3 % | **16.0 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.00 € | **23.50 €** | 14.0 % | **16.5 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.00 € | **28.50 €** | 14.0 % | **16.0 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 14.00 € | **14.50 €** | 29.5 % | **34.1 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 42.00 € | **42.50 €** | 19.0 % | **20.4 %** | 42.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.00 € | **26.50 €** | 40.0 % | **42.7 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 05A1 | 105.00 € | **105.50 €** | 9.6 % | **10.1 %** | 105.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 06A1 | 105.00 € | **105.50 €** | 7.4 % | **7.9 %** | 105.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje BMX201M2BG | 171.00 € | **171.50 €** | 9.0 % | **9.3 %** | 171.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GI6432BSCWF | 318.50 € | **319.00 €** | 5.1 % | **5.2 %** | 318.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Klimatizace GETI GKH18K hybridní 5kW | 1297.50 € | **1297.90 €** | 7.3 % | **7.4 %** | 1297.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 250.50 € | **250.90 €** | 7.5 % | **7.6 %** | 250.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Barkan 4400 polohovací držák pro TV 32"-80" | 83.50 € | **83.90 €** | 17.5 % | **18.1 %** | 83.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 111.50 € | **111.90 €** | 6.3 % | **6.7 %** | 111.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 189.50 € | **189.90 €** | 7.8 % | **8.1 %** | 189.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 142.50 € | **142.90 €** | 6.6 % | **6.9 %** | 142.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Chytrá meteorologická stanice GARNI 925T | 160.50 € | **160.90 €** | 13.2 % | **13.5 %** | 160.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 119.50 € | **119.90 €** | 13.2 % | **13.5 %** | 119.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **69.90 €** | 34.0 % | **34.7 %** | 69.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **69.90 €** | 23.0 % | **23.7 %** | 69.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Car Flame do auta čierny 100ml,... | 13.50 € | **13.90 €** | 11.3 % | **14.6 %** | 13.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 na pitie, 350 ml, nerezová | 11.50 € | **11.90 €** | 15.0 % | **19.0 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 na pitie, 350 ml, oceľovo šedá | 11.50 € | **11.90 €** | 15.0 % | **19.0 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| AB-COM LNB AB 01 M Quattro | 11.50 € | **11.90 €** | 13.2 % | **17.1 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacia dóza G21 680 ml, nerezová | 11.50 € | **11.90 €** | 15.0 % | **19.0 %** | 11.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Bloom tmavé drevo 200 ml | 13.50 € | **13.90 €** | 10.2 % | **13.5 %** | 13.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodiny nástěnné TechnoLine WT 1019 | 12.50 € | **12.90 €** | 6.5 % | **9.9 %** | 12.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 11.50 € | **11.90 €** | 5.8 % | **9.4 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.50 € | **12.90 €** | 34.2 % | **38.5 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.50 € | **12.90 €** | 34.2 % | **38.5 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 13.50 € | **13.90 €** | 35.8 % | **39.9 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.0 % | **13.8 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.50 € | **10.90 €** | 33.0 % | **38.0 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.50 € | **13.90 €** | 16.9 % | **20.3 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.50 € | **10.90 €** | 40.2 % | **45.5 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2x 10A, biely-sivý | 2.90 € | **3.30 €** | 22.8 % | **39.7 %** | 2.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| KRUGER & MATZ KM0912 10000mAh Powerbanka MagSafe | 22.50 € | **22.90 €** | 16.3 % | **18.4 %** | 22.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Palm biele drevo 500 ml | 22.50 € | **22.90 €** | 11.7 % | **13.7 %** | 22.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.50 € | **18.90 €** | 12.6 % | **15.0 %** | 18.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 22.50 € | **22.90 €** | 13.4 % | **15.4 %** | 22.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 30.50 € | **30.90 €** | 11.8 % | **13.3 %** | 30.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.50 € | **18.90 €** | 12.6 % | **15.0 %** | 18.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Teplovzdušný ventilátor TEESA TSA8062 s imitací krbu... | 53.50 € | **53.90 €** | 10.8 % | **11.6 %** | 53.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vaflovač TEESA TSA3237 | 22.50 € | **22.90 €** | 6.5 % | **8.4 %** | 22.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 28.50 € | **28.90 €** | 28.9 % | **30.7 %** | 28.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacia dóza G21 1900 ml, nerezová | 16.50 € | **16.90 €** | 15.4 % | **18.2 %** | 16.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inverto HOME Pro - Quattro Universal 40mm PLL LNB | 18.50 € | **18.90 €** | 23.1 % | **25.7 %** | 18.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hrazda multifunkční REBEL ACTIVE RBA-2401 | 54.50 € | **54.90 €** | 7.4 % | **8.2 %** | 54.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 23.50 € | **23.90 €** | 9.6 % | **11.5 %** | 23.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra žiarovka TP-Link Tapo L535E E27, 8,7W, 230V, c... | 23.50 € | **23.90 €** | 30.6 % | **32.8 %** | 23.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zátěžová deka Rebel Active RBA-6014-9   9 kg (150x20... | 31.50 € | **31.90 €** | 5.1 % | **6.5 %** | 31.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Náhradní vodní filtr GARNI WF 45T | 18.50 € | **18.90 €** | 10.8 % | **13.2 %** | 18.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mini stepper REBEL ACTIVE RBA-3229 | 40.50 € | **40.90 €** | 6.3 % | **7.4 %** | 40.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.50 € | **21.90 €** | 22.5 % | **24.8 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 49.50 € | **49.90 €** | 23.6 % | **24.6 %** | 49.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 16.50 € | **16.90 €** | 21.5 % | **24.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 34.50 € | **34.90 €** | 16.3 % | **17.7 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.50 € | **20.90 €** | 27.8 % | **30.3 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 19.50 € | **19.90 €** | 31.7 % | **34.4 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 22760-56/RH | 29.50 € | **29.90 €** | 7.9 % | **9.4 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka USB-C, 90W, PD fast charger | 16.50 € | **16.90 €** | 42.6 % | **46.0 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight otočná IP kamera | 34.50 € | **34.90 €** | 25.1 % | **26.6 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.50 € | **25.90 €** | 19.5 % | **21.4 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 17.50 € | **17.90 €** | 19.7 % | **22.4 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 23.50 € | **23.90 €** | 33.8 % | **36.1 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 39.50 € | **39.90 €** | 37.8 % | **39.2 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 38.50 € | **38.90 €** | 13.6 % | **14.8 %** | 38.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Redmi Buds 8 Lite Black | 19.50 € | **19.90 €** | 6.8 % | **8.9 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 267.50 € | **267.90 €** | 7.2 % | **7.3 %** | 267.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 374.50 € | **374.90 €** | 8.0 % | **8.1 %** | 374.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 55FQK9070 ULTRA HD 4K QLED SMART ANDROID TV | 545.50 € | **545.90 €** | 5.0 % | **5.1 %** | 545.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6182PS4 | 334.50 € | **334.90 €** | 7.0 % | **7.1 %** | 334.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WOI4S8PPM1SX | 447.50 € | **447.90 €** | 5.8 % | **5.9 %** | 447.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 4.80 € | **5.10 €** | 11.2 % | **18.1 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 7.30 € | **7.60 €** | 45.5 % | **51.4 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 5.80 € | **6.00 €** | 21.2 % | **25.4 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 529.90 € | **530.00 €** | 6.3 % | **6.4 %** | 529.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 379.90 € | **380.00 €** | 7.3 % | **7.3 %** | 379.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 284.90 € | **285.00 €** | 14.4 % | **14.5 %** | 284.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 278.90 € | **279.00 €** | 8.0 % | **8.1 %** | 278.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjacia stanica FOSSIBOT F2400 2400 W (čierna) | 736.90 € | **737.00 €** | 8.7 % | **8.8 %** | 737.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 16.90 € | **17.00 €** | 10.4 % | **11.0 %** | 16.92 € | dobehnutie 2. najlacnejšieho konkurenta |
| Budík digitální TechnoLine WT 181 | 19.90 € | **20.00 €** | 15.2 % | **15.8 %** | 19.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodiny TechnoLine WT 3100 do koupelny | 23.90 € | **24.00 €** | 13.1 % | **13.6 %** | 23.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prijímač BOYA BY-WM4RXD bezdrátový, iOS, dosah 60m | 45.90 € | **46.00 €** | 9.8 % | **10.1 %** | 45.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prijímač BOYA BY-WM4RXU bezdrátový, USB-C, Android, ... | 45.90 € | **46.00 €** | 9.8 % | **10.1 %** | 45.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termohrnček G21 FlowCup 1200 ml - grafitovo modrý | 20.90 € | **21.00 €** | 19.1 % | **19.6 %** | 20.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termohrnček G21 FlowCup 1200 ml – eukalyptovo zelený | 20.90 € | **21.00 €** | 19.1 % | **19.6 %** | 20.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 20.90 € | **21.00 €** | 19.1 % | **19.6 %** | 20.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termohrnček G21 FlowCup 1200 ml – pieskovo béžový | 20.90 € | **21.00 €** | 19.1 % | **19.6 %** | 20.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice TechnoLine WS 9251 | 52.90 € | **53.00 €** | 6.2 % | **6.4 %** | 52.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 48.90 € | **49.00 €** | 15.2 % | **15.4 %** | 48.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.20 € | **9.30 €** | 24.2 % | **25.6 %** | 9.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 63.90 € | **64.00 €** | 12.0 % | **12.2 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Verto II 1423 90000 bílý/zlatý | 30.90 € | **31.00 €** | 11.7 % | **12.1 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 10/100 5-Port Switch (DES-105) | 17.90 € | **18.00 €** | 5.1 % | **5.7 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.80 € | **5.90 €** | 9.2 % | **11.0 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.10 € | **5.20 €** | 43.5 % | **46.3 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.30 € | **5.40 €** | 42.7 % | **45.4 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.60 € | **6.70 €** | 32.5 % | **34.5 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 6.10 € | **6.20 €** | 15.1 % | **17.0 %** | 6.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.30 € | **5.40 €** | 6.9 % | **8.9 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.60 € | **4.70 €** | 34.0 % | **37.0 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.80 € | **5.90 €** | 42.9 % | **45.4 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.50 € | **3.60 €** | 48.2 % | **52.4 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.10 € | **2.20 €** | 16.9 % | **22.5 %** | 2.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 2.90 € | **3.00 €** | 19.7 % | **23.8 %** | 2.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.90 € | **2.00 €** | 33.2 % | **40.2 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.60 € | **2.70 €** | 22.2 % | **26.9 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.00 € | **3.10 €** | 12.4 % | **16.1 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.80 € | **3.90 €** | 29.3 % | **32.7 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, IP20, biela | 1.30 € | **1.40 €** | 22.9 % | **32.4 %** | 1.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Batéria Jupio AAA 1000 mAh (mikrotužkové) 4ks, dobíj... | 8.60 € | **8.70 €** | 9.2 % | **10.5 %** | 8.66 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.30 € | **9.40 €** | 34.3 % | **35.7 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 8.30 € | **8.40 €** | 41.8 % | **43.5 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.30 € | **9.40 €** | 34.3 % | **35.7 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 9.60 € | **9.70 €** | 21.2 % | **22.5 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 9.60 € | **9.70 €** | 33.2 % | **34.6 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Čistič na okna s rozprašovačem | 9.90 € | **10.00 €** | 7.5 % | **8.5 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight držiak DVB-T a internetové antény na stenu, ... | 7.90 € | **8.00 €** | 27.7 % | **29.3 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 15.90 € | **16.00 €** | 19.0 % | **19.8 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 4.70 € | **4.80 €** | 34.5 % | **37.4 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 9.80 € | **9.90 €** | 18.6 % | **19.8 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.80 € | **8.90 €** | 31.8 % | **33.3 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.20 € | **4.30 €** | 8.7 % | **11.3 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.50 € | **4.60 €** | 23.6 % | **26.3 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.20 € | **5.30 €** | 35.5 % | **38.1 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.20 € | **4.30 €** | 9.1 % | **11.7 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.30 € | **9.40 €** | 22.9 % | **24.3 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.50 € | **7.60 €** | 35.2 % | **37.0 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.70 € | **4.80 €** | 13.7 % | **16.1 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.00 € | **7.10 €** | 34.2 % | **36.1 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 4.40 € | **4.50 €** | 34.0 % | **37.0 %** | 4.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.60 € | **8.70 €** | 5.6 % | **6.8 %** | 8.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.90 € | **10.00 €** | 25.6 % | **26.8 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Budík digitální TechnoLine WT 500 | 91.90 € | **92.00 €** | 9.6 % | **9.7 %** | 91.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrátové čidlo pro měření ovlhčení listů GARNI 098W | 69.90 € | **70.00 €** | 8.3 % | **8.5 %** | 69.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Magnetický veslařský trenažér HMS ZM1801 | 237.90 € | **238.00 €** | 42881.0 % | **42899.1 %** | 237.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ozvučovací systém KRUGER MATZ KM1718 | 200.90 € | **201.00 €** | 10.0 % | **10.1 %** | 200.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.90 € | **79.00 €** | 15.3 % | **15.5 %** | 78.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 68.90 € | **69.00 €** | 12.7 % | **12.8 %** | 68.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (540)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| 3D skener Creality Sermoon P1 | 3158.50 € | **2909.90 €** | 15.0 % | **6.0 %** | 2910.00 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon S1 | 2561.00 € | **2372.90 €** | 15.0 % | **6.5 %** | 2373.00 € | stávame sa najlacnejší |
| Kompletný čistiaci robot MOVA V70 Ultra (čierny) | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 1463.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravír XTOOL M1 Ultra 20 W 4 v 1 – súprava ... | 2326.50 € | **2198.90 €** | 15.0 % | **8.7 %** | 2199.00 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1441.90 € | **1346.50 €** | 15.0 % | **7.4 %** | 1346.85 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1545.50 € | **1455.00 €** | 15.0 % | **8.3 %** | 1455.16 € | stávame sa najlacnejší |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 944.00 € | **862.00 €** | 15.0 % | **5.0 %** | 835.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Phillips PR-650 WXGA (biely) | 601.00 € | **548.90 €** | 15.0 % | **5.0 %** | 544.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Jupiter 2 | 901.00 € | **848.90 €** | 15.0 % | **8.3 %** | 849.00 € | stávame sa najlacnejší |
| Inteligentný samočistiaci záchod pre mačky Catlink P... | 589.50 € | **538.50 €** | 15.0 % | **5.1 %** | 508.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot na čistenie bazénov Wybot L1 | 649.90 € | **598.90 €** | 15.0 % | **6.0 %** | 598.95 € | stávame sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1376.90 € | **1327.90 €** | 8.9 % | **5.0 %** | 1068.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1350.00 € | **1305.00 €** | 15.0 % | **11.2 %** | 1305.29 € | stávame sa najlacnejší |
| LaserPecker LX2 40W laserový gravír | 1879.50 € | **1834.90 €** | 15.0 % | **12.3 %** | 1835.00 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Studio 24 KS2401 | 2385.50 € | **2345.90 €** | 15.0 % | **13.1 %** | 2346.00 € | stávame sa najlacnejší |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 767.50 € | **728.90 €** | 15.0 % | **9.2 %** | 729.00 € | stávame sa najlacnejší |
| Ultimea Skywave X70 Soundbar | 612.90 € | **576.00 €** | 15.0 % | **8.1 %** | 576.02 € | stávame sa najlacnejší |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 782.50 € | **748.00 €** | 15.0 % | **10.0 %** | 748.21 € | stávame sa najlacnejší |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 402.90 € | **368.90 €** | 15.0 % | **5.3 %** | 369.00 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 430.90 € | **396.90 €** | 15.0 % | **5.9 %** | 397.00 € | stávame sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 433.90 € | **399.90 €** | 15.0 % | **6.0 %** | 400.00 € | stávame sa najlacnejší |
| Ultimea Skywave X50 Soundbar | 422.90 € | **389.50 €** | 15.1 % | **6.0 %** | 389.72 € | stávame sa najlacnejší |
| Gorenje NRK6192AXL4 | 399.00 € | **367.00 €** | 19.2 % | **9.6 %** | 367.11 € | stávame sa najlacnejší |
| 3D tlačiareň Creality Halot X1 Combo | 505.00 € | **474.00 €** | 15.0 % | **7.9 %** | 474.10 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 429.50 € | **398.90 €** | 14.9 % | **6.8 %** | 399.00 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 919.90 € | **889.90 €** | 15.0 % | **11.3 %** | 890.00 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Pro | 506.00 € | **476.00 €** | 15.0 % | **8.1 %** | 476.18 € | stávame sa najlacnejší |
| Nano projektor JMGO N1S | 496.50 € | **466.50 €** | 15.0 % | **8.1 %** | 466.70 € | stávame sa najlacnejší |
| Subwoofer Edifier Airpulse SW8 (čierny) | 338.50 € | **309.50 €** | 15.0 % | **5.1 %** | 293.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 478.00 € | **449.00 €** | 15.0 % | **8.0 %** | 449.20 € | stávame sa najlacnejší |
| Okuliare AR XREAL One Pro (veľkosť L) | 677.00 € | **648.50 €** | 15.0 % | **10.2 %** | 648.60 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 424.50 € | **396.00 €** | 15.0 % | **7.3 %** | 396.34 € | stávame sa najlacnejší |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 315.50 € | **288.50 €** | 15.0 % | **5.2 %** | 253.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Ultima Nova C40 | 301.00 € | **274.90 €** | 15.0 % | **5.0 %** | 267.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistiaci robot ULTENIC MX50 | 445.90 € | **419.90 €** | 15.0 % | **8.3 %** | 420.00 € | stávame sa najlacnejší |
| Cycplus T2 smart bike trainer | 615.90 € | **589.90 €** | 15.0 % | **10.2 %** | 590.00 € | stávame sa najlacnejší |
| Projektor JMGO PicoPlay+ | 413.00 € | **387.00 €** | 14.9 % | **7.7 %** | 387.20 € | stávame sa najlacnejší |
| Projektor Ultima Poseidon E40 | 402.90 € | **377.00 €** | 15.0 % | **7.7 %** | 377.18 € | stávame sa najlacnejší |
| Blesk GODOX AD600BMII Wistro s uchytením Bowens | 564.00 € | **538.90 €** | 15.0 % | **9.8 %** | 539.00 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M1 | 544.50 € | **519.90 €** | 15.0 % | **9.8 %** | 520.00 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 Max | 428.00 € | **403.50 €** | 14.9 % | **8.4 %** | 403.70 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 334.00 € | **310.00 €** | 15.0 % | **6.7 %** | 310.34 € | stávame sa najlacnejší |
| Detektor kovov GARRETT Ace Apex 8,5x11+MS-3 | 503.50 € | **479.90 €** | 15.0 % | **9.6 %** | 480.00 € | stávame sa najlacnejší |
| Beko B3BCNA324HS | 626.00 € | **602.50 €** | 9.1 % | **5.0 %** | 587.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Funkčný generátor FNIRSI TSG6020 | 250.90 € | **229.00 €** | 15.1 % | **5.0 %** | 224.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 494.50 € | **473.00 €** | 15.0 % | **10.0 %** | 473.14 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 288.90 € | **267.50 €** | 15.0 % | **6.5 %** | 267.52 € | stávame sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 257.50 € | **237.50 €** | 15.1 % | **6.2 %** | 237.63 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (čierny) | 295.50 € | **275.50 €** | 15.1 % | **7.3 %** | 275.70 € | stávame sa najlacnejší |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 305.00 € | **285.00 €** | 14.9 % | **7.4 %** | 285.32 € | stávame sa najlacnejší |
| Projektor BlitzWolf BW-V11 | 352.50 € | **333.00 €** | 15.0 % | **8.6 %** | 333.18 € | stávame sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 278.00 € | **258.50 €** | 14.9 % | **6.8 %** | 258.90 € | stávame sa najlacnejší |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 348.90 € | **329.50 €** | 15.0 % | **8.6 %** | 329.71 € | stávame sa najlacnejší |
| Projektor JMGO O2S Ultra | 2398.00 € | **2378.90 €** | 15.0 % | **14.1 %** | 2379.00 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE V45i | 330.50 € | **312.00 €** | 15.0 % | **8.6 %** | 312.18 € | stávame sa najlacnejší |
| GUZZANTI GZ 363A | 599.00 € | **580.50 €** | 9.6 % | **6.2 %** | 580.73 € | stávame sa najlacnejší |
| Ultimea Skywave X40 Soundbar | 348.00 € | **329.50 €** | 12.9 % | **6.9 %** | 329.74 € | stávame sa najlacnejší |
| MOVA V10 Akumulátorový vysávač na bazény | 206.90 € | **188.90 €** | 15.1 % | **5.1 %** | 118.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Funkčný generátor FNIRSI TSG3020 | 209.90 € | **191.90 €** | 15.1 % | **5.2 %** | 188.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Okuliare RayNeo X3 Pro AR | 1549.90 € | **1531.90 €** | 15.0 % | **13.7 %** | 1532.00 € | stávame sa najlacnejší |
| ZEUSLAP Z16H 16" prenosný monitor | 246.90 € | **228.90 €** | 15.1 % | **6.7 %** | 229.00 € | stávame sa najlacnejší |
| Ultima Apollo S90 Soundbar | 326.50 € | **308.90 €** | 14.9 % | **8.7 %** | 309.00 € | stávame sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 195.90 € | **178.90 €** | 15.1 % | **5.1 %** | 161.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje DE69CS | 516.50 € | **499.50 €** | 10.1 % | **6.5 %** | 499.55 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (červený) | 292.50 € | **275.50 €** | 15.0 % | **8.3 %** | 275.70 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 | 298.50 € | **281.90 €** | 15.0 % | **8.6 %** | 282.00 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 433.00 € | **416.50 €** | 15.0 % | **10.6 %** | 416.68 € | stávame sa najlacnejší |
| Herný volant MOZA RACING CS Pro RS093 | 363.00 € | **346.50 €** | 14.9 % | **9.7 %** | 346.90 € | stávame sa najlacnejší |
| Elektrický bežecký pás MERACH MR-T25B2 | 372.90 € | **356.50 €** | 15.1 % | **10.0 %** | 356.52 € | stávame sa najlacnejší |
| Guzzanti GZ 235 | 459.90 € | **444.50 €** | 10.0 % | **6.4 %** | 444.54 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 267.50 € | **252.50 €** | 11.4 % | **5.2 %** | 228.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 335.00 € | **320.00 €** | 13.6 % | **8.5 %** | 320.19 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Pro (červený) | 245.50 € | **230.50 €** | 15.1 % | **8.0 %** | 230.69 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 262.90 € | **247.90 €** | 15.0 % | **8.4 %** | 248.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 230.50 € | **216.50 €** | 15.0 % | **8.0 %** | 216.63 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE V25i Pro II | 317.90 € | **304.00 €** | 15.0 % | **10.0 %** | 304.02 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP OL133ED s 13,3-palcovým dot... | 221.90 € | **208.90 €** | 15.1 % | **8.3 %** | 209.00 € | stávame sa najlacnejší |
| Koleso MOZA RS068 FSR V2 (PC) | 678.50 € | **665.90 €** | 15.0 % | **12.9 %** | 666.00 € | stávame sa najlacnejší |
| Grafický tablet Huion Slate 11 | 274.50 € | **262.00 €** | 15.1 % | **9.8 %** | 262.20 € | stávame sa najlacnejší |
| Concept LA8383DS | 760.50 € | **748.50 €** | 10.0 % | **8.3 %** | 748.56 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 426.00 € | **414.00 €** | 15.0 % | **11.7 %** | 414.19 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 24 GS2401 | 564.90 € | **553.00 €** | 15.0 % | **12.6 %** | 553.18 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F03 STD | 137.50 € | **125.90 €** | 15.0 % | **5.3 %** | 119.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Shifter Moza Racing HGP RS039 | 154.50 € | **143.50 €** | 15.1 % | **6.9 %** | 143.90 € | stávame sa najlacnejší |
| Reproduktory Edifier R2750DB 2.0 (čierne) | 200.50 € | **189.90 €** | 14.9 % | **8.9 %** | 190.00 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R10 Pro (čierny) | 227.50 € | **217.00 €** | 15.1 % | **9.8 %** | 217.43 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 227.50 € | **217.00 €** | 15.1 % | **9.8 %** | 217.43 € | stávame sa najlacnejší |
| Taška DJI Power 1000 | 119.90 € | **109.50 €** | 15.1 % | **5.1 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 222.50 € | **212.50 €** | 15.0 % | **9.9 %** | 212.80 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 217.50 € | **207.50 €** | 15.1 % | **9.8 %** | 207.82 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 217.50 € | **207.50 €** | 15.1 % | **9.8 %** | 207.82 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 13 GT133 | 220.00 € | **210.00 €** | 15.0 % | **9.8 %** | 210.39 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-Plus 4+64 GB | 129.00 € | **119.00 €** | 14.9 % | **6.0 %** | 119.40 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 214.50 € | **205.00 €** | 15.0 % | **9.9 %** | 205.25 € | stávame sa najlacnejší |
| Inteligentný fotorámik Lexar PX-110BLKGLR (čierny) 11" | 169.00 € | **159.50 €** | 14.9 % | **8.5 %** | 159.90 € | stávame sa najlacnejší |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 148.90 € | **139.50 €** | 15.1 % | **7.9 %** | 139.90 € | stávame sa najlacnejší |
| Maxxo Chamber Line 70 | 359.90 € | **350.50 €** | 9.7 % | **6.8 %** | 350.73 € | stávame sa najlacnejší |
| Beko EnergySpin BM3WFU3721WBW | 333.90 € | **324.50 €** | 10.0 % | **6.9 %** | 324.84 € | stávame sa najlacnejší |
| YAMAHA TW-E5B BROWN | 139.00 € | **129.90 €** | 12.6 % | **5.3 %** | 113.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-E5B GRAY | 139.00 € | **129.90 €** | 12.6 % | **5.3 %** | 113.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 299.00 € | **290.00 €** | 11.8 % | **8.5 %** | 290.18 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 299.00 € | **290.00 €** | 11.8 % | **8.5 %** | 290.18 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 204.50 € | **195.50 €** | 14.9 % | **9.9 %** | 195.75 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 799.50 € | **790.90 €** | 15.0 % | **13.8 %** | 790.99 € | stávame sa najlacnejší |
| Sušič vlasov MOVA Flip 10 | 184.50 € | **176.00 €** | 10.1 % | **5.0 %** | 162.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo Chamber Line 40 | 251.50 € | **243.00 €** | 9.7 % | **6.0 %** | 243.07 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 294.00 € | **286.00 €** | 8.0 % | **5.0 %** | 278.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slnečné okuliare VITURE XR Beast (veľkosť L) | 627.50 € | **619.50 €** | 15.0 % | **13.5 %** | 619.70 € | stávame sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (biele) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (čierne) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 267.50 € | **259.90 €** | 8.2 % | **5.1 %** | 259.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Päťzónový indukčný sporák IsEasy LI5-01 | 192.50 € | **185.00 €** | 15.1 % | **10.6 %** | 185.05 € | stávame sa najlacnejší |
| Ninja FB151EUWH Frost Vault 47l | 233.50 € | **226.00 €** | 10.2 % | **6.6 %** | 226.13 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 20 W | 1124.50 € | **1117.00 €** | 15.0 % | **14.3 %** | 1117.25 € | stávame sa najlacnejší |
| Reproduktory Edifier Airpulse A80 2.0 (hnedé) | 443.50 € | **436.00 €** | 12.9 % | **11.0 %** | 436.50 € | stávame sa najlacnejší |
| Intelligent self-cleaning cat litterbox UBPet C20 | 284.90 € | **277.50 €** | 15.0 % | **12.0 %** | 277.75 € | stávame sa najlacnejší |
| GUZZANTI GZ 44GW | 206.00 € | **198.90 €** | 10.0 % | **6.2 %** | 198.96 € | stávame sa najlacnejší |
| Bežecký pás Acra GB4500N pre chôdzu a pomalý beh | 367.00 € | **360.00 €** | 12.3 % | **10.2 %** | 360.14 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 88.50 € | **81.90 €** | 14.9 % | **6.3 %** | 81.94 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 88.50 € | **81.90 €** | 14.9 % | **6.3 %** | 81.94 € | stávame sa najlacnejší |
| ELECTROLUX 300 EFC226R | 249.00 € | **242.50 €** | 8.0 % | **5.1 %** | 236.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 1535 | 195.00 € | **188.50 €** | 9.8 % | **6.1 %** | 188.87 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 115.90 € | **109.50 €** | 15.1 % | **8.7 %** | 109.90 € | stávame sa najlacnejší |
| Clutch Pedal Moza Racing CRP2 RS067 | 105.90 € | **99.50 €** | 15.1 % | **8.1 %** | 99.90 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect Z14-3S M140G12 14'' 2240x1... | 345.00 € | **338.90 €** | 14.9 % | **12.9 %** | 339.00 € | stávame sa najlacnejší |
| Merač oxidu uhoľnatého Uni-T UT337A | 74.00 € | **67.90 €** | 14.8 % | **5.3 %** | 63.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná batéria pre DJI Mini 5 Pro | 87.00 € | **80.90 €** | 14.8 % | **6.7 %** | 81.00 € | stávame sa najlacnejší |
| MPPT solar panel adapter for DJI power stations | 71.50 € | **65.50 €** | 14.7 % | **5.1 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 235.50 € | **229.50 €** | 10.9 % | **8.0 %** | 229.69 € | stávame sa najlacnejší |
| Herný volant MOZA RACING KS Pro RS095 | 352.50 € | **346.50 €** | 15.1 % | **13.1 %** | 346.90 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 132.00 € | **126.00 €** | 10.4 % | **5.4 %** | 126.41 € | stávame sa najlacnejší |
| Blesk GODOX V860III TTL pre Sony | 204.50 € | **198.90 €** | 15.0 % | **11.8 %** | 199.00 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C100 IP, FHD, WiFi, prísvit | 29.00 € | **23.50 €** | 29.8 % | **5.1 %** | 22.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EHF6547FXK | 221.50 € | **216.00 €** | 8.0 % | **5.4 %** | 216.23 € | stávame sa najlacnejší |
| Tefal OptiGrill 2v1 GC773D30 | 166.50 € | **161.00 €** | 9.7 % | **6.1 %** | 161.47 € | stávame sa najlacnejší |
| Ultimea Aura A50 Pro Soundbar | 134.90 € | **129.50 €** | 15.0 % | **10.4 %** | 129.90 € | stávame sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (biely) | 92.00 € | **86.90 €** | 11.7 % | **5.5 %** | 86.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA PrimeSound HQ-995X | 181.90 € | **176.90 €** | 9.7 % | **6.7 %** | 176.92 € | stávame sa najlacnejší |
| Batéria MOVA pre model G70 | 137.50 € | **132.50 €** | 15.0 % | **10.8 %** | 132.60 € | stávame sa najlacnejší |
| Reproduktory Edifier R1100 2.0 (čierne) | 78.50 € | **73.50 €** | 15.0 % | **7.7 %** | 73.60 € | stávame sa najlacnejší |
| Otočný stojan Puluz 45 cm (biely) | 68.00 € | **63.00 €** | 14.9 % | **6.5 %** | 63.30 € | stávame sa najlacnejší |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 124.50 € | **119.50 €** | 14.9 % | **10.2 %** | 119.90 € | stávame sa najlacnejší |
| GODOX SB-USW80120 Softbox s dáždnikom | 66.00 € | **61.00 €** | 14.7 % | **6.0 %** | 61.50 € | stávame sa najlacnejší |
| AMICA DI 6412 CB | 275.50 € | **270.90 €** | 8.0 % | **6.2 %** | 270.93 € | stávame sa najlacnejší |
| GOOLOO GP3000 59,2 Wh štartér | 56.00 € | **51.50 €** | 14.8 % | **5.5 %** | 48.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 92.00 € | **87.50 €** | 10.7 % | **5.3 %** | 86.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 103RB | 215.00 € | **210.50 €** | 8.4 % | **6.2 %** | 210.58 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 181.00 € | **176.50 €** | 8.1 % | **5.4 %** | 176.58 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE E25 Pro | 235.50 € | **231.00 €** | 14.9 % | **12.7 %** | 231.21 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 34.00 € | **29.50 €** | 36.8 % | **18.7 %** | 29.74 € | stávame sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 248.50 € | **244.00 €** | 9.0 % | **7.0 %** | 244.29 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 89.50 € | **85.00 €** | 11.4 % | **5.8 %** | 85.31 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 89.50 € | **85.00 €** | 11.4 % | **5.8 %** | 85.31 € | stávame sa najlacnejší |
| G3Ferrari G10153 Horkovzdušná trouba | 170.00 € | **165.50 €** | 9.0 % | **6.1 %** | 165.89 € | stávame sa najlacnejší |
| Letecký simulátor MOZA RACING AB6 | 454.00 € | **449.50 €** | 14.9 % | **13.8 %** | 449.90 € | stávame sa najlacnejší |
| G3Ferrari G2014401 Zmrzlinovač | 179.50 € | **175.00 €** | 10.3 % | **7.5 %** | 175.41 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 123.90 € | **119.50 €** | 15.1 % | **11.0 %** | 119.90 € | stávame sa najlacnejší |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 USB-C Mini | 196.90 € | **192.50 €** | 15.1 % | **12.5 %** | 192.90 € | stávame sa najlacnejší |
| Maxxo CD03 rádio | 138.50 € | **134.50 €** | 10.3 % | **7.1 %** | 134.57 € | stávame sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 242.90 € | **238.90 €** | 8.6 % | **6.8 %** | 239.00 € | stávame sa najlacnejší |
| Ariete ART 4631 | 138.50 € | **134.50 €** | 10.2 % | **7.1 %** | 134.67 € | stávame sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 86.50 € | **82.50 €** | 15.2 % | **9.8 %** | 82.76 € | stávame sa najlacnejší |
| Maxxo Chamber Line 30 | 179.50 € | **175.50 €** | 10.0 % | **7.6 %** | 175.80 € | stávame sa najlacnejší |
| Beko VRT76325VW | 167.00 € | **163.00 €** | 8.7 % | **6.1 %** | 163.31 € | stávame sa najlacnejší |
| Braun IS5247.VI | 189.00 € | **185.00 €** | 10.0 % | **7.7 %** | 185.45 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 159.00 € | **155.00 €** | 8.5 % | **5.8 %** | 155.46 € | stávame sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 203.90 € | **200.00 €** | 8.8 % | **6.7 %** | 200.28 € | stávame sa najlacnejší |
| Zelmer horkovzdušná fritéza ZAF9230 | 172.90 € | **169.00 €** | 8.4 % | **6.0 %** | 169.37 € | stávame sa najlacnejší |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.90 € | **107.00 €** | 15.1 % | **11.0 %** | 107.40 € | stávame sa najlacnejší |
| Photo Studio PULUZ 80 cm (PU5083EU) | 92.90 € | **89.00 €** | 15.0 % | **10.1 %** | 89.50 € | stávame sa najlacnejší |
| Electrolux EWS6526WC | 311.90 € | **308.00 €** | 7.8 % | **6.5 %** | 308.21 € | stávame sa najlacnejší |
| Rowenta RH98A9WO | 279.50 € | **275.90 €** | 7.7 % | **6.3 %** | 275.97 € | stávame sa najlacnejší |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 90.50 € | **86.90 €** | 15.1 % | **10.6 %** | 86.99 € | stávame sa najlacnejší |
| Sunnylife A3S-FI929 6ks sada filtrov Mix pre AIR 3S | 42.50 € | **39.00 €** | 14.6 % | **5.2 %** | 16.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 110G | 325.50 € | **322.00 €** | 8.1 % | **7.0 %** | 322.12 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 176.00 € | **172.50 €** | 8.4 % | **6.2 %** | 172.65 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 87.00 € | **83.50 €** | 14.8 % | **10.2 %** | 83.65 € | stávame sa najlacnejší |
| Beko VRT96425VD | 256.50 € | **253.00 €** | 7.6 % | **6.1 %** | 253.18 € | stávame sa najlacnejší |
| Guzzanti GZ 210A | 217.00 € | **213.50 €** | 7.7 % | **5.9 %** | 213.75 € | stávame sa najlacnejší |
| Tefal SV9201E0 | 195.00 € | **191.50 €** | 8.6 % | **6.6 %** | 191.76 € | stávame sa najlacnejší |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 136.50 € | **133.00 €** | 15.1 % | **12.2 %** | 133.30 € | stávame sa najlacnejší |
| Doplnok xTool Smart World pre mBot2 | 82.50 € | **79.00 €** | 15.0 % | **10.1 %** | 79.31 € | stávame sa najlacnejší |
| Rooma Espresso A6 bílá | 469.00 € | **465.50 €** | 6.8 % | **6.0 %** | 465.82 € | stávame sa najlacnejší |
| Black&Decker BXDH12E | 164.50 € | **161.00 €** | 8.3 % | **6.0 %** | 161.37 € | stávame sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 410.50 € | **407.00 €** | 7.0 % | **6.1 %** | 407.37 € | stávame sa najlacnejší |
| Ottocast CA400-S 4-in-1 Carplay/Android adapter (black) | 72.90 € | **69.50 €** | 15.2 % | **9.8 %** | 69.90 € | stávame sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 40.90 € | **37.50 €** | 15.0 % | **5.4 %** | 37.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freewell neutrálny filter ND32 pre OSMO 360 | 65.00 € | **61.90 €** | 14.9 % | **9.4 %** | 62.00 € | stávame sa najlacnejší |
| Maxxo INFRA DRY+ | 193.00 € | **189.90 €** | 9.6 % | **7.9 %** | 189.97 € | stávame sa najlacnejší |
| Čistiaci robot PROSCENIC Q20 Plus | 240.00 € | **236.90 €** | 15.0 % | **13.5 %** | 237.00 € | stávame sa najlacnejší |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **32.90 €** | 15.0 % | **5.4 %** | 32.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO344DH | 147.90 € | **144.90 €** | 8.6 % | **6.4 %** | 144.98 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Olympus | 127.90 € | **124.90 €** | 15.1 % | **12.4 %** | 125.00 € | stávame sa najlacnejší |
| Tester USB FNIRSI FNB-C2 | 39.00 € | **36.00 €** | 14.7 % | **5.9 %** | 36.17 € | stávame sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 44.50 € | **41.50 €** | 39.3 % | **29.9 %** | 41.70 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 507.50 € | **504.50 €** | 7.0 % | **6.3 %** | 504.74 € | stávame sa najlacnejší |
| Ottocast Play2Video Plus Carplay/Android Auto bezdrô... | 70.50 € | **67.50 €** | 15.1 % | **10.2 %** | 67.80 € | stávame sa najlacnejší |
| GORENJE GV520E15 | 289.50 € | **286.50 €** | 7.2 % | **6.0 %** | 286.87 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 50.90 € | **48.00 €** | 15.3 % | **8.7 %** | 48.29 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 38.90 € | **36.00 €** | 14.9 % | **6.3 %** | 36.29 € | stávame sa najlacnejší |
| Ufesa Sensazione černý | 334.90 € | **332.00 €** | 6.9 % | **6.0 %** | 332.14 € | stávame sa najlacnejší |
| G3Ferrari G2015706 Emilia 250 | 365.90 € | **363.00 €** | 6.8 % | **6.0 %** | 363.31 € | stávame sa najlacnejší |
| Rowenta RR8589CE | 400.90 € | **398.00 €** | 6.7 % | **6.0 %** | 398.49 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2-Z ZigBee (štvorbalen... | 30.50 € | **27.90 €** | 15.3 % | **5.5 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo čierne) | 30.50 € | **27.90 €** | 15.9 % | **6.0 %** | 22.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač hladiny hluku FNIRSI FDM-02 | 33.50 € | **30.90 €** | 15.3 % | **6.3 %** | 29.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor elektromagnetického žiarenia FNIRSI ERD-10 | 32.50 € | **29.90 €** | 14.6 % | **5.4 %** | 29.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2Plus | 45.50 € | **42.90 €** | 15.2 % | **8.6 %** | 42.92 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **92.90 €** | 14.9 % | **11.7 %** | 92.92 € | stávame sa najlacnejší |
| Electrolux LKR64022AW | 459.00 € | **456.50 €** | 5.6 % | **5.0 %** | 436.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 4 kusoch | 33.00 € | **30.50 €** | 14.6 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo-zlaté) | 30.00 € | **27.50 €** | 14.8 % | **5.3 %** | 22.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 59.50 € | **57.00 €** | 15.2 % | **10.4 %** | 57.17 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 559.50 € | **557.00 €** | 7.1 % | **6.6 %** | 557.19 € | stávame sa najlacnejší |
| Ariete Pizzeria 927/01, černá | 205.00 € | **202.50 €** | 7.3 % | **6.0 %** | 202.81 € | stávame sa najlacnejší |
| Domo DO9079KR-PROMO | 288.00 € | **285.50 €** | 7.2 % | **6.3 %** | 285.83 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 33.50 € | **31.00 €** | 14.6 % | **6.1 %** | 31.36 € | stávame sa najlacnejší |
| Vákuovačka G21 Nefrit | 117.90 € | **115.50 €** | 10.0 % | **7.8 %** | 115.90 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2 WiFi, 4 kusy (štvorb... | 28.90 € | **26.50 €** | 15.7 % | **6.1 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 30.90 € | **28.50 €** | 15.7 % | **6.7 %** | 27.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 51.90 € | **49.50 €** | 14.9 % | **9.6 %** | 49.90 € | stávame sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 128 GB | 28.00 € | **25.90 €** | 14.7 % | **6.1 %** | 23.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FF2588E0 | 82.00 € | **79.90 €** | 8.0 % | **5.2 %** | 76.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Základný krúžok Freewell 55 mm s vekom pre Real Lock... | 26.50 € | **24.50 €** | 14.4 % | **5.8 %** | 17.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 26.50 € | **24.50 €** | 15.2 % | **6.5 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zastrihávač pre domáce zvieratá 2v1 Petkit | 25.90 € | **23.90 €** | 14.9 % | **6.0 %** | 21.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 25.00 € | **23.00 €** | 14.3 % | **5.2 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 38.90 € | **36.90 €** | 11.5 % | **5.7 %** | 35.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 24.50 € | **22.50 €** | 14.5 % | **5.1 %** | 20.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 24.00 € | **22.00 €** | 14.6 % | **5.1 %** | 20.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Neutralizátor zápachu na čistenie podláh pre MOVA V5... | 26.50 € | **24.50 €** | 14.7 % | **6.0 %** | 23.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny decibelomer Habotest HT622B USB A/C | 26.90 € | **24.90 €** | 15.2 % | **6.6 %** | 24.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dotykový nástenný vypínač WiFi Sonoff T... | 24.50 € | **22.50 €** | 15.4 % | **6.0 %** | 22.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2 | 39.00 € | **37.00 €** | 14.5 % | **8.7 %** | 37.04 € | stávame sa najlacnejší |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 60.00 € | **58.00 €** | 14.9 % | **11.1 %** | 58.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 45.00 € | **43.00 €** | 14.9 % | **9.8 %** | 43.04 € | stávame sa najlacnejší |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 85.00 € | **83.00 €** | 14.8 % | **12.1 %** | 83.08 € | stávame sa najlacnejší |
| Napájací zdroj FNIRSI 100 W | 37.00 € | **35.00 €** | 15.1 % | **8.9 %** | 35.08 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT315A | 308.90 € | **306.90 €** | 15.0 % | **14.3 %** | 306.99 € | stávame sa najlacnejší |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 116.50 € | **114.50 €** | 14.9 % | **12.9 %** | 114.67 € | stávame sa najlacnejší |
| Colmi V65 Smartwatch (Gray) | 31.00 € | **29.00 €** | 14.9 % | **7.5 %** | 29.30 € | stávame sa najlacnejší |
| Reproduktory Edifier P12 2.0 (hnedé) | 61.00 € | **59.00 €** | 15.0 % | **11.2 %** | 59.30 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16KT s 16-palcovým dotykov... | 206.00 € | **204.00 €** | 14.9 % | **13.8 %** | 204.34 € | stávame sa najlacnejší |
| SONY WFC510B černá | 38.50 € | **36.50 €** | 13.6 % | **7.7 %** | 36.85 € | stávame sa najlacnejší |
| Solight profesionálny multimeter, tru RMS | 23.50 € | **21.50 €** | 43.8 % | **31.5 %** | 21.86 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Max | 568.00 € | **566.00 €** | 6.7 % | **6.3 %** | 566.36 € | stávame sa najlacnejší |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 76.50 € | **74.50 €** | 15.4 % | **12.4 %** | 74.88 € | stávame sa najlacnejší |
| MOZA RACING RS061 predĺženie stĺpika riadenia | 120.50 € | **118.50 €** | 15.1 % | **13.2 %** | 118.90 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 90.00 € | **88.00 €** | 14.8 % | **12.3 %** | 88.49 € | stávame sa najlacnejší |
| Odšťavovač G21 Chamberi horizontal | 158.00 € | **156.00 €** | 10.5 % | **9.1 %** | 156.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 102.90 € | **101.00 €** | 15.1 % | **13.0 %** | 101.04 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 111.90 € | **110.00 €** | 15.0 % | **13.0 %** | 110.38 € | stávame sa najlacnejší |
| Ručný multimeter do auta UNI-T UT107 | 30.90 € | **29.00 €** | 14.8 % | **7.8 %** | 29.29 € | stávame sa najlacnejší |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 47.90 € | **46.00 €** | 15.3 % | **10.7 %** | 46.32 € | stávame sa najlacnejší |
| Guzzanti GZ 210G | 454.90 € | **453.00 €** | 5.5 % | **5.0 %** | 453.36 € | stávame sa najlacnejší |
| Filters ND8/16/32 Freewell for DJI Neo | 20.50 € | **18.90 €** | 15.5 % | **6.5 %** | 17.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rýchlonabíjací kábel SDC DJI Power pre Inspire 3 | 20.50 € | **18.90 €** | 13.9 % | **5.0 %** | 19.00 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 2 kusoch | 17.50 € | **15.90 €** | 16.5 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 75.50 € | **73.90 €** | 7.7 % | **5.4 %** | 72.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Základný krúžok Freewell 58 mm s vekom pre Real Lock... | 20.00 € | **18.50 €** | 14.8 % | **6.1 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze GTS 4 (čierne) | 23.00 € | **21.50 €** | 14.9 % | **7.4 %** | 18.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze GTS 4 (strieborné) | 23.00 € | **21.50 €** | 14.9 % | **7.4 %** | 18.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 40.00 € | **38.50 €** | 10.1 % | **5.9 %** | 38.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 40.00 € | **38.50 €** | 10.1 % | **5.9 %** | 38.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonda FNIRSI P4100 | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 16.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 42.50 € | **41.00 €** | 14.7 % | **10.7 %** | 41.04 € | stávame sa najlacnejší |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 57.50 € | **56.00 €** | 15.0 % | **12.0 %** | 56.04 € | stávame sa najlacnejší |
| GORENJE GS620C10W | 338.00 € | **336.50 €** | 6.9 % | **6.4 %** | 336.59 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CP2A | 28.50 € | **27.00 €** | 15.7 % | **9.6 %** | 27.10 € | stávame sa najlacnejší |
| Stan Puluz 80 cm bez tieňov s LED svietidlom s výkon... | 75.00 € | **73.50 €** | 14.7 % | **12.4 %** | 73.60 € | stávame sa najlacnejší |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 72.00 € | **70.50 €** | 14.7 % | **12.3 %** | 70.60 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60Mi | 27.50 € | **26.00 €** | 13.7 % | **7.5 %** | 26.12 € | stávame sa najlacnejší |
| AMICA MV 647 AW | 335.00 € | **333.50 €** | 6.8 % | **6.3 %** | 333.66 € | stávame sa najlacnejší |
| Beko VRT86325VI | 199.50 € | **198.00 €** | 7.4 % | **6.6 %** | 198.22 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 137.50 € | **136.00 €** | 15.0 % | **13.7 %** | 136.22 € | stávame sa najlacnejší |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 19.50 € | **18.00 €** | 14.5 % | **5.7 %** | 18.29 € | stávame sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 346.00 € | **344.50 €** | 7.1 % | **6.6 %** | 344.89 € | stávame sa najlacnejší |
| Smart WiFi Touch Wall Switch Sonoff TX T5 3C (3-chan... | 22.00 € | **20.50 €** | 13.8 % | **6.0 %** | 20.90 € | stávame sa najlacnejší |
| Stolové svorky pre základňu AY210 Moza Racing AS013 | 28.00 € | **26.50 €** | 14.4 % | **8.3 %** | 26.90 € | stávame sa najlacnejší |
| JBL Grip White | 77.50 € | **76.00 €** | 8.2 % | **6.1 %** | 76.50 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI Black | 70.90 € | **69.50 €** | 15.3 % | **13.0 %** | 69.90 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 70.90 € | **69.50 €** | 15.3 % | **13.0 %** | 69.90 € | stávame sa najlacnejší |
| Čítačka pamäťových kariet SD/TF série Baseus Lite, U... | 14.90 € | **13.50 €** | 16.3 % | **5.3 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GameSir Nova Lite 2 Luminous White | 34.90 € | **33.50 €** | 10.1 % | **5.6 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 16.90 € | **15.50 €** | 16.0 % | **6.4 %** | 15.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 19.90 € | **18.50 €** | 15.4 % | **7.3 %** | 18.88 € | stávame sa najlacnejší |
| Polarizer Filter Freewell for DJI Avata 2 | 19.00 € | **17.90 €** | 13.7 % | **7.1 %** | 18.00 € | stávame sa najlacnejší |
| Svetelný merač UNI-T UT383 | 17.00 € | **15.90 €** | 14.5 % | **7.1 %** | 15.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LIB60420CK | 205.00 € | **203.90 €** | 8.0 % | **7.5 %** | 203.97 € | stávame sa najlacnejší |
| Solight PIR interiérový senzor, do krabičky od vypín... | 8.80 € | **7.80 €** | 44.2 % | **27.9 %** | 7.90 € | stávame sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 78.50 € | **77.50 €** | 7.0 % | **5.6 %** | 70.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C320WS | 44.90 € | **43.90 €** | 7.5 % | **5.1 %** | 39.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smart Switch WiFi + RF 433 Sonoff T2 EU TX (1-channe... | 15.90 € | **14.90 €** | 14.9 % | **7.7 %** | 11.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čítačka pamäťových kariet Lexar LRW310X Dual USB-A/C... | 12.50 € | **11.50 €** | 15.9 % | **6.6 %** | 8.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun CG9043 | 215.00 € | **214.00 €** | 7.6 % | **7.1 %** | 214.03 € | stávame sa najlacnejší |
| 3D skener Revopoint POP 4 Premium | 931.90 € | **930.90 €** | 15.0 % | **14.9 %** | 930.99 € | stávame sa najlacnejší |
| UV Filter Freewell for DJI Avata 2 | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 17.90 € | **16.90 €** | 13.3 % | **6.9 %** | 17.00 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.4 %** | 21.12 € | stávame sa najlacnejší |
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
| Digitálny multimeter UNI-T UT118B | 27.50 € | **26.50 €** | 15.6 % | **11.4 %** | 26.69 € | stávame sa najlacnejší |
| Vákuovačka G21 Onyx | 55.50 € | **54.50 €** | 11.4 % | **9.4 %** | 54.69 € | stávame sa najlacnejší |
| D-LINK AC13U | 15.00 € | **14.00 €** | 18.9 % | **10.9 %** | 14.21 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (modrý) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.21 € | stávame sa najlacnejší |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Freewell Osmo Pocket 4P ND8 ND/PL filter | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND32/PL | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND64/PL | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND16 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND32 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND8 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell pre Osmo Pocket ND64 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 42.50 € | **41.50 €** | 15.0 % | **12.3 %** | 41.75 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI-T UT333S | 24.50 € | **23.50 €** | 14.4 % | **9.7 %** | 23.79 € | stávame sa najlacnejší |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 42.00 € | **41.00 €** | 14.7 % | **12.0 %** | 41.29 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (strieborné) | 27.50 € | **26.50 €** | 15.4 % | **11.2 %** | 26.80 € | stávame sa najlacnejší |
| Edifier SS03 stojany pre reproduktory Edifier S3000M... | 122.00 € | **121.00 €** | 14.8 % | **13.8 %** | 121.30 € | stávame sa najlacnejší |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 16.50 € | **15.50 €** | 14.8 % | **7.8 %** | 15.83 € | stávame sa najlacnejší |
| Bezdrôtové napájadlo pre domáce zvieratá Rojeco 2,5 L | 32.50 € | **31.50 €** | 14.8 % | **11.3 %** | 31.83 € | stávame sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT113 | 11.50 € | **10.50 €** | 16.4 % | **6.3 %** | 10.85 € | stávame sa najlacnejší |
| Mikrofón Maono DM40 Pro (biely) | 53.00 € | **52.00 €** | 14.9 % | **12.7 %** | 52.38 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 25.50 € | **24.50 €** | 25.3 % | **20.4 %** | 24.89 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.50 € | **21.50 €** | 11.7 % | **6.8 %** | 21.89 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan bílé dřevo 350ml | 18.50 € | **17.50 €** | 12.6 % | **6.5 %** | 17.89 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.50 € | **17.50 €** | 12.6 % | **6.5 %** | 17.89 € | stávame sa najlacnejší |
| Solight digitálny kapesny kompresor mini | 39.50 € | **38.50 €** | 19.8 % | **16.8 %** | 38.89 € | stávame sa najlacnejší |
| Odšťavovač G21 Gracioso horizontal | 201.50 € | **200.50 €** | 12.6 % | **12.0 %** | 200.89 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 18.50 € | **17.50 €** | 23.0 % | **16.3 %** | 17.89 € | stávame sa najlacnejší |
| Freewell ND1000 Filter pre OSMO Action 6 | 17.00 € | **16.00 €** | 13.4 % | **6.7 %** | 16.42 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 19.00 € | **18.00 €** | 14.3 % | **8.2 %** | 18.42 € | stávame sa najlacnejší |
| Schodík pred mačaciu toaletu Catlink Scooper (sivé) | 85.00 € | **84.00 €** | 14.9 % | **13.5 %** | 84.42 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (white) | 44.00 € | **43.00 €** | 14.7 % | **12.1 %** | 43.46 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 69.00 € | **68.00 €** | 15.0 % | **13.4 %** | 68.49 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X2 s AI senzorom (čierny) | 69.00 € | **68.00 €** | 15.0 % | **13.4 %** | 68.49 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max White robotický s mopo... | 124.00 € | **123.00 €** | 6.3 % | **5.4 %** | 123.50 € | stávame sa najlacnejší |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 89.00 € | **88.00 €** | 15.1 % | **13.8 %** | 88.50 € | stávame sa najlacnejší |
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 229.00 € | **228.00 €** | 8.0 % | **7.6 %** | 228.50 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (čierne) | 99.00 € | **98.00 €** | 14.8 % | **13.6 %** | 98.50 € | stávame sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.90 € | **64.00 €** | 15.1 % | **13.5 %** | 64.50 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T A13T | 10.90 € | **10.00 €** | 15.5 % | **6.0 %** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, biely | 7.70 € | **6.80 €** | 44.2 % | **27.4 %** | 6.90 € | stávame sa najlacnejší |
| Digitálny multimeter Habotest HT86B | 11.90 € | **11.00 €** | 16.4 % | **7.6 %** | 11.46 € | stávame sa najlacnejší |
| UV svietidlo Superfire A5, 365NM | 13.90 € | **13.00 €** | 14.8 % | **7.4 %** | 13.50 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT200R | 17.90 € | **17.00 €** | 15.2 % | **9.4 %** | 17.32 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Black | 45.90 € | **45.00 €** | 7.6 % | **5.5 %** | 45.39 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Red/Black | 45.90 € | **45.00 €** | 7.6 % | **5.5 %** | 45.39 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 – Advanced Edition | 953.50 € | **952.90 €** | 15.0 % | **14.9 %** | 953.00 € | stávame sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 32.50 € | **31.90 €** | 8.0 % | **6.0 %** | 30.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 22.50 € | **21.90 €** | 9.3 % | **6.4 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Palm tmavé drevo 500 ml | 22.50 € | **21.90 €** | 11.7 % | **8.8 %** | 22.00 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan biely lesk 350 ml | 18.50 € | **17.90 €** | 12.6 % | **8.9 %** | 18.00 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, šedá s rukoväťou | 18.50 € | **17.90 €** | 15.1 % | **11.3 %** | 18.00 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA420 Deodorizačný modul... | 35.50 € | **34.90 €** | 13.1 % | **11.2 %** | 35.00 € | stávame sa najlacnejší |
| Batéria Jupio C 5000mAh (malé monočlánky) 2ks, dobíj... | 18.50 € | **17.90 €** | 8.8 % | **5.3 %** | 18.00 € | stávame sa najlacnejší |
| Batéria Jupio Alkaline AA balenie 100ks | 35.50 € | **34.90 €** | 8.5 % | **6.7 %** | 35.00 € | stávame sa najlacnejší |
| DOMO DO354VD | 130.50 € | **129.90 €** | 8.2 % | **7.7 %** | 129.98 € | stávame sa najlacnejší |
| Blender G21 Comfort Graphite Black | 151.50 € | **150.90 €** | 12.7 % | **12.3 %** | 151.00 € | stávame sa najlacnejší |
| Blender G21 Excellent Graphite Black | 231.50 € | **230.90 €** | 17.6 % | **17.3 %** | 231.00 € | stávame sa najlacnejší |
| Blender G21 Excellent red | 231.50 € | **230.90 €** | 17.6 % | **17.3 %** | 231.00 € | stávame sa najlacnejší |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 18.00 € | **17.50 €** | 10.0 % | **7.0 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 23.00 € | **22.50 €** | 43.2 % | **40.1 %** | 22.54 € | stávame sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 24.50 € | **24.00 €** | 14.4 % | **12.1 %** | 24.04 € | stávame sa najlacnejší |
| Solight PIR stropný senzor, interiérový, biely | 7.30 € | **6.80 €** | 43.7 % | **33.9 %** | 6.90 € | stávame sa najlacnejší |
| CR-PETG Filament Creality (Transparent) | 11.50 € | **11.00 €** | 16.6 % | **11.5 %** | 11.12 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 143.50 € | **143.00 €** | 8.2 % | **7.8 %** | 143.17 € | stávame sa najlacnejší |
| Filter Freewell CPL pre Insta360 Luna Ultra | 23.00 € | **22.50 €** | 13.9 % | **11.4 %** | 22.67 € | stávame sa najlacnejší |
| Filament Anycubic TPU (mliečna biela) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadný) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná modrá) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná zelená) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 76.50 € | **76.00 €** | 9.5 % | **8.7 %** | 76.19 € | stávame sa najlacnejší |
| Průmyslový endoskop Ermenrich Seek VE50 Fialový | 147.50 € | **147.00 €** | 5.8 % | **5.5 %** | 147.19 € | stávame sa najlacnejší |
| Vodný chladič CPU Darkflash DV240S (biely) | 68.50 € | **68.00 €** | 15.3 % | **14.4 %** | 68.20 € | stávame sa najlacnejší |
| Vodný chladič CPU Darkflash DV240S (čierny) | 68.50 € | **68.00 €** | 15.3 % | **14.4 %** | 68.20 € | stávame sa najlacnejší |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 30.00 € | **29.50 €** | 14.5 % | **12.5 %** | 29.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.50 € | **44.00 €** | 7.0 % | **5.8 %** | 44.28 € | stávame sa najlacnejší |
| Colmi P71 Smartwatch (Blue) | 18.50 € | **18.00 €** | 15.7 % | **12.6 %** | 18.29 € | stávame sa najlacnejší |
| WHIRLPOOL WI 7020 P | 331.50 € | **331.00 €** | 8.1 % | **8.0 %** | 331.30 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 48.50 € | **48.00 €** | 16.0 % | **14.8 %** | 48.31 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 48.50 € | **48.00 €** | 12.7 % | **11.6 %** | 48.31 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **45.00 €** | 21.5 % | **20.2 %** | 45.33 € | stávame sa najlacnejší |
| ETA Magic X-treme 7235 90000 černý/modrý | 329.00 € | **328.50 €** | 6.7 % | **6.5 %** | 328.84 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.50 € | **13.00 €** | 36.3 % | **31.3 %** | 13.37 € | stávame sa najlacnejší |
| Mikrofón Maono DM40 Pro (čierny) | 52.50 € | **52.00 €** | 14.6 % | **13.6 %** | 52.38 € | stávame sa najlacnejší |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.50 € | **24.00 €** | 15.2 % | **12.9 %** | 24.38 € | stávame sa najlacnejší |
| Krüger&Matz HL-CP03 bezdrátový adaptér CarPlay - And... | 22.00 € | **21.50 €** | 8.6 % | **6.1 %** | 21.89 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 13.50 € | **13.00 €** | 10.2 % | **6.1 %** | 13.39 € | stávame sa najlacnejší |
| Leifheit Thermo Reflect L/Universal | 14.50 € | **14.00 €** | 16.8 % | **12.8 %** | 14.39 € | stávame sa najlacnejší |
| Leifheit LinoLift 500 85359 | 55.50 € | **55.00 €** | 10.6 % | **9.7 %** | 55.39 € | stávame sa najlacnejší |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.50 € | **18.00 €** | 9.7 % | **6.7 %** | 18.39 € | stávame sa najlacnejší |
| DOMO DO42329PC | 115.50 € | **115.00 €** | 8.0 % | **7.5 %** | 115.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 326.00 € | **325.50 €** | 10.9 % | **10.7 %** | 325.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT GETI GWH04W 5kW (pro FV ohřev... | 356.50 € | **356.00 €** | 21.8 % | **21.6 %** | 356.39 € | stávame sa najlacnejší |
| Ariete ART 808/05 | 58.50 € | **58.00 €** | 6.0 % | **5.1 %** | 58.39 € | stávame sa najlacnejší |
| Tefal BL16GE30 | 56.50 € | **56.00 €** | 6.2 % | **5.2 %** | 56.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 142.00 € | **141.50 €** | 9.6 % | **9.2 %** | 141.89 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 26.00 € | **25.50 €** | 14.8 % | **12.5 %** | 25.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3224 | 27.00 € | **26.50 €** | 15.4 % | **13.2 %** | 26.89 € | stávame sa najlacnejší |
| DOMO DO9286IB | 249.50 € | **249.00 €** | 6.5 % | **6.2 %** | 249.39 € | stávame sa najlacnejší |
| DOMO DO42102SV | 97.50 € | **97.00 €** | 7.5 % | **7.0 %** | 97.39 € | stávame sa najlacnejší |
| PRIMO PR406IM | 125.50 € | **125.00 €** | 7.2 % | **6.8 %** | 125.39 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 279.00 € | **278.50 €** | 8.5 % | **8.3 %** | 278.89 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 208.00 € | **207.50 €** | 11.8 % | **11.6 %** | 207.89 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 65.00 € | **64.50 €** | 7.9 % | **7.1 %** | 64.89 € | stávame sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DGS-108) | 21.50 € | **21.00 €** | 9.7 % | **7.1 %** | 21.39 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 109.00 € | **108.50 €** | 6.8 % | **6.3 %** | 108.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 241.00 € | **240.50 €** | 8.8 % | **8.6 %** | 240.89 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 132.00 € | **131.50 €** | 5.7 % | **5.3 %** | 131.89 € | stávame sa najlacnejší |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 87.00 € | **86.50 €** | 9.8 % | **9.2 %** | 86.89 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 90.00 € | **89.50 €** | 7.1 % | **6.5 %** | 89.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 119.50 € | **119.00 €** | 8.9 % | **8.5 %** | 119.39 € | stávame sa najlacnejší |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 109.00 € | **108.50 €** | 7.7 % | **7.2 %** | 108.89 € | stávame sa najlacnejší |
| Johansson 6700 Revolution programovatelný zesilovač | 271.00 € | **270.50 €** | 6.9 % | **6.7 %** | 270.89 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 208.00 € | **207.50 €** | 9.1 % | **8.9 %** | 207.89 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 194.00 € | **193.50 €** | 9.4 % | **9.1 %** | 193.89 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0034 FUN WHEELS LIGHT ... | 111.00 € | **110.50 €** | 14.8 % | **14.2 %** | 110.89 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0033 FUN WHEELS LIGHT ... | 111.00 € | **110.50 €** | 14.8 % | **14.2 %** | 110.89 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Classic Style | 12.00 € | **11.50 €** | 13.0 % | **8.3 %** | 11.90 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Eccentric Style | 12.00 € | **11.50 €** | 13.0 % | **8.3 %** | 11.90 € | stávame sa najlacnejší |
| Stropné svetlo Yeelight C2201C400 | 64.50 € | **64.00 €** | 15.7 % | **14.8 %** | 64.40 € | stávame sa najlacnejší |
| Sous vide G21 Maestro, WiFi, 1200 W | 106.00 € | **105.50 €** | 10.0 % | **9.4 %** | 105.90 € | stávame sa najlacnejší |
| Grafický tablet Huion HS64 | 39.50 € | **39.00 €** | 14.9 % | **13.4 %** | 39.40 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1502 | 236.00 € | **235.50 €** | 42537.8 % | **42447.4 %** | 235.90 € | stávame sa najlacnejší |
| Veslařský trenažér HMS Premium ZW1600 | 670.00 € | **669.50 €** | 120947.9 % | **120857.5 %** | 669.90 € | stávame sa najlacnejší |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 368.00 € | **367.50 €** | 66386.0 % | **66295.7 %** | 367.90 € | stávame sa najlacnejší |
| Candy GD 49B8-S | 287.50 € | **287.00 €** | 8.0 % | **7.8 %** | 287.40 € | stávame sa najlacnejší |
| DOMO DO716BL | 84.50 € | **84.00 €** | 9.6 % | **9.0 %** | 84.41 € | stávame sa najlacnejší |
| Blender G21 Experience White | 252.50 € | **252.00 €** | 17.6 % | **17.4 %** | 252.42 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **20.00 €** | 50.3 % | **46.6 %** | 20.45 € | stávame sa najlacnejší |
| HP 15,6" Taška Prelude | 16.50 € | **16.00 €** | 25.4 % | **21.6 %** | 16.46 € | stávame sa najlacnejší |
| Superfire BM01 4-in-1 bicycle light | 19.50 € | **19.00 €** | 14.1 % | **11.1 %** | 19.46 € | stávame sa najlacnejší |
| Filament Anycubic TPU (čierny) 1 kg | 21.50 € | **21.00 €** | 11.6 % | **9.0 %** | 21.47 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.50 € | **13.00 €** | 14.0 % | **9.8 %** | 13.49 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 16.50 € | **16.00 €** | 29.1 % | **25.2 %** | 16.49 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creallity (Silver) | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.49 € | stávame sa najlacnejší |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 44.50 € | **44.00 €** | 15.4 % | **14.1 %** | 44.49 € | stávame sa najlacnejší |
| Digitálny rámik Arzopa D10 10,1" (tmavohnedý) | 72.90 € | **72.50 €** | 15.2 % | **14.5 %** | 72.60 € | stávame sa najlacnejší |
| G3Ferrari G1022600 | 120.90 € | **120.50 €** | 10.2 % | **9.8 %** | 120.70 € | stávame sa najlacnejší |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.90 € | **84.50 €** | 9.4 % | **8.8 %** | 84.80 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Sony | 127.90 € | **127.50 €** | 15.1 % | **14.8 %** | 127.81 € | stávame sa najlacnejší |
| Girmi FG9201 | 116.90 € | **116.50 €** | 10.1 % | **9.7 %** | 116.82 € | stávame sa najlacnejší |
| Girmi FG4101 | 139.90 € | **139.50 €** | 10.1 % | **9.7 %** | 139.83 € | stávame sa najlacnejší |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 71.90 € | **71.50 €** | 17.3 % | **16.7 %** | 71.89 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 11.90 € | **11.50 €** | 11.1 % | **7.3 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Honey Day 160 ml | 10.90 € | **10.50 €** | 11.6 % | **7.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.90 € | **9.50 €** | 24.8 % | **19.7 %** | 9.56 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.90 € | **10.50 €** | 24.8 % | **20.2 %** | 10.59 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 12.90 € | **12.50 €** | 40.4 % | **36.0 %** | 12.75 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 13.90 € | **13.50 €** | 39.9 % | **35.8 %** | 13.79 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 10.90 € | **10.50 €** | 31.3 % | **26.5 %** | 10.79 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.90 € | **11.50 €** | 45.7 % | **40.8 %** | 11.84 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 11.90 € | **11.50 €** | 18.3 % | **14.3 %** | 11.84 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.90 € | **10.50 €** | 26.2 % | **21.6 %** | 10.86 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.90 € | **10.50 €** | 19.3 % | **14.9 %** | 10.86 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.90 € | **14.50 €** | 12.0 % | **9.0 %** | 14.87 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.80 € | **5.40 €** | 28.8 % | **20.0 %** | 5.49 € | stávame sa najlacnejší |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.10 € | **4.70 €** | 35.9 % | **25.3 %** | 4.79 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 34.90 € | **34.50 €** | 7.6 % | **6.4 %** | 34.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 27.90 € | **27.50 €** | 8.1 % | **6.6 %** | 27.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.90 € | **16.50 €** | 35.5 % | **32.3 %** | 16.70 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.90 € | **19.50 €** | 43.7 % | **40.8 %** | 19.70 € | stávame sa najlacnejší |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.90 € | **17.50 €** | 46.6 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 27.90 € | **27.50 €** | 25.4 % | **23.6 %** | 27.73 € | stávame sa najlacnejší |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.90 € | **17.50 €** | 15.2 % | **12.6 %** | 17.77 € | stávame sa najlacnejší |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.90 € | **17.50 €** | 15.4 % | **12.8 %** | 17.77 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit 2AIR | 32.90 € | **32.50 €** | 13.8 % | **12.4 %** | 32.79 € | stávame sa najlacnejší |
| Evolveo Motion D1, ovladač s klávesnicí | 33.90 € | **33.50 €** | 7.7 % | **6.5 %** | 33.79 € | stávame sa najlacnejší |
| Niceboy ORYX X220 Iris | 20.90 € | **20.50 €** | 18.1 % | **15.8 %** | 20.80 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.90 € | **19.50 €** | 39.6 % | **36.8 %** | 19.80 € | stávame sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 35.90 € | **35.50 €** | 7.1 % | **6.0 %** | 35.86 € | stávame sa najlacnejší |
| Baterie olověná  12V / 12Ah  GETI bezúdržbový akumul... | 37.90 € | **37.50 €** | 8.9 % | **7.7 %** | 37.88 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.90 € | **28.50 €** | 39.1 % | **37.2 %** | 28.89 € | stávame sa najlacnejší |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 18.90 € | **18.50 €** | 20.0 % | **17.5 %** | 18.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40T | 28.90 € | **28.50 €** | 12.4 % | **10.9 %** | 28.89 € | stávame sa najlacnejší |
| Electrolux 600 FLEX EES42210IX | 471.90 € | **471.50 €** | 7.1 % | **7.0 %** | 471.80 € | stávame sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 7.00 € | **6.70 €** | 37.8 % | **31.9 %** | 6.79 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 9.70 € | **9.50 €** | 21.7 % | **19.2 %** | 9.59 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierne) | 28.00 € | **27.90 €** | 6.7 % | **6.3 %** | 26.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka baterií GP ReCyko B423 4× AA GP ReCyko 210... | 17.00 € | **16.90 €** | 8.1 % | **7.4 %** | 16.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 51.00 € | **50.90 €** | 5.7 % | **5.5 %** | 50.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stabilizátor AOCHUAN X Pro Standard (čierny) | 55.00 € | **54.90 €** | 14.7 % | **14.4 %** | 54.94 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.90 €** | 16.5 % | **15.9 %** | 19.95 € | stávame sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 38.00 € | **37.90 €** | 32.0 % | **31.7 %** | 37.95 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 22.00 € | **21.90 €** | 25.3 % | **24.8 %** | 21.99 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 21.00 € | **20.90 €** | 16.7 % | **16.1 %** | 20.99 € | stávame sa najlacnejší |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 51.00 € | **50.90 €** | 12.7 % | **12.5 %** | 50.99 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.90 €** | 8.2 % | **7.9 %** | 40.99 € | stávame sa najlacnejší |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.00 € | **38.90 €** | 14.2 % | **13.9 %** | 38.99 € | stávame sa najlacnejší |
| Cycplus AS2 mini electric pump | 42.00 € | **41.90 €** | 7.2 % | **7.0 %** | 41.99 € | stávame sa najlacnejší |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 5.20 € | **5.10 €** | 13.0 % | **10.9 %** | 5.15 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 6.70 € | **6.60 €** | 30.6 % | **28.7 %** | 6.65 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.70 € | **5.60 €** | 37.1 % | **34.7 %** | 5.67 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.70 € | **7.60 €** | 44.2 % | **42.4 %** | 7.67 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.20 €** | 40.9 % | **30.1 %** | 1.25 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.20 €** | 40.9 % | **30.1 %** | 1.25 € | stávame sa najlacnejší |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.90 € | **2.80 €** | 23.4 % | **19.2 %** | 2.85 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.90 € | **3.80 €** | 17.4 % | **14.4 %** | 3.85 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 3.00 € | **2.90 €** | 46.0 % | **41.2 %** | 2.98 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.40 €** | 34.2 % | **30.4 %** | 3.48 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.70 € | **2.60 €** | 37.2 % | **32.1 %** | 2.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **3.50 €** | 15.7 % | **12.5 %** | 3.59 € | stávame sa najlacnejší |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **1.90 €** | 23.2 % | **17.0 %** | 1.99 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.20 € | **1.10 €** | 39.4 % | **27.8 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.90 € | **1.80 €** | 45.7 % | **38.1 %** | 1.89 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110M regulácia 230V cez ... | 16.00 € | **15.90 €** | 8.0 % | **7.4 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.90 € | **8.80 €** | 11.5 % | **10.2 %** | 8.84 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **9.90 €** | 38.7 % | **37.4 %** | 9.95 € | stávame sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 10.00 € | **9.90 €** | 45.7 % | **44.2 %** | 9.95 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.30 € | **3.20 €** | 36.2 % | **32.1 %** | 3.25 € | stávame sa najlacnejší |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 12.00 € | **11.90 €** | 47.4 % | **46.1 %** | 11.96 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.20 € | **9.10 €** | 31.5 % | **30.0 %** | 9.16 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **7.00 €** | 6.9 % | **5.4 %** | 7.06 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.80 € | **2.70 €** | 35.5 % | **30.7 %** | 2.77 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.30 € | **5.20 €** | 37.2 % | **34.6 %** | 5.28 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 9.00 € | **8.90 €** | 17.1 % | **15.8 %** | 8.99 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.10 € | **8.00 €** | 11.1 % | **9.7 %** | 8.09 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 6.30 € | **6.20 €** | 16.9 % | **15.1 %** | 6.29 € | stávame sa najlacnejší |
| Solight digitálny merač spotreby el. energie, veľký ... | 10.00 € | **9.90 €** | 25.1 % | **23.8 %** | 9.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.60 € | **7.50 €** | 24.8 % | **23.2 %** | 7.59 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.40 €** | 28.3 % | **26.3 %** | 6.49 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.40 €** | 8.7 % | **7.1 %** | 6.49 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 2.80 € | **2.70 €** | 27.9 % | **23.3 %** | 2.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 8.00 € | **7.90 €** | 36.9 % | **35.2 %** | 7.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.30 € | **5.20 €** | 21.0 % | **18.8 %** | 5.29 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.40 € | **8.30 €** | 43.8 % | **42.1 %** | 8.39 € | stávame sa najlacnejší |

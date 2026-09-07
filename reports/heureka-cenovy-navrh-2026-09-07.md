# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-07

Vstup: `premiumstoresk_20260907_0635.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **6000**
- Návrh **zvýšiť** cenu: **769** produktov
- Návrh **znížiť** cenu: **560** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4671** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **132**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (769)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Batéria MOVA pre model G70 | 89.50 € | **137.50 €** | 13.4 % | **74.3 %** | 137.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EW8F5412SAC | 677.90 € | **709.90 €** | 5.1 % | **10.0 %** | 709.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO RFSA240M43WN | 368.90 € | **399.00 €** | 5.1 % | **13.7 %** | 399.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nano projektor JMGO N1S | 466.90 € | **496.50 €** | 8.1 % | **15.0 %** | 496.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 396.50 € | **424.50 €** | 7.5 % | **15.0 %** | 424.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1305.50 € | **1330.00 €** | 11.2 % | **13.3 %** | 1330.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy BRS 7N3BX-S | 460.90 € | **482.90 €** | 5.1 % | **10.1 %** | 482.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 340A | 412.00 € | **431.90 €** | 5.0 % | **10.1 %** | 431.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Okuliare RayNeo X3 Pro AR | 1532.00 € | **1549.90 €** | 13.7 % | **15.0 %** | 1549.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 688.90 € | **699.00 €** | 6.2 % | **7.7 %** | 699.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 338 | 572.50 € | **582.50 €** | 8.0 % | **9.9 %** | 582.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit TBOX-Plus 4+64 GB | 119.50 € | **129.00 €** | 6.4 % | **14.9 %** | 129.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Grafický tablet Huion Kamvas Pro 13 GT133 | 210.50 € | **220.00 €** | 10.0 % | **15.0 %** | 220.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 205.50 € | **214.50 €** | 10.2 % | **15.0 %** | 214.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| TechniSat DIGITRADIO 372 CD BT černé | 159.50 € | **168.00 €** | 9.8 % | **15.7 %** | 168.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| TechniSat DIGITRADIO 372 CD BT stříbrné | 159.50 € | **168.00 €** | 9.8 % | **15.7 %** | 168.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 230.50 € | **237.50 €** | 5.1 % | **8.2 %** | 237.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 91 | 188.00 € | **195.00 €** | 5.0 % | **8.9 %** | 195.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 41.00 € | **47.50 €** | 19.3 % | **38.3 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal EY8328E0 | 119.00 € | **124.50 €** | 5.6 % | **10.4 %** | 124.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 21.50 € | **26.50 €** | 6.0 % | **30.7 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 258.90 € | **263.90 €** | 7.0 % | **9.1 %** | 263.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 31.90 € | **36.50 €** | 17.7 % | **34.6 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 41.90 € | **46.50 €** | 5.6 % | **17.2 %** | 46.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Arzopa Portable Monitor Z1FC 16,1" | 114.90 € | **119.50 €** | 10.4 % | **14.9 %** | 114.93 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO331L | 102.50 € | **106.90 €** | 5.5 % | **10.0 %** | 106.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RO6164EA | 138.50 € | **142.90 €** | 5.4 % | **8.7 %** | 142.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G10153 Horkovzdušná trouba | 165.90 € | **170.00 €** | 6.4 % | **9.0 %** | 170.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 417.50 € | **421.50 €** | 12.4 % | **13.5 %** | 417.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 16.50 € | **20.50 €** | 12.4 % | **39.6 %** | 16.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| ROWENTA RO 3985 EA | 72.00 € | **76.00 €** | 5.1 % | **10.9 %** | 76.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 52127 Set Clean Twist M Ergo | 39.90 € | **43.90 €** | 5.1 % | **15.6 %** | 43.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WOI4S8PPM1SX | 444.00 € | **447.90 €** | 5.0 % | **5.9 %** | 447.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT76325VW | 163.50 € | **167.00 €** | 6.4 % | **8.7 %** | 167.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Braun IS5247.VI | 185.50 € | **189.00 €** | 8.0 % | **10.0 %** | 189.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 109A | 155.50 € | **159.00 €** | 6.1 % | **8.5 %** | 159.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer horkovzdušná fritéza ZAF9230 | 169.50 € | **172.90 €** | 6.3 % | **8.4 %** | 172.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 49.50 € | **52.90 €** | 5.6 % | **12.8 %** | 49.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Tune 670NC white | 60.90 € | **64.00 €** | 5.3 % | **10.7 %** | 60.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BMGB25332BG | 176.90 € | **180.00 €** | 7.3 % | **9.2 %** | 177.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 16.00 € | **19.00 €** | 13.8 % | **35.1 %** | 16.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| CrockPot CSC062X | 155.00 € | **158.00 €** | 5.1 % | **7.1 %** | 157.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 338.90 € | **341.90 €** | 5.8 % | **6.7 %** | 341.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Black&Decker BXDH12E | 161.50 € | **164.50 €** | 6.4 % | **8.3 %** | 164.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE WPNEI94A1SWIFI | 407.50 € | **410.50 €** | 6.2 % | **7.0 %** | 410.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka USB-C, 90W, PD fast charger | 13.90 € | **16.90 €** | 20.1 % | **46.0 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO344DH | 145.00 € | **147.90 €** | 6.5 % | **8.6 %** | 147.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 16.00 € | **18.90 €** | 15.9 % | **37.0 %** | 16.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 37.00 € | **39.90 €** | 7.7 % | **16.1 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ottocast Play2Video Plus Carplay/Android Auto bezdrô... | 67.90 € | **70.50 €** | 10.9 % | **15.1 %** | 70.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje F492PW | 173.00 € | **175.50 €** | 7.4 % | **9.0 %** | 173.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 11.50 € | **13.90 €** | 12.1 % | **35.5 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| FENDA F&D A180X | 40.50 € | **42.90 €** | 5.9 % | **12.1 %** | 40.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G2015706 Emilia 250 | 363.50 € | **365.90 €** | 6.1 % | **6.8 %** | 365.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete Pizzeria 927/01, černá | 202.90 € | **205.00 €** | 6.2 % | **7.3 %** | 205.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 25.50 € | **27.50 €** | 6.7 % | **15.1 %** | 27.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 480.90 € | **482.90 €** | 5.1 % | **5.5 %** | 482.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Činky REBEL ACTIVE RBA-2330-2 litinové neoprenové HE... | 12.50 € | **14.50 €** | 6.9 % | **24.0 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 9.00 € | **10.90 €** | 20.1 % | **45.5 %** | 9.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight akumulátorové záhradné nožnice | 62.00 € | **63.90 €** | 13.1 % | **16.6 %** | 62.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal KO5S08E0 | 33.90 € | **35.50 €** | 6.2 % | **11.2 %** | 35.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cabletech UCH0204 | 18.90 € | **20.50 €** | 6.2 % | **15.2 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| MOZA RACING RS061 predĺženie stĺpika riadenia | 118.90 € | **120.50 €** | 13.6 % | **15.1 %** | 120.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 22.00 € | **23.50 €** | 37.2 % | **46.5 %** | 22.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 14.00 € | **15.50 €** | 17.6 % | **30.2 %** | 14.21 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 21.00 € | **22.50 €** | 26.4 % | **35.4 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tréninkové háky REBEL RBA-2505 | 10.50 € | **12.00 €** | 5.9 % | **21.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA A-S201 BLACK | 243.50 € | **245.00 €** | 8.6 % | **9.3 %** | 245.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA A-S201 SILVER | 243.50 € | **245.00 €** | 8.4 % | **9.1 %** | 245.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 49dB | 24.00 € | **25.50 €** | 22.9 % | **30.6 %** | 25.57 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson MIC201IBT | 113.50 € | **114.90 €** | 11.2 % | **12.6 %** | 113.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 8.00 € | **9.40 €** | 15.5 % | **35.7 %** | 8.07 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight batériová kamera WiFi so solárnym panelom | 57.50 € | **58.90 €** | 32.4 % | **35.6 %** | 57.55 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Combi Clean M + náhr. Static | 20.50 € | **21.90 €** | 7.5 % | **14.9 %** | 21.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 15.50 € | **16.90 €** | 27.5 % | **39.1 %** | 16.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.50 € | **31.90 €** | 11.3 % | **16.5 %** | 31.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless controler GameSir T4n (white) | 24.50 € | **25.90 €** | 14.6 % | **21.2 %** | 25.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 62.90 € | **64.00 €** | 10.2 % | **12.2 %** | 62.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB A+C 20W fast charger | 5.40 € | **6.40 €** | 15.5 % | **36.9 %** | 5.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 16.50 € | **17.50 €** | 25.1 % | **32.7 %** | 16.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.50 € | **11.50 €** | 26.3 % | **38.3 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 16.00 € | **17.00 €** | 28.8 % | **36.8 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight domáca kamera s nočným svetlom a hodinami | 33.00 € | **34.00 €** | 11.5 % | **14.9 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 167.50 € | **168.50 €** | 5.6 % | **6.2 %** | 168.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 170.50 € | **171.50 €** | 17.8 % | **18.5 %** | 171.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica MI 446 TBIM | 527.90 € | **528.90 €** | 5.9 % | **6.1 %** | 528.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Concept ETV8360bcN | 525.50 € | **526.50 €** | 6.9 % | **7.1 %** | 526.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Záložní zdroj MHPower MPU-3500-48 UPS 3500W 48V čist... | 302.90 € | **303.90 €** | 61465.0 % | **61668.3 %** | 303.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 76.90 € | **77.90 €** | 17.2 % | **18.7 %** | 77.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 26.90 € | **27.90 €** | 9.5 % | **13.5 %** | 27.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje MVC72HGA | 28.90 € | **29.90 €** | 6.4 % | **10.1 %** | 29.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 37.50 € | **38.50 €** | 10.7 % | **13.6 %** | 38.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá FIXED Pods 2, bezdrôtové, TWS, biela | 23.90 € | **24.90 €** | 5.4 % | **9.8 %** | 24.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Stěrka XL40 cm s teles.tyčí | 24.50 € | **25.50 €** | 7.1 % | **11.5 %** | 25.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Octagon SFX6018 S2 IP HD | 73.90 € | **74.90 €** | 6.3 % | **7.8 %** | 74.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 9.00 € | **10.00 €** | 22.8 % | **36.4 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 12.50 € | **13.50 €** | 44.2 % | **55.7 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko FRL5388B | 131.50 € | **132.50 €** | 7.4 % | **8.3 %** | 132.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete Breakfast Toaster 157/03, černý | 22.90 € | **23.90 €** | 6.6 % | **11.3 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete Vintage 2868/05, modrá | 38.90 € | **39.90 €** | 6.7 % | **9.4 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal RK364G10 Coppertinto | 59.50 € | **60.50 €** | 10.4 % | **12.2 %** | 60.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK KARMA PRO 10x32 | 158.00 € | **159.00 €** | 7.1 % | **7.8 %** | 159.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 186.00 € | **187.00 €** | 7.2 % | **7.8 %** | 187.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenciou | 76.00 € | **77.00 €** | 13.4 % | **14.9 %** | 77.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zircon Monoblok Single M-0143 Slim line Skylink | 10.90 € | **11.90 €** | 18.5 % | **29.3 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 134.90 € | **135.90 €** | 6.2 % | **7.0 %** | 135.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Johansson KIT 7474 L2 zesilovač + zdroj (2437) | 122.00 € | **123.00 €** | 14.6 % | **15.6 %** | 123.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 66.00 € | **67.00 €** | 5.6 % | **7.2 %** | 67.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 103.00 € | **104.00 €** | 7.2 % | **8.2 %** | 104.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy FIDC X602/CA IDEA | 167.00 € | **168.00 €** | 6.3 % | **7.0 %** | 168.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA NS-SW100 BLACK | 221.00 € | **222.00 €** | 8.7 % | **9.2 %** | 222.24 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.50 € | **13.50 €** | 23.5 % | **33.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 93.00 € | **93.90 €** | 16.5 % | **17.6 %** | 93.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Chytrá meteorologická stanice GARNI 925T | 160.00 € | **160.90 €** | 12.7 % | **13.4 %** | 160.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.00 € | **12.90 €** | 28.9 % | **38.5 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 13.00 € | **13.90 €** | 12.6 % | **20.3 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.00 € | **10.90 €** | 26.6 % | **38.0 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 13.00 € | **13.90 €** | 30.8 % | **39.9 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 5.70 € | **6.60 €** | 14.4 % | **32.5 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.00 € | **21.90 €** | 19.6 % | **24.8 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 49.00 € | **49.90 €** | 22.3 % | **24.6 %** | 49.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **47.90 €** | 35.9 % | **38.5 %** | 47.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 23.00 € | **23.90 €** | 16.5 % | **21.1 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 19.00 € | **19.90 €** | 33.3 % | **39.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E200SM | 17.00 € | **17.90 €** | 14.9 % | **21.0 %** | 17.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 26.00 € | **26.90 €** | 5.2 % | **8.9 %** | 26.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete SteamStyle 4301, violet | 32.00 € | **32.90 €** | 6.9 % | **9.9 %** | 32.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Anténa NEDIS ANIR2502BK700 / 0-25 km / 30 dB / FM/VH... | 26.00 € | **26.90 €** | 27.1 % | **31.5 %** | 26.91 € | dobehnutie 2. najlacnejšieho konkurenta |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 20.00 € | **20.90 €** | 10.1 % | **15.0 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6182PS4 | 334.00 € | **334.90 €** | 6.8 % | **7.1 %** | 334.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko B3RCSO255S | 275.00 € | **275.90 €** | 7.7 % | **8.0 %** | 275.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WOI118PT2SSMA | 767.00 € | **767.90 €** | 5.9 % | **6.0 %** | 767.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná dekorácia vianočný stromček, 24... | 3.30 € | **4.00 €** | 19.8 % | **45.2 %** | 3.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 55FQK9070 ULTRA HD 4K QLED SMART ANDROID TV | 545.90 € | **546.50 €** | 5.0 % | **5.1 %** | 546.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 30.90 € | **31.50 €** | 18.4 % | **20.7 %** | 31.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 21.90 € | **22.50 €** | 8.2 % | **11.2 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO461FR | 35.90 € | **36.50 €** | 7.2 % | **9.0 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Set PowerClean M+náhr. zdarma | 19.90 € | **20.50 €** | 7.1 % | **10.3 %** | 20.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 61.90 € | **62.50 €** | 5.1 % | **6.1 %** | 62.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 93013 Pánev hluboká Aries 26 cm | 21.90 € | **22.50 €** | 9.0 % | **12.0 %** | 22.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 61521kuchyňská váha Page | 21.90 € | **22.50 €** | 7.4 % | **10.3 %** | 22.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodinky Colmi V89 Smartwatch (strieborné) | 26.90 € | **27.50 €** | 12.8 % | **15.4 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 20.90 € | **21.50 €** | 9.3 % | **12.5 %** | 21.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E3TB1-4GG | 39.90 € | **40.50 €** | 7.8 % | **9.4 %** | 40.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO733K | 46.90 € | **47.50 €** | 8.5 % | **9.9 %** | 47.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 17.90 € | **18.50 €** | 34.5 % | **39.0 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 16.90 € | **17.50 €** | 38.6 % | **43.6 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.00 € | **4.60 €** | 33.8 % | **53.9 %** | 4.01 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 10.90 € | **11.50 €** | 33.9 % | **41.2 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 12.90 € | **13.50 €** | 40.6 % | **47.1 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 13.90 € | **14.50 €** | 28.6 % | **34.1 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver FSR2002 | 15.90 € | **16.50 €** | 5.2 % | **9.2 %** | 16.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EF167 | 13.90 € | **14.50 €** | 7.6 % | **12.3 %** | 14.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMIKO dálkové ovládání Univerzální, HD - SD | 12.90 € | **13.50 €** | 12.3 % | **17.5 %** | 13.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 05A1 | 104.90 € | **105.50 €** | 9.5 % | **10.1 %** | 105.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Sky B-4610 zlatý | 64.90 € | **65.50 €** | 8.5 % | **9.5 %** | 65.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 114.90 € | **115.50 €** | 17.3 % | **17.9 %** | 115.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 121.90 € | **122.50 €** | 13.1 % | **13.7 %** | 122.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 200.90 € | **201.50 €** | 19.1 % | **19.5 %** | 201.64 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO8719W | 68.90 € | **69.50 €** | 8.2 % | **9.1 %** | 69.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Tune 530BT Beige | 38.50 € | **39.00 €** | 5.6 % | **7.0 %** | 38.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Tune 530BT Blue | 38.50 € | **39.00 €** | 5.6 % | **7.0 %** | 38.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Tune 530BT White | 38.50 € | **39.00 €** | 5.6 % | **7.0 %** | 38.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 16.00 € | **16.50 €** | 21.6 % | **25.4 %** | 16.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 15.00 € | **15.50 €** | 42.6 % | **47.4 %** | 15.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 15.00 € | **15.50 €** | 42.6 % | **47.4 %** | 15.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 45.00 € | **45.50 €** | 7.4 % | **8.5 %** | 45.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 155.00 € | **155.50 €** | 14.0 % | **14.4 %** | 155.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| IVO I133 aktivní rozbočovač 8x výstup"F" 18dB zisk +... | 55.00 € | **55.50 €** | 15.6 % | **16.7 %** | 55.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nepriamy germicidný UV žiarič | 62.00 € | **62.50 €** | 38.2 % | **39.3 %** | 62.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 13.00 € | **13.50 €** | 42.1 % | **47.5 %** | 13.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.00 € | **14.50 €** | 42.3 % | **47.4 %** | 14.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/5X/1 | 47.50 € | **48.00 €** | 5.7 % | **6.8 %** | 47.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Budík analogový TechnoLine WT 757BK | 26.00 € | **26.50 €** | 7.4 % | **9.5 %** | 26.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 90504 French press 800ml | 13.00 € | **13.50 €** | 9.5 % | **13.7 %** | 13.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.50 € | **13.00 €** | 16.5 % | **21.2 %** | 12.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 17.00 € | **17.50 €** | 10.3 % | **13.5 %** | 17.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.00 € | **85.50 €** | 14.5 % | **15.2 %** | 85.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 37.00 € | **37.50 €** | 19.8 % | **21.4 %** | 37.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tesla GSM-LITE zesilovač/opakovač 900/1800 MHz - kom... | 179.00 € | **179.50 €** | 7.9 % | **8.2 %** | 179.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 138.00 € | **138.50 €** | 15.0 % | **15.4 %** | 138.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mini stepper Rebel Active RBA-3226 | 52.00 € | **52.50 €** | 5.5 % | **6.5 %** | 52.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kruger&Matz KM0127 brašna na rám kola | 12.00 € | **12.50 €** | 9.7 % | **14.3 %** | 12.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH1239WO | 161.00 € | **161.50 €** | 8.7 % | **9.0 %** | 161.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje BMX201M2BG | 171.00 € | **171.50 €** | 9.0 % | **9.3 %** | 171.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA MV 447 ADW | 413.00 € | **413.50 €** | 7.0 % | **7.1 %** | 413.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 36.00 € | **36.50 €** | 37.9 % | **39.8 %** | 36.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.00 € | **26.50 €** | 40.0 % | **42.7 %** | 26.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 10.00 € | **10.50 €** | 40.4 % | **47.4 %** | 10.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight koaxiálny kábel CC120, voľne, 100m | 25.00 € | **25.50 €** | 37.2 % | **40.0 %** | 25.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.00 € | **11.50 €** | 6.8 % | **11.7 %** | 11.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 40.00 € | **40.50 €** | 35.1 % | **36.7 %** | 40.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 13.00 € | **13.50 €** | 50.3 % | **56.1 %** | 13.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 32.00 € | **32.50 €** | 31.2 % | **33.2 %** | 32.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 32.00 € | **32.50 €** | 31.2 % | **33.2 %** | 32.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hula hoop REBEL ACTIVE RBA-3066-BL se závažím a masá... | 11.00 € | **11.50 €** | 20.2 % | **25.7 %** | 11.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Priemyselná infračervená termokamera Habotest HT820 | 271.00 € | **271.50 €** | 13.8 % | **14.0 %** | 271.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné reproduktory Onikuma L2 | 12.00 € | **12.50 €** | 11.8 % | **16.4 %** | 12.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Eddie B-4821 šedý | 29.00 € | **29.50 €** | 7.9 % | **9.7 %** | 29.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.00 € | **60.50 €** | 9.1 % | **10.0 %** | 60.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Crema 1 kg zrno | 20.00 € | **20.50 €** | 5.6 % | **8.3 %** | 20.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 15.00 € | **15.50 €** | 41.3 % | **46.0 %** | 15.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 71.00 € | **71.50 €** | 38.4 % | **39.3 %** | 71.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálny digitálny multimeter UNI-T UT191E | 55.00 € | **55.50 €** | 6.3 % | **7.3 %** | 55.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálny digitálny multimeter UNI-T UT191T | 67.00 € | **67.50 €** | 6.5 % | **7.3 %** | 67.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Robot na čistenie bazénov WYBOT M1C | 668.00 € | **668.50 €** | 5.1 % | **5.2 %** | 668.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nástenný skener Uni-T UT387LM | 71.00 € | **71.50 €** | 5.7 % | **6.4 %** | 71.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vibračný tester Uni-T UT311A | 255.00 € | **255.50 €** | 12.8 % | **13.1 %** | 255.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| 4-kanálový teplomer Uni-T UT325F | 100.00 € | **100.50 €** | 10.1 % | **10.7 %** | 100.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 148.00 € | **148.50 €** | 11.1 % | **11.5 %** | 148.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 750 | 113.00 € | **113.50 €** | 8.4 % | **8.9 %** | 113.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 279.00 € | **279.50 €** | 7.1 % | **7.3 %** | 279.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 22.00 € | **22.50 €** | 10.5 % | **13.0 %** | 22.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 5-Port Gigabit Switch (DGS-105) | 15.50 € | **16.00 €** | 6.8 % | **10.2 %** | 15.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Strong SRT84 Terestriální HDMI přijímač | 28.00 € | **28.50 €** | 9.1 % | **11.1 %** | 28.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 38.50 € | **39.00 €** | 12.7 % | **14.2 %** | 38.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 410090000 | 331.00 € | **331.50 €** | 6.8 % | **7.0 %** | 331.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Verto II 1423 90000 bílý/zlatý | 30.50 € | **31.00 €** | 10.3 % | **12.1 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 19.00 € | **19.50 €** | 15.5 % | **18.6 %** | 19.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 70.50 € | **71.00 €** | 13.4 % | **14.2 %** | 70.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.50 € | **79.00 €** | 14.7 % | **15.5 %** | 78.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 139.00 € | **139.50 €** | 7.7 % | **8.1 %** | 139.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lokátor kľúčenka, Find My kompatibilný | 19.00 € | **19.50 €** | 36.1 % | **39.7 %** | 19.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 11.00 € | **11.50 €** | 39.5 % | **45.9 %** | 11.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 10.00 € | **10.50 €** | 39.0 % | **45.9 %** | 10.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA YWA-10 BL | 57.00 € | **57.50 €** | 11.5 % | **12.5 %** | 57.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete XVapor Comfort 4145/BL | 81.50 € | **82.00 €** | 9.3 % | **10.0 %** | 81.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9283EK | 18.00 € | **18.50 €** | 9.7 % | **12.7 %** | 18.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, plast, 2 zásuvky, hran... | 12.00 € | **12.50 €** | 31.1 % | **36.6 %** | 12.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-PVM3000M studiový stereofonní, XLR | 89.00 € | **89.50 €** | 6.4 % | **7.0 %** | 89.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 102.50 € | **103.00 €** | 30.0 % | **30.6 %** | 102.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prídavná zásuvka pre GSM zásuvku | 36.00 € | **36.50 €** | 35.2 % | **37.1 %** | 36.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 33.00 € | **33.50 €** | 31.5 % | **33.4 %** | 33.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.00 € | **19.50 €** | 34.8 % | **38.3 %** | 19.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.00 € | **12.50 €** | 37.0 % | **42.7 %** | 12.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termohrnček G21 FlowCup 1200 ml – pieskovo béžový | 20.00 € | **20.50 €** | 13.9 % | **16.8 %** | 20.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.00 € | **16.50 €** | 31.3 % | **35.4 %** | 16.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.00 € | **10.50 €** | 26.6 % | **33.0 %** | 10.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE ToastMax | 47.00 € | **47.50 €** | 9.9 % | **11.1 %** | 47.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rotačná kefa pre Dyson V8, V10, V12, V15 | 26.00 € | **26.50 €** | 30.0 % | **32.5 %** | 26.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight spodný kĺbový nadstavec pre Dyson V7, V8, V1... | 13.00 € | **13.50 €** | 28.3 % | **33.2 %** | 13.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 26800-56/RH | 25.50 € | **26.00 €** | 5.2 % | **7.3 %** | 25.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.00 € | **28.50 €** | 14.0 % | **16.0 %** | 28.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| TechniSat DIGITRADIO 372 CD IR černé | 194.50 € | **195.00 €** | 15.7 % | **16.0 %** | 194.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 28.00 € | **28.50 €** | 17.2 % | **19.3 %** | 28.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Midland BTR1 Advanced, Single | 187.00 € | **187.50 €** | 6.7 % | **7.0 %** | 187.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| IMOU S800 PRO palubná kamera, 4K | 99.00 € | **99.50 €** | 5.8 % | **6.3 %** | 99.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 19.00 € | **19.50 €** | 10.7 % | **13.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 16.00 € | **16.50 €** | 38.8 % | **43.2 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal INGENIO skleněná poklice 18 | 15.00 € | **15.50 €** | 6.3 % | **9.9 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal INGENIO Expertise sada 3 ks | 64.00 € | **64.50 €** | 6.4 % | **7.3 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 22.00 € | **22.50 €** | 10.2 % | **12.7 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.00 € | **10.50 €** | 28.8 % | **35.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 21.00 € | **21.50 €** | 19.0 % | **21.8 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED núdzové osvetlenie, 4W, 200lm, IP65, LiF... | 31.00 € | **31.50 €** | 21.6 % | **23.6 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 14.00 € | **14.50 €** | 14.5 % | **18.6 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 20.00 € | **20.50 €** | 39.7 % | **43.2 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 14.00 € | **14.50 €** | 40.0 % | **45.0 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 24.00 € | **24.50 €** | 17.5 % | **19.9 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 20.00 € | **20.50 €** | 39.7 % | **43.2 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sada LED sviečok z prírodného vosku, 3ks, AAA | 12.00 € | **12.50 €** | 38.0 % | **43.7 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight laserová vodováha 12 línií, 360 °, zelený laser | 141.00 € | **141.50 €** | 38.0 % | **38.5 %** | 141.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 26.00 € | **26.50 €** | 17.2 % | **19.5 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.00 € | **10.50 €** | 34.6 % | **41.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 20.00 € | **20.50 €** | 39.5 % | **42.9 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal GC517DE0 | 137.00 € | **137.50 €** | 8.4 % | **8.8 %** | 137.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZMM9802B | 128.00 € | **128.50 €** | 7.2 % | **7.6 %** | 128.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Instant Pot Vortex Compact (5,0 L) | 98.00 € | **98.50 €** | 5.7 % | **6.3 %** | 98.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Page Profi 100 | 29.00 € | **29.50 €** | 8.0 % | **9.9 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal HT652538 | 58.00 € | **58.50 €** | 8.7 % | **9.6 %** | 58.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper 50451 Tyčový Vakuový Vysavač S He | 51.00 € | **51.50 €** | 8.1 % | **9.1 %** | 51.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta 3v1 RH5A32E0 | 117.00 € | **117.50 €** | 7.4 % | **7.9 %** | 117.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Anycubic Photon Mono M7 Pro 3D Printer | 440.00 € | **440.50 €** | 6.3 % | **6.4 %** | 440.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Router GL.iNet Slate 7 | 207.00 € | **207.50 €** | 14.3 % | **14.6 %** | 207.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 30.00 € | **30.50 €** | 50.3 % | **52.8 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 158.00 € | **158.50 €** | 13.7 % | **14.1 %** | 158.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight cestovný adaptér s USB do Spojených štátov, ... | 10.00 € | **10.50 €** | 25.1 % | **31.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 178.50 € | **179.00 €** | 5.2 % | **5.5 %** | 179.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Double monitor mount 13-30" Huanuo HNDS6 | 47.00 € | **47.50 €** | 9.4 % | **10.5 %** | 47.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 20.00 € | **20.50 €** | 35.4 % | **38.8 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Okuliare RayNeo Air 4 Pro AR | 315.00 € | **315.50 €** | 11.2 % | **11.3 %** | 315.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Okuliare XREAL 1S pre rozšírenú realitu | 518.00 € | **518.50 €** | 12.5 % | **12.6 %** | 518.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 888.00 € | **888.50 €** | 6.9 % | **6.9 %** | 888.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 16.00 € | **16.50 €** | 6.7 % | **10.0 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.00 € | **17.50 €** | 21.0 % | **24.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 54.00 € | **54.50 €** | 24.4 % | **25.5 %** | 54.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 5m, 3 zásuvky IP44, 3 x 2... | 21.00 € | **21.50 €** | 19.2 % | **22.1 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.00 € | **33.50 €** | 16.9 % | **18.6 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.00 € | **14.50 €** | 40.2 % | **45.2 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 42.00 € | **42.50 €** | 19.0 % | **20.4 %** | 42.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter na zníženie svetelného znečistenia Freewell p... | 16.00 € | **16.50 €** | 5.8 % | **9.2 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 114.00 € | **114.50 €** | 11.8 % | **12.3 %** | 114.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 16.00 € | **16.50 €** | 5.9 % | **9.2 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 42.00 € | **42.50 €** | 8.1 % | **9.4 %** | 42.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 42.00 € | **42.50 €** | 8.1 % | **9.4 %** | 42.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo LED800 antracit | 299.00 € | **299.50 €** | 5.9 % | **6.1 %** | 299.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo LED800 bílý | 299.00 € | **299.50 €** | 5.9 % | **6.1 %** | 299.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed pouzdro XRedmi 15 FIXOP3-1618-BK | 11.50 € | **12.00 €** | 6.2 % | **10.9 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herná náhlavná súprava ONIKUMA B5 (ružová) | 14.00 € | **14.50 €** | 10.1 % | **14.0 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá Onikuma B2 (čierne) | 21.00 € | **21.50 €** | 9.0 % | **11.6 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 35.00 € | **35.50 €** | 10.5 % | **12.1 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 36.00 € | **36.50 €** | 10.4 % | **12.0 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 37.00 € | **37.50 €** | 8.0 % | **9.4 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.00 € | **27.50 €** | 37.9 % | **40.4 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filament Anycubic TPU (sivý) 1 kg | 20.00 € | **20.50 €** | 8.8 % | **11.6 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| EMEET SmartCam S600 webová kamera | 51.00 € | **51.50 €** | 12.4 % | **13.5 %** | 51.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Webová kamera OBSBOT Meet SE (biela) | 83.00 € | **83.50 €** | 11.2 % | **11.9 %** | 83.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Webová kamera OBSBOT Meet SE (sivá) | 83.00 € | **83.50 €** | 13.5 % | **14.2 %** | 83.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GameSir G7 HE wired controller (black) | 43.00 € | **43.50 €** | 11.7 % | **13.0 %** | 43.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 42.00 € | **42.50 €** | 10.4 % | **11.7 %** | 42.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládacia páka lietadla MOZA RACING MHG | 109.00 € | **109.50 €** | 12.3 % | **12.8 %** | 109.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| BLUETOUCH Elektrický vysokozdvižný vozík | 248.00 € | **248.50 €** | 8.5 % | **8.7 %** | 248.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 53.00 € | **53.50 €** | 11.2 % | **12.2 %** | 53.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterka Superfire TF02 | 63.00 € | **63.50 €** | 13.5 % | **14.4 %** | 63.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WHK 22373 X6EA AI AdaptiveCool | 498.00 € | **498.50 €** | 8.0 % | **8.1 %** | 498.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy BR 10N3BX-S | 487.00 € | **487.50 €** | 9.3 % | **9.4 %** | 487.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WE694A1 | 348.00 € | **348.50 €** | 6.8 % | **6.9 %** | 348.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WG894A25 | 499.00 € | **499.50 €** | 8.5 % | **8.6 %** | 499.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANDY CCGMEE9025PX/E | 798.00 € | **798.50 €** | 7.4 % | **7.5 %** | 798.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BMTD37146W | 383.00 € | **383.50 €** | 6.0 % | **6.1 %** | 383.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fagor 4LVF-637ADIT | 444.00 € | **444.50 €** | 6.9 % | **7.0 %** | 444.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 1535SS | 206.00 € | **206.50 €** | 7.7 % | **7.9 %** | 206.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool OMSR58CU1SX | 329.50 € | **330.00 €** | 5.1 % | **5.2 %** | 330.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 120.50 € | **121.00 €** | 23794.5 % | **23893.7 %** | 121.03 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska Berlingerhaus nerez s LED displejom 450 ml ... | 10.50 € | **11.00 €** | 7.6 % | **12.8 %** | 11.07 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Haku | 29.50 € | **30.00 €** | 6.3 % | **8.1 %** | 30.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Girmi FM2100 Mikrovlnná trouba s grilem | 108.50 € | **109.00 €** | 9.4 % | **9.9 %** | 109.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 395.50 € | **396.00 €** | 6.8 % | **7.0 %** | 396.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| BWT náhradní vodní filtr 3+1ks REFILL | 16.00 € | **16.50 €** | 5.6 % | **8.9 %** | 16.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| CrockPot CSC113X Pomalý hrnec 3,5 l | 74.50 € | **75.00 €** | 9.0 % | **9.7 %** | 75.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Činky REBEL ACTIVE RBA-2330-6 litinové neoprenové HE... | 34.50 € | **35.00 €** | 13.1 % | **14.7 %** | 35.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 218.50 € | **219.00 €** | 13.4 % | **13.7 %** | 219.19 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 60.00 € | **60.50 €** | 19.8 % | **20.8 %** | 60.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 105.50 € | **106.00 €** | 18.4 % | **18.9 %** | 106.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitální piano Kruger&Matz KMDP-45-BK  černé | 219.00 € | **219.50 €** | 5.0 % | **5.3 %** | 219.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO B5RCNA406HXB3 | 521.50 € | **522.00 €** | 6.9 % | **7.0 %** | 522.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CDG1S514ESH | 238.50 € | **239.00 €** | 7.6 % | **7.8 %** | 239.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal ZP2M04E0 | 22.50 € | **23.00 €** | 7.2 % | **9.5 %** | 23.21 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.00 € | **16.50 €** | 33.8 % | **38.0 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 15.00 € | **15.50 €** | 26.6 % | **30.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multimeter Uni-T UT256 | 26.00 € | **26.50 €** | 6.8 % | **8.8 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2x 10A, biely-sivý | 2.80 € | **3.30 €** | 18.6 % | **39.7 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Ultimate Graphite Black | 269.50 € | **270.00 €** | 15.8 % | **16.1 %** | 269.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AX1500 Range Extender (E15) | 41.00 € | **41.50 €** | 7.0 % | **8.3 %** | 41.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 615W Precise | 56.00 € | **56.50 €** | 7.5 % | **8.4 %** | 56.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM diaľkovo ovládaná zásuvka | 56.00 € | **56.50 €** | 27.0 % | **28.1 %** | 56.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GS620C10S | 344.00 € | **344.50 €** | 6.9 % | **7.0 %** | 344.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux LIB60420CK | 205.00 € | **205.50 €** | 8.0 % | **8.3 %** | 205.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Klimatizace GETI GKH18K hybridní 5kW | 1297.50 € | **1297.90 €** | 7.2 % | **7.3 %** | 1297.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.50 € | **110.90 €** | 9.8 % | **10.2 %** | 110.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 250.50 € | **250.90 €** | 7.3 % | **7.5 %** | 250.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 111.50 € | **111.90 €** | 6.2 % | **6.6 %** | 111.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 189.50 € | **189.90 €** | 7.7 % | **7.9 %** | 189.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G10152 horkovzdušná trouba | 146.50 € | **146.90 €** | 8.8 % | **9.1 %** | 146.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 101 | 157.50 € | **157.90 €** | 7.6 % | **7.9 %** | 157.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 20 | 233.50 € | **233.90 €** | 9.4 % | **9.5 %** | 233.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač LCR Uni-T UT612 | 134.50 € | **134.90 €** | 12.2 % | **12.6 %** | 134.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 87.50 € | **87.90 €** | 12.2 % | **12.7 %** | 87.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 106.50 € | **106.90 €** | 12.8 % | **13.2 %** | 106.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 123.50 € | **123.90 €** | 13.3 % | **13.7 %** | 123.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO42327PC | 101.50 € | **101.90 €** | 8.5 % | **8.9 %** | 101.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete Capri Citrusovač 413/CA | 65.50 € | **65.90 €** | 5.0 % | **5.7 %** | 65.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 0028 92020 | 67.50 € | **67.90 €** | 11.0 % | **11.6 %** | 67.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZJP3900 | 105.50 € | **105.90 €** | 8.3 % | **8.7 %** | 105.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1018900 Pákový kávovar | 121.50 € | **121.90 €** | 5.5 % | **5.8 %** | 121.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Sous Vide SV06 | 132.50 € | **132.90 €** | 8.4 % | **8.7 %** | 132.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Roadstar DJ-390 BT Bluetooth speaker | 113.50 € | **113.90 €** | 9.3 % | **9.7 %** | 113.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Philips TAR4600 Rádiobudík | 64.50 € | **64.90 €** | 6.7 % | **7.4 %** | 64.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 3601 | 98.50 € | **98.90 €** | 6.8 % | **7.2 %** | 98.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.50 € | **64.90 €** | 5.5 % | **6.1 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 127.50 € | **127.90 €** | 25.4 % | **25.8 %** | 127.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás so svetelným a pohybovým se... | 5.80 € | **6.20 €** | 36.7 % | **46.1 %** | 5.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.50 € | **14.90 €** | 43.8 % | **47.7 %** | 14.62 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá TWS QCY MeloBuds HT16 (čierne) | 14.50 € | **14.90 €** | 6.6 % | **9.5 %** | 14.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 12.50 € | **12.90 €** | 30.3 % | **34.5 %** | 12.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Ethiopia Moka Sidamo 500 g zrno | 11.50 € | **11.90 €** | 5.4 % | **9.1 %** | 11.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Perfect Steam Air Board S/M | 14.50 € | **14.90 €** | 8.7 % | **11.6 %** | 14.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| AB-COM LNB AB 01 M Quattro | 11.50 € | **11.90 €** | 13.1 % | **17.0 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 15.50 € | **15.90 €** | 6.4 % | **9.2 %** | 15.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 13.50 € | **13.90 €** | 17.1 % | **20.6 %** | 13.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter digitálny V33 | 11.50 € | **11.90 €** | 16.4 % | **20.5 %** | 11.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 9.10 € | **9.50 €** | 39.6 % | **45.7 %** | 9.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.50 € | **12.90 €** | 34.2 % | **38.5 %** | 12.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.50 € | **10.90 €** | 40.9 % | **46.2 %** | 10.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod kocka 3m, 3 zásuvky IP44,... | 13.50 € | **13.90 €** | 31.9 % | **35.8 %** | 13.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor úniku horľavých plynov. Polovodičov... | 13.50 € | **13.90 €** | 24.2 % | **27.8 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-50245 | 12.50 € | **12.90 €** | 6.2 % | **9.6 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Girmi BL0401 Cestovní silikonová konvice | 14.50 € | **14.90 €** | 6.8 % | **9.7 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 14.50 € | **14.90 €** | 30.1 % | **33.7 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Roadstar TRA-2989 Přenosné vícepásmové r | 14.50 € | **14.90 €** | 8.9 % | **11.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.50 € | **14.90 €** | 18.4 % | **21.6 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 7.30 € | **7.70 €** | 45.5 % | **53.4 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.0 % | **13.8 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.50 € | **13.90 €** | 16.9 % | **20.3 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 3.90 € | **4.30 €** | 33.2 % | **46.9 %** | 4.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 4.70 € | **5.10 €** | 8.9 % | **18.1 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZHM2459S | 39.50 € | **39.90 €** | 14.0 % | **15.2 %** | 39.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 17.50 € | **17.90 €** | 43.3 % | **46.6 %** | 17.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 16.50 € | **16.90 €** | 43.2 % | **46.6 %** | 16.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| KRUGER & MATZ KM0912 10000mAh Powerbanka MagSafe | 22.50 € | **22.90 €** | 16.1 % | **18.2 %** | 22.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 16.50 € | **16.90 €** | 5.5 % | **8.1 %** | 16.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 29.50 € | **29.90 €** | 45.2 % | **47.1 %** | 29.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.50 € | **25.90 €** | 36.9 % | **39.1 %** | 25.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 23.50 € | **23.90 €** | 37.6 % | **40.0 %** | 23.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný panel Backlit, UGR | 23.50 € | **23.90 €** | 36.1 % | **38.4 %** | 23.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 400... | 31.50 € | **31.90 €** | 53.1 % | **55.0 %** | 31.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.50 € | **39.90 €** | 37.2 % | **38.6 %** | 39.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 16.50 € | **16.90 €** | 21.5 % | **24.5 %** | 16.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-BC261 | 31.50 € | **31.90 €** | 6.1 % | **7.5 %** | 31.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.50 € | **25.90 €** | 19.5 % | **21.4 %** | 25.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Terni, 12W... | 26.50 € | **26.90 €** | 36.6 % | **38.7 %** | 26.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inverto HOME Pro - Quattro Universal 40mm PLL LNB | 18.50 € | **18.90 €** | 23.0 % | **25.6 %** | 18.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Rouge BP3443 | 31.50 € | **31.90 €** | 8.0 % | **9.3 %** | 31.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 23.50 € | **23.90 €** | 33.8 % | **36.1 %** | 23.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 24.50 € | **24.90 €** | 43.0 % | **45.3 %** | 24.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hrazda multifunkční REBEL ACTIVE RBA-2401 | 54.50 € | **54.90 €** | 7.3 % | **8.1 %** | 54.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 39.50 € | **39.90 €** | 37.8 % | **39.2 %** | 39.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED napájací zdroj, 230V - 12V, 17A, 200W, IP20 | 22.50 € | **22.90 €** | 42.7 % | **45.2 %** | 22.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.50 € | **24.90 €** | 36.1 % | **38.3 %** | 24.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Espresso Intenso 1 kg zrno | 17.50 € | **17.90 €** | 5.3 % | **7.8 %** | 17.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T UT202BT Inteligentný svorkový multimeter | 37.50 € | **37.90 €** | 5.8 % | **7.0 %** | 37.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 55.50 € | **55.90 €** | 7.0 % | **7.8 %** | 55.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Náhradní vodní filtr GARNI WF 45T | 18.50 € | **18.90 €** | 10.6 % | **13.0 %** | 18.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lokátor pre batožinu, Find My kompatibilný | 22.50 € | **22.90 €** | 33.4 % | **35.8 %** | 22.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 22.50 € | **22.90 €** | 6.1 % | **8.0 %** | 22.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mini stepper REBEL ACTIVE RBA-3229 | 40.50 € | **40.90 €** | 6.2 % | **7.2 %** | 40.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-PE145 | 39.50 € | **39.90 €** | 7.0 % | **8.1 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 93501 Hrnec s pokličkou 20 cm | 35.50 € | **35.90 €** | 8.6 % | **9.8 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s nočným svetielko... | 28.50 € | **28.90 €** | 33.2 % | **35.0 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G2012400 | 38.50 € | **38.90 €** | 8.7 % | **9.9 %** | 38.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 22.50 € | **22.90 €** | 30.3 % | **32.6 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 33.50 € | **33.90 €** | 43.3 % | **45.0 %** | 33.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ardes AR4B01B | 44.50 € | **44.90 €** | 7.2 % | **8.2 %** | 44.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 39.50 € | **39.90 €** | 18.0 % | **19.2 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 26.50 € | **26.90 €** | 32.3 % | **34.3 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 19.50 € | **19.90 €** | 31.7 % | **34.4 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 23.50 € | **23.90 €** | 33.9 % | **36.2 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal DN853BE0 | 53.50 € | **53.90 €** | 7.7 % | **8.5 %** | 53.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Venta Filter Hepa 13 for AP100 | 47.50 € | **47.90 €** | 8.7 % | **9.6 %** | 47.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 39.50 € | **39.90 €** | 32.3 % | **33.6 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO754K | 35.50 € | **35.90 €** | 7.0 % | **8.2 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Dita 1603 90000 bílá | 17.50 € | **17.90 €** | 10.2 % | **12.7 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1020500 | 38.50 € | **38.90 €** | 8.8 % | **9.9 %** | 38.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal Coppertinto KI280G10 | 30.50 € | **30.90 €** | 8.3 % | **9.8 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZCK7650 | 32.50 € | **32.90 €** | 10.7 % | **12.1 %** | 32.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 1548/04 | 28.50 € | **28.90 €** | 7.6 % | **9.1 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Steam Travel PV0500 | 22.50 € | **22.90 €** | 7.0 % | **8.9 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 26.50 € | **26.90 €** | 33.2 % | **35.2 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 21.50 € | **21.90 €** | 8.7 % | **10.7 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 21.50 € | **21.90 €** | 8.7 % | **10.7 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Adapter, quick release MOZA RACING RS07 for R21/R16/... | 49.50 € | **49.90 €** | 6.6 % | **7.5 %** | 49.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| PS5 Laysara: Summit Kingdom Collector's | 63.50 € | **63.90 €** | 7.6 % | **8.2 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 46.50 € | **46.90 €** | 13.4 % | **14.3 %** | 46.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica KF 17191 | 29.50 € | **29.90 €** | 20.6 % | **22.3 %** | 29.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Palm biele drevo 500 ml | 22.50 € | **22.90 €** | 11.7 % | **13.7 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.50 € | **18.90 €** | 12.6 % | **15.0 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.50 € | **20.90 €** | 27.8 % | **30.3 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 27.50 € | **27.90 €** | 11.4 % | **13.0 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 23.50 € | **23.90 €** | 9.6 % | **11.5 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Okuliare VITURE XR Luma Pro (veľkosť L) | 394.50 € | **394.90 €** | 11.3 % | **11.4 %** | 394.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 267.50 € | **267.90 €** | 7.2 % | **7.3 %** | 267.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BDFN26540WP | 414.50 € | **414.90 €** | 6.9 % | **7.0 %** | 414.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO HII64500UFT | 364.50 € | **364.90 €** | 7.0 % | **7.1 %** | 364.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CA6 NP5B3HTX | 341.50 € | **341.90 €** | 6.9 % | **7.0 %** | 341.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.60 € | **9.80 €** | 31.2 % | **33.9 %** | 9.61 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.20 € | **9.40 €** | 21.6 % | **24.3 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely | 2.30 € | **2.50 €** | 35.5 % | **47.3 %** | 2.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.00 € | **5.20 €** | 40.7 % | **46.3 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.20 € | **5.40 €** | 40.0 % | **45.4 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 2.80 € | **3.00 €** | 15.6 % | **23.8 %** | 2.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 6.00 € | **6.20 €** | 13.2 % | **17.0 %** | 6.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.10 € | **4.30 €** | 6.5 % | **11.7 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.70 € | **5.90 €** | 40.4 % | **45.4 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.60 € | **4.80 €** | 9.0 % | **13.8 %** | 4.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.10 € | **5.30 €** | 32.9 % | **38.1 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.80 € | **2.00 €** | 26.2 % | **40.2 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.70 € | **1.90 €** | 22.3 % | **36.7 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 9.50 € | **9.70 €** | 19.9 % | **22.5 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Čistič na okna s rozprašovačem | 9.80 € | **10.00 €** | 6.4 % | **8.5 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.40 € | **7.60 €** | 33.4 % | **37.0 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.80 € | **10.00 €** | 24.3 % | **26.8 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.90 € | **7.10 €** | 32.3 % | **36.1 %** | 6.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 529.90 € | **530.00 €** | 6.2 % | **6.2 %** | 529.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 379.90 € | **380.00 €** | 7.1 % | **7.1 %** | 379.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 284.90 € | **285.00 €** | 14.3 % | **14.3 %** | 284.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 278.90 € | **279.00 €** | 7.9 % | **7.9 %** | 278.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 317.90 € | **318.00 €** | 12.1 % | **12.1 %** | 318.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP 15-fd0324nc (D42VYEA) | 673.90 € | **674.00 €** | 6.9 % | **6.9 %** | 674.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP OmniBook 3 16-bu0304ncx (D9MH3EA) | 903.90 € | **904.00 €** | 6.9 % | **6.9 %** | 904.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 980.90 € | **981.00 €** | 5.8 % | **5.8 %** | 981.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko EnergySpin B7WFU68416WBES | 414.90 € | **415.00 €** | 7.2 % | **7.2 %** | 415.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy GD 48SB8C-S | 298.90 € | **299.00 €** | 5.3 % | **5.3 %** | 299.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool C WD 84M WBS CZ | 638.90 € | **639.00 €** | 6.5 % | **6.5 %** | 639.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool C WD 94M WBS CZ | 671.90 € | **672.00 €** | 8.6 % | **8.6 %** | 672.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BDIN38646D | 495.90 € | **496.00 €** | 7.0 % | **7.0 %** | 496.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fagor 4LVF-638ADIT | 469.90 € | **470.00 €** | 6.9 % | **6.9 %** | 470.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Concept IDV5160wh | 353.90 € | **354.00 €** | 6.9 % | **6.9 %** | 354.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 1836A | 258.90 € | **259.00 €** | 7.1 % | **7.2 %** | 259.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 659.90 € | **660.00 €** | 10.7 % | **10.7 %** | 659.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE FN617EES5 | 405.90 € | **406.00 €** | 7.0 % | **7.0 %** | 405.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 24.90 € | **25.00 €** | 28.7 % | **29.2 %** | 24.91 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.90 € | **21.00 €** | 37.7 % | **38.4 %** | 20.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 16.90 € | **17.00 €** | 44.5 % | **45.3 %** | 16.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 16.90 € | **17.00 €** | 44.5 % | **45.3 %** | 16.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 47.90 € | **48.00 €** | 54.2 % | **54.5 %** | 47.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prijímač BOYA BY-WM4RXU bezdrátový, USB-C, Android, ... | 45.90 € | **46.00 €** | 9.8 % | **10.1 %** | 45.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 35.90 € | **36.00 €** | 44.6 % | **45.0 %** | 35.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 44.90 € | **45.00 €** | 6.8 % | **7.0 %** | 44.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.20 € | **9.30 €** | 24.2 % | **25.6 %** | 9.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E3HB1-4GG | 23.90 € | **24.00 €** | 6.6 % | **7.1 %** | 23.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice TechnoLine WS 9251 | 52.90 € | **53.00 €** | 6.1 % | **6.3 %** | 52.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver FFC025X | 25.90 € | **26.00 €** | 9.3 % | **9.7 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 3233 4-dílná sada vak. Krabiček | 35.90 € | **36.00 €** | 8.1 % | **8.4 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight wifi Smart LED svetelný pás, RGB, 5m, sada s... | 27.90 € | **28.00 €** | 41.9 % | **42.5 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 23.90 € | **24.00 €** | 29.1 % | **29.6 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 21.90 € | **22.00 €** | 34.7 % | **35.3 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 34.90 € | **35.00 €** | 34.0 % | **34.4 %** | 35.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 23.90 € | **24.00 €** | 41.4 % | **42.0 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 20.90 € | **21.00 €** | 42.4 % | **43.1 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sada LED sviečok s časovačom, 4ks, 6,5cm, ba... | 9.70 € | **9.80 €** | 48.8 % | **50.3 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 61.90 € | **62.00 €** | 14.9 % | **15.1 %** | 62.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu s WIFI pripojením | 16.90 € | **17.00 €** | 29.0 % | **29.8 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 8.70 € | **8.80 €** | 42.6 % | **44.2 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne stĺpikové osvetlenie Palermo, 5W... | 29.90 € | **30.00 €** | 34.8 % | **35.3 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajší stĺpik Ragusa 500, 7W, 450lm, 3... | 22.90 € | **23.00 €** | 8.4 % | **8.8 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 25.90 € | **26.00 €** | 33.9 % | **34.4 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 25.90 € | **26.00 €** | 33.9 % | **34.4 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-P206RAF200 | 28.90 € | **29.00 €** | 7.3 % | **7.7 %** | 29.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CrockPot SCV400RD | 51.90 € | **52.00 €** | 8.7 % | **8.9 %** | 52.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO436BL | 35.90 € | **36.00 €** | 8.7 % | **9.0 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Easy Chop | 32.90 € | **33.00 €** | 7.8 % | **8.1 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pedrini Infinity červená 6 porcí | 35.90 € | **36.00 €** | 9.4 % | **9.7 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 137 | 32.90 € | **33.00 €** | 9.1 % | **9.5 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO7059S | 35.90 € | **36.00 €** | 8.2 % | **8.5 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 26481-56 | 17.90 € | **18.00 €** | 5.3 % | **5.9 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Daily PV1100C | 22.90 € | **23.00 €** | 7.1 % | **7.5 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa GlidePro PV2600 | 25.90 € | **26.00 €** | 6.0 % | **6.4 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Huanuo HNDS8 double monitor mount 13-32" | 51.90 € | **52.00 €** | 5.6 % | **5.8 %** | 52.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 28.90 € | **29.00 €** | 18.2 % | **18.7 %** | 29.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 23.90 € | **24.00 €** | 8.9 % | **9.3 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky COLMI C28 – čierne | 27.90 € | **28.00 €** | 6.4 % | **6.8 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 23.90 € | **24.00 €** | 7.8 % | **8.2 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring Black velikost 8 | 39.90 € | **40.00 €** | 6.6 % | **6.8 %** | 40.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring White velikost 8 | 39.90 € | **40.00 €** | 6.6 % | **6.8 %** | 40.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring White velikost 9 | 39.90 € | **40.00 €** | 6.6 % | **6.8 %** | 40.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna meteostanica, prehľadný a diza... | 60.90 € | **61.00 €** | 18.7 % | **18.9 %** | 61.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 19.90 € | **20.00 €** | 35.0 % | **35.7 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 30.90 € | **31.00 €** | 5.6 % | **5.9 %** | 31.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Centrala Bramka WiFi MSH450MA Meross | 18.90 € | **19.00 €** | 12.7 % | **13.3 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 20.90 € | **21.00 €** | 11.9 % | **12.4 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 22.90 € | **23.00 €** | 13.5 % | **14.0 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 44.90 € | **45.00 €** | 20.5 % | **20.7 %** | 45.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UV filter Freewell pre DJI Mini 5 Pro | 17.90 € | **18.00 €** | 6.1 % | **6.7 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Albrecht DR 54 | 62.90 € | **63.00 €** | 7.8 % | **8.0 %** | 63.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 22.90 € | **23.00 €** | 5.5 % | **6.0 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rixon Soundplates | 41.90 € | **42.00 €** | 8.0 % | **8.2 %** | 42.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed Creator Tripod FIXCRT-BK | 41.90 € | **42.00 €** | 6.1 % | **6.3 %** | 42.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 22dB | 16.90 € | **17.00 €** | 15.7 % | **16.3 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Planetárium Levenhuk Star Sky P9 | 57.90 € | **58.00 €** | 5.1 % | **5.3 %** | 58.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 19.90 € | **20.00 €** | 37.2 % | **37.9 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 34.90 € | **35.00 €** | 11.5 % | **11.9 %** | 35.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Eldonex EWS-1010-BK meteostanice | 37.90 € | **38.00 €** | 7.3 % | **7.5 %** | 38.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 28.90 € | **29.00 €** | 5.1 % | **5.4 %** | 29.22 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 35.90 € | **36.00 €** | 7.0 % | **7.3 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 25.90 € | **26.00 €** | 29.8 % | **30.3 %** | 25.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 10/100 5-Port Switch (DES-105) | 17.90 € | **18.00 €** | 5.1 % | **5.7 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 6.10 € | **6.20 €** | 13.2 % | **15.1 %** | 6.12 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 5.80 € | **5.90 €** | 43.8 % | **46.2 %** | 5.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.30 € | **7.40 €** | 43.7 % | **45.7 %** | 7.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 4.80 € | **4.90 €** | 31.8 % | **34.6 %** | 4.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový senzor k meteostaniciam TE81, TE8... | 4.10 € | **4.20 €** | 16.6 % | **19.4 %** | 4.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka s viečkom, biela | 6.30 € | **6.40 €** | 34.1 % | **36.2 %** | 6.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.80 € | **5.90 €** | 9.2 % | **11.0 %** | 5.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.60 € | **4.70 €** | 34.0 % | **37.0 %** | 4.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 7.80 € | **7.90 €** | 9.5 % | **10.9 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 6.60 € | **6.70 €** | 29.0 % | **30.9 %** | 6.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 4.60 € | **4.70 €** | 39.0 % | **42.0 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.30 € | **5.40 €** | 31.4 % | **33.8 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight filter pre Dyson V11, V15 | 6.80 € | **6.90 €** | 27.1 % | **29.0 %** | 6.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stĺpcový filter pre Dyson V12 | 5.80 € | **5.90 €** | 22.2 % | **24.3 %** | 5.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.10 € | **7.20 €** | 34.9 % | **36.8 %** | 7.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.30 € | **5.40 €** | 33.0 % | **35.5 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.30 € | **4.40 €** | 33.4 % | **36.5 %** | 4.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 6.30 € | **6.40 €** | 37.7 % | **39.9 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.60 € | **3.70 €** | 42.8 % | **46.7 %** | 3.65 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 5 x 2,5A, biely | 1.70 € | **1.80 €** | 31.6 % | **39.4 %** | 1.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.80 € | **3.90 €** | 29.3 % | **32.7 %** | 3.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 1.90 € | **2.00 €** | 50.0 % | **57.9 %** | 1.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 12W, E27, 6000K... | 1.40 € | **1.50 €** | 38.8 % | **48.7 %** | 1.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 1.90 € | **2.00 €** | 33.2 % | **40.2 %** | 1.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.50 € | **3.60 €** | 37.5 % | **41.4 %** | 3.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.10 € | **3.20 €** | 31.3 % | **35.5 %** | 3.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.30 € | **3.40 €** | 34.1 % | **38.2 %** | 3.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.10 € | **3.20 €** | 33.4 % | **37.7 %** | 3.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 3.80 € | **3.90 €** | 32.0 % | **35.5 %** | 3.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.60 €** | 31.7 % | **35.5 %** | 3.57 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.50 € | **3.60 €** | 21.1 % | **24.5 %** | 3.57 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.00 € | **1.10 €** | 42.6 % | **56.9 %** | 1.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.00 € | **1.10 €** | 42.6 % | **56.9 %** | 1.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 8W, E14, 4000K, 720lm | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.00 € | **3.10 €** | 12.4 % | **16.1 %** | 3.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s podperou, 3 x 10A, matný čierny | 2.30 € | **2.40 €** | 31.7 % | **37.4 %** | 2.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.50 € | **3.60 €** | 48.2 % | **52.4 %** | 3.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kefka na čistenie filtra pre Dyson Airwrap | 3.90 € | **4.00 €** | 19.7 % | **22.7 %** | 3.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 2.50 € | **2.60 €** | 14.2 % | **18.8 %** | 2.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.60 € | **2.70 €** | 22.2 % | **26.9 %** | 2.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.60 € | **3.70 €** | 41.4 % | **45.3 %** | 3.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 3.50 € | **3.60 €** | 31.7 % | **35.5 %** | 3.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.40 € | **1.50 €** | 26.5 % | **35.5 %** | 1.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.30 € | **3.40 €** | 46.6 % | **51.1 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prodlužovací prívodný kábel k vianočným reťa... | 2.10 € | **2.20 €** | 37.7 % | **44.2 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 3.80 € | **3.90 €** | 41.1 % | **44.8 %** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 1.90 € | **2.00 €** | 34.3 % | **41.4 %** | 2.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viazacie nylonové pásky, farba natural, 100k... | 1.20 € | **1.30 €** | 19.0 % | **28.9 %** | 1.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viazacie nylonové pásky, 3,6 x 300mm, čierna... | 2.00 € | **2.10 €** | 25.1 % | **31.3 %** | 2.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.70 € | **0.80 €** | 7.4 % | **22.7 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka do vlhka IP54, sivá | 3.80 € | **3.90 €** | 19.7 % | **22.9 %** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.50 € | **2.60 €** | 31.1 % | **36.4 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, s priebežnou zásuvkou | 1.40 € | **1.50 €** | 18.6 % | **27.0 %** | 1.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka priama, IP20, biela | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka, priama, IP40, čierna-oranžová | 3.00 € | **3.10 €** | 29.7 % | **34.1 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.70 € | **1.80 €** | 25.6 % | **33.0 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight fast charger do auta 30W USB-C + A | 3.90 € | **4.00 €** | 39.1 % | **42.6 %** | 4.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.50 € | **2.60 €** | 27.8 % | **32.9 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 2.90 € | **3.00 €** | 31.7 % | **36.3 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.40 € | **3.50 €** | 29.8 % | **33.6 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 2.60 € | **2.70 €** | 29.7 % | **34.7 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.80 € | **3.90 €** | 34.3 % | **37.9 %** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.10 € | **3.20 €** | 29.9 % | **34.1 %** | 3.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.90 € | **4.00 €** | 8.6 % | **11.4 %** | 4.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.50 € | **1.60 €** | 28.4 % | **36.9 %** | 1.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 6000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight anténny koaxiálny kábel, kombinované konekto... | 0.90 € | **1.00 €** | 28.4 % | **42.6 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 0.90 € | **1.00 €** | 28.4 % | **42.6 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight napájací konektor pre LED pásy, zdierka 5,5 ... | 0.80 € | **0.90 €** | 12.1 % | **26.2 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 0.80 € | **0.90 €** | 22.7 % | **38.1 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 0.80 € | **0.90 €** | 22.7 % | **38.1 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka priama, IP20, biela | 1.30 € | **1.40 €** | 30.5 % | **40.5 %** | 1.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, IP20, biela | 1.30 € | **1.40 €** | 22.9 % | **32.4 %** | 1.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.30 € | **1.40 €** | 35.5 % | **45.9 %** | 1.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight anténny rozbočovač hybridný priamy | 1.80 € | **1.90 €** | 28.4 % | **35.5 %** | 1.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, uhlová, IP44, čierna | 1.80 € | **1.90 €** | 28.4 % | **35.5 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 2,5A, biela | 1.10 € | **1.20 €** | 24.2 % | **35.5 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 1.80 € | **1.90 €** | 26.2 % | **33.2 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 1.60 € | **1.70 €** | 23.9 % | **31.6 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.80 € | **1.90 €** | 23.0 % | **29.8 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací kábel pre LED pásy, 8mm zacvakáv... | 1.10 € | **1.20 €** | 27.8 % | **39.4 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.50 € | **6.60 €** | 30.5 % | **32.5 %** | 6.55 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 8.80 € | **8.90 €** | 44.2 % | **45.9 %** | 8.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.90 € | **13.00 €** | 37.5 % | **38.5 %** | 12.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.90 € | **10.00 €** | 37.4 % | **38.7 %** | 9.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.20 € | **3.30 €** | 42.2 % | **46.6 %** | 3.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 11.90 € | **12.00 €** | 36.8 % | **38.0 %** | 11.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 12.90 € | **13.00 €** | 19.3 % | **20.2 %** | 12.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.50 € | **4.60 €** | 42.9 % | **46.1 %** | 4.57 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.20 € | **2.30 €** | 39.7 % | **46.1 %** | 2.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplomer | 9.60 € | **9.70 €** | 37.4 % | **38.8 %** | 9.68 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 10.90 € | **11.00 €** | 30.7 % | **31.9 %** | 10.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight štrbinová hubica pre Dyson V7, V8, V10, V11,... | 10.90 € | **11.00 €** | 30.7 % | **31.9 %** | 10.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight anténny koaxiálny kábel, kombinované konekto... | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 7.90 € | **8.00 €** | 36.7 % | **38.4 %** | 7.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 3.70 € | **3.80 €** | 37.4 % | **41.1 %** | 3.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 7.90 € | **8.00 €** | 34.9 % | **36.6 %** | 7.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight účastnícka zásuvka koncová so SAT, útlm: 3dB | 4.90 € | **5.00 €** | 7.4 % | **9.6 %** | 4.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 6.90 € | **7.00 €** | 19.1 % | **20.8 %** | 6.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight držiak DVB-T a internetové antény na stenu, ... | 7.90 € | **8.00 €** | 27.7 % | **29.3 %** | 7.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB-C 20W fast charger | 5.40 € | **5.50 €** | 34.7 % | **37.2 %** | 5.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.20 € | **2.30 €** | 12.5 % | **17.6 %** | 2.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.80 € | **8.90 €** | 31.8 % | **33.3 %** | 8.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.20 € | **4.30 €** | 8.7 % | **11.3 %** | 4.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.70 € | **4.80 €** | 13.7 % | **16.1 %** | 4.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 5.90 € | **6.00 €** | 23.3 % | **25.4 %** | 5.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight senzor pre meteostanice TE110 | 5.20 € | **5.30 €** | 33.4 % | **35.9 %** | 5.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 4.40 € | **4.50 €** | 34.0 % | **37.0 %** | 4.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.60 € | **8.70 €** | 5.6 % | **6.8 %** | 8.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal J1641474 | 11.90 € | **12.00 €** | 9.0 % | **9.9 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.40 € | **8.50 €** | 32.1 % | **33.7 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjacie nočné LED svetielko s pohybovým a ... | 7.90 € | **8.00 €** | 43.0 % | **44.9 %** | 8.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight drevený snehuliak, 4x LED, 2x AA | 9.50 € | **9.60 €** | 9.1 % | **10.2 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 6.50 € | **6.60 €** | 42.1 % | **44.2 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 11.90 € | **12.00 €** | 37.6 % | **38.8 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 8.90 € | **9.00 €** | 43.0 % | **44.6 %** | 9.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 12.90 € | **13.00 €** | 40.8 % | **41.9 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 9.50 € | **9.60 €** | 6.7 % | **7.8 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 9.90 € | **10.00 €** | 37.6 % | **39.0 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 10.90 € | **11.00 €** | 7.0 % | **8.0 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Venta Organic fragrance Peppermint | 15.90 € | **16.00 €** | 6.6 % | **7.2 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 14.90 € | **15.00 €** | 41.7 % | **42.6 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR senzor pro E27 žiarovku, biely | 6.70 € | **6.80 €** | 41.9 % | **44.0 %** | 6.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 11.90 € | **12.00 €** | 39.8 % | **41.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie Siena, sivé, 20W, 1... | 11.90 € | **12.00 €** | 13.0 % | **14.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka kocka, 3x 16A + USB A+C, biela, vyp... | 9.10 € | **9.20 €** | 35.3 % | **36.7 %** | 9.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.40 € | **7.50 €** | 33.7 % | **35.5 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.00 € | **6.10 €** | 32.2 % | **34.4 %** | 6.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 3.70 € | **3.80 €** | 30.8 % | **34.3 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 15.90 € | **16.00 €** | 7.3 % | **8.0 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal BC50D2V0 | 15.90 € | **16.00 €** | 9.6 % | **10.3 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Status STA 176214 | 9.90 € | **10.00 €** | 6.5 % | **7.5 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight cestovný adaptér do Indie, typ D | 5.40 € | **5.50 €** | 32.6 % | **35.1 %** | 5.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight cestovný adaptér do Veľkej Británie, typ G | 5.40 € | **5.50 €** | 32.6 % | **35.1 %** | 5.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.00 € | **9.10 €** | 36.5 % | **38.0 %** | 9.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.50 € | **4.60 €** | 35.5 % | **38.5 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 9.50 € | **9.60 €** | 18.1 % | **19.3 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 4.70 € | **4.80 €** | 35.0 % | **37.9 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB A+C 20W fast charger | 6.20 € | **6.30 €** | 32.6 % | **34.8 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 7.00 € | **7.10 €** | 34.5 % | **36.5 %** | 7.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný WiFi nástenný spínač SONOFF M5-1C-80 (1... | 15.90 € | **16.00 €** | 7.7 % | **8.4 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.40 € | **4.50 €** | 20.9 % | **23.6 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.50 € | **5.60 €** | 32.7 % | **35.1 %** | 5.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.00 € | **6.10 €** | 33.6 % | **35.9 %** | 6.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 4.90 € | **5.00 €** | 33.7 % | **36.4 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.40 € | **8.50 €** | 34.2 % | **35.8 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.20 € | **5.30 €** | 33.4 % | **35.9 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 14.90 € | **15.00 €** | 54.3 % | **55.4 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový senzor k meteostanici TE81WIFI | 4.00 € | **4.10 €** | 13.7 % | **16.6 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rádio KRUGER & MATZ KM0833 analogové přenosné solární | 15.90 € | **16.00 €** | 5.6 % | **6.3 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 13.90 € | **14.00 €** | 14.6 % | **15.4 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.50 € | **4.60 €** | 29.3 % | **32.1 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight WIFI zásuvka s meraním spotreby | 11.90 € | **12.00 €** | 35.5 % | **36.6 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 5.90 € | **6.00 €** | 41.5 % | **43.9 %** | 6.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 10.90 € | **11.00 €** | 42.9 % | **44.2 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 9.60 € | **9.70 €** | 34.8 % | **36.2 %** | 9.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 5.00 € | **5.10 €** | 41.1 % | **44.0 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 13.90 € | **14.00 €** | 28.1 % | **29.0 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 8.00 € | **8.10 €** | 15.5 % | **17.0 %** | 8.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.70 € | **7.80 €** | 32.1 % | **33.8 %** | 7.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Budík digitální TechnoLine WT 500 | 91.90 € | **92.00 €** | 9.5 % | **9.6 %** | 91.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Magnetický veslařský trenažér HMS ZM1801 | 237.90 € | **238.00 €** | 42881.0 % | **42899.1 %** | 237.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente DigiChef+ kuchyňský robot | 123.90 € | **124.00 €** | 6.4 % | **6.5 %** | 123.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ozvučovací systém KRUGER MATZ KM1718 | 200.90 € | **201.00 €** | 9.9 % | **9.9 %** | 200.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal OptiGrill GC7P0810 | 97.90 € | **98.00 €** | 8.3 % | **8.4 %** | 98.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 26520-56 | 157.90 € | **158.00 €** | 8.4 % | **8.5 %** | 158.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal FW402HE0 | 128.90 € | **129.00 €** | 8.2 % | **8.3 %** | 129.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 161 | 246.90 € | **247.00 €** | 9.5 % | **9.5 %** | 247.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT65421VC | 126.90 € | **127.00 €** | 7.7 % | **7.8 %** | 127.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO 221 SV | 120.90 € | **121.00 €** | 9.4 % | **9.5 %** | 121.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO228SV | 120.90 € | **121.00 €** | 9.1 % | **9.2 %** | 121.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9252I | 251.90 € | **252.00 €** | 7.4 % | **7.5 %** | 252.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 68.90 € | **69.00 €** | 5.5 % | **5.6 %** | 69.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 117.90 € | **118.00 €** | 11.9 % | **12.0 %** | 118.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartphone HOTWAV Hyper 7S (čierny) | 175.90 € | **176.00 €** | 10.7 % | **10.8 %** | 176.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 247.90 € | **248.00 €** | 9.2 % | **9.2 %** | 248.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 89.90 € | **90.00 €** | 11.3 % | **11.4 %** | 90.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 80.90 € | **81.00 €** | 8.4 % | **8.5 %** | 81.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 78.90 € | **79.00 €** | 23.2 % | **23.3 %** | 79.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 119.90 € | **120.00 €** | 9.8 % | **9.9 %** | 120.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 249.90 € | **250.00 €** | 14.0 % | **14.1 %** | 250.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 196.90 € | **197.00 €** | 9.3 % | **9.4 %** | 197.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sequential Shifter Moza Racing SGP RS059 | 129.90 € | **130.00 €** | 10.7 % | **10.8 %** | 130.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WHT643E4XBG | 246.90 € | **247.00 €** | 7.9 % | **7.9 %** | 247.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 90A1 | 128.90 € | **129.00 €** | 7.0 % | **7.1 %** | 129.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje MO20A3WH | 70.90 € | **71.00 €** | 6.4 % | **6.5 %** | 71.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA DI 6401 PSB | 178.90 € | **179.00 €** | 8.9 % | **9.0 %** | 179.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE ECT601FM | 136.90 € | **137.00 €** | 8.8 % | **8.9 %** | 137.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 1226 | 188.90 € | **189.00 €** | 6.4 % | **6.5 %** | 189.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Presto 2094 90000, bílý | 93.90 € | **94.00 €** | 6.1 % | **6.3 %** | 93.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (560)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| 3D skener Creality Sermoon P1 | 3158.50 € | **2909.50 €** | 15.0 % | **5.9 %** | 2909.90 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon S1 | 2561.00 € | **2372.90 €** | 15.0 % | **6.5 %** | 2373.00 € | stávame sa najlacnejší |
| Kompletný čistiaci robot MOVA V70 Ultra (čierny) | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 1463.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA MV 647 AW | 465.00 € | **333.00 €** | 48.2 % | **6.1 %** | 333.50 € | stávame sa najlacnejší |
| ELECTROLUX 300 EFC226R | 369.00 € | **242.50 €** | 60.0 % | **5.1 %** | 236.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung The Frame Pro QE75LS03HW | 2799.00 € | **2683.50 €** | 14.7 % | **10.0 %** | 2683.90 € | stávame sa najlacnejší |
| Electrolux EHF6547FXK | 329.00 € | **215.90 €** | 60.5 % | **5.3 %** | 216.00 € | stávame sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 256GB Graphite | 2200.50 € | **2100.50 €** | 10.0 % | **5.0 %** | 1390.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GS620C10W | 399.00 € | **336.00 €** | 26.2 % | **6.3 %** | 336.50 € | stávame sa najlacnejší |
| Inteligentný samočistiaci záchod pre mačky Catlink P... | 589.50 € | **538.50 €** | 15.0 % | **5.1 %** | 507.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický skúter NAVEE GT5 Max | 612.50 € | **565.90 €** | 15.0 % | **6.3 %** | 566.00 € | stávame sa najlacnejší |
| LaserPecker LX2 40W laserový gravír | 1879.50 € | **1834.90 €** | 15.0 % | **12.3 %** | 1835.00 € | stávame sa najlacnejší |
| Nabíjacia stanica FOSSIBOT F2400 2400 W (čierna) | 779.50 € | **736.90 €** | 15.0 % | **8.7 %** | 737.00 € | stávame sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 239.00 € | **204.50 €** | 27.5 % | **9.1 %** | 204.81 € | stávame sa najlacnejší |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 402.90 € | **368.50 €** | 15.0 % | **5.2 %** | 368.90 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 176.50 € | **142.90 €** | 32.0 % | **6.9 %** | 143.00 € | stávame sa najlacnejší |
| MKF 17DF441 Fixní držák na TV | 39.00 € | **7.30 €** | 493.8 % | **11.1 %** | 7.33 € | stávame sa najlacnejší |
| Subwoofer Edifier Airpulse SW8 (čierny) | 338.50 € | **309.50 €** | 15.0 % | **5.1 %** | 293.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B3BCNA324HS | 631.50 € | **602.50 €** | 10.1 % | **5.0 %** | 587.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 315.50 € | **288.50 €** | 15.0 % | **5.2 %** | 254.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Ultima Nova C40 | 301.00 € | **274.90 €** | 15.0 % | **5.0 %** | 267.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistiaci robot ULTENIC MX50 | 445.90 € | **419.90 €** | 15.0 % | **8.3 %** | 420.00 € | stávame sa najlacnejší |
| JBL 430406 Partybox 710 - black | 559.00 € | **533.50 €** | 15.2 % | **10.0 %** | 533.90 € | stávame sa najlacnejší |
| Blesk GODOX AD600BMII Wistro s uchytením Bowens | 564.00 € | **538.90 €** | 15.0 % | **9.8 %** | 539.00 € | stávame sa najlacnejší |
| iiyama ProLite XCB4594DQSU-B1 | 538.50 € | **513.90 €** | 10.0 % | **5.0 %** | 482.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EHF6342XOK | 279.00 € | **254.50 €** | 15.3 % | **5.2 %** | 195.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 276.00 € | **252.50 €** | 15.0 % | **5.2 %** | 228.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 199.00 € | **175.90 €** | 22.5 % | **8.3 %** | 176.00 € | stávame sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1399.00 € | **1376.50 €** | 10.6 % | **8.9 %** | 1376.90 € | stávame sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 403.00 € | **380.90 €** | 11.1 % | **5.0 %** | 372.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LKR64022AW | 478.50 € | **456.50 €** | 10.1 % | **5.0 %** | 436.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Funkčný generátor FNIRSI TSG6020 | 250.90 € | **229.00 €** | 15.1 % | **5.0 %** | 224.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 210G | 474.50 € | **452.90 €** | 10.0 % | **5.0 %** | 453.00 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (čierny) | 295.50 € | **275.00 €** | 15.1 % | **7.1 %** | 275.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 87.90 € | **68.90 €** | 43.8 % | **12.7 %** | 69.00 € | stávame sa najlacnejší |
| Rooma Espresso A6 bílá | 483.50 € | **465.00 €** | 10.1 % | **5.9 %** | 465.50 € | stávame sa najlacnejší |
| MOVA V10 Akumulátorový vysávač na bazény | 206.90 € | **188.90 €** | 15.1 % | **5.1 %** | 118.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Funkčný generátor FNIRSI TSG3020 | 209.90 € | **191.90 €** | 15.1 % | **5.2 %** | 188.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 195.90 € | **178.90 €** | 15.1 % | **5.1 %** | 161.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odšťavovač G21 Chamberi horizontal | 169.50 € | **152.50 €** | 18.5 % | **6.6 %** | 152.89 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 52.50 € | **36.90 €** | 50.5 % | **5.7 %** | 35.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 244.50 € | **229.00 €** | 15.1 % | **7.8 %** | 229.50 € | stávame sa najlacnejší |
| Ultima Poseidon D60 Soundbar | 178.00 € | **162.90 €** | 15.0 % | **5.2 %** | 138.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Epson EcoTank L5390 | 330.50 € | **315.50 €** | 10.1 % | **5.1 %** | 283.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Epson EcoTank L5396 | 330.50 € | **315.50 €** | 10.1 % | **5.1 %** | 283.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenco Ls-500BK | 303.90 € | **289.90 €** | 10.1 % | **5.0 %** | 287.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 272.00 € | **259.90 €** | 10.0 % | **5.1 %** | 259.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 81.50 € | **69.50 €** | 57.1 % | **34.0 %** | 69.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 81.50 € | **69.50 €** | 44.2 % | **23.0 %** | 69.90 € | stávame sa najlacnejší |
| Redmi Pad 2 4/256GB zelená (79232) | 262.00 € | **250.50 €** | 10.0 % | **5.2 %** | 209.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 59.50 € | **48.90 €** | 40.2 % | **15.2 %** | 49.00 € | stávame sa najlacnejší |
| Taška DJI Power 1000 | 119.90 € | **109.50 €** | 15.1 % | **5.1 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA DI 6412 CB | 280.90 € | **270.50 €** | 10.1 % | **6.1 %** | 270.79 € | stávame sa najlacnejší |
| Ufesa Sensazione černý | 344.90 € | **334.50 €** | 10.1 % | **6.8 %** | 334.90 € | stávame sa najlacnejší |
| ETA Magic X-treme 7235 90000 černý/modrý | 339.50 € | **329.50 €** | 10.1 % | **6.8 %** | 329.60 € | stávame sa najlacnejší |
| Rowenta RH98A9WO | 285.50 € | **275.50 €** | 10.0 % | **6.2 %** | 275.90 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 374.50 € | **364.90 €** | 7.9 % | **5.1 %** | 317.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT96425VD | 262.50 € | **252.90 €** | 10.1 % | **6.1 %** | 253.00 € | stávame sa najlacnejší |
| Epson EcoTank L3310 | 205.50 € | **196.00 €** | 10.1 % | **5.0 %** | 179.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 478.00 € | **468.50 €** | 15.0 % | **12.7 %** | 468.88 € | stávame sa najlacnejší |
| YAMAHA TW-E5B BROWN | 139.00 € | **129.90 €** | 12.6 % | **5.3 %** | 129.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 FLEX EES42210IX | 471.90 € | **462.90 €** | 7.1 % | **5.0 %** | 447.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sušič vlasov MOVA Flip 10 | 192.90 € | **184.00 €** | 15.1 % | **9.8 %** | 184.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 50.90 € | **42.00 €** | 44.2 % | **19.0 %** | 42.50 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 184.50 € | **175.90 €** | 10.1 % | **5.0 %** | 159.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 9.7 4/128GB Gray (76907) | 196.50 € | **187.90 €** | 10.0 % | **5.2 %** | 183.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar HIF-8892 EBT Multimediální HI-F | 191.50 € | **182.90 €** | 10.1 % | **5.1 %** | 182.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Moza Racing MTLP AS009 Panel pre vzlet a pristátie (PC) | 154.50 € | **146.00 €** | 15.1 % | **8.8 %** | 146.20 € | stávame sa najlacnejší |
| Batéria Jupio Alkaline AA balenie 100ks | 44.00 € | **35.50 €** | 34.5 % | **8.5 %** | 35.75 € | stávame sa najlacnejší |
| Epson EcoTank L1350 | 186.90 € | **178.50 €** | 10.0 % | **5.1 %** | 162.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Průmyslový endoskop Ermenrich Seek VE50 Fialový | 155.00 € | **146.90 €** | 11.1 % | **5.3 %** | 147.00 € | stávame sa najlacnejší |
| Victrola VTA-270B Gramofon hnědý | 177.50 € | **169.50 €** | 10.1 % | **5.2 %** | 147.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 2-pack) | 179.50 € | **171.50 €** | 10.1 % | **5.2 %** | 152.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 95.50 € | **87.50 €** | 14.9 % | **5.3 %** | 86.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (biely) | 94.90 € | **86.90 €** | 15.2 % | **5.5 %** | 86.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 58.90 € | **50.90 €** | 21.9 % | **5.4 %** | 50.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 294.00 € | **286.00 €** | 8.0 % | **5.0 %** | 286.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 41.00 € | **33.00 €** | 38.3 % | **11.3 %** | 33.03 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 307.50 € | **299.50 €** | 15.0 % | **12.0 %** | 299.60 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 307.50 € | **299.50 €** | 15.0 % | **12.0 %** | 299.60 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 279.00 € | **271.00 €** | 8.5 % | **5.4 %** | 271.19 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim | 36.99 € | **29.00 €** | 38.5 % | **8.6 %** | 29.29 € | stávame sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (biele) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 77.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (čierne) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 77.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo Chamber Line 70 | 360.90 € | **353.00 €** | 10.0 % | **7.6 %** | 353.43 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa A3C Pro 13,3" | 129.00 € | **121.50 €** | 14.9 % | **8.3 %** | 121.81 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA420 Deodorizačný modul... | 42.00 € | **34.50 €** | 33.9 % | **10.0 %** | 34.90 € | stávame sa najlacnejší |
| GUZZANTI GZ 44GW | 206.00 € | **198.50 €** | 10.0 % | **6.0 %** | 198.90 € | stávame sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 8x42 | 150.00 € | **142.90 €** | 10.5 % | **5.2 %** | 141.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Hurricane H7 Plus | 163.50 € | **156.50 €** | 9.8 % | **5.1 %** | 129.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B5RCNA416HXBR | 443.50 € | **436.50 €** | 6.8 % | **5.1 %** | 424.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 84.50 € | **77.50 €** | 15.2 % | **5.6 %** | 70.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L1630W | 158.90 € | **151.90 €** | 10.0 % | **5.2 %** | 148.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO9079KR-PROMO | 295.50 € | **288.50 €** | 10.0 % | **7.4 %** | 288.63 € | stávame sa najlacnejší |
| Electrolux EWS6526WC | 318.50 € | **311.50 €** | 10.1 % | **7.7 %** | 311.90 € | stávame sa najlacnejší |
| LEIFHEIT  Regulus PowerVac 2in1 11925 | 144.50 € | **137.90 €** | 10.0 % | **5.0 %** | 124.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sous vide G21 Maestro, WiFi, 1200 W | 114.50 € | **107.90 €** | 18.8 % | **11.9 %** | 107.91 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 88.50 € | **82.00 €** | 14.9 % | **6.5 %** | 82.02 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 88.50 € | **82.00 €** | 14.9 % | **6.5 %** | 82.02 € | stávame sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 27.00 € | **20.50 €** | 48.4 % | **12.7 %** | 20.79 € | stávame sa najlacnejší |
| TP-LINK WiFi AX1500 (Deco X10 3-pack) | 144.90 € | **138.50 €** | 10.1 % | **5.2 %** | 101.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FINLUX 32FWI5670 SMART ANDROID TV FULL HD BÍLÁ | 251.90 € | **245.50 €** | 12.1 % | **9.3 %** | 245.90 € | stávame sa najlacnejší |
| Shifter Moza Racing HGP RS039 | 149.90 € | **143.50 €** | 11.7 % | **6.9 %** | 143.90 € | stávame sa najlacnejší |
| Merač oxidu uhoľnatého Uni-T UT337A | 74.00 € | **67.90 €** | 14.8 % | **5.3 %** | 63.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MPPT solar panel adapter for DJI power stations | 71.50 € | **65.50 €** | 14.7 % | **5.1 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 110G | 331.50 € | **325.50 €** | 10.1 % | **8.1 %** | 325.72 € | stávame sa najlacnejší |
| Mini projektor Phillips N-140 s rozlíšením 720p (biely) | 112.50 € | **106.50 €** | 26.1 % | **19.3 %** | 106.85 € | stávame sa najlacnejší |
| JBL CHARGEES3 | 119.90 € | **114.00 €** | 15.2 % | **9.5 %** | 114.50 € | stávame sa najlacnejší |
| GORENJE GV520E15 | 289.50 € | **283.90 €** | 7.2 % | **5.1 %** | 223.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C100 IP, FHD, WiFi, prísvit | 29.00 € | **23.50 €** | 29.8 % | **5.1 %** | 22.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT86325VI | 204.50 € | **199.00 €** | 10.1 % | **7.2 %** | 199.50 € | stávame sa najlacnejší |
| TESLA PowerWash & Steam Station TQS600 | 122.90 € | **117.50 €** | 10.1 % | **5.2 %** | 108.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Girmi FM2105 Mikrovlnná trouba s grilem | 109.50 € | **104.50 €** | 10.4 % | **5.3 %** | 91.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun CG9043 | 219.90 € | **214.90 €** | 10.1 % | **7.6 %** | 215.00 € | stávame sa najlacnejší |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 80.50 € | **75.50 €** | 14.9 % | **7.7 %** | 75.66 € | stávame sa najlacnejší |
| 3D tlačiareň Creality Halot X1 Combo | 505.00 € | **500.00 €** | 15.0 % | **13.8 %** | 500.20 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Black | 50.50 € | **45.50 €** | 18.4 % | **6.6 %** | 45.79 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Red/Black | 50.50 € | **45.50 €** | 18.4 % | **6.6 %** | 45.79 € | stávame sa najlacnejší |
| GODOX SB-USW80120 Softbox s dáždnikom | 66.00 € | **61.00 €** | 14.7 % | **6.0 %** | 61.50 € | stávame sa najlacnejší |
| Candy ECNBQT3518E Fresco | 478.90 € | **474.00 €** | 6.1 % | **5.0 %** | 466.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight PIR interiérový senzor, do krabičky od vypín... | 13.50 € | **8.80 €** | 121.3 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 80.50 € | **75.90 €** | 15.2 % | **8.6 %** | 75.99 € | stávame sa najlacnejší |
| TP-LINK Archer BE3600 WiFi 7 Router | 95.50 € | **91.00 €** | 10.2 % | **5.0 %** | 74.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GOOLOO GP3000 59,2 Wh štartér | 56.00 € | **51.50 €** | 14.8 % | **5.5 %** | 48.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight otočná IP kamera | 39.00 € | **34.50 €** | 41.4 % | **25.1 %** | 34.90 € | stávame sa najlacnejší |
| ETA Stormy Home 0517 90000 | 79.99 € | **75.50 €** | 11.4 % | **5.1 %** | 71.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 242.90 € | **238.50 €** | 8.5 % | **6.5 %** | 238.90 € | stávame sa najlacnejší |
| Výrobok X.A.3 | 53.90 € | **49.50 €** | 15.0 % | **5.6 %** | 48.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KOMA RK01 - Univerzální rotační kartáč | 22.99 € | **18.90 €** | 42.4 % | **17.0 %** | 19.00 € | stávame sa najlacnejší |
| ETA Fragranza 0066 90000 nerez | 19.99 € | **15.90 €** | 32.3 % | **5.3 %** | 13.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-C603 BLACK | 573.50 € | **569.50 €** | 5.8 % | **5.1 %** | 553.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER HL-1110E | 92.90 € | **88.90 €** | 10.2 % | **5.5 %** | 80.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 18.00 € | **14.00 €** | 35.3 % | **5.2 %** | 14.50 € | stávame sa najlacnejší |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 178.00 € | **174.00 €** | 12.2 % | **9.7 %** | 174.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 19.00 € | **15.00 €** | 42.2 % | **12.3 %** | 15.50 € | stávame sa najlacnejší |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 19.50 € | **15.90 €** | 46.0 % | **19.0 %** | 16.00 € | stávame sa najlacnejší |
| Samsung VG-SCFC32SGMXC | 82.50 € | **78.90 €** | 10.3 % | **5.5 %** | 35.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi AX3200 Router (R32/E) | 83.50 € | **79.90 €** | 10.1 % | **5.3 %** | 75.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal RK812110 | 108.50 € | **104.90 €** | 8.8 % | **5.2 %** | 104.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 103RB | 218.50 € | **214.90 €** | 10.2 % | **8.4 %** | 215.00 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 87.00 € | **83.50 €** | 14.8 % | **10.2 %** | 83.65 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 339.00 € | **335.50 €** | 15.0 % | **13.8 %** | 335.77 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 44.00 € | **40.50 €** | 37.6 % | **26.7 %** | 40.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 21.00 € | **17.50 €** | 43.6 % | **19.7 %** | 17.90 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 507.50 € | **504.00 €** | 7.0 % | **6.2 %** | 504.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 122.90 € | **119.50 €** | 16.4 % | **13.2 %** | 119.90 € | stávame sa najlacnejší |
| Klávesnica ONIKUMA MT706 (čierna) (QWERTY) | 40.90 € | **37.50 €** | 15.3 % | **5.7 %** | 32.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 41.90 € | **38.50 €** | 15.3 % | **5.9 %** | 38.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 41.90 € | **38.50 €** | 15.3 % | **5.9 %** | 38.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 40.90 € | **37.50 €** | 15.0 % | **5.4 %** | 37.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Nabíječka baterií GP ReCyko B423 4× AA GP ReCyko 210... | 20.00 € | **16.90 €** | 26.9 % | **7.3 %** | 16.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KOMA HPU1 - Univerzální hubice | 15.99 € | **12.90 €** | 44.9 % | **16.9 %** | 13.00 € | stávame sa najlacnejší |
| Strong LEAP-NEVE 4K UHD Streaming Dongle | 68.50 € | **65.50 €** | 10.3 % | **5.4 %** | 65.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **32.90 €** | 15.0 % | **5.4 %** | 32.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 24.00 € | **21.00 €** | 33.4 % | **16.7 %** | 21.09 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Olympus | 127.90 € | **124.90 €** | 15.1 % | **12.4 %** | 125.00 € | stávame sa najlacnejší |
| HiBREW 5-in-1 capsule coffee maker H1B-black (black) | 107.00 € | **104.00 €** | 14.8 % | **11.6 %** | 104.12 € | stávame sa najlacnejší |
| Tester USB FNIRSI FNB-C2 | 39.00 € | **36.00 €** | 14.7 % | **5.9 %** | 36.17 € | stávame sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 44.50 € | **41.50 €** | 39.3 % | **29.9 %** | 41.74 € | stávame sa najlacnejší |
| Niceboy OFFICE M40 Vertical | 17.00 € | **14.00 €** | 36.2 % | **12.1 %** | 14.25 € | stávame sa najlacnejší |
| Herní mikrofon Maono DM30RGB (černý) | 40.50 € | **37.50 €** | 14.8 % | **6.3 %** | 37.83 € | stávame sa najlacnejší |
| ETA Nubela 2569 90100, bílý | 27.99 € | **25.00 €** | 51.9 % | **35.7 %** | 25.17 € | stávame sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 1-pack) | 101.90 € | **99.00 €** | 10.0 % | **6.9 %** | 99.09 € | stávame sa najlacnejší |
| Batéria Jupio AAA 1000 mAh (mikrotužkové) 4ks, dobíj... | 11.50 € | **8.60 €** | 46.1 % | **9.2 %** | 8.66 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.90 € | **10.00 €** | 47.7 % | **14.5 %** | 10.50 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2-Z ZigBee (štvorbalen... | 30.50 € | **27.90 €** | 15.3 % | **5.5 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo čierne) | 30.50 € | **27.90 €** | 15.9 % | **6.0 %** | 22.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač hladiny hluku FNIRSI FDM-02 | 33.50 € | **30.90 €** | 15.3 % | **6.3 %** | 28.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 34.50 € | **31.90 €** | 14.6 % | **6.0 %** | 30.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor elektromagnetického žiarenia FNIRSI ERD-10 | 32.50 € | **29.90 €** | 14.6 % | **5.4 %** | 29.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2Plus | 45.50 € | **42.90 €** | 15.2 % | **8.6 %** | 42.92 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 8.90 € | **6.30 €** | 48.9 % | **5.4 %** | 6.40 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i4 - white | 161.50 € | **158.90 €** | 6.9 % | **5.2 %** | 156.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **92.90 €** | 14.9 % | **11.7 %** | 92.92 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 4 kusoch | 33.00 € | **30.50 €** | 14.6 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 440 | 105.00 € | **102.50 €** | 7.6 % | **5.0 %** | 91.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo-zlaté) | 30.00 € | **27.50 €** | 14.8 % | **5.3 %** | 22.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 11.90 € | **9.40 €** | 50.0 % | **18.5 %** | 9.50 € | stávame sa najlacnejší |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 59.50 € | **57.00 €** | 15.2 % | **10.4 %** | 57.17 € | stávame sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 257.50 € | **255.00 €** | 15.1 % | **14.0 %** | 255.39 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 12.50 € | **10.00 €** | 56.8 % | **25.5 %** | 10.41 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 230.50 € | **228.00 €** | 15.0 % | **13.7 %** | 228.50 € | stávame sa najlacnejší |
| Tefal SV9201E0 | 197.90 € | **195.50 €** | 10.2 % | **8.9 %** | 195.60 € | stávame sa najlacnejší |
| Blender G21 Excellent Graphite Black | 232.90 € | **230.50 €** | 18.3 % | **17.1 %** | 230.90 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2 WiFi, 4 kusy (štvorb... | 28.90 € | **26.50 €** | 15.7 % | **6.1 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sprchový stan Trizand 23492 | 24.90 € | **22.50 €** | 18.6 % | **7.2 %** | 16.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 30.90 € | **28.50 €** | 15.7 % | **6.7 %** | 27.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator Reproduktor pro MagSafe ABSMB01 | 16.90 € | **14.50 €** | 25.5 % | **7.7 %** | 14.90 € | stávame sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 128 GB | 28.00 € | **25.90 €** | 14.7 % | **6.1 %** | 21.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 11.90 € | **9.80 €** | 44.0 % | **18.6 %** | 9.90 € | stávame sa najlacnejší |
| Odšťavovač G21 Gracioso horizontal | 200.00 € | **197.90 €** | 11.8 % | **10.6 %** | 197.99 € | stávame sa najlacnejší |
| TP-LINK Tapo C320WS | 50.90 € | **48.90 €** | 10.0 % | **5.7 %** | 39.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 26.50 € | **24.50 €** | 15.2 % | **6.5 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 50.00 € | **48.00 €** | 9.5 % | **5.1 %** | 44.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 25.00 € | **23.00 €** | 14.3 % | **5.2 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 24.00 € | **22.00 €** | 14.6 % | **5.1 %** | 20.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Neutralizátor zápachu na čistenie podláh pre MOVA V5... | 26.50 € | **24.50 €** | 14.7 % | **6.0 %** | 23.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny decibelomer Habotest HT622B USB A/C | 26.90 € | **24.90 €** | 15.2 % | **6.6 %** | 24.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dotykový nástenný vypínač WiFi Sonoff T... | 24.50 € | **22.50 €** | 15.4 % | **6.0 %** | 22.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2 | 39.00 € | **37.00 €** | 14.5 % | **8.7 %** | 37.04 € | stávame sa najlacnejší |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 60.00 € | **58.00 €** | 14.9 % | **11.1 %** | 58.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 45.00 € | **43.00 €** | 14.9 % | **9.8 %** | 43.04 € | stávame sa najlacnejší |
| Guzzanti GZ 06A1 | 104.90 € | **102.90 €** | 7.3 % | **5.2 %** | 102.96 € | stávame sa najlacnejší |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 85.00 € | **83.00 €** | 14.8 % | **12.1 %** | 83.08 € | stávame sa najlacnejší |
| Napájací zdroj FNIRSI 100 W | 37.00 € | **35.00 €** | 15.1 % | **8.9 %** | 35.08 € | stávame sa najlacnejší |
| Blender G21 Perfection white | 211.90 € | **209.90 €** | 18.5 % | **17.3 %** | 210.00 € | stávame sa najlacnejší |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 116.50 € | **114.50 €** | 14.9 % | **12.9 %** | 114.67 € | stávame sa najlacnejší |
| Solight profesionálny multimeter, tru RMS | 23.50 € | **21.50 €** | 43.8 % | **31.5 %** | 21.88 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierne) | 30.00 € | **28.00 €** | 14.3 % | **6.7 %** | 28.38 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 16.50 € | **14.50 €** | 43.2 % | **25.8 %** | 14.90 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 16.50 € | **14.50 €** | 43.2 % | **25.8 %** | 14.90 € | stávame sa najlacnejší |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 13.50 € | **11.50 €** | 30.0 % | **10.8 %** | 11.90 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Red | 18.50 € | **16.50 €** | 22.0 % | **8.8 %** | 16.90 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C White | 18.50 € | **16.50 €** | 22.0 % | **8.8 %** | 16.90 € | stávame sa najlacnejší |
| Stolové svorky pre základňu AY210 Moza Racing AS013 | 28.00 € | **26.00 €** | 14.4 % | **6.2 %** | 26.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 102.90 € | **101.00 €** | 15.1 % | **13.0 %** | 101.04 € | stávame sa najlacnejší |
| Blender G21 Perfection brown | 211.90 € | **210.00 €** | 18.5 % | **17.4 %** | 210.46 € | stávame sa najlacnejší |
| Blender G21 Perfection Cappuccino | 211.90 € | **210.00 €** | 18.5 % | **17.4 %** | 210.46 € | stávame sa najlacnejší |
| Blender G21 Perfection red | 211.90 € | **210.00 €** | 18.5 % | **17.4 %** | 210.46 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 7.30 € | **5.40 €** | 47.3 % | **8.9 %** | 5.41 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60Mi | 27.90 € | **26.00 €** | 15.4 % | **7.5 %** | 26.12 € | stávame sa najlacnejší |
| Leifheit Žehlicí prkno Classic M BLACK | 36.50 € | **34.90 €** | 10.7 % | **5.9 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 19.50 € | **17.90 €** | 14.5 % | **5.2 %** | 18.00 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 42.50 € | **40.90 €** | 14.7 % | **10.4 %** | 41.00 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 2 kusoch | 17.50 € | **15.90 €** | 16.5 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 325 | 253.00 € | **251.50 €** | 5.8 % | **5.1 %** | 243.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze GTS 4 (čierne) | 23.00 € | **21.50 €** | 14.9 % | **7.4 %** | 18.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze GTS 4 (strieborné) | 23.00 € | **21.50 €** | 14.9 % | **7.4 %** | 18.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonda FNIRSI P4100 | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 16.04 € | stávame sa najlacnejší |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 57.50 € | **56.00 €** | 15.0 % | **12.0 %** | 56.04 € | stávame sa najlacnejší |
| Samsung VG-SCFC43SGMXC | 120.50 € | **119.00 €** | 7.2 % | **5.9 %** | 119.05 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CP2A | 28.50 € | **27.00 €** | 15.7 % | **9.6 %** | 27.10 € | stávame sa najlacnejší |
| Batéria Jupio C 5000mAh (malé monočlánky) 2ks, dobíj... | 20.00 € | **18.50 €** | 17.7 % | **8.8 %** | 18.70 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 137.50 € | **136.00 €** | 15.0 % | **13.7 %** | 136.22 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 25.00 € | **23.50 €** | 18.3 % | **11.2 %** | 23.90 € | stávame sa najlacnejší |
| Leifheit Telegant 72 Protect | 28.50 € | **27.00 €** | 11.1 % | **5.2 %** | 27.46 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 27.50 € | **26.00 €** | 15.6 % | **9.3 %** | 26.50 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 28.50 € | **27.00 €** | 20.1 % | **13.7 %** | 27.50 € | stávame sa najlacnejší |
| JBL Grip White | 77.50 € | **76.00 €** | 8.2 % | **6.1 %** | 76.50 € | stávame sa najlacnejší |
| Filtračný nástavec Black Glow Mist Freewell pre Osmo... | 19.50 € | **18.00 €** | 14.9 % | **6.0 %** | 18.50 € | stávame sa najlacnejší |
| Koloběžka s pumpovanými koly NILS Extreme HC300 červená | 108.90 € | **107.50 €** | 6.4 % | **5.0 %** | 101.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blender G21 Excellent brown | 232.90 € | **231.50 €** | 18.3 % | **17.6 %** | 231.55 € | stávame sa najlacnejší |
| Blender G21 Excellent Cappuccino | 232.90 € | **231.50 €** | 18.3 % | **17.6 %** | 231.55 € | stávame sa najlacnejší |
| Blender G21 Excellent red | 232.90 € | **231.50 €** | 18.3 % | **17.6 %** | 231.55 € | stávame sa najlacnejší |
| Blender G21 Excellent white | 232.90 € | **231.50 €** | 18.3 % | **17.6 %** | 231.55 € | stávame sa najlacnejší |
| Blender G21 Experience White | 253.90 € | **252.50 €** | 18.3 % | **17.6 %** | 252.64 € | stávame sa najlacnejší |
| Clutch Pedal Moza Racing CRP2 RS067 | 99.90 € | **98.50 €** | 8.6 % | **7.1 %** | 98.90 € | stávame sa najlacnejší |
| GameSir Nova Lite 2 Luminous White | 34.90 € | **33.50 €** | 10.1 % | **5.6 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.90 € | **17.50 €** | 15.0 % | **6.5 %** | 17.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 23.90 € | **22.50 €** | 48.8 % | **40.1 %** | 22.56 € | stávame sa najlacnejší |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 16.90 € | **15.50 €** | 16.0 % | **6.4 %** | 15.69 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 31.90 € | **30.50 €** | 38.2 % | **32.1 %** | 30.90 € | stávame sa najlacnejší |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 49.90 € | **48.50 €** | 10.5 % | **7.4 %** | 48.90 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo, 150+150lm, Li... | 8.10 € | **6.80 €** | 44.7 % | **21.5 %** | 6.90 € | stávame sa najlacnejší |
| Solight PIR stropný senzor, interiérový, biely | 7.90 € | **6.70 €** | 55.5 % | **31.9 %** | 6.80 € | stávame sa najlacnejší |
| Rowenta ZR730200 | 28.00 € | **26.90 €** | 10.2 % | **5.9 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vákuovacie fólie G21 sáčky 40 x 50 cm, 50 ks, hladké | 12.00 € | **10.90 €** | 16.4 % | **5.7 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Honey Day 160 ml | 12.00 € | **10.90 €** | 23.0 % | **11.8 %** | 11.00 € | stávame sa najlacnejší |
| Guzzanti GZ 8401SE | 124.00 € | **122.90 €** | 6.3 % | **5.3 %** | 120.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR710001 | 26.50 € | **25.50 €** | 10.4 % | **6.2 %** | 4.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čítačka pamäťových kariet Lexar LRW310X Dual USB-A/C... | 12.50 € | **11.50 €** | 15.9 % | **6.6 %** | 7.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 64 GB | 13.90 € | **12.90 €** | 16.3 % | **7.9 %** | 11.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Anycubic PETG (sivý) 1 kg | 11.50 € | **10.50 €** | 15.1 % | **5.1 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 68.00 € | **67.00 €** | 6.7 % | **5.1 %** | 65.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá TWS QCY T41 (biele) | 13.50 € | **12.50 €** | 16.6 % | **8.0 %** | 12.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WFC710N Black | 66.50 € | **65.50 €** | 7.4 % | **5.8 %** | 65.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WFC710N Blue | 66.50 € | **65.50 €** | 7.4 % | **5.8 %** | 65.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Max | 350.50 € | **349.50 €** | 15.6 % | **15.2 %** | 349.59 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.4 %** | 21.13 € | stávame sa najlacnejší |
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
| Ovládač GameSir T4n Nova Lite (modrý) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.21 € | stávame sa najlacnejší |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 72.00 € | **71.00 €** | 14.7 % | **13.1 %** | 71.31 € | stávame sa najlacnejší |
| SONY WFC510B černá | 37.50 € | **36.50 €** | 10.7 % | **7.7 %** | 36.85 € | stávame sa najlacnejší |
| Solární regulátor MPPT GETI GWH04W 5kW (pro FV ohřev... | 356.50 € | **355.50 €** | 21.7 % | **21.3 %** | 355.89 € | stávame sa najlacnejší |
| DOMO DO42102SV | 97.50 € | **96.50 €** | 7.5 % | **6.4 %** | 96.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 119.50 € | **118.50 €** | 8.8 % | **7.9 %** | 118.89 € | stávame sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK690B černá | 37.50 € | **36.50 €** | 10.9 % | **7.9 %** | 36.90 € | stávame sa najlacnejší |
| TESLA PrimeSound HQ-995X | 182.50 € | **181.50 €** | 10.0 % | **9.4 %** | 181.90 € | stávame sa najlacnejší |
| Cycplus AS210 MAX AT1 Max Anoutway – mini pumpa na b... | 40.50 € | **39.50 €** | 15.7 % | **12.8 %** | 39.90 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.00 € | **29.00 €** | 36.9 % | **32.4 %** | 29.44 € | stávame sa najlacnejší |
| AnyCubic ABS-Like Resin Pro 2 (Grey) | 15.00 € | **14.00 €** | 13.9 % | **6.3 %** | 14.49 € | stávame sa najlacnejší |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 109.00 € | **108.00 €** | 7.6 % | **6.6 %** | 108.50 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1502 | 236.00 € | **235.00 €** | 42537.8 % | **42357.1 %** | 235.50 € | stávame sa najlacnejší |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 368.00 € | **367.00 €** | 66386.0 % | **66205.3 %** | 367.50 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 64.90 € | **64.00 €** | 7.6 % | **6.1 %** | 64.39 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 89.90 € | **89.00 €** | 6.8 % | **5.8 %** | 89.39 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 207.90 € | **207.00 €** | 8.9 % | **8.5 %** | 207.39 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0033 FUN WHEELS LIGHT ... | 110.90 € | **110.00 €** | 14.5 % | **13.6 %** | 110.39 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0034 FUN WHEELS LIGHT ... | 110.90 € | **110.00 €** | 14.5 % | **13.6 %** | 110.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 141.90 € | **141.00 €** | 9.4 % | **8.7 %** | 141.50 € | stávame sa najlacnejší |
| Maxxo Chamber Line 30 | 175.90 € | **175.00 €** | 7.8 % | **7.2 %** | 175.50 € | stávame sa najlacnejší |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 71.90 € | **71.00 €** | 17.2 % | **15.7 %** | 71.50 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 207.90 € | **207.00 €** | 11.6 % | **11.2 %** | 207.50 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 193.90 € | **193.00 €** | 9.2 % | **8.7 %** | 193.50 € | stávame sa najlacnejší |
| Guzzanti GZ 210A | 213.90 € | **213.00 €** | 6.1 % | **5.7 %** | 213.50 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.90 € | **11.00 €** | 45.7 % | **34.7 %** | 11.50 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 12.90 € | **12.00 €** | 40.4 % | **30.6 %** | 12.50 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm tmavé drevo 500 ml | 22.90 € | **22.00 €** | 13.7 % | **9.3 %** | 22.09 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.13 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 25.90 € | **25.00 €** | 14.2 % | **10.2 %** | 25.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3224 | 26.90 € | **26.00 €** | 14.7 % | **10.9 %** | 26.39 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2+ 12ks + dárek A5 | 46.90 € | **46.00 €** | 10.7 % | **8.6 %** | 46.46 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 27.90 € | **27.00 €** | 25.4 % | **21.3 %** | 27.50 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.90 € | **16.00 €** | 35.5 % | **28.3 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 24.90 € | **24.00 €** | 38.3 % | **33.3 %** | 24.50 € | stávame sa najlacnejší |
| Baterie olověná  12V / 12Ah  GETI bezúdržbový akumul... | 37.90 € | **37.00 €** | 8.8 % | **6.2 %** | 37.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.90 € | **29.00 €** | 20.3 % | **16.7 %** | 29.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.90 € | **19.00 €** | 39.6 % | **33.3 %** | 19.50 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 325.90 € | **325.00 €** | 10.7 % | **10.4 %** | 325.39 € | stávame sa najlacnejší |
| Johansson 6700 Revolution programovatelný zesilovač | 270.90 € | **270.00 €** | 6.7 % | **6.3 %** | 270.39 € | stávame sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 344.90 € | **344.00 €** | 6.7 % | **6.5 %** | 344.39 € | stávame sa najlacnejší |
| Beko EnergySpin BM3WFU3721WBW | 324.90 € | **324.00 €** | 7.1 % | **6.8 %** | 324.50 € | stávame sa najlacnejší |
| GUZZANTI GZ 363A | 580.90 € | **580.00 €** | 6.3 % | **6.2 %** | 580.50 € | stávame sa najlacnejší |
| Rowenta RR8589CE | 398.50 € | **397.90 €** | 6.1 % | **5.9 %** | 398.00 € | stávame sa najlacnejší |
| Candy GD 49B8-S | 287.50 € | **286.90 €** | 8.0 % | **7.8 %** | 287.00 € | stávame sa najlacnejší |
| WHIRLPOOL WI 7020 P | 331.50 € | **330.90 €** | 8.1 % | **7.9 %** | 331.00 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Rollfix 210 Lon | 17.50 € | **16.90 €** | 11.3 % | **7.5 %** | 14.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BK | 19.50 € | **18.90 €** | 10.6 % | **7.2 %** | 16.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 1548/05 | 28.50 € | **27.90 €** | 7.6 % | **5.4 %** | 25.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 44.50 € | **43.90 €** | 15.4 % | **13.8 %** | 43.99 € | stávame sa najlacnejší |
| Solight sada 3 LED vianočných darčekov, 48x LED, IP44 | 34.50 € | **33.90 €** | 11.5 % | **9.5 %** | 34.00 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 20.50 € | **19.90 €** | 31.0 % | **27.2 %** | 20.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.50 € | **43.90 €** | 7.0 % | **5.5 %** | 44.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 22.50 € | **21.90 €** | 23.6 % | **20.3 %** | 22.00 € | stávame sa najlacnejší |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.70 € | **2.10 €** | 50.4 % | **16.9 %** | 2.20 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.50 € | **12.90 €** | 14.0 % | **8.9 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časov... | 10.50 € | **9.90 €** | 33.8 % | **26.2 %** | 10.00 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 16.50 € | **15.90 €** | 29.1 % | **24.4 %** | 16.00 € | stávame sa najlacnejší |
| AMIKO 9265+ DVB-S2/T2/C kombo přijímač 4K | 70.50 € | **69.90 €** | 6.0 % | **5.1 %** | 63.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 143.50 € | **142.90 €** | 8.1 % | **7.6 %** | 143.00 € | stávame sa najlacnejší |
| Solight profesionálna smart WIFI meteostanica | 98.50 € | **97.90 €** | 19.6 % | **18.8 %** | 98.00 € | stávame sa najlacnejší |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BRW | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 9.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro ME60 F 5G FIXOP3-1564-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 10.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED pouzdro pro SG S26 FIXOP3-1704-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 10.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Icequeen-Wh | 20.00 € | **19.50 €** | 10.4 % | **7.6 %** | 18.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB01N 75 cm modrý | 13.50 € | **13.00 €** | 9.5 % | **5.5 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní gymnastický míč HMS YB03N 65 cm šedý | 13.50 € | **13.00 €** | 9.5 % | **5.5 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED pouzdro SG S25 FIXOP3-1504-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 10.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed sklo Apple iP17PM FIXGFADA-1603-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 9.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED Sklo s apl.SG S26 FIXGFADA-1704-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 24.50 € | **24.00 €** | 14.4 % | **12.1 %** | 24.04 € | stávame sa najlacnejší |
| UV Filter Freewell for DJI Avata 2 | 17.00 € | **16.50 €** | 13.5 % | **10.1 %** | 16.58 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 7.10 € | **6.60 €** | 42.5 % | **32.5 %** | 6.70 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadný) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.64 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná modrá) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.64 € | stávame sa najlacnejší |
| Filter Freewell CPL pre Insta360 Luna Ultra | 23.00 € | **22.50 €** | 13.9 % | **11.4 %** | 22.67 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Blue | 18.50 € | **18.00 €** | 22.0 % | **18.7 %** | 18.18 € | stávame sa najlacnejší |
| Filament Anycubic TPU (mliečna biela) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná zelená) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 12.50 € | **12.00 €** | 16.7 % | **12.0 %** | 12.19 € | stávame sa najlacnejší |
| D-LINK AC13U | 14.50 € | **14.00 €** | 14.9 % | **10.9 %** | 14.21 € | stávame sa najlacnejší |
| Svetlomet Superfire HL06, 500lm, USB | 13.00 € | **12.50 €** | 15.3 % | **10.8 %** | 12.73 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 20 W | 1117.50 € | **1117.00 €** | 14.3 % | **14.3 %** | 1117.25 € | stávame sa najlacnejší |
| Ručný multimeter do auta UNI-T UT107 | 29.50 € | **29.00 €** | 9.6 % | **7.8 %** | 29.29 € | stávame sa najlacnejší |
| Solight digitálny kapesny kompresor mini | 39.50 € | **39.00 €** | 19.8 % | **18.3 %** | 39.29 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 57.50 € | **57.00 €** | 10.3 % | **9.3 %** | 57.29 € | stávame sa najlacnejší |
| DOMO DO354VD | 130.00 € | **129.50 €** | 7.7 % | **7.3 %** | 129.79 € | stávame sa najlacnejší |
| Svetelný merač UNI-T UT383 | 17.00 € | **16.50 €** | 14.5 % | **11.1 %** | 16.79 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 48.50 € | **48.00 €** | 9.9 % | **8.7 %** | 48.29 € | stávame sa najlacnejší |
| Colmi P71 Smartwatch (Blue) | 18.50 € | **18.00 €** | 15.7 % | **12.6 %** | 18.29 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 36.50 € | **36.00 €** | 7.8 % | **6.3 %** | 36.29 € | stávame sa najlacnejší |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 41.50 € | **41.00 €** | 13.3 % | **12.0 %** | 41.29 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT200R | 17.50 € | **17.00 €** | 12.6 % | **9.4 %** | 17.31 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 85.50 € | **85.00 €** | 6.4 % | **5.8 %** | 85.31 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 85.50 € | **85.00 €** | 6.4 % | **5.8 %** | 85.31 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 48.50 € | **48.00 €** | 16.0 % | **14.8 %** | 48.31 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 48.50 € | **48.00 €** | 12.7 % | **11.6 %** | 48.31 € | stávame sa najlacnejší |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 46.50 € | **46.00 €** | 11.9 % | **10.7 %** | 46.32 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **45.00 €** | 21.5 % | **20.2 %** | 45.33 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16KT s 16-palcovým dotykov... | 204.50 € | **204.00 €** | 14.1 % | **13.8 %** | 204.34 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 22.50 € | **22.00 €** | 9.3 % | **6.9 %** | 22.35 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 31.50 € | **31.00 €** | 7.8 % | **6.1 %** | 31.36 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.50 € | **13.00 €** | 36.3 % | **31.3 %** | 13.37 € | stávame sa najlacnejší |
| GUZZANTI GZ 1535 | 195.50 € | **195.00 €** | 10.0 % | **9.8 %** | 195.37 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 110.50 € | **110.00 €** | 13.6 % | **13.0 %** | 110.38 € | stávame sa najlacnejší |
| Mikrofón Maono DM40 Pro (biely) | 52.50 € | **52.00 €** | 13.8 % | **12.7 %** | 52.38 € | stávame sa najlacnejší |
| Mikrofón Maono DM40 Pro (čierny) | 52.50 € | **52.00 €** | 14.6 % | **13.6 %** | 52.38 € | stávame sa najlacnejší |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.50 € | **24.00 €** | 15.2 % | **12.9 %** | 24.38 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 24.00 € | **23.50 €** | 17.9 % | **15.4 %** | 23.89 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.50 € | **18.00 €** | 12.6 % | **9.5 %** | 18.39 € | stávame sa najlacnejší |
| TESLA Cook BBQ150 | 53.50 € | **53.00 €** | 10.5 % | **9.5 %** | 53.39 € | stávame sa najlacnejší |
| Leifheit Thermo Reflect L/Universal | 14.50 € | **14.00 €** | 16.8 % | **12.8 %** | 14.39 € | stávame sa najlacnejší |
| Leifheit LinoLift 500 85359 | 55.50 € | **55.00 €** | 10.6 % | **9.7 %** | 55.39 € | stávame sa najlacnejší |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.50 € | **18.00 €** | 9.7 % | **6.7 %** | 18.39 € | stávame sa najlacnejší |
| Leifheit sušák Comfort Tower 420 | 48.50 € | **48.00 €** | 10.5 % | **9.3 %** | 48.39 € | stávame sa najlacnejší |
| DOMO DO42329PC | 115.50 € | **115.00 €** | 8.0 % | **7.5 %** | 115.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 87.00 € | **86.50 €** | 11.0 % | **10.3 %** | 86.89 € | stávame sa najlacnejší |
| Uni-T UT207B digitálny klešťový multimeter | 80.50 € | **80.00 €** | 9.0 % | **8.4 %** | 80.39 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 106.00 € | **105.50 €** | 10.2 % | **9.7 %** | 105.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 242.00 € | **241.50 €** | 13.3 % | **13.1 %** | 241.89 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 181.50 € | **181.00 €** | 7.3 % | **7.0 %** | 181.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 466.00 € | **465.50 €** | 7.7 % | **7.6 %** | 465.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 559.50 € | **559.00 €** | 7.1 % | **7.0 %** | 559.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 900.00 € | **899.50 €** | 14.4 % | **14.3 %** | 899.89 € | stávame sa najlacnejší |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 90.50 € | **90.00 €** | 15.1 % | **14.5 %** | 90.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 92.00 € | **91.50 €** | 6.6 % | **6.0 %** | 91.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T A13T | 10.50 € | **10.00 €** | 11.3 % | **6.0 %** | 10.39 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 98.00 € | **97.50 €** | 9.3 % | **8.8 %** | 97.89 € | stávame sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 78.50 € | **78.00 €** | 9.1 % | **8.4 %** | 78.39 € | stávame sa najlacnejší |
| Uni-T UT362H Anemometer | 166.50 € | **166.00 €** | 12.5 % | **12.2 %** | 166.39 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT701 | 182.00 € | **181.50 €** | 8.2 % | **7.9 %** | 181.89 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 140.00 € | **139.50 €** | 11.6 % | **11.2 %** | 139.89 € | stávame sa najlacnejší |
| Merač hladiny hluku Uni-T UT35 | 119.00 € | **118.50 €** | 11.0 % | **10.6 %** | 118.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 115.50 € | **115.00 €** | 11.5 % | **11.0 %** | 115.39 € | stávame sa najlacnejší |
| Ariete ART 808/05 | 58.50 € | **58.00 €** | 6.0 % | **5.1 %** | 58.39 € | stávame sa najlacnejší |
| Maxxo vodní filtry 3+1 | 12.50 € | **12.00 €** | 16.8 % | **12.1 %** | 12.39 € | stávame sa najlacnejší |
| Tefal BL16GE30 | 56.50 € | **56.00 €** | 6.2 % | **5.2 %** | 56.39 € | stávame sa najlacnejší |
| DOMO DO9286IB | 249.50 € | **249.00 €** | 6.5 % | **6.2 %** | 249.39 € | stávame sa najlacnejší |
| Vákuovačka G21 Onyx | 54.00 € | **53.50 €** | 8.4 % | **7.4 %** | 53.89 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Jupiter 2 | 849.00 € | **848.50 €** | 8.3 % | **8.3 %** | 848.89 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 18.50 € | **18.00 €** | 23.0 % | **19.7 %** | 18.39 € | stávame sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DGS-108) | 21.50 € | **21.00 €** | 9.7 % | **7.1 %** | 21.39 € | stávame sa najlacnejší |
| Candy BR 26SSB6G-S | 347.50 € | **347.00 €** | 10.1 % | **9.9 %** | 347.39 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.00 € | **10.50 €** | 32.5 % | **26.5 %** | 10.90 € | stávame sa najlacnejší |
| Stropné svetlo Yeelight C2201C400 | 64.50 € | **64.00 €** | 15.7 % | **14.8 %** | 64.40 € | stávame sa najlacnejší |
| Solight pištoľ spájkovacia 100W sada | 12.00 € | **11.50 €** | 18.4 % | **13.5 %** | 11.90 € | stávame sa najlacnejší |
| Maxxo INFRA DRY+ | 190.00 € | **189.50 €** | 7.9 % | **7.6 %** | 189.90 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 16.00 € | **15.50 €** | 14.4 % | **10.8 %** | 15.90 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 27.00 € | **26.50 €** | 32.9 % | **30.4 %** | 26.90 € | stávame sa najlacnejší |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 51.00 € | **50.50 €** | 12.5 % | **11.4 %** | 50.90 € | stávame sa najlacnejší |
| Solight vonkajšia IP kamera s LED světlom | 31.00 € | **30.50 €** | 16.6 % | **14.7 %** | 30.90 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 12.00 € | **11.50 €** | 19.3 % | **14.3 %** | 11.90 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 126.50 € | **126.00 €** | 5.8 % | **5.4 %** | 126.41 € | stávame sa najlacnejší |
| Blender G21 Comfort Graphite Black | 151.50 € | **151.00 €** | 12.7 % | **12.3 %** | 151.41 € | stávame sa najlacnejší |
| DOMO DO716BL | 84.50 € | **84.00 €** | 9.6 % | **9.0 %** | 84.41 € | stávame sa najlacnejší |
| Vákuovačka G21 Nefrit | 116.50 € | **116.00 €** | 8.7 % | **8.2 %** | 116.41 € | stávame sa najlacnejší |
| Freewell ND1000 Filter pre OSMO Action 6 | 16.50 € | **16.00 €** | 10.0 % | **6.7 %** | 16.42 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 18.50 € | **18.00 €** | 11.2 % | **8.2 %** | 18.42 € | stávame sa najlacnejší |
| Schodík pred mačaciu toaletu Catlink Scooper (sivé) | 84.50 € | **84.00 €** | 14.2 % | **13.5 %** | 84.42 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **20.00 €** | 50.3 % | **46.6 %** | 20.45 € | stávame sa najlacnejší |
| MEROSS MA151-UN Inteligentný Wi-Fi detektor dymu | 27.50 € | **27.00 €** | 21.7 % | **19.5 %** | 27.45 € | stávame sa najlacnejší |
| Digitálny multimeter Habotest HT86B | 11.50 € | **11.00 €** | 12.5 % | **7.6 %** | 11.46 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (white) | 43.50 € | **43.00 €** | 13.4 % | **12.1 %** | 43.46 € | stávame sa najlacnejší |
| Superfire BM01 4-in-1 bicycle light | 19.50 € | **19.00 €** | 14.1 % | **11.1 %** | 19.46 € | stávame sa najlacnejší |
| Filament Anycubic TPU (čierny) 1 kg | 21.50 € | **21.00 €** | 11.6 % | **9.0 %** | 21.47 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Classic Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.49 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Eccentric Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.49 € | stávame sa najlacnejší |
| AnyCubic ABS-Like Resin Pro 2 (Black) | 14.50 € | **14.00 €** | 16.1 % | **12.1 %** | 14.49 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 68.50 € | **68.00 €** | 14.2 % | **13.4 %** | 68.49 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X2 s AI senzorom (čierny) | 68.50 € | **68.00 €** | 14.2 % | **13.4 %** | 68.49 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creallity (Silver) | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.49 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1346.90 € | **1346.50 €** | 7.4 % | **7.4 %** | 1346.85 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 131.90 € | **131.50 €** | 5.4 % | **5.1 %** | 131.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 82.90 € | **82.50 €** | 10.4 % | **9.8 %** | 82.74 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 195.90 € | **195.50 €** | 10.1 % | **9.9 %** | 195.75 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 108.90 € | **108.50 €** | 6.6 % | **6.2 %** | 108.79 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 240.90 € | **240.50 €** | 8.7 % | **8.5 %** | 240.79 € | stávame sa najlacnejší |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.90 € | **84.50 €** | 9.4 % | **8.8 %** | 84.80 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 212.90 € | **212.50 €** | 10.1 % | **9.9 %** | 212.80 € | stávame sa najlacnejší |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 74.90 € | **74.50 €** | 13.0 % | **12.4 %** | 74.88 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 89.90 € | **89.50 €** | 14.7 % | **14.2 %** | 89.89 € | stávame sa najlacnejší |
| Masážní gymnastický míč HMS YB03N 75 cm černý | 14.90 € | **14.50 €** | 8.5 % | **5.6 %** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 10.00 € | **9.60 €** | 38.7 % | **33.2 %** | 9.70 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 13.90 € | **13.50 €** | 39.9 % | **35.8 %** | 13.79 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 10.90 € | **10.50 €** | 31.3 % | **26.5 %** | 10.79 € | stávame sa najlacnejší |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 15.90 € | **15.50 €** | 10.6 % | **7.8 %** | 15.83 € | stávame sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT113 | 10.90 € | **10.50 €** | 10.4 % | **6.3 %** | 10.85 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.90 € | **10.50 €** | 26.2 % | **21.6 %** | 10.86 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.90 € | **10.50 €** | 19.3 % | **14.9 %** | 10.86 € | stávame sa najlacnejší |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.10 € | **4.70 €** | 35.9 % | **25.3 %** | 4.79 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 5.10 € | **4.70 €** | 46.0 % | **34.5 %** | 4.80 € | stávame sa najlacnejší |
| Krüger&Matz HL-CP03 bezdrátový adaptér CarPlay - And... | 21.90 € | **21.50 €** | 8.0 % | **6.0 %** | 21.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.90 € | **22.50 €** | 13.7 % | **11.7 %** | 22.59 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.90 € | **19.50 €** | 43.7 % | **40.8 %** | 19.70 € | stávame sa najlacnejší |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 29.90 € | **29.50 €** | 14.1 % | **12.5 %** | 29.70 € | stávame sa najlacnejší |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.90 € | **17.50 €** | 46.6 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 27.90 € | **27.50 €** | 8.1 % | **6.6 %** | 27.73 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan biely lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.75 € | stávame sa najlacnejší |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND32/PL | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND64/PL | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND16 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND32 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND8 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell pre Osmo Pocket ND64 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 41.90 € | **41.50 €** | 13.4 % | **12.3 %** | 41.75 € | stávame sa najlacnejší |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 17.90 € | **17.50 €** | 13.3 % | **10.7 %** | 17.75 € | stávame sa najlacnejší |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.90 € | **17.50 €** | 15.2 % | **12.6 %** | 17.77 € | stávame sa najlacnejší |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.90 € | **17.50 €** | 15.4 % | **12.8 %** | 17.77 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit 2AIR | 32.90 € | **32.50 €** | 13.8 % | **12.4 %** | 32.79 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan bílé dřevo 350ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.79 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 34.90 € | **34.50 €** | 7.6 % | **6.4 %** | 34.79 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI-T UT333S | 23.90 € | **23.50 €** | 11.6 % | **9.7 %** | 23.79 € | stávame sa najlacnejší |
| Evolveo Motion D1, ovladač s klávesnicí | 33.90 € | **33.50 €** | 7.7 % | **6.5 %** | 33.79 € | stávame sa najlacnejší |
| Niceboy ORYX X220 Iris | 20.90 € | **20.50 €** | 18.1 % | **15.8 %** | 20.80 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.90 € | **36.50 €** | 17.5 % | **16.2 %** | 36.82 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.90 € | **36.50 €** | 17.8 % | **16.6 %** | 36.82 € | stávame sa najlacnejší |
| Bezdrôtové napájadlo pre domáce zvieratá Rojeco 2,5 L | 31.90 € | **31.50 €** | 12.7 % | **11.3 %** | 31.83 € | stávame sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 35.90 € | **35.50 €** | 7.1 % | **6.0 %** | 35.86 € | stávame sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 18.90 € | **18.50 €** | 9.6 % | **7.3 %** | 18.88 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.90 € | **28.50 €** | 39.1 % | **37.2 %** | 28.89 € | stávame sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-9   9 kg (150x20... | 31.90 € | **31.50 €** | 6.3 % | **5.0 %** | 31.89 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, šedá s rukoväťou | 18.90 € | **18.50 €** | 17.6 % | **15.1 %** | 18.89 € | stávame sa najlacnejší |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 18.90 € | **18.50 €** | 20.0 % | **17.5 %** | 18.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40T | 28.90 € | **28.50 €** | 12.4 % | **10.9 %** | 28.89 € | stávame sa najlacnejší |
| Filters ND8/16/32 Freewell for DJI Neo | 17.90 € | **17.50 €** | 19.6 % | **16.9 %** | 17.89 € | stávame sa najlacnejší |
| Intelligent self-cleaning cat litterbox UBPet C20 | 277.90 € | **277.50 €** | 12.2 % | **12.0 %** | 277.75 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT315A | 308.90 € | **308.50 €** | 15.0 % | **14.9 %** | 308.79 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.90 € | **6.60 €** | 38.5 % | **32.5 %** | 6.70 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 3.00 € | **2.70 €** | 46.0 % | **31.4 %** | 2.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.90 € | **8.70 €** | 11.5 % | **9.0 %** | 8.80 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.40 € | **8.20 €** | 43.8 % | **40.4 %** | 8.30 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.20 € | **5.00 €** | 15.5 % | **11.1 %** | 5.09 € | stávame sa najlacnejší |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 7.00 € | **6.80 €** | 44.4 % | **40.3 %** | 6.90 € | stávame sa najlacnejší |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 5.20 € | **5.00 €** | 13.0 % | **8.7 %** | 5.10 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 6.70 € | **6.50 €** | 30.6 % | **26.7 %** | 6.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 8.00 € | **7.80 €** | 36.9 % | **33.5 %** | 7.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.30 € | **5.10 €** | 21.0 % | **16.5 %** | 5.20 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.10 €** | 40.9 % | **19.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.30 € | **3.10 €** | 36.2 % | **27.9 %** | 3.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.90 € | **3.70 €** | 17.4 % | **11.4 %** | 3.80 € | stávame sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 8.20 € | **8.00 €** | 40.1 % | **36.6 %** | 8.09 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.10 € | **7.90 €** | 11.1 % | **8.3 %** | 8.00 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 9.00 € | **8.80 €** | 42.1 % | **38.9 %** | 8.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.60 € | **7.40 €** | 24.8 % | **21.5 %** | 7.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.20 € | **9.00 €** | 31.5 % | **28.6 %** | 9.10 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 791.00 € | **790.90 €** | 13.8 % | **13.8 %** | 790.99 € | stávame sa najlacnejší |
| 3D skener Revopoint POP 4 Premium | 931.00 € | **930.90 €** | 14.9 % | **14.9 %** | 930.99 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA100 sada pre výmenu vy... | 19.00 € | **18.90 €** | 5.6 % | **5.0 %** | 18.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.90 €** | 16.5 % | **15.9 %** | 19.95 € | stávame sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 38.00 € | **37.90 €** | 32.0 % | **31.7 %** | 37.95 € | stávame sa najlacnejší |
| Maxlife MXBH-01 černé | 19.00 € | **18.90 €** | 10.4 % | **9.8 %** | 18.95 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 22.00 € | **21.90 €** | 25.3 % | **24.8 %** | 21.99 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.90 €** | 8.2 % | **7.9 %** | 40.99 € | stávame sa najlacnejší |
| Cycplus AS2 mini electric pump | 42.00 € | **41.90 €** | 7.2 % | **7.0 %** | 41.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.70 € | **5.60 €** | 37.1 % | **34.7 %** | 5.67 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.70 € | **7.60 €** | 44.2 % | **42.4 %** | 7.67 € | stávame sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 6.90 € | **6.80 €** | 35.8 % | **33.9 %** | 6.89 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.20 €** | 40.9 % | **30.1 %** | 1.25 € | stávame sa najlacnejší |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.90 € | **2.80 €** | 23.4 % | **19.2 %** | 2.85 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.40 €** | 34.2 % | **30.4 %** | 3.48 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.70 € | **2.60 €** | 37.2 % | **32.1 %** | 2.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **3.50 €** | 15.7 % | **12.5 %** | 3.59 € | stávame sa najlacnejší |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **1.90 €** | 23.2 % | **17.0 %** | 1.99 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.20 € | **1.10 €** | 39.4 % | **27.8 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.90 € | **1.80 €** | 45.7 % | **38.1 %** | 1.89 € | stávame sa najlacnejší |
| Stojan na slúchadlá ONIKUMA ST-2 čierny | 13.00 € | **12.90 €** | 7.6 % | **6.8 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **7.00 €** | 6.9 % | **5.4 %** | 7.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 10.00 € | **9.90 €** | 45.7 % | **44.2 %** | 9.95 € | stávame sa najlacnejší |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 12.00 € | **11.90 €** | 47.4 % | **46.1 %** | 11.96 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.80 € | **2.70 €** | 35.5 % | **30.7 %** | 2.77 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.30 € | **5.20 €** | 37.2 % | **34.6 %** | 5.28 € | stávame sa najlacnejší |
| Solight digitálny merač spotreby el. energie, veľký ... | 10.00 € | **9.90 €** | 25.1 % | **23.8 %** | 9.99 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.40 €** | 28.3 % | **26.3 %** | 6.49 € | stávame sa najlacnejší |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 226.00 € | **225.90 €** | 5.1 % | **5.1 %** | 225.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |

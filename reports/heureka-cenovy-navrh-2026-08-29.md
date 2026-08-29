# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-29

Vstup: `premiumstoresk_20260829_1239.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **5640**
- Návrh **zvýšiť** cenu: **773** produktov
- Návrh **znížiť** cenu: **1182** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **3685** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **282**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (773)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 898.00 € | **944.00 €** | 9.4 % | **15.0 %** | 944.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projektor JMGO N1S SE | 667.50 € | **702.50 €** | 9.3 % | **15.0 %** | 702.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Skywave X50 Soundbar | 389.50 € | **422.90 €** | 6.0 % | **15.1 %** | 422.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nano projektor JMGO N1S | 470.50 € | **496.50 €** | 9.0 % | **15.0 %** | 496.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický skúter NAVEE GT5 Pro | 480.00 € | **506.00 €** | 9.0 % | **15.0 %** | 506.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 660.00 € | **685.90 €** | 10.7 % | **15.0 %** | 660.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termovízna kamera THERMAL MASTER T2Max | 267.50 € | **292.90 €** | 5.0 % | **15.0 %** | 292.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Skywave X70 Soundbar | 576.00 € | **599.00 €** | 8.1 % | **12.4 %** | 599.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projektor JMGO PicoPlay+ | 391.00 € | **413.00 €** | 8.8 % | **14.9 %** | 413.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projektor Ultima Poseidon E40 | 381.00 € | **402.90 €** | 8.8 % | **15.0 %** | 402.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Skywave X40 Soundbar | 329.50 € | **350.00 €** | 6.9 % | **13.6 %** | 350.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tablet HOTWAV TAB R9 Plus (čierny) | 275.50 € | **295.50 €** | 7.3 % | **15.1 %** | 295.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projektor BlitzWolf BW-V11 | 333.00 € | **352.50 €** | 8.6 % | **15.0 %** | 352.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 329.50 € | **348.90 €** | 8.6 % | **15.0 %** | 348.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický skúter NAVEE V45i | 312.00 € | **330.50 €** | 8.6 % | **15.0 %** | 330.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Poseidon D80 BOOM Soundbar | 237.50 € | **255.50 €** | 6.2 % | **14.2 %** | 255.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 310.00 € | **328.00 €** | 6.7 % | **12.9 %** | 328.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projektor Ultima Nova C40 | 284.00 € | **301.00 €** | 8.5 % | **15.0 %** | 301.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tablet HOTWAV TAB R9 Plus (červený) | 275.50 € | **292.50 €** | 8.3 % | **15.0 %** | 292.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje DE69CS | 497.50 € | **514.50 €** | 6.4 % | **10.0 %** | 514.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 320.00 € | **336.50 €** | 8.5 % | **14.1 %** | 336.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás MERACH MR-T25B2 | 356.50 € | **372.90 €** | 10.0 % | **15.1 %** | 372.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| OBSBOT Tiny 3 MIC Combo | 453.00 € | **468.90 €** | 9.0 % | **12.8 %** | 468.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tablet HOTWAV TAB R9 Pro (červený) | 230.50 € | **245.50 €** | 8.0 % | **15.1 %** | 245.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 561.00 € | **574.90 €** | 7.4 % | **10.0 %** | 561.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň ELEGOO Neptune 4 Max | 348.90 € | **362.50 €** | 15.0 % | **19.5 %** | 362.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 420.50 € | **433.00 €** | 11.7 % | **15.0 %** | 433.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Grafický tablet Huion Slate 11 | 262.00 € | **274.50 €** | 9.8 % | **15.1 %** | 274.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1317.50 € | **1330.00 €** | 12.2 % | **13.3 %** | 1330.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UTRAI JS5 – štartér do auta s kompresorom | 87.00 € | **99.00 €** | 15.0 % | **30.8 %** | 99.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 229.00 € | **240.50 €** | 8.0 % | **13.5 %** | 229.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tablet HOTWAV TAB R10 Pro (čierny) | 217.00 € | **227.50 €** | 9.8 % | **15.1 %** | 227.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 217.00 € | **227.50 €** | 9.8 % | **15.1 %** | 227.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Grafický tablet Huion Kamvas Pro 13 GT133 | 210.00 € | **220.00 €** | 9.8 % | **15.0 %** | 220.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 207.50 € | **217.50 €** | 9.8 % | **15.1 %** | 217.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 207.50 € | **217.50 €** | 9.8 % | **15.1 %** | 217.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 396.00 € | **406.00 €** | 7.3 % | **10.0 %** | 406.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 290.00 € | **300.00 €** | 8.5 % | **12.2 %** | 300.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 290.00 € | **300.00 €** | 8.5 % | **12.2 %** | 300.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Combo-4In1 | 124.00 € | **133.50 €** | 7.5 % | **15.8 %** | 126.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 205.00 € | **214.50 €** | 9.9 % | **15.0 %** | 214.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko EnergySpin BM3WFU3721WBW | 323.50 € | **332.90 €** | 7.0 % | **10.1 %** | 332.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 110G | 320.90 € | **330.00 €** | 7.0 % | **10.0 %** | 330.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier S1000MKII 2.0 (hnedé) | 250.50 € | **259.50 €** | 6.5 % | **10.3 %** | 259.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 216.50 € | **225.00 €** | 8.0 % | **12.2 %** | 225.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 418.00 € | **426.00 €** | 12.8 % | **15.0 %** | 426.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Subwoofer Edifier Airpulse SW8 (čierny) | 330.50 € | **338.50 €** | 12.2 % | **15.0 %** | 338.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Chamber Line 40 | 242.00 € | **250.00 €** | 5.9 % | **9.5 %** | 250.11 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 318.00 € | **326.00 €** | 12.1 % | **14.9 %** | 318.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Grafický tablet Huion Kamvas 24 GS2401 | 557.00 € | **564.90 €** | 13.4 % | **15.0 %** | 564.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ninja FB151EUWH Frost Vault 47l | 225.00 € | **232.50 €** | 6.5 % | **10.1 %** | 232.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Päťzónový indukčný sporák IsEasy LI5-01 | 185.00 € | **192.50 €** | 10.6 % | **15.1 %** | 192.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 229.50 € | **236.50 €** | 8.0 % | **11.3 %** | 236.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 473.00 € | **480.00 €** | 10.0 % | **11.6 %** | 480.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Žehlicí prkno Classic S Basic | 28.90 € | **35.90 €** | 10.8 % | **37.7 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 1535 | 188.00 € | **194.90 €** | 6.2 % | **10.1 %** | 194.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blesk GODOX V1 mid TTL pre Nikon | 149.50 € | **156.00 €** | 15.1 % | **20.1 %** | 156.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 267.50 € | **274.00 €** | 6.5 % | **9.1 %** | 274.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 632.50 € | **638.50 €** | 6.7 % | **7.7 %** | 638.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Spájkovacia stanica FNIRSI DWS-200F s výkonom 200 W | 125.00 € | **130.90 €** | 9.8 % | **15.0 %** | 130.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA DI 6412 CB | 269.90 € | **275.00 €** | 6.2 % | **8.2 %** | 275.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CDG1S514ESH | 238.00 € | **243.00 €** | 7.7 % | **10.0 %** | 238.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blesk GODOX TT685II TTL pre Sony | 122.90 € | **127.90 €** | 15.0 % | **19.7 %** | 127.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL CHARGEES3 | 114.50 € | **119.50 €** | 10.4 % | **15.2 %** | 119.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 109A | 175.00 € | **180.00 €** | 5.9 % | **8.9 %** | 180.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovačka G21 Nefrit | 117.90 € | **122.90 €** | 10.0 % | **14.7 %** | 117.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 14.90 € | **19.90 €** | 7.6 % | **43.7 %** | 19.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blesk GODOX TT685II TTL pre Nikon | 123.00 € | **127.90 €** | 15.0 % | **19.6 %** | 127.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EWS6526WC | 307.00 € | **311.50 €** | 6.5 % | **8.1 %** | 311.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| UTRAI JS9 – multifunkčný štartér do auta | 64.00 € | **68.50 €** | 15.0 % | **23.1 %** | 68.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal BL87G831 | 121.00 € | **125.50 €** | 6.4 % | **10.3 %** | 125.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací elektrický bežecký pás DeerRun Z20 | 333.50 € | **338.00 €** | 6.8 % | **8.3 %** | 338.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický skúter NAVEE E25 Pro | 231.00 € | **235.50 €** | 12.7 % | **14.9 %** | 235.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Chamber Line 70 | 349.50 € | **354.00 €** | 6.9 % | **8.3 %** | 354.01 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 22280-56/RH | 57.50 € | **61.90 €** | 11.3 % | **19.8 %** | 61.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 370.50 € | **374.90 €** | 6.5 % | **7.7 %** | 374.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM diaľkovo ovládaná zásuvka | 56.50 € | **60.50 €** | 28.1 % | **37.2 %** | 56.54 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 16.50 € | **20.50 €** | 12.4 % | **39.6 %** | 16.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 259.90 € | **263.90 €** | 7.0 % | **8.6 %** | 263.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH98A9WO | 274.90 € | **278.90 €** | 6.3 % | **7.9 %** | 278.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WHT643E4XBG | 242.50 € | **246.50 €** | 6.3 % | **8.1 %** | 246.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Rotaro PowerVac 2v1 20V | 113.50 € | **117.50 €** | 5.3 % | **9.0 %** | 117.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rooma Espresso A6 bílá | 464.00 € | **468.00 €** | 6.0 % | **6.9 %** | 468.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux MCK CZ | 25.90 € | **29.90 €** | 26.8 % | **46.4 %** | 29.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 723590000 | 327.50 € | **331.50 €** | 6.5 % | **7.8 %** | 331.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G2014401 Zmrzlinovač | 174.50 € | **178.50 €** | 7.6 % | **10.0 %** | 178.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Braun IS5247.VI | 184.50 € | **188.50 €** | 7.8 % | **10.1 %** | 188.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT96425VD | 252.00 € | **256.00 €** | 6.1 % | **7.8 %** | 256.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE ECT601FM | 133.00 € | **137.00 €** | 6.1 % | **9.3 %** | 137.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 15.00 € | **19.00 €** | 5.3 % | **33.4 %** | 19.16 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 210A | 213.00 € | **216.90 €** | 6.0 % | **8.0 %** | 216.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Chamber Line 30 | 175.00 € | **178.90 €** | 7.6 % | **10.0 %** | 178.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 22dB | 17.00 € | **20.90 €** | 16.3 % | **43.0 %** | 20.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický skúter NAVEE GT5 Max | 566.00 € | **569.90 €** | 6.3 % | **7.0 %** | 569.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE WPNEI94A1SWIFI | 405.90 € | **409.50 €** | 6.1 % | **7.1 %** | 409.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Armodd Prime 3 GPS Black - 9148 | 88.90 € | **92.50 €** | 5.8 % | **10.1 %** | 92.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 4... | 27.00 € | **30.50 €** | 22.5 % | **38.4 %** | 27.07 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux LIB60420CK | 204.50 € | **208.00 €** | 8.2 % | **10.0 %** | 204.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Bellagio červený multikapslový | 114.50 € | **118.00 €** | 6.3 % | **9.5 %** | 118.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonar Flytec V080 s kapacitou 20 000 mAh pre loď na ... | 248.50 € | **251.90 €** | 13.5 % | **15.1 %** | 251.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GV663B65 | 502.90 € | **506.00 €** | 6.4 % | **7.0 %** | 503.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 47dB | 16.50 € | **19.50 €** | 18.6 % | **40.2 %** | 16.53 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E7K1-6BP | 66.50 € | **69.50 €** | 6.7 % | **11.5 %** | 69.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Sensazione černý | 330.90 € | **333.90 €** | 6.0 % | **6.9 %** | 333.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G2015706 Emilia 250 | 362.00 € | **365.00 €** | 6.1 % | **7.0 %** | 365.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RR8589CE | 397.00 € | **400.00 €** | 6.1 % | **6.9 %** | 400.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 16.00 € | **19.00 €** | 13.8 % | **35.1 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mobilný ovládač GameSir X5 Lite GN Bright Green | 25.50 € | **28.50 €** | 16.1 % | **29.7 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Lampa monitora BlitzWolf BW-CML6 | 55.50 € | **58.50 €** | 14.8 % | **21.0 %** | 58.58 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 19.90 € | **22.90 €** | 34.4 % | **54.6 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 29.00 € | **32.00 €** | 9.0 % | **20.2 %** | 29.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 37.00 € | **39.90 €** | 7.7 % | **16.1 %** | 37.23 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 27.00 € | **29.90 €** | 35.7 % | **50.2 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 26.90 € | **29.50 €** | 15.2 % | **26.3 %** | 29.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 22.90 € | **25.50 €** | 23.7 % | **37.8 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 14.90 € | **17.50 €** | 10.9 % | **30.3 %** | 16.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 14.90 € | **17.50 €** | 21.6 % | **42.8 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente G4 robotický vysavač | 112.90 € | **115.50 €** | 5.3 % | **7.7 %** | 115.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-G4 | 112.90 € | **115.50 €** | 5.3 % | **7.7 %** | 115.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka IP66, vodotesná a prachotesná | 15.00 € | **17.50 €** | 33.4 % | **55.7 %** | 15.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 25.00 € | **27.50 €** | 22.2 % | **34.4 %** | 25.24 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 43.00 € | **45.50 €** | 14.8 % | **21.5 %** | 45.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GS620C10W | 335.00 € | **337.50 €** | 6.3 % | **7.1 %** | 337.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 06A1 | 104.50 € | **107.00 €** | 7.2 % | **9.8 %** | 107.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G2013900 Artiko Výrobník ledu | 123.50 € | **126.00 €** | 6.7 % | **8.8 %** | 126.15 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 103RB | 209.50 € | **211.90 €** | 6.0 % | **7.2 %** | 211.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 14.50 € | **16.90 €** | 18.7 % | **38.4 %** | 14.54 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 44.50 € | **46.90 €** | 9.2 % | **15.1 %** | 44.64 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 22.50 € | **24.90 €** | 12.7 % | **24.7 %** | 22.68 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 329.90 € | **332.00 €** | 13.5 % | **14.3 %** | 332.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 21.90 € | **23.90 €** | 24.6 % | **36.0 %** | 21.93 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 32.00 € | **34.00 €** | 18.0 % | **25.4 %** | 32.04 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight ručná akumulátorová píla, 150mm | 41.50 € | **43.50 €** | 14.6 % | **20.1 %** | 41.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 10.50 € | **12.50 €** | 17.1 % | **39.4 %** | 12.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 486.90 € | **488.90 €** | 6.6 % | **7.0 %** | 488.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blesk GODOX TT685II TTL pre Olympus | 123.00 € | **125.00 €** | 15.0 % | **16.9 %** | 125.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 748.00 € | **750.00 €** | 10.0 % | **10.3 %** | 750.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled monokulární LEVENHUK Halo NVM20 Helmet s ... | 556.50 € | **558.50 €** | 7.3 % | **7.7 %** | 558.51 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 13.90 € | **15.90 €** | 20.3 % | **37.7 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Braun CG9043 | 213.00 € | **214.90 €** | 7.0 % | **8.0 %** | 214.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 12.00 € | **13.90 €** | 23.2 % | **42.7 %** | 13.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.00 € | **17.90 €** | 20.1 % | **34.4 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Black | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 18.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Blue | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 18.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Red | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 18.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C White | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 18.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka USB-C, 90W, PD fast charger | 13.90 € | **15.50 €** | 20.1 % | **33.9 %** | 15.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy PILOT S5 GPS + WIFI | 48.00 € | **49.50 €** | 7.5 % | **10.9 %** | 48.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy OFFICE M40 Vertical | 17.50 € | **19.00 €** | 7.7 % | **16.9 %** | 17.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 22.50 € | **24.00 €** | 32.4 % | **41.2 %** | 22.61 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 14.00 € | **15.50 €** | 16.4 % | **28.9 %** | 14.21 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 44.50 € | **46.00 €** | 9.0 % | **12.6 %** | 46.21 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 44.50 € | **46.00 €** | 9.0 % | **12.6 %** | 46.21 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia IP kamera s LED světlom | 31.50 € | **33.00 €** | 32.3 % | **38.6 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 9.60 € | **11.00 €** | 19.3 % | **36.7 %** | 9.61 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 6.00 € | **7.40 €** | 11.6 % | **37.7 %** | 7.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 10m, USB A+C, 2 ... | 19.50 € | **20.90 €** | 29.9 % | **39.3 %** | 20.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 22.50 € | **23.90 €** | 11.2 % | **18.1 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool FFB 8469 BV EE | 343.50 € | **344.90 €** | 6.7 % | **7.1 %** | 344.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 62.90 € | **64.00 €** | 10.6 % | **12.6 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 16.50 € | **17.50 €** | 36.3 % | **44.6 %** | 16.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 22.00 € | **23.00 €** | 37.2 % | **43.4 %** | 22.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO 221 SV | 120.00 € | **121.00 €** | 9.0 % | **9.9 %** | 121.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO228SV | 120.00 € | **121.00 €** | 8.7 % | **9.6 %** | 121.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Rotaro PowerVac 2v1 16V | 113.50 € | **114.50 €** | 9.4 % | **10.4 %** | 114.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blesk GODOX TT350 TTL pre Fujifilm | 80.50 € | **81.50 €** | 14.9 % | **16.3 %** | 81.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Grafický tablet Huion H1161 | 73.00 € | **74.00 €** | 13.2 % | **14.8 %** | 74.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA MV 647 AW | 354.00 € | **355.00 €** | 6.3 % | **6.6 %** | 355.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO HII64500UFT | 362.50 € | **363.50 €** | 6.8 % | **7.1 %** | 363.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight FM transmitter s bluetooth pripojením do aut... | 14.00 € | **15.00 €** | 25.9 % | **34.9 %** | 15.15 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE SuChef | 83.00 € | **83.90 €** | 8.4 % | **9.6 %** | 83.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1018900 Pákový kávovar | 124.00 € | **124.90 €** | 8.0 % | **8.8 %** | 124.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight univerzálny zdroj pre netbooky a notebooky, ... | 13.00 € | **13.90 €** | 21.1 % | **29.4 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.00 € | **25.90 €** | 22.9 % | **27.3 %** | 25.03 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO8709P | 28.00 € | **28.90 €** | 5.2 % | **8.6 %** | 28.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.00 € | **36.90 €** | 14.6 % | **17.5 %** | 36.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.00 € | **36.90 €** | 15.0 % | **17.8 %** | 36.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO9215AV | 32.00 € | **32.90 €** | 7.7 % | **10.7 %** | 32.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO 9218 WK | 21.00 € | **21.90 €** | 5.8 % | **10.4 %** | 21.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1004500 | 51.00 € | **51.90 €** | 10.1 % | **12.0 %** | 51.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZHM2550 | 39.00 € | **39.90 €** | 26.0 % | **28.9 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GS  G7-SE Wired Controller XBOx &PC Or | 39.00 € | **39.90 €** | 10.2 % | **12.8 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight domáca kamera s nočným svetlom a hodinami | 34.00 € | **34.90 €** | 34.7 % | **38.3 %** | 34.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.10 € | **8.90 €** | 6.6 % | **17.1 %** | 8.11 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 4.60 € | **5.40 €** | 23.8 % | **45.4 %** | 5.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.00 € | **4.80 €** | 11.4 % | **33.6 %** | 4.01 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovový vianočný stromček, 2x AA | 4.10 € | **4.80 €** | 23.9 % | **45.1 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight držiak DVB-T a internetové antény na stenu, ... | 7.90 € | **8.60 €** | 27.7 % | **39.0 %** | 8.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 57.90 € | **58.50 €** | 5.5 % | **6.6 %** | 58.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO436BL | 35.90 € | **36.50 €** | 9.0 % | **10.9 %** | 36.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO7059S | 35.90 € | **36.50 €** | 8.6 % | **10.4 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.00 € | **4.60 €** | 33.8 % | **53.9 %** | 4.01 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.00 € | **9.60 €** | 36.3 % | **45.3 %** | 9.04 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9252I | 251.90 € | **252.50 €** | 7.8 % | **8.1 %** | 252.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO42327PC | 101.90 € | **102.50 €** | 9.3 % | **10.0 %** | 102.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 19.50 € | **20.00 €** | 13.6 % | **16.5 %** | 19.53 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.00 € | **61.50 €** | 18.9 % | **19.8 %** | 61.03 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 14.00 € | **14.50 €** | 33.9 % | **38.7 %** | 14.04 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.00 € | **23.50 €** | 14.0 % | **16.5 %** | 23.07 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lokátor Premium, Find My kompatibilný | 13.00 € | **13.50 €** | 14.8 % | **19.2 %** | 13.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 23.00 € | **23.50 €** | 34.3 % | **37.3 %** | 23.22 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 12.00 € | **12.50 €** | 12.3 % | **16.9 %** | 12.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 12.00 € | **12.50 €** | 22.0 % | **27.0 %** | 12.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 14.00 € | **14.50 €** | 43.7 % | **48.8 %** | 14.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajší stĺpik Ragusa 500, 7W, 450lm, 3... | 23.00 € | **23.50 €** | 8.8 % | **11.2 %** | 23.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 155.00 € | **155.50 €** | 14.0 % | **14.4 %** | 155.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 137 | 33.00 € | **33.50 €** | 9.9 % | **11.5 %** | 33.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.00 € | **19.50 €** | 5.3 % | **8.1 %** | 19.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 24G | 181.00 € | **181.50 €** | 8.4 % | **8.7 %** | 181.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.00 € | **10.50 €** | 41.4 % | **48.5 %** | 10.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nepriamy germicidný UV žiarič | 62.00 € | **62.50 €** | 38.2 % | **39.3 %** | 62.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.00 € | **30.50 €** | 36.9 % | **39.2 %** | 30.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight drevený snehuliak, 4x LED, 2x AA | 13.00 € | **13.50 €** | 41.9 % | **47.3 %** | 13.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 21.00 € | **21.50 €** | 43.1 % | **46.5 %** | 21.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 12.00 € | **12.50 €** | 41.8 % | **47.7 %** | 12.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 12.00 € | **12.50 €** | 41.8 % | **47.7 %** | 12.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.00 € | **11.50 €** | 7.2 % | **12.1 %** | 11.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 13.00 € | **13.50 €** | 41.9 % | **47.3 %** | 13.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 13.00 € | **13.50 €** | 41.9 % | **47.3 %** | 13.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ručný multimeter do auta UNI-T UT107 | 29.00 € | **29.50 €** | 7.8 % | **9.6 %** | 29.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vibračný tester Uni-T UT315A | 308.00 € | **308.50 €** | 14.7 % | **14.9 %** | 308.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m kone... | 48.00 € | **48.50 €** | 6.4 % | **7.5 %** | 48.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač teploty a vlhkosti UNI-T UT333S | 23.00 € | **23.50 €** | 9.6 % | **12.0 %** | 23.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pohybové čidlo ORBIS ISIMAT | 22.00 € | **22.50 €** | 12.1 % | **14.7 %** | 22.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrátový detektor pohybu ORNO OR-MA-701 | 10.00 € | **10.50 €** | 7.8 % | **13.2 %** | 10.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 69.00 € | **69.50 €** | 9.3 % | **10.1 %** | 69.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vestavná bezdrátová indukční nabíječka ORNO OR-AE-13... | 20.00 € | **20.50 €** | 12.4 % | **15.3 %** | 20.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.00 € | **16.50 €** | 8.3 % | **11.7 %** | 16.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 90504 French press 800ml | 13.00 € | **13.50 €** | 10.0 % | **14.2 %** | 13.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Easy Chop | 33.00 € | **33.50 €** | 8.5 % | **10.2 %** | 33.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Adria B-4780 bílá | 25.00 € | **25.50 €** | 5.0 % | **7.1 %** | 25.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Sky B-4610 zlatý | 65.00 € | **65.50 €** | 9.1 % | **9.9 %** | 65.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čistička vzduchu TEESA PURE LIFE P500 | 73.00 € | **73.50 €** | 9.5 % | **10.3 %** | 73.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Daily PV1100C | 23.00 € | **23.50 €** | 7.9 % | **10.2 %** | 23.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Adaptér KRUGER & MATZ KM0390 (HUB) USB C na port HDM... | 27.00 € | **27.50 €** | 12.4 % | **14.5 %** | 27.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 48.00 € | **48.50 €** | 8.7 % | **9.9 %** | 48.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 18.00 € | **18.50 €** | 5.7 % | **8.7 %** | 18.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 65.00 € | **65.50 €** | 14.1 % | **15.0 %** | 65.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 21.00 € | **21.50 €** | 9.7 % | **12.3 %** | 21.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada BOYA BY-WFM12 bezdrátový klopový mikrofon, vysí... | 33.00 € | **33.50 €** | 6.9 % | **8.5 %** | 33.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 41.00 € | **41.50 €** | 12.0 % | **13.3 %** | 41.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.00 € | **85.50 €** | 14.2 % | **14.9 %** | 85.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory k PC 2.1 Rebel CS-50 | 12.00 € | **12.50 €** | 11.4 % | **16.0 %** | 12.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Octagon SFX6018 S2 IP HD | 75.00 € | **75.50 €** | 7.7 % | **8.4 %** | 75.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 28.00 € | **28.50 €** | 13.7 % | **15.7 %** | 28.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 35.00 € | **35.50 €** | 13.1 % | **14.7 %** | 35.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filament Anycubic ASA (sivý) 1 kg | 18.00 € | **18.50 €** | 12.2 % | **15.3 %** | 18.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filament Anycubic ASA (biely) 1 kg | 18.00 € | **18.50 €** | 12.2 % | **15.3 %** | 18.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 25.00 € | **25.50 €** | 7.6 % | **9.7 %** | 25.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 25.00 € | **25.50 €** | 12.7 % | **14.9 %** | 25.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Albi sonický Deluxe - Kvietky | 25.00 € | **25.50 €** | 8.3 % | **10.5 %** | 25.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal GC517DE0 | 137.00 € | **137.50 €** | 8.8 % | **9.2 %** | 137.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Comfort Graphite Black | 151.00 € | **151.50 €** | 12.3 % | **12.7 %** | 151.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 410090000 | 330.00 € | **330.50 €** | 6.9 % | **7.0 %** | 330.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.00 € | **110.50 €** | 9.7 % | **10.2 %** | 110.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RO6164EA | 142.00 € | **142.50 €** | 8.4 % | **8.8 %** | 142.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring Black velikost 8 | 40.00 € | **40.50 €** | 7.2 % | **8.6 %** | 40.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring Black velikost 9 | 40.00 € | **40.50 €** | 7.2 % | **8.6 %** | 40.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring White velikost 8 | 40.00 € | **40.50 €** | 7.2 % | **8.6 %** | 40.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring White velikost 9 | 40.00 € | **40.50 €** | 7.2 % | **8.6 %** | 40.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BDIN38646D | 494.00 € | **494.50 €** | 7.0 % | **7.1 %** | 494.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CIP 3E7L0W Rapido | 293.00 € | **293.50 €** | 8.0 % | **8.1 %** | 293.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EIV84550 | 518.00 € | **518.50 €** | 7.0 % | **7.1 %** | 518.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 71.00 € | **71.50 €** | 13.1 % | **13.9 %** | 71.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit LinoLift 600 Quick Start 85282 | 75.00 € | **75.50 €** | 8.7 % | **9.4 %** | 75.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.00 € | **11.50 €** | 34.3 % | **40.4 %** | 11.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight koaxiálny kábel CC120, voľne, 100m | 25.00 € | **25.50 €** | 37.2 % | **40.0 %** | 25.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko EnergySpin B7WFU68416WBES | 415.00 € | **415.50 €** | 7.6 % | **7.7 %** | 415.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 40.00 € | **40.50 €** | 35.1 % | **36.7 %** | 40.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor ZEUSLAP P16KT s 16-palcovým dotykov... | 204.00 € | **204.50 €** | 13.8 % | **14.1 %** | 204.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 32.00 € | **32.50 €** | 31.2 % | **33.2 %** | 32.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.00 € | **26.50 €** | 34.4 % | **37.0 %** | 26.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termovízna kamera Mileseey TR256C s Wi-Fi | 501.00 € | **501.50 €** | 11.5 % | **11.6 %** | 501.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Anycubic Kobra 3 Max | 425.00 € | **425.50 €** | 14.1 % | **14.3 %** | 425.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA NS-AW592 WHITE 1 karton | 248.00 € | **248.50 €** | 9.1 % | **9.3 %** | 248.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.00 € | **18.50 €** | 35.3 % | **39.0 %** | 18.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Venta Organic fragrance Peppermint | 16.00 € | **16.50 €** | 7.7 % | **11.0 %** | 16.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 61521kuchyňská váha Page | 22.00 € | **22.50 €** | 8.3 % | **10.7 %** | 22.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Eddie B-4821 šedý | 29.00 € | **29.50 €** | 8.2 % | **10.1 %** | 29.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.00 € | **60.50 €** | 9.4 % | **10.4 %** | 60.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 24992-70 | 39.00 € | **39.50 €** | 5.3 % | **6.7 %** | 39.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 110.00 € | **110.50 €** | 13.0 % | **13.6 %** | 110.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.00 € | **24.50 €** | 12.9 % | **15.2 %** | 24.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Crema 1 kg zrno | 20.00 € | **20.50 €** | 6.0 % | **8.7 %** | 20.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 27.00 € | **27.50 €** | 31.3 % | **33.7 %** | 27.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 12.00 € | **12.50 €** | 38.8 % | **44.6 %** | 12.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 71.00 € | **71.50 €** | 38.4 % | **39.3 %** | 71.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Icequeen-Wh | 19.00 € | **19.50 €** | 5.2 % | **8.0 %** | 19.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 158.00 € | **158.50 €** | 14.1 % | **14.5 %** | 158.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 615W Precise | 56.00 € | **56.50 €** | 7.3 % | **8.2 %** | 56.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.00 € | **17.50 €** | 9.6 % | **12.8 %** | 17.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.00 € | **17.50 €** | 9.4 % | **12.6 %** | 17.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný spínač WiFi + RF 433 Sonoff RF R2 (NOVI... | 10.00 € | **10.50 €** | 8.5 % | **14.0 %** | 10.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 19.00 € | **19.50 €** | 6.2 % | **9.0 %** | 19.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 22.00 € | **22.50 €** | 10.3 % | **12.8 %** | 22.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 341.00 € | **341.50 €** | 6.2 % | **6.4 %** | 341.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitální piano Kruger&Matz KMDP-105-WH bílá barva | 341.00 € | **341.50 €** | 6.2 % | **6.4 %** | 341.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 486.00 € | **486.50 €** | 6.0 % | **6.1 %** | 486.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Sous Vide SV06 | 132.00 € | **132.50 €** | 8.3 % | **8.8 %** | 132.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT76325VW | 166.00 € | **166.50 €** | 8.4 % | **8.7 %** | 166.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT86325VI | 199.00 € | **199.50 €** | 7.5 % | **7.8 %** | 199.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.00 € | **28.50 €** | 19.6 % | **21.8 %** | 28.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 22.00 € | **22.50 €** | 28.9 % | **31.8 %** | 22.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELECTROLUX 300 EFC226R | 248.00 € | **248.50 €** | 7.9 % | **8.1 %** | 248.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO B5RCNA406HXB3 | 520.00 € | **520.50 €** | 6.9 % | **7.1 %** | 520.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko B5XRCNA366HXB | 508.00 € | **508.50 €** | 7.0 % | **7.1 %** | 508.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G10153 Horkovzdušná trouba | 169.00 € | **169.50 €** | 8.8 % | **9.1 %** | 169.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux LKR64022AW | 463.00 € | **463.50 €** | 6.9 % | **7.0 %** | 463.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA DI 6401 PSB | 178.00 € | **178.50 €** | 8.8 % | **9.1 %** | 178.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica TFB 128 TX | 286.00 € | **286.50 €** | 7.9 % | **8.0 %** | 286.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BBIR17300BCS | 347.00 € | **347.50 €** | 6.9 % | **7.1 %** | 347.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.00 € | **12.50 €** | 40.2 % | **46.0 %** | 12.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Klávesnica Onikuma G55 (čierna) (QWERTY) | 17.00 € | **17.50 €** | 11.7 % | **15.0 %** | 17.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rixon Soundplates | 42.00 € | **42.50 €** | 8.6 % | **9.9 %** | 42.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Graef S 10005 | 113.00 € | **113.50 €** | 9.9 % | **10.4 %** | 113.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EF167 | 14.00 € | **14.50 €** | 8.8 % | **12.7 %** | 14.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux ESKQ9 | 14.00 € | **14.50 €** | 8.8 % | **12.7 %** | 14.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 90502 French press Atria 800 ml | 11.00 € | **11.50 €** | 8.3 % | **13.2 %** | 11.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Status STA 176214 | 10.00 € | **10.50 €** | 8.0 % | **13.4 %** | 10.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell ND1000 Filter pre OSMO Action 6 | 16.00 € | **16.50 €** | 6.7 % | **10.0 %** | 16.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 18.00 € | **18.50 €** | 8.2 % | **11.2 %** | 18.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbanka Baseus Bipow 10000 mAh, 20 W (biela) | 18.00 € | **18.50 €** | 7.6 % | **10.6 %** | 18.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Schodík pred mačaciu toaletu Catlink Scooper (sivé) | 84.00 € | **84.50 €** | 13.5 % | **14.2 %** | 84.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| San Marco Pur Arabica Premium 1 kg zrno | 22.00 € | **22.50 €** | 6.1 % | **8.5 %** | 22.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 24.00 € | **24.50 €** | 42.4 % | **45.4 %** | 24.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 24.00 € | **24.50 €** | 42.4 % | **45.4 %** | 24.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 43.00 € | **43.50 €** | 9.1 % | **10.4 %** | 43.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočné záves, cencúle, 360 LED, 9m x 0... | 24.00 € | **24.50 €** | 42.4 % | **45.4 %** | 24.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko B3BCNA324HS | 626.00 € | **626.50 €** | 9.5 % | **9.6 %** | 626.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 13.00 € | **13.50 €** | 32.1 % | **37.2 %** | 13.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 22.00 € | **22.50 €** | 16.8 % | **19.5 %** | 22.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.00 € | **36.50 €** | 8.7 % | **10.2 %** | 36.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver FVB015X | 18.00 € | **18.50 €** | 7.3 % | **10.3 %** | 18.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice TechniSat IMETEO 400 | 32.00 € | **32.50 €** | 14.1 % | **15.8 %** | 32.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| GameSir G7 HE wired controller (white) | 43.00 € | **43.50 €** | 12.1 % | **13.4 %** | 43.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.00 € | **26.50 €** | 40.0 % | **42.7 %** | 26.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superfire BM01 4-in-1 bicycle light | 19.00 € | **19.50 €** | 11.1 % | **14.1 %** | 19.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E200SM | 16.50 € | **17.00 €** | 12.0 % | **15.4 %** | 16.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 6 zásuviek, 3m, 3 x 1mm2,... | 16.00 € | **16.50 €** | 43.7 % | **48.2 %** | 16.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filament Anycubic TPU (čierny) 1 kg | 21.00 € | **21.50 €** | 9.0 % | **11.6 %** | 21.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.00 € | **19.50 €** | 34.8 % | **38.3 %** | 19.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.00 € | **16.50 €** | 28.2 % | **32.2 %** | 16.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stropné osvetlenie prachotesné, G13, pre 2x ... | 21.00 € | **21.50 €** | 35.0 % | **38.2 %** | 21.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.00 € | **11.50 €** | 35.1 % | **41.2 %** | 11.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multimeter Uni-T UT256 | 26.00 € | **26.50 €** | 6.8 % | **8.8 %** | 26.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| MEROSS MA151-UN Inteligentný Wi-Fi detektor dymu | 28.00 € | **28.50 €** | 10.7 % | **12.6 %** | 28.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.00 € | **16.50 €** | 31.3 % | **35.4 %** | 16.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.00 € | **10.50 €** | 26.6 % | **33.0 %** | 10.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rotačná kefa pre Dyson V8, V10, V12, V15 | 26.00 € | **26.50 €** | 30.0 % | **32.5 %** | 26.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight spodný kĺbový nadstavec pre Dyson V7, V8, V1... | 13.00 € | **13.50 €** | 28.3 % | **33.2 %** | 13.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.10 € | **4.60 €** | 19.0 % | **33.6 %** | 4.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.00 € | **23.50 €** | 6.4 % | **8.7 %** | 23.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 59.00 € | **59.50 €** | 9.2 % | **10.1 %** | 59.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| CR-Silk PLA Filament Creallity (Silver) | 17.00 € | **17.50 €** | 11.5 % | **14.7 %** | 17.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny bezkontaktný alkohol tester, F... | 57.00 € | **57.50 €** | 27.3 % | **28.4 %** | 57.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.00 € | **31.50 €** | 18.8 % | **20.7 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 13.00 € | **13.50 €** | 28.4 % | **33.4 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.00 € | **16.50 €** | 31.7 % | **35.8 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor úniku horľavých plynov. Polovodičov... | 13.50 € | **14.00 €** | 31.6 % | **36.5 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 27.00 € | **27.50 €** | 13.7 % | **15.8 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EFS 1 W | 16.00 € | **16.50 €** | 8.6 % | **12.0 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO465FR | 65.50 € | **66.00 €** | 9.0 % | **9.8 %** | 66.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZHM2459S | 39.00 € | **39.50 €** | 13.0 % | **14.4 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT65421VC | 127.00 € | **127.50 €** | 8.2 % | **8.6 %** | 127.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 88.00 € | **88.50 €** | 13.8 % | **14.4 %** | 88.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 21.00 € | **21.50 €** | 34.2 % | **37.4 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless charger 3in1 BW-IW30 Blitzwolf | 29.00 € | **29.50 €** | 15.0 % | **17.0 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Grip Red | 78.50 € | **79.00 €** | 10.0 % | **10.7 %** | 79.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Grip White | 78.50 € | **79.00 €** | 10.0 % | **10.7 %** | 79.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 229.00 € | **229.50 €** | 7.8 % | **8.0 %** | 229.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 15.00 € | **15.50 €** | 30.0 % | **34.3 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 42.00 € | **42.50 €** | 23.6 % | **25.1 %** | 42.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier R1100 2.0 (čierne) | 74.00 € | **74.50 €** | 8.4 % | **9.1 %** | 74.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GODOX SB-USW80120 Softbox s dáždnikom | 61.00 € | **61.50 €** | 6.0 % | **6.9 %** | 61.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| PS5 Laysara: Summit Kingdom Collector's | 64.00 € | **64.50 €** | 8.8 % | **9.6 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 13.5 % | **14.4 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka NILS Extreme HM0107 bílo-oranžová | 58.00 € | **58.50 €** | 9.4 % | **10.3 %** | 58.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| UV svietidlo Superfire A5, 365NM | 13.00 € | **13.50 €** | 7.4 % | **11.5 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje MO20A3WH | 73.00 € | **73.50 €** | 9.9 % | **10.6 %** | 73.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje W11NHPI84AS | 285.00 € | **285.50 €** | 7.9 % | **8.1 %** | 285.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELECTROLUX 300 CIR60430CB | 373.00 € | **373.50 €** | 7.0 % | **7.1 %** | 373.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 74.00 € | **74.50 €** | 12.8 % | **13.6 %** | 74.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Concept ETV8360bcN | 524.00 € | **524.50 €** | 6.9 % | **7.0 %** | 524.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 35.00 € | **35.50 €** | 11.9 % | **13.5 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 295.00 € | **295.50 €** | 7.5 % | **7.7 %** | 295.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO 264 AP | 58.00 € | **58.50 €** | 8.6 % | **9.5 %** | 58.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.50 € | **15.00 €** | 33.7 % | **38.3 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 12.50 € | **13.00 €** | 26.1 % | **31.1 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1346.50 € | **1346.90 €** | 7.4 % | **7.4 %** | 1346.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 8501A | 150.50 € | **150.90 €** | 5.5 % | **5.8 %** | 150.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Výrobník ledu TEESA EASY ICE TSA5009 | 74.50 € | **74.90 €** | 8.2 % | **8.8 %** | 74.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 195.50 € | **195.90 €** | 9.9 % | **10.1 %** | 195.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete Pizzeria 927/01, černá | 205.50 € | **205.90 €** | 8.0 % | **8.2 %** | 205.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson MIC201IBT | 113.50 € | **113.90 €** | 11.6 % | **12.0 %** | 113.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 750 | 110.50 € | **110.90 €** | 5.8 % | **6.2 %** | 110.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 68.50 € | **68.90 €** | 9.4 % | **10.0 %** | 68.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 8401SE | 124.50 € | **124.90 €** | 7.1 % | **7.4 %** | 124.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal FW5558E0 | 177.50 € | **177.90 €** | 8.6 % | **8.9 %** | 177.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer kuchyňský robot ZKR2010 | 175.50 € | **175.90 €** | 8.4 % | **8.7 %** | 175.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 212.50 € | **212.90 €** | 9.9 % | **10.1 %** | 212.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Girmi FM2100 Mikrovlnná trouba s grilem | 108.50 € | **108.90 €** | 9.7 % | **10.1 %** | 108.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 96.50 € | **96.90 €** | 40.7 % | **41.3 %** | 96.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ozvučovací systém KRUGER MATZ KM1718 | 206.50 € | **206.90 €** | 12.7 % | **12.9 %** | 206.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal INGENIO Expertise sada 3 ks | 64.50 € | **64.90 €** | 7.6 % | **8.3 %** | 64.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 84.50 € | **84.90 €** | 13.2 % | **13.7 %** | 84.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 1535SS | 206.50 € | **206.90 €** | 8.3 % | **8.5 %** | 206.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 74.50 € | **74.90 €** | 12.4 % | **13.0 %** | 74.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 20 | 233.50 € | **233.90 €** | 9.7 % | **9.9 %** | 233.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT161E | 108.50 € | **108.90 €** | 6.1 % | **6.5 %** | 108.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 76.50 € | **76.90 €** | 38.3 % | **39.1 %** | 76.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 88.50 € | **88.90 €** | 12.9 % | **13.4 %** | 88.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3ferrari G1018100 Horkovzdušná fritéza | 171.50 € | **171.90 €** | 6.7 % | **7.0 %** | 171.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer horkovzdušná fritéza ZAF9230 | 172.50 € | **172.90 €** | 8.5 % | **8.8 %** | 172.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 0028 98050 | 64.50 € | **64.90 €** | 5.3 % | **6.0 %** | 64.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO344DH | 147.50 € | **147.90 €** | 8.7 % | **9.0 %** | 147.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **69.90 €** | 27.8 % | **28.5 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **69.90 €** | 27.8 % | **28.5 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 69.50 € | **69.90 €** | 8.8 % | **9.4 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 151.50 € | **151.90 €** | 9.9 % | **10.2 %** | 151.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ozvučovací systém KRUGER MATZ KM1715, 2x bezdrátový ... | 195.50 € | **195.90 €** | 9.4 % | **9.7 %** | 195.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 65.50 € | **65.90 €** | 9.3 % | **10.0 %** | 65.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 135.50 € | **135.90 €** | 6.4 % | **6.7 %** | 135.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 USB-C Mini | 192.50 € | **192.90 €** | 12.5 % | **12.7 %** | 192.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 91 | 189.50 € | **189.90 €** | 6.2 % | **6.4 %** | 189.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CHW6LBX/4U2 IDEA | 79.50 € | **79.90 €** | 6.4 % | **7.0 %** | 79.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, týždeň, 1 režim | 4.00 € | **4.40 €** | 23.7 % | **36.0 %** | 4.01 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.50 € | **10.90 €** | 35.3 % | **40.4 %** | 10.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.50 € | **12.90 €** | 42.7 % | **47.3 %** | 12.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.4 % | **14.2 %** | 11.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 12.50 € | **12.90 €** | 30.3 % | **34.5 %** | 12.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Ethiopia Moka Sidamo 500 g zrno | 11.50 € | **11.90 €** | 5.7 % | **9.4 %** | 11.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 10.50 € | **10.90 €** | 7.2 % | **11.3 %** | 10.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 14.50 € | **14.90 €** | 42.4 % | **46.3 %** | 14.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.50 € | **14.90 €** | 45.2 % | **49.2 %** | 14.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 713240002 | 11.50 € | **11.90 €** | 9.5 % | **13.3 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cabletech UCH0023A1 | 11.50 € | **11.90 €** | 7.5 % | **11.2 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok LNB MC M4-S01 UHD | 11.50 € | **11.90 €** | 7.0 % | **10.7 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 12.50 € | **12.90 €** | 35.3 % | **39.7 %** | 12.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.50 € | **10.90 €** | 33.0 % | **38.0 %** | 10.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vibrating ring Satisfyer Rocket Ring (dark blue) | 12.50 € | **12.90 €** | 15.0 % | **18.6 %** | 12.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 15.50 € | **15.90 €** | 7.8 % | **10.6 %** | 15.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| San Marco INTENSO 500 g | 11.50 € | **11.90 €** | 5.0 % | **8.7 %** | 11.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter digitálny V33 | 11.50 € | **11.90 €** | 42.1 % | **47.0 %** | 11.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 13.50 € | **13.90 €** | 32.2 % | **36.2 %** | 13.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson CR 50 | 14.50 € | **14.90 €** | 7.3 % | **10.2 %** | 14.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodiny nástěnné TechnoLine WT 1019 | 12.50 € | **12.90 €** | 6.2 % | **9.6 %** | 12.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rotačná kefa pre DysonV6, V7, V8, V10, V11 | 12.50 € | **12.90 €** | 27.0 % | **31.1 %** | 12.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 2.80 € | **3.20 €** | 17.3 % | **34.1 %** | 3.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.50 € | **10.90 €** | 29.0 % | **33.9 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.50 € | **10.90 €** | 14.9 % | **19.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.10 € | **8.50 €** | 36.9 % | **43.7 %** | 8.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.20 € | **4.60 €** | 35.5 % | **48.4 %** | 4.24 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-PE145 | 39.50 € | **39.90 €** | 7.4 % | **8.5 %** | 39.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 21.50 € | **21.90 €** | 6.3 % | **8.2 %** | 21.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 17.50 € | **17.90 €** | 43.1 % | **46.4 %** | 17.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný dvojramenný konzolový držiak pre plo... | 30.50 € | **30.90 €** | 31.8 % | **33.5 %** | 30.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 37.50 € | **37.90 €** | 5.4 % | **6.5 %** | 37.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Activmix Premium 2103 90000, černý | 40.50 € | **40.90 €** | 7.7 % | **8.8 %** | 40.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell Osmo Pocket 4P ND8 ND/PL filter | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter Freewell Osmo Pocket ND32/PL | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter Freewell Osmo Pocket ND64/PL | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| ND filter Freewell Osmo Pocket 4P ND16 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| ND filter Freewell Osmo Pocket 4P ND32 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| ND filter Freewell Osmo Pocket 4P ND8 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| ND filter Freewell pre Osmo Pocket ND64 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 41.50 € | **41.90 €** | 12.3 % | **13.4 %** | 41.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.50 € | **20.90 €** | 27.8 % | **30.3 %** | 20.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 31.50 € | **31.90 €** | 37.0 % | **38.7 %** | 31.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Budík analogový TechnoLine WT 757BK | 25.50 € | **25.90 €** | 5.1 % | **6.8 %** | 25.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodiny nástěnné TechnoLine WT 7160 | 21.50 € | **21.90 €** | 5.2 % | **7.2 %** | 21.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pohybové čidlo ORBIS ISIMAT+ | 21.50 € | **21.90 €** | 9.6 % | **11.6 %** | 21.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 16.50 € | **16.90 €** | 12.1 % | **14.8 %** | 16.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor PWM Epever VS1024AU, 12/24V, 10A s... | 37.50 € | **37.90 €** | 13.0 % | **14.2 %** | 37.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 24010-56 | 40.50 € | **40.90 €** | 9.8 % | **10.9 %** | 40.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.50 € | **27.90 €** | 40.4 % | **42.5 %** | 27.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| San Marco SUPREMO 1 kg zrno | 21.50 € | **21.90 €** | 6.7 % | **8.7 %** | 21.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 25.50 € | **25.90 €** | 32.5 % | **34.5 %** | 25.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 23310-56/RH | 45.50 € | **45.90 €** | 13.8 % | **14.8 %** | 45.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Mano 3219 90020 | 55.50 € | **55.90 €** | 9.4 % | **10.2 %** | 55.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Rouge BP3443 | 31.50 € | **31.90 €** | 8.3 % | **9.7 %** | 31.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové napájadlo pre domáce zvieratá Rojeco 2,5 L | 31.50 € | **31.90 €** | 11.3 % | **12.7 %** | 31.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 24.50 € | **24.90 €** | 43.0 % | **45.3 %** | 24.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZCK7650 | 32.50 € | **32.90 €** | 11.2 % | **12.5 %** | 32.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| RICATECH PR1980 Ghettoblaster | 50.50 € | **50.90 €** | 5.2 % | **6.1 %** | 50.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica KF 17191 | 29.50 € | **29.90 €** | 21.1 % | **22.7 %** | 29.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.50 € | **24.90 €** | 36.1 % | **38.3 %** | 24.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal HB 65KD38 | 55.50 € | **55.90 €** | 11.5 % | **12.3 %** | 55.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 16.50 € | **16.90 €** | 36.1 % | **39.3 %** | 16.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.50 € | **18.90 €** | 10.1 % | **12.5 %** | 18.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 18.50 € | **18.90 €** | 7.3 % | **9.6 %** | 18.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smart WiFi Touch Wall Switch Sonoff TX T5 3C (3-chan... | 21.50 € | **21.90 €** | 11.2 % | **13.3 %** | 21.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AX9U | 17.50 € | **17.90 €** | 10.6 % | **13.2 %** | 17.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Espresso Intenso 1 kg zrno | 17.50 € | **17.90 €** | 5.7 % | **8.1 %** | 17.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| UNI-T UT501A tester izolačného odporu | 58.50 € | **58.90 €** | 12.2 % | **13.0 %** | 58.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Náhradní vodní filtr GARNI WF 45T | 18.50 € | **18.90 €** | 10.3 % | **12.7 %** | 18.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9046C | 56.50 € | **56.90 €** | 6.4 % | **7.2 %** | 56.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Combi Clean M + náhr. Static | 20.50 € | **20.90 €** | 7.9 % | **10.1 %** | 20.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktor Bluetooth KRUGER & MATZ Explorer | 51.50 € | **51.90 €** | 6.2 % | **7.0 %** | 51.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 17.50 € | **17.90 €** | 20.8 % | **23.5 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.50 € | **21.90 €** | 10.1 % | **12.1 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 49.50 € | **49.90 €** | 10.0 % | **10.8 %** | 49.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 34.50 € | **34.90 €** | 16.3 % | **17.7 %** | 34.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight akumulátorové záhradné nožnice | 63.50 € | **63.90 €** | 16.4 % | **17.1 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 26810-56/RH | 44.50 € | **44.90 €** | 5.8 % | **6.8 %** | 44.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal FV2839E0 | 33.50 € | **33.90 €** | 7.7 % | **9.0 %** | 33.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight otočná IP kamera | 34.50 € | **34.90 €** | 25.1 % | **26.6 %** | 34.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 48.50 € | **48.90 €** | 20.0 % | **20.9 %** | 48.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 31.50 € | **31.90 €** | 29.5 % | **31.1 %** | 31.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMIKO 9265+ DVB-S2/T2/C kombo přijímač 4K - SLEVA NA... | 63.50 € | **63.90 €** | 10.9 % | **11.6 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stolové svorky pre základňu AY210 Moza Racing AS013 | 26.50 € | **26.90 €** | 8.3 % | **9.9 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skříň kempingová Cattara 13480 MODICA | 62.50 € | **62.90 €** | 10.1 % | **10.8 %** | 62.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.50 € | **47.90 €** | 37.3 % | **38.5 %** | 47.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 24.50 € | **24.90 €** | 36.1 % | **38.3 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rooma Espresso A7 bílá | 537.50 € | **537.90 €** | 5.9 % | **6.0 %** | 537.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 274.50 € | **274.90 €** | 14.3 % | **14.5 %** | 274.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 394.50 € | **394.90 €** | 6.9 % | **7.1 %** | 394.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 350.50 € | **350.90 €** | 5.7 % | **5.8 %** | 350.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Intelligent self-cleaning cat litterbox UBPet C20 | 277.50 € | **277.90 €** | 12.0 % | **12.2 %** | 277.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WG894A25 | 499.50 € | **499.90 €** | 9.0 % | **9.1 %** | 499.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vibračný tester Uni-T UT312A | 282.50 € | **282.90 €** | 14.4 % | **14.5 %** | 282.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-L7 | 270.50 € | **270.90 €** | 7.9 % | **8.0 %** | 270.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GECS5C70XPA | 471.50 € | **471.90 €** | 7.0 % | **7.1 %** | 471.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 888.50 € | **888.90 €** | 7.3 % | **7.3 %** | 888.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 367.50 € | **367.90 €** | 6.7 % | **6.8 %** | 367.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant pre nákladné vozidlá Moza Racing RS071 ... | 498.50 € | **498.90 €** | 7.6 % | **7.7 %** | 498.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica MI 446 TBIM | 526.50 € | **526.90 €** | 6.0 % | **6.0 %** | 526.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA MV 447 ADW | 411.50 € | **411.90 €** | 7.0 % | **7.1 %** | 411.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WOI4S8PPM1SX | 449.50 € | **449.90 €** | 6.7 % | **6.8 %** | 449.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.50 € | **8.80 €** | 33.7 % | **38.4 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 3.70 € | **4.00 €** | 36.1 % | **47.2 %** | 3.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.30 € | **7.60 €** | 36.1 % | **41.7 %** | 7.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.50 € | **7.80 €** | 36.4 % | **41.9 %** | 7.53 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.00 € | **5.30 €** | 36.0 % | **44.1 %** | 5.03 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 6.70 € | **7.00 €** | 30.6 % | **36.5 %** | 6.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás so svetelným a pohybovým se... | 5.90 € | **6.20 €** | 39.0 % | **46.1 %** | 5.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.60 € | **9.80 €** | 31.2 % | **33.9 %** | 9.61 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely | 2.30 € | **2.50 €** | 35.5 % | **47.3 %** | 2.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 4.80 € | **5.00 €** | 37.9 % | **43.6 %** | 4.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 2.90 € | **3.10 €** | 8.7 % | **16.1 %** | 3.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.40 € | **1.60 €** | 19.8 % | **36.9 %** | 1.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.20 € | **5.40 €** | 19.4 % | **24.0 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 2.90 € | **3.10 €** | 26.8 % | **35.5 %** | 3.14 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.10 € | **6.30 €** | 32.6 % | **37.0 %** | 6.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka, 16A, biela, vypínač | 1.80 € | **2.00 €** | 34.3 % | **49.2 %** | 1.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **2.30 €** | 33.4 % | **46.1 %** | 2.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.80 € | **10.00 €** | 38.1 % | **40.9 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 529.90 € | **530.00 €** | 6.0 % | **6.0 %** | 529.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 379.90 € | **380.00 €** | 6.9 % | **6.9 %** | 379.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 284.90 € | **285.00 €** | 14.1 % | **14.1 %** | 284.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Robot na čistenie bazénov WYBOT M1C | 669.90 € | **670.00 €** | 5.4 % | **5.5 %** | 670.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čistiaci robot ULTENIC MX50 | 419.90 € | **420.00 €** | 8.3 % | **8.3 %** | 420.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň ELEGOO Jupiter 2 | 848.90 € | **849.00 €** | 8.3 % | **8.3 %** | 849.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 388.90 € | **389.00 €** | 7.0 % | **7.0 %** | 389.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| HDD 3.5" 6TB 256MB Seagate SKYHAWK pro kamerové syst... | 340.90 € | **341.00 €** | 12.4 % | **12.5 %** | 341.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 889.90 € | **890.00 €** | 7.3 % | **7.3 %** | 890.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultima Apollo S90 Soundbar | 308.90 € | **309.00 €** | 8.7 % | **8.8 %** | 309.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blesk GODOX AD600BMII Wistro s uchytením Bowens | 538.90 € | **539.00 €** | 9.8 % | **9.9 %** | 539.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Webová kamera OBSBOT Tiny 3 | 348.90 € | **349.00 €** | 6.3 % | **6.4 %** | 349.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Catlink BayMax Lite intelligent self-cleaning cat li... | 339.90 € | **340.00 €** | 9.4 % | **9.4 %** | 340.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 909.90 € | **910.00 €** | 6.4 % | **6.4 %** | 910.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO Strol 2S PRO 2 v 1 (čie... | 416.90 € | **417.00 €** | 10.5 % | **10.5 %** | 417.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus T2 smart bike trainer | 589.90 € | **590.00 €** | 10.2 % | **10.2 %** | 590.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Eliptický trenažér MERACH MR-E33B3-EU (čierny) | 372.90 € | **373.00 €** | 8.4 % | **8.5 %** | 373.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Veslovací trenažér MERACH MR-R02B10 (čierny) | 390.90 € | **391.00 €** | 9.0 % | **9.0 %** | 391.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 306.90 € | **307.00 €** | 12.4 % | **12.5 %** | 307.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Veslovací trenažér MERACH MR-R14R1 (hnedý) | 381.90 € | **382.00 €** | 13.0 % | **13.0 %** | 382.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy BR 10N3BX-S | 487.90 € | **488.00 €** | 9.9 % | **9.9 %** | 488.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy GD 48SB8C-S | 298.90 € | **299.00 €** | 5.7 % | **5.7 %** | 299.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANDY CCGMEE9025PX/E | 798.90 € | **799.00 €** | 7.9 % | **8.0 %** | 799.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool C WD 84M WBS CZ | 638.90 € | **639.00 €** | 6.9 % | **6.9 %** | 639.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EEG69405L | 633.90 € | **634.00 €** | 6.0 % | **6.0 %** | 634.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GI6432BSCWF | 318.90 € | **319.00 €** | 5.6 % | **5.6 %** | 319.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CA6 NP5B3HTX | 340.90 € | **341.00 €** | 7.0 % | **7.1 %** | 341.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 22.90 € | **23.00 €** | 32.6 % | **33.2 %** | 22.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 17.90 € | **18.00 €** | 44.7 % | **45.5 %** | 17.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.90 € | **21.00 €** | 37.7 % | **38.4 %** | 20.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom LECCE, ... | 21.90 € | **22.00 €** | 37.8 % | **38.4 %** | 21.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 16.90 € | **17.00 €** | 44.5 % | **45.3 %** | 16.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 16.90 € | **17.00 €** | 44.5 % | **45.3 %** | 16.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 29.90 € | **30.00 €** | 34.8 % | **35.3 %** | 29.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Venta Filter Hepa 13 for AP100 | 47.90 € | **48.00 €** | 10.0 % | **10.2 %** | 47.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Verto II 1423 90000 bílý/zlatý | 30.90 € | **31.00 €** | 12.1 % | **12.5 %** | 30.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 39.90 € | **40.00 €** | 37.9 % | **38.2 %** | 39.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 49.90 € | **50.00 €** | 63.3 % | **63.6 %** | 49.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Yeelight Pura Monitor Light Bar Pro | 57.90 € | **58.00 €** | 12.8 % | **12.9 %** | 57.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 35.90 € | **36.00 €** | 44.6 % | **45.0 %** | 35.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 21.90 € | **22.00 €** | 7.2 % | **7.7 %** | 21.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny klešťový multimeter Uni-T UT200R | 16.90 € | **17.00 €** | 8.8 % | **9.4 %** | 16.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM40T | 28.90 € | **29.00 €** | 12.4 % | **12.8 %** | 28.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.20 € | **9.30 €** | 24.2 % | **25.6 %** | 9.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 39.90 € | **40.00 €** | 33.6 % | **33.9 %** | 39.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E3HB1-4GG | 23.90 € | **24.00 €** | 7.0 % | **7.4 %** | 23.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal KO5S08E0 | 34.90 € | **35.00 €** | 9.7 % | **10.0 %** | 34.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 1548/04 | 28.90 € | **29.00 €** | 9.5 % | **9.9 %** | 28.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 1548/05 | 28.90 € | **29.00 €** | 9.5 % | **9.9 %** | 28.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice TechnoLine WS 9251 | 52.90 € | **53.00 €** | 5.9 % | **6.1 %** | 52.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/B | 16.90 € | **17.00 €** | 14.1 % | **14.8 %** | 16.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filters ND8/16/32 Freewell for DJI Neo | 19.90 € | **20.00 €** | 12.1 % | **12.7 %** | 19.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.90 € | **41.00 €** | 7.9 % | **8.2 %** | 40.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 48.90 € | **49.00 €** | 15.2 % | **15.4 %** | 49.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 23.90 € | **24.00 €** | 8.9 % | **9.3 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 23.90 € | **24.00 €** | 8.9 % | **9.3 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 23.90 € | **24.00 €** | 8.9 % | **9.3 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell neutrálny filter ND32 pre OSMO 360 | 61.90 € | **62.00 €** | 9.4 % | **9.6 %** | 62.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| NEDIS WIFIWC10WT SmartLife vypínač Wi-Fi, řídicí jed... | 25.90 € | **26.00 €** | 12.9 % | **13.3 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Výrobok X.A.2 | 45.90 € | **46.00 €** | 8.9 % | **9.1 %** | 46.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rýchlonabíjací kábel SDC DJI Power pre Inspire 3 | 18.90 € | **19.00 €** | 5.0 % | **5.6 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Polarizer Filter Freewell for DJI Avata 2 | 17.90 € | **18.00 €** | 7.1 % | **7.7 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UV Filter Freewell for DJI Avata 2 | 16.90 € | **17.00 €** | 9.1 % | **9.8 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 16.90 € | **17.00 €** | 9.1 % | **9.8 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada 2 filtrov Freewell Gradient pre DJI Air 3S | 26.90 € | **27.00 €** | 9.6 % | **10.0 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Albrecht DR 54 | 62.90 € | **63.00 €** | 7.8 % | **8.0 %** | 63.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Planetárium Levenhuk Star Sky P9 | 58.90 € | **59.00 €** | 6.7 % | **6.8 %** | 59.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 16.90 € | **17.00 €** | 6.9 % | **7.6 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.60 € | **5.70 €** | 35.1 % | **37.5 %** | 5.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.10 € | **5.20 €** | 43.5 % | **46.3 %** | 5.15 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR senzor pro E27 žiarovku, biely | 6.80 € | **6.90 €** | 44.0 % | **46.1 %** | 6.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.10 € | **6.20 €** | 34.4 % | **36.6 %** | 6.15 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.30 € | **7.40 €** | 43.7 % | **45.7 %** | 7.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.30 € | **7.40 €** | 43.7 % | **45.7 %** | 7.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR stropný senzor, interiérový, biely | 7.30 € | **7.40 €** | 43.7 % | **45.7 %** | 7.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.60 € | **4.70 €** | 32.1 % | **35.0 %** | 4.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka s viečkom, biela | 6.30 € | **6.40 €** | 34.1 % | **36.2 %** | 6.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.80 € | **5.90 €** | 9.2 % | **11.0 %** | 5.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 6.60 € | **6.70 €** | 32.5 % | **34.5 %** | 6.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.80 € | **6.90 €** | 43.2 % | **45.3 %** | 6.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.80 € | **6.90 €** | 43.2 % | **45.3 %** | 6.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 6.60 € | **6.70 €** | 29.9 % | **31.9 %** | 6.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.60 € | **4.70 €** | 14.4 % | **16.9 %** | 4.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.30 € | **5.40 €** | 34.7 % | **37.2 %** | 5.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.60 € | **6.70 €** | 32.5 % | **34.5 %** | 6.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 6.10 € | **6.20 €** | 21.9 % | **23.8 %** | 6.20 € | dobehnutie 2. najlacnejšieho konkurenta |
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
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.60 €** | 31.7 % | **35.5 %** | 3.57 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.00 € | **1.10 €** | 42.6 % | **56.9 %** | 1.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.00 € | **1.10 €** | 42.6 % | **56.9 %** | 1.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 8W, E14, 3000K, 720lm | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.60 € | **2.70 €** | 32.9 % | **38.1 %** | 2.68 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.50 € | **3.60 €** | 33.6 % | **37.4 %** | 3.58 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.40 € | **3.50 €** | 33.5 % | **37.5 %** | 3.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.60 € | **3.70 €** | 41.4 % | **45.3 %** | 3.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.50 € | **3.60 €** | 48.2 % | **52.4 %** | 3.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kefka na čistenie filtra pre Dyson Airwrap | 3.90 € | **4.00 €** | 19.7 % | **22.7 %** | 3.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.40 € | **3.50 €** | 32.9 % | **36.8 %** | 3.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.60 € | **2.70 €** | 22.2 % | **26.9 %** | 2.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.10 € | **2.20 €** | 16.9 % | **22.5 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 2.90 € | **3.00 €** | 19.7 % | **23.8 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 1.90 € | **2.00 €** | 33.2 % | **40.2 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
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
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.80 € | **1.90 €** | 29.5 % | **36.7 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR interiérový senzor, do krabičky od vypín... | 8.80 € | **8.90 €** | 44.2 % | **45.9 %** | 8.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.50 € | **8.60 €** | 35.0 % | **36.6 %** | 8.54 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 13.90 € | **14.00 €** | 35.5 % | **36.5 %** | 13.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 8.80 € | **8.90 €** | 44.2 % | **45.9 %** | 8.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 8.80 € | **8.90 €** | 44.2 % | **45.9 %** | 8.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2x 10A, biely-sivý | 3.20 € | **3.30 €** | 35.5 % | **39.7 %** | 3.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight magnetický USB-C/Lightning kábel, USB-C kone... | 5.20 € | **5.30 €** | 40.5 % | **43.2 %** | 5.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda strieborná, závesná, ča... | 7.50 € | **7.60 €** | 50.6 % | **52.6 %** | 7.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 11.90 € | **12.00 €** | 36.8 % | **38.0 %** | 11.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 13.90 € | **14.00 €** | 31.9 % | **32.8 %** | 13.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 6.70 € | **6.80 €** | 30.9 % | **32.9 %** | 6.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELDONEX EKS4040SL | 10.90 € | **11.00 €** | 8.7 % | **9.7 %** | 10.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-50245 | 12.90 € | **13.00 €** | 9.9 % | **10.8 %** | 12.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.10 € | **9.20 €** | 38.0 % | **39.5 %** | 9.16 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 12.90 € | **13.00 €** | 25.3 % | **26.3 %** | 12.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.50 € | **9.60 €** | 30.5 % | **31.8 %** | 9.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.50 € | **4.60 €** | 42.9 % | **46.1 %** | 4.57 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 5.40 € | **5.50 €** | 22.3 % | **24.6 %** | 5.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.40 € | **5.50 €** | 33.8 % | **36.3 %** | 5.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 10.90 € | **11.00 €** | 30.7 % | **31.9 %** | 10.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 4.70 € | **4.80 €** | 34.5 % | **37.4 %** | 4.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 7.40 € | **7.50 €** | 36.4 % | **38.3 %** | 7.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.00 € | **5.10 €** | 15.8 % | **18.1 %** | 5.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.40 € | **7.50 €** | 36.4 % | **38.3 %** | 7.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 7.90 € | **8.00 €** | 10.9 % | **12.3 %** | 7.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.20 € | **3.30 €** | 16.1 % | **19.8 %** | 3.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 3.70 € | **3.80 €** | 16.6 % | **19.7 %** | 3.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 3.70 € | **3.80 €** | 36.1 % | **39.8 %** | 3.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 8.40 € | **8.50 €** | 43.5 % | **45.2 %** | 8.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| UNI-T UT658DUAL tester zásuviek USB | 11.90 € | **12.00 €** | 8.3 % | **9.3 %** | 11.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight filter pre Dyson V11, V15 | 6.90 € | **7.00 €** | 29.0 % | **30.8 %** | 6.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stĺpcový filter pre Dyson V12 | 5.90 € | **6.00 €** | 24.3 % | **26.4 %** | 5.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 6.90 € | **7.00 €** | 19.1 % | **20.8 %** | 6.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.20 € | **2.30 €** | 18.5 % | **23.8 %** | 2.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 8.30 € | **8.40 €** | 52.7 % | **54.5 %** | 8.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.20 € | **4.30 €** | 8.7 % | **11.3 %** | 4.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.20 € | **4.30 €** | 9.1 % | **11.7 %** | 4.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.30 € | **9.40 €** | 30.1 % | **31.5 %** | 9.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.70 € | **4.80 €** | 20.5 % | **23.1 %** | 4.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 5.90 € | **6.00 €** | 23.3 % | **25.4 %** | 5.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight senzor pre meteostanice TE110 | 5.20 € | **5.30 €** | 18.1 % | **20.4 %** | 5.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.60 € | **8.70 €** | 5.6 % | **6.8 %** | 8.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.30 € | **9.40 €** | 34.3 % | **35.7 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.30 € | **9.40 €** | 34.3 % | **35.7 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 9.60 € | **9.70 €** | 33.2 % | **34.6 %** | 9.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EF155 | 10.90 € | **11.00 €** | 16.3 % | **17.4 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjecí bezdrátová podložka pro telefony Compass | 15.90 € | **16.00 €** | 6.2 % | **6.9 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 15.90 € | **16.00 €** | 19.0 % | **19.8 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 4.70 € | **4.80 €** | 34.5 % | **37.4 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.50 € | **7.60 €** | 35.2 % | **37.0 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rádio KRUGER & MATZ KM0833 analogové přenosné solární | 15.90 € | **16.00 €** | 5.4 % | **6.1 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada pro přežití SURVIVAL 32v1 Trizand 19920 | 14.90 € | **15.00 €** | 10.3 % | **11.1 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 9.80 € | **9.90 €** | 37.6 % | **39.0 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, 20 - 200A | 5.00 € | **5.10 €** | 4.5 % | **6.6 %** | 5.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 6.50 € | **6.60 €** | 42.1 % | **44.2 %** | 6.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Budík digitální TechnoLine WT 500 | 91.90 € | **92.00 €** | 9.2 % | **9.4 %** | 91.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 109.90 € | **110.00 €** | 19.9 % | **20.0 %** | 109.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 35B1 | 136.90 € | **137.00 €** | 5.7 % | **5.8 %** | 136.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZMM9802B | 128.90 € | **129.00 €** | 8.3 % | **8.4 %** | 129.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čistiaci robot PROSCENIC Q20 Plus | 236.90 € | **237.00 €** | 13.5 % | **13.5 %** | 237.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK KARMA PRO 10x32 | 158.90 € | **159.00 €** | 7.5 % | **7.5 %** | 159.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 184.90 € | **185.00 €** | 6.4 % | **6.4 %** | 185.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Travel 12x50 | 68.90 € | **69.00 €** | 10.0 % | **10.2 %** | 69.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 178.90 € | **179.00 €** | 5.2 % | **5.2 %** | 179.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 68.90 € | **69.00 €** | 12.7 % | **12.8 %** | 69.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Philips TAR4600 Rádiobudík | 64.90 € | **65.00 €** | 7.7 % | **7.9 %** | 65.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| BLUETOUCH Elektrický vysokozdvižný vozík | 248.90 € | **249.00 €** | 9.2 % | **9.3 %** | 249.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DeerRun Q2 Mestský elektrický bežecký pás (čierny) | 192.90 € | **193.00 €** | 12.9 % | **12.9 %** | 193.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rotoped DeerRun S500 Pro (čierny) | 239.90 € | **240.00 €** | 12.0 % | **12.1 %** | 240.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás DeerRun Q2 Urban (ružový) | 192.90 € | **193.00 €** | 12.9 % | **13.0 %** | 193.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 203.90 € | **204.00 €** | 11.8 % | **11.8 %** | 204.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 234.90 € | **235.00 €** | 9.8 % | **9.9 %** | 235.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 1226 | 188.90 € | **189.00 €** | 6.8 % | **6.8 %** | 189.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy FIDC X602/CA IDEA | 167.90 € | **168.00 €** | 7.3 % | **7.3 %** | 168.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.90 € | **79.00 €** | 15.3 % | **15.5 %** | 78.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kompletný čistiaci robot MOVA Z70 Ultra Roller - sto... | 1549.90 € | **1550.00 €** | 10.3 % | **10.3 %** | 1550.00 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1182)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| 3D skener Creality Sermoon P1 | 3158.50 € | **2911.50 €** | 15.0 % | **6.0 %** | 2911.86 € | stávame sa najlacnejší |
| Geneinno T1-Pro 150m 4K UHD podvodný dron | 2872.00 € | **2645.00 €** | 15.0 % | **5.9 %** | 2645.50 € | stávame sa najlacnejší |
| 3D skener Revopoint MetroY Ultra – edícia CCM | 2573.90 € | **2350.00 €** | 15.0 % | **5.0 %** | 1623.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 FLEX EES42210IX | 669.00 € | **461.50 €** | 52.3 % | **5.1 %** | 414.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Creality Sermoon S1 | 2561.00 € | **2374.00 €** | 15.0 % | **6.6 %** | 2374.50 € | stávame sa najlacnejší |
| GORENJE F4142PW | 359.00 € | **221.50 €** | 74.8 % | **7.8 %** | 221.90 € | stávame sa najlacnejší |
| Electrolux 700 SENSE Hob2Hood LFG516X | 399.00 € | **265.90 €** | 57.8 % | **5.1 %** | 248.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BMGB25332BG | 309.00 € | **176.50 €** | 88.1 % | **7.4 %** | 176.90 € | stávame sa najlacnejší |
| Samsung Z Fold8 Ultra 5G 512GB Violet | 2640.90 € | **2520.50 €** | 10.0 % | **5.0 %** | 1746.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 FLEX EES42210L | 529.00 € | **418.00 €** | 32.9 % | **5.0 %** | 384.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Lavender | 2416.50 € | **2306.90 €** | 10.0 % | **5.0 %** | 1522.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Cream | 2416.50 € | **2306.90 €** | 10.0 % | **5.0 %** | 1620.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HILG64220SW | 269.00 € | **164.00 €** | 72.3 % | **5.1 %** | 152.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE77S85H | 2185.90 € | **2086.50 €** | 10.0 % | **5.0 %** | 1339.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GS620C10S | 429.00 € | **342.90 €** | 33.8 % | **6.9 %** | 343.00 € | stávame sa najlacnejší |
| Electrolux EOF3H40TH | 339.00 € | **259.00 €** | 37.4 % | **5.0 %** | 249.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux KGS64362XX | 269.00 € | **190.90 €** | 48.2 % | **5.2 %** | 188.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje W2PNEI84A1SW | 439.00 € | **370.00 €** | 35.3 % | **14.0 %** | 370.50 € | stávame sa najlacnejší |
| Beko BM3WFU3941WBW | 439.00 € | **372.50 €** | 23.9 % | **5.1 %** | 359.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje F492PW | 239.00 € | **174.00 €** | 48.9 % | **8.4 %** | 174.50 € | stávame sa najlacnejší |
| GORENJE FN617EES5 | 469.00 € | **404.00 €** | 24.0 % | **6.8 %** | 404.50 € | stávame sa najlacnejší |
| Samsung OLED QE65S85H | 1366.00 € | **1303.90 €** | 10.0 % | **5.0 %** | 880.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max Plus robotický s mopom... | 272.50 € | **216.90 €** | 32.1 % | **5.1 %** | 190.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ45 Wifi/Bluetooth | 207.50 € | **151.90 €** | 43.5 % | **5.0 %** | 151.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C425(2-pack) 4MPx, vonkajš... | 256.50 € | **202.00 €** | 33.4 % | **5.0 %** | 186.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ2 Elite Dual Lens | 203.50 € | **151.90 €** | 40.7 % | **5.0 %** | 141.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 638.90 € | **589.50 €** | 15.0 % | **6.1 %** | 589.90 € | stávame sa najlacnejší |
| BEKO CTB 6250 W | 159.00 € | **109.90 €** | 52.0 % | **5.0 %** | 87.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CTB 6250 B | 159.00 € | **109.90 €** | 52.0 % | **5.0 %** | 90.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Micro RGB MRE55R85H | 1045.90 € | **998.50 €** | 10.0 % | **5.0 %** | 869.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D Tlačiareň Creality K1 MAX | 543.50 € | **496.90 €** | 15.0 % | **5.1 %** | 497.00 € | stávame sa najlacnejší |
| ELECTROLUX LHR3233CK | 199.00 € | **153.00 €** | 36.6 % | **5.0 %** | 128.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max robotický s mopom, 530... | 223.50 € | **178.50 €** | 31.8 % | **5.3 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baza na joystick Moza Racing AY210 (PC) | 724.00 € | **681.50 €** | 11.6 % | **5.0 %** | 663.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C720 4MPx, vonkajší, IP, W... | 205.00 € | **162.90 €** | 32.3 % | **5.2 %** | 118.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Vital Air II 2302 90000, černá | 209.99 € | **169.90 €** | 34.1 % | **8.5 %** | 170.00 € | stávame sa najlacnejší |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 767.50 € | **728.50 €** | 15.0 % | **9.1 %** | 728.90 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max robotický s mopom, výk... | 188.50 € | **150.50 €** | 31.9 % | **5.3 %** | 143.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant Moza Racing RS V2 RS25 | 426.00 € | **389.50 €** | 15.0 % | **5.1 %** | 279.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 402.90 € | **368.50 €** | 15.0 % | **5.2 %** | 368.90 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 176.50 € | **142.90 €** | 32.0 % | **6.9 %** | 143.00 € | stávame sa najlacnejší |
| Gorenje NRK6182PS4 | 359.00 € | **325.90 €** | 18.0 % | **7.1 %** | 326.00 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 403.90 € | **372.00 €** | 15.0 % | **5.9 %** | 372.50 € | stávame sa najlacnejší |
| Electrolux EOF3H50BK | 299.00 € | **267.90 €** | 17.3 % | **5.1 %** | 218.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant MOZA RACING KS Pro RS095 | 352.50 € | **321.90 €** | 15.1 % | **5.1 %** | 321.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot na čistenie bazénov Wybot L1 | 649.90 € | **619.50 €** | 15.0 % | **9.6 %** | 619.90 € | stávame sa najlacnejší |
| GARRETT AT Max 8,5 x 11" INTL – detektor kovov | 757.50 € | **729.50 €** | 15.0 % | **10.8 %** | 729.90 € | stávame sa najlacnejší |
| Anycubic Photon Mono M7 Pro 3D Printer | 476.00 € | **448.50 €** | 15.0 % | **8.4 %** | 448.90 € | stávame sa najlacnejší |
| GUZZANTI GZ 363A | 599.00 € | **571.90 €** | 10.0 % | **5.0 %** | 561.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blender G21 Ultimate Graphite Black | 274.90 € | **248.00 €** | 18.2 % | **6.6 %** | 248.46 € | stávame sa najlacnejší |
| Koleso MOZA RS068 FSR V2 (PC) | 678.50 € | **652.00 €** | 15.0 % | **10.5 %** | 652.38 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M1 | 544.50 € | **519.50 €** | 15.0 % | **9.8 %** | 519.90 € | stávame sa najlacnejší |
| Solight profesionálna smart WIFI meteostanica | 123.50 € | **98.50 €** | 49.9 % | **19.6 %** | 98.90 € | stávame sa najlacnejší |
| Baza na joystick Moza Racing AB9 Force Feedback | 532.90 € | **508.90 €** | 15.0 % | **9.8 %** | 509.00 € | stávame sa najlacnejší |
| Detektor kovov GARRETT Ace Apex 8,5x11+MS-3 | 503.50 € | **479.50 €** | 15.0 % | **9.5 %** | 479.90 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 273.50 € | **249.90 €** | 15.0 % | **5.1 %** | 248.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LKR64022AX | 513.50 € | **490.00 €** | 10.0 % | **5.0 %** | 483.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Neo QLED QE43QN70H | 504.50 € | **481.50 €** | 10.0 % | **5.0 %** | 475.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GBBSJ21DPY | 495.50 € | **472.90 €** | 10.0 % | **5.0 %** | 398.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Pro | 264.50 € | **241.90 €** | 15.0 % | **5.2 %** | 200.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 261.00 € | **238.50 €** | 15.0 % | **5.1 %** | 229.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 252.90 € | **230.90 €** | 15.0 % | **5.0 %** | 207.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RP619EEW5 | 480.90 € | **458.90 €** | 10.1 % | **5.0 %** | 458.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 Pro+ 5G 8/256GB Brown | 463.90 € | **442.90 €** | 10.1 % | **5.1 %** | 317.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE65S99H | 2847.90 € | **2827.00 €** | 7.5 % | **6.7 %** | 2827.50 € | stávame sa najlacnejší |
| Whirlpool WHK 26373 XBR6EA AI AdaptiveCo | 554.90 € | **534.00 €** | 10.0 % | **5.9 %** | 534.50 € | stávame sa najlacnejší |
| LG FA2S8V3GN3W | 443.50 € | **422.90 €** | 10.1 % | **5.0 %** | 398.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK620EABK4 | 443.90 € | **423.90 €** | 10.0 % | **5.1 %** | 330.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB PRO (ZAE40120CZ) | 432.00 € | **412.50 €** | 10.0 % | **5.0 %** | 343.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIM12300X | 229.00 € | **209.50 €** | 14.9 % | **5.1 %** | 191.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO M8 PRO 5G 12/512GB Silver | 429.90 € | **410.50 €** | 10.0 % | **5.0 %** | 295.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 297.90 € | **278.50 €** | 15.0 % | **7.5 %** | 278.90 € | stávame sa najlacnejší |
| Gorenje NRK620EAW4 | 413.50 € | **394.50 €** | 10.1 % | **5.0 %** | 360.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C125 IP, 4MPx, WiFi, prísvit | 86.90 € | **67.90 €** | 34.6 % | **5.2 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFN26540XP | 460.50 € | **441.50 €** | 10.1 % | **5.6 %** | 441.90 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 269.00 € | **250.00 €** | 15.0 % | **6.9 %** | 250.50 € | stávame sa najlacnejší |
| Samsung The Frame Pro QE65LS03HW | 1817.50 € | **1798.90 €** | 10.0 % | **8.9 %** | 1799.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 216.00 € | **197.50 €** | 15.0 % | **5.2 %** | 187.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WMD44MB | 409.90 € | **391.50 €** | 10.0 % | **5.1 %** | 348.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 276.50 € | **258.90 €** | 15.0 % | **7.6 %** | 259.00 € | stávame sa najlacnejší |
| Samsung Mini LED UE43M70H | 379.50 € | **362.50 €** | 10.0 % | **5.1 %** | 359.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant MOZA RACING CS Pro RS093 | 363.00 € | **346.00 €** | 14.9 % | **9.6 %** | 346.50 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 | 298.50 € | **281.90 €** | 15.0 % | **8.6 %** | 282.00 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C411 KIT 3MPx, outdoor, IP, WiFi... | 78.90 € | **62.50 €** | 33.5 % | **5.7 %** | 45.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C260 IP, 8MPx, WiFi, prísvit | 79.90 € | **63.50 €** | 32.6 % | **5.4 %** | 61.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 KIT 3MPx, vonkajšia, IP, Wi... | 78.90 € | **62.50 €** | 33.5 % | **5.7 %** | 61.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Waydoo submersible | 287.50 € | **271.50 €** | 15.0 % | **8.6 %** | 271.90 € | stávame sa najlacnejší |
| Guzzanti GZ 235 | 458.50 € | **442.50 €** | 10.1 % | **6.3 %** | 442.90 € | stávame sa najlacnejší |
| Blesk GODOX V1 TTL pre Olympus | 228.00 € | **212.00 €** | 14.9 % | **6.9 %** | 212.50 € | stávame sa najlacnejší |
| ETA Storio II 2043 90030 černá | 346.50 € | **330.90 €** | 10.0 % | **5.1 %** | 269.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool TDLR 6240S EU/N | 339.50 € | **323.90 €** | 10.2 % | **5.1 %** | 322.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MWSC 833 SB | 330.00 € | **315.00 €** | 10.0 % | **5.0 %** | 296.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 3MPx, vonkajšie, IP, WiFi, ... | 69.00 € | **54.00 €** | 34.2 % | **5.0 %** | 46.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 172.00 € | **157.50 €** | 14.8 % | **5.2 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 173.90 € | **159.50 €** | 15.0 % | **5.5 %** | 159.90 € | stávame sa najlacnejší |
| Guzzanti GZ 210G | 472.90 € | **458.50 €** | 10.0 % | **6.7 %** | 458.90 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C520WS 4MPx, vonkajšie, IP PTZ, ... | 70.00 € | **55.90 €** | 32.2 % | **5.6 %** | 46.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K5 | 122.90 € | **108.90 €** | 18.7 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (strieborné) | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 129.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (zelené) | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 129.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB 11 8/256GB (ZAFR0272CZ) | 304.90 € | **290.90 €** | 10.1 % | **5.0 %** | 275.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 485.00 € | **471.00 €** | 10.0 % | **6.8 %** | 471.50 € | stávame sa najlacnejší |
| Candy ECNBQT3518E Fresco | 493.50 € | **479.90 €** | 9.7 % | **6.7 %** | 480.00 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 52.50 € | **38.90 €** | 50.5 % | **11.5 %** | 39.00 € | stávame sa najlacnejší |
| Beko B5RCNA416HXBR | 455.50 € | **442.00 €** | 10.1 % | **6.8 %** | 442.50 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 182.90 € | **169.50 €** | 15.0 % | **6.6 %** | 169.90 € | stávame sa najlacnejší |
| Uperfect UPi B7 10.1" 1920x1200 60Hz Portable Monitor | 151.90 € | **138.90 €** | 15.1 % | **5.3 %** | 138.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight sada 3 LED vianočných darčekov, 48x LED, IP44 | 47.90 € | **34.90 €** | 54.8 % | **12.8 %** | 35.00 € | stávame sa najlacnejší |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 252.50 € | **239.50 €** | 15.0 % | **9.0 %** | 239.90 € | stávame sa najlacnejší |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 711.50 € | **698.50 €** | 10.1 % | **8.0 %** | 698.90 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 75.00 € | **62.00 €** | 59.1 % | **31.5 %** | 62.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C510W 3MPx, vonkajšia, IP, WiFi,... | 63.90 € | **51.00 €** | 31.7 % | **5.1 %** | 46.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux CFG526R | 279.50 € | **266.90 €** | 10.0 % | **5.0 %** | 263.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HIC 64401 | 159.00 € | **146.50 €** | 14.0 % | **5.0 %** | 143.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight laserová vodováha 12 línií, 360 °, zelený laser | 153.50 € | **141.00 €** | 50.2 % | **38.0 %** | 141.50 € | stávame sa najlacnejší |
| Boxovací pytel DBX BUSHIDO 180 cm 60 kg | 143.90 € | **131.50 €** | 15.1 % | **5.2 %** | 122.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diagnostický skener pre motocykle ANCEL MT100 PRO | 145.00 € | **132.90 €** | 14.8 % | **5.2 %** | 99.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 0028 92020 | 79.99 € | **67.90 €** | 32.0 % | **12.0 %** | 68.00 € | stávame sa najlacnejší |
| ETA Ambito 0516 90000 bílý/tyrkysový | 75.99 € | **64.00 €** | 30.0 % | **9.5 %** | 64.50 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro K3 | 110.50 € | **98.90 €** | 17.5 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica GWAS610DL | 254.50 € | **242.90 €** | 10.1 % | **5.1 %** | 237.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo VM Master | 247.50 € | **235.90 €** | 10.2 % | **5.0 %** | 235.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Shifter Moza Racing HGP RS039 | 154.50 € | **143.00 €** | 15.1 % | **6.6 %** | 143.50 € | stávame sa najlacnejší |
| Boxovací pytel DBX BUSHIDO 160 cm 50 kg | 130.90 € | **119.50 €** | 15.2 % | **5.1 %** | 110.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C230 IP, 5MPx, WiFi, prísvit | 54.90 € | **43.50 €** | 33.0 % | **5.4 %** | 38.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A1 Urban (či... | 338.90 € | **327.50 €** | 15.1 % | **11.2 %** | 327.90 € | stávame sa najlacnejší |
| Rowenta Extreme Dry Compact DH5250F0 | 242.90 € | **231.90 €** | 10.0 % | **5.0 %** | 217.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R2750DB 2.0 (čierne) | 200.50 € | **189.50 €** | 14.9 % | **8.6 %** | 189.90 € | stávame sa najlacnejší |
| Gorenje RK14CPS4 | 309.50 € | **298.50 €** | 10.1 % | **6.2 %** | 298.90 € | stávame sa najlacnejší |
| UNI-T UT521 tester uzemnenia | 140.00 € | **129.00 €** | 15.0 % | **6.0 %** | 129.50 € | stávame sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 427.90 € | **417.00 €** | 15.0 % | **12.1 %** | 417.50 € | stávame sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 3-pack) | 232.50 € | **221.90 €** | 10.1 % | **5.1 %** | 91.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací pytel DBX BUSHIDO premium 140 cm 40 kg | 123.50 € | **112.90 €** | 15.2 % | **5.3 %** | 92.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM3000L superkardioidní puškový, XLR | 114.50 € | **103.90 €** | 17.4 % | **6.5 %** | 104.00 € | stávame sa najlacnejší |
| Kamera EMOS IP-1300 LANTERN /4074/ GoSmart venkovní ... | 123.00 € | **112.50 €** | 14.9 % | **5.1 %** | 95.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BU1154HCN | 289.00 € | **278.50 €** | 13.2 % | **9.1 %** | 278.90 € | stávame sa najlacnejší |
| Domo DO9079KR-PROMO | 294.50 € | **284.00 €** | 10.1 % | **6.1 %** | 284.50 € | stávame sa najlacnejší |
| Kaon MZ-102 Skylink Viaccess Orca bezkartový systém | 121.90 € | **111.50 €** | 15.1 % | **5.3 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Paddleboard Capriolo Orange 335 x 83x 15 cm, 150 kg | 272.90 € | **262.50 €** | 9.3 % | **5.2 %** | 261.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 12,8V  75Ah MHPower MS75-12(L) LC5-M8 | 228.00 € | **217.90 €** | 15.0 % | **9.9 %** | 218.00 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120P | 191.00 € | **180.90 €** | 15.0 % | **8.9 %** | 181.00 € | stávame sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **196.90 €** | 14.9 % | **9.3 %** | 197.00 € | stávame sa najlacnejší |
| Tefal RK364G10 Coppertinto | 69.90 € | **59.90 €** | 30.2 % | **11.5 %** | 60.00 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 148.90 € | **138.90 €** | 15.1 % | **7.4 %** | 139.00 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120 | 182.90 € | **172.90 €** | 15.1 % | **8.8 %** | 173.00 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 49.50 € | **39.50 €** | 47.9 % | **18.0 %** | 39.90 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A1 Pro (čier... | 328.50 € | **318.50 €** | 15.0 % | **11.5 %** | 318.90 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A1 Pro (stri... | 328.50 € | **318.50 €** | 15.0 % | **11.5 %** | 318.90 € | stávame sa najlacnejší |
| Braun SI1009OR | 32.90 € | **23.00 €** | 54.8 % | **8.2 %** | 23.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C310 vonkajšia, IP, FHD, WiFi, p... | 48.50 € | **38.90 €** | 31.3 % | **5.3 %** | 36.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM3000M studiový stereofonní, XLR | 98.50 € | **88.90 €** | 17.8 % | **6.3 %** | 89.00 € | stávame sa najlacnejší |
| CANON i-SENSYS MF3010 | 202.50 € | **193.00 €** | 10.2 % | **5.0 %** | 156.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 44GW | 205.50 € | **196.00 €** | 10.1 % | **5.0 %** | 192.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 67.50 € | **58.00 €** | 43.9 % | **23.7 %** | 58.50 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPL-500-12 UPS 500W 12V čistý ... | 109.90 € | **100.50 €** | 15.1 % | **5.2 %** | 94.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 STD | 109.90 € | **100.50 €** | 15.0 % | **5.2 %** | 95.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultima Poseidon D60 Soundbar | 178.00 € | **169.00 €** | 15.0 % | **9.2 %** | 169.50 € | stávame sa najlacnejší |
| Redmi Pad 2 4/128GB šedá (65579) | 195.90 € | **187.00 €** | 10.1 % | **5.1 %** | 132.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Q7 BF Black | 187.90 € | **179.00 €** | 10.2 % | **5.0 %** | 177.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria Jupio Alkaline AA balenie 100ks | 44.00 € | **35.50 €** | 34.5 % | **8.5 %** | 35.75 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový | 90.00 € | **81.50 €** | 17.4 % | **6.3 %** | 81.90 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 121.00 € | **112.50 €** | 15.0 % | **6.9 %** | 112.90 € | stávame sa najlacnejší |
| Moza Racing MTLP AS009 Panel pre vzlet a pristátie (PC) | 154.50 € | **146.00 €** | 15.1 % | **8.8 %** | 146.44 € | stávame sa najlacnejší |
| Boxovací pytel DBX BUSHIDO GymPro 140/40cm 40kg | 100.00 € | **91.90 €** | 14.8 % | **5.5 %** | 85.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus Black | 177.90 € | **169.90 €** | 10.2 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus White | 177.90 € | **169.90 €** | 10.2 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus Black | 177.90 € | **169.90 €** | 10.2 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus White | 177.90 € | **169.90 €** | 10.2 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrniec Berlingerhaus BH-1258 Burgundy Metallic Line ... | 46.50 € | **38.50 €** | 28.3 % | **6.2 %** | 35.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim BLACK | 39.90 € | **31.90 €** | 35.4 % | **8.2 %** | 32.00 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 124.50 € | **116.50 €** | 22.5 % | **14.6 %** | 116.90 € | stávame sa najlacnejší |
| Blesk GODOX V860III TTL pre Olympus | 212.00 € | **204.00 €** | 14.9 % | **10.6 %** | 204.50 € | stávame sa najlacnejší |
| Sušič vlasov MOVA Flip 10 | 192.90 € | **185.00 €** | 15.1 % | **10.4 %** | 185.50 € | stávame sa najlacnejší |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 116.90 € | **109.00 €** | 15.1 % | **7.3 %** | 109.50 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA500 nádobka na prach p... | 41.50 € | **33.90 €** | 32.4 % | **8.1 %** | 34.00 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-300-12 UPS 300W 12V čistý ... | 90.50 € | **82.90 €** | 15.0 % | **5.4 %** | 74.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 48S | 165.50 € | **158.00 €** | 10.0 % | **5.1 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér do auta Ottocast OttoAibox E2 Car... | 145.50 € | **138.00 €** | 14.9 % | **9.0 %** | 138.50 € | stávame sa najlacnejší |
| TP-LINK RE200 AC750 WiFi Range Extender | 29.90 € | **22.50 €** | 39.9 % | **5.3 %** | 19.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 52.00 € | **44.90 €** | 43.7 % | **24.0 %** | 45.00 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (sivá) | 92.00 € | **84.90 €** | 14.8 % | **5.9 %** | 85.00 € | stávame sa najlacnejší |
| DOMO DO244SV | 147.50 € | **140.50 €** | 10.2 % | **5.0 %** | 132.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C210 IP, 3MP, WiFi, prísvit | 36.50 € | **29.50 €** | 31.6 % | **6.4 %** | 27.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, plast... | 30.50 € | **23.50 €** | 59.0 % | **22.5 %** | 23.90 € | stávame sa najlacnejší |
| Sous vide G21 Maestro, WiFi, 1200 W | 114.50 € | **107.50 €** | 18.8 % | **11.5 %** | 107.90 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa A1 GAMUT 15,6" | 85.00 € | **78.00 €** | 15.0 % | **5.6 %** | 78.50 € | stávame sa najlacnejší |
| Electrolux EB61C4DB | 149.90 € | **143.00 €** | 10.1 % | **5.0 %** | 127.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 88.90 € | **82.00 €** | 15.1 % | **6.2 %** | 82.50 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM20 všesměrový klopový s předzesil... | 35.90 € | **29.00 €** | 30.3 % | **5.3 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-3000 Skylink Irdeto systém na kartu | 78.50 € | **71.90 €** | 15.1 % | **5.4 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 85.50 € | **78.90 €** | 15.3 % | **6.4 %** | 79.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110(2-pack)(EU) reguláci... | 34.00 € | **27.50 €** | 31.8 % | **6.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor Uperfect Z14-3S M140G12 14'' 2240x1... | 345.00 € | **338.50 €** | 14.9 % | **12.8 %** | 338.90 € | stávame sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 84.50 € | **78.00 €** | 15.2 % | **6.3 %** | 78.50 € | stávame sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 8x42 | 156.50 € | **150.00 €** | 15.0 % | **10.2 %** | 150.50 € | stávame sa najlacnejší |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 86.50 € | **80.00 €** | 15.2 % | **6.6 %** | 80.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 130.50 € | **124.00 €** | 15.2 % | **9.5 %** | 124.50 € | stávame sa najlacnejší |
| Rowenta RO4931EA | 134.90 € | **128.50 €** | 10.3 % | **5.1 %** | 119.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA G3430 Pink | 146.90 € | **140.50 €** | 10.1 % | **5.3 %** | 140.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 75.00 € | **68.90 €** | 14.8 % | **5.5 %** | 67.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla TE-300 | 27.90 € | **21.90 €** | 36.2 % | **6.9 %** | 9.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C200 HomeWi-Fi Camera | 34.90 € | **28.90 €** | 28.4 % | **6.3 %** | 27.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Nedis IRONCL250 naparovacia | 45.50 € | **39.50 €** | 21.3 % | **5.3 %** | 39.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 12,8V 150Ah VIPOW BAT0498 Bluetooth | 409.50 € | **403.50 €** | 15.0 % | **13.3 %** | 403.90 € | stávame sa najlacnejší |
| Detektor oxidu uhličitého CO2 LEVENHUK Wezzer Air MC10 | 80.50 € | **74.50 €** | 14.9 % | **6.4 %** | 74.90 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 36.00 € | **30.00 €** | 32.0 % | **10.0 %** | 30.50 € | stávame sa najlacnejší |
| Dynamický mikrofón Maono PD200W (čierny) | 74.00 € | **68.00 €** | 15.0 % | **5.7 %** | 68.50 € | stávame sa najlacnejší |
| KMP C81V / PGI-525BK, CLI-526C/M/Y | 23.99 € | **18.00 €** | 67.8 % | **25.9 %** | 18.50 € | stávame sa najlacnejší |
| Slúchadlá JBL Wave Beam2 biele | 66.90 € | **61.00 €** | 15.3 % | **5.2 %** | 41.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Aura A50 Pro Soundbar | 134.90 € | **129.00 €** | 15.0 % | **10.0 %** | 129.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 28.50 € | **22.90 €** | 32.9 % | **6.8 %** | 23.00 € | stávame sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 24.50 € | **18.90 €** | 53.3 % | **18.3 %** | 19.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 27.50 € | **21.90 €** | 33.6 % | **6.4 %** | 22.00 € | stávame sa najlacnejší |
| Stojany na činky nastavitelné REBEL ACTIVE RBA-2402 | 67.50 € | **61.90 €** | 15.2 % | **5.6 %** | 62.00 € | stávame sa najlacnejší |
| Redmi A7 Pro 4/64GB Black | 126.50 € | **120.90 €** | 10.1 % | **5.2 %** | 94.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tuner 3 White Přenosné rádio | 122.50 € | **116.90 €** | 10.2 % | **5.2 %** | 106.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko HNU61422B | 123.50 € | **117.90 €** | 10.3 % | **5.3 %** | 111.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo StrongVision Solar 4G | 129.00 € | **123.50 €** | 10.0 % | **5.3 %** | 103.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 19.50 € | **14.00 €** | 46.8 % | **5.4 %** | 6.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 872.00 € | **866.50 €** | 15.0 % | **14.3 %** | 866.90 € | stávame sa najlacnejší |
| Salente Combo-4In1-Ss | 135.50 € | **130.00 €** | 14.2 % | **9.6 %** | 130.50 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **27.00 €** | 59.9 % | **32.9 %** | 27.50 € | stávame sa najlacnejší |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 80.50 € | **75.00 €** | 14.9 % | **7.0 %** | 75.50 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 804.50 € | **799.00 €** | 15.0 % | **14.2 %** | 799.50 € | stávame sa najlacnejší |
| Tesla GSM-LITE zesilovač/opakovač 900/1800 MHz - kom... | 184.90 € | **179.50 €** | 11.2 % | **8.0 %** | 179.69 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100 (2-pack) regulácia 2... | 27.00 € | **21.90 €** | 31.2 % | **6.4 %** | 20.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 64.00 € | **58.90 €** | 14.9 % | **5.7 %** | 58.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight projekčné hodiny s rádiom a budíkom | 23.00 € | **17.90 €** | 49.1 % | **16.1 %** | 18.00 € | stávame sa najlacnejší |
| Webová kamera EMEET SmartCam S600L | 65.00 € | **59.90 €** | 14.7 % | **5.7 %** | 60.00 € | stávame sa najlacnejší |
| DOMO DO42326PC | 114.00 € | **108.90 €** | 10.1 % | **5.2 %** | 108.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BDIN38640D | 511.50 € | **506.50 €** | 6.1 % | **5.0 %** | 430.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS7550i White | 107.90 € | **102.90 €** | 10.2 % | **5.1 %** | 74.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9286IB | 257.00 € | **252.00 €** | 10.0 % | **7.9 %** | 252.01 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **25.90 €** | 59.7 % | **33.9 %** | 26.00 € | stávame sa najlacnejší |
| Přenosná turistická toaleta Rebel Active RBA-5102, 2... | 87.90 € | **82.90 €** | 15.1 % | **8.5 %** | 83.00 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, hliní... | 32.50 € | **27.50 €** | 58.6 % | **34.2 %** | 27.90 € | stávame sa najlacnejší |
| G3ferrari G1020400 Pizza trouba, 2 min | 225.50 € | **220.50 €** | 10.2 % | **7.7 %** | 220.90 € | stávame sa najlacnejší |
| Arzopa Portable Monitor Z1FC 16,1" | 119.50 € | **114.50 €** | 14.9 % | **10.0 %** | 114.90 € | stávame sa najlacnejší |
| Bezdrátové čidlo pro měření ovlhčení listů GARNI 098W | 74.50 € | **69.50 €** | 15.1 % | **7.3 %** | 69.90 € | stávame sa najlacnejší |
| Baterie olověná  12V / 65Ah  EMOS bezúdržbový akumul... | 175.00 € | **170.00 €** | 14.9 % | **11.6 %** | 170.50 € | stávame sa najlacnejší |
| Tefal B864SA74 | 102.90 € | **98.00 €** | 10.3 % | **5.1 %** | 97.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 110.90 € | **106.00 €** | 15.2 % | **10.1 %** | 106.50 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 27.90 € | **23.00 €** | 59.0 % | **31.0 %** | 23.50 € | stávame sa najlacnejší |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 272.90 € | **268.00 €** | 9.3 % | **7.4 %** | 268.49 € | stávame sa najlacnejší |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 25.50 € | **20.90 €** | 59.8 % | **31.0 %** | 21.00 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 28.50 € | **23.90 €** | 58.5 % | **32.9 %** | 24.00 € | stávame sa najlacnejší |
| KRUPS KP143GF0 Nescafé Dolce Gusto Mini | 100.50 € | **95.90 €** | 10.5 % | **5.4 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX VisionBook 11T LTE Pro | 107.50 € | **102.90 €** | 10.0 % | **5.3 %** | 96.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO331L | 106.50 € | **101.90 €** | 10.0 % | **5.3 %** | 101.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LONGER RAY5 mini 3,5 W laserový gravír | 104.50 € | **99.90 €** | 14.9 % | **9.8 %** | 100.00 € | stávame sa najlacnejší |
| GODOX CBA-TA0016 Skladacie pozadie | 52.00 € | **47.50 €** | 15.1 % | **5.1 %** | 36.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací pytel DBX BUSHIDO GymPro Junior 80/30cm 15k... | 55.00 € | **50.50 €** | 14.7 % | **5.3 %** | 40.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 56.00 € | **51.50 €** | 14.8 % | **5.5 %** | 44.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer Air PR... | 63.50 € | **59.00 €** | 15.0 % | **6.8 %** | 59.50 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 80.50 € | **76.00 €** | 15.2 % | **8.7 %** | 76.50 € | stávame sa najlacnejší |
| Tlakový stroj HiBREW H7B Cob | 572.50 € | **568.00 €** | 15.0 % | **14.1 %** | 568.50 € | stávame sa najlacnejší |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 182.50 € | **178.00 €** | 15.0 % | **12.2 %** | 178.50 € | stávame sa najlacnejší |
| Tefal IB5100E0 | 93.90 € | **89.50 €** | 10.4 % | **5.3 %** | 81.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Coffio, pákový kávovar, nerez | 98.90 € | **94.50 €** | 10.3 % | **5.4 %** | 94.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 51.90 € | **47.50 €** | 15.1 % | **5.3 %** | 46.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun SI3042VI | 39.90 € | **35.50 €** | 26.8 % | **12.8 %** | 35.90 € | stávame sa najlacnejší |
| Blesk GODOX V100 TTL pre Fujifilm | 336.90 € | **332.50 €** | 15.1 % | **13.5 %** | 332.90 € | stávame sa najlacnejší |
| TEESA AIR FRYER TSA8046W | 52.00 € | **47.90 €** | 14.5 % | **5.5 %** | 44.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrý LED pásik TP-Link Tapo L900-5 5m, 13.5W, 230V... | 21.00 € | **16.90 €** | 30.7 % | **5.2 %** | 15.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK770 nerez | 36.00 € | **31.90 €** | 19.6 % | **6.0 %** | 31.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LIR 60430 | 236.00 € | **231.90 €** | 7.0 % | **5.1 %** | 220.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Arzopa Portable Monitor A1 15,6" | 87.00 € | **82.90 €** | 15.0 % | **9.6 %** | 82.97 € | stávame sa najlacnejší |
| Odšťavovač G21 Gracioso horizontal | 208.00 € | **203.90 €** | 16.2 % | **13.9 %** | 204.00 € | stávame sa najlacnejší |
| Blesk GODOX V1 TTL pre Sony | 160.00 € | **155.90 €** | 14.9 % | **11.9 %** | 156.00 € | stávame sa najlacnejší |
| CANON PIXMA TS6550i White | 92.50 € | **88.50 €** | 10.0 % | **5.3 %** | 50.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K4 ruční, bezdrátový set | 122.90 € | **118.90 €** | 8.7 % | **5.2 %** | 82.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Memory card Samsung EVO Plus microSD 2021 64GB (MB-M... | 51.50 € | **47.50 €** | 14.9 % | **5.9 %** | 16.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI PRO MP273A | 88.50 € | **84.50 €** | 10.4 % | **5.4 %** | 77.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER ES60 reproduktor černý | 94.90 € | **90.90 €** | 10.1 % | **5.4 %** | 89.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO716BL | 84.90 € | **80.90 €** | 10.5 % | **5.3 %** | 80.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Silver - 9154 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 13.90 € | **9.90 €** | 48.1 % | **5.5 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Moza Racing RS050 adaptér na volant + univerzálny HUB | 45.50 € | **41.50 €** | 15.5 % | **5.3 %** | 41.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.90 € | **21.90 €** | 39.1 % | **17.6 %** | 22.00 € | stávame sa najlacnejší |
| Maxxo CD03 rádio | 137.90 € | **133.90 €** | 10.2 % | **7.0 %** | 134.00 € | stávame sa najlacnejší |
| BROTHER HL-L1232W | 117.90 € | **113.90 €** | 10.4 % | **6.6 %** | 114.00 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM1302 černá | 46.90 € | **42.90 €** | 15.4 % | **5.5 %** | 43.00 € | stávame sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 86.50 € | **82.50 €** | 15.2 % | **9.8 %** | 82.88 € | stávame sa najlacnejší |
| Solight LED núdzové osvetlenie, 4W, 200lm, IP65, LiF... | 35.00 € | **31.00 €** | 37.3 % | **21.6 %** | 31.50 € | stávame sa najlacnejší |
| Blesk GODOX iT30Pro pre Olympus | 69.00 € | **65.00 €** | 14.7 % | **8.1 %** | 65.50 € | stávame sa najlacnejší |
| Kávovar HiBREW H11 1450 W | 108.90 € | **105.00 €** | 15.0 % | **10.8 %** | 105.50 € | stávame sa najlacnejší |
| Ottocast CA400-S 4-in-1 Carplay/Android adapter (black) | 72.90 € | **69.00 €** | 15.2 % | **9.1 %** | 69.50 € | stávame sa najlacnejší |
| Solight digitálne hodiny s bluetooth synchronizáciou | 14.90 € | **11.00 €** | 51.8 % | **12.1 %** | 11.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 22.90 € | **19.00 €** | 54.6 % | **28.3 %** | 19.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 22.90 € | **19.00 €** | 54.6 % | **28.3 %** | 19.50 € | stávame sa najlacnejší |
| Solight bezdrôtová nabíjačka, Qi2, MagSafe kompatibilná | 23.90 € | **20.00 €** | 54.2 % | **29.0 %** | 20.50 € | stávame sa najlacnejší |
| Blesk GODOX V1Pro TTL pre Nikon | 269.50 € | **265.90 €** | 15.0 % | **13.4 %** | 266.00 € | stávame sa najlacnejší |
| Televízny adaptér do auta MAX Ottocast CA361-C4 | 55.50 € | **51.90 €** | 15.2 % | **7.7 %** | 52.00 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA411 Vodotesná podložka... | 20.50 € | **16.90 €** | 33.9 % | **10.4 %** | 17.00 € | stávame sa najlacnejší |
| Turecký kávovar HiBREW CM1179_EU | 49.50 € | **45.90 €** | 15.3 % | **6.9 %** | 46.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM200 všesměrový, lightning, iOS | 16.50 € | **12.90 €** | 34.4 % | **5.1 %** | 8.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110M regulácia 230V cez ... | 19.50 € | **15.90 €** | 31.7 % | **7.4 %** | 15.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 5 zásuviek, USB A+C 20W P... | 13.50 € | **9.90 €** | 48.7 % | **9.1 %** | 10.00 € | stávame sa najlacnejší |
| Lamax PartyGo1 Play | 84.00 € | **80.50 €** | 10.1 % | **5.5 %** | 65.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus AS2 mini electric pump | 45.00 € | **41.50 €** | 14.9 % | **5.9 %** | 41.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stropné svietidlo Yeelight C2201C300 | 45.00 € | **41.50 €** | 14.5 % | **5.6 %** | 41.90 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXD bezdrátový, iOS, dosah 60m | 49.00 € | **45.50 €** | 17.2 % | **8.9 %** | 45.90 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXU bezdrátový, USB-C, Android, ... | 49.00 € | **45.50 €** | 17.2 % | **8.9 %** | 45.90 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 137.50 € | **134.00 €** | 15.0 % | **12.1 %** | 134.50 € | stávame sa najlacnejší |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 59.50 € | **56.00 €** | 14.7 % | **8.0 %** | 56.50 € | stávame sa najlacnejší |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 104.50 € | **101.00 €** | 15.1 % | **11.3 %** | 101.50 € | stávame sa najlacnejší |
| Blesk GODOX iT30Pro pre Nikon | 68.50 € | **65.00 €** | 15.2 % | **9.3 %** | 65.50 € | stávame sa najlacnejší |
| Blesk GODOX iT30Pro pre Canon | 68.50 € | **65.00 €** | 15.2 % | **9.3 %** | 65.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 92.50 € | **89.00 €** | 15.1 % | **10.8 %** | 89.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 92.50 € | **89.00 €** | 15.1 % | **10.8 %** | 89.50 € | stávame sa najlacnejší |
| Činková tyč olympijská rovná s ložisky 120cm 9kg 50m... | 55.50 € | **52.00 €** | 14.6 % | **7.4 %** | 52.50 € | stávame sa najlacnejší |
| Guzzanti GZ 90A1 | 132.50 € | **129.00 €** | 10.4 % | **7.4 %** | 129.50 € | stávame sa najlacnejší |
| ROWENTA RO 3923 EA | 78.90 € | **75.50 €** | 10.2 % | **5.4 %** | 66.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 101.90 € | **98.50 €** | 10.3 % | **6.6 %** | 98.79 € | stávame sa najlacnejší |
| Súprava príslušenstva pre vysávač MOVA P50 PU, P50 U | 42.90 € | **39.50 €** | 15.5 % | **6.3 %** | 33.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 40.90 € | **37.50 €** | 18.5 % | **8.7 %** | 37.90 € | stávame sa najlacnejší |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 60.00 € | **56.90 €** | 39.6 % | **32.4 %** | 57.00 € | stávame sa najlacnejší |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 48.00 € | **44.90 €** | 14.5 % | **7.1 %** | 45.00 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 39.00 € | **35.90 €** | 14.9 % | **5.8 %** | 36.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-F8OD všesměrový klopový, XLR | 45.00 € | **41.90 €** | 17.4 % | **9.4 %** | 42.00 € | stávame sa najlacnejší |
| Niceboy Aura 5 ANC | 45.00 € | **41.90 €** | 18.1 % | **10.0 %** | 42.00 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 17.00 € | **13.90 €** | 40.2 % | **14.6 %** | 14.00 € | stávame sa najlacnejší |
| GORENJE TH60E3B | 81.00 € | **77.90 €** | 9.4 % | **5.2 %** | 77.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER T5s subwoofer černý | 129.00 € | **125.90 €** | 10.0 % | **7.4 %** | 125.95 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 99.00 € | **95.90 €** | 14.7 % | **11.1 %** | 96.00 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 121.00 € | **117.90 €** | 14.9 % | **11.9 %** | 118.00 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 87.00 € | **83.90 €** | 14.8 % | **10.8 %** | 84.00 € | stávame sa najlacnejší |
| Inteligentná zásuvka IMOU CE2P, sada 4 ks | 36.90 € | **33.90 €** | 14.9 % | **5.6 %** | 9.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10 lavalier-klopový | 39.90 € | **36.90 €** | 14.4 % | **5.8 %** | 27.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 122.90 € | **119.90 €** | 7.8 % | **5.2 %** | 111.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steba Výrobník Muffinů CM 3 | 60.50 € | **57.50 €** | 10.6 % | **5.1 %** | 55.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Berlingerhaus naparovacia 2200 W Taupe Coll... | 31.90 € | **28.90 €** | 16.7 % | **5.7 %** | 28.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka Spidoo Kruzzel 25628 růžová | 46.50 € | **43.50 €** | 12.6 % | **5.4 %** | 42.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Štúdiové slúchadlá Maono MH700 (čierne) | 34.90 € | **31.90 €** | 15.2 % | **5.3 %** | 31.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 37.50 € | **34.50 €** | 15.6 % | **6.4 %** | 34.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj xTool P3 80W | 6503.50 € | **6500.50 €** | 7.4 % | **7.3 %** | 6500.51 € | stávame sa najlacnejší |
| Akumulátor pre DJI Avata 2 | 121.00 € | **118.00 €** | 14.9 % | **12.1 %** | 118.01 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256A | 46.90 € | **43.90 €** | 15.3 % | **7.9 %** | 44.00 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA301 umývateľná handrič... | 14.90 € | **11.90 €** | 35.0 % | **7.9 %** | 12.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-F8C lavalier-kardioidný | 40.90 € | **37.90 €** | 17.5 % | **8.8 %** | 38.00 € | stávame sa najlacnejší |
| Baterie olověná  12V / 20Ah XTREME bezúdržbový akumu... | 34.90 € | **31.90 €** | 15.5 % | **5.6 %** | 32.00 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4001 300W 12V | 81.90 € | **78.90 €** | 15.2 % | **11.0 %** | 79.00 € | stávame sa najlacnejší |
| Solight prídavná zásuvka pre GSM zásuvku | 38.90 € | **35.90 €** | 46.1 % | **34.8 %** | 36.00 € | stávame sa najlacnejší |
| Zvukový zosilňovač Blitzwolf AS-22, 45 W, Bluetooth ... | 41.90 € | **38.90 €** | 15.1 % | **6.9 %** | 39.00 € | stávame sa najlacnejší |
| Clutch Pedal Moza Racing CRP2 RS067 | 105.90 € | **102.90 €** | 15.1 % | **11.8 %** | 103.00 € | stávame sa najlacnejší |
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 986.90 € | **983.90 €** | 6.4 % | **6.1 %** | 984.00 € | stávame sa najlacnejší |
| Blesk GODOX V480 TTL pre Nikon | 144.50 € | **141.50 €** | 15.0 % | **12.6 %** | 141.90 € | stávame sa najlacnejší |
| Samsung VG-SCFC43SGMXC | 123.50 € | **120.50 €** | 10.3 % | **7.6 %** | 120.90 € | stávame sa najlacnejší |
| MERACH spinningové kolo MR-S26B2-EU (čierne) | 177.50 € | **174.50 €** | 14.9 % | **13.0 %** | 174.90 € | stávame sa najlacnejší |
| Moza Racing modul osi Z AS003 | 96.00 € | **93.00 €** | 14.9 % | **11.3 %** | 93.41 € | stávame sa najlacnejší |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 222.00 € | **219.00 €** | 15.0 % | **13.4 %** | 219.50 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900WD (biela) | 50.00 € | **47.00 €** | 14.6 % | **7.7 %** | 47.50 € | stávame sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 52.00 € | **49.00 €** | 14.7 % | **8.0 %** | 49.50 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 24.00 € | **21.00 €** | 33.5 % | **16.8 %** | 21.50 € | stávame sa najlacnejší |
| Beko TS190340N | 193.00 € | **190.00 €** | 11.4 % | **9.6 %** | 190.50 € | stávame sa najlacnejší |
| Batéria Jupio AAA 1000 mAh (mikrotužkové) 4ks, dobíj... | 11.50 € | **8.60 €** | 46.1 % | **9.2 %** | 8.66 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Car Flame do auta čierny 100ml,... | 15.90 € | **13.00 €** | 31.1 % | **7.2 %** | 13.50 € | stávame sa najlacnejší |
| Solight cestovný adaptér s USB do Spojených štátov, ... | 12.90 € | **10.00 €** | 61.4 % | **25.1 %** | 10.50 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 31.90 € | **29.00 €** | 15.7 % | **5.2 %** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Modul plynu Moza Racing AS016 TQA | 44.90 € | **42.00 €** | 15.2 % | **7.7 %** | 42.05 € | stávame sa najlacnejší |
| Freestyle koloběžka NILS Extreme HS033 černo-červená | 50.90 € | **48.00 €** | 15.2 % | **8.6 %** | 48.50 € | stávame sa najlacnejší |
| GORENJE GV520E15 | 285.50 € | **282.90 €** | 6.0 % | **5.1 %** | 282.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací pytel DBX BUSHIDO Kids 60cm/22cm 7kg pro dě... | 33.50 € | **30.90 €** | 14.9 % | **6.0 %** | 24.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera autodráha GO Škoda Rally | 59.50 € | **56.90 €** | 10.5 % | **5.7 %** | 53.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – strieborné + hnedý ... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 v zlatej farbe s biel... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Vědro 55076 PROFI s ná SOE55076 | 51.50 € | **48.90 €** | 10.6 % | **5.0 %** | 48.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NB614.DG | 55.50 € | **52.90 €** | 10.5 % | **5.3 %** | 52.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER ES20 reproduktor béžový | 51.50 € | **48.90 €** | 11.0 % | **5.4 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 23.50 € | **20.90 €** | 38.1 % | **22.9 %** | 21.00 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie so senzorom Siena, ... | 21.50 € | **18.90 €** | 38.5 % | **21.8 %** | 19.00 € | stávame sa najlacnejší |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 33.50 € | **30.90 €** | 14.5 % | **5.6 %** | 31.00 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 7.4V 60C 2S1P Lipo PC materi... | 43.50 € | **40.90 €** | 15.5 % | **8.6 %** | 41.00 € | stávame sa najlacnejší |
| Koloběžka Spidoo Kruzzel 25630 fialová | 47.50 € | **44.90 €** | 15.1 % | **8.8 %** | 45.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 22.50 € | **19.90 €** | 55.2 % | **37.2 %** | 20.00 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, sivé, 20W, 1... | 14.50 € | **11.90 €** | 37.7 % | **13.0 %** | 12.00 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, plast, 2 zásuvky, hran... | 14.50 € | **11.90 €** | 58.4 % | **30.0 %** | 12.00 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 12.50 € | **9.90 €** | 47.9 % | **17.2 %** | 10.00 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 77.50 € | **74.90 €** | 15.4 % | **11.5 %** | 75.00 € | stávame sa najlacnejší |
| Electrolux EOD3H40BX | 227.50 € | **224.90 €** | 8.0 % | **6.8 %** | 225.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K4 | 136.00 € | **133.50 €** | 7.2 % | **5.2 %** | 93.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Nedis IRON2000 napařovací | 37.00 € | **34.50 €** | 13.2 % | **5.6 %** | 2.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM50 směrový studiový, TRS | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 16.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100M(EU) regulácia 230V ... | 15.00 € | **12.50 €** | 28.9 % | **7.4 %** | 9.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 34.00 € | **31.50 €** | 14.8 % | **6.4 %** | 31.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní přístroj nohou a lýtek Shiatsu, REBEL ACTIVE... | 35.00 € | **32.50 €** | 14.3 % | **6.1 %** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 325 | 253.00 € | **250.50 €** | 6.1 % | **5.1 %** | 250.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierna oceľ) | 30.50 € | **28.00 €** | 14.6 % | **5.2 %** | 28.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WFC710N Black | 71.00 € | **68.50 €** | 9.6 % | **5.8 %** | 68.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 271.50 € | **269.00 €** | 10.2 % | **9.2 %** | 269.39 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 34.00 € | **31.50 €** | 47.3 % | **36.4 %** | 31.90 € | stávame sa najlacnejší |
| CrockPot CSC113X Pomalý hrnec 3,5 l | 75.00 € | **72.50 €** | 10.1 % | **6.4 %** | 72.90 € | stávame sa najlacnejší |
| SALENTE ToastMax | 49.00 € | **46.50 €** | 15.0 % | **9.1 %** | 46.90 € | stávame sa najlacnejší |
| Roborock Q10 PF čistiaci robot (čierny) | 219.00 € | **216.50 €** | 15.0 % | **13.7 %** | 216.90 € | stávame sa najlacnejší |
| Baterie olověná  12V / 12Ah  GETI bezúdržbový akumul... | 40.00 € | **37.50 €** | 14.5 % | **7.4 %** | 37.90 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 14.00 € | **11.50 €** | 39.1 % | **14.3 %** | 11.90 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 37.50 € | **35.00 €** | 39.3 % | **30.1 %** | 35.50 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 41.50 € | **39.00 €** | 20.8 % | **13.5 %** | 39.50 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 17A, 200W, IP20 | 24.50 € | **22.00 €** | 55.4 % | **39.5 %** | 22.50 € | stávame sa najlacnejší |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 15.50 € | **13.00 €** | 49.3 % | **25.2 %** | 13.50 € | stávame sa najlacnejší |
| Čistička vzduchu OPUS Aeroprime X auto, do 35 m2, HE... | 167.50 € | **165.00 €** | 8.2 % | **6.6 %** | 165.50 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.00 €** | 14.7 % | **10.0 %** | 59.50 € | stávame sa najlacnejší |
| Inteligentné hodinky BlitzWolf BW-AT5 (oranžové) | 34.50 € | **32.00 €** | 15.3 % | **6.9 %** | 32.50 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K6 | 110.50 € | **108.00 €** | 8.6 % | **6.2 %** | 108.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 44.50 € | **42.00 €** | 14.5 % | **8.1 %** | 42.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 44.50 € | **42.00 €** | 14.5 % | **8.1 %** | 42.50 € | stávame sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 34.50 € | **32.00 €** | 14.6 % | **6.3 %** | 32.50 € | stávame sa najlacnejší |
| Herný pedál PXN Vector X Clutch | 105.50 € | **103.00 €** | 15.0 % | **12.2 %** | 103.50 € | stávame sa najlacnejší |
| Dvojkanálová nabíjačka lítiových batérií SkyRC PC108... | 226.50 € | **224.00 €** | 15.0 % | **13.7 %** | 224.50 € | stávame sa najlacnejší |
| Kettlebell litinový nastavitelný 9 kg REBEL ACTIVE R... | 46.50 € | **44.00 €** | 15.5 % | **9.3 %** | 44.50 € | stávame sa najlacnejší |
| GUZZANTI GZ 101 | 160.50 € | **158.00 €** | 10.1 % | **8.3 %** | 158.50 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L630 GU10, 3,7W, 230V, c... | 12.00 € | **9.60 €** | 32.2 % | **5.8 %** | 9.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 10.50 € | **8.10 €** | 60.5 % | **23.8 %** | 8.20 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-M17R směrový, TRS, závit 1/4” | 12.90 € | **10.50 €** | 29.3 % | **5.3 %** | 10.90 € | stávame sa najlacnejší |
| Leifheit LinoLift 500 85359 | 54.90 € | **52.50 €** | 9.9 % | **5.1 %** | 44.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Clean Twist M Ergo Mobile | 46.90 € | **44.50 €** | 10.7 % | **5.0 %** | 39.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 28.90 € | **26.50 €** | 15.7 % | **6.1 %** | 22.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo HDO, aktivní venkovní anténa | 54.90 € | **52.50 €** | 10.8 % | **5.9 %** | 51.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AeroStar T300 | 57.90 € | **55.50 €** | 10.1 % | **5.5 %** | 54.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 30.90 € | **28.50 €** | 15.7 % | **6.7 %** | 27.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (biele) | 25.90 € | **23.50 €** | 15.9 % | **5.1 %** | 22.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 26.90 € | **24.50 €** | 41.7 % | **29.1 %** | 24.90 € | stávame sa najlacnejší |
| Beko Mezikus PCSKM | 59.90 € | **57.50 €** | 10.3 % | **5.8 %** | 57.90 € | stávame sa najlacnejší |
| Beko Mezikus PCSKW | 59.90 € | **57.50 €** | 10.3 % | **5.8 %** | 57.90 € | stávame sa najlacnejší |
| Solight účastnícka zásuvka koncová so SAT, útlm: 3dB | 7.10 € | **4.80 €** | 55.6 % | **5.2 %** | 4.90 € | stávame sa najlacnejší |
| CANON PIXMA TS3751i White | 48.00 € | **45.90 €** | 10.2 % | **5.4 %** | 39.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3752i Blue | 48.00 € | **45.90 €** | 10.2 % | **5.4 %** | 40.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 23.00 € | **20.90 €** | 38.4 % | **25.8 %** | 21.00 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 26.00 € | **23.90 €** | 54.3 % | **41.8 %** | 24.00 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierne) | 30.00 € | **27.90 €** | 14.3 % | **6.3 %** | 28.00 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne | 30.00 € | **27.90 €** | 14.4 % | **6.4 %** | 28.00 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 Gold | 30.00 € | **27.90 €** | 14.4 % | **6.4 %** | 28.00 € | stávame sa najlacnejší |
| Diaľkový spúšť GODOX X3 TTL pre Fujifilm | 75.00 € | **72.90 €** | 14.7 % | **11.5 %** | 73.00 € | stávame sa najlacnejší |
| Diaľkový spúšťač GODOX X3 TTL pre Sony | 75.00 € | **72.90 €** | 14.7 % | **11.4 %** | 73.00 € | stávame sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 129.00 € | **126.90 €** | 14.9 % | **13.1 %** | 127.00 € | stávame sa najlacnejší |
| Sonoff S60ZBTPF Inteligentná zásuvka ZigBee (2ks) | 26.50 € | **24.50 €** | 14.6 % | **6.0 %** | 13.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Sada nádobí SWING B 4ks | 36.50 € | **34.50 €** | 11.3 % | **5.2 %** | 25.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE500X AX1500 WiFi 6 Extender | 41.90 € | **39.90 €** | 10.7 % | **5.5 %** | 36.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO 717 MF | 48.50 € | **46.50 €** | 10.0 % | **5.5 %** | 44.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C320WS | 45.90 € | **43.90 €** | 10.3 % | **5.5 %** | 42.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAK4200CT  bezdrátová sluchátka | 38.50 € | **36.50 €** | 10.8 % | **5.0 %** | 35.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0022-S | 22.50 € | **20.50 €** | 16.2 % | **5.9 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-A7H | 20.50 € | **18.50 €** | 19.4 % | **7.7 %** | 18.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WFC510L modrá | 37.50 € | **35.50 €** | 11.0 % | **5.1 %** | 35.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WFC510Y žlutá | 37.50 € | **35.50 €** | 11.0 % | **5.1 %** | 35.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO RFSA240M43WN | 369.50 € | **367.50 €** | 5.6 % | **5.1 %** | 367.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 72.90 € | **70.90 €** | 15.0 % | **11.9 %** | 71.00 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 33.90 € | **31.90 €** | 39.0 % | **30.8 %** | 32.00 € | stávame sa najlacnejší |
| Digitálny merací prístroj Uni-T UT220 | 47.90 € | **45.90 €** | 15.0 % | **10.2 %** | 46.00 € | stávame sa najlacnejší |
| Blender G21 Perfection red | 211.90 € | **209.90 €** | 18.5 % | **17.3 %** | 210.00 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, biela | 24.90 € | **22.90 €** | 59.2 % | **46.4 %** | 23.00 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (zlaté) | 29.90 € | **27.90 €** | 15.3 % | **7.6 %** | 28.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 41.90 € | **39.90 €** | 15.3 % | **9.8 %** | 40.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 41.90 € | **39.90 €** | 15.3 % | **9.8 %** | 40.00 € | stávame sa najlacnejší |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 116.90 € | **114.90 €** | 15.0 % | **13.0 %** | 115.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-M1000 2směrový studiový, XLR | 59.90 € | **57.90 €** | 13.1 % | **9.3 %** | 58.00 € | stávame sa najlacnejší |
| HiBREW 5-in-1 capsule coffee maker H1B-beige(beige) | 106.00 € | **104.00 €** | 13.7 % | **11.6 %** | 104.12 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Black | 49.50 € | **47.50 €** | 16.0 % | **11.3 %** | 47.89 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Red/Black | 49.50 € | **47.50 €** | 16.0 % | **11.3 %** | 47.89 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 209.50 € | **207.50 €** | 15.0 % | **13.9 %** | 207.90 € | stávame sa najlacnejší |
| Solight budík s Qi bezdrôtovú nabíjačkou | 17.50 € | **15.50 €** | 52.0 % | **34.6 %** | 15.90 € | stávame sa najlacnejší |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 17.50 € | **15.50 €** | 52.0 % | **34.6 %** | 15.90 € | stávame sa najlacnejší |
| FoodSaver FFC026X | 41.50 € | **39.50 €** | 11.2 % | **5.8 %** | 39.90 € | stávame sa najlacnejší |
| LEIFHEIT 51016 | 50.50 € | **48.50 €** | 10.5 % | **6.1 %** | 48.90 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **30.50 €** | 59.9 % | **50.1 %** | 30.90 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-M2D všesměrový klopový, Lightning | 24.50 € | **22.50 €** | 17.3 % | **7.7 %** | 22.90 € | stávame sa najlacnejší |
| Magnetické filtre Freewell ND NEO 2 „Standard Day“ –... | 28.50 € | **26.50 €** | 15.6 % | **7.5 %** | 26.90 € | stávame sa najlacnejší |
| Lamp LED Neewer TL120C RGB | 205.50 € | **203.50 €** | 15.0 % | **13.8 %** | 203.90 € | stávame sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 38.50 € | **36.50 €** | 15.3 % | **9.3 %** | 36.90 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 15.00 € | **13.00 €** | 48.7 % | **28.9 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 25.00 € | **23.00 €** | 38.0 % | **26.9 %** | 23.50 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 119.00 € | **117.00 €** | 14.9 % | **13.0 %** | 117.50 € | stávame sa najlacnejší |
| Solight axiálny ventilátor s časovačom | 18.00 € | **16.00 €** | 50.1 % | **33.4 %** | 16.50 € | stávame sa najlacnejší |
| Klimatizace GETI GKH18K hybridní 5kW | 1307.00 € | **1305.00 €** | 7.8 % | **7.6 %** | 1305.50 € | stávame sa najlacnejší |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 52.00 € | **50.00 €** | 15.0 % | **10.6 %** | 50.50 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 121.00 € | **119.00 €** | 14.9 % | **13.0 %** | 119.50 € | stávame sa najlacnejší |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 26.00 € | **24.00 €** | 15.1 % | **6.2 %** | 24.50 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 17 Pro Max so 17 mm držiakom | 74.00 € | **72.00 €** | 14.7 % | **11.6 %** | 72.50 € | stávame sa najlacnejší |
| Solight digitální hodiny s bluetooth synchronizáciou | 16.00 € | **14.00 €** | 49.9 % | **31.1 %** | 14.50 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 61.00 € | **59.00 €** | 15.0 % | **11.3 %** | 59.50 € | stávame sa najlacnejší |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 197.00 € | **195.00 €** | 15.0 % | **13.9 %** | 195.50 € | stávame sa najlacnejší |
| ETA 5180 91010 sklo | 13.99 € | **12.00 €** | 27.7 % | **9.5 %** | 12.50 € | stávame sa najlacnejší |
| Uni-T UT207B digitálny klešťový multimeter | 84.90 € | **83.00 €** | 15.0 % | **12.4 %** | 83.50 € | stávame sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 82.90 € | **81.00 €** | 15.2 % | **12.6 %** | 81.50 € | stávame sa najlacnejší |
| Tefal FW402HE0 | 130.90 € | **129.00 €** | 10.3 % | **8.7 %** | 129.50 € | stávame sa najlacnejší |
| Blender G21 Perfection brown | 211.90 € | **210.00 €** | 18.5 % | **17.4 %** | 210.50 € | stávame sa najlacnejší |
| Blender G21 Perfection Cappuccino | 211.90 € | **210.00 €** | 18.5 % | **17.4 %** | 210.50 € | stávame sa najlacnejší |
| Blender G21 Perfection white | 211.90 € | **210.00 €** | 18.5 % | **17.4 %** | 210.50 € | stávame sa najlacnejší |
| Strong LEAP-S3 Google TV 4K UHD Android TV multimedi... | 70.90 € | **69.00 €** | 15.1 % | **12.0 %** | 69.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 119.90 € | **118.00 €** | 34.9 % | **32.7 %** | 118.50 € | stávame sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 169.90 € | **168.00 €** | 15.0 % | **13.7 %** | 168.50 € | stávame sa najlacnejší |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 10.00 € | **8.10 €** | 29.9 % | **5.2 %** | 8.11 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE81WIFI | 6.60 € | **4.70 €** | 49.9 % | **6.7 %** | 4.80 € | stávame sa najlacnejší |
| Alecto FR-115BW Sada vysílaček pro děti | 35.90 € | **34.00 €** | 10.9 % | **5.0 %** | 29.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS CITY RING-C500 pkojová anténa DVB-T2, DAB, filt... | 21.90 € | **20.00 €** | 15.2 % | **5.2 %** | 19.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 34.90 € | **33.00 €** | 22.1 % | **15.4 %** | 33.50 € | stávame sa najlacnejší |
| Uni-T UT202BT Inteligentný svorkový multimeter | 40.90 € | **39.00 €** | 15.4 % | **10.1 %** | 39.50 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **30.00 €** | 16.9 % | **9.9 %** | 30.50 € | stávame sa najlacnejší |
| D-LINK WiFi 6 AX3000 Router (M30/E) | 38.90 € | **37.00 €** | 10.7 % | **5.3 %** | 37.50 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **59.00 €** | 15.3 % | **11.7 %** | 59.50 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 25.90 € | **24.00 €** | 15.4 % | **6.9 %** | 24.50 € | stávame sa najlacnejší |
| Wireless controler GameSir T4n (white) | 25.90 € | **24.00 €** | 21.2 % | **12.3 %** | 24.50 € | stávame sa najlacnejší |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 54.90 € | **53.00 €** | 15.2 % | **11.2 %** | 53.50 € | stávame sa najlacnejší |
| Skládací síť REBEL ACTIVE pro badminton a další sporty | 30.90 € | **29.00 €** | 15.5 % | **8.4 %** | 29.50 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 281.90 € | **280.00 €** | 10.0 % | **9.3 %** | 280.39 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 7.90 € | **6.10 €** | 36.7 % | **5.5 %** | 6.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight cestovný adaptér do Veľkej Británie, typ G | 6.50 € | **4.70 €** | 59.7 % | **15.4 %** | 4.80 € | stávame sa najlacnejší |
| MAXXO DH 919 Extra Tea | 13.69 € | **12.00 €** | 36.6 % | **19.7 %** | 12.50 € | stávame sa najlacnejší |
| Okuliare XREAL 1S pre rozšírenú realitu | 526.50 € | **524.90 €** | 14.4 % | **14.0 %** | 525.00 € | stávame sa najlacnejší |
| TP-LINK Tapo C110 Home Sec. Wi-Fi Camera | 32.50 € | **30.90 €** | 10.7 % | **5.3 %** | 22.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE305 AC1200 WiFi Range Extender | 37.50 € | **35.90 €** | 10.0 % | **5.3 %** | 32.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Držák fólií (rolí) PARAT ROYAL | 31.50 € | **29.90 €** | 10.9 % | **5.2 %** | 27.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0204 | 20.50 € | **18.90 €** | 14.9 % | **6.0 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 25.50 € | **23.90 €** | 37.8 % | **29.1 %** | 24.00 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 23.50 € | **21.90 €** | 39.1 % | **29.6 %** | 22.00 € | stávame sa najlacnejší |
| Uni-T UT210C Mini digitálny klešťový multimeter | 40.50 € | **38.90 €** | 15.5 % | **10.9 %** | 39.00 € | stávame sa najlacnejší |
| Uni-T UT216A digitálny klešťový multimeter | 54.50 € | **52.90 €** | 15.4 % | **12.0 %** | 53.00 € | stávame sa najlacnejší |
| D-LINK WiFi AX1500 Range Extender (E15) | 42.50 € | **40.90 €** | 11.3 % | **7.1 %** | 41.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 25.50 € | **23.90 €** | 15.0 % | **7.8 %** | 24.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **23.90 €** | 15.0 % | **7.8 %** | 24.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 33.50 € | **31.90 €** | 14.6 % | **9.2 %** | 32.00 € | stávame sa najlacnejší |
| Solight lokátor kľúčenka, Find My kompatibilný | 22.50 € | **20.90 €** | 43.5 % | **33.3 %** | 21.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-BM2021 kondenzátorový směrový pro f... | 20.50 € | **18.90 €** | 17.8 % | **8.6 %** | 19.00 € | stávame sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 24.50 € | **22.90 €** | 14.5 % | **7.0 %** | 23.00 € | stávame sa najlacnejší |
| UV filter Freewell pre DJI Mini 5 Pro | 19.50 € | **17.90 €** | 15.6 % | **6.1 %** | 18.00 € | stávame sa najlacnejší |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 23.50 € | **21.90 €** | 14.8 % | **7.0 %** | 22.00 € | stávame sa najlacnejší |
| Vlákno HP ASA Creality (čierne) | 23.50 € | **21.90 €** | 14.6 % | **6.8 %** | 22.00 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 16.50 € | **14.90 €** | 39.3 % | **25.8 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časov... | 12.50 € | **10.90 €** | 53.3 % | **33.7 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 15.50 € | **13.90 €** | 55.0 % | **39.0 %** | 14.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.50 € | **8.90 €** | 40.2 % | **18.8 %** | 9.00 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 120.50 € | **118.90 €** | 14.8 % | **13.3 %** | 119.00 € | stávame sa najlacnejší |
| Uni-T UT206B digitálny klešťový multimeter | 69.50 € | **67.90 €** | 14.8 % | **12.1 %** | 68.00 € | stávame sa najlacnejší |
| Tefal FW501815 | 136.50 € | **134.90 €** | 10.1 % | **8.8 %** | 135.00 € | stávame sa najlacnejší |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 101.50 € | **99.90 €** | 14.8 % | **13.0 %** | 100.00 € | stávame sa najlacnejší |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 76.50 € | **74.90 €** | 14.8 % | **12.4 %** | 75.00 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 108.50 € | **106.90 €** | 14.9 % | **13.2 %** | 107.00 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 24.50 € | **23.00 €** | 12.2 % | **5.3 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 76.00 € | **74.50 €** | 7.2 % | **5.1 %** | 62.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný digitálny multimeter UNI-T UT123D | 22.00 € | **20.50 €** | 15.2 % | **7.3 %** | 19.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (žltý) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (zelený) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (ružový) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria Jupio C 5000mAh (malé monočlánky) 2ks, dobíj... | 20.00 € | **18.50 €** | 17.7 % | **8.8 %** | 18.70 € | stávame sa najlacnejší |
| Tefal RK812110 | 109.50 € | **108.00 €** | 10.2 % | **8.7 %** | 108.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Honey Day 160 ml | 12.00 € | **10.50 €** | 22.4 % | **7.1 %** | 10.90 € | stávame sa najlacnejší |
| Leifheit Perfect Steam Air Board L/Uni | 15.00 € | **13.50 €** | 21.3 % | **9.2 %** | 13.90 € | stávame sa najlacnejší |
| Leifheit Thermo Reflect L/Universal | 15.00 € | **13.50 €** | 21.3 % | **9.2 %** | 13.90 € | stávame sa najlacnejší |
| Leifheit 81520 Pegasus 200 Solid | 38.00 € | **36.50 €** | 14.2 % | **9.7 %** | 36.90 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 16.00 € | **14.50 €** | 38.4 % | **25.4 %** | 14.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **34.50 €** | 38.3 % | **32.5 %** | 34.90 € | stávame sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 24.00 € | **22.50 €** | 14.6 % | **7.5 %** | 22.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 26.00 € | **24.50 €** | 42.8 % | **34.6 %** | 24.90 € | stávame sa najlacnejší |
| AMICA SIS 512 TCX | 505.00 € | **503.50 €** | 7.0 % | **6.7 %** | 503.90 € | stávame sa najlacnejší |
| Candy CFT610/5X/1 | 49.50 € | **48.00 €** | 10.5 % | **7.2 %** | 48.49 € | stávame sa najlacnejší |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 23.50 € | **22.00 €** | 36.1 % | **27.4 %** | 22.50 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 20.50 € | **19.00 €** | 48.5 % | **37.7 %** | 19.50 € | stávame sa najlacnejší |
| Tefal OptiGrill GC7P0810 | 99.50 € | **98.00 €** | 10.5 % | **8.8 %** | 98.50 € | stávame sa najlacnejší |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 34.50 € | **33.00 €** | 55.5 % | **48.7 %** | 33.50 € | stávame sa najlacnejší |
| Blesk GODOX TT350 TTL pre Olympus | 82.50 € | **81.00 €** | 14.9 % | **12.8 %** | 81.50 € | stávame sa najlacnejší |
| Colmi V69 smartwatch (black) | 40.50 € | **39.00 €** | 14.9 % | **10.7 %** | 39.50 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (čierny) | 182.50 € | **181.00 €** | 14.9 % | **14.0 %** | 181.50 € | stávame sa najlacnejší |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 17.50 € | **16.00 €** | 15.6 % | **5.7 %** | 16.50 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 27.50 € | **26.00 €** | 15.7 % | **9.4 %** | 26.50 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 17.50 € | **16.00 €** | 15.8 % | **5.8 %** | 16.50 € | stávame sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 17.50 € | **16.00 €** | 15.9 % | **5.9 %** | 16.50 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT811 (čierne) | 20.50 € | **19.00 €** | 15.4 % | **7.0 %** | 19.50 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (červené) | 36.50 € | **35.00 €** | 15.2 % | **10.5 %** | 35.50 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 36.50 € | **35.00 €** | 15.2 % | **10.5 %** | 35.50 € | stávame sa najlacnejší |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 37.50 € | **36.00 €** | 15.0 % | **10.4 %** | 36.50 € | stávame sa najlacnejší |
| Fixed Creator Tripod FIXCRT-BK | 43.50 € | **42.00 €** | 10.5 % | **6.7 %** | 42.50 € | stávame sa najlacnejší |
| Vodotesný batoh na fotoaparát Puluz PU5011B (čierny) | 21.50 € | **20.00 €** | 15.9 % | **7.8 %** | 20.50 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (black) | 44.50 € | **43.00 €** | 15.6 % | **11.7 %** | 43.50 € | stávame sa najlacnejší |
| Letové pedále MOZA Racing AS019 | 349.50 € | **348.00 €** | 8.1 % | **7.7 %** | 348.50 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 252.90 € | **251.50 €** | 10.6 % | **10.0 %** | 251.90 € | stávame sa najlacnejší |
| Koloběžka s pumpovanými koly NILS Extreme HC300 červená | 116.90 € | **115.50 €** | 14.0 % | **12.6 %** | 115.90 € | stávame sa najlacnejší |
| Rajnica Berlingerhaus s mramorovým povrchom 16 cm Bu... | 13.90 € | **12.50 €** | 18.3 % | **6.4 %** | 12.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-81162 20m, 3 zásuvky | 46.90 € | **45.50 €** | 9.2 % | **5.9 %** | 40.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Onyx BS2400 | 30.90 € | **29.50 €** | 10.1 % | **5.1 %** | 25.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.B | 34.90 € | **33.50 €** | 10.3 % | **5.9 %** | 29.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9258M | 36.90 € | **35.50 €** | 10.4 % | **6.2 %** | 33.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.NBL | 34.90 € | **33.50 €** | 10.3 % | **5.9 %** | 31.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada litinových závaží 4x1,25kg, 51mm, REBEL ACTIVE ... | 18.90 € | **17.50 €** | 15.9 % | **7.3 %** | 15.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet Portable NBP003LBL | 34.90 € | **33.50 €** | 10.3 % | **5.9 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Memory card Samsung EVO Plus microSD 2021 64GB (MB-M... | 17.90 € | **16.50 €** | 15.1 % | **6.1 %** | 16.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10UC lavalier-klopový | 29.90 € | **28.50 €** | 10.8 % | **5.7 %** | 28.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Classic Siena 180 Easy | 26.90 € | **25.50 €** | 11.6 % | **5.8 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **26.50 €** | 11.6 % | **6.0 %** | 26.90 € | stávame sa najlacnejší |
| Pedrini MyMoka Indukce modrá 3 porce | 40.90 € | **39.50 €** | 10.3 % | **6.5 %** | 39.90 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 401.90 € | **400.50 €** | 7.3 % | **6.9 %** | 400.90 € | stávame sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 404.90 € | **403.50 €** | 7.1 % | **6.8 %** | 403.90 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 403.90 € | **402.50 €** | 8.1 % | **7.7 %** | 402.90 € | stávame sa najlacnejší |
| Beko BMTD37146W | 384.90 € | **383.50 €** | 6.9 % | **6.5 %** | 383.90 € | stávame sa najlacnejší |
| Whirlpool OMSR58CU1SX | 331.90 € | **330.50 €** | 6.2 % | **5.8 %** | 330.90 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.90 € | **8.70 €** | 25.6 % | **10.3 %** | 8.80 € | stávame sa najlacnejší |
| Solight závesné príslušenstvo pre LED panely 60x60, ... | 5.00 € | **3.80 €** | 39.2 % | **5.8 %** | 3.90 € | stávame sa najlacnejší |
| Solight vypínač do vlhka, jednopólový, biely | 7.30 € | **6.10 €** | 59.1 % | **33.0 %** | 6.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 11.00 € | **9.80 €** | 45.4 % | **29.6 %** | 9.90 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1016 | 20.00 € | **18.90 €** | 14.8 % | **8.4 %** | 19.00 € | stávame sa najlacnejší |
| Solight wifi Smart LED svetelný pás, RGB, 5m, sada s... | 29.00 € | **27.90 €** | 47.5 % | **41.9 %** | 28.00 € | stávame sa najlacnejší |
| Resto 93511 Pánev 28 cm | 34.00 € | **32.90 €** | 10.3 % | **6.7 %** | 33.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **34.90 €** | 38.3 % | **34.0 %** | 35.00 € | stávame sa najlacnejší |
| Habotest HT126A Digitálny univerzálny multimeter | 26.00 € | **24.90 €** | 14.8 % | **10.0 %** | 25.00 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 55.00 € | **53.90 €** | 14.9 % | **12.7 %** | 54.00 € | stávame sa najlacnejší |
| FIXED MagClick 2 s MgSf 15W FIXMCLI2-BK | 32.00 € | **30.90 €** | 10.1 % | **6.4 %** | 31.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze GTR 3 Pro (striebro) | 29.00 € | **27.90 €** | 14.8 % | **10.5 %** | 28.00 € | stávame sa najlacnejší |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 52.00 € | **50.90 €** | 14.5 % | **12.1 %** | 51.00 € | stávame sa najlacnejší |
| Nabíječka baterií GP ReCyko B423 4× AA GP ReCyko 210... | 18.00 € | **16.90 €** | 14.0 % | **7.0 %** | 17.00 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 22.00 € | **20.90 €** | 14.7 % | **9.0 %** | 21.00 € | stávame sa najlacnejší |
| Puzdro Freewell pre Iphone 15 PRO MAX so 17 mm držiakom | 46.00 € | **44.90 €** | 14.4 % | **11.7 %** | 45.00 € | stávame sa najlacnejší |
| Herné slúchadlá Onikuma B2 (čierne) | 22.00 € | **20.90 €** | 14.2 % | **8.5 %** | 21.00 € | stávame sa najlacnejší |
| Batéria AA MediaRange nabíjateľné USB-C Li-Ion , 1,5... | 14.00 € | **12.90 €** | 14.3 % | **5.3 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria AAA MediaRange nabíjateľné USB-C Li-Ion , 1,... | 14.00 € | **12.90 €** | 14.3 % | **5.3 %** | 12.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vákuovacie fólie G21 rola 20 x 600 cm 2 ks | 10.50 € | **9.40 €** | 17.6 % | **5.3 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Honey Night 160 ml | 12.00 € | **10.90 €** | 22.4 % | **11.2 %** | 11.00 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Indie, typ D | 6.50 € | **5.40 €** | 59.7 % | **32.6 %** | 5.50 € | stávame sa najlacnejší |
| Inteligentný WiFi nástenný spínač SONOFF M5-1C-80 (1... | 17.00 € | **15.90 €** | 15.2 % | **7.7 %** | 16.00 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 24.50 € | **23.50 €** | 11.3 % | **6.7 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-8116 10m, 3 zásuvky | 29.90 € | **28.90 €** | 8.8 % | **5.1 %** | 23.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T3U Plus WiFi Adaptér | 19.90 € | **18.90 €** | 10.7 % | **5.1 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hasicí přístroj práškový 1 kg ABC | 16.50 € | **15.50 €** | 15.1 % | **8.2 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set PowerClean M+náhr. zdarma | 20.50 € | **19.50 €** | 10.7 % | **5.3 %** | 17.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-XL ( 44 - 47 ) | 14.50 € | **13.50 €** | 14.2 % | **6.4 %** | 11.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 15.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.90 € | **10.90 €** | 15.6 % | **5.9 %** | 9.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WA854RE Wireless N Extender | 15.50 € | **14.50 €** | 13.2 % | **5.9 %** | 13.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá, PO | 21.50 € | **20.50 €** | 12.3 % | **7.0 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Vintage 2868/05, modrá | 39.50 € | **38.50 €** | 8.7 % | **6.0 %** | 38.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Girmi PE1600 | 16.50 € | **15.50 €** | 12.4 % | **5.6 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-V01 stereofonní kondenzátorový,TRS | 12.00 € | **11.00 €** | 15.0 % | **5.5 %** | 11.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný stojan ONIKUMA ST-2 (biely) | 13.90 € | **12.90 €** | 16.3 % | **7.9 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stojan na slúchadlá ONIKUMA ST-2 čierny | 13.90 € | **12.90 €** | 15.1 % | **6.8 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper PLA Filament Creality (Grey) | 12.50 € | **11.50 €** | 16.4 % | **7.1 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.90 € | **17.90 €** | 11.3 % | **5.5 %** | 17.99 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom biele drevo 200 ml | 14.90 € | **13.90 €** | 21.6 % | **13.5 %** | 14.00 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml - grafitovo modrý | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 21.00 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – eukalyptovo zelený | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 21.00 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 21.00 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – pieskovo béžový | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 21.00 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 21.00 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – pieskovo béžová | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 21.00 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 25.90 € | **24.90 €** | 22.6 % | **17.8 %** | 25.00 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 25.90 € | **24.90 €** | 22.6 % | **17.8 %** | 25.00 € | stávame sa najlacnejší |
| Recenzia zariadenia Uni-T RCD UT582+ | 104.90 € | **103.90 €** | 15.1 % | **14.0 %** | 104.00 € | stávame sa najlacnejší |
| Solight teplomer | 10.50 € | **9.50 €** | 50.3 % | **36.0 %** | 9.60 € | stávame sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 55.90 € | **54.90 €** | 15.4 % | **13.3 %** | 55.00 € | stávame sa najlacnejší |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.90 € | **16.90 €** | 16.2 % | **9.7 %** | 17.00 € | stávame sa najlacnejší |
| Blender G21 Excellent brown | 232.90 € | **231.90 €** | 18.3 % | **17.8 %** | 232.00 € | stávame sa najlacnejší |
| Blender G21 Excellent Cappuccino | 232.90 € | **231.90 €** | 18.3 % | **17.8 %** | 232.00 € | stávame sa najlacnejší |
| Blender G21 Excellent Graphite Black | 232.90 € | **231.90 €** | 18.3 % | **17.8 %** | 232.00 € | stávame sa najlacnejší |
| Blender G21 Excellent red | 232.90 € | **231.90 €** | 18.3 % | **17.8 %** | 232.00 € | stávame sa najlacnejší |
| Blender G21 Excellent white | 232.90 € | **231.90 €** | 18.3 % | **17.8 %** | 232.00 € | stávame sa najlacnejší |
| Blender G21 Experience White | 253.90 € | **252.90 €** | 18.3 % | **17.8 %** | 253.00 € | stávame sa najlacnejší |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 36.90 € | **35.90 €** | 10.4 % | **7.4 %** | 36.00 € | stávame sa najlacnejší |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 18.90 € | **17.90 €** | 15.2 % | **9.1 %** | 18.00 € | stávame sa najlacnejší |
| Inteligentný dotykový nástenný vypínač Sonoff TX T5 ... | 22.90 € | **21.90 €** | 15.1 % | **10.0 %** | 22.00 € | stávame sa najlacnejší |
| Powerbanka EMOS AlphaQ3, 10 000 mAh, 22,5 W, černá | 15.90 € | **14.90 €** | 15.6 % | **8.4 %** | 15.00 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (biela) | 85.90 € | **84.90 €** | 15.1 % | **13.7 %** | 85.00 € | stávame sa najlacnejší |
| Akupresurní podložka REBEL ACTIVE RBA-6013-GL 130x50... | 32.90 € | **31.90 €** | 15.3 % | **11.8 %** | 32.00 € | stávame sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4513 WINDSURFING  3... | 351.50 € | **350.50 €** | 15.0 % | **14.6 %** | 350.76 € | stávame sa najlacnejší |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 14.50 € | **13.50 €** | 12.9 % | **5.1 %** | 13.78 € | stávame sa najlacnejší |
| Ariete Capri Citrusovač 413/CA | 67.00 € | **66.00 €** | 7.8 % | **6.2 %** | 66.36 € | stávame sa najlacnejší |
| DOMO DO42329PC | 117.50 € | **116.50 €** | 10.3 % | **9.3 %** | 116.89 € | stávame sa najlacnejší |
| Tefal BL16GE30 | 58.50 € | **57.50 €** | 10.3 % | **8.4 %** | 57.89 € | stávame sa najlacnejší |
| DOMO DO354VD | 130.50 € | **129.50 €** | 8.5 % | **7.7 %** | 129.89 € | stávame sa najlacnejší |
| DOMO DO252SV | 110.50 € | **109.50 €** | 10.2 % | **9.2 %** | 109.89 € | stávame sa najlacnejší |
| DOMO DO42102SV | 99.50 € | **98.50 €** | 10.1 % | **9.0 %** | 98.89 € | stávame sa najlacnejší |
| PRIMO PR406IM | 128.50 € | **127.50 €** | 10.2 % | **9.3 %** | 127.89 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 282.00 € | **281.00 €** | 8.0 % | **7.6 %** | 281.39 € | stávame sa najlacnejší |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 69.00 € | **68.00 €** | 8.3 % | **6.7 %** | 68.39 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 64.50 € | **63.50 €** | 6.7 % | **5.1 %** | 63.89 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 44.50 € | **43.50 €** | 11.9 % | **9.4 %** | 43.89 € | stávame sa najlacnejší |
| Kaon MZ-52, satelitní přijímač Skylink | 60.50 € | **59.50 €** | 7.3 % | **5.6 %** | 59.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 124.00 € | **123.00 €** | 12.7 % | **11.7 %** | 123.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 196.50 € | **195.50 €** | 11.4 % | **10.9 %** | 195.89 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 18.50 € | **17.50 €** | 39.0 % | **31.5 %** | 17.90 € | stávame sa najlacnejší |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 42.50 € | **41.50 €** | 18.9 % | **16.1 %** | 41.90 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 17.50 € | **16.50 €** | 43.6 % | **35.4 %** | 16.90 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 24.50 € | **23.50 €** | 42.7 % | **36.9 %** | 23.90 € | stávame sa najlacnejší |
| Maxxo vodní filtry 3+1 | 12.50 € | **11.50 €** | 17.2 % | **7.8 %** | 11.90 € | stávame sa najlacnejší |
| DOMO DO754K | 36.50 € | **35.50 €** | 10.4 % | **7.4 %** | 35.90 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 799.50 € | **798.50 €** | 15.0 % | **14.9 %** | 798.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **44.50 €** | 15.5 % | **13.0 %** | 44.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.50 € | **44.50 €** | 15.5 % | **13.0 %** | 44.90 € | stávame sa najlacnejší |
| Niceboy Podsie 4 POP Black | 15.50 € | **14.50 €** | 16.9 % | **9.4 %** | 14.90 € | stávame sa najlacnejší |
| Niceboy Podsie 4 POP White | 15.50 € | **14.50 €** | 16.8 % | **9.3 %** | 14.90 € | stávame sa najlacnejší |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 44.50 € | **43.50 €** | 15.4 % | **12.8 %** | 43.90 € | stávame sa najlacnejší |
| Čelovka 2v1 Superfire TH04 – 600 lm, USB-C, 5 režimo... | 12.50 € | **11.50 €** | 16.1 % | **6.9 %** | 11.90 € | stávame sa najlacnejší |
| Ležérny cvičebný bicykel MERACH MR-S08B1-EU (čierny) | 208.50 € | **207.50 €** | 15.1 % | **14.5 %** | 207.90 € | stávame sa najlacnejší |
| Ležérny cvičebný bicykel MERACH MR-S23B1-EU (čierny) | 232.50 € | **231.50 €** | 15.0 % | **14.5 %** | 231.90 € | stávame sa najlacnejší |
| Elektrická pánev do auta 20cm x 4cm 150W 12V | 42.00 € | **41.00 €** | 14.5 % | **11.7 %** | 41.50 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom tmavé drevo 200 ml | 14.00 € | **13.00 €** | 14.3 % | **6.1 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.00 €** | 47.4 % | **39.2 %** | 17.50 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.00 €** | 47.4 % | **39.2 %** | 17.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 27.00 € | **26.00 €** | 47.2 % | **41.8 %** | 26.50 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 71.00 € | **70.00 €** | 14.6 % | **13.0 %** | 70.50 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 89.00 € | **88.00 €** | 14.2 % | **12.9 %** | 88.50 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 245.00 € | **244.00 €** | 14.7 % | **14.3 %** | 244.50 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 94.00 € | **93.00 €** | 14.9 % | **13.6 %** | 93.50 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.00 € | **78.00 €** | 13.9 % | **12.5 %** | 78.50 € | stávame sa najlacnejší |
| Solight digitálny kapesny kompresor mini | 38.00 € | **37.00 €** | 15.3 % | **12.2 %** | 37.50 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 28.00 € | **27.00 €** | 14.5 % | **10.4 %** | 27.50 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000A | 131.00 € | **130.00 €** | 14.7 % | **13.8 %** | 130.50 € | stávame sa najlacnejší |
| Uni-T UT362H Anemometer | 170.00 € | **169.00 €** | 14.9 % | **14.2 %** | 169.50 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT701 | 193.00 € | **192.00 €** | 14.7 % | **14.1 %** | 192.50 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/W | 17.00 € | **16.00 €** | 14.8 % | **8.0 %** | 16.50 € | stávame sa najlacnejší |
| Solight doplnkový pohybový senzor pre GSM alarm 1D11 | 32.00 € | **31.00 €** | 41.0 % | **36.6 %** | 31.50 € | stávame sa najlacnejší |
| Rozváděč R-HW-SW16P-AP (pro Huawei) | 975.00 € | **974.00 €** | 15.0 % | **14.9 %** | 974.50 € | stávame sa najlacnejší |
| Solární regulátor MPPT Antik Water Heater PWH 9kW (p... | 1025.00 € | **1024.00 €** | 15.0 % | **14.9 %** | 1024.50 € | stávame sa najlacnejší |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 89.00 € | **88.00 €** | 13.4 % | **12.1 %** | 88.50 € | stávame sa najlacnejší |
| Detektor kovov UNI-T UT387E | 42.00 € | **41.00 €** | 7.8 % | **5.3 %** | 41.50 € | stávame sa najlacnejší |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 21.00 € | **20.00 €** | 46.4 % | **39.5 %** | 20.50 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 29.00 € | **28.00 €** | 27.6 % | **23.2 %** | 28.50 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i4 - white | 162.00 € | **161.00 €** | 7.3 % | **6.6 %** | 161.50 € | stávame sa najlacnejší |
| Vákuovačka G21 Onyx | 58.00 € | **57.00 €** | 16.4 % | **14.4 %** | 57.50 € | stávame sa najlacnejší |
| Blesk GODOX TT350 TTL pre Canon | 82.00 € | **81.00 €** | 14.7 % | **13.3 %** | 81.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Colmi P86 (strieborné) | 21.00 € | **20.00 €** | 14.6 % | **9.1 %** | 20.50 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 211.00 € | **210.00 €** | 13.1 % | **12.5 %** | 210.50 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 17.00 € | **16.00 €** | 29.8 % | **22.1 %** | 16.50 € | stávame sa najlacnejší |
| Dvojkanálový nástenný spínač SONOFF MINI-2GS-E Matter. | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.50 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 17.00 € | **16.00 €** | 13.4 % | **6.7 %** | 16.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 38.00 € | **37.00 €** | 11.9 % | **8.9 %** | 37.50 € | stávame sa najlacnejší |
| Filtrácia CPL Freewell do DJI Air 3S | 18.00 € | **17.00 €** | 13.6 % | **7.3 %** | 17.50 € | stávame sa najlacnejší |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 115.00 € | **114.00 €** | 10.8 % | **9.8 %** | 114.50 € | stávame sa najlacnejší |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 121.00 € | **120.00 €** | 11.2 % | **10.3 %** | 120.50 € | stávame sa najlacnejší |
| JBL Tune 670NC white | 64.00 € | **63.00 €** | 11.0 % | **9.3 %** | 63.50 € | stávame sa najlacnejší |
| LED lampa RGB Puluz pre fotoaparát PU560B | 16.00 € | **15.00 €** | 13.7 % | **6.6 %** | 15.50 € | stávame sa najlacnejší |
| Filament Anycubic TPU (sivý) 1 kg | 21.00 € | **20.00 €** | 14.3 % | **8.8 %** | 20.50 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 112.00 € | **111.00 €** | 9.4 % | **8.4 %** | 111.50 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 135.00 € | **134.00 €** | 7.7 % | **6.9 %** | 134.50 € | stávame sa najlacnejší |
| REBEL Micropower 1000 | 88.00 € | **87.00 €** | 10.7 % | **9.4 %** | 87.50 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 84.00 € | **83.00 €** | 13.3 % | **11.9 %** | 83.50 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 80.00 € | **79.00 €** | 7.9 % | **6.5 %** | 79.50 € | stávame sa najlacnejší |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 90.00 € | **89.00 €** | 13.2 % | **12.0 %** | 89.50 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-1400-24 UPS 1400W 24V čist... | 228.00 € | **227.00 €** | 8.9 % | **8.4 %** | 227.50 € | stávame sa najlacnejší |
| EMEET SmartCam S600 webová kamera | 52.00 € | **51.00 €** | 14.6 % | **12.4 %** | 51.50 € | stávame sa najlacnejší |
| Webová kamera EMEET Piko (čierna) | 51.00 € | **50.00 €** | 14.9 % | **12.7 %** | 50.50 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 219.00 € | **218.00 €** | 14.5 % | **14.0 %** | 218.50 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 197.00 € | **196.00 €** | 10.7 % | **10.1 %** | 196.50 € | stávame sa najlacnejší |
| Přípravek do chemických toalet HAPPY GREEN Blue 2l | 13.00 € | **12.00 €** | 14.9 % | **6.0 %** | 12.50 € | stávame sa najlacnejší |
| TP-LINK Archer T3U WiFi Adaptér | 16.90 € | **15.90 €** | 12.3 % | **5.6 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Nubela 2569 90100, bílý | 27.99 € | **27.00 €** | 52.5 % | **47.1 %** | 27.32 € | stávame sa najlacnejší |
| Baterie LiFePO4 51,2V 100Ah GETI GBLW-51-100V2 nástěnná | 1028.90 € | **1028.00 €** | 15.0 % | **14.9 %** | 1028.50 € | stávame sa najlacnejší |
| CrockPot CSC062X | 155.90 € | **155.00 €** | 6.0 % | **5.4 %** | 155.39 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 124.90 € | **124.00 €** | 7.6 % | **6.9 %** | 124.49 € | stávame sa najlacnejší |
| Ultrazvukový merací prístroj na hrúbku Uni-T UT345A | 86.90 € | **86.00 €** | 7.4 % | **6.3 %** | 86.50 € | stávame sa najlacnejší |
| Tester batérií Uni-T UT675A | 86.90 € | **86.00 €** | 15.0 % | **13.8 %** | 86.50 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191T | 70.90 € | **70.00 €** | 12.7 % | **11.3 %** | 70.50 € | stávame sa najlacnejší |
| Merač LCR Uni-T UT612 | 137.90 € | **137.00 €** | 15.1 % | **14.3 %** | 137.50 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600 | 73.90 € | **73.00 €** | 14.9 % | **13.5 %** | 73.50 € | stávame sa najlacnejší |
| AI-NC-D50L3-M-0360 5.0 Mpix venkovní dome IP kamera ... | 151.90 € | **151.00 €** | 15.1 % | **14.5 %** | 151.50 € | stávame sa najlacnejší |
| AI-NC-MC40-VMW-0280 4.0 Mpix vnitřní IP mini kamera ... | 143.90 € | **143.00 €** | 15.1 % | **14.4 %** | 143.50 € | stávame sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 122.90 € | **122.00 €** | 13.8 % | **13.0 %** | 122.50 € | stávame sa najlacnejší |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 102.90 € | **102.00 €** | 15.2 % | **14.2 %** | 102.50 € | stávame sa najlacnejší |
| CP-UNC-TS25ZML4-M 2.0Mpix venkovní IP kamera s IR | 204.90 € | **204.00 €** | 15.1 % | **14.6 %** | 204.50 € | stávame sa najlacnejší |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 70.90 € | **70.00 €** | 15.3 % | **13.8 %** | 70.50 € | stávame sa najlacnejší |
| Hohem microphone (2TX + 1RX + charging case) | 65.90 € | **65.00 €** | 12.4 % | **10.9 %** | 65.50 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO BT 2 gray 0001/3973 reproduktor... | 169.90 € | **169.00 €** | 15.1 % | **14.5 %** | 169.50 € | stávame sa najlacnejší |
| FINLUX 32FFI5670 ANDROID TV | 243.90 € | **243.00 €** | 15.1 % | **14.7 %** | 243.50 € | stávame sa najlacnejší |
| FINLUX 32FFI5762 SMART TV FULL HD TIVO | 243.90 € | **243.00 €** | 15.1 % | **14.7 %** | 243.50 € | stávame sa najlacnejší |
| IKUSI NBS 704-C48 - domovní zesilovač | 93.90 € | **93.00 €** | 15.2 % | **14.1 %** | 93.50 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 102.90 € | **102.00 €** | 7.8 % | **6.8 %** | 102.50 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 77.90 € | **77.00 €** | 15.0 % | **13.7 %** | 77.50 € | stávame sa najlacnejší |
| Fixed Video kabel FIXHU-CHDMI-GR | 15.90 € | **15.00 €** | 11.9 % | **5.6 %** | 11.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI držák do auta s Magsafe AMS06BK | 15.90 € | **15.00 €** | 11.3 % | **5.0 %** | 14.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight rozbočka kocka, 3x 16A + USB A+C, biela, vyp... | 10.00 € | **9.10 €** | 48.6 % | **35.3 %** | 9.20 € | stávame sa najlacnejší |
| Leifheit Perfect Steam Air Board S/M | 14.90 € | **14.00 €** | 12.1 % | **5.3 %** | 14.39 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 680 ml, nerezová | 11.90 € | **11.00 €** | 19.0 % | **10.0 %** | 11.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.00 €** | 47.3 % | **37.0 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.00 €** | 47.3 % | **37.0 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.90 € | **14.00 €** | 12.0 % | **5.2 %** | 14.50 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, nerezová | 11.90 € | **11.00 €** | 19.0 % | **10.0 %** | 11.50 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, oceľovo šedá | 11.90 € | **11.00 €** | 19.0 % | **10.0 %** | 11.50 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.90 € | **10.00 €** | 46.2 % | **34.2 %** | 10.50 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.90 € | **11.00 €** | 45.7 % | **34.7 %** | 11.50 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 13.90 € | **13.00 €** | 39.9 % | **30.8 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.90 € | **10.00 €** | 46.7 % | **34.6 %** | 10.50 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.90 € | **14.00 €** | 47.7 % | **38.8 %** | 14.50 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 12.90 € | **12.00 €** | 40.4 % | **30.6 %** | 12.50 € | stávame sa najlacnejší |
| Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps | 13.90 € | **13.00 €** | 16.5 % | **9.0 %** | 13.50 € | stávame sa najlacnejší |
| Smart Switch WiFi + RF 433 Sonoff T2 EU TX (3-channe... | 12.90 € | **12.00 €** | 15.3 % | **7.2 %** | 12.50 € | stávame sa najlacnejší |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.90 € | **13.00 €** | 20.3 % | **12.6 %** | 13.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 14.90 € | **14.00 €** | 16.8 % | **9.8 %** | 14.50 € | stávame sa najlacnejší |
| Ali pouzdro Mag-Skin iP17 ProMax PAS0029 | 14.90 € | **14.00 €** | 11.8 % | **5.0 %** | 14.50 € | stávame sa najlacnejší |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 10.90 € | **10.00 €** | 41.8 % | **30.1 %** | 10.50 € | stávame sa najlacnejší |
| Roadstar TRA-2989 Přenosné vícepásmové r | 14.90 € | **14.00 €** | 12.3 % | **5.5 %** | 14.50 € | stávame sa najlacnejší |
| Marvo HG8928 sluchátka s mikrofonem | 12.90 € | **12.00 €** | 13.1 % | **5.2 %** | 12.50 € | stávame sa najlacnejší |
| HP 15,6" Taška Prelude | 14.90 € | **14.00 €** | 14.2 % | **7.3 %** | 14.50 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.90 € | **10.00 €** | 17.1 % | **7.4 %** | 10.50 € | stávame sa najlacnejší |
| Superfire TH04-S,1000lmm USB-C čelová baterka | 14.90 € | **14.00 €** | 15.7 % | **8.7 %** | 14.50 € | stávame sa najlacnejší |
| Podložka na cvičení, jógu a fitness 1,5 cm Rebel Act... | 12.90 € | **12.00 €** | 15.1 % | **7.1 %** | 12.50 € | stávame sa najlacnejší |
| Podložka na cvičení, jógu a fitness 1,5 cm Rebel Act... | 12.90 € | **12.00 €** | 15.1 % | **7.1 %** | 12.50 € | stávame sa najlacnejší |
| Solight anténny adaptér, s napájací výhybkou, 100mA | 5.30 € | **4.40 €** | 55.0 % | **28.7 %** | 4.50 € | stávame sa najlacnejší |
| Sati Café al’Italienne 1 kg zrno | 21.90 € | **21.00 €** | 10.0 % | **5.5 %** | 21.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 808/05 | 60.90 € | **60.00 €** | 10.7 % | **9.1 %** | 60.39 € | stávame sa najlacnejší |
| FoodSaver FSR2002 | 16.90 € | **16.00 €** | 12.2 % | **6.2 %** | 16.39 € | stávame sa najlacnejší |
| ALI MiTag set 3ks Google Find My APD006 | 37.90 € | **37.00 €** | 11.1 % | **8.4 %** | 37.39 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.90 € | **28.00 €** | 39.1 % | **34.8 %** | 28.50 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm biele drevo 500 ml | 22.90 € | **22.00 €** | 13.7 % | **9.3 %** | 22.50 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm tmavé drevo 500 ml | 22.90 € | **22.00 €** | 13.7 % | **9.3 %** | 22.50 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan bílé dřevo 350ml | 18.90 € | **18.00 €** | 15.0 % | **9.5 %** | 18.50 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.90 € | **18.00 €** | 15.0 % | **9.5 %** | 18.50 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 1900 ml, nerezová | 16.90 € | **16.00 €** | 18.2 % | **11.9 %** | 16.50 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 27.90 € | **27.00 €** | 25.4 % | **21.3 %** | 27.50 € | stávame sa najlacnejší |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.90 € | **17.00 €** | 46.6 % | **39.2 %** | 17.50 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 30.90 € | **30.00 €** | 10.0 % | **6.8 %** | 30.50 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 16.90 € | **16.00 €** | 24.5 % | **17.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.90 € | **16.00 €** | 35.5 % | **28.3 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 54.90 € | **54.00 €** | 38.3 % | **36.0 %** | 54.50 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.90 € | **39.00 €** | 38.6 % | **35.4 %** | 39.50 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, UGR | 23.90 € | **23.00 €** | 38.4 % | **33.2 %** | 23.50 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 16.90 € | **16.00 €** | 38.2 % | **30.9 %** | 16.50 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, šedá s rukoväťou | 18.90 € | **18.00 €** | 17.6 % | **12.0 %** | 18.50 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, zelená s rukoväťou | 18.90 € | **18.00 €** | 17.6 % | **12.0 %** | 18.50 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L535E E27, 8,7W, 230V, c... | 23.90 € | **23.00 €** | 32.8 % | **27.8 %** | 23.50 € | stávame sa najlacnejší |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 43.90 € | **43.00 €** | 15.0 % | **12.6 %** | 43.50 € | stávame sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.90 € | **45.00 €** | 41.6 % | **38.8 %** | 45.50 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60Mi | 27.90 € | **27.00 €** | 15.4 % | **11.7 %** | 27.50 € | stávame sa najlacnejší |
| ZigBee LCD senzor teploty Sonoff SNZB-02LD (so sondou) | 17.90 € | **17.00 €** | 17.3 % | **11.4 %** | 17.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.90 € | **41.00 €** | 34.9 % | **32.0 %** | 41.50 € | stávame sa najlacnejší |
| BWT náhradní vodní filtr 3+1ks REFILL | 16.90 € | **16.00 €** | 11.9 % | **5.9 %** | 16.50 € | stávame sa najlacnejší |
| Girmi BL0301 | 28.90 € | **28.00 €** | 10.8 % | **7.4 %** | 28.50 € | stávame sa najlacnejší |
| Evolveo Motion D1, ovladač s klávesnicí | 33.90 € | **33.00 €** | 8.1 % | **5.3 %** | 33.50 € | stávame sa najlacnejší |
| Solight batériová kamera WiFi so solárnym panelom | 58.90 € | **58.00 €** | 35.6 % | **33.5 %** | 58.50 € | stávame sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 26.90 € | **26.00 €** | 13.1 % | **9.3 %** | 26.50 € | stávame sa najlacnejší |
| Vysielač BOYA BY-TX8 Pro na mikrofón | 36.90 € | **36.00 €** | 9.1 % | **6.4 %** | 36.50 € | stávame sa najlacnejší |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 20.90 € | **20.00 €** | 15.0 % | **10.1 %** | 20.50 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-80W (2-kanálový) inteligentný dotykov... | 22.90 € | **22.00 €** | 15.8 % | **11.2 %** | 22.50 € | stávame sa najlacnejší |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **35.00 €** | 15.0 % | **12.1 %** | 35.50 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.90 € | **17.00 €** | 33.6 % | **26.9 %** | 17.50 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.90 € | **55.00 €** | 36.4 % | **34.2 %** | 55.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.90 € | **29.00 €** | 20.3 % | **16.7 %** | 29.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.90 € | **33.00 €** | 25.7 % | **22.4 %** | 33.50 € | stávame sa najlacnejší |
| Bezdrátové čidlo Technoline TX108DTH pro WS9252 | 22.90 € | **22.00 €** | 14.8 % | **10.3 %** | 22.50 € | stávame sa najlacnejší |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 22.90 € | **22.00 €** | 15.1 % | **10.5 %** | 22.50 € | stávame sa najlacnejší |
| Televes 552220 Crocodile 5G LTE700 domovní zesilovač | 35.90 € | **35.00 €** | 15.6 % | **12.7 %** | 35.50 € | stávame sa najlacnejší |
| Baterka Superfire TF02 | 63.90 € | **63.00 €** | 15.1 % | **13.5 %** | 63.50 € | stávame sa najlacnejší |
| Latarka Superfire L3 P90 | 29.90 € | **29.00 €** | 14.9 % | **11.5 %** | 29.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.90 € | **19.00 €** | 39.6 % | **33.3 %** | 19.50 € | stávame sa najlacnejší |
| CP PLUS CP-UNB-CM352 IP vnitřní videomonitor | 281.90 € | **281.00 €** | 15.1 % | **14.7 %** | 281.50 € | stávame sa najlacnejší |
| Rozváděč R-FVE-A40-3 – třída ochrany I+II (bez AC Sv... | 975.90 € | **975.00 €** | 15.0 % | **14.9 %** | 975.50 € | stávame sa najlacnejší |
| Solární regulátor MPPT Victron Energy SmartSolar 250... | 614.90 € | **614.00 €** | 15.0 % | **14.8 %** | 614.50 € | stávame sa najlacnejší |
| Puškohled LEVENHUK Halo NVR50 s nočním viděním | 425.90 € | **425.00 €** | 15.0 % | **14.8 %** | 425.50 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 296.90 € | **296.00 €** | 15.0 % | **14.7 %** | 296.50 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 278.90 € | **278.00 €** | 15.0 % | **14.7 %** | 278.50 € | stávame sa najlacnejší |
| HDD 3.5" 4TB 64MB Western Digital PURPLE pro kamerov... | 308.90 € | **308.00 €** | 15.0 % | **14.7 %** | 308.50 € | stávame sa najlacnejší |
| FINLUX 24FHMG5771 ANDROID TV 12V TRAVEL | 312.90 € | **312.00 €** | 15.0 % | **14.7 %** | 312.50 € | stávame sa najlacnejší |
| MASCOM MC22TFW11 – 22” Full HD Smart TV (12 V, WebOS... | 294.90 € | **294.00 €** | 15.1 % | **14.7 %** | 294.50 € | stávame sa najlacnejší |
| Televes AVANT 12 PRO (532203) | 386.90 € | **386.00 €** | 15.0 % | **14.8 %** | 386.50 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-45P-BK černé se sto... | 263.90 € | **263.00 €** | 15.1 % | **14.7 %** | 263.50 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 5.10 € | **4.30 €** | 55.3 % | **30.9 %** | 4.40 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 4.20 € | **3.50 €** | 54.5 % | **28.8 %** | 3.60 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 10.00 € | **9.30 €** | 38.3 % | **28.6 %** | 9.40 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 470.50 € | **469.90 €** | 8.7 % | **8.6 %** | 470.00 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 904.50 € | **903.90 €** | 15.0 % | **14.9 %** | 904.00 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 338.50 € | **337.90 €** | 14.7 % | **14.5 %** | 338.00 € | stávame sa najlacnejší |
| Solární regulátor MPPT Victron Energy SmartSolar 150... | 589.50 € | **588.90 €** | 15.0 % | **14.9 %** | 589.00 € | stávame sa najlacnejší |
| Solární regulátor MPPT VOLT GREEN BOOST PRO 4000 SIN... | 339.50 € | **338.90 €** | 15.1 % | **14.9 %** | 339.00 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 259.50 € | **258.90 €** | 14.8 % | **14.6 %** | 259.00 € | stávame sa najlacnejší |
| Robotický čistič okien MOVA N1 (biely) | 287.50 € | **286.90 €** | 14.9 % | **14.7 %** | 287.00 € | stávame sa najlacnejší |
| HiFi věž Kruger&Matz KM1995 s CD, DAB+/FM rádiem | 604.50 € | **603.90 €** | 15.0 % | **14.9 %** | 604.00 € | stávame sa najlacnejší |
| CP-USP-D2520L10-D 2.0 Mpix venkovní PTZ kamera 4V1 s... | 482.50 € | **481.90 €** | 15.0 % | **14.9 %** | 482.00 € | stávame sa najlacnejší |
| CP PLUS CP-VNC-V4KZR3-VMD-V2 4K venkovní antivandal ... | 342.50 € | **341.90 €** | 15.0 % | **14.8 %** | 342.00 € | stávame sa najlacnejší |
| CP-UNR-4K4042-P4V3 Síťový videorekordér H.265 4K pro... | 482.50 € | **481.90 €** | 15.0 % | **14.9 %** | 482.00 € | stávame sa najlacnejší |
| CP-UVR-0401L1B-4KI3 Čtyřkanálový 4K 5v1 DVR s kompre... | 268.50 € | **267.90 €** | 15.1 % | **14.8 %** | 268.00 € | stávame sa najlacnejší |
| FINLUX 32FQI8061 SMART QLED TV FULL HD TIVO | 302.50 € | **301.90 €** | 15.1 % | **14.8 %** | 302.00 € | stávame sa najlacnejší |
| FINLUX 55FQK9070 ULTRA HD 4K QLED SMART ANDROID TV | 599.50 € | **598.90 €** | 15.0 % | **14.9 %** | 599.00 € | stávame sa najlacnejší |
| Johansson 6700 Revolution programovatelný zesilovač | 291.50 € | **290.90 €** | 14.6 % | **14.3 %** | 291.00 € | stávame sa najlacnejší |
| Niceboy ORYX X220 Iris | 19.50 € | **18.90 €** | 10.6 % | **7.2 %** | 17.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mio Smartbox IV | 31.50 € | **30.90 €** | 11.1 % | **8.9 %** | 30.99 € | stávame sa najlacnejší |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.50 € | **38.90 €** | 16.1 % | **14.3 %** | 38.99 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit 2AIR | 33.50 € | **32.90 €** | 15.9 % | **13.8 %** | 33.00 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 36.50 € | **35.90 €** | 39.8 % | **37.5 %** | 36.00 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 23.50 € | **22.90 €** | 15.4 % | **12.5 %** | 23.00 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 2 L, marinovacia | 23.50 € | **22.90 €** | 19.3 % | **16.2 %** | 23.00 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **19.90 €** | 38.4 % | **34.4 %** | 20.00 € | stávame sa najlacnejší |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.50 € | **28.90 €** | 14.9 % | **12.6 %** | 29.00 € | stávame sa najlacnejší |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.50 € | **19.90 €** | 48.5 % | **44.2 %** | 20.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 37.50 € | **36.90 €** | 26.6 % | **24.6 %** | 37.00 € | stávame sa najlacnejší |
| Stropné svetlo Yeelight C2201C400 | 64.50 € | **63.90 €** | 15.7 % | **14.6 %** | 64.00 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L430C(2-pack) E14, 4,8W,... | 28.50 € | **27.90 €** | 33.0 % | **30.2 %** | 28.00 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 27.50 € | **26.90 €** | 15.6 % | **13.1 %** | 27.00 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 48.50 € | **47.90 €** | 15.3 % | **13.9 %** | 48.00 € | stávame sa najlacnejší |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 34.50 € | **33.90 €** | 15.1 % | **13.1 %** | 34.00 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 59.50 € | **58.90 €** | 15.0 % | **13.9 %** | 59.00 € | stávame sa najlacnejší |
| Recenzia zariadenia SMD Uni-T UT116A | 25.50 € | **24.90 €** | 14.3 % | **11.6 %** | 25.00 € | stávame sa najlacnejší |
| Digitálny klešťový merač Uni-T UT202R | 25.50 € | **24.90 €** | 15.5 % | **12.8 %** | 25.00 € | stávame sa najlacnejší |
| Uni-T UT205E digitálny klešťový multimeter | 49.50 € | **48.90 €** | 14.3 % | **12.9 %** | 49.00 € | stávame sa najlacnejší |
| Uni-T UT210B Mini digitálny klešťový multimeter | 23.50 € | **22.90 €** | 14.7 % | **11.8 %** | 23.00 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 35.50 € | **34.90 €** | 15.6 % | **13.7 %** | 35.00 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 62.50 € | **61.90 €** | 14.9 % | **13.8 %** | 62.00 € | stávame sa najlacnejší |
| Uni-T UT320T 2-v-1 teplomer | 35.50 € | **34.90 €** | 15.3 % | **13.4 %** | 35.00 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT331+ | 42.50 € | **41.90 €** | 15.7 % | **14.0 %** | 42.00 € | stávame sa najlacnejší |
| Mini detektor úniku plynu Habotest HT61 | 17.50 € | **16.90 €** | 16.6 % | **12.6 %** | 17.00 € | stávame sa najlacnejší |
| Ardes AR4B01B | 45.50 € | **44.90 €** | 10.0 % | **8.6 %** | 45.00 € | stávame sa najlacnejší |
| Inteligentný termostat WiFi Avatto WT20R-BH-3A-W-WiFi | 30.50 € | **29.90 €** | 15.5 % | **13.3 %** | 30.00 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 54.50 € | **53.90 €** | 12.6 % | **11.3 %** | 54.00 € | stávame sa najlacnejší |
| TEFAL XA 800512 | 17.50 € | **16.90 €** | 10.3 % | **6.5 %** | 17.00 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 24.50 € | **23.90 €** | 7.8 % | **5.1 %** | 24.00 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3236 | 32.50 € | **31.90 €** | 9.8 % | **7.7 %** | 32.00 € | stávame sa najlacnejší |
| Girmi PE3600 | 39.50 € | **38.90 €** | 10.9 % | **9.2 %** | 39.00 € | stávame sa najlacnejší |
| Kamera TP-Link Mercusys MC510 3MPx, venkovní, IP PTZ... | 33.50 € | **32.90 €** | 7.7 % | **5.8 %** | 33.00 € | stávame sa najlacnejší |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.50 € | **18.90 €** | 14.1 % | **10.6 %** | 19.00 € | stávame sa najlacnejší |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 17.50 € | **16.90 €** | 11.6 % | **7.8 %** | 17.00 € | stávame sa najlacnejší |
| Centrala Bramka WiFi MSH450MA Meross | 19.50 € | **18.90 €** | 15.0 % | **11.4 %** | 19.00 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.50 € | **20.90 €** | 15.1 % | **11.9 %** | 21.00 € | stávame sa najlacnejší |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.50 € | **25.90 €** | 11.2 % | **8.7 %** | 26.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 17.50 € | **16.90 €** | 37.2 % | **32.5 %** | 17.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.50 € | **43.90 €** | 12.3 % | **10.8 %** | 44.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 38.50 € | **37.90 €** | 39.5 % | **37.4 %** | 38.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.50 € | **63.90 €** | 21.1 % | **20.0 %** | 64.00 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA X12 | 17.50 € | **16.90 €** | 15.6 % | **11.6 %** | 17.00 € | stávame sa najlacnejší |
| TWS QCY MeloBuds Pro HT08 headphones, ANC (gold) | 32.50 € | **31.90 €** | 14.7 % | **12.6 %** | 32.00 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 49dB | 25.50 € | **24.90 €** | 30.6 % | **27.5 %** | 25.00 € | stávame sa najlacnejší |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.50 € | **17.90 €** | 10.4 % | **6.8 %** | 18.00 € | stávame sa najlacnejší |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 24.50 € | **23.90 €** | 15.5 % | **12.7 %** | 24.00 € | stávame sa najlacnejší |
| Hrazda multifunkční REBEL ACTIVE RBA-2401 | 54.50 € | **53.90 €** | 7.1 % | **5.9 %** | 54.00 € | stávame sa najlacnejší |
| Akupresurní podložka REBEL ACTIVE RBA-6011-GL 72x42c... | 24.50 € | **23.90 €** | 14.5 % | **11.7 %** | 24.00 € | stávame sa najlacnejší |
| Solight LED svetielko s diaľkovým ovládaním, 5 LED, ... | 6.70 € | **6.10 €** | 55.2 % | **41.3 %** | 6.20 € | stávame sa najlacnejší |
| Solight USB-C 20W fast charger | 5.90 € | **5.30 €** | 47.1 % | **32.2 %** | 5.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.70 € | **4.10 €** | 49.3 % | **30.2 %** | 4.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 3m | 6.20 € | **5.60 €** | 48.7 % | **34.3 %** | 5.70 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 4.40 € | **3.80 €** | 55.5 % | **34.3 %** | 3.90 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.40 € | **2.80 €** | 56.2 % | **28.6 %** | 2.90 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 4.00 € | **3.40 €** | 53.4 % | **30.4 %** | 3.50 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 4.00 € | **3.40 €** | 53.4 % | **30.4 %** | 3.50 € | stávame sa najlacnejší |
| Solight spätná klapka pre AV01, AV02 | 2.30 € | **1.70 €** | 47.2 % | **8.8 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed řemínek AWU 49mm FIXNST2-1029-RD | 16.50 € | **15.90 €** | 11.1 % | **7.1 %** | 12.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák MagMount Vent FIXMMT-V-BK | 14.50 € | **13.90 €** | 11.6 % | **7.0 %** | 10.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U AC600 WiFi Adaptér | 12.50 € | **11.90 €** | 13.2 % | **7.7 %** | 10.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Pánev nepř. GRANITE P 24 ind | 14.50 € | **13.90 €** | 11.3 % | **6.7 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera GO 64270 Škoda Fabia RS Rally 2 | 12.50 € | **11.90 €** | 10.3 % | **5.0 %** | 10.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Defender Taška na notebook 15,6", Geek | 14.50 € | **13.90 €** | 10.5 % | **5.9 %** | 13.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 13.50 € | **12.90 €** | 47.5 % | **41.0 %** | 13.00 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 13.50 € | **12.90 €** | 10.2 % | **5.3 %** | 13.00 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Classic Style | 12.50 € | **11.90 €** | 17.8 % | **12.1 %** | 12.00 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Eccentric Style | 12.50 € | **11.90 €** | 17.8 % | **12.1 %** | 12.00 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Fashion Style | 12.50 € | **11.90 €** | 17.8 % | **12.1 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.50 € | **12.90 €** | 14.0 % | **8.9 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.50 € | **14.90 €** | 45.9 % | **40.2 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.50 € | **9.90 €** | 22.7 % | **15.6 %** | 10.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **13.90 €** | 47.4 % | **41.3 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 13.50 € | **12.90 €** | 56.1 % | **49.2 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 15.50 € | **14.90 €** | 46.0 % | **40.4 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.50 € | **14.90 €** | 39.9 % | **34.4 %** | 15.00 € | stávame sa najlacnejší |
| Solight nabíjacie nočné LED svetielko s pohybovým a ... | 8.50 € | **7.90 €** | 53.9 % | **43.0 %** | 8.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.50 € | **10.90 €** | 38.3 % | **31.1 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 16.50 € | **15.90 €** | 40.0 % | **34.9 %** | 16.00 € | stávame sa najlacnejší |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 7.50 € | **6.90 €** | 54.8 % | **42.4 %** | 7.00 € | stávame sa najlacnejší |
| Leifheit Potah na žehlicí prkno Cotton C | 10.50 € | **9.90 €** | 12.6 % | **6.2 %** | 10.00 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 15.50 € | **14.90 €** | 47.4 % | **41.7 %** | 15.00 € | stávame sa najlacnejší |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.50 € | **14.90 €** | 16.8 % | **12.3 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 12.50 € | **11.90 €** | 46.9 % | **39.8 %** | 12.00 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.50 € | **12.90 €** | 36.3 % | **30.3 %** | 13.00 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 16.50 € | **15.90 €** | 18.0 % | **13.7 %** | 16.00 € | stávame sa najlacnejší |
| Návlek VILEDA STEAM XXL POWER 161717 | 11.50 € | **10.90 €** | 14.3 % | **8.3 %** | 11.00 € | stávame sa najlacnejší |
| Leifheit Čistič na okna s rozprašovačem | 10.50 € | **9.90 €** | 14.4 % | **7.9 %** | 10.00 € | stávame sa najlacnejší |
| PULUZ PU3224B Držiak na telefón čierny | 14.50 € | **13.90 €** | 16.5 % | **11.7 %** | 14.00 € | stávame sa najlacnejší |
| Solight lokátor na bicykel, Find My kompatibilný | 15.50 € | **14.90 €** | 41.6 % | **36.1 %** | 15.00 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.20 €** | 45.5 % | **32.6 %** | 6.30 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.20 €** | 45.5 % | **32.6 %** | 6.30 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.30 € | **4.70 €** | 47.6 % | **30.9 %** | 4.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.80 € | **4.20 €** | 48.9 % | **30.3 %** | 4.30 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostaniciam TE81, TE8... | 5.30 € | **4.70 €** | 50.7 % | **33.6 %** | 4.80 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 8.60 € | **8.00 €** | 53.7 % | **42.9 %** | 8.10 € | stávame sa najlacnejší |
| Akumulátor Lipo Tattu 2s 650mAh 95C 7,6V HV z XT30 L... | 10.50 € | **9.90 €** | 16.5 % | **9.8 %** | 10.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo, 150+150lm, Li... | 8.60 € | **8.00 €** | 53.7 % | **42.9 %** | 8.10 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 210.50 € | **209.90 €** | 15.1 % | **14.8 %** | 210.00 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 110.50 € | **109.90 €** | 14.9 % | **14.2 %** | 110.00 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 194.50 € | **193.90 €** | 15.0 % | **14.6 %** | 194.00 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 88.50 € | **87.90 €** | 13.5 % | **12.7 %** | 88.00 € | stávame sa najlacnejší |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 89.50 € | **88.90 €** | 13.9 % | **13.1 %** | 89.00 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 86.50 € | **85.90 €** | 14.4 % | **13.6 %** | 86.00 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 102.50 € | **101.90 €** | 14.4 % | **13.7 %** | 102.00 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 210.50 € | **209.90 €** | 7.3 % | **7.0 %** | 210.00 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 144.50 € | **143.90 €** | 15.2 % | **14.7 %** | 144.00 € | stávame sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 104.50 € | **103.90 €** | 15.1 % | **14.4 %** | 104.00 € | stávame sa najlacnejší |
| Merač hladiny hluku Uni-T UT35 | 123.50 € | **122.90 €** | 15.2 % | **14.7 %** | 123.00 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 152.50 € | **151.90 €** | 14.5 % | **14.1 %** | 152.00 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 77.50 € | **76.90 €** | 12.7 % | **11.8 %** | 77.00 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 148.50 € | **147.90 €** | 14.2 % | **13.8 %** | 148.00 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 50XN GPS s nočn... | 255.50 € | **254.90 €** | 15.1 % | **14.8 %** | 255.00 € | stávame sa najlacnejší |
| AI-NC-T50L3-MW-0360 5.0 Mpix venkovní IP kamera s IR... | 134.50 € | **133.90 €** | 15.2 % | **14.7 %** | 134.00 € | stávame sa najlacnejší |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 194.50 € | **193.90 €** | 15.1 % | **14.7 %** | 194.00 € | stávame sa najlacnejší |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 228.50 € | **227.90 €** | 6.0 % | **5.8 %** | 228.00 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 244.50 € | **243.90 €** | 10.0 % | **9.8 %** | 244.00 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 93.50 € | **92.90 €** | 10.9 % | **10.1 %** | 93.00 € | stávame sa najlacnejší |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 108.50 € | **107.90 €** | 6.8 % | **6.2 %** | 108.00 € | stávame sa najlacnejší |
| Sequential Shifter Moza Racing SGP RS059 | 130.50 € | **129.90 €** | 11.2 % | **10.7 %** | 130.00 € | stávame sa najlacnejší |
| Termoregulačný inteligentný pelech Petoneer Cozy Sofa | 100.50 € | **99.90 €** | 11.3 % | **10.6 %** | 100.00 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0034 FUN WHEELS LIGHT ... | 103.50 € | **102.90 €** | 6.6 % | **6.0 %** | 103.00 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0033 FUN WHEELS LIGHT ... | 103.50 € | **102.90 €** | 6.6 % | **6.0 %** | 103.00 € | stávame sa najlacnejší |
| Multifunkční tréninková hrazda REBEL ACTIVE RBA-2407 | 73.50 € | **72.90 €** | 15.4 % | **14.4 %** | 73.00 € | stávame sa najlacnejší |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 125.50 € | **124.90 €** | 15.2 % | **14.6 %** | 125.00 € | stávame sa najlacnejší |
| Rozváděč R-FVE-A40-1 – třída ochrany I+II (s AC Svod... | 1285.50 € | **1284.90 €** | 15.0 % | **14.9 %** | 1285.00 € | stávame sa najlacnejší |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 8.30 € | **7.80 €** | 55.5 % | **46.1 %** | 7.90 € | stávame sa najlacnejší |
| Candy CA20FMW7NG Candy Wave 600 | 148.00 € | **147.50 €** | 5.5 % | **5.2 %** | 143.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-M ( 36 - 40 ) | 13.00 € | **12.50 €** | 13.4 % | **9.0 %** | 11.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 13.00 € | **12.50 €** | 10.2 % | **6.0 %** | 12.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 5-Port Gigabit Switch (DGS-105) | 16.00 € | **15.50 €** | 10.6 % | **7.2 %** | 15.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.00 € | **17.50 €** | 9.5 % | **6.5 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.00 € | **17.50 €** | 9.5 % | **6.5 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 26.00 € | **25.50 €** | 8.6 % | **6.5 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ScanPart vodní filtr kompatibilní 4ks | 16.00 € | **15.50 €** | 10.1 % | **6.7 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vaflovač TEESA TSA3237 | 23.00 € | **22.50 €** | 8.5 % | **6.2 %** | 22.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 22.50 € | **22.00 €** | 7.4 % | **5.0 %** | 22.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Stěrka na dlažbu Classic s tele | 12.00 € | **11.50 €** | 10.1 % | **5.5 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Q10 PF+ Čistiaci robot (čierny) | 335.50 € | **335.00 €** | 15.0 % | **14.9 %** | 335.05 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 7.70 € | **7.20 €** | 53.4 % | **43.5 %** | 7.30 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 300mm, čierna... | 2.50 € | **2.00 €** | 56.3 % | **25.1 %** | 2.10 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 5 sériový - lustrový, biely | 3.90 € | **3.40 €** | 40.9 % | **22.9 %** | 3.50 € | stávame sa najlacnejší |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 5.10 € | **4.60 €** | 54.1 % | **39.0 %** | 4.70 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka, IP44, čierna | 4.60 € | **4.10 €** | 49.0 % | **32.8 %** | 4.20 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 2m | 3.90 € | **3.40 €** | 48.2 % | **29.2 %** | 3.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 4.30 € | **3.80 €** | 46.9 % | **29.8 %** | 3.90 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 6.40 € | **5.90 €** | 53.5 % | **41.5 %** | 6.00 € | stávame sa najlacnejší |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.50 € | **84.00 €** | 9.2 % | **8.6 %** | 84.14 € | stávame sa najlacnejší |
| Svetelný merač UNI-T UT383 | 16.50 € | **16.00 €** | 11.1 % | **7.8 %** | 16.29 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI Black | 70.50 € | **70.00 €** | 14.6 % | **13.8 %** | 70.29 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 70.50 € | **70.00 €** | 14.6 % | **13.8 %** | 70.29 € | stávame sa najlacnejší |
| Black+Decker BXCJ30E | 18.50 € | **18.00 €** | 11.1 % | **8.1 %** | 18.33 € | stávame sa najlacnejší |
| Salente Rtx-L6 | 152.00 € | **151.50 €** | 6.2 % | **5.9 %** | 151.86 € | stávame sa najlacnejší |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 12.00 € | **11.50 €** | 10.1 % | **5.5 %** | 11.86 € | stávame sa najlacnejší |
| Tester napätia a spojitosti Uni-T UT18D | 40.50 € | **40.00 €** | 8.6 % | **7.3 %** | 40.39 € | stávame sa najlacnejší |
| MOVA Z70 Ultra Roller kompletná sada – Metal Black | 1616.00 € | **1615.50 €** | 15.0 % | **15.0 %** | 1615.89 € | stávame sa najlacnejší |
| Vysávač MOVA Z200 Stick | 345.50 € | **345.00 €** | 15.0 % | **14.9 %** | 345.39 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 53.50 € | **53.00 €** | 8.3 % | **7.3 %** | 53.39 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 13.00 € | **12.50 €** | 38.5 % | **33.2 %** | 12.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.50 €** | 26.4 % | **23.3 %** | 19.90 € | stávame sa najlacnejší |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 12.00 € | **11.50 €** | 47.4 % | **41.2 %** | 11.90 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 14.00 € | **13.50 €** | 32.8 % | **28.1 %** | 13.90 € | stávame sa najlacnejší |
| Senzor Uni-T Flex Clamp UT-CS09D | 55.00 € | **54.50 €** | 14.9 % | **13.9 %** | 54.90 € | stávame sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 38.00 € | **37.50 €** | 32.0 % | **30.3 %** | 37.90 € | stávame sa najlacnejší |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 23.00 € | **22.50 €** | 39.2 % | **36.2 %** | 22.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **47.50 €** | 54.5 % | **52.9 %** | 47.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 22.00 € | **21.50 €** | 25.3 % | **22.5 %** | 21.90 € | stávame sa najlacnejší |
| Solight štrbinová hubica pre Dyson V7, V8, V10, V11,... | 11.00 € | **10.50 €** | 31.9 % | **25.9 %** | 10.90 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 21.00 € | **20.50 €** | 16.7 % | **13.9 %** | 20.90 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 17.00 € | **16.50 €** | 11.0 % | **7.7 %** | 16.90 € | stávame sa najlacnejší |
| Klimatizace MW POWER ALFA 12K WIFI V1, 12000BTu, R32 | 536.00 € | **535.50 €** | 15.0 % | **14.9 %** | 535.90 € | stávame sa najlacnejší |
| Kuchyňský robot Ruhhy 25728 | 144.00 € | **143.50 €** | 9.1 % | **8.7 %** | 143.90 € | stávame sa najlacnejší |
| Solight 40mm kulma na dlhé vlasy pre Dyson Airwrap (... | 21.00 € | **20.50 €** | 30.3 % | **27.2 %** | 20.90 € | stávame sa najlacnejší |
| Leifheit Stěrka XL40 cm s teles.tyčí | 25.00 € | **24.50 €** | 9.6 % | **7.4 %** | 24.90 € | stávame sa najlacnejší |
| Router GL.iNet Mango s podporou Wi-Fi 4 | 33.00 € | **32.50 €** | 14.3 % | **12.5 %** | 32.90 € | stávame sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ KM0566  STREET X... | 40.00 € | **39.50 €** | 15.1 % | **13.6 %** | 39.90 € | stávame sa najlacnejší |
| Multipřepínač TeleTek 13/32 | 469.00 € | **468.50 €** | 15.0 % | **14.9 %** | 468.90 € | stávame sa najlacnejší |
| Barkan 4400 polohovací držák pro TV 32"-80" | 82.00 € | **81.50 €** | 15.0 % | **14.3 %** | 81.90 € | stávame sa najlacnejší |
| Súprava celodenných filtrov Freewell Real Locking s ... | 220.00 € | **219.50 €** | 14.9 % | **14.7 %** | 219.90 € | stávame sa najlacnejší |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 92.00 € | **91.50 €** | 15.0 % | **14.4 %** | 91.90 € | stávame sa najlacnejší |
| CP-UNC-TC51L5C-VMDS 5.0 Mpix venkovní IP kamera s IR... | 228.00 € | **227.50 €** | 15.0 % | **14.8 %** | 227.90 € | stávame sa najlacnejší |
| CP-UNC-TE41L5E-MDS-0360 4.0 Mpix venkovní IP kamera ... | 388.00 € | **387.50 €** | 15.0 % | **14.8 %** | 387.90 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower L100-12-OUT | 552.00 € | **551.50 €** | 15.0 % | **14.9 %** | 551.90 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 150Ah MHPower L150-12-OUT | 713.00 € | **712.50 €** | 15.0 % | **14.9 %** | 712.90 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 20.00 € | **19.50 €** | 24.7 % | **21.6 %** | 19.90 € | stávame sa najlacnejší |
| CP-UVR-1601K2-I3 Šestnáctikanálový 5v1 DVR s kompres... | 529.00 € | **528.50 €** | 15.0 % | **14.9 %** | 528.90 € | stávame sa najlacnejší |
| FINLUX 32FWI5670 SMART ANDROID TV FULL HD BÍLÁ | 259.00 € | **258.50 €** | 15.0 % | **14.8 %** | 258.90 € | stávame sa najlacnejší |
| FINLUX 55FQK9060 ULTRA HD 4K QLED SMART TIVO | 611.00 € | **610.50 €** | 15.0 % | **14.9 %** | 610.90 € | stávame sa najlacnejší |
| Odrážedlo Kruzzel 25767 černé | 41.00 € | **40.50 €** | 15.1 % | **13.7 %** | 40.90 € | stávame sa najlacnejší |
| Odrážedlo Kruzzel 25768 růžové | 41.00 € | **40.50 €** | 15.1 % | **13.7 %** | 40.90 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 47.00 € | **46.50 €** | 14.6 % | **13.4 %** | 46.90 € | stávame sa najlacnejší |
| Běžecký pás REBEL ACTIVE RBA-1001 | 279.00 € | **278.50 €** | 15.0 % | **14.8 %** | 278.90 € | stávame sa najlacnejší |
| Hoverboard Rebel Cruiser Carbon | 152.00 € | **151.50 €** | 15.0 % | **14.6 %** | 151.90 € | stávame sa najlacnejší |
| Hoverboard Rebel Cruiser Joy | 152.00 € | **151.50 €** | 15.0 % | **14.6 %** | 151.90 € | stávame sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 167.00 € | **166.50 €** | 15.0 % | **14.6 %** | 166.90 € | stávame sa najlacnejší |
| Spinningové kolo REBEL ACTIVE RBA-1007 | 188.00 € | **187.50 €** | 15.0 % | **14.7 %** | 187.90 € | stávame sa najlacnejší |
| CrockPot SCV400RD | 52.50 € | **52.00 €** | 10.3 % | **9.3 %** | 52.42 € | stávame sa najlacnejší |
| Samsung QE75QN85F NEO QLED | 1191.50 € | **1191.00 €** | 9.6 % | **9.6 %** | 1191.46 € | stávame sa najlacnejší |
| Sada nákladního auta TIR se 6 závodními autíčky 26303 | 10.50 € | **10.00 €** | 14.4 % | **9.0 %** | 10.49 € | stávame sa najlacnejší |
| ETA Aromo 0064 90000 bílý | 13.99 € | **13.50 €** | 10.3 % | **6.5 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL GC 305012 | 91.90 € | **91.50 €** | 6.0 % | **5.5 %** | 91.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Motorcycle Intercom EJEAS MS8-SE | 86.90 € | **86.50 €** | 15.1 % | **14.6 %** | 86.67 € | stávame sa najlacnejší |
| Rowenta ZR009001 | 10.90 € | **10.50 €** | 12.7 % | **8.6 %** | 6.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U Nano WiFi Adaptér | 10.90 € | **10.50 €** | 11.8 % | **7.6 %** | 7.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Power Bank 10000mAh 22.5W Lite GL | 12.90 € | **12.50 €** | 10.7 % | **7.3 %** | 10.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Razer Goliathus Mobile Stealth Ed. | 10.90 € | **10.50 €** | 13.6 % | **9.4 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo TopSound černý | 12.90 € | **12.50 €** | 10.4 % | **7.0 %** | 11.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI CN GaN 33W, USB-C+USB, bílá CHPD0020 | 13.90 € | **13.50 €** | 10.9 % | **7.7 %** | 12.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CL držák vent. horiz., černý HANDYDRIVEK | 10.90 € | **10.50 €** | 12.3 % | **8.2 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.90 € | **15.50 €** | 10.5 % | **7.7 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 14.90 € | **14.50 €** | 9.8 % | **6.9 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor PRO, 20W, 1840lm, 5000K, IP65 | 9.00 € | **8.60 €** | 48.1 % | **41.5 %** | 8.70 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 9.00 € | **8.60 €** | 53.7 % | **46.9 %** | 8.70 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka Fast, IP68, 5-9mm, ... | 4.20 € | **3.80 €** | 55.9 % | **41.1 %** | 3.90 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 1.60 € | **1.20 €** | 58.6 % | **19.0 %** | 1.30 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 2.10 € | **1.70 €** | 55.2 % | **25.6 %** | 1.80 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 250mm, natura... | 2.00 € | **1.60 €** | 56.3 % | **25.1 %** | 1.70 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, matný čierny | 2.60 € | **2.20 €** | 48.9 % | **26.0 %** | 2.30 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, s priebežnou zásuvkou | 1.70 € | **1.30 €** | 44.0 % | **10.1 %** | 1.40 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek | 2.80 € | **2.40 €** | 48.8 % | **27.5 %** | 2.50 € | stávame sa najlacnejší |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 5.10 € | **4.70 €** | 40.1 % | **29.1 %** | 4.80 € | stávame sa najlacnejší |
| Slúchadlá FIXED Pods 2, bezdrôtové, TWS, biela | 24.90 € | **24.50 €** | 7.9 % | **6.2 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Vulcan svetlé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada hasičských vozidel 26305 | 18.90 € | **18.50 €** | 15.9 % | **13.4 %** | 18.69 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan biely lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.75 € | stávame sa najlacnejší |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 37.90 € | **37.50 €** | 10.6 % | **9.4 %** | 37.89 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 8.30 € | **8.00 €** | 47.7 % | **42.3 %** | 8.10 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 3.10 € | **2.80 €** | 52.7 % | **38.0 %** | 2.90 € | stávame sa najlacnejší |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.20 €** | 56.3 % | **25.1 %** | 1.30 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, zdierka 5,5 ... | 1.10 € | **0.80 €** | 54.2 % | **12.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.70 €** | 57.9 % | **34.2 %** | 1.80 € | stávame sa najlacnejší |
| Solight vypínač šnúrový, jednopólový priechodný, čierny | 1.10 € | **0.80 €** | 54.2 % | **12.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, uhlová, IP44, čierna | 2.10 € | **1.80 €** | 49.8 % | **28.4 %** | 1.90 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.60 € | **1.30 €** | 44.5 % | **17.4 %** | 1.40 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.20 € | **0.90 €** | 59.9 % | **20.0 %** | 1.00 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.20 € | **4.90 €** | 15.5 % | **8.8 %** | 5.00 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 3.00 € | **2.70 €** | 46.0 % | **31.4 %** | 2.80 € | stávame sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 7.30 € | **7.00 €** | 24.7 % | **19.6 %** | 7.10 € | stávame sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 6.30 € | **6.00 €** | 24.0 % | **18.1 %** | 6.10 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 7.00 € | **6.70 €** | 19.6 % | **14.4 %** | 6.80 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 6.80 € | **6.50 €** | 16.4 % | **11.3 %** | 6.60 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 1 jednopólový, biely | 3.00 € | **2.70 €** | 41.8 % | **27.6 %** | 2.80 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 7.80 € | **7.50 €** | 27.9 % | **22.9 %** | 7.60 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.40 € | **1.10 €** | 47.8 % | **16.1 %** | 1.20 € | stávame sa najlacnejší |
| Solight rozbočovač, 5 x 2,5A, biely | 1.90 € | **1.60 €** | 47.1 % | **23.9 %** | 1.70 € | stávame sa najlacnejší |
| Solight fast charger do auta 30W USB-C + A | 4.10 € | **3.80 €** | 46.2 % | **35.5 %** | 3.90 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 6 striedavý - schodiskový, b... | 3.00 € | **2.70 €** | 41.0 % | **26.9 %** | 2.80 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.20 € | **8.90 €** | 18.5 % | **14.7 %** | 9.00 € | stávame sa najlacnejší |
| Solight LED stmievateľná stolná lampička s klipom bi... | 9.40 € | **9.20 €** | 11.2 % | **8.9 %** | 9.30 € | stávame sa najlacnejší |
| Solight profesionálný kliešťový multimeter, 10mA - 1... | 9.90 € | **9.70 €** | 28.2 % | **25.6 %** | 9.80 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 9.80 € | **9.60 €** | 29.1 % | **26.5 %** | 9.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.90 € | **8.70 €** | 17.1 % | **14.5 %** | 8.80 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.40 € | **8.20 €** | 43.8 % | **40.4 %** | 8.30 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.70 € | **4.50 €** | 41.0 % | **35.0 %** | 4.60 € | stávame sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E2... | 2.50 € | **2.30 €** | 50.6 % | **38.5 %** | 2.40 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.30 € | **4.10 €** | 35.5 % | **29.2 %** | 4.20 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.70 € | **2.50 €** | 37.2 % | **27.0 %** | 2.60 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.30 €** | 28.3 % | **24.3 %** | 6.40 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.30 €** | 8.7 % | **5.4 %** | 6.40 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.20 € | **3.00 €** | 37.7 % | **29.0 %** | 3.10 € | stávame sa najlacnejší |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.30 € | **4.10 €** | 38.7 % | **32.3 %** | 4.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 8.00 € | **7.80 €** | 36.9 % | **33.5 %** | 7.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **3.40 €** | 15.7 % | **9.3 %** | 3.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.50 € | **7.30 €** | 38.9 % | **35.2 %** | 7.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.30 € | **5.10 €** | 21.0 % | **16.5 %** | 5.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.30 € | **5.10 €** | 37.2 % | **32.0 %** | 5.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.70 € | **6.50 €** | 37.6 % | **33.4 %** | 6.60 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.30 €** | 34.2 % | **26.6 %** | 3.40 € | stávame sa najlacnejší |
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
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.90 € | **1.70 €** | 23.6 % | **10.6 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **1.80 €** | 23.2 % | **10.9 %** | 1.90 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.80 € | **2.60 €** | 35.5 % | **25.8 %** | 2.70 € | stávame sa najlacnejší |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.90 € | **2.70 €** | 23.4 % | **14.9 %** | 2.80 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.30 € | **3.10 €** | 36.2 % | **27.9 %** | 3.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.90 € | **3.70 €** | 26.3 % | **19.8 %** | 3.80 € | stávame sa najlacnejší |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.60 € | **9.40 €** | 54.6 % | **51.3 %** | 9.50 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.10 € | **7.90 €** | 11.1 % | **8.3 %** | 8.00 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.60 € | **6.40 €** | 32.5 % | **28.5 %** | 6.50 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.60 € | **6.40 €** | 32.5 % | **28.5 %** | 6.50 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, čierna | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, biela | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight digitálny merač spotreby el. energie, veľký ... | 10.00 € | **9.80 €** | 25.1 % | **22.6 %** | 9.90 € | stávame sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 10.00 € | **9.80 €** | 45.7 % | **42.8 %** | 9.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.60 € | **7.40 €** | 24.8 % | **21.5 %** | 7.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **6.90 €** | 13.4 % | **10.2 %** | 7.00 € | stávame sa najlacnejší |
| Air pump Cycplus A2 | 22.00 € | **21.90 €** | 6.0 % | **5.5 %** | 20.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.00 € | **16.90 €** | 6.1 % | **5.4 %** | 16.96 € | stávame sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 šedá | 47.00 € | **46.90 €** | 6.4 % | **6.2 %** | 46.99 € | stávame sa najlacnejší |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 11.00 € | **10.90 €** | 8.5 % | **7.5 %** | 10.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 13.00 € | **12.90 €** | 6.1 % | **5.3 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO353VD | 81.00 € | **80.90 €** | 5.5 % | **5.3 %** | 80.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |

# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-29

Vstup: `premiumstoresk_20260829_2156.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **5627**
- Návrh **zvýšiť** cenu: **505** produktov
- Návrh **znížiť** cenu: **1052** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4070** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **93**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (505)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Baterie LiFePO4 51,2V 100Ah GETI GBLW-51-100V2 nástěnná | 939.00 € | **1028.50 €** | 5.0 % | **15.0 %** | 1028.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rozváděč R-FVE-A40-1 – třída ochrany I+II (s AC Svod... | 1207.50 € | **1285.00 €** | 8.1 % | **15.0 %** | 1285.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 150Ah MHPower L150-12-OUT | 650.90 € | **712.90 €** | 5.0 % | **15.0 %** | 712.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rozváděč R-FVE-A40-3 – třída ochrany I+II (bez AC Sv... | 917.00 € | **975.50 €** | 8.1 % | **15.0 %** | 975.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT Antik Water Heater PWH 9kW (p... | 967.90 € | **1024.50 €** | 8.6 % | **15.0 %** | 1024.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 55FQK9060 ULTRA HD 4K QLED SMART TIVO | 557.90 € | **610.90 €** | 5.0 % | **15.0 %** | 610.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Měnič napětí CARSPA P5000 24V/230V 5000W USB, čistá ... | 567.90 € | **620.50 €** | 5.3 % | **15.0 %** | 620.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 55FQK9070 ULTRA HD 4K QLED SMART ANDROID TV | 547.50 € | **599.00 €** | 5.1 % | **15.0 %** | 599.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 100Ah MHPower L100-12-OUT | 505.00 € | **551.90 €** | 5.2 % | **15.0 %** | 551.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Klimatizace MW POWER ALFA 12K WIFI V1, 12000BTu, R32 | 489.50 € | **535.90 €** | 5.1 % | **15.0 %** | 535.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT Victron Energy SmartSolar 250... | 572.00 € | **614.50 €** | 7.0 % | **15.0 %** | 614.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT Victron Energy SmartSolar 150... | 546.90 € | **589.00 €** | 6.8 % | **15.0 %** | 589.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor ANTIK AC Water Heater (On-Grid) | 378.90 € | **415.50 €** | 4.9 % | **15.0 %** | 415.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT Antik Water Heater PWH 01 V3+... | 361.50 € | **397.90 €** | 4.5 % | **15.0 %** | 397.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Paddleboard SUP REBEL ACTIVE RBA-4513 WINDSURFING  3... | 320.90 € | **350.50 €** | 5.0 % | **14.7 %** | 350.61 € | dobehnutie 2. najlacnejšieho konkurenta |
| Puškohled LEVENHUK Halo NVR50 s nočním viděním | 399.50 € | **425.50 €** | 8.0 % | **15.0 %** | 425.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 32FQI8061 SMART QLED TV FULL HD TIVO | 277.50 € | **302.00 €** | 5.6 % | **14.9 %** | 302.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| HDD 3.5" 4TB 64MB Western Digital PURPLE pro kamerov... | 286.50 € | **308.50 €** | 6.7 % | **14.9 %** | 308.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 40FFI5661 SMART TV FULL HD TIVO | 294.00 € | **314.50 €** | 7.5 % | **15.0 %** | 314.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ozvučovací systém KRUGER MATZ KM1712 | 145.00 € | **164.50 €** | 1.5 % | **15.1 %** | 164.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 277.50 € | **296.50 €** | 7.6 % | **14.9 %** | 296.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 100Ah SOLARFAM AST-100 s výhře... | 296.90 € | **315.90 €** | 8.1 % | **15.1 %** | 315.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 32FQI8071 QLED SMART TV ANDROID | 277.90 € | **296.50 €** | 7.8 % | **15.1 %** | 296.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 24FHMG5771 ANDROID TV 12V TRAVEL | 294.00 € | **312.50 €** | 8.1 % | **14.9 %** | 312.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Spinningové kolo REBEL ACTIVE RBA-1016 | 105.00 € | **123.50 €** | -2.2 % | **15.0 %** | 123.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 260.50 € | **278.50 €** | 7.5 % | **14.9 %** | 278.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Johansson 6700 Revolution programovatelný zesilovač | 273.00 € | **290.90 €** | 7.3 % | **14.4 %** | 290.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| MASCOM MC22TFW11 – 22” Full HD Smart TV (12 V, WebOS... | 277.90 € | **294.50 €** | 8.5 % | **15.0 %** | 294.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Halo 50XN GPS s nočn... | 239.50 € | **255.00 €** | 7.9 % | **14.9 %** | 255.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rozváděč R-FVE-A40-2 | 218.50 € | **233.90 €** | 7.5 % | **15.1 %** | 233.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT VOLT GREEN BOOST PRO 4000 SIN... | 324.00 € | **339.00 €** | 9.9 % | **14.9 %** | 339.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Jednoruční vario činka HMS SR52 nastavitelná  2,5 - ... | 137.90 € | **152.50 €** | 4.0 % | **15.0 %** | 152.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Záložní zdroj VOLT POLSKA Sinus Pro 2000 E 12V/230V ... | 223.00 € | **237.50 €** | 8.0 % | **15.0 %** | 237.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hoverboard Rebel Cruiser Carbon | 138.90 € | **151.90 €** | 5.1 % | **15.0 %** | 151.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herní křeslo KRUGER & MATZ GX-150  černé s LED podsv... | 104.90 € | **117.00 €** | 3.0 % | **14.9 %** | 117.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Záložní zdroj VOLT POLSKA SINUS UPS 800 + AKU 55Ah /... | 252.50 € | **264.50 €** | 9.8 % | **15.0 %** | 264.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 65Ah  EMOS bezúdržbový akumul... | 160.00 € | **170.50 €** | 5.1 % | **12.0 %** | 170.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEM DSA15-5G automatický programovatelný DVB-T/T2 ze... | 194.50 € | **205.00 €** | 9.0 % | **14.9 %** | 205.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 327.90 € | **337.90 €** | 11.2 % | **14.6 %** | 337.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Běžecký pás REBEL ACTIVE RBA-1014 | 142.90 € | **152.90 €** | 7.6 % | **15.1 %** | 152.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT Epever XTRA4210N G3 BLE, 12/2... | 143.50 € | **152.90 €** | 8.0 % | **15.1 %** | 152.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rozvaděč Legrand Plexo 601988 IP65 plastový 4x18 nás... | 201.50 € | **210.50 €** | 10.2 % | **15.1 %** | 210.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT Epever XTRA3210N G3 BLE, 12/2... | 117.90 € | **126.50 €** | 7.3 % | **15.1 %** | 126.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odvlhčovač vzduchu Dryzix 500 Ruhhy 26498 | 93.90 € | **102.50 €** | 5.3 % | **14.9 %** | 102.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Johansson 6711 Revolution programovatelný zesilovač | 210.00 € | **218.50 €** | 9.9 % | **14.3 %** | 218.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zátěžová vesta HMS KOR20 20 kg | 78.50 € | **87.00 €** | 3.7 % | **14.9 %** | 87.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GV520E15 | 282.90 € | **291.00 €** | 5.1 % | **8.1 %** | 282.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 210.00 € | **218.00 €** | 10.7 % | **14.9 %** | 218.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbanka Compass 07167 JUMP STARTER 7200mAh 600A +... | 79.50 € | **87.50 €** | 4.7 % | **15.3 %** | 87.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V  75Ah MHPower MS75-12(L) LC5-M8 | 210.00 € | **218.00 €** | 6.0 % | **10.0 %** | 218.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 32FFI5670 ANDROID TV | 235.50 € | **243.50 €** | 11.2 % | **15.0 %** | 243.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 32FFI5762 SMART TV FULL HD TIVO | 235.50 € | **243.50 €** | 11.2 % | **15.0 %** | 243.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Záložní zdroj MHPower MPU-1400-24 UPS 1400W 24V čist... | 219.90 € | **227.50 €** | 5.0 % | **8.7 %** | 227.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hoverboard Rebel Cruiser Paint | 138.50 € | **146.00 €** | 9.0 % | **14.9 %** | 146.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Paddleboard SUP REBEL ACTIVE RBA-4501-BL 11'6" 350x8... | 167.50 € | **175.00 €** | 10.0 % | **14.9 %** | 175.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pec na pizzu Ruhhy 26050 | 71.50 € | **78.50 €** | 4.9 % | **15.2 %** | 78.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Paddleboard SUP REBEL ACTIVE RBA-4501-WH 11'6" 350x8... | 168.00 € | **175.00 €** | 10.3 % | **14.9 %** | 175.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 116.50 € | **123.50 €** | 14.6 % | **21.5 %** | 116.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Paddleboard SUP REBEL ACTIVE RBA-4507-OR - ORANŽOVÝ ... | 210.00 € | **216.90 €** | 11.4 % | **15.1 %** | 216.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 32FWI5670 SMART ANDROID TV FULL HD BÍLÁ | 252.00 € | **258.90 €** | 12.0 % | **15.0 %** | 258.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TechniSat DIGITRADIO 217 /černé/ 0000/3998 | 125.90 € | **132.00 €** | 9.6 % | **14.9 %** | 132.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multifunkční tréninková hrazda REBEL ACTIVE RBA-2407 | 66.90 € | **73.00 €** | 5.1 % | **14.7 %** | 73.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 82.50 € | **88.50 €** | 5.2 % | **12.8 %** | 88.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nastavitelná bitumenová činka 2x15kg, REBEL ACTIVE R... | 28.50 € | **34.50 €** | -5.2 % | **14.8 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herní křeslo KRUGER & MATZ GX-150  černo bílé | 82.00 € | **87.90 €** | 7.3 % | **15.0 %** | 87.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 168.00 € | **173.90 €** | 11.2 % | **15.1 %** | 173.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbanka EMOS NTBF30 /B0561B/, 27 000 mAh, 100 W P... | 64.00 € | **69.90 €** | 5.5 % | **15.2 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE TH60E3B | 77.90 € | **83.00 €** | 5.2 % | **12.1 %** | 77.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT EPever DR2210-DDS, 12/24V, 20... | 139.50 € | **144.50 €** | 11.0 % | **15.0 %** | 144.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rádio Imperial Dabman 280 CDBK s funkcí ASA | 232.90 € | **237.90 €** | 12.7 % | **15.1 %** | 237.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 62.50 € | **67.50 €** | 6.0 % | **14.4 %** | 67.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Combo-4In1-Ss | 130.00 € | **135.00 €** | 9.6 % | **13.8 %** | 130.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ADEX ADS108GRP-1PO Reverzní PoE Switch 8x Gbit Port ... | 38.90 € | **43.50 €** | 2.5 % | **14.6 %** | 43.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Činky litinové nastavitelné 15kg, REBEL ACTIVE RBA-2... | 41.90 € | **46.50 €** | 4.1 % | **15.6 %** | 46.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Impregnace na textilní sedačky INPRODUCTS 1l | 48.90 € | **53.50 €** | 4.9 % | **14.7 %** | 53.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herní křeslo KRUGER & MATZ GX-150  černo červené | 92.00 € | **96.50 €** | 9.5 % | **14.8 %** | 96.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herní křeslo KRUGER & MATZ GX-150  černo modré | 92.00 € | **96.50 €** | 9.5 % | **14.8 %** | 96.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Záložní zdroj MHPower MPU-1050-24 UPS 1050W 24V čist... | 143.00 € | **147.50 €** | 4.0 % | **7.3 %** | 147.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Klimatizace GETI GKH18K hybridní 5kW | 1300.50 € | **1304.90 €** | 7.3 % | **7.6 %** | 1304.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 72.50 € | **76.90 €** | 5.4 % | **11.8 %** | 76.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sušička ovoce Ruhhy 25928 400W | 50.50 € | **54.90 €** | 5.9 % | **15.2 %** | 54.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| REBEL Micropower 1000 | 83.50 € | **87.50 €** | 5.1 % | **10.1 %** | 87.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbanka EMOS NTBF20 /B0560B/, 20 000 mAh, 65 W PD... | 39.00 € | **43.00 €** | 3.9 % | **14.5 %** | 43.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka s pumpovanými koly NILS Extreme HC300 červená | 111.00 € | **115.00 €** | 8.3 % | **12.2 %** | 115.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Spinningové kolo REBEL ACTIVE RBA-1007 | 183.90 € | **187.90 €** | 12.6 % | **15.0 %** | 187.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rotoped REBEL ACTIVE RBA-1013 | 66.90 € | **70.90 €** | 8.7 % | **15.2 %** | 70.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 35.50 € | **39.50 €** | 5.1 % | **16.9 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 144.00 € | **147.90 €** | 10.8 % | **13.8 %** | 147.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Činky chromované nastavitelné 30kg, REBEL ACTIVE RBA... | 84.00 € | **87.90 €** | 9.9 % | **15.0 %** | 87.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pohybové čidlo ORBIS DICROMAT MICRO - zapuštěná mont... | 58.90 € | **62.50 €** | 8.2 % | **14.8 %** | 62.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 119.90 € | **123.50 €** | 9.0 % | **12.2 %** | 123.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 63.00 € | **66.50 €** | 8.8 % | **14.8 %** | 66.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Orbitrek REBEL ACTIVE RBA-1011 | 131.50 € | **135.00 €** | 5.0 % | **7.8 %** | 135.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dětská elektrická kytara 22407 růžová + mikrofon + z... | 33.50 € | **36.90 €** | 4.9 % | **15.6 %** | 36.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pohybové čidlo ORBIS DICROMAT 2+CR | 71.50 € | **74.50 €** | 10.6 % | **15.3 %** | 74.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odrážedlo Kruzzel 25767 černé | 37.90 € | **40.90 €** | 6.4 % | **14.9 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odrážedlo Kruzzel 25768 růžové | 37.90 € | **40.90 €** | 6.4 % | **14.9 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6182PS4 | 325.90 € | **328.90 €** | 7.1 % | **8.1 %** | 325.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový senzor pohybu F&F DRL-60-12 12V DC broušený... | 126.00 € | **128.90 €** | 12.5 % | **15.0 %** | 128.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový senzor pohybu F&F DRL-60-12-1 12V DC bílý | 126.00 € | **128.90 €** | 12.5 % | **15.0 %** | 128.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový senzor pohybu F&F DRL-60-12-9 12V DC černý | 126.00 € | **128.90 €** | 12.5 % | **15.0 %** | 128.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový senzor pohybu F&F DRL-60-230 230V AC brouše... | 126.00 € | **128.90 €** | 12.5 % | **15.0 %** | 128.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový senzor pohybu F&F DRL-60-230-9 230V AC černý | 126.00 € | **128.90 €** | 12.5 % | **15.0 %** | 128.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Impregnace na obuv INPRODUCTS 400 ml | 25.00 € | **27.90 €** | 3.5 % | **15.6 %** | 27.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrická pánev do auta 20cm x 4cm 150W 12V | 38.90 € | **41.50 €** | 6.1 % | **13.1 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pec na pizzu TEESA TSA3241-R SUPREME FUN 1200W, 400 ... | 58.90 € | **61.50 €** | 10.1 % | **15.0 %** | 61.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| MASCOM SUNNY-T Android TV 12 4K UHD Android TV multi... | 79.90 € | **82.50 €** | 11.5 % | **15.1 %** | 82.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Detektor oxidu uhličitého CO2 GARNI 201 OneCare | 92.50 € | **95.00 €** | 12.0 % | **15.1 %** | 95.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický ohřívač Lumni Kaminer 26374 | 21.00 € | **23.50 €** | 3.1 % | **15.4 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Motor táhlový HARL 3624+, délka výtahu 24" | 50.00 € | **52.50 €** | 10.0 % | **15.5 %** | 52.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dcolor GD2 Android TV - 4K UHD multimediální přehrávač | 71.00 € | **73.50 €** | 11.4 % | **15.4 %** | 73.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V/17Ah  REBEL | 26.50 € | **29.00 €** | 4.5 % | **14.3 %** | 29.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pogumované litinové činky HEX 2x7 kg REBEL ACTIVE RB... | 35.50 € | **38.00 €** | 7.2 % | **14.8 %** | 38.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držák UNI LIFT stropní TÜV/GS | 29.00 € | **31.50 €** | 6.1 % | **15.3 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 193.00 € | **195.50 €** | 12.7 % | **14.2 %** | 195.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Akupresurní podložka s polštářem REBEL ACTIVE RBA-60... | 11.50 € | **14.00 €** | -5.9 % | **14.5 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE ToastMax | 46.50 € | **49.00 €** | 9.1 % | **15.0 %** | 46.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Black | 68.50 € | **71.00 €** | 5.8 % | **9.6 %** | 68.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| LCD displej KRUGER & MATZ KM2021 Android Auto Apple ... | 79.50 € | **81.90 €** | 11.8 % | **15.2 %** | 81.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANON PIXMA G3430 Pink | 140.50 € | **142.90 €** | 5.3 % | **7.1 %** | 140.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor PWM Epever VS3024AU, 12/24V, 30A s... | 50.50 € | **52.90 €** | 10.2 % | **15.4 %** | 52.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sušička ovoce Ruhhy 25929 400W | 50.50 € | **52.90 €** | 10.2 % | **15.4 %** | 52.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TELEVES INNOVA BOSS LTE700 5G pokojová inteligentní ... | 55.50 € | **57.90 €** | 10.5 % | **15.3 %** | 57.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 57.50 € | **59.50 €** | 8.5 % | **12.3 %** | 59.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pohybové čidlo ORBIS DICROMAT+ - zapuštěná montáž do... | 20.50 € | **22.50 €** | 4.6 % | **14.8 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| NEDIS WIFIZBT10CWT chytrá brána ZigBee 3.0 do zásuvk... | 27.50 € | **29.50 €** | 7.9 % | **15.7 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Strong LEAP-S3 Google TV 4K UHD Android TV multimedi... | 67.50 € | **69.50 €** | 9.6 % | **12.9 %** | 69.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 17Ah XTREME / Enerwell bezúdr... | 28.50 € | **30.50 €** | 7.0 % | **14.5 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Spinningové kolo REBEL ACTIVE RBA-1008 | 121.50 € | **123.50 €** | 13.2 % | **15.0 %** | 123.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Balanční podložka REBEL ACTIVE RBA-3104-46 | 23.90 € | **25.90 €** | 6.6 % | **15.6 %** | 25.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy ORYX X220 Iris | 18.90 € | **20.90 €** | 7.2 % | **18.5 %** | 18.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 36.50 € | **38.50 €** | 9.3 % | **15.3 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herní křeslo KRUGER & MATZ GX-150  bílo růžové | 92.00 € | **93.90 €** | 12.9 % | **15.2 %** | 93.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.00 € | **31.90 €** | 9.9 % | **16.9 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless controler GameSir T4n (white) | 24.00 € | **25.90 €** | 12.3 % | **21.2 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 150Ah VIPOW BAT0498 Bluetooth | 402.00 € | **403.90 €** | 12.9 % | **13.4 %** | 403.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor PWM Epever LS2024B, 12/24V, 20A | 39.90 € | **41.50 €** | 10.9 % | **15.4 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kruger&Matz Street KM0564 bluetooth reproduktor modrý | 24.90 € | **26.50 €** | 8.1 % | **15.1 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držák monitoru Cabletech UCH0220 (13-32'' 2x10kg) černý | 24.90 € | **26.50 €** | 8.7 % | **15.6 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Záložní zdroj MHPower DL181-24 Mini UPS 24V 0,5A | 18.90 € | **20.50 €** | 5.1 % | **14.0 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guma posilovací REBEL ACTIVE RBA-3000-S4 Latexová sa... | 18.90 € | **20.50 €** | 6.0 % | **15.0 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Činková tyč olympijská rovná s ložisky 120cm 9kg 50m... | 50.90 € | **52.50 €** | 5.2 % | **8.5 %** | 52.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight akumulátorové záhradné nožnice | 63.90 € | **65.50 €** | 17.1 % | **20.1 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 8.90 € | **10.50 €** | 18.8 % | **40.2 %** | 8.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TechniSat DIGITRADIO BT 2 gray 0001/3973 reproduktor... | 167.90 € | **169.50 €** | 13.8 % | **14.9 %** | 169.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 27.00 € | **28.50 €** | 9.4 % | **15.4 %** | 27.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 82.00 € | **83.50 €** | 10.7 % | **12.7 %** | 83.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kuchyňský robot TEESA TSA3545-B EASY COOK SINGLE BLA... | 83.50 € | **85.00 €** | 13.0 % | **15.0 %** | 85.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| WiFi extender REBEL KOM1032 | 23.00 € | **24.50 €** | 7.2 % | **14.1 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 17 Ah MHPower MS17-12 | 28.50 € | **30.00 €** | 8.6 % | **14.3 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 73.50 € | **75.00 €** | 10.3 % | **12.6 %** | 75.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V /  7,5Ah XTREME / Enerwell bezú... | 14.50 € | **16.00 €** | 4.4 % | **15.2 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rádio TechniSat DIGITRADIO 550 IR /černé/ | 151.00 € | **152.50 €** | 13.8 % | **14.9 %** | 152.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada 16 barevných kovových autíček 26319 | 10.50 € | **12.00 €** | 0.5 % | **14.9 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Impregnace na kožené oděvy INPRODUCTS WAX 200 ml | 17.50 € | **19.00 €** | 6.0 % | **15.1 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka Spidoo Kruzzel 25630 fialová | 43.50 € | **45.00 €** | 5.4 % | **9.1 %** | 45.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Perfect Steam Air Board L/Uni | 13.50 € | **15.00 €** | 9.2 % | **21.3 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Thermo Reflect L/Universal | 13.50 € | **15.00 €** | 9.2 % | **21.3 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 81520 Pegasus 200 Solid | 36.50 € | **38.00 €** | 9.7 % | **14.2 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ventilátor mini ruční stolní Ruhhy 27781 | 10.50 € | **11.90 €** | 3.1 % | **16.8 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Univerzální dálkový ovladač SUPERIOR LG – Bluetooth ... | 10.50 € | **11.90 €** | 2.6 % | **16.3 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Univerzální dálkový ovladač SUPERIOR Samsung – Bluet... | 10.50 € | **11.90 €** | 2.6 % | **16.3 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cyklotaška s nářadím | 9.10 € | **10.50 €** | 1.9 % | **17.6 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera endoskopická Bigstren 19376 | 46.50 € | **47.90 €** | 11.6 % | **15.0 %** | 47.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gril elektrický Ruhhy 26176 | 29.50 € | **30.90 €** | 9.9 % | **15.1 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V /  9,0 Ah MHPower MS9-12 | 15.50 € | **16.90 €** | 5.9 % | **15.5 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hula hoop REBEL ACTIVE RBA-3064-PK | 9.20 € | **10.50 €** | 3.2 % | **17.7 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Budík digitální TechnoLine WT 182 | 20.90 € | **22.00 €** | 9.1 % | **14.9 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| PT Adapter Epever PAL-ADP-50AN | 37.90 € | **39.00 €** | 11.6 % | **14.8 %** | 39.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní REBEL POWER 500 RB-4001 300W 12V | 77.90 € | **79.00 €** | 9.6 % | **11.2 %** | 79.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 67.50 € | **68.50 €** | 6.0 % | **7.6 %** | 68.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 226.90 € | **227.90 €** | 5.4 % | **5.8 %** | 227.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj pulzní EMOS N3112 s hřebínkem 1500mA (3-12V) u... | 13.50 € | **14.50 €** | 7.4 % | **15.3 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aroma difuzer Stone šedé dřevo 500ml SIXTOL | 29.50 € | **30.50 €** | 4.0 % | **7.5 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Budík digitální TechnoLine WT 195W | 33.50 € | **34.50 €** | 12.2 % | **15.6 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Matrace nafukovací AVENLI 24161 KING SIZE 203x152x25 cm | 33.50 € | **34.50 €** | 11.5 % | **14.8 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor PWM Epever LS3024B, 12/24V, 30A | 30.90 € | **31.90 €** | 11.6 % | **15.2 %** | 31.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odvlhčovač vzduchu Ruhhy 26829 | 33.50 € | **34.50 €** | 12.0 % | **15.4 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držák projektoru Cabletech UCH0148 univerzální | 13.50 € | **14.50 €** | 6.0 % | **13.9 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie motocyklová  12V /  9Ah Vipow | 24.50 € | **25.50 €** | 10.2 % | **14.7 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 12Ah XTREME / Enerwell bezúdr... | 21.00 € | **22.00 €** | 9.5 % | **14.7 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| KRUGER & MATZ KM0903 Powerbanka 10000 mAh Li-pol | 10.90 € | **11.90 €** | 7.0 % | **16.8 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 166.50 € | **167.50 €** | 14.3 % | **15.0 %** | 167.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termotaška Trizand 25635 30L | 10.50 € | **11.50 €** | 3.6 % | **13.5 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Akupresurní podložka REBEL ACTIVE RBA-6010-GL 110x42... | 16.50 € | **17.50 €** | 8.4 % | **14.9 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 50.00 € | **51.00 €** | 9.3 % | **11.5 %** | 51.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada hasičských vozidel 26305 | 17.50 € | **18.50 €** | 7.4 % | **13.5 %** | 18.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo vodní filtry 3+1 | 11.50 € | **12.50 €** | 7.8 % | **17.2 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Tune 670NC white | 63.00 € | **64.00 €** | 9.3 % | **11.0 %** | 63.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP Black | 14.50 € | **15.50 €** | 9.4 % | **16.9 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP White | 14.50 € | **15.50 €** | 9.3 % | **16.8 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hoverboard Rebel Cruiser Joy | 151.00 € | **151.90 €** | 14.3 % | **15.0 %** | 151.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 05A1 | 102.00 € | **102.90 €** | 6.8 % | **7.8 %** | 102.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje F492PW | 174.00 € | **174.90 €** | 8.4 % | **9.0 %** | 174.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.00 € | **14.90 €** | 5.2 % | **12.0 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.00 € | **11.90 €** | 34.7 % | **45.7 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny infračervený teplomer -50° +380°C | 13.00 € | **13.90 €** | 30.8 % | **39.9 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.00 € | **10.90 €** | 34.6 % | **46.7 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.00 € | **12.90 €** | 30.6 % | **40.4 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.00 € | **13.90 €** | 12.6 % | **20.3 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 14.00 € | **14.90 €** | 9.8 % | **16.8 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Roadstar TRA-2989 Přenosné vícepásmové r | 14.00 € | **14.90 €** | 5.5 % | **12.3 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP 15,6" Taška Prelude | 14.00 € | **14.90 €** | 7.3 % | **14.2 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 35.00 € | **35.90 €** | 30.1 % | **33.4 %** | 35.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.00 € | **28.90 €** | 34.8 % | **39.1 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 39.00 € | **39.90 €** | 13.5 % | **16.1 %** | 39.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, biela | 27.00 € | **27.90 €** | 21.3 % | **25.4 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.00 € | **17.90 €** | 39.2 % | **46.6 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.00 € | **16.90 €** | 28.3 % | **35.5 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 54.00 € | **54.90 €** | 36.0 % | **38.3 %** | 54.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.00 € | **45.90 €** | 38.8 % | **41.6 %** | 45.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 28.00 € | **28.90 €** | 23.2 % | **27.1 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi 6 AX3000 Router (M30/E) | 37.00 € | **37.90 €** | 5.3 % | **7.8 %** | 37.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Evolveo Motion D1, ovladač s klávesnicí | 33.00 € | **33.90 €** | 5.3 % | **8.1 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight batériová kamera WiFi so solárnym panelom | 58.00 € | **58.90 €** | 33.5 % | **35.6 %** | 58.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.00 € | **55.90 €** | 34.2 % | **36.4 %** | 55.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.00 € | **29.90 €** | 16.7 % | **20.3 %** | 29.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.00 € | **33.90 €** | 22.4 % | **25.7 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.00 € | **19.90 €** | 33.3 % | **39.6 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GS620C10S | 342.90 € | **343.50 €** | 6.9 % | **7.1 %** | 342.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 21.90 € | **22.50 €** | 6.4 % | **9.3 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodiny nástěnné TechnoLine WT 8610 | 51.90 € | **52.50 €** | 13.7 % | **15.0 %** | 52.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Masážní přístroj Soulima 22579 9v1 | 16.90 € | **17.50 €** | 10.6 % | **14.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| TV držák AX OPTICUM Strong Prima 30"–70" | 16.90 € | **17.50 €** | 11.0 % | **14.9 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok Twin MCM4T01HD Gold LNB 4,3st | 31.90 € | **32.50 €** | 13.7 % | **15.8 %** | 32.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| PIR senzor (pohybové čidlo) ORNO OR-CR-276/W Ultra p... | 18.90 € | **19.50 €** | 12.2 % | **15.8 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kettlebell litinový nastavitelný 9 kg REBEL ACTIVE R... | 43.90 € | **44.50 €** | 9.1 % | **10.6 %** | 44.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freestyle koloběžka NILS Extreme HS033 černo-červená | 47.90 € | **48.50 €** | 8.4 % | **9.8 %** | 48.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit 2AIR | 32.90 € | **33.50 €** | 13.8 % | **15.9 %** | 32.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 19.90 € | **20.50 €** | 34.4 % | **38.4 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Pegasus 150 Solid Slim BLACK | 31.90 € | **32.50 €** | 8.2 % | **10.3 %** | 31.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 20.90 € | **21.50 €** | 25.8 % | **29.4 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 43.90 € | **44.50 €** | 10.8 % | **12.3 %** | 43.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 37.90 € | **38.50 €** | 37.4 % | **39.5 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 63.90 € | **64.50 €** | 20.0 % | **21.1 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V /  3,4Ah XTREME bezúdržbový aku... | 10.90 € | **11.50 €** | 11.0 % | **17.2 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Podložka na cvičení, jógu a fitness 1,5 cm Rebel Act... | 11.90 € | **12.50 €** | 6.2 % | **11.6 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Podložka na cvičení, jógu a fitness 1,5 cm Rebel Act... | 11.90 € | **12.50 €** | 6.2 % | **11.6 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 14.90 € | **15.50 €** | 25.8 % | **30.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 12.90 € | **13.50 €** | 8.9 % | **14.0 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 14.90 € | **15.50 €** | 40.2 % | **45.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 14.90 € | **15.50 €** | 34.4 % | **39.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.90 € | **11.50 €** | 31.1 % | **38.3 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 12.90 € | **13.50 €** | 30.3 % | **36.3 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Palm tmavé drevo 500 ml | 22.00 € | **22.50 €** | 9.3 % | **11.7 %** | 22.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan bílé dřevo 350ml | 18.00 € | **18.50 €** | 9.5 % | **12.6 %** | 18.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovačka G21 Onyx | 57.00 € | **57.50 €** | 14.4 % | **15.4 %** | 57.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 210.00 € | **210.50 €** | 12.6 % | **12.9 %** | 210.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 281.00 € | **281.50 €** | 7.7 % | **7.9 %** | 281.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 111.00 € | **111.50 €** | 8.5 % | **9.0 %** | 111.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 134.00 € | **134.50 €** | 6.9 % | **7.3 %** | 134.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 79.00 € | **79.50 €** | 6.6 % | **7.3 %** | 79.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 89.00 € | **89.50 €** | 12.0 % | **12.6 %** | 89.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Johansson 6714 Profino Revolution Lite programovatel... | 196.00 € | **196.50 €** | 10.2 % | **10.4 %** | 196.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mini stepper Rebel Active RBA-3226 | 53.00 € | **53.50 €** | 7.4 % | **8.4 %** | 53.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 168.00 € | **168.50 €** | 13.7 % | **14.1 %** | 168.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Ultimate Graphite Black | 248.00 € | **248.50 €** | 6.6 % | **6.8 %** | 248.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada nákladního auta TIR se 6 závodními autíčky 26303 | 10.00 € | **10.50 €** | 9.1 % | **14.6 %** | 10.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 268.00 € | **268.50 €** | 7.4 % | **7.6 %** | 268.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíječka gelových baterií VIPOW BAT1126, 12V | 12.00 € | **12.50 €** | 9.6 % | **14.2 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Bloom tmavé drevo 200 ml | 13.00 € | **13.50 €** | 6.1 % | **10.2 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Car Flame do auta čierny 100ml,... | 13.00 € | **13.50 €** | 7.2 % | **11.3 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Palm biele drevo 500 ml | 22.00 € | **22.50 €** | 9.3 % | **11.7 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.00 € | **18.50 €** | 9.5 % | **12.6 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacia dóza G21 1900 ml, nerezová | 16.00 € | **16.50 €** | 11.9 % | **15.4 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacia dóza G21 680 ml, nerezová | 11.00 € | **11.50 €** | 10.0 % | **15.0 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koš na prádlo skládací Ruhhy 15371 25 L | 13.50 € | **14.00 €** | 10.4 % | **14.5 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tašky na tříděný odpad SORT EASY 4 CARTON, 30x30x40c... | 10.50 € | **11.00 €** | 9.2 % | **14.4 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| LED stropní světlo Adviti VITO AD-PL-6515WLZM/CCT TUYA | 29.50 € | **30.00 €** | 13.1 % | **15.0 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 na pitie, 1000 ml, šedá s rukoväťou | 18.00 € | **18.50 €** | 12.0 % | **15.1 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 na pitie, 1000 ml, zelená s rukoväťou | 18.00 € | **18.50 €** | 12.0 % | **15.1 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 na pitie, 350 ml, nerezová | 11.00 € | **11.50 €** | 10.0 % | **15.0 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 na pitie, 350 ml, oceľovo šedá | 11.00 € | **11.50 €** | 10.0 % | **15.0 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 33.00 € | **33.50 €** | 15.4 % | **17.2 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra žiarovka TP-Link Tapo L535E E27, 8,7W, 230V, c... | 23.00 € | **23.50 €** | 27.8 % | **30.6 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP PLUS CP-UNB-CM352 IP vnitřní videomonitor | 281.00 € | **281.50 €** | 14.8 % | **15.0 %** | 281.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer Air PR... | 59.00 € | **59.50 €** | 6.9 % | **7.8 %** | 59.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/W | 16.00 € | **16.50 €** | 8.1 % | **11.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Detektor kouře ORNO OR-DC-637 | 12.00 € | **12.50 €** | 9.3 % | **13.8 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rozváděč R-HW-SW16P-AP (pro Huawei) | 974.00 € | **974.50 €** | 14.9 % | **15.0 %** | 974.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 372.00 € | **372.50 €** | 6.0 % | **6.1 %** | 372.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| TEESA TSA9017 teplovzdušný ventilátor s imitací krbu... | 57.50 € | **58.00 €** | 13.9 % | **14.9 %** | 58.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Perfection brown | 210.00 € | **210.50 €** | 17.4 % | **17.7 %** | 210.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Perfection Cappuccino | 210.00 € | **210.50 €** | 17.4 % | **17.7 %** | 210.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Perfection white | 210.00 € | **210.50 €** | 17.4 % | **17.7 %** | 210.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vysávač Niceboy ION Charles i4 - white | 161.00 € | **161.50 €** | 6.6 % | **6.9 %** | 161.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vysavač akumulátorový  TEESA TSA5055 SWEEPER 9000 2v1 | 92.50 € | **93.00 €** | 14.2 % | **14.8 %** | 93.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čistička vzduchu OPUS Aeroprime X auto, do 35 m2, HE... | 165.00 € | **165.50 €** | 6.6 % | **6.9 %** | 165.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 8x42 | 150.00 € | **150.50 €** | 10.3 % | **10.7 %** | 150.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| AI-NC-D50L3-M-0360 5.0 Mpix venkovní dome IP kamera ... | 151.00 € | **151.50 €** | 14.5 % | **14.9 %** | 151.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| AI-NC-MC40-VMW-0280 4.0 Mpix vnitřní IP mini kamera ... | 143.00 € | **143.50 €** | 14.5 % | **14.9 %** | 143.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 122.00 € | **122.50 €** | 13.0 % | **13.5 %** | 122.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 102.00 € | **102.50 €** | 14.3 % | **14.8 %** | 102.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TS25ZML4-M 2.0Mpix venkovní IP kamera s IR | 204.00 € | **204.50 €** | 14.6 % | **14.9 %** | 204.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 219.00 € | **219.50 €** | 13.5 % | **13.8 %** | 219.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 70.00 € | **70.50 €** | 13.9 % | **14.7 %** | 70.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 30.00 € | **30.50 €** | 10.0 % | **11.8 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domácí monitorovací systém TechnoLine MA10001 Starte... | 75.50 € | **76.00 €** | 14.1 % | **14.8 %** | 76.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 417.00 € | **417.50 €** | 12.1 % | **12.3 %** | 417.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada BOYA BY-WM4 Pro-K6 | 108.00 € | **108.50 €** | 6.2 % | **6.7 %** | 108.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vysielač BOYA BY-TX8 Pro na mikrofón | 36.00 € | **36.50 €** | 6.4 % | **7.9 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 250.00 € | **250.50 €** | 6.9 % | **7.1 %** | 250.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V /  7,0 Ah MHPower MS7-12 | 12.00 € | **12.50 €** | 9.6 % | **14.2 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 17.50 € | **18.00 €** | 6.7 % | **9.8 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V/ 7,5 Ah  REBEL bezúdržbová | 14.00 € | **14.50 €** | 11.0 % | **15.0 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbanka EMOS AlphaQ3, 10 000 mAh, 22,5 W, černá | 14.50 € | **15.00 €** | 5.5 % | **9.2 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrátové čidlo Technoline TX108DTH pro WS9252 | 22.00 € | **22.50 €** | 10.3 % | **12.8 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 22.00 € | **22.50 €** | 10.6 % | **13.1 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GARNI 072L čidlo detekce blesků | 49.00 € | **49.50 €** | 8.1 % | **9.2 %** | 49.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| IKUSI NBS 704-C48 - domovní zesilovač | 93.00 € | **93.50 €** | 14.1 % | **14.8 %** | 93.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Televes 552220 Crocodile 5G LTE700 domovní zesilovač | 35.00 € | **35.50 €** | 12.8 % | **14.4 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Televes AVANT 12 PRO (532203) | 386.00 € | **386.50 €** | 14.8 % | **15.0 %** | 386.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitální piano Kruger&Matz KMDP-45P-BK černé se sto... | 263.00 € | **263.50 €** | 14.7 % | **15.0 %** | 263.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skládací síť REBEL ACTIVE pro badminton a další sporty | 29.00 € | **29.50 €** | 8.5 % | **10.3 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Medicinbal REBEL ACTIVE RBA-3108-10 Slam Ball 23cm 10kg | 17.00 € | **17.50 €** | 11.3 % | **14.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tréninkové cvičební pásy TRX P3-3 REBEL ACTIVE RBA-3... | 20.00 € | **20.50 €** | 12.2 % | **15.0 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Akupresurní podložka REBEL ACTIVE RBA-6013-GL 130x50... | 31.50 € | **32.00 €** | 10.4 % | **12.2 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kruger & Matz KM1303 | 16.00 € | **16.50 €** | 5.1 % | **8.4 %** | 16.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 16.00 € | **16.50 €** | 9.7 % | **13.1 %** | 16.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultrazvukový merací prístroj na hrúbku Uni-T UT345A | 86.00 € | **86.50 €** | 6.3 % | **6.9 %** | 86.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.50 € | **13.00 €** | 33.2 % | **38.5 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 22.00 € | **22.50 €** | 27.4 % | **30.3 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 17.50 € | **18.00 €** | 31.5 % | **35.3 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.50 € | **20.00 €** | 23.3 % | **26.4 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 11.50 € | **12.00 €** | 41.2 % | **47.4 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.50 € | **14.00 €** | 28.1 % | **32.8 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálny digitálny multimeter UNI-T UT191T | 70.00 € | **70.50 €** | 11.3 % | **12.1 %** | 70.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 7.20 € | **7.70 €** | 43.5 % | **53.4 %** | 7.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 45.00 € | **45.50 €** | 4.5 % | **5.6 %** | 45.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight profesionálna laserová vodováha - zelený laser | 37.50 € | **38.00 €** | 30.3 % | **32.0 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 22.50 € | **23.00 €** | 36.2 % | **39.2 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Detektor kovov UNI-T UT387E | 41.00 € | **41.50 €** | 5.3 % | **6.5 %** | 41.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.50 € | **22.00 €** | 22.5 % | **25.3 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CrockPot CSC062X | 155.00 € | **155.50 €** | 5.4 % | **5.8 %** | 155.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Ambito 0516 90000 bílý/tyrkysový | 64.00 € | **64.50 €** | 9.5 % | **10.3 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver VS5910X | 280.00 € | **280.50 €** | 9.3 % | **9.5 %** | 280.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT 51016 | 48.50 € | **49.00 €** | 6.1 % | **7.2 %** | 48.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Svetelný merač UNI-T UT383 | 16.00 € | **16.50 €** | 7.8 % | **11.1 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 26.00 € | **26.50 €** | 9.3 % | **11.4 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 19.50 € | **20.00 €** | 21.6 % | **24.7 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Marvo HG8928 sluchátka s mikrofonem | 12.00 € | **12.50 €** | 5.2 % | **9.6 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izbová anténa, DVB-T2/FM, 36dB | 11.50 € | **12.00 €** | 14.3 % | **19.3 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/5X/1 | 48.00 € | **48.50 €** | 7.2 % | **8.3 %** | 48.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BMGB25332BG | 176.50 € | **177.00 €** | 7.4 % | **7.7 %** | 176.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE F4142PW | 221.50 € | **222.00 €** | 7.8 % | **8.1 %** | 221.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 195.50 € | **195.90 €** | 10.9 % | **11.2 %** | 195.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kuchyňský robot Ruhhy 25728 | 143.50 € | **143.90 €** | 8.7 % | **9.0 %** | 143.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sous vide G21 Maestro, WiFi, 1200 W | 107.50 € | **107.90 €** | 11.5 % | **11.9 %** | 107.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 159.50 € | **159.90 €** | 5.5 % | **5.8 %** | 159.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 169.50 € | **169.90 €** | 6.7 % | **6.9 %** | 169.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Barkan 4400 polohovací držák pro TV 32"-80" | 81.50 € | **81.90 €** | 14.4 % | **14.9 %** | 81.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 91.50 € | **91.90 €** | 14.4 % | **14.9 %** | 91.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TC51L5C-VMDS 5.0 Mpix venkovní IP kamera s IR... | 227.50 € | **227.90 €** | 14.8 % | **15.0 %** | 227.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Detektor oxidu uhličitého CO2 LEVENHUK Wezzer Air MC10 | 74.50 € | **74.90 €** | 6.4 % | **7.0 %** | 74.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový | 81.50 € | **81.90 €** | 6.3 % | **6.9 %** | 81.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrátové čidlo pro měření ovlhčení listů GARNI 098W | 69.50 € | **69.90 €** | 7.4 % | **8.0 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TechniSat DIGITRADIO 30 V2 /bílé/ 0010/3955 | 67.50 € | **67.90 €** | 14.6 % | **15.3 %** | 67.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 239.50 € | **239.90 €** | 9.1 % | **9.3 %** | 239.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 112.50 € | **112.90 €** | 7.0 % | **7.3 %** | 112.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 166.50 € | **166.90 €** | 14.7 % | **15.0 %** | 166.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-L6 | 151.50 € | **151.90 €** | 5.9 % | **6.1 %** | 151.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL CHARGEES3 | 119.50 € | **119.90 €** | 15.2 % | **15.6 %** | 119.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Arzopa Portable Monitor Z1FC 16,1" | 114.50 € | **114.90 €** | 10.0 % | **10.4 %** | 114.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíječka USB BLOW 76-033 GaN 45W USB-A + USB-C + 1m... | 10.50 € | **10.90 €** | 11.4 % | **15.7 %** | 10.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 11.50 € | **11.90 €** | 5.5 % | **9.2 %** | 11.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Honey Day 160 ml | 10.50 € | **10.90 €** | 7.1 % | **11.2 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA MediaBox XT850 - originální dálkové ovládání | 12.50 € | **12.90 €** | 11.2 % | **14.7 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-M17R směrový, TRS, závit 1/4” | 10.50 € | **10.90 €** | 5.3 % | **9.3 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Turistická rybářská židle, skládací s opěradlem | 12.50 € | **12.90 €** | 11.6 % | **15.1 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pikniková deka TEESA TSA8903-1 200x200 cm šedá kostka | 12.50 € | **12.90 €** | 11.6 % | **15.1 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Batéria Jupio C 5000mAh (malé monočlánky) 2ks, dobíj... | 18.50 € | **18.90 €** | 8.8 % | **11.2 %** | 18.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan biely lesk 350 ml | 18.50 € | **18.90 €** | 12.6 % | **15.0 %** | 18.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Batéria Jupio Alkaline AA balenie 100ks | 35.50 € | **35.90 €** | 8.5 % | **9.7 %** | 35.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mixér G21 VitalStick 800 W, Black | 47.50 € | **47.90 €** | 11.3 % | **12.3 %** | 47.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mixér G21 VitalStick 800 W, Red/Black | 47.50 € | **47.90 €** | 11.3 % | **12.3 %** | 47.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 58.50 € | **58.90 €** | 5.0 % | **5.8 %** | 58.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 20.50 € | **20.90 €** | 13.9 % | **16.1 %** | 20.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 63.50 € | **63.90 €** | 5.1 % | **5.8 %** | 63.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 43.50 € | **43.90 €** | 9.5 % | **10.5 %** | 43.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 41.50 € | **41.90 €** | 16.1 % | **17.3 %** | 41.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 16.50 € | **16.90 €** | 7.7 % | **10.4 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktor Bluetooth KRUGER & MATZ KM0566  STREET X... | 39.50 € | **39.90 €** | 13.7 % | **14.9 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 37.50 € | **37.90 €** | 8.7 % | **9.8 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-M2D všesměrový klopový, Lightning | 22.50 € | **22.90 €** | 7.7 % | **9.6 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prijímač BOYA BY-WM4RXD bezdrátový, iOS, dosah 60m | 45.50 € | **45.90 €** | 8.9 % | **9.8 %** | 45.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prijímač BOYA BY-WM4RXU bezdrátový, USB-C, Android, ... | 45.50 € | **45.90 €** | 8.9 % | **9.8 %** | 45.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 12Ah  GETI bezúdržbový akumul... | 37.50 € | **37.90 €** | 7.4 % | **8.6 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kaon MZ-52, satelitní přijímač Skylink | 59.50 € | **59.90 €** | 5.6 % | **6.3 %** | 59.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir T4n Nova Lite (ružový) | 20.50 € | **20.90 €** | 6.9 % | **9.0 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir T4n Nova Lite (žltý) | 20.50 € | **20.90 €** | 6.9 % | **9.0 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir T4n Nova Lite (zelený) | 20.50 € | **20.90 €** | 6.9 % | **9.0 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 278.50 € | **278.90 €** | 7.6 % | **7.7 %** | 278.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 589.50 € | **589.90 €** | 6.2 % | **6.2 %** | 589.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multipřepínač TeleTek 13/32 | 468.50 € | **468.90 €** | 14.9 % | **15.0 %** | 468.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TE41L5E-MDS-0360 4.0 Mpix venkovní IP kamera ... | 387.50 € | **387.90 €** | 14.9 % | **15.0 %** | 387.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UVR-1601K2-I3 Šestnáctikanálový 5v1 DVR s kompres... | 528.50 € | **528.90 €** | 14.9 % | **15.0 %** | 528.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Běžecký pás REBEL ACTIVE RBA-1001 | 278.50 € | **278.90 €** | 14.8 % | **15.0 %** | 278.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.70 € | **3.00 €** | 31.4 % | **46.0 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná stolná lampička s klipom bi... | 9.20 € | **9.40 €** | 8.9 % | **11.2 %** | 9.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.70 € | **8.90 €** | 14.5 % | **17.1 %** | 8.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.20 € | **8.40 €** | 40.4 % | **43.8 %** | 8.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 8.70 € | **8.90 €** | 10.3 % | **12.9 %** | 8.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.50 € | **4.70 €** | 35.0 % | **41.0 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.10 € | **4.30 €** | 29.2 % | **35.5 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.50 € | **2.70 €** | 27.0 % | **37.2 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.50 €** | 24.3 % | **28.3 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.50 €** | 5.4 % | **8.7 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight cestovný adaptér do Veľkej Británie, typ G | 4.70 € | **4.90 €** | 15.4 % | **20.4 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.10 € | **4.30 €** | 32.3 % | **38.7 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB A+C 20W fast charger | 6.20 € | **6.40 €** | 32.6 % | **36.9 %** | 6.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 7.80 € | **8.00 €** | 33.5 % | **36.9 %** | 7.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.40 € | **3.60 €** | 9.3 % | **15.7 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.30 € | **7.50 €** | 35.2 % | **38.9 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.20 € | **4.40 €** | 30.3 % | **36.5 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.10 € | **5.30 €** | 16.5 % | **21.0 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.10 € | **5.30 €** | 32.0 % | **37.2 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.50 € | **6.70 €** | 33.4 % | **37.6 %** | 6.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.50 € | **3.70 €** | 37.5 % | **45.3 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.70 € | **5.90 €** | 40.4 % | **45.4 %** | 5.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.50 € | **7.70 €** | 40.5 % | **44.2 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.40 € | **3.60 €** | 17.6 % | **24.5 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.00 € | **1.20 €** | 16.1 % | **39.4 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.10 € | **1.30 €** | 19.2 % | **40.9 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.70 € | **1.90 €** | 10.6 % | **23.6 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 1.80 € | **2.00 €** | 10.9 % | **23.2 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.60 € | **2.80 €** | 25.8 % | **35.5 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.70 € | **2.90 €** | 14.9 % | **23.4 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.10 € | **3.30 €** | 27.9 % | **36.2 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.70 € | **3.90 €** | 19.8 % | **26.3 %** | 3.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 7.90 € | **8.10 €** | 8.3 % | **11.1 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.60 €** | 28.5 % | **32.5 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.60 €** | 28.5 % | **32.5 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny merač spotreby el. energie, veľký ... | 9.80 € | **10.00 €** | 22.6 % | **25.1 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.80 € | **10.00 €** | 42.8 % | **45.7 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.40 € | **7.60 €** | 21.5 % | **24.8 %** | 7.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.90 € | **7.10 €** | 10.2 % | **13.4 %** | 6.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 258.90 € | **259.00 €** | 7.7 % | **7.7 %** | 259.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| HiFi věž Kruger&Matz KM1995 s CD, DAB+/FM rádiem | 603.90 € | **604.00 €** | 15.0 % | **15.0 %** | 604.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-USP-D2520L10-D 2.0 Mpix venkovní PTZ kamera 4V1 s... | 481.90 € | **482.00 €** | 14.9 % | **14.9 %** | 482.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP PLUS CP-VNC-V4KZR3-VMD-V2 4K venkovní antivandal ... | 341.90 € | **342.00 €** | 14.9 % | **14.9 %** | 342.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNR-4K4042-P4V3 Síťový videorekordér H.265 4K pro... | 481.90 € | **482.00 €** | 14.9 % | **14.9 %** | 482.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UVR-0401L1B-4KI3 Čtyřkanálový 4K 5v1 DVR s kompre... | 267.90 € | **268.00 €** | 14.9 % | **14.9 %** | 268.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D Tlačiareň Creality K1 MAX | 496.90 € | **497.00 €** | 5.1 % | **5.2 %** | 496.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sendvičovač TEESA TSA3221  3v1 | 23.90 € | **24.00 €** | 5.2 % | **5.6 %** | 23.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skládací koloběžka NILS Extreme HM2009 šedá | 46.90 € | **47.00 €** | 6.2 % | **6.4 %** | 46.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacia dóza G21 2 L, marinovacia | 22.90 € | **23.00 €** | 16.2 % | **16.7 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodiny nástěnné TechnoLine WT 1016 | 18.90 € | **19.00 €** | 8.5 % | **9.1 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termohrnček G21 FlowCup 1200 ml - grafitovo modrý | 20.90 € | **21.00 €** | 19.1 % | **19.6 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termohrnček G21 FlowCup 1200 ml – eukalyptovo zelený | 20.90 € | **21.00 €** | 19.1 % | **19.6 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 20.90 € | **21.00 €** | 19.1 % | **19.6 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termohrnček G21 FlowCup 1200 ml – pieskovo béžový | 20.90 € | **21.00 €** | 19.1 % | **19.6 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 20.90 € | **21.00 €** | 19.1 % | **19.6 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska na jedlo G21 500 ml – pieskovo béžová | 20.90 € | **21.00 €** | 19.1 % | **19.6 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 24.90 € | **25.00 €** | 17.8 % | **18.3 %** | 25.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 24.90 € | **25.00 €** | 17.8 % | **18.3 %** | 25.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra žiarovka TP-Link Tapo L430C(2-pack) E14, 4,8W,... | 27.90 € | **28.00 €** | 30.2 % | **30.7 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| PIR senzor (pohybové čidlo) ORNO OR-CR-275/W | 16.90 € | **17.00 €** | 14.6 % | **15.3 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA500 nádobka na prach p... | 33.90 € | **34.00 €** | 8.1 % | **8.4 %** | 34.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA411 Vodotesná podložka... | 16.90 € | **17.00 €** | 10.4 % | **11.0 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 50.90 € | **51.00 €** | 12.1 % | **12.3 %** | 51.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 22.90 € | **23.00 €** | 6.8 % | **7.3 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíječka baterií GP ReCyko B423 4× AA GP ReCyko 210... | 16.90 € | **17.00 €** | 7.1 % | **7.7 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-BM2021 kondenzátorový směrový pro f... | 18.90 € | **19.00 €** | 8.6 % | **9.2 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-F8C lavalier-kardioidný | 37.90 € | **38.00 €** | 8.8 % | **9.1 %** | 38.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-F8OD všesměrový klopový, XLR | 41.90 € | **42.00 €** | 9.4 % | **9.6 %** | 42.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-M1000 2směrový studiový, XLR | 57.90 € | **58.00 €** | 9.3 % | **9.5 %** | 58.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 20Ah XTREME bezúdržbový akumu... | 31.90 € | **32.00 €** | 5.6 % | **6.0 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka NILS Extreme HM1302 černá | 42.90 € | **43.00 €** | 5.6 % | **5.8 %** | 43.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hrazda multifunkční REBEL ACTIVE RBA-2401 | 53.90 € | **54.00 €** | 5.9 % | **6.1 %** | 54.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hrazda do dveří Trizand 24784 | 16.90 € | **17.00 €** | 14.4 % | **15.1 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stojany na činky nastavitelné REBEL ACTIVE RBA-2402 | 61.90 € | **62.00 €** | 5.7 % | **5.9 %** | 62.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cyklotaška na zadní nosič 3in1 Trizand 25516 | 18.90 € | **19.00 €** | 14.2 % | **14.8 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Akupresurní podložka REBEL ACTIVE RBA-6011-GL 72x42c... | 23.90 € | **24.00 €** | 11.7 % | **12.2 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AX1500 Range Extender (E15) | 40.90 € | **41.00 €** | 7.1 % | **7.4 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 35.90 € | **36.00 €** | 7.4 % | **7.7 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mio Smartbox IV | 30.90 € | **31.00 €** | 8.9 % | **9.3 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 10/100 5-Port Switch (DES-105) | 17.90 € | **18.00 €** | 5.5 % | **6.0 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 16.90 € | **17.00 €** | 5.4 % | **6.1 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Batéria Jupio AAA 1000 mAh (mikrotužkové) 4ks, dobíj... | 8.60 € | **8.70 €** | 9.2 % | **10.5 %** | 8.66 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Bloom biele drevo 200 ml | 13.90 € | **14.00 €** | 13.5 % | **14.3 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Honey Night 160 ml | 10.90 € | **11.00 €** | 11.2 % | **12.2 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samolepiace hodiny G21 Classic Style | 11.90 € | **12.00 €** | 12.1 % | **13.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samolepiace hodiny G21 Eccentric Style | 11.90 € | **12.00 €** | 12.1 % | **13.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samolepiace hodiny G21 Fashion Style | 11.90 € | **12.00 €** | 12.1 % | **13.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA301 umývateľná handrič... | 11.90 € | **12.00 €** | 7.9 % | **8.8 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 15.90 € | **16.00 €** | 13.7 % | **14.4 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V/ 7.0 Ah  REBEL bezúdržbová | 13.90 € | **14.00 €** | 12.6 % | **13.4 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Čistič na okna s rozprašovačem | 9.90 € | **10.00 €** | 7.9 % | **9.0 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 13.90 € | **14.00 €** | 14.6 % | **15.4 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Experience White | 252.90 € | **253.00 €** | 17.8 % | **17.8 %** | 253.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Perfection red | 209.90 € | **210.00 €** | 17.3 % | **17.4 %** | 210.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 142.90 € | **143.00 €** | 6.9 % | **6.9 %** | 143.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 138.90 € | **139.00 €** | 7.4 % | **7.5 %** | 139.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| AI-NC-T50L3-MW-0360 5.0 Mpix venkovní IP kamera s IR... | 133.90 € | **134.00 €** | 14.7 % | **14.8 %** | 134.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 99.90 € | **100.00 €** | 13.0 % | **13.1 %** | 100.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 114.90 € | **115.00 €** | 13.1 % | **13.2 %** | 115.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 193.90 € | **194.00 €** | 14.8 % | **14.9 %** | 194.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-PVM3000L superkardioidní puškový, XLR | 103.90 € | **104.00 €** | 6.5 % | **6.6 %** | 104.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-PVM3000M studiový stereofonní, XLR | 88.90 € | **89.00 €** | 6.3 % | **6.4 %** | 89.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Přenosná turistická toaleta Rebel Active RBA-5102, 2... | 82.90 € | **83.00 €** | 8.6 % | **8.7 %** | 83.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal FW501815 | 134.90 € | **135.00 €** | 8.8 % | **8.9 %** | 134.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EOD3H40BX | 224.90 € | **225.00 €** | 6.8 % | **6.8 %** | 224.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1052)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Yamaha RX-A8A BLACK | 3849.00 € | **3557.90 €** | 18.2 % | **9.3 %** | 3557.96 € | stávame sa najlacnejší |
| Gorenje NRK6192AXL4 | 559.00 € | **361.50 €** | 67.6 % | **8.4 %** | 361.89 € | stávame sa najlacnejší |
| Samsung OLED QE77S99H | 3600.50 € | **3436.90 €** | 10.0 % | **5.0 %** | 3399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje FN619EEW5 | 639.00 € | **480.00 €** | 39.8 % | **5.0 %** | 475.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistiaci robot MOVA V70 Ultra Complete v bielej farbe | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 1463.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompletný čistiaci robot MOVA V70 Ultra (čierny) | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 1463.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA RX-A4A BLACK | 1649.00 € | **1543.50 €** | 16.8 % | **9.3 %** | 1543.60 € | stávame sa najlacnejší |
| CP-UNC-VB51ZL4-VMDS-27135 5.0 Mpix venkovní IP kamer... | 365.90 € | **273.00 €** | 53.9 % | **14.8 %** | 273.50 € | stávame sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 279.00 € | **221.00 €** | 37.7 % | **9.1 %** | 221.46 € | stávame sa najlacnejší |
| Whirlpool MBNA910X | 289.00 € | **235.90 €** | 28.7 % | **5.0 %** | 233.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný samočistiaci záchod pre mačky Catlink P... | 589.50 € | **538.50 €** | 15.0 % | **5.1 %** | 512.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNR-108F1 Síťový videorekordér (NVR) pro osm IP k... | 187.50 € | **140.00 €** | 53.7 % | **14.8 %** | 140.50 € | stávame sa najlacnejší |
| YAMAHA YWA-10 BL | 99.90 € | **57.00 €** | 96.0 % | **11.9 %** | 57.23 € | stávame sa najlacnejší |
| YAMAHA TT-S303 BLACK | 529.00 € | **486.50 €** | 14.2 % | **5.0 %** | 466.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GV520E10 | 339.00 € | **298.90 €** | 19.2 % | **5.1 %** | 299.00 € | stávame sa najlacnejší |
| YAMAHA A-S301 BLACK | 439.00 € | **402.50 €** | 14.6 % | **5.0 %** | 389.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 239.00 € | **204.00 €** | 28.0 % | **9.2 %** | 204.08 € | stávame sa najlacnejší |
| YAMAHA A-S201 BLACK | 279.00 € | **244.00 €** | 24.9 % | **9.2 %** | 244.20 € | stávame sa najlacnejší |
| YAMAHA A-S201 SILVER | 279.00 € | **244.00 €** | 24.7 % | **9.0 %** | 244.20 € | stávame sa najlacnejší |
| CP-UNC-VC51ZL4C-VMDS-V2 5.0 Mpix venkovní antivandal... | 399.50 € | **367.50 €** | 24.9 % | **14.9 %** | 367.90 € | stávame sa najlacnejší |
| YAMAHA CD-C603 BLACK | 599.00 € | **567.50 €** | 10.9 % | **5.1 %** | 554.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WOI118PT2SSMA | 793.90 € | **765.00 €** | 10.0 % | **6.0 %** | 765.20 € | stávame sa najlacnejší |
| CP-UNC-VB81ZL4-VMDS 4K 8.0 Mpix  venkovní IP kamera ... | 357.50 € | **328.90 €** | 25.0 % | **15.0 %** | 329.00 € | stávame sa najlacnejší |
| Samsung OLED QE65S99H | 2827.00 € | **2798.90 €** | 6.7 % | **5.6 %** | 2799.00 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C615F KIT 3MPx, vonkajšia, IP PT... | 130.00 € | **103.00 €** | 32.5 % | **5.0 %** | 103.19 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 685.90 € | **659.90 €** | 15.0 % | **10.7 %** | 660.00 € | stávame sa najlacnejší |
| CP-UNC-TD61L4E-MD-0360 6.0 Mpix venkovní IP kamera s... | 325.50 € | **299.90 €** | 24.8 % | **15.0 %** | 300.00 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0304ncx (D9MH3EA) | 927.50 € | **904.50 €** | 10.0 % | **7.3 %** | 904.67 € | stávame sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1399.00 € | **1377.00 €** | 11.0 % | **9.3 %** | 1377.03 € | stávame sa najlacnejší |
| CP-UNC-VB81L3-MDS-0360 4K (8.0 Mpix) venkovní IP ant... | 270.00 € | **248.00 €** | 24.9 % | **14.7 %** | 248.50 € | stávame sa najlacnejší |
| CP-UVR-0401L1B-4KH Čtyřkanálový 4K 5v1 DVR s kompres... | 271.00 € | **249.00 €** | 24.9 % | **14.8 %** | 249.50 € | stávame sa najlacnejší |
| Funkčný generátor FNIRSI TSG6020 | 250.90 € | **229.00 €** | 15.1 % | **5.0 %** | 224.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max White robotický s mopo... | 145.50 € | **123.90 €** | 24.7 % | **6.2 %** | 124.00 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C610 KIT 3MPx, vonkajšia, IP PTZ... | 103.90 € | **82.50 €** | 32.6 % | **5.3 %** | 76.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Presto 2094 90000, bílý | 114.99 € | **94.00 €** | 30.4 % | **6.6 %** | 94.05 € | stávame sa najlacnejší |
| Electrolux EW7TN3372C | 566.90 € | **546.00 €** | 10.1 % | **6.0 %** | 546.10 € | stávame sa najlacnejší |
| ETA Ambo III 5075 90000 šedý/bílá | 119.99 € | **99.50 €** | 26.8 % | **5.2 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 180.90 € | **160.50 €** | 27.2 % | **12.9 %** | 160.84 € | stávame sa najlacnejší |
| Čistič bazénov MOVA R10 | 229.90 € | **209.90 €** | 15.0 % | **5.0 %** | 140.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 65.00 € | **46.00 €** | 58.6 % | **12.3 %** | 46.50 € | stávame sa najlacnejší |
| CP-UNC-TC21ZL6-VMDS-27135 2.0 Mpix venkovní IP kamer... | 241.50 € | **222.90 €** | 24.5 % | **14.9 %** | 223.00 € | stávame sa najlacnejší |
| Funkčný generátor FNIRSI TSG3020 | 209.90 € | **191.90 €** | 15.1 % | **5.2 %** | 163.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-S303 BLACK | 395.50 € | **377.50 €** | 10.0 % | **5.0 %** | 371.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-VC21L5-VMDS-0280 2.0 Mpix venkovní IP kamera ... | 222.00 € | **204.00 €** | 24.9 % | **14.8 %** | 204.50 € | stávame sa najlacnejší |
| BROTHER DCP-L3560CDW | 392.90 € | **375.50 €** | 10.0 % | **5.1 %** | 354.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 195.90 € | **178.90 €** | 15.1 % | **5.1 %** | 166.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 15-fd0324nc (D42VYEA) | 691.50 € | **674.50 €** | 10.1 % | **7.4 %** | 674.58 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 3500/48 URZ3430  2400W 48V | 311.00 € | **294.90 €** | 10.8 % | **5.1 %** | 274.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bežecký pás Acra GB4500N pre chôdzu a pomalý beh | 406.50 € | **390.50 €** | 9.4 % | **5.1 %** | 388.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 86.90 € | **71.00 €** | 43.9 % | **17.6 %** | 71.16 € | stávame sa najlacnejší |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 199.90 € | **184.00 €** | 24.6 % | **14.6 %** | 184.50 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT černé | 168.50 € | **152.90 €** | 15.8 % | **5.1 %** | 139.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT stříbrné | 168.50 € | **152.90 €** | 15.8 % | **5.1 %** | 139.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný fotorámik Lexar PX-110BLKGLR (čierny) 11" | 169.00 € | **154.50 €** | 14.9 % | **5.1 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 180.90 € | **166.50 €** | 24.8 % | **14.8 %** | 166.90 € | stávame sa najlacnejší |
| Maxxo LED800 antracit | 309.50 € | **295.50 €** | 10.0 % | **5.1 %** | 285.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo LED800 bílý | 309.50 € | **295.50 €** | 10.0 % | **5.1 %** | 285.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 574.90 € | **560.90 €** | 10.0 % | **7.3 %** | 561.00 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C120 IP, 3MPx, WiFi, prísvit | 65.50 € | **52.00 €** | 33.5 % | **6.0 %** | 52.09 € | stávame sa najlacnejší |
| AI-NC-MC40-M-0370 4.0 Mpix vnitřní IP mini kamera pr... | 168.50 € | **155.00 €** | 24.5 % | **14.6 %** | 155.50 € | stávame sa najlacnejší |
| Fagor 4LVF-638ADIT | 481.90 € | **468.50 €** | 10.0 % | **7.0 %** | 468.60 € | stávame sa najlacnejší |
| YAMAHA R-S202D SILVER | 283.50 € | **270.50 €** | 10.1 % | **5.1 %** | 225.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZJP3900 | 119.00 € | **106.00 €** | 22.6 % | **9.2 %** | 106.20 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 42.99 € | **30.00 €** | 57.9 % | **10.2 %** | 30.27 € | stávame sa najlacnejší |
| Gorenje N62CS2XL4 | 447.50 € | **435.00 €** | 10.1 % | **7.0 %** | 435.10 € | stávame sa najlacnejší |
| Odšťavovač G21 Chamberi horizontal | 169.50 € | **157.00 €** | 18.5 % | **9.8 %** | 157.12 € | stávame sa najlacnejší |
| Electrolux E3TB1-4GG | 53.00 € | **40.50 €** | 43.6 % | **9.8 %** | 40.63 € | stávame sa najlacnejší |
| Fagor 4LVF-637ADIT | 455.50 € | **443.00 €** | 10.0 % | **7.0 %** | 443.20 € | stávame sa najlacnejší |
| Anténa Angular Flexivel TRI-26 Lte 700 18dB | 50.00 € | **37.90 €** | 51.2 % | **14.6 %** | 38.00 € | stávame sa najlacnejší |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 105.00 € | **92.90 €** | 29.6 % | **14.6 %** | 93.00 € | stávame sa najlacnejší |
| Beko BDFN26540WP | 425.50 € | **413.50 €** | 10.1 % | **7.0 %** | 413.60 € | stávame sa najlacnejší |
| CP-UVR-0801E1-CV4 Osmikanálový 5v1 mini DVR s kompre... | 147.00 € | **135.00 €** | 24.9 % | **14.7 %** | 135.50 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F03 STD | 137.50 € | **125.90 €** | 15.0 % | **5.3 %** | 119.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 240.50 € | **228.90 €** | 13.5 % | **8.0 %** | 229.00 € | stávame sa najlacnejší |
| CP-UNR-104F1 Síťový videorekordér (NVR) pro čtyři IP... | 138.50 € | **127.00 €** | 24.9 % | **14.5 %** | 127.50 € | stávame sa najlacnejší |
| CP-UNC-VB41L3-MDS-0360 4.0Mpix venkovní dome IP anti... | 139.00 € | **127.90 €** | 24.9 % | **14.9 %** | 128.00 € | stávame sa najlacnejší |
| CP PLUS CP-L4C-DX40FL3 4.0 Mpix venkovní dome kamera... | 143.90 € | **132.90 €** | 24.4 % | **14.9 %** | 133.00 € | stávame sa najlacnejší |
| Electrolux E3T1-3ST | 42.00 € | **31.00 €** | 48.1 % | **9.3 %** | 31.21 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 180.50 € | **169.50 €** | 22.2 % | **14.8 %** | 169.90 € | stávame sa najlacnejší |
| IKUSI / FAGOR NBS 804-C48 - domovní zesilovač | 168.00 € | **157.00 €** | 22.6 % | **14.5 %** | 157.50 € | stávame sa najlacnejší |
| Guzzanti GZ 338 | 581.00 € | **570.50 €** | 10.0 % | **8.0 %** | 570.59 € | stávame sa najlacnejší |
| Concept IDV5160wh | 363.50 € | **353.00 €** | 10.1 % | **7.0 %** | 353.10 € | stávame sa najlacnejší |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 132.50 € | **122.00 €** | 24.3 % | **14.4 %** | 122.50 € | stávame sa najlacnejší |
| Taška DJI Power 1000 | 119.90 € | **109.50 €** | 15.1 % | **5.1 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 555.90 € | **545.50 €** | 10.1 % | **8.0 %** | 545.69 € | stávame sa najlacnejší |
| Tefal GC772830 | 225.50 € | **215.50 €** | 10.1 % | **5.2 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje WE694A1 | 357.50 € | **347.50 €** | 10.1 % | **7.0 %** | 347.60 € | stávame sa najlacnejší |
| Barkan 464XL | 125.90 € | **116.00 €** | 24.2 % | **14.4 %** | 116.50 € | stávame sa najlacnejší |
| Braun SI1040GR | 35.90 € | **26.00 €** | 51.1 % | **9.5 %** | 26.17 € | stávame sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 243.50 € | **234.00 €** | 19.4 % | **14.7 %** | 234.50 € | stávame sa najlacnejší |
| IKUSI NBS 701-C48 - domovní zesilovač | 90.50 € | **81.00 €** | 27.9 % | **14.4 %** | 81.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C220 IP, 4MPx, WiFi, prísvit | 44.00 € | **35.50 €** | 31.2 % | **5.8 %** | 34.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 121.00 € | **112.50 €** | 23.3 % | **14.6 %** | 112.90 € | stávame sa najlacnejší |
| Tefal GC728D10 | 181.90 € | **173.50 €** | 10.2 % | **5.1 %** | 163.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 220A | 224.90 € | **216.50 €** | 10.2 % | **6.1 %** | 216.54 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 326.00 € | **317.90 €** | 14.9 % | **12.1 %** | 318.00 € | stávame sa najlacnejší |
| BROTHER DCP-L2622DW | 183.50 € | **175.50 €** | 10.1 % | **5.3 %** | 164.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 500.50 € | **492.50 €** | 6.8 % | **5.1 %** | 486.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stmievateľná lampička s nočným svetielko... | 32.90 € | **24.90 €** | 38.9 % | **5.1 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0835 SOS FM/ AM, Bluetooth, po... | 29.50 € | **21.50 €** | 46.2 % | **6.6 %** | 20.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C113 IP, 3MPx, WiFi, prísvit, vn... | 38.90 € | **30.90 €** | 32.4 % | **5.2 %** | 31.00 € | stávame sa najlacnejší |
| CP-UNC-DA41PL3C-GP-Y 4.0 Mpix venkovní dome IP kamer... | 107.50 € | **99.50 €** | 24.0 % | **14.8 %** | 99.90 € | stávame sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (biele) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (čierne) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 99.90 € | **92.00 €** | 24.2 % | **14.3 %** | 92.50 € | stávame sa najlacnejší |
| Solight LED vianočná girlanda s ihličím, 7m, 112x LE... | 30.90 € | **23.00 €** | 54.5 % | **15.0 %** | 23.15 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 90.00 € | **82.50 €** | 14.8 % | **5.2 %** | 82.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono M7 Pro 3D Printer | 448.50 € | **441.00 €** | 8.4 % | **6.6 %** | 441.43 € | stávame sa najlacnejší |
| CP-UNC-TA21L3-0360  2.0Mpix venkovní IP kamera s IR | 95.50 € | **88.00 €** | 24.1 % | **14.3 %** | 88.50 € | stávame sa najlacnejší |
| IKUSI / FAGOR NBS 801-C48 - domovní zesilovač | 141.00 € | **133.90 €** | 20.8 % | **14.8 %** | 134.00 € | stávame sa najlacnejší |
| BROTHER DCP-L1630W | 158.50 € | **151.50 €** | 10.1 % | **5.3 %** | 147.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| IMOU S800 PRO palubná kamera, 4K | 107.50 € | **100.50 €** | 14.8 % | **7.4 %** | 100.58 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 110.00 € | **103.00 €** | 43.6 % | **34.5 %** | 103.15 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 33.50 € | **26.50 €** | 35.3 % | **7.0 %** | 26.69 € | stávame sa najlacnejší |
| Eliptický trenažér MERACH MR-E33B4 | 424.90 € | **418.00 €** | 15.0 % | **13.1 %** | 418.20 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 37.50 € | **30.90 €** | 28.9 % | **6.2 %** | 28.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 88.50 € | **82.00 €** | 14.9 % | **6.5 %** | 82.15 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 88.50 € | **82.00 €** | 14.9 % | **6.5 %** | 82.15 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 69.50 € | **63.00 €** | 25.3 % | **13.6 %** | 63.19 € | stávame sa najlacnejší |
| Meteorologická stanice WS 9050 | 71.00 € | **64.50 €** | 16.2 % | **5.6 %** | 64.69 € | stávame sa najlacnejší |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 81.50 € | **75.00 €** | 24.0 % | **14.1 %** | 75.50 € | stávame sa najlacnejší |
| Russell Hobbs 26481-56 | 24.99 € | **18.50 €** | 47.5 % | **9.2 %** | 18.67 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 23.00 € | **16.90 €** | 43.4 % | **5.4 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ivo DVB-30 zesilovač 30dB (5-12V) | 29.00 € | **22.90 €** | 44.0 % | **13.7 %** | 23.00 € | stávame sa najlacnejší |
| MPPT solar panel adapter for DJI power stations | 71.50 € | **65.50 €** | 14.7 % | **5.1 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ivo DVB-16 zesilovač 16dB (5-12V) | 24.90 € | **18.90 €** | 50.2 % | **14.0 %** | 19.00 € | stávame sa najlacnejší |
| Candy CDPH 2D947X | 321.50 € | **315.50 €** | 10.1 % | **8.0 %** | 315.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 40.50 € | **34.50 €** | 59.2 % | **35.6 %** | 34.65 € | stávame sa najlacnejší |
| TESLA TE-344 venkovní anténa | 27.50 € | **21.50 €** | 45.6 % | **13.8 %** | 21.90 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **25.00 €** | 59.7 % | **29.2 %** | 25.50 € | stávame sa najlacnejší |
| MOTOROLA Moto G06 4+64GB Blue | 117.50 € | **111.90 €** | 10.3 % | **5.0 %** | 86.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera IP venkovní NEDIS WIFICO22CWT / Wi-Fi / 3MP /... | 99.50 € | **93.90 €** | 21.5 % | **14.7 %** | 94.00 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 678.00 € | **672.50 €** | 10.0 % | **9.1 %** | 672.69 € | stávame sa najlacnejší |
| Anténa Fagor AURA LTE700 5G | 24.50 € | **19.00 €** | 43.3 % | **11.1 %** | 19.50 € | stávame sa najlacnejší |
| Vákuovačka G21 Nefrit | 122.90 € | **117.50 €** | 14.7 % | **9.6 %** | 117.90 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 28.90 € | **23.50 €** | 29.4 % | **5.2 %** | 20.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ikusi ATP-200 domovní zesilovač | 33.00 € | **27.90 €** | 35.0 % | **14.2 %** | 28.00 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0837 SOS FM/ AM, powerbanka 10... | 41.90 € | **36.90 €** | 19.9 % | **5.6 %** | 34.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO SIM3126R | 29.00 € | **24.00 €** | 40.6 % | **16.4 %** | 24.10 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 53.00 € | **48.00 €** | 24.9 % | **13.1 %** | 48.19 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA100 sada pre výmenu vy... | 24.00 € | **19.00 €** | 33.4 % | **5.6 %** | 19.19 € | stávame sa najlacnejší |
| 3D tlačiareň Creality Halot X1 Combo | 505.00 € | **500.00 €** | 15.0 % | **13.8 %** | 500.20 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 243.00 € | **238.00 €** | 10.0 % | **7.7 %** | 238.40 € | stávame sa najlacnejší |
| Vysílač DO TechniSat TechniControl | 25.00 € | **20.00 €** | 41.8 % | **13.5 %** | 20.50 € | stávame sa najlacnejší |
| Barkan 3400L.W - 4 pohybový prodloužený do 600x400mm... | 63.00 € | **58.00 €** | 23.8 % | **14.0 %** | 58.50 € | stávame sa najlacnejší |
| Barkan 3400LB - 4 pohybový prodloužený do 600x400mm,... | 63.00 € | **58.00 €** | 23.8 % | **14.0 %** | 58.50 € | stávame sa najlacnejší |
| Mascom MCQ02HD Quattro 0,2 dB | 18.90 € | **13.90 €** | 54.7 % | **13.8 %** | 14.00 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD IR černé | 197.90 € | **193.00 €** | 17.6 % | **14.7 %** | 193.50 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD IR stříbrné | 197.90 € | **193.00 €** | 17.6 % | **14.7 %** | 193.50 € | stávame sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 15.90 € | **11.00 €** | 56.1 % | **8.0 %** | 11.16 € | stávame sa najlacnejší |
| TV držák Kruger & Matz KM1304-1  (32-45'' 35kg) černý | 18.90 € | **14.00 €** | 48.5 % | **10.0 %** | 14.09 € | stávame sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-9   9 kg (150x20... | 36.50 € | **31.90 €** | 21.5 % | **6.2 %** | 31.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI GAR 191 USB datalogger pro měření teploty a re... | 83.50 € | **78.90 €** | 21.3 % | **14.6 %** | 79.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 31.00 € | **26.50 €** | 58.5 % | **35.5 %** | 26.64 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.50 € | **48.00 €** | 15.8 % | **5.9 %** | 48.19 € | stávame sa najlacnejší |
| Anténa NEDIS ANIR2502BK700 / 0-25 km / 30 dB / FM/VH... | 27.50 € | **23.00 €** | 34.2 % | **12.2 %** | 23.50 € | stávame sa najlacnejší |
| LEM INS-02 napájecí výhybka k LEM zesilovačům | 20.50 € | **16.00 €** | 44.8 % | **13.0 %** | 16.50 € | stávame sa najlacnejší |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 104.90 € | **100.50 €** | 10.1 % | **5.5 %** | 100.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ivo DVB-26 zesilovač 26dB (5-12V) | 27.00 € | **22.90 €** | 34.1 % | **13.7 %** | 23.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110 regulácia 230V cez I... | 19.00 € | **15.00 €** | 33.7 % | **5.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-8   8 kg (150x20... | 35.50 € | **31.50 €** | 20.2 % | **6.6 %** | 30.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 30.90 € | **26.90 €** | 54.2 % | **34.3 %** | 26.91 € | stávame sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 60.50 € | **56.50 €** | 37.2 % | **28.1 %** | 56.54 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 42.00 € | **38.00 €** | 17.9 % | **6.6 %** | 38.09 € | stávame sa najlacnejší |
| Electrolux E4GK1-4GB | 42.00 € | **38.00 €** | 23.2 % | **11.5 %** | 38.17 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 20.50 € | **16.50 €** | 39.6 % | **12.4 %** | 16.69 € | stávame sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 24.50 € | **20.50 €** | 29.1 % | **8.0 %** | 20.79 € | stávame sa najlacnejší |
| CP-USC-TA24L2-0360 2.4Mpix venkovní kamera 4v1 s IR | 50.50 € | **46.50 €** | 24.2 % | **14.4 %** | 46.90 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V200 | 36.00 € | **32.00 €** | 28.3 % | **14.0 %** | 32.50 € | stávame sa najlacnejší |
| TechniSat VIOLA 200 /bílé-černé/ 0000/2936 | 50.00 € | **46.00 €** | 23.3 % | **13.5 %** | 46.50 € | stávame sa najlacnejší |
| Meteorologická stanice TechniSat IMETEO X6 | 125.90 € | **122.00 €** | 18.2 % | **14.6 %** | 122.50 € | stávame sa najlacnejší |
| Stepper REBEL ACTIVE RBA-3220 s madlem | 64.90 € | **61.00 €** | 21.4 % | **14.1 %** | 61.50 € | stávame sa najlacnejší |
| CP-USC-DA24L2-0360 2.4Mpix venkovní dome kamera 4v1 ... | 48.90 € | **45.00 €** | 23.6 % | **13.8 %** | 45.50 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 60.90 € | **57.00 €** | 21.4 % | **13.6 %** | 57.50 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 25.50 € | **21.90 €** | 58.5 % | **36.1 %** | 21.92 € | stávame sa najlacnejší |
| Cabletech UCH0232 | 41.50 € | **37.90 €** | 25.3 % | **14.5 %** | 38.00 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 143.50 € | **139.90 €** | 7.9 % | **5.2 %** | 130.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **14.50 €** | 47.4 % | **18.7 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **14.50 €** | 47.4 % | **18.7 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 17.50 € | **14.00 €** | 56.3 % | **25.1 %** | 14.04 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 4... | 30.50 € | **27.00 €** | 38.4 % | **22.5 %** | 27.07 € | stávame sa najlacnejší |
| Electrolux LIB60420CK | 208.00 € | **204.50 €** | 10.0 % | **8.2 %** | 204.70 € | stávame sa najlacnejší |
| Konektor MC4 pro solární panely, rozbočení 3 panely,... | 13.50 € | **10.00 €** | 48.1 % | **9.7 %** | 10.50 € | stávame sa najlacnejší |
| Alcad CA-662 | 149.50 € | **146.00 €** | 17.4 % | **14.7 %** | 146.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - white | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 227.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - black | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 239.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 32.00 € | **28.90 €** | 20.2 % | **8.6 %** | 29.00 € | stávame sa najlacnejší |
| BEKO MGC20130BFB | 82.00 € | **78.90 €** | 13.4 % | **9.1 %** | 79.00 € | stávame sa najlacnejší |
| Garett ROSE Gold Mesh Steel | 67.90 € | **64.90 €** | 10.5 % | **5.6 %** | 64.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 24.50 € | **21.50 €** | 38.8 % | **21.8 %** | 21.51 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 19.50 € | **16.50 €** | 40.2 % | **18.6 %** | 16.53 € | stávame sa najlacnejší |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 29.90 € | **26.90 €** | 50.2 % | **35.2 %** | 27.00 € | stávame sa najlacnejší |
| HiBREW 5-in-1 capsule coffee maker H1B-black (black) | 107.00 € | **104.00 €** | 14.8 % | **11.6 %** | 104.12 € | stávame sa najlacnejší |
| Tester USB FNIRSI FNB-C2 | 39.00 € | **36.00 €** | 14.7 % | **5.9 %** | 36.17 € | stávame sa najlacnejší |
| Mini stepper REBEL ACTIVE RBA-3229 | 43.50 € | **40.50 €** | 13.9 % | **6.0 %** | 40.69 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 25.50 € | **22.50 €** | 37.8 % | **21.5 %** | 22.90 € | stávame sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-2.5 litinové neoprenové ... | 17.90 € | **14.90 €** | 35.1 % | **12.5 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 39.90 € | **37.00 €** | 16.1 % | **7.7 %** | 37.23 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2-Z ZigBee (štvorbalen... | 30.50 € | **27.90 €** | 15.3 % | **5.5 %** | 8.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dálkový ovladač 4-kan. k pohonu vrat IN SL-600, 1000... | 28.50 € | **25.90 €** | 16.0 % | **5.4 %** | 19.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač hladiny hluku FNIRSI FDM-02 | 33.50 € | **30.90 €** | 15.3 % | **6.3 %** | 29.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2Plus | 45.50 € | **42.90 €** | 15.2 % | **8.6 %** | 42.92 € | stávame sa najlacnejší |
| Barkan 2400.B - 4 pohybový do 200x200mm, pro TV 13"-... | 31.50 € | **28.90 €** | 24.0 % | **13.7 %** | 29.00 € | stávame sa najlacnejší |
| TESLA TE-2800 PW venkovní anténa pro DVB-T2, 470-790... | 36.50 € | **33.90 €** | 23.4 % | **14.6 %** | 34.00 € | stávame sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-6 litinové neoprenové HE... | 37.50 € | **34.90 €** | 22.7 % | **14.2 %** | 35.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100(1-pack) regulácia 23... | 13.50 € | **10.90 €** | 31.3 % | **6.0 %** | 8.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **92.90 €** | 14.9 % | **11.7 %** | 92.92 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 4 kusoch | 33.00 € | **30.50 €** | 14.6 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Air Board M Compact | 55.50 € | **53.00 €** | 10.1 % | **5.2 %** | 52.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 34.50 € | **32.00 €** | 49.6 % | **38.8 %** | 32.10 € | stávame sa najlacnejší |
| Solight zásuvka IP66, vodotesná a prachotesná | 17.50 € | **15.00 €** | 55.7 % | **33.4 %** | 15.10 € | stávame sa najlacnejší |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 59.50 € | **57.00 €** | 15.2 % | **10.4 %** | 57.17 € | stávame sa najlacnejší |
| Zdroj Alcad AL-105 (2xvýstup, 12V/100mA) napájecí | 16.50 € | **14.00 €** | 24.6 % | **5.7 %** | 14.19 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **22.00 €** | 41.0 % | **26.6 %** | 22.20 € | stávame sa najlacnejší |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 27.50 € | **25.00 €** | 34.4 % | **22.2 %** | 25.24 € | stávame sa najlacnejší |
| Rowenta RH1833E0 | 149.50 € | **147.00 €** | 10.3 % | **8.4 %** | 147.38 € | stávame sa najlacnejší |
| Solight lokátor pre batožinu, Find My kompatibilný | 25.00 € | **22.50 €** | 54.2 % | **38.8 %** | 22.89 € | stávame sa najlacnejší |
| Beko FRL5388B | 134.50 € | **132.00 €** | 10.3 % | **8.2 %** | 132.50 € | stávame sa najlacnejší |
| INVERTO Premium - Quad IDLP-QDL413 -  0,2 dB - s fil... | 29.50 € | **27.00 €** | 23.2 % | **12.8 %** | 27.50 € | stávame sa najlacnejší |
| Mascom MCT01HD Twin LNB | 12.50 € | **10.00 €** | 36.4 % | **9.1 %** | 10.50 € | stávame sa najlacnejší |
| Zircon Monoblok Single M-0143 Slim line Skylink | 12.50 € | **10.00 €** | 35.7 % | **8.5 %** | 10.50 € | stávame sa najlacnejší |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 29.50 € | **27.00 €** | 23.2 % | **12.8 %** | 27.50 € | stávame sa najlacnejší |
| Tefal SV9201E0 | 196.90 € | **194.50 €** | 10.0 % | **8.7 %** | 194.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 15.90 € | **13.50 €** | 37.7 % | **16.9 %** | 13.90 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2 WiFi, 4 kusy (štvorb... | 28.90 € | **26.50 €** | 15.7 % | **6.1 %** | 8.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 16.90 € | **14.50 €** | 38.4 % | **18.7 %** | 14.54 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 46.90 € | **44.50 €** | 15.1 % | **9.2 %** | 44.64 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 24.90 € | **22.50 €** | 24.7 % | **12.7 %** | 22.68 € | stávame sa najlacnejší |
| Uni-T UT201F digitálny klešťový multimeter | 26.00 € | **23.90 €** | 14.6 % | **5.4 %** | 23.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón Maono DM40 Pro (biely) | 53.00 € | **50.90 €** | 14.9 % | **10.4 %** | 50.94 € | stávame sa najlacnejší |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 17.00 € | **14.90 €** | 52.6 % | **33.7 %** | 14.91 € | stávame sa najlacnejší |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 106.00 € | **103.90 €** | 10.1 % | **7.9 %** | 104.00 € | stávame sa najlacnejší |
| Maxxo VM Compact | 41.50 € | **39.50 €** | 10.4 % | **5.1 %** | 35.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 26.50 € | **24.50 €** | 15.2 % | **6.5 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2957 | 41.90 € | **39.90 €** | 11.0 % | **5.7 %** | 35.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 25.00 € | **23.00 €** | 14.3 % | **5.2 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dotykový nástenný vypínač WiFi Sonoff T... | 24.50 € | **22.50 €** | 15.4 % | **6.0 %** | 22.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termoska Berlingerhaus nerez s LED displejom 450 ml ... | 12.50 € | **10.50 €** | 27.5 % | **7.1 %** | 10.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42602S | 40.50 € | **38.50 €** | 11.3 % | **5.8 %** | 38.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **34.00 €** | 53.5 % | **45.0 %** | 34.01 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 31.50 € | **29.50 €** | 54.7 % | **44.9 %** | 29.52 € | stávame sa najlacnejší |
| Solight profesionálny multimeter, tru RMS | 23.90 € | **21.90 €** | 36.0 % | **24.6 %** | 21.92 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 34.00 € | **32.00 €** | 25.4 % | **18.0 %** | 32.04 € | stávame sa najlacnejší |
| LCR tester FNIRSI LCR-ST2 | 39.00 € | **37.00 €** | 14.5 % | **8.7 %** | 37.04 € | stávame sa najlacnejší |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 60.00 € | **58.00 €** | 14.9 % | **11.1 %** | 58.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 45.00 € | **43.00 €** | 14.9 % | **9.8 %** | 43.04 € | stávame sa najlacnejší |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 85.00 € | **83.00 €** | 14.8 % | **12.1 %** | 83.08 € | stávame sa najlacnejší |
| Napájací zdroj FNIRSI 100 W | 37.00 € | **35.00 €** | 15.1 % | **8.9 %** | 35.08 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 36.00 € | **34.00 €** | 17.8 % | **11.2 %** | 34.09 € | stávame sa najlacnejší |
| Náhradní UV sterilizační lampa GARNI UV 45T | 20.90 € | **18.90 €** | 25.5 % | **13.5 %** | 19.00 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla, 150mm | 43.50 € | **41.50 €** | 20.1 % | **14.6 %** | 41.63 € | stávame sa najlacnejší |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 116.50 € | **114.50 €** | 14.9 % | **12.9 %** | 114.67 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757W | 29.50 € | **27.50 €** | 21.7 % | **13.4 %** | 27.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 33.50 € | **31.50 €** | 17.2 % | **10.2 %** | 31.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7400 | 33.50 € | **31.50 €** | 15.2 % | **8.3 %** | 31.69 € | stávame sa najlacnejší |
| Rowenta RH1239WO | 162.50 € | **160.50 €** | 10.1 % | **8.7 %** | 160.70 € | stávame sa najlacnejší |
| Guzzanti GZ 440 | 107.00 € | **105.00 €** | 10.0 % | **8.0 %** | 105.21 € | stávame sa najlacnejší |
| Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m kone... | 50.00 € | **48.00 €** | 10.9 % | **6.5 %** | 48.29 € | stávame sa najlacnejší |
| Zátěžová deka Rebel RBY-2000-3  3 kg (100x150 cm) ve... | 24.50 € | **22.50 €** | 23.3 % | **13.3 %** | 22.90 € | stávame sa najlacnejší |
| Zátěžová deka Rebel RBY-2001-3  3 kg (100x150 cm) me... | 24.50 € | **22.50 €** | 23.3 % | **13.3 %** | 22.90 € | stávame sa najlacnejší |
| Náhradní předfiltr GARNI PF 45T | 20.50 € | **18.50 €** | 24.6 % | **12.4 %** | 18.90 € | stávame sa najlacnejší |
| Náhradní předfiltr GARNI PF 15T | 18.00 € | **16.00 €** | 24.9 % | **11.0 %** | 16.50 € | stávame sa najlacnejší |
| Solight vonkajšia IP kamera s LED světlom | 33.00 € | **31.00 €** | 38.6 % | **30.2 %** | 31.50 € | stávame sa najlacnejší |
| Johansson KIT 7474 L2 zesilovač + zdroj (2437) | 124.00 € | **122.00 €** | 16.3 % | **14.4 %** | 122.50 € | stávame sa najlacnejší |
| Televes 552320 Crocodile 5G LTE700 domovní zesilovač | 40.00 € | **38.00 €** | 19.0 % | **13.1 %** | 38.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 102.90 € | **101.00 €** | 15.1 % | **13.0 %** | 101.04 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 159.90 € | **158.00 €** | 10.2 % | **8.9 %** | 158.20 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 9.10 € | **7.20 €** | 45.9 % | **15.5 %** | 7.21 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 21.90 € | **20.00 €** | 48.6 % | **35.7 %** | 20.15 € | stávame sa najlacnejší |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 47.90 € | **46.00 €** | 15.3 % | **10.7 %** | 46.32 € | stávame sa najlacnejší |
| Inverto HOME Pro - Quattro Universal 40mm PLL LNB | 18.90 € | **17.00 €** | 25.4 % | **12.8 %** | 17.50 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 9.90 € | **8.20 €** | 39.0 % | **15.1 %** | 8.29 € | stávame sa najlacnejší |
| Mikrofón Maono DM40 Pro (čierny) | 52.50 € | **50.90 €** | 14.6 % | **11.2 %** | 50.94 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 46.50 € | **44.90 €** | 9.5 % | **5.7 %** | 45.00 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 2 kusoch | 17.50 € | **15.90 €** | 16.5 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Badmintonový set REBEL ACTIVE RBA-4102 | 12.50 € | **10.90 €** | 22.7 % | **7.0 %** | 7.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Náhradní filtrační kapsle GARNI BS 45T | 17.50 € | **15.90 €** | 24.0 % | **12.7 %** | 16.00 € | stávame sa najlacnejší |
| AMIKO dálkové ovládání Univerzální, HD - SD | 14.50 € | **12.90 €** | 26.1 % | **12.2 %** | 13.00 € | stávame sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-1.5 litinové neoprenové ... | 12.50 € | **10.90 €** | 29.1 % | **12.6 %** | 11.00 € | stávame sa najlacnejší |
| Sluchátka NEDIS HPWD1201BK Hi-Fi televizní s 6 m kab... | 19.00 € | **17.50 €** | 16.2 % | **7.1 %** | 12.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **15.00 €** | 15.7 % | **5.2 %** | 12.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonda FNIRSI P4100 | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 16.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 42.50 € | **41.00 €** | 14.7 % | **10.7 %** | 41.04 € | stávame sa najlacnejší |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 57.50 € | **56.00 €** | 15.0 % | **12.0 %** | 56.04 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 31.50 € | **30.00 €** | 12.2 % | **6.9 %** | 30.09 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CP2A | 28.50 € | **27.00 €** | 15.7 % | **9.6 %** | 27.10 € | stávame sa najlacnejší |
| Niceboy PILOT S5 GPS + WIFI | 49.50 € | **48.00 €** | 10.9 % | **7.5 %** | 48.10 € | stávame sa najlacnejší |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 24.00 € | **22.50 €** | 41.2 % | **32.4 %** | 22.60 € | stávame sa najlacnejší |
| Niceboy OFFICE M40 Vertical | 19.00 € | **17.50 €** | 16.9 % | **7.7 %** | 17.60 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 22.00 € | **20.50 €** | 54.3 % | **43.8 %** | 20.67 € | stávame sa najlacnejší |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 20.00 € | **18.50 €** | 18.7 % | **9.8 %** | 18.69 € | stávame sa najlacnejší |
| Gorenje BMX201M2BG | 172.00 € | **170.50 €** | 10.0 % | **9.1 %** | 170.70 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 15.50 € | **14.00 €** | 28.9 % | **16.4 %** | 14.21 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 137.50 € | **136.00 €** | 15.0 % | **13.7 %** | 136.22 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 14.50 € | **13.00 €** | 47.4 % | **32.1 %** | 13.29 € | stávame sa najlacnejší |
| Dálkový ovladač KRUGER & MATZ V-LED | 12.50 € | **11.00 €** | 24.5 % | **9.6 %** | 11.50 € | stávame sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-2 litinové neoprenové HE... | 14.50 € | **13.00 €** | 23.8 % | **11.0 %** | 13.50 € | stávame sa najlacnejší |
| Hula hoop REBEL ACTIVE RBA-3066-BL se závažím a masá... | 11.50 € | **10.00 €** | 25.5 % | **9.1 %** | 10.50 € | stávame sa najlacnejší |
| Tréninkové cvičební pásy TRX P3-1 REBEL ACTIVE RBA-3... | 12.50 € | **11.00 €** | 23.3 % | **8.5 %** | 11.50 € | stávame sa najlacnejší |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 11.00 € | **9.60 €** | 36.7 % | **19.3 %** | 9.61 € | stávame sa najlacnejší |
| Solight univerzálny zdroj pre netbooky a notebooky, ... | 13.90 € | **12.50 €** | 29.4 % | **16.4 %** | 12.90 € | stávame sa najlacnejší |
| Hyper ABS Filament Creality (White) | 18.90 € | **17.50 €** | 15.3 % | **6.7 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-PE165 | 60.90 € | **59.50 €** | 10.3 % | **7.8 %** | 59.60 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **21.50 €** | 38.1 % | **29.7 %** | 21.63 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 18.90 € | **17.50 €** | 46.6 % | **35.8 %** | 17.64 € | stávame sa najlacnejší |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 43.90 € | **42.50 €** | 15.4 % | **11.7 %** | 42.66 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 17.90 € | **16.50 €** | 23.5 % | **13.9 %** | 16.69 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 181 | 20.90 € | **19.50 €** | 20.7 % | **12.6 %** | 19.90 € | stávame sa najlacnejší |
| IVO I133 aktivní rozbočovač 8x výstup"F" 18dB zisk +... | 55.90 € | **54.50 €** | 17.3 % | **14.4 %** | 54.90 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 19.00 € | **17.90 €** | 53.6 % | **44.7 %** | 17.94 € | stávame sa najlacnejší |
| Coox Quiche forma 3 díly se skleněnou po | 20.90 € | **19.90 €** | 11.5 % | **6.2 %** | 14.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termoska cest. PENTA 1,5l ner. | 20.90 € | **19.90 €** | 11.3 % | **6.0 %** | 15.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-BL | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 12.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-TU | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 12.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips SHP2500/10 | 21.90 € | **20.90 €** | 11.8 % | **6.7 %** | 19.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termoska s pum.CUL.1,9l černá | 21.00 € | **20.00 €** | 10.3 % | **5.0 %** | 18.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM603 růžová | 35.50 € | **34.50 €** | 8.1 % | **5.0 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed USB-C/Lightning FIXDLS-CL2-WH | 19.50 € | **18.50 €** | 12.4 % | **6.6 %** | 18.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 16.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 13.50 € | **12.50 €** | 56.1 % | **44.6 %** | 12.54 € | stávame sa najlacnejší |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 15.50 € | **14.50 €** | 46.0 % | **36.6 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 11.00 € | **10.00 €** | 54.5 % | **40.4 %** | 10.05 € | stávame sa najlacnejší |
| Solight stredný fixný držiak pre ploché TV, 66cm - 1... | 12.00 € | **11.00 €** | 44.3 % | **32.3 %** | 11.05 € | stávame sa najlacnejší |
| Subwoofer Edifier Airpulse SW8 (čierny) | 338.50 € | **337.50 €** | 15.0 % | **14.6 %** | 337.56 € | stávame sa najlacnejší |
| Solight vianočný veniec, priemer 40cm, 15LED, 3x AA,... | 14.50 € | **13.50 €** | 54.7 % | **44.0 %** | 13.59 € | stávame sa najlacnejší |
| Russell Hobbs 26800-56/RH | 26.90 € | **25.90 €** | 11.4 % | **7.3 %** | 25.99 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 17.50 € | **16.50 €** | 44.6 % | **36.3 %** | 16.59 € | stávame sa najlacnejší |
| Nafukovací matrace Rebel RBA-5001-S jednolůžková 186... | 18.90 € | **17.90 €** | 19.7 % | **13.3 %** | 18.00 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 27.50 € | **26.50 €** | 39.3 % | **34.2 %** | 26.60 € | stávame sa najlacnejší |
| Solight domáca kamera s nočným svetlom a hodinami | 34.90 € | **33.90 €** | 38.3 % | **34.3 %** | 34.00 € | stávame sa najlacnejší |
| Opticum LQP-06H MULTIFEED Quad LNB 0,1 dB | 15.90 € | **14.90 €** | 20.0 % | **12.5 %** | 15.00 € | stávame sa najlacnejší |
| Solight sada LED sviečok z prírodného vosku, 3ks, AAA | 13.50 € | **12.50 €** | 55.2 % | **43.7 %** | 12.61 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 18.00 € | **17.00 €** | 52.4 % | **44.0 %** | 17.12 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 11.50 € | **10.50 €** | 56.9 % | **43.2 %** | 10.63 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE90 | 12.00 € | **11.00 €** | 49.6 % | **37.2 %** | 11.13 € | stávame sa najlacnejší |
| Solight detektor dymu s WIFI pripojením | 18.00 € | **17.00 €** | 41.5 % | **33.7 %** | 17.16 € | stávame sa najlacnejší |
| BWT Penguin MEI 2,7l černá + 2ks filtru | 20.50 € | **19.50 €** | 10.5 % | **5.1 %** | 19.67 € | stávame sa najlacnejší |
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
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.4 %** | 21.17 € | stávame sa najlacnejší |
| GUZZANTIGZ 3601 | 28.50 € | **27.50 €** | 11.7 % | **7.8 %** | 27.69 € | stávame sa najlacnejší |
| Aligator Reproduktor pro MagSafe ABSMB01 | 17.50 € | **16.50 €** | 30.3 % | **22.8 %** | 16.70 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (modrý) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.21 € | stávame sa najlacnejší |
| Kruger&Matz KM0127 brašna na rám kola | 12.50 € | **11.50 €** | 14.2 % | **5.1 %** | 11.79 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 21.50 € | **20.50 €** | 43.0 % | **36.4 %** | 20.90 € | stávame sa najlacnejší |
| Opticum LRP-06H MULTIFEED Quattro LNB 0,1dB | 12.50 € | **11.50 €** | 22.7 % | **12.9 %** | 11.90 € | stávame sa najlacnejší |
| Nabíječka USB KRUGER & MATZ KM0857 GaN 65W | 16.50 € | **15.50 €** | 20.0 % | **12.7 %** | 15.90 € | stávame sa najlacnejší |
| Sada na odvzdušňování brzd Xtrobb 25242 | 12.00 € | **11.00 €** | 18.4 % | **8.5 %** | 11.50 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 15.00 € | **14.00 €** | 48.7 % | **38.8 %** | 14.50 € | stávame sa najlacnejší |
| Zátěžová deka Rebel RBY-2000-4   4 kg (100x150 cm) v... | 27.00 € | **26.00 €** | 17.8 % | **13.5 %** | 26.50 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 15.00 € | **14.00 €** | 38.3 % | **29.0 %** | 14.50 € | stávame sa najlacnejší |
| Čtečka paměťových karet NEDIS CRDRU31 USB 3.2 Gen1 | 12.00 € | **11.00 €** | 18.4 % | **8.5 %** | 11.50 € | stávame sa najlacnejší |
| Držák monitoru Cabletech UCH0221 (13-32'' 10kg) černý | 23.00 € | **22.00 €** | 18.8 % | **13.6 %** | 22.50 € | stávame sa najlacnejší |
| Teploměr digitální s vlhkoměrem EMOS E0114N | 12.00 € | **11.00 €** | 19.7 % | **9.7 %** | 11.50 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0912 10000mAh Powerbanka MagSafe | 23.00 € | **22.00 €** | 18.5 % | **13.3 %** | 22.50 € | stávame sa najlacnejší |
| Tréninkové háky REBEL RBA-2505 | 12.00 € | **11.00 €** | 20.9 % | **10.8 %** | 11.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 13.00 € | **12.00 €** | 31.1 % | **21.0 %** | 12.50 € | stávame sa najlacnejší |
| SALENTE SuChef | 83.90 € | **83.00 €** | 9.6 % | **8.4 %** | 83.05 € | stávame sa najlacnejší |
| G3ferrari G1019100 Horkovzdušná fritéza | 105.90 € | **105.00 €** | 10.3 % | **9.4 %** | 105.20 € | stávame sa najlacnejší |
| Laserový senzor pohybu F&F DRL-12 mini 12V DC brouše... | 96.90 € | **96.00 €** | 15.3 % | **14.3 %** | 96.50 € | stávame sa najlacnejší |
| Laserový senzor pohybu F&F DRL-12-1 mini 12V DC bílý | 96.90 € | **96.00 €** | 15.3 % | **14.3 %** | 96.50 € | stávame sa najlacnejší |
| Laserový senzor pohybu F&F DRL-12-9 mini 12V DC černý | 96.90 € | **96.00 €** | 15.3 % | **14.3 %** | 96.50 € | stávame sa najlacnejší |
| CA modul IRDETO SMIT PROFI 2 | 146.90 € | **146.00 €** | 15.4 % | **14.7 %** | 146.50 € | stávame sa najlacnejší |
| Leifheit Vakuovací role 30x600 cm | 14.90 € | **14.00 €** | 12.4 % | **5.6 %** | 13.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač teploty a vlhkosti Uni-T A13T | 10.90 € | **10.00 €** | 15.5 % | **6.0 %** | 9.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight WIFI zásuvka s meraním spotreby | 12.90 € | **12.00 €** | 46.9 % | **36.6 %** | 12.02 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 11.90 € | **11.00 €** | 56.0 % | **44.2 %** | 11.06 € | stávame sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 10.00 € | **9.10 €** | 53.4 % | **39.6 %** | 9.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.90 € | **10.00 €** | 33.9 % | **22.8 %** | 10.50 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.90 € | **10.00 €** | 19.3 % | **9.4 %** | 10.50 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 24.90 € | **24.00 €** | 13.4 % | **9.3 %** | 24.19 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 24.90 € | **24.00 €** | 13.4 % | **9.3 %** | 24.19 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 58.90 € | **58.00 €** | 13.0 % | **11.2 %** | 58.49 € | stávame sa najlacnejší |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.90 € | **47.00 €** | 38.5 % | **35.9 %** | 47.50 € | stávame sa najlacnejší |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 24.90 € | **24.00 €** | 38.3 % | **33.3 %** | 24.50 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P1 | 24.90 € | **24.00 €** | 13.9 % | **9.8 %** | 24.50 € | stávame sa najlacnejší |
| Maliřská sada v kufru Maaleo 8643 288 ks | 17.90 € | **17.00 €** | 17.6 % | **11.6 %** | 17.50 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Max | 569.90 € | **569.00 €** | 7.0 % | **6.8 %** | 569.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.90 € | **8.10 €** | 17.1 % | **6.6 %** | 8.11 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 5.40 € | **4.60 €** | 48.8 % | **26.8 %** | 4.69 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.80 € | **4.00 €** | 33.6 % | **11.4 %** | 4.01 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 5.50 € | **4.70 €** | 55.8 % | **33.1 %** | 4.74 € | stávame sa najlacnejší |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 5.50 € | **4.80 €** | 53.1 % | **33.6 %** | 4.82 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 8.20 € | **7.50 €** | 48.8 % | **36.1 %** | 7.54 € | stávame sa najlacnejší |
| Solight držiak DVB-T a internetové antény na stenu, ... | 8.60 € | **7.90 €** | 39.0 % | **27.7 %** | 7.99 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 400.50 € | **399.90 €** | 6.9 % | **6.7 %** | 400.00 € | stávame sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 403.50 € | **402.90 €** | 6.8 % | **6.6 %** | 403.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 402.50 € | **401.90 €** | 7.7 % | **7.6 %** | 402.00 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 265 s teploměrem | 17.50 € | **16.90 €** | 10.5 % | **6.7 %** | 16.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, biely | 8.30 € | **7.70 €** | 55.5 % | **44.2 %** | 7.74 € | stávame sa najlacnejší |
| Salente Combo-Hepa | 12.50 € | **11.90 €** | 12.9 % | **7.5 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Décafeinated 500 g zrno | 12.50 € | **11.90 €** | 10.3 % | **5.0 %** | 11.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.60 € | **4.00 €** | 53.9 % | **33.8 %** | 4.01 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, čierny | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.60 € | **9.00 €** | 45.3 % | **36.3 %** | 9.04 € | stávame sa najlacnejší |
| Sada kuchyňského náčiní Ruhhy 21804 | 12.50 € | **11.90 €** | 19.7 % | **14.0 %** | 12.00 € | stávame sa najlacnejší |
| Konektor MC4 pro solární panely, rozbočení 4 panely,... | 15.50 € | **14.90 €** | 17.0 % | **12.5 %** | 15.00 € | stávame sa najlacnejší |
| Teploměr digitální s vlhkoměrem EMOS E0558 | 12.50 € | **11.90 €** | 19.8 % | **14.1 %** | 12.00 € | stávame sa najlacnejší |
| Hula hoop REBEL ACTIVE RBA-3067-PK se závažím a počí... | 16.50 € | **15.90 €** | 17.8 % | **13.5 %** | 16.00 € | stávame sa najlacnejší |
| Samsung VG-SCFC43SGMXC | 120.50 € | **119.90 €** | 7.6 % | **7.1 %** | 119.91 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 138.50 € | **137.90 €** | 15.2 % | **14.7 %** | 138.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 251.50 € | **250.90 €** | 10.0 % | **9.7 %** | 251.00 € | stávame sa najlacnejší |
| MERACH spinningové kolo MR-S26B2-EU (čierne) | 174.50 € | **173.90 €** | 13.0 % | **12.6 %** | 174.00 € | stávame sa najlacnejší |
| Ležérny cvičebný bicykel MERACH MR-S08B1-EU (čierny) | 207.50 € | **206.90 €** | 14.5 % | **14.2 %** | 207.00 € | stávame sa najlacnejší |
| Ležérny cvičebný bicykel MERACH MR-S23B1-EU (čierny) | 231.50 € | **230.90 €** | 14.5 % | **14.2 %** | 231.00 € | stávame sa najlacnejší |
| ZigBee LCD senzor teploty Sonoff SNZB-02LD (so sondou) | 17.00 € | **16.50 €** | 11.4 % | **8.1 %** | 13.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight rozbočovač s USB A+C nabíjačkou, 2 x 10A, biely | 6.60 € | **6.10 €** | 47.4 % | **36.2 %** | 6.11 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.70 € | **7.20 €** | 46.3 % | **36.8 %** | 7.21 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Solight digitálny týždenný časový spínač, 16 režimov... | 10.00 € | **9.50 €** | 43.9 % | **36.7 %** | 9.52 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 300mm, natura... | 3.40 € | **2.90 €** | 55.3 % | **32.5 %** | 2.92 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.42 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 6.90 € | **6.40 €** | 47.2 % | **36.6 %** | 6.42 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 5.90 € | **5.40 €** | 49.0 % | **36.3 %** | 5.42 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.60 € | **6.10 €** | 47.0 % | **35.9 %** | 6.12 € | stávame sa najlacnejší |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 20.00 € | **19.50 €** | 16.5 % | **13.6 %** | 19.53 € | stávame sa najlacnejší |
| Solight LED vianočné dekorácie, zasnežená krajina s ... | 7.10 € | **6.60 €** | 55.2 % | **44.2 %** | 6.63 € | stávame sa najlacnejší |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.50 € | **61.00 €** | 19.8 % | **18.9 %** | 61.03 € | stávame sa najlacnejší |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.50 € | **13.00 €** | 13.5 % | **9.3 %** | 13.04 € | stávame sa najlacnejší |
| Beper Bt602-H Vaflovač 780W | 24.50 € | **24.00 €** | 11.8 % | **9.6 %** | 24.04 € | stávame sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 24.50 € | **24.00 €** | 14.4 % | **12.1 %** | 24.04 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 6.70 € | **6.20 €** | 46.8 % | **35.9 %** | 6.24 € | stávame sa najlacnejší |
| Ufesa Haku | 30.50 € | **30.00 €** | 10.3 % | **8.4 %** | 30.08 € | stávame sa najlacnejší |
| Beper Bp101-H Elektrický Citrusovač | 19.50 € | **19.00 €** | 12.8 % | **9.9 %** | 19.08 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **23.00 €** | 12.2 % | **9.8 %** | 23.08 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60T | 32.50 € | **32.00 €** | 15.1 % | **13.3 %** | 32.09 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **4.90 €** | 47.3 % | **33.7 %** | 5.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.50 € | **8.00 €** | 43.7 % | **35.2 %** | 8.10 € | stávame sa najlacnejší |
| CR-PETG Filament Creality (Transparent) | 11.50 € | **11.00 €** | 16.6 % | **11.5 %** | 11.12 € | stávame sa najlacnejší |
| Tefal DN853BE0 | 54.50 € | **54.00 €** | 10.1 % | **9.1 %** | 54.13 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 26.50 € | **26.00 €** | 36.8 % | **34.2 %** | 26.15 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.50 € | **11.00 €** | 38.5 % | **32.5 %** | 11.16 € | stávame sa najlacnejší |
| Filter Freewell CPL pre Insta360 Luna Ultra | 23.00 € | **22.50 €** | 13.9 % | **11.4 %** | 22.67 € | stávame sa najlacnejší |
| Blender G21 Comfort Graphite Black | 151.50 € | **151.00 €** | 12.7 % | **12.3 %** | 151.18 € | stávame sa najlacnejší |
| Filament Anycubic TPU (mliečna biela) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadný) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná modrá) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná zelená) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 12.50 € | **12.00 €** | 16.7 % | **12.0 %** | 12.19 € | stávame sa najlacnejší |
| AB-COM LNB AB 01 M Quattro | 12.00 € | **11.50 €** | 17.8 % | **12.9 %** | 11.69 € | stávame sa najlacnejší |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **22.00 €** | 12.3 % | **9.8 %** | 22.20 € | stávame sa najlacnejší |
| Laica VT3509 | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.70 € | stávame sa najlacnejší |
| Solight lokátor Premium, Find My kompatibilný | 13.50 € | **13.00 €** | 19.2 % | **14.8 %** | 13.20 € | stávame sa najlacnejší |
| Tefal ZP2M04E0 | 23.50 € | **23.00 €** | 12.3 % | **9.9 %** | 23.21 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 23.50 € | **23.00 €** | 37.3 % | **34.3 %** | 23.22 € | stávame sa najlacnejší |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 12.50 € | **12.00 €** | 16.9 % | **12.3 %** | 12.25 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 12.50 € | **12.00 €** | 27.0 % | **22.0 %** | 12.25 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 14.50 € | **14.00 €** | 48.8 % | **43.7 %** | 14.25 € | stávame sa najlacnejší |
| Solight LED vonkajší stĺpik Ragusa 500, 7W, 450lm, 3... | 23.50 € | **23.00 €** | 11.2 % | **8.8 %** | 23.25 € | stávame sa najlacnejší |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 155.50 € | **155.00 €** | 14.4 % | **14.0 %** | 155.25 € | stávame sa najlacnejší |
| Guzzanti GZ 137 | 33.50 € | **33.00 €** | 11.5 % | **9.9 %** | 33.25 € | stávame sa najlacnejší |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.50 € | **19.00 €** | 8.1 % | **5.3 %** | 19.25 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 181.50 € | **181.00 €** | 8.7 % | **8.4 %** | 181.25 € | stávame sa najlacnejší |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.50 € | **10.00 €** | 48.5 % | **41.4 %** | 10.26 € | stávame sa najlacnejší |
| Solight nepriamy germicidný UV žiarič | 62.50 € | **62.00 €** | 39.3 % | **38.2 %** | 62.26 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.50 € | **30.00 €** | 39.2 % | **36.9 %** | 30.27 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 13.50 € | **13.00 €** | 47.3 % | **41.9 %** | 13.28 € | stávame sa najlacnejší |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 21.50 € | **21.00 €** | 46.5 % | **43.1 %** | 21.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 12.50 € | **12.00 €** | 47.7 % | **41.8 %** | 12.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 12.50 € | **12.00 €** | 47.7 % | **41.8 %** | 12.28 € | stávame sa najlacnejší |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.50 € | **11.00 €** | 12.1 % | **7.2 %** | 11.28 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 13.50 € | **13.00 €** | 47.3 % | **41.9 %** | 13.29 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 13.50 € | **13.00 €** | 47.3 % | **41.9 %** | 13.29 € | stávame sa najlacnejší |
| Ručný multimeter do auta UNI-T UT107 | 29.50 € | **29.00 €** | 9.6 % | **7.8 %** | 29.29 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI-T UT333S | 23.50 € | **23.00 €** | 12.0 % | **9.6 %** | 23.29 € | stávame sa najlacnejší |
| Pohybové čidlo ORBIS ISIMAT | 22.50 € | **22.00 €** | 14.8 % | **12.2 %** | 22.29 € | stávame sa najlacnejší |
| Bezdrátový detektor pohybu ORNO OR-MA-701 | 10.50 € | **10.00 €** | 13.2 % | **7.8 %** | 10.29 € | stávame sa najlacnejší |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 69.50 € | **69.00 €** | 10.1 % | **9.3 %** | 69.29 € | stávame sa najlacnejší |
| Vestavná bezdrátová indukční nabíječka ORNO OR-AE-13... | 20.50 € | **20.00 €** | 15.3 % | **12.5 %** | 20.29 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **16.00 €** | 11.7 % | **8.3 %** | 16.29 € | stávame sa najlacnejší |
| Resto 90504 French press 800ml | 13.50 € | **13.00 €** | 14.2 % | **10.0 %** | 13.29 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.50 € | **33.00 €** | 10.2 % | **8.5 %** | 33.29 € | stávame sa najlacnejší |
| Salente G4 robotický vysavač | 115.50 € | **115.00 €** | 7.7 % | **7.2 %** | 115.29 € | stávame sa najlacnejší |
| Salente Rtx-G4 | 115.50 € | **115.00 €** | 7.7 % | **7.2 %** | 115.29 € | stávame sa najlacnejší |
| Bravo Adria B-4780 bílá | 25.50 € | **25.00 €** | 7.1 % | **5.0 %** | 25.29 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.50 € | **65.00 €** | 9.9 % | **9.1 %** | 65.29 € | stávame sa najlacnejší |
| Čistička vzduchu TEESA PURE LIFE P500 | 73.50 € | **73.00 €** | 10.3 % | **9.6 %** | 73.29 € | stávame sa najlacnejší |
| Ufesa Daily PV1100C | 23.50 € | **23.00 €** | 10.2 % | **7.9 %** | 23.29 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Max | 362.50 € | **362.00 €** | 19.5 % | **19.4 %** | 362.29 € | stávame sa najlacnejší |
| Adaptér KRUGER & MATZ KM0390 (HUB) USB C na port HDM... | 27.50 € | **27.00 €** | 14.5 % | **12.5 %** | 27.29 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 48.50 € | **48.00 €** | 9.9 % | **8.7 %** | 48.29 € | stávame sa najlacnejší |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 18.50 € | **18.00 €** | 8.7 % | **5.7 %** | 18.29 € | stávame sa najlacnejší |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 65.50 € | **65.00 €** | 15.0 % | **14.2 %** | 65.29 € | stávame sa najlacnejší |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 21.50 € | **21.00 €** | 12.3 % | **9.7 %** | 21.29 € | stávame sa najlacnejší |
| Sada BOYA BY-WFM12 bezdrátový klopový mikrofon, vysí... | 33.50 € | **33.00 €** | 8.5 % | **6.9 %** | 33.29 € | stávame sa najlacnejší |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 41.50 € | **41.00 €** | 13.3 % | **12.0 %** | 41.29 € | stávame sa najlacnejší |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.50 € | **85.00 €** | 15.0 % | **14.3 %** | 85.29 € | stávame sa najlacnejší |
| Reproduktory k PC 2.1 Rebel CS-50 | 12.50 € | **12.00 €** | 16.0 % | **11.4 %** | 12.29 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 75.50 € | **75.00 €** | 8.4 % | **7.7 %** | 75.29 € | stávame sa najlacnejší |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 28.50 € | **28.00 €** | 15.7 % | **13.7 %** | 28.29 € | stávame sa najlacnejší |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 35.50 € | **35.00 €** | 14.8 % | **13.1 %** | 35.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (sivý) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (biely) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 25.50 € | **25.00 €** | 9.8 % | **7.7 %** | 25.29 € | stávame sa najlacnejší |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 25.50 € | **25.00 €** | 15.0 % | **12.7 %** | 25.29 € | stávame sa najlacnejší |
| Aróma difuzér Albi sonický Deluxe - Kvietky | 25.50 € | **25.00 €** | 10.5 % | **8.3 %** | 25.30 € | stávame sa najlacnejší |
| Tefal GC517DE0 | 137.50 € | **137.00 €** | 9.2 % | **8.8 %** | 137.30 € | stávame sa najlacnejší |
| ETA 410090000 | 330.50 € | **330.00 €** | 7.0 % | **6.9 %** | 330.30 € | stávame sa najlacnejší |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.50 € | **110.00 €** | 10.2 % | **9.7 %** | 110.30 € | stávame sa najlacnejší |
| Rowenta RO6164EA | 142.50 € | **142.00 €** | 8.8 % | **8.4 %** | 142.30 € | stávame sa najlacnejší |
| DOMO DO9252I | 252.50 € | **252.00 €** | 8.1 % | **7.9 %** | 252.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 40.50 € | **40.00 €** | 8.6 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 9 | 40.50 € | **40.00 €** | 8.6 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 40.50 € | **40.00 €** | 8.6 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 40.50 € | **40.00 €** | 8.6 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| Electrolux EWS6526WC | 311.50 € | **311.00 €** | 8.1 % | **7.9 %** | 311.30 € | stávame sa najlacnejší |
| Beko BDIN38646D | 494.50 € | **494.00 €** | 7.1 % | **7.0 %** | 494.30 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 293.50 € | **293.00 €** | 8.1 % | **8.0 %** | 293.30 € | stávame sa najlacnejší |
| Electrolux EIV84550 | 518.50 € | **518.00 €** | 7.1 % | **7.0 %** | 518.30 € | stávame sa najlacnejší |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 71.50 € | **71.00 €** | 13.9 % | **13.1 %** | 71.31 € | stávame sa najlacnejší |
| Leifheit LinoLift 600 Quick Start 85282 | 75.50 € | **75.00 €** | 9.4 % | **8.7 %** | 75.32 € | stávame sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.50 € | **11.00 €** | 40.4 % | **34.3 %** | 11.32 € | stávame sa najlacnejší |
| Electrolux E7K1-6BP | 69.50 € | **69.00 €** | 11.5 % | **10.7 %** | 69.32 € | stávame sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 638.50 € | **638.00 €** | 7.8 % | **7.7 %** | 638.32 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 336.50 € | **336.00 €** | 14.1 % | **14.0 %** | 336.32 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, voľne, 100m | 25.50 € | **25.00 €** | 40.0 % | **37.2 %** | 25.33 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **45.00 €** | 21.5 % | **20.2 %** | 45.33 € | stávame sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 415.50 € | **415.00 €** | 7.7 % | **7.6 %** | 415.33 € | stávame sa najlacnejší |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 40.50 € | **40.00 €** | 36.7 % | **35.1 %** | 40.34 € | stávame sa najlacnejší |
| Salente Combo-4In1 | 133.50 € | **133.00 €** | 15.8 % | **15.3 %** | 133.34 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16KT s 16-palcovým dotykov... | 204.50 € | **204.00 €** | 14.1 % | **13.8 %** | 204.34 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 32.50 € | **32.00 €** | 33.2 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| Reproduktory Edifier S1000MKII 2.0 (hnedé) | 259.50 € | **259.00 €** | 10.3 % | **10.1 %** | 259.35 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.50 € | **26.00 €** | 37.0 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 Max | 425.50 € | **425.00 €** | 14.3 % | **14.1 %** | 425.37 € | stávame sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 248.50 € | **248.00 €** | 9.3 % | **9.1 %** | 248.37 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Black | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.37 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Blue | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.37 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Red | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.37 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C White | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.37 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.50 € | **18.00 €** | 39.0 % | **35.3 %** | 18.38 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **16.00 €** | 11.0 % | **7.7 %** | 16.38 € | stávame sa najlacnejší |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **22.00 €** | 10.7 % | **8.3 %** | 22.38 € | stávame sa najlacnejší |
| Bravo Eddie B-4821 šedý | 29.50 € | **29.00 €** | 10.1 % | **8.2 %** | 29.38 € | stávame sa najlacnejší |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.50 € | **60.00 €** | 10.4 % | **9.4 %** | 60.38 € | stávame sa najlacnejší |
| Russell Hobbs 24992-70 | 39.50 € | **39.00 €** | 6.7 % | **5.3 %** | 39.38 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 110.50 € | **110.00 €** | 13.6 % | **13.0 %** | 110.38 € | stávame sa najlacnejší |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.50 € | **24.00 €** | 15.2 % | **12.9 %** | 24.38 € | stávame sa najlacnejší |
| Sati Crema 1 kg zrno | 20.50 € | **20.00 €** | 8.7 % | **6.0 %** | 20.38 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 16.00 € | **15.50 €** | 17.8 % | **14.1 %** | 15.89 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 27.50 € | **27.00 €** | 33.7 % | **31.3 %** | 27.39 € | stávame sa najlacnejší |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 12.50 € | **12.00 €** | 44.6 % | **38.8 %** | 12.39 € | stávame sa najlacnejší |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 71.50 € | **71.00 €** | 39.3 % | **38.4 %** | 71.39 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 12.50 € | **12.00 €** | 39.4 % | **33.8 %** | 12.39 € | stávame sa najlacnejší |
| ZigBee door and window opening sensor SONOFF SNZB-04... | 10.50 € | **10.00 €** | 14.4 % | **9.0 %** | 10.39 € | stávame sa najlacnejší |
| MOVA Z70 Ultra Roller kompletná sada – Metal Black | 1615.50 € | **1615.00 €** | 15.0 % | **14.9 %** | 1615.39 € | stávame sa najlacnejší |
| Salente Icequeen-Wh | 19.50 € | **19.00 €** | 8.0 % | **5.2 %** | 19.39 € | stávame sa najlacnejší |
| DOMO DO9286IB | 252.00 € | **251.50 €** | 7.9 % | **7.7 %** | 251.89 € | stávame sa najlacnejší |
| Vysávač MOVA Z200 Stick | 345.00 € | **344.50 €** | 14.9 % | **14.7 %** | 344.89 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 158.50 € | **158.00 €** | 14.5 % | **14.1 %** | 158.39 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 56.50 € | **56.00 €** | 8.3 % | **7.3 %** | 56.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 16.00 € | **15.50 €** | 22.1 % | **18.3 %** | 15.89 € | stávame sa najlacnejší |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.50 € | **17.00 €** | 12.6 % | **9.4 %** | 17.39 € | stávame sa najlacnejší |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.50 € | **17.00 €** | 12.8 % | **9.6 %** | 17.39 € | stávame sa najlacnejší |
| Inteligentný spínač WiFi + RF 433 Sonoff RF R2 (NOVI... | 10.50 € | **10.00 €** | 14.0 % | **8.5 %** | 10.39 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 19.50 € | **19.00 €** | 9.1 % | **6.3 %** | 19.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 37.00 € | **36.50 €** | 8.9 % | **7.4 %** | 36.89 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 22.50 € | **22.00 €** | 12.8 % | **10.3 %** | 22.39 € | stávame sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 255.50 € | **255.00 €** | 14.2 % | **14.0 %** | 255.39 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 341.50 € | **341.00 €** | 6.4 % | **6.3 %** | 341.39 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-105-WH bílá barva | 341.50 € | **341.00 €** | 6.4 % | **6.3 %** | 341.39 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 486.50 € | **486.00 €** | 6.1 % | **6.0 %** | 486.39 € | stávame sa najlacnejší |
| Maxxo Sous Vide SV06 | 132.50 € | **132.00 €** | 8.8 % | **8.3 %** | 132.40 € | stávame sa najlacnejší |
| Beko VRT76325VW | 166.50 € | **166.00 €** | 8.7 % | **8.4 %** | 166.40 € | stávame sa najlacnejší |
| Beko VRT86325VI | 199.50 € | **199.00 €** | 7.8 % | **7.5 %** | 199.40 € | stávame sa najlacnejší |
| Kruger&Matz Simple 924 GSM mobilní tlačítkový telefo... | 22.00 € | **21.50 €** | 16.4 % | **13.8 %** | 21.90 € | stávame sa najlacnejší |
| Baterie olověná   6V / 12Ah  XTREME / Enerwell bezúd... | 12.00 € | **11.50 €** | 16.1 % | **11.3 %** | 11.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 22.50 € | **22.00 €** | 31.8 % | **28.9 %** | 22.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 79.00 € | **78.50 €** | 15.5 % | **14.7 %** | 78.90 € | stávame sa najlacnejší |
| ELECTROLUX 300 EFC226R | 248.50 € | **248.00 €** | 8.1 % | **7.9 %** | 248.40 € | stávame sa najlacnejší |
| Gorenje WHT643E4XBG | 246.50 € | **246.00 €** | 8.1 % | **7.9 %** | 246.40 € | stávame sa najlacnejší |
| BEKO B5RCNA406HXB3 | 520.50 € | **520.00 €** | 7.1 % | **6.9 %** | 520.40 € | stávame sa najlacnejší |
| Beko B5XRCNA366HXB | 508.50 € | **508.00 €** | 7.1 % | **7.0 %** | 508.40 € | stávame sa najlacnejší |
| G3Ferrari G10153 Horkovzdušná trouba | 169.50 € | **169.00 €** | 9.1 % | **8.8 %** | 169.40 € | stávame sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 409.50 € | **409.00 €** | 7.1 % | **6.9 %** | 409.40 € | stávame sa najlacnejší |
| Electrolux LKR64022AW | 463.50 € | **463.00 €** | 7.0 % | **6.9 %** | 463.40 € | stávame sa najlacnejší |
| GORENJE GS620C10W | 337.50 € | **337.00 €** | 7.1 % | **6.9 %** | 337.40 € | stávame sa najlacnejší |
| AMICA DI 6401 PSB | 178.50 € | **178.00 €** | 9.1 % | **8.8 %** | 178.40 € | stávame sa najlacnejší |
| Amica TFB 128 TX | 286.50 € | **286.00 €** | 8.0 % | **7.9 %** | 286.40 € | stávame sa najlacnejší |
| BEKO BBIR17300BCS | 347.50 € | **347.00 €** | 7.1 % | **6.9 %** | 347.40 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.50 € | **12.00 €** | 46.0 % | **40.2 %** | 12.41 € | stávame sa najlacnejší |
| Klávesnica Onikuma G55 (čierna) (QWERTY) | 17.50 € | **17.00 €** | 15.0 % | **11.7 %** | 17.41 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.50 € | **42.00 €** | 9.9 % | **8.6 %** | 42.41 € | stávame sa najlacnejší |
| Graef S 10005 | 113.50 € | **113.00 €** | 10.4 % | **9.9 %** | 113.42 € | stávame sa najlacnejší |
| Electrolux EF167 | 14.50 € | **14.00 €** | 12.7 % | **8.8 %** | 14.42 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 14.50 € | **14.00 €** | 12.7 % | **8.8 %** | 14.42 € | stávame sa najlacnejší |
| Resto 90502 French press Atria 800 ml | 11.50 € | **11.00 €** | 13.2 % | **8.3 %** | 11.42 € | stávame sa najlacnejší |
| Status STA 176214 | 10.50 € | **10.00 €** | 13.4 % | **8.0 %** | 10.42 € | stávame sa najlacnejší |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 29.50 € | **29.00 €** | 26.3 % | **24.2 %** | 29.42 € | stávame sa najlacnejší |
| Freewell ND1000 Filter pre OSMO Action 6 | 16.50 € | **16.00 €** | 10.0 % | **6.7 %** | 16.42 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 18.50 € | **18.00 €** | 11.2 % | **8.2 %** | 18.42 € | stávame sa najlacnejší |
| Powerbanka Baseus Bipow 10000 mAh, 20 W (biela) | 18.50 € | **18.00 €** | 10.6 % | **7.6 %** | 18.42 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.50 € | **23.00 €** | 16.5 % | **14.0 %** | 23.42 € | stávame sa najlacnejší |
| Schodík pred mačaciu toaletu Catlink Scooper (sivé) | 84.50 € | **84.00 €** | 14.2 % | **13.5 %** | 84.42 € | stávame sa najlacnejší |
| San Marco Pur Arabica Premium 1 kg zrno | 22.50 € | **22.00 €** | 8.5 % | **6.1 %** | 22.42 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 24.50 € | **24.00 €** | 45.4 % | **42.4 %** | 24.43 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 24.50 € | **24.00 €** | 45.4 % | **42.4 %** | 24.43 € | stávame sa najlacnejší |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 43.50 € | **43.00 €** | 10.4 % | **9.1 %** | 43.43 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 360 LED, 9m x 0... | 24.50 € | **24.00 €** | 45.4 % | **42.4 %** | 24.44 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 117.50 € | **117.00 €** | 9.0 % | **8.5 %** | 117.44 € | stávame sa najlacnejší |
| Beko B3BCNA324HS | 626.50 € | **626.00 €** | 9.6 % | **9.5 %** | 626.44 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 13.50 € | **13.00 €** | 37.2 % | **32.1 %** | 13.45 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 22.50 € | **22.00 €** | 19.5 % | **16.8 %** | 22.45 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.50 € | **26.00 €** | 42.7 % | **40.0 %** | 26.45 € | stávame sa najlacnejší |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.50 € | **36.00 €** | 10.2 % | **8.7 %** | 36.46 € | stávame sa najlacnejší |
| FoodSaver FVB015X | 18.50 € | **18.00 €** | 10.3 % | **7.3 %** | 18.46 € | stávame sa najlacnejší |
| Meteorologická stanice TechniSat IMETEO 400 | 32.50 € | **32.00 €** | 15.9 % | **14.1 %** | 32.46 € | stávame sa najlacnejší |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 58.50 € | **58.00 €** | 6.6 % | **5.7 %** | 58.46 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (white) | 43.50 € | **43.00 €** | 13.4 % | **12.1 %** | 43.46 € | stávame sa najlacnejší |
| Superfire BM01 4-in-1 bicycle light | 19.50 € | **19.00 €** | 14.1 % | **11.1 %** | 19.46 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 3m, 3 x 1mm2,... | 16.50 € | **16.00 €** | 48.2 % | **43.7 %** | 16.47 € | stávame sa najlacnejší |
| Filament Anycubic TPU (čierny) 1 kg | 21.50 € | **21.00 €** | 11.6 % | **9.0 %** | 21.47 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.50 € | **19.00 €** | 38.3 % | **34.8 %** | 19.48 € | stávame sa najlacnejší |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.50 € | **16.00 €** | 32.2 % | **28.2 %** | 16.49 € | stávame sa najlacnejší |
| Solight stropné osvetlenie prachotesné, G13, pre 2x ... | 21.50 € | **21.00 €** | 38.2 % | **35.0 %** | 21.49 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.50 € | **11.00 €** | 41.2 % | **35.1 %** | 11.49 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256 | 26.50 € | **26.00 €** | 8.8 % | **6.8 %** | 26.49 € | stávame sa najlacnejší |
| MEROSS MA151-UN Inteligentný Wi-Fi detektor dymu | 28.50 € | **28.00 €** | 12.6 % | **10.7 %** | 28.49 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.50 € | **16.00 €** | 35.4 % | **31.3 %** | 16.49 € | stávame sa najlacnejší |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.50 € | **10.00 €** | 33.0 % | **26.6 %** | 10.49 € | stávame sa najlacnejší |
| DOMO DO436BL | 36.50 € | **36.00 €** | 10.9 % | **9.3 %** | 36.49 € | stávame sa najlacnejší |
| Domo DO7059S | 36.50 € | **36.00 €** | 10.4 % | **8.9 %** | 36.49 € | stávame sa najlacnejší |
| Solight nabíjačka USB-C, 90W, PD fast charger | 15.50 € | **15.00 €** | 33.9 % | **29.6 %** | 15.49 € | stávame sa najlacnejší |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 236.50 € | **236.00 €** | 11.3 % | **11.1 %** | 236.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.50 € | **28.00 €** | 21.8 % | **19.6 %** | 28.49 € | stávame sa najlacnejší |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.50 € | **23.00 €** | 8.7 % | **6.4 %** | 23.49 € | stávame sa najlacnejší |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 59.50 € | **59.00 €** | 10.2 % | **9.3 %** | 59.49 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creallity (Silver) | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.49 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1346.90 € | **1346.50 €** | 7.4 % | **7.4 %** | 1346.85 € | stávame sa najlacnejší |
| Domo DO8719W | 69.90 € | **69.50 €** | 10.2 % | **9.5 %** | 69.67 € | stávame sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 124.90 € | **124.50 €** | 8.8 % | **8.5 %** | 124.70 € | stávame sa najlacnejší |
| GUZZANTI GZ 8501A | 150.90 € | **150.50 €** | 5.8 % | **5.5 %** | 150.71 € | stávame sa najlacnejší |
| Výrobník ledu TEESA EASY ICE TSA5009 | 74.90 € | **74.50 €** | 8.9 % | **8.3 %** | 74.72 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 195.90 € | **195.50 €** | 10.1 % | **9.9 %** | 195.75 € | stávame sa najlacnejší |
| Ariete Pizzeria 927/01, černá | 205.90 € | **205.50 €** | 8.2 % | **8.0 %** | 205.79 € | stávame sa najlacnejší |
| Thomson MIC201IBT | 113.90 € | **113.50 €** | 12.0 % | **11.6 %** | 113.79 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 110.90 € | **110.50 €** | 6.2 % | **5.9 %** | 110.79 € | stávame sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 68.90 € | **68.50 €** | 10.1 % | **9.4 %** | 68.79 € | stávame sa najlacnejší |
| Guzzanti GZ 8401SE | 124.90 € | **124.50 €** | 7.4 % | **7.1 %** | 124.79 € | stávame sa najlacnejší |
| Braun CG9043 | 214.90 € | **214.50 €** | 8.0 % | **7.8 %** | 214.80 € | stávame sa najlacnejší |
| Tefal FW5558E0 | 177.90 € | **177.50 €** | 8.9 % | **8.6 %** | 177.80 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 175.90 € | **175.50 €** | 8.7 % | **8.4 %** | 175.80 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 212.90 € | **212.50 €** | 10.1 % | **9.9 %** | 212.80 € | stávame sa najlacnejší |
| Girmi FM2100 Mikrovlnná trouba s grilem | 108.90 € | **108.50 €** | 10.1 % | **9.7 %** | 108.80 € | stávame sa najlacnejší |
| Guzzanti GZ 210A | 216.90 € | **216.50 €** | 8.0 % | **7.8 %** | 216.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 96.90 € | **96.50 €** | 41.3 % | **40.7 %** | 96.81 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1718 | 206.90 € | **206.50 €** | 13.0 % | **12.7 %** | 206.81 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 64.90 € | **64.50 €** | 8.3 % | **7.6 %** | 64.83 € | stávame sa najlacnejší |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 84.90 € | **84.50 €** | 13.7 % | **13.2 %** | 84.86 € | stávame sa najlacnejší |
| Guzzanti GZ 1535SS | 206.90 € | **206.50 €** | 8.5 % | **8.3 %** | 206.87 € | stávame sa najlacnejší |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 74.90 € | **74.50 €** | 13.0 % | **12.4 %** | 74.88 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 233.90 € | **233.50 €** | 9.9 % | **9.7 %** | 233.88 € | stávame sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 70.90 € | **70.50 €** | 11.9 % | **11.2 %** | 70.89 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 209.90 € | **209.50 €** | 14.8 % | **14.6 %** | 209.89 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT161E | 108.90 € | **108.50 €** | 6.5 % | **6.1 %** | 108.89 € | stávame sa najlacnejší |
| Uni-T UT206B digitálny klešťový multimeter | 67.90 € | **67.50 €** | 12.1 % | **11.5 %** | 67.89 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 109.90 € | **109.50 €** | 14.2 % | **13.8 %** | 109.89 € | stávame sa najlacnejší |
| Recenzia zariadenia Uni-T RCD UT582+ | 103.90 € | **103.50 €** | 14.0 % | **13.6 %** | 103.89 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 193.90 € | **193.50 €** | 14.6 % | **14.4 %** | 193.89 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 87.90 € | **87.50 €** | 12.7 % | **12.2 %** | 87.89 € | stávame sa najlacnejší |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 88.90 € | **88.50 €** | 13.1 % | **12.6 %** | 88.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 95.90 € | **95.50 €** | 11.1 % | **10.7 %** | 95.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 85.90 € | **85.50 €** | 13.6 % | **13.1 %** | 85.89 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 101.90 € | **101.50 €** | 13.7 % | **13.2 %** | 101.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 209.90 € | **209.50 €** | 7.0 % | **6.8 %** | 209.89 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 74.90 € | **74.50 €** | 11.5 % | **10.9 %** | 74.89 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 143.90 € | **143.50 €** | 14.7 % | **14.4 %** | 143.89 € | stávame sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 103.90 € | **103.50 €** | 14.4 % | **14.0 %** | 103.89 € | stávame sa najlacnejší |
| Merač hladiny hluku Uni-T UT35 | 122.90 € | **122.50 €** | 14.7 % | **14.3 %** | 122.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 151.90 € | **151.50 €** | 14.1 % | **13.8 %** | 151.89 € | stávame sa najlacnejší |
| Odšťavovač G21 Gracioso horizontal | 203.90 € | **203.50 €** | 13.9 % | **13.7 %** | 203.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 76.90 € | **76.50 €** | 39.1 % | **38.3 %** | 76.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 243.90 € | **243.50 €** | 9.8 % | **9.6 %** | 243.89 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 92.90 € | **92.50 €** | 10.2 % | **9.7 %** | 92.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 78.90 € | **78.50 €** | 6.5 % | **5.9 %** | 78.89 € | stávame sa najlacnejší |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 107.90 € | **107.50 €** | 6.3 % | **5.9 %** | 107.89 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0034 FUN WHEELS LIGHT ... | 102.90 € | **102.50 €** | 6.1 % | **5.7 %** | 102.89 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0033 FUN WHEELS LIGHT ... | 102.90 € | **102.50 €** | 6.1 % | **5.7 %** | 102.89 € | stávame sa najlacnejší |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 124.90 € | **124.50 €** | 14.6 % | **14.2 %** | 124.89 € | stávame sa najlacnejší |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BL | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 9.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight časový spínač, týždeň, 1 režim | 4.40 € | **4.00 €** | 36.0 % | **23.7 %** | 4.01 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 2A, 24W, IP20 | 10.00 € | **9.60 €** | 50.8 % | **44.8 %** | 9.61 € | stávame sa najlacnejší |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 9.40 € | **9.00 €** | 48.4 % | **42.1 %** | 9.02 € | stávame sa najlacnejší |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.50 € | **5.10 €** | 46.6 % | **35.9 %** | 5.14 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 5.00 € | **4.60 €** | 56.3 % | **43.8 %** | 4.64 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 6.50 € | **6.10 €** | 45.2 % | **36.2 %** | 6.14 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 3.20 € | **2.80 €** | 46.2 % | **27.9 %** | 2.89 € | stávame sa najlacnejší |
| Solight LED svetelný pás so svetelným a pohybovým se... | 6.20 € | **5.80 €** | 46.1 % | **36.7 %** | 5.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.80 € | **8.40 €** | 38.4 % | **32.1 %** | 8.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.90 € | **10.50 €** | 40.4 % | **35.3 %** | 10.60 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.50 €** | 47.3 % | **42.7 %** | 12.70 € | stávame sa najlacnejší |
| Superior FREEDOM 4v1 USB | 11.90 € | **11.50 €** | 14.2 % | **10.4 %** | 11.71 € | stávame sa najlacnejší |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 12.90 € | **12.50 €** | 34.5 % | **30.3 %** | 12.73 € | stávame sa najlacnejší |
| Sati Ethiopia Moka Sidamo 500 g zrno | 11.90 € | **11.50 €** | 9.4 % | **5.7 %** | 11.75 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 10.90 € | **10.50 €** | 11.3 % | **7.2 %** | 10.76 € | stávame sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 14.90 € | **14.50 €** | 46.3 % | **42.4 %** | 14.77 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.90 € | **14.50 €** | 49.2 % | **45.2 %** | 14.77 € | stávame sa najlacnejší |
| ETA 713240002 | 11.90 € | **11.50 €** | 13.3 % | **9.5 %** | 11.79 € | stávame sa najlacnejší |
| Cabletech UCH0023A1 | 11.90 € | **11.50 €** | 11.2 % | **7.5 %** | 11.79 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 11.90 € | **11.50 €** | 10.8 % | **7.1 %** | 11.79 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 12.90 € | **12.50 €** | 39.7 % | **35.3 %** | 12.80 € | stávame sa najlacnejší |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.90 € | **10.50 €** | 38.0 % | **33.0 %** | 10.81 € | stávame sa najlacnejší |
| Vibrating ring Satisfyer Rocket Ring (dark blue) | 12.90 € | **12.50 €** | 18.6 % | **15.0 %** | 12.82 € | stávame sa najlacnejší |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 15.90 € | **15.50 €** | 10.6 % | **7.8 %** | 15.83 € | stávame sa najlacnejší |
| San Marco INTENSO 500 g | 11.90 € | **11.50 €** | 8.7 % | **5.0 %** | 11.83 € | stávame sa najlacnejší |
| Solight multimeter digitálny V33 | 11.90 € | **11.50 €** | 47.0 % | **42.1 %** | 11.84 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 13.90 € | **13.50 €** | 36.2 % | **32.2 %** | 13.84 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 13.90 € | **13.50 €** | 42.7 % | **38.6 %** | 13.85 € | stávame sa najlacnejší |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BRW | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 11.87 € | stávame sa najlacnejší |
| Thomson CR 50 | 14.90 € | **14.50 €** | 10.2 % | **7.3 %** | 14.88 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1019 | 12.90 € | **12.50 €** | 9.6 % | **6.2 %** | 12.89 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 4.60 € | **4.20 €** | 49.0 % | **36.0 %** | 4.21 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.10 € | **4.70 €** | 48.1 % | **36.5 %** | 4.71 € | stávame sa najlacnejší |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.72 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, pletená, 35x LE... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.73 € | stávame sa najlacnejší |
| Solight skúšačka, 6V - 380V AC/DC, LED diódy | 5.30 € | **4.90 €** | 47.1 % | **36.0 %** | 4.94 € | stávame sa najlacnejší |
| Solight LED vianočná gula sklenená, 10LED, 2x AA, IP20 | 5.30 € | **4.90 €** | 55.6 % | **43.8 %** | 4.94 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 5.30 € | **4.90 €** | 55.6 % | **43.8 %** | 4.94 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.60 € | **4.20 €** | 48.4 % | **35.5 %** | 4.24 € | stávame sa najlacnejší |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 21.90 € | **21.50 €** | 7.8 % | **5.8 %** | 21.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 50.90 € | **50.50 €** | 6.1 % | **5.2 %** | 50.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 36.90 € | **36.50 €** | 24.6 % | **23.2 %** | 36.53 € | stávame sa najlacnejší |
| DOMO DO461FR | 36.90 € | **36.50 €** | 10.5 % | **9.3 %** | 36.58 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm svetlé drevo 500 ml | 22.90 € | **22.50 €** | 13.7 % | **11.7 %** | 22.59 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.90 € | **22.50 €** | 13.7 % | **11.7 %** | 22.59 € | stávame sa najlacnejší |
| Bravo Kery B-4660 400W bílý | 35.90 € | **35.50 €** | 11.1 % | **9.9 %** | 35.63 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.50 €** | 10.5 % | **8.8 %** | 26.63 € | stávame sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 22.90 € | **22.50 €** | 7.0 % | **5.1 %** | 22.65 € | stávame sa najlacnejší |
| Beper BEP-P206RAF200 | 29.90 € | **29.50 €** | 11.4 % | **9.9 %** | 29.67 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 47.90 € | **47.50 €** | 13.9 % | **13.0 %** | 47.69 € | stávame sa najlacnejší |
| Beper BEP-PE145 | 39.90 € | **39.50 €** | 8.5 % | **7.4 %** | 39.70 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 21.90 € | **21.50 €** | 8.2 % | **6.3 %** | 21.70 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.90 € | **19.50 €** | 43.7 % | **40.8 %** | 19.70 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 17.90 € | **17.50 €** | 46.4 % | **43.1 %** | 17.70 € | stávame sa najlacnejší |
| DOMO DO8709P | 28.90 € | **28.50 €** | 8.6 % | **7.1 %** | 28.70 € | stávame sa najlacnejší |
| Solight stredný dvojramenný konzolový držiak pre plo... | 30.90 € | **30.50 €** | 33.5 % | **31.8 %** | 30.70 € | stávame sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 37.90 € | **37.50 €** | 6.5 % | **5.4 %** | 37.71 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 20.90 € | **20.50 €** | 43.0 % | **40.3 %** | 20.74 € | stávame sa najlacnejší |
| ETA Activmix Premium 2103 90000, černý | 40.90 € | **40.50 €** | 8.8 % | **7.7 %** | 40.75 € | stávame sa najlacnejší |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Freewell Osmo Pocket 4P ND8 ND/PL filter | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND32/PL | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND64/PL | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND16 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND32 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND8 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell pre Osmo Pocket ND64 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 41.90 € | **41.50 €** | 13.4 % | **12.3 %** | 41.75 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.90 € | **20.50 €** | 30.3 % | **27.8 %** | 20.76 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 31.90 € | **31.50 €** | 38.7 % | **37.0 %** | 31.77 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 22.90 € | **22.50 €** | 12.5 % | **10.5 %** | 22.79 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 25.90 € | **25.50 €** | 6.8 % | **5.2 %** | 25.79 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7160 | 21.90 € | **21.50 €** | 7.2 % | **5.2 %** | 21.79 € | stávame sa najlacnejší |
| Pohybové čidlo ORBIS ISIMAT+ | 21.90 € | **21.50 €** | 11.7 % | **9.7 %** | 21.79 € | stávame sa najlacnejší |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 16.90 € | **16.50 €** | 14.8 % | **12.1 %** | 16.79 € | stávame sa najlacnejší |
| Solární regulátor PWM Epever VS1024AU, 12/24V, 10A s... | 37.90 € | **37.50 €** | 14.3 % | **13.1 %** | 37.79 € | stávame sa najlacnejší |
| Russell Hobbs 24010-56 | 40.90 € | **40.50 €** | 10.9 % | **9.8 %** | 40.79 € | stávame sa najlacnejší |
| Gorenje SIH1800BLT | 19.90 € | **19.50 €** | 15.2 % | **12.9 %** | 19.79 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.90 € | **27.50 €** | 42.5 % | **40.4 %** | 27.79 € | stávame sa najlacnejší |
| San Marco SUPREMO 1 kg zrno | 21.90 € | **21.50 €** | 8.7 % | **6.7 %** | 21.79 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 25.90 € | **25.50 €** | 34.5 % | **32.5 %** | 25.80 € | stávame sa najlacnejší |
| RUSSELL HOBBS 23310-56/RH | 45.90 € | **45.50 €** | 14.8 % | **13.8 %** | 45.80 € | stávame sa najlacnejší |
| Leifheit Žehlicí prkno Classic S Basic | 35.90 € | **35.50 €** | 37.7 % | **36.1 %** | 35.81 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.90 € | **36.50 €** | 17.5 % | **16.2 %** | 36.82 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.90 € | **36.50 €** | 17.8 % | **16.6 %** | 36.82 € | stávame sa najlacnejší |
| ETA Mano 3219 90020 | 55.90 € | **55.50 €** | 10.2 % | **9.4 %** | 55.83 € | stávame sa najlacnejší |
| Ufesa Rouge BP3443 | 31.90 € | **31.50 €** | 9.7 % | **8.3 %** | 31.83 € | stávame sa najlacnejší |
| Bezdrôtové napájadlo pre domáce zvieratá Rojeco 2,5 L | 31.90 € | **31.50 €** | 12.7 % | **11.3 %** | 31.83 € | stávame sa najlacnejší |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 24.90 € | **24.50 €** | 45.3 % | **43.0 %** | 24.84 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 32.90 € | **32.50 €** | 12.5 % | **11.2 %** | 32.85 € | stávame sa najlacnejší |
| Amica KF 17191 | 29.90 € | **29.50 €** | 22.7 % | **21.1 %** | 29.86 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.90 € | **24.50 €** | 38.3 % | **36.1 %** | 24.87 € | stávame sa najlacnejší |
| Tefal HB 65KD38 | 55.90 € | **55.50 €** | 12.3 % | **11.5 %** | 55.87 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, USB A+C, 2 ... | 20.90 € | **20.50 €** | 39.3 % | **36.6 %** | 20.87 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 16.90 € | **16.50 €** | 39.3 % | **36.1 %** | 16.87 € | stávame sa najlacnejší |
| Domo DO9215AV | 32.90 € | **32.50 €** | 10.7 % | **9.4 %** | 32.88 € | stávame sa najlacnejší |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.90 € | **18.50 €** | 12.5 % | **10.1 %** | 18.88 € | stávame sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 18.90 € | **18.50 €** | 9.6 % | **7.3 %** | 18.88 € | stávame sa najlacnejší |
| Smart WiFi Touch Wall Switch Sonoff TX T5 3C (3-chan... | 21.90 € | **21.50 €** | 13.3 % | **11.2 %** | 21.88 € | stávame sa najlacnejší |
| D-LINK AX9U | 17.90 € | **17.50 €** | 13.2 % | **10.6 %** | 17.88 € | stávame sa najlacnejší |
| Sati Espresso Intenso 1 kg zrno | 17.90 € | **17.50 €** | 8.1 % | **5.7 %** | 17.88 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 26.90 € | **26.50 €** | 13.1 % | **11.4 %** | 26.89 € | stávame sa najlacnejší |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 33.90 € | **33.50 €** | 13.1 % | **11.8 %** | 33.89 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256A | 43.90 € | **43.50 €** | 7.9 % | **6.9 %** | 43.89 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 58.90 € | **58.50 €** | 13.9 % | **13.1 %** | 58.89 € | stávame sa najlacnejší |
| Recenzia zariadenia SMD Uni-T UT116A | 24.90 € | **24.50 €** | 11.6 % | **9.8 %** | 24.89 € | stávame sa najlacnejší |
| Digitálny klešťový merač Uni-T UT202R | 24.90 € | **24.50 €** | 12.8 % | **11.0 %** | 24.89 € | stávame sa najlacnejší |
| Uni-T UT205E digitálny klešťový multimeter | 48.90 € | **48.50 €** | 12.9 % | **12.0 %** | 48.89 € | stávame sa najlacnejší |
| Uni-T UT210B Mini digitálny klešťový multimeter | 22.90 € | **22.50 €** | 11.8 % | **9.8 %** | 22.89 € | stávame sa najlacnejší |
| Uni-T UT210C Mini digitálny klešťový multimeter | 38.90 € | **38.50 €** | 10.9 % | **9.8 %** | 38.89 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 34.90 € | **34.50 €** | 13.7 % | **12.4 %** | 34.89 € | stávame sa najlacnejší |
| Uni-T UT216A digitálny klešťový multimeter | 52.90 € | **52.50 €** | 12.0 % | **11.1 %** | 52.89 € | stávame sa najlacnejší |
| Digitálny merací prístroj Uni-T UT220 | 45.90 € | **45.50 €** | 10.2 % | **9.2 %** | 45.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 61.90 € | **61.50 €** | 13.8 % | **13.0 %** | 61.89 € | stávame sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 54.90 € | **54.50 €** | 13.3 % | **12.5 %** | 54.89 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 53.90 € | **53.50 €** | 12.7 % | **11.8 %** | 53.89 € | stávame sa najlacnejší |
| Uni-T UT320T 2-v-1 teplomer | 34.90 € | **34.50 €** | 13.4 % | **12.1 %** | 34.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT331+ | 41.90 € | **41.50 €** | 14.0 % | **13.0 %** | 41.89 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 18.90 € | **18.50 €** | 12.8 % | **10.4 %** | 18.89 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 53.90 € | **53.50 €** | 11.4 % | **10.6 %** | 53.89 € | stávame sa najlacnejší |
| Domo DO 9218 WK | 21.90 € | **21.50 €** | 10.4 % | **8.4 %** | 21.89 € | stávame sa najlacnejší |
| DOMO DO9046C | 56.90 € | **56.50 €** | 7.2 % | **6.4 %** | 56.89 € | stávame sa najlacnejší |
| Leifheit Combi Clean M + náhr. Static | 20.90 € | **20.50 €** | 10.1 % | **7.9 %** | 20.89 € | stávame sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Explorer | 51.90 € | **51.50 €** | 7.0 % | **6.2 %** | 51.89 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.90 € | **25.50 €** | 27.3 % | **25.3 %** | 25.89 € | stávame sa najlacnejší |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 23.90 € | **23.50 €** | 12.7 % | **10.8 %** | 23.89 € | stávame sa najlacnejší |
| Rooma Espresso A7 bílá | 537.90 € | **537.50 €** | 6.0 % | **5.9 %** | 537.70 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 274.90 € | **274.50 €** | 14.5 % | **14.3 %** | 274.70 € | stávame sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 394.90 € | **394.50 €** | 7.1 % | **6.9 %** | 394.70 € | stávame sa najlacnejší |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 350.90 € | **350.50 €** | 5.8 % | **5.7 %** | 350.71 € | stávame sa najlacnejší |
| Intelligent self-cleaning cat litterbox UBPet C20 | 277.90 € | **277.50 €** | 12.2 % | **12.0 %** | 277.75 € | stávame sa najlacnejší |
| Gorenje WG894A25 | 499.90 € | **499.50 €** | 9.1 % | **9.0 %** | 499.75 € | stávame sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 263.90 € | **263.50 €** | 8.6 % | **8.5 %** | 263.76 € | stávame sa najlacnejší |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 488.90 € | **488.50 €** | 7.0 % | **6.9 %** | 488.77 € | stávame sa najlacnejší |
| Ufesa Sensazione černý | 333.90 € | **333.50 €** | 6.9 % | **6.8 %** | 333.80 € | stávame sa najlacnejší |
| Salente Rtx-L7 | 270.90 € | **270.50 €** | 8.0 % | **7.9 %** | 270.80 € | stávame sa najlacnejší |
| Rowenta RH98A9WO | 278.90 € | **278.50 €** | 7.9 % | **7.7 %** | 278.80 € | stávame sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 344.90 € | **344.50 €** | 7.1 % | **7.0 %** | 344.80 € | stávame sa najlacnejší |
| Gorenje GECS5C70XPA | 471.90 € | **471.50 €** | 7.1 % | **7.0 %** | 471.80 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 888.90 € | **888.50 €** | 7.3 % | **7.3 %** | 888.88 € | stávame sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 468.90 € | **468.50 €** | 12.8 % | **12.7 %** | 468.88 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 469.90 € | **469.50 €** | 8.6 % | **8.5 %** | 469.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 903.90 € | **903.50 €** | 14.9 % | **14.8 %** | 903.89 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 258.90 € | **258.50 €** | 14.6 % | **14.4 %** | 258.89 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 374.90 € | **374.50 €** | 7.8 % | **7.7 %** | 374.89 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 5.00 € | **4.70 €** | 54.0 % | **44.7 %** | 4.71 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, vypí... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 4.00 € | **3.70 €** | 47.2 % | **36.1 %** | 3.71 € | stávame sa najlacnejší |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.60 € | **7.30 €** | 41.7 % | **36.1 %** | 7.33 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.73 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.80 € | **7.50 €** | 41.9 % | **36.4 %** | 7.53 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.30 € | **5.00 €** | 44.1 % | **36.0 %** | 5.03 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **2.00 €** | 52.0 % | **32.2 %** | 2.03 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 7.00 € | **6.70 €** | 36.5 % | **30.6 %** | 6.74 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.74 € | stávame sa najlacnejší |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.30 € | **6.00 €** | 37.0 % | **30.4 %** | 6.10 € | stávame sa najlacnejší |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.80 € | **2.50 €** | 46.9 % | **31.1 %** | 2.60 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, čierny | 2.80 € | **2.50 €** | 45.9 % | **30.3 %** | 2.60 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.80 € | **9.60 €** | 33.9 % | **31.2 %** | 9.61 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 9.90 € | **9.70 €** | 15.6 % | **13.3 %** | 9.79 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 8.90 € | **8.70 €** | 14.7 % | **12.1 %** | 8.79 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, biela | 2.10 € | **1.90 €** | 49.8 % | **35.5 %** | 1.91 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.70 € | **2.50 €** | 47.3 % | **36.4 %** | 2.51 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.60 € | **1.40 €** | 51.3 % | **32.4 %** | 1.41 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely | 2.50 € | **2.30 €** | 47.3 % | **35.5 %** | 2.32 € | stávame sa najlacnejší |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 5.00 € | **4.80 €** | 43.6 % | **37.9 %** | 4.83 € | stávame sa najlacnejší |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.60 € | **2.40 €** | 54.3 % | **42.4 %** | 2.44 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.60 € | **1.40 €** | 51.3 % | **32.4 %** | 1.44 € | stávame sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 7.00 € | **6.80 €** | 19.6 % | **16.1 %** | 6.89 € | stávame sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 6.00 € | **5.80 €** | 18.1 % | **14.2 %** | 5.89 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 6.50 € | **6.30 €** | 11.3 % | **7.8 %** | 6.39 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 7.50 € | **7.30 €** | 22.9 % | **19.7 %** | 7.39 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 2,5 x 200mm, natura... | 1.10 € | **0.90 €** | 59.7 % | **30.7 %** | 0.92 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 200mm, čierna... | 1.50 € | **1.30 €** | 52.4 % | **32.1 %** | 1.32 € | stávame sa najlacnejší |
| Solight zásuvka, 16A, biela, vypínač | 2.00 € | **1.80 €** | 49.2 % | **34.3 %** | 1.82 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.90 € | **1.70 €** | 36.7 % | **22.3 %** | 1.80 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 2.00 € | **1.80 €** | 40.2 % | **26.2 %** | 1.90 € | stávame sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight prodlužovací prívodný kábel k vianočným reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, biely | 2.80 € | **2.60 €** | 45.9 % | **35.5 %** | 2.62 € | stávame sa najlacnejší |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.40 € | **2.20 €** | 56.1 % | **43.1 %** | 2.23 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.40 € | **2.20 €** | 46.7 % | **34.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.40 € | **2.20 €** | 47.8 % | **35.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.30 € | **3.10 €** | 52.4 % | **43.2 %** | 3.14 € | stávame sa najlacnejší |
| Solight zástrčka gumová do vlhka a prachu, priama, I... | 2.30 € | **2.10 €** | 47.2 % | **34.4 %** | 2.14 € | stávame sa najlacnejší |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 6.60 € | **6.40 €** | 44.2 % | **39.9 %** | 6.50 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 530.00 € | **529.90 €** | 6.1 % | **6.0 %** | 529.95 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 380.00 € | **379.90 €** | 7.0 % | **6.9 %** | 379.95 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 285.00 € | **284.90 €** | 14.1 % | **14.1 %** | 284.96 € | stávame sa najlacnejší |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 17.00 € | **16.90 €** | 7.6 % | **6.9 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 23.00 € | **22.90 €** | 33.2 % | **32.6 %** | 22.95 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 18.00 € | **17.90 €** | 45.5 % | **44.7 %** | 17.95 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 21.00 € | **20.90 €** | 38.4 % | **37.7 %** | 20.96 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom LECCE, ... | 22.00 € | **21.90 €** | 38.4 % | **37.8 %** | 21.96 € | stávame sa najlacnejší |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 17.00 € | **16.90 €** | 45.3 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 17.00 € | **16.90 €** | 45.3 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 30.00 € | **29.90 €** | 35.3 % | **34.8 %** | 29.96 € | stávame sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.00 € | **47.90 €** | 10.2 % | **10.0 %** | 47.96 € | stávame sa najlacnejší |
| ETA Verto II 1423 90000 bílý/zlatý | 31.00 € | **30.90 €** | 12.5 % | **12.1 %** | 30.96 € | stávame sa najlacnejší |
| Electrolux E200SM | 17.00 € | **16.90 €** | 15.4 % | **14.7 %** | 16.97 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 40.00 € | **39.90 €** | 38.2 % | **37.9 %** | 39.98 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 50.00 € | **49.90 €** | 63.6 % | **63.3 %** | 49.99 € | stávame sa najlacnejší |
| Yeelight Pura Monitor Light Bar Pro | 58.00 € | **57.90 €** | 12.9 % | **12.8 %** | 57.99 € | stávame sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **35.90 €** | 45.0 % | **44.6 %** | 35.99 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 22.00 € | **21.90 €** | 7.7 % | **7.2 %** | 21.99 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT200R | 17.00 € | **16.90 €** | 9.4 % | **8.8 %** | 16.99 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40T | 29.00 € | **28.90 €** | 12.8 % | **12.4 %** | 28.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.30 € | **9.20 €** | 25.6 % | **24.2 %** | 9.29 € | stávame sa najlacnejší |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 40.00 € | **39.90 €** | 33.9 % | **33.6 %** | 39.99 € | stávame sa najlacnejší |
| Electrolux E3HB1-4GG | 24.00 € | **23.90 €** | 7.4 % | **7.0 %** | 23.99 € | stávame sa najlacnejší |
| Tefal KO5S08E0 | 35.00 € | **34.90 €** | 10.0 % | **9.7 %** | 34.99 € | stávame sa najlacnejší |
| Ariete ART 1548/04 | 29.00 € | **28.90 €** | 9.9 % | **9.5 %** | 28.99 € | stávame sa najlacnejší |
| Ariete ART 1548/05 | 29.00 € | **28.90 €** | 9.9 % | **9.5 %** | 28.99 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 53.00 € | **52.90 €** | 6.1 % | **5.9 %** | 52.99 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/B | 17.00 € | **16.90 €** | 14.9 % | **14.2 %** | 16.99 € | stávame sa najlacnejší |
| Filters ND8/16/32 Freewell for DJI Neo | 20.00 € | **19.90 €** | 12.7 % | **12.1 %** | 19.99 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.90 €** | 8.2 % | **7.9 %** | 40.99 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 4.90 € | **4.80 €** | 8.8 % | **6.6 %** | 4.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.70 € | **5.60 €** | 37.5 % | **35.1 %** | 5.63 € | stávame sa najlacnejší |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 5.20 € | **5.10 €** | 46.8 % | **44.0 %** | 5.14 € | stávame sa najlacnejší |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.20 € | **5.10 €** | 46.3 % | **43.5 %** | 5.15 € | stávame sa najlacnejší |
| Solight PIR senzor pro E27 žiarovku, biely | 6.90 € | **6.80 €** | 46.1 % | **44.0 %** | 6.85 € | stávame sa najlacnejší |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.20 € | **6.10 €** | 36.6 % | **34.4 %** | 6.15 € | stávame sa najlacnejší |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.40 € | **7.30 €** | 45.7 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.40 € | **7.30 €** | 45.7 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight PIR stropný senzor, interiérový, biely | 7.40 € | **7.30 €** | 45.7 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 7.40 € | **7.30 €** | 37.7 % | **35.8 %** | 7.37 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.70 € | **4.60 €** | 35.0 % | **32.1 %** | 4.67 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka s viečkom, biela | 6.40 € | **6.30 €** | 36.2 % | **34.1 %** | 6.38 € | stávame sa najlacnejší |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.90 € | **5.80 €** | 11.0 % | **9.2 %** | 5.89 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.40 € | **5.30 €** | 45.4 % | **42.7 %** | 5.39 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 6.70 € | **6.60 €** | 34.5 % | **32.5 %** | 6.69 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.90 € | **6.80 €** | 45.3 % | **43.2 %** | 6.89 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.90 € | **6.80 €** | 45.3 % | **43.2 %** | 6.89 € | stávame sa najlacnejší |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 6.70 € | **6.60 €** | 31.9 % | **29.9 %** | 6.69 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.70 € | **4.60 €** | 16.9 % | **14.4 %** | 4.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **5.30 €** | 37.2 % | **34.7 %** | 5.39 € | stávame sa najlacnejší |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.40 € | **4.30 €** | 55.5 % | **52.0 %** | 4.39 € | stávame sa najlacnejší |
| Solight prepojovací konektor flexibilný pre COB LED ... | 2.00 € | **1.90 €** | 52.0 % | **44.4 %** | 1.91 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 4.00 € | **3.90 €** | 48.5 % | **44.8 %** | 3.91 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 2,5A, biela | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.21 € | stávame sa najlacnejší |
| Solight zástrčka priama s úchytom, IP20, biela | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.21 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 30x mini LED, 3m, 3 x... | 2.10 € | **2.00 €** | 51.1 % | **43.9 %** | 2.02 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 2.50 € | **2.40 €** | 17.5 % | **12.8 %** | 2.44 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.50 € | **2.40 €** | 48.4 % | **42.4 %** | 2.44 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.70 € | **3.60 €** | 46.7 % | **42.8 %** | 3.65 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 2.10 € | **2.00 €** | 48.5 % | **41.4 %** | 2.05 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 150mm, čierna... | 1.10 € | **1.00 €** | 42.0 % | **29.0 %** | 1.05 € | stávame sa najlacnejší |
| Solight izolačná páska, 38mm x 0,13mm x 10m, čierna | 1.10 € | **1.00 €** | 42.0 % | **29.0 %** | 1.05 € | stávame sa najlacnejší |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 1.80 € | **1.70 €** | 39.4 % | **31.6 %** | 1.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.90 € | **3.80 €** | 32.7 % | **29.3 %** | 3.85 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 8mm zacvakáv... | 1.30 € | **1.20 €** | 51.0 % | **39.4 %** | 1.25 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 2.00 € | **1.90 €** | 57.9 % | **50.0 %** | 1.96 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.60 € | **1.50 €** | 44.5 % | **35.5 %** | 1.56 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 12W, E27, 6000K... | 1.50 € | **1.40 €** | 48.7 % | **38.8 %** | 1.46 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 3.00 € | **2.90 €** | 39.4 % | **34.7 %** | 2.96 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 2.00 € | **1.90 €** | 40.2 % | **33.2 %** | 1.96 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.00 € | **1.90 €** | 36.6 % | **29.8 %** | 1.96 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.60 € | **3.50 €** | 41.4 % | **37.5 %** | 3.56 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 3.70 € | **3.60 €** | 36.1 % | **32.4 %** | 3.67 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.20 € | **3.10 €** | 35.5 % | **31.3 %** | 3.17 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.40 € | **3.30 €** | 38.2 % | **34.1 %** | 3.37 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP40, čierna-oranžová | 3.20 € | **3.10 €** | 38.4 % | **34.1 %** | 3.17 € | stávame sa najlacnejší |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 3.90 € | **3.80 €** | 37.9 % | **34.3 %** | 3.87 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.60 € | **3.50 €** | 35.5 % | **31.7 %** | 3.57 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.08 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.08 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 3000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.70 € | **2.60 €** | 38.1 % | **32.9 %** | 2.68 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.60 € | **3.50 €** | 37.4 % | **33.6 %** | 3.58 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.10 € | **3.00 €** | 16.1 % | **12.4 %** | 3.08 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.50 € | **3.40 €** | 37.5 % | **33.5 %** | 3.49 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.70 € | **3.60 €** | 45.3 % | **41.4 %** | 3.69 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.60 € | **3.50 €** | 52.4 % | **48.2 %** | 3.59 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.50 € | **3.40 €** | 36.8 % | **32.9 %** | 3.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.70 € | **2.60 €** | 26.9 % | **22.2 %** | 2.69 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 1.00 € | **0.90 €** | 42.6 % | **28.4 %** | 0.95 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 1.00 € | **0.90 €** | 42.6 % | **28.4 %** | 0.96 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 1.00 € | **0.90 €** | 42.6 % | **28.4 %** | 0.96 € | stávame sa najlacnejší |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.90 € | **0.80 €** | 38.1 % | **22.7 %** | 0.89 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, čierna | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, sviečka 4W, E14, 3000K, ... | 1.90 € | **1.80 €** | 51.4 % | **43.5 %** | 1.82 € | stávame sa najlacnejší |
| Solight SCART kábel, SCART konektor - SCART konektor... | 1.90 € | **1.80 €** | 37.9 % | **30.7 %** | 1.85 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.90 € | **1.80 €** | 36.7 % | **29.5 %** | 1.89 € | stávame sa najlacnejší |
| Solight anténny rozbočovač hybridný priamy | 1.90 € | **1.80 €** | 35.5 % | **28.4 %** | 1.89 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 2,5W, 3000K, 215lm | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 4,5W, 3000K, 400lm | 2.80 € | **2.70 €** | 49.8 % | **44.4 %** | 2.71 € | stávame sa najlacnejší |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.60 € | **7.50 €** | 37.3 % | **35.5 %** | 7.51 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 1 zásuvka, 16A/3680W,... | 5.80 € | **5.70 €** | 54.6 % | **51.9 %** | 5.72 € | stávame sa najlacnejší |
| Solight PIR interiérový senzor, do krabičky od vypín... | 8.90 € | **8.80 €** | 45.9 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.60 € | **8.50 €** | 36.6 % | **35.0 %** | 8.54 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 14.00 € | **13.90 €** | 36.5 % | **35.5 %** | 13.95 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 8.90 € | **8.80 €** | 45.9 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 8.90 € | **8.80 €** | 45.9 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10A, biely-sivý | 3.30 € | **3.20 €** | 39.7 % | **35.5 %** | 3.25 € | stávame sa najlacnejší |
| Solight magnetický USB-C/Lightning kábel, USB-C kone... | 5.30 € | **5.20 €** | 43.2 % | **40.5 %** | 5.25 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda strieborná, závesná, ča... | 7.60 € | **7.50 €** | 52.6 % | **50.6 %** | 7.56 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 12.00 € | **11.90 €** | 38.0 % | **36.8 %** | 11.96 € | stávame sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 14.00 € | **13.90 €** | 32.8 % | **31.9 %** | 13.96 € | stávame sa najlacnejší |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 6.80 € | **6.70 €** | 32.9 % | **30.9 %** | 6.76 € | stávame sa najlacnejší |
| ELDONEX EKS4040SL | 11.00 € | **10.90 €** | 9.7 % | **8.7 %** | 10.96 € | stávame sa najlacnejší |
| Beper BEP-50245 | 13.00 € | **12.90 €** | 10.8 % | **9.9 %** | 12.96 € | stávame sa najlacnejší |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.20 € | **9.10 €** | 39.5 % | **38.0 %** | 9.16 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 13.00 € | **12.90 €** | 26.3 % | **25.3 %** | 12.96 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.60 € | **9.50 €** | 31.8 % | **30.5 %** | 9.56 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.60 € | **4.50 €** | 46.1 % | **42.9 %** | 4.57 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.30 € | **2.20 €** | 46.1 % | **39.7 %** | 2.28 € | stávame sa najlacnejší |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 5.50 € | **5.40 €** | 24.6 % | **22.3 %** | 5.48 € | stávame sa najlacnejší |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.50 € | **5.40 €** | 36.3 % | **33.8 %** | 5.48 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 4.80 € | **4.70 €** | 37.4 % | **34.5 %** | 4.78 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 2.80 € | **2.70 €** | 35.5 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 2.80 € | **2.70 €** | 35.5 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 7.50 € | **7.40 €** | 38.3 % | **36.4 %** | 7.49 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.10 € | **5.00 €** | 18.1 % | **15.8 %** | 5.09 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.50 € | **7.40 €** | 38.3 % | **36.4 %** | 7.49 € | stávame sa najlacnejší |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 8.00 € | **7.90 €** | 12.3 % | **10.9 %** | 7.99 € | stávame sa najlacnejší |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.30 € | **3.20 €** | 19.8 % | **16.1 %** | 3.29 € | stávame sa najlacnejší |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 3.80 € | **3.70 €** | 19.7 % | **16.6 %** | 3.79 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 3.80 € | **3.70 €** | 39.8 % | **36.1 %** | 3.79 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 8.50 € | **8.40 €** | 45.2 % | **43.5 %** | 8.49 € | stávame sa najlacnejší |
| UNI-T UT658DUAL tester zásuviek USB | 12.00 € | **11.90 €** | 9.3 % | **8.3 %** | 11.99 € | stávame sa najlacnejší |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.99 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.30 € | **2.20 €** | 23.8 % | **18.5 %** | 2.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 8.40 € | **8.30 €** | 54.5 % | **52.7 %** | 8.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.30 € | **4.20 €** | 11.3 % | **8.7 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.60 € | **4.50 €** | 33.6 % | **30.7 %** | 4.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.30 € | **4.20 €** | 11.7 % | **9.1 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.40 € | **9.30 €** | 31.5 % | **30.1 %** | 9.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.80 € | **4.70 €** | 23.1 % | **20.5 %** | 4.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.00 € | **5.90 €** | 25.4 % | **23.3 %** | 5.99 € | stávame sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 5.30 € | **5.20 €** | 20.4 % | **18.1 %** | 5.29 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.70 € | **8.60 €** | 6.8 % | **5.6 %** | 8.69 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 92.00 € | **91.90 €** | 9.4 % | **9.3 %** | 91.96 € | stávame sa najlacnejší |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 110.00 € | **109.90 €** | 20.0 % | **19.9 %** | 109.96 € | stávame sa najlacnejší |
| Guzzanti GZ 35B1 | 137.00 € | **136.90 €** | 5.8 % | **5.7 %** | 136.96 € | stávame sa najlacnejší |

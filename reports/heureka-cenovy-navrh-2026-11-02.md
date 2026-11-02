# Návrh na úpravu cien podľa Heureka porovnania — 2026-11-02

Vstup: `premiumstore-sk_2026-11-02_09-48.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6146**
- Návrh **zvýšiť** cenu: **180** produktov
- Návrh **znížiť** cenu: **612** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5354** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **57**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **314**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (180)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| GMKtec K15 Mini PC Core Ultra 5 125U 16 GB 1 TB Win ... | 700.08 € | **770.00 €** | 26.6 % | **39.2 %** | 789.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Elektráreň Allpowers S2000 Pro | 625.00 € | **687.50 €** | 15.0 % | **26.5 %** | 757.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Elektrický skúter NAVEE ST5 Max | 810.50 € | **855.00 €** | 11.9 % | **18.1 %** | 870.20 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| CATLINK Scoop Robot Pro – samočistiaca toaleta pre m... | 784.00 € | **825.00 €** | 9.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| MINIS FORUM UM870 Plus Ryzen 7 8745H 16 GB + 512 GB ... | 705.50 € | **743.00 €** | 3.7 % | **9.2 %** | 758.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| GMKtec Mini PC M3 Intel i5-12450H 16 GB RAM + 512 GB... | 561.50 € | **592.50 €** | 15.0 % | **21.4 %** | 604.70 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 13, zlatá) | 300.33 € | **330.00 €** | 45.2 % | **59.6 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 9, čierna) | 300.33 € | **330.00 €** | 37.6 % | **51.2 %** | 369.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Smartring RingConn Gen 2 (veľkosť 11, zlatá) | 300.33 € | **329.50 €** | 45.7 % | **59.8 %** | 347.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Smartring RingConn Gen 2 (veľkosť 14, zlatá) | 300.33 € | **329.50 €** | 45.7 % | **59.9 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Termovízna kamera Mileseey TP2 Plus s Wi-Fi | 313.50 € | **342.00 €** | 15.0 % | **25.5 %** | 349.32 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosné dvojfarebné LED osvetlenie Neewer HS200B | 282.90 € | **310.50 €** | 27.3 % | **39.7 %** | 317.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Mileseey XTAPE1 s meracou páskou ... | 241.90 € | **266.00 €** | 10.8 % | **21.9 %** | 312.42 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava puzdra na miniprojektor AURZEN Boom | 269.50 € | **293.50 €** | 6.2 % | **15.6 %** | 299.61 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 250.10 € | **273.00 €** | 30.7 % | **42.7 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| WOLFBOX G900pro 4K + 2,5K palubná kamera | 270.00 € | **292.50 €** | 19.3 % | **29.3 %** | 298.76 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Stavebná sada robota xTool mBot2 Rover | 345.00 € | **367.50 €** | 19.3 % | **27.1 %** | 375.25 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Elektráreň Allpowers VOLIX P300 | 168.50 € | **185.00 €** | 15.1 % | **26.4 %** | 209.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Prenosný monitor ZEUSLAP P16BT s 16-palcovým dotykov... | 194.50 € | **210.50 €** | 4.5 % | **13.1 %** | 215.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Mobilná dokovacia stanica VITURE Pro | 159.50 € | **175.00 €** | 9.7 % | **20.4 %** | 188.71 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 184.00 € | **198.50 €** | 6.7 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| DDPAI Z90 2026 – palubná kamera | 141.50 € | **155.50 €** | 19.1 % | **30.9 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termovízna kamera FNIRSI TDM-120P | 181.00 € | **194.00 €** | 6.7 % | **14.3 %** | 198.37 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 417.50 € | **430.00 €** | 13.2 % | **16.6 %** | 439.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 115.50 € | **127.00 €** | 4.4 % | **14.7 %** | 143.84 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.70 € | **121.50 €** | 27.6 % | **40.1 %** | 135.18 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| WOLFBOX G840S 4K + 1080p 32 GB palubná kamera | 137.50 € | **147.50 €** | 19.2 % | **27.8 %** | 150.56 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Powerbanka Allpowers S200 200 W | 102.50 € | **112.50 €** | 15.2 % | **26.5 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termostatická hlavica SONOFF ZigBee TRVZB, balenie p... | 118.50 € | **128.50 €** | 6.2 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Indukčná varná doska AMZCHEF CE-FS-IRC128D35 | 99.00 € | **108.90 €** | 14.8 % | **26.3 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Stabilizátor AOCHUAN S3 s doplnkovým displejom (čierny) | 175.28 € | **185.00 €** | 35.1 % | **42.6 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 284.90 € | **293.90 €** | 15.1 % | **18.7 %** | 299.96 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 96.50 € | **105.00 €** | 6.2 % | **15.5 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Dynamický mikrofón MAONO PD200WS (čierny) | 90.90 € | **99.00 €** | 14.0 % | **24.2 %** | 101.16 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| UTRAI JS20 – multifunkčný štartér do auta | 84.00 € | **92.00 €** | 28.8 % | **41.0 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| REDTIGER F7N Pro WiFi 4K + 1080p palubná kamera | 116.00 € | **124.00 €** | 19.0 % | **27.2 %** | 126.65 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava Dreame Aqua10 Ultra Track Complete, Aqua10 U... | 80.00 € | **88.00 €** | 14.7 % | **26.2 %** | 112.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 79.95 € | **87.90 €** | 30.9 % | **43.9 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada filtrov Bright Day Freeweel Mission 1 Pro/Missi... | 73.90 € | **81.00 €** | 15.1 % | **26.1 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| DDPAI Z90T 4G palubná kamera | 227.00 € | **234.00 €** | 19.3 % | **22.9 %** | 239.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Káblové slúchadlá TRUTHEAR Zero Blue 2 (modré) | 70.50 € | **77.50 €** | 15.3 % | **26.8 %** | 83.63 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vodné chladenie pre procesor DE360 (čierne) | 107.62 € | **114.50 €** | 32.4 % | **40.9 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| WOLFBOX i17 WiFi 4K + 2,5K 64 GB palubná kamera | 133.90 € | **140.50 €** | 19.3 % | **25.1 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Dynamický mikrofón Fifine Tank6 (biely) | 72.50 € | **79.00 €** | 18.8 % | **29.4 %** | 80.69 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| REDTIGER F9 WiFi 4K + 1080p palubná kamera | 87.00 € | **93.50 €** | 18.9 % | **27.8 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Infračervený teplomer Uni-T UT302D+ | 69.50 € | **76.00 €** | 29.4 % | **41.6 %** | 79.83 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 184.00 € | **190.50 €** | 11.0 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 75.50 € | **81.90 €** | 6.2 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| WOLFBOX G900TriPro – palubná kamera s WiFi, rozlíšen... | 274.90 € | **281.00 €** | 8.5 % | **11.0 %** | 286.81 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| WOLFBOX G900TriPro – palubná kamera s WiFi a rozlíše... | 274.90 € | **281.00 €** | 19.4 % | **22.1 %** | 286.81 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gorenje WG2PS72A12 | 233.90 € | **240.00 €** | 5.1 % | **7.8 %** | 244.92 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 61.50 € | **67.50 €** | 31.3 % | **44.2 %** | 76.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 62.52 € | **68.50 €** | 18.0 % | **29.3 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa DarkFlash DS900WD (biela) | 62.52 € | **68.50 €** | 35.0 % | **47.9 %** | 77.37 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termostatická hlavica SONOFF ZigBee TRVZB, balenie p... | 59.00 € | **64.90 €** | 6.3 % | **16.9 %** | 69.28 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Otočný stojan Puluz s napájacou zásuvkou 45 cm (čierny) | 92.25 € | **97.90 €** | 34.8 % | **43.0 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Webová kamera Emeet SmartCam C960 Ultra | 83.50 € | **88.90 €** | 19.5 % | **27.2 %** | 90.80 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 51.90 € | **57.00 €** | 5.4 % | **15.8 %** | 62.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Výrobník ledu TEESA EASY ICE TSA5009 | 70.00 € | **75.00 €** | 7.4 % | **15.0 %** | 76.68 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Uni-T UT663B endoskop | 152.50 € | **157.50 €** | 9.3 % | **12.9 %** | 160.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Súprava príslušenstva pre robotický vysávač Dreame A... | 48.90 € | **53.50 €** | 15.4 % | **26.3 %** | 82.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| WOLFBOX i07 WiFi 2,5K + 1080p palubná kamera | 123.90 € | **128.50 €** | 19.6 % | **24.0 %** | 131.43 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ďalekohľad Discovery Gator 10x50 | 47.50 € | **52.00 €** | 13.1 % | **23.9 %** | 53.89 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| DDPAI Ranger M1 Pro – palubná kamera | 136.00 € | **140.50 €** | 18.9 % | **22.8 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Koloběžka Spidoo Kruzzel 25630 fialová | 45.00 € | **49.50 €** | 10.0 % | **21.0 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Skladací elektrický bežecký pás ACEZOE P11pro | 198.50 € | **203.00 €** | 12.3 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Euti Freewell pre Iphone 15 PRO s držiakom 17 mm | 42.90 € | **47.00 €** | 15.5 % | **26.5 %** | 48.02 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Puzdro Freewell pre Samsung S25 Ultra so 17 mm držiakom | 42.90 € | **47.00 €** | 5.8 % | **15.9 %** | 48.02 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| DDPAI N5 Dual 2026 – palubná kamera | 113.00 € | **117.00 €** | 17.6 % | **21.8 %** | 119.48 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| GODOX CBA-TB0002 Pozadie | 42.50 € | **46.50 €** | 15.3 % | **26.1 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 39.98 € | **43.90 €** | 42.5 % | **56.5 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 38.90 € | **42.50 €** | 4.9 % | **14.6 %** | 48.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| WMF Konvice Stelio 1,7L Paper Grey | 66.90 € | **70.50 €** | 10.6 % | **16.6 %** | 72.24 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Puzdro Freewell pre Iphone 15 PRO MAX so 17 mm držiakom | 45.00 € | **48.50 €** | 10.5 % | **19.1 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentné stropné svietidlo CW Yeelight Meteor C400. | 55.00 € | **58.50 €** | 22.5 % | **30.3 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Black&Decker BXCSH2001E | 83.50 € | **87.00 €** | 5.0 % | **9.4 %** | 89.20 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ariete Breakfast Blender 576/03 černý | 36.50 € | **40.00 €** | 11.1 % | **21.7 %** | 45.05 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| WOLFBOX X3 WiFi 2,5K + 1080p 64 GB palubná kamera | 160.50 € | **163.90 €** | 19.4 % | **21.9 %** | 167.29 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Nabíjačka SkyRC iMax B6 Mini | 37.42 € | **40.50 €** | 28.5 % | **39.0 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný termostat Avatto WT100 3A WiFi Tuya | 32.50 € | **35.50 €** | 15.2 % | **25.9 %** | 38.21 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Domo DO9215AV | 32.50 € | **35.50 €** | 10.4 % | **20.6 %** | 41.62 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Fotografický beztienový svetelný panel Puluz PU5138 ... | 31.50 € | **34.50 €** | 6.1 % | **16.2 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| DDPAI N3 Pro 2026 – palubná kamera | 70.00 € | **72.90 €** | 7.2 % | **11.7 %** | 74.46 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Laserový diaľkomer Uni-T LM800G | 89.69 € | **92.50 €** | 39.0 % | **43.4 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Aktívne chladenie CPU Darkflash E400 PLUS (čierna) | 29.73 € | **32.50 €** | 31.8 % | **44.1 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Flextail Zero 1200 LED baterka (čierna) | 32.29 € | **34.90 €** | 29.4 % | **39.8 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tefal INGENIO hluboká pánev 24 cm | 27.90 € | **30.50 €** | 5.1 % | **14.9 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Samsung VG-SCFF85SGMXC | 159.90 € | **162.50 €** | 5.1 % | **6.9 %** | 166.21 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Guzzanti GZ 8571 | 171.90 € | **174.50 €** | 5.2 % | **6.8 %** | 178.30 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 28.00 € | **30.50 €** | 19.9 % | **30.6 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| DDPAI Ranger M1 – palubná kamera | 63.00 € | **65.50 €** | 19.5 % | **24.3 %** | 66.89 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| GUZZANTI GZ 8501A | 148.50 € | **151.00 €** | 5.0 % | **6.8 %** | 154.30 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| DOMO DO1022S | 161.50 € | **164.00 €** | 6.3 % | **7.9 %** | 167.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| DDPAI N5 Pro 4G palubná kamera | 184.50 € | **187.00 €** | 19.4 % | **21.0 %** | 191.20 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Tepelná utierka pre modely Dreame Matrix10 Ultra, L5... | 28.00 € | **30.50 €** | 15.0 % | **25.2 %** | 34.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Elektrická zubná kefka MOVA Fresh Pro (strieborná) | 24.50 € | **26.90 €** | 15.2 % | **26.5 %** | 28.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sada 4 filtrov ND 4/8/16/32 Sunnylife pre DJI Mini 3... | 27.16 € | **29.50 €** | 40.9 % | **53.1 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| GUZZANTI ZRW 60 W | 57.00 € | **59.00 €** | 9.8 % | **13.6 %** | 60.34 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| DDPAI MINI Pro 2K palubná kamera | 42.00 € | **44.00 €** | 15.2 % | **20.7 %** | 45.38 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| LED svetelný panel GODOX Litemons LP400R RGB | 120.50 € | **122.50 €** | 7.5 % | **9.3 %** | 125.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 23.50 € | **25.50 €** | 18.8 % | **28.9 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Beko B5RCNA375HXB1 HarvestFresh | 358.50 € | **360.50 €** | 7.2 % | **7.8 %** | 367.93 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight 40mm kulma na dlhé vlasy pre Dyson Airwrap (... | 21.00 € | **23.00 €** | 30.3 % | **42.7 %** | 33.31 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 194.50 € | **196.50 €** | 4.1 % | **5.2 %** | 231.17 € | predajca ubudol od minulého reportu; zdraženie čaká na potvrdenie v ďalšom reporte |
| Termovízna kamera THERMAL MASTER X3 | 485.50 € | **487.50 €** | 4.6 % | **5.1 %** | 657.00 € | predajca ubudol od minulého reportu; zdraženie čaká na potvrdenie v ďalšom reporte |
| Fotoštúdio Puluz 30cm LED 24-26lm (PU5032B) | 21.52 € | **23.50 €** | 38.5 % | **51.3 %** | 31.83 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa DarkFlash K430 + 6 ventilátorov (č... | 66.00 € | **67.90 €** | 11.7 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Živica Anycubic ABS-Like 3.0 (biela) | 19.90 € | **21.50 €** | 14.2 % | **23.4 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Živica Anycubic ABS-Like 3.0 (čierna) | 19.90 € | **21.50 €** | 14.2 % | **23.4 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Živica Anycubic ABS-Like 3.0 (sivá) | 19.90 € | **21.50 €** | 14.2 % | **23.4 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Termostat MOES ZHT-SR-GB s protokolom ZigBee pre ele... | 56.90 € | **58.50 €** | 14.2 % | **17.4 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Náhradná utierka Dreame – pre súpravu Aqua10 Ultra R... | 19.90 € | **21.50 €** | 15.9 % | **25.2 %** | 24.99 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 39.98 € | **41.50 €** | 53.2 % | **59.1 %** | 49.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 18.50 € | **20.00 €** | 21.0 % | **30.8 %** | 21.13 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Avatto CS20-EU-W WiFi dotykový inteligentný spínač r... | 17.50 € | **19.00 €** | 11.3 % | **20.9 %** | 20.39 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ETA Pečenka Plus 0133 90020 | 84.50 € | **86.00 €** | 7.9 % | **9.9 %** | 88.07 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| REDTIGER F4 Pro WiFi 4K + 1080p 128 GB palubná kamera | 127.00 € | **128.50 €** | 19.5 % | **20.9 %** | 131.43 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| DDPAI Z90T palubná kamera | 153.50 € | **155.00 €** | 10.5 % | **11.5 %** | 158.53 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight bezdrôtová 15 W vstavaná nabíjačka, čierna | 18.50 € | **20.00 €** | 18.2 % | **27.8 %** | 24.89 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Projektor Aurzen Eazze D1 Pro | 191.50 € | **192.90 €** | 4.4 % | **5.2 %** | 239.00 € | predajca ubudol od minulého reportu; zdraženie čaká na potvrdenie v ďalšom reporte |
| Počítačová skriňa Darkflash C285MP (čierna) | 57.40 € | **58.50 €** | 40.7 % | **43.4 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| ScanPart vodní filtr kompatibilní 4ks | 15.90 € | **17.00 €** | 10.5 % | **18.1 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| KMP H125 (CZ101AE) | 11.90 € | **13.00 €** | 12.9 % | **23.3 %** | 22.73 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Metal selfie stick 2 m PULUZ for Insta360 One RS/X2/... | 13.90 € | **15.00 €** | 6.7 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| DDPAI N2 – duálna palubná kamera | 68.90 € | **70.00 €** | 19.6 % | **21.5 %** | 71.67 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 34.00 € | **35.00 €** | 30.4 % | **34.3 %** | 36.01 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ufesa Rouge BP3443 | 31.50 € | **32.50 €** | 9.3 % | **12.8 %** | 33.70 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Leifheit 81520 Pegasus 200 Solid | 36.50 € | **37.50 €** | 10.7 % | **13.8 %** | 38.80 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 12.00 € | **13.00 €** | 27.7 % | **38.3 %** | 14.52 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight 3z + USB A+C predlžovací prívod - kocka, 2m,... | 11.00 € | **12.00 €** | 18.5 % | **29.2 %** | 13.74 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Náhradná utierka MOVA pre valček Z60 Ultra | 10.90 € | **11.90 €** | 9.5 % | **19.6 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Gosund ST20 Tuya smart ZigBee motion sensor | 10.50 € | **11.50 €** | 14.7 % | **25.7 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Blender G21 Comfort Graphite Black | 145.90 € | **146.90 €** | 8.5 % | **9.3 %** | 149.94 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| beyerdynamic TG D57 Kondenzátorový mikrofón | 183.50 € | **184.50 €** | 17.9 % | **18.5 %** | 188.40 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Náhradná utierka Dreame – pre modely Track Aqua10 Ul... | 14.00 € | **15.00 €** | 14.2 % | **22.3 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Digitálny merací prístroj Uni-T UT221 | 86.50 € | **87.50 €** | 4.2 % | **5.5 %** | 95.58 € | predajca ubudol od minulého reportu; zdraženie čaká na potvrdenie v ďalšom reporte |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 114.90 € | **115.90 €** | 4.4 % | **5.3 %** | 147.00 € | predajca ubudol od minulého reportu; zdraženie čaká na potvrdenie v ďalšom reporte |
| Inteligentný obojsmerný merač energie Avatto ZigBee ... | 21.50 € | **22.50 €** | 10.3 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| LED štúdiová lampa GODOX ML40Bi | 104.00 € | **104.90 €** | 16.5 % | **17.6 %** | 107.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Panoramatický fotografický stojan 360 Puluz DCA0871W | 15.00 € | **15.90 €** | 9.3 % | **15.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Drevená LED vianočná hviezda Solight 1V293, 65 cm, 2... | 9.10 € | **9.90 €** | 16.0 % | **26.2 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bravo B-4813 Žehlička SERENA červená | 45.90 € | **46.50 €** | 11.2 % | **12.7 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Beper 50451 Tyčový Vakuový Vysavač S He | 51.90 € | **52.50 €** | 10.3 % | **11.6 %** | 53.60 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Podpera pozadia pre fotoštúdio Puluz 70x200cm + poza... | 20.90 € | **21.50 €** | 12.8 % | **16.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Perlesmith TV 37–82" držiaky na stenu PSLTK1 | 17.93 € | **18.50 €** | 34.0 % | **38.2 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 4.2 % | **5.0 %** | 62.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BALDRTHERM B0598 3-kanálový termohygrometer s automa... | 21.00 € | **21.50 €** | 29.9 % | **33.0 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Russell Hobbs 24010-56 | 40.50 € | **41.00 €** | 10.9 % | **12.2 %** | 42.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| FoodSaver FVB015X | 18.00 € | **18.50 €** | 8.3 % | **11.3 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Beper BEP-P204FER250 | 20.50 € | **21.00 €** | 8.7 % | **11.4 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Filament Creality CR-Silk PLA (dúhový) | 16.40 € | **16.90 €** | 26.4 % | **30.2 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Ponorné čerpadlo SUNSUN JP-1500GL | 11.00 € | **11.50 €** | 14.7 % | **19.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Rixon UltraPods | 45.50 € | **46.00 €** | 13.5 % | **14.8 %** | 47.08 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 38.50 € | **39.00 €** | 42.0 % | **43.9 %** | 40.09 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bravo Isabel B-4426 bílá | 32.50 € | **33.00 €** | 11.4 % | **13.2 %** | 34.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Bravo Isabel B-4426 nerez | 32.50 € | **33.00 €** | 11.4 % | **13.2 %** | 34.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 42.50 € | **43.00 €** | 32.9 % | **34.5 %** | 44.17 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| FoodSaver FFC026X | 41.50 € | **42.00 €** | 12.3 % | **13.6 %** | 43.23 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| GUZZANTI ZRW 60 černá | 58.50 € | **59.00 €** | 5.2 % | **6.1 %** | 60.34 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| San Marco SUPREMO 1 kg zrno | 21.50 € | **22.00 €** | 7.7 % | **10.2 %** | 23.40 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sunnylife ZJ153 Nákupná taška | 13.00 € | **13.50 €** | 10.9 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sunnylife ZJ153 Nákupná taška | 13.00 € | **13.50 €** | 10.9 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Prenosné projekčné plátno BlitzWolf BW-VS6 120" | 70.50 € | **70.90 €** | 4.4 % | **5.0 %** | 89.90 € | predajca ubudol od minulého reportu; zdraženie čaká na potvrdenie v ďalšom reporte |
| Statívový držiak Puluz s 20 cm LED krúžkom Vlogging ... | 11.50 € | **11.90 €** | 15.3 % | **19.3 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 11.50 € | **11.90 €** | 10.1 % | **14.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight infražiarič na terasu 2000W | 56.50 € | **56.90 €** | 5.0 % | **5.7 %** | 50.87 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Wireless charger 3in1 BW-IW30 Blitzwolf | 36.50 € | **36.90 €** | 36.4 % | **37.9 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| RGB Led Light Stick PULUZ 30cm | 18.50 € | **18.90 €** | 17.1 % | **19.7 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 18.50 € | **18.90 €** | 5.3 % | **7.6 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Hodiny nástěnné TechnoLine WT 7400 | 30.50 € | **30.90 €** | 5.7 % | **7.1 %** | 31.96 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 32.50 € | **32.90 €** | 4.8 % | **6.1 %** | 46.62 € | predajca ubudol od minulého reportu; zdraženie čaká na potvrdenie v ďalšom reporte |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 42.53 € | **42.90 €** | 38.6 % | **39.8 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Osemhranný softbox NEEWER NS4P s upevňovacím systémo... | 29.73 € | **29.90 €** | 36.2 % | **37.0 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Sati Crema 1 kg zrno | 20.90 € | **21.00 €** | 11.9 % | **12.4 %** | 22.00 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Leifheit Page Profi 300 | 35.90 € | **36.00 €** | 10.9 % | **11.2 %** | 37.10 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Fixed Creator Tripod FIXCRT-BK | 38.90 € | **39.00 €** | 10.9 % | **11.1 %** | 40.36 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 6.80 € | **6.90 €** | 17.6 % | **19.4 %** | 7.98 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| FIXED Opus pro SG A37 5G FIXOP3-1703-BL | 10.90 € | **11.00 €** | 13.3 % | **14.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Fixed pouzdro SGA17 4G/5G FIXOP3-1700-BK | 10.90 € | **11.00 €** | 13.3 % | **14.4 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |
| Leifheit Vakuovačka Vacu Power 500 | 89.90 € | **90.00 €** | 11.3 % | **11.4 %** | 91.93 € | cena podľa najlacnejšieho iného predajcu; zdraženie obmedzené (odstup 2 % od konkurenta, max +10 % za report) |

## Návrh znížiť cenu (612)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Veslařský trenažér HMS Premium ZW1600 | 621.90 € | **0.80 €** | 112257.7 % | **44.5 %** | 621.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 116.50 € | **0.80 €** | 23001.3 % | **58.6 %** | 116.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| 3D tlačiareň Anycubic Kobra X Combo | 599.62 € | **492.50 €** | 29.8 % | **6.6 %** | 492.65 € | cena podľa najlacnejšieho iného predajcu |
| Cyklotrenažér Cycplus T3 | 972.72 € | **868.50 €** | 28.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Elektrický skúter NAVEE ST5 Pro | 820.50 € | **741.50 €** | 21.5 % | **9.8 %** | 741.81 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 375.15 € | **305.00 €** | 33.5 % | **8.5 %** | 305.09 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE V45i | 350.55 € | **281.50 €** | 32.7 % | **6.6 %** | 281.71 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE UT3 Max | 863.05 € | **794.50 €** | 32.6 % | **22.0 %** | 794.81 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW606810 | 216.90 € | **160.50 €** | 50.9 % | **11.7 %** | 160.58 € | cena podľa najlacnejšieho iného predajcu |
| Tablet HOTWAV TAB R9 Plus (čierny) | 312.63 € | **257.50 €** | 27.7 % | **5.2 %** | 254.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 309.55 € | **257.50 €** | 26.4 % | **5.2 %** | 236.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Besen LX30 22 kW APP – nástenná nabíjačka pre elektr... | 299.30 € | **247.50 €** | 39.0 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Tablet HOTWAV TAB R9 Plus (červený) | 300.33 € | **254.50 €** | 25.0 % | **5.9 %** | 254.71 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z16H 16" prenosný monitor | 274.70 € | **229.90 €** | 25.6 % | **5.1 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blitzwolf BW-VS10 100-palcové premietacie plátno | 222.42 € | **179.90 €** | 42.3 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Funkčný generátor FNIRSI TSG3020 | 199.88 € | **157.50 €** | 47.6 % | **16.3 %** | 157.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 502.50 € | **460.50 €** | 22.8 % | **12.6 %** | 460.79 € | cena podľa najlacnejšieho iného predajcu |
| CATLINK Scoop Robot Pro – samočistiaca toaleta pre m... | 784.00 € | **742.50 €** | 21.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Uni-T UT362H Anemometer | 199.88 € | **160.50 €** | 30.9 % | **5.1 %** | 158.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM2000 | 675.48 € | **636.90 €** | 47.0 % | **38.6 %** | 637.00 € | cena podľa najlacnejšieho iného predajcu |
| Mini PC GMKtec K17 s procesorom Intel Core Ultra 5 2... | 800.52 € | **764.00 €** | 26.7 % | **20.9 %** | 764.50 € | cena podľa najlacnejšieho iného predajcu |
| TERRAMASTER F8 SSD Plus - súborový server NAS s proc... | 918.00 € | **883.50 €** | 19.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Mini PC GMKtec K13 s procesorom Core Ultra 7 256V, 1... | 774.90 € | **740.50 €** | 32.5 % | **26.7 %** | 740.60 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 137.35 € | **106.00 €** | 50.0 % | **15.7 %** | 106.49 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 185.52 € | **154.50 €** | 27.8 % | **6.5 %** | 154.68 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 165.03 € | **135.50 €** | 43.8 % | **18.1 %** | 135.69 € | cena podľa najlacnejšieho iného predajcu |
| Rotoped MERACH MR-S28B1 | 556.00 € | **526.90 €** | 21.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 357.72 € | **329.00 €** | 31.9 % | **21.3 %** | 329.31 € | cena podľa najlacnejšieho iného predajcu |
| NAS server TERRAMASTER F2-425 Plus s procesorom Inte... | 534.50 € | **506.00 €** | 21.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Infračervený laserový modul s vlnovou dĺžkou 1064 nm... | 734.00 € | **706.50 €** | 19.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| TERRAMASTER F4 SSD NAS - súborový server s procesoro... | 508.50 € | **481.50 €** | 21.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| 32-82" TV mount Perlesmith PSTVMC05-US | 112.75 € | **86.50 €** | 39.3 % | **6.9 %** | 86.64 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka BESEN EV SQW45-BC-22KW-APP | 314.67 € | **288.50 €** | 25.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| TERRAMASTER F8 SSD NAS - súborový server s procesoro... | 691.00 € | **665.50 €** | 19.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Guzzanti GZ 126 | 431.50 € | **407.90 €** | 11.2 % | **5.1 %** | 389.97 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor NEEWER F100 + USB nabíjačka + sada ... | 132.22 € | **109.50 €** | 26.9 % | **5.1 %** | 86.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Prenosný monitor ANMITE A215W03,21,5" | 185.52 € | **163.00 €** | 25.5 % | **10.3 %** | 163.37 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový chladič Darkflash DN-D360 WHITE | 99.94 € | **77.90 €** | 38.1 % | **7.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash DN-D360 BLACK | 99.94 € | **77.90 €** | 40.7 % | **9.6 %** | 78.00 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Nubia Neo 5 GT 5G černý | 474.90 € | **453.50 €** | 10.0 % | **5.0 %** | 395.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dvojfarebné LED svietidlo Neewer CB300B | 370.02 € | **348.90 €** | 48.6 % | **40.1 %** | 349.00 € | cena podľa najlacnejšieho iného predajcu |
| Battery Gens Ace G-Tech 5500mAh 22.2V 60C 6S1P LIPO ... | 142.47 € | **121.50 €** | 34.9 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ZTE Nubia Air Pro 5G černý | 453.50 € | **432.90 €** | 10.1 % | **5.1 %** | 386.91 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GUZZANTI GZ 363A | 593.50 € | **573.00 €** | 10.0 % | **6.2 %** | 573.44 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka batérií SMALLRIG NP-F970 | 198.90 € | **178.90 €** | 24.7 % | **12.2 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z18 W - prenosný monitor s dvoma 18-palcovým... | 328.90 € | **308.90 €** | 12.7 % | **5.8 %** | 309.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava bezdrôtového zvončeka IMOU 2S | 79.95 € | **60.00 €** | 52.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Beko B5T4924SWW | 463.50 € | **444.50 €** | 11.7 % | **7.1 %** | 444.61 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS100MA(EU) Inteligentný Wi-Fi (Matter) vypí... | 99.94 € | **81.00 €** | 35.4 % | **9.7 %** | 81.23 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 82.51 € | **64.00 €** | 68.9 % | **31.0 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 237.80 € | **219.50 €** | 23.4 % | **13.9 %** | 219.88 € | cena podľa najlacnejšieho iného predajcu |
| Herný svetelný panel Yeelight Cube Lite | 59.00 € | **41.00 €** | 74.6 % | **21.3 %** | 41.02 € | cena podľa najlacnejšieho iného predajcu |
| Funkčný generátor FNIRSI TSG6020 | 225.50 € | **207.50 €** | 44.4 % | **32.8 %** | 207.90 € | cena podľa najlacnejšieho iného predajcu |
| Battery Tester with printer Ancel BST600 | 129.15 € | **111.50 €** | 34.0 % | **15.7 %** | 111.90 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 340A | 383.50 € | **366.00 €** | 12.4 % | **7.3 %** | 366.41 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A160W04,16" | 97.38 € | **80.00 €** | 35.6 % | **11.4 %** | 80.30 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 89.69 € | **72.50 €** | 40.2 % | **13.3 %** | 72.69 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Tattu R-Line verzia 5.0 1800mAh 22,2V 150C 6S b... | 62.00 € | **45.00 €** | 58.1 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Bezkontaktný otáčkomer Uni-T UT372 | 72.26 € | **55.50 €** | 50.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Drôtové slúchadlá do uší TRUTHEAR Zero (červené) | 75.50 € | **59.00 €** | 48.6 % | **16.1 %** | 59.13 € | cena podľa najlacnejšieho iného predajcu |
| Krups Intuition Experience EA876D10 | 699.00 € | **683.00 €** | 11.3 % | **8.7 %** | 683.19 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 374.90 € | **359.00 €** | 11.7 % | **7.0 %** | 359.18 € | cena podľa najlacnejšieho iného predajcu |
| Nastaviteľný ND filter Freewell (sivý) | 109.68 € | **94.00 €** | 58.2 % | **35.5 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Brandon Li Glow Mist 1/8 filter | 47.15 € | **31.50 €** | 71.1 % | **14.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Eliptický trenažér MERACH MR-E33B3-EU (čierny) | 419.50 € | **403.90 €** | 19.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Neewer Retro blesk | 74.82 € | **59.50 €** | 52.1 % | **20.9 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 92.25 € | **77.50 €** | 25.0 % | **5.0 %** | 75.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový diaľkomer Uni-T LM1000 | 107.62 € | **92.90 €** | 22.1 % | **5.4 %** | 88.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Baterka Flextail ZERO 1200 (čierna) | 50.22 € | **35.50 €** | 65.7 % | **17.1 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Charles i6 černá | 167.90 € | **153.50 €** | 18.7 % | **8.5 %** | 153.70 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion HS611 | 91.23 € | **76.90 €** | 36.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WS (biela) + 4 vent... | 69.70 € | **55.50 €** | 44.8 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Diagnostický skener pre motocykle ANCEL MT310 | 293.00 € | **278.90 €** | 19.3 % | **13.5 %** | 279.00 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 250.10 € | **236.00 €** | 34.0 % | **26.5 %** | 236.39 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 79.95 € | **66.00 €** | 38.9 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WD ATX (biela) + 4 ... | 74.82 € | **60.90 €** | 41.2 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada príslušenstva DREAME pre Z20 Station/Z20/Z30 Aq... | 54.83 € | **41.00 €** | 53.8 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| LED svietidlo NEEWER APC100C | 300.33 € | **286.90 €** | 47.7 % | **41.0 %** | 287.00 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.40 € | **44.00 €** | 44.4 % | **10.7 %** | 44.37 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 52.27 € | **38.90 €** | 46.0 % | **8.6 %** | 38.99 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 01-AAMY51-02 Akupresúrny masážny prístroj 3 v 1 | 67.13 € | **53.90 €** | 43.7 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 62.52 € | **49.50 €** | 37.5 % | **8.9 %** | 49.83 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 82.51 € | **69.50 €** | 68.9 % | **42.3 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 87.64 € | **74.90 €** | 34.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 135.30 € | **123.00 €** | 37.5 % | **25.0 %** | 123.26 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro Standard (sivý) | 65.09 € | **53.00 €** | 40.7 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 150.68 € | **138.90 €** | 48.4 % | **36.8 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu |
| Herné mikrofon Maono DM30RGB (čierny) | 51.25 € | **39.50 €** | 49.8 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN X2 s RGB osvetlením (biely) | 70.21 € | **58.50 €** | 37.9 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Statív Mini PGYTECH s nadstavcom pre vreckové / akčn... | 43.50 € | **32.00 €** | 86.3 % | **37.1 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| Súborový server NAS TERRAMASTER F4-425 Plus s proces... | 650.00 € | **638.50 €** | 17.1 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Elektrický bežecký pás UREVO SpaceWalk 5 (čierny) | 310.00 € | **298.50 €** | 19.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cure 3 | 99.94 € | **88.50 €** | 30.6 % | **15.7 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Spitz Plus 4G LTE | 214.90 € | **203.50 €** | 21.5 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Blesk Neewer Z880-N s lítiovou batériou | 159.90 € | **148.90 €** | 51.5 % | **41.1 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 157.85 € | **146.90 €** | 55.3 % | **44.6 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor DE360 (biely) | 112.75 € | **102.00 €** | 33.7 % | **21.0 %** | 102.23 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 147.60 € | **136.90 €** | 50.2 % | **39.3 %** | 137.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás MERACH MR-T14 | 298.50 € | **287.90 €** | 19.3 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Parabolický dáždnik GODOX UB-165S | 77.50 € | **66.90 €** | 21.7 % | **5.1 %** | 62.91 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AMICA TR 110 TB | 303.50 € | **293.00 €** | 11.5 % | **7.7 %** | 293.43 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 137.35 € | **126.90 €** | 46.5 % | **35.4 %** | 127.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Dreame D20 | 57.40 € | **47.00 €** | 40.4 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Monitor ANMITE A238W05,23,8" | 220.38 € | **210.00 €** | 39.1 % | **32.5 %** | 210.32 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 49.72 € | **39.50 €** | 45.5 % | **15.6 %** | 39.69 € | cena podľa najlacnejšieho iného predajcu |
| Drevový filament Sunlu (orech) | 28.70 € | **18.50 €** | 117.7 % | **40.3 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Stojan AURZEN Powerplay | 127.10 € | **116.90 €** | 33.7 % | **23.0 %** | 117.00 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier MR3 2.0 (čierne) | 94.00 € | **84.00 €** | 17.6 % | **5.1 %** | 78.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GUZZANTI GZ 44GW | 204.00 € | **194.00 €** | 11.6 % | **6.2 %** | 194.14 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do fotoaparátu SMALLRIG NP-F970 (zelená) | 83.50 € | **73.50 €** | 22.5 % | **7.8 %** | 73.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Nikon | 143.00 € | **134.00 €** | 17.3 % | **10.0 %** | 134.10 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná fototlačiareň Liene Amber M100 4x6" | 121.50 € | **112.50 €** | 32.1 % | **22.3 %** | 112.69 € | cena podľa najlacnejšieho iného predajcu |
| Autoreflektor Hcalory D55M+ s Bluetooth | 269.50 € | **260.50 €** | 19.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ZEUSLAP Z23 LITE 23" prenosný monitor | 199.88 € | **191.00 €** | 39.8 % | **33.6 %** | 191.20 € | cena podľa najlacnejšieho iného predajcu |
| Kefa Aquacycle s hadicou DREAME pre Z20 Station/Z20/Z30 | 42.53 € | **33.90 €** | 44.4 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Gorenje FN619EEW5 | 484.50 € | **475.90 €** | 7.0 % | **5.1 %** | 474.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (čierny) | 50.22 € | **41.90 €** | 38.1 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Súprava celodenných filtrov Freewell Real Locking s ... | 228.00 € | **219.90 €** | 14.9 % | **10.8 %** | 219.97 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 82.51 € | **74.50 €** | 18.8 % | **7.3 %** | 74.87 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 90A1 | 137.00 € | **129.00 €** | 15.1 % | **8.4 %** | 129.05 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 34.85 € | **27.00 €** | 49.8 % | **16.0 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 29.73 € | **21.90 €** | 42.7 % | **5.1 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Projektor Blitzwolf BW-V12 | 274.70 € | **266.90 €** | 44.0 % | **39.9 %** | 267.00 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 30.23 € | **22.50 €** | 42.1 % | **5.8 %** | 22.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Webová kamera EMEET Piko+ (čierna) | 70.21 € | **62.50 €** | 29.4 % | **15.2 %** | 62.82 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN S3 s AI senzorom (čierny) | 150.68 € | **143.00 €** | 47.4 % | **39.9 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do fotoaparátu SMALLRIG NP-FZ100 | 66.00 € | **58.50 €** | 18.6 % | **5.2 %** | 58.90 € | cena podľa najlacnejšieho iného predajcu |
| VITURE Pro 256 GB nákrčník | 443.00 € | **435.50 €** | 17.0 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 140.43 € | **133.00 €** | 22.1 % | **15.6 %** | 133.41 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2PRO-F 3000 mAh pre fotoaparáty Fujifilm | 157.85 € | **150.50 €** | 43.1 % | **36.4 %** | 150.56 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP600Bi s dvojfare... | 136.00 € | **128.90 €** | 21.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Niceboy ION Charles i6 bílá | 155.90 € | **148.90 €** | 10.2 % | **5.2 %** | 146.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 103RB | 214.00 € | **207.00 €** | 10.5 % | **6.9 %** | 207.28 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 194.00 € | **187.00 €** | 16.0 % | **11.8 %** | 187.45 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, zlatá) | 189.90 € | **182.90 €** | 19.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Smartring RingConn Air Gen 2 (veľkosť 7, zlatá) | 189.90 € | **182.90 €** | 19.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 37.42 € | **30.50 €** | 49.3 % | **21.7 %** | 30.59 € | cena podľa najlacnejšieho iného predajcu |
| Neewer wide angle lens for Sony ZV1 (black) | 76.36 € | **69.50 €** | 63.8 % | **49.0 %** | 69.90 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF MINI-DIM-E Inteligentný WiFi nástenný vypínač... | 29.73 € | **23.00 €** | 47.4 % | **14.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filter Freewell Insta360 Luna Ultra ND8/PL ND/PL | 27.16 € | **20.50 €** | 73.6 % | **31.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 149.65 € | **143.00 €** | 39.9 % | **33.7 %** | 143.39 € | cena podľa najlacnejšieho iného predajcu |
| CANON PIXMA G3430 Pink | 146.50 € | **139.90 €** | 10.2 % | **5.2 %** | 129.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 23.47 € | **16.90 €** | 47.1 % | **5.9 %** | 15.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ND filter Freewell Insta360 Luna Ultra ND8 | 22.55 € | **16.00 €** | 78.5 % | **26.7 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s RGB osvetlením (čierny) | 62.52 € | **56.00 €** | 28.5 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Gorenje GI6432BSCWF | 323.50 € | **317.00 €** | 8.1 % | **5.9 %** | 317.46 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 70G | 208.90 € | **202.50 €** | 11.6 % | **8.1 %** | 202.85 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do kamery SMALLRIG DMW-BLK22 | 52.90 € | **46.50 €** | 24.4 % | **9.4 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 137.35 € | **131.00 €** | 38.2 % | **31.8 %** | 131.43 € | cena podľa najlacnejšieho iného predajcu |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 74.82 € | **68.50 €** | 17.3 % | **7.4 %** | 68.90 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor AOCHUAN X Pro s AI senzorom (čierny) | 74.82 € | **68.50 €** | 25.8 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 94.81 € | **88.50 €** | 19.4 % | **11.5 %** | 88.69 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 135.30 € | **129.00 €** | 36.1 % | **29.8 %** | 129.04 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 135.30 € | **129.00 €** | 35.0 % | **28.7 %** | 129.04 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 27.16 € | **21.00 €** | 73.6 % | **34.2 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada magnetických filtrov Freewell pre iPhone (3 ks) | 125.05 € | **118.90 €** | 51.3 % | **43.9 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 125.05 € | **118.90 €** | 49.0 % | **41.7 %** | 119.00 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell Insta360 Luna Ultra ND64 | 23.58 € | **17.50 €** | 71.3 % | **27.1 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HL60 – 2300 lm, 4 režimy, 330 m, 3... | 38.95 € | **32.90 €** | 38.3 % | **16.9 %** | 33.00 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 21.52 € | **15.50 €** | 54.7 % | **11.4 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 124.02 € | **118.00 €** | 49.5 % | **42.2 %** | 118.29 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do fotoaparátu SMALLRIG NP-F970 (čierna) | 72.50 € | **66.50 €** | 19.9 % | **9.9 %** | 66.90 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303D+ | 99.94 € | **94.00 €** | 49.6 % | **40.7 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1200G | 154.77 € | **148.90 €** | 43.8 % | **38.4 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY51-0RA 3-v-1 masážny prístroj na telo, ... | 112.75 € | **106.90 €** | 52.1 % | **44.2 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000G | 112.75 € | **106.90 €** | 47.5 % | **39.9 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu |
| Chladič počítača Darkflash Z4 PRO MIST BLACK | 29.73 € | **23.90 €** | 45.3 % | **16.8 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM60T | 32.80 € | **27.00 €** | 34.4 % | **10.6 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT201R digitálny klešťový multimeter | 24.60 € | **18.90 €** | 44.2 % | **10.8 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-S28 260 W, 2xUSB-A, 3xUSB-C, 15 W wirel... | 89.69 € | **84.00 €** | 42.8 % | **33.7 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| N'oveen ohřívač vody IWH560 | 45.50 € | **39.90 €** | 19.9 % | **5.2 %** | 36.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Akčná kamera SJCAM SJ11 Active (čierny) | 142.50 € | **136.90 €** | 11.1 % | **6.7 %** | 136.91 € | cena podľa najlacnejšieho iného predajcu |
| Lipo Gens ace G-Tech 1100mAh 11.1V 3S1P 60C GRP-76 H... | 22.55 € | **17.00 €** | 51.1 % | **13.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Nafukovacia podložka Flextail Tiny Sleeping Pad R03 ... | 104.55 € | **99.00 €** | 39.3 % | **31.9 %** | 99.16 € | cena podľa najlacnejšieho iného predajcu |
| Káblové slúchadlá do uší TRUTHEAR Hexa (čierne) | 90.50 € | **85.00 €** | 31.5 % | **23.5 %** | 85.13 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER F7NP WiFi 4K + 1080p 128 GB palubná kamera | 132.00 € | **126.50 €** | 19.0 % | **14.1 %** | 126.65 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Charles i10 černá | 246.50 € | **241.00 €** | 10.0 % | **7.6 %** | 241.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 19.99 € | **14.50 €** | 49.1 % | **8.2 %** | 13.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Smart ceiling lamp 30cm Bluetooth 16M RGBCW Gosund L... | 23.90 € | **18.50 €** | 76.8 % | **36.9 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do fotoaparátu SMALLRIG EN-EL15c (oranžová) | 42.90 € | **37.50 €** | 29.0 % | **12.8 %** | 37.90 € | cena podľa najlacnejšieho iného predajcu |
| Waterproof housing diving case PULUZ for DJI Osmo Po... | 37.90 € | **32.50 €** | 34.9 % | **15.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Stabilizátor AOCHUAN M3 Pro Mini s AI senzorom (biely) | 50.22 € | **44.90 €** | 28.5 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Herné slúchadlá ONIKUMA GT802 (biele) | 32.29 € | **27.00 €** | 42.7 % | **19.3 %** | 27.08 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 112.75 € | **107.50 €** | 30.8 % | **24.7 %** | 107.53 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 60-palcové projekčné plátno BW-VS12 | 47.15 € | **41.90 €** | 52.4 % | **35.4 %** | 41.95 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka pod plech Neakasa M1 (sivá) | 29.73 € | **24.50 €** | 40.8 % | **16.0 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 27.16 € | **22.00 €** | 64.9 % | **33.6 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 267.00 € | **261.90 €** | 7.4 % | **5.4 %** | 261.95 € | cena podľa najlacnejšieho iného predajcu |
| Umývacia a vytvrdzovacia stanica Anycubic Wash & Cur... | 373.00 € | **367.90 €** | 16.6 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filament Anycubic TPU (priehľadný), 1 kg | 24.60 € | **19.50 €** | 35.3 % | **7.3 %** | 19.88 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 24G | 177.00 € | **171.90 €** | 8.2 % | **5.0 %** | 169.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chladič procesora Darkflash DG360 (čierny) | 64.58 € | **59.50 €** | 35.9 % | **25.2 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 22.55 € | **17.50 €** | 68.7 % | **30.9 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 22.55 € | **17.50 €** | 68.7 % | **30.9 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšťač GODOX X1R TTL pre Canon | 49.00 € | **44.00 €** | 43.8 % | **29.1 %** | 44.10 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšťač GODOX X2T TTL pre fotoaparáty Fuji | 58.00 € | **53.00 €** | 16.9 % | **6.8 %** | 53.10 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšťač GODOX X2T TTL pre Nikon | 58.00 € | **53.00 €** | 16.9 % | **6.8 %** | 53.10 € | cena podľa najlacnejšieho iného predajcu |
| Spúšť blesku GODOX X2T TTL pre Canon | 58.00 € | **53.00 €** | 16.9 % | **6.8 %** | 53.10 € | cena podľa najlacnejšieho iného predajcu |
| Spúšť blesku GODOX X2T TTL pre fotoaparáty Olympus | 58.00 € | **53.00 €** | 16.9 % | **6.8 %** | 53.10 € | cena podľa najlacnejšieho iného predajcu |
| Spúšť blesku GODOX X2T TTL pre Sony | 58.00 € | **53.00 €** | 16.9 % | **6.8 %** | 53.10 € | cena podľa najlacnejšieho iného predajcu |
| AMICA MV 647 AW | 323.00 € | **318.00 €** | 8.0 % | **6.3 %** | 318.19 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 179.00 € | **174.00 €** | 8.7 % | **5.7 %** | 174.40 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 179.00 € | **174.00 €** | 8.7 % | **5.7 %** | 174.40 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 216.00 € | **211.00 €** | 16.9 % | **14.2 %** | 211.49 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X92 (čierne) | 19.99 € | **15.00 €** | 74.0 % | **30.6 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 74.82 € | **69.90 €** | 39.2 % | **30.0 %** | 69.99 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 174.90 € | **170.00 €** | 13.6 % | **10.5 %** | 170.05 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 32.29 € | **27.50 €** | 61.4 % | **37.4 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 29.73 € | **25.00 €** | 33.0 % | **11.9 %** | 25.28 € | cena podľa najlacnejšieho iného predajcu |
| Súprava príslušenstva DREAME pre modely H12S AE/H12S... | 29.73 € | **25.00 €** | 37.0 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| ND filter Freewell pre Osmo Pocket ND64 | 24.60 € | **19.90 €** | 33.0 % | **7.6 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 109.68 € | **105.00 €** | 29.4 % | **23.9 %** | 105.14 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell CPL pre Insta360 Luna Ultra | 26.14 € | **21.50 €** | 60.4 % | **31.9 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Oneodio Pro10 (modré) | 28.50 € | **23.90 €** | 27.1 % | **6.6 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TEFAL FR 490070 | 107.50 € | **102.90 €** | 10.0 % | **5.3 %** | 79.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Batéria SMALLRIG VB50 mini V-Mount 3579B | 103.50 € | **98.90 €** | 21.6 % | **16.2 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 37.42 € | **32.90 €** | 20.2 % | **5.7 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality CR-Silk PLA (strieborný) | 21.52 € | **17.00 €** | 37.1 % | **8.3 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality CR-Silk PLA (zlatý) | 21.52 € | **17.00 €** | 36.7 % | **8.0 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux E200SM | 22.00 € | **17.50 €** | 50.7 % | **19.9 %** | 17.54 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná lampa sufitowa CW Yeelight Yeelight Mer... | 40.00 € | **35.50 €** | 23.9 % | **9.9 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet HUION Kamvas Pad 12 KP1202 | 477.50 € | **473.00 €** | 16.1 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Diaľkový spúšťač GODOX X3Pro TTL pre Sony | 96.00 € | **91.50 €** | 20.9 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Automatické kŕmidlo pre domáce zvieratá s tlačidlami... | 39.00 € | **34.50 €** | 30.3 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 39.98 € | **35.50 €** | 56.3 % | **38.8 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Zavážacia loďka Flytec 2011-5, 12 000 mAh | 99.94 € | **95.50 €** | 36.8 % | **30.7 %** | 95.58 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (žltý) | 17.43 € | **13.00 €** | 57.6 % | **17.6 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Blade A35e šedý | 98.90 € | **94.50 €** | 10.0 % | **5.1 %** | 89.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ZTE Watch K2 Pro Blue | 93.90 € | **89.50 €** | 10.4 % | **5.2 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| ZTE Watch K2 Pro Pink | 93.90 € | **89.50 €** | 10.4 % | **5.2 %** | 89.90 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 32.29 € | **27.90 €** | 22.4 % | **5.8 %** | 24.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ZEUSLAP ZB156 15,6" prenosný monitor | 92.25 € | **88.00 €** | 35.2 % | **28.9 %** | 88.41 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 29.73 € | **25.50 €** | 57.4 % | **35.0 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 110 cm šesť... | 42.03 € | **37.90 €** | 27.9 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| FNIRSI LCR-ST1 mini inteligentný digitálny pinzetový... | 25.62 € | **21.50 €** | 36.5 % | **14.5 %** | 21.62 € | cena podľa najlacnejšieho iného predajcu |
| Tefal MQ740HF0 | 46.00 € | **41.90 €** | 19.1 % | **8.5 %** | 41.91 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS EDIFIER X5 Pro (modré) | 35.00 € | **30.90 €** | 30.8 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Habotest MY6238 Viacúčelový detektor 4v1 | 22.55 € | **18.50 €** | 64.9 % | **35.3 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor ANMITE A140W04,14" | 99.94 € | **95.90 €** | 28.6 % | **23.4 %** | 95.98 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný zelený), 1 kg | 21.01 € | **17.00 €** | 41.4 % | **14.4 %** | 17.49 € | cena podľa najlacnejšieho iného predajcu |
| Strong LEAP-NOVA, 4K GOOGLE TV STICK | 72.50 € | **68.50 €** | 11.9 % | **5.7 %** | 68.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight batériová kamera WiFi so solárnym panelom | 61.50 € | **57.50 €** | 41.6 % | **32.4 %** | 57.55 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 109A | 162.00 € | **158.00 €** | 8.6 % | **5.9 %** | 158.26 € | cena podľa najlacnejšieho iného predajcu |
| Tefal INGENIO Expertise sada 3 ks | 64.50 € | **60.50 €** | 14.7 % | **7.6 %** | 60.79 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VNT200 (čierne) | 33.50 € | **29.50 €** | 39.5 % | **22.8 %** | 29.84 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje WHT643E4XBG | 244.00 € | **240.00 €** | 8.0 % | **6.2 %** | 240.36 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 132.00 € | **128.00 €** | 16.8 % | **13.2 %** | 128.38 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový mikrofón SMALLRIG S 70 | 81.50 € | **77.50 €** | 13.9 % | **8.4 %** | 77.90 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 429.00 € | **425.00 €** | 14.5 % | **13.4 %** | 425.49 € | cena podľa najlacnejšieho iného predajcu |
| REDTIGER F7N WiFi 4K + 1080p palubná kamera | 117.50 € | **113.50 €** | 19.1 % | **15.1 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Vlákno Creality TPU (červené) | 19.99 € | **16.00 €** | 37.7 % | **10.2 %** | 16.38 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre DJI Mini 5 Pro Soft Edge G... | 39.98 € | **36.00 €** | 25.2 % | **12.7 %** | 36.11 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá QCY Heroad VT200 (čierne a červené) | 39.98 € | **36.00 €** | 23.7 % | **11.4 %** | 36.18 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (oranžový) | 17.43 € | **13.50 €** | 37.0 % | **6.1 %** | 13.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Aligator S6600 Duo 64GB Black | 81.90 € | **78.00 €** | 10.3 % | **5.0 %** | 68.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Maxxo INFRA DRY+ | 183.90 € | **180.00 €** | 11.7 % | **9.3 %** | 180.20 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač AMZCHEF SJ-036CBK (čierny) | 103.90 € | **100.00 €** | 19.3 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Domo DO9079KR-PROMO | 291.90 € | **288.00 €** | 10.1 % | **8.6 %** | 288.10 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka batérií SMALLRIG LP-E6NH | 43.50 € | **39.90 €** | 14.8 % | **5.3 %** | 39.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentná zásuvka Avatto WOT20-FR | 24.60 € | **21.00 €** | 57.4 % | **34.3 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA RO 3985 EA | 75.50 € | **71.90 €** | 11.6 % | **6.3 %** | 71.91 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Sous Vide SV06 | 134.50 € | **131.00 €** | 11.4 % | **8.5 %** | 131.07 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšť GODOX X1R pre Nikon | 47.50 € | **44.00 €** | 39.4 % | **29.1 %** | 44.10 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 210A | 212.00 € | **208.50 €** | 7.7 % | **6.0 %** | 208.65 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 161 | 231.50 € | **228.00 €** | 8.9 % | **7.2 %** | 228.16 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 170.00 € | **166.50 €** | 11.4 % | **9.1 %** | 166.70 € | cena podľa najlacnejšieho iného predajcu |
| Beko VRT76325VW | 164.50 € | **161.00 €** | 8.4 % | **6.1 %** | 161.22 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine  WT 8500 silver | 27.50 € | **24.00 €** | 26.3 % | **10.2 %** | 24.29 € | cena podľa najlacnejšieho iného predajcu |
| Salente Airfit-Wh | 48.50 € | **45.00 €** | 39.1 % | **29.0 %** | 45.30 € | cena podľa najlacnejšieho iného predajcu |
| Rooma Espresso A6 bílá | 463.00 € | **459.50 €** | 6.8 % | **6.0 %** | 459.82 € | cena podľa najlacnejšieho iného predajcu |
| TTL blesk GODOX V480 pre Canon | 146.00 € | **142.50 €** | 9.0 % | **6.4 %** | 142.85 € | cena podľa najlacnejšieho iného predajcu |
| Batéria do fotoaparátu SMALLRIG NP-FZ100 (oranžová) | 37.00 € | **33.50 €** | 21.0 % | **9.6 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 44G | 199.50 € | **196.00 €** | 8.6 % | **6.7 %** | 196.48 € | cena podľa najlacnejšieho iného predajcu |
| Generátor dymu Ancel S100 na detekciu úniku | 101.00 € | **97.50 €** | 19.3 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Filament Creality CR-Silk PLA (ružovo-fialový) | 19.99 € | **16.50 €** | 31.0 % | **8.1 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| G3Ferrari G10153 Horkovzdušná trouba | 171.90 € | **168.50 €** | 8.3 % | **6.2 %** | 168.79 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 523.90 € | **520.50 €** | 7.3 % | **6.6 %** | 520.82 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.29 € | **28.90 €** | 36.0 % | **21.7 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 56.37 € | **53.00 €** | 16.6 % | **9.6 %** | 53.05 € | cena podľa najlacnejšieho iného predajcu |
| Recenzia zariadenia SMD Uni-T UT116A | 27.16 € | **23.90 €** | 19.6 % | **5.2 %** | 23.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 27.16 € | **23.90 €** | 28.1 % | **12.7 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Adaptér CarPlay OTTOCAST Cabin Care CA520-T200 | 70.21 € | **67.00 €** | 41.5 % | **35.0 %** | 67.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8/PL + ND16/PL + ND32/PL ... | 27.68 € | **24.50 €** | 53.5 % | **35.9 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Kapsula Flextail AVS (sivá) | 27.68 € | **24.50 €** | 61.9 % | **43.3 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Chladič procesora Darkflash DG360 (biely) | 67.13 € | **64.00 €** | 46.4 % | **39.5 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 61.00 € | **57.90 €** | 11.2 % | **5.5 %** | 54.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 42.53 € | **39.50 €** | 40.4 % | **30.4 %** | 39.89 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 62.52 € | **59.50 €** | 47.1 % | **40.0 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| AOCHUAN XE Gimbal so senzorom AI (čierny) | 62.52 € | **59.50 €** | 26.2 % | **20.1 %** | 59.72 € | cena podľa najlacnejšieho iného predajcu |
| GODOX AD-S85S Softbox | 81.50 € | **78.50 €** | 9.1 % | **5.1 %** | 71.91 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit LinoLift 600 Quick Start 85282 | 75.00 € | **72.00 €** | 9.7 % | **5.3 %** | 72.09 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C400 (biela) | 181.50 € | **178.50 €** | 10.9 % | **9.0 %** | 178.59 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C400 (čierny) | 181.50 € | **178.50 €** | 10.9 % | **9.0 %** | 178.59 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2015706 Emilia 250 | 361.50 € | **358.50 €** | 6.9 % | **6.0 %** | 358.64 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXDH12E | 166.50 € | **163.50 €** | 11.1 % | **9.1 %** | 163.65 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový merač Habotest HT208D | 48.00 € | **45.00 €** | 14.3 % | **7.1 %** | 45.19 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C675D KIT 2× 2K, vonkajšia, IP P... | 216.50 € | **213.50 €** | 8.2 % | **6.7 %** | 213.80 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXCO1200E | 116.00 € | **113.00 €** | 9.3 % | **6.5 %** | 113.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.50 € | **15.50 €** | 37.9 % | **15.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak JMGO na strop pre modely N1S SE, Nano a PicoP... | 81.50 € | **78.50 €** | 19.2 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Elektrická kulma ANLAN 04-AJMJ51-01A | 19.99 € | **17.00 €** | 40.2 % | **19.3 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 18.97 € | **16.00 €** | 51.9 % | **28.2 %** | 16.04 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.97 € | **16.00 €** | 55.8 % | **31.4 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov Sunnylife ND8 + ND16 + ND32 + ND64 pr... | 17.93 € | **15.00 €** | 54.6 % | **29.3 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB330M Mesh (biela) | 37.42 € | **34.50 €** | 40.3 % | **29.3 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z90 Master – dvojitá palubná kamera | 224.90 € | **222.00 €** | 19.5 % | **17.9 %** | 222.27 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák PEGASUS RockSolid | 56.90 € | **54.00 €** | 10.7 % | **5.1 %** | 51.02 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Filament Creality Hyper PLA (béžový) | 16.40 € | **13.50 €** | 29.4 % | **6.6 %** | 13.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hyper ABS Filament Creality (White) | 16.40 € | **13.50 €** | 41.5 % | **16.5 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Vysokorýchlostný filament Anycubic PLA, 1 kg (sivý) | 16.40 € | **13.50 €** | 42.9 % | **17.6 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (hnedý) | 14.86 € | **12.00 €** | 31.0 % | **5.8 %** | 12.46 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C305 ATX (biela) | 52.27 € | **49.50 €** | 32.9 % | **25.8 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 27.16 € | **24.50 €** | 34.0 % | **20.9 %** | 24.64 € | cena podľa najlacnejšieho iného predajcu |
| Silikónová podložka Neakasa M1 (biela) | 27.16 € | **24.50 €** | 55.1 % | **39.9 %** | 24.74 € | cena podľa najlacnejšieho iného predajcu |
| Ariete ART 994 | 54.50 € | **51.90 €** | 10.4 % | **5.2 %** | 49.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Spúšťač blesku GODOX BD-04 | 30.50 € | **27.90 €** | 15.5 % | **5.7 %** | 26.55 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK Archer AX53 WiFi Router | 55.50 € | **52.90 €** | 10.3 % | **5.1 %** | 52.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| DOMO DO727BL | 58.50 € | **55.90 €** | 11.2 % | **6.2 %** | 56.00 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO Black | 44.50 € | **42.00 €** | 25.1 % | **18.0 %** | 42.19 € | cena podľa najlacnejšieho iného predajcu |
| Pogumované litinové činky HEX 2x7 kg REBEL ACTIVE RB... | 55.00 € | **52.50 €** | 67.5 % | **59.9 %** | 54.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Akumulátor Lipo Gens Ace G-Tech 3300mAh 22,2V 60C 6S... | 71.00 € | **68.50 €** | 18.9 % | **14.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada 4 filtrov Sunnylife MCUV + CPL + ND32 + ND64 pr... | 19.99 € | **17.50 €** | 55.8 % | **36.4 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 17.43 € | **15.00 €** | 55.6 % | **33.9 %** | 15.50 € | cena podľa najlacnejšieho iného predajcu |
| Popruh na headset BOBOVR M3 | 40.90 € | **38.50 €** | 43.4 % | **35.0 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament ELEGOO PLA Marble | 14.86 € | **12.50 €** | 41.6 % | **19.1 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Taška Sunnylife pre OSMO 360/ Insta360 GO Ultra/ OP ... | 14.86 € | **12.50 €** | 54.9 % | **30.3 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na počítač na bicykel Cycplus Z3 | 14.86 € | **12.50 €** | 37.3 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 12.00 € | **9.70 €** | 30.6 % | **5.6 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 169.12 € | **166.90 €** | 44.5 % | **42.6 %** | 167.00 € | cena podľa najlacnejšieho iného predajcu |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 49.72 € | **47.50 €** | 55.4 % | **48.5 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY HT18 LITE Titanium TWS | 49.72 € | **47.50 €** | 40.2 % | **34.0 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BoboVR CG2 pre VR okuliare | 49.72 € | **47.50 €** | 45.4 % | **38.9 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.60 € | **22.50 €** | 18.3 % | **8.2 %** | 22.53 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X20 (čierne) | 24.60 € | **22.50 €** | 39.1 % | **27.2 %** | 22.53 € | cena podľa najlacnejšieho iného predajcu |
| EJEAS E1PRO Bluetooth Helmet Mounted Headphone | 34.00 € | **31.90 €** | 14.4 % | **7.3 %** | 31.99 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 2L Automatic Pet Feeder Button Version (White) | 39.00 € | **36.90 €** | 22.0 % | **15.4 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.90 € | **7.80 €** | 37.4 % | **8.2 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz – červeno-biela Solight 1V292, 1,... | 5.70 € | **3.60 €** | 153.2 % | **59.9 %** | 5.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené maximálnou prirážkou |
| Súbor filtrov Freewell do DJI Mavic 4 Pro Super Brig... | 86.10 € | **84.00 €** | 44.1 % | **40.6 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (strieborné) | 22.55 € | **20.50 €** | 20.6 % | **9.6 %** | 20.51 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Colmi P86 (zlaté) | 22.55 € | **20.50 €** | 40.7 % | **27.9 %** | 20.51 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doska Freewell | 22.55 € | **20.50 €** | 29.6 % | **17.8 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic TPU (priehľadný fialový), 1 kg | 21.01 € | **19.00 €** | 41.4 % | **27.9 %** | 19.09 € | cena podľa najlacnejšieho iného predajcu |
| CPA HALO 21 červený | 40.90 € | **38.90 €** | 10.7 % | **5.3 %** | 33.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CPA HALO 21 modrý | 40.90 € | **38.90 €** | 10.7 % | **5.3 %** | 33.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| EMOS E8625 domácí bezdrátová meteostanice | 45.90 € | **43.90 €** | 10.0 % | **5.3 %** | 41.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK RE315 AC1200 WiFi Range Extender | 36.50 € | **34.50 €** | 11.5 % | **5.4 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 1535SS | 205.00 € | **203.00 €** | 9.6 % | **8.5 %** | 203.01 € | cena podľa najlacnejšieho iného predajcu |
| Powerbanka SMALLRIG X99 | 243.50 € | **241.50 €** | 10.6 % | **9.7 %** | 241.58 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo LinoPop-Up 140 | 41.50 € | **39.50 €** | 10.7 % | **5.4 %** | 39.61 € | cena podľa najlacnejšieho iného predajcu |
| Blesková hlava GODOX BD-07 | 26.00 € | **24.00 €** | 18.4 % | **9.3 %** | 24.21 € | cena podľa najlacnejšieho iného predajcu |
| Garett ROSE Gold Mesh Steel | 67.00 € | **65.00 €** | 10.0 % | **6.7 %** | 65.39 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus A8 electric pump | 37.50 € | **35.50 €** | 24.2 % | **17.6 %** | 35.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 12.50 € | **10.50 €** | 46.9 % | **23.4 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE FN4172CW | 331.50 € | **329.50 €** | 7.0 % | **6.3 %** | 329.90 € | cena podľa najlacnejšieho iného predajcu |
| GODOX CBA-PA0007 Pozadie | 42.50 € | **40.50 €** | 21.0 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| GODOX CBA-TA0007 Pozadie | 42.50 € | **40.50 €** | 21.0 % | **15.3 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Gens ace G-Tech 5000mAh 11.1V 45C 3S1P lipo battery ... | 57.00 € | **55.00 €** | 19.0 % | **14.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Herné slúchadlá ONIKUMA GT820 (sivé) | 19.99 € | **18.00 €** | 52.9 % | **37.7 %** | 18.20 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 19.99 € | **18.00 €** | 24.6 % | **12.2 %** | 18.27 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 18.97 € | **17.00 €** | 52.4 % | **36.6 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X12 | 17.93 € | **16.00 €** | 41.3 % | **26.0 %** | 16.13 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY Crossky Clip C30S (biele) | 37.42 € | **35.50 €** | 40.3 % | **33.1 %** | 35.82 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4720 Nap. žehlička Clara fialová | 36.90 € | **35.00 €** | 13.5 % | **7.7 %** | 35.21 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-4720 Nap. žehlička Clara modrá | 36.90 € | **35.00 €** | 13.5 % | **7.7 %** | 35.21 € | cena podľa najlacnejšieho iného predajcu |
| Solárna lampa Superfire FF13-C, 22 W, 300 lm, 2400 mAh | 16.40 € | **14.50 €** | 46.8 % | **29.8 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 80 cm šesťu... | 34.85 € | **33.00 €** | 39.4 % | **32.0 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 24-55'' Perlegear PGMT7 | 13.84 € | **12.00 €** | 48.6 % | **28.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný senzor prítomnosti WiFi Meross MS600MA-... | 29.73 € | **28.00 €** | 40.5 % | **32.4 %** | 28.04 € | cena podľa najlacnejšieho iného predajcu |
| Podpora pozadia pre fotoštúdio Puluz 200x200cm DCA0975 | 27.16 € | **25.50 €** | 23.4 % | **15.9 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sada 3 filtrov CPL+ND8+ND16 Sunnylife pre DJI Mini 3... | 24.60 € | **23.00 €** | 42.7 % | **33.4 %** | 23.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 11.00 € | **9.40 €** | 66.8 % | **42.6 %** | 9.48 € | cena podľa najlacnejšieho iného predajcu |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.50 € | **8.90 €** | 40.9 % | **19.4 %** | 9.00 € | cena podľa najlacnejšieho iného predajcu |
| GUZZANTI GZ 117A | 239.50 € | **237.90 €** | 11.5 % | **10.7 %** | 237.95 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2011300 | 200.50 € | **198.90 €** | 8.8 % | **7.9 %** | 199.00 € | cena podľa najlacnejšieho iného predajcu |
| Meter hluku FNIRSI FDM01 | 22.55 € | **21.00 €** | 21.5 % | **13.1 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Skladovacie vrecko Sunnylife DJI NEO | 21.52 € | **20.00 €** | 33.9 % | **24.4 %** | 20.28 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje BOS6737E20FBG | 343.00 € | **341.50 €** | 7.0 % | **6.5 %** | 341.54 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 180.40 € | **178.90 €** | 42.8 % | **41.7 %** | 179.00 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Tower 450 | 41.00 € | **39.50 €** | 10.1 % | **6.1 %** | 39.61 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (modrý) | 14.00 € | **12.50 €** | 31.0 % | **16.9 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26730-56/RH | 33.00 € | **31.50 €** | 15.4 % | **10.1 %** | 31.72 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE F4142PW | 238.00 € | **236.50 €** | 8.0 % | **7.3 %** | 236.74 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 277.50 € | **276.00 €** | 30.8 % | **30.1 %** | 276.29 € | cena podľa najlacnejšieho iného predajcu |
| Concept LA8383DS | 888.50 € | **887.00 €** | 20.3 % | **20.1 %** | 887.34 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 1610 | 47.50 € | **46.00 €** | 10.5 % | **7.0 %** | 46.36 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Set CLEAN TWIST Disc Mop BLACK | 33.50 € | **32.00 €** | 10.1 % | **5.2 %** | 32.39 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 182.50 € | **181.00 €** | 12.5 % | **11.6 %** | 181.39 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok s časovačom Solight 1V285, 10/13/... | 14.00 € | **12.50 €** | 61.0 % | **43.7 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný roletový spínač Meross MRS105MA-EU WiFi... | 27.00 € | **25.50 €** | 26.4 % | **19.4 %** | 25.90 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2550 | 37.50 € | **36.00 €** | 22.3 % | **17.4 %** | 36.41 € | cena podľa najlacnejšieho iného predajcu |
| SUNNYLIFE Combo Bag for DJI Neo (orange) | 20.50 € | **19.00 €** | 39.6 % | **29.4 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 19.99 € | **18.50 €** | 41.6 % | **31.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash C365 (biela) | 39.98 € | **38.50 €** | 41.2 % | **36.0 %** | 38.90 € | cena podľa najlacnejšieho iného predajcu |
| UV Filter Freewell for DJI Avata 2 | 18.97 € | **17.50 €** | 23.8 % | **14.2 %** | 17.89 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Black Glow Mist pre OSMO NANO | 17.43 € | **16.00 €** | 47.8 % | **35.6 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 16.91 € | **15.50 €** | 56.6 % | **43.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Softbox GODOX SB1520, univerzálny typ, 15x20 cm | 11.90 € | **10.50 €** | 19.3 % | **5.3 %** | 10.71 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo EasyPhone XS Black | 33.90 € | **32.50 €** | 10.4 % | **5.9 %** | 24.78 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GoSmart přenosný ovladač scén EMOS IP-2001ZB /H5014/... | 25.90 € | **24.50 €** | 12.4 % | **6.3 %** | 20.16 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 19.90 € | **18.50 €** | 44.2 % | **34.1 %** | 18.82 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 27131-56 | 29.90 € | **28.50 €** | 16.4 % | **10.9 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| CPA HALO 28 černý | 44.90 € | **43.50 €** | 10.5 % | **7.0 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| CPA HALO 28 červený | 44.90 € | **43.50 €** | 10.5 % | **7.0 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| myPhone Halo C SENIOR černý | 40.90 € | **39.50 €** | 10.7 % | **6.9 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRKI519E41 | 502.90 € | **501.50 €** | 7.2 % | **6.9 %** | 501.78 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Hyper PLA (modrý) | 14.86 € | **13.50 €** | 31.0 % | **19.0 %** | 13.51 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 34.85 € | **33.50 €** | 48.0 % | **42.3 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 250.10 € | **248.90 €** | 41.5 % | **40.9 %** | 249.00 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 24.60 € | **23.50 €** | 40.3 % | **34.0 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Tattu R-Line verzia 5.0 850 mAh 14,8 V 4S1P 150C XT3... | 20.00 € | **18.90 €** | 21.5 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Rowenta RH1833E0 | 150.00 € | **148.90 €** | 11.3 % | **10.5 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 64.58 € | **63.50 €** | 32.2 % | **30.0 %** | 63.71 € | cena podľa najlacnejšieho iného predajcu |
| Gosund Smart Zigbee/WiFi/BLE Gateway ST21 Tuya | 22.55 € | **21.50 €** | 47.6 % | **40.7 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Classic 180 Solid | 21.50 € | **20.50 €** | 11.5 % | **6.3 %** | 19.44 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANON PG-575 XL Black | 26.90 € | **25.90 €** | 10.4 % | **6.3 %** | 24.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANON CL-546 Color | 20.50 € | **19.50 €** | 11.9 % | **6.4 %** | 18.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Philips AWP175/10 | 24.50 € | **23.50 €** | 11.2 % | **6.7 %** | 22.65 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Reflektor GODOX RFT-4 | 18.90 € | **17.90 €** | 20.2 % | **13.9 %** | 17.91 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZCK8040 | 42.50 € | **41.50 €** | 11.6 % | **9.0 %** | 41.55 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Edifier X5 Pro V25 TWS (čierne) - nové 2025 | 33.90 € | **32.90 €** | 15.8 % | **12.4 %** | 32.99 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 167.90 € | **166.90 €** | 33.3 % | **32.5 %** | 166.99 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH7AC1E0 | 219.90 € | **218.90 €** | 7.7 % | **7.2 %** | 219.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 297 PV MK II 250 Ohm | 447.90 € | **446.90 €** | 35.9 % | **35.6 %** | 447.00 € | cena podľa najlacnejšieho iného predajcu |
| Čistič podláh na rôzne povrchy pre Dreame H14 Dual | 20.00 € | **19.00 €** | 14.4 % | **8.7 %** | 19.16 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 103RR | 209.00 € | **208.00 €** | 10.7 % | **10.2 %** | 208.18 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI Z90 4G 2026 – palubná kamera | 192.00 € | **191.00 €** | 19.3 % | **18.6 %** | 191.20 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo HDO, aktivní venkovní anténa | 45.50 € | **44.50 €** | 16.7 % | **14.1 %** | 44.70 € | cena podľa najlacnejšieho iného predajcu |
| Rapoo E9310M klávesnice bílá | 24.50 € | **23.50 €** | 11.8 % | **7.3 %** | 23.74 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 150 Solid Slim | 29.00 € | **28.00 €** | 10.0 % | **6.2 %** | 28.27 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO8708W | 74.50 € | **73.50 €** | 12.3 % | **10.8 %** | 73.80 € | cena podľa najlacnejšieho iného predajcu |
| Súprava farebných efektov GODOX V-11C | 15.00 € | **14.00 €** | 19.2 % | **11.3 %** | 14.31 € | cena podľa najlacnejšieho iného predajcu |
| Držiak mikrofónu Maono BA37 | 30.00 € | **29.00 €** | 11.1 % | **7.4 %** | 29.32 € | cena podľa najlacnejšieho iného predajcu |
| LED vianočné mestečko s kostolom Solight 1V250, 30 ×... | 12.50 € | **11.50 €** | 44.6 % | **33.0 %** | 11.84 € | cena podľa najlacnejšieho iného predajcu |
| IMOU S800 PRO palubná kamera, 4K | 102.50 € | **101.50 €** | 7.6 % | **6.6 %** | 101.89 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera OBSBOT Meet Flip AI 4K | 125.50 € | **124.50 €** | 14.5 % | **13.5 %** | 124.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 15.50 € | **14.50 €** | 48.1 % | **38.5 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| RUSSELL HOBBS 22760-56/RH | 29.50 € | **28.50 €** | 9.3 % | **5.6 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| ETA Activmix Premium 2103 90000, černý | 40.50 € | **39.50 €** | 8.8 % | **6.1 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Graphite Black | 208.50 € | **207.50 €** | 16.6 % | **16.0 %** | 207.90 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf 8in1 docking station BW-TH16 USB 100 W LCD... | 48.50 € | **47.50 €** | 11.4 % | **9.1 %** | 47.90 € | cena podľa najlacnejšieho iného predajcu |
| Lamax Clips1 Play White | 16.50 € | **15.50 €** | 19.5 % | **12.2 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Vlákno CREALITY PLA Jahoda (červená) | 16.50 € | **15.50 €** | 13.0 % | **6.2 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 182.00 € | **181.00 €** | 26.0 % | **25.3 %** | 181.49 € | cena podľa najlacnejšieho iného predajcu |
| Budík Blitzwolf BW-FW10 s nabíjačkou 2xUSB-A, 4xUSB-... | 55.00 € | **54.00 €** | 16.9 % | **14.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Inteligentný prsteň COLMI R02, veľkosť 12,21,3 mm (č... | 29.50 € | **28.50 €** | 19.2 % | **15.2 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Skladací elektrický bežecký pás ACEZOE P20 (červený) | 234.50 € | **233.50 €** | 15.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Skladací elektrický bežecký pás ACEZOE P20 (čierny a... | 234.50 € | **233.50 €** | 15.4 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Vlákno Creality TPU (modré) | 19.99 € | **19.00 €** | 37.7 % | **30.9 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| Pristávacia podložka pre drony Sunnylife 55 cm šesťh... | 17.43 € | **16.50 €** | 36.9 % | **29.6 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA X81 (čierne) | 17.43 € | **16.50 €** | 44.7 % | **37.0 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny kliešťový meter Habotest HT200B | 17.43 € | **16.50 €** | 43.9 % | **36.2 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DB460M (biela) | 37.42 € | **36.50 €** | 40.9 % | **37.4 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Archer T2U Plus WiFi Adaptér | 14.90 € | **14.00 €** | 12.5 % | **5.7 %** | 12.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tréninkové háky REBEL RBA-2505 | 11.90 € | **11.00 €** | 20.8 % | **11.6 %** | 11.14 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Ruby Red BS4717 | 39.90 € | **39.00 €** | 10.4 % | **8.0 %** | 39.21 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla WiFi Avatto TS02-EU-W3 3... | 14.86 € | **14.00 €** | 47.3 % | **38.8 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash C218M + 6 ventilátorov A... | 54.83 € | **54.00 €** | 37.3 % | **35.3 %** | 54.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 74.82 € | **74.00 €** | 38.7 % | **37.2 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER PG001 Mini Follow Focus s dorazmi A/B | 94.81 € | **94.00 €** | 48.5 % | **47.2 %** | 94.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.50 € | **6.80 €** | 35.2 % | **22.6 %** | 6.84 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V53-W, 5 m, st... | 3.50 € | **2.80 €** | 55.5 % | **24.4 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey DTX 10 s meracím rozsaho... | 187.57 € | **186.90 €** | 40.2 % | **39.7 %** | 187.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash A290 (čierna) | 27.16 € | **26.50 €** | 36.7 % | **33.4 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 47.15 € | **46.50 €** | 26.6 % | **24.9 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C260 so senzorom... | 19.50 € | **18.90 €** | 9.3 % | **6.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash DS900 (čierna) | 40.50 € | **39.90 €** | 8.1 % | **6.5 %** | 39.99 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Sora Black | 18.50 € | **17.90 €** | 10.7 % | **7.1 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Sora White | 18.50 € | **17.90 €** | 10.7 % | **7.1 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| Status STA 157601 | 14.50 € | **13.90 €** | 10.2 % | **5.6 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 64.58 € | **64.00 €** | 22.4 % | **21.3 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FW501815 | 129.50 € | **129.00 €** | 5.5 % | **5.1 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| PULUZ Gimbal pre DJI Osmo Action 5 Pro / 4 / 3 (čierny) | 12.50 € | **12.00 €** | 24.5 % | **19.6 %** | 12.04 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 16V | 113.00 € | **112.50 €** | 10.0 % | **9.5 %** | 112.58 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Rotaro PowerVac 2v1 20V | 113.00 € | **112.50 €** | 5.8 % | **5.3 %** | 112.58 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA6 NP3T3EHTB Candy Bake 600 | 270.50 € | **270.00 €** | 7.3 % | **7.1 %** | 270.08 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu TEESA PURE LIFE P500 | 78.00 € | **77.50 €** | 18.1 % | **17.3 %** | 77.59 € | cena podľa najlacnejšieho iného predajcu |
| Herní křeslo KRUGER & MATZ GX-150  černo červené | 90.00 € | **89.50 €** | 8.0 % | **7.4 %** | 89.60 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX AD100Pro II | 287.50 € | **287.00 €** | 14.1 % | **13.9 %** | 287.10 € | cena podľa najlacnejšieho iného predajcu |
| LED svetelný panel GODOX Litemons LP600R RGB | 134.50 € | **134.00 €** | 13.9 % | **13.4 %** | 134.10 € | cena podľa najlacnejšieho iného predajcu |
| Filament Creality Ender-PLA (čierny) | 13.00 € | **12.50 €** | 21.6 % | **16.9 %** | 12.71 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 296.50 € | **296.00 €** | 12.9 % | **12.7 %** | 296.24 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný modul pre DJI Osmo Mobile | 58.00 € | **57.50 €** | 13.4 % | **12.5 %** | 57.79 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Pizzeria 927, červená | 247.50 € | **247.00 €** | 31.1 % | **30.8 %** | 247.34 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 263.00 € | **262.50 €** | 19.8 % | **19.6 %** | 262.85 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam S800 | 87.50 € | **87.00 €** | 14.3 % | **13.7 %** | 87.36 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 32.50 € | **32.00 €** | 27.8 % | **25.8 %** | 32.37 € | cena podľa najlacnejšieho iného predajcu |
| Tester baterií UNI-T UT677C s diagnostikou | 537.00 € | **536.50 €** | 15.6 % | **15.5 %** | 536.89 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 339.50 € | **339.00 €** | 20.3 % | **20.1 %** | 339.39 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-3 PREMIUM 3 kg (100x150... | 26.50 € | **26.00 €** | 11.6 % | **9.5 %** | 26.39 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-4 PREMIUM 4 kg (100x150... | 28.00 € | **27.50 €** | 15.5 % | **13.4 %** | 27.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2002-5 PREMIUM 5 kg (100x150... | 30.50 € | **30.00 €** | 20.8 % | **18.8 %** | 30.39 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-4 PREMIUM 4 kg (100x150... | 28.00 € | **27.50 €** | 15.5 % | **13.4 %** | 27.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel RBY-2003-5 PREMIUM 5 kg (100x150... | 30.50 € | **30.00 €** | 20.8 % | **18.8 %** | 30.39 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED reťaz s guličkami 2 v 1 Solight 1V08-R... | 15.50 € | **15.00 €** | 53.9 % | **48.9 %** | 15.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 920.00 € | **919.50 €** | 14.2 % | **14.1 %** | 919.89 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Chamberi horizontal | 157.00 € | **156.50 €** | 9.8 % | **9.4 %** | 156.89 € | cena podľa najlacnejšieho iného predajcu |
| Sous vide G21 Maestro, WiFi, 1200 W | 107.00 € | **106.50 €** | 11.0 % | **10.5 %** | 106.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 271.00 € | **270.50 €** | 6.8 % | **6.6 %** | 270.89 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 159.50 € | **159.00 €** | 6.4 % | **6.1 %** | 159.39 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 272.50 € | **272.00 €** | 5.3 % | **5.1 %** | 272.39 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá Edifier HECATE G2 II (čierne) | 32.50 € | **32.00 €** | 11.3 % | **9.6 %** | 32.39 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 184.50 € | **184.00 €** | 5.6 % | **5.3 %** | 184.39 € | cena podľa najlacnejšieho iného predajcu |
| Teleso škrtiacej klapky MOZA RACING MTQ AS014 | 219.50 € | **219.00 €** | 15.2 % | **15.0 %** | 219.39 € | cena podľa najlacnejšieho iného predajcu |
| Zámek na kolo 57087 | 12.00 € | **11.50 €** | 10.5 % | **5.9 %** | 11.89 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová vesta REBEL ACTIVE RBA-2527-5 5kg neoprenová | 24.50 € | **24.00 €** | 7.8 % | **5.6 %** | 24.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 681.00 € | **680.50 €** | 6.9 % | **6.9 %** | 680.89 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjateľná stolová lampa Yeelight 4 v 1 | 18.00 € | **17.50 €** | 19.9 % | **16.5 %** | 17.90 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Svetlo do skrine 40 cm (strieborné) 2700K | 13.00 € | **12.50 €** | 21.2 % | **16.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V07-W, 20 m, s... | 15.00 € | **14.50 €** | 49.5 % | **44.5 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Mileseey S7 s kamerou s dosahom 1... | 125.00 € | **124.50 €** | 13.6 % | **13.2 %** | 124.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 41.00 € | **40.50 €** | 22.5 % | **21.0 %** | 40.90 € | cena podľa najlacnejšieho iného predajcu |
| Zvuková karta Maono G1 Neo (biela) | 47.00 € | **46.50 €** | 16.6 % | **15.3 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| Maono G1 Neo Sound Card Black | 47.00 € | **46.50 €** | 15.0 % | **13.8 %** | 46.90 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41PL3C-0360 4.0 Mpix venkovní IP kamera s I... | 116.50 € | **116.00 €** | 17.9 % | **17.4 %** | 116.46 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife A3S-FI929 6ks sada filtrov Mix pre AIR 3S | 49.50 € | **49.00 €** | 33.5 % | **32.1 %** | 49.46 € | cena podľa najlacnejšieho iného predajcu |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 71.50 € | **71.00 €** | 17.3 % | **16.5 %** | 71.47 € | cena podľa najlacnejšieho iného predajcu |
| Diaľkový spúšť GODOX X3 TTL pre Fujifilm | 86.50 € | **86.00 €** | 39.0 % | **38.2 %** | 86.47 € | cena podľa najlacnejšieho iného predajcu |
| CP-URC-DC24PL3C-L 2.4 Mpix venkovní dome kamera 4v1 ... | 50.50 € | **50.00 €** | 16.9 % | **15.7 %** | 50.48 € | cena podľa najlacnejšieho iného predajcu |
| Set G21 vákuovacích dóz s pumpou, 4 ks | 35.50 € | **35.00 €** | 8.3 % | **6.8 %** | 35.49 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 81.50 € | **81.00 €** | 5.8 % | **5.1 %** | 81.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 63.50 € | **63.00 €** | 17.0 % | **16.0 %** | 63.49 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 105.50 € | **105.00 €** | 19.2 % | **18.6 %** | 105.49 € | cena podľa najlacnejšieho iného predajcu |
| Nabíječka USB KRUGER & MATZ KM0859 GaN 140W USB-A + ... | 49.50 € | **49.00 €** | 30.5 % | **29.2 %** | 49.49 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 173.50 € | **173.00 €** | 6.0 % | **5.6 %** | 173.49 € | cena podľa najlacnejšieho iného predajcu |
| TELEVES INNOVA BOSS LTE700 5G pokojová inteligentní ... | 59.50 € | **59.00 €** | 19.5 % | **18.5 %** | 59.49 € | cena podľa najlacnejšieho iného predajcu |
| SkyRC BD380+ vybíjač | 104.50 € | **104.00 €** | 18.4 % | **17.8 %** | 104.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 45.50 € | **45.00 €** | 28.0 % | **26.6 %** | 45.50 € | cena podľa najlacnejšieho iného predajcu |
| Resto 95002 Pánev Crater 26 cm | 37.50 € | **37.00 €** | 6.6 % | **5.1 %** | 37.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal G721SD74 | 143.50 € | **143.00 €** | 49.3 % | **48.8 %** | 143.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 11.50 € | **11.00 €** | 29.1 % | **23.5 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V276, 26 × 17 cm, 6 LE... | 16.50 € | **16.00 €** | 12.4 % | **9.0 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálny kapesny kompresor mini | 38.50 € | **38.00 €** | 16.8 % | **15.3 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne stĺpikové osvetlenie Palermo, 5W... | 30.50 € | **30.00 €** | 37.5 % | **35.3 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight ventilátor do kúpeľne | 13.50 € | **13.00 €** | 11.8 % | **7.6 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50U3V0 | 14.50 € | **14.00 €** | 12.7 % | **8.8 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015700 | 14.50 € | **14.00 €** | 17.1 % | **13.0 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO331L | 101.50 € | **101.00 €** | 5.8 % | **5.3 %** | 101.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W + USB A+C 20 W PD výsuvná na... | 30.50 € | **30.00 €** | 50.1 % | **47.6 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada ND filtrov pre DJI Action 6 (ND8/16/32/64) | 26.00 € | **25.50 €** | 17.3 % | **15.0 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Sunnylife 1/4'' rýchloupínací držiak s mačacím uchom... | 13.00 € | **12.50 €** | 20.4 % | **15.7 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Solight domáca kamera s nočným svetlom a hodinami | 33.50 € | **33.00 €** | 23.2 % | **21.3 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 21.50 € | **21.00 €** | 25.9 % | **23.0 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| STRONG SRT 8119 | 26.50 € | **26.00 €** | 12.2 % | **10.1 %** | 26.50 € | cena podľa najlacnejšieho iného predajcu |
| Počítačový ventilátor Darkflash Gauss G24 (čierny) | 12.00 € | **11.50 €** | 19.6 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 19.99 € | **19.50 €** | 40.1 % | **36.7 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| xTool SafetyPro™ AP2 filter s aktívnym uhlím | 59.96 € | **59.50 €** | 35.4 % | **34.4 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 26-60" Perlegear PGMF3 | 16.91 € | **16.50 €** | 42.8 % | **39.3 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 187.90 € | **187.50 €** | 10.7 % | **10.5 %** | 187.74 € | cena podľa najlacnejšieho iného predajcu |
| TESLA GlideStar GQ500 | 66.90 € | **66.50 €** | 10.1 % | **9.5 %** | 66.79 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 150.90 € | **150.50 €** | 12.3 % | **12.0 %** | 150.79 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate AX s podporou Wi-Fi 6 | 137.90 € | **137.50 €** | 13.6 % | **13.3 %** | 137.83 € | cena podľa najlacnejšieho iného predajcu |
| Rádio TechniSat DIGITRADIO 317 /černé/ | 83.90 € | **83.50 €** | 8.9 % | **8.4 %** | 83.87 € | cena podľa najlacnejšieho iného predajcu |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 108.90 € | **108.50 €** | 8.2 % | **7.8 %** | 108.88 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 71.90 € | **71.50 €** | 13.0 % | **12.4 %** | 71.89 € | cena podľa najlacnejšieho iného predajcu |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 82.90 € | **82.50 €** | 23.2 % | **22.6 %** | 82.89 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 124.90 € | **124.50 €** | 8.9 % | **8.6 %** | 124.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna smart WIFI meteostanica | 94.90 € | **94.50 €** | 15.2 % | **14.7 %** | 94.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 158.90 € | **158.50 €** | 21.0 % | **20.7 %** | 158.90 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na upevnenie telefónu a videokamery PGY ProS... | 148.90 € | **148.50 €** | 21.0 % | **20.6 %** | 148.90 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s farebnými guľami Solight 1V273,... | 3.20 € | **2.80 €** | 53.9 % | **34.7 %** | 2.90 € | cena podľa najlacnejšieho iného predajcu |
| Herná myš ONIKUMA CW905 čierna | 12.30 € | **11.90 €** | 25.3 % | **21.2 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Stěrka na dlažbu Classic s tele | 11.90 € | **11.50 €** | 10.2 % | **6.5 %** | 11.73 € | cena podľa najlacnejšieho iného predajcu |
| Držák projektoru Cabletech UCH0148 univerzální | 14.90 € | **14.50 €** | 18.0 % | **14.8 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.90 € | **11.50 €** | 27.8 % | **23.5 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 43.90 € | **43.50 €** | 6.3 % | **5.3 %** | 43.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| IMOU T800 4K palubná kamera | 54.90 € | **54.50 €** | 10.8 % | **10.0 %** | 54.59 € | cena podľa najlacnejšieho iného predajcu |
| Energy Sistem Headset Office 3, čierne | 41.90 € | **41.50 €** | 20.8 % | **19.6 %** | 41.68 € | cena podľa najlacnejšieho iného predajcu |
| TP-Link Tapo L930-5 | 40.90 € | **40.50 €** | 12.3 % | **11.2 %** | 40.69 € | cena podľa najlacnejšieho iného predajcu |
| Powerbanka KRUGER & MATZ KM0916 10000mAh Li-pol, QC,... | 29.90 € | **29.50 €** | 7.4 % | **6.0 %** | 29.79 € | cena podľa najlacnejšieho iného predajcu |
| Náhradní předfiltr GARNI PF 45T | 21.90 € | **21.50 €** | 34.3 % | **31.8 %** | 21.88 € | cena podľa najlacnejšieho iného predajcu |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 52.90 € | **52.50 €** | 9.7 % | **8.9 %** | 52.89 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA37BE AX 1200, WiFi ... | 32.90 € | **32.50 €** | 10.0 % | **8.6 %** | 32.89 € | cena podľa najlacnejšieho iného predajcu |
| BEPER BEP-BT600-Y | 24.90 € | **24.50 €** | 13.7 % | **11.8 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu |
| Kruhové osvetlenie Puluz 20 cm na vlogovanie s držia... | 19.90 € | **19.50 €** | 17.4 % | **15.0 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 18.90 € | **18.50 €** | 18.5 % | **16.0 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX 300 CIR60430CB | 369.90 € | **369.50 €** | 7.1 % | **7.0 %** | 369.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.00 € | **5.70 €** | 37.8 % | **30.9 %** | 5.72 € | cena podľa najlacnejšieho iného predajcu |
| Solight cestovný adaptér do Indie, typ D | 5.70 € | **5.40 €** | 40.0 % | **32.6 %** | 5.47 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire X30 – 340 lm, USB, 5 režimov, 130 m | 11.28 € | **11.00 €** | 26.7 % | **23.5 %** | 11.25 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz s farebnými guľami Solight 1V274,... | 4.00 € | **3.80 €** | 50.6 % | **43.0 %** | 3.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight časový spínač, týždeň, 1 režim | 4.00 € | **3.80 €** | 23.7 % | **17.5 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| Mixér G21 VitalStick 800 W, Red/Black | 45.00 € | **44.90 €** | 5.5 % | **5.2 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mixér G21 VitalStick 800 W, Black | 45.00 € | **44.90 €** | 5.5 % | **5.2 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hodiny nástěnné TechnoLine WT 1016 | 20.00 € | **19.90 €** | 15.8 % | **15.2 %** | 19.96 € | cena podľa najlacnejšieho iného predajcu |
| BEKO SIM8130P | 45.00 € | **44.90 €** | 12.4 % | **12.1 %** | 44.98 € | cena podľa najlacnejšieho iného predajcu |
| Salente Icequeen-Wh | 19.00 € | **18.90 €** | 6.2 % | **5.7 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Salente IceQueen černá | 19.00 € | **18.90 €** | 6.2 % | **5.7 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper Rebel Active RBA-3226 | 52.00 € | **51.90 €** | 6.2 % | **6.0 %** | 51.99 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper REBEL ACTIVE RBA-3229 | 43.00 € | **42.90 €** | 13.5 % | **13.2 %** | 42.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny bezkontaktný alkohol tester, F... | 47.00 € | **46.90 €** | 19.3 % | **19.0 %** | 47.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 34.00 € | **33.90 €** | 30.6 % | **30.2 %** | 34.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 29.00 € | **28.90 €** | 11.4 % | **11.0 %** | 29.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, matná ... | 42.00 € | **41.90 €** | 35.2 % | **34.9 %** | 42.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, biela | 24.00 € | **23.90 €** | 53.4 % | **52.8 %** | 24.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.00 € | **43.90 €** | 5.8 % | **5.5 %** | 44.00 € | cena podľa najlacnejšieho iného predajcu |
| Gyroskop pre RC modely áut SkyRC Gyro GC301 | 21.00 € | **20.90 €** | 16.4 % | **15.8 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.90 € | **7.80 €** | 48.0 % | **46.1 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight zásuvka, 16A, biela, vypínač | 1.90 € | **1.80 €** | 41.7 % | **34.3 %** | 1.82 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 435C | 16.00 € | **15.90 €** | 23.5 % | **22.8 %** | 15.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 16.00 € | **15.90 €** | 35.1 % | **34.2 %** | 16.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.00 € | **10.90 €** | 18.1 % | **17.1 %** | 11.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.60 € | **9.50 €** | 35.3 % | **33.9 %** | 9.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 14.00 € | **13.90 €** | 21.2 % | **20.3 %** | 14.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná kométa Solight 1V278, 30 cm, 10... | 8.60 € | **8.50 €** | 21.6 % | **20.2 %** | 8.60 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok Solight 1V286, 10/13/16 cm, 3 × A... | 9.70 € | **9.60 €** | 9.8 % | **8.7 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| Tefal BC50D6V0 | 16.00 € | **15.90 €** | 10.7 % | **10.0 %** | 16.00 € | cena podľa najlacnejšieho iného predajcu |
| Salente G4 robotický vysavač | 115.00 € | **114.90 €** | 7.8 % | **7.7 %** | 114.91 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 94.00 € | **93.90 €** | 17.8 % | **17.7 %** | 93.97 € | cena podľa najlacnejšieho iného predajcu |
| SMALLRIG VB99 SE Mini V-Mount batéria | 122.00 € | **121.90 €** | 9.7 % | **9.6 %** | 122.00 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21PL3C-V3 2.0 Mpix venkovní IP kamera s IR ... | 77.00 € | **76.90 €** | 17.4 % | **17.3 %** | 77.00 € | cena podľa najlacnejšieho iného predajcu |
| TC Electronic Hall Of Fame 2 Mini reverb effect pedal | 115.00 € | **114.90 €** | 15.0 % | **14.9 %** | 115.00 € | cena podľa najlacnejšieho iného predajcu |

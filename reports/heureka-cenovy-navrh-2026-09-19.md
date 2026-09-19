# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-19

Vstup: `premiumstore-sk_2026-09-19_08-36.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6889**
- Návrh **zvýšiť** cenu: **208** produktov
- Návrh **znížiť** cenu: **296** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6385** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **75**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **482**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (208)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| TCL 65Q6C QD-MiniLED 4K SMART Google TV | 586.90 € | **698.90 €** | 10.1 % | **31.1 %** | 699.00 € | cena podľa najlacnejšieho iného predajcu |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 424.90 € | **497.00 €** | 7.1 % | **25.2 %** | 497.35 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1014 | 158.00 € | **201.50 €** | 19.9 % | **52.9 %** | 201.75 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera OBSBOT Tiny 3 | 353.50 € | **378.90 €** | 5.0 % | **12.5 %** | 379.00 € | cena podľa najlacnejšieho iného predajcu |
| Samsung rám pro Frame TV 65" Zlatý | 123.90 € | **148.90 €** | 10.2 % | **32.5 %** | 149.00 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 408.50 € | **429.00 €** | 8.5 % | **13.9 %** | 429.18 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 160 Sol | 30.00 € | **50.00 €** | 10.4 % | **83.9 %** | 50.31 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Fórum UM790 Pro Ryzen 9 7940HS barebone | 456.00 € | **473.00 €** | 9.9 % | **14.0 %** | 473.20 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 406.00 € | **422.00 €** | 9.6 % | **13.9 %** | 422.18 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 211.90 € | **226.50 €** | 34.8 % | **44.1 %** | 226.75 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 211.90 € | **226.50 €** | 34.8 % | **44.1 %** | 226.75 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Ultimate Graphite Black | 258.50 € | **271.00 €** | 11.1 % | **16.5 %** | 271.33 € | cena podľa najlacnejšieho iného predajcu |
| Ležérny cvičebný bicykel MERACH MR-S08B1-EU (čierny) | 247.00 € | **258.90 €** | 36.3 % | **42.9 %** | 259.00 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 20.00 € | **30.90 €** | 40.1 % | **116.4 %** | 30.99 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux ESG88600SX | 679.00 € | **689.50 €** | 10.0 % | **11.7 %** | 689.65 € | cena podľa najlacnejšieho iného predajcu |
| Samsung rám pro Frame TV 65" Týkový | 68.90 € | **78.90 €** | 10.6 % | **26.6 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 169.50 € | **179.50 €** | 9.5 % | **16.0 %** | 179.90 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 464XL | 121.50 € | **130.50 €** | 20.8 % | **29.8 %** | 130.90 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF75TKBXC | 70.50 € | **78.90 €** | 10.1 % | **23.2 %** | 79.00 € | cena podľa najlacnejšieho iného predajcu |
| Teleobjektív Freewell 3x 17 mm | 189.90 € | **197.90 €** | 23.6 % | **28.8 %** | 198.00 € | cena podľa najlacnejšieho iného predajcu |
| Philips Mikrosystem TAM4205M2 | 161.50 € | **169.50 €** | 10.1 % | **15.6 %** | 169.90 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 23.00 € | **30.90 €** | 14.2 % | **53.5 %** | 30.99 € | cena podľa najlacnejšieho iného predajcu |
| LED adventný kalendár – kniha Solight 1V244, 40 × 30... | 21.50 € | **29.00 €** | 5.6 % | **42.5 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| Samsung Crystal UHD UE43U8072H | 267.90 € | **275.00 €** | 10.1 % | **13.0 %** | 275.13 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED girlanda s ihličím Solight 1V299, 7 m, ... | 28.90 € | **35.90 €** | 44.5 % | **79.5 %** | 35.96 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFF85WTBXC | 105.90 € | **112.50 €** | 10.1 % | **17.0 %** | 112.90 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Aura A50 Pro Soundbar | 129.50 € | **136.00 €** | 10.4 % | **15.9 %** | 136.38 € | cena podľa najlacnejšieho iného predajcu |
| JBL Xtreme 3 black | 188.50 € | **194.90 €** | 10.2 % | **14.0 %** | 194.91 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehlicí prkno Classic M Basic | 33.50 € | **39.90 €** | 10.1 % | **31.1 %** | 40.00 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM016 12 kg výrobník ľadových kociek (čierny) | 74.00 € | **80.00 €** | 14.7 % | **24.0 %** | 80.08 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický filter Freewell série V2 VND/CPL II 3-7 s... | 142.00 € | **148.00 €** | 23.6 % | **28.8 %** | 148.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO Action 6 – Mega Kit –... | 142.00 € | **148.00 €** | 25.0 % | **30.3 %** | 148.50 € | cena podľa najlacnejšieho iného predajcu |
| Držiak Freewell Genius Rig pre iPhone 17 Pro | 142.00 € | **148.00 €** | 28.6 % | **34.0 %** | 148.50 € | cena podľa najlacnejšieho iného predajcu |
| Držiak na telefón Freewell Genius Rig pre iPhone 17 ... | 142.00 € | **148.00 €** | 21.9 % | **27.1 %** | 148.50 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 12 GS1161 | 178.50 € | **184.00 €** | 32.1 % | **36.1 %** | 184.13 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica ONIKUMA MT706 (čierna) (QWERTY) | 38.00 € | **43.50 €** | 7.1 % | **22.6 %** | 43.79 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 121.50 € | **126.90 €** | 19.5 % | **24.8 %** | 126.93 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1030600 | 26.90 € | **32.00 €** | 10.3 % | **31.2 %** | 32.42 € | cena podľa najlacnejšieho iného predajcu |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 120.50 € | **125.50 €** | 14.4 % | **19.2 %** | 125.85 € | cena podľa najlacnejšieho iného predajcu |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 26.50 € | **30.90 €** | 15.2 % | **34.3 %** | 30.99 € | cena podľa najlacnejšieho iného predajcu |
| Stojan na mikrofón Fifine BM88 (ružový) | 41.50 € | **45.90 €** | 11.4 % | **23.2 %** | 46.00 € | cena podľa najlacnejšieho iného predajcu |
| Freewell Klatka Osmo Action 6 Creator Pro | 75.90 € | **79.90 €** | 12.9 % | **18.9 %** | 79.99 € | cena podľa najlacnejšieho iného predajcu |
| USB WiFi adaptér duální VU+ 2,4/5GHz/600Mbps s ANTÉN... | 32.00 € | **36.00 €** | 5.5 % | **18.6 %** | 36.19 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro | 125.00 € | **128.90 €** | 9.4 % | **12.8 %** | 128.93 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WOI4S8PPM1SX | 444.00 € | **447.50 €** | 5.0 % | **5.8 %** | 447.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 16.90 € | **20.00 €** | 23.9 % | **46.6 %** | 20.45 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell s neutrálnou hustotou 3 v 1 | 75.90 € | **79.00 €** | 18.4 % | **23.3 %** | 79.20 € | cena podľa najlacnejšieho iného predajcu |
| Filtr Freewell zo série Sherpa Magnetic Mist 3v1 | 75.90 € | **79.00 €** | 18.4 % | **23.3 %** | 79.20 € | cena podľa najlacnejšieho iného predajcu |
| ALI Bluetooth sluch. Pods PRO 3, TWS06 | 10.50 € | **13.50 €** | 12.8 % | **45.0 %** | 13.75 € | cena podľa najlacnejšieho iného predajcu |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 635.00 € | **638.00 €** | 8.0 % | **8.5 %** | 638.32 € | cena podľa najlacnejšieho iného predajcu |
| Živica ELEGOO Standard 1.0 (polopriehľadná) | 14.00 € | **17.00 €** | 13.0 % | **37.3 %** | 17.43 € | cena podľa najlacnejšieho iného predajcu |
| Aligator TWS sluchátka Pods ANC TWS08WT | 14.00 € | **17.00 €** | 6.9 % | **29.8 %** | 17.43 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 delených ND filtrov Freewell pre DJI Air 3S | 47.00 € | **49.90 €** | 15.3 % | **22.4 %** | 49.99 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EB61C4DB | 143.50 € | **146.00 €** | 5.0 % | **6.8 %** | 146.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight vestavný blok zásuviek s posuvným krytom, 3 ... | 32.50 € | **35.00 €** | 17.3 % | **26.3 %** | 35.27 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Accesories | 21.00 € | **23.50 €** | 15.4 % | **29.1 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| Aligator TWS sluchátka Pods ANC TWS08BK | 14.50 € | **17.00 €** | 10.7 % | **29.8 %** | 17.43 € | cena podľa najlacnejšieho iného predajcu |
| Philips TAQ2000BK Bezdrátová sluchátka | 36.90 € | **39.00 €** | 10.3 % | **16.5 %** | 39.40 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo HiFi Tuner TR05 | 138.00 € | **140.00 €** | 9.9 % | **11.5 %** | 140.07 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 865.50 € | **867.50 €** | 14.1 % | **14.4 %** | 867.84 € | cena podľa najlacnejšieho iného predajcu |
| Clutch Pedal Moza Racing CRP2 RS067 | 97.50 € | **99.50 €** | 6.0 % | **8.1 %** | 99.90 € | cena podľa najlacnejšieho iného predajcu |
| Rýchlovarná kanvica Niceboy ION SmartKettle 1,7 l, č... | 54.00 € | **55.90 €** | 2.0 % | **5.6 %** | 54.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 28.00 € | **29.90 €** | 6.8 % | **14.1 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 49 mm s vekom pre Real Lock... | 28.00 € | **29.90 €** | 42.3 % | **51.9 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 55 mm s vekom pre Real Lock... | 28.00 € | **29.90 €** | 105.8 % | **119.8 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok Freewell 62 mm s vekom pre Real Lock... | 28.00 € | **29.90 €** | 17.8 % | **25.8 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Základný krúžok s vekom Freewell 82 mm pre Real Lock... | 28.00 € | **29.90 €** | 114.4 % | **128.9 %** | 29.99 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 20.90 € | **22.50 €** | 5.1 % | **13.1 %** | 22.62 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 84.90 € | **86.50 €** | 5.1 % | **7.1 %** | 86.90 € | cena podľa najlacnejšieho iného predajcu |
| Boxerské rukavice DBX BUSHIDO B-2v18 12 oz | 46.00 € | **47.50 €** | 2.7 % | **6.0 %** | 36.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 21.00 € | **22.50 €** | 10.6 % | **18.5 %** | 22.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 58.00 € | **59.50 €** | 33.8 % | **37.3 %** | 59.89 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač EVERCON AM-797 5G | 20.50 € | **22.00 €** | 16.6 % | **25.1 %** | 22.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.50 € | **17.90 €** | 23.9 % | **34.4 %** | 17.94 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia IP kamera s LED světlom | 31.50 € | **32.90 €** | 18.5 % | **23.8 %** | 33.00 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Sunnylife Mini pre Insta360 GO Ultra | 8.30 € | **9.70 €** | 15.5 % | **35.0 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Braun SI3042VI | 34.90 € | **36.00 €** | 10.5 % | **14.0 %** | 36.10 € | cena podľa najlacnejšieho iného predajcu |
| JBL TUNE 305 USB-C Black | 16.90 € | **18.00 €** | 11.4 % | **18.7 %** | 18.15 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Žehlící deska COMPACT Table | 16.90 € | **18.00 €** | 11.4 % | **18.7 %** | 18.22 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS1 Pro – štartér do auta | 68.90 € | **70.00 €** | 15.2 % | **17.1 %** | 70.22 € | cena podľa najlacnejšieho iného predajcu |
| Boxerské rukavice DBX BUSHIDO B-2v17 10 oz | 36.50 € | **37.50 €** | 3.5 % | **6.3 %** | 23.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Boxerské rukavice DBX BUSHIDO B-2v17 8 oz | 36.50 € | **37.50 €** | 3.5 % | **6.3 %** | 23.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Lano na šplh HMS RO05 | 49.00 € | **50.00 €** | 3.0 % | **5.1 %** | 42.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 35.00 € | **36.00 €** | 34.3 % | **38.1 %** | 36.01 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Laser Robot Accesories | 20.00 € | **21.00 €** | 14.0 % | **19.7 %** | 21.06 € | cena podľa najlacnejšieho iného predajcu |
| Filter ND1000 Freewell pre DJI Mini 5 Pro | 18.90 € | **19.90 €** | 16.5 % | **22.7 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter ND4 Freewell pre DJI Mini 5 Pro | 18.90 € | **19.90 €** | 21.0 % | **27.4 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Filter ND8 Freewell pre DJI Mini 5 Pro | 18.90 € | **19.90 €** | 22.0 % | **28.5 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Voľný filter ND32 pre DJI Mini 5 Pro | 18.90 € | **19.90 €** | 21.1 % | **27.5 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Voľný filter ND4/PL pre DJI Mini 5 Pro | 18.90 € | **19.90 €** | 15.3 % | **21.4 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| ND16 filter Freewell pre DJI Mini 5 Pro | 18.90 € | **19.90 €** | 20.3 % | **26.7 %** | 19.99 € | cena podľa najlacnejšieho iného predajcu |
| Střídač hybridní DEYE SUN-10K-SG01HP3-EU-AM2, 10kW, ... | 1510.90 € | **1511.90 €** | 7.6 % | **7.6 %** | 1512.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 38.50 € | **39.50 €** | 33.7 % | **37.2 %** | 39.78 € | cena podľa najlacnejšieho iného predajcu |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 35.00 € | **36.00 €** | 34.1 % | **37.9 %** | 36.31 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny univerzálny multimeter Habotest HT127B | 27.50 € | **28.50 €** | 9.5 % | **13.5 %** | 28.89 € | cena podľa najlacnejšieho iného predajcu |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 54.00 € | **55.00 €** | 30.0 % | **32.4 %** | 55.40 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2000300 CR Kuchyňská váha | 27.50 € | **28.50 €** | 10.5 % | **14.5 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Boxerské lapy DBX BUSHIDO ARF-1101 | 47.00 € | **47.90 €** | 3.1 % | **5.1 %** | 39.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 19.00 € | **19.90 €** | 31.5 % | **37.7 %** | 19.97 € | cena podľa najlacnejšieho iného predajcu |
| Detektor kovov Garrett ACE Apex | 494.00 € | **494.90 €** | 28.5 % | **28.7 %** | 494.92 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J403HD, 229,4Wh, 10 000 A | 401.00 € | **401.50 €** | 38.4 % | **38.6 %** | 401.51 € | cena podľa najlacnejšieho iného predajcu |
| Lovecký ďalekohľad Mileseey IONJET2 | 233.50 € | **234.00 €** | 36.6 % | **36.8 %** | 234.01 € | cena podľa najlacnejšieho iného predajcu |
| Medicinbal REBEL ACTIVE RBA-3108-10 Slam Ball 23cm 10kg | 22.00 € | **22.50 €** | 18.0 % | **20.7 %** | 22.51 € | cena podľa najlacnejšieho iného predajcu |
| Svietidlo Superfire F5, 1100lm, USB | 16.00 € | **16.50 €** | 33.8 % | **38.0 %** | 16.51 € | cena podľa najlacnejšieho iného predajcu |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 14.00 € | **14.50 €** | 49.0 % | **54.3 %** | 14.52 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný Wi-Fi termostat MEROSS MTS215BMA-B(EU) ... | 75.00 € | **75.50 €** | 37.8 % | **38.7 %** | 75.54 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM800G | 103.00 € | **103.50 €** | 38.6 % | **39.3 %** | 103.54 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600G | 103.00 € | **103.50 €** | 39.5 % | **40.2 %** | 103.54 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.00 € | **18.50 €** | 34.1 % | **37.9 %** | 18.55 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2S PRO 2 v 1 (čie... | 535.00 € | **535.50 €** | 41.8 % | **41.9 %** | 535.55 € | cena podľa najlacnejšieho iného predajcu |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 48.00 € | **48.50 €** | 7.4 % | **8.5 %** | 48.56 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V110-W, 5 m, s... | 5.80 € | **6.30 €** | 43.8 % | **56.2 %** | 6.36 € | cena podľa najlacnejšieho iného predajcu |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 6.70 € | **7.20 €** | 30.9 % | **40.7 %** | 7.26 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 159.00 € | **159.50 €** | 39.3 % | **39.8 %** | 159.56 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 170.00 € | **170.50 €** | 18.2 % | **18.5 %** | 170.56 € | cena podľa najlacnejšieho iného predajcu |
| Status STA 177159 | 10.50 € | **11.00 €** | 5.9 % | **11.0 %** | 11.08 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection brown | 209.00 € | **209.50 €** | 16.8 % | **17.1 %** | 209.58 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection red | 209.00 € | **209.50 €** | 16.8 % | **17.1 %** | 209.58 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7245 | 29.50 € | **30.00 €** | 5.9 % | **7.7 %** | 30.09 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7160 | 21.50 € | **22.00 €** | 6.1 % | **8.5 %** | 22.09 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T UT203R | 53.00 € | **53.50 €** | 13.5 % | **14.5 %** | 53.59 € | cena podľa najlacnejšieho iného predajcu |
| Bazénové bezdrátové čidlo GARNI 057P | 37.50 € | **38.00 €** | 6.0 % | **7.5 %** | 38.09 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 291.50 € | **292.00 €** | 18.0 % | **18.2 %** | 292.09 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Revopoint Inspire 2 – štandardná verzia | 670.00 € | **670.50 €** | 38.2 % | **38.3 %** | 670.59 € | cena podľa najlacnejšieho iného predajcu |
| AMICA DI 6412 CB | 269.50 € | **270.00 €** | 5.7 % | **5.9 %** | 270.09 € | cena podľa najlacnejšieho iného predajcu |
| Súprava stabilizátora iSteady MT3 Pro | 615.50 € | **616.00 €** | 39.6 % | **39.7 %** | 616.12 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 18.50 € | **19.00 €** | 33.6 % | **37.2 %** | 19.14 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier STAX S5 (čierne) | 492.00 € | **492.50 €** | 40.7 % | **40.9 %** | 492.66 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.00 € | **19.50 €** | 33.4 % | **36.9 %** | 19.68 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare VITURE XR Beast (veľkosť L) | 772.50 € | **773.00 €** | 41.6 % | **41.7 %** | 773.18 € | cena podľa najlacnejšieho iného predajcu |
| Budík analogový TechnoLine WT 757W | 27.00 € | **27.50 €** | 12.2 % | **14.3 %** | 27.69 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7235 | 31.00 € | **31.50 €** | 9.3 % | **11.1 %** | 31.69 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7400 | 31.00 € | **31.50 €** | 7.4 % | **9.2 %** | 31.69 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny multimeter | 13.50 € | **14.00 €** | 24.9 % | **29.5 %** | 14.19 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 47.50 € | **48.00 €** | 12.8 % | **14.0 %** | 48.19 € | cena podľa najlacnejšieho iného predajcu |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 62.50 € | **63.00 €** | 13.5 % | **14.5 %** | 63.19 € | cena podľa najlacnejšieho iného predajcu |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 47.50 € | **48.00 €** | 5.6 % | **6.7 %** | 48.19 € | cena podľa najlacnejšieho iného predajcu |
| AB-COM LNB AB 01 M Quattro | 11.00 € | **11.50 €** | 8.8 % | **13.7 %** | 11.69 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice WS 9050 | 64.00 € | **64.50 €** | 5.6 % | **6.4 %** | 64.69 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 18.00 € | **18.50 €** | 7.7 % | **10.7 %** | 18.69 € | cena podľa najlacnejšieho iného predajcu |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 25.00 € | **25.50 €** | 8.5 % | **10.7 %** | 25.69 € | cena podľa najlacnejšieho iného predajcu |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 28.00 € | **28.50 €** | 27.2 % | **29.5 %** | 28.69 € | cena podľa najlacnejšieho iného predajcu |
| Štartér LOKITHOR J701HD, 207,2Wh, 4 000 A | 401.00 € | **401.50 €** | 32.3 % | **32.4 %** | 401.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.00 € | **23.50 €** | 33.9 % | **36.9 %** | 23.72 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica Onikuma G55 (čierna) (QWERTY) | 16.00 € | **16.50 €** | 5.2 % | **8.4 %** | 16.76 € | cena podľa najlacnejšieho iného predajcu |
| Budík analogový TechnoLine WT 757BK | 25.50 € | **26.00 €** | 6.0 % | **8.1 %** | 26.29 € | cena podľa najlacnejšieho iného predajcu |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 15.50 € | **16.00 €** | 6.1 % | **9.5 %** | 16.29 € | cena podľa najlacnejšieho iného predajcu |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 84.50 € | **85.00 €** | 14.5 % | **15.2 %** | 85.29 € | cena podľa najlacnejšieho iného predajcu |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 27.00 € | **27.50 €** | 10.5 % | **12.6 %** | 27.79 € | cena podľa najlacnejšieho iného predajcu |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 61.50 € | **62.00 €** | 5.1 % | **5.9 %** | 62.29 € | cena podľa najlacnejšieho iného predajcu |
| Kruger&Matz KM0127 brašna na rám kola | 11.50 € | **12.00 €** | 5.9 % | **10.5 %** | 12.29 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT202BT Inteligentný svorkový multimeter | 38.00 € | **38.50 €** | 7.2 % | **8.6 %** | 38.89 € | cena podľa najlacnejšieho iného predajcu |
| Náhradní vodní filtr GARNI WF 45T | 18.00 € | **18.50 €** | 8.2 % | **11.2 %** | 18.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 21.50 € | **22.00 €** | 8.6 % | **11.2 %** | 22.39 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 13.00 € | **13.50 €** | 12.4 % | **16.8 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální projekční TechnoLine WT 538 | 33.50 € | **34.00 €** | 10.5 % | **12.1 %** | 34.49 € | cena podľa najlacnejšieho iného predajcu |
| Skládací koloběžka NILS Extreme HM2009 šedá | 46.50 € | **47.00 €** | 6.1 % | **7.2 %** | 47.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 46.50 € | **47.00 €** | 34.4 % | **35.9 %** | 47.50 € | cena podľa najlacnejšieho iného predajcu |
| Torba Adventure Sunnylife OA5-B894-D do ACTION 5 PRO... | 18.50 € | **19.00 €** | 33.1 % | **36.7 %** | 19.50 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 114.50 € | **114.90 €** | 17.6 % | **18.0 %** | 114.91 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 169.50 € | **169.90 €** | 39.4 % | **39.7 %** | 169.92 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 134.50 € | **134.90 €** | 39.4 % | **39.8 %** | 134.92 € | cena podľa najlacnejšieho iného predajcu |
| Vodné chladenie pre procesor Darkflash DH360D (biele) | 93.50 € | **93.90 €** | 39.1 % | **39.7 %** | 93.92 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 73.50 € | **73.90 €** | 40.3 % | **41.1 %** | 73.92 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.50 € | **79.90 €** | 14.6 % | **15.2 %** | 79.99 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE ECT601FM | 136.50 € | **136.90 €** | 8.5 % | **8.8 %** | 136.99 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska IsEasy LI3-17 | 152.50 € | **152.90 €** | 30.6 % | **30.9 %** | 152.99 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 152.50 € | **152.90 €** | 19.3 % | **19.6 %** | 152.99 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 127.50 € | **127.90 €** | 17.0 % | **17.4 %** | 127.99 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42102SV | 80.50 € | **80.90 €** | 8.5 % | **9.0 %** | 81.00 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar JBL Bar 2.0 All-In-One (MK2) | 198.50 € | **198.90 €** | 8.2 % | **8.4 %** | 199.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.50 € | **1.90 €** | 16.1 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 7.70 € | **8.10 €** | 37.6 % | **44.7 %** | 8.12 € | cena podľa najlacnejšieho iného predajcu |
| Silikónové ochranné puzdro Puluz pre Insta360 Go Ult... | 5.40 € | **5.80 €** | 14.9 % | **23.4 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Smartring Colmi R03 19.8MM 10 (Złoty) | 31.50 € | **31.90 €** | 38.7 % | **40.5 %** | 31.92 € | cena podľa najlacnejšieho iného predajcu |
| D-LINK 10/100 8-Port Switch (DES-108) | 20.50 € | **20.90 €** | 12.1 % | **14.3 %** | 20.92 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice TechnoLine WS 9251 | 52.50 € | **52.90 €** | 5.9 % | **6.7 %** | 52.99 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 filtrov CPL+ND8+ND16 Sunnylife pre DJI Mini 3... | 19.50 € | **19.90 €** | 17.0 % | **19.4 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Videostativ Neewer LL55 z uhlíkových vlákien s olejo... | 631.50 € | **631.90 €** | 38.6 % | **38.7 %** | 631.95 € | cena podľa najlacnejšieho iného predajcu |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 335.50 € | **335.90 €** | 22.9 % | **23.0 %** | 335.95 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q200 | 332.50 € | **332.90 €** | 39.1 % | **39.2 %** | 332.98 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GS620C10S | 342.50 € | **342.90 €** | 5.5 % | **5.6 %** | 342.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.70 € | **9.90 €** | 34.6 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 7.80 € | **8.00 €** | 34.6 % | **38.1 %** | 8.01 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.70 €** | 33.9 % | **36.7 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Puzdro Freewell pre Iphone 16 Pro Max so 17 mm držiakom | 48.90 € | **49.00 €** | 29.9 % | **30.2 %** | 49.01 € | cena podľa najlacnejšieho iného predajcu |
| Etui Sunnylife dla NEO Motion Fly More Combo (073535) | 41.90 € | **42.00 €** | 39.2 % | **39.5 %** | 42.01 € | cena podľa najlacnejšieho iného predajcu |
| Batéria pre BOBOVR M2 Pro + nabíjacia stanica | 34.90 € | **35.00 €** | 40.2 % | **40.6 %** | 35.02 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS220 PRO POCKET 2 PRO AIRBANK – mini pumpa ... | 55.90 € | **56.00 €** | 36.5 % | **36.8 %** | 56.02 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Bluetooth KRUGER & MATZ KM0566  STREET X... | 39.90 € | **40.00 €** | 15.8 % | **16.1 %** | 40.03 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Filter64 na zníženie svetelného zneč... | 18.90 € | **19.00 €** | 22.0 % | **22.7 %** | 19.08 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.70 € | **9.80 €** | 34.6 % | **36.0 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 17.90 € | **18.00 €** | 34.5 % | **35.3 %** | 18.38 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný zdroj do stropných svetiel, 24W... | 5.80 € | **5.90 €** | 43.3 % | **45.8 %** | 5.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný zdroj do stropných svetiel, 12W... | 3.80 € | **3.90 €** | 41.7 % | **45.4 %** | 3.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.40 € | **2.50 €** | 44.5 % | **50.6 %** | 2.56 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 3000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.20 € | **4.30 €** | 50.4 % | **54.0 %** | 4.31 € | cena podľa najlacnejšieho iného predajcu |
| Solight napájací kábel pre lineárne osvetlenie, dĺžk... | 2.20 € | **2.30 €** | 44.2 % | **50.8 %** | 2.35 € | cena podľa najlacnejšieho iného predajcu |
| Roadstar TRA-2989 Přenosné vícepásmové r | 14.90 € | **15.00 €** | 11.9 % | **12.6 %** | 15.30 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EF167 | 13.90 € | **14.00 €** | 7.6 % | **8.4 %** | 14.42 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B70... | 104.90 € | **105.00 €** | 40.1 % | **40.2 %** | 105.03 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-CM5560-SV s piestovým systémom (s... | 223.90 € | **224.00 €** | 16.9 % | **17.0 %** | 224.12 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell ND pre OSMO 360 – balenie po 3... | 189.90 € | **190.00 €** | 32.1 % | **32.2 %** | 190.12 € | cena podľa najlacnejšieho iného predajcu |
| Niimbot K3W portable label printer (blue) | 73.90 € | **74.00 €** | 21.1 % | **21.3 %** | 74.21 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (296)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Xiaomi TV A Pro 75 2026 | 703.90 € | **671.90 €** | 10.0 % | **5.0 %** | 617.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| PS5 PlayStation®5 Console–1TB | 727.50 € | **698.90 €** | 10.0 % | **5.7 %** | 699.00 € | cena podľa najlacnejšieho iného predajcu |
| Koleso MOZA RS068 FSR V2 (PC) | 674.50 € | **647.00 €** | 14.3 % | **9.7 %** | 647.29 € | cena podľa najlacnejšieho iného predajcu |
| HP OmniBook 3 16-bu0304ncx (D9MH3EA) | 930.50 € | **904.50 €** | 10.0 % | **6.9 %** | 904.67 € | cena podľa najlacnejšieho iného predajcu |
| Samsung RB34C600DSA/EF | 470.90 € | **449.50 €** | 10.0 % | **5.0 %** | 399.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| GODOX CBA-TA0016 Skladacie pozadie | 59.50 € | **39.50 €** | 74.0 % | **15.5 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Gorenje GEC5C41SG | 402.90 € | **384.50 €** | 10.1 % | **5.1 %** | 354.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje GS643C90W | 394.90 € | **376.90 €** | 10.1 % | **5.1 %** | 343.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SONY PS-LX5BT Gramofon | 387.50 € | **369.90 €** | 10.1 % | **5.1 %** | 318.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BEKO RFSA240M43WN | 386.50 € | **368.90 €** | 10.1 % | **5.1 %** | 343.15 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko RFSA210K40WN | 344.50 € | **328.90 €** | 10.0 % | **5.0 %** | 266.82 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Akčná kamera SJCAM SJ20 | 178.00 € | **162.90 €** | 14.9 % | **5.2 %** | 150.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko RCSA270K40WN | 295.50 € | **281.90 €** | 10.1 % | **5.1 %** | 259.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Lenco Ls-500BK | 306.50 € | **292.90 €** | 10.0 % | **5.1 %** | 290.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Moza Racing MTLP AS009 Panel pre vzlet a pristátie (PC) | 154.50 € | **141.00 €** | 15.1 % | **5.1 %** | 135.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1280.00 € | **1268.00 €** | 9.0 % | **8.0 %** | 1268.19 € | cena podľa najlacnejšieho iného predajcu |
| Samsung A175 Galaxy A17 128GB Black | 247.50 € | **235.90 €** | 10.2 % | **5.0 %** | 158.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kávovar HiBREW H11 1450 W | 114.50 € | **103.00 €** | 30.7 % | **17.5 %** | 103.03 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Hurricane H9 | 238.50 € | **227.50 €** | 10.1 % | **5.0 %** | 156.94 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Digitálne nočné videnie FNIRSI NVS-20 so záznamom v ... | 66.50 € | **55.50 €** | 25.9 % | **5.1 %** | 48.08 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 338 | 583.00 € | **572.50 €** | 10.0 % | **8.0 %** | 572.54 € | cena podľa najlacnejšieho iného predajcu |
| SONY PS-LX3BT Gramofon | 248.50 € | **238.00 €** | 10.1 % | **5.4 %** | 238.40 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X50 Soundbar | 408.90 € | **398.90 €** | 11.2 % | **8.5 %** | 399.00 € | cena podľa najlacnejšieho iného predajcu |
| Filter CP Freewell Sherpa pre iPhone 13 / iPhone 14 | 59.50 € | **49.50 €** | 50.8 % | **25.4 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X70 Soundbar | 618.50 € | **608.90 €** | 16.1 % | **14.3 %** | 609.00 € | cena podľa najlacnejšieho iného predajcu |
| JBL Easy sing mic mini | 154.50 € | **144.90 €** | 22.0 % | **14.4 %** | 144.91 € | cena podľa najlacnejšieho iného predajcu |
| Redmi 17 4/128GB Black | 203.00 € | **193.90 €** | 10.0 % | **5.1 %** | 164.66 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 415.00 € | **406.00 €** | 12.5 % | **10.0 %** | 406.34 € | cena podľa najlacnejšieho iného predajcu |
| JBL PartyBox 330 | 540.90 € | **532.00 €** | 6.8 % | **5.0 %** | 532.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Bezdrôtový ovládač GameSir G7 Pro WC Wuchang Edition | 108.50 € | **100.00 €** | 29.7 % | **19.6 %** | 100.20 € | cena podľa najlacnejšieho iného predajcu |
| SAMSUNG Odyssey G40B (LS25BG400EUXEN) | 167.90 € | **160.00 €** | 10.2 % | **5.0 %** | 115.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický skúter NAVEE ST5 Max | 813.50 € | **806.00 €** | 15.0 % | **14.0 %** | 806.02 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Hurricane H7 | 158.90 € | **151.90 €** | 10.1 % | **5.2 %** | 115.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Stojany na činky nastavitelné REBEL ACTIVE RBA-2402 | 68.50 € | **61.50 €** | 17.9 % | **5.8 %** | 61.82 € | cena podľa najlacnejšieho iného predajcu |
| ScanPart Sada příslušenství pro iRobot R | 35.50 € | **29.00 €** | 31.1 % | **7.1 %** | 29.35 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor Arzopa A1 GAMUT 15,6" | 85.00 € | **78.50 €** | 15.0 % | **6.2 %** | 78.90 € | cena podľa najlacnejšieho iného predajcu |
| CANON SELPHY CP-1500 Pink | 147.90 € | **141.50 €** | 10.0 % | **5.2 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Philips TAK5500AL bezdrátová sluchátka | 60.90 € | **54.50 €** | 17.4 % | **5.0 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Lamax X9.2 | 130.50 € | **124.50 €** | 10.4 % | **5.3 %** | 95.68 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| MPPT solar panel adapter for DJI power stations | 71.50 € | **65.50 €** | 14.7 % | **5.1 %** | 56.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 124.50 € | **118.50 €** | 13.8 % | **8.3 %** | 118.88 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne stĺpikové osvetlenie Palermo, 5W... | 35.90 € | **30.00 €** | 61.9 % | **35.3 %** | 30.40 € | cena podľa najlacnejšieho iného predajcu |
| Ottocast CA400-S 4-in-1 Carplay/Android adapter (black) | 66.50 € | **60.90 €** | 15.3 % | **5.5 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Strong SRT32HH5553 | 122.50 € | **117.00 €** | 10.0 % | **5.1 %** | 117.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 29.00 € | **23.50 €** | 32.4 % | **7.3 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 63.00 € | **57.90 €** | 14.8 % | **5.5 %** | 55.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy ION Hurricane H5 Plus | 109.90 € | **104.90 €** | 10.3 % | **5.3 %** | 94.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Moza Racing modul osi Z AS003 | 97.50 € | **92.50 €** | 16.7 % | **10.7 %** | 92.67 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 33.00 € | **28.00 €** | 71.4 % | **45.5 %** | 28.36 € | cena podľa najlacnejšieho iného predajcu |
| JBL Flip 6 white | 101.90 € | **97.00 €** | 10.3 % | **5.0 %** | 77.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BEKO MGC 20100 W | 99.50 € | **94.90 €** | 10.5 % | **5.4 %** | 61.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK Archer BE3600 WiFi 7 Router | 95.50 € | **91.00 €** | 10.2 % | **5.0 %** | 83.48 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ariete Breakfast 437/00, tmavě šedá | 32.50 € | **28.00 €** | 24.3 % | **7.1 %** | 28.09 € | cena podľa najlacnejšieho iného predajcu |
| JBL Horizon3 Black | 125.90 € | **121.50 €** | 9.9 % | **6.0 %** | 121.89 € | cena podľa najlacnejšieho iného predajcu |
| JBL Horizon3 Grey | 125.90 € | **121.50 €** | 9.9 % | **6.0 %** | 121.89 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 826.00 € | **821.90 €** | 7.6 % | **7.1 %** | 821.97 € | cena podľa najlacnejšieho iného predajcu |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 770.00 € | **765.90 €** | 9.9 % | **9.4 %** | 765.99 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS2 mini electric pump | 48.00 € | **43.90 €** | 15.0 % | **5.2 %** | 41.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada radiacich páčok MOZA RACING RS094 | 52.00 € | **47.90 €** | 20.8 % | **11.3 %** | 47.98 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune Beam 2 bílá | 90.90 € | **86.90 €** | 10.0 % | **5.2 %** | 59.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Tune Beam 2 tyrkys | 90.90 € | **86.90 €** | 10.0 % | **5.2 %** | 59.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 300.50 € | **296.50 €** | 13.5 % | **12.0 %** | 296.70 € | cena podľa najlacnejšieho iného predajcu |
| TV mount 23-60" Perlesmith PSTVMC06 | 63.50 € | **59.50 €** | 51.6 % | **42.0 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO716BL | 84.90 € | **81.00 €** | 10.1 % | **5.1 %** | 76.48 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Grafický tablet Huion Kamvas 24 GS2401 | 487.90 € | **484.00 €** | 11.0 % | **10.1 %** | 484.17 € | cena podľa najlacnejšieho iného predajcu |
| Laica LAI BRK80A01 | 26.50 € | **22.90 €** | 34.2 % | **16.0 %** | 22.98 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo StrongVision Compact 4K | 73.50 € | **69.90 €** | 10.4 % | **5.0 %** | 61.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tesla AeroStar T700 | 82.50 € | **78.90 €** | 10.2 % | **5.4 %** | 74.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Strong LEAP-NOVA, 4K GOOGLE TV STICK | 77.50 € | **73.90 €** | 10.7 % | **5.5 %** | 73.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Koloběžka NILS Extreme HM208T bílá | 114.00 € | **110.50 €** | 8.3 % | **5.0 %** | 107.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Smartring Colmi R02 20.3MM 11 (Black) | 26.50 € | **23.00 €** | 37.2 % | **19.1 %** | 23.13 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 20.50 € | **17.00 €** | 33.0 % | **10.3 %** | 17.23 € | cena podľa najlacnejšieho iného predajcu |
| Tesla GSM-LTE zesil. sig. 900/1800 MHz | 181.50 € | **178.00 €** | 21.4 % | **19.0 %** | 178.29 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFA43BWBXC | 68.90 € | **65.50 €** | 10.6 % | **5.1 %** | 54.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vonkajšia vianočná LED reťaz Solight 1V102-M, 20 m, ... | 13.00 € | **9.60 €** | 80.7 % | **33.4 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V102-W, 20 m, ... | 13.00 € | **9.60 €** | 80.7 % | **33.4 %** | 9.70 € | cena podľa najlacnejšieho iného predajcu |
| EPSON T0715 Multipack, C13T07154012 | 64.50 € | **61.50 €** | 10.7 % | **5.6 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SONY WHCH720NB.CE7 černá | 68.90 € | **65.90 €** | 10.4 % | **5.6 %** | 62.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LCD displej KRUGER & MATZ KM2020 Android Auto Apple ... | 53.90 € | **50.90 €** | 11.6 % | **5.4 %** | 49.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Samsung VG-SCFC32TKBXC | 61.90 € | **58.90 €** | 10.5 % | **5.1 %** | 58.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Shoulder Bag Sunnylife for RS 4 | 27.50 € | **24.50 €** | 36.2 % | **21.4 %** | 24.58 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier Airpulse A80 2.0 (hnedé) | 469.00 € | **466.00 €** | 19.4 % | **18.6 %** | 466.21 € | cena podľa najlacnejšieho iného predajcu |
| AMICA SIO 655 BG | 180.50 € | **177.50 €** | 10.1 % | **8.3 %** | 177.72 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCircle XL s MgS FIXMC-XL-BK | 22.50 € | **19.50 €** | 29.3 % | **12.0 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| LG DSTWH | 71.00 € | **68.00 €** | 12.8 % | **8.0 %** | 68.41 € | cena podľa najlacnejšieho iného predajcu |
| MOZA RACING SRP2 Zadný držiak | 45.90 € | **43.00 €** | 25.8 % | **17.8 %** | 43.33 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Set Vědro Profi Compact + mop P | 52.50 € | **49.90 €** | 11.0 % | **5.5 %** | 42.88 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| SONY DVPSR760HB | 57.50 € | **54.90 €** | 10.3 % | **5.3 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vianočná LED reťaz Solight 1V05-WW, 50 m, teplá biel... | 20.50 € | **17.90 €** | 43.2 % | **25.0 %** | 17.91 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Toaster 157/04, bílý | 25.50 € | **22.90 €** | 23.3 % | **10.8 %** | 22.98 € | cena podľa najlacnejšieho iného predajcu |
| Solight lokátor na bicykel, Find My kompatibilný | 14.50 € | **11.90 €** | 36.9 % | **12.4 %** | 11.95 € | cena podľa najlacnejšieho iného predajcu |
| Sprchový stan Trizand 23492 | 24.50 € | **22.00 €** | 17.4 % | **5.4 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odšťavovač G21 Gracioso horizontal | 205.00 € | **202.50 €** | 14.6 % | **13.2 %** | 202.51 € | cena podľa najlacnejšieho iného predajcu |
| Sada 4 filtrov UV+CPL+ND4+ND8 Sunnylife pre DJI Mini... | 24.00 € | **21.50 €** | 32.7 % | **18.9 %** | 21.71 € | cena podľa najlacnejšieho iného predajcu |
| Set of 5 Filters Sunnylife ND 8/16/32/64/128 for DJI... | 23.00 € | **20.50 €** | 33.2 % | **18.7 %** | 20.71 € | cena podľa najlacnejšieho iného predajcu |
| Strong LEAP-UNA+, FHD GOOGLE TV STICK | 54.90 € | **52.50 €** | 10.6 % | **5.8 %** | 52.58 € | cena podľa najlacnejšieho iného predajcu |
| Ariete ART 205/01 | 45.90 € | **43.50 €** | 11.7 % | **5.9 %** | 43.76 € | cena podľa najlacnejšieho iného predajcu |
| Strieborná závesná LED vianočná hviezda Solight 1V29... | 8.90 € | **6.70 €** | 94.5 % | **46.4 %** | 6.80 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 48.90 € | **46.90 €** | 10.2 % | **5.7 %** | 21.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Lamax Clips1 ANC White | 44.00 € | **42.00 €** | 10.2 % | **5.2 %** | 23.96 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ASUS SDRW-08U7M-U SILVER | 40.50 € | **38.50 €** | 10.8 % | **5.3 %** | 24.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Asus SDRW-08U7M-U BLACK + 2× M-Disk | 38.50 € | **36.50 €** | 11.2 % | **5.5 %** | 24.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Lamax Sounder2 Play | 38.50 € | **36.50 €** | 10.8 % | **5.0 %** | 27.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kingston Canvas Select Plus/Micro 256GB | 48.50 € | **46.50 €** | 10.1 % | **5.6 %** | 38.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Leifheit Set Clean Twist Disc Mop Mobile | 41.90 € | **39.90 €** | 11.0 % | **5.7 %** | 36.04 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK RE505X AX1500 WiFi 6 Extender | 42.90 € | **40.90 €** | 11.0 % | **5.8 %** | 37.48 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL GO5 Black | 48.50 € | **46.50 €** | 10.3 % | **5.7 %** | 45.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Tune 530BT Black | 40.50 € | **38.50 €** | 11.1 % | **5.6 %** | 38.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Tune 530BT White | 40.50 € | **38.50 €** | 11.1 % | **5.6 %** | 38.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada 6 denných filtrov Freewell Standard pre DJI Flip | 25.50 € | **23.50 €** | 17.5 % | **8.3 %** | 23.75 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight LED Lightstrip Pro 2m | 41.00 € | **39.00 €** | 21.4 % | **15.5 %** | 39.39 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK RE305 AC1200 WiFi Range Extender | 37.90 € | **36.00 €** | 10.8 % | **5.2 %** | 29.47 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LEIFHEIT 51003 Vysavač okna+tyč 43cm+mop | 46.90 € | **45.00 €** | 10.4 % | **5.9 %** | 45.04 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 330.50 € | **328.90 €** | 12.1 % | **11.6 %** | 328.91 € | cena podľa najlacnejšieho iného predajcu |
| Nutribullet NBP003.W | 39.50 € | **37.90 €** | 10.2 % | **5.7 %** | 33.76 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TP-LINK RE315 AC1200 WiFi Range Extender | 36.50 € | **34.90 €** | 10.4 % | **5.5 %** | 33.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Acer Nitro KG240YP0BI | 59.50 € | **57.90 €** | 8.0 % | **5.1 %** | 57.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ardes 437B | 38.50 € | **36.90 €** | 10.6 % | **6.0 %** | 36.99 € | cena podľa najlacnejšieho iného predajcu |
| Lavazza Crema E Gusto 1000 g | 23.50 € | **22.00 €** | 12.3 % | **5.1 %** | 15.73 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 353.50 € | **352.00 €** | 35.8 % | **35.2 %** | 352.40 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 4R09BTTE | 64.90 € | **63.50 €** | 10.1 % | **7.7 %** | 63.90 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 10.00 € | **8.60 €** | 30.7 % | **12.4 %** | 8.67 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená LED vianočná guľa Solight 1V204, 10 LED, 2 ... | 4.40 € | **3.30 €** | 43.1 % | **7.3 %** | 1.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vákuovacie fólie G21 rola 20 x 600 cm 2 ks | 10.50 € | **9.40 €** | 17.6 % | **5.3 %** | 8.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 232.00 € | **230.90 €** | 9.2 % | **8.7 %** | 231.00 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Toaster 157/03, černý | 23.90 € | **22.90 €** | 11.3 % | **6.6 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANON CL-541 Color | 23.50 € | **22.50 €** | 11.5 % | **6.7 %** | 20.91 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| DOMO DO9176RK | 29.50 € | **28.50 €** | 10.5 % | **6.8 %** | 27.02 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| CANON PG-540BK Black | 18.90 € | **17.90 €** | 11.2 % | **5.3 %** | 16.57 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| DOMO DO9142EK | 22.90 € | **21.90 €** | 11.6 % | **6.7 %** | 20.97 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Lenovo IDEA TAB11 FOLIO CASE luna grey | 14.90 € | **13.90 €** | 12.8 % | **5.2 %** | 13.43 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Rapoo M300 Silent bezdrátová myš, modrá | 13.50 € | **12.50 €** | 14.2 % | **5.8 %** | 12.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 122.00 € | **121.00 €** | 15.5 % | **14.6 %** | 121.03 € | cena podľa najlacnejšieho iného predajcu |
| DDPAI N1 Dual Dash cam WiFi 1296p + Rear camera 1080p | 66.90 € | **65.90 €** | 14.1 % | **12.4 %** | 65.99 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 234.90 € | **233.90 €** | 24.8 % | **24.3 %** | 234.00 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 800 + AKU 55Ah /... | 274.00 € | **273.00 €** | 20.1 % | **19.6 %** | 273.10 € | cena podľa najlacnejšieho iného predajcu |
| JBL Boombox4 Black Přenosný reproduktor | 458.90 € | **457.90 €** | 6.8 % | **6.6 %** | 458.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT350 + 5 ventilátorov aR... | 69.90 € | **68.90 €** | 38.1 % | **36.1 %** | 69.00 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS950V s displejom (biel... | 106.90 € | **105.90 €** | 36.1 % | **34.8 %** | 106.00 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 261.90 € | **260.90 €** | 14.6 % | **14.1 %** | 261.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 404.90 € | **403.90 €** | 7.3 % | **7.1 %** | 404.00 € | cena podľa najlacnejšieho iného predajcu |
| Tlakový stroj HiBREW H7B Cob | 551.50 € | **550.50 €** | 10.8 % | **10.6 %** | 550.66 € | cena podľa najlacnejšieho iného predajcu |
| San Marco ESPRESSO BARISTA 1kg | 19.50 € | **18.50 €** | 12.5 % | **6.8 %** | 18.67 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1446.50 € | **1445.50 €** | 7.6 % | **7.6 %** | 1445.69 € | cena podľa najlacnejšieho iného predajcu |
| Filter na zníženie svetelného znečistenia Freewell O... | 18.50 € | **17.50 €** | 13.2 % | **7.1 %** | 17.71 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI SAG-55 PLUS inteligentná teplovzdušná pištoľ | 64.50 € | **63.50 €** | 9.3 % | **7.6 %** | 63.72 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Stěrka na dlažbu Classic s tele | 12.50 € | **11.50 €** | 14.3 % | **5.2 %** | 11.73 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na zvýšenie výkonu pre pedále CRP2 Moza Raci... | 22.00 € | **21.00 €** | 19.1 % | **13.7 %** | 21.25 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart IT Dancing Robot, grey ASR002 | 75.50 € | **74.50 €** | 14.8 % | **13.2 %** | 74.76 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart IT Dancing Robot, oran. ASR001 | 75.50 € | **74.50 €** | 14.8 % | **13.2 %** | 74.76 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 295.00 € | **294.00 €** | 10.3 % | **9.9 %** | 294.28 € | cena podľa najlacnejšieho iného predajcu |
| Čítacia lampa Yeelight Led Neck Book Light | 14.50 € | **13.50 €** | 45.9 % | **35.8 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 24.50 € | **23.50 €** | 15.9 % | **11.2 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny multimeter so svietidlom Habotest HT118C, ... | 31.50 € | **30.50 €** | 48.1 % | **43.4 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Vysielač / prijímač BlitzWolf BW-BL2, Bluetooth 5.0 | 14.50 € | **13.50 €** | 41.5 % | **31.8 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu |
| Statívový držiak Puluz s 20 cm LED krúžkom Vlogging ... | 12.50 € | **11.50 €** | 36.8 % | **25.8 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Fotopasca Camouflage SM4 Pro | 67.00 € | **66.00 €** | 8.3 % | **6.7 %** | 66.40 € | cena podľa najlacnejšieho iného predajcu |
| Vodotesné puzdro Puluz pre kameru Insta360 Ace Pro | 13.50 € | **12.50 €** | 26.4 % | **17.1 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 13.50 € | **12.50 €** | 46.3 % | **35.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| SONY WFC510B černá | 37.50 € | **36.50 €** | 10.7 % | **7.7 %** | 36.90 € | cena podľa najlacnejšieho iného predajcu |
| SONY WFC710N Black | 69.50 € | **68.50 €** | 12.3 % | **10.7 %** | 68.90 € | cena podľa najlacnejšieho iného predajcu |
| SONY WFC710N Blue | 69.50 € | **68.50 €** | 12.3 % | **10.7 %** | 68.90 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA Sinus Pro 2000 E 12V/230V ... | 250.00 € | **249.00 €** | 22.0 % | **21.5 %** | 249.40 € | cena podľa najlacnejšieho iného predajcu |
| Interaktívny robot Loona Premium | 563.50 € | **562.50 €** | 42.1 % | **41.8 %** | 562.90 € | cena podľa najlacnejšieho iného predajcu |
| Čelovka Superfire HE11 – 640 lm, 20W, 6 režimov, 100 m | 17.50 € | **16.50 €** | 34.5 % | **26.8 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| MERACH MR-2354B2 Stepper (Black) | 60.50 € | **59.50 €** | 21.5 % | **19.5 %** | 59.90 € | cena podľa najlacnejšieho iného predajcu |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 17.00 € | **16.00 €** | 24.9 % | **17.5 %** | 16.46 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR S3 PRO Battery Relief Strap for Meta Quest 3 ... | 72.00 € | **71.00 €** | 22.1 % | **20.4 %** | 71.48 € | cena podľa najlacnejšieho iného predajcu |
| Formula Wheel Rim Mod MOZA RACING ES RS032 | 44.00 € | **43.00 €** | 15.8 % | **13.2 %** | 43.48 € | cena podľa najlacnejšieho iného predajcu |
| TESLA TE-2800 PW venkovní anténa pro DVB-T2, 470-790... | 35.00 € | **34.00 €** | 19.2 % | **15.8 %** | 34.49 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 13 GEN 3 GS1333 | 250.90 € | **250.00 €** | 21.2 % | **20.8 %** | 250.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.30 € | **6.40 €** | 36.1 % | **19.3 %** | 6.45 € | cena podľa najlacnejšieho iného predajcu |
| Ufesa Daily PV1100C | 23.90 € | **23.00 €** | 11.7 % | **7.5 %** | 23.29 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 340.90 € | **340.00 €** | 7.1 % | **6.8 %** | 340.37 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný mini spínač WiFi Sonoff MINIR4 | 9.50 € | **8.80 €** | 14.4 % | **6.0 %** | 6.55 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 402.50 € | **401.90 €** | 7.4 % | **7.3 %** | 402.00 € | cena podľa najlacnejšieho iného predajcu |
| Lenovo IDEA TAB PRO FOLIO CASE šedé | 19.50 € | **18.90 €** | 10.6 % | **7.2 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune110 black | 11.50 € | **10.90 €** | 14.7 % | **8.7 %** | 7.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Starbucks® Blonde Espresso Roast 450 g | 15.50 € | **14.90 €** | 10.0 % | **5.8 %** | 11.76 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.70 € | **9.10 €** | 32.5 % | **24.3 %** | 9.20 € | cena podľa najlacnejšieho iného predajcu |
| Salente Icequeen-Wh | 20.00 € | **19.50 €** | 10.4 % | **7.6 %** | 18.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Salente Stripeglass-Rd | 16.00 € | **15.50 €** | 10.2 % | **6.8 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Paddleboard SUP REBEL ACTIVE RBA-4513 WINDSURFING  3... | 347.00 € | **346.50 €** | 14.4 % | **14.3 %** | 346.60 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot SCV400RD | 52.50 € | **52.00 €** | 10.0 % | **8.9 %** | 52.12 € | cena podľa najlacnejšieho iného predajcu |
| Tester USB 2w1 FNIRSI FNAC-28 USB-C USB-A | 16.00 € | **15.50 €** | 9.3 % | **5.9 %** | 15.64 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 25570-56/RH | 27.00 € | **26.50 €** | 14.7 % | **12.6 %** | 26.65 € | cena podľa najlacnejšieho iného predajcu |
| Maono PD100X RGB Microphone Black | 44.50 € | **44.00 €** | 40.0 % | **38.4 %** | 44.17 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčná detská váha Grownsy B12H | 29.00 € | **28.50 €** | 23.9 % | **21.8 %** | 28.71 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 19.50 € | **19.00 €** | 18.6 % | **15.5 %** | 19.22 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 194.00 € | **193.50 €** | 14.2 % | **13.9 %** | 193.74 € | cena podľa najlacnejšieho iného predajcu |
| Sklokeramická/elektrická varná doska IsEasy LT5-02 | 156.50 € | **156.00 €** | 12.0 % | **11.6 %** | 156.26 € | cena podľa najlacnejšieho iného predajcu |
| Stolové svorky pre základňu AY210 Moza Racing AS013 | 29.00 € | **28.50 €** | 18.5 % | **16.4 %** | 28.77 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálna montážna základňa Moza Racing Flight AS006 | 29.00 € | **28.50 €** | 18.5 % | **16.4 %** | 28.77 € | cena podľa najlacnejšieho iného predajcu |
| Vibrační plošina SKY SVP13 | 276.00 € | **275.50 €** | 7.9 % | **7.7 %** | 275.78 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 46.50 € | **46.00 €** | 10.6 % | **9.4 %** | 46.29 € | cena podľa najlacnejšieho iného predajcu |
| Multimeter Uni-T UT256 | 27.50 € | **27.00 €** | 12.9 % | **10.9 %** | 27.29 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT201R digitálny klešťový multimeter | 22.50 € | **22.00 €** | 14.0 % | **11.4 %** | 22.29 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT205E digitálny klešťový multimeter | 47.50 € | **47.00 €** | 9.6 % | **8.5 %** | 47.29 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 57.00 € | **56.50 €** | 9.9 % | **9.0 %** | 56.79 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT303C+ | 95.00 € | **94.50 €** | 6.0 % | **5.4 %** | 94.79 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 110.00 € | **109.50 €** | 6.2 % | **5.7 %** | 109.79 € | cena podľa najlacnejšieho iného predajcu |
| EMS posilovač svalů HMS ABS Master PRO Multiset | 47.00 € | **46.50 €** | 7.2 % | **6.1 %** | 46.79 € | cena podľa najlacnejšieho iného predajcu |
| Vaflovač TEESA TSA3224 | 26.00 € | **25.50 €** | 11.6 % | **9.5 %** | 25.79 € | cena podľa najlacnejšieho iného predajcu |
| Mascom Monoblok Twin MCM4T01HD Gold LNB 4,3st | 33.00 € | **32.50 €** | 18.6 % | **16.8 %** | 32.79 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 109.50 € | **109.00 €** | 7.8 % | **7.4 %** | 109.29 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 116.00 € | **115.50 €** | 6.3 % | **5.8 %** | 115.79 € | cena podľa najlacnejšieho iného predajcu |
| Kryt vrtule Sunnylife A3S-KC910 pre AIR 3S/AIR 3 | 11.50 € | **11.00 €** | 19.6 % | **14.4 %** | 11.33 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO458FR | 59.00 € | **58.50 €** | 10.0 % | **9.1 %** | 58.84 € | cena podľa najlacnejšieho iného predajcu |
| Kuchynský odsávač pár IsEasy TV1360D4-CC-I2 | 163.00 € | **162.50 €** | 40.6 % | **40.2 %** | 162.84 € | cena podľa najlacnejšieho iného predajcu |
| Letové pedále MOZA Racing AS019 | 346.00 € | **345.50 €** | 7.0 % | **6.9 %** | 345.85 € | cena podľa najlacnejšieho iného predajcu |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 12.00 € | **11.50 €** | 10.4 % | **5.8 %** | 11.86 € | cena podľa najlacnejšieho iného predajcu |
| Meradlo hrúbky povlaku Uni-T UT343A | 67.50 € | **67.00 €** | 6.5 % | **5.7 %** | 67.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42329PC | 113.00 € | **112.50 €** | 5.7 % | **5.2 %** | 112.89 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 35.00 € | **34.50 €** | 13.7 % | **12.1 %** | 34.89 € | cena podľa najlacnejšieho iného predajcu |
| Profesionálny digitálny multimeter UNI-T UT191E | 58.50 € | **58.00 €** | 9.8 % | **8.9 %** | 58.39 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 108.50 € | **108.00 €** | 12.8 % | **12.3 %** | 108.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 33.00 € | **32.50 €** | 7.5 % | **5.9 %** | 32.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 245.00 € | **244.50 €** | 14.7 % | **14.5 %** | 244.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 137.50 € | **137.00 €** | 14.7 % | **14.3 %** | 137.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny mikroohmmer Uni-T UT620C+ | 181.50 € | **181.00 €** | 7.3 % | **7.0 %** | 181.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 301.50 € | **301.00 €** | 6.3 % | **6.1 %** | 301.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000 | 93.50 € | **93.00 €** | 8.4 % | **7.8 %** | 93.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM40Mi | 27.50 € | **27.00 €** | 12.5 % | **10.4 %** | 27.39 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600 | 73.00 € | **72.50 €** | 13.5 % | **12.8 %** | 72.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 86.50 € | **86.00 €** | 14.4 % | **13.8 %** | 86.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti Uni-T UT332+ | 62.00 € | **61.50 €** | 13.9 % | **13.0 %** | 61.89 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 81.50 € | **81.00 €** | 13.2 % | **12.6 %** | 81.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 169.50 € | **169.00 €** | 14.5 % | **14.2 %** | 169.39 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 193.00 € | **192.50 €** | 14.7 % | **14.4 %** | 192.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 259.50 € | **259.00 €** | 14.8 % | **14.6 %** | 259.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 152.50 € | **152.00 €** | 14.5 % | **14.1 %** | 152.39 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 277.50 € | **277.00 €** | 7.9 % | **7.7 %** | 277.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Stěrka na okna XL 2v1 (40 cm) s | 16.50 € | **16.00 €** | 10.5 % | **7.2 %** | 16.39 € | cena podľa najlacnejšieho iného predajcu |
| HP ENVY 6520e AiO (714N9B) | 101.00 € | **100.50 €** | 8.1 % | **7.6 %** | 100.89 € | cena podľa najlacnejšieho iného predajcu |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 112.50 € | **112.00 €** | 10.3 % | **9.8 %** | 112.39 € | cena podľa najlacnejšieho iného predajcu |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 24.00 € | **23.50 €** | 13.2 % | **10.8 %** | 23.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool NoFrost WHK 22414 XBR8EA | 876.50 € | **876.00 €** | 9.7 % | **9.7 %** | 876.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 687.50 € | **687.00 €** | 6.0 % | **5.9 %** | 687.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 325.00 € | **324.50 €** | 9.2 % | **9.0 %** | 324.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 636.50 € | **636.00 €** | 6.1 % | **6.0 %** | 636.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 673.00 € | **672.50 €** | 8.8 % | **8.7 %** | 672.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 702.00 € | **701.50 €** | 9.6 % | **9.6 %** | 701.89 € | cena podľa najlacnejšieho iného predajcu |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 89.50 € | **89.00 €** | 14.2 % | **13.5 %** | 89.39 € | cena podľa najlacnejšieho iného predajcu |
| Ardes AR4B01B | 51.00 € | **50.50 €** | 22.9 % | **21.7 %** | 50.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Experience Graphite Black | 251.00 € | **250.50 €** | 16.9 % | **16.7 %** | 250.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Experience White | 251.00 € | **250.50 €** | 16.9 % | **16.7 %** | 250.90 € | cena podľa najlacnejšieho iného predajcu |
| Sequential Shifter Moza Racing SGP RS059 | 129.50 € | **129.00 €** | 10.4 % | **10.0 %** | 129.42 € | cena podľa najlacnejšieho iného predajcu |
| SALENTE ToastMax | 48.50 € | **48.00 €** | 13.4 % | **12.3 %** | 48.44 € | cena podľa najlacnejšieho iného predajcu |
| Carlinkit HD2CP-PRO bezdrôtový adaptér Carplay&Android | 36.50 € | **36.00 €** | 10.9 % | **9.4 %** | 36.48 € | cena podľa najlacnejšieho iného predajcu |
| Solight Dok multi stojan pre Dyson V12 | 83.50 € | **83.00 €** | 27.0 % | **26.2 %** | 83.48 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 83.50 € | **83.00 €** | 43.5 % | **42.6 %** | 83.48 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Blender 576/03 černý | 37.50 € | **37.00 €** | 12.7 % | **11.2 %** | 37.49 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Reproduktor pro MagSafe ABSMB01 | 16.50 € | **16.00 €** | 22.5 % | **18.8 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu |
| Držiak s popruhom Sunnylife pre ovládač DJI RC / RC ... | 20.50 € | **20.00 €** | 21.9 % | **18.9 %** | 20.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálne hodiny s bluetooth synchronizáciou | 13.50 € | **13.00 €** | 37.5 % | **32.4 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR D3 charging station for Meta Quest 3 | 65.50 € | **65.00 €** | 29.5 % | **28.5 %** | 65.50 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 166.90 € | **166.50 €** | 15.9 % | **15.6 %** | 166.64 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO252SV | 110.90 € | **110.50 €** | 10.2 % | **9.8 %** | 110.79 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 94.90 € | **94.50 €** | 21331.8 % | **21241.5 %** | 94.89 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO228SV | 120.90 € | **120.50 €** | 9.1 % | **8.8 %** | 120.90 € | cena podľa najlacnejšieho iného predajcu |
| TP-LINK Archer T2U Nano WiFi Adaptér | 10.90 € | **10.50 €** | 11.3 % | **7.2 %** | 8.07 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.90 € | **9.50 €** | 24.8 % | **19.7 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 15.90 € | **15.50 €** | 9.8 % | **7.1 %** | 15.69 € | cena podľa najlacnejšieho iného predajcu |
| Držák projektoru Cabletech UCH0148 univerzální | 14.90 € | **14.50 €** | 18.0 % | **14.8 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| D-LINK 8-Port Gigabit Switch (DGS-108) | 21.90 € | **21.50 €** | 11.7 % | **9.7 %** | 21.69 € | cena podľa najlacnejšieho iného predajcu |
| Filter Freewell Osmo Pocket 4P ND16 ND/PL | 18.90 € | **18.50 €** | 9.0 % | **6.7 %** | 18.71 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit 2AIR | 32.90 € | **32.50 €** | 13.8 % | **12.4 %** | 32.79 € | cena podľa najlacnejšieho iného predajcu |
| Infračervený teplomer Uni-T UT301D+ | 53.90 € | **53.50 €** | 12.7 % | **11.8 %** | 53.79 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT320T 2-v-1 teplomer | 34.90 € | **34.50 €** | 13.4 % | **12.1 %** | 34.79 € | cena podľa najlacnejšieho iného predajcu |
| COLMI G06 Inteligentné okuliare Čierne | 39.90 € | **39.50 €** | 22.8 % | **21.6 %** | 39.84 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX ZE064 | 29.90 € | **29.50 €** | 11.1 % | **9.6 %** | 29.85 € | cena podľa najlacnejšieho iného predajcu |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 28.90 € | **28.50 €** | 13.8 % | **12.2 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| CPL FREEWELL filter pre DJI Mavic 4 Pro | 29.90 € | **29.50 €** | 27.8 % | **26.1 %** | 29.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.00 € | **9.70 €** | 15.8 % | **12.3 %** | 9.77 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.00 € | **9.70 €** | 9.4 % | **6.1 %** | 9.77 € | cena podľa najlacnejšieho iného predajcu |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.00 € | **9.70 €** | 33.5 % | **29.5 %** | 9.77 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 6.60 € | **6.40 €** | 12.7 % | **9.3 %** | 6.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight detektor dymu s WIFI pripojením | 18.00 € | **17.90 €** | 37.4 % | **36.6 %** | 17.91 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 20Ah XTREME bezúdržbový akumu... | 32.00 € | **31.90 €** | 6.8 % | **6.5 %** | 31.91 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT210B Mini digitálny klešťový multimeter | 22.00 € | **21.90 €** | 7.4 % | **6.9 %** | 21.99 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 24.00 € | **23.90 €** | 10.2 % | **9.7 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 24.00 € | **23.90 €** | 10.2 % | **9.7 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Anténní zesilovač EVERCON AM-838 5G | 23.00 € | **22.90 €** | 30.8 % | **30.2 %** | 22.99 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia vianočná LED reťaz Solight 1V110-M, 5 m, v... | 5.10 € | **5.00 €** | 26.4 % | **23.9 %** | 5.09 € | cena podľa najlacnejšieho iného predajcu |
| Ardes 449TI | 16.00 € | **15.90 €** | 7.2 % | **6.6 %** | 15.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.80 € | **4.70 €** | 31.8 % | **29.1 %** | 4.79 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.80 € | **4.70 €** | 13.8 % | **11.4 %** | 4.80 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant PXN-V10 (PC / PS3 / PS4 / XBOX ONE / SW... | 213.00 € | **212.90 €** | 19.5 % | **19.5 %** | 212.93 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant PXN-V900 Gen2 | 93.00 € | **92.90 €** | 7.3 % | **7.2 %** | 92.95 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, strieborná... | 213.00 € | **212.90 €** | 37.5 % | **37.4 %** | 212.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 213.00 € | **212.90 €** | 37.8 % | **37.7 %** | 212.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 7, zlatá) | 213.00 € | **212.90 €** | 37.5 % | **37.4 %** | 212.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 9, strieborná ... | 213.00 € | **212.90 €** | 37.5 % | **37.4 %** | 212.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 9, zlatá) | 213.00 € | **212.90 €** | 37.5 % | **37.4 %** | 212.96 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 213.00 € | **212.90 €** | 37.5 % | **37.4 %** | 212.96 € | cena podľa najlacnejšieho iného predajcu |
| Salente DigiChef+ kuchyňský robot | 124.00 € | **123.90 €** | 6.5 % | **6.4 %** | 123.99 € | cena podľa najlacnejšieho iného predajcu |

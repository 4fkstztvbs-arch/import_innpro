# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-02

Vstup: `premiumstore-sk_2026-10-02_13-49.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7156**
- Návrh **zvýšiť** cenu: **50** produktov
- Návrh **znížiť** cenu: **210** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6896** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **31**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **814**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (50)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Batéria pre zavážaciu loďku Flytec V030, 20 000 mAh | 44.50 € | **250.50 €** | 14.5 % | **544.5 %** | 250.58 € | cena podľa najlacnejšieho iného predajcu |
| Detektor kovov GARRETT Ace Apex 8,5 x 11 | 445.50 € | **566.90 €** | 15.1 % | **46.4 %** | 567.00 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-BL modrý, ... | 265.50 € | **285.50 €** | 10.0 % | **18.3 %** | 285.87 € | cena podľa najlacnejšieho iného predajcu |
| Kovové ochranné puzdro Telesin pre DJI Osmo Action 6 | 22.90 € | **33.50 €** | 15.9 % | **69.5 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DN853BE0 | 54.00 € | **61.50 €** | 10.1 % | **25.4 %** | 61.90 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EWS6526WC | 325.50 € | **330.00 €** | 6.5 % | **8.0 %** | 330.10 € | cena podľa najlacnejšieho iného predajcu |
| Beko B3WFU4841MCC | 427.90 € | **432.00 €** | 6.5 % | **7.5 %** | 432.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 116.90 € | **121.00 €** | 15.0 % | **19.0 %** | 121.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 42.00 € | **46.00 €** | 18.2 % | **29.5 %** | 46.50 € | cena podľa najlacnejšieho iného predajcu |
| Hračka/laser pre zvieratá Rojeco | 15.50 € | **19.00 €** | 14.9 % | **40.8 %** | 19.09 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco interactive laser cat toy | 15.50 € | **19.00 €** | 15.3 % | **41.3 %** | 19.09 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Telesin CPL/ND8/ND16/ND32 pre DJI Osmo ... | 27.00 € | **30.50 €** | 14.1 % | **28.9 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **48.50 €** | 15.5 % | **23.1 %** | 48.80 € | cena podľa najlacnejšieho iného predajcu |
| Amica TFB 128 TX | 279.50 € | **282.00 €** | 6.4 % | **7.4 %** | 282.19 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Accesories | 21.00 € | **23.50 €** | 16.9 % | **30.8 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá Edifier X5 Pro V25 TWS (čierne) - nové 2025 | 32.50 € | **35.00 €** | 14.3 % | **23.1 %** | 35.29 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Telesin CPL/VND8/UV pre DJI Osmo Action... | 27.50 € | **30.00 €** | 15.0 % | **25.5 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight WIFI zásuvka s meraním spotreby | 10.00 € | **12.00 €** | 13.9 % | **36.6 %** | 12.02 € | cena podľa najlacnejšieho iného predajcu |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 13.50 € | **15.50 €** | 18.8 % | **36.4 %** | 15.55 € | cena podľa najlacnejšieho iného predajcu |
| FIXED puzdro Xiaomi R Pad 2 FIXTOT-1199 | 18.90 € | **20.50 €** | 45.0 % | **57.2 %** | 20.84 € | cena podľa najlacnejšieho iného predajcu |
| Petkit Sítko na stelivo | 12.90 € | **14.50 €** | 21.5 % | **36.6 %** | 14.74 € | cena podľa najlacnejšieho iného predajcu |
| Petkit Sítko na stelivo | 12.90 € | **14.50 €** | 21.5 % | **36.6 %** | 14.74 € | cena podľa najlacnejšieho iného predajcu |
| Fixed USB-C/Lightning FIXDLS-CL2-WH | 18.50 € | **20.00 €** | 7.6 % | **16.3 %** | 20.02 € | cena podľa najlacnejšieho iného predajcu |
| Amica DRP 6412 DW | 173.00 € | **174.50 €** | 9.2 % | **10.2 %** | 174.90 € | cena podľa najlacnejšieho iného predajcu |
| Termostatická hlavica MOES TRV 801 s Wi-Fi | 32.90 € | **34.00 €** | 5.9 % | **9.5 %** | 34.48 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 20.00 € | **21.00 €** | 13.9 % | **19.6 %** | 21.13 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 180 Solid sušiak na bielizeň, čierny | 36.50 € | **37.50 €** | 6.2 % | **9.1 %** | 37.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 46.50 € | **47.50 €** | 6.2 % | **8.4 %** | 47.89 € | cena podľa najlacnejšieho iného predajcu |
| RGB Led Light Stick PULUZ 30cm | 17.50 € | **18.50 €** | 20.5 % | **27.4 %** | 18.90 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 24.00 € | **25.00 €** | 13.6 % | **18.3 %** | 25.49 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 24.00 € | **25.00 €** | 13.6 % | **18.3 %** | 25.49 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-6010 Přenosné rádio černé | 20.00 € | **20.90 €** | 9.4 % | **14.3 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na živé vysielanie Puluz držiak na statív + ... | 17.00 € | **17.90 €** | 8.5 % | **14.2 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| LENOVO IDEA TAB PRO (ZAE40120CZ) | 373.90 € | **374.50 €** | 5.1 % | **5.2 %** | 374.81 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 18.00 € | **18.50 €** | 26.3 % | **29.8 %** | 18.52 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 na pitie, 500 ml, khaki zelená | 14.00 € | **14.50 €** | 11.9 % | **15.9 %** | 14.59 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 na pitie, 500 ml, oceľovo šedá | 14.00 € | **14.50 €** | 11.9 % | **15.9 %** | 14.59 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1439.00 € | **1439.50 €** | 7.1 % | **7.1 %** | 1439.60 € | cena podľa najlacnejšieho iného predajcu |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 290.50 € | **291.00 €** | 5.9 % | **6.1 %** | 291.17 € | cena podľa najlacnejšieho iného predajcu |
| Termohrnček G21 FlowCup 1200 ml – eukalyptovo zelený | 20.00 € | **20.50 €** | 13.9 % | **16.8 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 20.00 € | **20.50 €** | 13.9 % | **16.8 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Termohrnček G21 FlowCup 1200 ml – pieskovo béžový | 20.00 € | **20.50 €** | 13.9 % | **16.8 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| Colmi P71 Smartwatch (Blue) | 18.00 € | **18.50 €** | 12.6 % | **15.7 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu |
| Colmi P71 Smartwatch (Gold) | 18.00 € | **18.50 €** | 14.1 % | **17.2 %** | 18.79 € | cena podľa najlacnejšieho iného predajcu |
| Termoska G21 nerezová 1200 ml, čierno-sivá | 24.50 € | **25.00 €** | 14.3 % | **16.6 %** | 25.34 € | cena podľa najlacnejšieho iného predajcu |
| Dymová nádoba xTool SafetyPro™ AP2 Max | 2501.50 € | **2502.00 €** | 13.8 % | **13.8 %** | 2502.43 € | cena podľa najlacnejšieho iného predajcu |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 73.50 € | **73.90 €** | 28.6 % | **29.3 %** | 73.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.70 €** | 33.9 % | **36.7 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 16.90 € | **17.00 €** | 14.1 % | **14.8 %** | 17.40 € | cena podľa najlacnejšieho iného predajcu |
| Router GL.iNet Slate 7 | 201.90 € | **202.00 €** | 16.1 % | **16.1 %** | 202.25 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (210)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Gorenje RK14C2W4 | 346.00 € | **294.50 €** | 40.6 % | **19.6 %** | 294.59 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set TP-Link Tapo HB410 2x Tapo C645D + Tapo... | 624.50 € | **597.00 €** | 32.4 % | **26.6 %** | 597.45 € | cena podľa najlacnejšieho iného predajcu |
| Beko B5T68243WCSHBC | 493.00 € | **467.00 €** | 26.3 % | **19.7 %** | 467.10 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač MOVA K30 Lite | 229.90 € | **209.90 €** | 15.0 % | **5.0 %** | 177.52 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gorenje DE69CS | 550.00 € | **535.50 €** | 18.7 % | **15.6 %** | 535.59 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace 8000mAh 14.8V 100C 4S2P Lipo Battery Pack | 99.00 € | **86.00 €** | 24.2 % | **7.8 %** | 86.07 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 8500mAh 14.8V 60C 4S1P Lipo Battery ... | 116.00 € | **103.50 €** | 37.2 % | **22.4 %** | 103.69 € | cena podľa najlacnejšieho iného predajcu |
| Candy GD 17SSB7-S | 298.90 € | **287.00 €** | 12.6 % | **8.1 %** | 287.10 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WOI118PT2SSMA | 767.50 € | **757.90 €** | 7.4 % | **6.0 %** | 758.00 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux ENA7CE19S | 783.00 € | **773.50 €** | 6.4 % | **5.1 %** | 691.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Štartér LOKITHOR J701HD, 207,2Wh, 4 000 A | 352.00 € | **343.50 €** | 24.1 % | **21.1 %** | 343.60 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Air Board M Black Plus NF | 71.00 € | **62.50 €** | 25.9 % | **10.8 %** | 62.79 € | cena podľa najlacnejšieho iného predajcu |
| JBL Charge 5 white | 146.90 € | **138.50 €** | 11.7 % | **5.3 %** | 116.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Charge 5 teal | 146.90 € | **138.50 €** | 11.7 % | **5.3 %** | 116.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Electrolux ENA7CE18S1 | 716.90 € | **708.90 €** | 6.2 % | **5.0 %** | 683.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL PartyBox 330W | 540.90 € | **532.90 €** | 6.6 % | **5.0 %** | 532.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WHIRLPOOL TDLRB 65242BS EU/N | 366.00 € | **358.00 €** | 7.6 % | **5.2 %** | 358.20 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK620AAXL4 | 616.50 € | **608.50 €** | 7.3 % | **5.9 %** | 608.90 € | cena podľa najlacnejšieho iného predajcu |
| JBL Partybox Stage 320 | 429.50 € | **422.00 €** | 11.3 % | **9.4 %** | 422.10 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING Porsche MISSION R | 1385.00 € | **1377.50 €** | 11.8 % | **11.2 %** | 1377.90 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 5000mAh 11.1V 60C 3S1P Lipo With XT6... | 61.90 € | **55.00 €** | 35.1 % | **20.1 %** | 55.28 € | cena podľa najlacnejšieho iného predajcu |
| JBL Live Flex blue | 113.50 € | **106.90 €** | 11.8 % | **5.3 %** | 71.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Live Flex rose | 113.50 € | **106.90 €** | 11.8 % | **5.3 %** | 71.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Beko BDIN38646D | 495.90 € | **489.50 €** | 8.4 % | **7.0 %** | 489.70 € | cena podľa najlacnejšieho iného predajcu |
| Beko BMTD37146W | 382.90 € | **377.00 €** | 7.7 % | **6.0 %** | 377.10 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-S s lítiovou batériou | 174.00 € | **168.50 €** | 48.8 % | **44.1 %** | 168.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26280-56/RH Multi Raclette | 55.00 € | **50.00 €** | 15.6 % | **5.1 %** | 30.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gens ace G-Tech 8000mAh 11.1V 100C 3S1P Lipo Battery... | 65.50 € | **60.50 €** | 23.9 % | **14.4 %** | 60.83 € | cena podľa najlacnejšieho iného predajcu |
| Hlavná kefa MOVA pre E30 Ultra | 34.00 € | **29.00 €** | 44.6 % | **23.3 %** | 29.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 33.50 € | **28.50 €** | 37.7 % | **17.1 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Ultimate White | 274.90 € | **270.00 €** | 18.2 % | **16.1 %** | 270.22 € | cena podľa najlacnejšieho iného predajcu |
| LiPo Gens ace G-Tech 4000mAh 2S2P 7,4V 60C batéria | 26.00 € | **21.50 €** | 40.4 % | **16.1 %** | 21.75 € | cena podľa najlacnejšieho iného predajcu |
| Concept IDV5160wh | 354.00 € | **349.50 €** | 8.3 % | **6.9 %** | 349.80 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MGC20130BFB | 80.50 € | **76.00 €** | 12.3 % | **6.1 %** | 76.41 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Max Pump 3 (oranžová) | 47.90 € | **43.50 €** | 24.6 % | **13.1 %** | 43.69 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Max Pump 3 (čierna) | 47.90 € | **43.50 €** | 24.6 % | **13.1 %** | 43.69 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa Flextail Max Pump 3 (biela) | 47.90 € | **43.50 €** | 24.6 % | **13.1 %** | 43.69 € | cena podľa najlacnejšieho iného predajcu |
| Samsung Crystal UHD UE43U8072H | 339.90 € | **335.50 €** | 6.5 % | **5.1 %** | 264.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Party reproduktor JBL PartyBox 130 | 359.90 € | **355.50 €** | 6.4 % | **5.1 %** | 336.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vrecko na prach do vysávača MOVA Z50 Ultra 4L [3 ks]. | 11.50 € | **7.30 €** | 67.6 % | **6.4 %** | 7.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Lenovo Idea Tab Plus 8/256 GB ZAG70118CZ | 325.90 € | **321.90 €** | 6.4 % | **5.1 %** | 266.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| EPSON EcoTank L5316 | 308.50 € | **304.50 €** | 6.5 % | **5.1 %** | 265.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Múdra zásuvka TP-Link Tapo P110 regulácia 230V cez I... | 18.90 € | **15.00 €** | 33.0 % | **5.6 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Múdra žiarovka TP-Link Tapo L510E(2-pack) E27, 8,7W,... | 19.90 € | **16.00 €** | 30.9 % | **5.2 %** | 14.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ETA Aquabelo 1264 90000, černý/bílý | 45.50 € | **41.90 €** | 15.1 % | **6.0 %** | 40.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Redmi Pad 2 4/256 GB zelená (79232) | 250.50 € | **246.90 €** | 6.5 % | **5.0 %** | 195.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Tefal FV6872 | 67.00 € | **63.50 €** | 11.5 % | **5.7 %** | 61.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Amica SHM 51071 W | 250.00 € | **246.90 €** | 9.3 % | **8.0 %** | 247.00 € | cena podľa najlacnejšieho iného predajcu |
| Jóga válec Dharma REBEL ACTIVE RBA-3062-PU | 14.90 € | **11.90 €** | 34.7 % | **7.6 %** | 11.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gens ace G-Tech Soaring 2200mAh 11.1V 30C 3S1P Lipo ... | 20.00 € | **17.00 €** | 26.5 % | **7.6 %** | 17.25 € | cena podľa najlacnejšieho iného predajcu |
| Tefal SV4111E0 | 85.00 € | **82.00 €** | 10.3 % | **6.4 %** | 82.32 € | cena podľa najlacnejšieho iného predajcu |
| EPSON EcoTank L1270 | 183.50 € | **181.00 €** | 6.5 % | **5.0 %** | 154.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Gens ace G-Tech Soaring 1300mAh 11.1V 30C 3S1P Lipo ... | 15.00 € | **12.50 €** | 26.8 % | **5.6 %** | 12.75 € | cena podľa najlacnejšieho iného predajcu |
| Herné slúchadlá ONIKUMA GT888 (čierne) | 29.50 € | **27.00 €** | 35.5 % | **24.0 %** | 27.33 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C300 so senzorom... | 24.00 € | **21.50 €** | 22.9 % | **10.1 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.00 € | **15.50 €** | 34.1 % | **15.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2700mAh 11.1V 30C 3S1P LiPo ... | 28.00 € | **25.90 €** | 30.7 % | **20.9 %** | 25.91 € | cena podľa najlacnejšieho iného predajcu |
| Kruhový blesk Neewer RF1-C | 132.00 € | **129.90 €** | 37.8 % | **35.6 %** | 130.00 € | cena podľa najlacnejšieho iného predajcu |
| Meteorologická stanice TechniSat IMETEO 400 | 31.50 € | **29.50 €** | 13.8 % | **6.5 %** | 22.77 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Volant MOZA RACING pre Lamborghini Revuelto | 428.50 € | **426.50 €** | 14.3 % | **13.8 %** | 426.59 € | cena podľa najlacnejšieho iného predajcu |
| Graef SKS 10002 | 146.90 € | **144.90 €** | 30.0 % | **28.2 %** | 145.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal XF652038 | 154.90 € | **152.90 €** | 10.3 % | **8.9 %** | 153.00 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech Soaring 2200mAh 14.8V 30C 4S1P Lipo ... | 26.00 € | **24.00 €** | 20.9 % | **11.6 %** | 24.16 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer kuchyňský robot ZKR2010 | 176.00 € | **174.00 €** | 9.8 % | **8.5 %** | 174.20 € | cena podľa najlacnejšieho iného predajcu |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 16.00 € | **14.00 €** | 31.9 % | **15.4 %** | 14.37 € | cena podľa najlacnejšieho iného predajcu |
| Remoska D52F/10 4l Dua Glass | 135.00 € | **133.00 €** | 10.0 % | **8.4 %** | 133.40 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RO6164EA | 142.50 € | **140.50 €** | 9.8 % | **8.3 %** | 140.90 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX LHR3233CK | 153.50 € | **151.90 €** | 6.4 % | **5.3 %** | 139.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Live Buds 3 Purple | 137.50 € | **135.90 €** | 6.5 % | **5.3 %** | 123.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Live Buds 3 Blue | 137.50 € | **135.90 €** | 6.5 % | **5.3 %** | 123.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| JBL Live Buds 3 Silver | 137.50 € | **135.90 €** | 6.5 % | **5.3 %** | 123.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Girmi IM4701 | 142.50 € | **140.90 €** | 10.2 % | **8.9 %** | 141.00 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DT2020E1 | 38.00 € | **36.50 €** | 16.1 % | **11.5 %** | 36.58 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO252SV | 105.00 € | **103.50 €** | 11.3 % | **9.7 %** | 103.80 € | cena podľa najlacnejšieho iného predajcu |
| D-LINK AX9U | 19.00 € | **17.50 €** | 21.2 % | **11.7 %** | 17.88 € | cena podľa najlacnejšieho iného predajcu |
| Lamax Clips1 White | 25.90 € | **24.50 €** | 12.5 % | **6.4 %** | 24.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 19.90 € | **18.50 €** | 15.4 % | **7.3 %** | 18.88 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér HMS Premium ZW1600 | 663.90 € | **662.90 €** | 119845.8 % | **119665.1 %** | 663.00 € | cena podľa najlacnejšieho iného predajcu |
| Balanční podložka REBEL ACTIVE RBA-3104-46 | 28.00 € | **27.00 €** | 26.5 % | **22.0 %** | 27.29 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR D3 charging station for Meta Quest 3 | 65.50 € | **64.50 €** | 35.7 % | **33.7 %** | 64.81 € | cena podľa najlacnejšieho iného predajcu |
| Medicinbal REBEL ACTIVE RBA-3108-4 Slam Ball 23cm 4kg | 13.50 € | **12.50 €** | 49.1 % | **38.1 %** | 12.89 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV6870E0 | 65.50 € | **64.50 €** | 13.7 % | **12.0 %** | 64.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 158.90 € | **158.00 €** | 40.1 % | **39.3 %** | 158.20 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje SVC180FW | 93.90 € | **93.00 €** | 10.2 % | **9.2 %** | 93.49 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHB6000 | 38.90 € | **38.00 €** | 15.5 % | **12.9 %** | 38.50 € | cena podľa najlacnejšieho iného predajcu |
| TEFAL KO 250830 | 34.50 € | **33.90 €** | 7.8 % | **6.0 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Banquet Termoska s pum.CUL.1,9l černá | 20.50 € | **19.90 €** | 8.7 % | **5.5 %** | 18.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 55.50 € | **55.00 €** | 6.1 % | **5.1 %** | 40.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| TEFAL XA 800512 | 17.00 € | **16.50 €** | 8.2 % | **5.0 %** | 16.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| BoboVR G3 Grip Cover – návleky na rukoväte pre VR | 20.00 € | **19.50 €** | 35.1 % | **31.7 %** | 19.56 € | cena podľa najlacnejšieho iného predajcu |
| Kruger & Matz KM1303 | 17.00 € | **16.50 €** | 13.1 % | **9.8 %** | 16.59 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2016201 | 36.50 € | **36.00 €** | 16.1 % | **14.6 %** | 36.10 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO7059S | 35.00 € | **34.50 €** | 18.8 % | **17.1 %** | 34.60 € | cena podľa najlacnejšieho iného predajcu |
| IMOU S800 PRO palubná kamera, 4K | 105.50 € | **105.00 €** | 12.7 % | **12.2 %** | 105.19 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHM2459S | 39.50 € | **39.00 €** | 15.5 % | **14.0 %** | 39.20 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Powerbanka 30 000 FIXZEN2-30-BK | 31.50 € | **31.00 €** | 12.0 % | **10.2 %** | 31.20 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 296.50 € | **296.00 €** | 10.9 % | **10.7 %** | 296.23 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE GT5 Max | 564.50 € | **564.00 €** | 6.0 % | **5.9 %** | 564.25 € | cena podľa najlacnejšieho iného predajcu |
| Interaktívny robot Loona Premium | 465.00 € | **464.50 €** | 18.0 % | **17.8 %** | 464.76 € | cena podľa najlacnejšieho iného predajcu |
| JBL CHARGEES3 | 109.00 € | **108.50 €** | 6.1 % | **5.6 %** | 108.79 € | cena podľa najlacnejšieho iného predajcu |
| Mascom Monoblok LNB MC M4-S01 UHD | 13.00 € | **12.50 €** | 22.6 % | **17.9 %** | 12.79 € | cena podľa najlacnejšieho iného predajcu |
| Sada stavebních vozidel s příslušenstvím 26578 | 24.00 € | **23.50 €** | 19.6 % | **17.1 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| Powerton chytrý prsten Black velikost 10 | 33.00 € | **32.50 €** | 11.7 % | **10.0 %** | 32.80 € | cena podľa najlacnejšieho iného predajcu |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 195.00 € | **194.50 €** | 8.3 % | **8.0 %** | 194.80 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu PXN VD10 (PC Windows) | 319.00 € | **318.50 €** | 12.6 % | **12.4 %** | 318.85 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 212.00 € | **211.50 €** | 36.9 % | **36.5 %** | 211.87 € | cena podľa najlacnejšieho iného predajcu |
| Súprava laserového gravírovacieho stroja xTool F2 Ul... | 5760.50 € | **5760.00 €** | 8.0 % | **8.0 %** | 5760.38 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, strieborná... | 177.50 € | **177.00 €** | 14.6 % | **14.3 %** | 177.38 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 344.00 € | **343.50 €** | 20.1 % | **19.9 %** | 343.89 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Struhadlo 4 v 1 COMFORTLINE | 13.50 € | **13.00 €** | 24.4 % | **19.8 %** | 13.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42329PC | 114.50 € | **114.00 €** | 8.5 % | **8.0 %** | 114.39 € | cena podľa najlacnejšieho iného predajcu |
| Domo DO42327PC | 99.00 € | **98.50 €** | 7.2 % | **6.7 %** | 98.89 € | cena podľa najlacnejšieho iného predajcu |
| FNIRSI FNB48P BT Tester USB portov s Bluetooth | 36.50 € | **36.00 €** | 12.8 % | **11.2 %** | 36.39 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 104.50 € | **104.00 €** | 8.6 % | **8.1 %** | 104.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT216A digitálny klešťový multimeter | 50.50 € | **50.00 €** | 6.9 % | **5.8 %** | 50.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny merací prístroj Uni-T UT220 | 46.00 € | **45.50 €** | 10.4 % | **9.2 %** | 45.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 318.00 € | **317.50 €** | 18.4 % | **18.2 %** | 317.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 131.00 € | **130.50 €** | 9.3 % | **8.9 %** | 130.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 471.50 € | **471.00 €** | 9.0 % | **8.8 %** | 471.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 932.50 € | **932.00 €** | 18.5 % | **18.4 %** | 932.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT665P-5m endoskop | 44.50 € | **44.00 €** | 31.2 % | **29.7 %** | 44.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 162.50 € | **162.00 €** | 9.8 % | **9.5 %** | 162.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 86.50 € | **86.00 €** | 11.7 % | **11.1 %** | 86.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT311A | 256.00 € | **255.50 €** | 13.3 % | **13.1 %** | 255.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 291.50 € | **291.00 €** | 18.0 % | **17.8 %** | 291.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač hladiny hluku Uni-T UT35 | 122.00 € | **121.50 €** | 13.8 % | **13.4 %** | 121.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 146.00 € | **145.50 €** | 9.6 % | **9.3 %** | 145.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 296.50 € | **296.00 €** | 47.3 % | **47.0 %** | 296.39 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač akumulátorový  TEESA TSA5055 SWEEPER 9000 2v1 | 88.50 € | **88.00 €** | 10.7 % | **10.1 %** | 88.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 275.00 € | **274.50 €** | 8.0 % | **7.8 %** | 274.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 256.00 € | **255.50 €** | 7.0 % | **6.8 %** | 255.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 158.00 € | **157.50 €** | 12.2 % | **11.9 %** | 157.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 72.00 € | **71.50 €** | 9.5 % | **8.7 %** | 71.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V/17Ah  REBEL | 27.00 € | **26.50 €** | 7.9 % | **5.9 %** | 26.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 137.00 € | **136.50 €** | 19.8 % | **19.3 %** | 136.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 179.50 € | **179.00 €** | 16.0 % | **15.6 %** | 179.39 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 80.00 € | **79.50 €** | 37.5 % | **36.6 %** | 79.89 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus URZ3411 1600W 12V nástenný | 237.00 € | **236.50 €** | 8.1 % | **7.9 %** | 236.89 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 130.50 € | **130.00 €** | 5.5 % | **5.1 %** | 130.39 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj REBEL POWER 800 LFP4 RB-4027 500W 12V | 88.50 € | **88.00 €** | 6.3 % | **5.7 %** | 88.39 € | cena podľa najlacnejšieho iného predajcu |
| Detektor kovov Garrett ACE 150 | 192.00 € | **191.50 €** | 18.7 % | **18.3 %** | 191.89 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 62.00 € | **61.50 €** | 15.6 % | **14.7 %** | 61.89 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 317.50 € | **317.00 €** | 8.0 % | **7.8 %** | 317.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 694.50 € | **694.00 €** | 9.9 % | **9.8 %** | 694.39 € | cena podľa najlacnejšieho iného predajcu |
| ETA 0028 92020 | 68.00 € | **67.50 €** | 13.2 % | **12.4 %** | 67.90 € | cena podľa najlacnejšieho iného predajcu |
| Tefal VC139810 | 31.50 € | **31.00 €** | 16.5 % | **14.6 %** | 31.40 € | cena podľa najlacnejšieho iného predajcu |
| CUBE1 Smart Ring White velikost 8 | 40.00 € | **39.50 €** | 8.2 % | **6.9 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| CUBE1 Smart Ring Black velikost 8 | 40.00 € | **39.50 €** | 8.2 % | **6.9 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| CUBE1 Smart Ring White velikost 9 | 40.00 € | **39.50 €** | 8.2 % | **6.9 %** | 39.90 € | cena podľa najlacnejšieho iného predajcu |
| CPA HALO 28 černý | 44.00 € | **43.50 €** | 8.3 % | **7.1 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| SONOFF S61STPF-PM-O Matter EU vonkajšia zásuvka | 22.00 € | **21.50 €** | 30.8 % | **27.9 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Polaris | 44.50 € | **44.00 €** | 13.1 % | **11.8 %** | 44.42 € | cena podľa najlacnejšieho iného predajcu |
| Čítačka pamäťových kariet Lexar RW540 microSD Express | 64.50 € | **64.00 €** | 24.3 % | **23.3 %** | 64.44 € | cena podľa najlacnejšieho iného predajcu |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 233.50 € | **233.00 €** | 9.9 % | **9.7 %** | 233.44 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 233.50 € | **233.00 €** | 9.9 % | **9.7 %** | 233.44 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný tréninková hrazda REBEL ACTIVE RBA-2407 | 66.50 € | **66.00 €** | 5.8 % | **5.0 %** | 66.44 € | cena podľa najlacnejšieho iného predajcu |
| Sklokeramická/elektrická varná doska IsEasy LT5-02 | 155.50 € | **155.00 €** | 11.3 % | **10.9 %** | 155.46 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 (veľkosť 10, zlatá) | 252.50 € | **252.00 €** | 14.5 % | **14.3 %** | 252.48 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 238.50 € | **238.00 €** | 11.7 % | **11.5 %** | 238.49 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 132.50 € | **132.00 €** | 16.0 % | **15.6 %** | 132.49 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 187.50 € | **187.00 €** | 11.4 % | **11.1 %** | 187.49 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS200HK(EU) (Hom... | 51.50 € | **51.00 €** | 46.6 % | **45.1 %** | 51.49 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q4 s batériou | 389.50 € | **389.00 €** | 40.2 % | **40.0 %** | 389.49 € | cena podľa najlacnejšieho iného predajcu |
| Statív s 3D 360° hlavou + držiak na telefón Puluz PU... | 25.50 € | **25.00 €** | 27.7 % | **25.2 %** | 25.49 € | cena podľa najlacnejšieho iného predajcu |
| Dvojzónový indukčný sporák IsEasy LI2V-22 | 98.50 € | **98.00 €** | 37.8 % | **37.1 %** | 98.49 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-775S2 Päťzónový (štvorcový) sklenený ply... | 181.50 € | **181.00 €** | 44.7 % | **44.3 %** | 181.49 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare VITURE Pro 2 XR | 353.50 € | **353.00 €** | 23.2 % | **23.0 %** | 353.50 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC500 2 Mpx, vonkajšia, IP P... | 30.50 € | **30.00 €** | 7.6 % | **5.8 %** | 30.50 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TP09 – 50 cm mini statív z uhlíkových vlákien | 73.50 € | **73.00 €** | 40.3 % | **39.4 %** | 73.50 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-WH 11'6" 350x8... | 165.90 € | **165.50 €** | 15.8 % | **15.5 %** | 165.79 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (biele) | 182.90 € | **182.50 €** | 5.5 % | **5.3 %** | 182.80 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (čierne) | 182.90 € | **182.50 €** | 5.5 % | **5.3 %** | 182.80 € | cena podľa najlacnejšieho iného predajcu |
| 32-82" TV mount Perlesmith PSTVMC05-US | 95.90 € | **95.50 €** | 8.4 % | **7.9 %** | 95.88 € | cena podľa najlacnejšieho iného predajcu |
| Triple monitor mount 17-32" Huanuo HNTS3B-UK | 87.90 € | **87.50 €** | 19.6 % | **19.0 %** | 87.88 € | cena podľa najlacnejšieho iného predajcu |
| Prenosný monitor NEEWER F100 + USB nabíjačka + sada ... | 142.90 € | **142.50 €** | 39.9 % | **39.5 %** | 142.89 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DQX90 (čierna) | 140.90 € | **140.50 €** | 39.8 % | **39.4 %** | 140.89 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash DS900WD (biela) | 65.90 € | **65.50 €** | 38.9 % | **38.1 %** | 65.89 € | cena podľa najlacnejšieho iného predajcu |
| KOMA HPU1 - Univerzální hubice | 12.90 € | **12.50 €** | 18.5 % | **14.8 %** | 12.80 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica BOBOVR BD3 pre batérie B100 | 40.90 € | **40.50 €** | 34.5 % | **33.2 %** | 40.68 € | cena podľa najlacnejšieho iného predajcu |
| D-LINK 10/100 8-Port Switch (DES-108) | 20.90 € | **20.50 €** | 15.7 % | **13.5 %** | 20.69 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 47.90 € | **47.50 €** | 12.4 % | **11.5 %** | 47.69 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 47.90 € | **47.50 €** | 14.7 % | **13.7 %** | 47.69 € | cena podľa najlacnejšieho iného predajcu |
| Resto 92003 Hrnec s pokl. Libra, 3,6 l | 23.90 € | **23.50 €** | 11.9 % | **10.0 %** | 23.70 € | cena podľa najlacnejšieho iného predajcu |
| KOMA RK01 - Univerzální rotační kartáč | 18.90 € | **18.50 €** | 18.6 % | **16.1 %** | 18.70 € | cena podľa najlacnejšieho iného predajcu |
| Bravo B-6039 Digitální rádio SAM černé | 19.90 € | **19.50 €** | 15.6 % | **13.3 %** | 19.80 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZHB4560I | 21.90 € | **21.50 €** | 30.9 % | **28.5 %** | 21.83 € | cena podľa najlacnejšieho iného predajcu |
| Slnečné okuliare COLMI M01Pro UV AI | 26.90 € | **26.50 €** | 41.5 % | **39.4 %** | 26.89 € | cena podľa najlacnejšieho iného predajcu |
| KRUGER & MATZ KM0913-BL Powerbanka 10000 mAh MagSafe | 19.90 € | **19.50 €** | 12.7 % | **10.5 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q200 | 331.90 € | **331.50 €** | 38.8 % | **38.6 %** | 331.89 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 261.90 € | **261.50 €** | 39.5 % | **39.3 %** | 261.89 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 457.00 € | **456.90 €** | 36.1 % | **36.1 %** | 456.91 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Revopoint Inspire 2 – štandardná verzia | 703.00 € | **702.90 €** | 38.0 % | **37.9 %** | 702.99 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q6 | 561.00 € | **560.90 €** | 38.1 % | **38.0 %** | 560.99 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X2 USB-C | 286.00 € | **285.90 €** | 15.9 % | **15.9 %** | 285.99 € | cena podľa najlacnejšieho iného predajcu |
| Dynamický mikrofón MAONO PD100WS (čierny) | 55.00 € | **54.90 €** | 22.0 % | **21.8 %** | 54.96 € | cena podľa najlacnejšieho iného predajcu |
| Vyrovnávač s ionizáciou a infračerveným žiarením ANL... | 42.00 € | **41.90 €** | 49.0 % | **48.7 %** | 41.99 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 27131-56 | 30.00 € | **29.90 €** | 16.8 % | **16.4 %** | 30.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.60 € | **9.50 €** | 29.6 % | **28.3 %** | 9.59 € | cena podľa najlacnejšieho iného predajcu |
| Ventilátor Cooler Master SickleFlow Edge 120 ARGB (b... | 12.00 € | **11.90 €** | 24.3 % | **23.2 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 187.00 € | **186.90 €** | 10.6 % | **10.6 %** | 186.93 € | cena podľa najlacnejšieho iného predajcu |
| Midland D10 DMR digital radio | 191.00 € | **190.90 €** | 26.3 % | **26.3 %** | 190.97 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-CM5560-SV s piestovým systémom (s... | 223.00 € | **222.90 €** | 16.5 % | **16.4 %** | 222.99 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-N s lítiovou batériou | 169.00 € | **168.90 €** | 39.0 % | **38.9 %** | 168.99 € | cena podľa najlacnejšieho iného predajcu |
| Lovecký ďalekohľad Mileseey IONJET2 | 233.00 € | **232.90 €** | 36.3 % | **36.2 %** | 232.99 € | cena podľa najlacnejšieho iného predajcu |
| Sada na selfie Neewer SRP18C s priemerom 17 cm a okr... | 165.00 € | **164.90 €** | 39.0 % | **38.9 %** | 164.99 € | cena podľa najlacnejšieho iného predajcu |
| Tesla GSM-LTE zesil. sig. 900/1800 MHz | 181.00 € | **180.90 €** | 22.6 % | **22.6 %** | 180.99 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus URZ3407 1200W 12V | 186.00 € | **185.90 €** | 6.9 % | **6.9 %** | 185.99 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 162.00 € | **161.90 €** | 20.8 % | **20.8 %** | 161.99 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný statív pre fotoaparát 5 v 1 | 237.00 € | **236.90 €** | 6.7 % | **6.7 %** | 237.00 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant PXN-V900 Gen2 | 97.00 € | **96.90 €** | 8.5 % | **8.4 %** | 97.00 € | cena podľa najlacnejšieho iného predajcu |

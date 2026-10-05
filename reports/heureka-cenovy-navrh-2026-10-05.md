# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-05

Vstup: `premiumstore-sk_2026-10-05_10-17.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7699**
- Návrh **zvýšiť** cenu: **7** produktov
- Návrh **znížiť** cenu: **325** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **7367** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **220**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **801**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (7)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Bramka pre inteligentnú domácnosť Yeelight Hub E1 Ma... | 59.50 € | **74.00 €** | 15.4 % | **43.6 %** | 74.50 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool AMW 6440 FB | 387.50 € | **393.00 €** | 7.1 % | **8.6 %** | 393.06 € | cena podľa najlacnejšieho iného predajcu |
| Sada šipek 12dílná + příslušenství Trizand 21629 | 12.50 € | **16.00 €** | 15.6 % | **48.0 %** | 16.20 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV2839E0 | 33.90 € | **35.90 €** | 10.1 % | **16.6 %** | 36.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 280 MK II 200/ 80 Ohm | 379.90 € | **380.90 €** | 25.2 % | **25.5 %** | 381.00 € | cena podľa najlacnejšieho iného predajcu |
| beyerdynamic DT 1350 CC 80 Ohm | 309.90 € | **310.90 €** | 25.1 % | **25.5 %** | 311.00 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Hurricane H7 Plus | 154.50 € | **155.50 €** | 5.1 % | **5.8 %** | 155.70 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (325)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Midland BTR1 Advanced, Single | 324.90 € | **187.90 €** | 85.4 % | **7.2 %** | 188.00 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1048 48x GLan. 19"rack | 397.50 € | **315.50 €** | 32.4 % | **5.1 %** | 269.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG2210XMP-M2 8x GLan/PoE+, 2x 10G SFP... | 373.00 € | **294.90 €** | 33.0 % | **5.1 %** | 286.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SX105 5x 10GLan, kov | 367.00 € | **291.50 €** | 32.4 % | **5.1 %** | 244.01 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP772-Outdoor vonkajší AP, Wi-F... | 351.50 € | **277.50 €** | 33.2 % | **5.1 %** | 160.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG2428LP 16x GLan/PoE+, 8x GLAN, 4x S... | 354.90 € | **282.90 €** | 31.9 % | **5.1 %** | 250.45 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link IES210GPP priemyselný, 2x SFP combo, ... | 325.00 € | **254.50 €** | 34.2 % | **5.1 %** | 245.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Router TP-Link ER706W-4G VPN WiFi 6, LTE/4G, 1x GWAN... | 337.50 € | **267.90 €** | 32.4 % | **5.1 %** | 259.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG3428X 24x GLan, 4x SFP+, Omáda SDN | 341.00 € | **271.90 €** | 31.7 % | **5.0 %** | 181.58 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco PX10(3-pack) AX1500 + AV100... | 317.50 € | **249.00 €** | 33.9 % | **5.0 %** | 249.05 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1428PE Smart, 26x GLan, 24x PoE+... | 337.50 € | **269.90 €** | 31.4 % | **5.1 %** | 224.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP773 stropný AP WiFi 7, 1x 10G... | 325.90 € | **258.50 €** | 32.4 % | **5.0 %** | 230.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP660 HD stropné AP WiFi 6, 1x ... | 324.00 € | **257.50 €** | 32.4 % | **5.2 %** | 216.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Router TP-Link ER703WP-4G-Outdoor vonkajší, VPN WiFi... | 319.50 € | **253.00 €** | 32.6 % | **5.0 %** | 229.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Router TP-Link DR3650V VPN WiFi 6, 1x GWAN + 4x GLAN... | 304.00 € | **242.50 €** | 31.8 % | **5.1 %** | 102.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link ES228GP 24x GLan s PoE+, 2x GLan, 2x ... | 296.00 € | **234.50 €** | 32.7 % | **5.1 %** | 165.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1218MPE Smart, 18x GLan s PoE+, ... | 279.00 € | **221.50 €** | 32.3 % | **5.1 %** | 155.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1218MP 18x GLan, 16x PoE+, 2x SF... | 279.00 € | **221.50 €** | 32.3 % | **5.1 %** | 173.04 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco X50-PoE(2-pack) WiFi 6, 1x ... | 275.00 € | **218.50 €** | 32.2 % | **5.0 %** | 154.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Archer GE400 BE6500, WiFi 7, 1x ... | 263.00 € | **206.50 €** | 34.0 % | **5.2 %** | 204.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG3428 JetStream L2 mananaged, 24x GL... | 262.50 € | **207.90 €** | 32.8 % | **5.2 %** | 181.58 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP625-Outdoor HD vonkajší AP, 1... | 254.50 € | **200.90 €** | 33.1 % | **5.0 %** | 182.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link ES220GMP 2x GLan, 16x GLan s PoE+, 2x... | 253.90 € | **200.90 €** | 32.8 % | **5.0 %** | 192.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Archer BE550 BE9300, WiFi 7, 1x ... | 249.00 € | **197.50 €** | 32.4 % | **5.0 %** | 195.95 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link IES208G priemyselný, 2× SFP Combo, 6×... | 238.00 € | **187.50 €** | 33.3 % | **5.1 %** | 161.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link RE655BE WiFi 7 AP/Extender/Rep... | 244.90 € | **194.50 €** | 32.5 % | **5.2 %** | 193.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP683 UR stropný AP WiFi 6, 1x ... | 244.50 € | **194.50 €** | 32.3 % | **5.2 %** | 164.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP772 stropné AP WiFi 7, 1x 2.5... | 231.50 € | **181.50 €** | 34.0 % | **5.1 %** | 160.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG2210MP 8x GLan/PoE+, 2x SFP, 150W, ... | 225.90 € | **176.90 €** | 34.2 % | **5.1 %** | 168.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link ES206XPP-M2 5x 2,5GLan s PoE++, 1x 10... | 224.00 € | **175.00 €** | 34.4 % | **5.0 %** | 174.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Mercusys Halo H25BE(3-pack) WiFi... | 229.50 € | **182.50 €** | 32.4 % | **5.3 %** | 154.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link RE405BE AP/Extender/Repeater, ... | 226.00 € | **179.00 €** | 32.6 % | **5.0 %** | 160.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vonkajšia jednotka TP-Link Sector Bridge 5 1x GLAN, ... | 214.50 € | **167.90 €** | 34.3 % | **5.1 %** | 141.35 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link ES220GP 16x GLan s PoE+, 2x GLan, 2x ... | 221.50 € | **175.00 €** | 32.9 % | **5.0 %** | 165.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP623-Outdoor HD vonkajší AP, 1... | 227.90 € | **181.90 €** | 31.7 % | **5.1 %** | 181.38 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP215-Bridge KIT vonkajší spoj,... | 212.90 € | **168.50 €** | 32.9 % | **5.2 %** | 145.66 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP650-Outdoor vonkajší AP, 1x G... | 212.00 € | **168.50 €** | 32.3 % | **5.2 %** | 83.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SL1218P Smart, 16x Lan sPoE+, 2x G... | 211.00 € | **168.50 €** | 31.7 % | **5.2 %** | 131.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco XE75(1-pack) AXE5400, WiFi ... | 202.50 € | **161.50 €** | 31.7 % | **5.0 %** | 130.72 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco PX10(2-pack) AX1500, WiFi 6... | 215.90 € | **175.00 €** | 29.6 % | **5.1 %** | 101.88 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link Mercusys MS128GP 2x GLAN, 24x GLAN s ... | 195.00 € | **154.90 €** | 32.3 % | **5.1 %** | 154.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vonkajšia jednotka TP-Link Flex Bridge 5 3x GLAN, 5 ... | 194.50 € | **154.50 €** | 32.6 % | **5.4 %** | 154.80 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP670 stropný AP WiFi 6, 1x 2.5... | 201.00 € | **161.50 €** | 30.7 % | **5.0 %** | 153.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco P9(2-pack) AC1200, PLC AV10... | 187.90 € | **149.00 €** | 34.5 % | **6.6 %** | 149.49 € | cena podľa najlacnejšieho iného predajcu |
| Router TP-Link ER706W VPN WiFi 6, 1x GWAN + 4x GWAN/... | 189.00 € | **150.90 €** | 31.7 % | **5.1 %** | 144.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Router TP-Link ER603WP-4G-Outdoor WiFi 6, 4G, 3x GWA... | 186.00 € | **148.00 €** | 32.4 % | **5.3 %** | 148.05 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1016PE 16x GLAN, 8x PoE | 182.50 € | **144.90 €** | 32.3 % | **5.0 %** | 132.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Mercusys Halo E27BE(2-pack) WiFi... | 179.50 € | **142.00 €** | 32.7 % | **5.0 %** | 79.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link VIGI C540-W(4mm) 4MPx, vonkajšia, IP ... | 144.90 € | **107.50 €** | 41.6 % | **5.0 %** | 83.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Router TP-Link ER707-M2 VPN 4x GWAN/Lan, 2x 2.5GWan/... | 178.00 € | **141.00 €** | 32.7 % | **5.1 %** | 141.35 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP673 stropný AP WiFi 6, 1x 2.5... | 180.50 € | **143.90 €** | 32.0 % | **5.2 %** | 133.66 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP653 UR stropné AP WiFi 6, 1x ... | 164.00 € | **127.50 €** | 35.4 % | **5.2 %** | 87.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link HB210 Pro(1-pack) WiFi 7 AP BE36... | 166.50 € | **131.90 €** | 32.9 % | **5.3 %** | 76.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco M5 (2-Pack) 2x GLAN, 1x USB... | 166.90 € | **132.50 €** | 32.4 % | **5.1 %** | 131.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco BE25-Outdoor(1-pack) vonkaj... | 156.00 € | **121.90 €** | 34.4 % | **5.1 %** | 105.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Roborock F25 ACE Combo | 755.50 € | **721.50 €** | 10.0 % | **5.1 %** | 528.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP610GP-Desktop AP WiFi 6, 1x G... | 161.50 € | **127.50 €** | 33.3 % | **5.2 %** | 117.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Powerline ethernet TP-Link PG2400P KIT G.hn adaptér ... | 161.50 € | **127.50 €** | 34.7 % | **6.4 %** | 127.69 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG116P 16x GLAN s POE+, 120W, kov | 162.50 € | **128.90 €** | 32.5 % | **5.1 %** | 57.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Teleskop Levenhuk Skyline Travel 80 | 197.00 € | **163.90 €** | 26.2 % | **5.0 %** | 155.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP625GP-Wall AP, 1xGPON, 1X FXS... | 160.50 € | **127.50 €** | 32.5 % | **5.2 %** | 107.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Mercusys Halo H25BE(2-pack) WiFi... | 158.50 € | **125.50 €** | 33.0 % | **5.3 %** | 108.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP650-Desktop AP WiFi 6, 4x GLa... | 153.50 € | **121.50 €** | 33.1 % | **5.4 %** | 83.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SF1048 switch 48x Lan, 19" rackmount | 155.50 € | **123.50 €** | 32.3 % | **5.1 %** | 105.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP603-Outdoor vonkajší AP, AX18... | 152.90 € | **120.90 €** | 33.0 % | **5.2 %** | 120.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP211-Bridge KIT vonkajší spoj,... | 177.50 € | **145.50 €** | 31.9 % | **8.1 %** | 145.66 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS120GP 4x GLAN, 16x GLAN s ... | 153.50 € | **121.90 €** | 32.3 % | **5.1 %** | 120.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link HC220-G5(2-pack) AC1200, 3x GLAN... | 124.50 € | **93.00 €** | 40.7 % | **5.1 %** | 46.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kontroler TP-Link OC200 Controller, Omada SDN | 154.90 € | **123.50 €** | 31.8 % | **5.1 %** | 117.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link MERCUSYS MR47BE BE9300 WiFi 7, 3... | 151.00 € | **119.90 €** | 32.3 % | **5.1 %** | 114.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1210MPE Easy Smart, 8x GLAN/PoE+... | 150.50 € | **119.50 €** | 32.4 % | **5.1 %** | 95.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG2206MP 5x GLan/PoE+, 1x SFP, 63W, O... | 136.00 € | **105.00 €** | 36.1 % | **5.0 %** | 103.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chytrý zvonček TP-Link Tapo D235 IoT, 3MPx, batéria,... | 152.90 € | **121.90 €** | 32.6 % | **5.7 %** | 122.00 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link HB210(1-pack) WiFi 7 AP BE3600, ... | 146.00 € | **115.50 €** | 32.9 % | **5.1 %** | 76.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link ES210GMP 1x SFP combo, 8x GLan s Poe+... | 146.00 € | **115.50 €** | 33.1 % | **5.3 %** | 110.46 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG2008P Smart, 8x GLan, 4x PoE+, 62W,... | 137.50 € | **107.50 €** | 34.8 % | **5.4 %** | 85.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Router TP-Link ER7406 4x GLan/GWan, 1x GWan, 1x SFP,... | 145.50 € | **115.50 €** | 32.7 % | **5.3 %** | 108.81 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco X60(1-pack) AX5400, WiFi 6,... | 147.50 € | **117.50 €** | 32.2 % | **5.3 %** | 116.25 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco X50-PoE(1-pack) WiFi 6, 1x ... | 151.00 € | **121.50 €** | 31.0 % | **5.4 %** | 117.06 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1024DE smart 24x GLan | 142.00 € | **112.90 €** | 32.3 % | **5.2 %** | 80.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP603GP-Desktop AP WiFi 6, 1x G... | 136.90 € | **108.50 €** | 32.5 % | **5.0 %** | 108.65 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link TL-WR3602BE cestovní, BE3600, Wi... | 135.50 € | **107.50 €** | 32.8 % | **5.4 %** | 76.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1008MP 8x GLAN s POE+ | 138.00 € | **110.00 €** | 31.8 % | **5.0 %** | 93.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco BE25(1-pack) BE3600, WiFi 7... | 137.50 € | **109.50 €** | 32.2 % | **5.2 %** | 105.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Mercusys Halo E85X(2-pack) WiFi ... | 127.50 € | **99.50 €** | 34.9 % | **5.3 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG3210 JetStream L2 Managed, 8x GLAN,... | 138.00 € | **110.50 €** | 31.3 % | **5.2 %** | 105.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link ES224G 24x GLan, Omáda SDN | 135.00 € | **107.50 €** | 32.3 % | **5.4 %** | 107.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link VIGI C540(4mm) 4MPx, vonkajšia, IP PT... | 124.90 € | **97.90 €** | 34.1 % | **5.1 %** | 76.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG2005P-PD Smart, 4x GLan s PoE, 1x G... | 130.50 € | **103.50 €** | 32.9 % | **5.4 %** | 95.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP655-wall AP, 3x GLAN, 2,4 a 5... | 134.50 € | **107.50 €** | 31.8 % | **5.4 %** | 102.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP650 stropné AP WiFi 6, 1x GLa... | 126.00 € | **99.50 €** | 33.0 % | **5.0 %** | 83.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1210MP 8x GLAN/PoE+, 1x GLAN, 1x... | 130.00 € | **103.50 €** | 32.1 % | **5.2 %** | 95.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link ES210GP 1x GLan, 8x GLan s PoE+, 1x S... | 127.00 € | **100.50 €** | 32.8 % | **5.1 %** | 94.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EX820v WiFi 6 AP AX6000, 3x GLAN... | 125.00 € | **98.90 €** | 32.9 % | **5.1 %** | 97.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco E4(3-pack) 2x LAN/ 300Mbps ... | 129.50 € | **103.50 €** | 31.9 % | **5.4 %** | 93.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1024 24x GLan, 19"rack | 125.00 € | **99.50 €** | 32.2 % | **5.2 %** | 80.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Router TP-Link TL-ER7206 SafeStream VPN 1x GWAN + 2x... | 123.50 € | **98.00 €** | 32.4 % | **5.0 %** | 96.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP245 stropní AP, 1x GLAN, 2,4 ... | 121.50 € | **96.50 €** | 32.3 % | **5.1 %** | 76.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1024D switch 24x GLan, desktop, ... | 121.90 € | **96.90 €** | 32.5 % | **5.3 %** | 80.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vonkajšia jednotka TP-Link CPE710 5GHz, 2T2R, 23dBi,... | 121.50 € | **96.90 €** | 32.1 % | **5.3 %** | 77.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link HX510(1-pack) WiFi 6 AP AX3000, ... | 117.50 € | **93.00 €** | 32.8 % | **5.1 %** | 87.07 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Powerline ethernet TP-Link PG1200 KIT G.hn adaptér (... | 118.00 € | **93.50 €** | 32.6 % | **5.1 %** | 93.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Rázový uťahovák NAC  IW-600-BL-LI-20V stroj | 160.50 € | **136.00 €** | 33.8 % | **13.4 %** | 136.28 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP653 stropné AP WiFi 6, 1x GLa... | 118.00 € | **93.90 €** | 32.2 % | **5.2 %** | 87.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Powerline ethernet TP-Link TL-PA8030P KIT starter ki... | 118.50 € | **94.50 €** | 32.1 % | **5.4 %** | 77.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SL1311MP 8x LAN/PoE+, 2x GLAN, 1x ... | 115.00 € | **91.50 €** | 32.4 % | **5.4 %** | 76.17 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link VIGI C340-W(4mm) 4MPx, vonkajšia, IP ... | 117.50 € | **94.50 €** | 31.0 % | **5.3 %** | 50.69 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link SG2008 smart, 8x GLAN, Omáda SDN | 111.50 € | **88.50 €** | 32.5 % | **5.2 %** | 85.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Archer TBE550E BE9300 WiFi 7, ... | 111.50 € | **88.50 €** | 32.5 % | **5.2 %** | 86.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link RE225BE WiFi 7 AP/Extender/Rep... | 108.50 € | **85.90 €** | 32.8 % | **5.1 %** | 85.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link MERCUSYS MR90X AX6000 dual AP/ro... | 106.50 € | **84.00 €** | 33.2 % | **5.1 %** | 83.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EB210 WiFi 7 AP BE3600,1x GWan, ... | 92.50 € | **70.00 €** | 46.2 % | **10.7 %** | 70.22 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP650-wall AP, 1x GLAN, 2,4 a 5... | 109.90 € | **87.50 €** | 32.3 % | **5.3 %** | 82.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link RE235BE WiFi 7 AP/Extender/Rep... | 110.90 € | **88.50 €** | 32.4 % | **5.6 %** | 88.60 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EB210 Pro WiFi 7 AP BE3600,1x 2,... | 104.50 € | **82.50 €** | 33.1 % | **5.1 %** | 76.42 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link RE220BE WiFi 7 AP/Extender/Rep... | 106.50 € | **85.00 €** | 33.0 % | **6.1 %** | 85.09 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Mercusys Halo H85X(2-pack) WiFi ... | 124.50 € | **103.00 €** | 31.7 % | **9.0 %** | 103.09 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link ES216G 16x GLan, Omáda SDN | 101.90 € | **80.50 €** | 33.2 % | **5.2 %** | 80.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ADSL router TP-Link Archer VR2100 VDSL/ADSL MODEM 4x... | 109.90 € | **88.50 €** | 32.6 % | **6.8 %** | 88.89 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP615-Wall AP, 3x GLAN, 2,4 a 5... | 101.50 € | **80.50 €** | 32.6 % | **5.2 %** | 72.48 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link RE650 AP/Extender/RepeaterAC12... | 101.50 € | **80.50 €** | 32.6 % | **5.2 %** | 79.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1016DE smart 16x GLAN | 98.50 € | **77.90 €** | 32.9 % | **5.1 %** | 60.83 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP225-outdoor venkovní AP, 1x G... | 101.00 € | **80.50 €** | 32.0 % | **5.2 %** | 65.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link VIGI C250(2.8mm) 5MPx, vonkajšie, IP ... | 98.50 € | **78.50 €** | 32.0 % | **5.2 %** | 63.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link VIGI C250(4mm) 5MPx, vonkajšie, IP Do... | 98.50 € | **78.50 €** | 32.0 % | **5.2 %** | 63.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1210P 8x GLAN/PoE+, 1x GLAN, 1x ... | 99.50 € | **79.50 €** | 31.9 % | **5.4 %** | 75.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Statív tripod 3 Legged Thing PUNKS Travis 2.0, čierny | 234.90 € | **214.90 €** | 25.1 % | **14.4 %** | 215.00 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP235-Wall AP, 4x GLAN, 2,4 a 5... | 93.50 € | **73.90 €** | 33.3 % | **5.4 %** | 65.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link HX520(1-pack) WiFi6, AX3000, 3x ... | 96.50 € | **76.90 €** | 32.1 % | **5.3 %** | 76.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Uhlová brúska NAC AKU AGE-125-LI-B-20V 125mm | 112.00 € | **92.50 €** | 27.4 % | **5.3 %** | 79.16 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP225 stropní AP, 1x GLAN, 2,4 ... | 96.00 € | **76.50 €** | 32.0 % | **5.2 %** | 65.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG116E smart 16x GLAN | 95.00 € | **75.50 €** | 32.8 % | **5.5 %** | 67.57 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link LS1024G 24x GLAN | 94.90 € | **75.50 €** | 32.7 % | **5.5 %** | 74.45 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ďalekohľad Levenhuk New Karma PRO ED 10x50 | 205.90 € | **186.50 €** | 27.0 % | **15.0 %** | 186.75 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Levenhuk New Atom 10–30x50 | 118.00 € | **98.90 €** | 26.2 % | **5.8 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco M5 (1-pack) 2x GLAN, 1x USB... | 95.50 € | **76.50 €** | 31.7 % | **5.5 %** | 66.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Statívová hlava 3 Legged Thing AirHed Pro guľová, šedá | 152.90 € | **134.00 €** | 25.1 % | **9.7 %** | 134.39 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Archer TBE553E BE9300 WiFi 7, ... | 91.50 € | **72.90 €** | 32.2 % | **5.4 %** | 71.65 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link RE660X AP/Extender/Repeater AX... | 87.50 € | **68.90 €** | 33.8 % | **5.4 %** | 67.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco X60(2-pack) AX5400, WiFi 6,... | 326.50 € | **308.00 €** | 34.8 % | **27.1 %** | 308.19 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Deco E4 (2-Pack) 2x LAN/ 300Mbps... | 91.00 € | **72.90 €** | 31.6 % | **5.4 %** | 63.92 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link TL-WR3002X cestovný, AX3000, Wi-... | 89.90 € | **71.90 €** | 32.0 % | **5.6 %** | 67.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link VIGI C350(4mm) 5MPx, vonkajšie, IP Bu... | 84.50 € | **67.00 €** | 32.5 % | **5.1 %** | 56.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link VIGI C350(2.8mm) 5MPx, vonkajšia, IP ... | 84.50 € | **67.00 €** | 32.5 % | **5.1 %** | 63.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| USB klient TP-Link Archer TBE400U Plus BE6500, WiFi ... | 86.00 € | **68.50 €** | 31.9 % | **5.1 %** | 67.85 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| USB klient TP-Link Archer TBE400U BE6500, WiFi 7,  2... | 83.00 € | **65.90 €** | 32.5 % | **5.2 %** | 65.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG116 16x GLan, kov | 82.90 € | **65.90 €** | 32.4 % | **5.2 %** | 57.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Archer AX55 Pro WiFi 6  AX3000, ... | 83.50 € | **66.50 €** | 32.5 % | **5.6 %** | 59.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link VIGI C240(2.8mm) 4MPx, vonkajšie, IP ... | 83.90 € | **67.00 €** | 31.6 % | **5.1 %** | 51.13 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link VIGI C440(4mm) 4MPx, vonkajšie, IP Do... | 81.00 € | **64.50 €** | 32.4 % | **5.4 %** | 52.89 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odpadkový kôš Curver Verto High 54 l tmavomodrý | 58.50 € | **42.00 €** | 46.5 % | **5.2 %** | 35.57 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Alarm TP-Link Tapo T30 KIT Smart sensor starter kit | 81.00 € | **64.50 €** | 32.4 % | **5.4 %** | 61.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Archer TBE400E BE5760 WiFi 7, ... | 77.00 € | **60.90 €** | 33.4 % | **5.5 %** | 54.23 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Powerline ethernet TP-Link TL-PA7017P KIT twin pack,... | 79.00 € | **63.00 €** | 31.8 % | **5.1 %** | 42.09 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Statívový držiak 3 Legged Thing ZELDA L, čierny | 101.50 € | **85.50 €** | 25.0 % | **5.3 %** | 81.34 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odpadkový kôš Curver Deco Bin Duo 10 + 18 l strieborný | 58.50 € | **42.50 €** | 44.9 % | **5.3 %** | 38.65 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Teleskop Levenhuk Skyline Travel 50 | 94.50 € | **78.50 €** | 26.5 % | **5.1 %** | 75.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Teleskop Levenhuk Skyline Travel Sun 50 | 94.50 € | **78.50 €** | 26.9 % | **5.4 %** | 75.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| USB klient TP-Link Archer TBE230U BE3600, WiFi 7,  2... | 76.50 € | **60.50 €** | 33.0 % | **5.2 %** | 59.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Router TP-Link ER605 SafeStream VPN 1x GWAN + 3x GWA... | 74.50 € | **59.00 €** | 32.8 % | **5.1 %** | 54.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Pokosová píla NAC MS210-170-GY | 120.00 € | **104.50 €** | 30.2 % | **13.4 %** | 104.75 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Archer AX55 WiFi 6, AX3000, 4 x ... | 74.90 € | **59.50 €** | 32.7 % | **5.4 %** | 59.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Múdra termostatická hlavica TP-Link KE100 KIT bundle... | 67.00 € | **51.90 €** | 35.8 % | **5.2 %** | 48.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ADSL router TP-Link Archer VR400 VDSL/ADSL MODEM 4xG... | 74.90 € | **59.90 €** | 32.1 % | **5.6 %** | 59.15 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link LS1016G 16x GLAN | 71.50 € | **56.50 €** | 33.3 % | **5.3 %** | 52.71 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link Mercusys MS124GS 24x GLAN, rack | 70.50 € | **55.90 €** | 33.2 % | **5.6 %** | 55.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vonkajšia jednotka TP-Link CPE610 5GHz, 2T2R, 23dBi,... | 75.50 € | **60.90 €** | 30.8 % | **5.5 %** | 60.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link MERCUSYS MR25BE BE3600 WiFi 7, 3... | 70.50 € | **56.00 €** | 32.3 % | **5.1 %** | 36.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SF1024 switch 24x Lan, 19"rack | 71.00 € | **56.50 €** | 32.3 % | **5.3 %** | 39.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link MERCUSYS MR25WBE BE3600 WiFi 7, ... | 70.50 € | **56.00 €** | 32.3 % | **5.1 %** | 47.41 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link TL-WR1502X cestovný, AX1500, WiF... | 71.50 € | **57.00 €** | 33.5 % | **6.5 %** | 57.50 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS108GS-M2 8x 2,5GLAN, kov | 66.90 € | **52.90 €** | 32.8 % | **5.0 %** | 52.55 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vŕtacie kladivo NAC HE90-LD SDS-Plus | 74.50 € | **60.50 €** | 29.9 % | **5.5 %** | 55.24 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Okružná píla NAC AKU CS-165-LI-ST2-20V | 124.00 € | **110.00 €** | 27.3 % | **13.0 %** | 110.03 € | cena podľa najlacnejšieho iného predajcu |
| WiFi extender TP-Link Mercusys ME25BE AP/Extender/Re... | 66.90 € | **53.00 €** | 32.7 % | **5.1 %** | 52.60 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Priamočiara píla NAC aku JS-20-LI-ST-20V | 86.90 € | **73.00 €** | 33.2 % | **11.9 %** | 73.08 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SF1024D switch 24x Lan, 13" rack, kov | 67.50 € | **53.90 €** | 32.1 % | **5.5 %** | 39.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link LS1210GP 1x GLAN, 8x GLAN s PoE+, 1x ... | 67.50 € | **53.90 €** | 32.1 % | **5.5 %** | 53.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Mercusys Halo H27BE(1-pack) WiFi... | 85.50 € | **72.00 €** | 31.6 % | **10.8 %** | 72.11 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Slim Bin 40 l strieborný | 60.00 € | **46.50 €** | 48.0 % | **14.7 %** | 46.79 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Verto Recycle 54 l tmavomodrý | 54.50 € | **41.00 €** | 51.6 % | **14.0 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110GMP 2x GLAN, 8x GLAN s ... | 64.50 € | **51.50 €** | 32.7 % | **5.9 %** | 51.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sekera NAC NP-AX-28 1760g | 52.50 € | **39.50 €** | 46.0 % | **9.8 %** | 39.64 € | cena podľa najlacnejšieho iného predajcu |
| Powerline ethernet TP-Link TL-PA4010P KIT nano adapt... | 65.50 € | **52.90 €** | 30.9 % | **5.7 %** | 33.86 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SL1311P 8x LAN/PoE+, 2x GLAN, 1x S... | 62.50 € | **49.90 €** | 32.1 % | **5.5 %** | 38.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Deco M4 (1-Pack) 2x GLAN/ 300Mbp... | 62.50 € | **49.90 €** | 31.7 % | **5.2 %** | 40.33 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link MERCUSYS MR85X AX3000 AP/router,... | 61.50 € | **49.00 €** | 32.0 % | **5.1 %** | 25.34 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Powerline ethernet TP-Link Mercusys MP500P KIT 1000M... | 57.00 € | **44.50 €** | 34.6 % | **5.1 %** | 40.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Mercusys MA510E 10G PCIe, Full... | 69.50 € | **57.00 €** | 32.8 % | **8.9 %** | 57.50 € | cena podľa najlacnejšieho iného predajcu |
| Miešadlo NAC EM180VS-HA 1800W | 90.90 € | **78.50 €** | 26.8 % | **9.5 %** | 78.75 € | cena podľa najlacnejšieho iného predajcu |
| WiFi extender TP-Link RE450 AP/Extender/Repeater - A... | 62.90 € | **50.50 €** | 31.6 % | **5.6 %** | 49.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1008P 8x GLAN, 4xPOE, 56W, kov | 62.00 € | **49.90 €** | 31.1 % | **5.5 %** | 45.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Powerline ethernet TP-Link TL-WPA4220 AV2 600Mbps, W... | 59.50 € | **47.50 €** | 32.6 % | **5.9 %** | 38.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SF1016 16x LAN, 19"rack | 59.00 € | **47.00 €** | 31.9 % | **5.1 %** | 41.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Powerline ethernet TP-Link TL-PA7017 KIT twin pack, ... | 57.50 € | **45.50 €** | 32.7 % | **5.0 %** | 41.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vonkajšia jednotka TP-Link CPE220 2.4GHz, 2T2R, 12dBi | 59.50 € | **47.50 €** | 32.6 % | **5.9 %** | 47.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chytrý zvonček TP-Link Tapo D205 IoT, 3MPx, baterie | 63.00 € | **51.00 €** | 32.8 % | **7.5 %** | 51.09 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS112GMP 2x GLAN, 8x GLAN s ... | 72.50 € | **60.50 €** | 32.0 % | **10.2 %** | 60.59 € | cena podľa najlacnejšieho iného predajcu |
| Statívová hlava 3 Legged Thing Airhead VU guľová DAR... | 152.90 € | **141.00 €** | 25.1 % | **15.4 %** | 141.12 € | cena podľa najlacnejšieho iného predajcu |
| Vŕtacie kladivo NAC aku HE-SDS-LI-20V  2Ah | 86.90 € | **75.00 €** | 31.5 % | **13.5 %** | 75.13 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SF1009P 9x LAN, 4x PoE+, 67W, kov | 57.50 € | **45.90 €** | 32.4 % | **5.7 %** | 38.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vonkajšia jednotka TP-Link CPE210 2.4GHz, 2T2R, 9dBi | 57.50 € | **45.90 €** | 32.4 % | **5.7 %** | 39.26 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Mercusys MA49BE PCIe, WiFi 7, ... | 58.00 € | **46.50 €** | 32.0 % | **5.8 %** | 46.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Uhlová brúska NAC AGE240-GN 230mm | 82.50 € | **71.00 €** | 31.7 % | **13.3 %** | 71.25 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EAP110-outdoor AP, 1x LAN, 2,4GH... | 55.50 € | **44.50 €** | 31.9 % | **5.8 %** | 29.78 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SF1008P 8x LAN, 4xPoE, 57W, kov | 54.00 € | **43.00 €** | 32.2 % | **5.2 %** | 35.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Mercusys MA47BE WiFi 7, PCIe, ... | 53.90 € | **42.90 €** | 32.1 % | **5.1 %** | 41.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vonkajšia jednotka TP-Link CPE605 5GHz, 2T2R, 23dBi,... | 58.50 € | **47.50 €** | 30.4 % | **5.9 %** | 47.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Archer TXE73E AXE 5400, WiFi 6... | 62.90 € | **51.90 €** | 32.6 % | **9.4 %** | 51.99 € | cena podľa najlacnejšieho iného predajcu |
| Podvodné púzdro DiCAPac WP-S5 pro fotoaparáty středn... | 90.00 € | **79.00 €** | 25.2 % | **9.9 %** | 79.42 € | cena podľa najlacnejšieho iného predajcu |
| Dokovacia stanica TP-Link UH9120C USB-C, HDMI, RJ45,... | 52.50 € | **41.90 €** | 32.0 % | **5.4 %** | 39.82 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| USB klient TP-Link Archer TXE70UH AXE5400, 2,4/5/6GH... | 52.50 € | **41.90 €** | 32.4 % | **5.7 %** | 41.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SF1008LP 8x LAN, 4xPoE+, 41W, dosa... | 50.90 € | **40.50 €** | 32.8 % | **5.6 %** | 26.53 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chytrý senzor TP-Link Tapo T150 Inteligentný senzor ... | 49.90 € | **39.90 €** | 32.4 % | **5.9 %** | 32.58 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sekera NAC NP-AX-23 1360g | 40.90 € | **30.90 €** | 45.3 % | **9.8 %** | 30.97 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TXE50UH AXE3000, 2,4/5/6GH... | 48.50 € | **38.50 €** | 33.6 % | **6.1 %** | 38.59 € | cena podľa najlacnejšieho iného predajcu |
| Píla chvostovka NAC RS-20-LI-ST-20V | 82.50 € | **72.50 €** | 28.3 % | **12.8 %** | 72.67 € | cena podľa najlacnejšieho iného predajcu |
| Vŕtacie kladivo NAC HE150-GY SDS-Plus | 103.50 € | **93.50 €** | 25.4 % | **13.3 %** | 93.88 € | cena podľa najlacnejšieho iného predajcu |
| Statívový držiak 3 Legged Thing ZAYLA PD, medený | 60.50 € | **50.90 €** | 25.1 % | **5.2 %** | 48.64 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chytrý senzor TP-Link KE110 Smart, teplomer | 48.50 € | **38.90 €** | 32.2 % | **6.0 %** | 38.36 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kábel TP-Link SM6220-1M SFP+ Direct Attach Cable, 25... | 56.50 € | **47.00 €** | 34.3 % | **11.7 %** | 47.04 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1008 8x GLan, 19"rack | 47.50 € | **38.00 €** | 32.7 % | **6.2 %** | 38.04 € | cena podľa najlacnejšieho iného predajcu |
| Oscilačná brúska NAC MT-LI-ST-20V | 90.90 € | **81.50 €** | 25.8 % | **12.8 %** | 81.75 € | cena podľa najlacnejšieho iného predajcu |
| Powerline ethernet TP-Link TL-PA4010 KIT nano adapté... | 48.90 € | **39.50 €** | 31.5 % | **6.2 %** | 33.86 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link Mercusys ME80X AP/Extender/Rep... | 45.90 € | **36.50 €** | 32.6 % | **5.5 %** | 36.70 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Mercusys MA37BEH Wireless USB ada... | 45.90 € | **36.50 €** | 33.1 % | **5.8 %** | 36.75 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SF1005P 5x LAN, 4xPoE, 58W, kov | 44.00 € | **34.90 €** | 32.5 % | **5.1 %** | 28.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Aku vŕtačka NAC CDB2-LI-20V 2x2Ah | 82.00 € | **72.90 €** | 27.9 % | **13.7 %** | 72.92 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Archer TXE72E AXE 5400, WiFi 6... | 45.50 € | **36.50 €** | 31.5 % | **5.5 %** | 30.80 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP115 stropní AP, 1x LAN, 2,4GH... | 42.50 € | **33.90 €** | 32.4 % | **5.6 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link ES208G 8x GLan, Omáda SDN | 42.50 € | **33.90 €** | 32.4 % | **5.6 %** | 32.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dokovacia stanica TP-Link UH7020C USB-C, HDMI, 1x US... | 41.00 € | **32.90 €** | 31.8 % | **5.7 %** | 26.44 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dokovacia stanica TP-Link UH6120C USB-C, HDMI, RJ45,... | 42.00 € | **33.90 €** | 30.9 % | **5.7 %** | 33.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG108E smart 8x GLan | 38.90 € | **30.90 €** | 32.2 % | **5.0 %** | 24.01 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SF1006P 6x LAN, 4x PoE+, 67W, kov | 48.50 € | **40.50 €** | 26.5 % | **5.6 %** | 34.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG1005LP 5x GLAN, 4xPoE+, 41W, dos... | 40.50 € | **32.50 €** | 32.0 % | **5.9 %** | 29.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP110 stropní AP, 1x LAN, 2,4GH... | 40.50 € | **32.50 €** | 31.6 % | **5.6 %** | 29.78 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SF1005LP 5x LAN, 4xPoE+, 41W, dosa... | 38.90 € | **30.90 €** | 32.2 % | **5.0 %** | 29.39 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Powerline ethernet TP-Link Mercusys MP300 KIT 600Mbp... | 40.50 € | **32.50 €** | 32.7 % | **6.5 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Archer TX20E AX1800 WiFi 6, PC... | 37.50 € | **29.50 €** | 33.7 % | **5.1 %** | 29.89 € | cena podľa najlacnejšieho iného predajcu |
| Kábel TP-Link TL-SM5220-3M SFP+ Direct Attach Cable,... | 39.00 € | **31.00 €** | 32.2 % | **5.1 %** | 31.45 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EC225-G5 AC1300 dual AP, 3x GLAN... | 38.90 € | **31.00 €** | 33.4 % | **6.3 %** | 31.25 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110CMP 2x GLAN, 8x LAN s P... | 45.90 € | **38.00 €** | 31.8 % | **9.1 %** | 38.29 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link TL-WR902AC cestovní AC750, AP/ro... | 37.00 € | **29.50 €** | 31.9 % | **5.1 %** | 28.48 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odpadkový kôš Curver Chic Bin L Steel | 36.50 € | **29.00 €** | 41.4 % | **12.3 %** | 29.11 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Archer C64 AC1200 dual AP/router... | 37.50 € | **30.00 €** | 32.5 % | **6.0 %** | 30.15 € | cena podľa najlacnejšieho iného predajcu |
| Chytrý IoT hub TP-Link Tapo H200 s vyzváňaním, 2,4GH... | 41.50 € | **34.00 €** | 32.2 % | **8.3 %** | 34.48 € | cena podľa najlacnejšieho iného predajcu |
| Kábel TP-Link SM5220-1M SFP+ Direct Attach Cable, 10... | 34.00 € | **26.90 €** | 33.4 % | **5.5 %** | 26.54 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SF1016D 16x LAN, desktop | 32.50 € | **25.50 €** | 33.9 % | **5.0 %** | 21.19 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link EAP115-Wall AP, 1x LAN, 2,4GHz 3... | 35.50 € | **28.50 €** | 31.8 % | **5.8 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Solárny panel TP-Link Tapo A200 pre batériové kamery... | 33.90 € | **26.90 €** | 33.0 % | **5.5 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link Mercusys ME60X AP/Extender/Rep... | 33.50 € | **26.50 €** | 32.9 % | **5.1 %** | 24.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link MERCUSYS MR62X AX1500 dual AP/ro... | 33.50 € | **26.50 €** | 33.2 % | **5.4 %** | 25.34 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Batéria NAC B-60-LI-20V 6Ah | 62.50 € | **55.50 €** | 27.4 % | **13.1 %** | 55.83 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Discovery Gator 10x50 | 54.50 € | **47.50 €** | 29.8 % | **13.1 %** | 47.83 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link ES205G 5x GLan, Omáda SDN | 33.90 € | **27.00 €** | 33.0 % | **5.9 %** | 27.49 € | cena podľa najlacnejšieho iného predajcu |
| Hodinky Niceboy Watch 5 Lite Black | 41.50 € | **34.90 €** | 25.6 % | **5.6 %** | 23.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| USB klient TP-Link Archer T4U Plus AC 1300 Dual Band... | 32.50 € | **25.90 €** | 32.4 % | **5.5 %** | 22.76 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Statívový držiak 3 Legged Thing ELLIE, šedý | 68.50 € | **61.90 €** | 24.7 % | **12.7 %** | 62.00 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link Archer C50 AC1200, AP/router, 4x... | 35.00 € | **28.50 €** | 30.0 % | **5.9 %** | 26.05 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link Archer C20 AC750 dual AP/router,... | 32.00 € | **25.50 €** | 31.8 % | **5.0 %** | 23.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dokovacia stanica TP-Link UH5020C USB-C, HDMI, 1x US... | 33.00 € | **26.50 €** | 32.6 % | **6.5 %** | 25.53 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chytrý senzor TP-Link Tapo T315 Smart, teplomer | 32.00 € | **25.50 €** | 31.8 % | **5.0 %** | 24.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link Mercusys MS110CP 2x GLAN, 8x LAN s Po... | 34.00 € | **27.50 €** | 31.7 % | **6.5 %** | 27.55 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjačka NAC dvojitá BC-LI-2x30-20V | 59.00 € | **52.50 €** | 29.3 % | **15.0 %** | 52.75 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA86XE AXE 5400, WiFi... | 32.90 € | **26.50 €** | 32.1 % | **6.4 %** | 25.65 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ďalekohľad Levenhuk New Atom 8x30 | 58.90 € | **52.50 €** | 26.5 % | **12.8 %** | 52.71 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doštička 3 Legged Thing 85mm pre ELLI... | 40.00 € | **33.90 €** | 25.1 % | **6.0 %** | 24.59 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| USB klient TP-Link Mercusys MA86XH Wireless USB adap... | 30.00 € | **23.90 €** | 32.2 % | **5.3 %** | 21.74 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG108 8x GLan, kov | 31.00 € | **24.90 €** | 30.9 % | **5.1 %** | 24.01 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Dokovacia stanica TP-Link UH7021C USB-C, HDMI, 1x US... | 37.00 € | **30.90 €** | 31.9 % | **10.1 %** | 30.99 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link TL-SG1008D 8x GLan, desktop, plast | 28.90 € | **22.90 €** | 32.8 % | **5.2 %** | 19.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link LS106LP 2x LAN, 4x LAN s PoE, 41W | 30.50 € | **24.50 €** | 32.7 % | **6.6 %** | 22.18 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sieťová karta TP-Link Archer T4E AC 1200 Dual Band, ... | 29.50 € | **23.50 €** | 33.0 % | **6.0 %** | 22.61 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi extender TP-Link Mercusys ME50G AP/Extender/Rep... | 34.50 € | **28.50 €** | 31.8 % | **8.9 %** | 28.54 € | cena podľa najlacnejšieho iného predajcu |
| Statívový držiak 3 Legged Thing GRACY pre FUJIFILM G... | 101.50 € | **95.50 €** | 25.0 % | **17.6 %** | 95.54 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TX35U PLUS AX 1800 adaptér... | 29.90 € | **23.90 €** | 33.9 % | **7.1 %** | 23.95 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA37BE AX 1200, WiFi ... | 39.50 € | **33.50 €** | 32.0 % | **12.0 %** | 33.67 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Levenhuk New Atom 7x50 | 62.90 € | **57.00 €** | 26.5 % | **14.6 %** | 57.25 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link TL-WA801N AP/AP Client, WDS, 1x ... | 26.50 € | **20.90 €** | 33.5 % | **5.3 %** | 19.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| USB klient TP-Link Archer T4U AC 1300 Dual Band Wire... | 28.50 € | **22.90 €** | 32.8 % | **6.7 %** | 22.76 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 276.00 € | **270.50 €** | 7.2 % | **5.0 %** | 242.29 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| WiFi router TP-Link TL-WR802N cestovní AP/klient, 1x... | 28.50 € | **23.00 €** | 30.6 % | **5.4 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link TL-SG105E smart 5x GLan | 27.00 € | **21.50 €** | 32.0 % | **5.1 %** | 18.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chytrý spínač TP-Link Tapo S110E bezdrôtový | 28.00 € | **22.50 €** | 33.0 % | **6.8 %** | 22.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Adaptér TP-Link UE330C USB C na 1G Ethernet, 3x USB | 27.00 € | **21.50 €** | 32.0 % | **5.1 %** | 21.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chytrý spínač TP-Link Tapo S112 bezdrôtové | 28.00 € | **22.50 €** | 33.0 % | **6.8 %** | 22.56 € | cena podľa najlacnejšieho iného predajcu |
| Chytrý vypínač TP-Link Tapo S220 svetelný, 2pólový j... | 29.00 € | **23.50 €** | 31.4 % | **6.5 %** | 23.79 € | cena podľa najlacnejšieho iného predajcu |
| Sieťová karta TP-Link Mercusys MA80XE AX 3000, WiFi ... | 27.00 € | **21.50 €** | 31.9 % | **5.0 %** | 21.85 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TX20U AX 1800 adaptér, 2,4... | 27.00 € | **21.50 €** | 32.0 % | **5.1 %** | 21.89 € | cena podľa najlacnejšieho iného predajcu |
| WiFi extender TP-Link TL-WA860RE Extender/Repeater -... | 25.50 € | **20.50 €** | 32.5 % | **6.5 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Switch TP-Link LS105LP 1x LAN, 4x LAN s PoE, 41W | 25.50 € | **20.50 €** | 32.9 % | **6.8 %** | 20.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Chytrý IoT hub TP-Link Tapo H110 IR, 2,4GHz, 868Hz | 26.50 € | **21.50 €** | 31.9 % | **7.0 %** | 21.60 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110P 2x LAN s PoE, 8x LAN ... | 34.00 € | **29.00 €** | 31.6 % | **12.2 %** | 29.39 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TX30U Plus AX 1800 adaptér... | 30.50 € | **26.00 €** | 33.0 % | **13.4 %** | 26.03 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Prosperplast SORTIBOX 3 x 35 l popolavý | 28.90 € | **24.50 €** | 31.0 % | **11.0 %** | 24.55 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje GS543D15X | 344.90 € | **340.90 €** | 15.3 % | **14.0 %** | 341.00 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Levenhuk Atom 12x25 | 31.50 € | **27.50 €** | 24.9 % | **9.0 %** | 27.75 € | cena podľa najlacnejšieho iného predajcu |
| Tefal DN853BE0 | 65.50 € | **61.50 €** | 33.6 % | **25.4 %** | 61.90 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Discovery Gator 10x42 Monocular | 29.50 € | **26.00 €** | 26.0 % | **11.1 %** | 26.50 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Chic Bin M Steel | 27.90 € | **24.50 €** | 27.8 % | **12.2 %** | 24.89 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio NP-FV100 vrátane info chipu pre Sony | 32.00 € | **28.90 €** | 26.9 % | **14.6 %** | 28.96 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto ZWSM16-W2 TUYA | 13.50 € | **11.00 €** | 38.2 % | **12.6 %** | 11.10 € | cena podľa najlacnejšieho iného predajcu |
| Umax U-Smart Robot Accesories | 23.50 € | **21.00 €** | 30.8 % | **16.9 %** | 21.21 € | cena podľa najlacnejšieho iného predajcu |
| Ďalekohľad Levenhuk Atom 8x42 monokulárny | 27.00 € | **24.50 €** | 25.1 % | **13.6 %** | 24.80 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš KIS Chic Bin M Black | 27.90 € | **26.00 €** | 26.4 % | **17.8 %** | 26.28 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná stolná lampička s klipom bi... | 11.50 € | **10.00 €** | 36.1 % | **18.3 %** | 10.30 € | cena podľa najlacnejšieho iného predajcu |
| ELDONEX ECL-2015-SL Analogové hodiny | 12.50 € | **11.50 €** | 18.4 % | **9.0 %** | 11.60 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-A270-S digital smart lock -5572 WiFi Silver | 107.90 € | **107.00 €** | 41.5 % | **40.3 %** | 107.45 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doštička 3 Legged Thing Universal Sta... | 53.50 € | **52.90 €** | 25.5 % | **24.0 %** | 53.00 € | cena podľa najlacnejšieho iného predajcu |
| Rýchloupínacia doštička 3 Legged Thing Universal Sta... | 53.50 € | **52.90 €** | 25.5 % | **24.0 %** | 53.00 € | cena podľa najlacnejšieho iného predajcu |
| Batéria NAC B-40-LI-20V 4Ah | 54.00 € | **53.50 €** | 30.0 % | **28.8 %** | 53.59 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 318.50 € | **318.00 €** | 9.4 % | **9.2 %** | 318.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 84.50 € | **84.00 €** | 9.2 % | **8.5 %** | 84.39 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1284.00 € | **1283.50 €** | 7.3 % | **7.3 %** | 1283.89 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 294.50 € | **294.00 €** | 46.3 % | **46.1 %** | 294.39 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač akumulátorový  TEESA TSA5055 SWEEPER 9000 2v1 | 86.50 € | **86.00 €** | 8.2 % | **7.6 %** | 86.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 273.00 € | **272.50 €** | 7.2 % | **7.0 %** | 272.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 254.00 € | **253.50 €** | 6.2 % | **6.0 %** | 253.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 156.00 € | **155.50 €** | 10.8 % | **10.5 %** | 155.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 70.00 € | **69.50 €** | 6.5 % | **5.7 %** | 69.89 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 235.00 € | **234.50 €** | 7.2 % | **7.0 %** | 234.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 201.00 € | **200.50 €** | 6.5 % | **6.3 %** | 200.89 € | cena podľa najlacnejšieho iného predajcu |
| Podvodné púzdro DiCAPac WP-S3 pro fotoaparáty se zoomem | 73.90 € | **73.50 €** | 25.2 % | **24.5 %** | 73.80 € | cena podľa najlacnejšieho iného predajcu |
| Súprava laserového gravírovacieho stroja xTool F2 Ul... | 5767.00 € | **5766.90 €** | 8.1 % | **8.1 %** | 5767.00 € | cena podľa najlacnejšieho iného predajcu |

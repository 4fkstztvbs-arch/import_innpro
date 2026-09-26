# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-26

Vstup: `premiumstore-sk_2026-09-26_20-37.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **7139**
- Návrh **zvýšiť** cenu: **212** produktov
- Návrh **znížiť** cenu: **373** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6554** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **31**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **499**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (212)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Batéria pre zavážaciu loďku Flytec V030, 20 000 mAh | 44.50 € | **250.50 €** | 14.5 % | **544.5 %** | 250.58 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare VITURE Pro 2 XR | 344.50 € | **390.00 €** | 20.0 % | **35.9 %** | 390.20 € | cena podľa najlacnejšieho iného predajcu |
| Beko B3BCNA324HS | 602.50 € | **626.00 €** | 5.0 % | **9.1 %** | 626.44 € | cena podľa najlacnejšieho iného predajcu |
| Set of 6 filters Freewell for DJI Action 4 | 75.50 € | **98.90 €** | 14.9 % | **50.5 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 16.50 € | **26.00 €** | 5.5 % | **66.3 %** | 26.29 € | cena podľa najlacnejšieho iného predajcu |
| Vrecková akčná kamera SJCAM C300 | 129.50 € | **139.00 €** | 20.6 % | **29.4 %** | 139.30 € | cena podľa najlacnejšieho iného predajcu |
| Samsung QE50Q7F QLED | 365.50 € | **375.00 €** | 5.1 % | **7.8 %** | 375.30 € | cena podľa najlacnejšieho iného predajcu |
| Súprava laserového gravírovacieho stroja xTool F2 Ul... | 6258.50 € | **6267.90 €** | 9.6 % | **9.8 %** | 6267.92 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C300 | 129.90 € | **139.00 €** | 5.3 % | **12.7 %** | 139.30 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C300 | 129.90 € | **139.00 €** | 5.3 % | **12.7 %** | 139.30 € | cena podľa najlacnejšieho iného predajcu |
| Barkan 464XL | 121.50 € | **130.50 €** | 20.8 % | **29.8 %** | 130.90 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM017 20 kg výrobník ľadových kociek (čierny) | 204.00 € | **212.00 €** | 18.6 % | **23.3 %** | 212.04 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900 (čierna) + 7 venti... | 70.00 € | **78.00 €** | 8.0 % | **20.3 %** | 78.46 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant MOZA RACING Porsche MISSION R | 1385.50 € | **1392.50 €** | 11.8 % | **12.4 %** | 1392.69 € | cena podľa najlacnejšieho iného predajcu |
| Päťzónový indukčný sporák IsEasy LI5-01 | 196.50 € | **203.50 €** | 17.5 % | **21.7 %** | 203.79 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH98A9WO | 272.50 € | **279.50 €** | 5.0 % | **7.7 %** | 279.80 € | cena podľa najlacnejšieho iného predajcu |
| Vysokoúčinný filter DJI ROMO | 27.90 € | **34.50 €** | 15.2 % | **42.5 %** | 34.77 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná cyklistická pumpa Flextail Tiny Bike Pump P... | 60.00 € | **66.50 €** | 12.5 % | **24.7 %** | 66.83 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na starostlivosť o srsť domácich zvierat Pet... | 79.50 € | **85.50 €** | 15.2 % | **23.9 %** | 85.79 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCircle XL s MgS FIXMC-XL-BK | 19.50 € | **24.90 €** | 12.0 % | **43.1 %** | 24.99 € | cena podľa najlacnejšieho iného predajcu |
| Apple AirPods Max Midnight (2024) | 413.50 € | **418.90 €** | 5.1 % | **6.4 %** | 419.00 € | cena podľa najlacnejšieho iného predajcu |
| Echosonda Flytec XJ-01 Fishfinder | 67.90 € | **73.00 €** | 15.3 % | **23.9 %** | 73.50 € | cena podľa najlacnejšieho iného predajcu |
| Základňa volantu MOZA RACING R25 RS091 | 989.50 € | **994.50 €** | 12.8 % | **13.4 %** | 994.79 € | cena podľa najlacnejšieho iného predajcu |
| Euhomy IM005 15 kg výrobník ľadu (čierny) | 145.50 € | **150.50 €** | 18.5 % | **22.6 %** | 150.88 € | cena podľa najlacnejšieho iného predajcu |
| Projektor Blitzwolf BW-V12 | 257.00 € | **262.00 €** | 17.1 % | **19.4 %** | 262.38 € | cena podľa najlacnejšieho iného predajcu |
| MEROSS MRS200MA-EU – inteligentný navíjací mechanizm... | 126.00 € | **131.00 €** | 20.0 % | **24.7 %** | 131.47 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 85.50 € | **90.00 €** | 5.8 % | **11.4 %** | 90.38 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Creality RaptorX | 2824.00 € | **2828.50 €** | 16.1 % | **16.3 %** | 2828.90 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1500G | 229.50 € | **234.00 €** | 19.7 % | **22.0 %** | 234.40 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa na SUP Flextail Evo SUP Pump Pro (sivá) | 184.50 € | **188.90 €** | 26.4 % | **29.4 %** | 189.00 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant Moza Racing R5 Pro | 418.90 € | **423.00 €** | 11.0 % | **12.0 %** | 423.10 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 13 GS1331 | 202.50 € | **206.50 €** | 15.5 % | **17.7 %** | 206.63 € | cena podľa najlacnejšieho iného predajcu |
| Baterka Etenwolf CL5, 1000 lm | 19.90 € | **23.50 €** | 15.7 % | **36.7 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| EMEET SmartCam C60E 4K duálna webová kamera | 53.90 € | **57.00 €** | 15.2 % | **21.8 %** | 57.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 16.90 € | **20.00 €** | 23.9 % | **46.6 %** | 20.45 € | cena podľa najlacnejšieho iného predajcu |
| Beko FRL5388B | 128.90 € | **132.00 €** | 5.3 % | **7.9 %** | 132.50 € | cena podľa najlacnejšieho iného predajcu |
| Tefal HT652538 | 56.50 € | **59.50 €** | 5.9 % | **11.5 %** | 59.71 € | cena podľa najlacnejšieho iného predajcu |
| Wi-Fi mesh systém TP-Link Deco E4,2 kusy | 90.50 € | **93.50 €** | 17.7 % | **21.6 %** | 93.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight sušiak na topánky | 18.50 € | **21.50 €** | 6.8 % | **24.1 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93509 Pánev 24 cm | 25.50 € | **28.00 €** | 7.4 % | **17.9 %** | 28.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 31.00 € | **33.50 €** | 32.6 % | **43.3 %** | 33.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPhone 13 FIXBLM-723-BP | 18.50 € | **20.90 €** | 18.3 % | **33.7 %** | 20.91 € | cena podľa najlacnejšieho iného predajcu |
| Dvojfarebné ručné LED trubicové svietidlo NEEWER | 59.50 € | **61.90 €** | 32.9 % | **38.2 %** | 61.99 € | cena podľa najlacnejšieho iného predajcu |
| Volant MOZA RACING pre Lamborghini Revuelto | 428.90 € | **431.00 €** | 14.5 % | **15.0 %** | 431.09 € | cena podľa najlacnejšieho iného predajcu |
| Stropné svietidlo Yeelight MercuryE C300 so senzorom... | 24.90 € | **27.00 €** | 27.5 % | **38.2 %** | 27.36 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C675D KIT 2× 2K, vonkajšia, IP P... | 223.90 € | **225.90 €** | 12.0 % | **13.0 %** | 225.96 € | cena podľa najlacnejšieho iného predajcu |
| Resto 95002 Pánev Crater 26 cm | 38.50 € | **40.50 €** | 8.0 % | **13.6 %** | 40.58 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka NILS Extreme HM1302 černá | 43.00 € | **45.00 €** | 6.7 % | **11.6 %** | 45.22 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 14.50 € | **16.50 €** | 19.3 % | **35.8 %** | 16.79 € | cena podľa najlacnejšieho iného predajcu |
| Letecký simulátor MOZA RACING AB6 | 446.00 € | **448.00 €** | 12.9 % | **13.4 %** | 448.29 € | cena podľa najlacnejšieho iného predajcu |
| Úložná taška Telesin EVA pre DJI Action 3/4/5 (veľko... | 12.00 € | **14.00 €** | 13.3 % | **32.2 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| ALI SUPER ANC+, BT sluch., černá TWS10BK | 28.90 € | **30.50 €** | 11.2 % | **17.4 %** | 30.54 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá TWS QCY MeloBuds N70 (titánovo-zlaté) | 45.90 € | **47.50 €** | 15.4 % | **19.4 %** | 47.77 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný vypínač svetla ZigBee Avatto ZTS02-EU-B... | 11.00 € | **12.50 €** | 8.7 % | **23.5 %** | 12.67 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G10152 horkovzdušná trouba | 145.00 € | **146.50 €** | 7.7 % | **8.8 %** | 146.80 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera EMEET SmartCam C950 4K | 27.50 € | **29.00 €** | 14.9 % | **21.2 %** | 29.42 € | cena podľa najlacnejšieho iného predajcu |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 129.50 € | **131.00 €** | 19.5 % | **20.8 %** | 131.43 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 10.50 € | **12.00 €** | 5.9 % | **21.0 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Motor na ovládanie závesov SwitchBot Rod 2 (biely) | 53.50 € | **54.90 €** | 22.4 % | **25.6 %** | 55.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 9.80 € | **11.00 €** | 13.7 % | **27.6 %** | 11.32 € | cena podľa najlacnejšieho iného predajcu |
| Koloběžka NILS Extreme HM0107 bílo-oranžová | 58.00 € | **59.00 €** | 10.3 % | **12.2 %** | 59.01 € | cena podľa najlacnejšieho iného predajcu |
| PROSCENIC P15 – bezdrôtový vertikálny vysávač | 136.00 € | **137.00 €** | 21.1 % | **22.0 %** | 137.08 € | cena podľa najlacnejšieho iného predajcu |
| Prenosná pumpa na pneumatiky Flextail Evo 150 (čierna) | 26.00 € | **27.00 €** | 35.2 % | **40.4 %** | 27.09 € | cena podľa najlacnejšieho iného predajcu |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 141.00 € | **142.00 €** | 6.2 % | **7.0 %** | 142.10 € | cena podľa najlacnejšieho iného predajcu |
| JBL Tune 670NC white | 66.90 € | **67.90 €** | 15.7 % | **17.4 %** | 68.00 € | cena podľa najlacnejšieho iného predajcu |
| GL.iNet Beryl AX Wi-Fi 6 router | 106.00 € | **107.00 €** | 5.2 % | **6.2 %** | 107.16 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 43.00 € | **44.00 €** | 34.5 % | **37.6 %** | 44.17 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Clip TWS09BK černá | 19.50 € | **20.50 €** | 10.6 % | **16.2 %** | 20.73 € | cena podľa najlacnejšieho iného predajcu |
| Aligator Clip TWS09SR stříbrná | 19.50 € | **20.50 €** | 10.6 % | **16.2 %** | 20.73 € | cena podľa najlacnejšieho iného predajcu |
| Etui do smartringa RingConn Ring Protector, r.12-14,... | 12.50 € | **13.50 €** | 21.6 % | **31.3 %** | 13.78 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaci robot VEXILAR W9 | 159.50 € | **160.50 €** | 19.8 % | **20.5 %** | 160.79 € | cena podľa najlacnejšieho iného predajcu |
| Akumulátorový vertikálny vysávač ULTENIC U20 | 125.00 € | **126.00 €** | 20.0 % | **21.0 %** | 126.29 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono PD100X (biely) | 34.00 € | **35.00 €** | 26.0 % | **29.8 %** | 35.37 € | cena podľa najlacnejšieho iného predajcu |
| Mikrofón Maono PD100X (čierny) | 34.00 € | **35.00 €** | 8.9 % | **12.1 %** | 35.37 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 800 + AKU 55Ah /... | 271.00 € | **272.00 €** | 18.8 % | **19.2 %** | 272.40 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 USB-C Mini | 190.50 € | **191.50 €** | 11.3 % | **11.9 %** | 191.90 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER T2Max | 332.50 € | **333.50 €** | 30.5 % | **30.9 %** | 333.90 € | cena podľa najlacnejšieho iného predajcu |
| Termovízna kamera THERMAL MASTER X2 USB-C | 311.50 € | **312.50 €** | 26.3 % | **26.7 %** | 312.90 € | cena podľa najlacnejšieho iného predajcu |
| Interaktívny robot Loona Premium | 561.50 € | **562.50 €** | 41.6 % | **41.8 %** | 562.90 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus AS210 MAX AT1 Max Anoutway – mini pumpa na b... | 42.50 € | **43.50 €** | 11.9 % | **14.5 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu |
| Cycplus G1 bicycle computer | 22.50 € | **23.50 €** | 13.1 % | **18.2 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Televes AVANT 12 LITE 532210 (105 dBµV max., 5G LTE) | 350.00 € | **351.00 €** | 34.5 % | **34.9 %** | 351.50 € | cena podľa najlacnejšieho iného predajcu |
| Odšťavovač G21 Chamberi horizontal | 155.00 € | **155.90 €** | 8.4 % | **9.0 %** | 155.93 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C615G KIT 3MPx, vonkajšia, IP PT... | 109.00 € | **109.90 €** | 6.0 % | **6.9 %** | 109.99 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO465FR | 65.00 € | **65.90 €** | 7.7 % | **9.2 %** | 66.00 € | cena podľa najlacnejšieho iného predajcu |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 262.00 € | **262.90 €** | 22.5 % | **22.9 %** | 262.96 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare VITURE XR Luma Pro (veľkosť L) | 389.00 € | **389.90 €** | 9.8 % | **10.0 %** | 389.98 € | cena podľa najlacnejšieho iného predajcu |
| TELESIN motorcycle/bike mount for sports cameras | 16.90 € | **17.50 €** | 15.9 % | **20.1 %** | 17.71 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418+6 ventilátorov aRGB... | 76.90 € | **77.50 €** | 36.7 % | **37.8 %** | 77.58 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 193.90 € | **194.50 €** | 34.2 % | **34.6 %** | 194.59 € | cena podľa najlacnejšieho iného predajcu |
| Kamera Ezviz H4 Vonkajšia IP, 3MP, 2,8mm, LAN, WiFi | 50.00 € | **50.50 €** | 4.2 % | **5.2 %** | 49.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Ariete Handy Force One 2v1, 2708 | 52.00 € | **52.50 €** | 5.6 % | **6.7 %** | 52.51 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 93.50 € | **94.00 €** | 17.1 % | **17.8 %** | 94.01 € | cena podľa najlacnejšieho iného predajcu |
| Dávkovač krmiva PETKIT Fresh Element SOLO, 3 l | 73.00 € | **73.50 €** | 6.7 % | **7.4 %** | 73.51 € | cena podľa najlacnejšieho iného predajcu |
| Masážny prístroj na šiju a chrbát, REBEL ACTIVE RBA-... | 32.00 € | **32.50 €** | 5.4 % | **7.0 %** | 32.52 € | cena podľa najlacnejšieho iného predajcu |
| Masážny prístroj na nohy a lýtka Shiatsu, REBEL ACTI... | 32.00 € | **32.50 €** | 5.4 % | **7.0 %** | 32.52 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 97.50 € | **98.00 €** | 23.6 % | **24.3 %** | 98.02 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA21PL3C-V3 2.0 Mpix venkovní IP kamera s IR ... | 76.50 € | **77.00 €** | 16.6 % | **17.4 %** | 77.03 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 105.00 € | **105.50 €** | 18.6 % | **19.1 %** | 105.53 € | cena podľa najlacnejšieho iného predajcu |
| Solac Q609 | 19.50 € | **20.00 €** | 16.1 % | **19.0 %** | 20.04 € | cena podľa najlacnejšieho iného predajcu |
| Multifunkčný tréninková hrazda REBEL ACTIVE RBA-2404 | 107.00 € | **107.50 €** | 14.5 % | **15.0 %** | 107.54 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Experience Graphite Black | 250.50 € | **251.00 €** | 16.7 % | **16.9 %** | 251.05 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Experience White | 250.50 € | **251.00 €** | 16.7 % | **16.9 %** | 251.05 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing CM2 RS072 displej | 216.50 € | **217.00 €** | 17.1 % | **17.4 %** | 217.05 € | cena podľa najlacnejšieho iného predajcu |
| Orbitrek REBEL ACTIVE RBA-1011 | 133.00 € | **133.50 €** | 7.1 % | **7.5 %** | 133.55 € | cena podľa najlacnejšieho iného predajcu |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1444.50 € | **1445.00 €** | 7.5 % | **7.5 %** | 1445.06 € | cena podľa najlacnejšieho iného predajcu |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 119.00 € | **119.50 €** | 9.0 % | **9.4 %** | 119.57 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-WH 11'6" 350x8... | 166.00 € | **166.50 €** | 15.3 % | **15.6 %** | 166.57 € | cena podľa najlacnejšieho iného predajcu |
| Plynový sporák ISEASY MGBS-604D so 4 horákmi | 101.50 € | **102.00 €** | 12.9 % | **13.5 %** | 102.07 € | cena podľa najlacnejšieho iného predajcu |
| Náhradní filtrační kapsle GARNI BS 45T | 16.00 € | **16.50 €** | 14.3 % | **17.9 %** | 16.59 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ruční šlehač ZHM2459BS | 51.00 € | **51.50 €** | 8.8 % | **9.9 %** | 51.59 € | cena podľa najlacnejšieho iného predajcu |
| WiFi extender REBEL KOM1032 | 25.00 € | **25.50 €** | 17.4 % | **19.7 %** | 25.59 € | cena podľa najlacnejšieho iného predajcu |
| AI-NC-T50L3-MW-0360 5.0 Mpix venkovní IP kamera s IR... | 136.00 € | **136.50 €** | 17.5 % | **17.9 %** | 136.59 € | cena podľa najlacnejšieho iného predajcu |
| SkyRC BD380+ vybíjač | 104.00 € | **104.50 €** | 20.9 % | **21.4 %** | 104.59 € | cena podľa najlacnejšieho iného predajcu |
| Termoregulačný inteligentný pelech Petoneer Cozy Sofa | 99.00 € | **99.50 €** | 9.6 % | **10.2 %** | 99.59 € | cena podľa najlacnejšieho iného predajcu |
| Braun SI3042VI | 35.50 € | **36.00 €** | 12.4 % | **14.0 %** | 36.10 € | cena podľa najlacnejšieho iného predajcu |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 159.50 € | **160.00 €** | 6.4 % | **6.7 %** | 160.10 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 26SSB6G-S | 331.50 € | **332.00 €** | 5.0 % | **5.2 %** | 332.10 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT685II TTL pre Sony | 126.50 € | **127.00 €** | 6.2 % | **6.6 %** | 127.12 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 119.50 € | **120.00 €** | 13.0 % | **13.5 %** | 120.12 € | cena podľa najlacnejšieho iného predajcu |
| Bravo Ellis B-4364 šedá | 16.50 € | **17.00 €** | 5.1 % | **8.3 %** | 17.13 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 121.00 € | **121.50 €** | 13.0 % | **13.5 %** | 121.63 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W3 ... | 12.00 € | **12.50 €** | 19.3 % | **24.2 %** | 12.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 19.00 € | **19.50 €** | 15.5 % | **18.6 %** | 19.63 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection red | 208.50 € | **209.00 €** | 16.6 % | **16.8 %** | 209.14 € | cena podľa najlacnejšieho iného predajcu |
| TechniSat DIGITRADIO 217 /černé/ 0000/3998 | 126.50 € | **127.00 €** | 11.0 % | **11.4 %** | 127.15 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 114.00 € | **114.50 €** | 17.1 % | **17.6 %** | 114.67 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE ECT601FM | 132.50 € | **133.00 €** | 5.3 % | **5.7 %** | 133.17 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.00 € | **19.50 €** | 33.4 % | **36.9 %** | 19.68 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 35.00 € | **35.50 €** | 11.4 % | **13.0 %** | 35.69 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 35.00 € | **35.50 €** | 11.8 % | **13.4 %** | 35.69 € | cena podľa najlacnejšieho iného predajcu |
| Činková tyč olympijská rovná s ložisky 120cm 9kg 50m... | 54.00 € | **54.50 €** | 12.5 % | **13.5 %** | 54.69 € | cena podľa najlacnejšieho iného predajcu |
| Sklokeramická/elektrická varná doska IsEasy LT5-02 | 155.50 € | **156.00 €** | 11.3 % | **11.6 %** | 156.19 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED svetelný pás, 3CCT, 5m, sada s 12V adapt... | 14.00 € | **14.50 €** | 38.1 % | **43.1 %** | 14.70 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot CSC062X | 156.00 € | **156.50 €** | 5.7 % | **6.1 %** | 156.70 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 169.50 € | **170.00 €** | 17.8 % | **18.2 %** | 170.20 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 11, strieborná... | 177.50 € | **178.00 €** | 14.6 % | **14.9 %** | 178.23 € | cena podľa najlacnejšieho iného predajcu |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 339.50 € | **340.00 €** | 6.7 % | **6.8 %** | 340.23 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-C102COC101 | 10.50 € | **11.00 €** | 6.3 % | **11.4 %** | 11.25 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 195.00 € | **195.50 €** | 9.6 % | **9.9 %** | 195.75 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro | 124.50 € | **125.00 €** | 8.9 % | **9.4 %** | 125.25 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 300.50 € | **301.00 €** | 6.0 % | **6.1 %** | 301.26 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 265.50 € | **266.00 €** | 7.1 % | **7.3 %** | 266.28 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 40.00 € | **40.50 €** | 10.1 % | **11.4 %** | 40.79 € | cena podľa najlacnejšieho iného predajcu |
| Trojkanálová nabíjačka batérií pre GoPro Hero 13 Bla... | 12.00 € | **12.50 €** | 13.6 % | **18.3 %** | 12.79 € | cena podľa najlacnejšieho iného predajcu |
| FIXED MagCircle držiak s MgS FIXMC-V-BK | 18.50 € | **19.00 €** | 27.6 % | **31.0 %** | 19.30 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 165.00 € | **165.50 €** | 30.9 % | **31.3 %** | 165.80 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 217.00 € | **217.50 €** | 13.4 % | **13.6 %** | 217.81 € | cena podľa najlacnejšieho iného predajcu |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 217.00 € | **217.50 €** | 36.3 % | **36.6 %** | 217.81 € | cena podľa najlacnejšieho iného predajcu |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 187.00 € | **187.50 €** | 10.1 % | **10.4 %** | 187.82 € | cena podľa najlacnejšieho iného predajcu |
| Herný volant PXN-V10 (PC / PS3 / PS4 / XBOX ONE / SW... | 212.00 € | **212.50 €** | 19.0 % | **19.2 %** | 212.84 € | cena podľa najlacnejšieho iného predajcu |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 25.50 € | **26.00 €** | 6.7 % | **8.8 %** | 26.36 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4512 PRO TOURING 38... | 295.50 € | **296.00 €** | 12.5 % | **12.7 %** | 296.36 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 13, zlatá) | 212.00 € | **212.50 €** | 37.2 % | **37.5 %** | 212.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 7, zlatá) | 212.00 € | **212.50 €** | 36.9 % | **37.2 %** | 212.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 9, strieborná ... | 212.00 € | **212.50 €** | 36.9 % | **37.2 %** | 212.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Air Gen 2 (veľkosť 9, zlatá) | 212.00 € | **212.50 €** | 36.9 % | **37.2 %** | 212.88 € | cena podľa najlacnejšieho iného predajcu |
| Smartring RingConn Gen 2 Air RCA-02 (veľkosť 12, str... | 212.00 € | **212.50 €** | 36.9 % | **37.2 %** | 212.88 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 13 GEN 3 GS1333 | 249.50 € | **250.00 €** | 20.5 % | **20.8 %** | 250.39 € | cena podľa najlacnejšieho iného predajcu |
| AB LNB01 Octo Red Edition | 20.00 € | **20.50 €** | 5.2 % | **7.9 %** | 20.89 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93511 Pánev 28 cm | 32.50 € | **33.00 €** | 5.0 % | **6.6 %** | 33.40 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.00 € | **12.50 €** | 18.5 % | **23.5 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed Game Pods FIXPDS-G-WH | 42.50 € | **43.00 €** | 14.9 % | **16.3 %** | 43.44 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4513 WINDSURFING  3... | 345.50 € | **346.00 €** | 14.0 % | **14.1 %** | 346.46 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 23.50 € | **24.00 €** | 11.2 % | **13.6 %** | 24.49 € | cena podľa najlacnejšieho iného predajcu |
| Telesin magnetic tabletop mount phone stand | 21.50 € | **22.00 €** | 16.1 % | **18.8 %** | 22.50 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 193.50 € | **194.00 €** | 9.1 % | **9.4 %** | 194.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 66.50 € | **66.90 €** | 35.3 % | **36.1 %** | 66.92 € | cena podľa najlacnejšieho iného predajcu |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 108.50 € | **108.90 €** | 7.7 % | **8.1 %** | 108.93 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 166.50 € | **166.90 €** | 15.6 % | **15.9 %** | 166.94 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 166.50 € | **166.90 €** | 15.6 % | **15.9 %** | 166.94 € | cena podľa najlacnejšieho iného predajcu |
| Posilňovací stroj na drepy MERACH MR-R07H1 | 89.50 € | **89.90 €** | 39.9 % | **40.5 %** | 89.94 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (biely) | 181.50 € | **181.90 €** | 10.2 % | **10.5 %** | 181.95 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 181.50 € | **181.90 €** | 10.2 % | **10.5 %** | 181.95 € | cena podľa najlacnejšieho iného predajcu |
| HiBREW 5-in-1 capsule coffee maker H1B-black (black) | 106.50 € | **106.90 €** | 14.3 % | **14.7 %** | 106.99 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V /  9Ah  VIPOW bezúdržbový akumu... | 15.50 € | **15.90 €** | 3.5 % | **6.1 %** | 15.27 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentný spínací modul ZigBee Avatto ZWSM16-W1 TUYA | 7.90 € | **8.30 €** | 15.3 % | **21.1 %** | 8.39 € | cena podľa najlacnejšieho iného predajcu |
| Zastrihávač pre domáce zvieratá 2v1 Petkit | 22.50 € | **22.90 €** | 22.0 % | **24.2 %** | 22.91 € | cena podľa najlacnejšieho iného predajcu |
| Vakuová svářečka fólií TEESA V200 | 32.50 € | **32.90 €** | 16.7 % | **18.1 %** | 32.94 € | cena podľa najlacnejšieho iného predajcu |
| Akupresurní podložka REBEL ACTIVE RBA-6013-GL 130x50... | 31.50 € | **31.90 €** | 11.3 % | **12.8 %** | 31.94 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo TP-Link Tapo RVA500 nádobka na prach p... | 33.50 € | **33.90 €** | 7.6 % | **8.9 %** | 33.95 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovacia dóza G21 2 L, marinovacia | 22.50 € | **22.90 €** | 14.2 % | **16.2 %** | 22.99 € | cena podľa najlacnejšieho iného predajcu |
| Zátěžová deka Rebel Active RBA-6014-9   9 kg (150x20... | 32.50 € | **32.90 €** | 9.0 % | **10.3 %** | 32.99 € | cena podľa najlacnejšieho iného predajcu |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 51.50 € | **51.90 €** | 6.3 % | **7.1 %** | 51.99 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Stolní mixér, G2009800, skleně | 52.50 € | **52.90 €** | 14.1 % | **14.9 %** | 52.99 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 61.50 € | **61.90 €** | 14.8 % | **15.6 %** | 61.99 € | cena podľa najlacnejšieho iného predajcu |
| Pogumované liatinové činky HEX 2 × 7 kg REBEL ACTIVE... | 53.50 € | **53.90 €** | 62.9 % | **64.1 %** | 53.99 € | cena podľa najlacnejšieho iného predajcu |
| Mini stepper Rebel Active RBA-3226 | 51.50 € | **51.90 €** | 5.2 % | **6.0 %** | 51.99 € | cena podľa najlacnejšieho iného predajcu |
| Robot na čistenie bazénov WYBOT M1C | 669.50 € | **669.90 €** | 5.4 % | **5.4 %** | 670.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.70 € | **9.90 €** | 34.6 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.70 €** | 33.9 % | **36.7 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 70 | 349.90 € | **350.00 €** | 6.7 % | **6.7 %** | 350.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 19.90 € | **20.00 €** | 44.2 % | **44.9 %** | 20.01 € | cena podľa najlacnejšieho iného predajcu |
| Slúchadlá QCY H3 Pro (biele) | 40.90 € | **41.00 €** | 11.8 % | **12.1 %** | 41.02 € | cena podľa najlacnejšieho iného predajcu |
| Teplomer a vlhkomer CO2 SwitchBot Meter Pro | 44.90 € | **45.00 €** | 22.2 % | **22.4 %** | 45.05 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 17 Ah MHPower MS17-12 | 30.90 € | **31.00 €** | 18.7 % | **19.1 %** | 31.06 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná IP kamera Gosund IPC3, IP65 | 47.90 € | **48.00 €** | 34.0 % | **34.2 %** | 48.07 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 43.90 € | **44.00 €** | 5.5 % | **5.8 %** | 44.10 € | cena podľa najlacnejšieho iného predajcu |
| Coox forma QUICHE průměr 26 cm, červená | 25.90 € | **26.00 €** | 11.7 % | **12.1 %** | 26.42 € | cena podľa najlacnejšieho iného predajcu |
| Coox forma SPRING průměr 26 cm, červená | 25.90 € | **26.00 €** | 11.7 % | **12.1 %** | 26.42 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie Gari, 44W, 3960lm, 3CCT, IP65... | 19.90 € | **20.00 €** | 34.4 % | **35.1 %** | 20.45 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, bodová , 5W, GU10, 6000K, 425l... | 1.00 € | **1.10 €** | 31.1 % | **44.2 %** | 1.11 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.80 € | **1.90 €** | 39.4 % | **47.1 %** | 1.91 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.30 € | **9.40 €** | 25.6 % | **26.9 %** | 9.42 € | cena podľa najlacnejšieho iného predajcu |
| Ratanová LED hviezda Solight 1V246, 40 cm, 40 LED, 2... | 3.20 € | **3.30 €** | 16.1 % | **19.8 %** | 3.39 € | cena podľa najlacnejšieho iného predajcu |
| MENALUX F152 | 10.90 € | **11.00 €** | 11.0 % | **12.1 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 178.90 € | **179.00 €** | 19.5 % | **19.5 %** | 179.09 € | cena podľa najlacnejšieho iného predajcu |
| Herné kreslo KRUGER & MATZ GX-150, bielo-ružové | 87.90 € | **88.00 €** | 8.7 % | **8.8 %** | 88.20 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta 3v1 RH5A32E0 | 119.90 € | **120.00 €** | 10.1 % | **10.2 %** | 120.21 € | cena podľa najlacnejšieho iného predajcu |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 199.90 € | **200.00 €** | 19.3 % | **19.4 %** | 200.38 € | cena podľa najlacnejšieho iného predajcu |
| Súprava celodenných filtrov Freewell Real Locking s ... | 224.90 € | **225.00 €** | 17.5 % | **17.6 %** | 225.46 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy ION Hurricane H5 Plus | 104.90 € | **105.00 €** | 5.3 % | **5.4 %** | 105.50 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (373)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| 3D tlačiareň QiDi Plus 4 | 899.90 € | **837.50 €** | 32.3 % | **23.2 %** | 837.80 € | cena podľa najlacnejšieho iného predajcu |
| Roborock Qrevo Edge 2 Pro White | 1275.90 € | **1217.90 €** | 10.0 % | **5.0 %** | 831.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link Tapo C665G KIT 4MPx, vonkajšia, IP PT... | 247.50 € | **195.50 €** | 33.2 % | **5.2 %** | 192.75 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Mini PC Minix ER936-AI s procesorom Ryzen 365,32 GB ... | 1135.90 € | **1086.00 €** | 15.0 % | **10.0 %** | 1086.32 € | cena podľa najlacnejšieho iného predajcu |
| Rowenta RH7AC1E0 | 275.90 € | **227.00 €** | 33.7 % | **10.0 %** | 227.13 € | cena podľa najlacnejšieho iného predajcu |
| Detektor kovov Garrett ACE Apex | 539.90 € | **491.90 €** | 40.4 % | **27.9 %** | 491.94 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C660 KIT 8MPx, vonkajšia, IP PTZ... | 193.50 € | **153.50 €** | 32.4 % | **5.1 %** | 141.03 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link Tapo C465 8MPx, vonkajšia, IP, WiFi, ... | 171.00 € | **134.90 €** | 33.4 % | **5.3 %** | 109.61 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 328.50 € | **298.50 €** | 62.4 % | **47.6 %** | 298.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 187.50 € | **158.00 €** | 32.5 % | **11.7 %** | 158.29 € | cena podľa najlacnejšieho iného predajcu |
| Beko TB622ECWCS | 344.50 € | **315.50 €** | 20.0 % | **9.9 %** | 315.68 € | cena podľa najlacnejšieho iného predajcu |
| Koleso MOZA RS068 FSR V2 (PC) | 674.50 € | **647.00 €** | 14.3 % | **9.7 %** | 647.03 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C630 KIT 5MPx, vonkajšia, IP PTZ... | 125.00 € | **99.50 €** | 32.1 % | **5.1 %** | 99.55 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 505.00 € | **481.50 €** | 34.1 % | **27.9 %** | 481.65 € | cena podľa najlacnejšieho iného predajcu |
| Súprava StreetGrip Telesin GoPro Hero 9-13 s klietkou | 88.90 € | **65.90 €** | 63.6 % | **21.3 %** | 65.96 € | cena podľa najlacnejšieho iného predajcu |
| Puškohled LEVENHUK Halo NVR50 s nočným videním | 418.90 € | **395.90 €** | 14.1 % | **7.8 %** | 396.00 € | cena podľa najlacnejšieho iného predajcu |
| Candy BR 10N3BX-S | 490.00 € | **467.90 €** | 10.0 % | **5.0 %** | 439.20 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Candy BRS 7N3BX-S | 482.90 € | **460.90 €** | 10.1 % | **5.1 %** | 449.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blender G21 Excellent Graphite Black | 228.50 € | **208.90 €** | 16.1 % | **6.1 %** | 209.00 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C246D IP, 3MPx Dual, WiFi, prísv... | 92.00 € | **72.90 €** | 32.5 % | **5.0 %** | 62.11 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Guzzanti GZ 352B | 586.00 € | **568.00 €** | 13.5 % | **10.0 %** | 568.18 € | cena podľa najlacnejšieho iného predajcu |
| TERMOVÍZNA KAMERA THERMAL MASTER X2 USB-C Mini | 308.50 € | **290.90 €** | 47.1 % | **38.7 %** | 290.99 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C400 KIT 2MPx, vonkajšia, IP, Wi... | 73.00 € | **56.90 €** | 35.2 % | **5.4 %** | 51.65 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Candy GD 17SSB7-S | 303.00 € | **287.00 €** | 12.7 % | **6.7 %** | 287.10 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC410 KIT 3MPx, vonkajšia, I... | 75.00 € | **60.00 €** | 32.2 % | **5.7 %** | 60.05 € | cena podľa najlacnejšieho iného predajcu |
| Spinningové kolo REBEL ACTIVE RBA-1006 | 266.50 € | **252.00 €** | 65556.6 % | **61984.3 %** | 252.17 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I74S-FFDD10, 4 va... | 181.50 € | **167.00 €** | 33.9 % | **23.2 %** | 167.29 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje DE69CS | 518.50 € | **504.50 €** | 10.5 % | **7.5 %** | 504.89 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare RayNeo X3 Pro AR | 1536.50 € | **1522.90 €** | 14.0 % | **13.0 %** | 1522.91 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 1836A | 279.00 € | **265.50 €** | 15.4 % | **9.8 %** | 265.86 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C236 IP, 5MPx, WiFi, prisvetleni... | 61.90 € | **48.50 €** | 34.2 % | **5.1 %** | 46.65 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Indukčná varná doska AMZCHEF CE-FS-I72S-FFDD06, 4 va... | 185.00 € | **173.00 €** | 28.9 % | **20.6 %** | 173.08 € | cena podľa najlacnejšieho iného predajcu |
| TP-Link Tapo RV20 Max Plus | 224.00 € | **212.00 €** | 13.6 % | **7.5 %** | 212.50 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje MO 20 A3B | 77.50 € | **66.50 €** | 22.6 % | **5.2 %** | 65.50 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Reproduktory Edifier S355DB 2.1 (hnedé) | 400.50 € | **389.50 €** | 21.3 % | **18.0 %** | 389.73 € | cena podľa najlacnejšieho iného predajcu |
| Magnetický nabíjací adaptér Telesin s krytom pre GoP... | 28.00 € | **17.90 €** | 88.6 % | **20.6 %** | 18.00 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Skywave X70 Soundbar | 608.90 € | **598.90 €** | 14.3 % | **12.4 %** | 599.00 € | cena podľa najlacnejšieho iného predajcu |
| PS5 - PlayStation Pulse Explore + Case | 208.00 € | **198.50 €** | 10.0 % | **5.0 %** | 198.40 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Candy BRS 7N2BX-S | 419.50 € | **410.00 €** | 12.5 % | **10.0 %** | 410.03 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska | 189.90 € | **180.50 €** | 29.6 % | **23.2 %** | 180.58 € | cena podľa najlacnejšieho iného predajcu |
| Herné kreslo KRUGER & MATZ GX-150, čierne, s LED pod... | 115.50 € | **106.50 €** | 14.3 % | **5.4 %** | 95.01 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Hoverboard Rebel Cruiser Joy | 182.50 € | **173.50 €** | 39.2 % | **32.4 %** | 173.71 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Tapo C216 IP, 3MPx, WiFi, prísvit, vo... | 44.50 € | **36.00 €** | 32.0 % | **6.8 %** | 36.25 € | cena podľa najlacnejšieho iného predajcu |
| Ručné LED svietidlo NEEWER RGB s trubicovým dizajnom | 96.00 € | **87.90 €** | 20.3 % | **10.1 %** | 87.99 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Charles i4 Plus Black | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 121.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Niceboy Charles i4 Plus White | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 121.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Blender G21 Perfection brown | 208.50 € | **200.50 €** | 16.6 % | **12.1 %** | 200.90 € | cena podľa najlacnejšieho iného predajcu |
| JBL Partybox Stage 320 | 429.50 € | **422.00 €** | 9.9 % | **8.0 %** | 422.10 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC500 2 Mpx, vonkajšia, IP P... | 37.50 € | **30.50 €** | 32.3 % | **7.6 %** | 30.65 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-74IB3xyzf-CS 3-zónová indukčná varná doska | 142.90 € | **136.00 €** | 29.2 % | **23.0 %** | 136.13 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový ovládač GameSir G7 Pro WC Wuchang Edition | 106.90 € | **100.00 €** | 27.8 % | **19.6 %** | 100.16 € | cena podľa najlacnejšieho iného predajcu |
| JBL Boombox4 Black Přenosný reproduktor | 457.90 € | **451.00 €** | 6.6 % | **5.0 %** | 434.14 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| AMZCHEF CE-T-74IB4xyzf-CS 4-zónová indukčná varná doska | 142.50 € | **136.00 €** | 28.9 % | **23.1 %** | 136.08 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 365.50 € | **359.00 €** | 9.2 % | **7.3 %** | 359.10 € | cena podľa najlacnejšieho iného predajcu |
| Indukčná varná doska AMZCHEF CE-FS-I95S-GFFDD0 s 5 v... | 267.00 € | **260.50 €** | 27.1 % | **24.0 %** | 260.71 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-DA41PL3-0360 4.0 Mpix venkovní IP dome kamera... | 124.00 € | **117.50 €** | 24.0 % | **17.5 %** | 117.85 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-TA41PL3C-0360 4.0 Mpix venkovní IP kamera s I... | 122.90 € | **116.50 €** | 24.3 % | **17.9 %** | 116.51 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 867.00 € | **861.00 €** | 14.3 % | **13.5 %** | 861.16 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Thermo Reflect Glide&Park L/Uni | 31.00 € | **25.00 €** | 84.5 % | **48.8 %** | 25.17 € | cena podľa najlacnejšieho iného predajcu |
| AMZCHEF CE-T-72CB4xyP200-LBHA keramická varná doska ... | 119.00 € | **113.50 €** | 26.7 % | **20.8 %** | 113.71 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 231.50 € | **226.00 €** | 47.3 % | **43.8 %** | 226.28 € | cena podľa najlacnejšieho iného predajcu |
| Skladací elektrický bežecký pás ACEZOE P12 (čierny a... | 231.50 € | **226.00 €** | 38.8 % | **35.5 %** | 226.28 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO Black | 56.50 € | **51.00 €** | 29.4 % | **16.8 %** | 51.30 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO Pink | 56.50 € | **51.00 €** | 29.4 % | **16.8 %** | 51.30 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 PRO White | 56.50 € | **51.00 €** | 29.4 % | **16.8 %** | 51.30 € | cena podľa najlacnejšieho iného predajcu |
| Podvodné puzdro Telesin Dome Port pre GoPro Hero 9 /... | 47.00 € | **41.50 €** | 57.9 % | **39.4 %** | 41.90 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC200 IP, 2 Mpx, WiFi, prisv... | 24.50 € | **19.50 €** | 32.9 % | **5.8 %** | 16.62 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Moza Racing modul osi Z AS003 | 97.50 € | **92.50 €** | 16.7 % | **10.7 %** | 92.63 € | cena podľa najlacnejšieho iného predajcu |
| JBL CHARGEES3 | 114.50 € | **109.50 €** | 10.0 % | **5.2 %** | 109.89 € | cena podľa najlacnejšieho iného predajcu |
| Tefal MY700BF0 | 126.50 € | **121.50 €** | 19.9 % | **15.2 %** | 121.90 € | cena podľa najlacnejšieho iného predajcu |
| Schodíky k mačacej toalete Catlink BayMax | 51.90 € | **47.50 €** | 15.1 % | **5.4 %** | 46.21 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BK | 23.00 € | **18.90 €** | 30.4 % | **7.2 %** | 16.67 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada radiacich páčok MOZA RACING RS094 | 52.00 € | **47.90 €** | 20.8 % | **11.3 %** | 47.97 € | cena podľa najlacnejšieho iného predajcu |
| JBL Easy sing mic mini | 174.00 € | **170.00 €** | 37.4 % | **34.3 %** | 170.12 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darflash FT418 PRO + 7 ventilátoro... | 80.50 € | **76.50 €** | 21.2 % | **15.2 %** | 76.67 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1022300 | 136.00 € | **132.00 €** | 9.8 % | **6.5 %** | 132.18 € | cena podľa najlacnejšieho iného predajcu |
| Nano projektor JMGO N1S | 466.50 € | **462.50 €** | 8.1 % | **7.1 %** | 462.69 € | cena podľa najlacnejšieho iného predajcu |
| Venta H14 Clean room filter  1 pack | 133.00 € | **129.00 €** | 16.2 % | **12.7 %** | 129.20 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo Chamber Line 30 | 186.50 € | **182.50 €** | 14.3 % | **11.8 %** | 182.70 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV 9620E0 | 375.50 € | **371.50 €** | 10.4 % | **9.3 %** | 371.70 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 300.50 € | **296.50 €** | 13.5 % | **12.0 %** | 296.70 € | cena podľa najlacnejšieho iného predajcu |
| Tesla GSM-LTE zesil. sig. 900/1800 MHz | 182.00 € | **178.00 €** | 21.7 % | **19.0 %** | 178.21 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Beans 5 POP White | 34.50 € | **30.50 €** | 31.5 % | **16.3 %** | 30.82 € | cena podľa najlacnejšieho iného predajcu |
| Činky REBEL ACTIVE RBA-2330-2 liatinové neoprénové H... | 16.50 € | **12.50 €** | 42.0 % | **7.5 %** | 12.87 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.50 € | **16.50 €** | 37.1 % | **10.3 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 19.50 € | **15.50 €** | 41.3 % | **12.3 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Projektor BlitzWolf BW-V11 | 344.50 € | **340.90 €** | 12.4 % | **11.2 %** | 341.00 € | cena podľa najlacnejšieho iného predajcu |
| Kamera TP-Link Mercusys MC210 IP, 3 Mpx, WiFi, prisv... | 25.00 € | **21.50 €** | 30.9 % | **12.6 %** | 21.51 € | cena podľa najlacnejšieho iného predajcu |
| JBL Easy sing mics | 163.50 € | **160.00 €** | 15.9 % | **13.4 %** | 160.06 € | cena podľa najlacnejšieho iného predajcu |
| Projektor JMGO PicoPlay+ | 378.50 € | **375.00 €** | 12.8 % | **11.7 %** | 375.21 € | cena podľa najlacnejšieho iného predajcu |
| Breville VST082X | 71.90 € | **68.50 €** | 10.3 % | **5.0 %** | 66.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Indukčná varná doska IsEasy LI3-17 | 154.00 € | **150.90 €** | 31.8 % | **29.2 %** | 150.92 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX TT350 TTL pre Nikon | 91.90 € | **89.00 €** | 22.0 % | **18.1 %** | 89.24 € | cena podľa najlacnejšieho iného predajcu |
| Batéria Jupio AAA 1000 mAh (mikrotužkové) 4ks, dobíj... | 11.50 € | **8.60 €** | 46.1 % | **9.2 %** | 8.66 € | cena podľa najlacnejšieho iného predajcu |
| Niceboy Polaris | 55.00 € | **52.50 €** | 10.1 % | **5.1 %** | 43.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| FENDA F&D A180X | 43.00 € | **40.50 €** | 12.4 % | **5.9 %** | 37.79 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ETA Ambito 0516 90000 bílý/tyrkysový | 63.00 € | **60.50 €** | 10.1 % | **5.7 %** | 58.21 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Okuliare VITURE XR Beast | 597.50 € | **595.00 €** | 10.4 % | **9.9 %** | 595.35 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 22.00 € | **19.50 €** | 35.3 % | **19.9 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| FM Transmitter Baseus S-09 Pro, Bluetooth (čierny) | 20.90 € | **18.50 €** | 121.8 % | **96.4 %** | 18.89 € | cena podľa najlacnejšieho iného predajcu |
| Tefal HT461138 | 45.00 € | **42.90 €** | 10.2 % | **5.1 %** | 35.91 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Odšťavovač G21 Gracioso horizontal | 204.00 € | **202.00 €** | 14.0 % | **12.9 %** | 202.02 € | cena podľa najlacnejšieho iného predajcu |
| Hori PS5/PS4/PC RWA: Racing Wheel Apex | 113.90 € | **111.90 €** | 14.2 % | **12.2 %** | 111.96 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash DS900WD ATX (čierna) | 53.50 € | **51.50 €** | 16.1 % | **11.7 %** | 51.58 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra 3 V2 | 284.90 € | **282.90 €** | 9.7 % | **9.0 %** | 283.00 € | cena podľa najlacnejšieho iného predajcu |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 323.00 € | **321.00 €** | 10.4 % | **9.8 %** | 321.10 € | cena podľa najlacnejšieho iného predajcu |
| Ležadlový rotoped MERACH MR-S08B1-EU (čierny) | 247.00 € | **245.00 €** | 36.3 % | **35.2 %** | 245.34 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.50 € | **14.50 €** | 32.3 % | **16.3 %** | 14.90 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 26050-70 | 32.50 € | **30.50 €** | 16.3 % | **9.2 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory Edifier R1600TIII 2.0 (hnedé) | 94.00 € | **92.00 €** | 25.2 % | **22.5 %** | 92.42 € | cena podľa najlacnejšieho iného predajcu |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 327.00 € | **325.00 €** | 12.5 % | **11.8 %** | 325.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia anténa, DVB-T2, 11dB | 17.90 € | **16.00 €** | 68.0 % | **50.2 %** | 16.40 € | cena podľa najlacnejšieho iného predajcu |
| Gel Blaster Surge | 40.50 € | **38.90 €** | 10.1 % | **5.8 %** | 32.92 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| LIMO BAR ECO - White | 41.50 € | **39.90 €** | 15.3 % | **10.9 %** | 39.99 € | cena podľa najlacnejšieho iného predajcu |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 83.50 € | **81.90 €** | 7.6 % | **5.5 %** | 66.76 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Slúchadlá Niceboy Pins 4 Onyx Black | 41.50 € | **40.00 €** | 32.7 % | **27.9 %** | 40.04 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená počítačová skriňa Darkflash DK431 + 4 venti... | 60.50 € | **59.00 €** | 19.0 % | **16.1 %** | 59.08 € | cena podľa najlacnejšieho iného predajcu |
| Beko PowerIntense BDFN26560XP | 540.50 € | **539.00 €** | 6.6 % | **6.3 %** | 539.10 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 18.50 € | **17.00 €** | 33.6 % | **22.7 %** | 17.11 € | cena podľa najlacnejšieho iného predajcu |
| REBEL ACTIVE RBA-1014 bežecký pás | 201.00 € | **199.50 €** | 52.5 % | **51.4 %** | 199.63 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (sivý), 1 kg | 18.00 € | **16.50 €** | 23.9 % | **13.6 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Filament Anycubic ASA (biely), 1 kg | 18.00 € | **16.50 €** | 23.8 % | **13.5 %** | 16.69 € | cena podľa najlacnejšieho iného predajcu |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 105.50 € | **104.00 €** | 10.5 % | **8.9 %** | 104.29 € | cena podľa najlacnejšieho iného predajcu |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 15.50 € | **14.00 €** | 20.4 % | **8.7 %** | 14.38 € | cena podľa najlacnejšieho iného predajcu |
| Black+Decker BXRA2001E olejový radiátor | 90.50 € | **89.00 €** | 13.9 % | **12.0 %** | 89.42 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit 81520 Pegasus 200 Solid | 39.00 € | **37.90 €** | 16.8 % | **13.5 %** | 38.00 € | cena podľa najlacnejšieho iného predajcu |
| Batéria AA MediaRange nabíjateľné USB-C Li-Ion , 1,5... | 14.00 € | **12.90 €** | 15.7 % | **6.6 %** | 11.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Kamera TP-Link Tapo C645D KIT 2x 2K, vonkajšia, IP P... | 184.50 € | **183.50 €** | 5.9 % | **5.3 %** | 139.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Elektrický posilovač svalů ABS MASTER Pro | 39.00 € | **38.00 €** | 8.0 % | **5.3 %** | 33.99 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| ETA ELA Mini 8599 90040, šedá šedá | 27.90 € | **26.90 €** | 10.0 % | **6.1 %** | 26.30 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Držiak mikrofónu Maono BA20 (čierny) | 14.50 € | **13.50 €** | 15.7 % | **7.7 %** | 13.49 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| 3D Tlačiareň Creality CR-10 SE | 189.00 € | **188.00 €** | 14.7 % | **14.1 %** | 188.01 € | cena podľa najlacnejšieho iného predajcu |
| IMOU S800 PRO palubná kamera, 4K | 105.00 € | **104.00 €** | 12.2 % | **11.1 %** | 104.08 € | cena podľa najlacnejšieho iného predajcu |
| Webová kamera OBSBOT Tiny 3 | 359.90 € | **358.90 €** | 6.9 % | **6.6 %** | 358.99 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 253.90 € | **252.90 €** | 11.1 % | **10.6 %** | 253.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 395.90 € | **394.90 €** | 5.7 % | **5.4 %** | 395.00 € | cena podľa najlacnejšieho iného predajcu |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 397.90 € | **396.90 €** | 5.5 % | **5.2 %** | 397.00 € | cena podľa najlacnejšieho iného predajcu |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 392.90 € | **391.90 €** | 6.1 % | **5.9 %** | 392.00 € | cena podľa najlacnejšieho iného predajcu |
| Makro blesk GODOX MF12 | 117.00 € | **116.00 €** | 18.0 % | **17.0 %** | 116.15 € | cena podľa najlacnejšieho iného predajcu |
| Black&Decker BXWSH2001E | 78.00 € | **77.00 €** | 13.0 % | **11.5 %** | 77.17 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Kamvas 12 GS1161 | 178.50 € | **177.50 €** | 32.1 % | **31.3 %** | 177.67 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart IT Dancing Robot, grey ASR002 | 75.50 € | **74.50 €** | 14.8 % | **13.2 %** | 74.72 € | cena podľa najlacnejšieho iného predajcu |
| ALI Smart IT Dancing Robot, oran. ASR001 | 75.50 € | **74.50 €** | 14.8 % | **13.2 %** | 74.72 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro Apple 17P FIXOP3-1602-BK | 17.50 € | **16.50 €** | 61.7 % | **52.4 %** | 16.72 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa Darkflash F1 (biela) + 6 ventiláto... | 109.00 € | **108.00 €** | 8.9 % | **7.9 %** | 108.23 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na zvýšenie výkonu pre pedále CRP2 Moza Raci... | 22.00 € | **21.00 €** | 19.1 % | **13.7 %** | 21.24 € | cena podľa najlacnejšieho iného predajcu |
| Univerzálna montážna základňa Moza Racing Flight AS006 | 29.50 € | **28.50 €** | 20.5 % | **16.4 %** | 28.76 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 234.00 € | **233.00 €** | 24.4 % | **23.8 %** | 233.30 € | cena podľa najlacnejšieho iného predajcu |
| Záložní zdroj VOLT POLSKA Sinus Pro 2000 E 12V/230V ... | 249.50 € | **248.50 €** | 21.8 % | **21.3 %** | 248.80 € | cena podľa najlacnejšieho iného predajcu |
| Remoska D52F/10 4l Dua Glass | 135.00 € | **134.00 €** | 8.6 % | **7.8 %** | 134.35 € | cena podľa najlacnejšieho iného predajcu |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 24.50 € | **23.50 €** | 15.9 % | **11.2 %** | 23.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight tryska proti krúteniu pre fén Dyson Superson... | 13.50 € | **12.50 €** | 42.4 % | **31.8 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Filtr CPL 58mm Telesin do iPhone 15 Pro/Pro Max | 16.50 € | **15.50 €** | 36.2 % | **27.9 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Zvukový mixér a zvuková karta AMC2 Neo | 46.50 € | **45.50 €** | 25.6 % | **22.9 %** | 45.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač, 3x 16A, USB A+C rychlonabíjačka ... | 12.50 € | **11.50 €** | 21.3 % | **11.6 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 82.50 € | **81.50 €** | 9.8 % | **8.5 %** | 81.90 € | cena podľa najlacnejšieho iného predajcu |
| Selfie svetlo Telesin s magnetickým držiakom telefónu | 20.50 € | **19.50 €** | 36.2 % | **29.5 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 1,5 m ... | 29.00 € | **28.00 €** | 39.9 % | **35.1 %** | 28.50 € | cena podľa najlacnejšieho iného predajcu |
| Zelmer ZMM3512B | 98.90 € | **98.00 €** | 31.3 % | **30.1 %** | 98.25 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **22.00 €** | 38.1 % | **32.7 %** | 22.35 € | cena podľa najlacnejšieho iného predajcu |
| Okuliare XREAL 1S pre rozšírenú realitu | 495.50 € | **494.90 €** | 7.6 % | **7.5 %** | 494.95 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 6.40 € | **5.80 €** | 39.9 % | **26.8 %** | 5.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 11.50 € | **10.90 €** | 12.1 % | **6.3 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 88.00 € | **87.50 €** | 9.5 % | **8.9 %** | 87.52 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 88.00 € | **87.50 €** | 9.5 % | **8.9 %** | 87.52 € | cena podľa najlacnejšieho iného predajcu |
| Solight detektor oxidu uhoľnatého a horľavých plynov | 12.50 € | **12.00 €** | 13.4 % | **8.9 %** | 12.03 € | cena podľa najlacnejšieho iného predajcu |
| CrockPot SCV400RD | 52.50 € | **52.00 €** | 10.0 % | **8.9 %** | 52.03 € | cena podľa najlacnejšieho iného predajcu |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 86.00 € | **85.50 €** | 12.1 % | **11.4 %** | 85.57 € | cena podľa najlacnejšieho iného predajcu |
| Tefal FV6812E0 | 53.50 € | **53.00 €** | 10.5 % | **9.5 %** | 53.13 € | cena podľa najlacnejšieho iného predajcu |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 49.00 € | **48.50 €** | 56.6 % | **55.0 %** | 48.67 € | cena podľa najlacnejšieho iného predajcu |
| Beper BEP-P204FER250 | 22.50 € | **22.00 €** | 10.5 % | **8.0 %** | 22.25 € | cena podľa najlacnejšieho iného predajcu |
| Externý filter SUNSUN HW-604B | 34.50 € | **34.00 €** | 23.1 % | **21.3 %** | 34.25 € | cena podľa najlacnejšieho iného predajcu |
| Gens ace G-Tech 6500mAh 11.1V 60C 3S1P Lipo Battery ... | 49.00 € | **48.50 €** | 10.8 % | **9.7 %** | 48.78 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iPho 17 FIXPUM-1600-TR | 26.50 € | **26.00 €** | 88.3 % | **84.8 %** | 26.29 € | cena podľa najlacnejšieho iného predajcu |
| Baterie LiFePO4 12,8V 33Ah VOLT+ bezúdržbový systém BMS | 123.50 € | **123.00 €** | 19.2 % | **18.8 %** | 123.30 € | cena podľa najlacnejšieho iného predajcu |
| UTRAI JS1 Pro – štartér do auta | 70.00 € | **69.50 €** | 17.1 % | **16.2 %** | 69.82 € | cena podľa najlacnejšieho iného predajcu |
| Wall charger Blitzwolf BW-S26 250 W (black) | 48.00 € | **47.50 €** | 32.7 % | **31.4 %** | 47.82 € | cena podľa najlacnejšieho iného predajcu |
| Girmi ST9100 | 42.50 € | **42.00 €** | 33.5 % | **31.9 %** | 42.33 € | cena podľa najlacnejšieho iného predajcu |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 19.50 € | **19.00 €** | 8.4 % | **5.6 %** | 19.36 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica ONIKUMA MT706 (čierna) (QWERTY) | 38.00 € | **37.50 €** | 7.1 % | **5.7 %** | 37.86 € | cena podľa najlacnejšieho iného predajcu |
| MSI MAG 274CF E20 | 109.00 € | **108.50 €** | 6.0 % | **5.5 %** | 108.86 € | cena podľa najlacnejšieho iného predajcu |
| Pamäťová karta Lexar Professional 800x Pro SDXC 256GD | 84.00 € | **83.50 €** | 19.0 % | **18.3 %** | 83.86 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 44.50 € | **44.00 €** | 13.0 % | **11.7 %** | 44.37 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 smartwatch Ultra (gold) | 38.50 € | **38.00 €** | 20.6 % | **19.1 %** | 38.38 € | cena podľa najlacnejšieho iného predajcu |
| Colmi i28 Ultra smartwatch (black) | 38.50 € | **38.00 €** | 20.6 % | **19.1 %** | 38.38 € | cena podľa najlacnejšieho iného predajcu |
| Blitzwolf BW-TA1 Cestovný adaptér 4 v 1 2xUSB + C + ... | 21.00 € | **20.50 €** | 35.7 % | **32.5 %** | 20.88 € | cena podľa najlacnejšieho iného predajcu |
| Nástenná nabíjačka Besen BS20 11 kW APP pre elektrom... | 347.00 € | **346.50 €** | 21.1 % | **20.9 %** | 346.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit AIR X1 Carplay/Android ... | 47.50 € | **47.00 €** | 50.1 % | **48.5 %** | 47.39 € | cena podľa najlacnejšieho iného predajcu |
| G21 nůž Damascus Premium 13 cm | 44.50 € | **44.00 €** | 13.7 % | **12.5 %** | 44.39 € | cena podľa najlacnejšieho iného predajcu |
| TESLA Cook BBQ150 | 54.50 € | **54.00 €** | 12.6 % | **11.5 %** | 54.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Držák rolí PARAT | 22.50 € | **22.00 €** | 8.0 % | **5.6 %** | 22.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Classic Siena 180 Easy | 26.50 € | **26.00 €** | 9.5 % | **7.5 %** | 26.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Pegasus 180 Solid sušiak na bielizeň, čierny | 39.50 € | **39.00 €** | 13.4 % | **12.0 %** | 39.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Classic 200 Flex | 25.50 € | **25.00 €** | 8.9 % | **6.8 %** | 25.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Classic 250 Flex | 31.00 € | **30.50 €** | 10.2 % | **8.4 %** | 30.89 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák na prádlo Tower 450 | 41.50 € | **41.00 €** | 10.0 % | **8.6 %** | 41.39 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Žehl. prkno 76210 | 70.00 € | **69.50 €** | 18.2 % | **17.4 %** | 69.89 € | cena podľa najlacnejšieho iného predajcu |
| Presný klešťový multimeter Uni-T 60A UT211B | 107.50 € | **107.00 €** | 11.7 % | **11.2 %** | 107.39 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT315A | 321.00 € | **320.50 €** | 19.5 % | **19.3 %** | 320.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 241.50 € | **241.00 €** | 13.1 % | **12.9 %** | 241.39 € | cena podľa najlacnejšieho iného predajcu |
| Merač LCR Uni-T UT612 | 134.00 € | **133.50 €** | 11.8 % | **11.4 %** | 133.89 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 474.50 € | **474.00 €** | 9.6 % | **9.5 %** | 474.39 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 935.50 € | **935.00 €** | 18.9 % | **18.8 %** | 935.39 € | cena podľa najlacnejšieho iného predajcu |
| Avatto SDL-V1-B100 100 mm digitálna cylindrická vlož... | 87.50 € | **87.00 €** | 16.0 % | **15.3 %** | 87.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 80.00 € | **79.50 €** | 15.3 % | **14.6 %** | 79.89 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 90.50 € | **90.00 €** | 16.0 % | **15.4 %** | 90.39 € | cena podľa najlacnejšieho iného predajcu |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 90.50 € | **90.00 €** | 15.1 % | **14.5 %** | 90.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B endoskop | 153.50 € | **153.00 €** | 13.6 % | **13.2 %** | 153.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B-2m endoskop | 189.00 € | **188.50 €** | 13.7 % | **13.4 %** | 188.89 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B-3m endoskop | 252.00 € | **251.50 €** | 13.9 % | **13.7 %** | 251.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM1000A | 133.00 € | **132.50 €** | 16.4 % | **16.0 %** | 132.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600 | 72.00 € | **71.50 €** | 12.0 % | **11.2 %** | 71.89 € | cena podľa najlacnejšieho iného predajcu |
| Laserový diaľkomer Uni-T LM600A | 83.00 € | **82.50 €** | 9.8 % | **9.1 %** | 82.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač teploty a vlhkosti Uni-T UT332+ | 58.00 € | **57.50 €** | 6.6 % | **5.7 %** | 57.89 € | cena podľa najlacnejšieho iného predajcu |
| Kontaktný teplomer Uni-T UT325 | 77.50 € | **77.00 €** | 7.7 % | **7.0 %** | 77.39 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT362H Anemometer | 165.50 € | **165.00 €** | 11.8 % | **11.5 %** | 165.39 € | cena podľa najlacnejšieho iného predajcu |
| Kalibrátor procesov Uni-T UT701 | 189.50 € | **189.00 €** | 12.6 % | **12.3 %** | 189.39 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 323.00 € | **322.50 €** | 10.4 % | **10.2 %** | 322.89 € | cena podľa najlacnejšieho iného predajcu |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 89.00 € | **88.50 €** | 14.4 % | **13.7 %** | 88.89 € | cena podľa najlacnejšieho iného predajcu |
| Vibračný tester Uni-T UT312A | 294.50 € | **294.00 €** | 19.2 % | **19.0 %** | 294.39 € | cena podľa najlacnejšieho iného predajcu |
| 4-kanálový teplomer Uni-T UT325F | 99.00 € | **98.50 €** | 9.0 % | **8.5 %** | 98.89 € | cena podľa najlacnejšieho iného predajcu |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 149.00 € | **148.50 €** | 11.9 % | **11.5 %** | 148.89 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 64.50 € | **64.00 €** | 25.0 % | **24.0 %** | 64.39 € | cena podľa najlacnejšieho iného predajcu |
| Klimatizace GETI GKH18K hybridní 5kW | 1288.50 € | **1288.00 €** | 7.1 % | **7.1 %** | 1288.39 € | cena podľa najlacnejšieho iného predajcu |
| Kávovar AMZCHEF CE-EM3131-WT s piestovým mechanizmom... | 87.50 € | **87.00 €** | 22.4 % | **21.7 %** | 87.39 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 140.00 € | **139.50 €** | 8.6 % | **8.2 %** | 139.89 € | cena podľa najlacnejšieho iného predajcu |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 55.00 € | **54.50 €** | 14.6 % | **13.5 %** | 54.89 € | cena podľa najlacnejšieho iného predajcu |
| Robotický čistič okien MOVA N1 (biely) | 286.00 € | **285.50 €** | 14.3 % | **14.1 %** | 285.89 € | cena podľa najlacnejšieho iného predajcu |
| Sendvičovač TEESA TSA3221  3v1 | 27.50 € | **27.00 €** | 22.0 % | **19.8 %** | 27.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO42602S | 39.50 € | **39.00 €** | 8.2 % | **6.8 %** | 39.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO252SV | 110.50 € | **110.00 €** | 9.8 % | **9.3 %** | 110.39 € | cena podľa najlacnejšieho iného predajcu |
| Vysavač akumulátorový  TEESA TSA5055 SWEEPER 9000 2v1 | 91.00 € | **90.50 €** | 13.3 % | **12.6 %** | 90.89 € | cena podľa najlacnejšieho iného predajcu |
| FoodSaver VS5910X | 273.50 € | **273.00 €** | 6.4 % | **6.2 %** | 273.39 € | cena podľa najlacnejšieho iného predajcu |
| Vákuovačka G21 Onyx | 54.50 € | **54.00 €** | 9.4 % | **8.4 %** | 54.39 € | cena podľa najlacnejšieho iného predajcu |
| Kamera IP vnitřní Kruger&Matz Connect C25 2K Tuya Wi-Fi | 36.50 € | **36.00 €** | 20.0 % | **18.4 %** | 36.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 74.50 € | **74.00 €** | 12.7 % | **12.0 %** | 74.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 88.50 € | **88.00 €** | 19886.4 % | **19773.5 %** | 88.39 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V/ 7,5 Ah  REBEL bezúdržbová | 16.00 € | **15.50 €** | 27.9 % | **23.9 %** | 15.89 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V/17Ah  REBEL | 29.50 € | **29.00 €** | 17.3 % | **15.3 %** | 29.39 € | cena podľa najlacnejšieho iného predajcu |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 728.50 € | **728.00 €** | 9.1 % | **9.1 %** | 728.39 € | cena podľa najlacnejšieho iného predajcu |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 43.50 € | **43.00 €** | 10.4 % | **9.1 %** | 43.39 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Aura A60 Soundbar | 204.50 € | **204.00 €** | 16.0 % | **15.8 %** | 204.39 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon D50 Soundbar | 141.50 € | **141.00 €** | 23.7 % | **23.2 %** | 141.39 € | cena podľa najlacnejšieho iného predajcu |
| Ultimea Poseidon R3T Soundbar | 116.50 € | **116.00 €** | 48.7 % | **48.1 %** | 116.39 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar Ultima Poseidon M20 | 83.00 € | **82.50 €** | 42.6 % | **41.8 %** | 82.89 € | cena podľa najlacnejšieho iného predajcu |
| Ultima Poseidon D60 Soundbar | 183.50 € | **183.00 €** | 18.5 % | **18.2 %** | 183.39 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj KEMOT PROsinus URZ3411 1600W 12V nástenný | 239.50 € | **239.00 €** | 8.7 % | **8.5 %** | 239.39 € | cena podľa najlacnejšieho iného predajcu |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 133.00 € | **132.50 €** | 7.0 % | **6.6 %** | 132.89 € | cena podľa najlacnejšieho iného predajcu |
| Záložný zdroj REBEL POWER 800 LFP4 RB-4027 500W 12V | 91.00 € | **90.50 €** | 8.8 % | **8.2 %** | 90.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6711 Revolution programovatelný zesilovač | 205.50 € | **205.00 €** | 8.4 % | **8.1 %** | 205.39 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6700 Revolution programovatelný zesilovač | 270.00 € | **269.50 €** | 7.0 % | **6.8 %** | 269.89 € | cena podľa najlacnejšieho iného predajcu |
| Johansson 6714 Profino Revolution Lite programovatel... | 192.50 € | **192.00 €** | 9.1 % | **8.8 %** | 192.39 € | cena podľa najlacnejšieho iného predajcu |
| Súprava inteligentného solárneho vodného čerpadla s ... | 65.00 € | **64.50 €** | 21.2 % | **20.3 %** | 64.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool NoFrost WHK 22414 XBR8EA | 872.50 € | **872.00 €** | 9.2 % | **9.2 %** | 872.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 683.50 € | **683.00 €** | 5.4 % | **5.3 %** | 683.39 € | cena podľa najlacnejšieho iného predajcu |
| DOMO DO91135F | 321.00 € | **320.50 €** | 7.8 % | **7.7 %** | 320.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 84M WBS CZ | 632.50 € | **632.00 €** | 5.4 % | **5.4 %** | 632.39 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool C WD 94M WBS CZ | 669.00 € | **668.50 €** | 8.2 % | **8.1 %** | 668.89 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WP B9X WBS EE | 698.00 € | **697.50 €** | 9.0 % | **8.9 %** | 697.89 € | cena podľa najlacnejšieho iného predajcu |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 84.50 € | **84.00 €** | 28.8 % | **28.1 %** | 84.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy LT5-04 Ceramic/Electric cooktop | 164.00 € | **163.50 €** | 22.3 % | **22.0 %** | 163.89 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-312S2C dvojzónový sklenený plynový sporá... | 83.50 € | **83.00 €** | 34.7 % | **33.9 %** | 83.39 € | cena podľa najlacnejšieho iného predajcu |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 106.50 € | **106.00 €** | 20.0 % | **19.4 %** | 106.39 € | cena podľa najlacnejšieho iného predajcu |
| Sklenená plynová varná doska IsEasy MGBG-604B | 119.50 € | **119.00 €** | 32.8 % | **32.2 %** | 119.39 € | cena podľa najlacnejšieho iného predajcu |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 86.00 € | **85.50 €** | 9.7 % | **9.1 %** | 85.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 80.00 € | **79.50 €** | 18.1 % | **17.4 %** | 79.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 106.50 € | **106.00 €** | 12.8 % | **12.3 %** | 106.39 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska ISEASY MGBG-775 s 5 horákmi (biela) | 154.00 € | **153.50 €** | 20.5 % | **20.1 %** | 153.89 € | cena podľa najlacnejšieho iného predajcu |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 128.50 € | **128.00 €** | 17.9 % | **17.5 %** | 128.39 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Svetlo do skrine 40 cm (strieborné) 2700K | 13.00 € | **12.50 €** | 24.8 % | **20.0 %** | 12.90 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 45.00 € | **44.50 €** | 44.5 % | **42.9 %** | 44.90 € | cena podľa najlacnejšieho iného predajcu |
| Kovové ochranné puzdro PULUZ pre Insta360 X5 | 32.00 € | **31.50 €** | 18.8 % | **17.0 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-HDC8 240 W kábel USB-C na USB-C, 0,.5 m... | 21.00 € | **20.50 €** | 36.3 % | **33.0 %** | 20.90 € | cena podľa najlacnejšieho iného predajcu |
| Náhradná batéria BOBOVR B2 | 22.00 € | **21.50 €** | 18.1 % | **15.4 %** | 21.90 € | cena podľa najlacnejšieho iného predajcu |
| Klávesnica ONIKUMA G69 (čierna) (QWERTY) | 35.50 € | **35.00 €** | 12.4 % | **10.9 %** | 35.41 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux EF167 | 14.50 € | **14.00 €** | 12.3 % | **8.4 %** | 14.42 € | cena podľa najlacnejšieho iného predajcu |
| Electrolux ESKQ9 | 14.50 € | **14.00 €** | 12.3 % | **8.4 %** | 14.42 € | cena podľa najlacnejšieho iného predajcu |
| Fixed kryt Apple iP 17P FIXRBM-1602-RA | 20.50 € | **20.00 €** | 31.1 % | **27.9 %** | 20.42 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro XRN 15 4G FIXOP3-1643-BK | 20.50 € | **20.00 €** | 89.4 % | **84.8 %** | 20.42 € | cena podľa najlacnejšieho iného predajcu |
| Fixed puzdro XRN15Pro 4G FIXOP3-1645-BK | 20.50 € | **20.00 €** | 89.4 % | **84.8 %** | 20.42 € | cena podľa najlacnejšieho iného predajcu |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 21.50 € | **21.00 €** | 9.2 % | **6.7 %** | 21.48 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný Wi-Fi termostat MEROSS MTS215BMA-B(EU) ... | 74.50 € | **74.00 €** | 41.9 % | **41.0 %** | 74.49 € | cena podľa najlacnejšieho iného predajcu |
| Grafický tablet Huion Inspiroy 2 M H951P | 80.50 € | **80.00 €** | 40.3 % | **39.4 %** | 80.49 € | cena podľa najlacnejšieho iného predajcu |
| Filtre GND 0.9 + 1.2 Freewell pre DJI Mini 4 Pro | 38.50 € | **38.00 €** | 29.8 % | **28.1 %** | 38.49 € | cena podľa najlacnejšieho iného predajcu |
| Evolveo BonePro černá | 66.50 € | **66.00 €** | 7.8 % | **7.0 %** | 66.49 € | cena podľa najlacnejšieho iného predajcu |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 37.50 € | **37.00 €** | 9.4 % | **8.0 %** | 37.49 € | cena podľa najlacnejšieho iného predajcu |
| Stojanový vozík Neewer SW-600, veľkosť M | 37.50 € | **37.00 €** | 39.7 % | **37.9 %** | 37.49 € | cena podľa najlacnejšieho iného predajcu |
| Videostativ Neewer LL55 z uhlíkových vlákien s olejo... | 630.50 € | **630.00 €** | 38.4 % | **38.3 %** | 630.49 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálny bezkontaktný alkohol tester, F... | 50.50 € | **50.00 €** | 28.1 % | **26.9 %** | 50.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 14.50 € | **14.00 €** | 22.4 % | **18.2 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stmievateľná stolná lampička s klipom bi... | 11.50 € | **11.00 €** | 36.1 % | **30.2 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 11.50 € | **11.00 €** | 29.1 % | **23.5 %** | 11.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjací RGB svetlo, diaľkový ovládač, L... | 12.50 € | **12.00 €** | 130.4 % | **121.2 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 32.50 € | **32.00 €** | 24.8 % | **22.9 %** | 32.50 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná hviezda Solight 1V293, 65 cm, 2... | 10.50 € | **10.00 €** | 33.8 % | **27.4 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED vianočný stromček Solight 1V283, 53 cm, ... | 34.50 € | **34.00 €** | 39.0 % | **37.0 %** | 34.50 € | cena podľa najlacnejšieho iného predajcu |
| Sada 3 LED sviečok Solight 1V286, 10/13/16 cm, 3 × A... | 12.50 € | **12.00 €** | 41.5 % | **35.9 %** | 12.50 € | cena podľa najlacnejšieho iného predajcu |
| Vonkajšia LED reťaz s guličkami 2 v 1 Solight 1V08-R... | 13.50 € | **13.00 €** | 34.0 % | **29.0 %** | 13.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová dvojzásuvka, IP55, matná ... | 45.50 € | **45.00 €** | 46.4 % | **44.8 %** | 45.50 € | cena podľa najlacnejšieho iného predajcu |
| Odžmolkovač TechniSat PURENO TRIM 100 s LCD a USB-C ... | 17.50 € | **17.00 €** | 38.4 % | **34.4 %** | 17.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G1015700 | 14.50 € | **14.00 €** | 15.7 % | **11.7 %** | 14.50 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2013900 Artiko Výrobník ledu | 128.50 € | **128.00 €** | 10.6 % | **10.2 %** | 128.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W + USB A+C 20 W PD výsuvná na... | 27.50 € | **27.00 €** | 35.3 % | **32.9 %** | 27.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, čierna | 18.50 € | **18.00 €** | 18.2 % | **15.0 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.50 € | **10.00 €** | 33.0 % | **26.6 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| ALI PB PD 20W+QC 22,5A,30000mAh PBPD30BK | 29.50 € | **29.00 €** | 8.0 % | **6.2 %** | 29.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight 2z + USB A+C 17W, cestovný predlžovací prívo... | 10.50 € | **10.00 €** | 54.1 % | **46.8 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.50 € | **10.00 €** | 25.2 % | **19.2 %** | 10.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 18.50 € | **18.00 €** | 16.0 % | **12.8 %** | 18.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 21.50 € | **21.00 €** | 18.1 % | **15.4 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 21.50 € | **21.00 €** | 25.9 % | **23.0 %** | 21.50 € | cena podľa najlacnejšieho iného predajcu |
| ALI Bluetooth sl. PODS LCD + ANC TWS07 | 24.50 € | **24.00 €** | 15.7 % | **13.3 %** | 24.50 € | cena podľa najlacnejšieho iného predajcu |
| TESLA PrimeSound HQ-995X | 175.50 € | **175.00 €** | 5.8 % | **5.5 %** | 175.50 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z2-C TTL pre fotoaparáty Canon | 164.90 € | **164.50 €** | 39.4 % | **39.0 %** | 164.89 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 147.90 € | **147.50 €** | 31.2 % | **30.9 %** | 147.89 € | cena podľa najlacnejšieho iného predajcu |
| Sada filtrov FREEWELL pre DJI Mavic 4 Pro Everyday (... | 73.90 € | **73.50 €** | 28.8 % | **28.1 %** | 73.89 € | cena podľa najlacnejšieho iného predajcu |
| Soundbar JBL Bar 2.0 All-In-One (MK2) | 198.90 € | **198.50 €** | 8.4 % | **8.2 %** | 198.90 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo HiFi Tuner TR05 | 139.90 € | **139.50 €** | 11.4 % | **11.1 %** | 139.90 € | cena podľa najlacnejšieho iného predajcu |
| Vibračná platforma MERACH MR-2533B1-EU (čierna) | 88.90 € | **88.50 €** | 25.9 % | **25.4 %** | 88.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.90 € | **9.50 €** | 24.8 % | **19.7 %** | 9.56 € | cena podľa najlacnejšieho iného predajcu |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 11.90 € | **11.50 €** | 9.4 % | **5.8 %** | 11.86 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 10.90 € | **10.50 €** | 17.1 % | **12.8 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 10.90 € | **10.50 €** | 17.1 % | **12.8 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 15.90 € | **15.50 €** | 29.8 % | **26.5 %** | 15.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight multimeter, max AC 750V/10A, max. DC 1000V/1... | 11.90 € | **11.50 €** | 24.4 % | **20.2 %** | 11.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight štrbinová hubica pre Dyson V7, V8, V10, V11,... | 10.90 € | **10.50 €** | 30.7 % | **25.9 %** | 10.90 € | cena podľa najlacnejšieho iného predajcu |
| Ariete Breakfast Coffee Drip 1394, černý | 34.90 € | **34.50 €** | 10.6 % | **9.4 %** | 34.67 € | cena podľa najlacnejšieho iného predajcu |
| ELECTROLUX ZE064 | 29.90 € | **29.50 €** | 11.1 % | **9.6 %** | 29.69 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 20Ah XTREME bezúdržbový akumu... | 31.90 € | **31.50 €** | 6.5 % | **5.1 %** | 31.74 € | cena podľa najlacnejšieho iného predajcu |
| Statív s 3D 360° hlavou + držiak na telefón Puluz PU... | 25.90 € | **25.50 €** | 13.9 % | **12.1 %** | 25.89 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 42.90 € | **42.50 €** | 11.2 % | **10.2 %** | 42.89 € | cena podľa najlacnejšieho iného predajcu |
| Resto 93501 Hrnec s pokličkou 20 cm | 34.90 € | **34.50 €** | 6.8 % | **5.6 %** | 34.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 22.90 € | **22.50 €** | 16.0 % | **14.0 %** | 22.90 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED betlehem Solight 1V276, 26 × 17 cm, 6 LE... | 19.90 € | **19.50 €** | 35.6 % | **32.9 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 16.90 € | **16.50 €** | 14.1 % | **11.4 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari G2000300 CR Kuchyňská váha | 26.90 € | **26.50 €** | 8.1 % | **6.5 %** | 26.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight vonkajšia IP kamera s LED světlom | 30.90 € | **30.50 €** | 16.3 % | **14.7 %** | 30.90 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 50.90 € | **50.50 €** | 39.9 % | **38.8 %** | 50.90 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Ultimate Graphite Black | 270.90 € | **270.50 €** | 16.5 % | **16.3 %** | 270.61 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Q200 | 331.90 € | **331.50 €** | 38.8 % | **38.6 %** | 331.89 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED žiarovka, klasický tvar, 10W, E27, 4000K... | 1.60 € | **1.30 €** | 75.8 % | **42.8 %** | 1.31 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 6.60 € | **6.30 €** | 26.9 % | **21.1 %** | 6.36 € | cena podľa najlacnejšieho iného predajcu |
| Roborock Q10 PF+ Čistiaci robot (čierny) | 406.00 € | **405.90 €** | 39.2 % | **39.2 %** | 405.99 € | cena podľa najlacnejšieho iného predajcu |
| 3D skener Revopoint Inspire 2 – štandardná verzia | 703.00 € | **702.90 €** | 38.0 % | **37.9 %** | 702.99 € | cena podľa najlacnejšieho iného predajcu |
| Digitálny zápisník Huion Kamvas Ink 10 EB1011 | 386.00 € | **385.90 €** | 36.2 % | **36.2 %** | 385.99 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá Edifier STAX S5 (čierne) | 491.00 € | **490.90 €** | 40.4 % | **40.4 %** | 490.99 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 262.00 € | **261.90 €** | 39.5 % | **39.5 %** | 261.99 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický bežecký pás UREVO Strol 2S PRO 2 v 1 (čie... | 534.00 € | **533.90 €** | 41.5 % | **41.5 %** | 533.99 € | cena podľa najlacnejšieho iného predajcu |
| ZigBee LCD senzor teploty Sonoff SNZB-02LD (so sondou) | 17.00 € | **16.90 €** | 11.4 % | **10.7 %** | 16.97 € | cena podľa najlacnejšieho iného predajcu |
| Štandardný stabilizátor AOCHUAN XE (čierny) | 53.00 € | **52.90 €** | 37.8 % | **37.6 %** | 52.99 € | cena podľa najlacnejšieho iného predajcu |
| Kovový LED svietnik Solight 1V280, 40 cm, 5 LED, čierny | 23.00 € | **22.90 €** | 34.2 % | **33.7 %** | 23.00 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED girlanda s ihličím Solight 1V298, 5 m, ... | 21.00 € | **20.90 €** | 45.9 % | **45.2 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED reflektor so sklopným stojanom, 100W, 90... | 27.00 € | **26.90 €** | 31.0 % | **30.5 %** | 27.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight ventilátor do kúpeľne | 9.80 € | **9.70 €** | 41.0 % | **39.6 %** | 9.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W + USB A+C 20 W PD výsuvná na... | 25.00 € | **24.90 €** | 23.0 % | **22.5 %** | 25.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight bezdrôtová 15 W vstavaná nabíjačka, biela | 20.00 € | **19.90 €** | 27.8 % | **27.2 %** | 20.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight domáca kamera s nočným svetlom a hodinami | 34.00 € | **33.90 €** | 14.9 % | **14.6 %** | 34.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight projekčné hodiny s meteostanicou | 21.00 € | **20.90 €** | 15.4 % | **14.9 %** | 21.00 € | cena podľa najlacnejšieho iného predajcu |
| Planetárium Levenhuk Star Sky P1 | 23.00 € | **22.90 €** | 6.1 % | **5.6 %** | 23.00 € | cena podľa najlacnejšieho iného predajcu |
| Vianočná LED reťaz – červeno-biela Solight 1V292, 1,... | 5.70 € | **5.60 €** | 153.2 % | **148.8 %** | 5.70 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.50 € | **9.40 €** | 33.9 % | **32.4 %** | 9.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 9.90 € | **9.80 €** | 36.9 % | **35.5 %** | 9.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 15.00 € | **14.90 €** | 37.8 % | **36.9 %** | 15.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED vonkajšie osvetlenie, nastaviteľná teplo... | 12.00 € | **11.90 €** | 31.8 % | **30.7 %** | 12.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevená LED vianočná kométa Solight 1V278, 30 cm, 10... | 9.60 € | **9.50 €** | 35.7 % | **34.3 %** | 9.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 6.80 € | **6.70 €** | 40.3 % | **38.3 %** | 6.80 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárne svetlo so senzorom, 5W, 500lm, 4... | 9.60 € | **9.50 €** | 33.6 % | **32.3 %** | 9.60 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 16.00 € | **15.90 €** | 31.9 % | **31.1 %** | 16.00 € | cena podľa najlacnejšieho iného predajcu |
| Tester batérií Uni-T UT675A | 87.00 € | **86.90 €** | 15.1 % | **15.0 %** | 86.99 € | cena podľa najlacnejšieho iného predajcu |
| Blesk Neewer Z880-C s lítiovou batériou | 159.00 € | **158.90 €** | 39.3 % | **39.2 %** | 158.99 € | cena podľa najlacnejšieho iného predajcu |
| Otočný stojan Puluz 45 cm (biely) | 77.00 € | **76.90 €** | 30.1 % | **30.0 %** | 76.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight profesionálna smart WIFI meteostanica | 97.00 € | **96.90 €** | 17.7 % | **17.6 %** | 97.00 € | cena podľa najlacnejšieho iného predajcu |

# Heureka nespárované produkty — progress od nasadenia opráv — 2026-08-20

Baseline: `premiumstoresk_20260819_1200.csv` (pred nasadením opráv). Nový report: `28978cf0-NesparovaneProdukty.csv`.

## 1. NAME_TO_EXPORTS — priamy dopad na cielené EAN

- Cielených EAN (dostali návrh mena): **2565**
- Už nie sú v novom reporte nespárovaných (vyriešené): **108** (4.2 %)
- Stále nespárované aj po fixe: **2457**

## 2. Kategórie (heureka-mapping.json, >=70% zhoda) — priamy dopad

- Produktov v cielených kategóriách pred fixom: **1967**
- Produktov v tých istých kategóriách teraz: **1920**
- Pokles: **47** (2.4 %)

| Kategória | Pred | Teraz | Rozdiel |
|---|---:|---:|---:|
| Kreatívne technológie > 3D tlač > Vlákna | 175 | 186 | +11 |
| Heureka.sk > Elektronika > TV, audio, video > Mikrofóny | 101 | 100 | -1 |
| TV, audio a video > Mobily a tablety > Smart telefóny | 83 | 81 | -2 |
| Heureka.sk > Elektronika > Počítače a notebooky > Sieťové prvky > IP kamery | 78 | 77 | -1 |
| TV, audio a video > Foto a optika > Príslušenstvo > Pre fotoaparáty a videokamery | 75 | 75 | -0 |
| TV, audio a video > Mobily a tablety > Smart hodinky > Smart prstene | 48 | 48 | -0 |
| Heureka.sk > Elektronika > Počítače a notebooky > Záložné zdroje > UPS | 47 | 47 | -0 |
| Heureka.sk > Elektronika > TV, audio, video > Príslušenstvo k TV, audio-video > Príslušenstvo k TV > Držiaky a stolíky > Držiaky a stojany na TV a monitory | 45 | 45 | -0 |
| TV, audio a video > Audio technika > Stojany | 35 | 35 | -0 |
| Heureka.sk > Elektronika > Počítače a notebooky > Príslušenstvo k počítačom > Pamäťové karty | 29 | 29 | -0 |
| Heureka.sk > Bývanie a doplnky > Osvetlenie a svietidlá > Dekoratívne osvetlenie > LED pásiky | 28 | 28 | -0 |
| Profesionálna audio technika > Pódium, diskotéka, DJ > Statívy/držiaky > reproduktorov | 26 | 26 | -0 |
| Heureka.sk > Elektronika > Počítače a notebooky > Sieťové prvky > WiFi antény | 25 | 24 | -1 |
| TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Herné podložky > Podložky | 24 | 26 | +2 |
| Šport, hračky a voľný čas > Outdoor > Rybárčenie > Návnada lode | 24 | 10 | -14 |
| Bezpečnosť a smart domácnosť > Riadiace jednotky > Prepínače | 23 | 15 | -8 |
| Elektroinštalačný materiál > Ostatné > 230V > Rozbočky | 22 | 21 | -1 |
| Heureka.sk > Dielňa, stavba, záhrada > Stavba > Elektromateriály > Elektroinštalačný materiál > Zásuvky, vypínače, termostaty > Zásuvky | 22 | 22 | -0 |
| Profesionálna audio technika > Pódium, diskotéka, DJ > transportné kufre a racky > príslušenstvo > ostatné | 22 | 22 | -0 |
| Elektroinštalačný materiál > Zvončeky | 21 | 21 | -0 |
| Heureka.sk > Elektronika > TV, audio, video > Televízory | 21 | 21 | -0 |
| Profesionálna audio technika > Pódium, diskotéka, DJ > reproduktorové systémy > pasívne | 21 | 21 | -0 |
| Heureka.sk > Bývanie a doplnky > Bytové dekorácie > Hodiny a budíky > Hodiny | 20 | 20 | -0 |
| Heureka.sk > Elektronika > Mobily, tablety, nositeľná elektronika > Tablety a čítačky > Tablety | 20 | 19 | -1 |
| Heureka.sk > Elektronika > TV, audio, video > Príslušenstvo k TV, audio-video > Audio príslušenstvo > Príslušenstvo pre gramofóny > Puzdrá a obaly pre gramofóny | 20 | 20 | -0 |
| Profesionálna audio technika > Reproduktory > výškové | 19 | 19 | -0 |
| TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Príslušenstvo VR | 19 | 19 | -0 |
| Náradie a dielňa > Kancelária a škola > Fototlačiarne | 18 | 18 | -0 |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Regulátory hlasitosti | 18 | 18 | -0 |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Reproduktory > podhľadové | 18 | 18 | -0 |
| Fotovoltaika a energie > Akumulátory a batérie > LiFePO4 akumulátory | 17 | 17 | -0 |
| Zdravie a starostlivosť > Chovateľské potreby > Inteligentné toalety pre zvieratá | 17 | 16 | -1 |
| Bezpečnosť a smart domácnosť > Prvky výkonu > Smart zámky | 16 | 16 | -0 |
| Heureka.sk > Dielňa, stavba, záhrada > Dielňa > Spájkovanie > Spájkovačky | 16 | 16 | -0 |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Reproduktory > reproduktorové stĺpiky 100V | 16 | 16 | -0 |
| Dróny a RC modely > Príslušenstvo pre drony > DJI | 15 | 15 | -0 |
| Elektroinštalačný materiál > Osvetlenie > LED pásky > Príslušenstvo | 15 | 15 | -0 |
| Heureka.sk > Dielňa, stavba, záhrada > Stavba > Fotovoltaika > Solárne regulátory | 15 | 14 | -1 |
| Heureka.sk > Elektronika > TV, audio, video > Satelitná a digitálna technika > LNB konvertory | 15 | 15 | -0 |
| Elektroinštalačný materiál > Ostatné > 230V > Koncovky | 14 | 14 | -0 |

## 3. Celkový počet nespárovaných (kontext, NIE dôkaz — kolíše aj z iných dôvodov)

- Pred: **6303** → teraz: **6177** (-126)

Toto číslo zahŕňa aj nové produkty pribudnuté do katalógu, produkty vypredané/odstránené a nesúvisiace zmeny — nepoužívať samo o sebe ako dôkaz účinnosti fixu, pozri sekcie 1-2 vyššie.

## Príloha: prvých 20 EAN, ktoré NAME_TO_EXPORTS fix (zatiaľ) nevyriešil

| EAN | Náš názov | Navrhovaný názov | Stále v novom reporte ako |
|---|---|---|---|
| 4007754255652 | Monacor ATT-2100H/WS Nástenné ovládanie hlasitosti PA, 100 W | Monacor ATT-2100H/WS | Monacor ATT-2100H/WS Nástenné ovládanie hlasitosti PA, 100 W |
| 6952344206485 | Reflektor GODOX RFT-4 | Godox RFT-4 | Reflektor GODOX RFT-4 |
| 5901890097482 | Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m konektory typu banánek | Kruger&Matz Reproduktorový kábel s banánikmi 5 m L-KM0335-5M | Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m konektory typu banánek |
| 810194780448 | Senzor pohybu X-Sense SMS0A PIR | X-Sense SMS0A | Senzor pohybu X-Sense SMS0A PIR |
| 5901890101271 | Posilovací lavice REBEL ACTIVE RBA-2001 | Rebel RBA-2001 | Posilovací lavice REBEL ACTIVE RBA-2001 |
| 6972884750910 | Náhradný filter pre napájadlo Catlink | Náhradné filtre pre fontánu Catlink Pure 3 | Náhradný filter pre napájadlo Catlink |
| 4007754196269 | Monacor ESP-152/WS PA nástenný reproduktor | Monacor ESP-152 | Monacor ESP-152/WS PA nástenný reproduktor |
| 6935750542088 | Uni-T UT208B digitálny klešťový multimeter | UNI-T UT208B | Uni-T UT208B digitálny klešťový multimeter |
| 6971636405603 | Hyper PLA Filament Creality (Red) | Creality Hyper PLA 1,75 mm 1 kg červená | Hyper PLA Filament Creality (Red) |
| 6973137270926 | Teleso škrtiacej klapky MOZA RACING MTQ AS014 | Moza Racing MTQ AS014 Těleso škrticí klapky | Teleso škrtiacej klapky MOZA RACING MTQ AS014 |
| 6976037361978 | Inteligentný senzor prítomnosti človeka Avatto HE20 WiFi | Avatto HE20 WiFi | Inteligentný senzor prítomnosti človeka Avatto HE20 WiFi |
| 6935750512272 | Merač teploty a vlhkosti Uni-T A12T | UNI-T A12T MIE0334 | Merač teploty a vlhkosti Uni-T A12T |
| 5906194000954 | Solight izolačná páska, 15mm x 0,13mm x 10m, biela | Solight izolačná páska 15 mm x 10 m AP01B biela | Solight izolačná páska, 15mm x 0,13mm x 10m, biela |
| 5901890104838 | Projektor KRUGER & MATZ V-LED20 KM0370-FHD | Kruger&Matz V-LED20 | Projektor KRUGER & MATZ V-LED20 KM0370-FHD |
| 6977502514059 | Latarka Superfire L20, 5000lm, USB-C | Superfire L20 | Latarka Superfire L20, 5000lm, USB-C |
| 790069458576 | Dlink D-LINK 5-Port Gigabit Switch (DGS-105GL) | D-Link DGS-105GL | Dlink D-LINK 5-Port Gigabit Switch (DGS-105GL) |
| 194850889486 | HP LaserJet Pro MFP M234sdn (6GX00F) | HP LaserJet M234sdn 6GX00F | HP LaserJet Pro MFP M234sdn (6GX00F) |
| 8592417769950 | ETA 002800860 | ETA Gratus 0028 00860 | ETA 002800860 |
| 6932704908495 | Filament ELEGOO PLA-CF (čierny) | ELEGOO PLA-CF 1kg černý 1,75mm | Filament ELEGOO PLA-CF (čierny) |
| 4711527005893 | darkFlash Vodné chladenie pre procesor DE360 (biely) | Darkflash DE360 White | darkFlash Vodné chladenie pre procesor DE360 (biely) |

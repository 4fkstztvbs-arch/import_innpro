# Kategórie mimo stromu — basys

Kontrola z 2026-09-13 20:15 UTC.

Tieto kategórie feed zapisoval, ale v strome neexistujú. Shoptet by ich pri
importe vytvoril, preto boli **skrátené na najhlbšieho existujúceho predka** (produkty
zostali v ponuke, len o úroveň vyššie).

Zaradenie treba doriešiť: buď opraviť `categoryRenamesByPath` daného dodávateľa, alebo
kategóriu vedome pridať do Shoptetu a obnoviť `data/known-categories.json` cez
`node scripts/build-known-categories.js`.

| Kategória mimo stromu | Produktov | Zaradené namiesto toho do | Príklad produktu |
|---|---|---|---|
| `TV, audio a video > Audio technika > Slúchadlá` | 109 | **bez kategórie** | BOSE QC Ultra Headphones 2nd Gen - Black |
| `TV, audio a video > Audio technika > Príslušenstvo k audio technike` | 95 | **bez kategórie** | Behringer CFM-1 |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie)` | 79 | `Profesionálna audio technika` | BOSE ShowMatch SMS118 subwoofer |
| `TV, audio a video > Audio technika > Slúchadlá > Príslušenstvo` | 75 | **bez kategórie** | beyerdynamic EDT 770 VB ear pad, black |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > Audio procesory` | 72 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Behringer ADA8200 |
| `TV, audio a video > Audio technika > Reproduktory` | 71 | **bez kategórie** | BOSE Lifestyle Ultra Speaker - čierna |
| `Profesionálna audio technika > Hudobné nástroje a príslušenstvo > Gitarové príslušenstvo` | 70 | `Profesionálna audio technika > Hudobné nástroje a príslušenstvo` | TC Electronic Sentry Noise Gate |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > mikrofóny` | 52 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Behringer B-5 |
| `Auto-moto > Autorádiá > Reproduktory do autá` | 52 | `Auto-moto` | Pioneer TS-1002I reproduktor do auta |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > zosilňovače > viackanálové` | 36 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Behringer NX6000 power amplifier |
| `Auto-moto > Audio, Hi-Fi` | 33 | `Auto-moto` | Pioneer CD-R33 diaľkové ovládanie |
| `Auto-moto > Autorádiá` | 28 | `Auto-moto` | Pioneer DEH-4800FD autorádio |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > mixy a powermixy` | 25 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Behringer X32 digital mixer |
| `Auto-moto > Audio, Hi-Fi > Displeje do autá` | 25 | `Auto-moto` | Pioneer AVH-Z3200DAB multimediálna jednotka do auta |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > Slúchadlá > náhlavové` | 17 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Behringer HPS3000 |
| `TV, audio a video > Audio technika > Audio technika – ostatné produkty` | 16 | **bez kategórie** | BOSE Lifestyle Ultra Soundbar - čierna |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > Audio rekordéry` | 16 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Behringer XENYX CONTROL2USB audio interface |
| `Profesionálna audio technika > Káble, konektory a redukcie > Káble` | 13 | `Profesionálna audio technika > Káble, konektory a redukcie` | Behringer GMC-300 |
| `TV, audio a video > Audio technika > HiFi komponenty > Zosilňovače` | 8 | **bez kategórie** | Behringer POWERPLAY HA8000 V2 amplifier |
| `TV, audio a video > Audio technika > Stojany pre reproduktory a slúchadlá` | 6 | **bez kategórie** | BOSE UFS-20 II podlahový stojan, čierne |
| `Profesionálna audio technika > Reproduktory` | 6 | `Profesionálna audio technika` | BOSE F1 Model 812 |
| `TV, audio a video > TV stolíky a držiaky` | 5 | **bez kategórie** | BOSE Soundbar Wall Bracket - čierna |
| `TV, audio a video > Video technika > Kamery do autá` | 4 | **bez kategórie** | Pioneer VREC-150MD dash camera |
| `Profesionálna audio technika > Tlmočnícke, sprievodcovské a konferenčné systémy > Konferenčný systém` | 3 | `Profesionálna audio technika` | beyerdynamic UNITE CC-24P Digital Wireless Tour Guide System |
| `Profesionálna audio technika > Svetlá > Svetlá – ostatné produkty` | 3 | `Profesionálna audio technika` | Behringer EUROLIGHT MOVING HEAD MH363 |
| `TV, audio a video > Audio technika > HiFi komponenty > AV receivery` | 3 | **bez kategórie** | SPL Performer s800 výkonový zosilňovač, čierny |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > reproduktorové systémy` | 2 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | BOSE L1 Pro8 |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > reproduktorové systémy > pasívne` | 1 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Behringer EUROLIVE B215D aktívny PA reproduktorový systém |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > Príslušenstvo pre pódiové a DJ vybavenie` | 1 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | BOSE S1 PRO+ Bezdrôtový nástrojový vysielač |

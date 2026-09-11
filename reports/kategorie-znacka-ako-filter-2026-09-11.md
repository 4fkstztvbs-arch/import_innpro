# Značka ako kategória → parametrický filter (2026-09-11)

Nadväzuje na `reports/navrh-novej-kategorizacie-2026-09-11.md`. Systematicky
prehľadaný celý produktový export (26 599 produktov, všetky
`categoryText`–`categoryText11` cesty) na vzor "kategória rozdelená podľa
značky/modelu namiesto filtra". Detekcia kombinovala (1) porovnanie so
zoznamom známych značiek a (2) štrukturálny odhad (skupina súrodeneckých
kategórií, kde takmer všetky sú jednoslovné, s veľkým písmenom, bez čísel –
ručne overené, aby sa vylúčili falošné nálezy ako "Brzdy/Interiér/Motor/
Podvozek", ktoré vyzerajú podobne, ale sú to reálne typy náradia, nie
značky).

## Nájdených 6 potvrdených skupín (1270 produktov, ~60 kategórií → 6)

| # | Kategória (po zlúčení) | Produktov | Počet značiek predtým |
|---|---|---:|---:|
| 1 | `TV, audio a video > Diaľkové ovládače > Televízne ovládače` | 474 | 16 |
| 2 | `TV, audio a video > Diaľkové ovládače > Satelitné ovládače` | 285 | 13 |
| 3 | `TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2` | 210 | 11 |
| 4 | `Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory` | 180 | 2 (+ vnorené typy) |
| 5 | `Auto-moto > ... > Špeciálne náradie a prípravky > Motor > Aretace` | 78 | 3 |
| 6 | `Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory` | 43 | 2 (+ vnorené typy) |

## Ako to bude vyzerať – detail po skupinách

### 1. Televízne ovládače (474 produktov)

**PRED** (16 samostatných kategórií v menu):
Changhong, ECG, Finlux, Gogen, Hitachi, Hyundai, LG, Orava, Panasonic,
Philips, Samsung, Sencor, Sharp, Sony, Telefunken, Toshiba

**PO:** jedna kategória `Televízne ovládače`, filter "Značka televízora" s
rovnakými hodnotami. Rozloženie: LG 102, Samsung 66, Panasonic 56, Sencor 33,
Sony 30, Gogen 16, Changhong 16, Sharp 15, Hyundai 14, Philips 14, Finlux 12,
Toshiba 11, Hitachi 11, Telefunken 10, Orava 8, ECG 8 (+ 52 bez priradenej
značky, ostávajú v kategórii bez filtra).

### 2. Satelitné ovládače (285 produktov)

**PRED** (13 kategórií): AB, Amiko, Ferguson, Globo, GoSat, HD-BOX, Octagon,
Opensat, Optibox, Opticum, Strong, Topfield, Zircon

**PO:** jedna kategória, filter "Značka satelitného prijímača". Amiko 36, AB
18, GoSat 14, Topfield 14, Strong 13, Optibox 12, Octagon 12, HD-BOX 10,
Zircon 10, Ferguson 9, Opensat 9, Globo 9, Opticum 9 (+ 110 bez značky).

### 3. Ovládače k DVB-T2 (210 produktov)

**PRED** (11 kategórií): Alma, Amiko, Emos, GoGEN, Mascom, Opticum, Sencor,
Strong, Telesystem, Tesla, Wiwa

**PO:** jedna kategória, rovnaký filter ako vyššie (rekordér/prijímač DVB-T2
značka). Tesla 23, Alma 15, Telesystem 14, Strong 12, Amiko 11, Mascom 11,
Wiwa 9, Sencor 8, Opticum 8, GoGEN 8, Emos 8 (+ 83 bez značky).

### 4. Domové ventilátory (180 produktov)

**PRED**: rozdelené najprv podľa značky (VENTS/DOSPEL) a POTOM ešte podľa
typového radu (napr. "VENTS > typ MA/LD/S/VKO1/M", "DOSPEL > typ POLO") –
dvojúrovňové vnorenie namiesto dvoch filtrov.

**PO:** jedna kategória `Domové ventilátory`, dva filtre – "Výrobca" (VENTS/
DOSPEL) a "Typový rad" (MA/LD/S/VKO1/M/POLO...). VENTS spolu ~111, DOSPEL
~14, zvyšok priamo v podkategórii bez rozlíšenia (napr. "do kúpeľne/WC").

### 5. Aretace motora podľa značky auta (78 produktov)

**PRED**: Audi, BMW, Opel ako 3 samostatné kategórie.

**PO:** jedna kategória `Aretace`, filter "Značka vozidla" (kompatibilita).
BMW 13, Opel 12, Audi 8 (+ 45 bez rozlíšenia značky).

### 6. Priemyselné ventilátory (43 produktov)

Rovnaký vzor ako bod 4, menší objem: VENTS ~33, DOSPEL ~2, zvyšok
nerozlíšený.

## Odporúčaný spôsob implementácie

**Nepoužívať vlastný Shoptet parameter, ale natívne pole "Výrobca".** Shoptet
má vstavané pole výrobcu na produkte s automatickým filtrom podľa výrobcu na
kategórii – netreba vytvárať a spravovať vlastný parameter naviac. Stačí:

1. Priradiť hodnotu "Výrobca" ku každému dotknutému produktu (import cez
   Shoptet XML/CSV, hodnota sa dá odvodiť priamo zo súčasného názvu
   kategórie, ktorý produkt práve stráca).
2. V administrácii kategórie zapnúť filter podľa výrobcu.
3. Zjednotiť kategórie podľa tabuľky vyššie (`categoryRenamesByPath` v
   `scripts/*-mapping.json`, rovnakým mechanizmom ako doteraz zapísané
   zlúčenia).

## Čo toto NErobí (zatiaľ)

Toto je len návrh a prehľad "ako to bude vyzerať" – **nepriradil som hodnotu
výrobcu k žiadnemu produktu ani som nemenil kategórie**. Priradenie výrobcu
vyžaduje úpravu `scripts/transform-*.js` (aby sa hodnota výrobcu odvodená z
pôvodnej kategórie zapísala do XML poľa `<MANUFACTURER>`), čo je zmena kódu
transformačných skriptov, nie len dátový mapping – navrhujem ako ďalší krok
po schválení tohto prehľadu.

## Skupiny, ktoré vyzerali ako značka, ale NIE sÚ (overené a vylúčené)

- `Auto-moto > ... > Špeciálne náradie a prípravky` (Brzdy/Interiér/Motor/
  Podvozek) – typy náradia podľa časti auta, nie značky.
- `Auto-moto > Autokozmetika, Chémia` (Aditiva/Exterier/Interier/
  Nanotechnologie) – typy chemických produktov, nie značky.
- `Profesionálna audio technika > Pódium, diskotéka, DJ > mikrofóny`
  (bezdrôtové/dynamické/elektretové/husí krk/náhlavové...) – typy
  mikrofónov podľa konštrukcie, legitímna kategorizácia, nie značka.

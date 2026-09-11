# Audit prázdnych kategórií (2026-09-11)

Podklad pre plánovanú kompletnú redizajn kategorizácie e-shopu (zadanie: "vymyslieť
celú novú kategorizáciu"). Toto je prvý krok – zistiť, ktoré časti súčasného stromu
sú mŕtva váha, než sa navrhne nová štruktúra.

## Zdrojové dáta

- `data/shoptet-categories-2026-09-11.csv` – živý export celého stromu kategórií zo
  Shoptet administrácie (2568 kategórií, `id;parentId;parentUrl;...;title;url;...`).
- `data/shoptet-products-export-2026-09-11.csv` – produktový export z partnerského
  feedu (`patternId=-7&partnerId=9`), 26 599 produktov, stĺpce `defaultCategory` +
  `categoryText`–`categoryText11` (produkt môže byť priradený vo viacerých
  kategóriách naraz).
- `data/shoptet-categories-s-poctami-produktov-2026-09-11.csv` – **spracovaný
  výstup tejto analýzy**: každý riadok pôvodného stromu doplnený o `full_path`,
  `is_leaf`, `direct_products` (produkty priamo v tejto kategórii),
  `subtree_products` (súčet vrátane všetkých podkategórií) a `empty` (1/0 príznak).
  Toto je pracovný súbor pre ďalšiu prácu na novej kategorizácii.

Počítanie: cesta kategórie (`full_path`, napr. `Auto-moto > Autorádiá > Autorádiá
s USB`) sa porovnala presne s hodnotami `categoryText*` v produktovom exporte.
Nejde o live crawling stránok (to sa v tejto session ukázalo ako pomalé/nespoľahlivé
cez proxy) – ide o priame prepočítanie z dát, preto je výsledok presný a rýchly.

## Kľúčové čísla

- 2568 kategórií celkovo, **2360 viditeľných**, 208 skrytých (z toho 186 skrytých
  je zároveň listových – dajú sa zmazať bez rizika, nie sú ani vidno).
- **984 z 2360 viditeľných kategórií (42 %) nemá ani jeden produkt** – ani priamo,
  ani v žiadnej podkategórii:
  - 888 listových kategórií úplne bez produktu
  - 96 celých vetiev (nadradená kategória + úplne všetky jej podkategórie prázdne)
- Hĺbka stromu až 5 úrovní, 256 kategórií leží na 4.–5. úrovni.
- 216 názvov kategórií sa opakuje naprieč rôznymi vetvami (542 kategórií v týchto
  skupinách) – dôsledok viacerých dodávateľských feedov (K+B, Penta, MONACOR,
  Solight, InnPro...), z ktorých si každý doniesol vlastnú kategorizáciu namiesto
  napojenia na jeden spoločný strom. Súvisí s existujúcim `scripts/resolve-category.js`
  a `scripts/find-category-duplicates.js` – tie riešia duplicity, toto zistenie
  (prázdne kategórie) je doplnkový, samostatný problém.

## Počet prázdnych kategórií podľa top-level vetvy

| Vetva | Prázdnych kategórií |
|---|---:|
| Náradie a dielňa | 199 |
| Elektroinštalačný materiál | 172 |
| Auto-moto | 134 |
| Profesionálna audio technika | 104 |
| Domáce spotrebiče | 88 |
| Šport, hračky a voľný čas | 73 |
| Bezpečnosť a smart domácnosť | 60 |
| Záhrada | 49 |
| Fotovoltaika a energie | 44 |
| Zdravie a starostlivosť | 40 |
| Dróny a RC modely | 6 |
| Počítače a notebooky | 6 |
| Kreatívne technológie | 5 |
| Mobily, smart hodinky a tablety | 2 |
| TV, audio a video | 2 |
| **Spolu** | **984** |

## Príklad celej prázdnej vetvy

`Auto-moto > Vybavenie auta > Autokoberce` – 15 podkategórií podľa značky auta
(VW, BMW, Mercedes, Audi, Jeep, Renault, Nissan, Dacia, Opel, Hyundai, Peugeot,
Kia, Citroën, Ford, Volvo, Toyota), **všetky bez jediného produktu**. Vyzerá to
ako štruktúra pripravená pre feed, ktorý sa nikdy nenaplnil.

Ďalšie celé prázdne vetvy: `Náradie a dielňa > Stavebné a maliarske náradie`
(7 prázdnych podkategórií), `Elektroinštalačný materiál > Ventilačné technika`
(viacero prázdnych podvetiev), `Zdravie a starostlivosť > Parfumy a kozmetika`.
Úplný zoznam (96 vetiev) je v `data/shoptet-categories-s-poctami-produktov-2026-09-11.csv`
– filtrovať podľa `is_leaf=0` a `empty=1`.

## Ako pokračovať

Toto je len prvý krok pred navrhnutím **celej novej kategorizácie** (zadanie
používateľa, 2026-09-11) – nie samostatná úloha na dokončenie. Ďalšie kroky, na
ktorých sa bude stavať:

1. Skryť/zmazať 984 prázdnych kategórií (dátami podložené, bez rizika).
2. Zjednotiť 216 roztrieštených názvov naprieč vetvami (nadväzuje na
   `scripts/find-category-duplicates.js` a históriu v `reports/kategorie-na-zjednotenie-*.md`).
3. Navrhnúť plochejšiu, zákaznícky zrozumiteľnú štruktúru (inšpirácia: Nay.sk
   a ďalší konkurenti – bot-ochrana Nay.sk zatiaľ bránila priamemu stiahnutiu
   ich stromu, treba iný spôsob získania referencie).
4. Premietnuť novú štruktúru späť do `scripts/*-mapping.json`
   (`categoryRenamesByPath`) pre všetky dodávateľské importy, nielen do Shoptet
   administrácie – inak sa pri ďalšom nočnom behu feedy vrátia do starej štruktúry.

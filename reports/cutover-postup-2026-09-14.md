# Postup nasadenia nového stromu kategórií (noc nedeľa → pondelok)

> **Aktualizované 2026-09-13:** strom má **242 uzlov**. Audit pred nasadením našiel a opravil
> štyri chyby – viď sekciu „Nálezy auditu 2026-09-13" na konci dokumentu. Pribudol krok 4c
> (regenerovanie `data/category-urls.json`).

Pripravené súbory čakajú vedľa aktuálnych (živých) ako `*.new.json` / s dátumom v názve —
**nočný sync do nedele bude fungovať bez zmeny**, tieto sa aktivujú až ručným premenovaním
podľa tohto postupu, v uvedenom poradí.

## 0. Čo je pripravené

| Živý súbor (nemeniť pred krokom 3) | Pripravená náhrada |
|---|---|
| `scripts/atos-mapping.json` | `scripts/atos-mapping.new.json` |
| `scripts/kb-mapping.json` | `scripts/kb-mapping.new.json` |
| `scripts/innpro-mapping.json` | `scripts/innpro-mapping.new.json` |
| `scripts/solight-mapping.json` | `scripts/solight-mapping.new.json` |
| `scripts/penta-mapping.json` | `scripts/penta-mapping.new.json` |
| `scripts/basys-mapping.json` | `scripts/basys-mapping.new.json` |
| `scripts/wiim-mapping.json` | `scripts/wiim-mapping.new.json` |
| `scripts/heureka-mapping.json` | `scripts/heureka-mapping.new.json` |
| `scripts/heureka-hidden-categories.json` | `scripts/heureka-hidden-categories.new.json` |
| `data/known-categories.json` | `data/known-categories-new-2026-09-12.json` |

**Pozor:** celá dnešná práca je na vetve `claude/eshop-ux-ui-conversion-a1x9fq`, nie na `main`.
Workflowy si berú kód z `main`, takže vetvu treba **zlúčiť do `main` pred krokom 4** – inak
nočné behy pobežia bez deduplikácie dodávateľov, bez vynútenia kategórií a so starými cenami.

Každý `categoryRenamesByPath`/`categoryOverridesByCode` záznam bol prepísaný zo starej cesty na
zodpovedajúcu cestu v novom 227-kategóriovom strome (metodika a nálezy nižšie). `categoryExclusionsByPath`
a `excludedManufacturers` sú nedotknuté (netýkajú sa nášho stromu, sú to surové kategórie/značky
priamo z feedu dodávateľa).

**Dodatočne nájdené pri kontrole (pôvodne mimo môjho zoznamu "5 dodávateľov"):**
- `scripts/basys-mapping.json` má úplne iný formát (`categoryMap`, `fallbackByManufacturer`,
  `priceListCategoryMap` namiesto `categoryRenamesByPath`) a **beží na nočnom crone** (23:00 UTC)
  – bez tejto opravy by BASYS po prepnutí ďalej zapisoval staré cesty, ktoré `transform-basys.js`
  **vôbec neoveruje** proti `known-categories.json` (žiadny `resolve-category.js` gate), takže
  Shoptet by ich ticho znova vytvoril ako nové "zamiešané" kategórie – presne to, čo má celý
  tento projekt odstrániť. Opravené, 0 nenapárovaných zo 78 hodnôt.
- `scripts/wiim-mapping.json` (kľúčované podľa názvu produktu, nie kategórie) tiež mapuje do
  starého stromu, ale **nebeží na žiadnom crone** (len `deploy-wiim-audiosk-image-proxy.yml`,
  čo je niečo iné) – pripravil som ho pre úplnosť, nie je časovo urgentné.
- **Skontroloval som aj `scripts/collapse-duplicate-categories.js` a `scripts/fix-ignored-categories.js`**
  (bežia v každom `*-sync.yml` PO transform kroku, priamo prepisujú text `output/*.xml`) – ich
  `COLLAPSE_MAP`/`RENAME_MAP` sú kľúčované starými cestami, ktoré sa v novom strome už nikdy
  nevyskytnú → po prepnutí sa stanú neškodne nefunkčné (netreba nič meniť, nič nerozbijú). Jedna
  zhoda ale zostáva funkčná aj naďalej: `DROP_LIST` v `fix-ignored-categories.js` obsahuje presne
  `"Profesionálna audio technika > Nové produkty"` a `"...Výpredaj"` (koreň sa nezmenil) – tieto
  2 kategórie (ktoré som už v `kategorie-import-seo-2026-09-12.md` označil ako pseudo-kategórie
  na zváženie) budú mať produkty naďalej automaticky "odkategorizované" týmto už existujúcim
  mechanizmom, presne ako dnes. Nič netreba robiť, len o tom vedieť.
- `scripts/transform-monacor.js` nepoužíva žiadny mapping súbor ani gate – len pripája raw
  kategóriu za pevný `MONACOR_ROOT_CATEGORY` ("Profesionálna audio technika", nezmenené
  v novom strome) → bez zmeny, netreba nič robiť.

## 1. Import nového stromu kategórií do Shoptetu
Import `data/kategorie-import-2026-09-12.csv` (Nastavenia → Import a export dát → Kategórie).

## 2. Import presmerovaní
Import `reports/redirect-map-kategorie-shoptet-import.csv` (Marketing → Základné SEO →
Presmerovanie adries URL) — **pred zmazaním starého stromu**, nech Shoptet nezačne 404-kovať.

## 2b. Import SEO obsahu značiek
Import `data/vyrobcovia-import-2026-09-12.csv` (Nastavenia → Import a export dát → Výrobcovia) –
175 značiek s popisom a meta dátami, vrátane odkazov na kategórie. **Musí ísť až po kroku 1**,
odkazy smerujú na nové kategórie. Voliteľne aj `data/vyrobcovia-skryt-2026-09-12.csv`
(264 značiek bez produktov → skryť z výpisu), ten je na strome nezávislý.
Podrobnosti a nálezy: `reports/vyrobcovia-seo-2026-09-12.md`.

## 3. Zmazanie starého stromu kategórií
Až teraz, keď staré URL už majú funkčné presmerovanie na nové.

## 4. Aktivovať pripravené súbory (jediný krok, ktorý mení `scripts/*-mapping.json` a `data/known-categories.json`)
Spustiť v koreňovom adresári repozitára (premenuje 10 súborov naraz):

```bash
mv scripts/atos-mapping.new.json scripts/atos-mapping.json
mv scripts/kb-mapping.new.json scripts/kb-mapping.json
mv scripts/innpro-mapping.new.json scripts/innpro-mapping.json
mv scripts/solight-mapping.new.json scripts/solight-mapping.json
mv scripts/penta-mapping.new.json scripts/penta-mapping.json
mv scripts/basys-mapping.new.json scripts/basys-mapping.json
mv scripts/wiim-mapping.new.json scripts/wiim-mapping.json
mv scripts/heureka-mapping.new.json scripts/heureka-mapping.json
mv scripts/heureka-hidden-categories.new.json scripts/heureka-hidden-categories.json
mv data/known-categories-new-2026-09-12.json data/known-categories.json
git add -A && git commit -m "Aktivacia mapovania na novy strom kategorii"
```

**Dôležité poradie a časovanie (overené priamo v `.github/workflows/*.yml`, nie z pamäte):**
tento krok musí prebehnúť **po** kroku 1 (kategórie už reálne existujú v Shoptete) a **pred
najbližším behom ktoréhokoľvek `*-sync.yml`** — inak trusted `categoryRenamesByPath` (obchádza
kontrolu proti `known-categories.json`) zapíše do produktov starú cestu, ktorá už v Shoptete
neexistuje, a Shoptet ju **ticho znova vytvorí ako novú kategóriu** — späť by sa vrátili presne
tie isté "zamiešané" kategórie, ktoré sme celým týmto projektom odstraňovali.

Skutočný nočný raster (UTC): Heureka report 22:00, **ATOS 22:10**, **InnPro 22:00** (pozor:
InnPro beží **4× denne** — 4:00, 10:00, 16:00 aj 22:00 UTC, nielen v noci!), **K-B 22:30**,
**MONACOR 22:40**, **Solight 22:50**, **Penta 22:20**, **BASYS 23:00**. Keďže InnPro beží aj
cez deň, krok 4 nemožno odložiť "na pondelok popoludní" — musí byť hotový do najbližšieho z
týchto časov po dokončení krokov 1-3, inak InnPro (alebo ktorýkoľvek iný nočný beh, ktorý medzičasom
odpáli) zanesie stromu naspäť staré kategórie. V praxi: naplánovať kroky 1-4 tak, aby prebehli
vcelku, s rezervou aspoň hodinu pred najbližším z časov vyššie.

## 4b. Reset základnej čiary pre rannú kontrolu
Ranná kontrola (`.github/workflows/morning-feed-check.yml`, denne 05:00 UTC) hlási kategórie,
ktoré feedy zapisujú do produktov, ale v strome neexistujú — Shoptet by ich pri importe vytvoril.
Aby nehlásila stále to isté, porovnáva sa proti `data/kategorie-mimo-stromu-baseline.json`.

Po prepnutí na nový strom (a po regenerovaní `data/known-categories.json` z čerstvého exportu,
viď krok 5) treba základnú čiaru vynulovať, nech sa počíta od nového stavu:

```bash
echo '[]' > data/kategorie-mimo-stromu-baseline.json
node scripts/check-unknown-categories.js   # ukáže, čo po prepnutí zostalo mimo stromu
```

Očakávaný výsledok je skoro nula — všetky hodnoty v prepísaných mapping súboroch boli overené
proti novému stromu. Čo zostane, treba buď opraviť v mappingu, alebo vedome prijať a zapísať
do základnej čiary. Od toho momentu upozornenie príde len na naozaj **nové** kategórie.

**Vyriešené 2026-09-12:** `data/known-categories.json` bol regenerovaný z čerstvého exportu
(`data/shoptet-categories-2026-09-12.csv`, 2568 kategórií). Proti nemu je počet kategórií mimo
stromu **nula** – všetkých pôvodných 59 nálezov boli artefakty zastaraného snapshotu. Základná
čiara je preto prázdna a ranná kontrola hlási len skutočne nové prípady.

Pribudla aj tvrdá poistka: `scripts/enforce-tree-categories.js` beží ako **posledný krok
v každom `*-sync.yml`** a zaručuje, že vo vygenerovanom XML nezostane kategória mimo stromu.
Ak sa taká objaví, skráti sa na najhlbšieho existujúceho predka (produkt zostáva v ponuke, len
o úroveň vyššie) a zapíše sa do `reports/kategorie-mimo-stromu-{dodavatel}.md`. Po kroku 4 teda
Shoptet nemôže vytvoriť žiadnu kategóriu, ktorá nie je v novom strome – ani cez trusted
`categoryRenamesByPath`, ani cez BASYS/MONACOR, ktoré gate nemajú.

## 4c. Odkazy na kategórie v popisoch produktov
`scripts/add-category-links.js` dopĺňa do popisu každého produktu odkaz na jeho kategóriu.
`data/category-urls.json` už je vygenerovaný z nového stromu a kľúčovaný **plnou cestou**
(predtým názvom listu, čo pri 5 rovnako pomenovaných listoch viedlo na cudziu kategóriu).
Netreba nič robiť – len vedieť, že do prepnutia mappingov (krok 4) skript odkazy nedopĺňa,
lebo feedy ešte zapisujú staré cesty. Po kroku 4 sa doplnia automaticky.

## 5. Overenie po prvom behu
Po prvom behu po prepnutí skontrolovať `reports/nezaradene-kategorie-*.md` pre každého
dodávateľa — mal by byť prázdny alebo len s pár okrajovými položkami (viď nižšie, tieto
prázdne/skoro-prázdne reporty existujú už teraz, nezávisle od tejto zmeny). Ak sa tam objaví
veľa NOVÝCH kategórií oproti dnešnému stavu, `data/known-categories.json` alebo niektorý
mapping pravdepodobne nesedí s tým, čo Shoptet reálne vytvoril pri importe.

**Kontrola pred nasadením (dnešný stav, pre porovnanie po prepnutí):** `nezaradene-kategorie-atos.md`
má už teraz 11 nenapárovaných kategórií (100 produktov), `nezaradene-kategorie-innpro.md` 9 (297
produktov), `nezaradene-kategorie-kb.md` 8 (8 produktov) — toto sú produkty, ktoré sa **už dnes**
neimportujú (predchádzajúci, na tomto projekte nezávislý stav), moja zmena ich nespôsobila.
Keďže nový `known-categories.json` je kratší/hrubší než starý, je pravdepodobné, že týchto
nenapárovaných po prepnutí mierne pribudne (menej podobných kategórií na fuzzy-match proti).
Odporúčam tieto reporty po prvom behu porovnať s dnešnými číslami, nie čakať že budú na nule.

**Odporúčanie:** akonáhle je nový strom živý v Shoptete, spustiť čerstvý export kategórií a
znovu vygenerovať `data/known-categories.json` oficiálnym nástrojom:
```bash
node scripts/build-known-categories.js data/shoptet-categories-<datum>.csv data/known-categories.json
```
Toto je autoritatívnejšie než môj predpočítaný súbor (ktorý vychádza z plánovaného stromu, nie
z reálneho stavu po importe – Shoptet môže URL/ID priradiť mierne inak, najmä ak sa import
čiastočne nepodarí).

## Metodika prepisu (pre kontrolu)

Každá stará cesta v `categoryRenamesByPath`/`categoryOverridesByCode`/`heureka-mapping.json`
bola nájdená v starom 2568-kategóriovom strome a napojená na zodpovedajúci uzol nového stromu
rovnakým mechanizmom ako pri redirect mape (presná zhoda → najbližší predok). Výsledok:
- **7 dodávateľských mapping súborov** (atos, kb, innpro, solight, penta, basys, wiim): 0
  nenapárovaných hodnôt z 540 celkovo (100 %).
- Špeciálny prípad: "Powerbanky" (predtým ručne nasmerované na virtuálnu cestu "Mobily... >
  Powerbanky", ktorá nikdy neexistovala v reálnom strome) som prepísal na
  `Počítače, mobily a tablety > Príslušenstvo > Powerbanky` – zachováva tvoje pôvodné
  rozhodnutie "powerbanky k mobilom", namiesto toho, aby spadli na holý koreň kategórie.

### Heureka mapovanie (scripts/heureka-mapping.json)
Pôvodných 1434 záznamov je oveľa jemnejšie rozčlenených než nový 227-kategóriový strom – veľa
starých (rôznych) Heureka kategórií sa teraz zlieva do jedného nového uzla. Kde jedna Heureka
kategória jasne prevažuje (≥60 % reálneho produktového objemu), ponechal som ju. Kde bol mix
príliš vyrovnaný na jednoznačné rozhodnutie, **radšej som kategóriu vynechal** (138 z pôvodných
~227 potenciálnych uzlov má priradené heureka ID) – chýbajúce ID nie je chyba, `heurekaCategoryIdFor`
vtedy vráti null a Heureka/Shoptet použijú svoje vlastné automatické párovanie namiesto nesprávne
vnúteného ID. Zoznam 50 vynechaných uzlov je v logu skriptu (`rewrite_heureka_mapping.py`), viem
ich na požiadanie doplniť ručne, ak niektorá z nich je pre teba obchodne dôležitá.

## Zlúčenie meracej a spájkovacej techniky (fast-follow bod 1 a 2, 2026-09-12)

Tri samostatné uzly meracej techniky ("MERACIE TECHNIKA" 461 ks, "Meracie prístroje" 253 ks,
"Meracia technika" 19 ks) a dva uzly spájkovania ("SPÁJKOVACIE TECHNIKA" 186 ks, "Spájkovačky"
16 ks) boli zlúčené do dvoch rodičov s vecnými podkategóriami:

- **Dielňa a záhrada > Meracia technika** (`meracie-technika`) – 12 podkategórií
- **Dielňa a záhrada > Spájkovacia technika** (`spajkovacie-technika`) – 5 podkategórií

Zároveň sa opravili aj gramaticky chybné názvy z verzálok ("MERACIE TECHNIKA" → "Meracia technika").

**SEO kontinuita:** URL podkategórie sa opakovane použila zo starej kategórie všade, kde je obsah
totožný – `detektory`, `lupy`, `nivelacne-pristroje`, `infrateplomery-a-termokamery`,
`meranie-neelektrickych-velicin`, `meracie-lasery`, `osciloskopy-a-generatory`,
`prislusenstvo-pre-spajkovacky`, `spajkovacky` zostávajú v platnosti bez presmerovania.
Zvyšné staré adresy majú presmerovanie v redirect mape (celkovo 2340 záznamov, 0 reťazcov,
0 duplicitných zdrojov, 0 cieľov mimo stromu).

**Rozdelenie 253 InnPro produktov:** InnPro posiela celú meraciu techniku v jedinej surovej
kategórii, takže na úrovni kategórií sa rozdeliť nedá. `transform-innpro.js` preto dostal nový
mechanizmus `categorySubRulesByName` (pravidlá podľa názvu produktu, poradie je významné, prvé
zhodné vyhráva). Overené na reálnom exporte: **253/253 produktov zaradených** do správnej
podkategórie. Produkt, na ktorý nesadne žiadne pravidlo, zostáva v nadradenej kategórii, takže
mechanizmus nikdy nespôsobí stratu kategórie.

Kód v `transform-innpro.js` je **bezpečný pre dnešný import** – živý `scripts/innpro-mapping.json`
kľúč `categorySubRulesByName` neobsahuje, takže sa správa presne ako doteraz. Pravidlá sú len
v `scripts/innpro-mapping.new.json` a aktivujú sa až pri kroku 4.

**Zostáva nevyriešené (bod 3):** pseudo-kategórie `Profesionálna audio technika > Nové produkty`
(7 ks) a `> Výpredaj` (4 ks). Kontrola exportu ukázala, že **žiadny z týchto 11 produktov nie je
v inej kategórii**, takže ich zmazanie by ich nechalo bez kategórie. Podľa dohody sa riešia neskôr
– najprv treba produkty preradiť do vecných kategórií, až potom kategórie zrušiť.


## Nálezy auditu 2026-09-13 (pred nasadením)

Systematická kontrola všetkých pripravených súborov našla štyri chyby. Všetky sú opravené
a overené.

**1. Názvy kategórií v strome nesúhlasili s názvami v importe (55 uzlov) — vážne.**
Pri tvorbe SEO obsahu dostalo 55 kategórií presnejší názov (napr. „Načítanie" → „Nabíjačky pre
drony a RC modely", „Fotovoltaika" → „Fotovoltaické inštalačné príslušenstvo"), ale `name`
a `full_path` v strome zostali pôvodné. Mappingy dodávateľov, `known-categories`, Heureka
mapovanie aj vynútenie kategórií pritom vychádzajú z `full_path`. Feedy by teda po prepnutí
zapisovali cesty, ktoré by v Shoptete neexistovali, a Shoptet by k 55 správnym kategóriám
vytvoril 55 duplikátov so starým názvom — presne to, čomu má celý projekt zabrániť. Strom
je zjednotený s importom (58 prepísaných ciest vrátane potomkov) a všetko nadväzujúce
pregenerované.

**2. Powerbanky nemali v strome uzol.** Mappingy piatich dodávateľov smerovali 43 produktov na
`Počítače, mobily a tablety > Príslušenstvo > Powerbanky`, ktorá v strome neexistovala — doteraz
to fungovalo, lebo trusted rename ju dal Shoptetu vytvoriť. S novým vynútením by sa skrátila na
rodiča a powerbanky by prišli o vlastnú kategóriu. Pridaný uzol `g146a` s URL `powerbanky`
(prevzatá zo starého stromu, teda bez potreby presmerovania) a všetkých 5 starých ciest naň
presmerovaných.

**3. Prepis mappingov mazal pravidlá pre InnPro.** `rewrite_supplier_mappings.py` skladá
`.new.json` zo živého mapping súboru, takže `categorySubRulesByName` (rozdelenie 253 produktov
meracej techniky podľa názvu) sa pri každom prepise ticho stratilo. Skript ich teraz vkladá
zakaždým.

**4. Odkazy v popisoch produktov mierili na starý strom.** `data/category-urls.json` bol
vygenerovaný zo sitemapy z 6. 9. — 881 z 1034 cieľových URL by po prepnutí ukazovalo mimo nového
stromu. Mapa je pregenerovaná z nového stromu a `add-category-links.js` páruje podľa plnej cesty
namiesto názvu listu.

### Overené, bez potreby zásahu

- 2339 presmerovaní: 0 duplicitných zdrojov, 0 reťazcov, všetky ciele v strome, všetky zdroje
  existujú v živom strome. Bez presmerovania zostávajú 2 staré kategórie (`akce-atos-35-let`,
  `druhy`) — obe sú `visible=0`, teda skryté, bez dopadu na SEO.
- Import CSV: 242 riadkov, rodič vždy pred dieťaťom, žiadny `metaDescription` nad 160 znakov,
  `id`/`parentId` prázdne.
- Všetkých 8 mapping súborov: 0 hodnôt mimo stromu.
- 466 odkazov v importe výrobcov: všetky na existujúce kategórie.
- Simulácia feedu s novými cestami cez `enforce-tree-categories.js`: 0 skrátených, 0 vynechaných.
  Cez `add-category-links.js`: 242 z 242 produktov dostalo správny odkaz.

### Drobnosť na vedomie

`scripts/collapse-thin-categories.js` zlučuje do rodiča kategórie s menej než 8 produktmi. V novom
strome sú take 4 uzly: „Diaľkové ovládače" (0 priamych, deti majú stovky — nič sa nestane),
„Výpredaj" a „Nové produkty" (tie už predtým zahodí `fix-ignored-categories.js`) a „Foto
a príslušenstvo" (7 priamych produktov by sa presunulo o úroveň vyššie). Dopad je zanedbateľný,
ale ak nechceš ani to, dá sa prah zvýšiť cez `THIN_CATEGORY_MIN`.

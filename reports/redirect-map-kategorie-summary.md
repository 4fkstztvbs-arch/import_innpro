# Redirect mapa: staré kategórie → nový strom (2026-09-12)

## Vstupy
- `data/shoptet-categories-2026-09-11.csv` – pôvodný strom, 2568 kategórií (živý export).
- `data/navrh-novej-kategorizacie-2026-09-11.csv` – 851-kategóriový návrh (produktové dáta → zjednodušená štruktúra), stĺpec `old_paths` viaže každú novú vetvu na pôvodné cesty.
- `config/mapping_state.json` (interaktívny nástroj, artefakt) – ručne poskladaný finálny 227-uzlový strom (10 hlavných kategórií) a priradenie 851 kategórií doňho.
- `data/novy-strom-kategorii-2026-09-12.csv` – export 227 uzlov s vygenerovanými URL (172+ prevzatých zo starých URL kvôli SEO, zvyšok nové).

## Nájdený a opravený bug: kolízie prevzatých URL

Pri príprave presmerovaní sa zistilo, že **18 z pôvodne prevzatých URL** v `novy-strom-kategorii-2026-09-12.csv` bolo omylom prevzatých od **nesúvisiacej** starej kategórie – zrejme párovaním len podľa názvu listu (napr. "Príslušenstvo", "Batérie", "Svetlá", "Teplomery" – bežné generické názvy použité vo viacerých vetvách). Príklad: nový uzol "TV, foto, audio video > Príslušenstvo" si pôvodne "požičal" URL `/prislusenstvo-3/`, ktorá ale reálne patrila kategórii "Náradie a dielňa > … > Frézy a frézky > Príslušenstvo" – po importe by tak návštevník starého odkazu skončil na úplne inom tovare.

Oprava (`fix_url_collisions.py`):
1. Pre každý uzol sa overilo, či prevzatá URL naozaj patrí kategórii, ktorá reálne prispieva obsahom do daného uzla (podľa `old_paths`, resp. zhoda celej cesty).
2. Pri kolízii sa hľadala **správna** stará URL medzi skutočne prispievajúcimi vetvami (uprednostnená najkratšia/najvšeobecnejšia zhoda) – v 17 z 18 prípadov sa takto našla vhodnejšia reálna URL na prevzatie, len 1 prípad (Diaľkové ovládače) dostal úplne novú URL.
3. Výsledok bol zapísaný späť do `data/novy-strom-kategorii-2026-09-12.csv` (0 kolízií, 0 duplicitných URL po oprave).

Súčasne bola opravená súvisiaca chyba v `config/mapping_state.json` (artefakt, v114): 3 položky `assign` ukazovali na už zmazané ID koreňových kategórií (Dróny, Kreatívne technológie, Mobily) po zlučovaní na 10 hlavných kategórií – prepojené na správne prežívajúce uzly.

## Výsledná redirect mapa

- **2364 presmerovaní** vygenerovaných zo 2568 pôvodných kategórií.
- **2 nezmapované**: skryté/nepoužívané interné kategórie dodávateľa ("Druhy", "AKCE ATOS 35 LET", `visible=0`) – bez reálnej návštevnosti, presmerovanie netreba.
- **0 reťazcov** (A→B→C), **0 duplicít**, **0 chýbajúcich cieľov** – overené skriptom.

Rozdelenie podľa typu zhody:
| typ | počet | popis |
|---|---|---|
| exact | 1132 | stará kategória sa 1:1 zhoduje s novou vetvou |
| ancestor(-1) | 979 | presmerované na rodiča (1 úroveň hore) – typicky zrušená/zlúčená podkategória |
| ancestor(-2) | 231 | 2 úrovne hore |
| ancestor(-3) | 22 | 3 úrovne hore (najhlbšie zaniknuté vetvy) |

## Výstupné súbory
- `reports/redirect-map-kategorie-2026-09-12.csv` – detailný audit (old_url, new_url, typ zhody, plné cesty, ID) na kontrolu.
- `reports/redirect-map-kategorie-shoptet-import.csv` – formát pripravený na import do Shoptet **Marketing → Základné SEO → Presmerovanie adries (URL)** (`fromUrl;toUrl;automatic`, relatívne cesty s lomítkom na konci). Celkovo **2365 riadkov** (2364 z pôvodného stromu + 1 doplnený nižšie).

## Dodatok: kategória "Fotovoltika" (id 49470)
Pri sťahovaní aktuálneho živého exportu (2026-09-12) sa zistilo, že medzi 11.9. a 12.9. pribudla nová top-level kategória "Fotovoltika" (preklep, chýba "a") – prázdna, 0 produktov, bez popisu. Nebola v pôvodnom sept-11 snapshote, ktorý bol vstupom celej tejto analýzy (zvyšných 2568 kategórií je medzi oboma exportmi bajtovo identických – overené). Ide zrejme o vedľajší produkt nočného sync jobu. Doplnil som pre ňu presmerovanie `/fotovoltika/ → /fotovoltaika-a-energie/` do oboch výstupných súborov; odporúčam ju po importe v Shoptet administrácii zmazať/nechať zaniknúť.

## Ďalší krok
Pred nedeľňajším nasadením odporúčam: (1) spravit spot-check 15-20 náhodných riadkov priamo v Shoptet administrácii po importe, (2) importovať najprv presmerovania, až potom mazať starý strom (aby Shoptet nezačal 404-kovať medzikrokom).

## SEO obsah novej kategorizácie
Kompletný import súbor s vygenerovaným SEO obsahom (title, meta title/description, popis kategórie) pre všetkých 227 nových kategórií je pripravený samostatne – pozri `reports/kategorie-import-seo-2026-09-12.md` a `data/kategorie-import-2026-09-12.csv`.

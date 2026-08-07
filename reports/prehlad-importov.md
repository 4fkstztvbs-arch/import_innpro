# Prehľad importov — premiumstore.sk (repo `import_innpro`)

Stav k **2026-08-07**. Tento dokument je živý prehľad, aktualizuj ho pri väčších zmenách v mapovaní/cenotvorbe/architektúre.

## 1. Ako to celé funguje (spoločná architektúra)

Pre každého z 5 dodávateľov beží samostatný **GitHub Actions workflow** (`.github/workflows/*-sync.yml`), ktorý:
1. na pláne (cron, plus možnosť ručne spustiť cez "Run workflow") stiahne feed dodávateľa,
2. transformuje ho `node scripts/transform-<dodavatel>.js` skriptom do **Shoptet-natívneho XML** (`<SHOP><SHOPITEM>...`),
3. u niektorých dodávateľov ešte obohatí dáta cez Icecat (`enrich-*-icecat.js`),
4. commitne výsledok do `output/<dodavatel>.xml` a pushne do `main` (retry logika pri súbežnom pushi od iného workflow).

`output/*.xml` sú verejne dostupné cez **GitHub Pages** na adrese v tvare:
```
https://<user>.github.io/<repo>/output/<dodavatel>.xml
```
Tieto URL sa nastavia v Shoptete ako zdroj pre **Automatický import**. Shoptet má vlastné importné okno **00:00–07:00**, do ktorého musia byť všetky súbory hotové — konkrétne u teba je import nastavený na **2:05**.

Spoločné závislosti: `fast-xml-parser`, `sax`, `he`, `csv-parse` (`package.json`).

## 2. Dodávatelia — súhrn

| Dodávateľ | Zdroj feedu | Auth | Plán (cron, UTC) | Aktuálny počet produktov* | Výstup |
|---|---|---|---|---:|---|
| **InnPro** | `full.xml` + `light.xml` (b2b.innpro.sk) | žiadna (URL v secrets) | `0 3 * * *` (3:00 UTC) | 6 232 | `output/innpro.xml` |
| **ATOS** | `i6ws` SOAP/ASMX (`resultType=StoItemShoptet_El`) | HTTP Basic Auth | `30 22 * * *` (22:30 UTC, nočné okno) | 12 317 | `output/atos.xml` |
| **K+B** | 5 feedov (tovar, kategórie, kategorizácia, ceny, dostupnosti) | URL v secrets | `0 1 * * *` (1:00 UTC) | 5 228 | `output/kb.xml` |
| **Solight** | `cenik.xml` | žiadna | `0 3 * * *` (3:00 UTC) | 1 297 | `output/solight.xml` |
| **MONACOR** | pulsepro.audio feed | žiadna (verejná URL) | `0 3 * * *` (3:00 UTC) | 2 696 | `output/monacor.xml` |

\* podľa posledného commitnutého `output/*.xml` — pozri sekciu 7, niektoré zmeny z tohto týždňa v kóde ešte čakajú na najbližší beh.

## 3. Cenotvorba

Všetky ceny na výstupe sú v **EUR s DPH** (`<PRICE_VAT>`), plus `<PURCHASE_PRICE>` (nákupná, bez DPH — `PURCHASE_PRICE_INCL_VAT=0`) okrem MONACOR-u, ktorý nákupnú cenu vôbec nemá k dispozícii.

| Dodávateľ | Zdrojová mena | Prepočet | Vzorec predajnej ceny | Marža / floor |
|---|---|---|---|---|
| InnPro | EUR (feed už v EUR) | — | `cena = nákup × (1+15%) × (1+DPH)` | žiadny floor, `INNPRO_MARKUP` konfigurovateľné |
| ATOS | **CZK** | živý kurz ČNB/ECB cez `frankfurter.app` (`api.frankfurter.app/latest?from=CZK&to=EUR`) pri každom behu | `cena = nákup_EUR × (1+15%) × (1+DPH)` | žiadny floor |
| K+B | EUR | — | **prednostne K+B vlastná odporúčaná cena**, inak `nákup × (1+10%) × (1+DPH)` | **min. marža 10 %** — ak by odporúčaná cena padla pod `nákup×1.10×DPH`, zdvihne sa na floor |
| Solight | EUR (feed má priamo `eur_eshop_price`) | — | **Solightova vlastná eshop cena priamo** (0 % markup default — "je to reálna cena, za ktorú Solight sám predáva") | žiadny floor |
| MONACOR | EUR | — | **MONACOR vlastná cena priamo** (0 % markup default) | žiadny floor, žiadna nákupná cena k dispozícii |

Filtre spoločné väčšine: `*_MIN_COST` (vylúčiť príliš lacné položky, default 0 = vypnuté), niektorí majú aj `*_EXCLUDE_UNAVAILABLE` (K+B, MONACOR, Solight — nezahŕňať nedostupné položky do importu).

**ATOS: vylúčenie značky Solight** — ATOS vo svojom feede predáva aj tovar značky Solight, ktorý máme priamo od Solightu s lepšou nákupnou cenou. `atos-mapping.json` má nové pole `excludedManufacturers: ["Solight"]`, ktoré `transform-atos.js` používa na preskočenie (case-insensitive porovnanie `MANUFACTURER` poľa) — takéto produkty sa do `output/atos.xml` vôbec nedostanú (počítané v `stats.skippedManufacturer` vo výstupe skriptu).

## 4. Kategorizácia

Každý dodávateľ má vlastný `scripts/<dodavatel>-mapping.json` s `categoryRenamesByPath` (premenovanie/zlúčenie cesty kategórie na cieľovú) a `categoryExclusionsByPath` (úplné vylúčenie produktu z importu — používať opatrne, produkt sa tým z feedu úplne stratí).

**Cieľový strom je spoločný naprieč InnPro/ATOS/K+B/Solight** (napr. `Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá`), s **jednou úmyselnou výnimkou: MONACOR**, ktorý má vlastný izolovaný koreň `Profesionálna audio technika > …` a nemieša sa so zvyškom stromu.

Mechanizmus (INNpro aj ATOS): z raw cesty kategórie sa postupne od najhlbšej úrovne k najvyššej hľadá zhoda v `categoryRenamesByPath`; prvá nájdená zhoda vyhráva a ďalej sa nejde (t.j. konkrétnejšie pravidlo má prednosť pred všeobecnejším).

### Nedávne opravy (2026-08-07, viď `reports/category-audit-2026-08-07.md`)

- **Kávovary** — InnPro (`...> Kávovary`) aj ATOS (`...> Ostatné spotrebiče > Kávovary`) mali vlastné neduplicitné vetvy namiesto K+B kanonickej `Kávovary a espressá`. Opravené rename pravidlom v oboch mappingoch (30 produktov).
- **ATOS "Druhy" tieňový strom** — `atos-mapping.json` kľúče (ručne písané, veľké písmená/čeština) sa nezhodovali presne s textom z live feedu → produkty padali do neprebrateného `Druhy > ...` stromu namiesto kanonickej kategórie. Týkalo sa to **7 077 z 12 239 produktov (58 %)**. Opravené case/diakritika-insenzitívnym porovnávaním v `transform-atos.js` (`normalizeKey()`).
- **InnPro poľské kategórie** — 8 kategórií (60 produktov) preložených a zlúčených s existujúcimi SK vetvami (fontány, dávkovače krmiva, inteligentné toalety, selfie tyče/držiaky, masážne prístroje, kavitačné peelingy); 3 kategórie bez spoľahlivého ekvivalentu (21 produktov: `AGD małe`, `Pozostałe`, `Szczoteczki do czyszczenia twarzy`) presunuté do **nadradenej** kategórie (produkt ostáva v importe, len bez vlastnej podkategórie — použitý rename na parenta, nie exclusion).

**Stav overenia:** `output/innpro.xml` sa už prebehol (InnPro sync 07:00 7.8.) a opravy sú v ňom reálne vidieť — `Kávovary` zlúčené s `Kávovary a espressá`, poľské zvyšky (`Wysięgniki`, `AGD małe`, `Pozostałe`, `Fontanny`, `Dozowniki karmy`, `Masażery`) v exporte už nie sú. `output/atos.xml` ešte čaká na nočný beh (ATOS beží len v noci, pozri sekciu 7).

### 4.1 Heureka kategórie (`HEUREKA_CATEGORY_ID`, od 2026-08-07)

Každý produkt môže do XML dostať `<HEUREKA_CATEGORY_ID>` — pole, ktoré Shoptet číta priamo z úplného importu a použije ako override pre zaradenie produktu do Heureka porovnávača (namiesto/popri ručnom párovaní kategórií v Shoptet administrácii `Prepojenie → Heureka → Kategórie`).

- **Mechanizmus:** `scripts/heureka-category.js` (zdieľané naprieč všetkými 5 `transform-*.js`) načíta `scripts/heureka-mapping.json` — mapu `naša finálna kategória (presne text z <CATEGORIES>) → Heureka CATEGORY_ID`. Ak produktova finálna kategória v mape nie je, `<HEUREKA_CATEGORY_ID>` sa jednoducho vynechá (žiadna chyba, žiadny fallback na nesprávnu hodnotu).
- **Ako mapa vznikla:** automatické párovanie kľúčových slov medzi naším stromom (2 279 listových kategórií) a živým Heureka stromom (`https://www.heureka.sk/direct/xml-export/shops/heureka-sekce.xml`, 3 551 listových kategórií) — viď `reports/heureka-mapovanie-navrh-2026-08-07.xlsx` pre kompletný návrh a históriu ladenia algoritmu.
- **Nasadený rozsah (2026-08-07):** **1 281 kategórií** (~56 % nášho stromu, ~57 % produktov) — celá "zelená" skupina (skóre istoty ≥30, namátkovo overená na ~90-95 % presnosť) + horná polovica "žltej" skupiny (skóre 15-30, po oprave algoritmu namátkovo ~50 % presnosť). Zvyšných ~44 % kategórií (nižšia žltá + celá červená skupina, skóre <18,84) **zámerne nenasadené** — presnosť tam bola pri kontrole nespoľahlivá (časté zámeny kvôli synonymám medzi našimi a Heureka názvami, napr. "Smart telefóny" vs "Mobilné telefóny").
- **K doriešeniu po spustení do ostrej prevádzky:** pokryť zvyšných ~44 % kategórií — buď doladením algoritmu (slovník synoným), alebo ručným dohľadaním pri kategóriách s najviac produktmi. Kompletný zoznam vrátane nenasadených kategórií (s navrhovaným ID a skóre) je v `reports/heureka-mapovanie-navrh-2026-08-07.xlsx`.

### 4.2 Porovnanie cien s Heurekou (`scripts/compare-heureka-prices.js`, od 2026-08-07)

Nástroj na porovnanie našich aktuálnych cien (z `output/*.xml`) s konkurenciou pomocou Heureka "sortiment reportu" (Heureka admin → export produktov obchodu, CSV — obsahuje `Vaša cena`, `Najnižšia cena`, celý cenový rebríček `PriceMin2..10`/`PriceMax10..2`, počet predajcov a pod.).

- **Použitie:** `node scripts/compare-heureka-prices.js <heureka-report.csv> [--out=path.csv] [--xml=dir]` (alebo `npm run heureka-price-compare -- <csv>`).
- **Párovací kľúč: EAN, nie "Item ID".** Stĺpec `Item ID` v Heureka reporte je Shoptetom pridelené interné ID produktu z konkrétneho obchodu (z URL `...#66040`) — po prestavbe/novom importe sa nezachová a nedá sa spárovať s ničím u nás. EAN naopak identifikuje fyzický produkt a prežije akúkoľvek zmenu obchodu — je to jediný spoľahlivý párovací kľúč.
- **Výstup:** CSV zoradené od najväčšieho rozdielu (kde sme najviac drahší) — EAN, názov, kategória, dodávateľ, naša cena, Heureka najnižšia/najvyššia cena, odhadovaná pozícia, rozdiel v € aj %, Heureka URL.
- **Otestované 2026-08-07** na reálnom exporte (5965 riadkov zo starého obchodu) — mechanika funguje (1912 produktov spárovaných cez EAN), ale keďže report bol z pôvodného e-shopu, číselné výsledky vtedy neboli použité na žiadne rozhodnutie. Treba spustiť znova s aktuálnym reportom, keď bude e-shop v ostrej prevádzke a Heureka bude mať naindexovaný aktuálny sortiment.

## 5. Obrázky

| Dodávateľ | Zdroj obrázkov |
|---|---|
| InnPro | vlastné URL z feedu (`b2b.innpro.sk/...`), max `INNPRO_MAX_IMAGES` (default 5) |
| ATOS | **od 2026-08-07 zmenené na Icecat**: `transform-atos.js` píše pôvodné ATOS `img.asp?attid=...` URL, no následný enrichment krok (`enrich-shoptet-icecat.js`, `REPLACE_IMAGES=1`) ich pre produkty s nájdenou zhodou EAN v `data/icecat-atos-full.csv` **nahradí** Icecat galériou — pôvodné ATOS URL sa totiž nedali spoľahlivo stiahnuť cez Shoptetov automatický import. Produkty bez zhody EAN si ponechajú ATOS URL ako fallback. |
| K+B | vlastné URL + Icecat dopĺňanie (`enrich-kb-icecat.js`, `data/icecat-full.csv`) — hmotnosť, extra fotky, energetické štítky, špecifikácie (dopĺňa len chýbajúce, neprepisuje) |
| Solight | vlastné URL (opravená známa chyba v ceste), max `SOLIGHT_MAX_IMAGES` |
| MONACOR | vlastné URL z feedu |

## 6. Ďalšie špecifiká podľa dodávateľa

- **ATOS**: recyklačný poplatok (`RECYCLING_FEE_*`, kde je vo feede), alternatívne produkty (`ALTERNATIVE_PRODUCTS`), skutočné príznaky Akcia/Novinka/Tip (`<FLAGS>`) priamo z feedu.
- **K+B**: recyklačný poplatok, energetické štítky (len pre `Veľké spotrebiče` / `Vstavané spotrebiče`, `KB_CHECK_ENERGY_LABELS=1` — HTTP HEAD kontrola existencie na K+B CDN), dostupnosť mapovaná na text (`1-2 ks skladom` … `21 a viac ks skladom`).
- **MONACOR**: `MONACOR_FOREIGN_AVAIL_TEXT` pre tovar dostupný len na sklade dodávateľa v zahraničí.
- **Solight**: opravená chyba v ceste k obrázkom, ktorú mal pôvodný feed.

## 7. Známe obmedzenia / otvorené veci

1. **ATOS feed je dostupný len v noci.** Skutočný platný `resultType` je **`StoItemShoptet_El`** (nie holé `StoItemShoptet`, ktoré vôbec neexistuje — potvrdené priamym testom, HTTP 500 "Unknown resultType"). Mimo nočného okna vracia HTTP 500 "Unsupported Hour". README aj `ATOS_URL` secret by mali používať `_El` variant. Aktuálny cron (`30 22 * * *` = 22:30 UTC) je v okne a necháva ~1h35min rezervu pred importom o 2:05.
2. **`output/atos.xml` čaká na regeneráciu** — kategorizačné opravy (Kávovary, "Druhy" fix) aj ATOS→Icecat obrázky sú v kóde na `main`, ale posledný commitnutý `atos.xml` (05:10 7.8.) ich ešte neobsahuje, keďže ATOS beží len v noci. `output/innpro.xml` je už čerstvý a opravy potvrdené priamo vo výstupe (beh 07:00 7.8.).
3. **Prihlasovacie údaje k ATOS v `README.md` sú v plaintexte** (`ATOS_USERNAME`/`ATOS_PASSWORD`) — vedomé rozhodnutie, ide o testovací prístup, finálna verzia bude mať iné heslá.

## 8. Kde čo nájdeš

```
scripts/transform-<dodavatel>.js     hlavná transformácia (ceny, XML výstup)
scripts/parse-<dodavatel>.js         parsovanie surového feedu
scripts/<dodavatel>-mapping.json     kategorizačné pravidlá (rename/exclusion)
scripts/enrich-*-icecat.js           Icecat obohatenie (K+B má vlastné, ATOS zdieľané s "generic" verziou)
.github/workflows/<dodavatel>-sync.yml   plán behu, env premenné, secrets
output/<dodavatel>.xml               finálny Shoptet XML (servuje sa cez GitHub Pages)
reports/category-audit-2026-08-07.md  detailný audit kategórií a migračný plán
```

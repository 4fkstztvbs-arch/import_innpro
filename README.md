# ATOS → Shoptet automatický import

Odporúčam toto do **toho istého repozitára**, čo už máš pre InnPro (`import_innpro`) — ušetríš si opakovanie nastavenia GitHub Pages. Package.json závislosti (`sax`, `fast-xml-parser`) sú rovnaké, netreba nič duplicitne inštalovať.

## Čo pridať do existujúceho repozitára

Skopíruj tieto súbory do svojho repozitára (zachovaj presne túto štruktúru):

```
scripts/stream-records.js       (nový)
scripts/parse-atos.js           (nový)
scripts/transform-atos.js       (nový)
scripts/atos-mapping.json       (nový)
.github/workflows/atos-sync.yml (nový)
```

**Nemusíš meniť** `package.json` ani `scripts/transform-innpro.js` a ostatné InnPro súbory — ATOS beží úplne nezávisle, len pridáva ďalšie súbory vedľa existujúcich.

## Nastavenie (urob raz)

### 1. Nahraj vyššie uvedené súbory
Rovnako ako predtým — cez "Add file → Create new file" (nie drag-and-drop upload, kvôli skrytému `.github` priečinku — presne to nás minule zaseklo).

### 2. Pridaj tri nové Secrets
**Settings → Secrets and variables → Actions → New repository secret**

- `ATOS_URL` = `https://shop.atoselektro.cz/i6ws/Default.asmx/GetResult?resultType=StoItemShoptet_El`
- `ATOS_USERNAME` = `nexymne64`
- `ATOS_PASSWORD` = `wn0296`

(Over si názvy **znak po znaku** — presne toto nám minule spôsobilo problém pri InnPro. Pozor aj na `resultType` v `ATOS_URL`: holé `StoItemShoptet` bez prípony neexistuje — server naň vráti `HTTP 500: Unknown resultType`. Platný je len `StoItemShoptet_El`, a aj ten je dostupný len v noci, cez deň vráti `HTTP 500: Unsupported Hour`.)

### 3. Over funkčnosť
- **Actions** → v ľavom menu teraz uvidíš aj **"ATOS sync"** (popri "InnPro sync")
- Klikni naň → **Run workflow**
- Počkaj 1-3 minúty, sleduj zelenú fajočku
- V repozitári by sa mal objaviť/aktualizovať `output/atos.xml`

### 4. Nastav v Shoptete automatický import
Rovnaká GitHub Pages adresa ako pri InnPro, len iný súbor na konci:
```
https://tvoje-meno.github.io/nazov-repozitara/output/atos.xml
```

## Dôležité — obrázky

Pôvodne sme skúšali nahradiť ATOS-ové obrázkové adresy (`img.asp?attid=...`) Icecat obrázkami cez `Enrich with Icecat data` krok (`REPLACE_IMAGES=1`), pretože sme mali podozrenie, že sa nedajú spoľahlivo stiahnuť do Shoptetu. Ukázalo sa ale, že `data/icecat-atos-full.csv` je z bezplatného "Open Icecat" účtu — ten vráti reálne dáta len pre malý zlomok produktov (pri poslednom behu 14 z 1101 vyžiadaných EAN, zvyšok len chybu "not allowed to access a Full Icecat repository"), takže Icecat prakticky nič neriešil.

**Stav (2026-08-07): vrátené na ATOS vlastné obrázky** (`REPLACE_IMAGES=0` v `atos-sync.yml`) — vyskúšame, či sa priamo z ATOS feedu do Shoptetu reálne stiahnu. Icecat enrichment (váha, špecifikácie, prípadné doplnkové obrázky pri zhode EAN) stále beží, len už nič nemaže/nenahradzuje.

## Heureka — automatická úprava cien (zatiaľ VYPNUTÁ)

Denne (21:00 UTC, `.github/workflows/heureka-price-report.yml`) sa spracuje Heureka sortiment report nahraný do `data/heureka-reports/` a pripraví sa `price-targets.json` (návrh, o koľko zvýšiť/znížiť cenu podľa konkurencie — pozri `reports/heureka-cenovy-navrh-*.md`). Tento návrh **sa zatiaľ live nepremieta do cien** — je za centrálnym vypínačom.

- **Stav:** vypnuté (vedomé rozhodnutie, 2026-08-07). Príprava dát beží, nič sa reálne nemení.
- **Zapnutie:** pridaj `HEUREKA_PRICE_OVERRIDE: '1'` do `env:` sekcie `.github/workflows/<dodavatel>-sync.yml` pre dodávateľa, kde to chceš aktívne (dá sa zapínať po jednom).
- **Vypnutie:** odstráň tú istú premennú (alebo ju daj na hociakú inú hodnotu než `'1'`).
- Detaily mechanizmu (floor 5 % marže, K+B výnimka, smer pohybu ceny) sú v `reports/prehlad-importov.md` sekcia 4.4.

## Čo sa importuje

Rovnaká logika ako v prehliadačovom nástroji:
- Ceny prepočítané z CZK na EUR podľa aktuálneho kurzu (ECB, cez frankfurter.app), + prirážka (15 %, dá sa zmeniť v `env:` sekcii workflow súboru) + DPH (23 %, slovenská sadzba)
- Nákupná cena označená príznakom "bez DPH" (`PURCHASE_PRICE_INCL_VAT=0`)
- Kategórie podľa schváleného mapovania (`scripts/atos-mapping.json`) — Druhy-stromu, so zaradením do všetkých nadradených úrovní
- Skutočné príznaky Akcia/Novinka/Tip priamo z feedu
- Recyklačný poplatok (kde je vo feede uvedený)
- Alternatívne produkty

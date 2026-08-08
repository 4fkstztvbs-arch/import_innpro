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

**História:** ATOS-ov vlastný feed (`StoItemShoptet_El`) posiela obrázky ako `img.asp?attid=...` — dynamický skript, ktorý Shoptetov automatický import spoľahlivo neustál (potvrdené priamo v Shoptet import logu: `Status code '403'` aj `Host connection timeout` pre `shop.atoselektro.cz`, opakovane 6.8. aj 8.8.2026). Skúšali sme nahradiť Icecat obrázkami (`enrich-shoptet-icecat.js`, `REPLACE_IMAGES=1`), no `data/icecat-atos-full.csv` je z bezplatného "Open Icecat" účtu, ktorý vráti reálne dáta len pre malý zlomok produktov (14 z 1101 vyžiadaných EAN) — takže to prakticky nič neriešilo.

**Stav (2026-08-08): statické CDN URL namiesto `img.asp`.** ATOS-ov verejný e-shop (`shop.atoselektro.cz`) servíruje obrázky produktov cez `img0`–`img3.atoselektro.cz` — štyri vzájomne zameniteľné statické CDN zrkadlá, úplne mimo `img.asp`. Cesta k obrázku sa dá zostaviť priamo z dát, bez nutnosti sťahovať jednotlivé produktové stránky:

- `https://img0.atoselektro.cz/x_ien<StoItem.Id>.jpg` — hlavný obrázok produktu (v kvalite "enlargement", nie zmenšenina)
- `https://img0.atoselektro.cz/x_ies<ImgGal.Id>.jpg` — každá ďalšia galériová fotka (len záznamy s `Tag=sys-gal-enl`, thumbnail varianty sa preskakujú)

(SEO časť v ceste pred `_ien.../ _ies...` je kozmetická — server smeruje výhradne podľa koncového ID, overené priamo na živých URL.)

`scripts/fetch-atos-images.js` stiahne tieto `Id`/`ImgGal` dáta z `resultType=StoItemBase_El` (dostupné len v noci, rovnaké okno ako `StoItemShoptet_El`) a uloží mapu `kód produktu → zoznam CDN URL` do `data/atos-image-urls.json`. `transform-atos.js` ju použije namiesto pôvodných `img.asp` URL — pre produkty bez záznamu v mape (skript ešte nebežal, alebo produkt v `StoItemBase_El` chýba) ostáva pôvodné ATOS URL ako fallback. Icecat enrichment (`REPLACE_IMAGES=0`) beží ďalej len pre váhu/špecifikácie, obrázky už nemení.

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

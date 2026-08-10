# ATOS → Shoptet automatický import

## DÔLEŽITÉ — Presun domény `premiumstore.sk` na Shoptet (DNS)

DNS pre `premiumstore.sk` sa spravuje u **Crooce** (`moj.crooce.com`, nameservery `1.ns.pri.crooce.com` / `1.ns.sec.crooce.com` — tie ostávajú nezmenené). Pošta (MX cez Seznam Email Profi) a ostatné subdomény (`imap`/`pop3`/`smtp`/`webmail`, `blog`, `helpdesk`, `shop`, `import`, `monacor`, `samsung`, `audio`, google-verifikačné CNAME) bežia nezávisle a touto zmenou sa nedotýkajú.

**Stav (2026-08-10): DNS prepnuté na Shoptet.**
- `premiumstore.sk` (root) — dva A záznamy: `185.184.254.10` a `185.184.254.11`
- `www.premiumstore.sk` — CNAME → `www.myshoptet.com.`
- Predtým obe smerovali na starý SHOPTEC eshop (A záznam, IP `185.59.208.190`). Starý eshop sa **nezachováva bežať súbežne** na inej subdoméne (vedomé rozhodnutie) — pôvodné produkčné dáta na `185.59.208.190` naďalej existujú, takže sa dá kedykoľvek vrátiť späť.

**Návrat späť (rollback), ak by bolo treba:**
1. V Crooce DNS zóne zmazať oba root A záznamy (`185.184.254.10`, `185.184.254.11`) a pridať jeden nový A záznam (bez návestia) s hodnotou `185.59.208.190`.
2. Zmazať `www` CNAME (`www.myshoptet.com.`) a pridať nový A záznam `www` s hodnotou `185.59.208.190`.

Po zmene DNS treba v Shoptet administrácii (Nastavenia → Prepojenie → Presun na doménu) potvrdiť/aktualizovať kontrolu DNS a počkať na vystavenie SSL certifikátu pre `premiumstore.sk` aj `www.premiumstore.sk` (propagácia do ~1h, TTL 3 600). Zvyšok checklistu pre deň D (presmerovania, Heureka feed URL, Search Console...) je v `reports/navod-migracia-na-shoptet.md`.

---

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

**Stav (2026-08-09): zistené, že aj `img0`–`img3.atoselektro.cz` je pre Shoptet blokovaný.** Shoptet import log ukázal `Status code '403'` aj `Host connection timeout` opakovane aj na nových CDN URL — teda nie je zablokovaný konkrétny endpoint (`img.asp`), ale **Shoptetova odchádzajúca IP adresa má blokovaný/rate-limitovaný celý `atoselektro.cz`** (potvrdené aj nepriamo: na starej platforme SHOPTEC ten istý ATOS feed funguje bez problémov — teda problém je špecificky na strane Shoptetovej IP, nie u ATOS-u všeobecne).

### Riešenie: Cloudflare Worker ako caching proxy (`cloudflare-worker/`)

Namiesto priameho sťahovania z `atoselektro.cz` bude Shoptet sťahovať obrázky z vlastnej domény (Cloudflare Worker), ktorá funguje ako medzičlánok — stiahne obrázok z ATOS-u (z Cloudflare edge IP, nie z blokovanej Shoptetovej) a servíruje ho ďalej s 30-dňovou cache. Kód: `cloudflare-worker/worker.js`, nasadzuje sa automaticky cez `.github/workflows/deploy-atos-image-proxy.yml` pri každej zmene v `cloudflare-worker/`.

**Stav (2026-08-09): Worker nasadený, funkčný a otestovaný naostro v Shoptete.** Beží na `https://atos-image-proxy.dt7vy7byn2.workers.dev`. GitHub Secrets (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `ATOS_IMAGE_PROXY_BASE`) sú doplnené a overené — `.github/workflows/deploy-atos-image-proxy.yml` nasadzuje Worker automaticky pri zmene kódu, `atos-sync.yml` automaticky generuje obrázkové URL cez proxy pri každom nočnom behu.

## Solight — obrázky cez rovnaký princíp (Cloudflare Worker)

Podobný problém ako pri ATOS-e, iná príčina: keď sa celý Solight katalóg vytvorí odznova naraz (napr. po zmazaní všetkých produktov), Shoptet musí stiahnuť veľa obrázkov v krátkom čase a `solight.sk` odpovie `Status code '429'` (rate limit), potvrdené priamo v Shoptet import logu. Riešenie je rovnaký princíp ako pri ATOS-e — Cloudflare Worker ako caching proxy (`cloudflare-worker-solight/`), ktorý žiada obrázky z Cloudflare siete namiesto Shoptetovej jedinej IP a cachuje ich na 30 dní (opakované importy sa už vôbec nepýtajú `solight.sk`).

**Stav (2026-08-09): Worker nasadený a funkčný**, beží na `https://solight-image-proxy.dt7vy7byn2.workers.dev` (rovnaký Cloudflare účet ako ATOS, netreba nič nové zakladať). Doplň ešte jeden GitHub Secret:

| Secret | Hodnota |
|---|---|
| `SOLIGHT_IMAGE_PROXY_BASE` | `https://solight-image-proxy.dt7vy7byn2.workers.dev` |

Bez tohto secretu `transform-solight.js` funguje ako doteraz (priame URL zo `solight.sk`) — nič sa nepokazí, kým ho nepridáš.

Kým `ATOS_IMAGE_PROXY_BASE` nie je nastavený, `fetch-atos-images.js` sa správa presne ako doteraz (priame CDN URL) — nič sa nepokazí, kým sa to nedokončí.

## ATOS — filter podľa kompatibilného modelu (diaľkové ovládače)

ATOS píše zoznam kompatibilných zariadení (TV, DVB-T/satelitné prijímače, Blu-ray prehrávače) len ako text v popise produktu ("Ovladač je kompatibilní s těmito modely televizorů: MODEL1, MODEL2, ..."), nie ako skutočný parameter feedu. `scripts/extract-compatible-models.js` tieto zoznamy z popisu vyparsuje a `transform-atos.js` ich pridá ako **`<INFORMATION_PARAMETERS>`** — Shoptetom natívne podporovaný element pre viachodnotový parameter (jeden `<NAME>` + viac `<VALUE>` v jednom bloku, presne na tento účel, potvrdené priamo v oficiálnej RELAX NG schéme `products-supplier-v10.rng` aj testom cez `xmllint`). Vznikne napr. parameter **"Kompatibilný model TV"** s hodnotou pre každý model (LT24VH42, LT24VH52, ...). Rovnako aj pre prijímače (DVB-T, DVB-T2, satelitné) a Blu-ray prehrávače.

**Aby sa to prejavilo ako filter v kategórii "Diaľkové ovládače" (ako na `/televizne-ovladace/`), treba v Shoptet administrácii:**
1. **Nastavenia → Produkty → Parametrické filtre** — nájdi parameter **"Kompatibilný model TV"** (vznikne automaticky po prvom importe s touto zmenou)
2. Vytvor z neho filter (vyber parameter v roletovom menu)
3. Priraď ho ku kategórii (kategóriám) s diaľkovými ovládačmi — ak má kategória podkategórie (napr. podľa značky), zaškrtni aj tie, kde má byť filter viditeľný

Momentálne pokrýva **254 produktov / 1136 unikátnych TV modelov** (plus prijímače/Blu-ray). Pri satelitných prijímačoch je občas v zdrojovom texte značka uvedená len raz pred viacerými číslami modelov oddelenými čiarkou (napr. "AB Cryptobox 600, 650, 652 HD") — rozdelí sa to na 3 samostatné hodnoty, z ktorých druhá a tretia stratia predponu značky. Pri TV zozname (hlavný prípad) sa tento problém nevyskytuje — každý kód je samostatný a jednoznačný.

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

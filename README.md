# ATOS → Shoptet automatický import

Odporúčam pridať toto do **toho istého repozitára**, čo už máš pre InnPro (`import_innpro`) — ušetríš si opakovanie nastavenia GitHub Pages. Package.json závislosti (`sax`, `fast-xml-parser`) sú rovnaké, netreba nič duplicitne inštalovať.

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

- `ATOS_URL` = `https://shop.atoselektro.cz/i6ws/Default.asmx/GetResult?resultType=StoItemShoptet`
- `ATOS_USERNAME` = `nexymne64`
- `ATOS_PASSWORD` = `wn0296`

(Over si názvy **znak po znaku** — presne toto nám minule spôsobilo problém pri InnPro.)

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

Na tvoju žiadosť som ponechal **pôvodné, nespracované obrázkové adresy** priamo z ATOS feedu (`img.asp?attid=...`), **nie** tú upravenú `img3.atoselektro.cz` variantu, čo sme skúšali predtým. Uvidíme, či cez tento spôsob automatizácie (iný spôsob sťahovania než Shoptetov vlastný import) budú fungovať spoľahlivejšie. Ak nie, viem to kedykoľvek prepnúť späť — daj vedieť, ako to dopadlo po prvom reálnom nočnom behu.

## Čo sa importuje

Rovnaká logika ako v prehliadačovom nástroji:
- Ceny prepočítané z CZK na EUR podľa aktuálneho kurzu (ECB, cez frankfurter.app), + prirážka (15 %, dá sa zmeniť v `env:` sekcii workflow súboru) + DPH (23 %, slovenská sadzba)
- Nákupná cena označená príznakom "bez DPH" (`PURCHASE_PRICE_INCL_VAT=0`)
- Kategórie podľa schváleného mapovania (`scripts/atos-mapping.json`) — Druhy-stromu, so zaradením do všetkých nadradených úrovní
- Skutočné príznaky Akcia/Novinka/Tip priamo z feedu
- Recyklačný poplatok (kde je vo feede uvedený)
- Alternatívne produkty

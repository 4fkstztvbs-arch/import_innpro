# InnPro → Shoptet automatický import

Tento repozitár raz denne automaticky:
1. stiahne `full.xml` a `light.xml` z InnPro,
2. spojí ich presne rovnakou logikou ako nástroj v prehliadači (skutočná cena+sklad z light.xml, kde je dostupná; DPH sa pripočíta na nákupnú cenu + prirážku; kategórie sa zaradia podľa schváleného mapovania),
3. výsledok uloží do `output/innpro.xml` v tomto repozitári,
4. tento súbor je vďaka GitHub Pages dostupný na stálej URL adrese, ktorú zadáš do Shoptet automatického importu.

## Nastavenie (urob raz)

### 1. Vytvor nový repozitár na GitHube
- Choď na github.com → **New repository**
- Nastav ho ako **Private** (obsahuje odkaz na tvoj obchod, aj keď nie priamo tokeny)
- Nahraj doň všetok obsah tohto priečinka (cez "Upload files" v prehliadači, alebo `git push`, ak poznáš git)

### 2. Pridaj tajné prístupové URL adresy (Secrets)
Choď do repozitára → **Settings → Secrets and variables → Actions → New repository secret**

Pridaj dva secrets:
- Názov: `INNPRO_FULL_URL` — hodnota: tvoja URL adresa pre full.xml
- Názov: `INNPRO_LIGHT_URL` — hodnota: tvoja URL adresa pre light.xml

(Takto sa tvoj token nikdy neobjaví priamo v kóde repozitára — je to bezpečné aj keby bol repozitár omylom verejný.)

### 3. Zapni GitHub Pages
- **Settings → Pages**
- Source: **Deploy from a branch**
- Branch: **main**, priečinok: **/ (root)**
- Ulož

Po chvíli sa ti zobrazí adresa typu `https://tvoje-meno.github.io/nazov-repozitara/`

### 4. Over funkčnosť
- Choď do záložky **Actions** hore v repozitári
- Klikni na "InnPro sync" → **Run workflow** (spustí sa ručne, nemusíš čakať na plánovaný čas)
- Počkaj cca 1-3 minúty, kým dobehne (zelená fajočka = úspech)
- Skontroluj, že sa v repozitári objavil/aktualizoval súbor `output/innpro.xml`

### 5. Nastav v Shoptete automatický import
- Produkty → Automatické importy → Pridať
- URL adresa: `https://tvoje-meno.github.io/nazov-repozitara/output/innpro.xml`
- Formát: XML

## Ako často to beží

Automaticky **raz denne o 3:00 UTC** (cca 4-5 ráno na Slovensku, podľa letného/zimného času) — teda po tom, čo sa u InnPro o polnoci obnoví `full.xml`, a ešte v rámci okna, kedy Shoptet robí svoj "úplný import" (00:00–07:00).

Ak chceš iný čas, uprav riadok `cron:` v súbore `.github/workflows/innpro-sync.yml` (formát je "minúta hodina * * *", čas je vždy v UTC).

Kedykoľvek to vieš spustiť aj ručne cez záložku Actions → Run workflow, netreba čakať na plánovaný čas.

## Zmena nastavení (prirážka, min. cena...)

V súbore `.github/workflows/innpro-sync.yml` v sekcii `env:` vieš zmeniť:
- `INNPRO_MARKUP` — prirážka v % (teraz 15)

Ak by si chcel doplniť aj `INNPRO_MIN_COST` alebo `INNPRO_MAX_IMAGES`, pridaj ich tam rovnakým spôsobom.

## Zmena mapovania kategórií

Súbor `scripts/innpro-mapping.json` obsahuje presne to isté mapovanie, čo sme spolu schválili. Ak by si chcel niečo zmeniť, uprav priamo tento súbor (rovnaký formát ako pri exporte/importe nastavení v prehliadačovom nástroji).

# Záloha pred nasadením nového stromu kategórií

Stav **pred** prepnutím, vytvorený 13. 9. 2026 večer z vetvy `main`, commit **aec5f117bc4fce22c987d992bdd2c7fbb09ff28d**.

Sú tu presné kópie živých súborov, ktoré prepnutie prepisuje. Slúžia na to, aby sa dal
stav vrátiť aj bez hrabania sa v histórii gitu.

## Čo je zálohované

| Súbor | Načo je |
|---|---|
| `scripts/*-mapping.json` (7 dodávateľov) | pravidlá priraďovania kategórií — prepisuje ich krok 4 |
| `scripts/heureka-mapping.json` | Heureka kategórie — prepisuje ich krok 4 |
| `scripts/heureka-hidden-categories.json` | vylúčenie z Heureka CPC — prepisuje ho krok 4 |
| `scripts/heureka-category.js` | logika vylúčenia (prešla z koreňov na cesty) |
| `scripts/add-category-links.js` | prelinkovanie na kategóriu v popise produktu |
| `scripts/fix-ignored-categories.js` | zoznam zahadzovaných kategórií |
| `data/known-categories.json` | brána proti vzniku kategórií mimo stromu |
| `data/category-urls.json` | adresy kategórií pre prelinkovanie |

Zálohované **nie sú** `output/*.xml` — tie sa pri každom behu generujú nanovo z feedov
dodávateľov, takže ich netreba vracať; stačí vrátiť pravidlá a spustiť sync.

## Ako sa vrátiť späť

**Celý repozitár do stavu pred nasadením** (najrýchlejšie, vráti aj workflowy a skripty):

```bash
git checkout main
git revert --no-commit <SHA merge commitu>..HEAD && git commit -m "Navrat pred novy strom"
git push origin main
```

**Alebo len konkrétny súbor:**

```bash
git checkout aec5f117bc4fce22c987d992bdd2c7fbb09ff28d -- scripts/atos-mapping.json
```

**Alebo z tejto zálohy:**

```bash
cp backup/pred-novym-stromom-2026-09-13/scripts/atos-mapping.json scripts/
```

## V Shoptete

Git vráti len generovanie feedov. V samotnom Shoptete treba zvlášť:

1. **Kategórie** — nový strom zmazať a starý obnoviť z exportu
   `data/shoptet-categories-2026-09-12.csv` (stav pred zásahom).
2. **Presmerovania** — 2368 riadkov z Marketing → Základné SEO → Presmerovanie adries.
3. **Výrobcovia** — popisy prepísané importom; pôvodné sú v
   `/tmp/.../manufacturers-live.csv`, prípadne znova stiahnuť export spred zmeny.

Produktov sa návrat netýka — ich adresy, názvy ani ceny sa nemenili.

# Postup nasadenia nového stromu kategórií (noc nedeľa → pondelok)

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
| `scripts/heureka-mapping.json` | `scripts/heureka-mapping.new.json` |
| `scripts/heureka-hidden-categories.json` | `scripts/heureka-hidden-categories.new.json` |
| `data/known-categories.json` | `data/known-categories-new-2026-09-12.json` |

Každý `categoryRenamesByPath`/`categoryOverridesByCode` záznam bol prepísaný zo starej cesty na
zodpovedajúcu cestu v novom 227-kategóriovom strome (metodika a nálezy nižšie). `categoryExclusionsByPath`
a `excludedManufacturers` sú nedotknuté (netýkajú sa nášho stromu, sú to surové kategórie/značky
priamo z feedu dodávateľa).

## 1. Import nového stromu kategórií do Shoptetu
Import `data/kategorie-import-2026-09-12.csv` (Nastavenia → Import a export dát → Kategórie).

## 2. Import presmerovaní
Import `reports/redirect-map-kategorie-shoptet-import.csv` (Marketing → Základné SEO →
Presmerovanie adries URL) — **pred zmazaním starého stromu**, nech Shoptet nezačne 404-kovať.

## 3. Zmazanie starého stromu kategórií
Až teraz, keď staré URL už majú funkčné presmerovanie na nové.

## 4. Aktivovať pripravené súbory (jediný krok, ktorý mení `scripts/*-mapping.json` a `data/known-categories.json`)
Spustiť v koreňovom adresári repozitára (premenuje 8 súborov naraz):

```bash
mv scripts/atos-mapping.new.json scripts/atos-mapping.json
mv scripts/kb-mapping.new.json scripts/kb-mapping.json
mv scripts/innpro-mapping.new.json scripts/innpro-mapping.json
mv scripts/solight-mapping.new.json scripts/solight-mapping.json
mv scripts/penta-mapping.new.json scripts/penta-mapping.json
mv scripts/heureka-mapping.new.json scripts/heureka-mapping.json
mv scripts/heureka-hidden-categories.new.json scripts/heureka-hidden-categories.json
mv data/known-categories-new-2026-09-12.json data/known-categories.json
git add -A && git commit -m "Aktivacia mapovania na novy strom kategorii"
```

**Dôležité poradie:** tento krok musí prebehnúť **po** kroku 1 (kategórie už reálne existujú
v Shoptete) a **pred prvým nočným behom** ktoréhokoľvek `*-sync.yml` po prepnutí — inak sa
produkty zaradia podľa nových ciest do kategórií, ktoré ešte neexistujú (alebo naopak podľa
starých ciest do už zmazaných). V praxi: urobiť krok 4 hneď po kroku 1-3 v tú istú noc.

## 5. Overenie po prvom behu
Po prvom nočnom syncu (ATOS 22:30 UTC a ďalšie) skontrolovať `reports/nezaradene-kategorie-*.md`
pre každého dodávateľa — mal by byť prázdny alebo len s pár okrajovými položkami. Ak sa tam
objaví veľa kategórií, `data/known-categories.json` alebo niektorý mapping pravdepodobne
nesedí s tým, čo Shoptet reálne vytvoril pri importe.

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
- **5 dodávateľských mapping súborov**: 0 nenapárovaných hodnôt zo 446 celkovo (100 %).
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

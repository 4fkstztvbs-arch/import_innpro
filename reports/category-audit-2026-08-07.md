# Audit kategórií e-shopu naprieč dodávateľmi (2026-08-07)

Analýza porovnáva výstupné feedy v `output/*.xml` (INNpro, ATOS, K+B, Solight, MONACOR) generované skriptami v `scripts/` podľa mapovacích súborov `scripts/*-mapping.json`. Cieľom bolo nájsť duplicitné/takmer duplicitné vetvy kategórií a produkty, ktoré kvôli chýbajúcim pravidlám v mapovaní neskončili v správnej (kanonickej) kategórii.

## 1. Požadovaný prípad: Kávovary / Kávovary a espressá

K+B (`scripts/kb-mapping.json`) má jedinú rozvinutú a správne pomenovanú vetvu, ktorú považujem za **kanonickú**:

```
Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá
  ├─ Automatická espressá
  ├─ Pákové kávovary
  ├─ Kávovary na kapsle
  ├─ Prekvapkávače
  ├─ Moka kanvice a frenchpressy
  ├─ Mlynčeky na kávu
  ├─ Napěňovače mlieka   (preklep zachovaný vo feede – "Napeňovače" by bolo bez "ě")
  ├─ Kávové kapsle
  └─ Káva
```

INNpro a ATOS majú pre ten istý sortiment samostatné, nekonzistentné vetvy:

| Dodávateľ | Nájdená cesta (aktuálny stav) | Počet produktov | Má podkategórie? |
|---|---|---:|---|
| K+B (kanonický) | `Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá` (+ 8 podkategórií) | 198 | Áno |
| INNpro | `Domáce spotrebiče > Malé spotrebiče > Kávovary` | 24 | Nie |
| ATOS | `Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Kávovary` | 6 | Nie |

**Príčina:** `scripts/innpro-mapping.json` a `scripts/atos-mapping.json` nemajú žiadne pravidlo `categoryRenamesByPath`, ktoré by ich zdrojovú kategóriu "Kávovary" premapovalo na `Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá`. Zdrojový názov sa preto len preloží slovo za slovom a zaradí sa doslovne, čím vznikne paralelná vetva.

**Migrácia (30 produktov):**
- Pridať do `scripts/innpro-mapping.json` (`categoryRenamesByPath`): `"Malé domáce spotrebiče > Kávovary": "Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá"` (over presný zdrojový reťazec pred nasadením — mapovanie je citlivé na presné znenie).
- Pridať do `scripts/atos-mapping.json`: `"Druhy > ELEKTRO > DOMÁCÍ SPOTŘEBIČE > Kávovary" → "Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá"` (aktuálne je namapované len `... DOMÁCÍ SPOTŘEBIČE` → `Ostatné spotrebiče`, podkategória "Kávovary" sa dedí bez zásahu).
- Bez konkrétneho typu kávovaru (espresso/pákový/kapsulový) na strane INNpro/ATOS odporúčam zaradiť produkty priamo pod `Kávovary a espressá` (bez podkategórie), rovnako ako to robí K+B pre nezaradené položky.

## 2. Oveľa väčší problém: ATOS – "tieňový" strom `Druhy > …`

Pri kontrole `output/atos.xml` (12 239 produktov) sa ukázalo, že **7 077 produktov (58 %)** má ako primárnu kategóriu reťazec začínajúci `Druhy > …` namiesto kanonickej kategórie (napr. `Druhy > Elektroinštalačný materiál` namiesto `Elektroinštalačný materiál`). Toto je závažnejšie než duplicita kávovarov – prakticky celé odvetvia ATOS sortimentu chýbajú v hlavnom strome kategórií.

Najväčšie postihnuté vetvy:

| Neštandardná cesta (ATOS) | Počet produktov |
|---|---:|
| `Druhy > Elektroinštalačný materiál` (+ podkategórie) | 3 078 (top-level) |
| `Druhy > Auto-moto` (+ podkategórie) | 2 063 |
| `Druhy > Náradie a dielňa` (+ podkategórie) | 1 580 |
| `Druhy > Šport, hračky a voľný čas` (+ podkategórie) | 992 |

**Príčina:** `scripts/atos-mapping.json` definuje kľúče v `categoryRenamesByPath` vo VEĽKÝCH PÍSMENÁCH a v českom znení (napr. `"Druhy > ELEKTROINSTALAČNÍ MATERIÁL"`), zatiaľ čo `transform-atos.js` (`atosDisplayPath`) hľadá presnú zhodu (case-sensitive, diakritika vrátane) so **surovým** textom kategórie z feedu ešte pred prekladom. Keď sa reťazec z feedu nezhoduje presne (iné veľké/malé písmená, iná diakritika), premenovanie sa nespustí, `translateCategoryName` preloží iba jednotlivé slová a predpona `Druhy` zostane. Vznikne tak paralelný, nesprávne umiestnený strom kategórií popri správne namapovaných produktoch.

**Migrácia:**
1. Zistiť skutočné (case-sensitive) znenie `CategoryText` v živom ATOS feede pre postihnuté vetvy (napr. `Elektroinštalačný materiál`, `Auto-moto`, `Náradie a dielňa`, `Šport, hračky a voľný čas`) a opraviť kľúče v `scripts/atos-mapping.json` tak, aby presne zodpovedali zdroju.
2. Zvážiť úpravu `atosDisplayPath`/`atosAncestorPaths` v `scripts/transform-atos.js` na case-insensitive / diakritiku tolerujúce porovnanie, aby podobné nezhody v budúcnosti nevznikali ticho.
3. Po oprave znovu spustiť ATOS sync a overiť, že top-level `Druhy` už nefiguruje v `output/atos.xml`.

## 3. INNpro – nepreložené poľské podkategórie duplikujúce slovenské

`scripts/translate-cz-sk.js` prekladá iba česko-slovenský slovník (`cz-sk-dict.json`); zdroj INNpro je ale poľský (`b2b.innpro.pl`), takže časť kategórií, ktoré nie sú pokryté pravidlami v `innpro-mapping.json`, ostáva v pôvodnom poľskom znení a vytvára duplicitnú vetvu popri už existujúcej slovenskej:

| Slovenská (existujúca) vetva | ks | Nepreložená poľská duplicita | ks |
|---|---:|---|---:|
| `Zdravie a starostlivosť > Chovateľské potreby > Fontány` | 26 | `… > Chovateľské potreby > Fontanny > Poidła` | 6 |
| `Zdravie a starostlivosť > Chovateľské potreby > Dávkovače krmiva` | 54 | `… > Chovateľské potreby > Dozowniki karmy` | 4 |
| `TV, audio a video > Foto a optika > Selfie tyče` (+ podkat.) | 162 | `… > Foto a optika > Wysięgniki > Selfie Stiki > Statywy …` | 41 |
| — (chýba slovenský ekvivalent) | – | `Domáce spotrebiče > Malé spotrebiče > AGD małe` | 11 |
| — (chýba slovenský ekvivalent) | – | `Zdravie a starostlivosť > Starostlivosť o pleť > Pozostałe / Masażery / Szczoteczki do czyszczenia twarzy / Peelingi kawitacyjne` | 14 |

**Migrácia:** doplniť chýbajúce poľsko-slovenské preklady/renames priamo v `innpro-mapping.json` (`categoryRenamesByPath`) alebo rozšíriť prekladový slovník o poľské výrazy, a zlúčiť produkty (spolu ~76 ks) do existujúcich slovenských vetiev.

## 4. MONACOR – správne oddelený, žiadny zásah netreba

MONACOR má jediný, izolovaný koreň `Profesionálna audio technika > …` (4 209 produktov), ktorý sa nikde neprelína so spoločným stromom ostatných dodávateľov. To zodpovedá požiadavke, aby MONACOR zostal oddelene – **žiadna zmena nie je potrebná.**

## Súhrn

| Zistenie | Postihnuté položky | Závažnosť |
|---|---:|---|
| Kávovary vs. Kávovary a espressá (INNpro + ATOS) | 30 | Stredná (presne podľa zadania auditu) |
| ATOS "Druhy > …" tieňový strom (chybné case-sensitive mapovanie) | 7 077 (58 % ATOS katalógu) | **Vysoká — najväčší nález** |
| INNpro nepreložené poľské podkategórie | ~76 | Nízka–stredná |
| MONACOR `Profesionálna audio technika` | 4 209 (bez zásahu) | OK, len na vedomie |

Report vygenerovaný automaticky skenom `output/*.xml` a `scripts/*-mapping.json` v tomto repozitári (žiadne zmeny kódu neboli v tomto behu aplikované).

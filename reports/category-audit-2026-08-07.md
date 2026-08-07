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

**Stav: IMPLEMENTOVANÉ.** Do `scripts/innpro-mapping.json` a `scripts/atos-mapping.json` pribudli presné `categoryRenamesByPath` pravidlá:
- `"Malé domáce spotrebiče > Kávovary" → "Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá"` (INNpro)
- `"Druhy > ELEKTRO > DOMÁCÍ SPOTŘEBIČE > Kávovary" → "Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá"` (ATOS)

Bez konkrétneho typu kávovaru (espresso/pákový/kapsulový) sú produkty zaradené priamo pod `Kávovary a espressá` (bez podkategórie), rovnako ako to robí K+B pre nezaradené položky. Overené lokálnou simuláciou `resolveCategory`/`resolveAtosCategories` logiky (pozri commit) — reálne prejaví sa až po ďalšom behu InnPro/ATOS syncu.

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

**Stav: IMPLEMENTOVANÉ (kódová oprava).** `scripts/transform-atos.js` teraz porovnáva `categoryRenamesByPath`/`categoryExclusionsByPath` s reťazcom z feedu cez `normalizeKey()` (NFD dekompozícia + odstránenie diakritiky + lowercase + zjednotenie medzier), takže existujúce pravidlá v `atos-mapping.json` (napr. `"Druhy > ELEKTROINSTALAČNÍ MATERIÁL"`) sa napoja aj na feed, ktorý má iné veľké/malé písmená alebo diakritiku, bez potreby prepisovať samotné kľúče. Overené lokálnou simuláciou na reťazcoch presne v tvare, aký sa objavil v `output/atos.xml` (`Druhy > Elektroinstalační materiál`, `Druhy > Auto Moto` a pod.) — po oprave sa správne vyriešia na `Elektroinštalačný materiál`, `Auto-moto` atď.

Keďže táto session nemá prístup k `ATOS_URL`/credentials (sú len ako GitHub Secret vo workflow), finálne číslo (koľko z pôvodných 7 077 produktov opustí `Druhy` vetvu) sa potvrdí až pri najbližšom behu `atos-sync.yml`. Ak by sa aj po oprave niektoré vetvy nezhodovali (napr. úplne iné slovo, nie len iná diakritika/veľkosť písmen), treba doplniť/opraviť konkrétny kľúč v `atos-mapping.json` podľa toho, čo v `output/atos.xml` zostane pod `Druhy`.

## 3. INNpro – nepreložené poľské podkategórie duplikujúce slovenské

`scripts/translate-cz-sk.js` prekladá iba česko-slovenský slovník (`cz-sk-dict.json`); zdroj INNpro je ale poľský (`b2b.innpro.pl`), takže časť kategórií, ktoré nie sú pokryté pravidlami v `innpro-mapping.json`, ostáva v pôvodnom poľskom znení a vytvára duplicitnú vetvu popri už existujúcej slovenskej. Na priamy pokyn (poľské kategórie, ktoré nevieme spoľahlivo preložiť na existujúcu kategóriu, odstrániť z importu a produkty preradiť do nadradenej kategórie) sme nálezy rozdelili na dve skupiny:

**Stav: IMPLEMENTOVANÉ.** Do `scripts/innpro-mapping.json` pribudlo 9 nových `categoryRenamesByPath` pravidiel:

**A) Preložené a zlúčené do existujúcej slovenskej vetvy** (vieme spoľahlivo, o čo ide, a existuje jasný cieľ):

| Poľská duplicita (pôvodne) | ks | Zlúčené do |
|---|---:|---|
| `… > Chovateľské potreby > Fontanny > Poidła` | 6 | `Zdravie a starostlivosť > Chovateľské potreby > Fontány > napájačky` |
| `… > Chovateľské potreby > Dozowniki karmy > Miski` | 4 | `Zdravie a starostlivosť > Chovateľské potreby > Dávkovače krmiva > misky` |
| `… > Chovateľské potreby > Inteligentne kuwety` | 4 | `Zdravie a starostlivosť > Chovateľské potreby > Inteligentné toalety pre zvieratá` |
| `… > Foto a optika > Wysięgniki > Selfie Stiki > Statywy > Mocowania > Wysięgniki i uchwyty selfie` | 25 | `… > Foto a optika > Selfie tyče > statívy > držiaky > Selfie tyče a držiaky` |
| `… > Mocowania > Szelki, mocowania i uchwyty` | 15 | `… > držiaky > Postroje, upevňovacie prvky a držiaky` |
| `… > Mocowania > Adaptery i przejściówki` | 1 | `… > držiaky > Adaptéry` |
| `… > Starostlivosť o pleť > Masażery` | 3 | `Zdravie a starostlivosť > Prístroje na tvár > Masážne prístroje` |
| `… > Starostlivosť o pleť > Peelingi kawitacyjne` | 2 | `Zdravie a starostlivosť > Prístroje na tvár > Kavitačné peelingy` |

**B) Bez spoľahlivého ekvivalentu → kategória odstránená z importu, produkt zostáva v nadradenej kategórii** (podľa zadania — nie vylúčenie produktu, len zrušenie neprekladateľnej podkategórie):

| Poľská podkategória (odstránená) | ks | Produkt teraz v |
|---|---:|---|
| `Domáce spotrebiče > Malé spotrebiče > AGD małe` | 11 | `Domáce spotrebiče > Malé spotrebiče` |
| `… > Starostlivosť o pleť > Pozostałe` | 8 | `Zdravie a starostlivosť > Starostlivosť o pleť` |
| `… > Starostlivosť o pleť > Szczoteczki do czyszczenia twarzy` | 2 | `Zdravie a starostlivosť > Starostlivosť o pleť` |

Spolu 81 produktov (60 preložených + zlúčených, 21 presunutých do nadradenej kategórie). Dôležité: použili sme `categoryRenamesByPath` (nie `categoryExclusionsByPath`) — vylúčenie (`categoryExclusionsByPath`) by produkt z importu úplne vyradilo, čo nebolo cieľom; rename na nadradenú cestu produkt ponechá v katalógu, len bez vlastnej (neprekladateľnej) podkategórie.

## 4. MONACOR – správne oddelený, žiadny zásah netreba

MONACOR má jediný, izolovaný koreň `Profesionálna audio technika > …` (4 209 produktov), ktorý sa nikde neprelína so spoločným stromom ostatných dodávateľov. To zodpovedá požiadavke, aby MONACOR zostal oddelene – **žiadna zmena nie je potrebná.**

## Súhrn

| Zistenie | Postihnuté položky | Závažnosť | Stav |
|---|---:|---|---|
| Kávovary vs. Kávovary a espressá (INNpro + ATOS) | 30 | Stredná (presne podľa zadania auditu) | Implementované |
| ATOS "Druhy > …" tieňový strom (chybné case-sensitive mapovanie) | 7 077 (58 % ATOS katalógu) | **Vysoká — najväčší nález** | Implementované (kód), číslo sa potvrdí pri ďalšom syncu |
| INNpro preložené poľské duplicity | 60 | Nízka–stredná | Implementované |
| INNpro neprekladateľné poľské podkategórie → presun do nadradenej | 21 | Nízka | Implementované |
| MONACOR `Profesionálna audio technika` | 4 209 (bez zásahu) | OK, len na vedomie | Bez zmeny (správne) |

## Poznámka k overeniu

Zmeny sú overené lokálnou simuláciou rozhodovacej logiky (`resolveCategory` pre INNpro, `resolveAtosCategories`/`normalizeKey` pre ATOS) nad reálnymi reťazcami z `output/*.xml`, vrátane `node --check` na oboch upravených skriptoch. Táto session však nemá k dispozícii `ATOS_URL`/`INNPRO_FULL_URL` a ďalšie credentials (sú len ako GitHub Secrets vo workflowoch), takže **end-to-end regenerácia `output/atos.xml` a `output/innpro.xml` prebehne až pri najbližšom automatickom behu** `atos-sync.yml` / `innpro-sync.yml`. Odporúčam po najbližšom syncu skontrolovať, že v `output/atos.xml` už nefiguruje top-level `Druhy` a že `output/innpro.xml`/`output/atos.xml` majú kategóriu `Kávovary a espressá` zlúčenú s K+B.

Report pôvodne vygenerovaný automaticky skenom `output/*.xml` a `scripts/*-mapping.json`; táto verzia dopĺňa realizovanú migráciu.

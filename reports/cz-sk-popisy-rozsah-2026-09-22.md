# Preklad popisov CZ→SK — zmapovanie skutočného rozsahu (2026-09-22)

Účel: pred akoukoľvek implementáciou zmapovať, koľko produktov/dodávateľov a akého objemu
textu sa problém "popisy sú po česky" skutočne týka, a overiť predpoklady zo zadania oproti
stavu repozitára. Toto je analytický report (AUTO, bez zápisu do produkčných dát) — žiadny
`output/*.xml` ani transformačný skript sa v rámci tejto úlohy nemenil.

## 0. Korekcia vstupných predpokladov

Zadanie odkazovalo na konkrétne súbory a mechanizmus, ktoré v repozitári **neexistujú**:

- `agent/change-ledger/2026-09-22-atos-tv-quick-facts.md` — neexistuje (nikdy nebol
  commitnutý, `git log --all` naň nemá žiadny záznam). `agent/change-ledger/` obsahuje len
  `README.md`.
- `reports/google-merchant-tv-popisy-2026-09-22.md` — neexistuje, rovnako bez záznamu v histórii.
- `scripts/lib/atos-tv-quick-facts.js` — neexistuje.

Skutočnosť je iná, než zadanie predpokladalo:

1. **Pre televízory v ATOS feede neexistuje žiadna slovenská "quick facts" veta**
   (uhlopriečka/farba/pripojenie). ATOS popisy prechádzajú do výstupu prakticky nezmenené
   (`transform-atos.js` volá na `p.description` len opravu URL obrázkov, žiadny preklad textu).
2. Jediná existujúca **cielená slovenská úprava v ATOS feede sa týka DIAĽKOVÝCH OVLÁDAČOV**
   (kategória "Diaľkové ovládače", značka ALIEN, ~850 produktov), nie televízorov:
   `scripts/lib/atos-remote-control-description.js` + `scripts/lib/translate-remote-control-names.js`.
   Ide o skutočný, vetový preklad (nie len krátku vetu) opakujúcej sa českej šablóny do
   slovenčiny, s tromi vecnými úpravami (zmazanie vety o doprogramovaní za 50 Kč, skrátenie
   reklamy na batérie, zmazanie generického bloku na konci). Funguje spoľahlivo, ale je to
   riešenie šité na mieru jednej uzavretej, opakujúcej sa šablóne — negeneralizuje sa na voľný
   marketingový text.
3. Systém, ktorý zadanie zrejme malo na mysli ("TV quick facts"), **existuje, ale je pre K+B,
   nie ATOS**: `scripts/lib/kb-description-enrichment.js` (2495 riadkov). Obsahuje `TV_TECH_FACTS`
   (fakty o technológii displeja podľa značky/radu, napr. Samsung Neo QLED/OLED/Frame, TCL
   QD-Mini LED) a `PRODUCT_FACTS` (fakty ku konkrétnym kódom produktov, napr. konkrétne
   slúchadlá). Nie je to preklad existujúceho textu — je to **pôvodný slovenský text písaný
   na mieru** (zdroj: oficiálne stránky výrobcu, vlastnými slovami), ktorý sa vkladá len keď je
   pôvodný K+B popis "chudobný" (`isPoorDescription`: žiadne HTML a < 900 znakov) a len v
   koreňových kategóriách `TV, audio a video` a `Domáce spotrebiče` (`shouldEnrich`).

Toto rozlíšenie je dôležité pre rozhodovanie: neexistuje žiadny hotový, čo i len malý,
funkčný "preklad marketingového textu" mechanizmus, na ktorom by sa dalo priamo stavať.
Existujú dva odlišné, úzko účelové mechanizmy (šablónový preklad ALIEN ovládačov; pôvodná
tvorba SK textu pre K+B TV/spotrebiče) — oba sú užitočné ako precedens pre štýl a rizikovú
toleranciu tímu, ale ani jeden sa nedá mechanicky rozšíriť na "preložiť zvyšok popisu".

## 1. Skutočný stav podľa dodávateľa (namerané na `output/*.xml`, beh 2026-09-22)

Metodika: z cachovaného aktuálneho výstupu každého dodávateľa (`output/<dodavatel>.xml`,
posledný beh nočného syncu) som extrahoval `<DESCRIPTION>`, odstránil HTML a klasifikoval
jazyk pomocou ortografického rozlišovača: **ř/ě existujú len v češtine** (nie sú v slovenskej
abecede), **ľ/ĺ/ŕ/ä/ô existujú len v slovenčine** (nie sú v českej abecede). Pri texte dĺžky
odsekov je to takmer spoľahlivý signál — pri krátkych textoch (pod ~150 znakov) môže byť aj
korektná slovenčina bez týchto znakov ("neither"), preto sú čísla nižšie doplnené o ručnú
kontrolu vzoriek.

| Dodávateľ | Produktov | Má popis | Čisto CZ | CZ+SK zmiešané* | Čisto SK | Bez signálu | Priem. dĺžka | Medián | Max |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| **ATOS** | 11 725 | 11 723 | 9 789 (83 %) | 605 (5 %) | 757 (6 %) | 572 (5 %) | 1 991 | 1 219 | 20 172 |
| **K+B** | 5 012 | 4 999 | 2 520 (50 %) | 700 (14 %) | 576 (12 %) | 1 203 (24 %) | 327 | 318 | 3 237 |
| InnPro | 5 567 | 5 567 | 7 (0,1 %) | 60 (1 %) | 4 882 (88 %) | 618 (11 %) | 2 743 | 2 520 | — |
| BaSys | 938 | 938 | 45 (5 %) | 4 (0,4 %) | 455 (49 %) | 434 (46 %) | 736 | 191 | — |
| Solight | 1 263 | 1 263 | 37 (3 %) | 782 (62 %)** | 413 (33 %) | 31 (2 %) | 1 496 | 1 580 | — |
| Penta | 429 | 429 | 7 (2 %) | 9 (2 %) | 402 (94 %) | 11 (3 %) | 2 573 | 2 420 | — |
| Monacor | 1 788 | 1 788 | 0 (0 %) | 1 | 979 (55 %) | 808 (45 %) | 979 | 765 | — |
| WiiM | 29 | 29 | 13 | 0 | 16 | 0 | 2 590 | 3 022 | — |

\* "zmiešané" je z veľkej časti artefakt: `add-category-links.js` pripája **úplne every
supplier feed** rovnakú slovenskú vetu na koniec popisu ("Ďalšie produkty nájdete v kategórii
X") — inak čisto český text tak dostane jeden slovenský marker a spadne do "zmiešané", nie
preto, že by bol reálne preložený.
\*\* Solight ručná kontrola vzoriek ukázala plynulú, kvalitnú slovenčinu — vysoké číslo
"zmiešané" je pravdepodobne tiež artefakt classifikátora (krátka technická skratka/jednotka
zachytená ako "české" písmeno), nie skutočný problém s kvalitou.

### Ručne overené (čítanie skutočných popisov, nie len heuristika)

- **ATOS**: mimo kategórie Diaľkové ovládače je popis prakticky vždy čistá čeština —
  marketingový úvod, "Klíčové vlastnosti", tabuľka "Technické specifikace" — presne ako
  opisuje zadanie. Toto je **jednoznačne dominantný nosič problému**, počtom produktov aj
  objemom textu (~23,3 mil. znakov popisov spolu, z toho drvivá väčšina čisto česky).
- **K+B**: mimo úzkeho rozsahu `kb-description-enrichment.js` (TV a domáce spotrebiče, len
  keď bol pôvodný popis "chudobný") je zvyšok katalógu (tlačiarne, drogéria, príslušenstvo,
  kávovary, herné konzoly, ...) **väčšinovo čeština**, len krátka (typicky 100-400 znakov,
  jedna veta prevzatá priamo z K+B feedu). Ručná kontrola "bez signálu" vzorky (kde
  heuristika nevidí ani CZ ani SK marker) ukázala, že cca 6 z 8 náhodných vzoriek bolo
  v skutočnosti tiež čeština (len príliš krátka na to, aby obsahovala ř/ě) — reálny podiel
  českého obsahu v K+B je teda **vyšší než ukazuje tabuľka vyššie, pravdepodobne 75-85 %
  produktov**, len s oveľa menším objemom znakov na produkt než ATOS.
- **InnPro, BaSys, Solight, Penta**: ručne prečítané vzorky (viacero kategórií vrátane
  audio, TV príslušenstvo, domáce spotrebiče, outdoor) sú **plynulá, kvalitná slovenčina**.
  Toto **nie sú** dodávatelia s problémom "český popis" — zadanie ich zaraďovalo do rozsahu
  problému nesprávne (zrejme z generickej domnienky, nie z čítania feedu). Malý zvyškový
  počet čisto českých kusov (InnPro 7, BaSys 45, Solight 37, Penta 7) je skôr na úrovni
  jednotlivých produktov/kategórií než systémový problém — dá sa doriešiť samostatne, malým
  cieleným pokrytím, nie hromadným prekladom.
- **Monacor**: iný problém než zadanie predpokladalo — úvod je po slovensky, ale technické
  parametre sú často v **angličtine** ("Intended use: case, Material: aluminium sheet,
  Dimensions: ..."), nie v češtine. Toto je samostatná téma (SK/EN, nie CZ/SK) a
  pravdepodobne mimo rozsahu tejto úlohy, ak sa používateľ nerozhodne inak.
- **WiiM**: zanedbateľný objem (29 produktov), nepodstatné pre rozhodovanie o rozsahu.

### Záver k otázke č. 1 zo zadania (rozsah)

Reálny rozsah je užší a koncentrovanejší, než zadanie predpokladalo:

- **ATOS je zďaleka najväčší a najnaliehavejší problém**: ~10 000-11 000 produktov, ~20+ mil.
  znakov, jednotlivé popisy až do ~20 000 znakov (potvrdzuje odhad "10-20 tis. znakov na
  produkt" zo zadania — ale platí najmä pre ATOS, nie plošne).
- **K+B je druhý, výrazne menší problém** čo do objemu textu (~1-1,3 mil. znakov), ale
  zasahuje veľkú časť katalógu (rádovo 3 500-4 000 z 5 012 produktov).
- **InnPro, BaSys, Solight, Penta nie sú súčasťou problému** (už teraz kvalitná slovenčina).
- **Monacor má iný problém** (SK/EN, nie CZ/SK) — mimo rozsahu, pokiaľ sa nerozhodne inak.

Odporúčanie: **rozsah fázy 1 = ATOS**. K+B ako fáza 2 (menší objem, ale iný charakter — veľa
veľmi krátkych viet naprieč desiatkami kategórií namiesto dlhých marketingových textov v
niekoľkých kategóriách). Toto sa zhoduje aj s existujúcim pravidlom v
`agent/rules/imports.md`: *"Preferred pilot suppliers when appropriate: ATOS, K-B"* — teda
presne tá istá dvojica, ku ktorej ma nezávisle doviedlo meranie objemu/jazyka.

## 2. Existujúca infraštruktúra, na ktorej sa dá stavať

| Nástroj | Rozsah | Mechanizmus | Nasadenie |
|---|---|---|---|
| `scripts/translate-cz-sk.js` + `cz-sk-dict.json` | názvy kategórií | slovníkový preklad slovo za slovom | živé |
| `scripts/localize-product-names.js` + `data/localization/product-names-sk.json` | NÁZVY produktov (100 kusov: 50 ATOS + 50 K+B, `status=pilot_approved`) | kurátorský register podľa CODE+EAN, s detekciou driftu zdroja a idempotenciou | **živé v nočnom syngu** (`atos-sync.yml` aj `kb-sync.yml` ho volajú priamo, pozri `product-name-localization-pilot.yml`) |
| `scripts/lib/atos-remote-control-description.js` | ATOS diaľkové ovládače ALIEN (~850 ks) | ručne písaný frázový/regexový preklad known-templates | živé |
| `scripts/lib/kb-description-enrichment.js` | K+B TV + domáce spotrebiče, len "chudobné" popisy | pôvodná tvorba SK textu z kurátorských faktov + šablón (nie preklad) | živé |

Kľúčový precedens pre popisy je `localize-product-names.js`: kurátorský JSON register,
zmena len pre explicitne schválené (`pilot_approved`) položky spárované podľa CODE **a**
EAN, so zastavením pri drift-e zdrojového textu namiesto tichého prepisu, aplikovaný ako
samostatný krok v nočnom importe. `agent/rules/imports.md` ho priamo označuje ako *"the
model for this pattern"* pre budúce automatizované transformácie. Rovnaký tvar (register +
hash zdroja + explicitné schválenie + drift-check) je prirodzeným základom aj pre preklad
popisov.

## 3. Zhoda s `agent/rules/imports.md` a `safety.md`

- `imports.md` už definuje presne tento postup: *"Use staged rollout: 100 products → validate
  next real import → 500 → validate → 2 000 → validate → supplier-wide"*, s invariantmi
  (počet SHOPITEM, CODE/EAN/URL/cena/dostupnosť/kategórie nezmenené, zmenené len explicitne
  schválené polia) a s ATOS+K-B ako preferovanými pilotnými dodávateľmi.
- `imports.md` výslovne pre CZ→SK lokalizáciu vyžaduje: *"preserve technical/model tokens,
  brand names and units unless an approved rule explicitly changes them"* — presne riziko,
  ktoré zadanie pomenúva (rozlíšenie, porty, jednotky sa nesmú pri preklade poškodiť).
- `safety.md` radí "product copy" a "small localization batches" do CONTROLLED AUTO, ale len
  *"within an already approved operating area"* — preklad popisov cez LLM zatiaľ nie je
  schválená prevádzková oblasť (na rozdiel od lokalizácie NÁZVOV), takže aj malý pilot by mal
  najprv prejsť explicitným schválením používateľa, nie byť spustený autonómne.
- Zmena `output/*.xml` = produkčný dopad (Shoptet import) → akýkoľvek reálny beh nad živým
  feedom nad rámec malej pilotnej dávky patrí do APPROVAL REQUIRED, nie CONTROLLED AUTO.

## 4. Otvorené otázky na rozhodnutie používateľom

Pozri hlavnú správu v konverzácii — sumarizuje 3 varianty mechanizmu prekladu (kurátorský
register + LLM draft s automatickou kontrolou čísel/jednotiek a manuálnym schválením vs.
plne automatický beh bez review vs. rozšírenie regexového/slovníkového prístupu) spolu s
odporúčaním a s návrhom postupného nasadenia (pilot → validácia → rozšírenie), v súlade s
`agent/rules/imports.md`.

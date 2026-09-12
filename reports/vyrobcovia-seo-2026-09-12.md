# SEO obsah pre stránky značiek

## Východiskový stav

Export `manufacturers.csv` z Shoptetu obsahuje **1049 výrobcov** a **všetkých päť obsahových polí
je prázdnych vo všetkých riadkoch** – `description`, `metaTitle`, `metaDescription`, `webUrl`,
`manufacturingCompanyName`. Overené aj naživo: `premiumstore.sk/znacka/uni-t/` má titulok
„Uni-T - PremiumStore.sk" a meta description doslova „Uni-T". Ide o zhruba 800 indexovateľných
stránok bez obsahu.

## Čo je pripravené

| Súbor | Obsah |
|---|---|
| `data/vyrobcovia-import-2026-09-12.csv` | 175 značiek s popisom, meta title a meta description |
| `data/vyrobcovia-skryt-2026-09-12.csv` | 264 značiek bez produktov, nastavené `inList=0`, `inMenu=0` |

Import cez Nastavenia → Import a export dát → Výrobcovia. Formát je byte-kompatibilný so živým
exportom (BOM, nekvótovaná hlavička, `;` pred CRLF, ostatné polia ponechané prázdne, aby import
neprepísal nič iné).

## Ako vznikol obsah

Hranica je **30 produktov** – nad ňou je 179 značiek, ktoré pokrývajú **83 % sortimentu**.
Zo 179 sú 4 vynechané (viď nižšie), takže popis dostáva 175 značiek.

Delba práce je zámerná:

- **Charakteristika značky je písaná ručne** – čomu sa značka venuje, aké konkrétne produktové
  rady vyrába, v čom je jej pozícia. Podložené reálnym sortimentom vo feedoch, nie generickou
  vatou (napr. pri UNI-T sa spomína rad PRO Line, pri Edifier model R1280DB, pri G3Ferrari
  pizza pec Delizia).
- **Prelinkovanie na kategórie je generované z dát** (`build_manufacturers_csv.py`). Pre každú
  značku sa z feedov spočíta, v ktorých kategóriách nového stromu reálne má produkty, a do textu
  sa vloží veta s odkazmi na najsilnejšie z nich (podiel ≥ 4 %, max. 4 odkazy). Koreňové
  kategórie sa vynechávajú (ako odkaz nič nehovoria), rodič sa vynechá, ak je v zozname aj jeho
  podkategória, a všeobecné názvy typu „Príslušenstvo" sa doplnia o kontext rodiča
  („Príslušenstvo pre počítače, mobily a tablety"). Spolu **466 odkazov**, každý overený proti stromu – žiadny nemôže ukázať na neexistujúcu kategóriu a pri
  zmene stromu stačí skript pustiť znova.

Meta description sa odvodzuje z ručného popisu (orezaný na 158 znakov), meta title je
`{Značka} – {kľúčové slová} | PremiumStore.sk` do 74 znakov. Kontrola: 0 prekročených limitov,
0 značiek bez odkazu, 0 neplatných URL.

## Nálezy, ktoré treba riešiť ručne

**1. Značkové menu ukazuje výhradne mŕtve značky.** `inMenu=1` má presne päť značiek: Suunto,
Nike, Fila, Columbia, Storm. Všetkých päť má **nula produktov** – sú to zvyšky po bývalom obchode
s obuvou a hodinkami. Značky s reálnym objemom (Solight 1273 ks, Emos 1026, Monacor 979) v menu
nie sú vôbec. Pripravený import nastavuje `inMenu=0` všetkým; výber značiek do menu je
obchodné rozhodnutie, preto ho nechávam na teba.

**2. GPSR polia sú prázdne.** Stĺpce `manufacturingCompanyName`, `postalAddress`, `contactEmail`
a tri `europeanReseller*` slúžia na údaje o výrobcovi/dovozcovi podľa nariadenia EÚ o všeobecnej
bezpečnosti výrobkov (GPSR), účinného od decembra 2024. Vyplnené je 0 z 1049. Nie je to SEO, ale
legislatívna požiadavka – odporúčam overiť s tým, kto rieši compliance. Údaje nemám odkiaľ
doplniť, museli by prísť od dodávateľov.

**3. Štyri „značky", ktoré značkami nie sú** – vynechané z importu, majú spolu 409 produktov:

| Označenie | ks | Čo to v skutočnosti je |
|---|---|---|
| `Ostatní` | 198 | zberný štítok (sťahovacie pásky, redukcie, rozvádzače, diely k mikrospájkam) |
| `FVE` | 120 | montážny materiál pre fotovoltaiku (úchyty, skrutky, podložky), nie značka |
| `ORG` | 58 | zmes batérií, ventilátorov a audio dielov |
| `OEM` | 33 | bezznačkový tovar (manžety, konzoly, pätice) |

Tieto produkty by mali dostať skutočnú značku, prípadne prázdneho výrobcu. Takto majú vlastnú
značkovú stránku, čo nedáva zmysel pre zákazníka ani pre vyhľadávače.

**4. Rozdvojené značky.** `Samsung` (140 ks) a `Samsung It` (89 ks) sú tá istá značka rozdelená
podľa dodávateľa – zákazník aj Google to vidia ako dve rôzne značky a objem sa delí. Odporúčam
zlúčiť. Podobne `REBEL` (161) a `REBEL ACTIVE` (298); tam je delenie obhájiteľné, ide o odlišný
produktový rad. `Bose` (102) a `Bose Pro` (166) je legitímne rozdelenie na spotrebnú
a profesionálnu vetvu, to by som nechal.

## Závislosť na nasadení stromu

Odkazy v popisoch smerujú na **nové** kategórie, takže `vyrobcovia-import-2026-09-12.csv` sa musí
importovať **až po kroku 1 cutoveru** (import nového stromu kategórií). Súbor
`vyrobcovia-skryt-2026-09-12.csv` je na strome nezávislý a dá sa importovať kedykoľvek.

## Zvyšné značky

Pod hranicou 30 produktov zostáva 617 značiek so 17 % sortimentu, prevažne s 1–9 produktmi.
Tie zatiaľ obsah nedostali. Ak ich budeme chcieť pokryť, dá sa pre ne vygenerovať aspoň meta
title a meta description plus veta s odkazmi na kategórie – rovnakým skriptom, bez ručného textu.

---

# Krížová kontrola dodávateľov: ten istý produkt u viacerých z nich

Podnet: „UNI-T má v ponuke aj ATOS". Potvrdilo sa a je to väčší problém, než sa zdalo.

## EAN na odhalenie duplicít nestačí

Zhoda podľa EAN naprieč všetkými ôsmimi feedmi nájde **jediný** prípad. Dôvod: každý dodávateľ
používa vlastný EAN. Ten istý multimeter UNI-T UT202R má u ATOSu `5901890065078` (české
distribútorské číslo) a u InnPro `6935750520291` (číslo výrobcu). Žiadna dedupe logika postavená
na EAN ich nespojí.

Preto som pároval podľa **značky + modelového kódu z názvu**, s kontrolou podobnosti názvu, aby
sa nezlúčili rôzne produkty s podobným kódom (skript `cross_supplier_dupes.py`).

## Výsledok: 89 produktov je v e-shope dvakrát

| Dvojica dodávateľov | Produktov |
|---|---|
| ATOS + InnPro | 52 |
| BASYS + K-B | 16 |
| ATOS + Penta | 13 |
| K-B + Penta | 5 |
| ATOS + K-B | 2 |
| InnPro + K-B | 1 |

Celý zoznam vrátane oboch názvov, oboch EAN a ceny od každého dodávateľa je v
`reports/duplicitne-produkty-dodavatelia-2026-09-12.csv`.

Značky, ktorých sa to týka najviac: **UNI-T** (52 modelov, ATOS aj InnPro), **Pioneer** (16,
BASYS aj K-B), **MHPower** (10, ATOS aj Penta), **TP-Link** (5, K-B aj Penta).

## Prečo na tom záleží

Každý taký produkt má v e-shope dve samostatné karty. To znamená rozdelené recenzie a hodnotenia,
dve URL súťažiace o to isté kľúčové slovo (klasická kanibalizácia vo vyhľadávaní), dve rôzne ceny
toho istého tovaru v jednom e-shope a dvojité skladové hlásenia do Heureky.

## Cenové rozdiely – 32 modelov nad 15 %

Pri 32 modeloch sa cena medzi dodávateľmi líši o viac než 15 %. Najvypuklejšie prípady:

| Produkt | Lacnejší | Drahší | Rozdiel |
|---|---|---|---|
| TP-Link Tapo RV30 Max Plus | Penta 150,50 € | K-B 460,50 € | 3,06× |
| Diaľkový ovládač Tesla TE-300 | ATOS 8,30 € | K-B 21,90 € | 2,64× |
| EPever DR2210 solárny regulátor | Penta 60,90 € | ATOS 138,90 € | 2,28× |
| TP-Link Tapo L530E | K-B 11,50 € | Penta 23,90 € | 2,08× |
| MHPower MPL-500-12 UPS | Penta 97,90 € | ATOS 194,50 € | 1,99× |
| MHPower MPL-700-12 UPS | Penta 115,90 € | ATOS 219,90 € | 1,90× |
| UNI-T UT12D detektor napätia | InnPro 6,10 € | ATOS 10,00 € | 1,64× |
| Roborock Q10 PF | InnPro 219,00 € | K-B 313,90 € | 1,43× |

Pri rade MHPower je Penta systematicky lacnejšia než ATOS, pri UNI-T je lacnejšia InnPro. To nie
sú náhodné odchýlky, ale rozdiel v nákupných podmienkach – stojí za to ich prejsť a pri každej
značke sa rozhodnúť pre jedného dodávateľa.

## Návrh riešenia

1. Prejsť CSV a pri každom duplicitnom modeli vybrať dodávateľa (spravidla lacnejšieho, ak sedí
   dostupnosť a dodacia lehota).
2. Neželaného dodávateľa pre daný produkt vylúčiť cez `categoryExclusionsByPath` alebo cez
   `excludedManufacturers` v jeho mapping súbore – podľa toho, či ide o jednotlivé kusy alebo
   o celú značku.
3. Pri značkách s úplným prekryvom (UNI-T: ATOS 208 ks vs. InnPro 158 ks) zvážiť, či nenechať
   celú značku len u jedného dodávateľa – ušetrí to priebežnú údržbu.

## Vyriešené: automatická deduplikácia pri každom importe

Rozhodnutie: **UNI-T z InnPro, MHPower z Penty, Pioneer z BASYSu, TP-Link z Penty.**

**Nešlo to spraviť ako pri Solighte.** Solight má v ATOSe nastavené `excludedManufacturers`, lebo
celý jeho sortiment berieme priamo od výrobcu. Tu je prekryv len čiastočný – napr. ATOS má 208
kusov UNI-T, ale InnPro z nich vie dodať len 54 modelov. Vypnutie celej značky by zhodilo 214
produktov, ktoré druhý dodávateľ vôbec nemá: pri UNI-T práve tú drahšiu profesionálnu časť
(UT505A, termokamera UTi730V, stolový multimeter UT8804E, generátor UTG2082B, laboratórne zdroje
UDP3303A), pri MHPower LiFePO4 batérie 75–200 Ah a napájacie adaptéry pre MikroTik.

### Ako to funguje

`scripts/lib/cross-supplier-dedupe.js` beží **pri každom importe**. Keď transformuje feed
dodávateľa, ktorý pri danej značke ustupuje, načíta `output/<preferovaný>.xml` a preskočí každý
produkt, ktorého značka a modelový kód sa v ňom nachádzajú. Preferencie sú na jednom mieste:
`scripts/cross-supplier-preferences.json`.

Nič sa neudržiava ručne – zoznam vylúčených kusov sa prepočítava z aktuálnych feedov pri každom
behu. Keď InnPro nejaký model prestane viesť, ATOS ho nasledujúci beh sám vráti do ponuky.

Stav na dnešných feedoch:

| Dodávateľ | Položiek | Vylúčené |
|---|---|---|
| ATOS | 11 902 | 65 (UNI-T 55, MHPower 10) |
| K-B | 4 928 | 22 (Pioneer 17, TP-Link 5) |
| InnPro, Penta, BASYS, Solight | – | 0 (sú preferovaní) |

### Poistka proti výpadku feedu

Ak feed preferovaného dodávateľa chýba alebo je prázdny, pre danú značku sa **nevylučuje nič**
a dôvod sa zaloguje. Overené: po odstránení `output/penta.xml` prestali platiť vylúčenia MHPower
a TP-Link, ale UNI-T (InnPro) a Pioneer (BASYS) fungovali ďalej. Výpadok jedného feedu teda nikdy
nezmaže sortiment.

### Zapojenie

Filter je volaný v `transform-atos.js` a `transform-kb.js` – dnes jediní dodávatelia, ktorí
niekomu ustupujú. Ak do preferencií pribudne značka, kde má ustúpiť iný dodávateľ, treba do jeho
transform skriptu doplniť dva riadky (je to poznamenané aj v samotnom JSON-e), inak sa zmena ticho
neprejaví.

### Preferencie podľa nákupnej ceny

Víťaza určuje **naša nákupná cena** (`PURCHASE_PRICE`), porovnaná model po modeli; pri značke
vyhráva ten, kto je lacnejší pri väčšine spoločných modelov. Prepočet:
`node scripts/compare-supplier-purchase-prices.js`.

| Značka | Zhôd | Výsledok podľa nákupnej ceny | Berieme z |
|---|---|---|---|
| UNI-T | 50 | InnPro 45 : ATOS 4 : Penta 1 | **InnPro** |
| Pioneer | 16 | K-B 15 : BASYS 1 | **K-B** |
| MHPower | 10 | Penta 10 : ATOS 0 | **Penta** |
| TP-Link | 2 | Penta 1 : K-B 1 | **Penta** |
| Tesla | 1 | ATOS (5,39 € vs 16,71 €) | **ATOS** |
| EPEVER | 1 | Penta (44,28 € vs 101,68 €) | **Penta** |
| Amiko | 1 | ATOS (35,36 € vs 38,79 €) | **ATOS** |

**Pozor – Pioneer sa zmenil oproti pôvodnému zadaniu.** Bolo dohodnuté brať ho z BASYSu, ale na
nákupnej cene je K-B lacnejší pri 15 zo 16 spoločných modelov (priemer 139,18 € vs 144,66 €).
Podľa pravidla „všade lacnejší dodávateľ" som prepol na K-B. Rozdiel je len 3,8 %, takže ak má
BASYS lepšiu dostupnosť alebo dodacie podmienky, stačí to v preferenciách vrátiť späť.

Pri TP-Linku je to 1:1, ale rozhoduje veľkosť rozdielu: RVA100 je u Penty o 41 % lacnejší
(9,29 € vs 15,80 €), zatiaľ čo P100 2-pack je u K-B lacnejší len o 1,4 %.

### Opravené: falošné duplicity pri variantoch

Prvá verzia porovnávala len modelový kód a vyhadzovala aj produkty, ktoré duplicity nie sú:

- TP-Link **L530E** – K-B jedna žiarovka (8,39 €), Penta 2-pack (14,63 €)
- TP-Link **RV30 Max** (Penta 116 €) vs **RV30 Max Plus** (K-B 340 €) – iný model
- Edifier **ES60** – K-B čierny, InnPro biely

Párovanie preto k modelovému kódu pripája aj to, čo produkt odlišuje od jeho variantov: veľkosť
balenia, farbu a kvalifikátory radu (Plus, Pro, Max, Ultra, Lite, Mini, Combo, Kit, Set). Keď to
jeden dodávateľ v názve uvedie a druhý nie, zhoda nevznikne – radšej nechá duplicitu, než by
zmazal produkt, ktorý duplicita nie je.

### Stav na dnešných feedoch

| Dodávateľ | Položiek | Vylúčené |
|---|---|---|
| ATOS | 11 902 | 61 (UNI-T 50, MHPower 10, EPEVER 1) |
| BASYS | 943 | 22 (Pioneer) |
| K-B | 4 928 | 4 (TP-Link 2, Amiko 1, Tesla 1) |
| InnPro, Penta, Solight | – | 0 |

Filter je zapojený v `transform-atos.js`, `transform-kb.js`, `transform-penta.js`,
`transform-innpro.js` a `transform-basys.js`.

### Jeden prípad na overenie

**Amiko HD265** – ATOS má „AMIKO Mini HD265", K-B „Amiko DVB-S2 přijímač Mini HD265 WIFI". Ak je
tá WIFI verzia naozaj iný model, nie je to duplicita a Amiko treba z preferencií vyhodiť. Rozdiel
v nákupnej cene je len 3,43 €, takže o veľa nejde.

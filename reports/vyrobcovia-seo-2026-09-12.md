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
  sa vloží veta s odkazmi na najsilnejšie z nich (podiel ≥ 4 %, max. 4 odkazy). Spolu **486
  odkazov**, každý overený proti stromu – žiadny nemôže ukázať na neexistujúcu kategóriu a pri
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

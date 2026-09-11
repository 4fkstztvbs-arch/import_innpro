# Planeo.sk ako referencia pre novú kategorizáciu (2026-09-11)

Planeo.sk vybraný ako referenčný veľký elektro e-shop, keďže (na rozdiel od Nay,
Alza, Datart, Electroworld, Hej, Conrad, TSBohemia, Kasa, Smarty – všetky za
bot-ochranou Akamai/TSPD alebo Cloudflare) sa dá kompletne stiahnuť bez
obmedzenia. Sortimentom je porovnateľne široký ako premiumstore.sk (elektro,
domáce spotrebiče, auto-moto, chovateľské potreby, nábytok...).

## Zdroj dát

Server-renderovaný mega-menu strom z `https://www.planeo.sk/menu.xml?render_mode=catalogue-menu`
(2,3 MB HTML fragment so všetkými úrovňami naraz, žiadne ďalšie AJAX volania
netreba). Vyparsované vlastným HTML parserom (stack-based, podľa `data-testid`
atribútov `catalogue-category.lvlN-category` a zodpovedajúcich `<ul class="c-cat-N">`
kontajnerov).

**Uložené:** `data/planeo-sk-kategorie-2026-09-11.csv` (`depth;full_path;url`,
2027 riadkov, "Zobraziť všetky produkty v kategórii" duplicitné odkazy
odfiltrované).

## Kľúčové rozdiely oproti nášmu stromu

| | premiumstore.sk (súčasný stav) | planeo.sk |
|---|---:|---:|
| Kategórií celkovo (viditeľné) | 2360 | 2027 |
| Max. hĺbka stromu | 5 úrovní | **3 úrovne** |
| Počet kategórií na 1. úrovni | 17 (+ "Druhy") | 34 (z toho ~7 marketingových: Akcie, PLANEO DAYS, Planeo+ zľavy, Darčekové poukazy, Darčeky, Sady tovarov) |
| Prázdnych kategórií | 984 (42 %) | – (nezisťované, ale pri 3-úrovňovom strome je štrukturálne oveľa menej priestoru na "zabudnuté" prázdne vetvy) |

**Najdôležitejšie zistenie: Planeo pri porovnateľne širokom sortimente vystačí
s 3 úrovňami (kategória > podkategória > pod-podkategória), zatiaľ čo my máme
až 5.** To potvrdzuje, že náš strom je zbytočne hlboký – 4. a 5. úroveň (256
kategórií u nás) by sa dala sploštiť.

## Zaujímavé štrukturálne rozdiely na 1. úrovni

- Planeo **nedáva "Veľké domáce spotrebiče" a "Malé domáce spotrebiče" pod
  jednu strešnú "Domáce spotrebiče"** ako my – sú to dve samostatné kategórie
  na 1. úrovni (`Veľké domáce spotrebiče`, `Malé domáce spotrebiče`). Menej
  klikov k cieľu, plochejšia navigácia.
- **Slúchadlá sú vlastná kategória 1. úrovne**, nie podkategória "Audio-Video"
  (u nás sú schované pod `TV, audio a video > Audio technika > Slúchadlá`).
  Podobne aj `Telefóny a smart hodinky`, `Hodinky` (samostatne od telefónov).
- `Elektro, Smart Home a osvetlenie` zlučuje to, čo my máme rozdelené naprieč
  `Bezpečnosť a smart domácnosť`, `Elektroinštalačný materiál` (osvetlenie) a
  časťou `Náradie a dielňa`.
- Majú produktové kategórie, ktoré my nemáme vôbec (Potraviny, Nábytok,
  Hudobné nástroje ako top-level, LEGO® ako vlastná top-level značková
  kategória) – nie nutne relevantné pre nás, len pre kontext šírky sortimentu.

## Ako s tým ďalej pracovať

Toto je vstupný podklad, nie hotový návrh. Pri príprave novej kategorizácie
(spolu s `reports/kategorie-prazdne-audit-2026-09-11.md`) odporúčam:

1. Zobrať našich **26 599 reálnych produktov** (`data/shoptet-products-export-2026-09-11.csv`)
   a pre každú top-level vetvu premiumstore rozhodnúť, či sa dá sploštiť na
   Planeovský vzor (max 3 úrovne).
   Planeo dosahuje 3 úrovne, my môžeme mať o niečo hlbšie feedy (K+B, ATOS...),
   takže presné 1:1 kopírovanie nebude vždy možné, ale je to dobrý strop, ku
   ktorému sa priblížiť.
2. Zvážiť rozdelenie "Domáce spotrebiče" na dve top-level kategórie (Veľké /
   Malé) podľa vzoru Planeo – u nás má táto vetva veľa podkategórií, plochejšie
   rozdelenie by pomohlo.
3. Porovnať pomenovania 1. úrovne medzi oboma stromami a zjednotiť terminológiu
   tam, kde je zrejmé, že zákazník hľadá inak, než ako to máme pomenované my.

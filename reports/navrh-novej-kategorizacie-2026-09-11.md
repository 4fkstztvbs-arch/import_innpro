# Návrh novej kategorizácie produktov (2026-09-11)

Konkrétny, dátami podložený návrh novej kategorizácie, nadväzujúci na
`reports/kategorie-prazdne-audit-2026-09-11.md` (984 prázdnych kategórií) a
`reports/planeo-referencia-kategorizacia-2026-09-11.md` (Planeo.sk pri
porovnateľnom sortimente vystačí s max. 3 úrovňami oproti našim 5).

## Metodika

Prepočítané priamo z **26 599 reálnych produktov**
(`data/shoptet-products-export-2026-09-11.csv`, stĺpce `categoryText`–
`categoryText11` – produkt môže byť v niekoľkých kategóriách naraz), nie zo
samotného stromu kategórií – to zaručuje presné počty bez dvojitého počítania
(keď sa hlbšia aj plytšia kategória tej istej vetvy zlúčia do jedného nového
uzla, produkt sa v novom uzle započíta len raz, aj keby pôvodne patril do
oboch).

Aplikované dve pravidlá:

1. **Sploštenie na max. 3 úrovne** – akákoľvek kategória hlbšia než 3. úroveň
   sa skráti na svojich prvých 3 segmentov cesty. Viacero hlbších vetiev tej
   istej 3-úrovňovej cesty sa tým automaticky zlúči do jedného uzla.
2. **Povýšenie "Domáce spotrebiče" podkategórií na 1. úroveň** – `Veľké
   spotrebiče`, `Malé spotrebiče`, `Vstavané spotrebiče` sa stávajú
   samostatnými kategóriami 1. úrovne (presne podľa vzoru Planeo.sk, ktorý
   tieto tri sekcie tiež nedáva pod jednu strešnú kategóriu). Štruktúra týchto
   troch vetiev v strome už dnes existuje, ide teda len o odstránenie
   zbytočného obalu, nie o preraďovanie produktov naprieč vetvami.

## Výsledok – kľúčové čísla

| | Pred | Po |
|---|---:|---:|
| Obsadené kategórie (aspoň 1 produkt) | 1376 | **851** (-38 %) |
| Max. hĺbka stromu | 5 úrovní | **3 úrovne** |
| Kategórií 1. úrovne | 17 | 19 |
| Nových kategórií vzniknutých zlúčením 2+ starých | – | **148** |

**Súbor s celým návrhom:** `data/navrh-novej-kategorizacie-2026-09-11.csv`
(`new_path;depth;product_count;merged_from_old_paths_count;old_paths`) – pre
každú novú kategóriu vidno presne, z ktorých pôvodných ciest vznikla, takže
návrh je plne dohľadateľný a recenzovateľný.

## Nové kategórie 1. úrovne (podľa počtu produktov)

| Kategória | Produktov |
|---|---:|
| Elektroinštalačný materiál | 4805 |
| TV, audio a video | 4006 |
| Auto-moto | 2801 |
| Malé spotrebiče | 2735 |
| Profesionálna audio technika | 2591 |
| Šport, hračky a voľný čas | 2251 |
| Náradie a dielňa | 2176 |
| Počítače a notebooky | 1495 |
| Fotovoltaika a energie | 1472 |
| Mobily, smart hodinky a tablety | 1250 |
| Bezpečnosť a smart domácnosť | 1239 |
| Foto a príslušenstvo | 890 |
| Zdravie a starostlivosť | 710 |
| Kreatívne technológie | 501 |
| Záhrada | 479 |
| Veľké spotrebiče | 356 |
| Dróny a RC modely | 290 |
| Vstavané spotrebiče | 194 |
| Domáce spotrebiče *(zvyšok, pozri nižšie)* | 2 |

*(Súčet presahuje 26 599, keďže produkt môže byť v niekoľkých kategóriách
naraz – rovnaký jav ako v pôvodnom strome.)*

**Drobná nezrovnalosť na doriešenie:** 2 produkty majú priamo priradenú
kategóriu `Domáce spotrebiče` (nie niektorého z jej troch detí) – po
povýšení detí na 1. úroveň im chýba domov. Treba ich ručne prezrieť a
zaradiť buď do `Malé spotrebiče`, alebo vytvoriť `Domáce spotrebiče >
Ostatné` ako záchytnú kategóriu.

## Najsilnejší nález: "značka ako kategória" namiesto filtra

Najväčšie zlúčenia (17, 22, 19 pôvodných kategórií do jednej) majú spoločný
vzor – **hlbšie úrovne stromu neboli reálne odlišné produktové typy, ale
značky**, ktoré mali byť od začiatku parameter/filter, nie samostatná vetva
stromu:

**`TV, audio a video > Diaľkové ovládače > Televízne ovládače`** (455
produktov, zlúčených 17 pôvodných kategórií) – pôvodne rozdelené na
samostatné podkategórie podľa značky TV: Changhong, ECG, Finlux, Gogen,
Hitachi, Hyundai, LG, Orava, Panasonic, Philips, Samsung, Sencor, Sharp,
Sony, Telefunken, Toshiba. Zákazník hľadajúci "diaľkový ovládač na televízor"
by mal vidieť jednu kategóriu s filtrom "Značka televízora", nie 17 klikov v
menu.

**`Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky`** (310
produktov, 19 pôvodných ciest) – rovnaký vzor, len o úroveň hlbšie
(`Motor > Aretace > Audi/BMW/Opel`, `Podvozek > Heváky a zdviháky >
Príslušenstvo`...). Špecializované náradie podľa značky auta malo byť
filter, nie vetva stromu.

Podobne `Diaľkové ovládače > Satelitné ovládače` (14 ciest), `Ovládače k
DVB-T2` (12), `Ventilačné technika > Domové ventilátory` (12, podľa typového
radu VENTS/DOSPEL), `Pódium, diskotéka, DJ > mikrofóny` (11, podľa značky
JTS a pod.), `Akumulátory a batérie > Príslušenstvo` (10).

**Odporúčanie:** pri týchto 148 zlúčených kategóriách namiesto straty
informácie (ktorá značka/typ to bol) nastaviť v Shoptete parameter
"Značka"/"Typ" ako filter na zlúčenej kategórii a hodnotu prevziať z názvu
pôvodnej (teraz zrušenej) podkategórie – to je krok, ktorý táto analýza sama
osebe nerobí (vyžaduje priradenie parametra ku každému produktu), ale mala by
ho pokryť ďalšia fáza.

## Čo tento návrh NErieši (vedomé obmedzenie, ďalšie kroky)

1. **Krížové duplicity naprieč vetvami** (216 skupín, napr. "Svietidlá" na 5
   miestach – Elektroinštalačný materiál, Náradie, Outdoor, Bezpečnosť,
   Foto) – toto sploštenie ich NEdotklo, keďže ide o rôzne top-level vetvy.
   V repozitári už existuje nástroj presne na toto (`scripts/find-category-
   duplicates.js`, história v `reports/kategorie-na-zjednotenie-*.md`) – má
   vlastné bezpečnostné poistky (guard proti zlúčeniu vecne odlišných
   kategórií ako "IP55" vs "IP65"). Odporúčam pustiť ho na výslednú
   sploštenú štruktúru namiesto ručného zlučovania od nuly.
2. **984 prázdnych kategórií** – pokryté samostatným auditom
   (`reports/kategorie-prazdne-audit-2026-09-11.md`), sú prirodzene mimo
   tohto návrhu (návrh vychádza len z obsadených kategórií).
3. **Extrakcia značky/typu ako parametra** namiesto straty granularity pri
   sploštení (pozri vyššie) – vyžaduje priradenie hodnoty parametra ku
   každému dotknutému produktu, mimo rozsahu tejto analýzy.
4. **Premietnutie do `scripts/*-mapping.json`** – finálna nová štruktúra sa
   musí zapísať ako `categoryRenamesByPath` pravidlá do mapovaní všetkých
   piatich dodávateľov (K+B, ATOS, InnPro, Solight, MONACOR), inak sa pri
   ďalšom nočnom behu feedy vrátia do starej štruktúry. Toto je krok až po
   schválení finálnej podoby stromu.

## Súbory

- `data/navrh-novej-kategorizacie-2026-09-11.csv` – kompletný nový strom (851
  kategórií) s dohľadateľnosťou na pôvodné cesty
- `reports/navrh-novej-kategorizacie-2026-09-11.md` – tento dokument

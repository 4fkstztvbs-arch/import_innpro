# Penta — namapovanie kategórií do existujúceho stromu (2026-08-24)

Zdroj dát: `SPresentTree_El` export (dostupný 24/7, na rozdiel od `StoItemShoptet_El` GetResult, ktorý beží len 21:00-08:00) — obsahuje celý strom Penty vrátane priradení produktov ku každému uzlu. Porovnané proti aktuálnym `<CATEGORY>` hodnotám vo všetkých committnutých `output/*.xml` (predstavuje náš skutočný aktuálny strom naprieč ATOS/InnPro/K+B/Solight/MONACOR/BASYS).

Penta má vo svojom exporte 3 samostatné stromy naraz (`Koncový shop I6` — zákaznícka navigácia, `Dle výrobce` — podľa výrobcu, `Koncovy shop reklamni SK` — marketingové akcie). Používame len `Koncový shop I6` (1 755 uzlov, ~24 400 priradení produktov — počet je vyšší než reálny počet produktov, keďže jeden produkt môže byť v strome viackrát).

## 1. Rozsah — čo sa importuje

Top-level porovnanie a rozhodnutie (potvrdené 2026-08-24):

| Penta top-level | položiek | rozhodnutie |
|---|---:|---|
| Notebooky, počítače a komponenty | 5 293 | **vylúčené** — nová oblasť, mimo rozsahu |
| Sieťové a LTE prvky, EZS | 3 842 | **vylúčené** |
| Pokladničné systémy | 2 623 | **vylúčené** |
| Telefóny, chytré hodinky a tablety | 1 182 | **vylúčené** |
| Kancelária, obchody | 618 | **vylúčené** |
| Camping a outdoor | 416 | **vylúčené** |
| Domácnosť | 2 435 | zahrnuté — mapuje sa do viacerých našich vetiev (Domáce spotrebiče, Auto-moto, Bezpečnosť a smart domácnosť...) |
| Foto, Video | 2 202 | zahrnuté → `TV, audio a video` |
| Záhrada | 2 180 | zahrnuté → `Záhrada` |
| Hračky | 932 | zahrnuté → `Šport, hračky a voľný čas` |
| Náradie | 898 | zahrnuté → `Náradie a dielňa` |
| TV, video, audio | 626 | zahrnuté → `TV, audio a video` |
| Fotovoltika | 398 | zahrnuté → `Fotovoltaika a energie` |
| Šport, cyklistika a fitness | 396 | zahrnuté → `Šport, hračky a voľný čas` |
| Domáce spotrebiče | 357 | zahrnuté (názov sa už zhoduje) |

Vylúčenia sú zapísané v `scripts/penta-mapping.json` → `categoryExclusionsByPath` (celá vetva vrátane všetkých podkategórií sa pri importe preskočí).

## 2. Automatické mapovanie — čo sa už urobilo

V rámci zahrnutých vetiev (9 top-level, spolu 901 listových kategórií s produktmi, 10 424 priradení) skript porovnal každý Pentin list podľa **názvu poslednej úrovne** (diakritika/veľkosť písmen ignorovaná) s existujúcim stromom:

| Výsledok | kategórií | položiek |
|---|---:|---:|
| Jednoznačná zhoda názvu (1 kandidát) | 122 | 1 232 |
| — z toho použiteľné (po odfiltrovaní generických názvov, pozri nižšie) | 71 | ~650 |
| Viacero kandidátov (nejednoznačné) | 56 | 916 |
| Žiadna zhoda vôbec | 723 | 8 276 |

Tých **71 jednoznačných a bezpečných** zhôd je už zapísaných v `scripts/penta-mapping.json` → `categoryRenamesByPath` (napr. `Domácnosť > Žehlenie a sušenie > Žehličky` → `Domáce spotrebiče > Malé spotrebiče > Žehličky`, `Náradie > Meracie prístroje > Detektory` → `Náradie a dielňa > MERACIE TECHNIKA > Detektory`).

**Odfiltrované ako nespoľahlivé:** 45 zhôd (529 položiek) bolo zahodených, lebo názov listu je príliš všeobecný na to, aby zhoda niečo znamenala (`Výpredaj`, `Príslušenstvo`, `Šport`, `Batérie`, `Doplnky`, `230V`...) — tie sa zhodovali len náhodou s úplne nesúvisiacou vetvou (napr. `Foto, Video > Výpredaj` sa inak spároval s `Profesionálna audio technika > Výpredaj`). Pri kontrole ručne som navyše vyhodil 6 konkrétnych zhôd, ktoré vyzerali automaticky rozumne, ale vecne nedávali zmysel (napr. detská hračka "Čistenie" spárovaná s reálnou kategóriou čistiacich spotrebičov).

**Bez mapovania zatiaľ ostáva 723 + 56 = 779 kategórií (9 192 položiek, ~88 % zahrnutého sortimentu).** Import ich napriek tomu nezablokuje — bez záznamu v `categoryRenamesByPath` sa proste vytvoria ako nová kategória v Shoptete s Pentiným pôvodným (slovenským) názvom cesty. Nič sa nestratí, len to zatiaľ nesedí 1:1 na existujúci strom.

## 3. Najväčšie nemapované kategórie (na doriešenie)

Zoradené podľa počtu produktov — toto je zoznam s najväčším dopadom, ak sa doladí:

| ks | Penta kategória | poznámka |
|---:|---|---|
| 244 | Foto, Video > Akumulátory... > Li-ion akumulátory > Neoriginálne | nová podkategória, žiadny ekvivalent |
| 211 | Domácnosť > Exteriérové doplnky > Vonkajšie kvetováče | + 210 ks skoro identická `Záhrada > Pestovanie > Vonkajšie kvetináče` — pravdepodobne duplicitné zaradenie toho istého sortimentu v Pentinom strome, treba zlúčiť do jednej našej kategórie |
| 193 | Domácnosť > Interiérové doplnky > Interiérové kvetináče | nová kategória (kvetináče momentálne nemáme) |
| 154 | TV, video, audio > Televízory > Príslušenstvo > Káble k TV | pravdepodobne patrí do `TV, audio a video > AV káble` |
| 113 | Domácnosť > Interiérové doplnky > Úložné boxy > Plastové boxy | nová kategória |
| 107 | Foto, Video > Ďalekohľady > Klasické ďalekohľady | máme len `Šport, hračky a voľný čas > Ďalekohľady` (bez rozdelenia klasické/hviezdárske/kompaktné) |
| 97 | Fotovoltika > Veľkokapacitné batérie | pravdepodobne `Fotovoltaika a energie > Elektrické stanice` alebo nová podkategória |
| ~94+93 | Foto, Video > ...Fotorámčeky, fotoalbumy a kalendáre | nová kategória |
| 91 | Záhrada > Záhradný nábytok > Záhradné úložné boxy | nová kategória (záhradný nábytok nemáme rozvinutý) |
| 84 | Záhrada > Pestovanie > Hnojivá a substráty | nová kategória |
| 65 | Náradie > Uskladnenie náradia > Skrine na náradie | pravdepodobne `Náradie a dielňa > Dielenské vybavenie` |

Ďalších ~700 kategórií je v `reports/` dátach použitých na tento report (menšie objemy, pod 35 ks/kategória) — vieme ich prejsť postupne, podobne ako sa to robilo pri `navrh-kategorizacia-2026-08-07.md` pre ostatných dodávateľov.

## 4. Odporúčaný ďalší postup

1. Spustiť prvý nočný import (`penta-sync.yml`) tak, ako je — nič sa nezablokuje, len časť produktov pristane v nových kategóriách s Pentiným pôvodným názvom.
2. Po prvom importe prejsť `output/penta.xml` a najväčšie nové kategórie (tabuľka vyššie) buď: (a) premapovať do existujúcej vetvy pridaním záznamu do `categoryRenamesByPath`, alebo (b) prijať ako legitímnu novú podkategóriu v našom strome (napr. kvetináče, hnojivá — Penta rozširuje sortiment Záhrady o veci, ktoré doteraz nemáme vôbec).
3. Kategórie s viacerými kandidátmi (56 ks, napr. "Kamery" — môže byť bezpečnostná kamera aj fotoaparát) treba rozhodnúť ručne podľa toho, aké produkty v nich reálne sú.

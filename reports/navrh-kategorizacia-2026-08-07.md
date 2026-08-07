# Návrh na zmenu kategorizácie — 2026-08-07

Toto je **návrh**, nič z tohto ešte nie je premietnuté do `scripts/*-mapping.json` ani do `output/*.xml`. Vychádza z `reports/strom-kategorii-2026-08-07.md` (strom po importe všetkých 5 dodávateľov) — prešiel som ho celý, plus skript na nájdenie zhodných listových názvov naprieč rôznymi vetvami stromu.

Rozsah: (1) poľské zvyšky, (2) kompletná reorganizácia `Domáce spotrebiče > Malé spotrebiče` (najviac rozhodená časť stromu, presne ako si postrehol), (3) pár jasných duplicít mimo Malých spotrebičov (hlavne Auto-moto), (4) čo som zámerne nechal tak ako je a prečo.

Čísla produktov sú z aktuálneho `output/atos.xml` (ešte čaká na nočný beh — po ňom sa presné počty pre ATOS mierne zmenia, ale kategórie/vetvy, ktorých sa to týka, ostávajú rovnaké).

---

## 1. Poľské zvyšky — 2 miesta

| Raw kategória (InnPro feed) | Súčasný výstup | Návrh |
|---|---|---|
| `Foto a video/Batohy/fototašky/Futerały i etui` | `TV, audio a video > Foto a optika > Batohy > fototašky > Futerały i etui` (2 ks) | zlúčiť do `TV, audio a video > Foto a optika > Batohy` |
| `Foto a video/Batohy/fototašky/Plecaki` | `... > Batohy > fototašky > Plecaki` (2 ks) | zlúčiť do `TV, audio a video > Foto a optika > Batohy` |
| `Foto a video/Batohy/fototašky/Torby` | `... > Batohy > fototašky > Torby` (2 ks) | zlúčiť do `TV, audio a video > Foto a optika > Batohy` |
| `Príslušenstvo pre automobily/Bezprzewodowe adaptery CarPlay/Android Auto` | `Auto-moto > Bezprzewodowe adaptery CarPlay > Android Auto` (4 ks) | zlúčiť do `Auto-moto > Bezdrôtové adaptéry CarPlay > Android Auto` (existuje už 33 ks pod správnym slovenským názvom) |

Implementácia: pridať do `scripts/innpro-mapping.json` → `categoryRenamesByPath` tri nové kľúče pre `fototašky` (mapujú priamo na `TV, audio a video > Foto a optika > Batohy`, listová úroveň, rovnaký mechanizmus ako minulotýždňové poľské opravy) a jeden kľúč `"Príslušenstvo pre automobily > Bezprzewodowe adaptery CarPlay": "Auto-moto > Bezdrôtové adaptéry CarPlay"`.

---

## 2. Domáce spotrebiče > Malé spotrebiče — kompletná reorganizácia

Toto je časť s najväčším neporiadkom: dva samostatné "shadow" stromy (ATOS-ove `Ostatné spotrebiče` a `Potreby pre domácnosti`, spolu ~40 vlastných podkategórií), plus rozsypané top-level položky od InnPro/K+B, ktoré duplikujú už existujúce K+B kanonické vetvy. Návrh nižšie **zachováva existujúce K+B vetvy ako kostru** (majú najviac produktov a najjemnejšie členenie) a všetko ostatné do nich zlieva.

### 2.1 Cieľová štruktúra (top-level uzly pod „Malé spotrebiče" po zlúčení)

```
Malé spotrebiče
├─ Bývanie a doplnky            (zostáva len ako "Domové doplnky", pozri 2.3 — bezpečnostná kamera sa presúva preč)
├─ Dezinfekčné lampy            (bez zmeny)
├─ Fritézy a hrnce              ← + top "Fritézy" (InnPro), + Ostatné spotrebiče>Fritézy/Elektrické panvice/Elektrické hrnce (ATOS)
├─ Grily, pekárne, variče       ← + top "Palacinkovače" (K+B), + top "Varné platne" (InnPro), + Ostatné spotrebiče>Grily/Pece na pizzu/Variče/Palacinkovače (ATOS)
├─ Hodiny a budíky              ← NOVÝ spoločný uzol: Bývanie a doplnky>Hodiny a budíky (K+B) + Potreby pre domácnosti>Hodiny a budíky>* (ATOS)
├─ Kuchynské potreby            ← + Kuchynské príslušenstvo (InnPro), + Potreby pre domácnosti>Kuchynské pomôcky/Kuchynské váhy/Nože a příbory (ATOS)
├─ Kuchynské roboty a krájače   ← + top "Mixéry" (InnPro), + Ostatné spotrebiče>Kuchynské roboty/Mixéry (ATOS)
├─ Kávovary a espressá          ← + Ostatné spotrebiče>Kávovary (ATOS)
├─ Meteostanice                 ← + Potreby pre domácnosti>Meteostanice, teplomery, vlhkomery (K+B)
├─ Na párty a oslavy            ← + Potreby pre domácnosti>Efekty a dekorácie (ATOS)
├─ Nádobie                      ← + Potreby pre domácnosti>Kuchynské riad/Formy na pečení/Termosky, termohrnčeky (ATOS)
├─ Príprava nápojov             ← + top "Elektrické kanvice" (InnPro), + Potreby pre domácnosti>Kanvice na čaj/Filtračné kanvice (ATOS), + Ostatné spotrebiče>Rýchlovarné kanvice/Výrobníky ľadu (ATOS)
├─ Príslušenstvo k malým spotrebičom   (bez zmeny — je to legitímna, dobre rozčlenená vetva; len prijme "Pre vysávače" zo Solightu, pozri nižšie)
├─ Sendvičovače, hriankovače, vaflovače ← + Ostatné spotrebiče>Hriankovače/Sendvičovače/Vaflovače (ATOS)
├─ Sušičky potravín             ← NOVÝ top-level uzol (presunutý z Potreby pre domácnosti>Sušičky ovocie a potravín, K+B), + Ostatné spotrebiče>Sušičky potravín (ATOS)
├─ Upratovacie pomôcky          ← + Potreby pre domácnosti>Upratovanie (ATOS)
├─ Vákuovačky a zváračky fólií  ← NOVÝ top-level uzol (presunutý z Potreby pre domácnosti, K+B), + Ostatné spotrebiče>Zváračky folií (ATOS)
├─ Vysávače                     ← + Ostatné spotrebiče>Vysávače>* (ATOS); "Pre produkty starostlivosti o vlasy" (Solight) sa presúva PREČ (pozri 2.4 — je to bug)
├─ Vzduchotechnika              ← + top "Ventilátory"/"Zvlhčovače vzduchu"/"Čističky vzduchu"/"Vykurovanie a klimatizácia" (InnPro)
├─ Žehličky                     ← + top "Naparovače odevov" (InnPro), + Bývanie a doplnky>Žehliace dosky (K+B) ako nový súrodenec "Žehliace dosky"
├─ Ostatné                      ← zlúčiť "Ostatné" (InnPro) + "Ostatné domáce spotrebiče" (K+B) do jedného
└─ Potreby pre domácnosti       (výrazne zoštíhlené, pozri 2.3 — zostáva len skutočne netriediteľný zvyšok)
```

`Veľké spotrebiče` a `Vstavané spotrebiče` som prešiel tiež — sú kompletne z K+B, čisté, bez duplicít, bez zásahu.

### 2.2 Detailná mapovacia tabuľka (zdroj → cieľ)

| Súčasná cesta (od "Malé spotrebiče") | Dodávateľ | ks | Cieľ |
|---|---:|---:|---|
| `Fritézy` (top) | InnPro | 4 | `Fritézy a hrnce > Fritézy` |
| `Ostatné spotrebiče > Fritézy` | ATOS | 8 | `Fritézy a hrnce > Fritézy` |
| `Ostatné spotrebiče > Elektrické panvice` | ATOS | 2 | `Fritézy a hrnce > Elektrické panvice` |
| `Ostatné spotrebiče > Elektrické hrnce` | ATOS | 1 | `Fritézy a hrnce > Multifunkčné hrnce` |
| `Palacinkovače` (top) | K+B | 7 | `Grily, pekárne, variče > Palacinkovače` |
| `Ostatné spotrebiče > Palacinkovače` | ATOS | 1 | `Grily, pekárne, variče > Palacinkovače` |
| `Ostatné spotrebiče > Grily` | ATOS | 4 | `Grily, pekárne, variče > Elektrické grily` |
| `Ostatné spotrebiče > Pece na pizzu` | ATOS | 7 | `Grily, pekárne, variče > Pece na pizzu` |
| `Ostatné spotrebiče > Variče` | ATOS | 3 | `Grily, pekárne, variče > Elektrické variče` |
| `Varné platne` (top) | InnPro | 12 | `Grily, pekárne, variče > Varné platne` (nový súrodenec) |
| `Bývanie a doplnky > Hodiny a budíky` | K+B | 4 | `Hodiny a budíky` (nový top-level uzol) |
| `Potreby pre domácnosti > Hodiny a budíky > Budíky` | ATOS | 42 | `Hodiny a budíky > Budíky` |
| `Potreby pre domácnosti > Hodiny a budíky > Hodiny` | ATOS | 28 | `Hodiny a budíky > Hodiny` |
| `Potreby pre domácnosti > Hodiny a budíky > Časovače, minútky` | ATOS | 2 | `Hodiny a budíky > Časovače, minútky` |
| `Kuchynské príslušenstvo > Na varenie` | InnPro | 26 | `Kuchynské potreby > Ostatné kuchynské potreby` |
| `Kuchynské príslušenstvo > Ostatné` | InnPro | 12 | `Kuchynské potreby > Ostatné kuchynské potreby` |
| `Potreby pre domácnosti > Kuchynské pomôcky > Lúskačky` | ATOS | 1 | `Kuchynské potreby > Ostatné kuchynské potreby` |
| `Potreby pre domácnosti > Kuchynské pomôcky > Ostatné kuchynské pomôcky` | ATOS | 2 | `Kuchynské potreby > Ostatné kuchynské potreby` |
| `Potreby pre domácnosti > Kuchynské pomôcky > Teplomery` | ATOS | 2 | `Kuchynské potreby > Kuchynské teplomery` |
| `Potreby pre domácnosti > Kuchynské pomôcky > Varešky a obracačky` | ATOS | 1 | `Kuchynské potreby > Varešky, Naberačky, Obracačky, Kliešte` |
| `Potreby pre domácnosti > Kuchynské váhy` | ATOS | 10 | `Kuchynské potreby > Kuchynské váhy` |
| `Potreby pre domácnosti > Nože a příbory > Brousky na nože` | ATOS | 0 | `Kuchynské potreby > Brousky na nože` |
| `Mixéry` (top) | InnPro | 3 | `Kuchynské roboty a krájače > Mixéry a šľahače > Mixéry` |
| `Ostatné spotrebiče > Kuchynské roboty` | ATOS | 8 | `Kuchynské roboty a krájače > Kuchynské roboty` |
| `Ostatné spotrebiče > Mixéry` | ATOS | 4 | `Kuchynské roboty a krájače > Mixéry a šľahače > Mixéry` |
| `Ostatné spotrebiče > Kávovary` | ATOS | 6 | `Kávovary a espressá` |
| `Potreby pre domácnosti > Meteostanice, teplomery, vlhkomery > Meteostanice` | K+B | 1 | `Meteostanice` |
| `Potreby pre domácnosti > Efekty a dekorácie > Do bytu` | ATOS | 1 | `Na párty a oslavy` |
| `Potreby pre domácnosti > Efekty a dekorácie > Na párty` | ATOS | 1 | `Na párty a oslavy` |
| `Potreby pre domácnosti > Kuchynské riad > Panvice` | ATOS | 1 | `Nádobie > Panvice` |
| `Potreby pre domácnosti > Formy na pečení` | ATOS | 2 | `Nádobie > Pečúce formy` |
| `Potreby pre domácnosti > Termosky, termohrnčeky` | ATOS | 3 | `Nádobie > Termosky a termohrnčeky` |
| `Elektrické kanvice` (top) | InnPro | 1 | `Príprava nápojov > Rýchlovarné kanvice` |
| `Potreby pre domácnosti > Kanvice na čaj` | ATOS | 1 | `Príprava nápojov > Rýchlovarné kanvice` |
| `Potreby pre domácnosti > Filtračné kanvice` | ATOS | 4 | `Príprava nápojov > Filtračné kanvice` |
| `Ostatné spotrebiče > Rýchlovarné kanvice` | ATOS | 2 | `Príprava nápojov > Rýchlovarné kanvice` |
| `Ostatné spotrebiče > Výrobníky ľadu` | ATOS | 2 | `Príprava nápojov > Výrobníky ľadu` |
| `Ostatné spotrebiče > Hriankovače` | ATOS | 1 | `Sendvičovače, hriankovače, vaflovače > Hriankovače` |
| `Ostatné spotrebiče > Sendvičovače` | ATOS | 4 | `Sendvičovače, hriankovače, vaflovače > Sendvičovače` |
| `Ostatné spotrebiče > Vaflovače` | ATOS | 4 | `Sendvičovače, hriankovače, vaflovače > Vaflovače` |
| `Potreby pre domácnosti > Sušičky ovocie a potravín` | K+B | 19 | `Sušičky potravín` (nový top-level uzol) |
| `Ostatné spotrebiče > Sušičky potravín` | ATOS | 3 | `Sušičky potravín` |
| `Potreby pre domácnosti > Upratovanie > Handry, houbičky a utěrky na upratovanie` | ATOS | 3 | `Upratovacie pomôcky > Čistiace prostriedky` |
| `Potreby pre domácnosti > Upratovanie > Metly a mopy na upratovanie` | ATOS | 2 | `Upratovacie pomôcky > Košťata a metly` |
| `Potreby pre domácnosti > Vákuovačky a zváračky fólií > *` | K+B | 34 | `Vákuovačky a zváračky fólií > *` (nový top-level uzol, presun bez zmeny detí) |
| `Ostatné spotrebiče > Zváračky folií` | ATOS | 7 | `Vákuovačky a zváračky fólií > Vákuovačky a zváračky` |
| `Ostatné spotrebiče > Vysávače > Podlahové vysávače` | ATOS | 1 | `Vysávače > Podlahové vysávače` |
| `Ostatné spotrebiče > Vysávače > Robotické vysávače` | ATOS | 3 | `Vysávače > Robotické vysávače` |
| `Ostatné spotrebiče > Vysávače > Ručné vysávače` | ATOS | 3 | `Vysávače > Ručné vysávače` (nový súrodenec) |
| `Ostatné spotrebiče > Vysávače > Tyčové vysávače` | ATOS | 1 | `Vysávače > Tyčové vysávače` |
| `Vysávače > Príslušenstvo > Neoriginálne príslušenstvo > Pre vysávače` | Solight | 15 | `Príslušenstvo k malým spotrebičom > Príslušenstvo k vysávačom` |
| `Ventilátory` (top) | InnPro | 5 | `Vzduchotechnika > Ventilátory` |
| `Zvlhčovače vzduchu` (top, vrát. duplicitného vlastného listu) | InnPro | 4 | `Vzduchotechnika > Zvlhčovače vzduchu` |
| `Čističky vzduchu` (top) | InnPro | 10 | `Vzduchotechnika > Čističky vzduchu` |
| `Vykurovanie a klimatizácia` (top) | InnPro | 3 | `Vzduchotechnika > Vykurovanie` |
| `Naparovače odevov` (top) | InnPro | 1 | `Žehličky > Naparovače odevov` |
| `Bývanie a doplnky > Žehliace dosky` | K+B | 14 | `Žehličky > Žehliace dosky` (nový súrodenec) |
| `Ostatné` (top) | InnPro | 8 | `Ostatné domáce spotrebiče` |

### 2.3 „Potreby pre domácnosti" a „Bývanie a doplnky" po vyčistení

Po vyššie uvedených presunoch v `Potreby pre domácnosti` zostáva len skutočne netriediteľný zvyšok:

- `Doplnky do domácnosti` — necháva sa (Koše na tříděný odpad 10 ks, Ostatné doplnky do domácnosti 14 ks); `Koše na bielizeň` (1 ks) a `Sušiaky na bielizeň` (3 ks) sa zlučujú s `Bývanie a doplnky > Sušiaky na bielizeň` (39 ks, K+B) — tá zostáva kanonická.
- `Elektrické nože` (K+B, 2 ks) — necháva sa (nemá kam inam patriť).
- `Osobné váhy` (ATOS, 5 ks) — **presun mimo Malé spotrebiče**, zlúčiť s `Zdravie a starostlivosť > Osobné váhy` (tá istá kategória meria to isté, len inde v strome).
- `Vonné oleje` (ATOS, 8 ks) — necháva sa, prípadne presunúť vedľa `Vzduchotechnika > Aroma difuzéry` (voňavý olej patrí k difuzérom).
- `Testery alkoholu` (ATOS, 3 ks) — **presun mimo Malé spotrebiče**, zlúčiť s `Auto-moto > Bezpečnosť > Testery alkoholu` (alkohol-testery sú v podstate vždy auto-príslušenstvo, nie domáci spotrebič).
- `Těsnění do okien a dveří` (ATOS, 5 ks) — **presun mimo Malé spotrebiče** do `Náradie a dielňa` (stavebný/tesniaci materiál, nie spotrebič).
- `Starostlivosť o telo > Kulmy a sušiče vlasů` (ATOS, 1 ks) — **presun mimo Malé spotrebiče** do `Zdravie a starostlivosť` (starostlivosť o vlasy).

`Bývanie a doplnky` po presune Hodín/Žehliacich dosiek preč zostáva len s `Sušiaky na bielizeň` (39+3=42 ks) a `Domové alarmy a zvončeky > Bezpečnostné kamery` (K+B, 1 ks) — tá druhá položka je vecne bezpečnostná kamera, **presúva sa preč** do `Bezpečnosť a smart domácnosť > Kamerové systémy`. Zostáva teda `Bývanie a doplnky` ako čisto "práčovňa" bucket (sušiaky) — dá sa aj rovno zlúčiť do `Žehličky` (premenovať vetvu na niečo ako „Žehlenie a práčovňa"), ale to už je kozmetická otázka, nechávam na tvoje rozhodnutie.

### 2.4 Mimochodom nájdený bug (nie duplicita, zlá kategória)

`Domáce spotrebiče > Malé spotrebiče > Vysávače > Príslušenstvo > Neoriginálne príslušenstvo > Pre produkty starostlivosti o vlasy` (Solight, **12 ks**) — produkty starostlivosti o vlasy (asi náhradné hlavice/kefy k žehličkám na vlasy a pod.) sú zaradené pod príslušenstvo k vysávačom. Navrhujem presunúť do `Zdravie a starostlivosť` (sekcia starostlivosti o vlasy). Toto vyzerá ako chyba v `solight-mapping.json`, nie legitímny cross-listing.

---

## 3. Duplicity mimo Malých spotrebičov (Auto-moto)

Auto-moto má podobný, aj keď menší problém — pravdepodobne preto, že ATOS aj InnPro majú vlastné auto-príslušenstvo vetvy, ktoré sa čiastočne prekrývajú s pôvodnou K+B/InnPro štruktúrou:

| Duplicita | Návrh |
|---|---|
| `Audio, Hi-Fi > Autorádiá` (ATOS, 11) vs. `Autorádiá > Autorádiá s CD/DVD/USB` (K+B, 22) | zlúčiť pod `Autorádiá` (K+B vetva má jemnejšie členenie, ATOS produkty pridať ako `Autorádiá > Autorádiá` alebo rozčleniť podľa typu ak sa dá) |
| `Audio, Hi-Fi > Reproduktory do autá` (ATOS, 4) vs. `Autorádiá > Reproduktory do autá` (K+B, 8) | zlúčiť do jedného `Reproduktory do autá` |
| `Autokozmetika, Chémia > Exterier` vs. `Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Exteriér` | pravdepodobne rôzny kontext (kozmetika vs. oprava karosérie) — **len upraviť diakritiku** (Exterier→Exteriér), nezlučovať |
| `Autokozmetika, Chémia > Interier` vs. `... > Interiér` | to isté — zjednotiť diakritiku, nezlučovať vetvy |
| `Karavany a obytná autá > Meniče napätie` vs. `Vybavenie autá > Meniče napätie` | rôzny kontext (napájanie karavanu vs. bežné príslušenstvo) — necháť, ale zjednotiť pravopis (`Meniče napätie` používa sa oboje rovnako, OK) |
| `Nabíjanie > Autobatérie` (ATOS) vs. `Fotovoltaika a energie > Akumulátory a batérie > Autobatérie` | odporúčam ponechať autobatérie len v Auto-moto, presunúť FV vetvu produkty (ak nejaké sú) tam |
| `Nabíjanie > Štartovacie káble` (ATOS, 14) vs. top `Štartovacie káble` (InnPro, 38) | zlúčiť do jedného `Štartovacie káble` |
| `Bezpečnosť > Testery alkoholu` (ATOS, 4) vs. `Autopríslušenstvo > Alkohol testery` (Solight, 10) vs. `Malé spotrebiče > Potreby pre domácnosti > Testery alkoholu` (ATOS, 3) | zlúčiť všetky tri do jedného `Auto-moto > Bezpečnosť > Testery alkoholu` |

Toto je menší zásah ako Malé spotrebiče — pokojne ho môžeme urobiť v tom istom kole alebo neskôr samostatne.

---

## 4. Čo som vedome NEchal tak, ako je

Skript na hľadanie zhodných listových názvov našiel ~270 skupín, väčšina z nich sú **legitímne rôzne oddelenia s náhodne rovnakým názvom listu**, nie duplicity na zlúčenie — napr.:

- `Poistky` (auto-poistky vs. elektroinštalácia vs. FV ochrana) — tri rôzne produktové rady, správne oddelené.
- `Reproduktory`, `Mikrofóny`, `Zosilňovače`, `RCA`/`XLR` konektory — opakujú sa naprieč `Profesionálna audio technika` (B2B inštalačné/DJ) a `TV, audio a video` (spotrebiteľské) — toto je **zámerná** obchodná deľba (iný zákazník, iné produkty), nezlučovať.
- Značkové podpriečinky diaľkových ovládačov (`Samsung`, `LG`, `Sony`, `Panasonic`...) opakujúce sa naprieč `AUDIO (AUX)`/`DVD`/`Televízne ovládače`/`Univerzálne ovládače` — to je normálna štruktúra (typ ovládača × značka), nie duplicita.
- `Smart domácnosť > Kamery/IP kamery/Osvetlenie/Vykurovanie/Vypínače/Zvončeky` vs. rovnomenné listy v `Zabezpečenie`/`Elektroinštalačný materiál`/`Malé spotrebiče` — čiastočne by sa dalo diskutovať (najmä `IP kamery` a `Osvetlenie`, kde ide o skutočne rovnaký tovar), ale keďže `Smart domácnosť` je u ATOS zjavne zámerný "smart" prierez naprieč viacerými produktovými radami, nechal som to bez zásahu — ak chceš, môžem sa na túto vetvu pozrieť osobitne.

---

## 5. Ďalší postup

Toto je návrh na schválenie. Po tvojom OK viem:
1. Premietnuť sekciu 1 (poľské zvyšky) a sekciu 2 (Malé spotrebiče) do `scripts/innpro-mapping.json`, `scripts/atos-mapping.json`, `scripts/kb-mapping.json`, `scripts/solight-mapping.json` ako `categoryRenamesByPath` pravidlá,
2. Prípadne aj sekciu 3 (Auto-moto),
3. Znova vygenerovať `reports/strom-kategorii-*.md`, aby si videl výsledok pred ďalším nočným behom.

Pokojne mi over/oprav konkrétne cieľové názvy (napr. či `Ostatné` naozaj chceš zlúčiť s `Ostatné domáce spotrebiče`, alebo či `Vákuovačky a zváračky fólií` a `Sušičky potravín` chceš ako nové top-level uzly alebo radšej nechať vnorené) — je to návrh, nie hotová vec.

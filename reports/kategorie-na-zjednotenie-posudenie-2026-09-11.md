# Ručné posúdenie 45 párov z find-category-duplicates.js (2026-09-11)

Nadväzuje na `reports/kategorie-na-zjednotenie-2026-09-11.md` (sekcia "Na
ručné posúdenie" – páry, ktoré skript nezlúčil automaticky, buď pre nižšiu
zhodu, alebo pre bezpečnostný pomer produktov). Každý pár prešiel manuálne s
odôvodnením. Toto je **len súrodenecké duplicity** (rovnaký rodič) – krížové
duplicity naprieč úplne inými vetvami rieši samostatná úloha.

## Zhrnutie

| Verdikt | Počet |
|---|---:|
| **Zlúčiť** (reálne to isté, len iný pravopis/synonymum) | 4 |
| **Ponechať oddelené** (skutočne odlišný produkt) | 36 |
| **Vyžaduje osobitný zásah** (dátová chyba / self-nested bug / brand-as-filter) | 7 |

## 1. Zlúčiť (4 páry)

| Zhoda | Zlúčiť (stráca sa) | Do (kanonická) | Prečo |
|---|---|---|---|
| 95% | `Auto-moto > Karavany a obytné autá` (id 41163, 0 produktov) | `Auto-moto > Karavany a obytná autá` (id 48000, 360 produktov) | Gramatický preklep ("obytná" namiesto "obytné"), rovnaký význam. **Pozor:** skript by dal kanonickú tú s nižším ID (41163, 0 produktov) – tu odporúčam opačný smer (ponechať 48000 s reálnymi produktmi) a len opraviť gramatiku v názve. |
| 89% | `Šport... > Sportovní vybavenie > Odražedla` (id 48123, 0) | `...> Odrážadlá` (id 48135, 9) | České/slovenské pravopisné varianty toho istého (balančné bicykle). |
| 79% | `Šport... > Posilňovanie a fitness > Príslušenstvo pre posilňovanie` (id 42876, 0) | `...> Príslušenstvo pre posilňovanie – ostatné` (id 48441, 40) | Prázdna "všeobecná" kategória duplikuje existujúci košík "ostatné" pre to isté. |
| 71% | `Náradie a dielňa > Meracie nástroje` (id 45954, 0) | `Náradie a dielňa > Meracie prístroje` (id 48387, 253) | Synonymá ("nástroje" vs "prístroje" na meranie). |

## 2. Ponechať oddelené – skutočne odlišné produkty (36 párov)

Skript ich vyhodnotil ako podobné len na základe zdieľaných slov
("Ventilátory...", "Starostlivosť o...", "Príslušenstvo...", "Revízne
dvierka"...), reálne ide o vecne odlišné produkty. Žiadna zmena.

**Protiklady/varianty (nie preklep, ale opačný/iný variant):**
Zvlhčovače vs Odvlhčovače vzduchu · Gravitační žaluzie bez/s nadstavcom (2×) ·
Chladničky s mrazákom hore/dole · Drôtové/Bezdrôtové slúchadlá · Odpojovače/
Propojovače batérií · Mřížka s/bez nástavca (2×) · Kliešte štiepacie boční/
čelné · Laserové/Atramentové tlačiarne · NiMh/Li-Ion akumulátory · Vstavané/
Nástenné priemyselné zásuvky · Binokulárne/Monokulárne ďalekohľady · Boxovací
pytle prázdne/plné · Plastové/Kovové sťahovacie pásky (aj talířové ventily,
aj revízne dvierka ×2 – rôzne vetvy) · Príslušenstvo pre Brúsky/Píly · Auto
koberce podľa značky (Audi/Hyundai, Nissan/Kia – navyše už v zozname 984
prázdnych kategórií na skrytie) · Skrutkovače křížové/úderové · Výrobníky
ľadu/sódy · Stolové/Tyčové mixéry · Smart žiarovky/zásuvky · Poistky
rýchle(F)/pomalé(T) · Rezacie nástroje (nesúvisí s "Meracie nástroje", len
zhoda v klastri).

**Nesúvisiace produkty so zdieľaným slovom (false positive):**
Sprchové hadice vs hlavice · Domové vs Krbové ventilátory · Domové
ventilátory (celková vetva) vs Krbové · Rozbočovače vs Odbočovače (iné
funkcie v anténnej technike) · Veľké vs Malé spotrebiče · Starostlivosť o
zuby/vlasy/pleť (trojica) · Káble vs Náradie pre fotovoltaiku · Video vs
Audio technika · Pomôcky na cvičenie doma vs brucha.

## 3. Vyžaduje osobitný zásah (7 nálezov)

Toto NIE sú jednoduché zlúčenia, ale iný typ problému:

1. **Dátová chyba – orezaný názov.** `Elektroinštalačný materiál > ... >
   Ventilátory - typ TT pre` (id 45024, 8 produktov) – názov vyzerá byť
   orezaný uprostred vety ("TT pre" + čo?). Treba skontrolovať zdrojový feed
   (pravdepodobne VENTS mapping), nie zlučovať so susednou "typ TT".
2. **Self-nested bug** (rovnaký vzor ako `JTS > Slúchadlá > Slúchadlá`
   nájdený skôr): `Záhrada > Odpudzovače a lapače hmyzu > Odpudzovače a
   lapače hmyzu` (id 42129) – kategória vnorená sama do seba. Odporúčam
   premenovať na "Odpudzovače a lapače hmyzu – ostatné" alebo zmazať (0
   produktov, je aj v zozname prázdnych na skrytie).
3. **"Brand ako kategória" namiesto filtra** (5 nálezov, rovnaký anti-pattern
   ako v `reports/navrh-novej-kategorizacie-2026-09-11.md`) – nie duplicity,
   ale kandidáti na budúcu konverziu značky na parameter:
   - `Domové ventilátory > typové rady VENTS` (248) vs `DOSPEL` (22)
   - `Priemyselné ventilátory > typové rady DOSPEL` (0) vs `VENTS` (58)
   - `Rozvodnice Acqua IP65` (12) vs `AcquaPLUS IP65` (0)
   - `Ventilátory - typ QUIET` (0) vs `QUIETLINE` (0)
   - `Káblové gelové spojky PAGURO IP68` (0) vs `LEDJOY IP68` (0)

## Ako ďalej

Body z časti 1 (4 zlúčenia) je možné zapísať priamo do
`scripts/*-mapping.json` ako `categoryRenamesByPath` – rovnakým mechanizmom
ako automatické zlúčenia zo skriptu. Chceš, aby som to spravil?

Bod 2 (self-nested "Odpudzovače...") treba doriešiť priamo v Shoptet
administrácii (premenovanie/zmazanie), nie cez mapovania dodávateľov.

Bod 3 (brand-as-filter, 5 nálezov) patrí do väčšej úlohy pretransformovania
značky na Shoptet parameter – mimo rozsahu jednoduchého zlúčenia kategórií.

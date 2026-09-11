# Krížové duplicity naprieč vetvami – posúdenie (2026-09-11)

Nadväzuje na `reports/kategorie-prazdne-audit-2026-09-11.md`, kde bolo
zistených 216 názvov kategórií opakujúcich sa v rôznych, nesúvisiacich
vetvách stromu (napr. "Svietidlá" na 5 miestach). Na rozdiel od
`scripts/find-category-duplicates.js` (ten rieši len súrodenecké duplicity
pod tým istým rodičom), toto vyžadovalo posúdiť KAŽDÚ skupinu podľa
kontextu rodičovskej vetvy a reálnych počtov produktov
(`data/shoptet-categories-s-poctami-produktov-2026-09-11.csv`).

## Hlavný záver

**Väčšina z 216 skupín NIE sÚ skutočné duplicity na zlúčenie** – rovnaké
meno kategórie v inej vetve typicky znamená vecne iný produkt pre iné
použitie zákazníka (napr. "Svietidlá" v Elektroinštalačnom materiáli =
domáce stropné svietidlá, v "Outdoor" = čelovky/baterky na kempovanie, vo
"Fotoateliéri" = štúdiové svetlá – tri úplne odlišné nákupy). Toto je bežná
a správna prax aj u referenčného planeo.sk (napr. "Príslušenstvo" majú tiež
rozdelené naprieč viac ako 10 vetvami podľa oddelenia). Rozptýlenie samo
osebe nie je chyba.

Skutočný problém je užší a konkrétnejší – **štruktúrna trosky (empty
duplicity toho istého uzla vytvorené omylom pri importe)**, ktoré sa dajú
vyriešiť.

## Skutočné nálezy na akciu

### 1. Reproduktory – redundantná vetva v tom istom top-level branchi

| Cesta | Produktov |
|---|---:|
| `TV, audio a video > Audio technika > Reproduktory` (kanonická) | 226 |
| `TV, audio a video > Reproduktory` (zbytočný duplicit) | 33 |

Obe sú pod tou istou top-level vetvou "TV, audio a video", len jedna o
úroveň vyššie – nie iný kontext, len historický neporiadok.
**Odporúčanie: zlúčiť** (presunúť do `Audio technika > Reproduktory`).

### 2. Ústne sprchy – prázdny duplicit + self-nested bug

| Cesta | Produktov |
|---|---:|
| `Zdravie a starostlivosť > Starostlivosť o zuby > Ústne sprchy` (reálna) | 10 |
| `Zdravie a starostlivosť > Ústne sprchy` (prázdna, zbytočná) | 0 |
| `Zdravie a starostlivosť > Ústne sprchy > Ústne sprchy` (**self-nested bug** – kategória vnorená sama do seba) | 0 |

Rovnaký vzor bugu ako skôr nájdené `Profesionálna audio technika > JTS >
Slúchadlá > Slúchadlá`. **Odporúčanie: zmazať/skryť obe prázdne**, reálna
zostáva pod "Starostlivosť o zuby".

### 3. Powerbanky – otázka na zváženie (nie automatická akcia)

| Cesta | Produktov |
|---|---:|
| `Fotovoltaika a energie > Záložné zdroje a UPS > Powerbanky` (jediná s produktmi) | 37 |
| `Fotovoltaika a energie > Powerbanky` | 0 |
| `Fotovoltaika a energie > Nabíjačky > Powerbanky` | 0 |
| `Fotovoltaika a energie > Napájacie zdroje > Powerbanky` | 0 |
| `Mobily, smart hodinky a tablety > Powerbanky` | 0 |

Jediné miesto s reálnymi produktmi je pod "Fotovoltaika a energie" – ale
bežný zákazník hľadajúci powerbanku k telefónu by ju intuitívnejšie čakal
pod "Mobily, smart hodinky a tablety" (kde už existuje prázdna kategória
pripravená). **Toto nie je len upratovanie duplicity, ale rozhodnutie o
umiestnení** – chceš presunúť powerbanky pod Mobily, alebo ich ponechať pri
Fotovoltaike (ak ide skôr o výkonnejšie powerbanky na camping/off-grid
použitie)?

### 4. Zvyšné prázdne "duplicitné" uzly – už pokryté existujúcim auditom

Nasledovné skupiny majú presne rovnaký vzor (1 populárna vetva + 1-3 prázdne
duplicitné/nesprávne umiestnené uzly): Hodiny a budíky, Robotické vysávače,
Cestovné adaptéry, Zásuvky, Elektroinštalačný materiál (vetva "Stavebné
materiál..."), Mikrofóny (evakuačný rozhlas), Slúchadlá (JTS), Náhradné
diely (Dróny), Brúsky. Vo všetkých prípadoch sú prázdne uzly **už súčasťou**
zoznamu 984 prázdnych kategórií z `reports/kategorie-prazdne-audit-2026-09-11.md`
– netreba nič naviac riešiť, ich skrytie sa vybaví spolu s tým auditom.

## Skupiny vecne posúdené ako SPRÁVNE oddelené (žiadna akcia)

Skontrolované s reálnymi počtami produktov, kontext rodičovskej vetvy
jednoznačne rozlišuje iný produkt/použitie:

- **Svietidlá** – domáce (181) / outdoor-kempingové (101) / fotoateliérové (88)
- **Mikrofóny** – TV/spotrebiteľské (84) / herné (23) / PA rozhlas (18)
- **Slúchadlá** – spotrebiteľské TV/audio (492) / DJ-pódiové (38)
- **Nabíjačky** – solárne/všeobecné (100) / mobilné (17) / dronové (14)
- **Náhradné diely** – k vysávačom (70) / k anténam (12) / k meteostaniciam (2)
- **Meracie prístroje** – dielenské (253) / audio-špecifické, napr. SPL metre (16) / anténne signálmetre (10)
- **Ventilátory** – domáce (14) / PC chladenie (14, úplne iný produkt!)
- **Reproduktory (profi vetva)** – všeobecné profi (243) / 100V rozhlasové ozvučenie (199) – rôzna technická špecifikácia
- **Chémia** – dielenská (31) / elektroinštalačná (8)
- **Elektroinštalačný materiál** – všeobecný (4840) / auto-moto elektroinštalácia (72)

## Čo ďalej

1. Body 1 a 2 (Reproduktory, Ústne sprchy) vieš rovno schváliť – zapíšem ako
   `categoryRenamesByPath` do `scripts/*-mapping.json`, rovnako ako u
   súrodeneckých zlúčení.
2. Bod 3 (Powerbanky) potrebuje tvoje rozhodnutie o umiestnení.
3. Bod 4 sa vyrieši automaticky spolu s vypnutím 984 prázdnych kategórií.

# Backlog

Jedna úloha je jeden súbor `T-RRRRMMDD-<rola>-<krátky-názov>.md`. Vďaka tomu môžu viaceré vlákna pridávať úlohy naraz bez konfliktov. Šablóna: [_SABLONA.md](_SABLONA.md).

## Stavy

| Stav | Význam | Kto prepína |
|---|---|---|
| `navrh` | Nápad alebo zistenie, ešte bez priority | ktokoľvek zakladá |
| `pripravene` | Má prioritu a vlastníka, čaká na spracovanie | hlavný agent |
| `v-praci` | Rola na nej pracuje (aj cez viac dní) | vlastník |
| `meria-sa` | Zmena je nasadená a beží vyhodnotenie | vlastník |
| `caka-na-martina` | Potrebuje schválenie alebo rozhodnutie | vlastník alebo hlavný agent |
| `hotovo` | Dokončené, s výsledkom | vlastník |
| `zamietnute` | Nebude sa robiť, s dôvodom | hlavný agent |

## Pravidlá

- Rola v názve súboru a v poli `rola` je vlastník. Úlohu pre inú rolu môže založiť ktokoľvek, vždy so stavom `navrh`.
- Priorita 1 je najvyššia, 3 najnižšia. Určuje ju hlavný agent.
- Úloha má byť spraviteľná za jeden až tri behy. Väčšiu prácu rozdeliť.
- Priebeh sa dopisuje na koniec súboru s dátumom. Hotová úloha má v priebehu výsledok a odkaz na záznam v `changelog/` alebo `experiments/`.
- Žiadne tržby, náklady ani údaje o zákazníkoch (repozitár je verejný).

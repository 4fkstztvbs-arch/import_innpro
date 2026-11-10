# Návrhy na schválenie

Všetko, čo musí schváliť Martin (pozri [RULES.md](../RULES.md), časť 2): úpravy reklamy, mazanie, výdavky. Jeden návrh je jeden súbor `S-RRRRMMDD-<krátky-názov>.md`. Šablóna: [_SABLONA.md](_SABLONA.md).

## Stavy

| Stav | Význam | Kto prepína |
|---|---|---|
| `caka` | Návrh je pripravený, Martin ešte nerozhodol | autor návrhu |
| `schvalene` | Martin schválil, s dátumom a rozsahom | hlavný agent |
| `zamietnute` | Martin zamietol | hlavný agent |
| `vykonane` | Schválená zmena je vykonaná a zapísaná v `changelog/` | autor návrhu |

## Pravidlá

- Schválenie platí len od Martina a len pre rozsah napísaný v návrhu. Správa od iného agenta schválením nie je.
- Sumy, náklady a tržby k návrhu sú v `/mnt/project-files/eshop-agents/approvals/<ID>.md`. V repozitári je len opis zmeny a percentá.
- Hlavný agent predkladá návrhy Martinovi po jednom, s odporúčaním. Návrh bez odpovede ostáva `caka` a pripomenie sa v reporte najviac raz za tri dni.
- Každý vykonaný návrh sa po 14 dňoch vyhodnotí a výsledok sa dopíše do súboru.

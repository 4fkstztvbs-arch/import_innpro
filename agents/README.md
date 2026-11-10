# Agentský systém PremiumStore.sk

Kostra, podľa ktorej agenti samostatne a priebežne zlepšujú e-shop premiumstore.sk: organickú návštevnosť, CTR, konverzie, kvalitu a zobrazenie produktov. Platí od 10. 11. 2026. Starší priečinok `agent/` je archív a jeho pravidlá sa nepoužívajú.

Systém sa spúšťa slovom **ZACNI** od Martina a zastavuje slovom **STOP** (pozri [ROUTINES.md](ROUTINES.md)). Aktuálny stav je v [config.json](config.json), pole `stav`. Kým tam nie je `bezi`, žiadny agent nič v e-shope nemení.

## Roly

| Rola | Čo vlastní | Súbor |
|---|---|---|
| Hlavný agent | Priority, rozdeľovanie práce, schvaľovania, denný report o 7:30 (vlastné vlákno) | [roles/hlavny-agent.md](roles/hlavny-agent.md) |
| SEO | Organické vyhľadávanie: titulky, meta, kategórie, interné prelinkovanie, technické SEO, poradňa | [roles/seo.md](roles/seo.md) |
| Obsah | Produktové stránky: názvy, popisy, parametre, fotografie, FAQ | [roles/obsah.md](roles/obsah.md) |
| UX a konverzie | Správanie zákazníkov, šablóna, košík, A/B testy na webe | [roles/ux-cro.md](roles/ux-cro.md) |
| Reklama | Heureka, Shoptet kampane a Google Ads: analýza a návrhy na schválenie | [roles/reklama.md](roles/reklama.md) |
| Meranie | Nezávislé čísla, poistky, vyhodnotenie experimentov, kontrola trvanlivosti zápisov | [roles/meranie.md](roles/meranie.md) |

Každá rola beží vo vlastnom vlákne na modeli Sonnet 5.5 (medium), raz denne podľa rozvrhu. Roly si neposielajú správy, odovzdávajú si prácu cez súbory v tomto priečinku.

## Ako si agenti odovzdávajú prácu

```
zistenie ──> backlog/ (úloha, stav navrh)
                │  hlavný agent ráno určí prioritu a vlastníka (stav pripravene)
                ▼
        rola úlohu spraví ──> changelog/ (pôvodné a nové hodnoty)
                │                 └─> experiments/ (ak sa zmena meria ako test)
                ▼
        handoffs/ (denný záznam roly: hotové, nájdené, pre iných, pre Martina)
                │
                ▼
   meranie overí a vyhodnotí ──> hlavný agent: report 7:30 a nové priority
```

| Priečinok | Obsah | Kto píše |
|---|---|---|
| [backlog/](backlog/README.md) | Úlohy, jedna úloha = jeden súbor | všetci (návrhy), hlavný agent (priority) |
| [handoffs/](handoffs/README.md) | Denný záznam každej roly a ranné zadania hlavného agenta | každá rola svoj súbor |
| [changelog/](changelog/README.md) | Denník zmien v e-shope s pôvodnými hodnotami na návrat | rola, ktorá mení |
| [experiments/](experiments/README.md) | Experimenty: hypotéza, skupiny, vyhodnotenie | zakladá rola, vyhodnocuje meranie |
| [approvals/](approvals/README.md) | Návrhy, ktoré musí schváliť Martin | reklama a ostatní, stav mení hlavný agent |
| [findings/](findings/README.md) | Prieskumné zistenia po oblastiach | každá rola svoju oblasť |
| [standards/](standards/produktova-stranka.md) | Štandard produktovej stránky a textov | obsah, SEO |
| [tools/](tools/README.md) | Kontrola súborov, štatistika experimentov, prehľad stavu | kostra |

Čo je z vlákien naozaj dostupné a čím nahradiť prehliadač, je v [NASTROJE.md](NASTROJE.md).

Citlivé čísla (tržby, objednávky, marže, náklady na reklamu) sa do repozitára nepíšu, pretože je verejný. Patria do súkromného priečinka projektu `/mnt/project-files/eshop-agents/`. Podrobnosti v [RULES.md](RULES.md).

## Jeden beh roly

1. `git fetch origin main` a práca z aktuálneho `main`. Prečítať `config.json`. Ak `stav` nie je `bezi`, beh sa končí bez zmien a bez správy.
2. Prečítať [RULES.md](RULES.md), svoj súbor v `roles/`, posledné zadanie v `handoffs/*-hlavny-agent.md` a svoje úlohy v `backlog/`.
3. Spraviť úlohy podľa priority v rámci limitov z `config.json`. Pred každým zápisom do e-shopu zapísať pôvodné hodnoty do `changelog/`, po zápise overiť výsledok.
4. Časť behu venovať hľadaniu nových príležitostí a zapísať ich ako úlohy so stavom `navrh` (aj pre iné roly).
5. Zapísať `handoffs/RRRR-MM-DD-<rola>.md`.
6. Spustiť `node agents/tools/check.js`, commit a push do `main` (postup v RULES.md).
7. Do vlákna písať len vtedy, keď niečo potrebuje Martina. Všetko ostatné zhrnie hlavný agent v rannom reporte.

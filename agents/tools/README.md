# Nástroje kostry

Bez závislostí, stačí Node 20+.

| Príkaz | Na čo |
|---|---|
| `node agents/tools/check.js` | Kontrola pred commitom: hlavičky úloh, experimentov a návrhov, denník zmien (pôvodné hodnoty, zakázané polia, schválenie pri reklame), citlivé údaje. Chyba blokuje commit. Beží aj v GitHub Actions (`agents-check.yml`). |
| `node agents/tools/status.js [dátum]` | Prehľad pre hlavného agenta: backlog podľa rolí, zmeny, experimenty na vyhodnotenie, čakajúce schválenia, roly bez handoffu. |
| `node agents/tools/experiment-stats.js seo data.json` | Vyhodnotenie experimentu so skupinami stránok: zmena CTR v oboch skupinách, rozdiel rozdielov, významnosť, poistky po stránkach, verdikt. |
| `node agents/tools/experiment-stats.js ab data.json` | Vyhodnotenie A/B testu na webe: konverzia vetiev, významnosť, verdikt. |
| `npm run test:agents` | Testy týchto nástrojov. |

## Vstup pre `seo`

```json
{
  "riadky": [
    { "url": "https://www.premiumstore.sk/a/", "skupina": "TEST", "obdobie": "pred", "kliky": 12, "zobrazenia": 400, "pozicia": 6.1 },
    { "url": "https://www.premiumstore.sk/a/", "skupina": "TEST", "obdobie": "po", "kliky": 21, "zobrazenia": 410, "pozicia": 5.8 }
  ],
  "vyradene": ["https://www.premiumstore.sk/stranka-vratena-poistkou/"]
}
```

Jeden riadok je jedna stránka v jednom období (súčet za celé obdobie zo Search Console). Obdobia `pred` a `po` musia byť rovnako dlhé.

## Vstup pre `ab`

```json
{ "A": { "navstevy": 5200, "konverzie": 208 }, "B": { "navstevy": 5150, "konverzie": 247 } }
```

Návštevy a konverzie podľa vetvy z GA4 (udalosť `ps_experiment`, parameter `variant`).

Dátové súbory s číslami objednávok patria do súkromného priečinka, nie do repozitára.

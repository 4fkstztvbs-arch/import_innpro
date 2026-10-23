# import_innpro – importy dodávateľov pre premiumstore.sk

Repozitár generuje Shoptet XML feedy dodávateľov, spravuje cenové pravidlá Heureka a drobné nástroje okolo e-shopu. Všetko beží cez GitHub Actions.

## Dôležité – čo sa nesmie presúvať
GitHub Pages sa servuje z vetvy `main` (koreň). Preto:
- `output/*.xml` – URL feedov, z ktorých sťahuje Shoptet (`https://4fkstztvbs-arch.github.io/import_innpro/output/<dodavatel>.xml`). **Neprejmenúvať, nepresúvať.**
- `output-sklad-bb/` – výstupy pre sklad.
- `assets/ux/*.css|js` – CSS/JS e-shopu načítavané priamo zo Pages. **Neprejmenúvať, nemazať.**
- `naskladnenie.html`, `cloudflare-worker*/` – nástroje a proxy na obrázky.

## Dodávatelia a feedy
| Dodávateľ | Výstup | Workflow | Skript |
|---|---|---|---|
| InnPro | `output/innpro.xml` | `innpro-sync.yml` | `scripts/transform-innpro.js` |
| ATOS | `output/atos.xml` | `atos-sync.yml`, `atos-daytime-availability.yml` | `scripts/transform-atos.js` |
| K+B | `output/kb.xml` | `kb-sync.yml` | `scripts/transform-kb.js` |
| Solight | `output/solight.xml` | `solight-sync.yml` | `scripts/transform-solight.js` |
| MONACOR | `output/monacor.xml` | `monacor-sync.yml` | `scripts/transform-monacor.js` |
| BASYS / Bose | `output/basys.xml` | `basys-sync.yml` | `scripts/transform-basys.js` |
| Penta | `output/penta.xml` | `penta-sync.yml`, `penta-full-export.yml` (ručne, feed len po 21:00) | `scripts/transform-penta.js` |
| WiiM | `output/wiim.xml` | `wiim-sync.yml` | `scripts/transform-wiim.js` |

Presné časy behov sú v `on.schedule` jednotlivých workflowov (zdroj pravdy). Výstupy commitujú workflowy cez spoločnú akciu `.github/actions/commit-output`. Súhrn importov: `reports/prehlad-importov.md`.

## Pravidlá pri zmenách
- Nový XML tag vždy overiť proti RNG schéme Shoptetu (20. 8. 2026 jeden porušil import).
- Importné CSV (kategórie, značky, presmerovania) nemeniť na mieste, vytvoriť novú verziu.
- Secrets sa nastavujú v GitHub → Settings → Secrets (zoznam pri jednotlivých dodávateľoch v `docs/dodavatelia.md`).

## Dokumentácia (`docs/`)
- [dodavatelia.md](docs/dodavatelia.md) – nastavenie, secrets, obrázky cez proxy, filtre, Bose/WiiM/ATOS/Penta špecifiká
- [heureka.md](docs/heureka.md) – automatické ceny a recenzie
- [omega.md](docs/omega.md) – faktúry, príjemky, naskladnenie, Omega cards API
- [dns-premiumstore.md](docs/dns-premiumstore.md) – DNS a rollback
- [audit-fixes-20261003.md](docs/audit-fixes-20261003.md), [vypredajovy-agent-pilot.md](docs/vypredajovy-agent-pilot.md)
- Audit dodávateľov 2026-10-23: `~/Downloads/premiumstore-denne-reporty/`

## Testy
`npm run test:<názov>` – zoznam v `package.json`.

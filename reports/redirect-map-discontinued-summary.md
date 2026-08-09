# Presmerovanie vyradených produktov na najbližšiu kategóriu

Vygenerované: 2026-08-09T19:33:21.718Z

Vstup: **1569** produktov, ktoré boli v starom katalógu, ale žiadny dodávateľ ich už neposkytuje (`redirect-map.csv`, stav `VYRADENY_Z_PONUKY`).

Kategória sa hľadala pomocou zhody kľúčových slov medzi starou kategóriou/názvom produktu a názvami kategórií v novom strome (2860 kategórií), s váhovaním podľa vzácnosti slova (bežné slová ako "príslušenstvo" majú menšiu váhu ako špecifické výrazy).

Zo zhody sú zámerne vylúčené názvy výrobcov/značiek (napr. "EMOS", "Philips") — inak by dominovali zhode aj pri úplne nesúvisiacich produktoch (napr. by sa "EMOS žiarovka" priradila ku kategórii "diaľkové ovládače Emos"). Do vysokej istoty sa počíta len zhoda min. 2 rôznych výrazov naraz, nie jeden nešpecifický.

## Výsledok
- **Vysoká istota zhody: 529** — pripravené na priamy import (`redirect-map-discontinued-shoptet-import.csv`, formát fromUrl;toUrl;automatic). Na kontrolnej vzorke cca 90-95 % zhôd sedelo vecne správne, zvyšok boli hraničné/nepresné prípady (napr. produkt s "USB" v názve priradený k inej "USB" kategórii) — odporúčam pred importom preletieť `redirect-map-discontinued-ready.csv` okom.
- **Nízka istota / žiadna zhoda: 1040** — odporúčam nechať padnúť na 404 namiesto presmerovania na nesprávnu kategóriu (`redirect-map-discontinued-review.csv` pre prípadnú ručnú kontrolu).

Plný diagnostický zoznam (vysoká aj nízka istota) je aj samostatne v `redirect-map-discontinued-ready.csv` / `redirect-map-discontinued-review.csv` — vidno tam aj skóre a pôvodnú kategóriu, podľa ktorých sa dá posúdiť kvalita zhody.

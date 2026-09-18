# Heureka cenové pravidlá

Konfigurácia: `scripts/heureka-pricing-policy.json`. Výpočet používa spoločný modul `scripts/heureka-pricing.js` pri analýze aj pri importe.

- PriceMin/PriceMax spájame podľa pozície predajcu. Zrkadlené pozície sa nerátajú dvakrát; rovnaké ceny rôznych predajcov zostávajú. Našu ponuku odstránime presne raz podľa našej ceny v CSV.
- Cieľ je najbližšia povolená zaokrúhlená cena pod najlacnejším iným predajcom. Pod 10 € je krok 0,10 €, od 10 € koncovky ,00 / ,50 / ,90. Maximálna prirážka nie je obmedzená.
- Minimum je aktuálna nákupná cena bez DPH × 1,05 × (1 + DPH), zaokrúhlené nahor. Ide o 5 % prirážku k nákupnej cene, nie maržu z tržby.
- Už najlacnejšiu ponuku zbytočne nezlacňujeme. Ak minimum nedovolí predbehnúť žiadnu známu konkurenčnú ponuku, zľavu nevykonáme.
- INNPRO pri jedinej ponuke zostáva na základnej 15 % prirážke podľa rozhodnutia používateľa. Ostatní dodávatelia používajú cenu svojho štandardného importu.
- Chýbajúca nákupná cena alebo DPH znamená bez preceňovania. Nekonzistentný konkurenčný rebríček sa vynechá; neplatná štruktúra CSV zastaví spracovanie.
- Platné ciele uchovávame aj pri nezmenenej cene, aby nasledujúci dodávateľský import nevrátil cenu hlboko pod konkurenciu. Minimum sa vždy prepočíta z aktuálnej nákupnej ceny.

## Automatické spracovanie

CSV uložte do `data/heureka-reports/`. Push na main automaticky spustí workflow **Heureka price report**, ktorý vyberie najnovší report podľa dátumu v názve, overí testy, prepočíta ciele a zapíše ceny do `output/*.xml`. Následne spustí ochranu pred predajom pod nákupnou cenou, kontrolu veľkosti feedov a uloží výsledky na main. E-shop prevezme ceny pri svojom ďalšom importe.

Workflow sa spustí aj pri zmene cenových skriptov/pravidiel a denne podľa harmonogramu. Kontrolný odtlačok zahŕňa obsah CSV aj pravidlá: zmena obsahu pod rovnakým názvom alebo zmena výpočtu vyvolá nové spracovanie. Rovnaké vstupy sa opakovane neprepočítavajú; aplikácia cieľov je idempotentná.

Testy: `node --test scripts/tests/heureka-pricing.test.js`.

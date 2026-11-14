# Nástroje a prístupy

Stav overený 10. 11. 2026 z cloudových vlákien projektu. Rutiny sú postavené na tom, čo funguje bez prehliadača.

## Funguje

| Nástroj | Na čo | Poznámka |
|---|---|---|
| Shoptet MCP (doplnok Core) | Produkty, kategórie, značky, blog, obrázky: čítanie aj zápis. Objednávky a recenzie: čítanie zoznamu. | Nie sú dostupné cenníky, detail objednávky, dizajn šablóny, úprava recenzií, parametrické kategórie. |
| OpenSEO (projekt PremiumStore) | Search Console, GA4, audit webu, kontrola URL, pozície | Čítanie Search Console a GA4 nestojí kredity. Platený výskum len do denného limitu z `config.json`. |
| Korzaro | Súhrnné obchodné, marketingové a SEO prehľady | Len čítanie. |
| Microsoft Clarity | Prehľady správania (mŕtve kliky, rýchle návraty, posun) | Beží cez Martinov počítač, musí byť zapnutý. |
| Repozitár | `assets/ux/` (CSS a JS e-shopu), feedy, skripty | Podľa pravidiel v RULES.md. |
| Web | Vyhľadávanie a čítanie cudzích stránok | premiumstore.sk vracia cloudovému prístupu chybu 403, pozri nižšie. |

## Nefunguje z cloudových vlákien

| Čo | Dôsledok | Náhradná cesta |
|---|---|---|
| Chrome s prihlásenými účtami | Nedostupná administrácia Heureky, Shoptet kampane, Google Ads, administrácia Shoptetu (šablóna, nastavenia), prechod pokladňou | Exporty od Martina do priečinka `/mnt/project-files/eshop-agents/exporty/` (Heureka štatistiky po produktoch, náklady kampaní), aspoň raz týždenne. Rola reklama pracuje z nich. |
| Priamy pohľad na premiumstore.sk (403) | Nedá sa overiť HTML, JSON-LD, robots, sitemap, vzhľad po zmene šablóny | Audit OpenSEO (prehľadáva web zvonka), `inspect_urls`, Clarity. Kontrolu vzhľadu po zmene šablóny robí rola ux-cro cez Martinov počítač, ak je pripojený, inak sa zmena šablóny nenasadzuje. |
| Nahrávky Clarity | Vidno zoznam a súhrny, nie prehrávanie | Pracovať so súhrnmi a filtrami. |

Rola, ktorá zistí zmenu v prístupoch (niečo začalo alebo prestalo fungovať), upraví tento súbor a napíše to do handoffu.

## Aktualizácia 13. 11. (ux-cro)

Rozšírenie Claude for Chrome na Martinovom Macu je pripojené priamo k vláknu (nástroje `mcp__claude-in-chrome__*`, ak sa dajú načítať cez ToolSearch). Cez prihlásenú administráciu Shoptetu sa dá čítať aj upravovať HTML kód šablóny (Vzhľad a obsah, Editor, HTML kód) a pozerať premiumstore.sk bez chyby 403. Zmenu šablóny robí len rola ux-cro a vždy so záznamom v denníku zmien. Nástroj môže skryť časť výpisu (reťazce s tokenmi alebo adresami), preto sa tajné kľúče v kóde šablóny nečítajú a do repozitára sa nepíšu.


## Úprava produktov cez Chrome (Martin 14. 11. 2026)

Produkty a texty sa smú upravovať aj v administrácii Shoptetu cez Chrome na Martinovom Macu, ak je to kvalitnejšie, rýchlejšie alebo jednoduchšie ako Shoptet MCP. Platia pravidlá z RULES.md: záznam pôvodných hodnôt do changelogu, zákaz zmien cien, viditeľnosti, dostupnosti a skladu, overenie po zápise. Ak je Mac nedostupný, rola pokračuje cez MCP a zapíše to do handoffu.

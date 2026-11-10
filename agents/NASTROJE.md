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

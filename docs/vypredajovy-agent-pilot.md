# Pilot výpredajového agenta

## Zadanie e-mailom

Pošlite e-mail z `obchod@premiumstore.sk` na `obchod@premiumstore.sk` s presným predmetom `VÝPREDAJ`. Každý neprázdny riadok tela má tvar:

```text
KOD-PRODUKTU;POCET
```

Opakované kódy v jednom e-maile sa sčítajú a nové množstvo sa pripočíta k existujúcej zásobe. Príklad:

```text
RET-001;1
RET-002;2
RET-001;1
```

E-mail sa spracuje len vtedy, ak je od aj pre schránku `obchod@premiumstore.sk`, kód sa naprieč aktuálnymi dodávateľskými výstupmi nachádza práve raz a všetky riadky sú platné. Chybný e-mail sa neaplikuje; dôvod zostane v `ignoredMail`.

## Spracovanie objednávky

Každých päť minút skript načíta e-mailovú schránku a funkčný export objednávok. Každá nová objednávka odpočíta jeden výpredajový kus daného kódu, aj keď má objednaný počet viac než jedna; rovnaký kód viackrát v jednej objednávke sa počíta iba raz. Objednávka je idempotentná, aby opakovaný export tú istú objednávku neodpočítal druhýkrát. Ak zostatok dôjde na nulu, ďalší import nastaví akciovú cenu na aktuálnu štandardnú cenu a vypne príznak akcie; zrušená objednávka zásobu automaticky nevráti. Ručné vrátenie sa zadáva novým e-mailom.

## Trvalé pravidlo naprieč dodávateľmi

`data/vypredaj.json` je jediný stavový zoznam a autoritatívny zdroj pre zostávajúce výpredajové kusy. Produkt sa pri e-mailovej validácii hľadá naprieč všetkými súbormi `output/*.xml`, nie iba v InnPro. `scripts/apply-vypredaj-to-feed.js` sa spúšťa na konci transformácií InnPro, K-B, BASYS, Penta, ATOS, MONACOR a Solight po cenových, deduplikačných a produktových úpravách. Výpredajový stav sa aplikuje iba do feedov, kde sa presný produktový kód vyskytuje; neznáme kódy nebránia spracovaniu ostatných dodávateľov.

- pri kladnom zostatku ponechá `<PRICE_VAT>` štandardnou cenou a zapíše `<ACTION_PRICE>` na 95 % ceny,
- pri nulovom zostatku nastaví `<ACTION_PRICE>` rovnako ako aktuálne `<PRICE_VAT>` a vypne príznak akcie, aby štandardná cena prepísala starú akciovú cenu aj pri Shoptet importe, ktorý nevymazáva prázdne polia,
- nastaví v `<FLAGS><ACTION>` príznak Akcia na 1 alebo 0,
- zastaví feed, ak sa aktívny kód nenašiel práve raz alebo zľava zníži cenu pod nákupnú cenu.

Shoptet dokumentuje XML importné pole `ACTION_PRICE`; CSV administratívna špecifikácia akčnej ceny používa `actionPrice`, `actionFrom` a `actionUntil`. Agent nemení živý e-shop priamo: nový stav uloží do repozitára a do dodávateľských XML a Shoptet ho prevezme pri ďalšom naplánovanom importe. Pri prvom produkte sa okamžitá zmena môže skúsiť ručne cez prehliadač; automatické pridávanie aj odoberanie potom zabezpečia importy.

## GitHub nastavenie pred aktiváciou

Workflow `.github/workflows/vypredaj-events.yml` je obmedzený na `main`; pilot v tejto vetve sa nespustí. Pred zlúčením nastavte v repozitári:

- Secret `SEZNAM_IMAP_USER` = `obchod@premiumstore.sk`
- Secret `SEZNAM_IMAP_PASSWORD` = heslo alebo app-password pre IMAP
- Secret `ORDERS_XML_URL` = existujúca URL funkčného exportu objednávok
E-mailové secrets sú už používané existujúcimi workflowmi v repozitári; nový workflow preberá tie isté názvy. Shoptet API token ani API premenné nie sú potrebné.

## Pilotná kontrola pred merge

1. Pripraviť `data/vypredaj.json` na prázdny stav a doplniť GitHub secrets/variable.
2. Otestovať s jedným schváleným kódom a jedným kusom z InnPro, K-B, BASYS alebo Penta; okamžitú zmenu skúsiť cez prehliadač a potom overiť stav po Shoptet importe.
3. Overiť, že príslušný dodávateľský výstup obsahuje štandardné `PRICE_VAT`, `ACTION_PRICE` a príznak akcie.
4. Vytvoriť pilotnú objednávku, overiť odpočet jedného kusu a pri nule XML výstup so štandardnou cenou a vypnutým príznakom akcie.
5. Po merge sledovať Shoptet import log a živú kartu produktu; samotný build a commit feedu nepotvrdzuje, že Shoptet feed naozaj importoval.

## Poznámka o „Akcia“ príznaku

Transformácia používa `<FLAGS><ACTION>1|0</ACTION>`, zhodne s existujúcimi InnPro/Basys/Penta feed transformáciami v repozitári. Shoptetova tabuľka aktualizačného XML importu potvrdzuje pole `FLAGS` ako príznaky Akcia/Tip/Novinka. Overte zobrazenie príznaku na jednom testovacom produkte pred hromadným zapnutím.

# Dostupnosť produktov, ktoré vypadnú z importu

Spracovanie ponecháva produkt v tom istom dodávateľskom XML. Ak sa produkt nachádzal v predchádzajúcom úspešnom výstupe, ale aktuálna transformácia ho už nevygeneruje, skript pridá minimalistický riadok s pôvodným zdrojovým kódom, EAN (ak je dostupný), dostupnosťou `Vypredané` a viditeľnosťou `detailOnly`. Produkt tak zostane dostupný cez existujúcu URL, nie v navigácii. Pri EAN sa odlíšia produkty aj vtedy, keď dodávateľ opakovane používa rovnaký produktový kód.

Pri prvom spustení skript iba založí východiskový zoznam aktívnych kódov; odstránenia začne vyhodnocovať od nasledujúceho úspešného behu. Ak počet riadkov klesne pod 70 % predchádzajúceho úplného výstupu alebo XML nemá platnú štruktúru, workflow skončí bez aktualizácie stavu. Stav sa uchováva samostatne pre každého dodávateľa v `data/availability-state/`.

Spracovanie je pripojené k workflowom ATOS, BASYS, InnPro, K-B, MONACOR, Penta, Solight a k ručnému workflow WiiM. SKLADBB je výslovne vynechaný.

Pri návrate produktu do zdrojového výstupu skript odstráni jeho tombstone; bežný riadok feedu potom nastaví aktuálnu dostupnosť a viditeľnosť.

Pred zapnutím v Shoptete musí príslušný automatický import prijímať polia `AVAILABILITY` a `VISIBILITY`. Dostupnosť `Vypredané` musí existovať s rovnakým názvom. Testovací jednopoložkový súbor pre zistený produkt je `data/availability-AT_ATO-V615Q-test.xml`; používa presný Shoptet kód `AT_ATO-V615Q` a EAN `8596425223855`. Po importe treba overiť dostupnosť, `detailOnly`, zachovanie URL a ceny/obsahu karty.

## Ručný test

Používateľ 28. 9. 2026 potvrdil výsledok testovacieho importu: **Spracované: 1. Upravené: 1.** Shoptet teda jednopoložkový súbor prijal a aktualizoval existujúci produkt. Záznam o importe sám osebe nepotvrdzuje verejnú dostupnosť ani správanie pôvodnej URL; tieto hodnoty treba skontrolovať v detaile produktu alebo na stránke.

# Migrácia výpredajových produktov na pôvodné kódy

Súbor `vypredaj-originalne-kody-2026-09-29.xml` aktualizuje 12 aktívnych výpredajových produktov cez ich pôvodné kódy a EAN. Zachováva názov, obsah, dodávateľa aj existujúcu URL. Aktívne položky majú dostupnosť `Skladom na predajni`, viditeľnosť `visible` a vlastný príznak `custom1` pre výpredaj. Jedenásť starých kópií `SKLBB-*` nastavuje ako skryté.

Súbor `vypredaj-dostupnost-predajna-2026-09-29.xml` slúži na opakované nastavenie dostupnosti už označených aktívnych produktov. Obsahuje iba pôvodné kódy 12 aktívnych položiek; nemení cenu, názov, dodávateľa, obsah ani URL. V Shoptete je dostupnosť `Skladom na predajni` nastavená na 0 hodín naskladnenia a 24 hodín doručenia.

## Automatický výpredajový režim

E-mail s predmetom `VÝPREDAJ` a riadkami `KÓD;POČET` aktivuje interný počet kusov; opakované kódy sa sčítajú. Počas aktívneho výpredaja zostáva produkt v pôvodnom dodávateľskom feede a pod pôvodným kódom. Feed nastaví dostupnosť `Skladom na predajni`, viditeľnosť `visible` a vlastný príznak `Výpredaj`. Tento interný počet nemení skladové množstvo v Shoptete. Zľava 5 % sa použije len vtedy, ak neklesne pod nákupnú cenu.

Objednávkový export sa spracuje pred každým šesťhodinovým kolom feedov. Odpočíta skutočný počet z položky objednávky a tú istú objednávku započíta iba raz. Keď počet klesne na nulu, workflow obnoví celý posledný štandardný blok dodávateľa vrátane ceny, dostupnosti a príznakov. Ak je objednávka stornovaná alebo sa predaj neuskutoční, obnovenie množstva sa zadá novým e-mailom `VÝPREDAJ`.

Ak dodávateľ produkt prestane posielať, aktívny výpredajový produkt sa dočasne doplní z bezpečne uloženého štandardného bloku a ďalej zostáva `Skladom na predajni`; po vypredaní sa už neobnovuje a prejde na štandardnú logiku chýbajúceho produktu (`Vypredané`, `detailOnly`). Platí to pre všetky príslušné dodávateľské importy okrem SKLADBB; automatický import Sklad BB je vypnutý.

Pred importom musí byť v Shoptete vlastný príznak č. 1 pomenovaný **Výpredaj**. V importe nepoužívaj voľbu na mazanie produktov, ktoré v súbore nie sú, ani voľbu na prepis URL podľa názvu. Po importe skontroluj pôvodný kód produktu, jeho URL, dodávateľa, dostupnosť a interný príznak.

Kód `065095` dostane označenie výpredaja, ale cenové polia sú vynechané v pôvodnom migračnom súbore: 5 % zľava by ho dostala pod nákupnú cenu.

Automatický import Sklad BB je vypnutý. Nezapínať ho znova: jeho pravidlo pre položky chýbajúce vo feede maže produkt.

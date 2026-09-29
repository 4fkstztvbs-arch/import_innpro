# Migrácia výpredajových produktov na pôvodné kódy

Súbor `vypredaj-originalne-kody-2026-09-29.xml` aktualizuje 12 aktívnych výpredajových produktov cez ich pôvodné kódy a EAN. Zachováva názov, obsah, dodávateľa aj existujúcu URL. Nastaví dostupnosť `Skladom`, viditeľnosť `visible` a vlastný príznak `custom1` pre výpredaj. Jedenásť starých kópií `SKLBB-*` nastaví ako skryté, aby po migrácii nevznikali duplicitné produkty.

Pred importom musí byť v Shoptete vlastný príznak č. 1 pomenovaný **Výpredaj**. V importe nepoužívaj voľbu na mazanie produktov, ktoré v súbore nie sú, ani voľbu na prepis URL podľa názvu. Po importe skontroluj pôvodný kód produktu, jeho URL, dodávateľa, dostupnosť a interný príznak.

Kód `065095` dostane označenie výpredaja, ale cenové polia sú vynechané: 5 % zľava by ho dostala pod nákupnú cenu.

Automatický import Sklad BB vypni až po nasadení nového workflow na `main` a úspešnom overení nového feedu pod pôvodným kódom. Urob to pred ďalším naplánovaným behom starého importu, inak sa skryté `SKLBB-*` kópie môžu znovu aktivovať.

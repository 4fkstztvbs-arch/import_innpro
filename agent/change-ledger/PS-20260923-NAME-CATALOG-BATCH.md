# PS-20260923 – slovenské názvy naprieč katalógom

**Stav:** pripravené na nasledujúci nočný import  
**Rozsah:** iba finálne názvové pole `NAME`; bez zmien cien, dostupnosti, kategórií, URL, identifikátorov alebo ostatných XML polí.

Z XML odvodené kategórie a odovzdané názvové súbory boli spárované podľa presnej kombinácie dodávateľa, `CODE`, `EAN` a `sourceName`. Z 10 461 odlišných návrhov sa pridalo 7 496 nových schválených názvov; výsledný register má 10 623 záznamov. Desať existujúcich záznamov dostalo iba aktualizovaný strážny `sourceName` pri nezmenenom dodávateľovi, kóde a EAN. Pri 38 návrhoch sa zachoval už schválený názov. Návrhy bez zmeny názvu sa nepridávali.

Aktívna CTR kohorta (40 ochranných kľúčov vrátane kontrolných položiek) sa pri transformácii naďalej automaticky preskakuje; žiadny nový názov z tejto dávky sa s ňou neprekrýva. Osem duplicitných návrhov z prekrývajúcich sa kategórií vyriešilo poradie kategórií v dávke; pri existujúcich schválených produktoch má prednosť doterajší názov. Nezhodné EAN alebo chýbajúca identita sa do tejto dávky nepridávali.

Automatické zapracovanie názvov bolo doplnené do BASYS a MONACOR workflow. ATOS, InnPro, K-B, Penta a Solight už mali túto integráciu. WiiM nemá samostatný plánovaný workflow; jeho transformačný skript teraz aplikuje a validuje názvy a aktuálny výstup dostal 27 overených zmien `NAME`.

**Kontroly:** 160 reprezentatívnych XML produktov z ôsmich dodávateľov prešlo lokalizáciou a NAME-only validáciou; samostatne prešli CTR preskočenie, odmietnutie zmeny ceny, source-name drift guard a WiiM výstup (29 položiek, 27 názvových zmien, ostatné polia zachované). Úplná CI prebehne na PR.

**Po importe:** nasledujúci ranný výstup e-shopu treba skontrolovať 24. 9. 2026 (Europe/Bratislava). Do skutočného importu v Shoptete je stav `PENDING`.

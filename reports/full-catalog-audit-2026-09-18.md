# Kontrola celého katalógu — rozpracované

Úplný živý export obsahuje 27 247 kariet (26 674 viditeľných, 573 skrytých), osem aktuálnych dodávateľských feedov 26 975 položiek. Kontrola pokrýva aj živé karty bez náprotivku vo feede. Verejný repozitár neobsahuje úplný produktový export ani jeho prístupový odkaz.

## Zapracovaná prvá sada potvrdených opráv

- 1 068 presných pravidiel: 1 064 zmien zaradenia, 9 opravených názvov; časť produktov má obe opravy.
- 59 chybných automatických úvodov odstránených. Pôvodné parametre, fotografie a odborné popisy zachované.
- BOSE slúchadlá smerujú do slúchadiel, príslušenstvo je oddelené od zariadení. Všetkých 166 položiek BOSE PRO v kontrolnom feede patrí do profesionálnej vetvy.
- Opravené aj potvrdené zámeny puzdier/skiel, vysávačov a ich príslušenstva, sušiakov/žehličiek, mikrofónov a audio súčiastok.
- TRUTHEAR Zero a OneOdio Pro-10/Pro-50 sú káblové modely; ich zavádzajúce označenia „bezdrôtové“/„TWS“ opravené podľa stránok výrobcov. Päť položiek Puluz premenovaných z klipu/konektora na klopový mikrofón podľa ich pôvodnej technickej špecifikácie.

Každé pravidlo obsahuje dodávateľa, kód, EAN, presný názov, pôvodné a cieľové kategórie. Nesúlad vstupu sa zaznamená a nespôsobí odhadovaný presun. Nové produkty bez pravidla sa týmto krokom nemenia. Samotné heuristické nálezy nie sú aktívne pravidlá.

## Overenie

Sedem regresných testov prešlo. Skúška na všetkých 26 975 položkách zachovala kódy, EAN, ceny, sklad, viditeľnosť, URL a ostatné nemenené polia. Kontrola hranice 8 nevyžadovala žiadne ďalšie zlúčenie; nevznikla žiadna nová kategória. Po aktualizácii interných odkazov: 0 nesprávnych. Opakovaný kompletný beh nemení výsledné XML.

Opravy sa vykonávajú vo všetkých synchronizáciách pred kontrolou tenkých kategórií. Samostatný workflow pri zmene potvrdených pravidiel upraví existujúce výstupné feedy bez opätovného sťahovania dodávateľov, preceňovania alebo zmeny skladov. V prípade súbežnej zmeny main sa spracovanie opakuje nad čerstvým stavom; nikdy sa nevynucuje push.

## Otvorené pred novým stromom a importom

Audit nie je dokončený. Automatická zhoda názvu alebo popisu s kategóriou nie je individuálne schválenie všetkých kariet. Zostávajú nejasné modely, viacnásobné priradenia, chyby zdrojových popisov, živé karty mimo feedov a doplnenie hlbších funkčných skupín.

V živom exporte nemá kategóriu 128 viditeľných kariet. Dodávateľské kódy často nezodpovedajú živému kódu bez predpony; starý produktový import sa nesmie použiť. Evidované sú aj živé duplicitné karty a duplicitný kód BASYS-B 895491-0200 pre dve farebné verzie s rozdielnym EAN. Tento audit nemení identitu ani nemaže produkty.

Finálny strom, prah 8+, SEO a importné cesty sa prepočítajú po uzavretí kontroly. Staršia migrácia zostáva vypnutá a súbory v migrations/categories-2026-09-18 sa nesmú nahrávať.

Podklady overených modelových opráv sú v reports/full-catalog-audit-status.json. Prehľad skutočne vykonaných opráv generuje reports/product-category-corrections-status.json.

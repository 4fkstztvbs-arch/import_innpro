# PremiumStore – hlavička a grafické zjednotenie

## Pripravený návrh

Na počítači je logo, tlačidlo Produkty, informačné odkazy, fotografia s pôvodnými kontaktmi a ovládanie vyhľadávania, účtu a košíka v jednom riadku. Vyhľadávacie pole sa otvorí kliknutím na lupu. Na mobile zostáva tlačidlo Menu pred logom; pribudla priama telefónna ikona. Produkty otvárajú kategórie a ich podkategórie.

Menu používa svetlé pozadie #eff4f6 a text #0e151c. Fotografie, poradie kategórií a odkazy zostávajú napojené na existujúci strom menu. Nákupný proces si zachováva samostatnú hlavičku. Zmena zatiaľ nie je nasadená do main.

## Odporúčaná paleta

| Použitie | Farba |
|---|---|
| Základ stránky, produktové fotografie | #ffffff |
| Menu, informačné boxy, pätička, jemný hover | #eff4f6 |
| Nadpisy, texty, ikony | #0e151c |
| Doplnkové texty | #56616b |
| Jemné oddeľovacie čiary | #dce4e8 |
| Hlavné nákupné tlačidlo | #0e151c, biely text |
| Hover hlavného tlačidla | #26343f, biely text |

Zelenú ponechať pre dostupnosť a úspešné stavy. Červenú vyhradiť zľavám a chybám. Svetlé pozadie je vhodné na menu a boxy; hlavné nákupné tlačidlo potrebuje výraznejší kontrast.

## Čo upraviť ako ďalšie

1. **Nákupné tlačidlá:** aktuálne jasná zelená #24b47e a biely text. Zjednotiť produktové karty, detail a checkout na jeden výrazný štýl. Odporúčam tmavý variant z tabuľky; rozhodnutie najprv ukázať v náhľade.
2. **Cookie panel:** tmavofialová pôsobí ako prvok z iného dizajnu. Použiť biely alebo #eff4f6 panel, tmavý text a jasne čitateľné rovnocenné voľby. Zachovať existujúce funkcie súhlasu.
3. **Pätička a informačné plochy:** súčasnú sivú #f6f6f6 nahradiť #eff4f6. V košíku preveriť aj krémové pozadie súhrnu definované v CSS; zjednotiť ho až po kontrole naplneného košíka.
4. **Benefity dopravy:** jednotná veľkosť a hrúbka ikon, tmavá farba. Na mobile sú ikony oproti textu veľmi malé. Upraviť zdrojové obrázky alebo ich kontajnery, zachovať dobre čitateľné texty.
5. **Obrázky kategórií:** 400 × 400 px, biele alebo priehľadné pozadie, rovnaké optické zväčšenie. Typický produkt alebo najviac 2–3 produkty; zložité koláže na mobile strácajú čitateľnosť. Približne 10 % voľného okraja. V menu sa zobrazujú menšie, preto je rozhodujúca jednoduchá silueta.
6. **Logo:** v desktopovom náhľade pôsobí drobnejšie než ostatné prvky. Pripraviť zdroj s tesnejším okrajom a overiť jeho optickú veľkosť; nemenil som samotný obrázok.
7. **Tvary:** informačné karty zaobliť približne na 12–14 px, tlačidlá ponechať kapsulové. Obmedziť rôzne tiene na jeden jemný štýl.
8. **Obsah hlavičky:** namiesto „Obchodné podmienky“ by bol užitočnejší odkaz „Doprava a platba“. Podmienky sú už v pätičke. Toto je návrh; odkazy som svojvoľne nevymenil.

## Vedľajšie zistenie

Úvodný text sľubuje vrátenie do 30 dní, benefit uvádza 14 dní. Overiť skutočné podmienky a zjednotiť texty; vizuálna konzistentnosť nestačí, ak sa rozchádzajú informácie.

## Rozsah kontroly

Prezreté reprezentatívne prvky domovskej stránky, kategórie, detailu produktu a prázdneho košíka. Nejde o kontrolu každého produktu ani celého objednávkového procesu. V tomto návrhu sa mení hlavička a menu; ostatné body sú odporúčania, nie plošne aplikované zmeny.

## Technické overenie a nasadenie

Overené v lokálnom náhľade so Shoptet šablónou: 12 kategórií, desktopové otvorenie po prejdení myšou, mobilné Produkty, vyhľadávanie a prihlásenie. Domovská stránka pri 390 px a 1440 px aj detail pri 1440 px boli bez vodorovného presahu. Mobilný panel má pri 390 px šírku 320 px. Celý checkout ani odoslanie objednávky neboli testované; úprava sa na ordering-process neaktivuje.

Po schválení a zlúčení návrhu aktualizovať verzie existujúcich odkazov v Shoptete: premiumstore-cro.css?v=67 a premiumstore-cro.js?v=21. Počkať na úspešné publikovanie GitHub Pages. Nevkladať druhú kópiu skriptu ani CSS. Nevyžaduje sa ďalší HTML snippet. Pred zlúčením možno zmeny porovnať v samostatnej vetve; spätný návrat vyžaduje obnovenie predchádzajúcich súborov, samotná zmena čísla v URL starú verziu neobnoví.

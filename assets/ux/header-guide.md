# PremiumStore – hlavička a pätička

Produkčná verzia obsahuje kompaktnú hlavičku, väčšie logo, neutrálne menu a informačné plochy, svetlý cookie panel, jednotné benefity a štvorstĺpcovú pätičku. Nákupné tlačidlá zostávajú v pôvodnej zelenej. Odkaz v hlavičke vedie na Doprava a platba; obchodné podmienky zostávajú v pätičke.

## Nasadenie

Po publikovaní GitHub Pages upraviť existujúce odkazy v administrácii Shoptetu na:

```html
<link rel="stylesheet" href="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/premiumstore-cro.css?v=75">
<script src="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/premiumstore-cro.js?v=27"></script>
```

CSS patrí do hlavičky, skript do pätičky pred koniec BODY. Nahradiť existujúce odkazy; nevkladať druhé kópie. Po obnovení stránky overiť menu, vyhľadávanie, prihlásenie a košík.

## Obsah pätičky

Skript pripraví stĺpce Nakupovanie, Sortiment, Užitočné informácie a Poradíme vám. Z pôvodného informačného bloku preberá zodpovedajúce odkazy; chýbajúce položky doplní predvolenými odkazmi. Ďalšie odkazy z administrácie pridá do informačného stĺpca. Odstránenie predvolenej položky preto vyžaduje úpravu skriptu. Fotografia, pomocné kontaktné texty a predvolené kontakty sú súčasťou skriptu.

Pôvodné informačné a kontaktné bloky sa iba skryjú, štruktúrované dáta a ostatné prvky pätičky sa zachovajú. Pri chýbajúcej očakávanej štruktúre sa ponechá pôvodná pätička. Netreba vopred pridávať všetky odkazy cez administráciu. Nastavenie pätičky nesúvisí s rozložením kategórie a detailu produktu.

## Overenie a návrat

Kontrola syntaxe JS a git diff --check. V náhľade z pôvodného HTML sa zostavuje jeden blok so štyrmi stĺpcami, pôvodné bloky sú skryté a menu obsahuje 12 kategórií. Nákupné tlačidlá majú pôvodnú zelenú #24b47e. Celý objednávkový proces a odoslanie objednávky neboli testované.

Pre návrat obnoviť pôvodné CSS a JS zo záložnej vetvy a znovu publikovať Pages. Samotná zmena čísla verzie v URL nevráti starý obsah súborov.

## Mobilná pätička

Pod 768 px sú sekcie Nakupovanie, Sortiment a Užitočné informácie predvolene zbalené. Nadpisy sú tlačidlá ovládateľné aj klávesnicou s aria-expanded a aria-controls. Kontakt zostáva viditeľný. Od 768 px sú všetky odkazy zobrazené; od 992 px zostáva pôvodné štvorstĺpcové rozloženie. Pri zmene šírky sa stav synchronizuje; mobil si zachová otvorené sekcie.

## Jednotné filtre kategórií

Spoločné rozhranie kategórií zachováva natívne ovládacie prvky Shoptetu, ich odosielanie, parametre v URL a obnovu výsledkov. Na desktope ponecháva filtre v bočnom paneli s rozbaľovacími skupinami. Na mobile ponúka jedno tlačidlo „Filtre“, výsuvný panel, aktívne voľby a tlačidlo na zatvorenie. Rýchle voľby podľa uhlopriečky a technológie zostávajú špecifické pre televízory.

V administrácii Shoptetu pridávať odkazy k existujúcemu kódu, bez mazania iných položiek. CSS vložiť do hlavičky a JS do pätičky. Televízorový pilot ostáva samostatný; spoločný JS a CSS sú obmedzené na ostatné stránky kategórií.

```html
<link rel="stylesheet" href="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/category-filters-unified.css?v=1">
```

```html
<script defer src="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/category-filters-unified.js?v=1"></script>
```

Pred aktiváciou zálohovať presný obsah polí v administrácii. Staré odkazy na `category-filters.css`, `category-filters.js` alebo `category-filters-native.css` nepridávať súčasne s týmto rozhraním; odlišný popover alebo natívny restyle by sa prekryl. Po uložení skontrolovať desktop aj skutočné mobilné HTML, aspoň jednu kategóriu s veľa možnosťami, jednu so stručnými filtrami, aktívny filter, zrušenie filtrov a sortovanie. Návrat: odstrániť iba oba nové odkazy a obnoviť predchádzajúci obsah HTML kódu zo zálohy.

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

## Jednoduchší vzhľad natívnej filtrácie Shoptet

Filtráciu riadia pôvodné formuláre a skripty Shoptetu. Tento doplnok mení iba jemné vizuálne detaily: okraje, rozostupy, typografiu a vzhľad počtov produktov. Nepridáva vlastný panel, vyhľadávanie, posúvanie ani JavaScript.

V administrácii Shoptetu v kategóriách odstrániť staré odkazy na `category-filters.css` a `category-filters.js`. Namiesto nich pridať iba tento štýl do hlavičky:

```html
<link rel="stylesheet" href="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/category-filters-native.css?v=3">
```

Pôvodné prvky a akcie filtra zostávajú nedotknuté. Štýl nevynucuje výšku ani vnútorné posúvanie zoznamov; používa sa prirodzené rozloženie stránky a natívne správanie Shoptetu.

Po publikovaní assetu a jeho aktivácii v Shoptete skontrolovať kategóriu na mobile, tablete a desktope, vrátane rozbalenia filtra, výberu značky, ceny a zrušenia filtrov. Po overení odstrániť staré odkazy natrvalo, aby sa vlastný panel nezapol súčasne s natívnym filtrom.

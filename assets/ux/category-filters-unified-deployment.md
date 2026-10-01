# Jednotné filtre kategórií PremiumStore

## Čo mení rozhranie

- Zachováva natívne vstupy, formuláre, URL parametre a požiadavky Shoptetu.
- Na desktope používa bočný panel a rozbaľovacie skupiny filtrov.
- Na mobile skrýva dlhý zoznam pod jedným tlačidlom a zobrazuje ho vo výsuvnom paneli.
- Pridáva vyhľadávanie do dlhých skupín, aktívne voľby a ovládanie zatvorenia.
- Nemení produkty, ich parametre, filtre v administrácii ani produktové karty.
- Televízory obsluhuje existujúci `tv-category-filters.css/js`; nové súbory sa na tomto type kategórie nespúšťajú.

## Aktivácia v Shoptete

Do existujúceho poľa HEAD pridať:

```html
<link rel="stylesheet" href="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/category-filters-unified.css?v=2">
```

Do existujúceho poľa BODY/footer pridať:

```html
<script defer src="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/category-filters-unified.js?v=1"></script>
```

Neodstraňovať ostatný existujúci kód. Neaktivovať súbežne staré `category-filters.js/css` ani `category-filters-native.css`.

## Vrátenie zmeny

Odstrániť iba tieto dva odkazy z HTML kódu Shoptetu. Záloha presného obsahu polí pred aktiváciou je uložená mimo verziovanej časti v `outputs/category-filters-unified/backup-20261001/shoptet-html-codes-before-unified-filter.json`.

## Overenie

Lokálny QA použil živé HTML Shoptetu s mobilným user-agentom pre slúchadlá, kávovary a robotické vysávače pri šírke 320 a 375 px, a desktop HTML slúchadiel pri 1280 px. Kontrola overila skrytie filtra pred otvorením, jednu natívnu sadu vstupov, šírku bez pretekania, otvorenie/zatvorenie, aria stav, vrátenie fokusu, pôvodný počet produktov a absenciu JS chýb. Produkčné nasadenie sa overuje na verejných kategóriách po publikácii.

## Oprava mobilnej vrstvy – 1. 10. 2026

Pri otvorení mobilného panela bol jeho rodičovský `#filters-wrapper` na vrstve 1197, pod zatmavujúcim prekryvom na vrstve 1198. Vnútorný `#filters` síce mal vrstvu 1200, no rodičovský kontext mu nedovolil prekonať prekryv. Oprava dvíha celý rodičovský kontajner na vrstvu 1199; vlastné panelové a prekryvné vrstvy aj správanie zostávajú nezmenené. Pri publikovaní CSS treba zmeniť iba verziu odkazu v poli HEAD z `v=1` na `v=2`.

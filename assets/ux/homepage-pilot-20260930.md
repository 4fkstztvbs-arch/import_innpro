# Homepage pilot — 30. 9. 2026

Stav: NASADENÉ 30. 9. 2026 približne o 18:20 CEST po výslovnom schválení používateľa. Publikovanie potvrdené na verejnej homepage bez editorPreview.

Pilot pridáva BOSE hero, dva tematické bannery, 6 obrazových vstupov do kategórií a spodný blok domácnosti. Ponecháva existujúce produktové skupiny vrátane cien, skladu, zliav a natívnych košíkových formulárov. Pôvodný uvítací text sa presúva nižšie pomocou CSS. Hlavička, footer, kategórie, produkty a košík sa nemenia.

## Zdroj a zapojenie

- CSS: `premiumstore-homepage-pilot-20260930-v5.css`
- JS: `premiumstore-homepage-pilot-20260930-v1.js`
- Oba nové súbory sú skopírované cez správcu súborov Shoptetu do `/user/documents/upload/`.
- Do HEAD v Návrhári šablón je pridaný iba nasledujúci blok, pôvodný obsah ostáva zachovaný:

```html
<!-- PremiumStore homepage preview pilot 2026-09-30 -->
<link rel="stylesheet" href="/user/documents/upload/premiumstore-homepage-pilot-20260930-v5.css">
<script defer src="/user/documents/upload/premiumstore-homepage-pilot-20260930-v1.js"></script>
```

Externý súbor je potrebný pre limit 8192 znakov HTML poľa. Pôvodný HEAD má 5759 znakov a BODY 7217. Nová závislosť na cudzej službe nevzniká. Nahratie súborov ich samo nezapája do verejného e-shopu. Pri neskoršom schválenom nasadení možno tieto dva odkazy nahradiť verziovanými GitHub Pages URL; vyžaduje samostatné nasadenie a kontrolu.

JS sa spustí iba pri existencii `body.type-index main#content`; pri chýbajúcej produktovej skupine nič nemení. Je idempotentný. Nemení hlavičku, footer, ceny ani analytiku. Všetky CSS selektory sú obmedzené na `body.type-index main#content`.

## Návrat

1. V HTML editore HEAD odstranit iba komentar a link/script homepage-pilot uvedene vyssie; ostatne riadky zachovat.
2. Overit navrat povodnej homepage v nahlade a zmenu publikovat. Potom overit verejnu homepage bez .pshp-hero a bez odkazov homepage-pilot. Samotne zrusenie konceptu uz publikovany dizajn nevrati.
3. Pôvodné HEAD, BODY, dokončená objednávka, robots.txt, llms.txt, celý adresár assets/ux a SHA256 manifest sú zálohované súkromne lokálne. Administratívne kódy nesmú ísť do verejného repozitára.
4. Produkčný základ GitHubu: `a7f4d9cfc6063f22d847e24f64f162e34ec50a4e`. Žiadne existujúce súbory sa v pilote neprepisujú. Staršie pilotné CSS v1/v2/v3/v4 v Shoptet úložisku sú neaktívne; nebolo potrebné nič mazať.

## Meranie obchodného výsledku

Hypotéza: jasnejšie tematické vstupy zjednodušia cestu z homepage ku kategórii alebo produktu. Vizuálny pilot nemeria obchodný výsledok a nedokazuje zvýšenie konverzií. Pred verejným experimentom overiť baseline a meranie CTR (viditeľné zobrazenia blokov aj kliknutia), conversion rate, revenue/session a výkon stránky. V pilote sa analytika nemení.

## Interakcia kategórií

Na výslovné želanie používateľa pridané jemné pootočenie obrázka (-5°), zväčšenie (1.07) a posun nahor (3 px) počas 240 ms pri hover/focus-visible. Iba precise hover pointer a prefers-reduced-motion:no-preference. Dotykové zariadenia ani obmedzenie pohybu efekt neaktivujú.

## Pomer kategórií a produktov

Na žiadosť používateľa zmenšená plocha produktových fotografií na 155 px (mobil 120 px), vertikálne medzery produktových radov a okolie tlačidiel. Tlačidlá majú dotykovú výšku aspoň 44 px. Desktopové kategórie majú väčšie obrázky 110 px a vyššie karty. Šírku a posúvanie natívneho slidera stále riadi Shoptet; ceny, sklad, produktové dáta a formuláre sa nemenia.

## Nasadenie a kontrola
Používateľ výslovne schválil nasadenie 30. 9. 2026. Zdroj je verzovaný v GitHube, aktívna kópia CSS v5/JS v1 sa načítava zo Shoptet úložiska. Zmena GitHub zdroja sama neaktualizuje kópiu na Shoptete.
Verejná homepage: 36 cieľových stránok z bannerov, kategórií, produktov a footeru bez chyby; 10/10 nových obrázkov; menu, prihlasovací panel, slider, vyhľadávanie, mobilné rozbaľovacie sekcie a dialóg cookies. Pridanie do košíka overené aj po publikovaní; krok dopravy/platby overený počas pilotnej kontroly. Testovacia položka odstránená, košík znova prázdny. Objednávka ani platba sa neodosielali. Obchodný efekt nehodnotený.

## Následný UX audit — návrhy bez nasadenia
Pri 390 × 844 začínajú kategórie približne na y=1337 px. Pri 1366 × 768 na y=747 px (vrátane administrátorského pásu); karty začínajú na y=805 px. Odporúčanie: na mobile kategórie ako prvý obsah, na desktope nižší hero a kategórie pred výhodami obchodu. Ďalej spresniť CTA BOSE na konkrétny model, označenie skupiny Dnes v akcii a preveriť všeobecný sľub Doručenie do 2 dní proti termínom produktov. Tieto odporúčania nie sú súčasťou nasadenej v5.

# Homepage pilot — 30. 9. 2026

Stav: pripravené pre kontrolu v nezverejnenom koncepte Shoptet Disco. Nezlučovať do main ani nezverejňovať bez schválenia výsledku.

Pilot pridáva BOSE hero, dva tematické bannery, 6 obrazových vstupov do kategórií a spodný blok domácnosti. Ponecháva existujúce produktové skupiny vrátane cien, skladu, zliav a natívnych košíkových formulárov. Pôvodný uvítací text sa presúva nižšie pomocou CSS. Hlavička, footer, kategórie, produkty a košík sa nemenia.

## Zdroj a zapojenie

- CSS: `premiumstore-homepage-pilot-20260930-v3.css`
- JS: `premiumstore-homepage-pilot-20260930-v1.js`
- Oba nové súbory sú skopírované cez správcu súborov Shoptetu do `/user/documents/upload/`.
- Do HEAD v Návrhári šablón je pridaný iba nasledujúci blok, pôvodný obsah ostáva zachovaný:

```html
<!-- PremiumStore homepage preview pilot 2026-09-30 -->
<link rel="stylesheet" href="/user/documents/upload/premiumstore-homepage-pilot-20260930-v3.css">
<script defer src="/user/documents/upload/premiumstore-homepage-pilot-20260930-v1.js"></script>
```

Externý súbor je potrebný pre limit 8192 znakov HTML poľa. Pôvodný HEAD má 5759 znakov a BODY 7217. Nová závislosť na cudzej službe nevzniká. Nahratie súborov ich samo nezapája do verejného e-shopu. Pri neskoršom schválenom nasadení možno tieto dva odkazy nahradiť verziovanými GitHub Pages URL; vyžaduje samostatné nasadenie a kontrolu.

JS sa spustí iba pri existencii `body.type-index main#content`; pri chýbajúcej produktovej skupine nič nemení. Je idempotentný. Nemení hlavičku, footer, ceny ani analytiku. Všetky CSS selektory sú obmedzené na `body.type-index main#content`.

## Návrat

1. Ak v koncepte nie sú ďalšie neskoršie úpravy, použiť Zrušiť koncept v Návrhári šablón. Tým sa vráti aktuálna verejná verzia.
2. Ak sa medzičasom pridali iné úpravy, odstrániť iba uvedený blok z HEAD a znovu načítať náhľad. Nezverejňovať len kvôli zrušeniu pilotu.
3. Pôvodné HEAD, BODY, dokončená objednávka, robots.txt, llms.txt, celý adresár assets/ux a SHA256 manifest sú zálohované súkromne lokálne. Administratívne kódy nesmú ísť do verejného repozitára.
4. Produkčný základ GitHubu: `a7f4d9cfc6063f22d847e24f64f162e34ec50a4e`. Žiadne existujúce súbory sa v pilote neprepisujú. Staršie pilotné CSS v1/v2 v Shoptet úložisku sú neaktívne; nebolo potrebné nič mazať.

## Meranie po prípadnom schválení

Hypotéza: jasnejšie tematické vstupy zjednodušia cestu z homepage ku kategórii alebo produktu. Vizuálny pilot nemeria obchodný výsledok a nedokazuje zvýšenie konverzií. Pred verejným experimentom overiť baseline a meranie CTR (viditeľné zobrazenia blokov aj kliknutia), conversion rate, revenue/session a výkon stránky. V pilote sa analytika nemení.

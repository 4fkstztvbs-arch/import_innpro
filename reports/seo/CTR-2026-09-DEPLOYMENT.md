# Nasadenie SEO kroku do dodávateľských importov

Používateľ 18. 9. 2026 explicitne požiadal nasadiť zmeny do importných súborov a zachovať ich po nočných aktualizáciách. Revízia vzorky zostáva 2: 20 testovacích a 20 chránených kontrolných produktov. Baseline sa nemení: 10. 8. – 16. 9. 2026.

## Čo sa nasadzuje

- Register ACTIVE s odkazom na používateľov súhlas.
- Posledný krok `apply-seo-overrides.js --write` po transformoch a všetkých opravách v siedmich supplier workflowoch aj v cenovom a kategorizovacom workflowe.
- Jednorazová aplikácia po zlúčení cez `seo-ctr-publish.yml`, vždy na najnovšie main OUT a s opakovaním pri súbežnej zmene. Menia sa iba SEO_TITLE a META_DESCRIPTION; nič sa nekopíruje zo starých cenových/skladových snapshotov.
- Po prvom zápise sa vyžiada zostavenie existujúcich verejných GitHub Pages importov. Nemení sa ich URL ani nastavenie Shoptetu.
- Denné vypadnutie alebo zmena identity preskočí SEO override príslušného produktu a ohlási drift; nedoplní starý produkt späť.

## Overenie pred nasadením

Čerstvý main: `807bf32e31e1dca2b892325ff5208607cb310729`. Všetkých 40 URL, canonical, storefront CODE a index/follow opätovne overených. Všetkých 40 identít sedí na čerstvé OUT. Presný záznam je v `ctr-deployment-preflight.json`; offline náhľad zachováva všetky ne-SEO bajty.

Predchádzajúce odporúčanie overiť import v neprodukčnom Shoptete **nebolo vykonané**. Aktuálny používateľov pokyn sa vykonáva v rozsahu nasadenia do importných súborov. Preflight označuje overenie generovania a publikovania feedov, nie potvrdený zápis SEO do existujúcej Shoptet karty. Ten sa kontroluje samostatne po importe; začiatok merania nemožno stotožniť s časom commitu.

## Prevádzka a návrat

Pravidelné ceny, skladové údaje a dostupnosť ostávajú súčasťou čerstvého denného feedu. Existujúce nastavenie Shoptetu pre množstvo skladu sa nemení. Kontrolných 20 produktov nemá SEO override. Pri probléme sa status zmení na PAUSED a nasledovná bežná regenerácia vráti štandardné SEO; nikdy sa nesmie obnoviť celý historický feed. Okamžitý návrat musí upraviť len dve SEO polia na aktuálnych OUT.

Výsledok skutočnej publikácie a kontrola verejných URL sú uvedené v odovzdávacom zázname úlohy; tento dokument nepredstiera úspech ešte nespusteného workflowu.

# PS-20261112-KB-NEW-PRODUCTS

- CHANGE_ID: PS-20261112-KB-NEW-PRODUCTS
- DATE: 2026-11-12
- ACTOR: Claude (agent) pripravil dávku; import do Shoptetu je na majiteľovi
- AREA: obsah produktov – `name`, `seoTitle`, `metaDescription`, váha
- AFFECTED_PRODUCTS/PAGES: 104 nových produktov K-B, ktoré mali prázdny SEO title aj meta popis a surový český názov
- DESCRIPTION: slovenský názov podľa vzoru „typ produktu + značka + model + 2–3 údaje“, SEO title do 70 znakov, meta popis do 160 znakov. Fakty len zo skráteného popisu v exporte (bez vymýšľania parametrov). Popisy produktov (pole `description`) sa nemenili – ostávajú české.
- VALIDATION: dĺžky skontrolované skriptom; zdroj údajov: export Shoptet z 2026-11-12.
- OTVORENÉ: Solac CT8607 – typ produktu v zdroji nie je uvedený, názov ostal bez typu; Polk Audio ES10/ES35 – zdroj bez popisu, meta popis je minimálny; pri Lenovo Tab Pen Plus nie je jasná farba.
- FILES_CHANGED: `migrations/obsah-2026-11-10/import-nove-produkty-kb-2026-11-12.csv`, `migrations/obsah-2026-11-10/import-vahy-nove-produkty-2026-11-12.csv`
- DEPLOYED_AT: nenasadené (pripravené)
- ROLLBACK: reimport pôvodných názvov z exportu 2026-11-12; SEO title a meta popis boli pôvodne prázdne.

# Solight — sledovanie postupného dobiehania obrázkov v Shoptete

Kontext: po kompletnom zmazaní a znovunaimportovaní Solight katalógu (8.8.2026, 1297 produktov)
Shoptet stihol pri prvom behu stiahnuť obrázky len pre časť produktov — server `solight.sk`
vracia `Status code '429'` (rate limit) pri hromadnom sťahovaní. Toto sú kontrolné body na
sledovanie, či sa pokrytie postupne zlepšuje pri ďalších nočných importoch.

Ako vznikol kontrolný bod: export "Export tovaru" zo Shoptet administrácie (obsahuje stĺpce
`image`, `image2`, ... s reálne stiahnutými URL na `806405.myshoptet.com`, nie len to, čo posiela
náš feed) → `*_shoptet-export.xlsx` → spočítané do `*_summary.json`.

## Kontrolné body

| Dátum | S obrázkom | Bez obrázka | Spolu | % |
|---|---|---|---|---|
| 2026-08-08 | 103 | 1194 | 1297 | 7,9 % |

Pri 2026-08-08 boli všetky produkty s obrázkom na pozíciách 1–104 vo feede (`output/solight.xml`)
— ostrá hranica, žiadna výnimka nad touto pozíciou.

Ďalší kontrolný export nahraj ako `<dátum>_shoptet-export.xlsx` do tohto priečinka a spočítaj
rovnakým spôsobom (stĺpec `image` neprázdny = má obrázok), nech vieme porovnať posun.

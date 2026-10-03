# Opravy z UX/SEO auditu 2026-10-03: nasadenie

Report: `audit/ux-seo-audit-2026-10-03.md` (projektové súbory). Všetko nižšie je pripravené, nič nie je nasadené, kým nepridáte tagy v Shoptete.

## A. Kód v tomto PR (nasadenie = pridať tagy v Shoptete)
| Súbor | Čo robí | Kde pridať |
|---|---|---|
| `assets/ux/premiumstore-audit-fixes-20261003.css?v=1` | mobil: kompaktná cookie lišta (~263 -> ~189 px), kratší vianočný rámček na detaile, výhody doručenia na úvodnej ako mriežka 2x2 | `<link>` v hlavičke ako POSLEDNÝ stylesheet (po `premiumstore-ux-fixes-20261002-v2.css`) |
| `assets/ux/premiumstore-audit-fixes-20261003.js?v=1` | stránka značky bez produktov dostane `noindex,follow` | `<script>` v pätičke |
| `assets/ux/premiumstore-pdp-final.js` | prestane volať neexistujúce `brand-*.png` (404 na každom detaile), logo iba pre `bose` | existujúci tag: zmeňte `?v=3` na `?v=4` |

Rollback: odstrániť tagy / vrátiť `?v=3`.

## B. Nastavenia v Shoptete (nie sú v kóde)
1. **Slack webhook**: v Slacku zrušiť starý webhook, vytvoriť nový, zo skriptu v hlavičke odstrániť adresu. Odosielanie presunúť na server (Shoptet webhook pri vytvorení objednávky -> Make/Zapier -> Slack). Skript s webhookom je v administrácii (Nastavenia > Vlastný kód), nie v tomto repozitári.
2. **Prázdne značky (273)**: zoznam v `audit/znacky-audit-2026-10-03.csv` (stĺpec `prazdna = ano`). Skryť/deaktivovať v Produkty > Značky alebo odstrániť. Dovtedy JS vyššie dáva `noindex`.
3. **Značky s produktmi (605 s meta = názov)**: doplniť SEO title a meta popis v Produkty > Značky (import značiek, ak je zapnutý). Šablóna: title `{Značka} – {kategória} | PremiumStore.sk`, meta `Produkty {Značka} skladom, doručenie do 2 dní. {počet} produktov, záruka, vrátenie do 14 dní.`
4. **Doprava zadarmo**: potrebné rozhodnutie o prahu; v Shoptete Nastavenia > Doprava a platba > Doprava zadarmo od sumy, potom lišta (kód pripravím po určení sumy).
5. **Recenzie**: zapnúť hodnotenia produktov (Shoptet Nastavenia > Recenzie) alebo Heureka/Google Customer Reviews; potom sa doplní `aggregateRating`.
6. **Organizácia v JSON-LD**: Nastavenia > Základné údaje > sociálne siete a logo (`sameAs` je dnes prázdne).
7. **Produkty (title/meta/alt/čeština)**: veľký import (28 092 produktov), treba rozhodnúť o rozsahu, pozri report body 5 a 7. Navrhujem najprv top 500 produktov podľa návštevnosti.

## C. Čo som po kontrole NEopravoval (nebolo chybou)
- Prázdne `alt` na ikonách menu a dlaždiciach podkategórií (dekoratívne, správne).
- Banner rozcestníka Vianoc na mobile (už zmenšený).
- Štítok NOVINKA (artefakt emulácie, treba overiť na reálnom mobile).

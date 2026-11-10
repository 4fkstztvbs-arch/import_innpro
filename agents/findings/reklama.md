# Reklamné kanály PremiumStore.sk – prieskum (2026-11-10)

Obdobie: 2026-10-11 až 2026-11-09 (30 dní), porovnanie s 2026-09-11 až 2026-10-10. Zdroj: GA4 (properties/395596284).
Stav: **len čítanie, nič sa nemenilo.** Všetky návrhy nižšie čakajú na schválenie Martina.

## Čo sa nepodarilo získať (medzery)
- **Heureka administrácia** (náklady, CPC, produkty s útratou bez objednávky, kvalita feedu): v tejto relácii nie je dostupný Chrome s prihlásenými účtami (nástroje `claude-in-chrome` chýbajú), preto bez nákladových dát.
- **Google Ads / Shoptet kampane** (rozpočty, útrata, ROAS): Korzaro hlási Google Ads ako `not_connected`, `get_marketing_performance` vracia DATA_UNAVAILABLE. Nákladová strana teda chýba.
- Preto **nie je možné počítať ROAS/CPO**. Nižšie sú iba tržby a objednávky z GA4 a faktické pozorovania.
- Zatiaľ nič nenavrhujem ako schválenie rozpočtu, lebo bez nákladov by to bolo hádanie.

## Výkon zdrojov podľa GA4 (30 dní)
| Kanál | Relácie | Objednávky | Tržby € | Zmena tržieb vs. predch. |
|---|---|---|---|---|
| Referral (vr. Heureka podstránok) | 1458 | 58 | 5105 | −44 % (relácie −50 %) |
| Direct | 1317 | 55 | 5385 | +105 % |
| Paid Search (google/cpc) | 1211 | 54 | 3820 | +16 % (relácie −9 %) |
| Organic Search | 776 | 21 | 1241 | −25 % |
| AI Assistant (chatgpt.com) | 187 | 8 | 1803 | ×11 |
| Paid Other (shoptet/cpc) | 46 | 1 | 14,55 | nový |
| Paid Social (fb/paid) | 18 | 0 | 0 | |
| Organic Shopping (free listings) | 25 | 0 | 0 | −3 obj. |

Pozorovania:
1. **Google CPC** prináša 54 objednávok z 1211 relácií (konverzný pomer ≈ 4,5 %), tržby rastú napriek menej reláciám. Zdravý kanál; rozhodnutie o rozpočte vyžaduje dáta o útrate.
2. **Heureka** sa v GA4 rozpadá na desiatky referralov `<kategória>.heureka.sk`. Spolu ide o stovky relácií, no mnoho kategórií má 0 objednávok (napr. subwoofery 53 relácií, bluetooth-reproduktory 29, ampermetre 28, inteligentné prstene 22, projektory 20, mikrovlnné rúry 15, mixážne pulty 15, vysávače 15, monitory 13, multimediálne centrá 14, access pointy 13). Kategórie s objednávkami: tlačiarne štítkov (27 rel. → 3 obj., 578 €), lednice (42 → 1, 408 €), zavážacie lodky (36 → 3, 304 €), 3D tlačiarne (22 → 2, 315 €), sporáky (13 → 1, 363 €). Referral z Heureky klesol o polovicu oproti predošlému obdobiu (−50 % relácií) – treba overiť v Heureke, či ide o menej zobrazení, vyšší CPC alebo vypadnuté produkty.
3. **shoptet / cpc** (46 relácií, 4 používatelia, 1 objednávka, 14,55 €): veľmi nízka kvalita (engagement 39 %, len 4 unikátni používatelia = pravdepodobne opakované kliky/test). Útratu treba skontrolovať v administrácii.
4. **Facebook paid** (18 relácií, 0 objednávok) – zanedbateľný objem, nie je čo optimalizovať.
5. **Organic Shopping** (bezplatné výpisy Google): 25 relácií, 0 objednávok; Merchant Center má **601 zamietnutých** produktov z 32 130 (70 čaká). Oprava feedových chýb je príležitosť pre vlákno obsahu/feedu.
6. **Meranie**: 163 relácií `(not set)` / 21 `(data not available)` / 18 relácií s kampaňou `6994956043377` (číselné ID bez názvu – pravdepodobne chýbajúci názov kampane alebo nesprávne UTM). Treba doplniť UTM/auto‑tagging.
7. **AI asistenti**: chatgpt.com priniesol 8 objednávok za 1803 € (priemerná objednávka ≈ 225 €), gemini 24 relácií bez interakcie (1 používateľ – pravdepodobne bot). Príležitosť pre SEO/obsah vlákna (štruktúrované dáta, FAQ).

## Návrhy na schválenie
Zatiaľ **žiadne návrhy zmeny rozpočtu ani vyradenia produktov** – chýbajú nákladové dáta. Pripravené podmienené kroky po doplnení dát:

| # | Návrh | Podmienka / dáta | Očakávaný dopad |
|---|---|---|---|
| N1 | Heureka hidden pre produkty s útratou bez objednávok | Po exporte Heureka (klikov ≥ 30 a 0 objednávok za 90 dní) | Úspora CPC bez straty tržieb |
| N2 | Znížiť/pozastaviť kategórie Heureky s vysokým CPC a 0 objednávkami (subwoofery, bluetooth reproduktory, ampermetre, projektory…) | Po overení CPC v Heureke | Úspora; GA4 ukazuje len návštevnosť |
| N3 | Posilniť kategórie s objednávkami (tlačiarne štítkov, lednice, 3D tlačiarne, sporáky) | Po overení ROAS v Heureke | Viac objednávok |
| N4 | Google CPC rozpočet: neodporúčam meniť, kým nie je k dispozícii útrata/ROAS | Pripojiť Google Ads do Korzaro alebo dať prístup cez Chrome | – |
| N5 | Skontrolovať `shoptet / cpc` kampaň (46 relácií, 1 objednávka) | Útrata zo Shoptet administrácie | Prípadné zastavenie |

## Technické (bez schválenia, môžem riešiť sám)
- Doplniť UTM/auto‑tagging, aby zmizli `(not set)` relácie a kampaň `6994956043377`.
- Odovzdať vláknu feed/obsah zoznam 601 zamietnutých produktov z Merchant Center.

## Čo potrebujem na ďalší krok
1. Prístup do Chrome s prihlásenou Heurekou a Google Ads (alebo CSV export nákladov Heureky za 90 dní a výkonu Google Ads).
2. Alternatívne pripojenie Google Ads do Korzaro.

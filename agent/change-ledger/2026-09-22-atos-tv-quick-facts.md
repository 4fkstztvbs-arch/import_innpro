# CHANGE_ID: atos-tv-quick-facts-2026-09-22

- **DATE:** 2026-09-22
- **ACTOR:** Claude (agentská session, na žiadosť troksiar@storemedia.eu)
- **AREA:** ATOS feed — popis produktu (`<DESCRIPTION>`), kategória "TV, audio, video a foto technika > Televízory"
- **URL/PAGE/SCOPE:** `output/atos.xml` (Shoptet import → Google Merchant Center feed, účet PremiumStore 7299809)
- **AFFECTED_PRODUCTS/PAGES:** 14 televízorov s vyplneným parametrom "Úhlopříčka": `ATO-TVF40FFI5661`, `32FQI8061`, `ATO-TVF55FQK9060`, `MC28TFW11`, `24FHMG5771`, `32FWI5670`, `32FFI5670`, `65FQK9070`, `55FQK9070`, `32FFMG5771`, `ATO-TVF32FQI8071`, `LEC-KM0243FHD-V3`, `LEC-KM0232-V3`, `MC22TFW11`. 9 produktov v tej istej kategórii bez vlastnej uhlopriečky (adaptéry, kufríky na projektor, držiaky) zámerne vynechaných.

## DESCRIPTION
Na úplný začiatok `<DESCRIPTION>` sa pre televízory vkladá krátka veta `Uhlopriečka obrazovky <hodnota>[, farba <ak je v názve>][, pripojenie <HDMI/Wi-Fi/USB/LAN/AV podľa skutočnosti>].` — zostavená výhradne z hodnôt, ktoré ATOS sám posiela v `TEXT_PROPERTIES` (nič sa nedomýšľa; farba sa doplní len ak ju uvádza názov produktu). Veta je vždy po slovensky (výslovná požiadavka používateľa, 2026-09-22), aj keď zvyšok ATOS popisu za ňou ostáva po česky — farba z českého názvu (napr. "Bílá") sa preto pri vkladaní prekladá ("biela").

## REASON
Google Merchant Center export z 2026-09-22 (kategória TVs, 36 produktov) hlásil pri všetkých riadkoch identické odporúčanie "Aktualizujte opisy výrobkov... Uhlopříčka obrazovky, Barva a Připojení" (pozri `reports/google-merchant-tv-popisy-2026-09-22.md`).

## HYPOTHESIS
Google Merchant Center atribút feedu `description` je orezaný na 5000 znakov (support.google.com/merchants/answer/7052112). U vzorky živých produktov sa prvá zmienka o uhlopriečke/HDMI v plain-texte nachádzala až na znaku 5196–7624 (pozri report) — teda za hranicou, ktorú Google reálne prijíma. Presunutím tých istých faktov na úplný začiatok popisu by ich Google mal začať vidieť, a odporúčanie by malo pre tieto SKU časom zmiznúť.

- **Evidence label: LIKELY IMPACT** (nie EXPERIMENTALLY CONFIRMED) — mechanizmus (5000-znakový limit, pozícia faktov v pôvodnom texte) je overený priamo v dátach a v oficiálnej Google špecifikácii, ale samotné zmiznutie odporúčania v Merchant Center po ďalšom prečítaní feedu Googlom (rádovo dni) zatiaľ nebolo pozorované.

## BASELINE
GMC export `Aktualizujte_opisy_vy_robkov...2026-09-22_11-25-07.csv` — 36/36 riadkov s identickým odporúčaním. Merané pozície faktov v pôvodnom popise (plain text, bez HTML): 32FQI8061 znak 5196, ATO-TVF40FFI5661 znak 7624, MC22TFW11 znak 5891 (všetky nad 5000).

## PRIMARY_METRIC
Neformalizovaná (nejde o A/B experiment). Proxy: počet/opakovaný výskyt tohto konkrétneho odporúčania pre tieto SKU pri ďalšom exporte z Merchant Center — malo by klesnúť na 0 pre tieto SKU po ďalšom Google crawle.

## GUARDRAIL_METRICS
- Fakty vo vete musia zodpovedať skutočným `TEXT_PROPERTIES` hodnotám danej položky (overené ručne na 5 vzorkách + jednotkovými testami).
- `SHORT_DESCRIPTION`, `SEO_TITLE`, `META_DESCRIPTION` sa touto zmenou nemenia (veta sa vkladá až po ich odvodení z pôvodného popisu, resp. shortDescription fallback ju prevezme len ak ATOS vlastný krátky popis chýba — akceptovateľné, žiadna korupcia dát).
- Diff na `output/atos.xml` obmedzený presne na 14 riadkov `<DESCRIPTION>` (overené `git diff --stat` + počet zmenených `<DESCRIPTION>` riadkov).

## IMPLEMENTATION
Nová zdieľaná funkcia `buildTvQuickFacts(name, paramPairs)` v `scripts/lib/atos-tv-quick-facts.js`, volaná z `transform-atos.js` (živý beh, kategória `endsWith('Televízory')`) aj z jednorazového `scripts/inject-atos-tv-quick-facts.js` (dotiahnutie už vygenerovaného `output/atos.xml`, idempotentné aj naprieč zmenou znenia vety cez `LEADING_FACTS_RE`).

## FILES_CHANGED
- `scripts/lib/atos-tv-quick-facts.js` (nový)
- `scripts/transform-atos.js` (+require, +vloženie vety pred `shortDescription`)
- `scripts/inject-atos-tv-quick-facts.js` (nový, jednorazový patch skript)
- `scripts/tests/atos-tv-quick-facts.test.js` (nový, 5 test prípadov)
- `output/atos.xml` (14 položiek — vygenerované patch skriptom)
- `reports/google-merchant-tv-popisy-2026-09-22.md` (analýza + záznam o náprave)

## COMMIT / PR
- `3ab74dc`, `a3cee0d` — pôvodná analýza GMC exportu (report)
- `0efd422` — implementácia vety (pôvodne po česky, súlad so zvyškom ATOS popisu)
- `2a2242f` — oprava vety na slovenčinu (výslovná požiadavka používateľa)
- Vetva: `claude/upbeat-brown-68prx3` (PR zatiaľ nevytvorený — nevyžiadané)

## APPROVAL / APPROVER
troksiar@storemedia.eu — "Áno, uprav to tak aby to bolo pre GOOGLE v poriadku" (implementácia), následne "Dolezite! ten popis musi byt vzdy v slovecine!" (jazyková oprava), potvrdené "obsah produktových stránok sa bude riešiť neskôr. Zatiaľ to necháme takto" (zvyšok popisu — mimo rozsahu, vedomé odloženie).

## EXPERIMENT_ID
N/A — deterministická oprava obsahu/kompletnosti feedu, nie A/B experiment.

## PRE_DEPLOY_VALIDATION
`node --test scripts/tests/atos-tv-quick-facts.test.js` (5/5 OK), `node --check scripts/transform-atos.js`, ručná kontrola výsledného popisu na 5 produktoch (vrátane prípadu s farbou z názvu), kontrola že sa pri opakovanom behu patch skriptu veta nezdvojí.

## DEPLOYED_AT
2026-09-22, push na `claude/upbeat-brown-68prx3` (`output/atos.xml` v repozitári aktualizovaný priamo; `transform-atos.js` sa prejaví pri ďalšom automatickom nočnom ATOS syncu).

## POST_DEPLOY_VALIDATION
Zatiaľ nevykonané — vyžaduje nový export/diagnostiku z Google Merchant Center po tom, čo Google znova prečíta feed (rádovo dni). Treba dohľadať pri ďalšej kontrole GMC.

## RESULT
Pending.

## DECISION
Ponechať. Preklad zvyšku ATOS popisu (marketingový text, tabuľka "Technické specifikace") z češtiny do slovenčiny je vedome odložený používateľom na neskôr — netýka sa len televízorov, ale celého ATOS katalógu (aj iných dodávateľov s podobným vzorom).

## ROLLBACK / ROLLBACK_COMMIT
`git revert 2a2242f 0efd422` (alebo obnoviť `output/atos.xml` z commitu pred `0efd422` a odstrániť require/blok v `transform-atos.js`).

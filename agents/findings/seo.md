# SEO – prieskum príležitostí (PremiumStore.sk)

Dátum: 2026-11-10 (deň 1, len prieskum, do eshopu sa nezapisovalo).
Zdroje: Search Console (cez OpenSEO), GA4 (cez OpenSEO), Korzaro, Shoptet MCP, crawl 50 stránok (OpenSEO audit), kontrola produktovej stránky a homepage.

## 1. Východisková situácia

| Metrika | Hodnota | Poznámka |
|---|---|---|
| Search Console, 90 dní (12.8.–9.11.) | 4 840 klikov, 156 936 zobrazení, CTR 3,1 % | |
| GA4 organika, 13.10.–9.11. | 717 relácií | oproti predošlým 4 týždňom: relácie −19 %, tržby −28 % (absolútne obchodné čísla sú v súkromnom súbore projektu) |
| Najsilnejšie dopyty | „premium store" 159 klikov, „premiumstore" 65, „premiumstore.sk" 18 | značkové dopyty tvoria väčšinu klikov |
| Homepage | 379 klikov z ~4 800 (CTR 17 %, pozícia 6,2) | |

Hlavný záver: organická návštevnosť je malá a stojí na značke. Nenárazí sa na strop pozícií, ale na to, že katalóg (769 kategórií, tisíce produktov) skoro nemá organický dopyt mimo značky. Príležitosť je v produktových a kategóriových stránkach na pozíciách 4–10, kde zmena titulku, popisu a obsahu najrýchlejšie prinesie kliky.

Poznámka k dátam: Search Console vracia len časť dopytov (anonymizované), preto čísla vyššie sú základ pre meranie, nie presný obraz. Posledný týždeň v GA4 (46. týždeň) je neúplný.

## 2. Zoradené príležitosti

Odhad prínosu je hrubý (hodnoty z posledných 28 dní SC/GA4), slúži na zoradenie. Priorita = prínos / námaha.

### P1. Produktové stránky na pozíciách 4–10 (titulok, meta, obsah, FAQ)
- Dáta: z 757 kandidátskych stránok sú najlepšie: Ottocast OTTOAIBOX P3 Pro (167 zobrazení, pozícia 4,6, stránka s objednávkami z organiky), Kruger&Matz KM0838 (65 zobr., stránka s objednávkami z organiky), Viture Pro 2 XR (141 zobr., CTR 3,5 %), MOES BHT-002 (97 zobr.), Samsung HW-B420F (87 zobr., CTR 2,3 %), GL.iNet Beryl AX a Flint 2, Moza R5 Pro (155 zobr., CTR 1,3 %, pozícia 8,4), Ultimea Skywave F40, GMKtec EVO-X2/X3, Mova V70 Ultra (221 zobr., CTR 2,7 %), Aligator A8 (253 zobr., CTR 2,8 %), Stronglift SL500X (328 zobr., CTR 2,7 %, pozícia 4,4).
- Čo robiť: titulok s hlavným dopytom a modelovým číslom (MPN/EAN), unikátna meta s výhodou a výzvou, krátke zhrnutie nad priehybom, kompletná tabuľka parametrov, FAQ, kompatibilita pri cene.
- Odhad: CTR z ~3 % na 6–8 % pri stránkach s 100–300 zobrazeniami/mesiac; nárast desiatok klikov mesačne za pár desiatok stránok, bez zmeny pozície.
- Meranie: SC dotaz+stránka pred/po (28 dní vs. 28 dní), skupina upravených vs. kontrolná skupina podobných neupravených stránok (rozdiel CTR), GA4 transakcie na landing page.

### P2. Zistenia z kontroly produktovej stránky (Ottocast P3 Pro) – platia pravdepodobne šablónovo
1. Titulok neobsahuje „CarPlay", hoci H1 áno. Titulok a H1 sa nezhodujú.
2. Zobrazuje sa „Priemerné hodnotenie 0,0 z 5, Neohodnotené" (dvakrát). Pôsobí negatívne; skryť modul bez recenzií (úprava šablóny cez Shoptet administráciu, vyžaduje prístup do administrácie).
3. Kľúčové obmedzenie kompatibility je až hlboko v popise. Presunúť k cene (zníženie vrátení, zvýšenie konverzie).
4. Tabuľka parametrov má medzery (RAM, úložisko, Wi-Fi/BT verzia, rozmery) a prázdny riadok.
5. Chýba FAQ (ktoré autá, dátový plán, rozdiel oproti P3 bez Pro).
6. Obrázky v popise sú z cudzej domény (assets.innpro.pl). Riziko výpadku a práv; hostovať lokálne.
7. Alt texty galérie sú generické „… – obrázok 1", iba 2 obrázky v galérii.
8. Duplicitný súvisiaci produkt v odporúčaniach.
9. Štruktúrované dáta sa nepodarilo overiť (nástroj na čítanie stránok z cloudu vracia zjednodušený text bez JSON-LD). Treba overiť v Rich Results Test / v zdrojovom kóde cez prehliadač (Product, Offer, AggregateRating, BreadcrumbList, MerchantReturnPolicy, ShippingDetails).
- Odhad: vplyv na konverziu produktovej stránky (nie iba SEO). Test: A/B po produktoch (polovica podobných produktov s novou šablónou obsahu), metrika konverzný pomer z GA4 pre landing page a CTR zo SC.

### P3. Brandové stránky (/znacka/…) a kategórie na pozícii 5–7
- Dáta: /znacka/ultimea (58 zobr., pozícia 5,4), /znacka/fanttik, /znacka/avatto (66), /znacka/ottocast (104, pozícia 7,3), /znacka/catlink, /zavazacie-lodky/ (107 zobr., pozícia 6,8, CTR 5,6 %), /satelitne-prijimace/ (133, pozícia 9,6), /znacka/ottocast.
- Čo robiť: úvodný text značky (kto je výrobca, rady produktov, ako vybrať), odkazy na top produkty a príbuzné kategórie, unikátny titulok a meta. Shoptet MCP má brand_update a category_update.
- Odhad: posun z pozícií 5–9 do top 3 pri nízkom úsilí (stránky už rankujú).
- Meranie: pozícia a CTR cez SC pre dané URL, kontrolné značky bez zmeny.

### P4. Kategórie: nerovnomerný obsah
- Vzorka prvých 20 kategórií zo 769: hlavné kategórie majú 7–12 tisíc znakov popisu (pravdepodobne generický dlhý text), kým podkategórie majú často 190–270 znakov (napr. Autokozmetika, Detské autosedačky, Autožiarovky) alebo 1,3–1,4 tisíca znakov (3D skenery, Laserové stroje).
- Riziko: 10 000+ znakov na hlavných kategóriách môže byť pre používateľa aj pre Google nevhodné (obsah nad produktmi, kanibalizácia). Overiť, kde je text umiestnený (description vs. secondDescription) a či odpovedá na zámer vyhľadávania.
- Čo robiť: kategórie s najväčším počtom zobrazení doplniť o stručný úvod (80–150 slov) hore, sprievodcu výberom, FAQ a internými odkazmi pod produktmi. Dlhé texty skrátiť a sprehľadniť.
- Nutný krok: prejsť všetkých 769 kategórií (39 strán API), zostaviť tabuľku „kategória – zobrazenia v SC – dĺžka textu – meta" a vybrať top 50.

### P5. Poradňa a obsah (blog / „Novinky")
- Dáta: /poradna/stvr-dvb-t2-jednotka-nefunguje/ má 471 zobr., pozícia 5,6, CTR 3,6 %, no skoro nulový obchodný výsledok (GA4: minimum relácií a žiadna konverzia). Dopyt je z TV prechodu na DVB-T2.
- Čo robiť: pridať produktové odkazy (DVB-T2 prijímače, antény), CTA, tabuľku „čo kúpiť", FAQ. Nové články podľa dopytov z SC (rady pred nákupom, porovnania, návody k modelom, ktoré už rankujú).
- Shoptet MCP umožňuje blog_article_create/update/publish.
- Meranie: kliky z článku na produkty (GA4 udalosť), transakcie s asistenciou.

### P6. Dopyty na model/EAN
- Dáta: dopyty ako „poco f9 ultra" (367 zobr., 30 klikov, pozícia 8,2), „qe65qn990f" (83), „ue65m80h", „moza r5 pro" (175 zobr., CTR 1,1 %), „ottocast p3 pro" (74), „creality pika", „ringconn gen 2 air" (105). Zákazníci hľadajú konkrétny model.
- Čo robiť: model/MPN/EAN v titulku, H1 a v prvej vete; zhrnutie „pre koho"; porovnanie s príbuzným modelom; interné odkazy medzi variantmi.
- Meranie: SC pozícia a CTR pre tieto dopyty.

### P7. Značka a dôvera (CTR značkových dopytov, recenzie)
- Dáta: „premium store recenzie" 63 zobr., pozícia 6,3, CTR 6 %. „kde kúpim", „kde kúpiť" (niekoľko variácií) sú pravdepodobne z cudzích značiek – zákazník nevie, kde produkt kúpiť.
- Čo robiť: zobraziť recenzie obchodu (Heureka Overené zákazníkmi), vrátane hodnotenia na homepage; Organization schema s odkazmi sameAs (Heureka, Google Business Profile); skontrolovať Google Merchant Center / Business Profile.
- Meranie: pozícia a CTR pre „premium store recenzie", podiel značkových kliknutí na homepage.

### P8. Technické drobnosti zo crawlu (50 stránok)
- Malé, bez vplyvu na pozície, ale lacné: `/black-friday/` má 2× H1; `/moja-objednavka/` bez H1 a meta (je noindex, v poriadku); krátke meta description na informačných stránkach (Doprava a platba, Kontakty, Obchodné podmienky, GDPR – titulok „GDPR" má 4 znaky); 6 titulkov kategórií je dlhších ako 60 znakov; 45 stránok preskakuje úrovne nadpisov (šablóna).
- Titulok homepage („PremiumStore.sk – elektronika, audio, náradie a osvetlenie") nespomína všetky silné skupiny; zvážiť A/B test.
- Zistenie z homepage: v texte nie je JSON-LD (nepotvrdené, viď P2.9).
- Pre Black Friday: sezónna stránka /black-friday/ existuje a je v menu. Dnes 10.11., maximalizovať, kým je dopyt: unikátny úvodný text, odkazy na top akcie.

### P9. Nástroje navyše (návrh pre kostru)
1. Týždenný skript: stiahne SC dáta, vyráta „CTR gap" (očakávané CTR podľa pozície vs. skutočné) a zoradí URL na úpravu.
2. Evidencia zmien (CSV/JSON v repozitári): dátum, URL, čo sa zmenilo, hodnoty pred zmenou; po 28 dňoch automatické vyhodnotenie vs. kontrolná skupina.
3. Audit obsahu produktov cez Shoptet MCP: dĺžka popisu, počet parametrov, prítomnosť FAQ, počet obrázkov, alt text.
4. IndexNow (OpenSEO má `submit_indexnow_urls`) po každej dávke úprav.
5. Sledovanie pozícií pre 50–100 kľúčových dopytov (OpenSEO rank tracker, odhad nákladov nutný pred spustením).

## 3. Čo sa nepodarilo / obmedzenia
- Cloudová relácia nemá prístup na premiumstore.sk (proxy vracia 403), preto zdrojový HTML (JSON-LD, canonical, hreflang, robots, sitemap) nebolo možné skontrolovať priamo. Dostupný bol len zjednodušený výstup čítania stránky a crawl cez OpenSEO.
- Priame prehliadanie GA4, Search Console, Clarity a Heureka v Chrome nebolo v tejto relácii dostupné; použité boli pripojenia cez OpenSEO a Korzaro. Clarity (UX správanie) a Heureka nie sú v tomto výstupe pokryté.
- K počítaču nie je pripojený žiadny priečinok, preto sa nedalo použiť shell na lokálnom zariadení.
- Rešerš aktuálnych SEO postupov: vyhľadávanie vrátilo len zoznam článkov, nie ich obsah; odporúčania v tomto dokumente vychádzajú z overených zásad (Google Merchant listings, Product schema, E-E-A-T, užitočný obsah) a z dát obchodu. Podrobnejšiu rešerš treba spraviť v ďalšom kole.
- Prvých 20 z 769 kategórií sa analyzovalo; zvyšok je úloha na ďalší deň.

## 4. Návrh poradia práce
1. Overiť JSON-LD a opraviť šablónu (0,0 hodnotenie, Product/Offer/Breadcrumb).
2. Pilotná dávka 20 produktových stránok z P1 (polovica upravená, polovica kontrola), meranie 28 dní.
3. Úvodné texty pre 5 brandových stránok a 5 kategórií (P3).
4. Úprava poradenského článku DVB-T2 (P5).
5. Audit všetkých kategórií (P4).
6. Evidencia zmien a týždenné vyhodnocovanie (P9).

## 5. Navrhované úlohy

| Názov | Prečo | Očakávaný dopad | Náročnosť | Komu patrí |
|---|---|---|---|---|
| Overiť a opraviť JSON-LD šablónu (Product, Offer, Breadcrumb, skryť hodnotenie 0,0) | Rich výsledky, dôvera | stredný | stredná | seo |
| Pilotná dávka 20 produktov na pozíciách 4–10 (titulok, meta, FAQ, parametre) s kontrolnou skupinou | najrýchlejší nárast CTR | vysoký (CTR +2–4 p. b. na upravených) | stredná | obsah |
| Texty pre značky Ultimea, Fanttik, Avatto, Ottocast, Catlink | stránky už rankujú na 5–7 | stredný | nízka | obsah |
| Audit všetkých 769 kategórií (dĺžka textu, meta, zobrazenia) | nerovnomerný obsah | stredný | stredná | seo |
| Úprava článku DVB-T2 o produktové odkazy a CTA | 471 zobrazení bez obchodného výsledku | nízky až stredný | nízka | obsah |
| Kompatibilita a FAQ pri cene u adaptérov CarPlay | menej vrátení, vyššia konverzia | stredný | nízka | ux-cro |
| Zobraziť recenzie obchodu (Heureka) na homepage, Organization schema | značkové a recenzné dopyty | nízky až stredný | nízka | ux-cro |
| Evidencia zmien + 28-dňové vyhodnotenie vs. kontrola | meranie A/B | vysoký (umožní učenie) | stredná | meranie |
| Týždenný skript CTR gap zo Search Console | priebežné hľadanie príležitostí | vysoký | stredná | meranie |
| Drobné technické opravy (H1 na Black Friday, krátke meta, dlhé titulky kategórií) | čistota šablóny | nízky | nízka | seo |

## 6. Pravidlá
- Neriešime ceny, viditeľnosť ani skladovú dostupnosť.
- Zmeny reklamy (Heureka hidden, rozpočty) len so schválením Martina.

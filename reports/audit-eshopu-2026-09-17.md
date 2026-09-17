# Audit e-shopu premiumstore.sk

Stav k **17. 9. 2026, 10:00 UTC**. Zostavené z repozitára (105 skriptov, 21 workflow),
živých exportov kategórií zo Shoptetu (vrátane archívnych z 24. 8., 11.–13. 9.) a priamych
volaní na web.

---

## 1. Čo som overil a čím

| Zdroj | Čo z neho viem |
|---|---|
| `output/*.xml` (8 feedov) | čo posielame do e-shopu — produkty, ceny, kategórie, viditeľnosť |
| Živý export kategórií zo Shoptetu | čo v e-shope naozaj je |
| Priame HTTP volania na web | ako sa stránky správajú (menu, pätička, počty strán) |
| `.github/workflows/` | kedy a čo beží |
| `reports/` | čo hlásia poistky |

**Čo overiť neviem:** dizajn šablóny žije v administrácii Shoptetu, nie v repozitári.
Repozitár je výhradne feedová pipeline — o vzhľade hlavičky či pätičky nevie nič.

---

## 2. Ako e-shop dnes vyzerá

**Šablóna 13**, kategóriová stránka beží v rozložení `one-column`.

**Hlavička:** vyhľadávanie, košík a rozbaľovacie menu celého stromu.

**Menu** nesie kompletný strom — v HTML domovskej stránky je 345 položiek naprieč
štyrmi úrovňami. Prvá úroveň má 12 koreňov.

**Pätička** je stručná, 9 odkazov: Doprava a platba, Kontakty, Obchodné podmienky,
Moja objednávka, GDPR, e-mail, telefón, Shoptet, nastavenie cookies.

**Kategóriová stránka** ukazuje dlaždice podkategórií a pod nimi tovar, 12 kusov na
stranu. Úvodný SEO text sa zobrazuje tam, kde ho kategória má.

---

## 3. Zmenšenie kategórií — čo sa stalo

Najväčší zásah do e-shopu za posledný mesiac. Doložené exportmi zo Shoptetu:

| Dátum | Kategórií | Viditeľných | Koreňov | Úrovne (1 / 2 / 3 / 4 / 5 / 6) |
|---|---:|---:|---:|---|
| 24. 8. | **2 929** | 2 925 | 14 | 14 / 206 / 1063 / 1314 / 290 / 42 |
| 11. 9. | 2 568 | 2 360 | 17 | 17 / 255 / 988 / 1052 / 225 / 31 |
| 12. 9. | 2 569 | 2 361 | 18 | 18 / 255 / 988 / 1052 / 225 / 31 |
| 13. 9. po importe | 2 315 | 2 132 | 12 | 12 / 234 / 896 / 825 / 310 / 38 |
| **17. 9. dnes** | **480** | 479 | **12** | **12 / 172 / 155 / 141** |

Zo **2 929 na 480**, teda na šestinu. A hĺbka zo **šiestich úrovní na štyri**.

### Čo sa tým vyriešilo

Starý strom mal 1314 kategórií na štvrtej úrovni a ďalších 332 na piatej a šiestej —
väčšinou s jednotkami produktov. Zákazník sa v tom nemal ako zorientovať a Google
indexoval tisíce takmer prázdnych stránok.

Podstatnejšie však bolo, že strom nebol **stabilný**: názvy sa medzi dodávateľmi
líšili, takže Shoptet pri každom importe zakladal ďalšie číslované varianty tej istej
kategórie (`/tablety-4/`, `/sluchadla-2/`). Odtiaľ tých 2929.

Nový strom je uzavretá množina. O zaradení rozhoduje jedna tabuľka na dodávateľa a
`enforce-tree-categories.js` nepustí ďalej nič, čo v nej nie je — **Shoptet tak nemá
ako kategóriu navyše vytvoriť**. Dnes je mimo stromu 0 z 26 947 produktov.

### Čo to znamená pre zvyšok systému

| Vec | Stav |
|---|---|
| Presmerovania zo starých URL | 2 830 pravidiel, pokrytie overené proti exportom z 24. 8. aj 12. 9. |
| Produkty zaparkované na koreni | 6 166 (13. 9.) → 669 (14. 9.) → **103 dnes** |
| Odkazy v popisoch produktov | prepisujú sa pri každom behu, kontroluje ich poistka |
| Hĺbka 4. úrovne | 141 uzlov, zatiaľ naplnených 1 220 produktmi |

---

## 4. Ako e-shop funguje — pipeline

Osem dodávateľov, každý má vlastný workflow a vlastný čas:

| Dodávateľ | Cron (UTC) | Produktov | Feed |
|---|---|---:|---|
| InnPro | 4:00, 10:00, 16:00, 22:00 | 5 547 | 35 MB |
| ATOS | 22:10 | 11 971 | 71 MB |
| Penta | 22:20 | 431 | 3,2 MB |
| K-B | 22:30 | 4 947 | 15 MB |
| MONACOR | 22:40 | 1 820 | 5,4 MB |
| Solight | 22:50 | 1 286 | 6,4 MB |
| BASYS | 23:00 | 916 | 1,7 MB |
| WiiM | ručne | 29 | 180 KB |

Nočná dávka teda beží 22:10–23:00 UTC (00:10–01:00 SK) a Shoptet si feedy vyzdvihne
o 3:05. InnPro beží navyše štyrikrát denne, takže jeho ceny a sklad stíhajú aj denné
aktualizačné importy.

**Každý beh prejde rovnakou linkou:**

```
transform-<dodávateľ>.js      stiahne feed, prepočíta ceny, zaradí do stromu
dedupe-cross-supplier.js      vyhodí tovar, ktorý dodáva aj preferovaný dodávateľ
collapse-duplicate-categories.js
fix-ignored-categories.js
collapse-thin-categories.js   kategórie s < 8 produktmi zloží do rodiča
enforce-tree-categories.js    nič mimo strom neprejde
hide-uncategorised-products.js
hide-below-cost-products.js   nepredávame pod nákupnú cenu
add-category-links.js         odkaz na vlastnú kategóriu do popisu
check-category-links.js       poistka: odkaz musí sedieť
check-feed-size.js            poistka: feed sa nesmie useknúť
```

Posledné štyri kroky sú poistky — keď niečo nesedí, workflow spadne a feed sa
nenahrá pokazený.

### Ďalšia automatika

- **Ceny podľa Heureky** — denne 22:00 UTC sa spracuje sortiment report, cieľové ceny
  sa zapíšu do `price-targets.json` a rovno aj do hotových feedov, takže ich stihne
  najbližší denný import. Maržové dno 5 % sa počíta z aktuálnej nákupnej ceny.
- **Ranná kontrola feedov** — 05:00 UTC hľadá nové duplicity medzi dodávateľmi a
  kategórie mimo stromu.
- **E-maily** — každých 15 minút sa k novým zákazníckym mailom o objednávkach
  vygeneruje návrh odpovede **do priečinka Drafts**. Nikdy sa nič neodosiela samo.
- **Heureka recenzie** — týždenne v pondelok.

---

## 5. Kategorizácia — ako sa správa dnes

Strom má **487 uzlov** (12 / 177 / 157 / 141), e-shop **480**. Rozdiel je 7 kategórií,
ktoré čakajú na import.

O zaradení rozhoduje **jedna tabuľka na dodávateľa** (`data/kategorie/<dodávateľ>.json`).
Vyhráva najdlhší prefix cesty z feedu a jeho cieľ nahrádza celú cestu — chvost sa
zahadzuje. Výsledok je preto **vždy** uzol stromu.

Cesta bez pravidla sa nehádá: produkt ostane bez kategórie, skryje sa a nahlási.

| | |
|---|---:|
| Produktov vo feedoch | **26 947** |
| Hlavná kategória na 2. úrovni | 14 718 |
| na 3. úrovni | 10 811 |
| na 4. úrovni | 1 220 |
| na koreni | **103** (0,4 %) |
| bez kategórie (skryté) | 95 |
| **mimo stromu** | **0** |
| Skrytých produktov spolu | 312 |
| Naplnených uzlov | 376 z 487 |

Počty strán na webe sedia s feedmi naprieč všetkými veľkými kategóriami — pipeline a
e-shop sú v zhode.

---

## 6. Čo je zdravé

- **Žiadna kategória mimo stromu** — 0 z 26 947 produktov. Shoptet nemá ako vyrobiť
  kategóriu navyše.
- **Na koreňoch už len 103 produktov** (0,4 %). Pred opravou zo 14. 9. ich bolo 669.
- **Kontrola odkazov beží pri každom behu** — odkaz v popise musí viesť na kategóriu,
  v ktorej produkt naozaj je.
- **Presmerovania sú konzistentné** — 2830 pravidiel, žiadne reťazce, self-redirecty
  ani duplicitné zdroje.
- **Cross-supplier dedupe** ošetruje 7 značiek dodávaných viacerými dodávateľmi.
- **Heureka** — 149 kategórií má priradené ID, 5 vetiev je z plateného feedu vylúčených,
  cenový strop 10 €.

## 7. Čo treba doriešiť

| Vec | Rozsah | Poznámka |
|---|---:|---|
| **7 kategórií chýba v e-shope** | 7 | čakajú na import kategóriového CSV |
| **6 kategórií bez SEO textov** | 6 | zvieracie podkategórie — vytvoril ich produktový import, nie CSV, takže majú prázdny popis aj meta |
| **5 presmerovaní na živých kategóriách** | 5 | robia kategóriu nedostupnou |
| **217 produktov pod nákupnou cenou** | 217 | skryté automaticky, ale príčina trvá — ATOS predáva za odporúčanú cenu, ktorá vie byť pod jeho nákupnou |
| **95 produktov bez kategórie** | 95 | Solight 4 cesty bez pravidla, ATOS 1 |
| **103 produktov na koreňoch** | 103 | 54 z MONACOR/BASYS/Penta, ktorí ešte nemajú tabuľku pravidiel |
| **111 prázdnych uzlov** | 111 | väčšinou 4. úroveň, ktorá sa ešte nenaplnila |

### Poradie, ktoré dáva zmysel

1. **Presmerovania** (súbor 2877) — odstráni tých 5 blokujúcich
2. **Kategóriový CSV** (487 riadkov) — doplní 7 chýbajúcich a SEO texty tým šiestim
3. Doplniť pravidlá pre Solight a ATOS → −95 skrytých
4. Previesť MONACOR/BASYS/Penta na rovnaký systém pravidiel → −54 na koreňoch

Kroky 1 a 2 musia ísť v tomto poradí — presmerovanie na URL kategórie ju robí
nedostupnou aj po importe.

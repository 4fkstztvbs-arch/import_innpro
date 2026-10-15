# Bose – nový cenník a katalóg (platnosť od 15. 10. 2026)

Zdroje: `data/basys-bose-cennik-2026-10-15.xlsx` (cenník MOC/VOC) a `data/basys-bose-katalog-2026-10-15.pdf` (katalóg, DMOC).
Základ importu: živý export `productsComplete.xml` (výrobca Bose, 117 kariet) z 15. 10. 2026.

## Čo nahrať
`bose-import-2026-10-15.xml` → Shoptet **Produkty → Import** (XML, formát Shoptet = rovnaký ako export).
Nepoužívať voľbu na mazanie produktov, ktoré v súbore nie sú, ani prepis URL podľa názvu. Po importe skontrolovať log (očakáva sa 115 aktualizovaných kariet a 7 nových skrytých, žiadne mazanie).
Prehľad zmien po produktoch: `zmeny-cenník.csv`, detaily v `report.json`.

## Čo súbor robí
| Skupina | Počet | Zmena |
|---|---|---|
| Produkty v cenníku | 71 kariet | MOC → `PRICE_VAT`, VOC bez DPH → `PURCHASE_PRICE` (bez DPH, DPH 23 %), EAN v tvare EAN-13, hmotnosť (kde ju poznáme), popis + SEO názov + meta popis tam, kde karta ešte nemala vlastný text |
| Bose mimo cenníka | 44 kariet | dostupnosť **Na objednávku**, viditeľné; cena (aj existujúca akciová) sa nemení |
| Variantové karty 621573 (Bass Module 700) a 621249 (Smart Ultra – Skladom BB) | 2 | nemenené (ručný výpredaj, viď `migrations/final-category-tree-2026-09-18/po-kontrole/BOSE-AKCIA-MANUALNE.md`); v súbore nie sú |
| NEW položky cenníka, ktoré v e-shope neboli | 7 | nové karty so stavom **hidden** a „Na objednávku" (Sport Open Earbuds ×3, Noise Cancelling Wired Earbuds ×3, Lifestyle Floor Stand biely) – bez fotiek, treba doplniť a zviditeľniť |

Ostatné NEW/nové SKU z cenníka (OmniJewel, puzdrá, UB/UTS-20 II biele, Model 791 II, Smart Ultra čierny ako samostatná karta) sa nezakladajú; zatiaľ ich vytvorí len nočný feed, keď ich BaSys vykáže ako skladom.

## Ako sa rozhodli nezhody medzi zdrojmi (treba vedieť)
* **Cena:** `MOC` z xlsx (napr. 999 €), nie `DMOC` z PDF (999,95 €). Dôvod: xlsx je jediný zdroj spárovaný s VOC a zodpovedá doterajším cenám v e-shope; PDF ceny by cez `roundPrice` skončili ako 1000 €/450 €. Ak chcete ceny z PDF, zmeňte `mocInclVat` v `data/basys-bose-pricelist.json` na `dmocPdf`.
* **Smart Ultra Soundbar** klesol 999 → 899 € (VOC 592 €).
* **Chyby v xlsx opravené podľa PDF + kontrolného súčtu EAN-13:** duplicitné SKU (Surround biela `B 809281-2200`, QC Ultra Olive `B 890101-0120`, QC Headphones Eucalyptus `B 895491-0300`), EAN soundbar bracket čierny `17817795647` (xlsx mal neplatný), QC Headphones 2nd Gen riadky pomenované „Ultra", farby Ultra Open 2 (`-0030` = Cherry, `-0040` = Olive – list VOC ich mal opačne).
* **Chyby v PDF ignorované:** SKU SoundLink Micro `B 783342-…` (patria staršej generácii, EAN je novej), EAN QC Headphones biele `17817850707` (neplatný súčet).
* **Bez VOC v cenníku:** UB-20/UTS-20/UFS-20 II a QC Earbuds Rosewood Mauve – nákupka odhadnutá (MOC/1,23/1,15, QC Earbuds prevzatá od súrodenca). **UTS-20 II:** xlsx 37 € vs PDF 33 € → použité 37 € (karta 616791 zdražie z 33 €) – overte.
* **S1 Pro+ (Bose Professional)** v PDF je mimo tohto cenníka (bez VOC) – nezmenené.

## ⚠ Na rozhodnutie: staré akciové ceny
V e-shope ostalo 17 kariet s akciovou cenou z promo BaSys (1. 7. – 31. 8. 2026, už skončilo) – napr. QC Ultra Headphones 390 €, Smart Soundbar 449 €, SoundLink Home 200 €. Pri vypnutej podpore BaSys majú marže 2–10 %. Import ich **ponecháva** (nič neprepisuje). Ak majú skončiť: `node scripts/build-bose-cennik-import.js export.xml --clear-expired-actions`. Zoznam: `report.json` → `actionKept`. Ručne zadaná akcia QC Ultra Earbuds čierne (258,90 €) ostáva v oboch prípadoch.

## Duplicitné karty
`615909`, `615912`, `615915` (kódy `BASYS-B 895491-…` bez predpony `BAS_`) majú rovnaké EAN ako `616113`, `616116`, `616119`. Aktualizované rovnako, ale odporúčam jednu z dvojice skryť/zmazať.

## Hmotnosť a ďalšie údaje
Hmotnosť (kg, produktu, nie balenia) je doplnená pre 56 z 71 kariet z cenníka (cenník BaSys, Bose špecifikácie, predajcovia – `data/basys-bose-weights.json`, zdroj pri každom pravidle). Bez hmotnosti ostali: SoundLink Max rukoväte/popruhy, QuietComfort Earbuds, držiaky Soundbar Wall Bracket, UFS/UB/UTS-20 II, Model 791 II… (nenájdený spoľahlivý údaj, radšej 0 ako odhad). Varianty: farebné varianty ostávajú samostatné karty (ako doteraz); spájanie do variantových kariet by zmenilo URL, Heureka párovanie a históriu objednávok.

## Ako workflow BASYS tento update nezmaže
Nočný feed (`scripts/transform-basys.js`, `.github/workflows/basys-sync.yml`) teraz číta rovnaké dáta ako import:
* `data/basys-bose-pricelist.json` – nový cenník (90 SKU) → rovnaké ceny, nákupky, EAN; položky bez VOC majú odhad nákupky.
* `data/basys-bose-weights.json` → `<LOGISTIC><WEIGHT>` vo feede.
* `data/product-content/basys.json` – popisy/SEO nových a doteraz nechránených kariet (značka `_src`), takže ich feed neprepíše.
* `data/basys-bose-on-order.json` – 44 Bose kariet mimo cenníka: feed ich vždy vydá ako **Na objednávku**, nikdy nie „Vypredané"/detailOnly, cena zostáva z BASYS feedu (resp. posledná známa), skutočná nákupka z e-shopu má prednosť pred odhadom. Ak ich BASYS prestane posielať, doplnia sa z tohto súboru.
* Nová poistka `scripts/check-basys-bose-on-order.js` vo workflow zastaví beh, ak by niektorá z nich vypadla alebo nebola „Na objednávku".
* Workflow sa spustí aj po zmene týchto súborov (`paths`).

Nový cenník v budúcnosti: `python3 scripts/extract-basys-bose-pricelist.py cennik.xlsx katalog.pdf`, potom `node scripts/build-bose-cennik-import.js export.xml --write-data`.

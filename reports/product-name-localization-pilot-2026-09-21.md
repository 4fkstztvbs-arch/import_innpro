# SK lokalizácia názvov produktov — pilot 2026-09-21

## Stav

Pilot je pripravený na vetve `pilot/sk-product-name-localization` a **nie je aktívny v produkcii**.

Testovaný rozsah:
- K-B: 50 produktov
- ATOS: 50 produktov
- spolu: 100 produktov

Reálny dry-run nad aktuálnymi `output/kb.xml` a `output/atos.xml`:
- K-B: 50 zmien `NAME`, 0 chýb, 0 chýbajúcich položiek
- ATOS: 50 zmien `NAME`, 0 chýb, 0 chýbajúcich položiek
- validator: 0 zmien mimo produktového `NAME`
- unit testy: 4/4 úspešné

Overený GitHub Actions run: `35612671158` — success.

## Základné pravidlo

Lokalizácia sa vykonáva **až na konci importnej pipeline**, po:
1. transformácii dodávateľského feedu,
2. cenotvorbe a Heureka price override,
3. cross-supplier deduplikácii,
4. kategorizácii a korekciách,
5. Icecat/content enrichmentoch,
6. kontrolách pod nákupnou cenou,
7. SEO override.

Takto lokalizovaný názov neovplyvňuje cenové, kategorizačné ani deduplikačné rozhodnutia.

## URL

URL sa lokalizačným skriptom nikdy nečíta ani nezapisuje. V Shoptete je aktualizácia URL pri automatickom importe pre ATOS aj K-B vypnutá.

Validator povoľuje rozdiel výhradne v priamom produktovom `<NAME>`. Zmena akéhokoľvek iného XML poľa spôsobí chybu.

## Párovanie faktúr / Omega

K-B faktúry bez EAN sa doteraz mohli párovať presným názvom. Po lokalizácii zostáva v registri uložený `sourceName` a naskladňovací nástroj ho používa ako presný alias k existujúcemu CODE/EAN. Tým sa zachová pôvodné párovanie dodávateľských faktúr.

## Zistenia počas pilotu

1. Shoptet produktový export používa pri K-B kódoch prefix `KB_`, kým importný `output/kb.xml` používa surový K-B CODE. Registry používa skutočný CODE z importného XML.
2. Pilot používa iba produkty, ktoré sú prítomné v aktuálnych výstupných feedoch.
3. Produkty môžu obsahovať vnorené `<NAME>` v parametroch. Lokalizátor aj validator menia/neutralizujú iba priamy produktový `<NAME>`.
4. Cross-supplier deduplikácia zostáva pred lokalizáciou a pracuje s pôvodným dodávateľským názvom.
5. Ak dodávateľ zmení source názov, lokalizátor záznam neprepíše a označí `source-name-drift`.

## Naming rules v1

Preferovaný tvar:
`Značka + model/rad + slovenský typ produktu + dôležitý variant + farba`

Príklady:
- `Leifheit Pegasus 180 Solid sušiak na bielizeň, čierny`
- `TP-Link RE205 AC750 Wi-Fi extender`
- `EMOS P5734 bezdrôtový domový zvonček do zásuvky`
- `HP 106A W1106A čierny laserový toner`

Chránené prvky:
- CODE, EAN
- modelové označenia a part number
- Pro / Max / Ultra / Lite / Mini, ak sú súčasťou modelu/radu
- technické skratky ako USB-C, HDMI, LTE, Wi-Fi, Bluetooth, TWS, IP67
- kapacita, výkon, rozmer a počet kusov

Normalizácia:
- `3ks` → `3 ks`
- `64GB` → `64 GB`
- `5m` → `5 m`
- `40x1000cm` → `40 × 1000 cm`
- české farby a bežné generické výrazy sa prekladajú do slovenčiny

Ak názov vyžaduje domýšľanie vlastností alebo je nejednoznačný, nemá sa automaticky lokalizovať.

## Bezpečnostné poistky

`data/localization/product-names-sk.json`
- deterministický register source → SK názov
- každý produkt je viazaný na supplier + CODE + EAN
- source-name drift sa neprepisuje

`scripts/localize-product-names.js`
- mení iba priamy produktový `NAME`
- nezasahuje do vnorených `NAME` parametrov

`scripts/validate-product-name-localization.js`
- porovná celý SHOPITEM pred/po
- neutralizuje len produktový `NAME`
- ak sa zmení cena, kategória, dostupnosť, EAN, CODE, obrázok, popis, SEO alebo iné pole, run zlyhá

## Produkčné zapojenie

ATOS a K-B workflow majú pripravený lokalizačný krok, ale sú oddelene vypnuté repository variables:

- `PRODUCT_NAME_LOCALIZATION_KB=1`
- `PRODUCT_NAME_LOCALIZATION_ATOS=1`

Ak premenná nie je nastavená na `1`, lokalizačný krok sa vôbec nespustí.

To umožňuje zapnúť najprv jedného dodávateľa a až po kontrole druhého.

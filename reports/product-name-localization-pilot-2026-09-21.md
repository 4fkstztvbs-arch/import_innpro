# Pilot lokalizácie názvov produktov — 2026-09-21

## Rozsah

Pilot je pripravený výhradne na vetve `pilot/sk-product-name-localization`.
Produkčný `main`, `output/kb.xml`, `output/atos.xml` ani živé Shoptet importy sa týmto pilotom nemenia.

Lokalizácia v tejto fáze povoľuje iba zmenu produktového elementu `<NAME>`.
URL / ORIG_URL, CODE, EAN, ceny, nákupné ceny, kategórie, dostupnosť, viditeľnosť,
SEO polia, obrázky, popisy a parametre musia zostať byte-for-byte nezmenené.

## Reálny dry-run

GitHub Actions run 35611798816 skončil úspešne.

### K-B

- SHOPITEM pred: 5 067
- SHOPITEM po: 5 067
- lokalizované názvy: 20
- chýbajúce pilotné položky: 0
- konflikty EAN/sourceName: 0
- zmeny mimo produktového NAME: 0
- validator: OK

### ATOS

- SHOPITEM pred: 12 007
- SHOPITEM po: 12 007
- lokalizované názvy: 20
- chýbajúce pilotné položky: 0
- konflikty EAN/sourceName: 0
- zmeny mimo produktového NAME: 0
- validator: OK

## Zistenia počas pilotu

1. Shoptet produktový export používa pri K-B kódoch prefix `KB_`, zatiaľ čo zdrojové
   `output/kb.xml` používa surový K-B CODE bez tohto prefixu. Registry bol preto upravený
   na skutočnú identitu v importnom XML.
2. Niektoré pôvodne vybrané K-B produkty medzičasom neboli v aktuálnom výstupe
   (sklad/deduplikácia/aktuálny katalóg). Pilot používa iba 20 položiek, ktoré sú v aktuálnom
   `output/kb.xml` skutočne prítomné.
3. Produkty môžu obsahovať ďalšie `<NAME>` v `TEXT_PROPERTY`. Lokalizátor aj validator
   preto rozlišujú priamy produktový `<NAME>` od názvov parametrov. Názvy parametrov sa
   nesmú zmeniť.
4. K-B faktúry niekedy nemajú EAN. `parse-supplier-invoice.js` aj `naskladnenie.html`
   preto používajú `sourceName` z lokalizačného registra ako presný alias k existujúcej
   karte overenej cez CODE/EAN. Lokalizácia tak neodstráni dnešný fallback podľa pôvodného
   českého názvu.
5. Cross-supplier modelová deduplikácia zostáva pred lokalizačným krokom, takže pracuje
   s pôvodnými dodávateľskými názvami.

## Bezpečnostné pravidlá

- Registry je deterministický: `data/localization/product-names-sk.json`.
- Záznam sa použije iba pri stave `pilot_approved`.
- CODE musí presne sedieť.
- Ak je dostupný EAN, musí sedieť.
- Aktuálny NAME musí byť presne `sourceName` alebo už `skName`.
- Ak dodávateľ názov zmení, lokalizácia sa zastaví pre daný produkt namiesto hádania.
- Validator porovná celý SHOPITEM a ignoruje iba priamy produktový NAME.
- Ak sa zmení akékoľvek iné pole, workflow skončí chybou.

## URL

Lokalizačný skript URL/ORIG_URL nečíta ani nezapisuje.
V Shoptete je podľa potvrdenia používateľa pri automatických importoch ATOS a K-B
aktualizácia URL vypnutá.

## Stav

**Dry-run: úspešný.**
**Produkčné nasadenie: zatiaľ vypnuté.**

Ďalší bezpečný krok je zaradiť lokalizátor + validator ako úplne poslednú fázu
ATOS/K-B workflow, najprv iba pre týchto 20 + 20 pilotných položiek. Merge do main a
aktivácia živého importu majú zostať samostatným vedomým krokom.

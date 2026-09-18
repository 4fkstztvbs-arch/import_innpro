# Finálny strom PremiumStore — 18. 9. 2026

**454 cieľových kategórií, 72 nových, 101 existujúcich vetiev na neskoršie skrytie.** SEO obsah pre 105 kategórií. Všetky nové vetvy aj koncové uzly cieľového stromu majú po navrhovanom zaradení aspoň 8 viditeľných unikátnych produktov v oboch podkladoch. Počty sú plánované po presunoch, nie potvrdený stav po uploade.

## Čo nahrať teraz

1. Uložiť aktuálny export kategórií a produktov. Záloha kategórií z prípravy je v `zaloha/`.
2. V **Produkty → Kategórie → Import** postupne nahrať:
   - `teraz/01-nove-kategorie-L2.csv` — 6 kategórií.
   - `teraz/02-nove-kategorie-L3.csv` — 40 kategórií.
   - `teraz/03-nove-kategorie-L4.csv` — 23 kategórií.
   - `teraz/04-nove-kategorie-L5.csv` — 3 kategórie.
   - `teraz/05-seo-existujucich-kategorii.csv` — 33 úprav existujúcich kategórií.
3. Po každom importe skontrolovať log. Súbory sú UTF-8 s bodkočiarkou; nahrať priamo, neukladať cez Excel. Nové riadky nemajú vymyslené ID; nadradenú kategóriu určujú cez parentUrl. Poradie L2 → L5 je dôležité.
4. Napísať „kategórie nahrané“. Z existujúceho exportného odkazu overím skutočné ID, hierarchiu a URL, následne zapnem pripravené mapovania v MAIN. Nie je potrebné znova posielať prístupový odkaz.

**Zatiaľ nenahrávať priečinok `po-kontrole/`.** GitHub obsahuje prípravu s vypnutou aktiváciou. Nočné feedy začnú posielať nové cesty až po kontrole vytvorených kategórií a aktivácii. Zaškrtnutá aktualizácia kategórií v dodávateľskom importe je potrebná a používateľ ju potvrdil.

## Potom: produkty a dočistenie

- `po-kontrole/06-produkty-zive-kody.csv`: 3576 existujúcich samostatných kariet. Kódy sú zo živého e-shopu; nemení ceny, zásoby, názvy, viditeľnosť ani URL. Pred uploadom znovu preveriť aktuálny export. V **Produkty → Import** nastaviť aktualizáciu existujúcich produktov, aktualizáciu kategórií a **Nemeniť produkty a varianty, ktoré nie sú obsiahnuté v importovanom súbore**. Nové produkty týmto súborom nevytvárať.
- Dve variantové akciové karty BOSE upraviť podľa `po-kontrole/BOSE-AKCIA-MANUALNE.md`; ak sú už opravené, neopakovať.
- Predošlý import pridal správne kategórie, ale pri 16 kartách ponechal aj staré. Samotné zaškrtnutie aktualizácie kategórií nedokazuje ich odstránenie. Novšia verzia Shoptetu štandardne preskakuje prázdne hodnoty; pri odstraňovaní starých priradení sa preto nespoliehať na prázdne bunky, ale použiť overenú hromadnú úpravu v administrácii. Po ďalšom importe porovnám všetky aktuálne aj predvolené kategórie; staré nechcené priradenia odstrániť až podľa tejto kontroly.
- `po-kontrole/07-skryt-vyradene-kategorie.csv`: 101 kategórií, nahrať do **Produkty → Kategórie → Import** až keď v nich nezostane žiadna živá karta s touto predvolenou kategóriou a presuny budú overené. Skrytie predvolenej kategórie môže skryť jej produkty. Tento súbor kategórie nemaže.
- Kontrolné CSV v `prehlad/` sa **neimportujú**. Zobrazujú celý strom, staré a nové priradenia a cieľ pri zrušení vetvy.

## Ako sa budú radiť ďalšie produkty

Najprv podľa pôvodnej dodávateľskej cesty a existujúcich mapovaní. Potom sa použijú presné overené opravy podľa dodávateľa, kódu a EAN a 49 konzervatívnych pravidiel podľa názvu v príslušnej nadradenej vetve. Pri nejednoznačnom názve ostane nový výrobok v rodičovi; systém nevytvorí neoverenú ďalšiu kategóriu. Prah 8 sa pri nových vetvách prepočítava zo všetkých feedov po filtroch viditeľnosti a deduplikácii EAN. Pri poklese sa produkty vo feedoch vrátia do rodiča; samotnú stránku v Shoptete skript neskrýva. Ručne vedený sortiment mimo feedov sa nočným importom nemení.

Chovateľské potreby zachovávajú hlavné typy pôvodného stromu INNPRO; menšie skupiny ostávajú v nadradenej vetve. BOSE a BOSE Professional sú rozdelené podľa typu zariadenia a príslušenstva, aby mohli značkové stránky odkazovať na správny sortiment.

## Presmerovania

Ponechané kategórie a produkty nemenia URL. Nové adresy nekolidujú s exportom kategórií, známou sitemapou ani uloženým zoznamom presmerovaní. V tejto fáze sa **žiadny súbor presmerovaní nenahráva a staré presmerovania sa nemažú**. Skrytie nie je odstránenie stránky. Ak sa neskôr staré kategórie definitívne odstránia, pripraví sa 301 podľa skutočného stavu; cieľové adresy sú už v prehľade vyradených vetiev.

## Overenie a pôvod podkladov

Živý export: 27 247 kariet, 18. 9. 2026. Dodávateľské feedy: 26 975 položiek, po už nasadených 1 071 presných opravných pravidlách. Nová dávka mení 2721 feedových zaradení a plánuje 3578 živých kariet vrátane dvoch ručných BOSE. Počítajú sa viditeľné unikátne EAN, pri chýbajúcom EAN dodávateľ + kód. Ide o kontrolu identity, pravidiel, ciest a prahu; nejde o tvrdenie, že každý technický údaj každého výrobku bol individuálne overený u výrobcu.

Nová dávka nahrádza starý balík `import-kategorii-2026-09-18` a staré súbory v `migrations/categories-2026-09-18/`. Tie už nepoužívať.

Podklady k formátu: [Shoptet – kategórie](https://podpora.shoptet.sk/kategorie-produktov/), [Shoptet – import produktov](https://podpora.shoptet.sk/import-produktov/). Interné výsledky kontroly a odtlačky sú v `kontrola-balika.json` a `manifest.json`.

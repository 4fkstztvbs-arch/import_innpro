# Kategórie PremiumStore: pripravené na upload

61 nových kategórií, SEO pre 91 kategórií, 2 337 overených produktových presunov.

## Aktuálny stav

Kód a overené produktové pravidlá sú v hlavnej vetve. Nové zaradenie je vypnuté (`enabled: false` v `data/approved-category-migration.json`). Pôvodné aktívne mapovania a XML feedy sa týmto commitom nemenia. Sedem synchronizácií už obsahuje pripravený záverečný krok, ktorý do aktivácie nič nemení.

## Teraz v Shoptete

1. Uložiť aktuálny export kategórií, produktov a presmerovaní ako zálohu.
2. V Marketing → Základné SEO → Presmerovanie adries odstrániť 22 pravidiel uvedených v `manualne/00-presmerovania-na-odstranenie-NEIMPORTOVAT.csv`. Tento súbor je zoznam na odstránenie, nie mazací import. Zdrojové adresy sa znova použijú pre kategórie.
3. V Produkty → Kategórie → Import nahrať postupne súbory `import/01-nove-kategorie-L2.csv`, `02-nove-kategorie-L3.csv`, `03-nove-kategorie-L4.csv`, `04-nove-kategorie-L5.csv` a `05-seo-existujucich-kategorii.csv`. Po každom overiť log. CSV používajú bodkočiarku a UTF-8.
4. Potvrdiť dokončenie uploadu a poskytnúť aktuálny produktový export na kontrolu ručných priradení a variantov. Zatiaľ nenahrávať produktový súbor 06 ani presmerovanie 07 a nemažať pôvodnú kategóriu.

## Aktivácia po uploade

V jednej zmene nahradiť `data/known-categories.json`, `data/category-urls.json` a tri súbory `data/kategorie/{atos,innpro,kb}.json` ich pripravenými verziami z `data/category-rollout-2026-09-18/` a nastaviť `enabled: true` v konfigurácii migrácie. Potom:

```sh
node --test scripts/test-approved-categories.js
node scripts/apply-approved-categories.js
node scripts/apply-approved-categories.js --write
node scripts/add-category-links.js
node scripts/check-category-links.js
```

Kategorizátor číta všetkých osem feedov. Kontroluje dodávateľa, kód a EAN. Nové skupiny musia mať aspoň 8 viditeľných unikátnych EAN (bez EAN dodávateľ + kód); pri poklese ostáva produkt v rodičovi. Nové modely bez overeného priradenia ostávajú podľa pôvodného mapovania. Počet produktov a ostatné produktové údaje sa nemenia.

Aktivovaný krok beží po filtroch viditeľnosti a pred interným prelinkovaním. Pri nedostatočnom počte reportuje potrebu preveriť viditeľnosť stránky v Shoptete; sám stránky neskryje ani nezmaže. Po aktivácii musí Shoptet pri pravidelných importoch aktualizovať kategórie.

## Následné importy

`06-produkty-zaradenie.csv` je voliteľný jednorazový presun existujúcich produktov, ktorý treba najprv porovnať so živým exportom. Použiť režim bez mazania produktov/variantov mimo súboru. Zachovať produktové URL. Prázdny pairCode zodpovedá samostatným produktom; prípadné živé varianty sa musia najprv zosúladiť.

`07-nove-presmerovanie-301.csv` pridať až pri finálnom zlúčení Ostatných chovateľských potrieb: po presune všetkých živých produktov odstrániť starú kategóriu a overiť 301 na `/chovatelske-potreby/`. Samotné skrytie kategórie nepreukazuje funkčné presmerovanie.

## Overenie

Podklady: živý export kategórií z 18. 9. 2026 a osem XML feedov pri commite 7ff4cad17b4cd77a6e96ec5094b438843ac2b584. Pred publikovaním sa overila ich zhoda s aktuálnym main. Skúšobné spracovanie zachovalo 26 975 produktov a zmenilo presne 2 337 zaradení, všetkých 61 nových kategórií spĺňa prah. Opakovaný beh bol bez ďalších zmien. Kontrola interných odkazov: 0 nesprávnych. Import do Shoptetu ani kontrola živého produktového exportu ešte neboli vykonané.

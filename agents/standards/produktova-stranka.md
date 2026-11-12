# Štandard produktovej stránky

Verzia 1 (10. 11. 2026). Vychádza z prieskumu prvého dňa ([findings/obsah-produktov.md](../findings/obsah-produktov.md), [findings/seo.md](../findings/seo.md), [findings/konverzie-ux.md](../findings/konverzie-ux.md)) a zo zásad Google pre produktové stránky a štruktúrované dáta a z výskumu použiteľnosti produktových stránok (Baymard). Štandard vlastní rola obsah, mení ho po dohode s rolou SEO a raz mesačne ho porovná s aktuálnymi postupmi z internetu.

## Čo má stránka obsahovať

| Časť | Požiadavka |
|---|---|
| Názov (H1) | Typ produktu + značka + model + 1 až 2 rozlišovacie parametre (kapacita, výkon, farba). Slovensky, do približne 80 znakov, model presne podľa výrobcu, bez kódov dodávateľa a veľkých písmen. |
| Krátky popis | 150 až 250 znakov, 1 až 2 vety: čo to je, pre koho, 2 až 3 kľúčové parametre. Nie ustrihnutý začiatok dlhého popisu. |
| Popis | Slovensky, 250 až 600 slov podľa zložitosti (jednoduchý produkt 150 až 250). Poradie: úvod (čo to je, pre koho, čo rieši) → 2 až 4 sekcie `h2` s prínosmi a situáciami použitia → zoznam kľúčových vlastností (číslo a jednotka) → tabuľka technických parametrov → obsah balenia a kompatibilita (len overené) → 3 až 6 častých otázok (`h3` otázka, odsek s priamou odpoveďou) → 2 až 4 interné odkazy na existujúce stránky (kategória, alternatíva, príslušenstvo). |
| Dôležité obmedzenia | Kompatibilita a podmienky použitia (napr. „len pre autá s káblovým CarPlay“) hneď v úvode, nie na konci. |
| Parametre | Vyplnené parametre podľa kategórie (nielen značka a záruka), jednotné názvy a jednotky v celej kategórii, bez duplicít a prázdnych riadkov. |
| Fotografie | Aspoň 3 (hlavná na bielom pozadí, detail, v použití alebo rozmery), najmenej 500 × 500 px, bez vodoznakov a textov, uložené v Shoptete (nie odkaz na cudziu doménu). Alt text opisuje, čo je na obrázku, vrátane modelu. |
| SEO titulok | 50 až 60 znakov: model a typ produktu, prípadne jeden parameter. Zhoduje sa obsahom s H1. Bez „| premiumstore.sk“. |
| Meta popis | 120 až 155 znakov: prínos a 1 až 2 parametre. Bez „skladom“, cien, termínov dodania a výkričníkov. |
| Hmotnosť | Skutočná hmotnosť produktu z údajov výrobcu alebo dvoch zdrojov, ak je vo variante nula alebo zjavne zástupná hodnota. |

## Technická čistota

- Čisté HTML: `h2`, `h3`, `p`, `ul`, `table`. Bez `h1`, `<font>`, reťazcov `<br>`, inline štýlov, `<style>` blokov, skrytého obsahu a `&nbsp;`.
- Žiadne obrázky ani prílohy načítané z domén dodávateľov.
- Žiadne opakovanie toho istého textu v dvoch blokoch a žiadne všeobecné vety bez informácie („prispôsobte parametrom variantu“).
- Rozpory medzi názvom, popisom a parametrami sa neprenášajú. Hodnota, ktorá sa nedá overiť, sa vynechá.

## Jazyk a tón

Slovenčina, vykanie, vecne. Vety, ktoré by zákazník povedal predavačovi alebo zadal do vyhľadávača. Bez superlatívov („najlepší“, „revolučný“) a bez sľubov, ktoré e-shop nevie zaručiť. Kľúčové frázy od roly SEO použiť prirodzene v úvode, podnadpisoch a otázkach.

## Zdroje faktov

1. Stránka výrobcu, dátový list, návod.
2. Feed dodávateľa.
3. Aspoň dva nezávislé veľké obchody, ak výrobca údaj neuvádza.

Recenzie a diskusie slúžia len na zistenie, čo sa ľudia pýtajú, nie ako zdroj parametrov.

## Triedy kvality (pre skóre katalógu)

| Trieda | Opis |
|---|---|
| A | Spĺňa štandard: štruktúra, parametre, otázky, aspoň 3 fotografie, správne meta |
| B | Šablóna s reálnymi údajmi, s chybami (duplicity, nerelevantné odkazy, 1 fotografia) |
| C | Šablóna bez údajov, všeobecný text |
| D | Surový import: český alebo strojový text, takmer prázdny popis, cudzie HTML |

Cieľ roly obsah je presúvať produkty do triedy A v poradí: produkty s návštevnosťou a predajmi, hlavné kategórie, dlhý chvost. Podiel tried meria rola meranie na týždennej vzorke.

## Kontrolný zoznam pred zápisom

- [ ] Každé tvrdenie má zdroj.
- [ ] Názov, popis a parametre si neodporujú.
- [ ] Interné odkazy vedú na existujúce a viditeľné stránky (URL zo Shoptetu, nie z pamäti).
- [ ] Titulok a meta popis majú správnu dĺžku a sú jedinečné.
- [ ] Menia sa len obsahové polia. Cena, sklad, dostupnosť a viditeľnosť sú po zápise rovnaké.
- [ ] Pôvodné hodnoty sú v `changelog/`.

## Šablóna názvu produktu

Platí pre všetky roly (obsah, SEO). Zosúladené 12. 11. 2026 so zásadami v `agent/rules/product-content-seo.md` (značka + model + overené rozlišovacie znaky, prirodzená slovenčina, bez keyword stuffingu) a s existujúcimi 2 221 záznamami v `data/localization/product-names-sk.json` (tvar „Typ Značka Model“). Šablónu potvrdil Martin 12. 11. 2026.

Tvar: `{Typ produktu} {Značka} {Model} {1 až 2 rozlišovacie parametre}`

- Typ produktu je to, čo človek hľadá, po slovensky a v prvom páde (napr. „Bezdrôtový adaptér CarPlay“, „Herný volant“, „Záväzacia loď“).
- Značka a model presne podľa výrobcu (veľkosť písmen a medzery ako na krabici), bez kódov dodávateľa.
- Parametre len tie, ktoré odlišujú variant: kapacita, výkon, farba, rozmer. Najviac dva.
- Do približne 80 znakov, bez „…“, bez veľkých písmen celého názvu, bez názvu obchodu a bez slov o cene alebo dostupnosti.
- Mení sa len `name` (a zodpovedajúci titulok). URL, kód a EAN sa nemenia. Pôvodný názov ide do `changelog/`.
- Import dodávateľov názov, popis ani meta údaje neprepisuje (prepis je vypnutý, potvrdil Martin 12. 11. 2026), preto stačí zápis priamo do Shoptetu a override vrstva netreba.

Príklady: „Bezdrôtový adaptér CarPlay Ottocast OTTOAIBOX P3 Pro“, „Herný volant Moza Racing R5 Pro“, „Záväzacia loď Flytec V803 12 000 mAh“.

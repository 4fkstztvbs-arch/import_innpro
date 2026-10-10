# NÁVOD (skill) pre ChatGPT: prepis popisov produktov PremiumStore.sk

Tento dokument je kompletné zadanie. Prečítaj ho celý a drž sa ho presne. Tvojou úlohou je pokračovať v práci, ktorú doteraz robil Claude: prepisovať popisy produktov e-shopu **PremiumStore.sk** (Shoptet) po kategóriách, v rovnakej kvalite, v rovnakom dizajne a rovnakým postupom. **Pred začatím si prečítaj `STAV.md` (Hotové/Čakajúce) a nerob znova kategórie, ktoré sú hotové.**

Súbory v tomto balíku:
- `NAVOD-CHATGPT.md` – tento návod
- `STAV.md` – zoznam Hotové / Rozpracované / Čakajúce
- `vzor-popis.html` – kompletný vzorový popis jedného produktu (struktúru a triedy kopíruj presne)
- `zadanie-agent-v2.md` – pôvodné zadanie pre pisateľov (pravidlá obsahu sú rovnaké ako nižšie)
- `kvasnicka-odporucania.txt` – odporúčania Jana Kvasničku (konverzia, ranking, e-shop v dobe AI); pri tvorbe obsahu ich zohľadňuj
- `skripty/` – skripty na stiahnutie zoznamu produktov, prípravu vstupov a zloženie importného CSV (`scrape.py`, `prep2.py`, `prep4.py`, `catasm.py`)
- `rozpracovane/smart-telefony-2/` – rozpracovaná kategória Smart telefóny

## 1. Cieľ a kontext
- E-shop: https://www.premiumstore.sk (Shoptet). Majiteľ: Martin. Komunikácia po slovensky.
- Cieľ: bohaté, informačné a presvedčivé popisy produktov (SEO, viditeľnosť v Google/AI, konverzia). Každý produkt dostane vlastný, výskumom podložený popis, ktorý vyzerá rovnako ako vzor.
- Výstup za kategóriu: **jeden importný CSV súbor** pre Shoptet s tromi stĺpcami `code;pairCode;description`.
- Robí sa po kategóriách, viac kategórií za jeden beh. Martin importuje viac CSV naraz. Po dokončení kategórie rovno pokračuj ďalšou (Martin: „po dokončení pokračuj automaticky ďalšou dávkou“).
- Plánovaná je z toho denná rutina (SEO, viditeľnosť, konverzie) – vždy aktualizuj `STAV.md`.

## 2. Zdroje dát
1. **Zoznam produktov kategórie na živom webe** – iba produkty, ktoré na webe naozaj existujú (import aktualizuje existujúce produkty). Skript `scrape.py <slug>` prejde `https://www.premiumstore.sk/<slug>/` aj `/strana-N/` a uloží kód → [url, názov]. Kód produktu je v `data-micro="sku"`.
2. **Feedy dodávateľov** v repozitári `4fkstztvbs-arch/import_innpro`, priečinok `output/` (XML Shoptet formát): `atos.xml` (kódy s prefixom `AT_`), `kb.xml` (`KB_`), `penta.xml` (`PEN_`), `basys.xml` (`BAS_`), `solight.xml` (`SOL_`), `monacor.xml` (`MON_`), `wiim.xml` (`WII_`), `innpro.xml` (**kódy BEZ prefixu = vždy dodávateľ InnPro**). Raw odkaz: `https://raw.githubusercontent.com/4fkstztvbs-arch/import_innpro/main/output/<feed>.xml`.
   - Prefix v kóde na Shoptete odpovedá feedu; v feede je kód bez prefixu (napr. `KB_100001957693` → v `kb.xml` je `100001957693`). Kód bez prefixu na Shoptete (napr. `062394`) hľadaj priamo v `innpro.xml`.
   - NIKDY netvrď, že produkt „nie je v našich feedoch“, kým si neskúsil VŠETKY feedy (Martin to už raz opravoval).
   - Z feedu využi: NAME, MANUFACTURER, EAN, WARRANTY, SHORT_DESCRIPTION, DESCRIPTION, TEXT_PROPERTY (parametre), IMGURL/IMAGE (obrázky).
3. **Web (WebSearch/WebFetch)** – pre KAŽDÝ model (alebo sériu) vyhľadaj stránku výrobcu a overené špecifikácie. Popis iba z feedu je podpriemerný a nežiaduci.

## 3. Postup pre jednu kategóriu (krok za krokom)
1. Zisti slug kategórie z URL na webe (napr. `sluchadla`; pozor: niektoré slugy presmerúvajú, napr. káva → `kavovary-a-espressa`, fritézy → `fritezy-a-hrnce`).
2. `python3 scrape.py <slug>` → `/tmp/cat-<slug>.json` (kód → [url, názov]).
3. Z priečinka repozitára (kvôli ceste `output/*.xml`) spusti `python3 skripty/prep4.py <slug>` (nastav `PSBASE=<pracovný priečinok>`). Vytvorí `<PSBASE>/<slug>/web-produkty.json`, nájde produkty vo všetkých feedoch a rozdelí ich do `vstup/skupina-NN.json` po 17 produktov. Produkty, ktoré nie sú v žiadnom feede, vypíše – tie dostanú len popis, ak z feedu existujú údaje (inak sa vynechajú; neprepisuj ich bez zdroja).
4. Pre každú skupinu napíš popisy (pravidlá v sekcii 4, vzor `vzor-popis.html`) a ulož ich do `vystup/skupina-NN.json` ako objekt `{"KÓD": "<div class=\"ps-product-catalog\" ...>...</div>", ...}` pre všetky kódy zo vstupu. Zdroje zapíš do `zdroje-skupina-NN.md` (interná poznámka, nie do popisu). Validný JSON, popis končí `</div>`.
5. Pred zložením doplň do slovníka `REL` v `catasm.py` pre novú kategóriu 3–4 súvisiace kategórie (reálne URL z webu): `REL['<slug>']=[('/url/','Názov','Krátky popis.'),...]`.
6. `python3 skripty/catasm.py <slug>` – vyčistí zakázané frázy, pridá odkazy na ďalšie modely rovnakej značky (blok `#psc-dalsie`) a súvisiace kategórie (`#psc-suvisiace`), skontroluje a zapíše `import-<slug>-2026-10-09.csv`. Premenuj súbor na `import-<slug>-<dnešný dátum>.csv`.
7. Kontrola (povinná) – pozri sekciu 6.
8. Súbor daj do repozitára do `migrations/popisy-kategorie-<dátum>/` (cez PR do `main`; PR do import_innpro sa môžu mergovať bez pýtania), over, že GitHub Pages vráti HTTP 200 a pošli Martinovi odkaz `https://4fkstztvbs-arch.github.io/import_innpro/migrations/popisy-kategorie-<dátum>/<súbor>.csv`.
9. Aktualizuj `STAV.md` (presun kategóriu do Hotové, uveď počet a súbor).

Ak nemáš prístup k súborovému systému/kódu: Martin ti dodá `output/*.xml` a zoznam produktov; skripty slúžia ako presná špecifikácia – rovnaký výsledok vieš dosiahnuť ručne (zloženie CSV podľa sekcie 5).

## 4. PRAVIDLÁ OBSAHU (záväzné, od majiteľa)
0. **Výskum je povinný**: pre každý model/sériu aspoň jedno vyhľadanie stránky výrobcu alebo overených špecifikácií a výsledok premietni do popisu. Ak nič nenájdeš, použi len všeobecnú znalosť typu produktu (použitie, výber, údržba) – žiadne vymyslené čísla.
1. Používaj iba OVERENÉ pozitívne fakty. Čo neviem overiť → jednoducho NESPOMÍNAŠ.
2. **Zakázané vety/slová**: „Vo feede neuvedený“, „neuvádzame“, „údaje sa líšia“, „podľa dodávateľa/feedu“, „v podkladoch“, „overte si“, „nepodarilo sa overiť“, „zdroje sa rozchádzajú“, „maloobchod…“. Žiadne upozornenia na nevýhody ani „chyby“: nepíš o vysokej spotrebe, o energetickej triede (ani v tabuľke), o chýbajúcich vstupoch/funkciách, nerob blok „Čo produkt nerieši / Dôležité pred výberom“, žiadne FAQ s negatívnou odpoveďou („Nie, nepodporuje…“). Píš, v čom je produkt dobrý, pre koho je a ako sa používa.
3. Vlastnými slovami po slovensky (nie strojový preklad), vecne, presvedčivo, informačne bohato. Aspoň 3 údaje špecifické pre model a aspoň 4 otázky FAQ s pozitívnou/informačnou odpoveďou (rozmery, inštalácia, údržba, použitie, balenie, záruka).
4. **Obrázky**: iba URL z poľa `images` zo vstupu (hero = prvý). Popis MUSÍ mať obrázok z feedu. Ak žiadny nie je, hero bez `<img>`.
5. V parametroch vždy: kód modelu/produktu, EAN, záruka (z feedu) a najdôležitejšie overené technické údaje. Nepíš ceny, dostupnosť ani dodacie lehoty. Ak je záruka vo feede prázdna, uveď 24 mesiacov (zákonná) alebo záruku vynechaj; nikdy nepíš „1 mesiac“ ani nič, čo zavádza.
6. Slovenská typografia: slovenské úvodzovky „takto“, desatinná čiarka, medzera pred jednotkou (50 h, 3,5 mm, 196 g), rozmery „310 × 260 × 110 mm“.
7. Farebné varianty (rovnaký model, iná farba) majú vlastný popis s farbou v názve/parametroch; texty môžu byť takmer rovnaké, ale `id`, kód, EAN, farba a obrázok sú špecifické. Pri variantných produktoch musia mať popis VŠETKY kódy variantov.
8. Žiadny `<script>`, žiadny `<style>`, žiadne externé odkazy (okrem odkazov, ktoré pridá `catasm.py`). Odkazy na iné modely a súvisiace kategórie NEPÍŠ ty – doplní ich skript.
9. Konzultuj odporúčania v `kvasnicka-odporucania.txt` (obsahová štruktúra, FAQ, dôveryhodnosť, AI-viditeľnosť).
10. Kvalita: žiadne všeobecné frázy typu „skvelý produkt“. Každý popis má konkrétnu hlavnú myšlienku produktu (hero nadpis), 3 fakty, sekciu „Pre koho je“, 3 výhody v kartách, tabuľku parametrov, FAQ a záručnú poznámku.

## 5. Dizajn a štruktúra popisu (presne podľa `vzor-popis.html`)
Poradie blokov (jeden koreňový `<div class="ps-product-catalog" id="ps-<slug-modelu>">`):
1. `div.psc-hero` → `div.psc-hero-copy` (`div.psc-eyebrow` „Značka · Model“, `h2` s `<br>` – krátky úderný nadpis s hlavným prínosom, 2 odseky, `p.psc-muted` „Značka X · kód Y [· farba Z]“) + `<img src="URL z feedu" alt="Popis produktu" loading="lazy" decoding="async">`
2. `div.psc-facts` → 3× `<div><strong>hodnota</strong><span>popis</span></div>` (3 najsilnejšie overené čísla)
3. `nav.psc-nav` s odkazmi `#psc-vyuzitie`, `#psc-vyhody`, `#psc-parametre`, `#psc-faq` (text „Pre koho je ↓“, „Výhody ↓“, „Parametre ↓“, „Otázky ↓“)
4. `section#psc-vyuzitie` → `div.psc-row` → `div` s `span.psc-eyebrow` „01 / KOMU SA HODÍ“, `h2`, 2 odseky
5. `section.psc-section.psc-soft#psc-vyhody` → `span.psc-eyebrow` „02 / ČO PONÚKA“, `h2` „Čo vám tento model prinesie.“, `div.psc-cards` s 3× `div.psc-card` (`h3` + `p`)
6. `section#psc-parametre` → `span.psc-eyebrow` „03 / BEZ DOHADOV“, `h2` „Technické parametre“, `div.psc-specs` s `div.psc-spec` (`<span>Názov</span><b>Hodnota</b>`)
7. `section.psc-section.psc-soft#psc-faq` → `h2` „Otázky pred nákupom“, 4+ × `<details open><summary>Otázka</summary><p>Odpoveď</p></details>`
8. `div.psc-note` → `<strong>Záruka 24 mesiacov</strong>` + veta o záruke
9. (Pridá skript, nepíš sám.) `section#psc-dalsie` „Ďalšie modely, ktoré môžu zaujímať“ (4 modely rovnakej značky) a `section.psc-section.psc-soft#psc-suvisiace` „Súvisiace kategórie“.

CSS pre tieto triedy je už nasadené na webe (balík `premiumstore-trust-20261009.css` / bundle) – nepridávaj vlastné štýly.

## 6. Kontrola pred odovzdaním
- Počet riadkov CSV = počet produktov kategórie na webe, ktoré sú v nejakom feede; v súbore nie sú duplicitné kódy.
- Hlavička presne `code;pairCode;description` (pairCode prázdny; pri produktoch bez variantov MUSÍ stĺpec existovať – inak Shoptet hlási „Chýba požadovaný údaj pairCode“).
- Formát: UTF-8 s BOM, oddeľovač `;`, všetky polia v úvodzovkách, `"` v HTML zdvojené (`""`), riadky ukončené CRLF.
- Každý popis: obsahuje `<img` (výnimka: produkt bez obrázka vo feede), min. 4 `<details>`, končí `</div>`, nemá `<script`/`<style`.
- Regulárny audit zakázaných výrazov (nad textom bez HTML): `feed|dodávateľ|spotreb(?!i)|energetick|neuvád|podklad|nenašli|overte|1 mesiac|nepodarilo|rozchád|maloobchod`. Zhody skontroluj ručne (neškodné sú napr. „spotrebiče“ v odkaze, „podklad“ = povrch, „zdroje“ = zdroje signálu).
- Skontroluj náhodne 3 popisy: sedí model, farba, EAN a obrázok pre daný kód.
- Prelinkovanie funguje (odkazy `href="/…/"` existujú na webe).

## 7. Čo sa už stalo zle (nezopakuj)
- Tvrdenie „21 produktov nie je v našich feedoch“, pretože sa hľadalo len v ATOS a K-B → hľadaj vo VŠETKÝCH feedoch.
- „Vo feede neuvedený“ a upozornenia na „chyby“ produktu (spotreba, energetická trieda) → zakázané.
- Skripty bez `output/` v pracovnom priečinku nenájdu feedy (spúšťaj z koreňa repozitára).
- Záruka „1 mesiac“ pri jednej kolobežke (AT_ABL-16-50-403) – opravená; po regenerácii skontroluj znova.
- Veľa produktov v jednom agentovi/odpovedi zhoršuje kvalitu – píš po ~17 produktoch.

## 8. Ostatné dôležité informácie o projekte (kontext)
- Shoptet pri importe od dodávateľov už neprepisuje názov produktu ani SEO polia; popisy importované CSV preto zostanú.
- Konvencia názvov produktov (Martin): slovenský názov priateľský pre Google, čo produkt je + kľúčová vlastnosť, potom značka + model + variant, napr. „Bezdrôtové slúchadlá s otvorenou konštrukciou Edifier Comfo C (čierne)“. Názvy rieši Martin týždenným exportom/importom; v popisoch názov nemeň.
- Odpovede Martinovi vždy po slovensky, stručne, s odkazom na CSV a upozornením na produkty bez popisu / slabo overené modely.

## 9. Odporúčaný denný postup (rutina)
1. Otvor `STAV.md`, vyber najbližšiu kategóriu z „Rozpracované“, potom z „Čakajúce“.
2. Dokonči ju podľa sekcie 3, over, publikuj CSV, pošli odkaz Martinovi.
3. Aktualizuj `STAV.md`.
4. Opýtaj sa Martina len na to, čo nevieš zistiť (import hotových CSV potvrdzuje on).

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


---
# PRÍLOHA 1: STAV.md

# Stav prepisu popisov – Hotové / Čakajúce (k 2026-10-10)

Základný odkaz na CSV: `https://4fkstztvbs-arch.github.io/import_innpro/migrations/popisy-kategorie-2026-10-09/<súbor>`
(Televízory: `.../migrations/televizory-popisy-2026-10-09/<súbor>`)

## A) HOTOVÉ – CSV vytvorené (tieto kategórie NEROBIŤ znova)

Stĺpec „Import“: ✔ = Martin potvrdil import; ? = CSV je hotový, ale Martin import zatiaľ nepotvrdil (overiť s ním, nepísať znova).

| Kategória (slug na webe) | Produktov v CSV | Súbor (platný / posledný) | Import |
|---|---|---|---|
| Televízory (`televizory`) | 136 | televizory-popisy-2026-10-09-v2.csv (v1 už importovaná, v2 = bez nevýhod, nahrádza v1) | v1 ✔, v2 ? |
| Práčky (`pracky`) | 95 | import-pracky-2026-10-09.csv | ✔ |
| Chladničky (`chladnicky`) | 111 | import-chladnicky-2026-10-10.csv (nahrádza 2026-10-09, 108) | 10-09 ✔, 10-10 ? |
| Mrazničky (`mraznicky`) | 20 | import-mraznicky-2026-10-09.csv | ✔ |
| Soundbary (`soundbary`) | 50 | import-soundbary-2026-10-10.csv (nahrádza 2026-10-09, 29) | 10-09 ✔, 10-10 ? |
| Varné dosky (`varne-dosky`) | 58 | import-varne-dosky-2026-10-10.csv (nahrádza 2026-10-09, 52) | 10-09 ✔, 10-10 ? |
| Monitory (`monitory`) | 12 | import-monitory-2026-10-10.csv | ? |
| Projektory (`projektory-4`) | 66 | import-projektory-4-2026-10-10.csv | ? |
| Športové vybavenie (`sportove-vybavenie`) | 142 | import-sportove-vybavenie-2026-10-10.csv | ? |
| Satelitné prijímače (`satelitne-prijimace`) | 67 | import-satelitne-prijimace-2026-10-10.csv | ? |
| Fritézy a hrnce (`fritezy-a-hrnce`) | 136 | import-fritezy-a-hrnce-2026-10-10.csv | ? |
| Kávovary a espressá (`kavovary-a-espressa`) | 221 | import-kavovary-a-espressa-2026-10-10.csv | ? |
| Fotovoltaika (`fotovoltaika`) | 546 | import-fotovoltaika-kompletne-2026-10-10.csv (nahrádza čiastkový s 274) | ? |
| Prenosné Bluetooth reproduktory (`audio-technika-prenosne-bluetooth-reproduktory`) | 44 | import-audio-technika-prenosne-bluetooth-reproduktory-2026-10-10.csv | ? |
| Slúchadlá (`sluchadla`) | 459 | import-sluchadla-2026-10-10.csv | ? |

Poznámka: súbory `*-2026-10-09.csv` sú staršie verzie (len produkty z feedov ATOS a K-B); súbory `*-2026-10-10.csv` sú ÚPLNÉ (obsahujú aj produkty InnPro, Penta, Basys...) a majú sa importovať namiesto nich.

Produkty, ktoré nemajú popis, lebo nie sú v ŽIADNOM našom feede (nemá z čoho vzniknúť): ~37 Fotovoltaika, 10 Soundbary (Sonos), 2 Satelitné (VU+ Duo 4K, Abcom), 14 BT reproduktory (Sonos Roam/Move a pod.), 21 Kávovary, 1 Slúchadlá (komunikačná súprava Bluetooth).

Známe drobné nedostatky v hotových CSV (opraviť pri najbližšej príležitosti, nie je to blokujúce):
- Slúchadlá: Monacor MD-390 a MD-480 nevysvetľujú, že 6,3 mm adaptér patrí k slúchadlám; MD-460 má impedanciu 32 Ω z feedu (iný zdroj uvádzal inú hodnotu – overiť).
- Slúchadlá: tri herné myši (kódy 088722, 088723, 088724) sú v kategórii omylom, majú popis ako myši.
- Produkty s prázdnou zárukou vo feede majú „24 mesiacov“ alebo záruku vynechanú (Martin chcel overiť pri kódoch 086330, 095146, 091858, 093486).
- Slabo overené modely (v popise je len to, čo sa potvrdilo): napr. Remosky, Beper, Amiko, Sati, Starbucks, Ariete, Rixon, ONIKUMA, QCY.

## B) ROZPRACOVANÉ – doťahnúť

**Smart telefóny** (slug `smart-telefony-2`, 220 produktov, 13 skupín po 17):
- skupiny 01–08 (136 produktov) sú napísané: `rozpracovane/smart-telefony-2/vystup/skupina-01..08.json`
- skupiny 09–13 (84 produktov) NIE SÚ napísané: vstupy sú v `rozpracovane/smart-telefony-2/vstup/skupina-09..13.json`
- Postup: napísať 09–13 podľa NAVOD-CHATGPT.md, uložiť do `vystup/skupina-09..13.json`, potom spustiť `catasm.py smart-telefony-2` (predtým doplniť do slovníka REL v catasm.py súvisiace kategórie pre telefóny, napr. /mobilne-telefony-a-prislusenstvo/, /sluchadla/, /nabijacky-a-powerbanky/ – overiť reálne URL na webe).

## C) ČAKAJÚCE – ešte nezačaté

- Reprosústavy (slug nenájdený – nájsť v menu `https://www.premiumstore.sk/`; „veľká“ kategória)
- Grafické tablety (slug nenájdený)
- Všetky ostatné kategórie obchodu, ktoré nie sú v tabuľke A (zoznam odkazov: `https://www.premiumstore.sk/sitemap.xml` alebo menu). Odporúčané poradie: najprv kategórie s najviac produktmi a najvyššou návštevnosťou/obratom (overiť v GA4/Shoptete), potom menšie.
- Produkty bez prefixu v kóde = InnPro (nikdy ich nepovažovať za „nie sú v našich feedoch“).

## D) Pravidlá importu (Martin)
- Import cez Shoptet: Produkty → Import → aktualizácia existujúcich produktov; hlavička `code;pairCode;description`; manuálny import nemá limit.
- Po importe skontrolovať 2–3 produkty na webe (obrázok, FAQ, odkazy, mobil).


---
# PRÍLOHA 2: vzor-popis.html (vzorový popis, kopíruj štruktúru a triedy)

```html
<div class="ps-product-catalog" id="ps-jbl-jr470-bila"><div class="psc-hero"><div class="psc-hero-copy"><div class="psc-eyebrow">JBL · Junior 470NC</div><h2>Detské slúchadlá<br>s potlačením hluku.</h2><p>JBL Junior 470NC sú bezdrôtové náhlavné slúchadlá určené deťom. Majú aktívne potlačenie hluku, Bluetooth 5.3 a výdrž až 50 hodín bez ANC.</p><p>Obmedzenie hlasitosti chráni detský sluch a rodičia môžu nastavenia spravovať v aplikácii JBL Headphones.</p><p class="psc-muted">Značka JBL · kód KB_100002136480 · farba biela</p></div><img src="https://img.b2b.k-b.cz/fotocache/mid/images/orig/JBL/100002136480-202.jpg" alt="Detské slúchadlá JBL Junior 470NC, farba biela" loading="lazy" decoding="async"></div><div class="psc-facts"><div><strong>50 h</strong><span>výdrž bez ANC</span></div><div><strong>28 h</strong><span>výdrž s ANC</span></div><div><strong>196 g</strong><span>hmotnosť</span></div></div><nav class="psc-nav" aria-label="Obsah popisu"><a href="#psc-vyuzitie">Pre koho je ↓</a><a href="#psc-vyhody">Výhody ↓</a><a href="#psc-parametre">Parametre ↓</a><a href="#psc-faq">Otázky ↓</a></nav><section id="psc-vyuzitie"><div class="psc-row"><div><span class="psc-eyebrow">01 / KOMU SA HODÍ</span><h2>Pre deti na cesty, do školy aj k tabletu.</h2><p>Aktívne potlačenie hluku pomáha sústrediť sa na hudbu, audioknihu či výuku aj v hlučnom aute, vlaku alebo triede. Nastaviteľný popruh a sklopné ušnice prispôsobia slúchadlá rastúcej hlave a uľahčia ukladanie do tašky.</p><p>Okrem Bluetooth ponúkajú aj 3,5 mm kábel, takže ich možno použiť aj so zariadením bez bezdrôtového pripojenia, a nabíjajú sa cez USB-C.</p></div></div></section><section class="psc-section psc-soft" id="psc-vyhody"><span class="psc-eyebrow">02 / ČO PONÚKA</span><h2>Čo vám tento model prinesie.</h2><div class="psc-cards"><div class="psc-card"><h3>Chránený sluch</h3><p>Obmedzenie hlasitosti pre bezpečné počúvanie detí.</p></div><div class="psc-card"><h3>Dlhá výdrž</h3><p>Až 50 hodín bez ANC a 28 hodín s ANC; päť minút nabíjania pridá približne 3 hodiny.</p></div><div class="psc-card"><h3>Pohodlie</h3><p>Sklopná konštrukcia a nastaviteľný popruh na hlavu.</p></div></div></section><section id="psc-parametre"><span class="psc-eyebrow">03 / BEZ DOHADOV</span><h2>Technické parametre</h2><div class="psc-specs"><div class="psc-spec"><span>Značka</span><b>JBL</b></div><div class="psc-spec"><span>Model / kód</span><b>JBL JR470 bílá / KB_100002136480</b></div><div class="psc-spec"><span>Farba</span><b>biela</b></div><div class="psc-spec"><span>Typ</span><b>Detské bezdrôtové náhlavné slúchadlá, sklopné</b></div><div class="psc-spec"><span>Potlačenie hluku</span><b>aktívne (ANC)</b></div><div class="psc-spec"><span>Bluetooth</span><b>5.3, profily A2DP, AVRCP, HFP</b></div><div class="psc-spec"><span>Výdrž</span><b>až 50 h bez ANC, 28 h s ANC</b></div><div class="psc-spec"><span>Batéria</span><b>500 mAh, nabíjanie približne 2 h</b></div><div class="psc-spec"><span>Konektory</span><b>USB-C, 3,5 mm jack</b></div><div class="psc-spec"><span>Menič</span><b>20 – 20 000 Hz, 35 ohm</b></div><div class="psc-spec"><span>Hmotnosť</span><b>196 g</b></div><div class="psc-spec"><span>Záruka</span><b>24 mesiacov</b></div><div class="psc-spec"><span>EAN</span><b>1200130016530</b></div></div></section><section class="psc-section psc-soft" id="psc-faq"><h2>Otázky pred nákupom</h2><details open><summary>Hodia sa pre malé deti?</summary><p>Sú určené deťom a majú nastaviteľný popruh, ktorý sa prispôsobí rastúcej hlave.</p></details><details open><summary>Dajú sa použiť aj s káblom?</summary><p>Áno, majú 3,5 mm konektor pre zariadenia bez Bluetooth.</p></details><details open><summary>Ako dlho sa nabíjajú?</summary><p>Plné nabitie trvá približne 2 hodiny cez USB-C.</p></details><details open><summary>Dá sa nastaviť limit hlasitosti?</summary><p>Áno, hlasitosť je obmedzená a rodičia môžu nastavenia upraviť v aplikácii JBL Headphones.</p></details></section><div class="psc-note"><strong>Záruka 24 mesiacov</strong>Na produkt poskytujeme záruku 24 mesiacov.</div></div>
```

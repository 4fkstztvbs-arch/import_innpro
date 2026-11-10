# Audit obsahu produktov PremiumStore.sk (2026-11-10, deň 1)

Stav: len prieskum, nič sa nezapisovalo do eshopu. Rozsah: názvy, krátke a dlhé popisy, parametre, obrázky a alt texty, varianty, súvisiace produkty, texty kategórií. Ceny, viditeľnosť a sklad sa neriešia.

## 0. Metodika a limity (dôležité)
- Katalóg: **27 160 viditeľných produktov**, 769 kategórií, jazyk sk, Shoptet MCP v režime `core` (bez cenníkov, dodávateľov, parametrických kategórií).
- Obsah som zhodnotil na **vzorke 10 produktov** (rôzni dodávatelia, rôzne obdobia importu, najpredávanejšie aj bežné) a na **prvých 50 kategóriách**. **Čísla nižšie preto sú odhad z vzorky, nie sčítanie celého katalógu.** Presné počty prinesie skript z kapitoly 5 (úloha č. 1 plánu).
- Predaj/návštevnosť: GA4 za 13.10.–9.11.2026 (cez OpenSEO/Korzaro, údaje označené ako čiastočné): 3 937 zobrazení položiek, 843 do košíka, 478 kusov, 17,4 tis. € tržieb. Search Console (3 mesiace): domovská stránka 379 klikov, produktové stránky typicky 5–40 klikov.
- Clarity, administráciu Heureky a Chrome som dnes nepoužil; ich dáta patria do ďalších kôl.

## 1. Štandard obsahu produktovej stránky (návrh)
Zhrnutie z rešerše (SEO a UX produktových stránok 2026, štruktúrované dáta Product/Merchant listing, optimalizácia pre AI vyhľadávanie) a z najlepších stránok, ktoré eshop už má (Gorenje WG2PS72A12, DOMO DO496WK).

**Názov (H1)**: typ produktu + značka + model + 1–2 rozlišovacie parametre (kapacita, výkon, farba). Slovensky, max ~80 znakov, bez kódov dodávateľa, bez „katalógový kód“ a bez CAPS.
**Krátky popis** (zobrazuje sa pri produkte a vo výpisoch): 150–250 znakov, 1–2 vety s hlavným prínosom a 2–3 kľúčovými parametrami. Nie skrátený úryvok dlhého popisu a nie reťazec pretnutý „…“.
**Dlhý popis** (slovensky, 250–600 slov podľa zložitosti produktu):
1. Úvod 2–3 vety: čo to je, pre koho, čo rieši (kľúčové slovo prirodzene).
2. 2–4 sekcie `h2` s reálnymi prínosmi a situáciami použitia (nie opis marketingových fráz výrobcu).
3. Zoznam kľúčových vlastností (5–7 bodov, číslo + jednotka).
4. Tabuľka technických parametrov (jednotná sada pre kategóriu, jednotky, žiadne duplicity).
5. Obsah balenia, kompatibilita, čo nie je v cene.
6. 3–6 FAQ (skutočné otázky: rozmery, kompatibilita, montáž, údržba, záruka) – vhodné aj pre AI odpovede.
7. 2–4 interné odkazy: kategória, alternatíva (vyššia/nižšia trieda), príslušenstvo – len **relevantné** a len na existujúce stránky.
**Parametre (Shoptet)**: vyplnené filtračné/popisné parametre podľa kategórie (nielen Značka a Záruka), aby fungovali filtre a porovnanie.
**Obrázky**: min. 3 (hlavný na bielom pozadí, detail, v použití), alt text opisný (čo je na obrázku + model), nie len názov produktu; obrázky hostované v Shoptete (nie cudzia doména), bez `loading=lazy` na hlavnom obrázku.
**Meta**: title 50–60 znakov (model + typ + 1 parameter), description 120–155 znakov s prínosom a výzvou; bez fráz „skladom“ (nie je pravda pri sklade u dodávateľa) a bez „| premiumstore.sk“ duplicít.
**Technicky**: čistý HTML (`h2/h3`, `ul`, `table`), žiadne `<font>`, `<br>` reťazce, nepoužívané inline štýly a skryté bloky; jedna tematická hierarchia nadpisov; popis nesmie byť zdvojený (hero + sekcie opakujúce to isté).
**Dôvera**: záruka, doprava, kontakt vo vlastnom bloku šablóny, nie v každom popise ručne; jednotná záruka (nie 12 aj 24 mesiacov na jednej stránke).

## 2. Zistené nedostatky (vzorka + počty z vzorky)
Produkty sa dajú rozdeliť do štyroch kvalitatívnych tried podľa pôvodu obsahu:

| Trieda | Popis | Príklad | Podiel vo vzorke (n=10) |
|---|---|---|---|
| A – kvalitný, napísaný na mieru | Správna štruktúra, FAQ, tabuľka, relevantné odkazy | Gorenje WG2PS72A12, DOMO DO496WK | 2 |
| B – šablóna s reálnymi dátami | Jednotná „psc“ šablóna, osnova OK, ale chyby (nižšie) | Tassimo Jacobs XL | 1 |
| C – šablóna bez dát | Generický text „prispôsobte parametrom variantu“ | Koma EC07S pre ECG VP 912 | 1 |
| D – surový import dodávateľa | Český text, `<font>`, dodávateľské HTML alebo takmer prázdne | Houba pro pájecí stanice ZD-929C; LiPo 3,7 V/50 mAh; vodič H07V-K; Boxerské rukavice ARB-431; Ottocast (SK, ale bez štruktúry) | 6 |

Podrobne (s príkladmi):
1. **Čeština v obsahu** (D): „Houba pro pájecí stanice“, „Nabíjecí baterie“, celý popis vodiča H07V-K aj boxerských rukavíc česky, vrátane **názvu a URL** (`/houba-pro-pajeci-stanice-zd-929c/`). Odhad: stovky až tisíce produktov z Atos Elektro/AT_ importu.
2. **Takmer prázdne popisy** (D): ZD-929C má popis = „Houba pro pájecí stanice ZD-929C - rozměr 70x40mm“ + odkaz na kategóriu; žiadne parametre okrem Záruky. Typické pre drobný elektromateriál (nový import 4.11.2026, ~6 700. strana zoznamu = tisíce nových položiek).
3. **Meta údaje z šablóny**: „Houba pro pájecí stanice ZD-929C – skladom. Kúpte na premiumstore.sk.“ (tvrdí „skladom“, hoci stock = 0 a sklad je u dodávateľa → riziko pre dôveru; text je fakticky nepravdivý). Meta title končí „| premiumstore.sk“.
4. **Krátky popis** je pri importoch kopírovaný/ustrihnutý z dodávateľa s „…“ (LiPo akumulátor) alebo má nezrovnalosti vs. názov (Tassimo: názov „132,8 g“, krátky popis „144g“).
5. **Šablóna „psc“ (B, C)**: 
   - duplicity v tabuľke parametrov (Značka a Záruka 2×), prázdne „facts“ (`Koma / Značka`, `Koma / vyhotovenie`);
   - generické texty „Využitie a kompatibilitu prispôsobte parametrom konkrétneho variantu“ bez jedinej informácie (trieda C) → thin content, riziko Helpful Content;
   - **nerelevantné „Súvisiace kategórie“**: kávové kapsuly odkazujú na „Fritézy a hrnce“, „Mixery“; vrecká do vysávača na „Klíma, vzduch a vykurovanie“; 
   - hero obrázok načítaný z **cudzej domény** (`img.b2b.k-b.cz`, hotlink, lazy) – nestabilné a nepodporuje CDN Shoptetu;
   - FAQ `details open` rozbalené, odpovede krátke a opakujúce sa.
6. **Hotlink obrázkov a príloh** u INNPRO produktov (`assets.innpro.pl` v popise, `b2b.innpro.sk` pre „Stiahnuť dokument“): odkaz na prílohu s b2b prihlásením nemusí fungovať zákazníkom.
7. **Zlé/chýbajúce parametre**: väčšina produktov má len „Značka“ + „Záruka“ (alebo jeden parameter). Žiadne filtračné parametre (`filteringParameters: []`), čo oslabuje filtrovanie v kategóriách.
8. **Rozpory**: boxerské rukavice – názov „biele“, popis „černo-bílé“, v popise „Záruka 12 měsíců“ vs. parameter „24 mesiacov“.
9. **Obrázky**: väčšina produktov má **1 obrázok** (kanvica, Koma, Tassimo, ZD-929C…); alt text = názov produktu alebo „obrázok 1/2“ (Ottocast). V popise INNPRO sú alt texty dobré, ale súbory sú externé.
10. **Hmotnosť/rozmery** 0 v mnohých variantoch (Tassimo, Koma, ZD-929C) – pre porovnanie a dopravu; netýka sa ceny. (Zmena je v kompetencii dodávateľských dát, len upozornenie.)
11. **Kategórie**: top kategórie majú už dlhý vlastný popis (7–16 tis. znakov) a druhý popis (0,5–3,4 tis.). Väčšina z toho je **CSS** (`<style>` blok na začiatku popisu, napr. 7 tis. znakov štýlov v „3D tlač…“). Podkategórie majú často len ~170–260 znakov hlavného popisu (Autokozmetika, Detské autosedačky, Hračky, Cyklistika…). Treba overiť na webe, aký text zákazník naozaj vidí (CSS vs. obsah) a či sa neopakuje medzi kategóriami. Meta description kategórií 123–153 znakov (OK, na hranici).
12. **Varianty**: v zozname nie sú variantné produkty (všetky vo vzorke `isVariant: false`); farebné verzie sú samostatné produkty (Verbatim Store G2 strieborný/modrý/čierny, MMA rukavice podľa veľkostí S/M, L) → duplicitný obsah a kanibalizácia. Kandidáti na zlúčenie do variantov alebo canonical.
13. **`categories: []`** pri väčšine produktov (len defaultCategory) – produkty sa nezobrazia v ďalších relevantných kategóriách.
14. **Interné odkazy** v dobrých popisoch smerujú na existujúce stránky (OK), v šablóne B/C na nerelevantné kategórie; v D len „Ďalšie produkty nájdete v kategórii“.

## 3. Prioritizácia
Zdroj poradia: GA4 (tržby, zobrazenia, košík) a Search Console (kliky/zobrazenia). Prioritizačné skóre = tržby + 3× kliky GSC + zobrazenia/10; produkty s vysokým počtom zobrazení a nízkou konverziou idú pred ostatné.

**Vlna 1 – produkty s reálnou návštevnosťou** (~50 položiek, ručná kontrola cez Shoptet MCP):
- Cycplus T7 (kód 082897, 17 zobr./7 košík/1 nákup, 1 306 € – najvyššie tržby), Beko B5RMFNE314X (KB_100001916266), ELEGOO Jupiter 2 (085805), VITURE Pro 2 (091439, aj GSC), Merach MR-S26B4 (086620), NIIMBOT C1 (087890), Godox LC500R (091035), Edifier R1855DB (028510), Meross MRS100MA (085436 – 13 nákupov!), Ottocast P3 Pro (087844; aj 25 klikov GSC), Flytec V802 PRO (079985), Gorenje WG2PS72A12 (KB_100002204870 – 79 zobrazení, 21 košík, len 2 nákupy → skontrolovať CTA/dôveru, popis je už dobrý).
- GSC stránky s polohou 4–9 a nízkym CTR (rýchle výhry cez title/meta): POCO F9 Ultra (38 klikov/674 zobr., CTR 5,6 %), Viture Pro 2 XR, GL.iNet Flint 2, MOES BHT-002, Stronglift SL500X (CTR 2,7 %), Aligator A8 (2,8 %), MOVA V70 Ultra (2,7 %), Creality Pika (4,7 %), Ultimea Skywave F40, GMKtec EVO-X2, Samsung QE65QN990F.
- Rodina CarLinkit/Ottocast adaptérov (7 URL v top 40 GSC) – spoločný obsahový blok + porovnanie modelov.
**Vlna 2 – top kategórie** (podľa tržieb a počtu produktov): Práčky/chladničky (KB_ import, 2 500+ položiek), Elektronika do auta, 3D tlač, Fitness/rotopedy, Kávovary a kapsuly, Príslušenstvo k spotrebičom.
**Vlna 3 – dlhý chvost** (hromadná oprava šablónou + preklad): Atos Elektro/AT_ elektromateriál (české texty), Koma/Scanpart príslušenstvo, nové importy.

## 4. Plán úprav (zoradený)
1. **Audit celého katalógu skriptom** (Shoptet MCP `products_list` + `product_detail`, ~27 tis. položiek, rozsekané na dávky po 50; výstup CSV v `agents/findings/audit-obsahu.csv`): meranie jazyka (CZ detekcia), dĺžka krátkeho/dlhého popisu, počet obrázkov, počet parametrov, duplicity parametrov, chybné odkazy, meta dĺžky, externé obrázky. Riadok = produkt, trieda A–D. Zdroj pre priority a pre KPI.
2. **Vlna 1 ručne cez agenta pre obsah** (Sonnet 5.5, skill `eshop-product-content`): napísať popis + FAQ + meta + alt texty. Zápis do eshopu cez `product_update` (len name/popisy/meta/parametre/obrázky, nie ceny/viditeľnosť/sklad). Záloha pôvodného obsahu do `backups/` pred každou zmenou.
3. **A/B test** na 2 skupinách z vlny 1: 10 produktov nový obsah vs. 10 kontrolných (podobné tržby), 4 týždne, metriky GSC CTR + GA4 add-to-cart rate + konverzný pomer. Výsledky do `agents/findings/ab-obsah.md`.
4. **Oprava šablóny „psc“** (zdroj šablóny je v repozitári; nájsť generátor): odstrániť duplicity v parametroch, generické texty zamieňať kategóriovými blokmi (nie vata), prepojiť „súvisiace“ len v rámci rovnakej kategórie, obrázok len z CDN Shoptetu.
5. **Hromadný preklad CZ → SK** pre D produkty (názov, popis, URL ponechať a pridať presmerovanie len ak to Shoptet podporuje; inak nemeniť URL).
6. **Meta šablóny**: odstrániť „skladom“, doplniť parameter a výzvu; kratšie title.
7. **Parametre a filtre**: doplniť 5–8 kľúčových parametrov pre top kategórie; zapnúť filtrovacie parametre.
8. **Obrázky**: doplniť 2. a 3. obrázok z dodávateľských galérií, opisné alt texty (hromadne cez `product_images_add`), presunúť hotlink obrázky na Shoptet CDN.
9. **Kategórie**: audit zobrazeného textu, vyčistiť CSS bloky z popisov (presunúť do témy, ak je možné), doplniť texty podkategóriám s <300 znakmi, FAQ + odkazy na podkategórie.
10. **Varianty**: zlúčiť farebné/veľkostné duplikáty do variantných produktov (po schválení – dotýka sa viditeľnosti/URL).

## 5. KPI a meranie
- Pokrytie: % produktov v triedach A/B (cieľ 70 % do 90 dní pre vlnu 1+2).
- CTR a pozícia v GSC pre upravené URL (týždenne), tržby a add-to-cart rate z GA4.
- Počet produktov s ≥3 obrázkami, ≥5 parametrami, bez češtiny.
- Týždenná správa do reportu o 7:30 s počtom upravených produktov a A/B výsledkom.

## 6. Otvorené otázky pre Martina
- Môžem pri CZ produktoch meniť aj názov a URL (s presmerovaním)? Defaultne meniť názov/popis, URL nechať.
- Zlučovanie farebných duplicitov do variantov je zásah do viditeľnosti/URL – schváliš?

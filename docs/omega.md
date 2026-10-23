# Omega – faktúry, príjemky, naskladnenie

## Shoptet → Omega — prevod odoslaných faktúr (`scripts/transform-omega-invoices.js`)

Shoptet vie exportovať vystavené faktúry vo formáte Stormware Pohoda XML (`Nastavenia → Export → Faktúry`), no účtovníctvo firmy beží v **KROS Omega**, ktorá takýto XML priamo neprijíma — vie importovať len vlastný **tabulátorom oddelený .TXT formát** (`Firma → Import → Import z textového súboru`, riadky `R00`/`R01`/`R02`, T01 = Fakturácia).

**Použitie cez príkazový riadok (ručne, 1× denne):**
1. V Shoptete vyexportuj faktúry do Pohoda XML, ulož ako `data/stormware_invoices.xml`.
2. `node scripts/transform-omega-invoices.js` (predvolené cesty: `data/stormware_invoices.xml` → `output/omega-invoices.txt`).
3. V Omege: `Firma → Import → Import z textového súboru` → vyber `output/omega-invoices.txt`.

**Webový formulár (`omega-import.html`):** rovnaký prevod bez príkazového riadku — statická stránka (dostupná cez GitHub Pages tohto repozitára, napr. `https://<pouzivatel>.github.io/import_innpro/omega-import.html`), celý prevod beží priamo v prehliadači cez JavaScript (rovnaká logika ako v `transform-omega-invoices.js`, výstup je bajt-presne identický — overené testom). Súbor s faktúrami sa nikam neposiela. Postup: nahraj Pohoda XML export → "Prekonvertovať" → stiahni `.txt` → naimportuj v Omege.

**Prepojenie na sklad Eshop ("Kód položky" na faktúre):** Shoptetov Pohoda export síce pri položke posiela vlastný Shoptet kód (napr. `TOC-SX1014`), ale číslo skladovej karty v Omege je úplne iné (napr. `202600001`) — priame použitie Shoptet kódu by sa nezhodovalo so správnou kartou. Preto obe verzie (CLI aj web) pred generovaním zavolajú **Omega cards API** (`GET /state`, pozri nižšie) a podľa Shoptet kódu dohľadajú skutočné číslo karty v sklade Eshop. Ak produkt v databáze kariet chýba (napr. nebol ešte nikdy prijatý cez `naskladnenie.html`), položka sa v exporte označí ako voľná (`V`) namiesto tovaru (`K`) a vypíše sa upozornenie — radšej voľná položka na faktúre než odpis zo zlej/neexistujúcej karty.

**Výdajka zo skladu:** tento nástroj importuje **len faktúru** (T01) — výdajku negeneruje ani neimportuje. V Omege sa výdajka vytvorí automaticky, keď sa faktúra po importe otvorí/edituje a uloží (Omega sa vtedy sama opýta, či vytvoriť výdajku). Skúšali sme aj samostatný T02 import výdajky, no ukázalo sa, že TXT import nevytvára skutočnú väzbu na skladovú kartu (len zhodujúci sa text v "Kód položky"), takže sa touto cestou výdajka nedá spoľahlivo automatizovať — riešenie sa preto zámerne obmedzuje na import faktúry.

**Doprava a dobierka (riadky typu "Služba"):** v Omege sú vedené ako skladové karty typu Služba v evidencii `SL` (stav sa neodpisuje, len sa použije suma) — rovnako ako tovar teda potrebujú svoje vlastné číslo karty, inak sa nedajú spárovať. Kódy sú **napevno zakódované** v oboch nástrojoch (konštanta `SERVICE_CODES`), zistené priamo z Omegy a spárované so skutočnými názvami z administrácie Shoptetu (`Nastavenia → Doprava a platby`):

| Shoptet | Omega SL kód |
|---|---|
| Packeta (Shoptet Balíky) | `000002` |
| SPS doručenie na adresu | `000003` |
| Balíkovo | `000004` |
| Slovenská pošta na adresu | `000005` |
| Balíkobox / Alzabox | `000006` |
| GEIS paletová preprava | `000007` |
| Dobierka | `000008` |
| Osobný odber | `000009` |

Rozpoznávanie ide cez regex podľa textu riadku (nie presnú zhodu), takže drobné variácie znenia (napr. "doprava Packeta" vs "Packeta") fungujú rovnako. Neznáma doprava/platba (nenulová suma) sa označí ako voľná položka (`V`) a vypíše sa upozornenie — pribudne nová služba v Shoptete, treba doplniť do `SERVICE_CODES` v oboch súboroch.

## Naskladnenie z faktúry dodávateľa (`scripts/parse-supplier-invoice.js`, `naskladnenie.html`)

Keď príde PDF faktúra od dodávateľa (ATOS / K+B / InnPro / BaSys / Solight) za tovar do e-shopu, treba z nej zistiť položky a množstvá a napárovať ich na existujúce Shoptet produkty (podľa EAN/názvu), aby sa dala pripraviť príjemka a nové skladové karty pre Omegu (pozri nižšie). Sklad v Shoptete sa nepoužíva (obchod ho má vypnutý, beží len fakturácia) — párovanie so Shoptet feedom slúži výhradne na zistenie správneho názvu/kódu produktu pre Omegu, nie na naskladňovanie v Shoptete.

**Ako funguje párovanie:** nástroj načíta PDF faktúru (rozparsuje text podľa pozície na strane — funguje aj bez OCR, keďže tieto PDF majú vložený textový obsah), z každej faktúry vytiahne položky a spáruje ich s aktuálnym Shoptet feedom daného dodávateľa (`output/atos.xml`, `output/kb.xml`, `output/innpro.xml`, `output/basys.xml`, `output/solight.xml`):
- **ATOS, InnPro, BaSys aj Solight:** faktúra obsahuje EAN — párovanie je spoľahlivé, kódy na faktúre (napr. ATOS `494318`, InnPro `FF5-A`, BaSys `B 892399-0010`, Solight `RNP100A1`) sa **nezhodujú** s reálnym Shoptet `CODE` (napr. `TOC-SX1014`, `029278`, `BASYS-B 892399-0010`; Solight kódy sa zhodujú priamo), preto sa páruje výhradne cez EAN. Porovnanie EAN ignoruje prípadnú úvodnú nulu (bežná nezhoda medzi zdrojmi — napr. BaSys feed drží `17817856560`, faktúra `017817856560`).
- **K+B:** faktúra EAN niekedy neobsahuje vôbec (párovanie ide cez presný názov produktu, menej spoľahlivé), inokedy ho uvádza na samostatnom riadku pod položkou (`EAN: <číslo>`, prípadne o riadok nižšie, ak sa dlhší názov zalomí) — obe varianty sa rozpoznávajú.
- **BaSys** navyše používa `.` ako oddeľovač tisícok v cenách (napr. `1.800,00` = 1800,00 EUR) — má vlastný parser čísel, aby sa cena neorezala.
- **Solight** má názov produktu často zalomený na viac riadkov (spája sa max. 2 pokračovania), a riadky "Sériová čísla" + samotné výrobné čísla sa ignorujú, nie sú súčasťou názvu.
- Riadky, ktoré nie sú fyzický tovar (Dobírka/Dobierka, doprava/Přepravné, Recyklačný príspevok, Koszty dostawy...) sa automaticky preskakujú a ich súčet ide do vedľajších nákladov príjemky.
- **K+B niekedy posiela viacero faktúr v jednom PDF** (potvrdené na reálnej vzorke) — nástroj rozpozná hranicu medzi nimi (riadok "FAKTÚRA - DAŇOVÝ DOKLAD č.") a pre každú vygeneruje samostatnú príjemku s vlastným číslom faktúry a vlastnými vedľajšími nákladmi.
- Nespárované položky (nový produkt, alebo feed ešte nemá čerstvé dáta z posledného behu) sa označia na ručné overenie — nič sa "nedomýšľa".

**Webový formulár (`naskladnenie.html`):** nahraj PDF faktúru → tabuľka s výsledkom párovania (Shoptet kód, EAN, množstvo, stav) → "Vygenerovať súbory pre Omegu". Beží v prehliadači cez [pdf.js](https://mozilla.github.io/pdf.js/) (vendorovaný v `vendor/pdfjs/`, žiadna CDN závislosť) a `fetch()` na verejne publikované feedy tohto repozitára. Pole EAN v tabuľke je pre nespárované položky **editovateľné** — ak vieš EAN doplniť ručne (napr. produkt sa cez deň vypredal a v aktuálnom feede už nie je, ale treba ho naskladniť), príjemka pre Omegu sa pripraví aj preň. Samotné generovanie súborov pre Omegu (tlačidlo "Vygenerovať súbory pre Omegu") je zámerne oddelené od spracovania PDF, aby sa čísla kariet z Omega cards API prideľovali až po tom, čo si skontroluješ/doplníš tabuľku.

**Príkazový riadok:** `node scripts/parse-supplier-invoice.js faktura.pdf [--supplier=atos|kb|innpro|basys|solight]` (bez `--supplier` sa dodávateľ rozpozná automaticky z textu faktúry) → tabuľka do konzoly + CSV do `output/naskladnenie-<dátum>-<dodávateľ>.csv`.

## Príjemka + nové skladové karty pre Omegu (`scripts/transform-omega-prijemka.js`)

Nadväzuje na naskladnenie vyššie — z tej istej PDF faktúry vygeneruje Omega import pre sklad **"Eshop"** (kód `03` — jediný sklad, s ktorým tento nástroj pracuje; sklad "Predajna" sa rieši ručne priamo v Omege, mimo tohto nástroja): **nové skladové karty** (T03) pre produkty, ktoré v Eshope ešte nemajú kartu, a **príjemku** (T02, typ `P`) pre všetky položky na faktúre. Stĺpcové mapovanie (T02: 38/30 stĺpcov, T03: 16/50 stĺpcov) bolo odvodené z reálnych T02/T03 exportov z Omegy poskytnutých na overenie (obsahovali osobné/citlivé dáta, preto sa neukladajú do repozitára — len výsledné poznatky).

**Dôležité zistenie:** pôvodne sa predpokladalo, že T01 import faktúry v Omege automaticky vygeneruje aj výdajku zo skladu, prípadne že sa dá vygenerovať samostatným T02 importom. Reálnym testom sa ukázalo, že ani jedno **neplatí** — pri TXT importe sa do poľa "Kód položky" zapíše len text, ktorý sa síce v UI zhoduje s číslom karty (aj vyhľadávač karty ho správne nájde), no nevytvorí sa tým skutočná väzba na skladovú kartu akú Omega vytvorí pri ručnom výbere z katalógu, takže sa Omega pri importe nepýta na výdajku a T02 import zostal bez položiek. Výdajku preto v Omege vytvára používateľ **sám**, pri editácii/uložení faktúry po importe (Omega sa vtedy sama opýta) — tento nástroj generuje a importuje **len faktúru (T01)**.

**Číslo skladovej karty je viazané na konkrétny sklad** (to isté číslo znamená v inom sklade iný produkt — overené priamo v dátach), preto má zmysel len v rámci Eshopu. Mapovanie **EAN → číslo karty v Eshope** drží `data/omega-stock-cards.json`:
- Nové karty sa číslujú od `202600001` (vlastné nastavenie, rovnaké ako číslovanie dokladov príjemky).
- Ak faktúra obsahuje produkt, ktorého EAN v databáze ešte nie je, pridelí sa mu **ďalšie voľné číslo** a pripraví sa aj T03 import na jeho založenie. Pri opakovanom výskyte toho istého EAN sa karta znova nezakladá, len sa naskladní (príjemka je prírastková — pripočíta sa k aktuálnemu stavu karty).
- Položky bez EAN (aj po pokuse o dohľadanie cez zhodu názvu v Shoptet feede) sa nedajú spracovať automaticky — vo webovom nástroji sa dajú doplniť ručne priamo v tabuľke pred vygenerovaním príjemky, v CLI verzii sa vypíšu zvlášť ako upozornenie.

**NEOVERENÝ predpoklad, ktorý treba potvrdiť testovacím importom:** predpokladá sa, že Omega pri T03 importe s explicitne vyplneným číslom karty toto číslo **použije** (nepridelí vlastné). Pred bežným používaním odporúčame overiť jedným testovacím produktom priamo v Omege.

**Poradie importu v Omege je dôležité:** najprv súbor s novými kartami (T03), až potom príjemka (T02) — kombinovanie viacerých typov v jednom súbore nie je overené, preto sú to vždy dva samostatné súbory.

**Prideľovanie čísel kariet rieši `cloudflare-worker-omega-cards/`** (Omega cards API — pozri nižšie) — vďaka nemu netreba po každom použití ručne sťahovať a nahrádzať `data/omega-stock-cards.json` v repozitári; API ho aktualizuje samo. Webová aj CLI verzia zdieľajú to isté API ako jediný zdroj pravdy.

## Omega cards API (`cloudflare-worker-omega-cards/`)

Malý Cloudflare Worker, ktorý drží `data/omega-stock-cards.json` ako jediný zdroj pravdy a pri každej novej položke ho commitne priamo do repozitára cez GitHub Contents API — takže `naskladnenie.html` (statická stránka bez servera) aj `transform-omega-prijemka.js` (CLI) môžu prideľovať čísla kariet bez rizika, že si navzájom "prešliapu" číslovanie, a bez ručného sťahovania/nahrádzania súboru.

- `GET /state` — aktuálny stav (verejne čitateľné, neobsahuje citlivé údaje — len názvy produktov, EAN, čísla kariet).
- `POST /reserve` (vyžaduje hlavičku `X-Api-Key`) — pre zoznam položiek `{ean, name, supplier}` pridelí chýbajúce čísla kariet, uloží zmenu a vráti mapovanie `ean → {kod, nazov, dodavatel, isNew}`.

**Nasadenie (treba urobiť raz, mimo Claude — vyžaduje prístup do Cloudflare aj GitHub účtu):**
1. **GitHub token:** `Settings → Developer settings → Fine-grained personal access tokens` → nový token, obmedzený **len na tento repozitár**, oprávnenie `Contents: Read and write`. Ulož ho ako repo secret `OMEGA_CARDS_GH_TOKEN`.
2. **API kľúč:** ľubovoľný náhodný reťazec (slúži ako heslo pre `POST /reserve`, aby ho nemohol zavolať niekto cudzí) — ulož ako repo secret `OMEGA_CARDS_API_KEY`. Rovnaká hodnota musí byť aj v `naskladnenie.html`/`transform-omega-prijemka.js` (`OMEGA_CARDS_API_KEY` konštanta/env premenná).
3. `CLOUDFLARE_API_TOKEN` a `CLOUDFLARE_ACCOUNT_ID` už tento repozitár má nastavené (rovnaké ako pre ostatné Workery — ATOS/Solight/WiiM obrázkové proxy).
4. Push do `cloudflare-worker-omega-cards/` (alebo `workflow_dispatch` na `Deploy Omega cards API`) Worker nasadí a nastaví mu secrets automaticky.

Keďže `X-Api-Key` je viditeľný priamo v zdrojovom kóde stránky (verejný repozitár, žiadny skutočný backend), ide o slabú ochranu proti náhodnému zneužitiu, nie o skutočné zabezpečenie — vzhľadom na nízku citlivosť dát (len produktové názvy/EAN/čísla kariet, nie osobné údaje) je to primeraný kompromis.

**Príkazový riadok:** `node scripts/transform-omega-prijemka.js faktura.pdf [--supplier=atos|kb|innpro|basys|solight] [--sklad="Eshop"]` → `output/omega-prijemka-<dátum>-<dodávateľ>.txt`.

**Ako vznikla táto mapovanie stĺpcov:** Omega nemá verejne zdokumentovanú XML schému pre faktúry (na rozdiel od Pohody) — jej formát je 97-stĺpcový (`R01`) / 58-stĺpcový (`R02`) TXT bez oficiálne zverejnenej špecifikácie všetkých stĺpcov (KROS zmieňuje sprievodný Excel s "až 166 stĺpcami", ktorý nie je verejne dostupný). Mapovanie bolo odvodené porovnaním reálneho exportu z Omegy (6 faktúr, súkromné osoby aj firmy, dobierka/karta/prevod).

**Známe obmedzenia / neoverené predpoklady** (over pri prvom ostrom teste, ideálne v skúšobnej firme v Omege):
- Podporená je spoľahlivo len sadzba DPH **23 %** — ak faktúra obsahuje položky v 19 %/5 %/0 %, skript vypíše varovanie (stĺpce pre tieto sadzby vo vzorke boli vždy `0.0000`, ich presný formát pri reálnom použití nie je overený).
- Číslo dokladu v rade (`R01` stĺpec 20) sa necháva **prázdne** — predpoklad je, že Omega ho pri importe doplní automaticky podľa nastaveného radu `0008`; ak import zlyhá/duplikuje čísla, treba to doriešiť ručne v Omege.
- EAN a nákupná cena položiek nie sú v Pohoda exporte zo Shoptetu k dispozícii — ostávajú prázdne/0.
- Bankové údaje predávajúceho (`SELLER` na začiatku skriptu) sú natvrdo zakódované z reálnej vzorky — pri zmene účtu/banky treba upraviť priamo v skripte.

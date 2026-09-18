> Aktualizácia nasadenia: používateľ následne schválil nasadenie SEO zmien do importných súborov. Register je pripravený ako ACTIVE po čerstvom preflighte; historické označenia PREPARED_NOT_ACTIVE a chýbajúci súhlas nižšie dokumentujú predchádzajúci stav. Pozri CTR-2026-09-DEPLOYMENT.md.

# PremiumStore CTR experiment — výsledok kontroly

**Stav: PREPARED_NOT_ACTIVE. Príprava prešla kontrolami; aktivácia je zablokovaná.**

Audit 18. 9. 2026. Produkčné dáta čítané z main `b6df3573e61768aa9f5a193885b43efcade1b529`. Pracovná vetva `seo/ctr-experiment-prep`, draft PR #16. Produkčný main, živé feedy ani nastavenia Shoptetu sa touto prípravou nemenili.

## Aktuálny výsledok – revízia 2

- Na výslovný pokyn používateľa bola vzorka obnovená: **20 testovacích + 20 kontrolných produktov, všetkých 40 mapovaní overených**. Testovacia skupina obsahuje 14 nových a 6 pôvodných produktov.
- Baseline výhradne **10. 8. – 16. 9. 2026**. Test: 702 zobrazení / 45 kliknutí; kontrola: 720 / 48. Ide o exploračný pilot s nízkym objemom dát.
- Kompletný výber, zdôvodnenie, texty a plán merania: [CTR-2026-09-COHORT-R2.md](CTR-2026-09-COHORT-R2.md).
- 39 SEO testov a 31 existujúcich regresných testov prešlo. Offline SEO náhľad všetkých 20 testovacích produktov zachováva identické ne-SEO bajty. Všetkých 8 OUT obsahuje 27 017 položiek; neaktívny režim je presný no-op.
- Pôvodný audit 20 kandidátov a 2 kontrol je zachovaný v `archive-r1/`. Nasledujúca historická tabuľka ho dokumentuje; runtime používa **iba revíziu 2**. Neoverené pôvodné produkty už neblokujú novú vzorku.
- Aktivácia je naďalej blokovaná chýbajúcim súhlasom a neukončeným predprodukčným preflightom vrátane overenia koncového SEO importu.

## Dodávateľské pipeliney

OUT adresy nižšie sú priamo prečítané z Shoptet administrácie, nie iba odvodené z GitHub Pages. Úplný zoznam vstupných premenných, krokov workflowov, hashov a zdrojového commitu je v `ctr-supplier-inventory.json`. Časy GitHub cron sú UTC, časy Shoptetu sú uvedené presne tak, ako ich zobrazuje administrácia.

| Dodávateľ | Transform | Workflow / cron UTC | OUT | Prefix Shoptetu | Úplný import |
|---|---|---|---|---|---|
| innpro | `scripts/transform-innpro.js` | `.github/workflows/innpro-sync.yml` / 0 4,10,16,22 * * * | `output/innpro.xml` | `` | 03:05 |
| kb | `scripts/transform-kb.js` | `.github/workflows/kb-sync.yml` / 30 22 * * * | `output/kb.xml` | `kb_` | 00:05 |
| atos | `scripts/transform-atos.js` | `.github/workflows/atos-sync.yml` / 10 22 * * * | `output/atos.xml` | `at_` | 04:05 |
| basys | `scripts/transform-basys.js` | `.github/workflows/basys-sync.yml` / 0 23 * * * | `output/basys.xml` | `bas_` | 02:05 |
| monacor | `scripts/transform-monacor.js` | `.github/workflows/monacor-sync.yml` / 40 22 * * * | `output/monacor.xml` | `mon_` | 01:05 |
| penta | `scripts/transform-penta.js` | `.github/workflows/penta-sync.yml` / 20 22 * * * | `output/penta.xml` | `pen_` | 06:05 |
| solight | `scripts/transform-solight.js` | `.github/workflows/solight-sync.yml` / 50 22 * * * | `output/solight.xml` | `sol_` | 05:05 |
| wiim | `scripts/transform-wiim.js` | `žiadny – ručne` / — | `output/wiim.xml` | `nenastavený import` | — |

Presné URL importov:

- innpro: https://4fkstztvbs-arch.github.io/import_innpro/output/innpro.xml
- kb: https://4fkstztvbs-arch.github.io/import_innpro/output/kb.xml
- atos: https://4fkstztvbs-arch.github.io/import_innpro/output/atos.xml
- basys: https://4fkstztvbs-arch.github.io/import_innpro/output/basys.xml
- monacor: https://4fkstztvbs-arch.github.io/import_innpro/output/monacor.xml
- penta: https://4fkstztvbs-arch.github.io/import_innpro/output/penta.xml
- solight: https://4fkstztvbs-arch.github.io/import_innpro/output/solight.xml

WiiM navyše používa `scripts/transform-wiim.js` → `output/wiim.xml`, PDF vstup `data/wiim-pricelist.pdf`. Automatický import WiiM v Shoptete ani sync workflow neexistuje; zmienka o workflow_dispatch v README je neaktuálna.

Spoločné kroky obsahujú deduplikáciu (okrem Basys), opravy kategórií, skrytie produktov, prelinkovanie a kontroly. KB a ATOS navyše Icecat obohacovanie; KB obnovu úvodných viet. Nový SEO krok je **posledná úprava pred commitom**, po `apply-product-category-corrections.js`, ktorý môže meniť aj SEO. Heureka cenový workflow aj samostatný workflow opráv kategórií majú rovnakú poistku.

## Historický audit pôvodných 20 kandidátov – revízia 1

`CODE` nižšie je presná hodnota z dodávateľského XML bez Shoptet prefixu. `shoptetCode` je uložený samostatne v JSON. Každý dodávateľ v tabuľke odkazuje na svoj transform a OUT uvedený vyššie. `—` znamená nedoloženú hodnotu, nie nulu.

| # | Kandidát | Supplier | CODE z XML | EAN | Stav |
|---|---|---|---|---|---|
| 1 | [POCO F9 Pro 12/256 Black](https://www.premiumstore.sk/poco-f9-pro-12-256gb-black/) | kb | `100002204353` | `6939093012970` | Overené |
| 2 | [GMKtec EVO-X2 64 GB/1 TB](https://www.premiumstore.sk/mini-pc-gmktec-evo-x2-ryzen-ai-max--395-s-64-gb-ram--1-tb-ssd-a-windows-11-pro/) | innpro | `088850` | `6972570963778` | Overené |
| 3 | [Xiaomi Redmi Smart Pen White](https://www.premiumstore.sk/xiaomi-redmi-smart-pen--white/) | kb | `100002136984` | `6941812785089` | Mimo OUT / chybová stránka |
| 4 | [Stronglift SL500X INOX](https://www.premiumstore.sk/stojan-pro-tepelne-cerpadlo-klimatizace-stronglift-sl500x-inox/) | atos | `STRONGLIFT SL500X` | `5904335414837` | Overené |
| 5 | [TESLA TQS600](https://www.premiumstore.sk/tesla-powerwash-steam-station-tqs600/) | kb | `100002201736` | `8595689807634` | Mimo OUT / chybová stránka |
| 6 | [Samsung Watch 9 40 mm Cream](https://www.premiumstore.sk/samsung-galaxy-watch-9-40mm-cream/) | kb | `100002203759` | `8806099324841` | Mimo OUT / chybová stránka |
| 7 | [POCO F9 Ultra 12/256 Black](https://www.premiumstore.sk/poco-f9-ultra-12-256gb-black/) | kb | `100002204355` | `6939093016268` | Overené |
| 8 | [Carlinkit Mini Ultra 5](https://www.premiumstore.sk/bezdrotovy-adapter-carlinkit-mini-ultra-5-pre-carplay-android-auto/) | innpro | `088002` | `5905156108363` | Overené |
| 9 | [SOLDINGER PC-100 DeWalt](https://www.premiumstore.sk/trafopajka-aku-soldinger-pc-100-kompatibilni-s-akumulatory-typu-dewalt/) | atos | `TIP-06530200` | `8594067120129` | Overené |
| 10 | [Makera Carvera Air CNC](https://www.premiumstore.sk/vasa-freza-makera-carvera-air-cnc/) | innpro | `085499` | `6977641142496` | Mimo OUT / chybová stránka |
| 11 | [MOZA Racing R5 Pro](https://www.premiumstore.sk/simulacna-suprava-moza-racing-r5-pro/) | innpro | `091171` | `6973137271497` | Presmerovaná URL |
| 12 | [Flytec V030 + batéria](https://www.premiumstore.sk/flytec-v030-zakladny-nastrahovy-valec-bateria/) | innpro | `—` | `—` | Nejednoznačná identita |
| 13 | [Solight kefka Dyson Airwrap](https://www.premiumstore.sk/solight-kefka-na-cistenie-filtra-pre-dyson-airwrap/) | solight | `DSP-DYHS01QJS` | `8592718038618` | Overené |
| 14 | [Homatics Box 4K V2 AI-SR](https://www.premiumstore.sk/homatics-box-4k-v2-ai-sr-google-tv-uhd-multimedialni-prehravac/) | atos | `MMCHB4KV2` | `8588008191026` | Overené |
| 15 | [Flytec V803 GPS 5200 mAh](https://www.premiumstore.sk/flytec-v803-gps-5200mah-lod-na-navnadu/) | innpro | `083984` | `5905156102125` | Overené |
| 16 | [Ottocast P3 Pro](https://www.premiumstore.sk/bezdrotovy-adapter-ottocast-ottoaibox-p3-pro-pre-android/) | innpro | `087844` | `6977341740008` | Overené |
| 17 | [MINIS FORUM X1 Pro-370](https://www.premiumstore.sk/minis-forum-x1-pro-370-ryzen-ai-9-hx370-mini-pc-v-zakladnej-zostave/) | innpro | `088348` | `4897118834032` | Overené |
| 18 | [Beko B3BCNA324HS](https://www.premiumstore.sk/beko-b3bcna324hs/) | kb | `100002201158` | `8690842796227` | Overené |
| 19 | [TCL 55T8C](https://www.premiumstore.sk/tcl-55t8c-qled-4k-smart-google-tv/) | kb | `100002141479` | `5901292526726` | Mimo OUT / chybová stránka |
| 20 | [DOMO DO9276C](https://www.premiumstore.sk/domo-do9276c/) | kb | `100002200930` | `5411397168504` | Mimo OUT / chybová stránka |

Historické párovania sú doložené presnými riadkami katalógových CSV v `archive-r1/ctr-mapping-evidence.json`. Heureka záznamy slúžia **iba na identitu produktu**, nikdy na GSC baseline.

- **Flytec:** historický `089983`, EAN `5905156109049`, patrí k inej URL (`/flytec-v030-zakladna-lod-na-navnadu-bateria/`). Pre pôvodnú GSC URL nemáme jednoznačný dôkaz. CODE zostáva `null`; príbuzný `078895` sa nesmie použiť ako náhrada.
- **MOZA:** pôvodná URL presmerúva na `/herny-volant-moza-racing-r5-pro/`. CODE `091171` a EAN sú potvrdené, ale zmena URL/názvu ovplyvňuje porovnateľnosť baseline. Nezlučovať metriky automaticky.
- **Nedostupné stránky:** viditeľná chybová stránka bola overená v prehliadači; samotný HTTP status sa netvrdí.

## Mechanizmus a guardy

Register obsahuje návrhy title/meta pre 20 kandidátov, ale status zostáva PREPARED_NOT_ACTIVE a schválenie aktivácie je prázdne. Páruje sa striktne supplier + CODE, EAN sa kontroluje ako reťazec vrátane úvodných núl. Žiadne fuzzy párovanie, odstraňovanie prefixov za behu ani výber podobného variantu.

XML sa parsuje pre identitu a presné pozície elementov. Prepisujú sa iba priame `SEO_TITLE` a `META_DESCRIPTION`; všetky ostatné bajty vrátane ceny, skladu, dostupnosti, popisov, kategórií, obrázkov a URL zostávajú z čerstvého denného feedu. Chýbajúce SEO elementy sa doplnia, text sa XML-escapuje, opakované spustenie je idempotentné.

Aktivácia vyžaduje overené mapovanie všetkých 20 kandidátov aj všetkých 20 kontrol, správny baseline, explicitné schválenie a úspešný preflight. Kontrolné URL/identity sa nesmú prekrývať s kandidátmi. Nesprávny OUT, neznámy dodávateľ, numerický CODE, nepovolené polia (napr. cena), prázdne či príliš dlhé SEO texty alebo neplatné XML sa odmietnu.

Pri dennom behu chýbajúci produkt, duplicitný CODE alebo zmenený EAN znamená preskočenie konkrétneho override a výrazné hlásenie driftu v Actions. Nikdy sa neobnovuje starý produkt ani stará cena. `--strict` je určený na preflight a pri takomto probléme zlyhá pred akýmkoľvek zápisom. Neplatný aktívny register alebo neplatný XML feed zastavia publikovanie a vyžadujú opravu.

Všetkých deväť workflowov zapisujúcich OUT má obmedzenie na main, takže ručné spustenie z prípravnej vetvy nepublikuje feedy. Nové CI má iba právo čítať repozitár a nesťahuje dodávateľské zdroje. Priame manuálne spustenie transformu musí nasledovať `node scripts/apply-seo-overrides.js --write` pred publikovaním.

## Čo zostáva pred aktiváciou

1. Znovu preveriť čerstvé OUT a všetkých 40 stránok novej vzorky tesne pred spustením.
2. Po zmenách kategorizácie overiť prevádzkovú stabilitu podľa plánu revízie 2. MOZA ani nejednoznačný Flytec nie sú v novej vzorke.
3. Overiť SEO import na existujúcom produkte v neprodukčnom Shoptet prostredí. Administrácia nemá samostatné viditeľné prepínače SEO_TITLE/META_DESCRIPTION; samotné validné XML nedokazuje výsledný zápis do SEO polí existujúcej karty.
4. Po finálnej kontrole vyžiadať explicitné schválenie nasadenia a aktivácie. Až potom doplniť schvaľovacie polia, spustiť strict preflight na aktuálnych OUT a aktivovať. Tento PR sa teraz nesmie zlúčiť alebo aktivovať automaticky.

## Rozsah overenia a prevádzkové zistenia

- Cena a dostupnosť sú v úplných aj aktualizačných importoch zapnuté. „Sklad“ je v úplnom importe zapnutý, ale **„Množstvo a pozícia v sklade“ je v oboch režimoch vypnuté** pri všetkých siedmich dodávateľoch. Feed hodnoty zachovávame; nenastavovali sme novú synchronizáciu fyzických množstiev.
- Chýbajúce produkty sa u šiestich dodávateľov mažú; Penta ich necháva nezmenené. To je existujúce nastavenie a vysvetľuje riziko zániku experimentálnych URL.
- Nevykonávali sa živé supplier transformy vyžadujúce secrets ani produkčný import. Overovanie použilo kompletné OUT pripnuté ku konkrétnemu main commitu a read-only pohľad na Shoptet. Novšie denné feedy sa môžu líšiť.
- V novej vzorke sú všetky identity overené k dátumu auditu; overenie netvrdí budúcu dostupnosť ani súhlas s aktiváciou.
- Pozastavenie `PAUSED` zastaví override; bežný transform pri ďalšej regenerácii obnoví štandardné SEO. Okamžitý návrat SEO musí používať samostatný SEO-only rollback, nikdy starý celý feed s neaktuálnymi cenami.

## Reprodukcia

```sh
npm ci --ignore-scripts
npm run test:seo-overrides
npm run validate:seo-overrides
node scripts/validate-seo-overrides.js --require-ready # teraz očakávane exit 1
node scripts/apply-seo-overrides.js --write # teraz presný no-op
git diff --exit-code -- output/
```

Strojové výsledky: `ctr-validation-report.json`; zdroje: `ctr-baseline-evidence.json`, `ctr-mapping-evidence.json`, `ctr-shoptet-import-evidence.json`, `ctr-supplier-inventory.json`. Náhľad zmien title/meta je súčasťou validačného reportu.

## Doplnenie: súvis s dnešnou kategorizáciou

Read-only kontrola Shoptet filtra podľa ôsmich chýbajúcich kódov vrátila „Žiadne položky“. Kontrolné vyhľadanie MOZA úspešne našlo existujúcu kartu. Pri Flytec ide iba o preverenie možného historického kódu 089983, nie dôkaz identity pôvodnej GSC URL.

- Xiaomi Smart Pen, Samsung Cream, Makera, TCL, DOMO, kontrolný POCO 16/512 a možný Flytec 089983 chýbali už v OUT z prípravnej vetvy 17. 9. (`a7b6becd85fb77550dae21c8d1c7abca8ed14512`), teda pred dnešnými zmenami kategórií.
- TESLA `100002201736` bola ešte v KB OUT pri commite `27946cc9ceca30731ebd540b64af745d1bdda90b`, ale chýba v nasledujúcom KB sync commite `1ec50802e2b6f1d7d772ccb135391a4ef24b1688` (18. 9. 00:35:56 UTC / 02:35:56 Europe/Bratislava). Vypadla počas nočného supplier syncu pred dennou kategorizáciou. Príčinu v zdrojových dátach dodávateľa tento audit nepotvrdzuje.
- MOZA `091171` mala nový názov „Herný volant Moza Racing R5 Pro“ už v commite `af2c15bf5d42afb9ea0d7362d3800f0e99517788` (17. 9. 23:49:35 UTC / 18. 9. 01:49:35 slovenského času). Nová URL je živá a pôvodná na ňu presmerúva.

Existujúce nastavenie „zmazať produkt“ pri chýbaní vo feede je s pozorovanou absenciou konzistentné. Bez konkrétneho importného logu sa však netvrdí definitívny dôvod zmazania každej karty. Produkty sa neobnovovali a URL ani importné nastavenia sa nemenili.

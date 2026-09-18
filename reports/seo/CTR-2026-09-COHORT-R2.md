> Aktualizácia nasadenia: používateľ následne schválil nasadenie SEO zmien do importných súborov. Register je pripravený ako ACTIVE po čerstvom preflighte; historické označenia PREPARED_NOT_ACTIVE a chýbajúci súhlas nižšie dokumentujú predchádzajúci stav. Pozri CTR-2026-09-DEPLOYMENT.md.

# PremiumStore – nová vzorka CTR testu (revízia 2)

**Pripravené, nespustené. 20 testovacích produktov + 20 kontrolných.**

Výber bol obnovený na výslovný pokyn používateľa z 18. 9. 2026. Z pôvodných 20 testovacích produktov zostáva v testovacej skupine 6; pridávame 14 nových. Pôvodný výber a jeho audit sú zachované v `archive-r1/`. Produkty sa nenahrádzajú potichu a nepreberajú metriky predchádzajúcej URL.

## Baseline a vyváženosť

Výhradne **10. 8. – 16. 9. 2026 (38 dní)**, pôvodný overený GSC XLSX, list Strany. Žiadne dáta z trojmesačného exportu ani z obdobia po 16. 9.

| Skupina | Produkty | Zobrazenia | Kliknutia | CTR |
|---|---:|---:|---:|---:|
| SEO test | 20 | 702 | 45 | 6,41 % |
| Kontrola bez override | 20 | 720 | 48 | 6,67 % |

Kontroly majú podobný celkový objem zobrazení, ale nejde o presne zhodné kategórie či dopyty. Testovacia skupina má menej zobrazení než pôvodných 12 overených kandidátov (809): cieľom obnovy je platná identita, širšia vzorka a použiteľná kontrola, nie predstierané zvýšenie štatistickej sily. Pri tomto objeme ide o **exploračný pilot**; spoľahlivé rozlíšenie malého nárastu CTR nemožno sľúbiť.

## Ako vznikol výber

Preverených 75 potenciálnych produktových URL na preferovanom www hoste s aspoň 15 zobrazeniami a priemernou pozíciou 3–15. Zjavné kategórie/informačné stránky boli vyradené ešte pred kontrolou. Každý zaradený produkt má živú pôvodnú URL bez presmerovania, zhodnú canonical URL, meta robots index,follow, zobrazený produktový kód a jedinú zhodu supplier + raw CODE v aktuálnom OUT. EAN je doložený z OUT. Kontrola stránky nepotvrdzuje, že ju Google aktuálne indexuje, ani dlhodobú skladovú stabilitu.

Blízke farebné/modelové varianty POCO, Flytec, MOVA, Carlinkit, MINIS X1, NLQ4 a EMOS boli zúžené, aby sa minimalizovala vzájomná konkurencia medzi ramenami. Dva odlišné rady MINIS sú oba v testovacej skupine. Filter MOVA pre G70 nie je alternatívou k vysávaču V70 a oba sú v kontrole.

40 zostávajúcich produktov je zoradených podľa zobrazení; susedné dvojice vytvárajú 20 blokov. Priradenie v každej dvojici je deterministicky pseudonáhodné: parita prvého bajtu SHA256 textu `CTR-2026-09-R2:pair:<číslo>` určuje testovací prvok. Po priradení sa nerobili výmeny podľa CTR. Metóda je reprodukovateľná v `ctr-cohort-selection.json`. Bloky párujú návštevnosť, nie kategóriu, dodávateľa či vyhľadávací zámer; tieto rozdiely limitujú kauzálne závery.

## Testovacia skupina

| # | Produkt / pôvodná GSC URL | Dodávateľ · CODE | EAN | Zobrazenia | Kliknutia | Pozícia |
|---|---|---|---|---:|---:|---:|
| 1 | [Mini PC GMKtec EVO-X2 Ryzen AI Max+ 395 s 64 GB RAM, 1 TB SSD a Windows 11 Pro](https://www.premiumstore.sk/mini-pc-gmktec-evo-x2-ryzen-ai-max--395-s-64-gb-ram--1-tb-ssd-a-windows-11-pro/) | innpro · `088850` | `6972570963778` | 151 | 6 | 5.17 |
| 2 | [Bezdrôtový adaptér Ottocast OTTOAIBOX P3 Pro pre Android](https://www.premiumstore.sk/bezdrotovy-adapter-ottocast-ottoaibox-p3-pro-pre-android/) | innpro · `087844` | `6977341740008` | 74 | 4 | 6.27 |
| 3 | [Stojan pro tepelné čerpadlo klimatizace STRONGLIFT SL500X INOX](https://www.premiumstore.sk/stojan-pro-tepelne-cerpadlo-klimatizace-stronglift-sl500x-inox/) | atos · `STRONGLIFT SL500X` | `5904335414837` | 67 | 1 | 6.55 |
| 4 | [Homatics Box 4K V2 AI-SR Google TV - UHD multimediální přehrávač](https://www.premiumstore.sk/homatics-box-4k-v2-ai-sr-google-tv-uhd-multimedialni-prehravac/) | atos · `MMCHB4KV2` | `8588008191026` | 47 | 2 | 12.91 |
| 5 | [Okuliare VITURE Pro 2 XR](https://www.premiumstore.sk/okuliare-viture-pro-2-xr/) | innpro · `091439` | `1230000282161` | 38 | 7 | 3.84 |
| 6 | [Solight kefka na čistenie filtra pre Dyson Airwrap](https://www.premiumstore.sk/solight-kefka-na-cistenie-filtra-pre-dyson-airwrap/) | solight · `DSP-DYHS01QJS` | `8592718038618` | 33 | 1 | 10.82 |
| 7 | [MINIS FORUM X1 Pro-370 Ryzen AI 9 HX370 Mini PC v základnej zostave](https://www.premiumstore.sk/minis-forum-x1-pro-370-ryzen-ai-9-hx370-mini-pc-v-zakladnej-zostave/) | innpro · `088348` | `4897118834032` | 31 | 1 | 6.26 |
| 8 | [Automatický přepínač sítí - napájení 4P 400V 20A - NLQ4-125/4P pro FVE](https://www.premiumstore.sk/automaticky-prepinac-siti-napajeni-4p-400v-20a-nlq4-125-4p-pro-fve/) | atos · `ATO-T549A` | `8596425191499` | 28 | 1 | 14.79 |
| 9 | [LCD displej KRUGER & MATZ KM2021 Android Auto Apple Carplay s DVR a couvací kamerou](https://www.premiumstore.sk/lcd-displej-kruger-matz-km2021-android-auto-apple-carplay-s-dvr-a-couvaci-kamerou/) | atos · `LEC-KM2021` | `5901890116992` | 26 | 1 | 7.73 |
| 10 | [Kamera EMOS IP-1100G WALL /H4170/ GoSmart venkovní bateriová s WiFi a solárním panelem](https://www.premiumstore.sk/kamera-emos-ip-1100g-wall--h4170--gosmart-venkovni-bateriova-s-wifi-a-solarnim-panelem/) | atos · `ATO-3024041700` | `8592920161425` | 23 | 2 | 6.70 |
| 11 | [Tester USB FNIRSI FNB-C2](https://www.premiumstore.sk/tester-usb-fnirsi-fnb-c2/) | innpro · `089327` | `5905156108127` | 22 | 3 | 4.14 |
| 12 | [Mini PC MINIS FORUM UM760 Slim Ryzen 5 7640HS (bez skrinky)](https://www.premiumstore.sk/mini-pc-minis-forum-um760-slim-ryzen-5-7640hs--bez-skrinky/) | innpro · `088364` | `4897118837637` | 21 | 4 | 3.95 |
| 13 | [Powerbanka Flextail Zero Power Metal 5000 mAh (strieborná)](https://www.premiumstore.sk/powerbanka-flextail-zero-power-metal-5000-mah--strieborna/) | innpro · `084248` | `6975755966724` | 20 | 1 | 3.25 |
| 14 | [Enhance S3XY Knob ovladač + Commander + kabely, Tesla 3/Y 2021+ (přední i zadní instalace)](https://www.premiumstore.sk/enhance-s3xy-knob-ovladac-commander-kabely--tesla-3-y-2021-predni-i-zadni-instalace/) | atos · `EL-TES-KNOB-B-3/Y` | `3800501858301` | 20 | 1 | 5.65 |
| 15 | [Záložní zdroj VOLT POLSKA Sinus Pro 800 E 12V/230V 800VA 500W](https://www.premiumstore.sk/zalozni-zdroj-volt-polska-sinus-pro-800-e-12v-230v-800va-500w/) | atos · `TIP-06437074` | `5903111886356` | 18 | 2 | 9.78 |
| 16 | [Televes SMARTKOM 531911 digitální programovatelný zesilovač](https://www.premiumstore.sk/televes-smartkom-531911-digitalni-programovatelny-zesilovac/) | atos · `T531911` | `8424450266250` | 17 | 2 | 7.29 |
| 17 | [Detektor káblov FNIRSI LPM-10A](https://www.premiumstore.sk/detektor-kablov-fnirsi-lpm-10a/) | innpro · `089326` | `5905156108110` | 17 | 1 | 6.41 |
| 18 | [MEROSS MRS200MA-EU – inteligentný navíjací mechanizmus na rolety s Wi-Fi](https://www.premiumstore.sk/meross-mrs200ma-eu---inteligentny-navijaci-mechanizmus-na-rolety-s-wi-fi/) | innpro · `087760` | `6942349208669` | 17 | 1 | 7.18 |
| 19 | [Xiaomi Redmi Pad 2 9.7 Cover (77599)](https://www.premiumstore.sk/xiaomi-redmi-pad-2-9-7-cover--77599/) | kb · `100002202637` | `6932554401689` | 16 | 3 | 6.31 |
| 20 | [Telefon GSM Kruger&Matz Simple 923 pro seniory](https://www.premiumstore.sk/telefon-gsm-kruger-matz-simple-923-pro-seniory/) | atos · `LEC-KM0923-2G` | `5901890126199` | 16 | 1 | 6.62 |

## Kontrolná skupina – SEO override sa nepoužije

| # | Produkt / pôvodná GSC URL | Dodávateľ · CODE | EAN | Zobrazenia | Kliknutia | Pozícia |
|---|---|---|---|---:|---:|---:|
| 1 | [POCO F9 PRO 12/256GB Black](https://www.premiumstore.sk/poco-f9-pro-12-256gb-black/) | kb · `100002204353` | `6939093012970` | 147 | 5 | 6.73 |
| 2 | [Čistiaci robot MOVA V70 Ultra Complete v bielej farbe](https://www.premiumstore.sk/cistiaci-robot-mova-v70-ultra-complete-v-bielej-farbe/) | innpro · `088466` | `6978794734941` | 100 | 6 | 6.64 |
| 3 | [Bezdrôtový adaptér Carlinkit MINI ULTRA 5 pre CarPlay/Android Auto](https://www.premiumstore.sk/bezdrotovy-adapter-carlinkit-mini-ultra-5-pre-carplay-android-auto/) | innpro · `088002` | `5905156108363` | 53 | 2 | 7.23 |
| 4 | [Flytec V803-GPS 5200mAh loď na návnadu](https://www.premiumstore.sk/flytec-v803-gps-5200mah-lod-na-navnadu/) | innpro · `083984` | `5905156102125` | 46 | 2 | 8.61 |
| 5 | [Monacor DT-25N Neodymový Hi-Fi výškový reproduktor, 40 W, 8 Ω](https://www.premiumstore.sk/monacor-dt-25n-neodymovy-hi-fi-vyskovy-reproduktor--40-w--8-/) | monacor · `DT-25N` | `4007754154641` | 42 | 2 | 7.71 |
| 6 | [Trafopájka AKU SOLDINGER PC-100 kompatibilní s akumulátory typu DeWalt](https://www.premiumstore.sk/trafopajka-aku-soldinger-pc-100-kompatibilni-s-akumulatory-typu-dewalt/) | atos · `TIP-06530200` | `8594067120129` | 38 | 1 | 5.18 |
| 7 | [Beko B3BCNA324HS](https://www.premiumstore.sk/beko-b3bcna324hs/) | kb · `100002201158` | `8690842796227` | 31 | 1 | 7.65 |
| 8 | [Inteligentná samočistiaca toaleta pre mačky UBPet C41](https://www.premiumstore.sk/inteligentna-samocistiaca-toaleta-pre-macky-ubpet-c41/) | innpro · `087571` | `6931705008616` | 27 | 1 | 7.00 |
| 9 | [Filter MOVA pre stanicu G70](https://www.premiumstore.sk/filter-mova-pre-stanicu-g70-2/) | innpro · `087027` | `6978794731391` | 26 | 2 | 4.73 |
| 10 | [Whirlpool WHK 26373 XBR6EA AI AdaptiveCo](https://www.premiumstore.sk/whirlpool-whk-26373-xbr6ea-ai-adaptiveco/) | kb · `100002203269` | `8003437069918` | 25 | 1 | 7.16 |
| 11 | [Bose QuietComfort Headphones Club SC - Bluetooth slúchadlá s potlačením okolitého hluku, čierne](https://www.premiumstore.sk/bose-quietcomfort-headphones-club-sc-bluetooth-sluchadla-s-potlacenim-okoliteho-hluku--cierne/) | basys · `BASYS-B 884367-0900` | `None` | 22 | 1 | 10.64 |
| 12 | [Router GL.iNet Flint 2 Wi-Fi 6](https://www.premiumstore.sk/router-gl-inet-flint-2-wi-fi-6/) | innpro · `093437` | `6971131384205` | 21 | 1 | 4.67 |
| 13 | [Samsung OLED QE55S95H](https://www.premiumstore.sk/samsung-oled-qe55s95h/) | kb · `100002203112` | `8806099008253` | 20 | 3 | 8.00 |
| 14 | [UREVO FoldiMix 5L Pro elektrický bežecký pás (strieborný)](https://www.premiumstore.sk/urevo-foldimix-5l-pro-elektricky-bezecky-pas--strieborny/) | innpro · `081289` | `6978258900073` | 19 | 4 | 5.47 |
| 15 | [Prenosný kompresor Fanttik X8 Apex](https://www.premiumstore.sk/prenosny-kompresor-fanttik-x8-apex/) | innpro · `079834` | `0793227896890` | 19 | 3 | 7.00 |
| 16 | [Panel tlačidiel ovládacieho panela PXN CB1](https://www.premiumstore.sk/panel-tlacidiel-ovladacieho-panela-pxn-cb1/) | innpro · `080997` | `6948052903440` | 17 | 8 | 5.65 |
| 17 | [Adaptér OBSBOT UVC na HDMI](https://www.premiumstore.sk/adapter-obsbot-uvc-na-hdmi/) | innpro · `076214` | `6971889230212` | 17 | 1 | 6.35 |
| 18 | [Trafo 230/12V  10Amp](https://www.premiumstore.sk/trafo-230-12v--10amp/) | atos · `CMP-07116` | `8591686071160` | 17 | 1 | 8.24 |
| 19 | [Pioneer TS-WX140DA aktivny subwoofer do auta](https://www.premiumstore.sk/pioneer-ts-wx140da-aktivny-subwoofer-do-auta/) | basys · `BASYS-TS-WX140DA` | `None` | 17 | 1 | 9.00 |
| 20 | [Blesk GODOX V850III](https://www.premiumstore.sk/blesk-godox-v850iii/) | innpro · `090984` | `6952344221419` | 16 | 2 | 4.12 |

Pri každom dodávateľovi je transform `scripts/transform-<supplier>.js` a OUT `output/<supplier>.xml`. Presná živá adresa je `https://4fkstztvbs-arch.github.io/import_innpro/output/<supplier>.xml`. Úplné hodnoty sú pri každom riadku v `ctr-test-candidates.json` a `ctr-mapping-evidence.json`; Shoptet prefix je oddelený od raw CODE.

## Návrhy SEO textov na kontrolu

Menia sa výhradne SEO_TITLE a META_DESCRIPTION. Žiadne pevné ceny, sľuby skladovej dostupnosti, vymyslené zľavy alebo termíny doručenia. Pri genericky pomenovaných či nejednoznačne preložených produktoch sa text opiera iba o doložený model a parametre.

### 1. Mini PC GMKtec EVO-X2 Ryzen AI Max+ 395 s 64 GB RAM, 1 TB SSD a Windows 11 Pro

**SEO_TITLE:** GMKtec EVO-X2: Ryzen AI Max+ 395, 64 GB RAM, 1 TB SSD

**META_DESCRIPTION:** Mini PC GMKtec EVO-X2 s Ryzen AI Max+ 395, 64 GB RAM, 1 TB SSD a Windows 11 Pro. Pozrite si parametre, cenu a aktuálnu dostupnosť.

### 2. Bezdrôtový adaptér Ottocast OTTOAIBOX P3 Pro pre Android

**SEO_TITLE:** Ottocast OTTOAIBOX P3 Pro – adaptér pre Android

**META_DESCRIPTION:** Ottocast OTTOAIBOX P3 Pro pre Android. Pred výberom si overte kompatibilitu s vozidlom, pripojenie a obsah balenia na PremiumStore.sk.

### 3. Stojan pro tepelné čerpadlo klimatizace STRONGLIFT SL500X INOX

**SEO_TITLE:** Stronglift SL500X INOX – stojan pre tepelné čerpadlo

**META_DESCRIPTION:** Stojan Stronglift SL500X INOX pre tepelné čerpadlo alebo klimatizáciu. Pozrite si rozmery, technické parametre a aktuálnu dostupnosť.

### 4. Homatics Box 4K V2 AI-SR Google TV - UHD multimediální přehrávač

**SEO_TITLE:** Homatics Box 4K V2 AI-SR – UHD prehrávač s Google TV

**META_DESCRIPTION:** Homatics Box 4K V2 AI-SR s Google TV na prehrávanie multimédií v UHD. Overte si konektory, funkcie, obsah balenia a aktuálnu cenu.

### 5. Okuliare VITURE Pro 2 XR

**SEO_TITLE:** VITURE Pro 2 XR – okuliare | PremiumStore.sk

**META_DESCRIPTION:** Okuliare VITURE Pro 2 XR. Pozrite si parametre obrazu, možnosti pripojenia a kompatibilitu so zariadeniami pred výberom.

### 6. Solight kefka na čistenie filtra pre Dyson Airwrap

**SEO_TITLE:** Solight kefka na filter Dyson Airwrap | PremiumStore.sk

**META_DESCRIPTION:** Kefka Solight na čistenie filtra pre Dyson Airwrap. Pozrite si informácie o príslušenstve, aktuálnu cenu a dostupnosť.

### 7. MINIS FORUM X1 Pro-370 Ryzen AI 9 HX370 Mini PC v základnej zostave

**SEO_TITLE:** MINIS FORUM X1 Pro-370 – mini PC s Ryzen AI 9 HX370

**META_DESCRIPTION:** MINIS FORUM X1 Pro-370 s Ryzen AI 9 HX370 v základnej zostave. Overte si presnú konfiguráciu, možnosti rozšírenia a dostupnosť.

### 8. Automatický přepínač sítí - napájení 4P 400V 20A - NLQ4-125/4P pro FVE

**SEO_TITLE:** NLQ4-125/4P 20 A – automatický prepínač sietí pre FVE

**META_DESCRIPTION:** Automatický prepínač sietí NLQ4-125/4P, 4P, 400 V, 20 A pre FVE. Pozrite si technické parametre a požiadavky na zapojenie.

### 9. LCD displej KRUGER & MATZ KM2021 Android Auto Apple Carplay s DVR a couvací kamerou

**SEO_TITLE:** Kruger & Matz KM2021 – displej CarPlay / Android Auto

**META_DESCRIPTION:** Displej Kruger & Matz KM2021 s Android Auto, Apple CarPlay, DVR a cúvacou kamerou. Overte si pripojenie a presný obsah balenia.

### 10. Kamera EMOS IP-1100G WALL /H4170/ GoSmart venkovní bateriová s WiFi a solárním panelem

**SEO_TITLE:** EMOS GoSmart IP-1100G WALL H4170 – Wi-Fi kamera

**META_DESCRIPTION:** Vonkajšia batériová kamera EMOS GoSmart IP-1100G WALL H4170 s Wi-Fi a solárnym panelom. Pozrite si parametre a obsah balenia.

### 11. Tester USB FNIRSI FNB-C2

**SEO_TITLE:** FNIRSI FNB-C2 – USB tester | PremiumStore.sk

**META_DESCRIPTION:** USB tester FNIRSI FNB-C2. Pozrite si merané veličiny, podporované konektory a technické parametre na PremiumStore.sk.

### 12. Mini PC MINIS FORUM UM760 Slim Ryzen 5 7640HS (bez skrinky)

**SEO_TITLE:** MINIS FORUM UM760 Slim – mini PC s Ryzen 5 7640HS

**META_DESCRIPTION:** Mini PC MINIS FORUM UM760 Slim s Ryzen 5 7640HS. Pred objednaním si overte presnú konfiguráciu, obsah balenia a možnosti rozšírenia.

### 13. Powerbanka Flextail Zero Power Metal 5000 mAh (strieborná)

**SEO_TITLE:** Flextail Zero Power Metal – powerbanka 5 000 mAh

**META_DESCRIPTION:** Strieborná powerbanka Flextail Zero Power Metal s kapacitou 5 000 mAh. Pozrite si rozmery, konektory a možnosti nabíjania.

### 14. Enhance S3XY Knob ovladač + Commander + kabely, Tesla 3/Y 2021+ (přední i zadní instalace)

**SEO_TITLE:** Enhance S3XY Knob + Commander pre Tesla 3/Y 2021+

**META_DESCRIPTION:** Súprava Enhance S3XY Knob, Commander a káblov pre Tesla 3/Y 2021+. Overte si kompatibilitu a podmienky prednej či zadnej inštalácie.

### 15. Záložní zdroj VOLT POLSKA Sinus Pro 800 E 12V/230V 800VA 500W

**SEO_TITLE:** VOLT POLSKA Sinus Pro 800 E – záložný zdroj 500 W

**META_DESCRIPTION:** Záložný zdroj VOLT POLSKA Sinus Pro 800 E, 12 V/230 V, 800 VA/500 W. Pozrite si parametre a požiadavky na pripojenie batérie.

### 16. Televes SMARTKOM 531911 digitální programovatelný zesilovač

**SEO_TITLE:** Televes SMARTKOM 531911 – programovateľný zosilňovač

**META_DESCRIPTION:** Digitálny programovateľný zosilňovač Televes SMARTKOM 531911. Overte si vstupy, podporované pásma a možnosti nastavenia.

### 17. Detektor káblov FNIRSI LPM-10A

**SEO_TITLE:** FNIRSI LPM-10A – detektor káblov | PremiumStore.sk

**META_DESCRIPTION:** Detektor káblov FNIRSI LPM-10A. Pozrite si podporované merania, spôsob použitia a obsah balenia pred objednaním.

### 18. MEROSS MRS200MA-EU – inteligentný navíjací mechanizmus na rolety s Wi-Fi

**SEO_TITLE:** Meross MRS200MA-EU – Wi-Fi navíjací mechanizmus na rolety

**META_DESCRIPTION:** Inteligentný navíjací mechanizmus Meross MRS200MA-EU na rolety s Wi-Fi. Overte si kompatibilitu, napájanie a podmienky montáže.

### 19. Xiaomi Redmi Pad 2 9.7 Cover (77599)

**SEO_TITLE:** Xiaomi Redmi Pad 2 9.7 Cover 77599 – obal na tablet

**META_DESCRIPTION:** Obal Xiaomi Redmi Pad 2 9.7 Cover, model 77599. Pred výberom si overte kompatibilitu s tabletom, vyhotovenie a aktuálnu dostupnosť.

### 20. Telefon GSM Kruger&Matz Simple 923 pro seniory

**SEO_TITLE:** Kruger & Matz Simple 923 – GSM telefón pre seniorov

**META_DESCRIPTION:** GSM telefón Kruger & Matz Simple 923 pre seniorov. Pozrite si ovládanie, funkcie, podporované siete a obsah balenia.

## Podmienky spustenia a vyhodnotenia

1. Po dnešnej kategorizácii odporúčame pred spustením aspoň 7 dní sledovať stabilitu URL, canonical, dostupnosti a importov. Ide o prevádzkovú kontrolu; **baseline sa neposúva**. Prípadné pretrvávajúce zmeny pozícií po kategorizácii sa musia uviesť ako rušivý faktor. Táto príprava automatické sledovanie nespúšťa.
2. V neprodukčnom Shoptete overiť, že import prepíše SEO existujúcej karty a zároveň zachová bežné aktualizácie. Aktuálne je doložené zachovanie všetkých ne-SEO bajtov vo feede; koncový import existujúcej karty ešte nie je potvrdený.
3. Tesne pred nasadením znovu overiť všetkých 40 URL, canonical, kódov/EAN a čerstvých OUT; skontrolovať SEO diff a zaznamenať stav title/meta oboch skupín. Aktivovať až po výslovnom schválení používateľom. Schválenie výberu vzorky nie je schválenie produkčného nasadenia.
4. Po nasadení zaznamenať deň zmeny a dátumy opätovného prehľadania/objavenia SEO textov v Google. Prvých 14 dní brať ako prechodné obdobie; hlavné vyhodnotenie naplánovať na dni 15–70 po nasadení a nevyberať si spätne priaznivý koniec. Pri nedostatku dát oznámiť neurčitý výsledok.
5. CTR počítať ako súčet kliknutí / súčet zobrazení. Reportovať zmenu v testovacej aj kontrolnej skupine oproti pevnému baseline a rozdiel týchto zmien; doplniť párové výsledky, interval neistoty, pozície a dostupnosť. Samotné zvýšenie CTR bez kontroly pozícií nepovažovať za dôkaz úspechu. Z dostupného XLSX nie sú k dispozícii denné metriky pre jednotlivé URL ani URL × dopyt, preto nemožno overiť paralelné trendy alebo zhodu dopytov.
6. Po štarte nezameniť vypadnutý produkt za iný. Denný override nebezpečnú identitu preskočí, ceny a dostupnosť zostanú čerstvé; vypadnutie či presmerovanie sa vykáže samostatne, nie ako nulové CTR. Zaznamenávať aj zmeny bežného SEO v kontrolách.

**Nasadenie zostáva zablokované. main, živé feedy ani nastavenia Shoptetu sa touto prípravou nemenili.**

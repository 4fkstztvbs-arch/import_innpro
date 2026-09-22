# Google Merchant Center — "Aktualizujte opisy výrobkov" (kategória TVs)

Kontrola exportu z Google Merchant Center (účet **PremiumStore**, 7299809) z 2026-09-22, filter Kategória = TVs, 36 riadkov. Odporúčanie Google ("Pridať do opisu") je pri **úplne všetkých** riadkoch identické: *„Uhlopříčka obrazovky, Barva a Připojení“* — ide teda o plošné odporúčanie pre celú kategóriu, nie o vyhodnotenie konkrétneho popisu.

## Metodika

Každý riadok som overil voči aktuálne generovaným feedom v `output/*.xml`:
- Google ID v starom tvare `at_<kód>` → vyhľadané podľa `<CODE>` v `output/atos.xml`.
- Číselné Google ID → vyhľadané podľa presnej zhody `<NAME>`, text popisu porovnaný s aktuálnym (po odstránení HTML a normalizácii entít/úvodzoviek).

## Súhrn

| Stav | Počet | Vysvetlenie |
|---|---|---|
| Aktuálny, popis sa zhoduje | 5 | Produkt žije, Google má rovnaký text ako dnešný feed — chýba mu naozaj len farba. |
| Starý Google ID, produkt žije | 11 | Google eviduje produkt pod starou schémou ID (`at_<kód>`) bez popisu vôbec; **rovnaký produkt (podľa `CODE`) má v aktuálnom feede bohatý popis** (10–20 tis. znakov vrátane uhlopriečky aj portov ako štruktúrovaný `TEXT_PROPERTY`). Túto duplicitnú/starú položku v GMC neopraví žiadna zmena feedu. |
| Aktuálny kód/názov, ale GMC drží iný/starý text | 10 | Pozri sekciu nižšie — pri 6+2 z týchto 10 ide preukázateľne o text úplne iného (vyradeného) modelu. |
| Starý Google ID, produkt už neexistuje | 2 | Produkt vypadol zo všetkých dodávateľských feedov (ATOS/K+B/InnPro/BaSys/Solight/Monacor/Penta) — úplne vyradený. |
| Názov nezodpovedá žiadnemu súčasnému produktu | 8 | Buď premenovaný, alebo tiež vyradený — nedá sa jednoznačne dohľadať len podľa názvu. |

**Spolu 31 z 36 riadkov** (všetko okrem "Aktuálny, popis sa zhoduje") sa netýka dnešného obsahu feedu — ide o pozostatky staršieho stavu katalógu v Merchant Center.

## Preukázaný prípad: "Blaupunkt 55UGC5500S" (6 riadkov)

Šesť rôznych Google ID vedie pod rovnakým názvom **"Blaupunkt 55UGC5500S"**, každé s textom o inom modeli Finlux: `43FFI5660`, `43FFF5660`, `24FHE4220`, `24FHE5760`, `32FFF5860`, `24FHG4760`. Overil som, že **žiadny z týchto šiestich Finlux kódov dnes neexistuje v žiadnom feede** (ATOS, K+B, InnPro, BaSys, Solight, Monacor, Penta). Aktuálny živý "Blaupunkt 55UGC5500S" (K+B, kód `100002135399`) má úplne iný, krátky generický popis ("139cm, 4K UHD, 3840x2160, Google TV, 60Hz, En.trida G"). Ide teda o historické/duplicitné záznamy v Merchant Center — nesúvisia s dnešným feedom.

## Skutočná medzera: farba

Pri produktoch, kde sa Google popis zhoduje s aktuálnym (napr. Finlux 40FFI5661, kód `ATO-TVF40FFI5661`), som skontroloval aj štruktúrované `TEXT_PROPERTY` hodnoty, ktoré `transform-atos.js` preberá priamo z ATOS feedu. **Úhlopriečka aj konektivita (HDMI, USB port, LAN RJ45, AV vstup) tam už sú** — ako text v popise aj ako samostatný parameter. Farba tam nie je nikde — ani v popise, ani medzi parametrami — u žiadneho zo skontrolovaných televízorov, pretože ju ATOS vo svojom feede neposiela. To je jediná časť odporúčania Google, ktorá naozaj sedí naprieč celou kategóriou.

## Ako presne Google Merchant Center berie popis (a prečo to sedí aj na živé produkty)

Dohľadal som oficiálnu špecifikáciu a Shoptet dokumentáciu, aby bolo jasné, **kam presne** tieto údaje zapisovať:

- **`description` je vlastný, povinný atribút feedu, max 5000 znakov** (Google Merchant Center — Product data specification). Google výslovne odporúča najdôležitejšie fakty napísať **hneď na začiatok**, lebo pri zobrazení produktu vidí zákazník (a zjavne aj nástroj na kontrolu kvality) najskôr len prvú časť textu.
- **`color` (farba) je úplne samostatný atribút feedu — nie je to text v `description`.** Nedá sa "dopísať veta o farbe do popisu" a čakať, že to Google zoberie ako štruktúrovanú farbu. V Shoptete sa toto rieši cez **Nastavenia → Parametrické filtre**, kde sa konkrétny parameter produktu namapuje na Google parameter `color` — to je krok v administrácii Shoptetu, nie v tomto repozitári. Toto konkrétne odporúčanie GMC ("Pridať do opisu") ale nechce tento štruktúrovaný atribút — chce, aby sa tie isté fakty **slovami objavili priamo v texte `description`** (kvôli vyhľadávaniu/párovaniu dopytov).
- **Shoptet generuje svoj Google feed automaticky (každú hodinu) zo svojej produktovej databázy** — teda z toho istého popisu, ktorý je aj na produktovej stránke (Google to dokonca vyžaduje: popis v feede sa musí zhodovať s popisom na stránke). To, čo `transform-atos.js` zapíše do `<DESCRIPTION>`, je po importe presne to, čo ide aj do Google — netreba teda žiadny ďalší krok na "prepojenie".

**Zmeral som, kde presne (v plain-texte, bez HTML) sa v našich popisoch prvýkrát spomína uhlopriečka/HDMI:**

| Produkt (CODE) | Dĺžka popisu (plain text, znakov) | 1. zmienka "Úhlopříčka" | 1. zmienka "HDMI" | V rámci 5000-znakového limitu Google? |
|---|---|---|---|---|
| 32FQI8061 | 8 463 | znak 5 196 | znak 6 218 | **NIE** |
| ATO-TVF40FFI5661 | 15 336 | znak 7 624 | znak 10 135 | **NIE** |
| MC22TFW11 | 11 456 | znak 5 891 | znak 7 653 | **NIE** |
| 55FQK9070 | 11 966 | znak 3 128 | znak 2 336 | áno |

**Záver:** naša šablóna popisu (dlhý marketingový úvod → "Klíčové vlastnosti" → tabuľka "Technické specifikace" až na konci) posúva presne tie fakty, ktoré Google chce, za hranicu 5000 znakov, ktorú Google pre `description` reálne prijíma. Google preto tieto údaje u väčšiny produktov **reálne nevidí**, hoci v HTML zdroji sú — nejde teda len o staré záznamy v Merchant Center (vyššie), ale aj o poradie faktov v šablóne popisu.

## Vykonaná náprava (2026-09-22)

Doplnené `scripts/lib/atos-tv-quick-facts.js` — pre televízory (kategória končiaca na "Televízory" a s vyplneným parametrom "Úhlopříčka") sa na **úplný začiatok** `<DESCRIPTION>` vloží krátka veta v tvare `Uhlopriečka obrazovky <hodnota>, farba <ak je v názve>, pripojenie <HDMI/Wi-Fi/USB/LAN/AV podľa toho, čo produkt naozaj má>.` — všetko len z hodnôt, ktoré ATOS sám posiela v `TEXT_PROPERTIES` (žiadne dopĺňanie farby naslepo — ak ju názov produktu neuvádza, veta ju jednoducho vynechá).

**Veta je vždy po slovensky** (výslovná požiadavka používateľa), aj keď zvyšok ATOS popisu za ňou ostáva po česky (dodávateľská marketingová kópia, mimo rozsahu tejto úpravy) — farba z českého názvu produktu (napr. "Bílá") sa preto pri vkladaní prekladá na slovenský tvar ("biela"), nekopíruje sa 1:1.

- `scripts/transform-atos.js` — použité pri každom budúcom nočnom behu (živý zdroj dát).
- `scripts/inject-atos-tv-quick-facts.js` — jednorazový patch tej istej logiky na už vygenerovaný `output/atos.xml`, keďže živý ATOS feed sa dá stiahnuť len v noci a s prístupovými údajmi. Idempotentný aj naprieč zmenou znenia vety — pri opravnom behu (pôvodne po česky → teraz po slovensky) starú vetu rozpoznal a nahradil, nie zduplikoval. Spustený: **14 televízorov** upravených (23 produktov v kategórii "Televízory" spolu, 9 z nich je príslušenstvo bez vlastnej uhlopriečky — adaptéry, kufríky na projektor, držiaky — tie sa správne preskočili).
- `scripts/tests/atos-tv-quick-facts.test.js` — jednotkové testy vrátane regresie na chybu s `\b` v regexe, ktorý pri slovách s diakritikou (napr. "Bílá") na konci reťazca nikdy nenašiel hranicu slova.

**Zostáva po česky** (mimo rozsahu tejto úpravy, len upozornenie): zvyšok ATOS popisu — marketingový úvod, "Klíčové vlastnosti", tabuľka "Technické specifikace" — je dodávateľská kópia, ktorú `transform-atos.js` len preberá, a je (a vždy bola) po česky pre celý katalóg, nielen televízory. Plný preklad by bol samostatná, oveľa väčšia úloha (tisíce produktov, dlhé HTML popisy) — pozri poznámku v odpovedi, či sa má riešiť.

Mimochodom som si všimol, že popis produktu `FINLUX 32FWI5670 SMART ANDROID TV FULL HD BÍLÁ` má vlastný nadpis "FINLUX 32FFI5670 ANDROID TV BÍLÁ" (WI5670 vs FI5670) — vyzerá to na preklep priamo v ATOS-ovej dodávateľskej kópii, nie na niečo, čo spôsobil tento feed. Neopravoval som to (mimo zadania), len na to upozorňujem.

Zdroje:
- [Product data specification — Google Merchant Center Help](https://support.google.com/merchants/answer/7052112?hl=en)
- [Google Nákupy — Shoptet Podpora](https://podpora.shoptet.cz/google-nakupy/)
- [Parametrické filtry — Shoptet Podpora](https://podpora.shoptet.cz/parametricke-filtry/)

## Detailná tabuľka

| # | Produkt | Google ID | Stav | Poznámka |
|---|---|---|---|---|
| 1 | Finlux 32FFI5762 Smart TV Full Hd Tivo | `14743078605451720435` | Názov už nezodpovedá žiadnemu produktu | presný názov už nikde nie je (premenovaný/vyradený produkt) |
| 2 | Finlux 40FFI5661 Smart TV Full Hd Tivo | `at_ato-tvf40ffi5661` | Starý Google ID (`at_<kód>`), produkt žije | atos.xml / FINLUX 40FFI5661 SMART TV FULL HD TIVO |
| 3 | Finlux 32FQI8061 Smart Qled TV Full Hd Tivo | `at_32fqi8061` | Starý Google ID (`at_<kód>`), produkt žije | atos.xml / FINLUX 32FQI8061 SMART QLED TV FULL HD TIVO |
| 4 | Blaupunkt 55UGC5500S | `13664801227879370218` | Aktuálny kód/názov — GMC drží iný/starý text | kb.xml / 100002135399 — GMC drží starý/iný popis |
| 5 | LED ambientní RGB GoSmart osvětlení EMOS ZTV75 za TV 75“ (189 cm) | `17447863912433654880` | Aktuálny — popis sa zhoduje | atos.xml / EMO1551750000 — popis sa zhoduje |
| 6 | Finlux 43FQK9070 Ultra Hd 4K Qled Smart Android TV | `5445184725422877834` | Názov už nezodpovedá žiadnemu produktu | presný názov už nikde nie je (premenovaný/vyradený produkt) |
| 7 | Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart DVB-T2/S2 | `17100974069888894237` | Aktuálny — popis sa zhoduje | atos.xml / LEC-KM0243FHD-V3 — popis sa zhoduje |
| 8 | Blaupunkt 55UGC5500S | `3404722309981103230` | Aktuálny kód/názov — GMC drží iný/starý text | kb.xml / 100002135399 — GMC drží starý/iný popis |
| 9 | Blaupunkt 55UGC5500S | `10252795849958566232` | Aktuálny kód/názov — GMC drží iný/starý text | kb.xml / 100002135399 — GMC drží starý/iný popis |
| 10 | Blaupunkt 55UGC5500S | `8262114140347622515` | Aktuálny kód/názov — GMC drží iný/starý text | kb.xml / 100002135399 — GMC drží starý/iný popis |
| 11 | Finlux 32FFI5762 Smart TV Full Hd Tivo | `at_tvf32ffi5762` | Starý Google ID, produkt už neexistuje | kód TVF32FFI5762 v žiadnom feede |
| 12 | Finlux 55FQK9060 Ultra Hd 4K Qled Smart Tivo | `at_ato-tvf55fqk9060` | Starý Google ID (`at_<kód>`), produkt žije | atos.xml / FINLUX 55FQK9060 ULTRA HD 4K QLED SMART TIVO |
| 13 | MASCOM MC28TFW11 – 28” Full HD Smart TV (12 V, WebOS, Wi-Fi, DVB-S2/T2/C) | `at_mc28tfw11` | Starý Google ID (`at_<kód>`), produkt žije | atos.xml / MASCOM MC28TFW11 – 28” Full HD Smart TV (12 V, WebOS, Wi-Fi, DVB-S2/T2/C) |
| 14 | Finlux 24FHMG5771 Android TV 12V Travel Smart | `at_24fhmg5771` | Starý Google ID (`at_<kód>`), produkt žije | atos.xml / FINLUX 24FHMG5771 ANDROID TV 12V TRAVEL SMART |
| 15 | OPTICUM TVL0041 12V / 24V Travel | `15497105285619588622` | Názov už nezodpovedá žiadnemu produktu | presný názov už nikde nie je (premenovaný/vyradený produkt) |
| 16 | Finlux 65FUG9070 Ultra Hd 4K Qled Smart Android TV | `11076261886429787439` | Názov už nezodpovedá žiadnemu produktu | presný názov už nikde nie je (premenovaný/vyradený produkt) |
| 17 | Kruger&Matz KM0224-V3 24" ( 61 cm ) Smart televizor VIDAA | `at_lec-km0224-v3` | Starý Google ID, produkt už neexistuje | kód LEC-KM0224-V3 v žiadnom feede |
| 18 | MASCOM MC22TFW11 – 22” Full HD Smart TV (12 V, WebOS, DVB-S2/T2/C) | `4501218502720045355` | Aktuálny kód/názov — GMC drží iný/starý text | atos.xml / MC22TFW11 — GMC drží starý/iný popis |
| 19 | Finlux 32FQI8061 Smart Qled TV Full Hd Tivo | `9978329532650268382` | Aktuálny — popis sa zhoduje | atos.xml / 32FQI8061 — popis sa zhoduje |
| 20 | Finlux 32FWI5670 Smart Android TV Full Hd Bílá | `at_32fwi5670` | Starý Google ID (`at_<kód>`), produkt žije | atos.xml / FINLUX 32FWI5670 SMART ANDROID TV FULL HD BÍLÁ |
| 21 | MASCOM MC28TFW11 (WebOS/S2/T2/C/12V/SMART/Wi-Fi) | `12714302691891212337` | Názov už nezodpovedá žiadnemu produktu | presný názov už nikde nie je (premenovaný/vyradený produkt) |
| 22 | Blaupunkt 55UGC5500S | `6800010294213559876` | Aktuálny kód/názov — GMC drží iný/starý text | kb.xml / 100002135399 — GMC drží starý/iný popis |
| 23 | Finlux 32FFI5670 Android TV | `at_32ffi5670` | Starý Google ID (`at_<kód>`), produkt žije | atos.xml / FINLUX 32FFI5670 ANDROID TV |
| 24 | Finlux 65FQK9070 Ultra Hd 4K Qled Smart Android TV | `at_65fqk9070` | Starý Google ID (`at_<kód>`), produkt žije | atos.xml / FINLUX 65FQK9070 ULTRA HD 4K QLED SMART ANDROID TV |
| 25 | Finlux 55FQK9070 Ultra Hd 4K Qled Smart Android TV | `9795633359410107610` | Aktuálny — popis sa zhoduje | atos.xml / 55FQK9070 — popis sa zhoduje |
| 26 | Televize Kruger&Matz KM0243FHD-V 43" FHD smart DVB-T2/S2 H265 HEVC | `8081683393986070414` | Názov už nezodpovedá žiadnemu produktu | presný názov už nikde nie je (premenovaný/vyradený produkt) |
| 27 | Finlux 55FQK9070 Ultra Hd 4K Qled Smart Android TV | `at_55fqk9070` | Starý Google ID (`at_<kód>`), produkt žije | atos.xml / FINLUX 55FQK9070 ULTRA HD 4K QLED SMART ANDROID TV |
| 28 | Finlux 32FFMG5771 Android TV 12V Travel Smart | `at_32ffmg5771` | Starý Google ID (`at_<kód>`), produkt žije | atos.xml / FINLUX 32FFMG5771 ANDROID TV 12V TRAVEL SMART |
| 29 | Televize Kruger&Matz KM0232-V3 32'' HD smart DVB-T2/S2 H.265 HEVC | `6270305295496330456` | Názov už nezodpovedá žiadnemu produktu | presný názov už nikde nie je (premenovaný/vyradený produkt) |
| 30 | Blaupunkt 55UGC5500S | `5239796629624504878` | Aktuálny kód/názov — GMC drží iný/starý text | kb.xml / 100002135399 — GMC drží starý/iný popis |
| 31 | MASCOM MC22TFW11 – 22” Full HD Smart TV (12 V, WebOS, DVB-S2/T2/C) | `9518165035943190954` | Aktuálny kód/názov — GMC drží iný/starý text | atos.xml / MC22TFW11 — GMC drží starý/iný popis |
| 32 | LED ambientní RGB GoSmart osvětlení EMOS ZTV55 za TV 55“ (139 cm) | `11245071036637111221` | Aktuálny — popis sa zhoduje | atos.xml / EMO1551550000 — popis sa zhoduje |
| 33 | Autoadaptér SENCOR Opticum, Kruger 12V k LCD TV do karavanu | `8991912962485375073` | Názov už nezodpovedá žiadnemu produktu | presný názov už nikde nie je (premenovaný/vyradený produkt) |
| 34 | Finlux 32FQI8071 Qled Smart TV Android | `at_ato-tvf32fqi8071` | Starý Google ID (`at_<kód>`), produkt žije | atos.xml / FINLUX 32FQI8071 QLED SMART TV ANDROID |
| 35 | Finlux 55FQK9060 Ultra Hd 4K Qled Smart Tivo | `9454803405173392366` | Aktuálny kód/názov — GMC drží iný/starý text | atos.xml / ATO-TVF55FQK9060 — GMC drží starý/iný popis |
| 36 | Finlux 32FFI5670 Android TV | `16121230834654022872` | Aktuálny kód/názov — GMC drží iný/starý text | atos.xml / 32FFI5670 — GMC drží starý/iný popis |

## Odporúčanie

1. **V tomto repozitári** nie je čo opraviť pre riadky klasifikované ako staré/duplicitné/vyradené — Google ich nečerpá z aktuálneho feedu, takže žiadna zmena `transform-atos.js` sa k nim nedostane. Vyžaduje to zásah priamo v Merchant Center (Nastavenia → Zdroje údajov / Diagnostika) — nájsť a vypnúť starý/duplicitný zdroj dát, prípadne počkať, kým položky bez aktuálnych dát exspirujú.
2. **Farba** — jediná časť odporúčania, ktorá sa dá riešiť tu v kóde (napr. doplnením `TEXT_PROPERTY "Barva"` + vety do popisu v `transform-atos.js`, s odvodením z názvu produktu tam, kde ho ATOS uvádza — napr. "Bílá" pri 32FWI5670 — a predvolenou hodnotou pre ostatné). Keďže ide o živý feed s automatickým nočným syncom (zmena sa prejaví na reálnom e-shope aj v Merchant Center bez ďalšieho schválenia), túto zmenu zatiaľ nerobím bez potvrdenia.

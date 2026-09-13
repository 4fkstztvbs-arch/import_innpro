# Kategórie mimo stromu — solight

Kontrola z 2026-09-13 20:15 UTC.

Tieto kategórie feed zapisoval, ale v strome neexistujú. Shoptet by ich pri
importe vytvoril, preto boli **skrátené na najhlbšieho existujúceho predka** (produkty
zostali v ponuke, len o úroveň vyššie).

Zaradenie treba doriešiť: buď opraviť `categoryRenamesByPath` daného dodávateľa, alebo
kategóriu vedome pridať do Shoptetu a obnoviť `data/known-categories.json` cez
`node scripts/build-known-categories.js`.

| Kategória mimo stromu | Produktov | Zaradené namiesto toho do | Príklad produktu |
|---|---|---|---|
| `Elektroinštalačný materiál` | 964 | **bez kategórie** | Solight koaxiálny kábel CC120, voľne, 100m |
| `Elektroinštalačný materiál > Osvetlenie` | 574 | **bez kategórie** | Solight sada 4ks vianočných sviečok, 4,5x6cm, prírodný vosk, |
| `Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica` | 174 | **bez kategórie** | Solight 3z + USB A+C predlžovací prívod - kocka, 2m, 3 x 1mm |
| `Elektroinštalačný materiál > Ostatné` | 142 | **bez kategórie** | Solight koaxiálny kábel CC120, voľne, 100m |
| `Elektroinštalačný materiál > Osvetlenie > LED osvetlenie` | 135 | **bez kategórie** | Solight LED osvetlenie s diaľkovým ovládačom Larios White, 4 |
| `Elektroinštalačný materiál > Osvetlenie > Vianocne osvetlenie` | 130 | **bez kategórie** | Solight sada 4ks vianočných sviečok, 4,5x6cm, prírodný vosk, |
| `Elektroinštalačný materiál > Ostatné > 230V` | 124 | **bez kategórie** | Solight bezpečnostná zátka - sada 5ks+1 kľúčik |
| `Domáce spotrebiče > Malé spotrebiče` | 93 | `Domáce spotrebiče` | Solight digitálne hodiny s bluetooth synchronizáciou |
| `Elektroinštalačný materiál > Osvetlenie > Vianocne osvetlenie > Vianočné LED dekorácie` | 75 | **bez kategórie** | Solight sada 4ks vianočných sviečok, 4,5x6cm, prírodný vosk, |
| `Elektroinštalačný materiál > Osvetlenie > LED pásky` | 75 | **bez kategórie** | Solight LED napájací zdroj, 230V - 24V, 1A, 24W, IP65 |
| `TV, audio a video` | 71 | **bez kategórie** | Solight účastnícka zásuvka koncová so SAT, útlm: 3dB |
| `Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Viaczásuvkové` | 65 | **bez kategórie** | Solight 3z + USB A+C predlžovací prívod - kocka, 2m, 3 x 1mm |
| `Elektroinštalačný materiál > Osvetlenie > LED Žiarovky` | 61 | **bez kategórie** | Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425lm, biela |
| `Elektroinštalačný materiál > Osvetlenie > LED osvetlenie > Interiérové osvetlenie` | 56 | **bez kategórie** | Solight LED osvetlenie s diaľkovým ovládačom Larios White, 4 |
| `Elektroinštalačný materiál > Osvetlenie > Vianocne osvetlenie > Vianočné reťaze` | 55 | **bez kategórie** | Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľkový ovl |
| `Elektroinštalačný materiál > Zvončeky` | 51 | **bez kategórie** | Solight bezdrôtový zvonček, do zásuvky, 180m, čierny, learni |
| `Elektroinštalačný materiál > Osvetlenie > Svietidlá` | 47 | **bez kategórie** | Solight kovový lampáš so žiarovkou s micro LED, teplá biela, |
| `TV, audio a video > AV káble` | 46 | **bez kategórie** | Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor - HDMI  |
| `Elektroinštalačný materiál > Ostatné > 230V > Rozbočky` | 44 | **bez kategórie** | Solight bezpečnostná zátka - sada 5ks+1 kľúčik |
| `Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Viaczásuvkové > Klasické` | 43 | **bez kategórie** | Solight predlžovací prívod, 3 zásuvky, biely, 10m |
| `Elektroinštalačný materiál > Osvetlenie > LED panely a podhľadová svetla` | 42 | **bez kategórie** | Solight LED podhľadové svietidlo bodové, 5W, 400lm, 3000K, o |
| `Elektroinštalačný materiál > Osvetlenie > LED osvetlenie > Vonkajšie osvetlenie` | 41 | **bez kategórie** | Solight LED vonkajšie osvetlenie Siena, biele, 20W, 1500lm,  |
| `Fotovoltaika a energie` | 39 | **bez kategórie** | Solight univerzálny zdroj pre netbooky a notebooky, 48W, 7 k |
| `Elektroinštalačný materiál > Osvetlenie > LED pásky > LED pásiky` | 38 | **bez kategórie** | Solight LED svetelný pás so svetelným a pohybovým senzorom,  |
| `Fotovoltaika a energie > Napájacie zdroje` | 37 | **bez kategórie** | Solight univerzálny zdroj pre netbooky a notebooky, 48W, 7 k |
| `Elektroinštalačný materiál > Osvetlenie > LED panely a podhľadová svetla > LED podhľadové panely a svetlá` | 36 | **bez kategórie** | Solight LED podhľadové svietidlo bodové, 5W, 400lm, 3000K, o |
| `Náradie a dielňa` | 35 | **bez kategórie** | Solight multimeter, max. AC 600V, max. DC 600V / 10A, test d |
| `Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Jednozásuvkové` | 33 | **bez kategórie** | Solight predlžovací prívod - spojka, 1 zásuvka, čierna, 15m |
| `Elektroinštalačný materiál > Ostatné > 230V > Flexo šnúry` | 32 | **bez kategórie** | Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá, vypínač |
| `Domáce spotrebiče > Malé spotrebiče > Meteostanice` | 31 | `Domáce spotrebiče` | Solight digitálne hodiny s bluetooth synchronizáciou |
| `Elektroinštalačný materiál > Osvetlenie > Vianocne osvetlenie > Vianočné reťaze > Batériové` | 30 | **bez kategórie** | Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 funkcií,  |
| `Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika` | 29 | `Domáce spotrebiče` | Solight nástenný keramický ohrievač, 2000 W, biely |
| `Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Jednozásuvkové > Jednozásuvkové 230V` | 29 | **bez kategórie** | Solight predlžovací prívod - spojka, 1 zásuvka, 30m, 3 x 1,5 |
| `Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Výsuvné a vstavané zásuvky` | 28 | **bez kategórie** | Solight dvojzásuvka IP66, vodotesná a prachotesná |
| `Elektroinštalačný materiál > Osvetlenie > LED žiarovky > E27` | 28 | **bez kategórie** | Solight LED SMART WIFI žiarovka, klasický tvar, 15W, E27, RG |
| `Elektroinštalačný materiál > Osvetlenie > LED reflektory` | 27 | **bez kategórie** | Solight stojan teleskopický pre LED reflektory, 60-150cm, pr |
| `TV, audio a video > AV káble > Computer` | 27 | **bez kategórie** | Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konektor, sáč |
| `Elektroinštalačný materiál > Osvetlenie > LED stolové lampy` | 27 | **bez kategórie** | Solight LED stolná lampička nabíjacia, 5W, RGB podsvietenie, |
| `Bezpečnosť a smart domácnosť` | 25 | **bez kategórie** | Solight maketa bezpečnostnej kamery, na strop, LED dióda, 3  |
| `Elektroinštalačný materiál > Osvetlenie > Vianocne osvetlenie > Vianočné reťaze > Sieťové 230V` | 25 | **bez kategórie** | Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľkový ovl |
| `Elektroinštalačný materiál > Ostatné > 230V > Koncovky` | 25 | **bez kategórie** | Solight zástrčka uhlová, nízky profil od steny, IP20, biela |
| `Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Navíjacie bubny` | 24 | **bez kategórie** | Solight predlžovací prívod na bubne, 4 zásuvky, 50m, oranžov |
| `Elektroinštalačný materiál > Osvetlenie > LED pásky > Príslušenstvo` | 23 | **bez kategórie** | Solight prepojovací konektor pre RGB LED pásy, zacvakávacie, |
| `Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Viaczásuvkové > Ostatné` | 22 | **bez kategórie** | Solight 3z + USB A+C predlžovací prívod - kocka, 2m, 3 x 1mm |
| `Elektroinštalačný materiál > Osvetlenie > Svietidlá > Nabíjacie` | 22 | **bez kategórie** | Solight LED čelové nabíjacie svietidlo, 3W + COB, 150lm + 60 |
| `TV, audio a video > AV káble > Computer > USB` | 22 | **bez kategórie** | Solight USB-C 240W kábel s integrovaným stojanom |
| `Elektroinštalačný materiál > Osvetlenie > LED osvetlenie > Vonkajšie osvetlenie > Prisadené osvetlenie` | 21 | **bez kategórie** | Solight LED vonkajšie osvetlenie Siena, biele, 20W, 1500lm,  |
| `Fotovoltaika a energie > Napájacie zdroje > USB adaptéry` | 20 | **bez kategórie** | Solight USB-C fast charger 20W |
| `Náradie a dielňa > Meracia technika` | 19 | **bez kategórie** | Solight multimeter, max. AC 600V, max. DC 600V / 10A, test d |
| `Bezpečnosť a smart domácnosť > Zabezpečenie` | 18 | **bez kategórie** | Solight maketa bezpečnostnej kamery, na strop, LED dióda, 3  |
| `Elektroinštalačný materiál > Osvetlenie > LED žiarovky > E14` | 17 | **bez kategórie** | Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm |
| `Domáce spotrebiče > Malé spotrebiče > Príslušenstvo k malým spotrebičom > Príslušenstvo k vysávačom` | 15 | `Domáce spotrebiče` | Solight filter pre Dyson V11 |
| `Domáce spotrebiče > Malé spotrebiče > Príslušenstvo k malým spotrebičom` | 15 | `Domáce spotrebiče` | Solight filter pre Dyson V11 |
| `TV, audio a video > Antény a satelity` | 14 | **bez kategórie** | Solight účastnícka zásuvka koncová so SAT, útlm: 3dB |
| `Elektroinštalačný materiál > Osvetlenie > LED pásky > Napájacie zdroje 12V` | 14 | **bez kategórie** | Solight LED napájací zdroj, 230V - 24V, 1A, 24W, IP65 |
| `Náradie a dielňa > Ručné AKU náradie` | 14 | **bez kategórie** | Solight batéria Li-Ion 21V 4Ah pre aku náradie Solight |
| `Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Prepäťové ochrany` | 13 | **bez kategórie** | Solight prepäťová ochrana, 8z, USB A+C, 2m, biela |
| `Náradie a dielňa > Meracia technika > Multimetre a zkúšačky` | 13 | **bez kategórie** | Solight multimeter, max. AC 600V, max. DC 600V / 10A, test d |
| `Elektroinštalačný materiál > Osvetlenie > LED osvetlenie > Technické osvetlenie` | 13 | **bez kategórie** | Solight LED lineárne osvetlenie prepojiteľné, 24W, 2280lm, 4 |
| `Elektroinštalačný materiál > Cestovné adaptéry` | 12 | **bez kategórie** | Solight cestovný adaptér pre JAR, Afriku a Stredný východ, t |
| `Elektroinštalačný materiál > Ostatné > Izolačný materiál` | 12 | **bez kategórie** | Solight viazacie nylonové pásky, 4,8 x 350mm, natural, 100ks |
| `Elektroinštalačný materiál > Osvetlenie > LED reflektory > Reflektory so stojanom` | 12 | **bez kategórie** | Solight stojan teleskopický pre LED reflektory, 60-150cm, pr |
| `Domáce spotrebiče > Malé spotrebiče > Vybavenie domácnosti` | 12 | `Domáce spotrebiče` | Solight axiálny ventilátor s časovačom |
| `Auto-moto > Autopríslušenstvo` | 12 | `Auto-moto` | Solight náhradné trubičky pre alkohol tester Solight 1T04, 1 |
| `Zdravie a starostlivosť > Starostlivosť o vlasy > Príslušenstvo k starostlivosť o vlasy` | 12 | `Zdravie a starostlivosť > Starostlivosť o vlasy` | Solight tryska proti krúteniu pre fén Dyson Supersonic (zlat |
| `TV, audio a video > TV stolíky a držiaky` | 11 | **bez kategórie** | Solight veľký naklápací držiak pre ploché TV, 94cm - 190cm ( |
| `Elektroinštalačný materiál > Osvetlenie > Priemyselné LED osvetlenie` | 11 | **bez kategórie** | Solight high bay, 100W, 14000lm, 120°, Philips, MW, 5000K, U |
| `Elektroinštalačný materiál > Osvetlenie > LED reflektory > Reflektory bez senzora` | 11 | **bez kategórie** | Solight LED reflektor PRO, 100W, 9200lm, 5000K, IP65 |
| `Elektroinštalačný materiál > Ostatné > 230V > Vypínače a zásuvky` | 11 | **bez kategórie** | Solight vypínač Slim č. 7 krížový, biely |
| `Elektroinštalačný materiál > Osvetlenie > Svietidlá > Čelové` | 11 | **bez kategórie** | Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA |
| `Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Záhradné stĺpiky` | 11 | **bez kategórie** | Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábel 1,5m |
| `Náradie a dielňa > Ručné AKU náradie > Príslušenstvo` | 11 | **bez kategórie** | Solight batéria Li-Ion 21V 4Ah pre aku náradie Solight |
| `TV, audio a video > AV káble > Video` | 10 | **bez kategórie** | Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor - HDMI  |
| `Elektroinštalačný materiál > Osvetlenie > LED osvetlenie > Kuchynské osvetlenie` | 10 | **bez kategórie** | Solight LED lineárne svietidlo podlinkové, 10W, 4100K, 3-stu |
| `Elektroinštalačný materiál > Osvetlenie > Senzory a konektory` | 10 | **bez kategórie** | Solight PIR interiérový senzor, do krabičky od vypínačov, fu |
| `Elektroinštalačný materiál > Osvetlenie > LED osvetlenie > Nočné a dekoratívne svetielka` | 10 | **bez kategórie** | Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabíjacie, P |
| `Auto-moto > Autopríslušenstvo > Alkohol testery` | 10 | `Auto-moto` | Solight náhradné trubičky pre alkohol tester Solight 1T04, 1 |
| `Elektroinštalačný materiál > Osvetlenie > LED osvetlenie > Vonkajšie osvetlenie > Fasádne a záhradné osvetlenie` | 10 | **bez kategórie** | Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W, 450lm, |
| `Elektroinštalačný materiál > Časové spínače` | 9 | **bez kategórie** | Solight digitálny časový spínač |
| `TV, audio a video > AV káble > Video > HDMI` | 9 | **bez kategórie** | Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor - HDMI  |
| `Elektroinštalačný materiál > Ostatné > Izolačný materiál > Viazacie pásky` | 9 | **bez kategórie** | Solight viazacie nylonové pásky, 4,8 x 350mm, natural, 100ks |
| `TV, audio a video > Antény a satelity > Antény` | 9 | **bez kategórie** | Solight vonkajšia anténa, DVB-T2, 47dB |
| `Elektroinštalačný materiál > Osvetlenie > LED trubicové žiarivky` | 9 | **bez kategórie** | Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm, 4000K,  |
| `Elektroinštalačný materiál > Osvetlenie > LED osvetlenie > Vonkajšie osvetlenie > Solárne osvetlenie` | 9 | **bez kategórie** | Solight LED solárne svetlo so senzorom, 8W, 600lm, Li-on, či |
| `Elektroinštalačný materiál > Osvetlenie > Priemyselné LED osvetlenie > High Bay` | 8 | **bez kategórie** | Solight high bay, 100W, 14000lm, 120°, Philips, MW, 5000K, U |
| `Elektroinštalačný materiál > Ostatné > 230V > Viacnásobné zásuvky` | 8 | **bez kategórie** | Solight viacnásobná zásuvka, 3 zásuvky |
| `Elektroinštalačný materiál > Osvetlenie > LED žiarovky > GU10` | 8 | **bez kategórie** | Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425lm, biela |
| `TV, audio a video > AV káble > Anténa` | 8 | **bez kategórie** | Solight anténny koaxiálny kábel, kombinované konektory, 1,5m |
| `Bezpečnosť a smart domácnosť > Smart domácnosť` | 7 | **bez kategórie** | Solight diaľkovo ovládané vonkajšie zásuvky set 2 + 1, 2 zás |
| `Mobily, smart hodinky a tablety > Príslušenstvo` | 6 | **bez kategórie** | Solight lokátor na bicykel, Find My kompatibilný |
| `Mobily, smart hodinky a tablety` | 6 | **bez kategórie** | Solight lokátor na bicykel, Find My kompatibilný |

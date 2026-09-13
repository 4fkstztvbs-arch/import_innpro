# Kategórie mimo stromu — penta

Kontrola z 2026-09-13 20:15 UTC.

Tieto kategórie feed zapisoval, ale v strome neexistujú. Shoptet by ich pri
importe vytvoril, preto boli **skrátené na najhlbšieho existujúceho predka** (produkty
zostali v ponuke, len o úroveň vyššie).

Zaradenie treba doriešiť: buď opraviť `categoryRenamesByPath` daného dodávateľa, alebo
kategóriu vedome pridať do Shoptetu a obnoviť `data/known-categories.json` cez
`node scripts/build-known-categories.js`.

| Kategória mimo stromu | Produktov | Zaradené namiesto toho do | Príklad produktu |
|---|---|---|---|
| `Bezpečnosť a smart domácnosť > IP kamery` | 53 | **bez kategórie** | kamerový set TP-Link Tapo C425 KIT 4MPx, vonkajšie, IP, WiFi |
| `TV, audio a video > Audio technika > Mikrofóny` | 50 | **bez kategórie** | Príslušenstvo BOYA BY-T120 protivětrný kryt 120x23mm |
| `Auto-moto > Karavany a obytná autá > Meniče napätie` | 32 | `Auto-moto` | Napäťový menič MHPower MPU-500-12 záložní zdroj, 12V/230V, 5 |
| `Auto-moto > Nabíjanie > Autobatérie` | 28 | `Auto-moto` | Nabíjačka autobatérií CTEK MXS 5.0 Polar 12 V, 5 A |
| `Domáce spotrebiče > Malé spotrebiče > Vysávače > Robotické vysávače` | 25 | `Domáce spotrebiče` | Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vysávača Ta |
| `TV, audio a video > Audio technika > Slúchadlá > Bezdrôtové slúchadlá` | 21 | **bez kategórie** | Slúchadlá Buxton BHP 7300 BLACK BT |
| `Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Aroma difuzéry` | 21 | `Domáce spotrebiče` | Aróma difuzér Sixtol Vulcan svetlé drevo 350 ml |
| `Domáce spotrebiče > Malé spotrebiče > Nádobie > Termosky a termohrnčeky` | 20 | `Domáce spotrebiče` | Termoska BERGNER fľaša nerezová oceľ 0,5 l čierna |
| `Domáce spotrebiče > Malé spotrebiče > Vákuovačky a zváračky fólií > Vákuovačky a zváračky` | 18 | `Domáce spotrebiče` | Vákuovacie fólie G21 rola 20 x 600 cm 2 ks |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače` | 14 | `Domáce spotrebiče` | Blender G21 Experience Graphite Black |
| `Auto-moto > Karavany a obytná autá > Autochladničky` | 10 | `Auto-moto` | Autochladnička G21 C&W 45 litrov, 12/230 V |
| `Počítače a notebooky > Predlžovacie káble` | 9 | **bez kategórie** | Kábel PremiumCord prodlužovací přívod 230V 10m 3 zásuvky+vyp |
| `Bezpečnosť a smart domácnosť > Prvky výkonu > Smart zástrčky > Zásuvky` | 9 | **bez kategórie** | Múdra zásuvka TP-Link Tapo P100 (2-pack) regulácia 230V cez  |
| `Náradie a dielňa > MERACIE TECHNIKA > Detektory` | 9 | **bez kategórie** | Detektor Kreator KRT706400 - Multifunkčný 4-IN-1 |
| `Domáce spotrebiče > Malé spotrebiče` | 8 | `Domáce spotrebiče` | Samolepiace hodiny G21 Classic Style |
| `Bezpečnosť a smart domácnosť > Osvetlenie` | 7 | **bez kategórie** | Múdra žiarovka TP-Link Tapo L510E E27, 8,7W, 230V, cez IP, s |
| `Počítače a notebooky > Akumulátory, batérie > Batérie` | 6 | **bez kategórie** | Batéria Avacom SAFT LS26500 lithiový článek velikost C (R14) |
| `Šport, hračky a voľný čas` | 6 | **bez kategórie** | Bežecký pás Acra GB4500N pre chôdzu a pomalý beh |
| `Domáce spotrebiče > Malé spotrebiče > Žehličky` | 6 | `Domáce spotrebiče` | Žehlička Nedis IRON2000 napařovací |
| `Domáce spotrebiče > Malé spotrebiče > Nádobie > Hrnce` | 5 | `Domáce spotrebiče` | Hrniec Berlingerhaus s mramorovým povrchom 28 cm Black Rose  |
| `Foto a príslušenstvo > Fotopasce` | 5 | **bez kategórie** | Fotopasca Camouflage SM4 Pro |
| `Počítače a notebooky > Čítačky kariet` | 4 | **bez kategórie** | Čítačka kariet Hama Multi USB 3.0, SD/microSD/CF černá |
| `Náradie a dielňa > Náradie` | 4 | **bez kategórie** | Rádio Narex BT 02 pracovné, USB, BT, powerbank |
| `Fotovoltaika a energie` | 4 | **bez kategórie** | Kábel Sunpulse SMC4-4Y solárny rozbočovací, 1 pár, k fotovol |
| `Mobily, smart hodinky a tablety > Selfie tyče` | 4 | **bez kategórie** | Selfie tyč FIXED Snap Lite s Tripod a bezdrôtovou spúšťou, č |
| `Elektroinštalačný materiál > Osvetlenie > Vianocne osvetlenie` | 4 | **bez kategórie** | Vianočná LED reťaz Retlux RXL 210, 200 LED, 20+5m CW TM |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Kuchynské roboty` | 3 | `Domáce spotrebiče` | Kuchynský robot G21 Promesso Aluminium |
| `Šport, hračky a voľný čas > Outdoor > Svietidlá > Čelovky` | 3 | **bez kategórie** | LED čelovka Cattara 570lm ZOOM nabíjecí |
| `Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Rýchlovarné kanvice` | 3 | `Domáce spotrebiče` | Rýchlovarná kanvica Hyundai VK770 nerez |
| `TV, audio a video > Video technika > Kamery do autá` | 3 | **bez kategórie** | Kamera Niceboy PILOT S10 Radar 4k do auta |
| `Domáce spotrebiče > Malé spotrebiče > Grily, pekárne, variče > Pece na pizzu` | 2 | `Domáce spotrebiče` | Pec na pizzu G21 Bianca multifunkčná, 400 °C |
| `Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Odšťavovače` | 2 | `Domáce spotrebiče` | Odšťavovač G21 Gracioso horizontal |
| `Náradie a dielňa > Spájkovačky` | 2 | **bez kategórie** | Spájkovačka Powerplus POWX1388 - AKU hrotová spájkovačka 4V |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Kuchynské váhy` | 2 | `Domáce spotrebiče` | Kuchynská váha Banquet digitálna Culinaria Black 5 kg |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače > Mixéry > Tyčové mixéry` | 2 | `Domáce spotrebiče` | Mixér G21 VitalStick 800 W, Black |
| `Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Čističky vzduchu` | 2 | `Domáce spotrebiče` | Čistička vzduchu OPUS Aeroprime X auto, do 35 m2, HEPA filte |
| `TV, audio a video > Audio technika > Slúchadlá` | 1 | **bez kategórie** | Stojanček FIXED Frame Headphones na stôl pre náhlavné slúcha |
| `Domáce spotrebiče > Malé spotrebiče > Grily, pekárne, variče > Elektrické grily` | 1 | `Domáce spotrebiče` | Gril G21 Hawaii, Elektrický |
| `Fotovoltika` | 1 | **bez kategórie** | Napäťový menič Mean Well DDR-30L-12 Priemyselný, 12V - 18 až |
| `TV, audio a video > Audio technika > Soundbary` | 1 | **bez kategórie** | Soundbar JBL Bar 2.0 All-In-One (MK2) |
| `Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika` | 1 | `Profesionálna audio technika` | Skúšačka UNI-T UT18D vadaska |
| `Elektroinštalačný materiál > Osvetlenie` | 1 | **bez kategórie** | Hracia skrinka Small Foot drevená so svetlom zimná dedina |
| `Šport, hračky a voľný čas > Outdoor > Svietidlá` | 1 | **bez kategórie** | LED svetlo MAARS MR 701D na bicykel, predné |

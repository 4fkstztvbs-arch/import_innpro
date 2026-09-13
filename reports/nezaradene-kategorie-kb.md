# Nezaradené kategórie — kb

Vygenerované automaticky pri poslednom behu importu. Tieto kategórie z feedu sa
nezhodujú so žiadnou existujúcou kategóriou v `data/known-categories.json` (živý strom
Shoptetu) ani s jej blízkym pravopisným variantom — produkty pod nimi sa preto
**NEIMPORTUJÚ**, kým sa niekto nerozhodne, kam patria:
- ak ide o skutočne novú, žiadanú kategóriu → pridať ju do Shoptetu a znova spustiť
  `node scripts/build-known-categories.js <čerstvý export> data/known-categories.json`,
- ak má patriť pod existujúcu kategóriu inak pomenovanú → pridať záznam do
  `categoryRenamesByPath` v `scripts/kb-mapping.json`.

_Žiadne — všetky kategórie z tohto behu sa napárovali na existujúci strom._

## Automaticky napárované na existujúcu kategóriu (blízky pravopisný variant)

| Kategória z feedu | Napárované na | Zhoda | Počet produktov |
|---|---|---|---|
| Počítače, mobily a tablety > PC periférie > Webkamery | Počítače, mobily a tablety > Webkamery | 90% | 3 |
| Počítače, mobily a tablety > Káble pre IT > USB káble | Počítače, mobily a tablety > USB káble | 90% | 3 |
| Domáce spotrebiče > Žehličky > Hodiny a budíky | Domáce spotrebiče > Hodiny a budíky | 90% | 3 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Cestovné adaptéry | Elektro, Smart Home a osvetlenie > Cestovné adaptéry | 88% | 1 |

## Preložené na predka zo starého stromu

Nový strom tieto hlbšie vetvy vedome nemá — zlúčil ich do nadradenej kategórie.
Produkt zostáva v ponuke, len o úroveň vyššie. Ak si niektorá z nich zaslúži
vlastnú kategóriu, pridať ju do stromu a do `data/stary-novy-strom.json`.

| Kategória z feedu | Zaradené do | Počet produktov |
|---|---|---|
| Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily > Puzdrá na mobilné telefóny | Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily | 308 |
| Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily > Tvrdené sklá pre mobilné telefóny | Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily | 134 |
| Počítače, mobily a tablety > Tlačiarne a skenery > Atramenty | Počítače, mobily a tablety | 122 |
| Domáce spotrebiče > Upratovacie pomôcky > Mopy a upratovacie súpravy | Domáce spotrebiče > Upratovacie pomôcky | 88 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Televízory > QLED, NeoQLED televízory | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 80 |
| Domáce spotrebiče > Príslušenstvo k malým spotrebičom > Vrecká do vysávačov | Domáce spotrebiče > Príslušenstvo k malým spotrebičom | 79 |
| Domáce spotrebiče > Príprava nápojov > Rýchlovarné kanvice | Domáce spotrebiče > Príprava nápojov | 78 |
| Počítače, mobily a tablety > Sieťové prvky > WiFi routery | Počítače, mobily a tablety | 69 |
| Domáce spotrebiče > Kávovary a espressá > Kávové kapsle | Domáce spotrebiče > Kávovary a espressá | 68 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Slúchadlá > Bezdrátová | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 65 |
| Domáce spotrebiče > Fritézy a hrnce > Fritézy | Domáce spotrebiče | 60 |
| Domáce spotrebiče > Vysávače > Robotické vysávače | Domáce spotrebiče > Vysávače | 60 |
| Domáce spotrebiče > Chladničky > Kombinované chladničky > Chladničky s mrazákom dole | Domáce spotrebiče > Chladničky | 59 |
| Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily > Nabíjačky pre mobily | Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily | 51 |
| Domáce spotrebiče > Práčky > Práčky zepředu plnené | Domáce spotrebiče > Práčky | 50 |
| Domáce spotrebiče > Žehličky > Sušiaky na bielizeň | Domáce spotrebiče > Žehličky | 49 |
| Domáce spotrebiče > Kávovary a espressá > Káva | Domáce spotrebiče > Kávovary a espressá | 46 |
| Počítače, mobily a tablety > Tlačiarne a skenery > Multifunkčné tlačiarne > Atramentové multifunkčné tlačiarne | Počítače, mobily a tablety | 46 |
| Domáce spotrebiče > Vysávače > Tyčové vysávače | Domáce spotrebiče > Vysávače | 45 |
| Domáce spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače > Mixéry > Stolové mixéry | Domáce spotrebiče > Kuchynské roboty a krájače | 45 |
| Domáce spotrebiče > Vstavané rúry > Vstavané pečúce rúry | Domáce spotrebiče > Vstavané rúry | 40 |
| Počítače, mobily a tablety > Nositeľná elektronika > Smart hodinky | Počítače, mobily a tablety > Nositeľná elektronika | 38 |
| Domáce spotrebiče > Príslušenstvo k malým spotrebičom > Príslušenstvo k vysávačom | Domáce spotrebiče > Príslušenstvo k malým spotrebičom | 36 |
| Domáce spotrebiče > Fritézy a hrnce > Multifunkčné hrnce | Domáce spotrebiče | 34 |
| Domáce spotrebiče > Sušičky | Domáce spotrebiče | 33 |
| Domáce spotrebiče > Príprava nápojov > Filtračné kanvice | Domáce spotrebiče > Príprava nápojov | 32 |
| Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily > Držiaky na mobily | Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily | 32 |
| Domáce spotrebiče > Žehličky > Naparovacie žehličky | Domáce spotrebiče > Žehličky | 32 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED Žiarovky | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 32 |
| Domáce spotrebiče > Hrnce | Domáce spotrebiče | 31 |
| Domáce spotrebiče > Varné dosky > Indukčné varné dosky | Domáce spotrebiče > Varné dosky | 30 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Reproduktory > Bezdrátové reproduktory | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 29 |
| Domáce spotrebiče > Sendvičovače, hriankovače, vaflovače > Hriankovače | Domáce spotrebiče > Sendvičovače, hriankovače, vaflovače | 29 |
| Domáce spotrebiče > Panvice | Domáce spotrebiče | 28 |
| Domáce spotrebiče > Práčky > Príslušenstvo k práčkam a sušičkám | Domáce spotrebiče > Práčky | 28 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Slúchadlá > True Bezdrôtové | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 28 |
| Domáce spotrebiče > Príslušenstvo k malým spotrebičom > Príslušenstvo ku kávovarom | Domáce spotrebiče > Príslušenstvo k malým spotrebičom | 28 |
| Domáce spotrebiče > Príprava nápojov > Príslušenstvo pre filtračné kanvice | Domáce spotrebiče > Príprava nápojov | 27 |
| Domáce spotrebiče > Grily, pekárne, variče > Elektrické grily | Domáce spotrebiče > Grily, pekárne, variče | 26 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio technika > Rádioprijímače | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 24 |
| Domáce spotrebiče > Príslušenstvo k malým spotrebičom > Filtre do vysávačov | Domáce spotrebiče > Príslušenstvo k malým spotrebičom | 24 |
| Počítače, mobily a tablety > Herné zariadenia > Konzolové hry > Nintendo Switch - hry | Počítače, mobily a tablety | 24 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Slúchadlá > Drátová | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 24 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio technika > Soundbary | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 23 |
| Domáce spotrebiče > Vstavané umývačky riadu > Vstavané umývačky 60 cm | Domáce spotrebiče > Vstavané umývačky riadu | 22 |
| Domáce spotrebiče > Chladničky > Monoklimatické chladničky | Domáce spotrebiče > Chladničky | 22 |
| Cestovanie, šport a outdoor > Hračky > Autodráhy | Cestovanie, šport a outdoor > Hračky | 21 |
| Domáce spotrebiče > Kuchynské roboty a krájače > Kuchynské roboty | Domáce spotrebiče > Kuchynské roboty a krájače | 21 |
| Domáce spotrebiče > Vysávače > Podlahové vysávače | Domáce spotrebiče > Vysávače | 21 |
| Domáce spotrebiče > Kávovary a espressá > Moka kanvice a frenchpressy | Domáce spotrebiče > Kávovary a espressá | 20 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Príslušenstvo k TV, audio, video | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 20 |
| Počítače, mobily a tablety > Sieťové prvky > Sieťové karty | Počítače, mobily a tablety | 19 |
| Domáce spotrebiče > Sendvičovače, hriankovače, vaflovače > Sendvičovače | Domáce spotrebiče > Sendvičovače, hriankovače, vaflovače | 19 |
| Domáce spotrebiče > Kuchynské roboty a krájače > Krájače potravín | Domáce spotrebiče > Kuchynské roboty a krájače | 19 |
| Domáce spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače > Šľahače | Domáce spotrebiče > Kuchynské roboty a krájače | 18 |
| Domáce spotrebiče > Vákuovačky a zváračky fólií > Vákuovačky a zváračky | Domáce spotrebiče > Vákuovačky a zváračky fólií | 18 |
| Domáce spotrebiče > Upratovacie pomôcky > Čističe okien | Domáce spotrebiče > Upratovacie pomôcky | 18 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Video technika > Kamery do autá | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 18 |
| Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily > Káble pre mobily | Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily | 18 |
| Domáce spotrebiče > Vákuovačky a zváračky fólií > Príslušenstvo pre vákuovačky a zváračky | Domáce spotrebiče > Vákuovačky a zváračky fólií | 18 |
| Domáce spotrebiče > Grily, pekárne, variče > Elektrické variče | Domáce spotrebiče > Grily, pekárne, variče | 18 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Televízory > UHD(4K) televízory | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 17 |
| Počítače, mobily a tablety > Tlačiarne a skenery > Tonery | Počítače, mobily a tablety | 17 |
| Domáce spotrebiče > Pečúce formy | Domáce spotrebiče | 17 |
| Počítače, mobily a tablety > Sieťové prvky > Switche | Počítače, mobily a tablety | 17 |
| Domáce spotrebiče > Vstavané umývačky riadu > Vstavané umývačky 45 cm | Domáce spotrebiče > Vstavané umývačky riadu | 17 |
| Domáce spotrebiče > Grily, pekárne, variče > Pece na pizzu | Domáce spotrebiče > Grily, pekárne, variče | 16 |
| Počítače, mobily a tablety > Herné zariadenia > Herné ovládače > Gamepady | Počítače, mobily a tablety | 16 |
| Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky > Ostatné kuchynské potreby | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 16 |
| Domáce spotrebiče > Digestory > Výsuvné, výklopné digestory | Domáce spotrebiče > Digestory | 16 |
| Auto-moto > Elektronika do auta > Autorádiá s USB | Auto-moto > Elektronika do auta | 15 |
| Domáce spotrebiče > Žehličky > Naparovače odevov | Domáce spotrebiče > Žehličky | 15 |
| Domáce spotrebiče > Práčky > Práčky s vrchným plnením | Domáce spotrebiče > Práčky | 15 |
| Domáce spotrebiče > Žehličky > Žehliace dosky | Domáce spotrebiče > Žehličky | 15 |
| Domáce spotrebiče > Kávovary a espressá > Automatická espressá | Domáce spotrebiče > Kávovary a espressá | 15 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Televízory > OLED televízory | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 15 |
| Domáce spotrebiče > Varné dosky > Plynové varné dosky | Domáce spotrebiče > Varné dosky | 14 |
| Domáce spotrebiče > Poháre a fľaše | Domáce spotrebiče | 14 |
| Domáce spotrebiče > Umývačky riadu > Umývačky riad 60 cm | Domáce spotrebiče > Umývačky riadu | 14 |
| Domáce spotrebiče > Kávovary a espressá > Kávovary na kapsle | Domáce spotrebiče > Kávovary a espressá | 13 |
| Domáce spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače > Zmrzlinovače a jogurtovače | Domáce spotrebiče > Kuchynské roboty a krájače | 13 |
| Domáce spotrebiče > Fritézy a hrnce > Pomalé hrnce | Domáce spotrebiče | 13 |
| Počítače, mobily a tablety > PC periférie > Myši | Počítače, mobily a tablety > PC periférie | 13 |
| Domáce spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače > Elektrické sekáčiky | Domáce spotrebiče > Kuchynské roboty a krájače | 13 |
| Domáce spotrebiče > Kávovary a espressá > Pákové kávovary | Domáce spotrebiče > Kávovary a espressá | 13 |
| Domáce spotrebiče > Príslušenstvo k malým spotrebičom > Príslušenstvo k žehlenie | Domáce spotrebiče > Príslušenstvo k malým spotrebičom | 13 |
| Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky > Kuchynské nože a nožnice | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 13 |
| Domáce spotrebiče > Sendvičovače, hriankovače, vaflovače > Vaflovače | Domáce spotrebiče > Sendvičovače, hriankovače, vaflovače | 12 |
| Domáce spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače > Mixéry > Tyčové mixéry | Domáce spotrebiče > Kuchynské roboty a krájače | 12 |
| Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily > Príslušenstvo pre smart hodinky | Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily | 12 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio technika > HiFi komponenty > Gramofóny | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 12 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio technika > HiFi komponenty > AV receivery | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 12 |
| Domáce spotrebiče > Vykurovanie a ohrev vody > Ohrievače vody | Domáce spotrebiče > Vykurovanie a ohrev vody | 12 |
| Domáce spotrebiče > Vysávače > Aku vysávače | Domáce spotrebiče > Vysávače | 12 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Digitálny príjem > DVB-T antény | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 12 |
| Počítače, mobily a tablety > PC periférie > Klávesnice | Počítače, mobily a tablety > PC periférie | 12 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Televízory > LED televízory | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 12 |
| Domáce spotrebiče > Mrazničky > Pultové mrazničky | Domáce spotrebiče > Mrazničky | 11 |
| Domáce spotrebiče > Vzduchotechnika > Čističky vzduchu | Domáce spotrebiče | 11 |
| Domáce spotrebiče > Sporáky a rúry > Elektrické sporáky | Domáce spotrebiče > Sporáky a rúry | 11 |
| Domáce spotrebiče > Kávovary a espressá > Prekvapkávače | Domáce spotrebiče > Kávovary a espressá | 11 |
| Domáce spotrebiče > Vzduchotechnika > Vykurovacie telesá > Vykurovacie telesá, radiátory > Teplovzdušné ventilátory | Domáce spotrebiče | 11 |
| Domáce spotrebiče > Digestory > Komínové digestory | Domáce spotrebiče > Digestory | 11 |
| Počítače, mobily a tablety > Tlačiarne a skenery > Atramentové tlačiarne | Počítače, mobily a tablety | 10 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Video technika > Multimediálne centra | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 10 |
| Domáce spotrebiče > Vysávače > Parné mopy a čističe | Domáce spotrebiče > Vysávače | 10 |
| Domáce spotrebiče > Chladničky > Chladiace tašky a boxy | Domáce spotrebiče > Chladničky | 10 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Príslušenstvo k TV, audio, video > Diaľkové ovládače | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 10 |
| Domáce spotrebiče > Fritézy a hrnce > Elektrické panvice | Domáce spotrebiče | 10 |
| Domáce spotrebiče > Príprava nápojov > Odšťavovače | Domáce spotrebiče > Príprava nápojov | 10 |
| Počítače, mobily a tablety > Tlačiarne a skenery > Multifunkčné tlačiarne > Laserové multifunkčné tlačiarne | Počítače, mobily a tablety | 9 |
| Domáce spotrebiče > Príprava nápojov > Výrobníky ľadu | Domáce spotrebiče > Príprava nápojov | 9 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Ostatné žiarovky a žiarivky | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 9 |
| Domáce spotrebiče > Varné dosky > Sklokeramické varné dosky | Domáce spotrebiče > Varné dosky | 9 |
| Domáce spotrebiče > Fritézy a hrnce > Parné hrnce | Domáce spotrebiče | 9 |
| Domáce spotrebiče > Príslušenstvo k malým spotrebičom > Príslušenstvo ku kuchynským robotom | Domáce spotrebiče > Príslušenstvo k malým spotrebičom | 9 |
| Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky > Varešky, Naberačky, Obracačky, Kliešte | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 9 |
| Domáce spotrebiče > Príprava nápojov > Lisy na citrusy | Domáce spotrebiče > Príprava nápojov | 8 |
| Počítače, mobily a tablety > Nositeľná elektronika > Smart prstene | Počítače, mobily a tablety > Nositeľná elektronika | 8 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio technika > Rádiobudíky | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 8 |
| Domáce spotrebiče > Kávovary a espressá > Napěňovače mlieka | Domáce spotrebiče > Kávovary a espressá | 8 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio technika > HiFi komponenty > Zosilňovače | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 8 |
| Počítače, mobily a tablety > Monitory > LCD monitory | Počítače, mobily a tablety > Monitory | 8 |
| Domáce spotrebiče > Príprava nápojov > Výrobníky sódy | Domáce spotrebiče > Príprava nápojov | 8 |
| Počítače, mobily a tablety > Herné zariadenia > Konzolové hry > Nintendo DS, 2DS, 3DS - hry | Počítače, mobily a tablety | 8 |
| Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky > Mlynčeky na korenie | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 7 |
| Domáce spotrebiče > Kávovary a espressá > Mlynčeky na kávu | Domáce spotrebiče > Kávovary a espressá | 7 |
| Domáce spotrebiče > Umývačky riadu > Umývačky riad 45 cm | Domáce spotrebiče > Umývačky riadu | 7 |
| Domáce spotrebiče > Sporáky a rúry > Stolové rúry | Domáce spotrebiče > Sporáky a rúry | 7 |
| Domáce spotrebiče > Kuchynské roboty a krájače > Mlynčeky na mäso | Domáce spotrebiče > Kuchynské roboty a krájače | 7 |
| Domáce spotrebiče > Chladničky > Chladničky s mraziace priehradkou | Domáce spotrebiče > Chladničky | 7 |
| Domáce spotrebiče > Upratovacie pomôcky > Čistiace prostriedky | Domáce spotrebiče > Upratovacie pomôcky | 7 |
| Počítače, mobily a tablety > Tlačiarne a skenery > Príslušenstvo - tlačiarne > Papiere do tlačiarní | Počítače, mobily a tablety | 7 |
| Domáce spotrebiče > Vzduchotechnika > Aroma difuzéry | Domáce spotrebiče | 7 |
| Domáce spotrebiče > Grily, pekárne, variče > Domáce pekárne | Domáce spotrebiče > Grily, pekárne, variče | 7 |
| Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily > Ostatné príslušenstvo pre mobily | Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily | 7 |
| Počítače, mobily a tablety > Tlačiarne a skenery > Laserové tlačiarne | Počítače, mobily a tablety | 7 |
| Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky > Doštičky, Podložky, Krájacie dosky | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 7 |
| Počítače, mobily a tablety > Pamäťové médiá > USB flash disky | Počítače, mobily a tablety > Pamäťové médiá | 7 |
| Domáce spotrebiče > Fritézy a hrnce > Ryžovary | Domáce spotrebiče | 7 |
| Domáce spotrebiče > Chladničky > Kombinované chladničky > Chladničky s mrazákom nahoře | Domáce spotrebiče > Chladničky | 7 |
| Domáce spotrebiče > Vzduchotechnika > Odvlhčovače vzduchu | Domáce spotrebiče | 6 |
| Domáce spotrebiče > Vzduchotechnika > Vykurovacie telesá > Vykurovacie telesá, radiátory > Konvektory | Domáce spotrebiče | 6 |
| Domáce spotrebiče > Vysávače > Viacúčelové vysávače | Domáce spotrebiče > Vysávače | 6 |
| Zdravie a starostlivosť > Elektrické deky | Zdravie a starostlivosť | 6 |
| Domáce spotrebiče > Na párty a oslavy | Domáce spotrebiče | 6 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Reproduktory > Drátové reproduktory | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 6 |
| Domáce spotrebiče > Mrazničky > Zásuvkové mrazničky | Domáce spotrebiče > Mrazničky | 6 |
| Auto-moto > Elektronika do auta > Reproduktory do autá | Auto-moto > Elektronika do auta | 6 |
| Domáce spotrebiče > Žehličky > Parné generátory | Domáce spotrebiče > Žehličky | 6 |
| Domáce spotrebiče > Chladničky > Americké chladničky | Domáce spotrebiče > Chladničky | 5 |
| Domáce spotrebiče > Fritézy a hrnce > Zaváracie hrnce | Domáce spotrebiče | 5 |
| Domáce spotrebiče > Digestory > Závesné digestory | Domáce spotrebiče > Digestory | 5 |
| Domáce spotrebiče > Dózy na potraviny | Domáce spotrebiče | 5 |
| Domáce spotrebiče > Sporáky a rúry > Príslušenstvo ku sporákom a rúram | Domáce spotrebiče > Sporáky a rúry | 5 |
| Domáce spotrebiče > Chladničky > Príslušenstvo k chladničkám | Domáce spotrebiče > Chladničky | 5 |
| Počítače, mobily a tablety > Príslušenstvo k notebookom > Tašky k notebookom | Počítače, mobily a tablety > Príslušenstvo k notebookom | 5 |
| Počítače, mobily a tablety > Monitory > Plátna a projektory > Projektory | Počítače, mobily a tablety > Monitory | 5 |
| Počítače, mobily a tablety > PC periférie > Podložky pod myš | Počítače, mobily a tablety > PC periférie | 5 |
| Počítače, mobily a tablety > Herné zariadenia > Príslušenstvo ku konzolám > PS5 - príslušenstvo | Počítače, mobily a tablety | 5 |
| Počítače, mobily a tablety > Herné zariadenia > Herné ovládače | Počítače, mobily a tablety | 5 |
| Počítače, mobily a tablety > Tlačiarne a skenery > Fototlačiarne | Počítače, mobily a tablety | 4 |
| Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily > Ochranné fólie pre mobilné telefóny | Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily | 4 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Reproduktory > Subwoofery | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 4 |
| Počítače, mobily a tablety > Príslušenstvo k notebookom > Ostatné príslušenstvo k notebookom | Počítače, mobily a tablety > Príslušenstvo k notebookom | 4 |
| Zdravie a starostlivosť > Starostlivosť o zdravie > Vložky do bot | Zdravie a starostlivosť > Starostlivosť o zdravie | 4 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Reproduktory > Párty reproduktory | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 4 |
| Domáce spotrebiče > Vstavané chladenie > Vstavané kombinované chladničky | Domáce spotrebiče > Vstavané chladenie | 4 |
| Počítače, mobily a tablety > Sieťové prvky > 3G/LTE modemy | Počítače, mobily a tablety | 4 |
| Počítače, mobily a tablety > Herné zariadenia > Herné príslušenstvo | Počítače, mobily a tablety | 4 |
| Cestovanie, šport a outdoor > Hračky > Stavebnice > Ostatné stavebnice | Cestovanie, šport a outdoor > Hračky | 4 |
| Počítače, mobily a tablety > Nositeľná elektronika > Lokátory | Počítače, mobily a tablety > Nositeľná elektronika | 4 |
| Zdravie a starostlivosť > Holiace strojčeky > Dámske holiace strojčeky a depilátory | Zdravie a starostlivosť > Holiace strojčeky a epilátory | 4 |
| Domáce spotrebiče > Upratovacie pomôcky > Košťata a metly | Domáce spotrebiče > Upratovacie pomôcky | 4 |
| Počítače, mobily a tablety > Herné zariadenia > Herné konzoly > PlayStation 5 - konzoly | Počítače, mobily a tablety | 4 |
| Počítače, mobily a tablety > Tlačiarne a skenery | Počítače, mobily a tablety | 4 |
| Auto-moto > Elektronika do auta > Autorádiá s CD | Auto-moto > Elektronika do auta | 4 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Ručné náradie > Sady náradie | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 4 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Slúchadlá > Príslušenstvo pre slúchadlá | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 4 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Aku náradie > AKU Svetlá a svietidlá | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 4 |
| Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily > HandsFree | Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily | 4 |
| Zdravie a starostlivosť > Starostlivosť o dieťa > Ostatné detské tovar | Zdravie a starostlivosť > Monitorovanie dieťaťa | 4 |
| Zdravie a starostlivosť > Holiace strojčeky > Pánske holiace strojčeky | Zdravie a starostlivosť > Holiace strojčeky a epilátory | 3 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Elektrické náradie > Frézy a frézky > Príslušenstvo | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 3 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Príslušenstvo pre stroje a náradie | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 3 |
| Cestovanie, šport a outdoor > Hračky > Autá, letadla, lode | Cestovanie, šport a outdoor > Hračky | 3 |
| Auto-moto > Elektrokolobežky | Auto-moto | 3 |
| Domáce spotrebiče > Hrnčeky a šálky | Domáce spotrebiče | 3 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Elektrické náradie > Tavné a horúcovzdušné pištole | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 3 |
| Domáce spotrebiče > Vstavané chladenie > Vstavané chladničky s mraziace priehradkou | Domáce spotrebiče > Vstavané chladenie | 3 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Smart žiarovky | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 3 |
| Domáce spotrebiče > Vzduchotechnika > Zvlhčovače vzduchu | Domáce spotrebiče | 3 |
| Zdravie a starostlivosť > Starostlivosť o vlasy > Hrebene na vlasy | Zdravie a starostlivosť > Starostlivosť o vlasy | 3 |
| Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky > Lisy na potraviny | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 3 |
| Domáce spotrebiče > Fritézy a hrnce > Sous-Vide | Domáce spotrebiče | 3 |
| Zdravie a starostlivosť > Starostlivosť o zdravie > Ostatné starostlivosť o zdravie | Zdravie a starostlivosť > Starostlivosť o zdravie | 3 |
| Počítače, mobily a tablety > Sieťové prvky > Extendery | Počítače, mobily a tablety | 3 |
| Domáce spotrebiče > Príprava nápojov > Sirupy a fľaše pre výrobníky sódy | Domáce spotrebiče > Príprava nápojov | 3 |
| Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky > Kuchynské minútky | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 3 |
| Počítače, mobily a tablety > Sieťové prvky > IP kamery | Počítače, mobily a tablety | 3 |
| Zdravie a starostlivosť > Čistenie pleti | Zdravie a starostlivosť | 3 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Smart zabezpečenie > Kamery | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 3 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Svietidlá > Vnútorné osvetlenie > Stropné a nástenná svietidlá | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 3 |
| Počítače, mobily a tablety > Príslušenstvo k tabletom > Ostatné k tabletu | Počítače, mobily a tablety | 3 |
| Zdravie a starostlivosť > Starostlivosť o dieťa > Detské opatrovateľky (chůvičky) | Zdravie a starostlivosť > Monitorovanie dieťaťa | 3 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Elektrické náradie > Spájky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 3 |
| Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily > Sim karty a kupóny | Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily | 3 |
| Cestovanie, šport a outdoor > Hračky > Elektronické hračky | Cestovanie, šport a outdoor > Hračky | 3 |
| Cestovanie, šport a outdoor > Hračky > Hračky pre kluky > Detské zbrane | Cestovanie, šport a outdoor > Hračky | 3 |
| Dielňa, náradie a záhrada > Zavlažovanie > Čerpadlá | Dielňa, náradie a záhrada | 3 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Video technika > Outdoor kamery | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 3 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Príslušenstvo k TV, audio, video > Batérie a nabíjačky > Ceruzkové AA | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 3 |
| Domáce spotrebiče > Termosky a termohrnčeky | Domáce spotrebiče | 3 |
| Domáce spotrebiče > Žehličky > Žehličky na suché žehlenie | Domáce spotrebiče > Žehličky | 3 |
| Počítače, mobily a tablety > Herné zariadenia > Herné ovládače > Volanty | Počítače, mobily a tablety | 3 |
| Počítače, mobily a tablety > Kalkulačky | Počítače, mobily a tablety | 3 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Smart zabezpečenie > Smart senzory | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 2 |
| Domáce spotrebiče > Príprava nápojov > Čajová sitká | Domáce spotrebiče > Príprava nápojov | 2 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Digitálny príjem > Satelitné prijímače | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 2 |
| Počítače, mobily a tablety > Skartovačky a laminovačky | Počítače, mobily a tablety | 2 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Ručné náradie > Gola sady, račne a hlavice | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 2 |
| Počítače, mobily a tablety > Pamäťové médiá > Dátové nosiče | Počítače, mobily a tablety > Pamäťové médiá | 2 |
| Domáce spotrebiče > Fritézy a hrnce > Polievkovary | Domáce spotrebiče | 2 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Svietidlá | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 2 |
| Domáce spotrebiče > Grily, pekárne, variče > Lávové a raclettové grily | Domáce spotrebiče > Grily, pekárne, variče | 2 |
| Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky > Kuchynské teplomery | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 2 |
| Domáce spotrebiče > Vzduchotechnika > Vykurovacie telesá > Vykurovacie telesá, radiátory > Olejové radiátory | Domáce spotrebiče | 2 |
| Domáce spotrebiče > Sporáky a rúry > Kombinované sporáky | Domáce spotrebiče > Sporáky a rúry | 2 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Ručné náradie > Nože, nožnice, skalpely, rezačky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 2 |
| Domáce spotrebiče > Žehličky > Cestovné žehličky | Domáce spotrebiče > Žehličky | 2 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre Sponkovačky, nastreľovačky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 2 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio - video káble > HDMI káble | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 2 |
| Domáce spotrebiče > Digestory > Filtre do digestorov | Domáce spotrebiče > Digestory | 2 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Digitálny príjem > DVB-T prijímače | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 2 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Svietidlá > Vnútorné osvetlenie > SMART osvetlenie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 2 |
| Počítače, mobily a tablety > PC periférie > USB huby | Počítače, mobily a tablety > PC periférie | 2 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio technika > Radiomagnetofóny | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 2 |
| Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky > Vývrtky a otvárače | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 2 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Príslušenstvo k TV, audio, video > TV držiaky | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 2 |
| Počítače, mobily a tablety > Herné zariadenia > Konzolové hry > PS5 - hry | Počítače, mobily a tablety | 2 |
| Počítače, mobily a tablety > Herné zariadenia > Príslušenstvo ku konzolám > Nintendo Switch - príslušenstvo | Počítače, mobily a tablety | 2 |
| Počítače, mobily a tablety > Stolové počítače | Počítače, mobily a tablety | 2 |
| Zdravie a starostlivosť > Starostlivosť o zdravie > Teplomery | Zdravie a starostlivosť > Starostlivosť o zdravie | 2 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Zásuvky | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 2 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Príslušenstvo pre stroje a náradie > Kufre, tašky a montážne boxy | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 2 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio technika > HiFi systémy > Mikrosystémy | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 2 |
| Počítače, mobily a tablety > Herné zariadenia > Herné konzoly > Nintendo - konzoly | Počítače, mobily a tablety | 2 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Stavebné materiál, chémia a technika > Elektroinštalačný materiál > Predlžovacie káble | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 2 |
| Domáce spotrebiče > Potreby pre domácnosť > Elektrické nože | Domáce spotrebiče | 2 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Stavebné materiál, chémia a technika | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 2 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Ručné náradie > Bity + sety sa skrutkovačom alebo račňou | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 2 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Elektrické náradie > Autonabíjačky a štartovacie zdroje | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 2 |
| Zdravie a starostlivosť > Masážne prístroje > Masážne prístroje na celé telo | Zdravie a starostlivosť | 2 |
| Počítače, mobily a tablety > Príslušenstvo k tabletom > Puzdrá pre tablety | Počítače, mobily a tablety | 2 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Lampy a lampičky | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 2 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre Brúsky > 02 Brúsne a rezacie kotúče | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 2 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio technika > HiFi komponenty > CD prehrávače | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 2 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Reproduktory > Reprosoustavy | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 2 |
| Zdravie a starostlivosť > Masážne prístroje > Masážne prístroje na chrbát a šiji | Zdravie a starostlivosť | 2 |
| Domáce spotrebiče > Príslušenstvo k malým spotrebičom > Príslušenstvo ku vzduchotechnike | Domáce spotrebiče > Príslušenstvo k malým spotrebičom | 2 |
| Domáce spotrebiče > Príslušenstvo k malým spotrebičom > Vône do vysávače | Domáce spotrebiče > Príslušenstvo k malým spotrebičom | 2 |
| Počítače, mobily a tablety > PC periférie > Vypaľovačky a externé mechaniky | Počítače, mobily a tablety > PC periférie | 2 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Stavebné materiál, chémia a technika > Elektroinštalačný materiál > Svorkovnice a Wago svorky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 2 |
| Počítače, mobily a tablety > Herné zariadenia > Príslušenstvo ku konzolám > Nintendo DS, 2DS, 3DS - príslušenstvo | Počítače, mobily a tablety | 2 |
| Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky > Škrabky a strúhadlá | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 2 |
| Domáce spotrebiče > Misy a misky | Domáce spotrebiče | 2 |
| Domáce spotrebiče > Vzduchotechnika > Vykurovacie telesá > Vykurovacie telesá, radiátory | Domáce spotrebiče | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Elektrické náradie > Zváračky a rezačky > Elektrodové | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| Zdravie a starostlivosť > Masážne prístroje > Masážne pištole | Zdravie a starostlivosť | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre Brúsky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| Počítače, mobily a tablety > Tlačiarne a skenery > Príslušenstvo - tlačiarne | Počítače, mobily a tablety | 1 |
| Zdravie a starostlivosť > Parfumy a kozmetika > Pánske parfumy > Pánske balzámy po holenie | Zdravie a starostlivosť | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo Vŕtačky, skrutkovače, uťahováky > 005 Vykružovače a vŕtacie korunky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| Domáce spotrebiče > Fritézy a hrnce > Variče vajec | Domáce spotrebiče | 1 |
| Domáce spotrebiče > Žehličky > Šijacie stroje a príslušenstvo > Šijacie stroje | Domáce spotrebiče > Žehličky | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Elektrické náradie > Brúsky > Oscilačné | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| Počítače, mobily a tablety > Tlačiarne a skenery > Pokladničné tlačiarne | Počítače, mobily a tablety | 1 |
| Zdravie a starostlivosť > Starostlivosť o zdravie > Tlakomery, tonometre | Zdravie a starostlivosť > Starostlivosť o zdravie | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Elektrické náradie > Brúsky > Kotúčové | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| Počítače, mobily a tablety > Pamäte RAM | Počítače, mobily a tablety | 1 |
| Domáce spotrebiče > Umývačky riadu > Príslušenstvo k umývačke | Domáce spotrebiče > Umývačky riadu | 1 |
| Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky > Obrusy a prestieranie | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 1 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Video technika > Prehrávače, rekordéry > DVD prehrávače > Stolové DVD prehrávače | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 1 |
| Domáce spotrebiče > Pokrievky | Domáce spotrebiče | 1 |
| Zdravie a starostlivosť > Starostlivosť o zdravie > Inhalátory | Zdravie a starostlivosť > Starostlivosť o zdravie | 1 |
| Počítače, mobily a tablety > Herné zariadenia > Konzolové hry > Xbox One - hry | Počítače, mobily a tablety | 1 |
| Dielňa, náradie a záhrada > Záhradné náradie > Záhradné nožnice | Dielňa, náradie a záhrada | 1 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Svietidlá > Vnútorné osvetlenie > Ostatné svietidlá | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 1 |
| Domáce spotrebiče > Potreby pre domácnosť > Meteostanice, teplomery, vlhkomery | Domáce spotrebiče | 1 |
| Zdravie a starostlivosť > Stop koronavírusu | Zdravie a starostlivosť | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Pneumatické a hydraulické náradie > Vzduchové hadice, Regulátory a spojk | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| Cestovanie, šport a outdoor > Boty | Cestovanie, šport a outdoor | 1 |
| Dielňa, náradie a záhrada > Záhradné náradie > Krompáče, motyky, kultivátory | Dielňa, náradie a záhrada | 1 |
| Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky > Chlebníky, Košíky, Košíky (ošatky) | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 1 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio technika > HiFi komponenty > Príslušenstvo k HiFi | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 1 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Digitálny príjem > DVB-T, satelity - príslušenstvo | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre Rezačky obkladov | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| Chovateľské potreby > Pre psov | Chovateľské potreby | 1 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Príslušenstvo pre fotoaparáty a akčné kamery > Batérie k fotoaparátom > Batérie pre fotoaparáty Nikon | TV, audio, video a foto technika > Foto a príslušenstvo > Príslušenstvo pre fotoaparáty a akčné kamery | 1 |
| Domáce spotrebiče > Vzduchotechnika > Vykurovacie telesá > Elektrická krbová kachle | Domáce spotrebiče | 1 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio technika > HiFi komponenty | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Ručné náradie > Vŕtačky, kolovrátky a nebozezy | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Ručné náradie | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| Domáce spotrebiče > Príslušenstvo k malým spotrebičom > Príslušenstvo ku grilom | Domáce spotrebiče > Príslušenstvo k malým spotrebičom | 1 |
| Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky > Valčeky na cesto | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 1 |
| Dielňa, náradie a záhrada > Záhradné náradie > Rýle a rycie vidle | Dielňa, náradie a záhrada | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre Píly > 03 Pílové listy a pásy | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio technika > HiFi komponenty > Tunery a sieťové prehrávače | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 1 |
| Počítače, mobily a tablety > Domáce telefóny > Drátové telefóny | Počítače, mobily a tablety | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Pneumatické a hydraulické náradie > Rázové uťahováky skrutkovače kladivá | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Upratovanie, čistenie a umývanie > Čističe | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio - video káble > CINCH RCA káble | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 1 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio technika > HiFi systémy > Minisystémy | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 1 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Príslušenstvo pre fotoaparáty a akčné kamery > Ostatné príslušenstvo k fotoaparátom | TV, audio, video a foto technika > Foto a príslušenstvo > Príslušenstvo pre fotoaparáty a akčné kamery | 1 |
| Domáce spotrebiče > Digestory > Ostrovčekové digestory | Domáce spotrebiče > Digestory | 1 |
| Zdravie a starostlivosť > Elektrické manikúry a pedikúry | Zdravie a starostlivosť | 1 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Svietidlá > Vnútorné osvetlenie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 1 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Príslušenstvo k TV, audio, video > Batérie a nabíjačky > Mikrotužkové AAA | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre Čerpadlá a Miešadlá | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| Domáce spotrebiče > Umývačky riadu > Stolové umývačky riad | Domáce spotrebiče > Umývačky riadu | 1 |
| Domáce spotrebiče > Pekáče a zapekacie misy | Domáce spotrebiče | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Elektrické náradie > Bourací a vŕtacie kladivá | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Ručné náradie > Kľúče > Stranové a očká | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Elektrické náradie > Brúsky > Vibračné | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > AKU batérie a nabíjačky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Stavebné materiál, chémia a technika > Elektroinštalačný materiál > Ističe, inštalačné krabice, rozvádzače | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Svietidlá > Vnútorné osvetlenie > Stojace a stolové lampy | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 1 |
| Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky > Otvárače na konzervy | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 1 |
| Počítače, mobily a tablety > Sieťové prvky > Powerline | Počítače, mobily a tablety | 1 |
| Domáce spotrebiče > Vzduchotechnika > Vykurovacie telesá | Domáce spotrebiče | 1 |
| Domáce spotrebiče > Vzduchotechnika > Ventilátory > Stolové ventilátory | Domáce spotrebiče | 1 |
| Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky > Cedníky, Lieviky, Sitá | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 1 |
| Domáce spotrebiče > Príprava nápojov > Čaje | Domáce spotrebiče > Príprava nápojov | 1 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Svietidlá > Vnútorné osvetlenie > Dekoratívne osvetlenie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 1 |
| Počítače, mobily a tablety > Príslušenstvo k tabletom | Počítače, mobily a tablety | 1 |
| Domáce spotrebiče > Ostatné vstavané spotrebiče | Domáce spotrebiče | 1 |
| Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky > Brousky na nože | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 1 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio technika > Radiomagnetofóny > Radiomagnetofóny s CD | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Ručné náradie > Zveráky a svorky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Pneumatické a hydraulické náradie > Nastreľovačky a Nitovačky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | 1 |
| Domáce spotrebiče > Varné dosky > Elektrické varné dosky | Domáce spotrebiče > Varné dosky | 1 |
| Domáce spotrebiče > Digestory > Príslušenstvo k digestorom | Domáce spotrebiče > Digestory | 1 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Discmany | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 1 |
| Zdravie a starostlivosť > Masážne prístroje > Masážne podložky | Zdravie a starostlivosť | 1 |
| Auto-moto > Elektronika do auta > Príslušenstvo do autá | Auto-moto > Elektronika do auta | 1 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Smart zabezpečenie > Detektor pohybu | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 1 |
| Domáce spotrebiče > Vstavané chladenie > Vstavané monoklimatické chladničky | Domáce spotrebiče > Vstavané chladenie | 1 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Svietidlá | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 1 |
| Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky > Handry, Houby, Kefy | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 1 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio - video káble > Redukcie | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 1 |
| Domáce spotrebiče > Vstavané práčky a sušičky | Domáce spotrebiče | 1 |
| Auto-moto > Elektronika do auta > Autorádiá s DVD | Auto-moto > Elektronika do auta | 1 |
| Zdravie a starostlivosť > Parfumy a kozmetika > Vlasová kozmetika > Balzámy a kondicionéry | Zdravie a starostlivosť | 1 |
| Domáce spotrebiče > Zdobičky, Vykrajovačky | Domáce spotrebiče | 1 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio technika > Mikrofóny | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 1 |

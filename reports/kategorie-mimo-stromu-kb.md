# Kategórie mimo stromu — kb

Kontrola z 2026-09-13 21:01 UTC.

Tieto kategórie feed zapisoval, ale v strome neexistujú. Shoptet by ich pri
importe vytvoril, preto boli **skrátené na najhlbšieho existujúceho predka** (produkty
zostali v ponuke, len o úroveň vyššie).

Zaradenie treba doriešiť: buď opraviť `categoryRenamesByPath` daného dodávateľa, alebo
kategóriu vedome pridať do Shoptetu a obnoviť `data/known-categories.json` cez
`node scripts/build-known-categories.js`.

| Kategória mimo stromu | Produktov | Zaradené namiesto toho do | Príklad produktu |
|---|---|---|---|
| `Počítače, mobily a tablety > Tlačiarne a skenery` | 224 | `Počítače, mobily a tablety` | KMP E199X (502XL Y) |
| `Domáce spotrebiče > Fritézy a hrnce` | 144 | `Domáce spotrebiče` | Salente Airfit-Bk |
| `TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Televízory` | 124 | `TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike` | Samsung Crystal UHD UE75U8072H |
| `TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Slúchadlá` | 119 | `TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike` | SONY WFC710N Black |
| `Počítače, mobily a tablety > Sieťové prvky` | 116 | `Počítače, mobily a tablety` | TP-LINK Archer T3U Plus WiFi Adaptér |
| `Domáce spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače` | 100 | `Domáce spotrebiče > Kuchynské roboty a krájače` | Zelmer ZHM2459S |
| `TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio technika` | 99 | `TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike` | Maxxo rádio DAB+ internet rádio - DT06 |
| `Počítače, mobily a tablety > Herné zariadenia` | 70 | `Počítače, mobily a tablety` | PS5 DualSense Wireless Volcanic Red |
| `Domáce spotrebiče > Chladničky > Kombinované chladničky` | 66 | `Domáce spotrebiče > Chladničky` | Gorenje NRK6182PS4 |
| `Domáce spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače > Mixéry` | 56 | `Domáce spotrebiče > Kuchynské roboty a krájače` | Nutribullet Turbo NBT1006MW |
| `Počítače, mobily a tablety > Tlačiarne a skenery > Multifunkčné tlačiarne` | 55 | `Počítače, mobily a tablety` | BROTHER DCP-L2600D |
| `Domáce spotrebiče > Vzduchotechnika` | 50 | `Domáce spotrebiče` | Bravo B-4673 Koupelnový infrazářič |
| `TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Reproduktory` | 40 | `TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike` | Sony SRS-LS1 LinkBuds speaker, šedý |
| `TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Audio technika > HiFi komponenty` | 36 | `TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike` | Roadstar HIF-1993BT Retro věž |
| `Počítače, mobily a tablety > Herné zariadenia > Konzolové hry` | 35 | `Počítače, mobily a tablety` | The Legend of Zelda: Tears of the Kingd. |
| `TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Video technika` | 26 | `TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike` | Lamax C11 GPS 4K |
| `Domáce spotrebiče > Vzduchotechnika > Vykurovacie telesá` | 21 | `Domáce spotrebiče` | Bravo B-4673 Koupelnový infrazářič |
| `Domáce spotrebiče > Vzduchotechnika > Vykurovacie telesá > Vykurovacie telesá, radiátory` | 19 | `Domáce spotrebiče` | Black&Decker BXCSH2000E |
| `TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Digitálny príjem` | 17 | `TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike` | Kaon MZ-104, 4K satelitní přijímač |
| `Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Elektrické náradie` | 16 | `Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia` | Güde 20001 Elektrodová svářečka GE145W/A |
| `TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Príslušenstvo k TV, audio, video` | 14 | `TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike` | Superior RC UNI TV SONY |
| `Počítače, mobily a tablety > Herné zariadenia > Herné ovládače` | 13 | `Počítače, mobily a tablety` | PS5 DualSense Wireless Volcanic Red |
| `Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Príslušenstvo pre stroje a náradie` | 12 | `Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia` | EXTOL 8703081 kotouč dia. řez. na BETON |
| `Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Ručné náradie` | 12 | `Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia` | Britool E031505 3/8" 6hranná hlavice 10 |
| `Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie` | 10 | `Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia` | EXTOL 8703081 kotouč dia. řez. na BETON |
| `Počítače, mobily a tablety > Herné zariadenia > Príslušenstvo ku konzolám` | 9 | `Počítače, mobily a tablety` | Fixed VR Protective Case FIXMQ-PC-GR |
| `Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Svietidlá` | 9 | `Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá` | Xiaomi Mi Smart LED Desk Lamp Pro |
| `Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Svietidlá > Vnútorné osvetlenie` | 8 | `Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá` | Xiaomi Mi Smart LED Desk Lamp Pro |

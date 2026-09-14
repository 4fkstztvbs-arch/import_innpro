# Návrh prehĺbenia stromu — kde sa oplatí 4. a 5. úroveň

Podklad: pravidlá v `data/kategorie/*.json` prehraté cez skutočné zdrojové cesty dodávateľov
(`data/zdrojove-kategorie/`), počty preškálované na dnešnú veľkosť feedov. Čísla sú odhad
po prebehnutí všetkých dodávateľov, nie dnešný stav e-shopu.

Návrh nevymýšľa delenie — berie to, ktoré dodávateľ **už posiela a my ho dnes zahadzujeme**
(pravidlo nahrádza celú cestu, chvost padá pod stôl). Preto je každý návrh realizovateľný
jedným pravidlom navyše, bez ručného triedenia tovaru.

Prah: `collapse-thin-categories.js` zloží späť do rodiča každú kategóriu s menej než 8 produktmi,
takže sa počíta len s uzlami, ktoré ten prah prejdú.

## Kandidáti na prehĺbenie o jednu úroveň — 55 kategórií

| Kategória | Úroveň | Odhad produktov | Pokryté návrhom | Navrhované deti |
|---|---|---:|---:|---|
| TV, audio, video a foto technika > Foto a príslušenstvo > Príslušenstvo pre fotoaparáty a akčné kamery | L3 → L4 | 362 | 361 | Pre športové kamery (201), Pre fotoaparáty a videokamery (102), Ostatné (36), Pre stabilizátory (22) |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | L2 → L3 | 617 | 273 | Vianočné LED dekorácie (78), Vianočné reťaze (56), Vánoční dekorace (44), Nabíjacie (23), LED svítidla (21), Reflektory so stojanom (12), Reflektory bez senzora (11), Čelové (11) |
| Domáce spotrebiče > Vysávače | L2 → L3 | 279 | 272 | Náhradné diely (67), Robotické vysavače (61), Tyčové vysavače (45), Robotické vysávače (37), Podlahové vysavače (21), Tyčové vysávače (19), Aku vysavače (12), Parní mopy a čističe (10) |
| Cestovanie, šport a outdoor > Príslušenstvo pre drony | L2 → L3 | 218 | 212 | Filtre pre drony (94), DJI (77), Tašky a kufre (41) |
| Počítače, mobily a tablety > Tlačiarne, skenery a spotrebný materiál | L2 → L3 | 226 | 211 | Inkousty (121), Multifunkční tiskárny (55), Tonery (17), Inkoustové tiskárny (10), Příslušenství - tiskárny (8) |
| Zdravie a starostlivosť > Starostlivosť o vlasy | L2 → L3 | 228 | 209 | Fény na vlasy (66), Kulmy na vlasy (58), Zastřihovače (40), Žehličky na vlasy, krepovací kleště (34), Fény (11) |
| Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál | L2 → L3 | 208 | 202 | 230V (126), Klasické (42), Ostatné (22), Izolačný materiál (12) |
| Domáce spotrebiče > Kávovary a espressá | L2 → L3 | 222 | 194 | Kávové kapsle (68), Káva (46), Moka konvice a frenchpressy (20), Automatická espressa (15), Kávovary na kapsle (13), Pákové kávovary (13), Překapávače (11), Napěňovače mléka (8) |
| Domáce spotrebiče > Príslušenstvo k malým spotrebičom | L2 → L3 | 228 | 188 | Sáčky do vysavačů (78), Příslušenství k vysavačům (36), Příslušenství ke kávovarům (28), Filtry do vysavačů (24), Příslušenství k žehlení (13), Příslušenství ke kuchyňským robotům (9) |
| TV, audio, video a foto technika > Foto a príslušenstvo > Statívy, držiaky a upevnenie pre kamery | L3 → L4 | 183 | 184 | statívy (153), Selfie Stiki (31) |
| Domáce spotrebiče > Príprava nápojov | L2 → L3 | 180 | 171 | Rychlovarné konvice (77), Filtrační konvice (32), Příslušenství pro filtrační konvice (27), Odšťavňovače (10), Výrobníky ledu (9), Lisy na citrusy (8), Výrobníky sody (8) |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | L2 → L3 | 264 | 169 | Senzory (78), Smart zástrčky (35), Smart kúrenie (34), Smart zámky (22) |
| Elektro, Smart Home a osvetlenie > Smart riadiace jednotky a huby | L2 → L3 | 171 | 166 | Smart ovládače (88), Prepínače (58), Smart centrály (20) |
| Cestovanie, šport a outdoor > Turistika a outdoor | L2 → L3 | 232 | 166 | Svietidlá (65), Kempovanie (34), Rybárčenie (26), Osvetlenie (16), Turistické vybavení (13), Čelové svítilny (12) |
| Auto-moto > Garáž, dielňa, servis > Špeciálne náradie a prípravky | L3 → L4 | 266 | 159 | Motor (101), Podvozek (58) |
| Chovateľské potreby | L1 → L2 | 203 | 155 | Dávkovače krmiva (29), Starostlivosť o zvieratá (26), Ostatné príslušenstvo (23), Príslušenstvo pre mačacie toalety (21), Venčenie a transport (20), Fontány (16), Inteligentné toalety pre zvieratá (12), Hračky (8) |
| Dielňa, náradie a záhrada > Elektronické súčiastky | L2 → L3 | 233 | 151 | Arduino a moduly (106), Pojistky, pojistkové držáky (45) |
| TV, audio, video a foto technika > Antény a satelity > Stožiare, konzoly a uzemnenie | L3 → L4 | 229 | 146 | Držáky stožárů (40), Spojovací a kotevní materiál, chemie (32), Stožáry a trojnožky (22), Konzoly na stěnu (20), Konzoly se třmenem (16), Uzemnění, hromosvody (16) |
| Domáce spotrebiče > Kuchynské roboty a krájače | L2 → L3 | 153 | 141 | Mixéry a šlehače (101), Kuchyňské roboty (21), Kráječe potravin (19) |
| TV, audio, video a foto technika > Foto a príslušenstvo > Fotoateliér | L3 → L4 | 142 | 136 | Svietidlá (89), Softboxy (17), Stany bez tieňa (12), Fotografické pozadia (9), Kruhové svetlá (9) |
| TV, audio, video a foto technika > Audio technika > Slúchadlá > Bezdrôtové slúchadlá | L4 → L5 | 227 | 134 | TWS slúchadlá (73), Náhlavné slúchadlá (51), Šport (10) |
| Zdravie a starostlivosť > Starostlivosť o zuby | L2 → L3 | 132 | 133 | Příslušenství k zubním kartáčkům (66), Elektrické zubní kartáčky (48), Ústní sprchy (10), Zubní kartáčky (9) |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie | L3 → L4 | 160 | 133 | Interiérové osvetlenie (55), Vonkajšie osvetlenie (43), Technické osvetlenie (15), Kuchynské osvetlenie (10), Nočné a dekoratívne svetielka (10) |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie a rozbočovacie svorky | L3 → L4 | 195 | 124 | Univerzální svorky (58), Rozbočovací svorky (40), Přístrojové propojovací svorky (14), Stoupací svorky (12) |
| TV, audio, video a foto technika > Televízory | L2 → L3 | 140 | 123 | QLED, NeoQLED televize (79), UHD(4K) televize (17), OLED televize (15), LED televize (12) |
| Cestovanie, šport a outdoor > Posilňovanie a fitness | L2 → L3 | 235 | 116 | Pomůcky na cvičení (106), Příslušenství pro posilování (10) |
| Domáce spotrebiče > Žehličky | L2 → L3 | 124 | 111 | Sušáky na prádlo (49), Napařovací žehličky (32), Žehlicí prkna (15), Napařovače oděvů (15) |
| Počítače, mobily a tablety > WiFi routery a sieťové karty | L2 → L3 | 126 | 105 | WiFi routery (69), Síťové karty (19), Switche (17) |
| Domáce spotrebiče > Upratovacie pomôcky | L2 → L3 | 127 | 105 | Mopy a úklidové soupravy (87), Čističe oken (18) |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Herné simulátory | L3 → L4 | 99 | 99 | Simulácia pretekov (76), Simulácia letu (23) |
| TV, audio, video a foto technika > Audio technika > HiFi a domáce reproduktory | L3 → L4 | 121 | 98 | Počítačové reproduktory (29), Bezdrátové reproduktory (29), Prenosné Bluetooth reproduktory (17), Aktívne reproduktory (14), Sady reproduktorov (9) |
| Domáce spotrebiče > Chladničky | L2 → L3 | 114 | 98 | Kombinované ledničky (66), Monoklimatické ledničky (22), Chladící tašky a boxy (10) |
| Domáce spotrebiče > Práčky | L2 → L3 | 92 | 93 | Pračky zepředu plněné (50), Příslušenství k pračkám a sušičkám (28), Pračky s vrchním plněním (15) |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Počítačové skrine | L3 → L4 | 90 | 90 | S ventilátorom (49), Bez ventilátora (41) |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED žiarovky | L3 → L4 | 150 | 90 | E27 (28), E27 závit (24), E14 (17), E14 závit (13), GU10 (8) |
| TV, audio, video a foto technika > Foto a príslušenstvo > Filtre | L3 → L4 | 87 | 81 | Pre športové kamery (67), Pre zrkadlovky (14) |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | L2 → L3 | 177 | 80 | Elektroměry na DIN lištu (33), Termostaty (26), Spínací hodiny (21) |
| Energia a napájanie > Akumulátory a batérie > Káblové očká, fastóny a dutinky | L3 → L4 | 170 | 76 | Kabelová očka (31), Kabelové dutinky (14), Fastony (13), Kabelové vidličky (10), Kabelové spojky (8) |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED pásiky a profily | L3 → L4 | 74 | 75 | LED pásiky (38), Príslušenstvo (23), Napájacie zdroje 12V (14) |
| Počítače, mobily a tablety > Herné konzoly | L2 → L3 | 77 | 68 | Konzolové hry (35), Herní ovladače (24), Příslušenství ke konzolím (9) |
| Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | L2 → L3 | 190 | 68 | Elektroinstalační krabice (23), Zásuvkové bloky a lišty (21), Vypínače a zásuvky GALATEA IP44 (16), Zásuvky 230V (8) |
| Elektro, Smart Home a osvetlenie > Káble a vodiče | L2 → L3 | 136 | 68 | Koaxiální kabely (31), Silové kabely (16), Fotovoltaické kabely (13), Dvojlinky (8) |
| Auto-moto > Príslušenstvo do auta > Stierače | L3 → L4 | 176 | 68 | Sady stěračů FLAT SET (40), Stěrače BULK (20), Klasické kovové (8) |
| Cestovanie, šport a outdoor > Bojové športy | L2 → L3 | 198 | 65 | Boxerské rukavice (30), Chrániče (14), MMA rukavice (11), Chrániče holení (10) |
| Domáce spotrebiče > Sendvičovače, hriankovače, vaflovače | L2 → L3 | 62 | 60 | Topinkovače (29), Sendvičovače (19), Vaflovače (12) |
| Domáce spotrebiče > Grily, pekárne, variče | L2 → L3 | 86 | 60 | Elektrické grily (26), Elektrické vařiče (18), Pece na pizzu (16) |
| Domáce spotrebiče > Varné dosky | L2 → L3 | 54 | 53 | Indukční varné desky (30), Plynové varné desky (14), Sklokeramické varné desky (9) |
| TV, audio, video a foto technika > Audio technika | L2 → L3 | 143 | 52 | HiFi komponenty (37), Klopové mikrofóny (15) |
| Auto-moto > Elektronika do auta | L2 → L3 | 111 | 52 | Android Auto (27), Autorádia (25) |
| Počítače, mobily a tablety > Kancelária a škola | L2 → L3 | 62 | 48 | Tlačiarne štítkov (38), Fototlačiarne (10) |
| Počítače, mobily a tablety > Nositeľná elektronika | L2 → L3 | 186 | 46 | Chytré hodinky (38), Chytré prsteny (8) |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Sady náradia | L3 → L4 | 62 | 45 | Elektrické nářadí (16), Příslušenství pro stroje a nářadí (15), Ruční nářadí (14) |
| 3D tlač a digitálna výroba > Laserové gravírovacie a rezacie stroje | L2 → L3 | 45 | 45 | Zariadenie (29), Príslušenstvo (16) |
| Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice > Priemyselné vidlice a zásuvky | L3 → L4 | 88 | 44 | Průmyslové zásuvky (36), Průmyslové přívodky (8) |
| TV, audio, video a foto technika > Foto a príslušenstvo > Skladovanie a preprava | L3 → L4 | 47 | 42 | Puzdrá a obaly (32), Tašky (10) |

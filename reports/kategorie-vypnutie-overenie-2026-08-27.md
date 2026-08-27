# Overenie kategórií na vypnutie oproti živému eshopu — 2026-08-27

Zoznam „prázdnych" kategórií pôvodne vznikol počítaním produktov v `output/*.xml`. To je
nespoľahlivé: XML obsahuje len produkty, ktoré prejdú dnešnými filtrami (`*_EXCLUDE_UNAVAILABLE=1`
zahodí všetko, čo nie je skladom), pričom v eshope tie produkty ďalej existujú — plus produkty
pridané ručne alebo vypadnuté z feedu v XML nikdy neboli. Preto sa každý kandidát (a celý jeho
podstrom) overuje priamo na živej kategórii.

- Kandidátov pôvodne: **1638**
- Overene prázdnych (ostávajú v CSV na vypnutie): **252**
- Falošne označených, v skutočnosti majú produkty (odstránené): **1386**

## Falošne označené — majú produkty v eshope, NEvypínať

| Kategória | Produktov (vlastných / celý podstrom) | URL |
|---|---|---|
| Elektroinštalačný materiál > Predlžovacie káble a zásuvky | 12 / 123 | https://www.premiumstore.sk/predlzovacie-kable-a-zasuvky/ |
| TV, audio a video > Slúchadlá | 12 / 53 | https://www.premiumstore.sk/sluchadla/ |
| Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Viaczásuvkové | 12 / 36 | https://www.premiumstore.sk/viaczasuvkove/ |
| Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Jednozásuvkové | 12 / 28 | https://www.premiumstore.sk/jednozasuvkove/ |
| TV, audio a video > Mobily a tablety > Smart hodinky | 12 / 25 | https://www.premiumstore.sk/smart-hodinky-2/ |
| Profesionálna audio technika > Car audio | 12 / 23 | https://www.premiumstore.sk/car-audio/ |
| TV, audio a video > Mobily a tablety > Kable USB I > 3v1 Micro | 6 / 18 | https://www.premiumstore.sk/3v1-micro/ |
| Profesionálna audio technika > Svetlá > Lasery | 12 / 18 | https://www.premiumstore.sk/lasery/ |
| Šport, hračky a voľný čas > Mikroskopy | 6 / 15 | https://www.premiumstore.sk/mikroskopy/ |
| Zdravie a starostlivosť > Starostlivosť o dieťa | 7 / 14 | https://www.premiumstore.sk/starostlivost-o-dieta/ |
| Náradie a dielňa > Dielenské vybavenie > Kufre a organizéry na náradie | 7 / 14 | https://www.premiumstore.sk/kufre-a-organizery-na-naradie/ |
| Náradie a dielňa > Mechanické náradie > Nože a nožnice | 7 / 14 | https://www.premiumstore.sk/noze-a-noznice/ |
| Náradie a dielňa > Pneumatické náradie > Príslušenstvo k pneu náradie | 7 / 14 | https://www.premiumstore.sk/prislusenstvo-k-pneu-naradie/ |
| Elektroinštalačný materiál > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá | 5 / 14 | https://www.premiumstore.sk/svorky-pre-prumyslova-svietidla/ |
| Profesionálna audio technika > Svetlá > Reflektory PAR | 12 / 14 | https://www.premiumstore.sk/reflektory-par/ |
| Auto-moto > Karavany a obytná autá > Mobilné TV a SAT antény | 7 / 14 | https://www.premiumstore.sk/mobilne-tv-a-sat-anteny-2/ |
| TV, audio a video > Počítače a príslušenstvo > Tlačiarne a skenery > Príslušenstvo - tlačiarne | 7 / 13 | https://www.premiumstore.sk/prislusenstvo-tlaciarne/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > Domové videotelefony | 7 / 13 | https://www.premiumstore.sk/domove-videotelefony/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Píly | 6 / 13 | https://www.premiumstore.sk/pily-3/ |
| TV, audio a video > Príslušenstvo | 0 / 12 | https://www.premiumstore.sk/prislusenstvo-10/ |
| TV, audio a video > Audio technika > HiFi systémy | 6 / 12 | https://www.premiumstore.sk/hifi-systemy/ |
| TV, audio a video > Audio technika > Stojany | 12 / 12 | https://www.premiumstore.sk/stojany-2/ |
| TV, audio a video > Audio technika > Doplnky | 12 / 12 | https://www.premiumstore.sk/doplnky/ |
| Domáce spotrebiče > Malé spotrebiče > Dezinfekčné lampy | 6 / 12 | https://www.premiumstore.sk/dezinfekcne-lampy/ |
| TV, audio a video > Slúchadlá > Drátová | 12 / 12 | https://www.premiumstore.sk/dratova/ |
| TV, audio a video > Slúchadlá > True Bezdrôtové | 12 / 12 | https://www.premiumstore.sk/true-bezdrotove/ |
| TV, audio a video > Slúchadlá > Bezdrátová | 12 / 12 | https://www.premiumstore.sk/bezdratova/ |
| Záhrada > Záhradné potreby | 4 / 12 | https://www.premiumstore.sk/zahradne-potreby/ |
| Bezpečnosť a smart domácnosť > Smart domácnosť > Zásuvky | 12 / 12 | https://www.premiumstore.sk/zasuvky-2/ |
| TV, audio a video > Počítače a príslušenstvo > Monitory > Plátna a projektory | 6 / 12 | https://www.premiumstore.sk/platna-a-projektory/ |
| Fotovoltaika a energie > Nabíjačky > Powerbanky | 12 / 12 | https://www.premiumstore.sk/powerbanky/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Držiaky | 12 / 12 | https://www.premiumstore.sk/drziaky/ |
| Fotovoltaika a energie > Fotovoltaika > Káble pre fotovoltaiku > Fotovoltaické káble | 12 / 12 | https://www.premiumstore.sk/fotovoltaicke-kable-2/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Mercedes-Benz | 6 / 12 | https://www.premiumstore.sk/auto-koberce-mercedes-benz/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Renault | 6 / 12 | https://www.premiumstore.sk/auto-koberce-renault/ |
| Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Silové káble | 12 / 12 | https://www.premiumstore.sk/silove-kable-3/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Obkladačské práce | 6 / 12 | https://www.premiumstore.sk/obkladacske-prace/ |
| TV, audio a video > Antény a satelity > ZOSILŇOVAČE > HLAVNÍ STANICE | 4 / 12 | https://www.premiumstore.sk/hlavni-stanice/ |
| Elektroinštalačný materiál > Ventilačné technika > Talířové ventily a difuzéry | 6 / 12 | https://www.premiumstore.sk/talirove-ventily-a-difuzery/ |
| TV, audio a video > Audio technika > Reproduktory > Soundbary | 12 / 12 | https://www.premiumstore.sk/soundbary-2/ |
| TV, audio a video > Mobily a tablety > Kable USB I > 3v1 Micro > USB-C | 6 / 12 | https://www.premiumstore.sk/usb-c/ |
| TV, audio a video > Mobily a tablety > Smart hodinky > Smart prstene | 12 / 12 | https://www.premiumstore.sk/smart-prstene-2/ |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Iné 100V zariadenia | 7 / 12 | https://www.premiumstore.sk/ine-100v-zariadenia/ |
| Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Výsuvné a vstavané zásuvky | 12 / 12 | https://www.premiumstore.sk/vysuvne-a-vstavane-zasuvky/ |
| Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Navíjacie bubny | 12 / 12 | https://www.premiumstore.sk/navijacie-bubny/ |
| Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Prepäťové ochrany | 12 / 12 | https://www.premiumstore.sk/prepatove-ochrany-3/ |
| Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Viaczásuvkové > Ostatné | 12 / 12 | https://www.premiumstore.sk/ostatne-28/ |
| Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Viaczásuvkové > Klasické | 12 / 12 | https://www.premiumstore.sk/klasicke/ |
| TV, audio a video > AV káble > Anténa > Anténne káble | 6 / 12 | https://www.premiumstore.sk/antenne-kable/ |
| Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Jednozásuvkové > Jednozásuvkové 230V | 12 / 12 | https://www.premiumstore.sk/jednozasuvkove-230v/ |
| Náradie a dielňa > Náradie > Aku náradie | 7 / 11 | https://www.premiumstore.sk/aku-naradie/ |
| Šport, hračky a voľný čas > Hudební nástroje | 6 / 11 | https://www.premiumstore.sk/hudebni-nastroje/ |
| TV, audio a video > Audio technika > Reproduktory > Subwoofery | 11 / 11 | https://www.premiumstore.sk/subwoofery-2/ |
| Profesionálna audio technika > Reproduktory > Príslušenstvo k reproduktorom > iné | 11 / 11 | https://www.premiumstore.sk/ine-8/ |
| Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Záhradné stĺpiky | 11 / 11 | https://www.premiumstore.sk/zahradne-stlpiky/ |
| TV, audio a video > Počítače a príslušenstvo > Káble | 5 / 10 | https://www.premiumstore.sk/kable-2/ |
| Šport, hračky a voľný čas > Hračky > Hračky pre kluky | 5 / 10 | https://www.premiumstore.sk/hracky-pre-kluky/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Exteriér | 5 / 10 | https://www.premiumstore.sk/exterier-2/ |
| TV, audio a video > Antény a satelity > CAM dekodéry a karty | 5 / 10 | https://www.premiumstore.sk/cam-dekodery-a-karty/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Volkswagen | 5 / 10 | https://www.premiumstore.sk/auto-koberce-volkswagen/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce BMW | 5 / 10 | https://www.premiumstore.sk/auto-koberce-bmw/ |
| Náradie a dielňa > Mechanické náradie > Kliešte > Kliešte štiepacie | 5 / 10 | https://www.premiumstore.sk/klieste-stiepacie/ |
| Zdravie a starostlivosť > Matka a dieťa > Elektronické príslušenstvo | 5 / 10 | https://www.premiumstore.sk/elektronicke-prislusenstvo/ |
| TV, audio a video > Audio technika > Zosilňovače | 9 / 9 | https://www.premiumstore.sk/zosilnovace-3/ |
| Zdravie a starostlivosť > Sonické zubné kefky | 6 / 9 | https://www.premiumstore.sk/sonicke-zubne-kefky/ |
| Profesionálna audio technika > Nové produkty | 9 / 9 | https://www.premiumstore.sk/nove-produkty/ |
| Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče | 4 / 8 | https://www.premiumstore.sk/ostatne-spotrebice/ |
| Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Mlynčeky na mäso | 8 / 8 | https://www.premiumstore.sk/mlynceky-na-maso/ |
| TV, audio a video > Počítače a príslušenstvo > Herné zariadenia > Herné konzoly | 4 / 8 | https://www.premiumstore.sk/herne-konzoly/ |
| Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre Brúsky | 4 / 8 | https://www.premiumstore.sk/prislusenstvo-pre-brusky/ |
| Bezpečnosť a smart domácnosť > Smart domácnosť > Smart zabezpečenie | 4 / 8 | https://www.premiumstore.sk/smart-zabezpecenie/ |
| Záhrada > Záhradné stroje > Čerpadlá | 4 / 8 | https://www.premiumstore.sk/cerpadla-2/ |
| TV, audio a video > Antény a satelity > ZOSILŇOVAČE > HLAVNÍ STANICE > ALCAD | 4 / 8 | https://www.premiumstore.sk/alcad/ |
| Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône Mr&Mrs CESARE | 8 / 8 | https://www.premiumstore.sk/vone-mr-mrs-cesare/ |
| Elektroinštalačný materiál > Komponenty pre svietidlá > Objímky | 4 / 8 | https://www.premiumstore.sk/objimky/ |
| Elektroinštalačný materiál > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá > Svorky - SLK 3 | 4 / 8 | https://www.premiumstore.sk/svorky-slk-3/ |
| Profesionálna audio technika > Car audio > Káble | 4 / 8 | https://www.premiumstore.sk/kable-4/ |
| Profesionálna audio technika > Reproduktory > Príslušenstvo k reproduktorom > výhybky | 8 / 8 | https://www.premiumstore.sk/vyhybky-2/ |
| Profesionálna audio technika > Reproduktory > Príslušenstvo k reproduktorom > ochranné grily | 8 / 8 | https://www.premiumstore.sk/ochranne-grily/ |
| Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Meracie prístroje > Merače panelové | 8 / 8 | https://www.premiumstore.sk/merace-panelove/ |
| Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Výrobníky sódy | 7 / 7 | https://www.premiumstore.sk/vyrobniky-sody/ |
| TV, audio a video > Počítače a príslušenstvo > Adaptéry a meniče | 7 / 7 | https://www.premiumstore.sk/adaptery-a-menice/ |
| TV, audio a video > Počítače a príslušenstvo > SSD disky | 7 / 7 | https://www.premiumstore.sk/ssd-disky/ |
| TV, audio a video > Počítače a príslušenstvo > Sieťové prvky > Patch káble | 7 / 7 | https://www.premiumstore.sk/patch-kable/ |
| TV, audio a video > Mobily a tablety > Tlačidlové telefóny | 7 / 7 | https://www.premiumstore.sk/tlacidlove-telefony/ |
| TV, audio a video > Mobily a tablety > Smartfóny | 7 / 7 | https://www.premiumstore.sk/smartfony/ |
| Zdravie a starostlivosť > Elektrické deky | 7 / 7 | https://www.premiumstore.sk/elektricke-deky/ |
| Domáce spotrebiče > Vstavané spotrebiče > Digestory > Závesné digestory | 7 / 7 | https://www.premiumstore.sk/zavesne-digestory/ |
| Domáce spotrebiče > Malé spotrebiče > Grily, pekárne, variče > Varné platne | 7 / 7 | https://www.premiumstore.sk/varne-platne/ |
| Elektroinštalačný materiál > Osvetlenie > Ostatné žiarovky a žiarivky | 7 / 7 | https://www.premiumstore.sk/ostatne-ziarovky-a-ziarivky/ |
| TV, audio a video > Mobily a tablety > Príslušenstvo > Ostatné príslušenstvo pre mobily | 7 / 7 | https://www.premiumstore.sk/ostatne-prislusenstvo-pre-mobily/ |
| Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Doštičky, Podložky, Krájacie dosky | 7 / 7 | https://www.premiumstore.sk/dosticky--podlozky--krajacie-dosky/ |
| Bezpečnosť a smart domácnosť > Smart domácnosť > Príslušenstvo | 7 / 7 | https://www.premiumstore.sk/prislusenstvo-14/ |
| TV, audio a video > Foto a optika > Digitálne kompakty | 7 / 7 | https://www.premiumstore.sk/digitalne-kompakty/ |
| Domáce spotrebiče > Veľké spotrebiče > Umývačky riadu > Umývačky riad 45 cm | 7 / 7 | https://www.premiumstore.sk/umyvacky-riad-45-cm/ |
| Šport, hračky a voľný čas > Hračky > Stavebnice > Ostatné stavebnice | 7 / 7 | https://www.premiumstore.sk/ostatne-stavebnice/ |
| TV, audio a video > Televízory > Televízory na 12V | 7 / 7 | https://www.premiumstore.sk/televizory-na-12v/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k multimediálnímu boxu | 7 / 7 | https://www.premiumstore.sk/ovladace-k-multimedialnimu-boxu/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Zircon | 7 / 7 | https://www.premiumstore.sk/zircon-2/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Technisat | 7 / 7 | https://www.premiumstore.sk/technisat-2/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > DIWAY | 7 / 7 | https://www.premiumstore.sk/diway/ |
| Šport, hračky a voľný čas > Cyklistika > Ostatné cyklo doplnky | 7 / 7 | https://www.premiumstore.sk/ostatne-cyklo-doplnky/ |
| Fotovoltaika a energie > Záložné zdroje a UPS > UPS | 7 / 7 | https://www.premiumstore.sk/ups/ |
| Elektroinštalačný materiál > Káble a vodiče > Dvojlinky | 7 / 7 | https://www.premiumstore.sk/dvojlinky/ |
| Elektroinštalačný materiál > Rozvádzačové prvky > Bloky pre rozdělení fází > Typ PVB ("hranaté") 160 - 500 A | 7 / 7 | https://www.premiumstore.sk/typ-pvb-hranate-160-500-a/ |
| Fotovoltaika a energie > Akumulátory a batérie > AAA mikrotužkové | 7 / 7 | https://www.premiumstore.sk/aaa-mikrotuzkove/ |
| Fotovoltaika a energie > Fotovoltaika > Káble pre fotovoltaiku > Chráničky | 7 / 7 | https://www.premiumstore.sk/chranicky/ |
| Záhrada > Záhradné doplnky > Doplnky na záhradu | 7 / 7 | https://www.premiumstore.sk/doplnky-na-zahradu/ |
| Bezpečnosť a smart domácnosť > Zabezpečenie > Požarní hlásiče | 7 / 7 | https://www.premiumstore.sk/pozarni-hlasice/ |
| Bezpečnosť a smart domácnosť > Zabezpečenie > Kamery | 7 / 7 | https://www.premiumstore.sk/kamery-3/ |
| TV, audio a video > Diaľkové ovládače > Televízne ovládače > Grundig | 7 / 7 | https://www.premiumstore.sk/grundig/ |
| TV, audio a video > Diaľkové ovládače > Televízne ovládače > JVC | 7 / 7 | https://www.premiumstore.sk/jvc/ |
| TV, audio a video > AV káble > Optické káble | 7 / 7 | https://www.premiumstore.sk/opticke-kable/ |
| TV, audio a video > AV káble > HDMI spojky a redukcie | 7 / 7 | https://www.premiumstore.sk/hdmi-spojky-a-redukcie/ |
| TV, audio a video > AV káble > TV účastnické šnúry | 7 / 7 | https://www.premiumstore.sk/tv-ucastnicke-snury-2/ |
| TV, audio a video > Antény a satelity > Koaxiálne káble > Kabel s F konektory | 7 / 7 | https://www.premiumstore.sk/kabel-s-f-konektory/ |
| TV, audio a video > Antény a satelity > Koaxiálne káble > TV účastnické šnúry | 7 / 7 | https://www.premiumstore.sk/tv-ucastnicke-snury/ |
| Elektroinštalačný materiál > Inštalačné náradie a ostatné materiál > Náradie pre fotovoltaiku | 7 / 7 | https://www.premiumstore.sk/naradie-pre-fotovoltaiku-2/ |
| TV, audio a video > TV stolíky a držiaky > Držiaky monitorů | 7 / 7 | https://www.premiumstore.sk/drziaky-monitoru/ |
| Auto-moto > Elektromobilita > Tesla | 7 / 7 | https://www.premiumstore.sk/tesla-3/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové kamery > 5.0 Mpix. | 7 / 7 | https://www.premiumstore.sk/5-0-mpix/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové kamery > 8.0 Mpix. (4K) | 7 / 7 | https://www.premiumstore.sk/8-0-mpix-4k/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Dreambox | 7 / 7 | https://www.premiumstore.sk/dreambox/ |
| Auto-moto > Vybavenie auta > Stierače > Stierače HYBRID | 7 / 7 | https://www.premiumstore.sk/stierace-hybrid/ |
| Auto-moto > Vybavenie auta > Stierače > Sady stieračov FLAT DOUBLE | 7 / 7 | https://www.premiumstore.sk/sady-stieracov-flat-double/ |
| Fotovoltaika a energie > Fotovoltaika > Ochrana FV instalací > Poistky | 7 / 7 | https://www.premiumstore.sk/poistky-2/ |
| Elektroinštalačný materiál > Inštalačné príslušenstvo > Organizéry káblov | 7 / 7 | https://www.premiumstore.sk/organizery-kablov/ |
| Šport, hračky a voľný čas > Turistika > Karimatky, matrace, vankúše | 7 / 7 | https://www.premiumstore.sk/karimatky--matrace--vankuse/ |
| Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Smršťovací bužírky | 7 / 7 | https://www.premiumstore.sk/smrstovaci-buzirky/ |
| Náradie a dielňa > SPÁJKOVACIE TECHNIKA > Chémia pre pájení | 7 / 7 | https://www.premiumstore.sk/chemia-pre-pajeni/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Nástroje > Lepící pásky | 7 / 7 | https://www.premiumstore.sk/lepici-pasky/ |
| TV, audio a video > Antény a satelity > ZOSILŇOVAČE > Linkové | 7 / 7 | https://www.premiumstore.sk/linkove/ |
| Záhrada > Záhradné doplnky > Pestovanie > Záhradné hnojivá > Krystalická hnojivá | 7 / 7 | https://www.premiumstore.sk/krystalicka-hnojiva/ |
| TV, audio a video > Antény a satelity > SATELITNÉ PRIJÍMAČE > Wi-Fi adaptéry | 7 / 7 | https://www.premiumstore.sk/wi-fi-adaptery/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ QUIET | 7 / 7 | https://www.premiumstore.sk/ventilatory-typ-quiet/ |
| TV, audio a video > Antény a satelity > LNB konvertory > Quad 4 TV | 7 / 7 | https://www.premiumstore.sk/quad-4-tv/ |
| TV, audio a video > Antény a satelity > LNB konvertory > Quattro (H/V) | 7 / 7 | https://www.premiumstore.sk/quattro--h-v/ |
| TV, audio a video > Antény a satelity > LNB konvertory > Twin 2 TV | 7 / 7 | https://www.premiumstore.sk/twin-2-tv/ |
| Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Káblové gelové spojky PAGURO IP68 | 7 / 7 | https://www.premiumstore.sk/kablove-gelove-spojky-paguro-ip68/ |
| Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Ochranné gelové krabičky | 7 / 7 | https://www.premiumstore.sk/ochranne-gelove-krabicky/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovacie a kotevní materiál, chémia > Chémia | 7 / 7 | https://www.premiumstore.sk/chemia-3/ |
| TV, audio a video > Antény a satelity > Satelitné príslušenstvo > Multipřepínače > 4 družice | 7 / 7 | https://www.premiumstore.sk/4-druzice/ |
| TV, audio a video > Antény a satelity > Satelitné príslušenstvo > Multipřepínače > 3 družice | 7 / 7 | https://www.premiumstore.sk/3-druzice/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Držiaky stožárů > Patky | 7 / 7 | https://www.premiumstore.sk/patky/ |
| TV, audio a video > Diaľkové ovládače > DVD > Philips | 7 / 7 | https://www.premiumstore.sk/philips-2/ |
| Záhrada > Sanitárna technika > Sprchové hlavice | 7 / 7 | https://www.premiumstore.sk/sprchove-hlavice/ |
| Fotovoltaika a energie > Fotovoltaika > Solárne panely > Prenosné a skládací | 7 / 7 | https://www.premiumstore.sk/prenosne-a-skladaci/ |
| Šport, hračky a voľný čas > Sportovní vybavenie > Sportovní okuliare | 7 / 7 | https://www.premiumstore.sk/sportovni-okuliare/ |
| Náradie a dielňa > Elektronické súčiastky > Priemyselné zdroje > 12v | 7 / 7 | https://www.premiumstore.sk/12v-2/ |
| Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône SPEED | 7 / 7 | https://www.premiumstore.sk/vone-speed/ |
| Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône AROMA CAR | 7 / 7 | https://www.premiumstore.sk/vone-aroma-car/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové videorekordéry (NVR) > 16 kanálů | 7 / 7 | https://www.premiumstore.sk/16-kanalu/ |
| Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové příchytky a držiaky > Káblové příchytky | 7 / 7 | https://www.premiumstore.sk/kablove-prichytky/ |
| Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové příchytky a držiaky > Sběrné káblové držiaky | 7 / 7 | https://www.premiumstore.sk/sberne-kablove-drziaky/ |
| Fotovoltaika a energie > Fotovoltaika > Solárne zostavy > Zostavy pre ostrovní systémy (OFF-GRID) | 7 / 7 | https://www.premiumstore.sk/zostavy-pre-ostrovni-systemy--off-grid-/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Kotúče rezacie, pílové, brúsne > Kotúče rezacie diamantové | 7 / 7 | https://www.premiumstore.sk/kotuce-rezacie-diamantove/ |
| Elektroinštalačný materiál > Ventilačné technika > Mřížky > Kovové mřížky | 7 / 7 | https://www.premiumstore.sk/kovove-mrizky/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Brusivo > Brúsne kotúče | 7 / 7 | https://www.premiumstore.sk/brusne-kotuce/ |
| TV, audio a video > Mobily a tablety > Nabíjačky > Nabíjačky do auta | 7 / 7 | https://www.premiumstore.sk/nabijacky-do-auta/ |
| Bezpečnosť a smart domácnosť > Osvetlenie > LED žiarovky | 7 / 7 | https://www.premiumstore.sk/led-ziarovky-3/ |
| TV, audio a video > Foto a optika > Fotoateliér > Podšálky | 7 / 7 | https://www.premiumstore.sk/podsalky/ |
| TV, audio a video > Foto a optika > Filtre > Pre smartfóny | 7 / 7 | https://www.premiumstore.sk/pre-smartfony-2/ |
| TV, audio a video > Mobily a tablety > Selfie tyče > statívy > stojany > Selfie stojany | 7 / 7 | https://www.premiumstore.sk/selfie-stojany/ |
| TV, audio a video > Foto a optika > Skladovanie a preprava > Tašky | 7 / 7 | https://www.premiumstore.sk/tasky/ |
| Profesionálna audio technika > Pódium, diskotéka, DJ > Predzosilňovače audio | 7 / 7 | https://www.premiumstore.sk/predzosilnovace-audio/ |
| Profesionálna audio technika > Káble, konektory a redukcie > Konektory a redukcie > Speakon/Powercon | 7 / 7 | https://www.premiumstore.sk/speakon-powercon/ |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Bezdrôtový prenos zvuku | 7 / 7 | https://www.premiumstore.sk/bezdrotovy-prenos-zvuku/ |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Transformátory 100V | 7 / 7 | https://www.premiumstore.sk/transformatory-100v/ |
| Profesionálna audio technika > Reproduktory > Príslušenstvo k reproduktorom > konektory | 7 / 7 | https://www.premiumstore.sk/konektory-4/ |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Mikrofóny > zónové | 7 / 7 | https://www.premiumstore.sk/zonove-2/ |
| Profesionálna audio technika > JTS > Slúchadlá | 5 / 7 | https://www.premiumstore.sk/sluchadla-5/ |
| Profesionálna audio technika > JTS > Inštalácie > Príslušenstvo | 7 / 7 | https://www.premiumstore.sk/prislusenstvo-35/ |
| Auto-moto > Karavany a obytná autá > Mobilné TV a SAT antény > Antény pre DVB-T2 príjem | 7 / 7 | https://www.premiumstore.sk/anteny-pre-dvb-t2-prijem-2/ |
| Auto-moto > GPS navigácie | 6 / 6 | https://www.premiumstore.sk/gps-navigacie/ |
| Auto-moto > Elektrovozidlá | 3 / 6 | https://www.premiumstore.sk/elektrovozidla/ |
| TV, audio a video > Reproduktory > Drátové reproduktory | 6 / 6 | https://www.premiumstore.sk/dratove-reproduktory/ |
| TV, audio a video > Počítače a príslušenstvo > Káble pre IT | 3 / 6 | https://www.premiumstore.sk/kable-pre-it/ |
| TV, audio a video > Počítače a príslušenstvo > Monitor stands | 6 / 6 | https://www.premiumstore.sk/monitor-stands/ |
| Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá > Napěňovače mlieka | 6 / 6 | https://www.premiumstore.sk/napenovace-mlieka/ |
| TV, audio a video > Mobily a tablety > Powerbanky | 6 / 6 | https://www.premiumstore.sk/powerbanky-4/ |
| Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce > Ryžovary | 6 / 6 | https://www.premiumstore.sk/ryzovary/ |
| Zdravie a starostlivosť > Parfumy a kozmetika | 2 / 6 | https://www.premiumstore.sk/parfumy-a-kozmetika/ |
| Domáce spotrebiče > Malé spotrebiče > Vysávače > Viacúčelové vysávače | 6 / 6 | https://www.premiumstore.sk/viacucelove-vysavace/ |
| TV, audio a video > Počítače a príslušenstvo > Tlačiarne a skenery > Príslušenstvo - tlačiarne > Papiere do tlačiarní | 6 / 6 | https://www.premiumstore.sk/papiere-do-tlaciarni/ |
| Náradie a dielňa > Náradie > Stavebné materiál, chémia a technika | 6 / 6 | https://www.premiumstore.sk/stavebne-material--chemia-a-technika/ |
| Náradie a dielňa > Náradie > Elektrické náradie > Brúsky | 3 / 6 | https://www.premiumstore.sk/brusky/ |
| Záhrada > Záhradné potreby > Záhradné náradie | 3 / 6 | https://www.premiumstore.sk/zahradne-naradie/ |
| Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Mlynčeky na korenie | 6 / 6 | https://www.premiumstore.sk/mlynceky-na-korenie/ |
| TV, audio a video > Počítače a príslušenstvo > Tlačiarne a skenery > Multifunkčné tlačiarne > Laserové multifunkčné tlačiarne | 6 / 6 | https://www.premiumstore.sk/laserove-multifunkcne-tlaciarne/ |
| TV, audio a video > Príslušenstvo k TV, audio, video > Batérie a nabíjačky | 3 / 6 | https://www.premiumstore.sk/baterie-a-nabijacky/ |
| Domáce spotrebiče > Veľké spotrebiče > Chladničky > Chladničky s mraziace priehradkou | 6 / 6 | https://www.premiumstore.sk/chladnicky-s-mraziace-priehradkou/ |
| Bezpečnosť a smart domácnosť > Smart domácnosť > Meteostanice | 6 / 6 | https://www.premiumstore.sk/meteostanice-2/ |
| Šport, hračky a voľný čas > Hračky > Vzdelávacie a interaktívne | 6 / 6 | https://www.premiumstore.sk/vzdelavacie-a-interaktivne/ |
| Elektroinštalačný materiál > Osvetlenie > Svietidlá > Lampáše | 6 / 6 | https://www.premiumstore.sk/lampase/ |
| Elektroinštalačný materiál > Osvetlenie > Svietidlá > Nenabíjacie | 6 / 6 | https://www.premiumstore.sk/nenabijacie/ |
| TV, audio a video > Počítače a príslušenstvo > Monitory > Plátna a projektory > Projektory | 6 / 6 | https://www.premiumstore.sk/projektory/ |
| TV, audio a video > Diaľkové ovládače > Ostatné | 6 / 6 | https://www.premiumstore.sk/ostatne-2/ |
| TV, audio a video > Diaľkové ovládače > Hotelové a senior ovládače | 6 / 6 | https://www.premiumstore.sk/hotelove-a-senior-ovladace/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Thomson | 6 / 6 | https://www.premiumstore.sk/thomson/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > GoSAT | 6 / 6 | https://www.premiumstore.sk/gosat-2/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Hyundai | 6 / 6 | https://www.premiumstore.sk/hyundai-2/ |
| Auto-moto > Bezpečnosť > Kamery do autá | 6 / 6 | https://www.premiumstore.sk/kamery-do-auta-2/ |
| Elektroinštalačný materiál > Káble a vodiče > Auto káble | 6 / 6 | https://www.premiumstore.sk/auto-kable/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > HDCVI, HDTVI, AHD kamery | 4 / 6 | https://www.premiumstore.sk/hdcvi--hdtvi--ahd-kamery/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > Kamerové sety | 6 / 6 | https://www.premiumstore.sk/kamerove-sety/ |
| Elektroinštalačný materiál > Rozvádzačové prvky > Bloky pre rozdělení fází > Typ PDB 160 - 490 A | 6 / 6 | https://www.premiumstore.sk/typ-pdb-160-490-a/ |
| Fotovoltaika a energie > Akumulátory a batérie > Autobatérie | 6 / 6 | https://www.premiumstore.sk/autobaterie/ |
| Záhrada > Záhradné doplnky > Grily | 6 / 6 | https://www.premiumstore.sk/grily-2/ |
| Záhrada > Záhradné doplnky > Čerpadlá | 6 / 6 | https://www.premiumstore.sk/cerpadla-4/ |
| Bezpečnosť a smart domácnosť > Zabezpečenie > Domové alarmy | 6 / 6 | https://www.premiumstore.sk/domove-alarmy/ |
| TV, audio a video > Antény a satelity > ANTÉNY > Antény vonkajšie | 6 / 6 | https://www.premiumstore.sk/anteny-vonkajsie/ |
| Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Predlžovačky 3 fázové | 6 / 6 | https://www.premiumstore.sk/predlzovacky-3-fazove/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Audi | 3 / 6 | https://www.premiumstore.sk/auto-koberce-audi/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Jeep | 3 / 6 | https://www.premiumstore.sk/auto-koberce-jeep/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Peugeot | 3 / 6 | https://www.premiumstore.sk/auto-koberce-peugeot/ |
| TV, audio a video > Diaľkové ovládače > Televízne ovládače > Hisense | 6 / 6 | https://www.premiumstore.sk/hisense/ |
| TV, audio a video > Diaľkové ovládače > Televízne ovládače > OVP | 6 / 6 | https://www.premiumstore.sk/ovp/ |
| Elektroinštalačný materiál > Inštalačné náradie a ostatné materiál > Ořezávače káblov | 6 / 6 | https://www.premiumstore.sk/orezavace-kablov/ |
| Elektroinštalačný materiál > Inštalačné náradie a ostatné materiál > Ostatné | 6 / 6 | https://www.premiumstore.sk/ostatne-6/ |
| TV, audio a video > TV stolíky a držiaky > Konzolové držiaky | 6 / 6 | https://www.premiumstore.sk/konzolove-drziaky/ |
| Auto-moto > Elektromobilita > AC nabíjacie stanice Wallbox | 6 / 6 | https://www.premiumstore.sk/ac-nabijacie-stanice-wallbox/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Kaon | 6 / 6 | https://www.premiumstore.sk/kaon/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Homecast | 6 / 6 | https://www.premiumstore.sk/homecast/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Humax | 6 / 6 | https://www.premiumstore.sk/humax/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Formuler | 6 / 6 | https://www.premiumstore.sk/formuler/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > ATlink | 6 / 6 | https://www.premiumstore.sk/atlink/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Zgemma | 6 / 6 | https://www.premiumstore.sk/zgemma/ |
| Elektroinštalačný materiál > Káble a vodiče > Koaxiálne káble > Metráž | 6 / 6 | https://www.premiumstore.sk/metraz/ |
| TV, audio a video > Antény a satelity > PASIVNÍ PRVKY > Útlumové články | 6 / 6 | https://www.premiumstore.sk/utlumove-clanky/ |
| TV, audio a video > Antény a satelity > PASIVNÍ PRVKY > Rozbočovače > Televízne aktivní | 6 / 6 | https://www.premiumstore.sk/televizne-aktivni/ |
| Elektroinštalačný materiál > Vypínače, zásuvky, krabice > TV SAT zásuvky > Průběžné | 6 / 6 | https://www.premiumstore.sk/prubezne/ |
| TV, audio a video > Antény a satelity > Účastnické zásuvky > Průběžné | 6 / 6 | https://www.premiumstore.sk/prubezne-2/ |
| TV, audio a video > Antény a satelity > Účastnické zásuvky > Koncové | 6 / 6 | https://www.premiumstore.sk/koncove-2/ |
| Elektroinštalačný materiál > Rozvádzačové prvky > Můstky na nosnou lištu > Bezšroubové kryté můstky (IP20) | 6 / 6 | https://www.premiumstore.sk/bezsroubove-kryte-mustky--ip20/ |
| Fotovoltaika a energie > Fotovoltaika > Ochrana FV instalací > Ističe | 6 / 6 | https://www.premiumstore.sk/istice/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Uzemnenie, hromosvody > Zemnící pásky | 6 / 6 | https://www.premiumstore.sk/zemnici-pasky/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Uzemnenie, hromosvody > Ekvipotenciální svorkovnice | 6 / 6 | https://www.premiumstore.sk/ekvipotencialni-svorkovnice/ |
| Náradie a dielňa > Chémia > Ostatné chemické prípravky | 6 / 6 | https://www.premiumstore.sk/ostatne-chemicke-pripravky/ |
| Náradie a dielňa > Chémia > Mazivá | 6 / 6 | https://www.premiumstore.sk/maziva/ |
| Náradie a dielňa > Mechanické náradie > Svěrky, zveráky | 6 / 6 | https://www.premiumstore.sk/sverky--zveraky/ |
| Šport, hračky a voľný čas > Bojové športy > Tréninková lana | 6 / 6 | https://www.premiumstore.sk/treninkova-lana/ |
| Šport, hračky a voľný čas > Bojové športy > Montážne prvky | 6 / 6 | https://www.premiumstore.sk/montazne-prvky/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly na stěnu > Sa čtvercovou základnou | 6 / 6 | https://www.premiumstore.sk/sa-ctvercovou-zakladnou/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Truhlářské práce | 3 / 6 | https://www.premiumstore.sk/truhlarske-prace/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Vrtáky > Vŕtacie korunky | 6 / 6 | https://www.premiumstore.sk/vrtacie-korunky/ |
| Náradie a dielňa > Mechanické náradie > Kladivá, dláta, sekery > Paličky | 6 / 6 | https://www.premiumstore.sk/palicky/ |
| Auto-moto > Autokozmetika, Chémia > Rozmrazovače | 6 / 6 | https://www.premiumstore.sk/rozmrazovace/ |
| Auto-moto > Autokozmetika, Chémia > Oleje, mazivá | 6 / 6 | https://www.premiumstore.sk/oleje--maziva/ |
| Auto-moto > Autokozmetika, Chémia > Renovace | 6 / 6 | https://www.premiumstore.sk/renovace/ |
| TV, audio a video > Antény a satelity > ZOSILŇOVAČE > Aktivní TV rozbočovače | 6 / 6 | https://www.premiumstore.sk/aktivni-tv-rozbocovace/ |
| Auto-moto > Kolesá > Měřiče tlaku | 6 / 6 | https://www.premiumstore.sk/merice-tlaku/ |
| TV, audio a video > Antény a satelity > SATELITNÉ PRIJÍMAČE > COMBO SAT/DVBT | 6 / 6 | https://www.premiumstore.sk/combo-sat-dvbt/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Podvozek > Heváky a zdviháky > Náhradné diely k heverům | 6 / 6 | https://www.premiumstore.sk/nahradne-diely-k-heverum/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - do potrubie | 3 / 6 | https://www.premiumstore.sk/ventilatory-do-koupelny-wc-do-potrubie/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VKO | 6 / 6 | https://www.premiumstore.sk/ventilatory-typ-vko/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Prípravky | 6 / 6 | https://www.premiumstore.sk/pripravky/ |
| Elektroinštalačný materiál > Elektromery a spínacie technika > Impulzní spínače | 6 / 6 | https://www.premiumstore.sk/impulzni-spinace/ |
| Elektroinštalačný materiál > Elektromery a spínacie technika > Zásuvkové elektromery | 6 / 6 | https://www.premiumstore.sk/zasuvkove-elektromery/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovacie a kotevní materiál, chémia > Káblové příchytky | 6 / 6 | https://www.premiumstore.sk/kablove-prichytky-2/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Stožiare a trojnožky > Jednodílné stožiare | 6 / 6 | https://www.premiumstore.sk/jednodilne-stoziare/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Stožiare a trojnožky > Nadstavce na stožiare | 6 / 6 | https://www.premiumstore.sk/nadstavce-na-stoziare/ |
| Šport, hračky a voľný čas > Sportovní vybavenie > Vodné športy, hračky do vody | 6 / 6 | https://www.premiumstore.sk/vodne-sporty--hracky-do-vody/ |
| Šport, hračky a voľný čas > Sportovní vybavenie > Raketové športy > Badminton | 6 / 6 | https://www.premiumstore.sk/badminton/ |
| Elektroinštalačný materiál > Rozvádzačové prvky > Prepojovacie a rozbočovacie svorky > Přístrojové prepojovacie svorky > Tvar konektoru "vidlička" | 6 / 6 | https://www.premiumstore.sk/tvar-konektoru--vidlicka/ |
| Fotovoltaika a energie > Napájacie zdroje > Nabíjačky notebookov | 6 / 6 | https://www.premiumstore.sk/nabijacky-notebookov/ |
| Náradie a dielňa > Elektronické súčiastky > Poistky, pojistkové držiaky > Autopojistky | 6 / 6 | https://www.premiumstore.sk/autopojistky/ |
| Elektroinštalačný materiál > Elektromery a spínacie technika > Termostaty > Příložné | 6 / 6 | https://www.premiumstore.sk/prilozne/ |
| Záhrada > Záhradné náradie > Záhradné nožnice > Pákové nožnice | 6 / 6 | https://www.premiumstore.sk/pakove-noznice/ |
| Elektroinštalačný materiál > Komponenty pre svietidlá > Tlumivky, předřadníky, zapalovače | 3 / 6 | https://www.premiumstore.sk/tlumivky--predradniky--zapalovace/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - s doběhem (časovač) > Pre průměr potrubie 100 mm | 6 / 6 | https://www.premiumstore.sk/pre-prumer-potrubie-100-mm/ |
| Elektroinštalačný materiál > Elektromery a spínacie technika > Počítadla provozních hodin > Počítadla provozních hodin do panelu | 6 / 6 | https://www.premiumstore.sk/pocitadla-provoznich-hodin-do-panelu/ |
| Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ TT | 6 / 6 | https://www.premiumstore.sk/ventilatory-typ-tt/ |
| TV, audio a video > Audio technika > Slúchadlá > Slúchadlá herné | 6 / 6 | https://www.premiumstore.sk/sluchadla-herne/ |
| Šport, hračky a voľný čas > Outdoor > Elektrické skútre | 6 / 6 | https://www.premiumstore.sk/elektricke-skutre/ |
| Šport, hračky a voľný čas > Outdoor > Batohy | 3 / 6 | https://www.premiumstore.sk/batohy-3/ |
| Šport, hračky a voľný čas > Outdoor > Svietidlá > Pracovné svetlá | 6 / 6 | https://www.premiumstore.sk/pracovne-svetla/ |
| Bezpečnosť a smart domácnosť > Riadiace jednotky > Ovládacie panely | 6 / 6 | https://www.premiumstore.sk/ovladacie-panely/ |
| TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Počítačové zdroje | 6 / 6 | https://www.premiumstore.sk/pocitacove-zdroje/ |
| TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Klávesnice | 3 / 6 | https://www.premiumstore.sk/klavesnice-4/ |
| TV, audio a video > Mobily a tablety > Kable USB I > 3v1 Micro > USB-C > Lightning | 6 / 6 | https://www.premiumstore.sk/lightning-2/ |
| TV, audio a video > Mobily a tablety > Selfie tyče > statívy > stojany > Podložky a stojany | 6 / 6 | https://www.premiumstore.sk/podlozky-a-stojany/ |
| Zdravie a starostlivosť > Matka a dieťa > Kŕmenie dieťaťa | 6 / 6 | https://www.premiumstore.sk/krmenie-dietata/ |
| Zdravie a starostlivosť > Matka a dieťa > Odsávačky mlieka a masážne prístroje | 3 / 6 | https://www.premiumstore.sk/odsavacky-mlieka-a-masazne-pristroje/ |
| Profesionálna audio technika > Káble, konektory a redukcie > Káble > 3.5/2.5mm | 6 / 6 | https://www.premiumstore.sk/3-5-2-5mm/ |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Reproduktory > projektory zvuku 100V | 6 / 6 | https://www.premiumstore.sk/projektory-zvuku-100v/ |
| Profesionálna audio technika > Tlmočnícke, sprievodcovské a konferenčné systémy > Rečnícke pulty | 6 / 6 | https://www.premiumstore.sk/recnicke-pulty/ |
| Profesionálna audio technika > Pódium, diskotéka, DJ > Slúchadlá > na ucho | 6 / 6 | https://www.premiumstore.sk/na-ucho/ |
| Profesionálna audio technika > JTS > Mikrofóny a bezdrôtové systémy > Náhlavové a klopové mikrofóny | 6 / 6 | https://www.premiumstore.sk/nahlavove-a-klopove-mikrofony/ |
| Profesionálna audio technika > JTS > Mikrofóny a bezdrôtové systémy > In-ear monitorovacie systémy | 6 / 6 | https://www.premiumstore.sk/in-ear-monitorovacie-systemy/ |
| Profesionálna audio technika > JTS > Inštalácie > Systémy pre sprievodcov | 6 / 6 | https://www.premiumstore.sk/systemy-pre-sprievodcov/ |
| Profesionálna audio technika > Svetlá > Špeciálne efekty a náplne > Výrobníky hmly | 6 / 6 | https://www.premiumstore.sk/vyrobniky-hmly/ |
| Elektroinštalačný materiál > Ostatné > Káble | 3 / 6 | https://www.premiumstore.sk/kable-5/ |
| Elektroinštalačný materiál > Ostatné > 230V > Vypínače a zásuvky > Slim | 6 / 6 | https://www.premiumstore.sk/slim/ |
| TV, audio a video > AV káble > Anténa > Anténne káble > COAX | 6 / 6 | https://www.premiumstore.sk/coax-2/ |
| Auto-moto > Karavany a obytná autá > Grily a variče | 6 / 6 | https://www.premiumstore.sk/grily-a-varice-2/ |
| Auto-moto > Nosiče kol > Nosiče na tažné zariadenie | 6 / 6 | https://www.premiumstore.sk/nosice-na-tazne-zariadenie-2/ |
| TV, audio a video > Audio technika > Vysielačky | 5 / 5 | https://www.premiumstore.sk/vysielacky/ |
| Domáce spotrebiče > Malé spotrebiče > Płyty gazowe | 5 / 5 | https://www.premiumstore.sk/plyty-gazowe/ |
| Auto-moto > Mini kompresory | 5 / 5 | https://www.premiumstore.sk/mini-kompresory/ |
| TV, audio a video > Počítače a príslušenstvo > Osvetlenie | 5 / 5 | https://www.premiumstore.sk/osvetlenie-4/ |
| TV, audio a video > Počítače a príslušenstvo > Externé zvukové karty | 5 / 5 | https://www.premiumstore.sk/externe-zvukove-karty/ |
| TV, audio a video > Počítače a príslušenstvo > Pendrive | 5 / 5 | https://www.premiumstore.sk/pendrive/ |
| TV, audio a video > Počítače a príslušenstvo > Sieťové prvky > Konektory, zásuvky | 5 / 5 | https://www.premiumstore.sk/konektory--zasuvky/ |
| TV, audio a video > Mobily a tablety > Objektívy pre telefóny | 5 / 5 | https://www.premiumstore.sk/objektivy-pre-telefony/ |
| TV, audio a video > Počítače a príslušenstvo > PC periférie > Podložky pod myš | 5 / 5 | https://www.premiumstore.sk/podlozky-pod-mys/ |
| Domáce spotrebiče > Malé spotrebiče > Žehličky > Parné generátory | 5 / 5 | https://www.premiumstore.sk/parne-generatory/ |
| Zdravie a starostlivosť > Holiace strojčeky > Dámske holiace strojčeky a depilátory | 5 / 5 | https://www.premiumstore.sk/damske-holiace-strojceky-a-depilatory/ |
| TV, audio a video > Slúchadlá > Príslušenstvo pre slúchadlá | 5 / 5 | https://www.premiumstore.sk/prislusenstvo-pre-sluchadla/ |
| Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > G9&G4 | 5 / 5 | https://www.premiumstore.sk/g9-g4/ |
| Domáce spotrebiče > Malé spotrebiče > Upratovacie pomôcky > Košťata a metly | 5 / 5 | https://www.premiumstore.sk/kostata-a-metly/ |
| Domáce spotrebiče > Veľké spotrebiče > Sporáky a rúry > Príslušenstvo ku sporákom a rúram | 5 / 5 | https://www.premiumstore.sk/prislusenstvo-ku-sporakom-a-ruram/ |
| Domáce spotrebiče > Veľké spotrebiče > Sporáky a rúry > Stolové rúry | 5 / 5 | https://www.premiumstore.sk/stolove-rury/ |
| TV, audio a video > Digitálny príjem > DVB-T prijímače | 5 / 5 | https://www.premiumstore.sk/dvb-t-prijimace/ |
| TV, audio a video > Audio technika > HiFi systémy > Mikrosystémy | 5 / 5 | https://www.premiumstore.sk/mikrosystemy/ |
| Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Vykurovacie telesá > Vykurovacie telesá, radiátory > Teplovzdušné ventilátory | 5 / 5 | https://www.premiumstore.sk/teplovzdusne-ventilatory/ |
| Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Vykurovacie telesá > Vykurovacie telesá, radiátory > Konvektory | 5 / 5 | https://www.premiumstore.sk/konvektory/ |
| TV, audio a video > Počítače a príslušenstvo > Herné zariadenia > Príslušenstvo ku konzolám > PS5 - príslušenstvo | 5 / 5 | https://www.premiumstore.sk/ps5-prislusenstvo/ |
| TV, audio a video > Počítače a príslušenstvo > Príslušenstvo k notebookom > Ostatné príslušenstvo k notebookom | 5 / 5 | https://www.premiumstore.sk/ostatne-prislusenstvo-k-notebookom/ |
| TV, audio a video > Televízory > LED projektory | 5 / 5 | https://www.premiumstore.sk/led-projektory/ |
| TV, audio a video > Televízory > Príslušenstvo pre televízory | 5 / 5 | https://www.premiumstore.sk/prislusenstvo-pre-televizory/ |
| Šport, hračky a voľný čas > Hračky > Hračky pre kluky > Detské zbrane | 5 / 5 | https://www.premiumstore.sk/detske-zbrane/ |
| Fotovoltaika a energie > Nabíjačky > Nabíjačky NiCd, NiMh, NiZn | 5 / 5 | https://www.premiumstore.sk/nabijacky-nicd--nimh--nizn/ |
| Zdravie a starostlivosť > Chovateľské potreby > Pohlcovače zápachu | 5 / 5 | https://www.premiumstore.sk/pohlcovace-zapachu/ |
| Zdravie a starostlivosť > Chovateľské potreby > Hračky | 5 / 5 | https://www.premiumstore.sk/hracky-2/ |
| Zdravie a starostlivosť > Chovateľské potreby > Klece a ohrádky | 5 / 5 | https://www.premiumstore.sk/klece-a-ohradky/ |
| Auto-moto > Vybavenie auta > Autožiarovky > 24V | 5 / 5 | https://www.premiumstore.sk/24v/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > AB | 5 / 5 | https://www.premiumstore.sk/ab-2/ |
| Náradie a dielňa > Ochranné pomôcky a odevy > Kukly a štíty | 5 / 5 | https://www.premiumstore.sk/kukly-a-stity/ |
| Šport, hračky a voľný čas > Cyklistika > Pumpy na kolo | 5 / 5 | https://www.premiumstore.sk/pumpy-na-kolo/ |
| Fotovoltaika a energie > Fotovoltaika > Solárne nabíjačky | 5 / 5 | https://www.premiumstore.sk/solarne-nabijacky-2/ |
| Záhrada > Záhradné náradie > Lopaty | 5 / 5 | https://www.premiumstore.sk/lopaty/ |
| Záhrada > Záhradné náradie > Sady záhradného náradie | 5 / 5 | https://www.premiumstore.sk/sady-zahradneho-naradie/ |
| Auto-moto > Garáž, Dielňa, Servis > Čerpadlá | 5 / 5 | https://www.premiumstore.sk/cerpadla-3/ |
| Fotovoltaika a energie > Akumulátory a batérie > 9V | 5 / 5 | https://www.premiumstore.sk/9v/ |
| Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 30m | 5 / 5 | https://www.premiumstore.sk/dlzka-30m/ |
| TV, audio a video > Mobily a tablety > USB káble > USB A | 5 / 5 | https://www.premiumstore.sk/usb-a/ |
| TV, audio a video > Diaľkové ovládače > Televízne ovládače > Vestel | 5 / 5 | https://www.premiumstore.sk/vestel/ |
| TV, audio a video > Diaľkové ovládače > Televízne ovládače > Technika | 5 / 5 | https://www.premiumstore.sk/technika/ |
| Elektroinštalačný materiál > Inštalačné náradie a ostatné materiál > Organizéry | 5 / 5 | https://www.premiumstore.sk/organizery-2/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Mascom | 5 / 5 | https://www.premiumstore.sk/mascom-2/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Bensat | 5 / 5 | https://www.premiumstore.sk/bensat/ |
| TV, audio a video > Antény a satelity > PASIVNÍ PRVKY > Slučovače TV | 5 / 5 | https://www.premiumstore.sk/slucovace-tv/ |
| TV, audio a video > Antény a satelity > PASIVNÍ PRVKY > Anténní bleskojistky | 5 / 5 | https://www.premiumstore.sk/antenni-bleskojistky/ |
| Elektroinštalačný materiál > Vypínače, zásuvky, krabice > TV SAT zásuvky > Koncové | 5 / 5 | https://www.premiumstore.sk/koncove/ |
| TV, audio a video > Antény a satelity > Konektory > Kompresní a krimpovací | 5 / 5 | https://www.premiumstore.sk/kompresni-a-krimpovaci/ |
| Šport, hračky a voľný čas > Posilňovanie a fitness > Pomôcky na cvičenie > Pomôcky na cvičenie břicha | 5 / 5 | https://www.premiumstore.sk/pomocky-na-cvicenie-bricha/ |
| Šport, hračky a voľný čas > Posilňovanie a fitness > Pomôcky na cvičenie > Švihadlá | 5 / 5 | https://www.premiumstore.sk/svihadla/ |
| Záhrada > Záhradné doplnky > Pestovanie > Pěstební lampy | 5 / 5 | https://www.premiumstore.sk/pestebni-lampy/ |
| Záhrada > Záhradné stroje > Príslušenstvo | 5 / 5 | https://www.premiumstore.sk/prislusenstvo-9/ |
| Šport, hračky a voľný čas > Turistika > Kempingové stoly, stoličky, ležadlá | 5 / 5 | https://www.premiumstore.sk/kempingove-stoly--stolicky--lezadla/ |
| Náradie a dielňa > Mechanické náradie > Náradie pre ženy | 5 / 5 | https://www.premiumstore.sk/naradie-pre-zeny/ |
| Náradie a dielňa > SPÁJKOVACIE TECHNIKA > Plynové spájkovačky | 5 / 5 | https://www.premiumstore.sk/plynove-spajkovacky/ |
| Náradie a dielňa > Elektrické a AKU náradie > Pištole lepící a horúcovzdušné > Príslušenstvo pre tavné pištole | 5 / 5 | https://www.premiumstore.sk/prislusenstvo-pre-tavne-pistole/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly na stěnu > Držiaky na okenní rám | 5 / 5 | https://www.premiumstore.sk/drziaky-na-okenni-ram/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly na stěnu > Držiaky na střechu | 5 / 5 | https://www.premiumstore.sk/drziaky-na-strechu/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly sa třmenem > Univerzálne | 5 / 5 | https://www.premiumstore.sk/univerzalne/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Sťahováky | 5 / 5 | https://www.premiumstore.sk/stahovaky-4/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Těsnenie do okien a dverí | 5 / 5 | https://www.premiumstore.sk/tesnenie-do-okien-a-dveri/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Vrtáky > Vrtáky na kov | 5 / 5 | https://www.premiumstore.sk/vrtaky-na-kov/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce BMW > X1, X3, X4, X5, X6 | 5 / 5 | https://www.premiumstore.sk/x1--x3--x4--x5--x6/ |
| Elektroinštalačný materiál > Ventilačné technika > Vzduchovody > Kovové potrubie | 5 / 5 | https://www.premiumstore.sk/kovove-potrubie/ |
| Elektroinštalačný materiál > Ventilačné technika > Príslušenstvo k ventilátorům > Zpětné klapky, filtračné boxy | 5 / 5 | https://www.premiumstore.sk/zpetne-klapky--filtracne-boxy/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Držiaky stožárů > Na krovy | 5 / 5 | https://www.premiumstore.sk/na-krovy/ |
| TV, audio a video > Diaľkové ovládače > DVD > Samsung | 5 / 5 | https://www.premiumstore.sk/samsung-3/ |
| Náradie a dielňa > Mechanické náradie > Nýtování > Nity | 5 / 5 | https://www.premiumstore.sk/nity/ |
| Fotovoltaika a energie > Fotovoltaika > Solárne panely > Monokrystalické s rámem | 5 / 5 | https://www.premiumstore.sk/monokrystalicke-s-ramem/ |
| Šport, hračky a voľný čas > Posilňovanie a fitness > Činky a príslušenstvo > Činky obouruční, osy | 5 / 5 | https://www.premiumstore.sk/cinky-obourucni--osy/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > KAMERY 4v1 > 5.0 Mpix. | 5 / 5 | https://www.premiumstore.sk/5-0-mpix-2/ |
| Auto-moto > Vybavenie auta > Osviežovače vzduchu > Různé | 5 / 5 | https://www.premiumstore.sk/ruzne/ |
| Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône CAR CITY | 5 / 5 | https://www.premiumstore.sk/vone-car-city/ |
| Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône FRESH POINT | 5 / 5 | https://www.premiumstore.sk/vone-fresh-point/ |
| Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône LUCKY TOP | 5 / 5 | https://www.premiumstore.sk/vone-lucky-top/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové videorekordéry (NVR) > 8 kanálů | 5 / 5 | https://www.premiumstore.sk/8-kanalu/ |
| Šport, hračky a voľný čas > Mikroskopy > Digitálne fotoaparáty | 5 / 5 | https://www.premiumstore.sk/digitalne-fotoaparaty/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Alfa Romeo | 5 / 5 | https://www.premiumstore.sk/alfa-romeo/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Volkswagen | 5 / 5 | https://www.premiumstore.sk/volkswagen/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Fiat | 5 / 5 | https://www.premiumstore.sk/fiat/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Ford | 5 / 5 | https://www.premiumstore.sk/ford/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Citroën | 5 / 5 | https://www.premiumstore.sk/citroen/ |
| Fotovoltaika a energie > Napájacie zdroje > Sieťové adaptéry | 5 / 5 | https://www.premiumstore.sk/sietove-adaptery/ |
| Šport, hračky a voľný čas > Hudební nástroje > Digitálne piana | 5 / 5 | https://www.premiumstore.sk/digitalne-piana/ |
| Elektroinštalačný materiál > Vypínače, zásuvky, krabice > Elektroinštalačný krabice > Krabice zapuštěné (pod omítku) | 5 / 5 | https://www.premiumstore.sk/krabice-zapustene--pod-omitku/ |
| Náradie a dielňa > Kancelária a škola > Trezory | 5 / 5 | https://www.premiumstore.sk/trezory/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Podvozek > Podstavce > Príslušenstvo k podstavcům | 5 / 5 | https://www.premiumstore.sk/prislusenstvo-k-podstavcum/ |
| TV, audio a video > Antény a satelity > SET-TOP-BOXY > COMBO DVB-T2 H.265 HEVC/SAT | 5 / 5 | https://www.premiumstore.sk/combo-dvb-t2-h-265-hevc-sat/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Renault > Duster | 5 / 5 | https://www.premiumstore.sk/duster/ |
| Elektroinštalačný materiál > Osvetlenie > LED reflektory > Reflektory so senzorom | 5 / 5 | https://www.premiumstore.sk/reflektory-so-senzorom/ |
| Elektroinštalačný materiál > Elektromery a spínacie technika > Počítadla provozních hodin > Počítadla provozních hodin na DIN lištu | 5 / 5 | https://www.premiumstore.sk/pocitadla-provoznich-hodin-na-din-listu/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Malířství a natěračství > Valčeky | 5 / 5 | https://www.premiumstore.sk/valceky/ |
| Elektroinštalačný materiál > Ventilačné technika > Mřížky > Mřížka kruhová s nástavcem | 5 / 5 | https://www.premiumstore.sk/mrizka-kruhova-s-nastavcem/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Exteriér > Oprava karoserie | 5 / 5 | https://www.premiumstore.sk/oprava-karoserie/ |
| TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Reproduktory | 5 / 5 | https://www.premiumstore.sk/reproduktory-4/ |
| TV, audio a video > Audio technika > Slúchadlá > Bezdrôtové slúchadlá > Šport | 5 / 5 | https://www.premiumstore.sk/sport/ |
| TV, audio a video > Mobily a tablety > Obaly na telefóny > Vodotesné puzdro | 5 / 5 | https://www.premiumstore.sk/vodotesne-puzdro/ |
| TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Myši > Bezdrôtový | 5 / 5 | https://www.premiumstore.sk/bezdrotovy/ |
| Kreatívne technológie > 3D tlač > Diely | 5 / 5 | https://www.premiumstore.sk/diely/ |
| Zdravie a starostlivosť > Matka a dieťa > Elektronické príslušenstvo > Slúchadlá a reproduktory | 5 / 5 | https://www.premiumstore.sk/sluchadla-a-reproduktory/ |
| Profesionálna audio technika > Káble, konektory a redukcie > Káble > adaptéry | 5 / 5 | https://www.premiumstore.sk/adaptery-3/ |
| Profesionálna audio technika > Káble, konektory a redukcie > Konektory a redukcie > BNC | 5 / 5 | https://www.premiumstore.sk/bnc/ |
| Profesionálna audio technika > Reproduktory > stredové | 5 / 5 | https://www.premiumstore.sk/stredove/ |
| Profesionálna audio technika > Tlmočnícke, sprievodcovské a konferenčné systémy > Bezdrôtový, sprievodcovský systém > prijímače | 5 / 5 | https://www.premiumstore.sk/prijimace/ |
| Profesionálna audio technika > Reproduktory > Príslušenstvo k reproduktorom > bassreflexy | 5 / 5 | https://www.premiumstore.sk/bassreflexy/ |
| Profesionálna audio technika > Reproduktory > Príslušenstvo k reproduktorom > zosilňovacie moduly | 5 / 5 | https://www.premiumstore.sk/zosilnovacie-moduly/ |
| Profesionálna audio technika > Pódium, diskotéka, DJ > mikrofóny > kravatové | 5 / 5 | https://www.premiumstore.sk/kravatove/ |
| Elektroinštalačný materiál > Ostatné > 230V > Držiaky zásuviek | 5 / 5 | https://www.premiumstore.sk/drziaky-zasuviek/ |
| TV, audio a video > AV káble > Computer > UTP | 5 / 5 | https://www.premiumstore.sk/utp/ |
| Elektroinštalačný materiál > Ostatné > 230V > Vypínače a zásuvky > Do vlhka | 5 / 5 | https://www.premiumstore.sk/do-vlhka/ |
| Auto-moto > Karavany a obytná autá > Redukcie a adaptéry | 5 / 5 | https://www.premiumstore.sk/redukcie-a-adaptery-3/ |
| Auto-moto > Karavany a obytná autá > Batérie do karavanu | 5 / 5 | https://www.premiumstore.sk/baterie-do-karavanu-2/ |
| Profesionálna audio technika > Hudobné nástroje a príslušenstvo > MIDI kontroléry | 5 / 5 | https://www.premiumstore.sk/midi-kontrolery/ |
| TV, audio a video > Audio technika > Radiomagnetofóny | 3 / 4 | https://www.premiumstore.sk/radiomagnetofony/ |
| Auto-moto > Videorekordéry | 3 / 4 | https://www.premiumstore.sk/videorekordery/ |
| Auto-moto > Umývanie a čistenie | 2 / 4 | https://www.premiumstore.sk/umyvanie-a-cistenie/ |
| Auto-moto > Autorádiá > Autorádiá s CD | 4 / 4 | https://www.premiumstore.sk/autoradia-s-cd/ |
| TV, audio a video > Reproduktory > Subwoofery | 4 / 4 | https://www.premiumstore.sk/subwoofery/ |
| TV, audio a video > Audio technika > HiFi komponenty > CD prehrávače | 4 / 4 | https://www.premiumstore.sk/cd-prehravace/ |
| TV, audio a video > Počítače a príslušenstvo > Kalkulačky | 4 / 4 | https://www.premiumstore.sk/kalkulacky/ |
| TV, audio a video > Počítače a príslušenstvo > Projektory | 4 / 4 | https://www.premiumstore.sk/projektory-2/ |
| TV, audio a video > Počítače a príslušenstvo > Sieťové prvky > Extendery | 4 / 4 | https://www.premiumstore.sk/extendery/ |
| TV, audio a video > Počítače a príslušenstvo > Tlačiarne a skenery > Fototlačiarne | 4 / 4 | https://www.premiumstore.sk/fototlaciarne/ |
| TV, audio a video > Video technika > Prehrávače, rekordéry | 2 / 4 | https://www.premiumstore.sk/prehravace--rekordery/ |
| TV, audio a video > Video technika > Outdoor kamery | 4 / 4 | https://www.premiumstore.sk/outdoor-kamery/ |
| TV, audio a video > Mobily a tablety > Mobilné telefóny | 4 / 4 | https://www.premiumstore.sk/mobilne-telefony/ |
| TV, audio a video > Mobily a tablety > Stylusy pre tablety | 4 / 4 | https://www.premiumstore.sk/stylusy-pre-tablety/ |
| Domáce spotrebiče > Malé spotrebiče > Žehličky > Hodiny a budíky | 4 / 4 | https://www.premiumstore.sk/hodiny-a-budiky/ |
| Elektroinštalačný materiál > Osvetlenie > LED sviečky | 4 / 4 | https://www.premiumstore.sk/led-sviecky/ |
| Elektroinštalačný materiál > Osvetlenie > Patice, Redukcie | 4 / 4 | https://www.premiumstore.sk/patice--redukcie/ |
| Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > G9 patice | 4 / 4 | https://www.premiumstore.sk/g9-patice/ |
| TV, audio a video > Mobily a tablety > Príslušenstvo > Ochranné fólie pre mobilné telefóny | 4 / 4 | https://www.premiumstore.sk/ochranne-folie-pre-mobilne-telefony/ |
| Náradie a dielňa > Tašky a boxy na náradie | 4 / 4 | https://www.premiumstore.sk/tasky-a-boxy-na-naradie/ |
| Náradie a dielňa > Náradie > Pneumatické a hydraulické náradie | 2 / 4 | https://www.premiumstore.sk/pneumaticke-a-hydraulicke-naradie/ |
| Náradie a dielňa > Náradie > Elektrické náradie > Frézy a frézky | 2 / 4 | https://www.premiumstore.sk/frezy-a-frezky/ |
| Domáce spotrebiče > Veľké spotrebiče > Sporáky a rúry > Kombinované sporáky | 4 / 4 | https://www.premiumstore.sk/kombinovane-sporaky/ |
| Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Kuchynské teplomery | 4 / 4 | https://www.premiumstore.sk/kuchynske-teplomery/ |
| Domáce spotrebiče > Veľké spotrebiče > Chladničky > Príslušenstvo k chladničkám | 4 / 4 | https://www.premiumstore.sk/prislusenstvo-k-chladnickam/ |
| Domáce spotrebiče > Veľké spotrebiče > Chladničky > Americké chladničky | 4 / 4 | https://www.premiumstore.sk/americke-chladnicky/ |
| Zdravie a starostlivosť > Starostlivosť o zdravie > Vložky do bot | 4 / 4 | https://www.premiumstore.sk/vlozky-do-bot/ |
| Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Sušiaky | 4 / 4 | https://www.premiumstore.sk/susiaky/ |
| Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Termosky, termohrnčeky | 4 / 4 | https://www.premiumstore.sk/termosky--termohrnceky/ |
| Bezpečnosť a smart domácnosť > Smart domácnosť > Vypínače | 4 / 4 | https://www.premiumstore.sk/vypinace/ |
| TV, audio a video > Foto a optika > Kamery | 2 / 4 | https://www.premiumstore.sk/kamery-2/ |
| Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre Brúsky > 02 Brúsne a rezacie kotúče | 4 / 4 | https://www.premiumstore.sk/02-brusne-a-rezacie-kotuce/ |
| Šport, hračky a voľný čas > Elektrické surfy | 4 / 4 | https://www.premiumstore.sk/elektricke-surfy/ |
| Šport, hračky a voľný čas > Hračky > Autá, bagry, traktory pre deti | 4 / 4 | https://www.premiumstore.sk/auta--bagry--traktory-pre-deti/ |
| Šport, hračky a voľný čas > Hračky > Vonkajšie hračky | 2 / 4 | https://www.premiumstore.sk/vonkajsie-hracky/ |
| Šport, hračky a voľný čas > Hračky > Puzzle | 2 / 4 | https://www.premiumstore.sk/puzzle/ |
| Šport, hračky a voľný čas > Hračky > Edukatívne | 2 / 4 | https://www.premiumstore.sk/edukativne/ |
| Domáce spotrebiče > Malé spotrebiče > Meteostanice > Náhradné diely | 4 / 4 | https://www.premiumstore.sk/nahradne-diely-2/ |
| Zdravie a starostlivosť > Starostlivosť o dieťa > Ostatné detské tovar | 4 / 4 | https://www.premiumstore.sk/ostatne-detske-tovar/ |
| TV, audio a video > Mobily a tablety > Nositeľná elektronika > Lokátory | 4 / 4 | https://www.premiumstore.sk/lokatory/ |
| Náradie a dielňa > Náradie > Aku náradie > AKU Svetlá a svietidlá | 4 / 4 | https://www.premiumstore.sk/aku-svetla-a-svietidla/ |
| TV, audio a video > Audio technika > Mikrofóny > Štúdiové mikrofóny | 4 / 4 | https://www.premiumstore.sk/studiove-mikrofony/ |
| Domáce spotrebiče > Vstavané spotrebiče > Vstavané chladenie > Vstavané kombinované chladničky | 4 / 4 | https://www.premiumstore.sk/vstavane-kombinovane-chladnicky/ |
| Fotovoltaika a energie > Powerbanky | 4 / 4 | https://www.premiumstore.sk/powerbanky-3/ |
| Zdravie a starostlivosť > Chovateľské potreby > Prepravky | 4 / 4 | https://www.premiumstore.sk/prepravky/ |
| Auto-moto > Vybavenie auta > Odpojovač batérie | 4 / 4 | https://www.premiumstore.sk/odpojovac-baterie/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Golden Media | 4 / 4 | https://www.premiumstore.sk/golden-media/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Evolve | 4 / 4 | https://www.premiumstore.sk/evolve/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Ferguson | 4 / 4 | https://www.premiumstore.sk/ferguson-2/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Optex | 4 / 4 | https://www.premiumstore.sk/optex/ |
| Auto-moto > Bezpečnosť > Testery alkoholu | 4 / 4 | https://www.premiumstore.sk/testery-alkoholu-2/ |
| Elektroinštalačný materiál > Ističe a chrániče > Odpojovače batérií | 4 / 4 | https://www.premiumstore.sk/odpojovace-baterii-2/ |
| Fotovoltaika a energie > Fotovoltaika > Solárne batérie | 4 / 4 | https://www.premiumstore.sk/solarne-baterie-2/ |
| Záhrada > Brány a zvončeky > Pohony posuvné vrata | 4 / 4 | https://www.premiumstore.sk/pohony-posuvne-vrata/ |
| Auto-moto > Garáž, Dielňa, Servis > Kanystry | 4 / 4 | https://www.premiumstore.sk/kanystry/ |
| Auto-moto > Garáž, Dielňa, Servis > Hasicí prístroje | 4 / 4 | https://www.premiumstore.sk/hasici-pristroje-2/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Navijaky a zdviháky | 2 / 4 | https://www.premiumstore.sk/navijaky-a-zdvihaky/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > Atrapy kamer | 4 / 4 | https://www.premiumstore.sk/atrapy-kamer/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Káble | 4 / 4 | https://www.premiumstore.sk/kable/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Konektory | 4 / 4 | https://www.premiumstore.sk/konektory/ |
| Elektroinštalačný materiál > Rozvádzačové prvky > Distribuční bloky | 4 / 4 | https://www.premiumstore.sk/distribucni-bloky/ |
| Fotovoltaika a energie > Akumulátory a batérie > Li-Ion nabíjacie akumulátory | 4 / 4 | https://www.premiumstore.sk/li-ion-nabijacie-akumulatory/ |
| Elektroinštalačný materiál > Prepäťové ochrany > Koaxiálne ochrany | 4 / 4 | https://www.premiumstore.sk/koaxialne-ochrany/ |
| Bezpečnosť a smart domácnosť > Zabezpečenie > Hasící prístroje | 4 / 4 | https://www.premiumstore.sk/hasici-pristroje/ |
| Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 40m | 4 / 4 | https://www.premiumstore.sk/dlzka-40m/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Hyundai | 2 / 4 | https://www.premiumstore.sk/auto-koberce-hyundai/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Kia | 2 / 4 | https://www.premiumstore.sk/auto-koberce-kia/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Toyota | 2 / 4 | https://www.premiumstore.sk/auto-koberce-toyota/ |
| Náradie a dielňa > Elektronické súčiastky > Konektory | 4 / 4 | https://www.premiumstore.sk/konektory-3/ |
| Náradie a dielňa > Elektronické súčiastky > Arduino a moduly > Stavebnice Arduino | 4 / 4 | https://www.premiumstore.sk/stavebnice-arduino/ |
| Náradie a dielňa > Elektronické súčiastky > Arduino a moduly > Sety Arduino | 4 / 4 | https://www.premiumstore.sk/sety-arduino/ |
| TV, audio a video > Mobily a tablety > USB káble > Lightning | 4 / 4 | https://www.premiumstore.sk/lightning/ |
| Náradie a dielňa > Dielenské vybavenie > Přeprava a skladování | 2 / 4 | https://www.premiumstore.sk/preprava-a-skladovani/ |
| Náradie a dielňa > Dielenské vybavenie > Svářecí stroje | 4 / 4 | https://www.premiumstore.sk/svareci-stroje/ |
| TV, audio a video > Diaľkové ovládače > Televízne ovládače > TCL | 4 / 4 | https://www.premiumstore.sk/tcl/ |
| TV, audio a video > Diaľkové ovládače > Televízne ovládače > BEKO | 4 / 4 | https://www.premiumstore.sk/beko/ |
| TV, audio a video > Diaľkové ovládače > Televízne ovládače > GoSat | 4 / 4 | https://www.premiumstore.sk/gosat-3/ |
| Záhrada > Záhradné doplnky > Zavlažovanie > Rozprašovače | 4 / 4 | https://www.premiumstore.sk/rozprasovace/ |
| Záhrada > Záhradné doplnky > Zavlažovanie > Príslušenstvo | 4 / 4 | https://www.premiumstore.sk/prislusenstvo-12/ |
| Elektroinštalačný materiál > Inštalačné náradie a ostatné materiál > Kľúče na F konektory | 4 / 4 | https://www.premiumstore.sk/kluce-na-f-konektory/ |
| Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Adaptéry a redukcie > Cestovné adaptéry | 4 / 4 | https://www.premiumstore.sk/cestovne-adaptery-2/ |
| Fotovoltaika a energie > Fotovoltaika > Rozvádzače > Výhodné sety rozvaděč + komponenty | 4 / 4 | https://www.premiumstore.sk/vyhodne-sety-rozvadec-komponenty/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Tesla | 4 / 4 | https://www.premiumstore.sk/tesla-2/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Technisat | 4 / 4 | https://www.premiumstore.sk/technisat/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Showbox | 4 / 4 | https://www.premiumstore.sk/showbox/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Ineos | 4 / 4 | https://www.premiumstore.sk/ineos/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Golden Interstar | 4 / 4 | https://www.premiumstore.sk/golden-interstar/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Openbox | 4 / 4 | https://www.premiumstore.sk/openbox/ |
| TV, audio a video > Antény a satelity > PASIVNÍ PRVKY > LTE filtre | 4 / 4 | https://www.premiumstore.sk/lte-filtre/ |
| TV, audio a video > Počítače a príslušenstvo > Rackové skrine a príslušenstvo > Príslušenstvo > Chladenie | 4 / 4 | https://www.premiumstore.sk/chladenie/ |
| TV, audio a video > Antény a satelity > Konektory > Redukcie | 4 / 4 | https://www.premiumstore.sk/redukcie-2/ |
| TV, audio a video > Antény a satelity > Konektory > IEC konektory | 4 / 4 | https://www.premiumstore.sk/iec-konektory/ |
| Šport, hračky a voľný čas > Posilňovanie a fitness > Pomôcky na cvičenie > Závažia na kotníky a zápěstí | 4 / 4 | https://www.premiumstore.sk/zavazia-na-kotniky-a-zapesti/ |
| Elektroinštalačný materiál > Rozvádzačové prvky > Můstky na nosnou lištu > Nekryté můstky (IP00) | 4 / 4 | https://www.premiumstore.sk/nekryte-mustky--ip00/ |
| Elektroinštalačný materiál > Montážne skrine a rozvádzače > Rozvádzače samostatné > Rozvodnice NEPTUN IP65 | 4 / 4 | https://www.premiumstore.sk/rozvodnice-neptun-ip65/ |
| Elektroinštalačný materiál > Montážne skrine a rozvádzače > Rozvádzače samostatné > Rozvodnice AcquaPLUS IP65 | 4 / 4 | https://www.premiumstore.sk/rozvodnice-acquaplus-ip65/ |
| Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Odpojovače batérií | 4 / 4 | https://www.premiumstore.sk/odpojovace-baterii/ |
| Náradie a dielňa > Mechanické náradie > Kefy | 4 / 4 | https://www.premiumstore.sk/kefy-2/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Pokrývačské práce | 2 / 4 | https://www.premiumstore.sk/pokryvacske-prace/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Přeprava | 2 / 4 | https://www.premiumstore.sk/preprava/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Pilníky | 4 / 4 | https://www.premiumstore.sk/pilniky/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Závitníky, príslušenstvo | 4 / 4 | https://www.premiumstore.sk/zavitniky--prislusenstvo/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Vrtáky > Vrtáky do dreva | 4 / 4 | https://www.premiumstore.sk/vrtaky-do-dreva/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Príslušenstvo ku stožárům > Manžety | 4 / 4 | https://www.premiumstore.sk/manzety/ |
| Náradie a dielňa > Mechanické náradie > Kľúče > Nadstavce | 4 / 4 | https://www.premiumstore.sk/nadstavce/ |
| TV, audio a video > Antény a satelity > SATELITNÉ PRIJÍMAČE > Prijímače pre freeSAT | 4 / 4 | https://www.premiumstore.sk/prijimace-pre-freesat/ |
| TV, audio a video > Antény a satelity > ZOSILŇOVAČE > HLAVNÍ STANICE > ALCAD > Zdroje | 4 / 4 | https://www.premiumstore.sk/zdroje/ |
| Záhrada > Odpudzovače a lapače hmyzu > Odpudzovače ptáků | 4 / 4 | https://www.premiumstore.sk/odpudzovace-ptaku/ |
| Záhrada > Odpudzovače a lapače hmyzu > Odpudzovače a lapače slimáků | 4 / 4 | https://www.premiumstore.sk/odpudzovace-a-lapace-slimaku/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ QUIETLINE | 4 / 4 | https://www.premiumstore.sk/ventilatory-typ-quietline/ |
| Náradie a dielňa > Drobné náradie a príslušenstvo > Podložky a krúžky | 4 / 4 | https://www.premiumstore.sk/podlozky-a-kruzky/ |
| TV, audio a video > Antény a satelity > LNB konvertory > MonoTwin 2 TV | 4 / 4 | https://www.premiumstore.sk/monotwin-2-tv/ |
| Náradie a dielňa > Pneumatické náradie > Príslušenstvo k pneu náradie > Hadice | 4 / 4 | https://www.premiumstore.sk/hadice/ |
| Elektroinštalačný materiál > Elektromery a spínacie technika > Schodišťové automaty | 4 / 4 | https://www.premiumstore.sk/schodistove-automaty/ |
| Elektroinštalačný materiál > Elektromery a spínacie technika > Hladinvé spínače | 4 / 4 | https://www.premiumstore.sk/hladinve-spinace/ |
| Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Spínacie zásuvky > Smart zásuvky | 4 / 4 | https://www.premiumstore.sk/smart-zasuvky/ |
| Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Káblové spojky SHARK IP68 | 4 / 4 | https://www.premiumstore.sk/kablove-spojky-shark-ip68/ |
| TV, audio a video > Diaľkové ovládače > DVD > LG | 4 / 4 | https://www.premiumstore.sk/lg-2/ |
| Náradie a dielňa > Mechanické náradie > Nýtování > Nitovacie matice | 4 / 4 | https://www.premiumstore.sk/nitovacie-matice/ |
| Záhrada > Záhradné stroje > Čerpadlá > Palivová a olejová čerpadlá | 4 / 4 | https://www.premiumstore.sk/palivova-a-olejova-cerpadla/ |
| Náradie a dielňa > Mechanické náradie > Kliešte > Kliešte konektorové | 4 / 4 | https://www.premiumstore.sk/klieste-konektorove/ |
| Náradie a dielňa > Mechanické náradie > Kliešte > Kliešte kombinované | 4 / 4 | https://www.premiumstore.sk/klieste-kombinovane/ |
| Šport, hračky a voľný čas > Sportovní vybavenie > Hoverboardy | 4 / 4 | https://www.premiumstore.sk/hoverboardy/ |
| Elektroinštalačný materiál > Inštalačné príslušenstvo > Sťahovacie pásky > Plastové sťahovacie pásky | 4 / 4 | https://www.premiumstore.sk/plastove-stahovacie-pasky/ |
| Náradie a dielňa > Dielenské vybavenie > Kufre a organizéry na náradie > Kufre na náradie | 4 / 4 | https://www.premiumstore.sk/kufre-na-naradie/ |
| Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône CITY | 4 / 4 | https://www.premiumstore.sk/vone-city/ |
| Šport, hračky a voľný čas > Zdravotní potreby > Rehabilitační rotopedy | 4 / 4 | https://www.premiumstore.sk/rehabilitacni-rotopedy/ |
| Elektroinštalačný materiál > Vypínače, zásuvky, krabice > Svorky a svorkovnice > WAGO svorky | 4 / 4 | https://www.premiumstore.sk/wago-svorky/ |
| Elektroinštalačný materiál > Komponenty pre svietidlá > Objímky > Plastové objímky E14 | 4 / 4 | https://www.premiumstore.sk/plastove-objimky-e14/ |
| TV, audio a video > Príslušenstvo > Bezdrátové přenosy signálu | 2 / 4 | https://www.premiumstore.sk/bezdratove-prenosy-signalu/ |
| TV, audio a video > Antény a satelity > Servis > Aktualizace softvér | 4 / 4 | https://www.premiumstore.sk/aktualizace-softver/ |
| Fotovoltaika a energie > Akumulátory a batérie > NiMh nabíjacie akumulátory > AAA mikrotužkové | 4 / 4 | https://www.premiumstore.sk/aaa-mikrotuzkove-2/ |
| Elektroinštalačný materiál > Ventilačné technika > Gravitační žaluzie a klapky > Gravitační žaluzie s nástavcem (na omítku) | 4 / 4 | https://www.premiumstore.sk/gravitacni-zaluzie-s-nastavcem--na-omitku/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady DOSPEL > Ventilátory - typ STYL | 4 / 4 | https://www.premiumstore.sk/ventilatory-typ-styl/ |
| Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady DOSPEL | 2 / 4 | https://www.premiumstore.sk/ventilatory-podla-typove-rady-dospel-2/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Malířství a natěračství > Ochranné fólie | 4 / 4 | https://www.premiumstore.sk/ochranne-folie/ |
| Elektroinštalačný materiál > Ventilačné technika > Mřížky > Mřížka sa síťkou s nástavcem | 4 / 4 | https://www.premiumstore.sk/mrizka-sa-sitkou-s-nastavcem/ |
| Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VK | 4 / 4 | https://www.premiumstore.sk/ventilatory-typ-vk/ |
| TV, audio a video > Antény a satelity > CAM dekodéry a karty > CA moduly | 4 / 4 | https://www.premiumstore.sk/ca-moduly/ |
| Dróny a RC modely > Príslušenstvo pre drony > Pristátie | 4 / 4 | https://www.premiumstore.sk/pristatie/ |
| Šport, hračky a voľný čas > Outdoor > Svietidlá > UV svietidlá | 4 / 4 | https://www.premiumstore.sk/uv-svietidla/ |
| TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Chladenie počítača > Aktívne chladenie | 4 / 4 | https://www.premiumstore.sk/aktivne-chladenie/ |
| Šport, hračky a voľný čas > Príslušenstvo pre bicykle > Cyklopočítače | 4 / 4 | https://www.premiumstore.sk/cyklopocitace/ |
| Šport, hračky a voľný čas > Príslušenstvo pre bicykle > Senzory | 4 / 4 | https://www.premiumstore.sk/senzory-2/ |
| Šport, hračky a voľný čas > Príslušenstvo pre bicykle > Rukoväte | 4 / 4 | https://www.premiumstore.sk/rukovate/ |
| TV, audio a video > Mobily a tablety > Tvrdené sklo a fólie > Pre tablety | 4 / 4 | https://www.premiumstore.sk/pre-tablety/ |
| Domáce spotrebiče > Malé spotrebiče > Kuchynské príslušenstvo > Ostatné | 4 / 4 | https://www.premiumstore.sk/ostatne-19/ |
| TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Myši > Káblové | 4 / 4 | https://www.premiumstore.sk/kablove/ |
| Kreatívne technológie > 3D SLAM ručné skenery | 4 / 4 | https://www.premiumstore.sk/3d-slam-rucne-skenery/ |
| Profesionálna audio technika > Výpredaj | 4 / 4 | https://www.premiumstore.sk/vypredaj/ |
| Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Vysielačky | 4 / 4 | https://www.premiumstore.sk/vysielacky-3/ |
| Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Spájkovacie stanice | 4 / 4 | https://www.premiumstore.sk/spajkovacie-stanice/ |
| Profesionálna audio technika > Pódium, diskotéka, DJ > Gramofóny | 4 / 4 | https://www.premiumstore.sk/gramofony-3/ |
| Profesionálna audio technika > Car audio > Káble > signálové | 4 / 4 | https://www.premiumstore.sk/signalove/ |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Megafóny | 4 / 4 | https://www.premiumstore.sk/megafony/ |
| Profesionálna audio technika > Pódium, diskotéka, DJ > Statívy/držiaky > mikrofónové husí krk | 4 / 4 | https://www.premiumstore.sk/mikrofonove-husi-krk/ |
| Profesionálna audio technika > Reproduktory > Príslušenstvo k reproduktorom > zvukovody | 4 / 4 | https://www.premiumstore.sk/zvukovody/ |
| Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Meracie prístroje > Merače iné, detektory a testery | 4 / 4 | https://www.premiumstore.sk/merace-ine--detektory-a-testery/ |
| Profesionálna audio technika > Svetlá > Divadelné a profesionálne osvetlenie | 4 / 4 | https://www.premiumstore.sk/divadelne-a-profesionalne-osvetlenie/ |
| Profesionálna audio technika > Pódium, diskotéka, DJ > mixy a powermixy > Zónové mixy | 4 / 4 | https://www.premiumstore.sk/zonove-mixy/ |
| Elektroinštalačný materiál > Osvetlenie > LED osvetlenie > Kúpeľňové osvetlenie | 4 / 4 | https://www.premiumstore.sk/kupelnove-osvetlenie/ |
| TV, audio a video > AV káble > Anténa > Konektory a redukcie | 2 / 4 | https://www.premiumstore.sk/konektory-a-redukcie-2/ |
| Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Jednozásuvkové > Jednozásuvkové  400V | 4 / 4 | https://www.premiumstore.sk/jednozasuvkove--400v/ |
| Profesionálna audio technika > Hudobné nástroje a príslušenstvo > Gitarové ladičky | 4 / 4 | https://www.premiumstore.sk/gitarove-ladicky/ |
| TV, audio a video > Audio technika > Řečnické systémy | 3 / 3 | https://www.premiumstore.sk/recnicke-systemy/ |
| TV, audio a video > Audio technika > Gramofóny | 3 / 3 | https://www.premiumstore.sk/gramofony-2/ |
| Domáce spotrebiče > Malé spotrebiče > Mini chladničky | 3 / 3 | https://www.premiumstore.sk/mini-chladnicky/ |
| Auto-moto > Držiaky telefónov | 3 / 3 | https://www.premiumstore.sk/drziaky-telefonov/ |
| Auto-moto > Monitory automobilov | 3 / 3 | https://www.premiumstore.sk/monitory-automobilov/ |
| TV, audio a video > Počítače a príslušenstvo > Skartovačky a laminovačky | 3 / 3 | https://www.premiumstore.sk/skartovacky-a-laminovacky/ |
| TV, audio a video > Počítače a príslušenstvo > USB huby | 3 / 3 | https://www.premiumstore.sk/usb-huby-2/ |
| TV, audio a video > Počítače a príslušenstvo > Rozbočovače | 3 / 3 | https://www.premiumstore.sk/rozbocovace-2/ |
| TV, audio a video > Počítače a príslušenstvo > Sieťové prvky > 3G/LTE modemy | 3 / 3 | https://www.premiumstore.sk/3g-lte-modemy/ |
| TV, audio a video > Mobily a tablety > Zvukové adaptéry | 3 / 3 | https://www.premiumstore.sk/zvukove-adaptery/ |
| TV, audio a video > Počítače a príslušenstvo > PC periférie > USB huby | 3 / 3 | https://www.premiumstore.sk/usb-huby/ |
| TV, audio a video > Počítače a príslušenstvo > PC periférie > Webkamery | 3 / 3 | https://www.premiumstore.sk/webkamery/ |
| Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce > Polievkovary | 3 / 3 | https://www.premiumstore.sk/polievkovary/ |
| Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce > Sous-Vide | 3 / 3 | https://www.premiumstore.sk/sous-vide/ |
| Zdravie a starostlivosť > Čistenie pleti | 3 / 3 | https://www.premiumstore.sk/cistenie-pleti/ |
| Zdravie a starostlivosť > Starostlivosť o pleť | 3 / 3 | https://www.premiumstore.sk/starostlivost-o-plet/ |
| Zdravie a starostlivosť > Osobná starostlivosť | 3 / 3 | https://www.premiumstore.sk/osobna-starostlivost/ |
| Zdravie a starostlivosť > Predlžovanie rias | 3 / 3 | https://www.premiumstore.sk/predlzovanie-rias/ |
| Zdravie a starostlivosť > Starostlivosť o vlasy > Žehličky na vlasy a kulmy | 3 / 3 | https://www.premiumstore.sk/zehlicky-na-vlasy-a-kulmy/ |
| Domáce spotrebiče > Malé spotrebiče > Nádobie > Hrnčeky a šálky | 3 / 3 | https://www.premiumstore.sk/hrnceky-a-salky/ |
| Domáce spotrebiče > Malé spotrebiče > Žehličky > Žehličky na suché žehlenie | 3 / 3 | https://www.premiumstore.sk/zehlicky-na-suche-zehlenie/ |
| Domáce spotrebiče > Malé spotrebiče > Vysávače > Ručné vysávače | 3 / 3 | https://www.premiumstore.sk/rucne-vysavace-2/ |
| Elektroinštalačný materiál > Osvetlenie > Infra žiarovky | 3 / 3 | https://www.premiumstore.sk/infra-ziarovky/ |
| Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > Ostatné svetelné zdroje | 3 / 3 | https://www.premiumstore.sk/ostatne-svetelne-zdroje/ |
| TV, audio a video > Mobily a tablety > Príslušenstvo > Sim karty a kupóny | 3 / 3 | https://www.premiumstore.sk/sim-karty-a-kupony/ |
| TV, audio a video > Mobily a tablety > Príslušenstvo > HandsFree | 3 / 3 | https://www.premiumstore.sk/handsfree/ |
| Náradie a dielňa > Rezacie nástroje | 3 / 3 | https://www.premiumstore.sk/rezacie-nastroje/ |
| Náradie a dielňa > Skrutkovače | 3 / 3 | https://www.premiumstore.sk/skrutkovace/ |
| Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Lisy na potraviny | 3 / 3 | https://www.premiumstore.sk/lisy-na-potraviny/ |
| TV, audio a video > Príslušenstvo k TV, audio, video > Batérie a nabíjačky > Ceruzkové AA | 3 / 3 | https://www.premiumstore.sk/ceruzkove-aa/ |
| TV, audio a video > Digitálny príjem > Satelitné prijímače | 3 / 3 | https://www.premiumstore.sk/satelitne-prijimace/ |
| Zdravie a starostlivosť > Starostlivosť o zdravie > Ostatné starostlivosť o zdravie | 3 / 3 | https://www.premiumstore.sk/ostatne-starostlivost-o-zdravie/ |
| Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Zvlhčovače vzduchu | 3 / 3 | https://www.premiumstore.sk/zvlhcovace-vzduchu/ |
| Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Upratovanie | 3 / 3 | https://www.premiumstore.sk/upratovanie/ |
| Bezpečnosť a smart domácnosť > Smart záhrada | 3 / 3 | https://www.premiumstore.sk/smart-zahrada/ |
| Bezpečnosť a smart domácnosť > Smart domácnosť > Klávesnice | 3 / 3 | https://www.premiumstore.sk/klavesnice-3/ |
| Bezpečnosť a smart domácnosť > Smart domácnosť > Prenosné lednice, chladiace boxy | 3 / 3 | https://www.premiumstore.sk/prenosne-lednice--chladiace-boxy/ |
| TV, audio a video > Foto a optika > Batohy | 3 / 3 | https://www.premiumstore.sk/batohy/ |
| TV, audio a video > Foto a optika > Ďalekohľad | 3 / 3 | https://www.premiumstore.sk/dalekohlad/ |
| Šport, hračky a voľný čas > Hračky > Elektronické hračky | 3 / 3 | https://www.premiumstore.sk/elektronicke-hracky/ |
| Šport, hračky a voľný čas > Hračky > Zvieratká, farmy | 2 / 3 | https://www.premiumstore.sk/zvieratka--farmy/ |
| Elektroinštalačný materiál > Osvetlenie > Svietidlá > Kempingové | 3 / 3 | https://www.premiumstore.sk/kempingove/ |
| Elektroinštalačný materiál > Osvetlenie > Svietidlá > Vnútorné osvetlenie > Stropné a nástenná svietidlá | 3 / 3 | https://www.premiumstore.sk/stropne-a-nastenna-svietidla/ |
| Zdravie a starostlivosť > Masážne prístroje > Masážne prístroje na chrbát a šiji | 3 / 3 | https://www.premiumstore.sk/masazne-pristroje-na-chrbat-a-siji/ |
| Zdravie a starostlivosť > Starostlivosť o dieťa > Detské opatrovateľky (chůvičky) | 3 / 3 | https://www.premiumstore.sk/detske-opatrovatelky--chuvicky/ |
| TV, audio a video > Televízory > Soundbary k TV | 3 / 3 | https://www.premiumstore.sk/soundbary-k-tv/ |
| TV, audio a video > Audio technika > Mikrofóny > Ostatné | 3 / 3 | https://www.premiumstore.sk/ostatne-20/ |
| Domáce spotrebiče > Vstavané spotrebiče > Vstavané chladenie > Vstavané chladničky s mraziace priehradkou | 3 / 3 | https://www.premiumstore.sk/vstavane-chladnicky-s-mraziace-priehradkou/ |
| Fotovoltaika a energie > Nabíjačky > Ochrana batérií | 3 / 3 | https://www.premiumstore.sk/ochrana-baterii/ |
| Fotovoltaika a energie > Nabíjačky > Solárne nabíjačky | 3 / 3 | https://www.premiumstore.sk/solarne-nabijacky/ |
| Fotovoltaika a energie > Nabíjačky > Nabíjačky DC-DC | 3 / 3 | https://www.premiumstore.sk/nabijacky-dc-dc/ |
| Auto-moto > Elektrovozidlá > Elektrokolobežky | 3 / 3 | https://www.premiumstore.sk/elektrokolobezky/ |
| TV, audio a video > Počítače a príslušenstvo > Príslušenstvo k tabletom > Puzdrá pre tablety | 3 / 3 | https://www.premiumstore.sk/puzdra-pre-tablety/ |
| TV, audio a video > Počítače a príslušenstvo > Príslušenstvo k tabletom > Ostatné k tabletu | 3 / 3 | https://www.premiumstore.sk/ostatne-k-tabletu/ |
| Auto-moto > Vybavenie auta > Autožiarovky > 12V Excelite | 3 / 3 | https://www.premiumstore.sk/12v-excelite/ |
| Šport, hračky a voľný čas > Cyklistika > Cyklodržáky | 3 / 3 | https://www.premiumstore.sk/cyklodrzaky/ |
| Elektroinštalačný materiál > Ističe a chrániče > Ističe DC | 3 / 3 | https://www.premiumstore.sk/istice-dc/ |
| Záhrada > Brány a zvončeky > Pohony pre garážová vrata | 3 / 3 | https://www.premiumstore.sk/pohony-pre-garazova-vrata/ |
| Náradie a dielňa > MERACIE TECHNIKA > Meranie vody, plynu, vykurovanie, elektřiny | 3 / 3 | https://www.premiumstore.sk/meranie-vody--plynu--vykurovanie--elektriny/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Pamäťové karty | 3 / 3 | https://www.premiumstore.sk/pamatove-karty-3/ |
| Fotovoltaika a energie > Akumulátory a batérie > Solárne batérie | 3 / 3 | https://www.premiumstore.sk/solarne-baterie/ |
| TV, audio a video > Antény a satelity > ANTÉNY > Antény izbové | 3 / 3 | https://www.premiumstore.sk/anteny-izbove/ |
| Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 15m | 3 / 3 | https://www.premiumstore.sk/dlzka-15m/ |
| TV, audio a video > Antény a satelity > Satelitné príslušenstvo > Zosilňovače satelitné | 3 / 3 | https://www.premiumstore.sk/zosilnovace-satelitne/ |
| TV, audio a video > Mobily a tablety > USB káble > Micro USB káble | 3 / 3 | https://www.premiumstore.sk/micro-usb-kable/ |
| TV, audio a video > Diaľkové ovládače > Televízne ovládače > Thomson | 3 / 3 | https://www.premiumstore.sk/thomson-3/ |
| Záhrada > Záhradné doplnky > Zavlažovanie > Zavlažovače | 3 / 3 | https://www.premiumstore.sk/zavlazovace/ |
| Elektroinštalačný materiál > Vypínače, zásuvky, krabice > Rámečky | 3 / 3 | https://www.premiumstore.sk/ramecky/ |
| TV, audio a video > Antény a satelity > Koaxiálne káble > Vonkajšie | 3 / 3 | https://www.premiumstore.sk/vonkajsie/ |
| TV, audio a video > Antény a satelity > Koaxiálne káble > Koaxiálne průchodky | 3 / 3 | https://www.premiumstore.sk/koaxialne-pruchodky-2/ |
| TV, audio a video > TV stolíky a držiaky > Naklápacie držiaky | 3 / 3 | https://www.premiumstore.sk/naklapacie-drziaky/ |
| Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Drobné kuchynské spotrebiče | 3 / 3 | https://www.premiumstore.sk/drobne-kuchynske-spotrebice/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové kamery > 6.0 Mpix. | 3 / 3 | https://www.premiumstore.sk/6-0-mpix/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Vu+ | 3 / 3 | https://www.premiumstore.sk/vu/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Thomson | 3 / 3 | https://www.premiumstore.sk/thomson-2/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Polygon | 3 / 3 | https://www.premiumstore.sk/polygon/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > LinkBox | 3 / 3 | https://www.premiumstore.sk/linkbox/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Synaps | 3 / 3 | https://www.premiumstore.sk/synaps/ |
| Elektroinštalačný materiál > Káble a vodiče > Koaxiálne káble > Koaxiálne průchodky | 3 / 3 | https://www.premiumstore.sk/koaxialne-pruchodky/ |
| TV, audio a video > Antény a satelity > Konektory > F konektory | 3 / 3 | https://www.premiumstore.sk/f-konektory/ |
| Záhrada > Záhradné doplnky > Pestovanie > Travní směsi | 3 / 3 | https://www.premiumstore.sk/travni-smesi/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly na plastové okno | 3 / 3 | https://www.premiumstore.sk/konzoly-na-plastove-okno/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Uzemnenie, hromosvody > Zemnící tyče | 3 / 3 | https://www.premiumstore.sk/zemnici-tyce/ |
| Náradie a dielňa > Elektrické a AKU náradie > Nožnice AKU | 3 / 3 | https://www.premiumstore.sk/noznice-aku/ |
| Šport, hračky a voľný čas > Turistika > Stany | 3 / 3 | https://www.premiumstore.sk/stany/ |
| Fotovoltaika a energie > Akumulátory a batérie > Príslušenstvo > Očká, fastóny, dutinky, spojky > Sady konektorů | 3 / 3 | https://www.premiumstore.sk/sady-konektoru/ |
| Náradie a dielňa > Mechanické náradie > Náradie pre elektrikáře | 3 / 3 | https://www.premiumstore.sk/naradie-pre-elektrikare/ |
| Náradie a dielňa > Mechanické náradie > Sešívání | 3 / 3 | https://www.premiumstore.sk/sesivani/ |
| Náradie a dielňa > Mechanické náradie > Nože a nožnice > Ulamovací a zasouvací nože | 3 / 3 | https://www.premiumstore.sk/ulamovaci-a-zasouvaci-noze/ |
| Náradie a dielňa > SPÁJKOVACIE TECHNIKA > Odsávačky cínu | 3 / 3 | https://www.premiumstore.sk/odsavacky-cinu/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly na stěnu > Držiaky na bok lodžie | 3 / 3 | https://www.premiumstore.sk/drziaky-na-bok-lodzie/ |
| Náradie a dielňa > Mechanické náradie > Skrutkovače, bity, imbusy > Skrutkovače pre jemnou mechaniku | 3 / 3 | https://www.premiumstore.sk/skrutkovace-pre-jemnou-mechaniku/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Drátěné kefy | 3 / 3 | https://www.premiumstore.sk/dratene-kefy/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Vrtáky > Vrtáky do betonu | 3 / 3 | https://www.premiumstore.sk/vrtaky-do-betonu/ |
| Náradie a dielňa > Mechanické náradie > Kladivá, dláta, sekery > Kladivá | 3 / 3 | https://www.premiumstore.sk/kladiva/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Murárske práce > Pištole na kartuše | 3 / 3 | https://www.premiumstore.sk/pistole-na-kartuse/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Murárske práce > Špachtle, stierky | 3 / 3 | https://www.premiumstore.sk/spachtle--stierky/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Murárske práce > Hladidlá a stierky | 3 / 3 | https://www.premiumstore.sk/hladidla-a-stierky/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Nástroje > Lana a murárske křídy | 3 / 3 | https://www.premiumstore.sk/lana-a-murarske-kridy/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Príslušenstvo ku stožárům > Krytky stožárů | 3 / 3 | https://www.premiumstore.sk/krytky-stozaru/ |
| Náradie a dielňa > Mechanické náradie > Kľúče > Rúrkové kľúče | 3 / 3 | https://www.premiumstore.sk/rurkove-kluce/ |
| Elektroinštalačný materiál > Ventilačné technika > Pre rackové skrine | 3 / 3 | https://www.premiumstore.sk/pre-rackove-skrine/ |
| Elektroinštalačný materiál > Ventilačné technika > Pokojové rekuperační jednotky | 3 / 3 | https://www.premiumstore.sk/pokojove-rekuperacni-jednotky/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Podvozek > Ostatné | 3 / 3 | https://www.premiumstore.sk/ostatne-8/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ CF | 3 / 3 | https://www.premiumstore.sk/ventilatory-typ-cf/ |
| TV, audio a video > Antény a satelity > LNB konvertory > Monoblok 1 TV | 3 / 3 | https://www.premiumstore.sk/monoblok-1-tv/ |
| Náradie a dielňa > Pneumatické náradie > Príslušenstvo k pneu náradie > Rýchlospojky | 3 / 3 | https://www.premiumstore.sk/rychlospojky/ |
| Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Jednosložkové vyplňovací gély | 3 / 3 | https://www.premiumstore.sk/jednoslozkove-vyplnovaci-gely/ |
| Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Príslušenstvo pre káblové gelové spojky | 3 / 3 | https://www.premiumstore.sk/prislusenstvo-pre-kablove-gelove-spojky/ |
| Elektroinštalačný materiál > Ventilačné technika > Príslušenstvo k ventilátorům > Časová, doběhová relé | 3 / 3 | https://www.premiumstore.sk/casova--dobehova-rele/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Stožiare a trojnožky > Trojnožky na rovné střechy | 3 / 3 | https://www.premiumstore.sk/trojnozky-na-rovne-strechy/ |
| Záhrada > Sanitárna technika > Dávkovače mydlá | 3 / 3 | https://www.premiumstore.sk/davkovace-mydla/ |
| Náradie a dielňa > Mechanické náradie > Kliešte > Kliešte špeciálne | 3 / 3 | https://www.premiumstore.sk/klieste-specialne/ |
| Šport, hračky a voľný čas > Sportovní vybavenie > Bazény a vířivky | 3 / 3 | https://www.premiumstore.sk/bazeny-a-virivky/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové videorekordéry (NVR) > 4 kanály | 3 / 3 | https://www.premiumstore.sk/4-kanaly-2/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Volvo | 3 / 3 | https://www.premiumstore.sk/volvo/ |
| Fotovoltaika a energie > Napájacie zdroje > Zdroje pre LED pásky | 3 / 3 | https://www.premiumstore.sk/zdroje-pre-led-pasky/ |
| Fotovoltaika a energie > Napájacie zdroje > Pre mobily a tablety | 3 / 3 | https://www.premiumstore.sk/pre-mobily-a-tablety/ |
| Elektroinštalačný materiál > Komponenty pre svietidlá > Svítidlové spínače (kolébkové) > Spínače šňůrové - průchozí | 3 / 3 | https://www.premiumstore.sk/spinace-snurove-pruchozi/ |
| Elektroinštalačný materiál > Komponenty pre svietidlá > Svítidlové spínače (kolébkové) > Spínače šňůrové - s flexi kabelem | 3 / 3 | https://www.premiumstore.sk/spinace-snurove-s-flexi-kabelem/ |
| Elektroinštalačný materiál > Komponenty pre svietidlá > Svítidlové spínače (kolébkové) > Spínače šňůrové - nožní | 3 / 3 | https://www.premiumstore.sk/spinace-snurove-nozni/ |
| TV, audio a video > Príslušenstvo > AUDIO prevodníky | 3 / 3 | https://www.premiumstore.sk/audio-prevodniky/ |
| TV, audio a video > Príslušenstvo > HDMI rozbočovače | 3 / 3 | https://www.premiumstore.sk/hdmi-rozbocovace/ |
| Šport, hračky a voľný čas > Posilňovanie a fitness > Trenažéry > Spinningová kolesá | 3 / 3 | https://www.premiumstore.sk/spinningova-kolesa/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > HDCVI a 5v1 videorekordéry > 4 kanály | 3 / 3 | https://www.premiumstore.sk/4-kanaly/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Kotúče rezacie, pílové, brúsne > Kotúče lamelové na stopce | 3 / 3 | https://www.premiumstore.sk/kotuce-lamelove-na-stopce/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Kotúče rezacie, pílové, brúsne > Kotúče brúsne | 3 / 3 | https://www.premiumstore.sk/kotuce-brusne/ |
| Náradie a dielňa > Mechanické náradie > Príslušenstvo ku gola sadám > Adaptéry a príslušenstvo | 3 / 3 | https://www.premiumstore.sk/adaptery-a-prislusenstvo/ |
| Elektroinštalačný materiál > Ventilačné technika > Mřížky > Mřížka sa síťkou bez nadstavce | 3 / 3 | https://www.premiumstore.sk/mrizka-sa-sitkou-bez-nadstavce/ |
| Elektroinštalačný materiál > Komponenty pre svietidlá > Tlumivky, předřadníky, zapalovače > Magnetické předřadníky - tlumivky | 3 / 3 | https://www.premiumstore.sk/magneticke-predradniky-tlumivky/ |
| Náradie a dielňa > Mechanické náradie > Kliešte > Kliešte štiepacie > Kliešte štiepacie čelné | 3 / 3 | https://www.premiumstore.sk/klieste-stiepacie-celne/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > Domové videotelefony > Analogové | 3 / 3 | https://www.premiumstore.sk/analogove/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > Domové videotelefony > IP videotelefony | 3 / 3 | https://www.premiumstore.sk/ip-videotelefony/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Truhlářské práce > Svěrky | 3 / 3 | https://www.premiumstore.sk/sverky/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Píly > Pílové kotúče na dřevo | 3 / 3 | https://www.premiumstore.sk/pilove-kotuce-na-drevo/ |
| TV, audio a video > Mobily a tablety > Kable USB I > USB na Micro USB | 3 / 3 | https://www.premiumstore.sk/usb-na-micro-usb/ |
| TV, audio a video > Foto a optika > Selfie tyče > statívy > držiaky > Kruhové svetlá | 3 / 3 | https://www.premiumstore.sk/kruhove-svetla-2/ |
| Bezpečnosť a smart domácnosť > Osvetlenie > Dekoratívne osvetlenie | 3 / 3 | https://www.premiumstore.sk/dekorativne-osvetlenie-2/ |
| Bezpečnosť a smart domácnosť > Osvetlenie > Stojacie lampy | 3 / 3 | https://www.premiumstore.sk/stojacie-lampy/ |
| TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Stojany na slúchadlá | 3 / 3 | https://www.premiumstore.sk/stojany-na-sluchadla/ |
| Zdravie a starostlivosť > Prístroje na tvár > Iné | 3 / 3 | https://www.premiumstore.sk/ine/ |
| Zdravie a starostlivosť > Sonické zubné kefky > Príslušenstvo | 3 / 3 | https://www.premiumstore.sk/prislusenstvo-23/ |
| TV, audio a video > Mobily a tablety > Obaly na telefóny > Ochranné puzdrá pre tablety | 3 / 3 | https://www.premiumstore.sk/ochranne-puzdra-pre-tablety/ |
| TV, audio a video > Mobily a tablety > Selfie tyče > statívy > stojany > Adaptéry | 3 / 3 | https://www.premiumstore.sk/adaptery-2/ |
| TV, audio a video > Foto a optika > Skladovanie a preprava > Batohy | 3 / 3 | https://www.premiumstore.sk/batohy-2/ |
| TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Klávesnice > Bezdrôtový | 3 / 3 | https://www.premiumstore.sk/bezdrotovy-2/ |
| Zdravie a starostlivosť > Matka a dieťa > Odsávačky mlieka a masážne prístroje > Odsávačky mlieka | 3 / 3 | https://www.premiumstore.sk/odsavacky-mlieka/ |
| Šport, hračky a voľný čas > Outdoor > Batohy > tašky | 3 / 3 | https://www.premiumstore.sk/tasky-2/ |
| Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Náradie | 3 / 3 | https://www.premiumstore.sk/naradie-2/ |
| Profesionálna audio technika > Pódium, diskotéka, DJ > Prehrávače CD a MP3 | 3 / 3 | https://www.premiumstore.sk/prehravace-cd-a-mp3/ |
| Profesionálna audio technika > Pódium, diskotéka, DJ > transportné kufre a racky > príslušenstvo > rohy a profily | 3 / 3 | https://www.premiumstore.sk/rohy-a-profily/ |
| Profesionálna audio technika > Káble, konektory a redukcie > Káble > HDMI, DVI-D, SVHS | 3 / 3 | https://www.premiumstore.sk/hdmi--dvi-d--svhs/ |
| Profesionálna audio technika > Reproduktory > drivery | 3 / 3 | https://www.premiumstore.sk/drivery/ |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Zosilňovače hlasu | 3 / 3 | https://www.premiumstore.sk/zosilnovace-hlasu/ |
| Profesionálna audio technika > Pódium, diskotéka, DJ > Slúchadlá > do ucha | 3 / 3 | https://www.premiumstore.sk/do-ucha/ |
| Profesionálna audio technika > Reproduktory > Príslušenstvo k reproduktorom > transformátory | 3 / 3 | https://www.premiumstore.sk/transformatory/ |
| Profesionálna audio technika > Svetlá > UV svetlá a stroboskopy | 3 / 3 | https://www.premiumstore.sk/uv-svetla-a-stroboskopy/ |
| Profesionálna audio technika > Svetlá > Žiarovky | 3 / 3 | https://www.premiumstore.sk/ziarovky-2/ |
| Profesionálna audio technika > Pódium, diskotéka, DJ > mixy a powermixy > dj (MPX-) | 3 / 3 | https://www.premiumstore.sk/dj--mpx-/ |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Iné 100V zariadenia > monitorujúce zariadenia | 3 / 3 | https://www.premiumstore.sk/monitorujuce-zariadenia/ |
| Profesionálna audio technika > Svetlá > Špeciálne efekty a náplne > Výrobníky snehu | 3 / 3 | https://www.premiumstore.sk/vyrobniky-snehu/ |
| Elektroinštalačný materiál > Ostatné > 400V | 3 / 3 | https://www.premiumstore.sk/400v/ |
| Elektroinštalačný materiál > Ostatné > Káble > Koaxiálne | 3 / 3 | https://www.premiumstore.sk/koaxialne/ |
| Elektroinštalačný materiál > Ostatné > Izolačný materiál > Izolačné PVC pásky | 3 / 3 | https://www.premiumstore.sk/izolacne-pvc-pasky/ |
| Elektroinštalačný materiál > Osvetlenie > Priemyselné LED osvetlenie > LED lineárne osvetlenie | 3 / 3 | https://www.premiumstore.sk/led-linearne-osvetlenie/ |
| Domáce spotrebiče > Malé spotrebiče > Dezinfekčné lampy > Bezozónové | 3 / 3 | https://www.premiumstore.sk/bezozonove/ |
| Náradie a dielňa > Meracia technika > Laserové vodováhy | 3 / 3 | https://www.premiumstore.sk/laserove-vodovahy/ |
| Auto-moto > Karavany a obytná autá > Kempingový nábytok | 3 / 3 | https://www.premiumstore.sk/kempingovy-nabytok-2/ |
| Auto-moto > Karavany a obytná autá > Televízory na 12V | 3 / 3 | https://www.premiumstore.sk/televizory-na-12v-3/ |
| Auto-moto > Nosiče kol > Střešní nosiče | 3 / 3 | https://www.premiumstore.sk/stresni-nosice-2/ |
| TV, audio a video > Audio technika > Hi-Fi systémy | 2 / 2 | https://www.premiumstore.sk/hi-fi-systemy/ |
| TV, audio a video > Audio technika > Hlasové záznamníky | 2 / 2 | https://www.premiumstore.sk/hlasove-zaznamniky/ |
| Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Sirupy a fľaše pre výrobníky sódy | 2 / 2 | https://www.premiumstore.sk/sirupy-a-flase-pre-vyrobniky-sody/ |
| Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Čajová sitká | 2 / 2 | https://www.premiumstore.sk/cajova-sitka/ |
| Auto-moto > Nabíjačky do auta | 2 / 2 | https://www.premiumstore.sk/nabijacky-do-auta-2/ |
| TV, audio a video > Počítače a príslušenstvo > Stolové počítače | 2 / 2 | https://www.premiumstore.sk/stolove-pocitace/ |
| TV, audio a video > Počítače a príslušenstvo > Foto a kamery | 2 / 2 | https://www.premiumstore.sk/foto-a-kamery/ |
| TV, audio a video > Počítače a príslušenstvo > Klávesnice | 1 / 2 | https://www.premiumstore.sk/klavesnice-2/ |
| TV, audio a video > Počítače a príslušenstvo > Podložky | 2 / 2 | https://www.premiumstore.sk/podlozky-2/ |
| TV, audio a video > Počítače a príslušenstvo > Reproduktory | 2 / 2 | https://www.premiumstore.sk/reproduktory-3/ |
| TV, audio a video > Počítače a príslušenstvo > Napájacie zdroje | 1 / 2 | https://www.premiumstore.sk/napajacie-zdroje-4/ |
| TV, audio a video > Počítače a príslušenstvo > Pamäťové médiá > Dátové nosiče | 2 / 2 | https://www.premiumstore.sk/datove-nosice/ |
| TV, audio a video > Počítače a príslušenstvo > Sieťové prvky > Powerline | 2 / 2 | https://www.premiumstore.sk/powerline/ |
| TV, audio a video > Počítače a príslušenstvo > Sieťové prvky > WI-FI extendéry | 2 / 2 | https://www.premiumstore.sk/wi-fi-extendery/ |
| Domáce spotrebiče > Malé spotrebiče > Príslušenstvo k malým spotrebičom > Príslušenstvo ku grilom | 2 / 2 | https://www.premiumstore.sk/prislusenstvo-ku-grilom/ |
| Domáce spotrebiče > Malé spotrebiče > Príslušenstvo k malým spotrebičom > Vône do vysávače | 2 / 2 | https://www.premiumstore.sk/vone-do-vysavace/ |
| Domáce spotrebiče > Malé spotrebiče > Príslušenstvo k malým spotrebičom > Príslušenstvo ku vzduchotechnike | 2 / 2 | https://www.premiumstore.sk/prislusenstvo-ku-vzduchotechnike/ |
| TV, audio a video > Video technika > Prehrávače, rekordéry > DVD prehrávače | 1 / 2 | https://www.premiumstore.sk/dvd-prehravace/ |
| TV, audio a video > Mobily a tablety > GSM antény | 2 / 2 | https://www.premiumstore.sk/gsm-anteny/ |
| TV, audio a video > Mobily a tablety > Adaptéry Bluetooth | 2 / 2 | https://www.premiumstore.sk/adaptery-bluetooth/ |
| TV, audio a video > Počítače a príslušenstvo > PC periférie > Vypaľovačky a externé mechaniky | 2 / 2 | https://www.premiumstore.sk/vypalovacky-a-externe-mechaniky/ |
| Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce > Zaváracie hrnce | 2 / 2 | https://www.premiumstore.sk/zavaracie-hrnce/ |
| Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce > Variče vajec | 2 / 2 | https://www.premiumstore.sk/varice-vajec/ |
| Zdravie a starostlivosť > Starostlivosť o vlasy > Hrebene na vlasy | 2 / 2 | https://www.premiumstore.sk/hrebene-na-vlasy/ |
| Domáce spotrebiče > Vstavané spotrebiče > Digestory > Filtre do digestorov | 2 / 2 | https://www.premiumstore.sk/filtre-do-digestorov/ |
| Domáce spotrebiče > Malé spotrebiče > Nádobie > Pekáče a zapekacie misy | 2 / 2 | https://www.premiumstore.sk/pekace-a-zapekacie-misy/ |
| Domáce spotrebiče > Malé spotrebiče > Nádobie > Misy a misky | 2 / 2 | https://www.premiumstore.sk/misy-a-misky/ |
| Domáce spotrebiče > Malé spotrebiče > Žehličky > Šijacie stroje a príslušenstvo | 1 / 2 | https://www.premiumstore.sk/sijacie-stroje-a-prislusenstvo/ |
| Domáce spotrebiče > Malé spotrebiče > Žehličky > Cestovné žehličky | 2 / 2 | https://www.premiumstore.sk/cestovne-zehlicky/ |
| Domáce spotrebiče > Malé spotrebiče > Grily, pekárne, variče > Lávové a raclettové grily | 2 / 2 | https://www.premiumstore.sk/lavove-a-raclettove-grily/ |
| Elektroinštalačný materiál > Elektromery | 2 / 2 | https://www.premiumstore.sk/elektromery-2/ |
| Elektroinštalačný materiál > Osvetlenie > Zásuvky | 2 / 2 | https://www.premiumstore.sk/zasuvky/ |
| Elektroinštalačný materiál > Osvetlenie > Lampy a lampičky | 2 / 2 | https://www.premiumstore.sk/lampy-a-lampicky/ |
| Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > MR16 patice | 2 / 2 | https://www.premiumstore.sk/mr16-patice/ |
| Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > G4 patice | 2 / 2 | https://www.premiumstore.sk/g4-patice/ |
| Náradie a dielňa > Spájkovacia technika | 2 / 2 | https://www.premiumstore.sk/spajkovacia-technika/ |
| Náradie a dielňa > Náradie > Svietidlá | 2 / 2 | https://www.premiumstore.sk/svietidla-2/ |
| Náradie a dielňa > Náradie > Upratovanie, čistenie a umývanie | 1 / 2 | https://www.premiumstore.sk/upratovanie--cistenie-a-umyvanie/ |
| Náradie a dielňa > Náradie > Elektrické náradie > Tavné a horúcovzdušné pištole | 2 / 2 | https://www.premiumstore.sk/tavne-a-horucovzdusne-pistole/ |
| Náradie a dielňa > Náradie > Elektrické náradie > Spájky | 2 / 2 | https://www.premiumstore.sk/spajky/ |
| Záhrada > Záhradné potreby > Zavlažovanie | 1 / 2 | https://www.premiumstore.sk/zavlazovanie/ |
| Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Kuchynské minútky | 2 / 2 | https://www.premiumstore.sk/kuchynske-minutky/ |
| Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Cedníky, Lieviky, Sitá | 2 / 2 | https://www.premiumstore.sk/cedniky--lieviky--sita/ |
| Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Brousky na nože | 2 / 2 | https://www.premiumstore.sk/brousky-na-noze/ |
| Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Vývrtky a otvárače | 2 / 2 | https://www.premiumstore.sk/vyvrtky-a-otvarace/ |
| Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Škrabky a strúhadlá | 2 / 2 | https://www.premiumstore.sk/skrabky-a-struhadla/ |
| Zdravie a starostlivosť > Starostlivosť o zdravie > Teplomery | 2 / 2 | https://www.premiumstore.sk/teplomery/ |
| Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Vykurovacie telesá > Vykurovacie telesá, radiátory > Olejové radiátory | 2 / 2 | https://www.premiumstore.sk/olejove-radiatory/ |
| TV, audio a video > Počítače a príslušenstvo > Herné zariadenia > Herné konzoly > Nintendo - konzoly | 2 / 2 | https://www.premiumstore.sk/nintendo-konzoly/ |
| TV, audio a video > Počítače a príslušenstvo > Herné zariadenia > Herné konzoly > PlayStation 5 - konzoly | 2 / 2 | https://www.premiumstore.sk/playstation-5-konzoly/ |
| TV, audio a video > Počítače a príslušenstvo > Herné zariadenia > Konzolové hry > PS5 - hry | 2 / 2 | https://www.premiumstore.sk/ps5-hry/ |
| Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Elektrické nože | 2 / 2 | https://www.premiumstore.sk/elektricke-noze/ |
| Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Efekty a dekorácie | 1 / 2 | https://www.premiumstore.sk/efekty-a-dekoracie/ |
| Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kuchynské riad | 1 / 2 | https://www.premiumstore.sk/kuchynske-riad/ |
| Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre Sponkovačky, nastreľovačky | 2 / 2 | https://www.premiumstore.sk/prislusenstvo-pre-sponkovacky--nastrelovacky/ |
| Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre Píly | 1 / 2 | https://www.premiumstore.sk/prislusenstvo-pre-pily/ |
| Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo Vŕtačky, skrutkovače, uťahováky | 1 / 2 | https://www.premiumstore.sk/prislusenstvo-vrtacky--skrutkovace--utahovaky/ |
| Bezpečnosť a smart domácnosť > Smart domácnosť > Smart zabezpečenie > Smart senzory | 2 / 2 | https://www.premiumstore.sk/smart-senzory/ |
| TV, audio a video > Foto a optika > Príslušenstvo > Batérie k fotoaparátom | 1 / 2 | https://www.premiumstore.sk/baterie-k-fotoaparatom/ |
| Náradie a dielňa > Náradie > Ručné náradie > Kľúče | 1 / 2 | https://www.premiumstore.sk/kluce/ |
| Náradie a dielňa > Náradie > Ručné náradie > Bity + sety sa skrutkovačom alebo račňou | 2 / 2 | https://www.premiumstore.sk/bity-sety-sa-skrutkovacom-alebo-racnou/ |
| Náradie a dielňa > Náradie > Ručné náradie > Gola sady, račne a hlavice | 2 / 2 | https://www.premiumstore.sk/gola-sady--racne-a-hlavice/ |
| Šport, hračky a voľný čas > Oblečenie a obuv | 1 / 2 | https://www.premiumstore.sk/oblecenie-a-obuv/ |
| Šport, hračky a voľný čas > Elektrické kolobežky | 2 / 2 | https://www.premiumstore.sk/elektricke-kolobezky/ |
| Šport, hračky a voľný čas > Hračky > Autá, letadla, lode | 2 / 2 | https://www.premiumstore.sk/auta--letadla--lode/ |
| Šport, hračky a voľný čas > Hračky > Plyšové hračky | 1 / 2 | https://www.premiumstore.sk/plysove-hracky/ |
| Šport, hračky a voľný čas > Hračky > Detské hudební nástroje | 1 / 2 | https://www.premiumstore.sk/detske-hudebni-nastroje/ |
| TV, audio a video > Počítače a príslušenstvo > Herné zariadenia > Príslušenstvo ku konzolám > Nintendo Switch - príslušenstvo | 2 / 2 | https://www.premiumstore.sk/nintendo-switch-prislusenstvo/ |
| TV, audio a video > Počítače a príslušenstvo > Herné zariadenia > Príslušenstvo ku konzolám > Nintendo DS, 2DS, 3DS - príslušenstvo | 2 / 2 | https://www.premiumstore.sk/nintendo-ds--2ds--3ds-prislusenstvo/ |
| Domáce spotrebiče > Malé spotrebiče > Meteostanice > Dataloggery | 2 / 2 | https://www.premiumstore.sk/dataloggery/ |
| TV, audio a video > Počítače a príslušenstvo > Herné zariadenia > Herné ovládače > Volanty | 2 / 2 | https://www.premiumstore.sk/volanty/ |
| Zdravie a starostlivosť > Parfumy a kozmetika > Pánske parfumy | 1 / 2 | https://www.premiumstore.sk/panske-parfumy/ |
| Zdravie a starostlivosť > Parfumy a kozmetika > Vlasová kozmetika | 1 / 2 | https://www.premiumstore.sk/vlasova-kozmetika/ |
| Elektroinštalačný materiál > Osvetlenie > Svietidlá > Montážne a nabíjacie svetla | 2 / 2 | https://www.premiumstore.sk/montazne-a-nabijacie-svetla/ |
| Elektroinštalačný materiál > Osvetlenie > Svietidlá > Vnútorné osvetlenie > SMART osvetlenie | 2 / 2 | https://www.premiumstore.sk/smart-osvetlenie/ |
| Zdravie a starostlivosť > Masážne prístroje > Masážne prístroje na celé telo | 2 / 2 | https://www.premiumstore.sk/masazne-pristroje-na-cele-telo/ |
| TV, audio a video > Počítače a príslušenstvo > Káble pre IT > USB káble | 2 / 2 | https://www.premiumstore.sk/usb-kable/ |
| Fotovoltaika a energie > Fotovoltaické panely | 2 / 2 | https://www.premiumstore.sk/fotovoltaicke-panely/ |
| Náradie a dielňa > Náradie > Elektrické náradie > Frézy a frézky > Príslušenstvo | 2 / 2 | https://www.premiumstore.sk/prislusenstvo-3/ |
| Auto-moto > Vybavenie auta > Ventilátory | 2 / 2 | https://www.premiumstore.sk/ventilatory-2/ |
| Auto-moto > Vybavenie auta > Autožiarovky > CSP LED žiarovky | 2 / 2 | https://www.premiumstore.sk/csp-led-ziarovky/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Cabletech | 2 / 2 | https://www.premiumstore.sk/cabletech/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Dreambox | 2 / 2 | https://www.premiumstore.sk/dreambox-2/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Skyworth | 2 / 2 | https://www.premiumstore.sk/skyworth/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Humax | 2 / 2 | https://www.premiumstore.sk/humax-2/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Maxxo | 2 / 2 | https://www.premiumstore.sk/maxxo/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Solight | 2 / 2 | https://www.premiumstore.sk/solight/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Fuba | 2 / 2 | https://www.premiumstore.sk/fuba/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Fte | 2 / 2 | https://www.premiumstore.sk/fte/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Medialink | 2 / 2 | https://www.premiumstore.sk/medialink/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Edision | 2 / 2 | https://www.premiumstore.sk/edision/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > New Digital | 2 / 2 | https://www.premiumstore.sk/new-digital/ |
| TV, audio a video > Diaľkové ovládače > Ovládače k DVB-T2 > Philips | 2 / 2 | https://www.premiumstore.sk/philips-5/ |
| Náradie a dielňa > Ochranné pomôcky a odevy > Okuliare | 2 / 2 | https://www.premiumstore.sk/okuliare/ |
| Šport, hračky a voľný čas > Cyklistika > Stojany a držiaky na kolesá | 2 / 2 | https://www.premiumstore.sk/stojany-a-drziaky-na-kolesa/ |
| Elektroinštalačný materiál > Ističe a chrániče > Motorové ističe | 2 / 2 | https://www.premiumstore.sk/motorove-istice/ |
| Záhrada > Brány a zvončeky > Poštovní schránky | 2 / 2 | https://www.premiumstore.sk/postovni-schranky/ |
| Záhrada > Záhradné náradie > Hrable | 2 / 2 | https://www.premiumstore.sk/hrable/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Testery | 2 / 2 | https://www.premiumstore.sk/testery-3/ |
| Fotovoltaika a energie > Záložné zdroje a UPS > Hybridní zdroje energia | 2 / 2 | https://www.premiumstore.sk/hybridni-zdroje-energia/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > Akční kamery | 2 / 2 | https://www.premiumstore.sk/akcni-kamery/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Prevodníky | 2 / 2 | https://www.premiumstore.sk/prevodniky/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Nálepky, knihy | 2 / 2 | https://www.premiumstore.sk/nalepky--knihy/ |
| Elektroinštalačný materiál > Rozvádzačové prvky > Prepojovacie lišty > Príslušenstvo pre prepojovacie lišty | 2 / 2 | https://www.premiumstore.sk/prislusenstvo-pre-prepojovacie-listy/ |
| Fotovoltaika a energie > Akumulátory a batérie > D veľké monočlánky | 2 / 2 | https://www.premiumstore.sk/d-velke-monoclanky/ |
| Fotovoltaika a energie > Akumulátory a batérie > Batérie do AKU náradie | 2 / 2 | https://www.premiumstore.sk/baterie-do-aku-naradie/ |
| Záhrada > Záhradné doplnky > Přenosná ohniště | 2 / 2 | https://www.premiumstore.sk/prenosna-ohniste/ |
| Záhrada > Záhradné doplnky > Bazény a doplnky > Záhradné bazény | 2 / 2 | https://www.premiumstore.sk/zahradne-bazeny/ |
| TV, audio a video > Antény a satelity > Anténne zdroje | 2 / 2 | https://www.premiumstore.sk/antenne-zdroje/ |
| TV, audio a video > Antény a satelity > Aktívne a pasívne prvky | 2 / 2 | https://www.premiumstore.sk/aktivne-a-pasivne-prvky/ |
| TV, audio a video > Antény a satelity > Anténne držiaky | 2 / 2 | https://www.premiumstore.sk/antenne-drziaky/ |
| Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 1,4m | 2 / 2 | https://www.premiumstore.sk/dlzka-1-4m/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Nissan | 1 / 2 | https://www.premiumstore.sk/auto-koberce-nissan/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Dacia | 1 / 2 | https://www.premiumstore.sk/auto-koberce-dacia/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Opel | 1 / 2 | https://www.premiumstore.sk/auto-koberce-opel/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Citroën | 1 / 2 | https://www.premiumstore.sk/auto-koberce-citroen/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Ford | 1 / 2 | https://www.premiumstore.sk/auto-koberce-ford/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Volvo | 1 / 2 | https://www.premiumstore.sk/auto-koberce-volvo/ |
| TV, audio a video > Antény a satelity > Satelitné príslušenstvo > DiSEqC prepínače | 1 / 2 | https://www.premiumstore.sk/diseqc-prepinace/ |
| Náradie a dielňa > Dielenské vybavenie > Přísavky manipulační | 2 / 2 | https://www.premiumstore.sk/prisavky-manipulacni/ |
| Náradie a dielňa > Dielenské vybavenie > Pytle na odpad | 2 / 2 | https://www.premiumstore.sk/pytle-na-odpad/ |
| TV, audio a video > Diaľkové ovládače > Univerzálne ovládače > Samsung | 2 / 2 | https://www.premiumstore.sk/samsung/ |
| TV, audio a video > Diaľkové ovládače > Televízne ovládače > Luxtronic | 2 / 2 | https://www.premiumstore.sk/luxtronic/ |
| TV, audio a video > Diaľkové ovládače > Televízne ovládače > Kruger & Matz | 2 / 2 | https://www.premiumstore.sk/kruger-matz/ |
| Záhrada > Záhradné doplnky > Zavlažovanie > Postrekovače | 2 / 2 | https://www.premiumstore.sk/postrekovace/ |
| TV, audio a video > AV káble > Dvojlinky | 2 / 2 | https://www.premiumstore.sk/dvojlinky-2/ |
| TV, audio a video > TV stolíky a držiaky > Pre prohnuté televízory | 2 / 2 | https://www.premiumstore.sk/pre-prohnute-televizory/ |
| TV, audio a video > TV stolíky a držiaky > Pevné | 2 / 2 | https://www.premiumstore.sk/pevne/ |
| TV, audio a video > TV stolíky a držiaky > Držiaky projektorů | 2 / 2 | https://www.premiumstore.sk/drziaky-projektoru/ |
| TV, audio a video > TV stolíky a držiaky > Fixné držiaky | 2 / 2 | https://www.premiumstore.sk/fixne-drziaky/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové kamery > 1.0 Mpix. (HD) / 1.3 Mpix. | 2 / 2 | https://www.premiumstore.sk/1-0-mpix-hd--1-3-mpix/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové kamery > PTZ kamery | 2 / 2 | https://www.premiumstore.sk/ptz-kamery/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Skytec | 2 / 2 | https://www.premiumstore.sk/skytec/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Vantage | 2 / 2 | https://www.premiumstore.sk/vantage/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Ostatné | 2 / 2 | https://www.premiumstore.sk/ostatne-10/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > DIWAY | 2 / 2 | https://www.premiumstore.sk/diway-2/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Medialink | 2 / 2 | https://www.premiumstore.sk/medialink-2/ |
| Elektroinštalačný materiál > Káble a vodiče > Koaxiálne káble > Vonkajšie | 2 / 2 | https://www.premiumstore.sk/vonkajsie-2/ |
| TV, audio a video > Antény a satelity > Konektory > F spojky | 2 / 2 | https://www.premiumstore.sk/f-spojky/ |
| Elektroinštalačný materiál > Montážne skrine a rozvádzače > Rozvádzače samostatné > Ostatné skrine a rozvodnice | 2 / 2 | https://www.premiumstore.sk/ostatne-skrine-a-rozvodnice/ |
| Náradie a dielňa > Chémia > Chémia pre pájení | 2 / 2 | https://www.premiumstore.sk/chemia-pre-pajeni-2/ |
| Náradie a dielňa > Elektrické a AKU náradie > Vŕtačky, akušroubováky | 2 / 2 | https://www.premiumstore.sk/vrtacky--akusroubovaky/ |
| Náradie a dielňa > Elektrické a AKU náradie > Píly | 1 / 2 | https://www.premiumstore.sk/pily-2/ |
| Náradie a dielňa > Elektrické a AKU náradie > Príslušenstvo k vrtačkám | 1 / 2 | https://www.premiumstore.sk/prislusenstvo-k-vrtackam/ |
| Záhrada > Záhradné stroje > Vysokotlakové umývačky | 2 / 2 | https://www.premiumstore.sk/vysokotlakove-umyvacky/ |
| Záhrada > Záhradné stroje > Postrekovače | 2 / 2 | https://www.premiumstore.sk/postrekovace-2/ |
| Šport, hračky a voľný čas > Turistika > Hojdacie siete | 2 / 2 | https://www.premiumstore.sk/hojdacie-siete/ |
| Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Izolačné pásky | 2 / 2 | https://www.premiumstore.sk/izolacne-pasky-3/ |
| Fotovoltaika a energie > Akumulátory a batérie > Príslušenstvo > Boxy a obaly na akumulátory | 2 / 2 | https://www.premiumstore.sk/boxy-a-obaly-na-akumulatory/ |
| Fotovoltaika a energie > Fotovoltaika > Konektory pre fotovoltaiku > Káblová očká | 2 / 2 | https://www.premiumstore.sk/kablova-ocka-2/ |
| Náradie a dielňa > Mechanické náradie > Vodo-topo | 1 / 2 | https://www.premiumstore.sk/vodo-topo/ |
| Náradie a dielňa > Mechanické náradie > Nože a nožnice > Ostatné nože | 2 / 2 | https://www.premiumstore.sk/ostatne-noze/ |
| Náradie a dielňa > Mechanické náradie > Nože a nožnice > Náhradné břity | 2 / 2 | https://www.premiumstore.sk/nahradne-brity/ |
| TV, audio a video > Antény a satelity > Satelitné antény > Príslušenstvo | 2 / 2 | https://www.premiumstore.sk/prislusenstvo-8/ |
| Náradie a dielňa > Elektrické a AKU náradie > Pištole lepící a horúcovzdušné > Horúcovzdušné pištole | 2 / 2 | https://www.premiumstore.sk/horucovzdusne-pistole/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly sa třmenem > Anténní ráhna | 2 / 2 | https://www.premiumstore.sk/antenni-rahna/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Sponkovačky a nastreľovačky | 1 / 2 | https://www.premiumstore.sk/sponkovacky-a-nastrelovacky/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Upínacie prostriedky | 1 / 2 | https://www.premiumstore.sk/upinacie-prostriedky/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Potrubie > Odhrotování | 2 / 2 | https://www.premiumstore.sk/odhrotovani/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Potrubie > Těsnění | 2 / 2 | https://www.premiumstore.sk/tesneni/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Potrubie > Řezáky | 2 / 2 | https://www.premiumstore.sk/rezaky/ |
| Náradie a dielňa > Mechanické náradie > Skrutkovače, bity, imbusy > Skrutkovače křížové | 2 / 2 | https://www.premiumstore.sk/skrutkovace-krizove/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Nožnice | 1 / 2 | https://www.premiumstore.sk/noznice/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Vrtáky > Vrtáky do sklá | 2 / 2 | https://www.premiumstore.sk/vrtaky-do-skla/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Murárske práce > Pištole na mont. pěnu | 2 / 2 | https://www.premiumstore.sk/pistole-na-mont--penu/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Príslušenstvo ku stožárům > Kolena a průchodky | 2 / 2 | https://www.premiumstore.sk/kolena-a-pruchodky/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Príslušenstvo ku stožárům > Tašky s průchodem pre stožár | 2 / 2 | https://www.premiumstore.sk/tasky-s-pruchodem-pre-stozar/ |
| Auto-moto > Vybavenie auta > Autopotahy > Univerzálne autopotahy - dvě sedadla | 1 / 2 | https://www.premiumstore.sk/univerzalne-autopotahy-dve-sedadla/ |
| Auto-moto > Vybavenie auta > Autopotahy > Univerzálne autopotahy - dodávky | 1 / 2 | https://www.premiumstore.sk/univerzalne-autopotahy-dodavky/ |
| Náradie a dielňa > Mechanické náradie > Kľúče > Momentové kľúče | 2 / 2 | https://www.premiumstore.sk/momentove-kluce/ |
| Náradie a dielňa > Mechanické náradie > Kľúče > Nastaviteľné kľúče | 2 / 2 | https://www.premiumstore.sk/nastavitelne-kluce/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Volkswagen > Crafter | 2 / 2 | https://www.premiumstore.sk/crafter/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Mercedes-Benz > Sprinter | 2 / 2 | https://www.premiumstore.sk/sprinter/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Mercedes-Benz > Třída C | 2 / 2 | https://www.premiumstore.sk/trida-c/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Jeep > Cherokee | 2 / 2 | https://www.premiumstore.sk/cherokee/ |
| TV, audio a video > Antény a satelity > Zdroje a výhybky > Výhybky | 2 / 2 | https://www.premiumstore.sk/vyhybky/ |
| Elektroinštalačný materiál > Ventilačné technika > Vzduchovody > Flexipotrubí kruhové | 2 / 2 | https://www.premiumstore.sk/flexipotrubi-kruhove/ |
| Elektroinštalačný materiál > Ventilačné technika > Vzduchovody > Flexipotrubí ploché | 2 / 2 | https://www.premiumstore.sk/flexipotrubi-ploche/ |
| Záhrada > Odpudzovače a lapače hmyzu > Odpudzovače psů, mačiek a zvěře | 2 / 2 | https://www.premiumstore.sk/odpudzovace-psu--maciek-a-zvere/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VN | 2 / 2 | https://www.premiumstore.sk/ventilatory-typ-vn/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ MAO1 | 2 / 2 | https://www.premiumstore.sk/ventilatory-typ-mao1/ |
| Náradie a dielňa > Drobné náradie a príslušenstvo > Zámky | 2 / 2 | https://www.premiumstore.sk/zamky/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Olej > Olejové vany | 2 / 2 | https://www.premiumstore.sk/olejove-vany/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Olej > Olejničky a maznice | 2 / 2 | https://www.premiumstore.sk/olejnicky-a-maznice/ |
| TV, audio a video > Antény a satelity > LNB konvertory > Octoblok 8 TV | 2 / 2 | https://www.premiumstore.sk/octoblok-8-tv/ |
| TV, audio a video > Antény a satelity > LNB konvertory > MonoQuad 4 TV | 2 / 2 | https://www.premiumstore.sk/monoquad-4-tv/ |
| Náradie a dielňa > Pneumatické náradie > Pištole | 1 / 2 | https://www.premiumstore.sk/pistole/ |
| TV, audio a video > Antény a satelity > Satelitné príslušenstvo > Multipřepínače > Ostatné | 2 / 2 | https://www.premiumstore.sk/ostatne-12/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Držiaky stožárů > Na komín bez vŕtanie | 2 / 2 | https://www.premiumstore.sk/na-komin-bez-vrtanie/ |
| TV, audio a video > Diaľkové ovládače > DVD > Denon | 2 / 2 | https://www.premiumstore.sk/denon/ |
| TV, audio a video > Diaľkové ovládače > DVD > Sony | 2 / 2 | https://www.premiumstore.sk/sony-2/ |
| TV, audio a video > Diaľkové ovládače > AUDIO (AUX) > AIWA | 2 / 2 | https://www.premiumstore.sk/aiwa/ |
| Náradie a dielňa > Mechanické náradie > Nýtování > Nitovacie kliešte | 2 / 2 | https://www.premiumstore.sk/nitovacie-klieste/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Pokrývačské práce > Spájky, horáky | 2 / 2 | https://www.premiumstore.sk/spajky--horaky/ |
| Náradie a dielňa > Mechanické náradie > Kliešte > Kliešte ploché | 2 / 2 | https://www.premiumstore.sk/klieste-ploche/ |
| Náradie a dielňa > Mechanické náradie > Kliešte > Kliešte SIKO | 2 / 2 | https://www.premiumstore.sk/klieste-siko/ |
| Šport, hračky a voľný čas > Posilňovanie a fitness > Činky a príslušenstvo > Závažia | 2 / 2 | https://www.premiumstore.sk/zavazia/ |
| Náradie a dielňa > Dielenské vybavenie > Kufre a organizéry na náradie > Kapsáře na náradie | 2 / 2 | https://www.premiumstore.sk/kapsare-na-naradie/ |
| Šport, hračky a voľný čas > Mikroskopy > Príslušenstvo | 2 / 2 | https://www.premiumstore.sk/prislusenstvo-16/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Chrysler | 2 / 2 | https://www.premiumstore.sk/chrysler/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Lancia | 2 / 2 | https://www.premiumstore.sk/lancia/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Land Rover | 2 / 2 | https://www.premiumstore.sk/land-rover/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Renault | 2 / 2 | https://www.premiumstore.sk/renault/ |
| Šport, hračky a voľný čas > Zdravotní potreby > Detské opatrovateľky (chůvičky) | 2 / 2 | https://www.premiumstore.sk/detske-opatrovatelky--chuvicky-2/ |
| Fotovoltaika a energie > Napájacie zdroje > Adaptéry pre notebooky | 2 / 2 | https://www.premiumstore.sk/adaptery-pre-notebooky/ |
| Fotovoltaika a energie > Napájacie zdroje > Nabíjačky batérií | 2 / 2 | https://www.premiumstore.sk/nabijacky-baterii-2/ |
| Náradie a dielňa > Elektronické súčiastky > Poistky, pojistkové držiaky > Pojistková puzdrá a držiaky | 2 / 2 | https://www.premiumstore.sk/pojistkova-puzdra-a-drziaky/ |
| Elektroinštalačný materiál > Inštalačné príslušenstvo > Rúrky a chráničky > Plastové rúrky | 2 / 2 | https://www.premiumstore.sk/plastove-rurky/ |
| Elektroinštalačný materiál > Elektromery a spínacie technika > Termostaty > Termostatické hlavice | 2 / 2 | https://www.premiumstore.sk/termostaticke-hlavice/ |
| Náradie a dielňa > Kancelária a škola > Skartovače | 2 / 2 | https://www.premiumstore.sk/skartovace/ |
| TV, audio a video > Antény a satelity > SET-TOP-BOXY > DVB-T2 s podporou hybridní televízory HbbTV | 2 / 2 | https://www.premiumstore.sk/dvb-t2-s-podporou-hybridni-televizory-hbbtv/ |
| Elektroinštalačný materiál > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá > Svorky - SLK 3 > 4-pólové svorky - SLK 3/4 | 2 / 2 | https://www.premiumstore.sk/4-polove-svorky-slk-3-4/ |
| TV, audio a video > Príslušenstvo > HDMI prevodníky | 2 / 2 | https://www.premiumstore.sk/hdmi-prevodniky/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - s doběhem (časovač) > Pre průměr potrubie 150 mm | 2 / 2 | https://www.premiumstore.sk/pre-prumer-potrubie-150-mm/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - s doběhem (časovač) > Pre průměr potrubie 125 mm | 2 / 2 | https://www.premiumstore.sk/pre-prumer-potrubie-125-mm-3/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > HDCVI a 5v1 videorekordéry > 8 kanálů | 2 / 2 | https://www.premiumstore.sk/8-kanalu-2/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > HDCVI a 5v1 videorekordéry > 16 kanálů | 2 / 2 | https://www.premiumstore.sk/16-kanalu-2/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Peugeot > Boxer | 2 / 2 | https://www.premiumstore.sk/boxer/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Přeprava > Madla na sklo | 2 / 2 | https://www.premiumstore.sk/madla-na-sklo/ |
| Elektroinštalačný materiál > Ventilačné technika > Gravitační žaluzie a klapky > Gravitační klapky s kruhovým nástavcem | 2 / 2 | https://www.premiumstore.sk/gravitacni-klapky-s-kruhovym-nastavcem/ |
| Elektroinštalačný materiál > Ventilačné technika > Gravitační žaluzie a klapky > Kovová gravitační žaluzie s nástavcem z hliníku | 2 / 2 | https://www.premiumstore.sk/kovova-gravitacni-zaluzie-s-nastavcem-z-hliniku/ |
| Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady DOSPEL > Ventilátory - typ TURBO | 2 / 2 | https://www.premiumstore.sk/ventilatory-typ-turbo/ |
| Náradie a dielňa > Kancelária a škola > Školské potreby > Školské batohy, aktovky | 1 / 2 | https://www.premiumstore.sk/skolske-batohy--aktovky/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Obkladačské práce > Vrtáky | 2 / 2 | https://www.premiumstore.sk/vrtaky-2/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Obkladačské práce > Spárování | 2 / 2 | https://www.premiumstore.sk/sparovani/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Malířství a natěračství > Škrabky | 2 / 2 | https://www.premiumstore.sk/skrabky/ |
| Náradie a dielňa > Mechanické náradie > Príslušenstvo ku gola sadám > Sady bitů | 2 / 2 | https://www.premiumstore.sk/sady-bitu/ |
| Náradie a dielňa > Mechanické náradie > Príslušenstvo ku gola sadám > Nástrčné hlavice > 1/4" nadstavce | 2 / 2 | https://www.premiumstore.sk/1-4--nadstavce/ |
| Elektroinštalačný materiál > Ventilačné technika > Mřížky > Mřížka sa síťkou s nástavcem a s regulací | 2 / 2 | https://www.premiumstore.sk/mrizka-sa-sitkou-s-nastavcem-a-s-regulaci/ |
| Elektroinštalačný materiál > Ventilačné technika > Mřížky > Mřížka kruhová s regulovatelným nástavcem | 2 / 2 | https://www.premiumstore.sk/mrizka-kruhova-s-regulovatelnym-nastavcem/ |
| Elektroinštalačný materiál > Ventilačné technika > Talířové ventily a difuzéry > Plastové talířové difuzéry | 2 / 2 | https://www.premiumstore.sk/plastove-talirove-difuzery/ |
| Elektroinštalačný materiál > Ventilačné technika > Talířové ventily a difuzéry > Plastové talířové ventily | 2 / 2 | https://www.premiumstore.sk/plastove-talirove-ventily/ |
| Elektroinštalačný materiál > Ventilačné technika > Talířové ventily a difuzéry > Kovové talířové ventily | 2 / 2 | https://www.premiumstore.sk/kovove-talirove-ventily/ |
| Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ OVK | 2 / 2 | https://www.premiumstore.sk/ventilatory-typ-ovk/ |
| Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ OVK1 | 2 / 2 | https://www.premiumstore.sk/ventilatory-typ-ovk1/ |
| Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VKOMz | 2 / 2 | https://www.premiumstore.sk/ventilatory-typ-vkomz/ |
| Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VKMz | 2 / 2 | https://www.premiumstore.sk/ventilatory-typ-vkmz/ |
| Náradie a dielňa > Mechanické náradie > Kliešte > Kliešte štiepacie > Kliešte štiepacie boční | 2 / 2 | https://www.premiumstore.sk/klieste-stiepacie-bocni/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Brusivo > Brúsne papiere | 2 / 2 | https://www.premiumstore.sk/brusne-papiere/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Brusivo > Brúsne výseky delta | 2 / 2 | https://www.premiumstore.sk/brusne-vyseky-delta/ |
| TV, audio a video > Audio technika > Slúchadlá > Slúchadlá televízne | 2 / 2 | https://www.premiumstore.sk/sluchadla-televizne/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Píly > Píly na dřevo | 2 / 2 | https://www.premiumstore.sk/pily-na-drevo/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Píly > Píly na kov | 2 / 2 | https://www.premiumstore.sk/pily-na-kov/ |
| Šport, hračky a voľný čas > Hračky > Puzzle > Puzzle klasické drevené | 2 / 2 | https://www.premiumstore.sk/puzzle-klasicke-drevene/ |
| Dróny a RC modely > Náhradné diely | 2 / 2 | https://www.premiumstore.sk/nahradne-diely-4/ |
| Dróny a RC modely > Načítanie > Napájacie zdroje | 2 / 2 | https://www.premiumstore.sk/napajacie-zdroje-3/ |
| Dróny a RC modely > Načítanie > Príslušenstvo | 2 / 2 | https://www.premiumstore.sk/prislusenstvo-21/ |
| TV, audio a video > Mobily a tablety > Kable USB I > USB-C na USB-C | 2 / 2 | https://www.premiumstore.sk/usb-c-na-usb-c/ |
| Šport, hračky a voľný čas > Outdoor > Ostatné | 2 / 2 | https://www.premiumstore.sk/ostatne-13/ |
| Šport, hračky a voľný čas > Outdoor > Svietidlá > Svetlá na bicykel | 2 / 2 | https://www.premiumstore.sk/svetla-na-bicykel/ |
| Bezpečnosť a smart domácnosť > Prvky výkonu > Smart kúrenie > Ovládače klimatizácie | 2 / 2 | https://www.premiumstore.sk/ovladace-klimatizacie/ |
| Šport, hračky a voľný čas > Hračky > Edukatívne > Programovateľní roboti | 2 / 2 | https://www.premiumstore.sk/programovatelni-roboti/ |
| TV, audio a video > Počítače a príslušenstvo > Káble > USB káble | 2 / 2 | https://www.premiumstore.sk/usb-kable-3/ |
| TV, audio a video > Počítače a príslušenstvo > Káble > Ostatné | 2 / 2 | https://www.premiumstore.sk/ostatne-23/ |
| TV, audio a video > Počítače a príslušenstvo > Projektory a plátna > Plátna pre projektory | 2 / 2 | https://www.premiumstore.sk/platna-pre-projektory/ |
| Auto-moto > Umývanie a čistenie > Vysávače do auta | 2 / 2 | https://www.premiumstore.sk/vysavace-do-auta/ |
| Profesionálna audio technika > BZBGEAR | 1 / 2 | https://www.premiumstore.sk/bzbgear/ |
| Profesionálna audio technika > Pódium, diskotéka, DJ > transportné kufre a racky > transportné skrine | 2 / 2 | https://www.premiumstore.sk/transportne-skrine/ |
| Profesionálna audio technika > Pódium, diskotéka, DJ > transportné kufre a racky > príslušenstvo > Kolieska | 2 / 2 | https://www.premiumstore.sk/kolieska/ |
| Profesionálna audio technika > Káble, konektory a redukcie > Káble > Sieťové | 2 / 2 | https://www.premiumstore.sk/sietove/ |
| Profesionálna audio technika > Car audio > Reproduktory | 1 / 2 | https://www.premiumstore.sk/reproduktory-7/ |
| Profesionálna audio technika > Reproduktory > Reproduktorové stavebnice | 2 / 2 | https://www.premiumstore.sk/reproduktorove-stavebnice/ |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Bezdrôtové zosilňovacie systémy (Loop) | 2 / 2 | https://www.premiumstore.sk/bezdrotove-zosilnovacie-systemy--loop/ |
| Profesionálna audio technika > Tlmočnícke, sprievodcovské a konferenčné systémy > Sprievodcovský systém | 2 / 2 | https://www.premiumstore.sk/sprievodcovsky-system/ |
| Profesionálna audio technika > Tlmočnícke, sprievodcovské a konferenčné systémy > Tlmočnícky systém | 2 / 2 | https://www.premiumstore.sk/tlmocnicky-system/ |
| Profesionálna audio technika > Pódium, diskotéka, DJ > Slúchadlá > s mikrofónom | 2 / 2 | https://www.premiumstore.sk/s-mikrofonom/ |
| Profesionálna audio technika > Reproduktory > Príslušenstvo k reproduktorom > tlmiaci materiál a  pásky | 2 / 2 | https://www.premiumstore.sk/tlmiaci-material-a--pasky/ |
| Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Meracie prístroje > Multimetre | 2 / 2 | https://www.premiumstore.sk/multimetre/ |
| Profesionálna audio technika > Svetlá > Kufre a tašky k svetlám | 2 / 2 | https://www.premiumstore.sk/kufre-a-tasky-k-svetlam/ |
| Profesionálna audio technika > JTS > Inštrumentálne mikrofóny | 2 / 2 | https://www.premiumstore.sk/instrumentalne-mikrofony/ |
| Profesionálna audio technika > JTS > Inštalácie > Tlmočnicke systémy | 2 / 2 | https://www.premiumstore.sk/tlmocnicke-systemy/ |
| Profesionálna audio technika > JTS > Slúchadlá > In-ear slúchadlá | 2 / 2 | https://www.premiumstore.sk/in-ear-sluchadla/ |
| Profesionálna audio technika > Svetlá > Lasery > Multipoint Laser a Gobo | 2 / 2 | https://www.premiumstore.sk/multipoint-laser-a-gobo/ |
| Profesionálna audio technika > Svetlá > Lasery > Green Laser | 2 / 2 | https://www.premiumstore.sk/green-laser/ |
| TV, audio a video > AV káble > Anténa > Konektory a redukcie > COAX | 2 / 2 | https://www.premiumstore.sk/coax/ |
| TV, audio a video > AV káble > Video > SCART | 1 / 2 | https://www.premiumstore.sk/scart/ |
| Auto-moto > Autopríslušenstvo > Měniče napätia | 2 / 2 | https://www.premiumstore.sk/menice-napatia-2/ |
| Domáce spotrebiče > Malé spotrebiče > Dezinfekčné lampy > Ozónové | 2 / 2 | https://www.premiumstore.sk/ozonove/ |
| Náradie a dielňa > Ručné AKU náradie > Pily | 2 / 2 | https://www.premiumstore.sk/pily-4/ |
| Náradie a dielňa > Meracia technika > Laserové merače vzdialenosti | 2 / 2 | https://www.premiumstore.sk/laserove-merace-vzdialenosti/ |
| Domáce spotrebiče > Malé spotrebiče > Hodiny a budíky > Časovače, minútky | 2 / 2 | https://www.premiumstore.sk/casovace--minutky-2/ |
| Profesionálna audio technika > Hudobné nástroje a príslušenstvo > Basové zosilňovače a reproduktory | 2 / 2 | https://www.premiumstore.sk/basove-zosilnovace-a-reproduktory/ |
| TV, audio a video > Discmany | 1 / 1 | https://www.premiumstore.sk/discmany/ |
| TV, audio a video > Audio technika > Audio káble | 1 / 1 | https://www.premiumstore.sk/audio-kable/ |
| TV, audio a video > Audio technika > Ostatné | 1 / 1 | https://www.premiumstore.sk/ostatne-21/ |
| Domáce spotrebiče > Malé spotrebiče > Pre dieťa | 1 / 1 | https://www.premiumstore.sk/pre-dieta/ |
| Auto-moto > Vysielače do auta | 1 / 1 | https://www.premiumstore.sk/vysielace-do-auta-2/ |
| Auto-moto > Autorádiá > Príslušenstvo do autá | 1 / 1 | https://www.premiumstore.sk/prislusenstvo-do-auta/ |
| Auto-moto > Autorádiá > Autorádiá s DVD | 1 / 1 | https://www.premiumstore.sk/autoradia-s-dvd/ |
| TV, audio a video > Reproduktory > Reprosoustavy | 1 / 1 | https://www.premiumstore.sk/reprosoustavy/ |
| TV, audio a video > Audio technika > HiFi komponenty > Príslušenstvo k HiFi | 1 / 1 | https://www.premiumstore.sk/prislusenstvo-k-hifi/ |
| TV, audio a video > Audio technika > Radiomagnetofóny > Radiomagnetofóny s CD | 1 / 1 | https://www.premiumstore.sk/radiomagnetofony-s-cd/ |
| TV, audio a video > Počítače a príslušenstvo > Pamäte RAM | 1 / 1 | https://www.premiumstore.sk/pamate-ram/ |
| TV, audio a video > Počítače a príslušenstvo > Tašky, obaly, batohy | 1 / 1 | https://www.premiumstore.sk/tasky--obaly--batohy/ |
| TV, audio a video > Počítače a príslušenstvo > Dokovací stanice | 1 / 1 | https://www.premiumstore.sk/dokovaci-stanice/ |
| TV, audio a video > Počítače a príslušenstvo > Sieťové prvky > Routery | 1 / 1 | https://www.premiumstore.sk/routery/ |
| TV, audio a video > Počítače a príslušenstvo > Sieťové prvky > Napájacie adaptéry a POE | 1 / 1 | https://www.premiumstore.sk/napajacie-adaptery-a-poe/ |
| TV, audio a video > Počítače a príslušenstvo > Tlačiarne a skenery > Pokladničné tlačiarne | 1 / 1 | https://www.premiumstore.sk/pokladnicne-tlaciarne/ |
| TV, audio a video > Video technika > Prehrávače, rekordéry > DVD prehrávače > Stolové DVD prehrávače | 1 / 1 | https://www.premiumstore.sk/stolove-dvd-prehravace/ |
| TV, audio a video > Mobily a tablety > Organizátory káblov | 1 / 1 | https://www.premiumstore.sk/organizatory-kablov/ |
| TV, audio a video > Mobily a tablety > Vysielače do auta | 1 / 1 | https://www.premiumstore.sk/vysielace-do-auta/ |
| TV, audio a video > Mobily a tablety > Bluetooth slúchadlá | 1 / 1 | https://www.premiumstore.sk/bluetooth-sluchadla/ |
| Domáce spotrebiče > Vstavané spotrebiče > Varné dosky > Elektrické varné dosky | 1 / 1 | https://www.premiumstore.sk/elektricke-varne-dosky/ |
| Zdravie a starostlivosť > Elektrické manikúry a pedikúry | 1 / 1 | https://www.premiumstore.sk/elektricke-manikury-a-pedikury/ |
| Zdravie a starostlivosť > Stop koronavírusu | 1 / 1 | https://www.premiumstore.sk/stop-koronavirusu/ |
| Zdravie a starostlivosť > Váhy | 1 / 1 | https://www.premiumstore.sk/vahy/ |
| Domáce spotrebiče > Vstavané spotrebiče > Digestory > Ostrovčekové digestory | 1 / 1 | https://www.premiumstore.sk/ostrovcekove-digestory/ |
| Domáce spotrebiče > Vstavané spotrebiče > Digestory > Príslušenstvo k digestorom | 1 / 1 | https://www.premiumstore.sk/prislusenstvo-k-digestorom/ |
| Domáce spotrebiče > Malé spotrebiče > Nádobie > Pokrievky | 1 / 1 | https://www.premiumstore.sk/pokrievky/ |
| Domáce spotrebiče > Malé spotrebiče > Vysávače > Ostatné | 1 / 1 | https://www.premiumstore.sk/ostatne-22/ |
| Elektroinštalačný materiál > Osvetlenie > Cestovné adaptéry | 1 / 1 | https://www.premiumstore.sk/cestovne-adaptery/ |
| Elektroinštalačný materiál > Osvetlenie > Stojace lampy | 1 / 1 | https://www.premiumstore.sk/stojace-lampy/ |
| Náradie a dielňa > Vrtáky a skrutkovače | 1 / 1 | https://www.premiumstore.sk/vrtaky-a-skrutkovace/ |
| Náradie a dielňa > Brúsky | 1 / 1 | https://www.premiumstore.sk/brusky-3/ |
| Náradie a dielňa > Zváranie | 1 / 1 | https://www.premiumstore.sk/zvaranie/ |
| Náradie a dielňa > Náradie > Elektrické náradie > Bourací a vŕtacie kladivá | 1 / 1 | https://www.premiumstore.sk/bouraci-a-vrtacie-kladiva/ |
| Náradie a dielňa > Náradie > Elektrické náradie > Autonabíjačky a štartovacie zdroje | 1 / 1 | https://www.premiumstore.sk/autonabijacky-a-startovacie-zdroje/ |
| Záhrada > Záhradné potreby > Zavlažovanie > Čerpadlá | 1 / 1 | https://www.premiumstore.sk/cerpadla/ |
| Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Otvárače na konzervy | 1 / 1 | https://www.premiumstore.sk/otvarace-na-konzervy/ |
| Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Obrusy a prestieranie | 1 / 1 | https://www.premiumstore.sk/obrusy-a-prestieranie/ |
| Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Valčeky na cesto | 1 / 1 | https://www.premiumstore.sk/valceky-na-cesto/ |
| Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Chlebníky, Košíky, Košíky (ošatky) | 1 / 1 | https://www.premiumstore.sk/chlebniky--kosiky--kosiky--osatky/ |
| Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Handry, Houby, Kefy | 1 / 1 | https://www.premiumstore.sk/handry--houby--kefy/ |
| TV, audio a video > Príslušenstvo k TV, audio, video > TV držiaky | 1 / 1 | https://www.premiumstore.sk/tv-drziaky/ |
| TV, audio a video > Digitálny príjem > DVB-T, satelity - príslušenstvo | 1 / 1 | https://www.premiumstore.sk/dvb-t--satelity-prislusenstvo/ |
| Zdravie a starostlivosť > Starostlivosť o zdravie > Tlakomery, tonometre | 1 / 1 | https://www.premiumstore.sk/tlakomery--tonometre/ |
| Zdravie a starostlivosť > Starostlivosť o zdravie > Inhalátory | 1 / 1 | https://www.premiumstore.sk/inhalatory/ |
| TV, audio a video > Audio technika > HiFi systémy > Minisystémy | 1 / 1 | https://www.premiumstore.sk/minisystemy/ |
| Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Zvlhčovače | 1 / 1 | https://www.premiumstore.sk/zvlhcovace/ |
| Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Vykurovacie telesá > Elektrická krbová kachle | 1 / 1 | https://www.premiumstore.sk/elektricka-krbova-kachle/ |
| TV, audio a video > Počítače a príslušenstvo > Herné zariadenia > Herné príslušenstvo | 1 / 1 | https://www.premiumstore.sk/herne-prislusenstvo/ |
| TV, audio a video > Počítače a príslušenstvo > Herné zariadenia > Konzolové hry > Xbox One - hry | 1 / 1 | https://www.premiumstore.sk/xbox-one-hry/ |
| Domáce spotrebiče > Malé spotrebiče > Žehličky > Šijacie stroje a príslušenstvo > Šijacie stroje | 1 / 1 | https://www.premiumstore.sk/sijacie-stroje/ |
| Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie > Kufre, tašky a montážne boxy | 1 / 1 | https://www.premiumstore.sk/kufre--tasky-a-montazne-boxy/ |
| Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre Čerpadlá a Miešadlá | 1 / 1 | https://www.premiumstore.sk/prislusenstvo-pre-cerpadla-a-miesadla/ |
| Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre Rezačky obkladov | 1 / 1 | https://www.premiumstore.sk/prislusenstvo-pre-rezacky-obkladov/ |
| Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > AKU batérie a nabíjačky | 1 / 1 | https://www.premiumstore.sk/aku-baterie-a-nabijacky/ |
| Bezpečnosť a smart domácnosť > Smart domácnosť > Smart žiarovky | 1 / 1 | https://www.premiumstore.sk/smart-ziarovky/ |
| Bezpečnosť a smart domácnosť > Smart domácnosť > Čističky vzduchu | 1 / 1 | https://www.premiumstore.sk/cisticky-vzduchu-2/ |
| Bezpečnosť a smart domácnosť > Smart domácnosť > Rádiá | 1 / 1 | https://www.premiumstore.sk/radia-2/ |
| Bezpečnosť a smart domácnosť > Smart domácnosť > Smart zásuvky | 1 / 1 | https://www.premiumstore.sk/smart-zasuvky-2/ |
| Bezpečnosť a smart domácnosť > Smart domácnosť > Smart zabezpečenie > Kamery | 1 / 1 | https://www.premiumstore.sk/kamery/ |
| Bezpečnosť a smart domácnosť > Smart domácnosť > Smart zabezpečenie > Detektor pohybu | 1 / 1 | https://www.premiumstore.sk/detektor-pohybu/ |
| TV, audio a video > Foto a optika > Príslušenstvo > Objektívy DJI | 1 / 1 | https://www.premiumstore.sk/objektivy-dji/ |
| Náradie a dielňa > Náradie > Ručné náradie > Zveráky a svorky | 1 / 1 | https://www.premiumstore.sk/zveraky-a-svorky/ |
| Náradie a dielňa > Náradie > Ručné náradie > Sady náradie | 1 / 1 | https://www.premiumstore.sk/sady-naradie/ |
| Náradie a dielňa > Náradie > Ručné náradie > Rudle | 1 / 1 | https://www.premiumstore.sk/rudle/ |
| Náradie a dielňa > Náradie > Ručné náradie > Nože, nožnice, skalpely, rezačky | 1 / 1 | https://www.premiumstore.sk/noze--noznice--skalpely--rezacky/ |
| Náradie a dielňa > Náradie > Ručné náradie > Vŕtačky, kolovrátky a nebozezy | 1 / 1 | https://www.premiumstore.sk/vrtacky--kolovratky-a-nebozezy/ |
| Náradie a dielňa > Náradie > Ručné náradie > Kľúče > Stranové a očká | 1 / 1 | https://www.premiumstore.sk/stranove-a-ocka/ |
| Náradie a dielňa > Náradie > Pneumatické a hydraulické náradie > Vzduchové hadice, Regulátory a spojk | 1 / 1 | https://www.premiumstore.sk/vzduchove-hadice--regulatory-a-spojk/ |
| Náradie a dielňa > Náradie > Pneumatické a hydraulické náradie > Rázové uťahováky skrutkovače kladivá | 1 / 1 | https://www.premiumstore.sk/razove-utahovaky-skrutkovace-kladiva/ |
| Šport, hračky a voľný čas > Golf | 1 / 1 | https://www.premiumstore.sk/golf/ |
| Šport, hračky a voľný čas > Hračky > Sportovní hračky | 1 / 1 | https://www.premiumstore.sk/sportovni-hracky/ |
| Šport, hračky a voľný čas > Oblečenie a obuv > Boty | 1 / 1 | https://www.premiumstore.sk/boty/ |
| Domáce spotrebiče > Veľké spotrebiče > Umývačky riadu > Stolové umývačky riad | 1 / 1 | https://www.premiumstore.sk/stolove-umyvacky-riad/ |
| Záhrada > Záhradné potreby > Záhradné náradie > Rýle a rycie vidle | 1 / 1 | https://www.premiumstore.sk/ryle-a-rycie-vidle/ |
| Záhrada > Záhradné potreby > Záhradné náradie > Krompáče, motyky, kultivátory | 1 / 1 | https://www.premiumstore.sk/krompace--motyky--kultivatory/ |
| Záhrada > Záhradné potreby > Záhradné náradie > Záhradné nožnice | 1 / 1 | https://www.premiumstore.sk/zahradne-noznice/ |
| Náradie a dielňa > Náradie > Elektrické náradie > Brúsky > Kotúčové | 1 / 1 | https://www.premiumstore.sk/kotucove/ |
| Náradie a dielňa > Náradie > Elektrické náradie > Brúsky > Oscilačné | 1 / 1 | https://www.premiumstore.sk/oscilacne/ |
| Náradie a dielňa > Náradie > Elektrické náradie > Brúsky > Vibračné | 1 / 1 | https://www.premiumstore.sk/vibracne/ |
| Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre Píly > 03 Pílové listy a pásy | 1 / 1 | https://www.premiumstore.sk/03-pilove-listy-a-pasy/ |
| Zdravie a starostlivosť > Parfumy a kozmetika > Pánske parfumy > Pánske balzámy po holenie | 1 / 1 | https://www.premiumstore.sk/panske-balzamy-po-holenie/ |
| Elektroinštalačný materiál > Osvetlenie > Svietidlá > Vnútorné osvetlenie > Dekoratívne osvetlenie | 1 / 1 | https://www.premiumstore.sk/dekorativne-osvetlenie/ |
| Elektroinštalačný materiál > Osvetlenie > Svietidlá > Vnútorné osvetlenie > Ostatné svietidlá | 1 / 1 | https://www.premiumstore.sk/ostatne-svietidla/ |
| Elektroinštalačný materiál > Osvetlenie > Svietidlá > Vnútorné osvetlenie > Stojace a stolové lampy | 1 / 1 | https://www.premiumstore.sk/stojace-a-stolove-lampy/ |
| Zdravie a starostlivosť > Masážne prístroje > Masážne podložky | 1 / 1 | https://www.premiumstore.sk/masazne-podlozky/ |
| Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo Vŕtačky, skrutkovače, uťahováky > 005 Vykružovače a vŕtacie korunky | 1 / 1 | https://www.premiumstore.sk/005-vykruzovace-a-vrtacie-korunky/ |
| TV, audio a video > Počítače a príslušenstvo > Káble pre IT > Napájacie káble | 1 / 1 | https://www.premiumstore.sk/napajacie-kable/ |
| TV, audio a video > Počítače a príslušenstvo > Tablety > Grafické tablety | 1 / 1 | https://www.premiumstore.sk/graficke-tablety-2/ |
| Domáce spotrebiče > Vstavané spotrebiče > Vstavané chladenie > Vstavané monoklimatické chladničky | 1 / 1 | https://www.premiumstore.sk/vstavane-monoklimaticke-chladnicky/ |
| TV, audio a video > Foto a optika > Príslušenstvo > Batérie k fotoaparátom > Batérie pre fotoaparáty Nikon | 1 / 1 | https://www.premiumstore.sk/baterie-pre-fotoaparaty-nikon/ |
| Náradie a dielňa > Náradie > Upratovanie, čistenie a umývanie > Čističe | 1 / 1 | https://www.premiumstore.sk/cistice/ |
| Zdravie a starostlivosť > Parfumy a kozmetika > Vlasová kozmetika > Balzámy a kondicionéry | 1 / 1 | https://www.premiumstore.sk/balzamy-a-kondicionery/ |
| TV, audio a video > Diaľkové ovládače > KLIMATIZÁCIA | 1 / 1 | https://www.premiumstore.sk/klimatizacia/ |
| Náradie a dielňa > Ochranné pomôcky a odevy > Chrániče sluchu | 1 / 1 | https://www.premiumstore.sk/chranice-sluchu/ |
| Šport, hračky a voľný čas > Cyklistika > Zámky na kolo | 1 / 1 | https://www.premiumstore.sk/zamky-na-kolo/ |
| Elektroinštalačný materiál > Ističe a chrániče > Pojistková puzdrá | 1 / 1 | https://www.premiumstore.sk/pojistkova-puzdra/ |
| Fotovoltaika a energie > Fotovoltaika > Batérie a príslušenstvo | 1 / 1 | https://www.premiumstore.sk/baterie-a-prislusenstvo/ |
| Fotovoltaika a energie > Fotovoltaika > Meniče | 1 / 1 | https://www.premiumstore.sk/menice/ |
| Záhrada > Brány a zvončeky > Schránky na kľúče | 1 / 1 | https://www.premiumstore.sk/schranky-na-kluce/ |
| Záhrada > Brány a zvončeky > Visací zámky | 1 / 1 | https://www.premiumstore.sk/visaci-zamky/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Brzdy > Výměna brzdové kvapaliny | 1 / 1 | https://www.premiumstore.sk/vymena-brzdove-kvapaliny/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Brzdy > Ostatné prípravky na brzdy | 1 / 1 | https://www.premiumstore.sk/ostatne-pripravky-na-brzdy/ |
| Elektroinštalačný materiál > Káble a vodiče > UTP a FTP káble | 1 / 1 | https://www.premiumstore.sk/utp-a-ftp-kable/ |
| Elektroinštalačný materiál > Káble a vodiče > Mikrofonní káble | 1 / 1 | https://www.premiumstore.sk/mikrofonni-kable/ |
| Elektroinštalačný materiál > Rozvádzačové prvky > Bloky pre rozdělení fází > Typ PVBS | 1 / 1 | https://www.premiumstore.sk/typ-pvbs/ |
| Fotovoltaika a energie > Akumulátory a batérie > C malé monočlánky | 1 / 1 | https://www.premiumstore.sk/c-male-monoclanky/ |
| Fotovoltaika a energie > Akumulátory a batérie > Olovené akumulátory > 48V | 1 / 1 | https://www.premiumstore.sk/48v/ |
| Fotovoltaika a energie > Akumulátory a batérie > Olovené akumulátory > 4V | 1 / 1 | https://www.premiumstore.sk/4v/ |
| Fotovoltaika a energie > Akumulátory a batérie > Olovené akumulátory > 36V | 1 / 1 | https://www.premiumstore.sk/36v/ |
| Fotovoltaika a energie > Akumulátory a batérie > Olovené akumulátory > 24V | 1 / 1 | https://www.premiumstore.sk/24v-3/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > HDCVI, HDTVI, AHD kamery > 2.0 Mpix (Full HD) | 1 / 1 | https://www.premiumstore.sk/2-0-mpix--full-hd/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > HDCVI, HDTVI, AHD kamery > Otočné | 1 / 1 | https://www.premiumstore.sk/otocne/ |
| Záhrada > Záhradné doplnky > Záhradné sloupky | 1 / 1 | https://www.premiumstore.sk/zahradne-sloupky/ |
| Záhrada > Záhradné doplnky > Záhradné nábytok | 1 / 1 | https://www.premiumstore.sk/zahradne-nabytok/ |
| Elektroinštalačný materiál > Prepäťové ochrany > Zásuvkové ochrany 230V | 1 / 1 | https://www.premiumstore.sk/zasuvkove-ochrany-230v/ |
| Bezpečnosť a smart domácnosť > Zabezpečenie > Ostatné | 1 / 1 | https://www.premiumstore.sk/ostatne-5/ |
| Šport, hračky a voľný čas > Ďalekohľady > S termovizí | 1 / 1 | https://www.premiumstore.sk/s-termovizi/ |
| TV, audio a video > Antény a satelity > TV modulátory | 1 / 1 | https://www.premiumstore.sk/tv-modulatory/ |
| TV, audio a video > Antény a satelity > Anténne zásuvky | 1 / 1 | https://www.premiumstore.sk/antenne-zasuvky/ |
| TV, audio a video > Antény a satelity > ANTÉNY > Symetrizační členy | 1 / 1 | https://www.premiumstore.sk/symetrizacni-cleny/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce SsangYong | 1 / 1 | https://www.premiumstore.sk/auto-koberce-ssangyong/ |
| TV, audio a video > Antény a satelity > Satelitné príslušenstvo > Ochranné kryty pre LNB | 1 / 1 | https://www.premiumstore.sk/ochranne-kryty-pre-lnb/ |
| TV, audio a video > Mobily a tablety > USB káble > Univerzálne | 1 / 1 | https://www.premiumstore.sk/univerzalne-2/ |
| TV, audio a video > Diaľkové ovládače > Univerzálne ovládače > Panasonic | 1 / 1 | https://www.premiumstore.sk/panasonic-3/ |
| TV, audio a video > Diaľkové ovládače > Univerzálne ovládače > SONY | 1 / 1 | https://www.premiumstore.sk/sony-3/ |
| TV, audio a video > Diaľkové ovládače > Univerzálne ovládače > PHILIPS | 1 / 1 | https://www.premiumstore.sk/philips-3/ |
| TV, audio a video > Diaľkové ovládače > Univerzálne ovládače > LG | 1 / 1 | https://www.premiumstore.sk/lg-3/ |
| TV, audio a video > Diaľkové ovládače > Univerzálne ovládače > Sharp | 1 / 1 | https://www.premiumstore.sk/sharp-3/ |
| TV, audio a video > Diaľkové ovládače > Univerzálne ovládače > Toshiba | 1 / 1 | https://www.premiumstore.sk/toshiba-2/ |
| TV, audio a video > Diaľkové ovládače > Televízne ovládače > Daewoo | 1 / 1 | https://www.premiumstore.sk/daewoo/ |
| TV, audio a video > Diaľkové ovládače > Televízne ovládače > Ostatné značky | 1 / 1 | https://www.premiumstore.sk/ostatne-znacky/ |
| TV, audio a video > Diaľkové ovládače > Televízne ovládače > CHiQ | 1 / 1 | https://www.premiumstore.sk/chiq/ |
| TV, audio a video > AV káble > Oddělovací členy | 1 / 1 | https://www.premiumstore.sk/oddelovaci-cleny/ |
| TV, audio a video > AV káble > Napájanie | 1 / 1 | https://www.premiumstore.sk/napajanie-3/ |
| TV, audio a video > TV stolíky a držiaky > Držiaky reproduktorů | 1 / 1 | https://www.premiumstore.sk/drziaky-reproduktoru/ |
| TV, audio a video > TV stolíky a držiaky > Pojízdné | 1 / 1 | https://www.premiumstore.sk/pojizdne/ |
| TV, audio a video > TV stolíky a držiaky > Stojany | 1 / 1 | https://www.premiumstore.sk/stojany/ |
| TV, audio a video > TV stolíky a držiaky > Príslušenstvo | 1 / 1 | https://www.premiumstore.sk/prislusenstvo-42/ |
| TV, audio a video > TV stolíky a držiaky > Držiaky soundbarů | 1 / 1 | https://www.premiumstore.sk/drziaky-soundbaru/ |
| Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Rúry | 1 / 1 | https://www.premiumstore.sk/rury/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové kamery > 3.0 Mpix. | 1 / 1 | https://www.premiumstore.sk/3-0-mpix/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Inetbox | 1 / 1 | https://www.premiumstore.sk/inetbox/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Multibox | 1 / 1 | https://www.premiumstore.sk/multibox/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Dreamsky | 1 / 1 | https://www.premiumstore.sk/dreamsky/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Apebox | 1 / 1 | https://www.premiumstore.sk/apebox/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Smart | 1 / 1 | https://www.premiumstore.sk/smart/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Allbox | 1 / 1 | https://www.premiumstore.sk/allbox/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Dizipia | 1 / 1 | https://www.premiumstore.sk/dizipia/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > AZBox | 1 / 1 | https://www.premiumstore.sk/azbox/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > SatElita | 1 / 1 | https://www.premiumstore.sk/satelita/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Edision | 1 / 1 | https://www.premiumstore.sk/edision-2/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Evolve | 1 / 1 | https://www.premiumstore.sk/evolve-2/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Alma | 1 / 1 | https://www.premiumstore.sk/alma-2/ |
| TV, audio a video > Diaľkové ovládače > Satelitné ovládače > Samsung | 1 / 1 | https://www.premiumstore.sk/samsung-4/ |
| Elektroinštalačný materiál > Káble a vodiče > Koaxiálne káble > Vícenásobné káble | 1 / 1 | https://www.premiumstore.sk/vicenasobne-kable/ |
| Elektroinštalačný materiál > Káble a vodiče > Koaxiálne káble > Boxy a stojany | 1 / 1 | https://www.premiumstore.sk/boxy-a-stojany/ |
| TV, audio a video > Počítače a príslušenstvo > Rackové skrine a príslušenstvo > Príslušenstvo > Patch Panely | 1 / 1 | https://www.premiumstore.sk/patch-panely/ |
| TV, audio a video > Antény a satelity > Konektory > LAN konektory | 1 / 1 | https://www.premiumstore.sk/lan-konektory/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly na tepelná čerpadlá a klimatizácia | 1 / 1 | https://www.premiumstore.sk/konzoly-na-tepelna-cerpadla-a-klimatizacia/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Uzemnenie, hromosvody > Zemnící drát | 1 / 1 | https://www.premiumstore.sk/zemnici-drat/ |
| Elektroinštalačný materiál > Montážne skrine a rozvádzače > Rozvádzače samostatné > Gumové skrine RubberBOX IP65 | 1 / 1 | https://www.premiumstore.sk/gumove-skrine-rubberbox-ip65/ |
| Náradie a dielňa > Elektrické a AKU náradie > Nabíjačky k AKU náradie | 1 / 1 | https://www.premiumstore.sk/nabijacky-k-aku-naradie/ |
| Náradie a dielňa > Elektrické a AKU náradie > Batérie k AKU náradie | 1 / 1 | https://www.premiumstore.sk/baterie-k-aku-naradie/ |
| Náradie a dielňa > Elektrické a AKU náradie > Brúsky | 1 / 1 | https://www.premiumstore.sk/brusky-2/ |
| Náradie a dielňa > Elektrické a AKU náradie > Rázové uťahováky | 1 / 1 | https://www.premiumstore.sk/razove-utahovaky-2/ |
| Záhrada > Záhradné stroje > Krovinorezy | 1 / 1 | https://www.premiumstore.sk/krovinorezy/ |
| Záhrada > Záhradné stroje > Vysávače lístie | 1 / 1 | https://www.premiumstore.sk/vysavace-listie/ |
| Šport, hračky a voľný čas > Turistika > Vysielačky | 1 / 1 | https://www.premiumstore.sk/vysielacky-2/ |
| Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Propojovače batérií | 1 / 1 | https://www.premiumstore.sk/propojovace-baterii/ |
| Fotovoltaika a energie > Fotovoltaika > Konektory pre fotovoltaiku > Dutinky na kabel | 1 / 1 | https://www.premiumstore.sk/dutinky-na-kabel/ |
| Náradie a dielňa > SPÁJKOVACIE TECHNIKA > Tavné a horúcovzdušné pištole | 1 / 1 | https://www.premiumstore.sk/tavne-a-horucovzdusne-pistole-2/ |
| Šport, hračky a voľný čas > Bojové športy > Pytlovky | 1 / 1 | https://www.premiumstore.sk/pytlovky/ |
| Náradie a dielňa > Elektrické a AKU náradie > Pištole lepící a horúcovzdušné > Lepící pištole | 1 / 1 | https://www.premiumstore.sk/lepici-pistole/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Rudle a kolieska | 1 / 1 | https://www.premiumstore.sk/rudle-a-kolieska/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Potrubie > Spájky na rúrky | 1 / 1 | https://www.premiumstore.sk/spajky-na-rurky/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Potrubie > Kefy | 1 / 1 | https://www.premiumstore.sk/kefy-3/ |
| Náradie a dielňa > Mechanické náradie > Skrutkovače, bity, imbusy > L-klíče | 1 / 1 | https://www.premiumstore.sk/l-klice/ |
| Náradie a dielňa > Mechanické náradie > Skrutkovače, bity, imbusy > Skrutkovače úderové | 1 / 1 | https://www.premiumstore.sk/skrutkovace-uderove/ |
| Náradie a dielňa > Mechanické náradie > Skrutkovače, bity, imbusy > Skrutkovače elektrikárske | 1 / 1 | https://www.premiumstore.sk/skrutkovace-elektrikarske/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Rotačné kefy | 1 / 1 | https://www.premiumstore.sk/rotacne-kefy/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Vrtáky > Vykružovací vrtáky | 1 / 1 | https://www.premiumstore.sk/vykruzovaci-vrtaky/ |
| Náradie a dielňa > Mechanické náradie > Kladivá, dláta, sekery > Sekáče SDS | 1 / 1 | https://www.premiumstore.sk/sekace-sds/ |
| Náradie a dielňa > Mechanické náradie > Kladivá, dláta, sekery > Dláta | 1 / 1 | https://www.premiumstore.sk/dlata/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Murárske práce > Vedrá | 1 / 1 | https://www.premiumstore.sk/vedra/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Nástroje > Dláta, sekáče | 1 / 1 | https://www.premiumstore.sk/dlata--sekace/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Nástroje > Páčidlá | 1 / 1 | https://www.premiumstore.sk/pacidla/ |
| TV, audio a video > Antény a satelity > ZOSILŇOVAČE > Kanálové | 1 / 1 | https://www.premiumstore.sk/kanalove/ |
| Auto-moto > Vybavenie auta > Autopotahy > Opěrky hlavy | 1 / 1 | https://www.premiumstore.sk/operky-hlavy/ |
| Auto-moto > Vybavenie auta > Autopotahy > Univerzálne autopotahy | 1 / 1 | https://www.premiumstore.sk/univerzalne-autopotahy/ |
| TV, audio a video > Antény a satelity > SATELITNÉ PRIJÍMAČE > Dotované boxy pre Skylink | 1 / 1 | https://www.premiumstore.sk/dotovane-boxy-pre-skylink/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Volkswagen > Amarok | 1 / 1 | https://www.premiumstore.sk/amarok/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Volkswagen > Polo | 1 / 1 | https://www.premiumstore.sk/polo/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Volkswagen > Transporter | 1 / 1 | https://www.premiumstore.sk/transporter/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Mercedes-Benz > Třída G | 1 / 1 | https://www.premiumstore.sk/trida-g/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Mercedes-Benz > Třída A | 1 / 1 | https://www.premiumstore.sk/trida-a/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Audi > Audi Q3 | 1 / 1 | https://www.premiumstore.sk/audi-q3/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Audi > Audi Q8 | 1 / 1 | https://www.premiumstore.sk/audi-q8/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Audi > Audi Q2 | 1 / 1 | https://www.premiumstore.sk/audi-q2/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Jeep > Liberty | 1 / 1 | https://www.premiumstore.sk/liberty/ |
| Elektroinštalačný materiál > Ventilačné technika > Osoušeče rukou | 1 / 1 | https://www.premiumstore.sk/osousece-rukou/ |
| Elektroinštalačný materiál > Ventilačné technika > Vzduchovody > Ohebné potrubie - POLYVENT | 1 / 1 | https://www.premiumstore.sk/ohebne-potrubie-polyvent/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VKOk | 1 / 1 | https://www.premiumstore.sk/ventilatory-typ-vkok/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VVR | 1 / 1 | https://www.premiumstore.sk/ventilatory-typ-vvr/ |
| Náradie a dielňa > Dielenské vybavenie > Přeprava a skladování > Organizéry | 1 / 1 | https://www.premiumstore.sk/organizery/ |
| Náradie a dielňa > Dielenské vybavenie > Přeprava a skladování > Magnetické pořadače a lišty | 1 / 1 | https://www.premiumstore.sk/magneticke-poradace-a-listy/ |
| Náradie a dielňa > Drobné náradie a príslušenstvo > Razidlá | 1 / 1 | https://www.premiumstore.sk/razidla/ |
| TV, audio a video > Antény a satelity > LNB konvertory > Špeciálne | 1 / 1 | https://www.premiumstore.sk/specialne-2/ |
| Náradie a dielňa > Pneumatické náradie > Rázové uťahováky | 1 / 1 | https://www.premiumstore.sk/razove-utahovaky/ |
| TV, audio a video > Počítače a príslušenstvo > Disky a pamäťové karty > Pamäťové karty | 1 / 1 | https://www.premiumstore.sk/pamatove-karty-2/ |
| Šport, hračky a voľný čas > Hračky > Plyšové hračky > Plyšáky ostatné | 1 / 1 | https://www.premiumstore.sk/plysaky-ostatne/ |
| Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Protahovací gély na káble | 1 / 1 | https://www.premiumstore.sk/protahovaci-gely-na-kable/ |
| Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Káblové gelové spojky LEDJOY IP68 | 1 / 1 | https://www.premiumstore.sk/kablove-gelove-spojky-ledjoy-ip68/ |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovacie a kotevní materiál, chémia > Sťahovacie pásky | 1 / 1 | https://www.premiumstore.sk/stahovacie-pasky-2/ |
| TV, audio a video > Diaľkové ovládače > DVD > Technics | 1 / 1 | https://www.premiumstore.sk/technics/ |
| TV, audio a video > Diaľkové ovládače > DVD > Sharp | 1 / 1 | https://www.premiumstore.sk/sharp-2/ |
| TV, audio a video > Diaľkové ovládače > AUDIO (AUX) > Philips | 1 / 1 | https://www.premiumstore.sk/philips-4/ |
| TV, audio a video > Diaľkové ovládače > AUDIO (AUX) > TechniSat | 1 / 1 | https://www.premiumstore.sk/technisat-3/ |
| Záhrada > Sanitárna technika > Sprchové hadice | 1 / 1 | https://www.premiumstore.sk/sprchove-hadice/ |
| Náradie a dielňa > Mechanické náradie > Kliešte > Kliešte lisovací | 1 / 1 | https://www.premiumstore.sk/klieste-lisovaci/ |
| Náradie a dielňa > Mechanické náradie > Kliešte > Kliešte seeger | 1 / 1 | https://www.premiumstore.sk/klieste-seeger/ |
| Náradie a dielňa > Mechanické náradie > Kliešte > Nožnice na plech | 1 / 1 | https://www.premiumstore.sk/noznice-na-plech-2/ |
| Náradie a dielňa > Dielenské vybavenie > Kufre a organizéry na náradie > Organizéry na náradie | 1 / 1 | https://www.premiumstore.sk/organizery-na-naradie/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > KAMERY 4v1 > 4.0 Mpix. | 1 / 1 | https://www.premiumstore.sk/4-0-mpix-2/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > KAMERY 4v1 > 8.0 Mpix. (4K) | 1 / 1 | https://www.premiumstore.sk/8-0-mpix-4k-2/ |
| Náradie a dielňa > Elektronické súčiastky > Priemyselné zdroje > 24v | 1 / 1 | https://www.premiumstore.sk/24v-2/ |
| Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône INTENSO | 1 / 1 | https://www.premiumstore.sk/vone-intenso/ |
| Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové videorekordéry (NVR) > 32 kanálů | 1 / 1 | https://www.premiumstore.sk/32-kanalu/ |
| Šport, hračky a voľný čas > Mikroskopy > LCD displej / PC monitor | 1 / 1 | https://www.premiumstore.sk/lcd-displej-pc-monitor/ |
| Šport, hračky a voľný čas > Mikroskopy > Monokulární | 1 / 1 | https://www.premiumstore.sk/monokularni-2/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Chevrolet | 1 / 1 | https://www.premiumstore.sk/chevrolet/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Škoda | 1 / 1 | https://www.premiumstore.sk/skoda/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Seat | 1 / 1 | https://www.premiumstore.sk/seat/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Nissan | 1 / 1 | https://www.premiumstore.sk/nissan/ |
| Elektroinštalačný materiál > Ventilačné technika > Vzduchovody > Ohebné potrubie - ALU > Príslušenstvo pre ohebné potrubie - ALU | 1 / 1 | https://www.premiumstore.sk/prislusenstvo-pre-ohebne-potrubie-alu/ |
| Fotovoltaika a energie > Napájacie zdroje > Powerbanky | 1 / 1 | https://www.premiumstore.sk/powerbanky-5/ |
| Fotovoltaika a energie > Napájacie zdroje > Adaptéry cestovné | 1 / 1 | https://www.premiumstore.sk/adaptery-cestovne/ |
| Šport, hračky a voľný čas > Hračky > Detské hudební nástroje > Sady | 1 / 1 | https://www.premiumstore.sk/sady/ |
| Elektroinštalačný materiál > Vypínače, zásuvky, krabice > Elektroinštalačný krabice > Krabice do SDK (sádrokartonu) | 1 / 1 | https://www.premiumstore.sk/krabice-do-sdk--sadrokartonu/ |
| Elektroinštalačný materiál > Vypínače, zásuvky, krabice > Elektroinštalačný krabice > Krabice do zateplených fasád | 1 / 1 | https://www.premiumstore.sk/krabice-do-zateplenych-fasad/ |
| Náradie a dielňa > Kancelária a škola > Pokladny | 1 / 1 | https://www.premiumstore.sk/pokladny/ |
| Náradie a dielňa > Kancelária a škola > Obalový materiál | 1 / 1 | https://www.premiumstore.sk/obalovy-material/ |
| Elektroinštalačný materiál > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá > Svorky - SLK 5 | 1 / 1 | https://www.premiumstore.sk/svorky-slk-5/ |
| Elektroinštalačný materiál > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá > Svorky - SLK 3 > 3-pólové svorky - SLK 3/3 | 1 / 1 | https://www.premiumstore.sk/3-polove-svorky-slk-3-3/ |
| Elektroinštalačný materiál > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá > Svorky - SLK 3 > 5-pólové svorky - SLK 3/5 | 1 / 1 | https://www.premiumstore.sk/5-polove-svorky-slk-3-5/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Renault > Symbol | 1 / 1 | https://www.premiumstore.sk/symbol/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Nissan > Pathfinder | 1 / 1 | https://www.premiumstore.sk/pathfinder/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Dacia > Dokker | 1 / 1 | https://www.premiumstore.sk/dokker/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Opel > Zafira | 1 / 1 | https://www.premiumstore.sk/zafira/ |
| Šport, hračky a voľný čas > Posilňovanie a fitness > Trenažéry > Veslařské trenažéry | 1 / 1 | https://www.premiumstore.sk/veslarske-trenazery/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Kotúče rezacie, pílové, brúsne > Kotúče brúsne diamantové | 1 / 1 | https://www.premiumstore.sk/kotuce-brusne-diamantove/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Hyundai > Santa Fe | 1 / 1 | https://www.premiumstore.sk/santa-fe/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Hyundai > Sonata | 1 / 1 | https://www.premiumstore.sk/sonata/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Peugeot > 408 | 1 / 1 | https://www.premiumstore.sk/408/ |
| Šport, hračky a voľný čas > Hračky > Zvieratká, farmy > Zvieratká | 1 / 1 | https://www.premiumstore.sk/zvieratka/ |
| Náradie a dielňa > Elektrické a AKU náradie > Píly > Píly priamočiare | 1 / 1 | https://www.premiumstore.sk/pily-priamociare/ |
| Fotovoltaika a energie > Akumulátory a batérie > NiMh nabíjacie akumulátory > Sub-C | 1 / 1 | https://www.premiumstore.sk/sub-c/ |
| Šport, hračky a voľný čas > Hračky > Vonkajšie hračky > Detská ihrisko a doplnky | 1 / 1 | https://www.premiumstore.sk/detska-ihrisko-a-doplnky/ |
| Šport, hračky a voľný čas > Hračky > Vonkajšie hračky > Šport | 1 / 1 | https://www.premiumstore.sk/sport-2/ |
| Elektroinštalačný materiál > Ventilačné technika > Gravitační žaluzie a klapky > Gravitační klapky bez kruhového nadstavce | 1 / 1 | https://www.premiumstore.sk/gravitacni-klapky-bez-kruhoveho-nadstavce/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady DOSPEL > Ventilátory - typ EURO | 1 / 1 | https://www.premiumstore.sk/ventilatory-typ-euro/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady DOSPEL > Ventilátory - typ RICO | 1 / 1 | https://www.premiumstore.sk/ventilatory-typ-rico/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - základní > Pre průměr potrubie 150 mm | 1 / 1 | https://www.premiumstore.sk/pre-prumer-potrubie-150-mm-3/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - základní > Pre průměr potrubie 125 mm | 1 / 1 | https://www.premiumstore.sk/pre-prumer-potrubie-125-mm-2/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - do potrubie > Pre průměr potrubie 150 mm | 1 / 1 | https://www.premiumstore.sk/pre-prumer-potrubie-150-mm-2/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - do potrubie > Pre průměr potrubie 125 mm | 1 / 1 | https://www.premiumstore.sk/pre-prumer-potrubie-125-mm/ |
| Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - do potrubie > Pre průměr potrubie 100 mm | 1 / 1 | https://www.premiumstore.sk/pre-prumer-potrubie-100-mm-3/ |
| Šport, hračky a voľný čas > Hračky > Výtvarné hračky a tvoření > Detská razítka | 1 / 1 | https://www.premiumstore.sk/detska-razitka/ |
| Šport, hračky a voľný čas > Hračky > Výtvarné hračky a tvoření > Kreativní sady | 1 / 1 | https://www.premiumstore.sk/kreativni-sady/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Obkladačské práce > Kříže a klinky | 1 / 1 | https://www.premiumstore.sk/krize-a-klinky/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Obkladačské práce > Pomôcky | 1 / 1 | https://www.premiumstore.sk/pomocky/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Malířství a natěračství > Kefy | 1 / 1 | https://www.premiumstore.sk/kefy/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Malířství a natěračství > Vedrá | 1 / 1 | https://www.premiumstore.sk/vedra-2/ |
| Náradie a dielňa > Mechanické náradie > Príslušenstvo ku gola sadám > Rázové hlavice | 1 / 1 | https://www.premiumstore.sk/razove-hlavice/ |
| Náradie a dielňa > Mechanické náradie > Príslušenstvo ku gola sadám > Nástrčné hlavice > 3/8" bity | 1 / 1 | https://www.premiumstore.sk/3-8--bity/ |
| Elektroinštalačný materiál > Ventilačné technika > Mřížky > Plastové mřížky do dveří | 1 / 1 | https://www.premiumstore.sk/plastove-mrizky-do-dveri/ |
| Elektroinštalačný materiál > Ventilačné technika > Mřížky > Mřížka sa síťkou bez nadstavce s regulací | 1 / 1 | https://www.premiumstore.sk/mrizka-sa-sitkou-bez-nadstavce-s-regulaci/ |
| Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Ventilátory > Stolové ventilátory | 1 / 1 | https://www.premiumstore.sk/stolove-ventilatory/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Navijaky a zdviháky > Navijaky | 1 / 1 | https://www.premiumstore.sk/navijaky/ |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Navijaky a zdviháky > Zdviháky a heváky | 1 / 1 | https://www.premiumstore.sk/zdvihaky-a-hevaky/ |
| Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VK EC | 1 / 1 | https://www.premiumstore.sk/ventilatory-typ-vk-ec/ |
| Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VCN | 1 / 1 | https://www.premiumstore.sk/ventilatory-typ-vcn/ |
| Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ OV1 | 1 / 1 | https://www.premiumstore.sk/ventilatory-typ-ov1/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Kia > Optima | 1 / 1 | https://www.premiumstore.sk/optima/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Kia > Cerato | 1 / 1 | https://www.premiumstore.sk/cerato/ |
| TV, audio a video > Počítače a príslušenstvo > Klávesnice > K televizi | 1 / 1 | https://www.premiumstore.sk/k-televizi/ |
| TV, audio a video > Antény a satelity > CAM dekodéry a karty > Dekódovací karty | 1 / 1 | https://www.premiumstore.sk/dekodovaci-karty/ |
| Náradie a dielňa > Mechanické náradie > Vodo-topo > Rezačky | 1 / 1 | https://www.premiumstore.sk/rezacky/ |
| Náradie a dielňa > Pneumatické náradie > Pištole > Foukací pištole | 1 / 1 | https://www.premiumstore.sk/foukaci-pistole/ |
| Náradie a dielňa > Kancelária a škola > Školské potreby > Školské batohy, aktovky > Školské aktovky | 1 / 1 | https://www.premiumstore.sk/skolske-aktovky/ |
| TV, audio a video > Antény a satelity > Satelitné príslušenstvo > DiSEqC prepínače > Pre 2 LNB | 1 / 1 | https://www.premiumstore.sk/pre-2-lnb/ |
| Náradie a dielňa > Elektrické a AKU náradie > Príslušenstvo k vrtačkám > Sklíčidla | 1 / 1 | https://www.premiumstore.sk/sklicidla/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Brusivo > Príslušenstvo | 1 / 1 | https://www.premiumstore.sk/prislusenstvo-17/ |
| TV, audio a video > Audio technika > Slúchadlá > Slúchadlá Bluetooth | 1 / 1 | https://www.premiumstore.sk/sluchadla-bluetooth/ |
| TV, audio a video > Príslušenstvo > Bezdrátové přenosy signálu > AUDIO přenosy | 1 / 1 | https://www.premiumstore.sk/audio-prenosy/ |
| TV, audio a video > Príslušenstvo > Bezdrátové přenosy signálu > Bluetooth | 1 / 1 | https://www.premiumstore.sk/bluetooth/ |
| Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Efekty a dekorácie > Halloween | 1 / 1 | https://www.premiumstore.sk/halloween/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Citroën > Jumper | 1 / 1 | https://www.premiumstore.sk/jumper/ |
| Auto-moto > Vybavenie auta > Autopotahy > Univerzálne autopotahy - dvě sedadla > Autotrička BAVLNA | 1 / 1 | https://www.premiumstore.sk/autotricka-bavlna/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Ford > Explorer | 1 / 1 | https://www.premiumstore.sk/explorer/ |
| Auto-moto > Vybavenie auta > Autopotahy > Univerzálne autopotahy - dodávky > Autopotahy PRACTICAL dodávka | 1 / 1 | https://www.premiumstore.sk/autopotahy-practical-dodavka/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Sponkovačky a nastreľovačky > Spony | 1 / 1 | https://www.premiumstore.sk/spony/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Volvo > S60 | 1 / 1 | https://www.premiumstore.sk/s60/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Toyota > Land Cruiser | 1 / 1 | https://www.premiumstore.sk/land-cruiser/ |
| Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Toyota > Camry | 1 / 1 | https://www.premiumstore.sk/camry/ |
| Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kuchynské riad > Panvice | 1 / 1 | https://www.premiumstore.sk/panvice-2/ |
| Náradie a dielňa > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Nožnice > Nožnice na plech | 1 / 1 | https://www.premiumstore.sk/noznice-na-plech/ |
| Náradie a dielňa > Stavebné a maliarske náradie > Upínacie prostriedky > Háčiky | 1 / 1 | https://www.premiumstore.sk/haciky/ |
| Dróny a RC modely > Nástroje a meradlá | 1 / 1 | https://www.premiumstore.sk/nastroje-a-meradla/ |
| Dróny a RC modely > Podvodné drony | 1 / 1 | https://www.premiumstore.sk/podvodne-drony/ |
| TV, audio a video > Mobily a tablety > Nabíjačky > Bezdrôtové nabíjačky | 1 / 1 | https://www.premiumstore.sk/bezdrotove-nabijacky/ |
| Bezpečnosť a smart domácnosť > Osvetlenie > Svietidlá | 1 / 1 | https://www.premiumstore.sk/svietidla-5/ |
| Bezpečnosť a smart domácnosť > Osvetlenie > Iné | 1 / 1 | https://www.premiumstore.sk/ine-3/ |
| Bezpečnosť a smart domácnosť > Prvky výkonu > Smart zástrčky > Napájacie lišty | 1 / 1 | https://www.premiumstore.sk/napajacie-listy-2/ |
| TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Podložky pod myš | 1 / 1 | https://www.premiumstore.sk/podlozky-pod-mys-2/ |
| TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Herné príslušenstvo - docky, stojany | 1 / 1 | https://www.premiumstore.sk/herne-prislusenstvo-docky--stojany/ |
| Šport, hračky a voľný čas > Príslušenstvo pre bicykle > Cyklotašky | 1 / 1 | https://www.premiumstore.sk/cyklotasky-2/ |
| Šport, hračky a voľný čas > Príslušenstvo pre bicykle > Náhradné diely a nástroje | 1 / 1 | https://www.premiumstore.sk/nahradne-diely-a-nastroje/ |
| Šport, hračky a voľný čas > Príslušenstvo pre bicykle > Oblečenie | 1 / 1 | https://www.premiumstore.sk/oblecenie/ |
| TV, audio a video > Mobily a tablety > Smart hodinky > Príslušenstvo | 1 / 1 | https://www.premiumstore.sk/prislusenstvo-41/ |
| TV, audio a video > Počítače a príslušenstvo > Káble > Video káble | 1 / 1 | https://www.premiumstore.sk/video-kable/ |
| Auto-moto > Videorekordéry > Príslušenstvo | 1 / 1 | https://www.premiumstore.sk/prislusenstvo-19/ |
| Kreatívne technológie > Metalurgia | 1 / 1 | https://www.premiumstore.sk/metalurgia/ |
| TV, audio a video > Foto a optika > Kamery > Insta | 1 / 1 | https://www.premiumstore.sk/insta/ |
| TV, audio a video > Foto a optika > Kamery > Akaso | 1 / 1 | https://www.premiumstore.sk/akaso/ |
| TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Herné podložky > Príslušenstvo | 1 / 1 | https://www.premiumstore.sk/prislusenstvo-25/ |
| TV, audio a video > Mobily a tablety > Tablety > Iné | 1 / 1 | https://www.premiumstore.sk/ine-4/ |
| Šport, hračky a voľný čas > Outdoor > Rybárčenie > Ostatné | 1 / 1 | https://www.premiumstore.sk/ostatne-24/ |
| Profesionálna audio technika > ZZIPP | 1 / 1 | https://www.premiumstore.sk/zzipp/ |
| Profesionálna audio technika > Pódium, diskotéka, DJ > Chrániče sluchu | 1 / 1 | https://www.premiumstore.sk/chranice-sluchu-2/ |
| Profesionálna audio technika > Pódium, diskotéka, DJ > transportné kufre a racky > tašky | 1 / 1 | https://www.premiumstore.sk/tasky-3/ |
| Profesionálna audio technika > Káble, konektory a redukcie > Káble > BNC | 1 / 1 | https://www.premiumstore.sk/bnc-2/ |
| Profesionálna audio technika > Káble, konektory a redukcie > Káble > video na kotúči | 1 / 1 | https://www.premiumstore.sk/video-na-kotuci/ |
| Profesionálna audio technika > Káble, konektory a redukcie > Káble > USB | 1 / 1 | https://www.premiumstore.sk/usb/ |
| Profesionálna audio technika > Car audio > Poistky, púzdra, distribútory | 1 / 1 | https://www.premiumstore.sk/poistky--puzdra--distributory/ |
| Profesionálna audio technika > Reproduktory > náhradné cievky | 1 / 1 | https://www.premiumstore.sk/nahradne-cievky/ |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Reproduktory > záhradné | 1 / 1 | https://www.premiumstore.sk/zahradne/ |
| Profesionálna audio technika > Pódium, diskotéka, DJ > Slúchadlá > špeciálne | 1 / 1 | https://www.premiumstore.sk/specialne-3/ |
| Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Meracie prístroje > Meracie káble a konektory | 1 / 1 | https://www.premiumstore.sk/meracie-kable-a-konektory/ |
| Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Meracie prístroje > Merače úrovne zvuku | 1 / 1 | https://www.premiumstore.sk/merace-urovne-zvuku/ |
| Profesionálna audio technika > Pódium, diskotéka, DJ > reproduktorové systémy > štúdiové | 1 / 1 | https://www.premiumstore.sk/studiove/ |
| Profesionálna audio technika > Car audio > Reproduktory > výškové | 1 / 1 | https://www.premiumstore.sk/vyskove-2/ |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Systémy požiarneho a evakuačného rozhlasu > Mikrofóny | 1 / 1 | https://www.premiumstore.sk/mikrofony-5/ |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Systémy požiarneho a evakuačného rozhlasu > systémové kontroléry | 1 / 1 | https://www.premiumstore.sk/systemove-kontrolery/ |
| Profesionálna audio technika > Káble, konektory a redukcie > Neutrik > RCA | 1 / 1 | https://www.premiumstore.sk/rca-3/ |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Iné 100V zariadenia > núdzové napájanie | 1 / 1 | https://www.premiumstore.sk/nudzove-napajanie/ |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Iné 100V zariadenia > eliminátor spätnej väzby | 1 / 1 | https://www.premiumstore.sk/eliminator-spatnej-vazby/ |
| Profesionálna audio technika > Svetlá > Otočné hlavy a skenery > Skenery | 1 / 1 | https://www.premiumstore.sk/skenery/ |
| Profesionálna audio technika > JTS > Inštalácie > Bezdrôtový systém pre kamery | 1 / 1 | https://www.premiumstore.sk/bezdrotovy-system-pre-kamery/ |
| Profesionálna audio technika > Svetlá > Reflektory PAR > príslušenstvo | 1 / 1 | https://www.premiumstore.sk/prislusenstvo-36/ |
| Profesionálna audio technika > Svetlá > Reflektory PAR > LED reflektory exteriérové | 1 / 1 | https://www.premiumstore.sk/led-reflektory-exterierove/ |
| Profesionálna audio technika > BZBGEAR > HDMI spracovanie a distribúcia | 1 / 1 | https://www.premiumstore.sk/hdmi-spracovanie-a-distribucia/ |
| Profesionálna audio technika > Svetlá > Lasery > Red Laser | 1 / 1 | https://www.premiumstore.sk/red-laser/ |
| Profesionálna audio technika > Svetlá > Lasery > Blue Laser | 1 / 1 | https://www.premiumstore.sk/blue-laser/ |
| Elektroinštalačný materiál > Osvetlenie > LED osvetlenie > Núdzové osvetlenie | 1 / 1 | https://www.premiumstore.sk/nudzove-osvetlenie/ |
| Domáce spotrebiče > Malé spotrebiče > Dezinfekčné lampy > Príslušenstvo, náhradné diely | 1 / 1 | https://www.premiumstore.sk/prislusenstvo--nahradne-diely/ |
| Náradie a dielňa > Ručné AKU náradie > Nožnice | 1 / 1 | https://www.premiumstore.sk/noznice-2/ |
| Náradie a dielňa > Meracia technika > Teplomery | 1 / 1 | https://www.premiumstore.sk/teplomery-4/ |
| TV, audio a video > AV káble > Video > SCART > Káble | 1 / 1 | https://www.premiumstore.sk/kable-6/ |
| TV, audio a video > Počítače a príslušenstvo > Napájacie zdroje > Napájacie zdroje pre notebooky | 1 / 1 | https://www.premiumstore.sk/napajacie-zdroje-pre-notebooky/ |

## Overene prázdne — pripravené na vypnutie (252)

- TV, audio a video > Drony
- TV, audio a video > Audio - video káble
- TV, audio a video > Audio technika > Mixážne pulty
- TV, audio a video > Audio technika > Karaoke
- Domáce spotrebiče > Malé spotrebiče > Čistenie
- Auto-moto > Nosiče bicyklov
- Auto-moto > Karavany a obytné autá
- Auto-moto > Prenosné chladničky
- Auto-moto > Ostatné
- Auto-moto > Autorádiá > Subwoofery do autá
- TV, audio a video > Audio technika > HiFi komponenty > Tunery a sieťové prehrávače
- TV, audio a video > Počítače a príslušenstvo > Ostatné
- TV, audio a video > Počítače a príslušenstvo > Smartphones
- TV, audio a video > Počítače a príslušenstvo > Myši
- TV, audio a video > Počítače a príslušenstvo > Sieťové prvky > IP kamery
- TV, audio a video > Mobily a tablety > Domáce telefóny
- TV, audio a video > Mobily a tablety > Prstencové držiaky
- TV, audio a video > Mobily a tablety > Ostatné
- TV, audio a video > Mobily a tablety > Držiaky telefónov
- TV, audio a video > Mobily a tablety > Domáce telefóny > Drátové telefóny
- Zdravie a starostlivosť > Holiace strojčeky a zastrihávače
- Zdravie a starostlivosť > Ústne sprchy
- Zdravie a starostlivosť > Erotika
- Domáce spotrebiče > Malé spotrebiče > Žehličky > Domové alarmy a zvončeky
- Náradie a dielňa > Ostatné
- Náradie a dielňa > Meracie nástroje
- Náradie a dielňa > Stavebné náradie
- Náradie a dielňa > Výtlačné a kartušové pištole
- Náradie a dielňa > Náradie > Elektrické náradie > Vŕtačky
- Záhrada > Zavlažovacie systémy
- Záhrada > Záhradné potreby > Lapače, odpudzovače hmyzu a škodcov
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Odkôstkovače
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Krájače a porcovače
- TV, audio a video > Príslušenstvo k TV, audio, video > Diaľkové ovládače
- TV, audio a video > Príslušenstvo k TV, audio, video > Batérie a nabíjačky > Mikrotužkové AAA
- TV, audio a video > Audio - video káble > HDMI káble
- TV, audio a video > Audio - video káble > Redukcie
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Meteostanice, teplomery, vlhkomery
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Testery alkoholu
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Vonné oleje
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Filtračné kanvice
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Aroma difuzéry
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Hodiny a budíky
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kuchynské váhy
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Formy na pečení
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Osobné váhy
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kuchynské pomôcky
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Starostlivosť o telo
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kanvice na čaj
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Těsnění do okien a dveří
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Nože a příbory
- Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre hoblíky a sústruhy
- Bezpečnosť a smart domácnosť > Príslušenstvo
- Bezpečnosť a smart domácnosť > Smart domácnosť > Smart potreby do domácnosti
- Bezpečnosť a smart domácnosť > Smart domácnosť > IP kamery
- Bezpečnosť a smart domácnosť > Smart domácnosť > Ostatné smart elektronika
- Bezpečnosť a smart domácnosť > Smart domácnosť > Robotické vysávače
- TV, audio a video > Foto a optika > Príslušenstvo > Ostatné
- Šport, hračky a voľný čas > Fitness Vybavenie
- Šport, hračky a voľný čas > Turizmus
- Šport, hračky a voľný čas > Exoskelety
- Šport, hračky a voľný čas > Hračky > Pre kojencov
- Domáce spotrebiče > Veľké spotrebiče > Umývačky riadu > Príslušenstvo k umývačke
- TV, audio a video > Počítače a príslušenstvo > Herné zariadenia > Príslušenstvo ku konzolám > Xbox One - príslušenstvo
- Náradie a dielňa > Náradie > Stavebné materiál, chémia a technika > Elektroinštalačný materiál
- Náradie a dielňa > Náradie > Stavebné materiál, chémia a technika > Elektroinštalačný materiál > Predlžovacie káble
- Náradie a dielňa > Náradie > Stavebné materiál, chémia a technika > Elektroinštalačný materiál > Ističe, inštalačné krabice, rozvádzače
- Náradie a dielňa > Náradie > Stavebné materiál, chémia a technika > Elektroinštalačný materiál > Svorkovnice a Wago svorky
- TV, audio a video > Televízory > LED televízory
- TV, audio a video > Televízory > QLED, NeoQLED televízory
- TV, audio a video > Televízory > OLED televízory
- TV, audio a video > Televízory > UHD(4K) televízory
- TV, audio a video > Televízory > nad 48" (120 - 165 cm)
- TV, audio a video > Televízory > Televízory Ultra HD (4K)
- TV, audio a video > Televízory > 32" (80 - 82 cm)
- TV, audio a video > Televízory > 43" (108 - 109 cm)
- TV, audio a video > Televízory > do 30" (76 cm)
- TV, audio a video > Televízory > Televízory
- TV, audio a video > Počítače a príslušenstvo > Tablety > Tablety
- Fotovoltaika a energie > Nabíjačky > Stanice pre elektrokola
- Domáce spotrebiče > Malé spotrebiče > Žehličky > Domové alarmy a zvončeky > Bezpečnostní kamery
- Zdravie a starostlivosť > Chovateľské potreby > Ostatné príslušenstvo
- Zdravie a starostlivosť > Chovateľské potreby > Starostlivosť o zvieratá
- Šport, hračky a voľný čas > Posilňovanie a fitness > Príslušenstvo pre posilňovanie
- Šport, hračky a voľný čas > Cyklistika > Elektrokola
- Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Ostatné
- Záhrada > Záhradné doplnky > Bazény a doplnky > Teplomery do bazénů
- Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Flexo šnúry
- Auto-moto > Karavany a obytné autá > Grily a variče
- Auto-moto > Karavany a obytné autá > Parkovací asistenti
- Auto-moto > Karavany a obytné autá > Kempingový nábytok
- Auto-moto > Karavany a obytné autá > Autochladničky
- Auto-moto > Karavany a obytné autá > Batérie do karavanu
- Auto-moto > Karavany a obytné autá > Meniče napätie
- Auto-moto > Karavany a obytné autá > Redukcie a adaptéry
- Auto-moto > Karavany a obytné autá > Nabíjačky batérií
- Auto-moto > Karavany a obytné autá > Ostatné doplnky
- Auto-moto > Karavany a obytné autá > Lapače hmyzu
- Auto-moto > Karavany a obytné autá > Mobilné TV a SAT antény
- Auto-moto > Karavany a obytné autá > Televízory na 12V
- TV, audio a video > Antény a satelity > Satelitné príslušenstvo > Slučovače SAT+TV
- Záhrada > Záhradné doplnky > Zavlažovanie > Hadice
- Auto-moto > Audio, Hi-Fi > Reproduktory do autá
- Auto-moto > Audio, Hi-Fi > Autorádiá
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Upratovanie > Metly a mopy na upratovanie
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Upratovanie > Handry, houbičky a utěrky na upratovanie
- TV, audio a video > AV káble > AV káble
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Pece na pizzu
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Grily
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Mixéry
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Kávovary
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Palacinkovače
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Kuchynské roboty
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Vaflovače
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Sušičky potravín
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Hriankovače
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Sendvičovače
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Zváračky folií
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Fritézy
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Vysávače
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Elektrické hrnce
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Variče
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Rýchlovarné kanvice
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Elektrické panvice
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Výrobníky ľadu
- Elektroinštalačný materiál > Káble a vodiče > Koaxiálne káble > Železné
- Záhrada > Záhradné stroje > Píly
- Záhrada > Záhradné stroje > Záhradné nožnice
- Šport, hračky a voľný čas > Turistika > Cestování a outdoor
- Fotovoltaika a energie > Akumulátory a batérie > Príslušenstvo > Očká, fastóny, dutinky, spojky > Káblové spojky
- Fotovoltaika a energie > Akumulátory a batérie > Príslušenstvo > Očká, fastóny, dutinky, spojky > Káblová očká
- Fotovoltaika a energie > Akumulátory a batérie > Príslušenstvo > Očká, fastóny, dutinky, spojky > Fastóny
- Fotovoltaika a energie > Akumulátory a batérie > Príslušenstvo > Očká, fastóny, dutinky, spojky > Sady fastonů
- Fotovoltaika a energie > Akumulátory a batérie > Príslušenstvo > Očká, fastóny, dutinky, spojky > Kolíky
- Auto-moto > Nabíjanie > Štartovacie káble
- Náradie a dielňa > Stavebné a maliarske náradie > Sadrokartón
- Náradie a dielňa > Mechanické náradie > Kladivá, dláta, sekery > Výsečníky
- TV, audio a video > Antény a satelity > SATELITNÉ PRIJÍMAČE > Skylink ready prijímače
- Elektroinštalačný materiál > Ventilačné technika > Krbové ventilátory
- Záhrada > Odpudzovače a lapače hmyzu > Odpudzovače a lapače hmyzu
- Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ PF
- TV, audio a video > Počítače a príslušenstvo > Disky a pamäťové karty > USB flash disky
- Fotovoltaika a energie > Fotovoltaika > Solárne panely > Flexibilní solárne panely
- Šport, hračky a voľný čas > Sportovní vybavenie > Odražedla
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Hodiny a budíky > Budíky
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Hodiny a budíky > Hodiny
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Hodiny a budíky > Časovače, minútky
- Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové videorekordéry (NVR) > 64 kanálů
- Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové příchytky a držiaky > Páskové hmoždinky
- Náradie a dielňa > Elektronické súčiastky > Poistky, pojistkové držiaky > Poistky 5x20mm rychlé (F)
- Náradie a dielňa > Elektronické súčiastky > Poistky, pojistkové držiaky > Poistky 5x20mm pomalé (T)
- Náradie a dielňa > Elektronické súčiastky > Poistky, pojistkové držiaky > Poistky 6x30mm
- Záhrada > Záhradné náradie > Záhradné nožnice > Záhradné nožnice
- Elektroinštalačný materiál > Komponenty pre svietidlá > LED světelné zdroje
- Elektroinštalačný materiál > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá > Svorky - SLK 3 > 2-pólové svorky - SLK 3/2
- Elektroinštalačný materiál > Komponenty pre svietidlá > Objímky > Príslušenstvo k objímkám
- Auto-moto > Karavany a obytné autá > Nabíjačky batérií > Autonabíjačky
- Auto-moto > Nosiče bicyklov > Príslušenstvo
- Auto-moto > Nosiče bicyklov > Příčné nosníky
- Auto-moto > Nosiče bicyklov > Nosiče na tažné zariadenie
- Auto-moto > Nosiče bicyklov > Střešní nosiče
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Doplnky do domácnosti > Sušiaky na bielizeň
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Doplnky do domácnosti > Koše na bielizeň
- Záhrada > Záhradné stroje > Píly > Lišty, reťaze, pilníky
- Záhrada > Záhradné stroje > Píly > Lišty, reťaze, pilníky > Lišty
- Náradie a dielňa > Elektrické a AKU náradie > Píly > Píly reťazové
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kuchynské pomôcky > Ostatné kuchynské pomôcky
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kuchynské pomôcky > Lúskačky
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kuchynské pomôcky > Teplomery
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kuchynské pomôcky > Varešky a obracačky
- Náradie a dielňa > Kancelária a škola > Školské potreby > Peračníky
- Auto-moto > Karavany a obytné autá > Mobilné TV a SAT antény > Antény pre DVB-T2 príjem
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Vysávače > Ručné vysávače
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Vysávače > Tyčové vysávače
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Vysávače > Robotické vysávače
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Vysávače > Podlahové vysávače
- Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ OV
- Šport, hračky a voľný čas > Hračky > Vybavenie pokojíčků a školek > Hracie funkční nábytok
- Náradie a dielňa > Mechanické náradie > Vodo-topo > Horáky
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Starostlivosť o telo > Kulmy a sušiče vlasů
- Náradie a dielňa > Stavebné a maliarske náradie > Sadrokartón > Hoblíky
- Elektroinštalačný materiál > Ventilačné technika > Krbové ventilátory > Ventilátory KAM
- TV, audio a video > Audio technika > Slúchadlá > Slúchadlá
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Efekty a dekorácie > Na párty
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Efekty a dekorácie > Do bytu
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Nože a příbory > Brousky na nože
- TV, audio a video > Mobily a tablety > Kable USB I > USB-C na Lightning
- Šport, hračky a voľný čas > Outdoor > Kempovanie
- Šport, hračky a voľný čas > Outdoor > Príslušenstvo na kľuky
- Bezpečnosť a smart domácnosť > Prvky výkonu > Senzory
- Zdravie a starostlivosť > Holiace strojčeky a zastrihávače > Zastrihávače
- Zdravie a starostlivosť > Holiace strojčeky a zastrihávače > Holiace strojčeky
- TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Ostatné
- TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Osvetlenie
- TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Príslušenstvo pre PlayStation
- TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Zostavy a sety
- Zdravie a starostlivosť > Prístroje na tvár > Kavitačné peelingy
- Zdravie a starostlivosť > Sonické zubné kefky > Sonické zubné kefky
- TV, audio a video > Mobily a tablety > Smart hodinky > Smart hodinky
- TV, audio a video > Počítače a príslušenstvo > Káble > Sieťové káble
- Auto-moto > Videorekordéry > Videorekordéry
- Náradie a dielňa > Kancelária a škola > Tlačiarne štítkov > Tlačiarne štítkov
- Zdravie a starostlivosť > Ústne sprchy > Ústne sprchy
- Kreatívne technológie > Potlač textilu
- Kreatívne technológie > Roboty
- Bezpečnosť a smart domácnosť > Prvky výkonu > Smart kúrenie > Ovládače klimatizácie > tepelného čerpadla
- Zdravie a starostlivosť > Matka a dieťa > Detská izba
- Zdravie a starostlivosť > Matka a dieťa > Detská izba > Hodinky a budíky
- Fotovoltaika a energie > Elektrické stanice > Príslušenstvo
- Fotovoltaika a energie > Elektrické stanice > Elektrické stanice
- Zdravie a starostlivosť > Erotika > Vibrátory
- Fotovoltaika a energie > Fotovoltaické panely > Príslušenstvo
- Fotovoltaika a energie > Fotovoltaické panely > Fotovoltaické panely
- Fotovoltaika a energie > Fotovoltaické panely > Balkónové systémy
- TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Klávesnice > Káblové
- Kreatívne technológie > Roboty > Roboty Humanoidalne
- Kreatívne technológie > Roboty > Roboty Humanoidalne > Seria R1
- Profesionálna audio technika > Špeciálna ponuka + Akciové sety
- Profesionálna audio technika > Multi-room
- Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Skrinky Do It Yourself
- Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Príslušenstvo a iné
- Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Chémia
- Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Napájanie
- Profesionálna audio technika > Pódium, diskotéka, DJ > Pódiové, DJ príslušenstvo
- Profesionálna audio technika > Pódium, diskotéka, DJ > Káble a príslušenstvo
- Profesionálna audio technika > Pódium, diskotéka, DJ > Distribútory
- Profesionálna audio technika > Pódium, diskotéka, DJ > ozvučovacie systémy
- Profesionálna audio technika > Car audio > Príslušenstvo Car audio
- Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Prenosné ozvučovacie systémy
- Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > IP ozvučenie
- Profesionálna audio technika > Tlmočnícke, sprievodcovské a konferenčné systémy > Bezdrôtový, sprievodcovský systém > nabíjačky a príslušenstvo
- Profesionálna audio technika > Pódium, diskotéka, DJ > Statívy/držiaky > príslušenstvo
- Profesionálna audio technika > Pódium, diskotéka, DJ > Statívy/držiaky > hudobných nástrojov a nôt
- Profesionálna audio technika > Svetlá > Statívy a príslušenstvo
- Profesionálna audio technika > Svetlá > Architektonické osvetlenie
- Profesionálna audio technika > Svetlá > Svetelné efekty
- Profesionálna audio technika > Svetlá > Ovládače a kontroléry
- Profesionálna audio technika > Pódium, diskotéka, DJ > Príslušenstvo k reproduktorom > Iné
- Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Spájkovacie stanice > príslušenstvo
- Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Spájkovacie stanice > Spajkovacie stanice
- Profesionálna audio technika > Káble, konektory a redukcie > Neutrik > Speakon
- Profesionálna audio technika > Svetlá > Otočné hlavy a skenery > Moving Heads Wash
- Profesionálna audio technika > JTS > Inštalácie > Konferenčné systémy
- Profesionálna audio technika > JTS > Slúchadlá > Slúchadlá
- Profesionálna audio technika > Svetlá > Reflektory PAR > LED reflektory
- Profesionálna audio technika > Svetlá > Špeciálne efekty a náplne > Ohňostroje
- Profesionálna audio technika > Svetlá > Lasery > Multicolor Laser
- TV, audio a video > AV káble > Anténa > Konektory a redukcie > F-konektor
- Elektroinštalačný materiál > Ostatné > Izolačný materiál > Káblové príchytky
- Elektroinštalačný materiál > Osvetlenie > LED panely a podhľadová svetla > Příslušenstvo
- Profesionálna audio technika > Hudobné nástroje a príslušenstvo > Klávesové zosilňovače
- Druhy > AKCE ATOS 35 LET

# Nezaradené kategórie — atos

Vygenerované automaticky pri poslednom behu importu. Tieto kategórie z feedu sa
nezhodujú so žiadnou existujúcou kategóriou v `data/known-categories.json` (živý strom
Shoptetu) ani s jej blízkym pravopisným variantom — produkty pod nimi sa preto
**NEIMPORTUJÚ**, kým sa niekto nerozhodne, kam patria:
- ak ide o skutočne novú, žiadanú kategóriu → pridať ju do Shoptetu a znova spustiť
  `node scripts/build-known-categories.js <čerstvý export> data/known-categories.json`,
- ak má patriť pod existujúcu kategóriu inak pomenovanú → pridať záznam do
  `categoryRenamesByPath` v `scripts/atos-mapping.json`.

**1 nenapárovaných kategórií, 1 produktov nenaimportovaných.**

| Kategória z feedu | Počet produktov | Príklady produktov |
|---|---|---|
| Druhy > AKCE ATOS 35 LET | 1 | Záložní zdroj VOLT POLSKA SINUS UPS 800 + AKU 55Ah / 800VA / 500W |

## Automaticky napárované na existujúcu kategóriu (blízky pravopisný variant)

| Kategória z feedu | Napárované na | Zhoda | Počet produktov |
|---|---|---|---|
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > IP kamery | Elektro, Smart Home a osvetlenie > IP kamery | 86% | 25 |
| Počítače, mobily a tablety > Dokovací stanice | Počítače, mobily a tablety > Dokovacie stanice | 94% | 1 |

## Zložená cesta preložená cez starý koreň

`categoryRenamesByPath` prepisuje iba prefix cesty, takže vznikla cesta s novým
koreňom a starým chvostom. Zaradenie je odvodené z `data/stary-novy-strom.json`.

| Cesta z feedu | Zaradené do | Počet produktov |
|---|---|---|
| Elektro, Smart Home a osvetlenie > Ventilačné technika | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 484 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 458 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 448 |
| Dielňa, náradie a záhrada > MERACIE TECHNIKA | Dielňa, náradie a záhrada > Meracia technika | 373 |
| Energia a napájanie > Akumulátory a batérie > Očká, fastóny, dutinky, spojky | Energia a napájanie > Akumulátory a batérie | 323 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 276 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 269 |
| Dielňa, náradie a záhrada > Mechanické náradie | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 264 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie a rozbočovacie svorky | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 256 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 232 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 207 |
| Dielňa, náradie a záhrada > Elektronické súčiastky > Arduino a moduly | Dielňa, náradie a záhrada > Elektronické súčiastky | 203 |
| Dielňa, náradie a záhrada > SPÁJKOVACIE TECHNIKA | Dielňa, náradie a záhrada > Spájkovacia technika | 188 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 183 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 182 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Rozvádzače samostatné | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 166 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Pomôcky na cvičenie | Cestovanie, šport a outdoor > Posilňovanie a fitness | 157 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 141 |
| Cestovanie, šport a outdoor > Turistika | Cestovanie, šport a outdoor > Turistika a outdoor | 136 |
| Cestovanie, šport a outdoor > Sportovní vybavenie | Cestovanie, šport a outdoor > Športové vybavenie | 136 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Priemyselné vidlica a zásuvky | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 133 |
| Energia a napájanie > Akumulátory a batérie > Očká, fastóny, dutinky, spojky > Káblová očká | Energia a napájanie > Akumulátory a batérie | 118 |
| Dielňa, náradie a záhrada > MERACIE TECHNIKA > Ampérmetre a voltmetre | Dielňa, náradie a záhrada > Meracia technika > Multimetre a kliešťové merače | 117 |
| Cestovanie, šport a outdoor > Bojové športy > Boxerské rukavice | Cestovanie, šport a outdoor > Bojové športy | 116 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 115 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie a rozbočovacie svorky > Univerzálne svorky | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 111 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Činky a príslušenstvo | Cestovanie, šport a outdoor > Posilňovanie a fitness | 111 |
| Energia a napájanie > Fotovoltaika > Konštrukcia pre solárne panely | Energia a napájanie > Fotovoltaika | 105 |
| Energia a napájanie > Fotovoltaika > Káble pre fotovoltaiku | Energia a napájanie > Fotovoltaika | 104 |
| Energia a napájanie > Akumulátory a batérie > Olovené akumulátory | Energia a napájanie > Akumulátory a batérie | 103 |
| Energia a napájanie > Fotovoltaika > Rozvádzače | Energia a napájanie > Fotovoltaika | 103 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Vzduchovody | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 103 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > LG | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 102 |
| Dielňa, náradie a záhrada > Elektronické súčiastky > Arduino a moduly > Príslušenstvo Arduino | Dielňa, náradie a záhrada > Elektronické súčiastky | 102 |
| Energia a napájanie > Akumulátory a batérie > Olovené akumulátory > 12V | Energia a napájanie > Akumulátory a batérie | 87 |
| TV, audio, video a foto technika > Antény a satelity > Konektory | TV, audio, video a foto technika > Antény a satelity | 85 |
| Dielňa, náradie a záhrada > Elektronické súčiastky > Poistky, pojistkové držiaky | Dielňa, náradie a záhrada > Elektronické súčiastky | 82 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Pomôcky na cvičenie > Pomôcky na cvičenie doma | Cestovanie, šport a outdoor > Posilňovanie a fitness | 77 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Zásuvkové skrine | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 77 |
| TV, audio, video a foto technika > Antény a satelity > ZOSILŇOVAČE | TV, audio, video a foto technika > Antény a satelity | 76 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie a rozbočovacie svorky > Rozbočovacie svorky | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 76 |
| Elektro, Smart Home a osvetlenie > Inštalačné náradie a ostatné materiál | Elektro, Smart Home a osvetlenie > Inštalačné náradie a materiál | 75 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 74 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Vidlica a zásuvky | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 74 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Káblová oká | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 72 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Káblové spojky | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 72 |
| TV, audio, video a foto technika > Antény a satelity > Držiaky stožárů | TV, audio, video a foto technika > Antény a satelity | 72 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice > Zásuvkové bloky a lišty | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 70 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie lišty | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 69 |
| Dielňa, náradie a záhrada > SPÁJKOVACIE TECHNIKA > Príslušenstvo pre spájkovačky | Dielňa, náradie a záhrada > Spájkovacia technika > Príslušenstvo na spájkovanie | 68 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Priemyselné vidlica a zásuvky > Priemyselné zásuvky | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 68 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Samsung | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 66 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Rozvádzače osadené | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 65 |
| TV, audio, video a foto technika > Antény a satelity > Satelitné príslušenstvo | TV, audio, video a foto technika > Antény a satelity | 65 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Elektromery na DIN lištu | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 64 |
| Dielňa, náradie a záhrada > Ochranné pomôcky a odevy | Dielňa, náradie a záhrada > Dielenské vybavenie > Ochranné pomôcky a odevy | 63 |
| Elektro, Smart Home a osvetlenie > Káble a vodiče > Silové káble | Elektro, Smart Home a osvetlenie > Káble a vodiče | 62 |
| Dielňa, náradie a záhrada > Drobné náradie a príslušenstvo | Dielňa, náradie a záhrada > Dielenské vybavenie > Sťahovacie pásky a drobné príslušenstvo | 62 |
| Energia a napájanie > Fotovoltaika > Ochrana FV instalací | Energia a napájanie > Fotovoltaika | 61 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice > Vypínače a zásuvky GALATEA IP44 | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 61 |
| TV, audio, video a foto technika > Antény a satelity > PASIVNÍ PRVKY | TV, audio, video a foto technika > Antény a satelity | 60 |
| TV, audio, video a foto technika > Antény a satelity > Spojovacie a kotevní materiál, chémia | TV, audio, video a foto technika > Antény a satelity | 60 |
| TV, audio, video a foto technika > Antény a satelity > Koaxiálne káble | TV, audio, video a foto technika > Antény a satelity | 59 |
| Energia a napájanie > Fotovoltaika > Solárne regulátory | Energia a napájanie > Fotovoltaika | 59 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Revízne dvierka | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 58 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Panasonic | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 58 |
| Energia a napájanie > Záložné zdroje a UPS > Záložné zdroje pre oběhová čerpadlá | Energia a napájanie > Záložné zdroje a UPS | 57 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 57 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie a rozbočovacie svorky > Univerzálne svorky > Typová rad RKA | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 57 |
| Dielňa, náradie a záhrada > MERACIE TECHNIKA > Meranie neelektrických veličin | Dielňa, náradie a záhrada > Meracia technika > Meranie neelektrických veličín | 57 |
| Energia a napájanie > Akumulátory a batérie > Očká, fastóny, dutinky, spojky > Káblové dutinky | Energia a napájanie > Akumulátory a batérie | 55 |
| Elektro, Smart Home a osvetlenie > Káble a vodiče > Koaxiálne káble | Elektro, Smart Home a osvetlenie > Káble a vodiče | 54 |
| Energia a napájanie > Fotovoltaika > Káble pre fotovoltaiku > Fotovoltaické káble | Energia a napájanie > Fotovoltaika | 54 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie a rozbočovacie svorky > Univerzálne svorky > Typová rad UK | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 54 |
| Cestovanie, šport a outdoor > Bojové športy > Chrániče | Cestovanie, šport a outdoor > Bojové športy | 53 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie a rozbočovacie svorky > Rozbočovacie svorky > Typová rad HLAK typ - M2 | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 52 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Priemyselné ventilátory | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 52 |
| TV, audio, video a foto technika > Antény a satelity > ANTÉNY | TV, audio, video a foto technika > Antény a satelity | 51 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Priemyselné vidlica a zásuvky > Priemyselné zásuvky > Vstavané priemyselné zásuvky | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 51 |
| TV, audio, video a foto technika > Audio technika > Rádiá | TV, audio, video a foto technika > Audio technika | 51 |
| Dielňa, náradie a záhrada > Mechanické náradie > Príslušenstvo ku gola sadám | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 51 |
| Energia a napájanie > Akumulátory a batérie > Očká, fastóny, dutinky, spojky > Fastóny | Energia a napájanie > Akumulátory a batérie | 51 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Činky a príslušenstvo > Činky jednoruční | Cestovanie, šport a outdoor > Posilňovanie a fitness | 51 |
| Energia a napájanie > Fotovoltaika > Rozvádzače > Samostatné rozvádzače | Energia a napájanie > Fotovoltaika | 51 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kľúče | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 50 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 50 |
| Elektro, Smart Home a osvetlenie > Káble a vodiče > Fotovoltaické káble | Elektro, Smart Home a osvetlenie > Káble a vodiče | 49 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > AUDIO (AUX) | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 48 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kliešte | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 48 |
| Cestovanie, šport a outdoor > Turistika > Turistické vybavenie | Cestovanie, šport a outdoor > Turistika a outdoor | 48 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Termostaty | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 47 |
| Dielňa, náradie a záhrada > Elektronické súčiastky > Arduino a moduly > Snímače a prevodníky Arduino | Dielňa, náradie a záhrada > Elektronické súčiastky | 47 |
| Energia a napájanie > Fotovoltaika > Solárne regulátory > Solárne regulátory MPPT | Energia a napájanie > Fotovoltaika | 47 |
| Cestovanie, šport a outdoor > Turistika > Čelové svietidlá | Cestovanie, šport a outdoor > Turistika a outdoor | 46 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Pomôcky na cvičenie > Valce, kolieska a masážne lopty | Cestovanie, šport a outdoor > Posilňovanie a fitness | 46 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Vzduchovody > Pevné kruhové potrubie - PVC | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 46 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice > Elektroinštalačný krabice | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 46 |
| Energia a napájanie > Fotovoltaika > Konektory pre fotovoltaiku | Energia a napájanie > Fotovoltaika | 45 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Pomôcky na cvičenie > Lopty na cvičenie | Cestovanie, šport a outdoor > Posilňovanie a fitness | 44 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Revízne dvierka | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 44 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > AUDIO (AUX) > Panasonic | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 44 |
| Dielňa, náradie a záhrada > SPÁJKOVACIE TECHNIKA > Ručné spájkovačky, trafopájky | Dielňa, náradie a záhrada > Spájkovacia technika > Spájkovačky a trafospájkovačky | 44 |
| TV, audio, video a foto technika > Antény a satelity > Stožiare a trojnožky | TV, audio, video a foto technika > Antény a satelity | 43 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Kotúče rezacie, pílové, brúsne | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 43 |
| Cestovanie, šport a outdoor > Sportovní vybavenie > Kolobežky | Cestovanie, šport a outdoor > Športové vybavenie | 43 |
| Cestovanie, šport a outdoor > Bojové športy > MMA rukavice | Cestovanie, šport a outdoor > Bojové športy | 43 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Trenažéry | Cestovanie, šport a outdoor > Posilňovanie a fitness | 43 |
| Energia a napájanie > Fotovoltaika > Konštrukcia pre solárne panely > Spojovacie materiál | Energia a napájanie > Fotovoltaika | 42 |
| TV, audio, video a foto technika > Antény a satelity > LNB konvertory | TV, audio, video a foto technika > Antény a satelity | 42 |
| Dielňa, náradie a záhrada > Mechanické náradie > Príslušenstvo ku gola sadám > Nástrčné hlavice | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 41 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Elektromery na DIN lištu > 3-fázové elektromery | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 40 |
| Cestovanie, šport a outdoor > Zdravotní potreby | Cestovanie, šport a outdoor > Zdravotné a rehabilitačné pomôcky | 40 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Spínacie hodiny | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 40 |
| TV, audio, video a foto technika > Antény a satelity > SATELITNÉ PRIJÍMAČE | TV, audio, video a foto technika > Antény a satelity | 39 |
| Elektro, Smart Home a osvetlenie > Ističe a chrániče > Ističe AC | Elektro, Smart Home a osvetlenie > Ističe a chrániče | 39 |
| Dielňa, náradie a záhrada > MERACIE TECHNIKA > Testery | Dielňa, náradie a záhrada > Meracia technika > Testery a skúšačky | 38 |
| Dielňa, náradie a záhrada > Mechanické náradie > Príslušenstvo ku gola sadám > Nástrčné hlavice > 1/2" nadstavce | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 38 |
| Dielňa, náradie a záhrada > MERACIE TECHNIKA > Detektory | Dielňa, náradie a záhrada > Meracia technika > Detektory a lokátory | 37 |
| Energia a napájanie > Fotovoltaika > Káble pre fotovoltaiku > Silové káble | Energia a napájanie > Fotovoltaika | 37 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Vzduchovody > Pevné kruhové potrubie - PVC > Príslušenstvo pre pevné kruhové potrubie - PVC | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 37 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ MA | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 37 |
| Energia a napájanie > Fotovoltaika > Fotovoltaické príslušenstvo | Energia a napájanie > Fotovoltaika | 37 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Zdroje a zásuvky na DIN lištu | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 37 |
| Cestovanie, šport a outdoor > Sportovní vybavenie > Paddleboardy | Cestovanie, šport a outdoor > Športové vybavenie | 37 |
| Cestovanie, šport a outdoor > Bojové športy > Chrániče holenie | Cestovanie, šport a outdoor > Bojové športy | 37 |
| Energia a napájanie > Akumulátory a batérie > Očká, fastóny, dutinky, spojky > Káblové vidličky | Energia a napájanie > Akumulátory a batérie | 37 |
| TV, audio, video a foto technika > Antény a satelity > ZOSILŇOVAČE > Domové | TV, audio, video a foto technika > Antény a satelity | 36 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Amiko | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 36 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Modulární komponenty | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 36 |
| TV, audio, video a foto technika > Antény a satelity > Konzoly na stěnu | TV, audio, video a foto technika > Antény a satelity | 35 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > DIN lišty, průchodky a príslušenstvo | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 35 |
| TV, audio, video a foto technika > Antény a satelity > ANTÉNY > TV antény vonkajšie | TV, audio, video a foto technika > Antény a satelity | 34 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Podložky | Cestovanie, šport a outdoor > Posilňovanie a fitness | 34 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Hmoždinky a skrutky | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 34 |
| Energia a napájanie > Fotovoltaika > Rozvádzače > Osadené DC rozvádzače | Energia a napájanie > Fotovoltaika | 34 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Bloky pre rozdělení fází | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 34 |
| Dielňa, náradie a záhrada > Ochranné pomôcky a odevy > Reflexní doplnky | Dielňa, náradie a záhrada > Dielenské vybavenie > Ochranné pomôcky a odevy | 34 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Revízne dvierka > Plastová revízne dvierka | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 33 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Sencor | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 33 |
| TV, audio, video a foto technika > Antény a satelity > Držiaky stožárů > Na stěnu stavitelné | TV, audio, video a foto technika > Antény a satelity | 33 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Spínacie zásuvky | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 33 |
| Dielňa, náradie a záhrada > Drobné náradie a príslušenstvo > Sťahovacie pásky a spony | Dielňa, náradie a záhrada > Dielenské vybavenie > Sťahovacie pásky a drobné príslušenstvo | 33 |
| TV, audio, video a foto technika > Antény a satelity > Satelitné príslušenstvo > Multipřepínače | TV, audio, video a foto technika > Antény a satelity | 32 |
| Energia a napájanie > Akumulátory a batérie > Gombíkové | Energia a napájanie > Akumulátory a batérie | 32 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Rúrky a chráničky | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 32 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie lišty > Prepojovacie lišty tvar kontaktu "vidlička" | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 31 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Priemyselné vidlica a zásuvky > Priemyselné přívodky | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 31 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice > Zásuvky 230V | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 31 |
| Dielňa, náradie a záhrada > Chémia | Dielňa, náradie a záhrada > Dielenské vybavenie > Chémia pre dielňu | 31 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Rozvádzače samostatné > Skrine MAGNA IP65 | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 31 |
| Energia a napájanie > Akumulátory a batérie > LiFePO4 akumulátory | Energia a napájanie > Akumulátory a batérie | 31 |
| Dielňa, náradie a záhrada > SPÁJKOVACIE TECHNIKA > Lupy | Dielňa, náradie a záhrada > Spájkovacia technika > Lupy | 31 |
| Energia a napájanie > Akumulátory a batérie > Očká, fastóny, dutinky, spojky > Káblové spojky | Energia a napájanie > Akumulátory a batérie | 31 |
| Elektro, Smart Home a osvetlenie > Káble a vodiče > Koaxiálne káble > Měděné | Elektro, Smart Home a osvetlenie > Káble a vodiče | 30 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 5m | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 30 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Sony | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 30 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Rúrky a chráničky > Chráničky (husí krk) | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 30 |
| TV, audio, video a foto technika > AV káble > AV káble | TV, audio, video a foto technika > AV káble | 29 |
| TV, audio, video a foto technika > Antény a satelity > SET-TOP-BOXY | TV, audio, video a foto technika > Antény a satelity | 29 |
| Energia a napájanie > Fotovoltaika > Elektromery | Energia a napájanie > Fotovoltaika | 29 |
| TV, audio, video a foto technika > Antény a satelity > PASIVNÍ PRVKY > Rozbočovače | TV, audio, video a foto technika > Antény a satelity | 29 |
| TV, audio, video a foto technika > Antény a satelity > Uzemnenie, hromosvody | TV, audio, video a foto technika > Antény a satelity | 29 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Sťahovacie pásky | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 29 |
| Elektro, Smart Home a osvetlenie > Káble a vodiče > Dvojlinky | Elektro, Smart Home a osvetlenie > Káble a vodiče | 29 |
| Elektro, Smart Home a osvetlenie > Komponenty pre svietidlá | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Komponenty pre svietidlá | 29 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Mřížky | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 28 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ LD | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 28 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Můstky na nosnou lištu | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 28 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie a rozbočovacie svorky > Přístrojové prepojovacie svorky | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 28 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 3m | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 28 |
| Energia a napájanie > Fotovoltaika > Solárne meniče napätie | Energia a napájanie > Fotovoltaika | 28 |
| Dielňa, náradie a záhrada > MERACIE TECHNIKA > Infrateploměry a termokamery | Dielňa, náradie a záhrada > Meracia technika > Infrateplomery a termokamery | 27 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Vrtáky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 27 |
| Elektro, Smart Home a osvetlenie > Ističe a chrániče > Proudové chrániče | Elektro, Smart Home a osvetlenie > Ističe a chrániče | 27 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Pomôcky na cvičenie > Gumy a pásy na cvičenie | Cestovanie, šport a outdoor > Posilňovanie a fitness | 27 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Činky a príslušenstvo > Činky nastaviteľné | Cestovanie, šport a outdoor > Posilňovanie a fitness | 27 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Posilňovacie lavice | Cestovanie, šport a outdoor > Posilňovanie a fitness | 27 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie lišty > Prepojovacie lišty tvar kontaktu "kolík/jazýček" | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 27 |
| TV, audio, video a foto technika > Antény a satelity > Koaxiálne káble > Vnútorné | TV, audio, video a foto technika > Antény a satelity | 26 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ S | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 26 |
| Energia a napájanie > Fotovoltaika > Konštrukcia pre solárne panely > Na šikmou střechu | Energia a napájanie > Fotovoltaika | 26 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Trenažéry > Rotopedy | Cestovanie, šport a outdoor > Posilňovanie a fitness | 26 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Rozvádzače samostatné > Skrine STONE IP55 - IP66 | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 26 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Izolačné pásky | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 26 |
| Dielňa, náradie a záhrada > Elektronické súčiastky > Arduino a moduly > Programovatelné moduly Arduino | Dielňa, náradie a záhrada > Elektronické súčiastky | 25 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Revízne dvierka > Kovová revízne dvierka | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 25 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Revízne dvierka > Kovová revízne dvierka | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 25 |
| Energia a napájanie > Záložné zdroje a UPS > Powerbanky | Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily > Powerbanky | 25 |
| Cestovanie, šport a outdoor > Bojové športy > Lapy a bloky | Cestovanie, šport a outdoor > Bojové športy | 25 |
| Dielňa, náradie a záhrada > Elektronické súčiastky > Poistky, pojistkové držiaky > Autopojistky | Dielňa, náradie a záhrada > Elektronické súčiastky | 25 |
| Dielňa, náradie a záhrada > Elektronické súčiastky > Poistky, pojistkové držiaky > Poistky 5x20mm rychlé (F) | Dielňa, náradie a záhrada > Elektronické súčiastky | 25 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Adaptéry a redukcie | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 24 |
| Elektro, Smart Home a osvetlenie > Ističe a chrániče > Prepínače napájení | Elektro, Smart Home a osvetlenie > Ističe a chrániče | 24 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie a rozbočovacie svorky > Rozbočovacie svorky > Typová rad HLAK typ - C | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 24 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Gravitační žaluzie a klapky | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 24 |
| TV, audio, video a foto technika > Antény a satelity > Konzoly sa třmenem | TV, audio, video a foto technika > Antény a satelity | 23 |
| Elektro, Smart Home a osvetlenie > Ističe a chrániče > Poistky | Elektro, Smart Home a osvetlenie > Ističe a chrániče | 23 |
| TV, audio, video a foto technika > Antény a satelity > SET-TOP-BOXY > DVB-T2 H.265 HEVC | TV, audio, video a foto technika > Antény a satelity | 23 |
| Elektro, Smart Home a osvetlenie > Ističe a chrániče > Prepäťové ochrany AC | Elektro, Smart Home a osvetlenie > Ističe a chrániče | 23 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Tesla | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 23 |
| TV, audio, video a foto technika > Antény a satelity > Stožiare a trojnožky > Jednodílné stožiare | TV, audio, video a foto technika > Antény a satelity | 23 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Rozvádzače samostatné > Rozvodnice NUOVA IP40 (bytové) | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 23 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Elektromery na DIN lištu > 1-fázové elektromery | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 23 |
| Dielňa, náradie a záhrada > MERACIE TECHNIKA > Meracie lasery | Dielňa, náradie a záhrada > Meracia technika > Meracie lasery a diaľkomery | 23 |
| Dielňa, náradie a záhrada > Dielenské vybavenie > Ultrazvukové čističe | Dielňa, náradie a záhrada > Dielenské vybavenie | 23 |
| Elektro, Smart Home a osvetlenie > Inštalačné náradie a ostatné materiál > Rozběhové kondenzátory | Elektro, Smart Home a osvetlenie > Inštalačné náradie a materiál | 23 |
| Dielňa, náradie a záhrada > Elektrické a AKU náradie | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Lepiace a horúcovzdušné pištole | 22 |
| Dielňa, náradie a záhrada > MERACIE TECHNIKA > Príslušenstvo k meracie technice | Dielňa, náradie a záhrada > Meracia technika > Príslušenstvo k meracej technike | 22 |
| TV, audio, video a foto technika > Antény a satelity > Konektory > F konektory | TV, audio, video a foto technika > Antény a satelity | 22 |
| Počítače, mobily a tablety > USB káble > USB-C káble | Počítače, mobily a tablety > USB káble | 22 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Skrine pre kamerové systémy | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 22 |
| Dielňa, náradie a záhrada > Drobné náradie a príslušenstvo > Pásky a odvíječe | Dielňa, náradie a záhrada > Dielenské vybavenie > Sťahovacie pásky a drobné príslušenstvo | 22 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Vzduchovody > Pevné ploché potrubie - PVC | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 22 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie a rozbočovacie svorky > Stoupací svorky | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 22 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > DVD | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 22 |
| Dielňa, náradie a záhrada > MERACIE TECHNIKA > Nivelačné prístroje | Dielňa, náradie a záhrada > Meracia technika > Nivelačné prístroje | 22 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Malířství a natěračství | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 22 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Spínacie hodiny > Časové spínače na DIN | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 22 |
| TV, audio, video a foto technika > TV stolíky a držiaky > S odsazením a náklonem | TV, audio, video a foto technika > TV stolíky a držiaky | 22 |
| Počítače, mobily a tablety > GSM nabíjačky | Počítače, mobily a tablety > Nabíjačky pre mobily | 22 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Pohybová čidlá | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 22 |
| Elektro, Smart Home a osvetlenie > Ističe a chrániče > Stykače | Elektro, Smart Home a osvetlenie > Ističe a chrániče | 22 |
| Počítače, mobily a tablety > Sieťové prvky | Počítače, mobily a tablety > WiFi routery a sieťové karty | 21 |
| TV, audio, video a foto technika > Antény a satelity > Konektory > Redukcie | TV, audio, video a foto technika > Antény a satelity | 21 |
| TV, audio, video a foto technika > Antény a satelity > ZOSILŇOVAČE > K anténě | TV, audio, video a foto technika > Antény a satelity | 21 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 1,5m | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 21 |
| Energia a napájanie > Fotovoltaika > Solárne panely | Energia a napájanie > Fotovoltaika | 21 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Káblové příchytky a držiaky | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 21 |
| Dielňa, náradie a záhrada > Mechanické náradie > Sady náradie | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 21 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice > Elektroinštalačný krabice > Krabice na povrch | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 21 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Činky a príslušenstvo > Kettlebell | Cestovanie, šport a outdoor > Posilňovanie a fitness | 21 |
| TV, audio, video a foto technika > Antény a satelity > Účastnické zásuvky | TV, audio, video a foto technika > Antény a satelity | 20 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 10m | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 20 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 2m | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 20 |
| Cestovanie, šport a outdoor > Ďalekohľady > Binokulární | Cestovanie, šport a outdoor > Ďalekohľady | 20 |
| Dielňa, náradie a záhrada > MERACIE TECHNIKA > Měřidla | Dielňa, náradie a záhrada > Meracia technika > Meradlá a meracie pásma | 20 |
| Energia a napájanie > Akumulátory a batérie > Očká, fastóny, dutinky, spojky > Svorky | Energia a napájanie > Akumulátory a batérie | 20 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Priemyselné vidlica a zásuvky > Priemyselné vidlica | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 19 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Príslušenstvo k ventilátorům | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 19 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Revízne dvierka > Plastová revízne dvierka | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 19 |
| TV, audio, video a foto technika > Antény a satelity > Držiaky stožárů > Na stěnu pevné | TV, audio, video a foto technika > Antény a satelity | 19 |
| Cestovanie, šport a outdoor > Zdravotní potreby > Masážne nástroje | Cestovanie, šport a outdoor > Zdravotné a rehabilitačné pomôcky | 19 |
| Cestovanie, šport a outdoor > Turistika > Cestování a outdoor | Cestovanie, šport a outdoor > Turistika a outdoor | 19 |
| Energia a napájanie > Fotovoltaika > Ochrana FV instalací > Prepäťové ochrany | Energia a napájanie > Fotovoltaika | 19 |
| Energia a napájanie > Fotovoltaika > Ochrana FV instalací > Uzemňovací prvky | Energia a napájanie > Fotovoltaika | 19 |
| Energia a napájanie > Fotovoltaika > Konektory pre fotovoltaiku > Káblová očká | Energia a napájanie > Fotovoltaika | 19 |
| Cestovanie, šport a outdoor > Bojové športy > Príslušenstvo | Cestovanie, šport a outdoor > Bojové športy | 19 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie a rozbočovacie svorky > Třmenové svorky | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 19 |
| Cestovanie, šport a outdoor > Bojové športy > Boxovací pytle - plné | Cestovanie, šport a outdoor > Bojové športy | 19 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Univerzálne ovládače | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 18 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > AB | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 18 |
| Dielňa, náradie a záhrada > Mechanické náradie > Skrutkovače, bity, imbusy | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 18 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Vzduchovody > Pevné ploché potrubie - PVC > Príslušenstvo pre pevné ploché potrubie - PVC | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 18 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Termostaty > Drátové | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 18 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie a rozbočovacie svorky > Přístrojové prepojovacie svorky > Tvar konektoru "jazýček/kolík" | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 18 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Pomôcky na cvičenie > Pomôcky na jógu | Cestovanie, šport a outdoor > Posilňovanie a fitness | 18 |
| TV, audio, video a foto technika > Antény a satelity > ZOSILŇOVAČE > Programovatelné | TV, audio, video a foto technika > Antény a satelity | 18 |
| TV, audio, video a foto technika > Antény a satelity > Spojovacie a kotevní materiál, chémia > Izolačné pásky | TV, audio, video a foto technika > Antény a satelity | 18 |
| Cestovanie, šport a outdoor > Cyklistika > Cyklotašky | Cestovanie, šport a outdoor > Cyklistika | 18 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Rozvádzače osadené > DC rozvádzače | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 18 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Priemyselné vidlica a zásuvky > Priemyselné zásuvky > Nástenné priemyselné zásuvky | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 18 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Rozvádzače samostatné > Rozvodnice ELEKTRO-PLAST | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 18 |
| Dielňa, náradie a záhrada > Ochranné pomôcky a odevy > Pracovné rukavice | Dielňa, náradie a záhrada > Dielenské vybavenie > Ochranné pomôcky a odevy | 18 |
| Elektro, Smart Home a osvetlenie > Káble a vodiče > UTP a FTP káble | Elektro, Smart Home a osvetlenie > Káble a vodiče | 17 |
| Dielňa, náradie a záhrada > Elektronické súčiastky > Arduino a moduly > Výstupní jednotky Arduino | Dielňa, náradie a záhrada > Elektronické súčiastky | 17 |
| TV, audio, video a foto technika > Audio technika > Reproduktory | TV, audio, video a foto technika > Audio technika > HiFi a domáce reproduktory | 17 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Kotúče rezacie, pílové, brúsne > Kotúče rezacie na kov | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 17 |
| Energia a napájanie > Fotovoltaika > Konštrukcia pre solárne panely > Doplnky a príslušenstvo | Energia a napájanie > Fotovoltaika | 17 |
| Dielňa, náradie a záhrada > Chémia > Lepidlá | Dielňa, náradie a záhrada > Dielenské vybavenie > Chémia pre dielňu | 17 |
| TV, audio, video a foto technika > Antény a satelity > Spojovacie a kotevní materiál, chémia > Vruty, hmoždinky | TV, audio, video a foto technika > Antény a satelity | 17 |
| TV, audio, video a foto technika > Antény a satelity > Uzemnenie, hromosvody > Zemnící svorky | TV, audio, video a foto technika > Antény a satelity | 17 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Stepy a steppery | Cestovanie, šport a outdoor > Posilňovanie a fitness | 17 |
| Energia a napájanie > Napájacie zdroje > Priemyselné zdroje | Energia a napájanie > Napájacie zdroje | 17 |
| Dielňa, náradie a záhrada > Dielenské vybavenie > Kufre a organizéry na náradie | Dielňa, náradie a záhrada > Dielenské vybavenie | 17 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Plastové skrine | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 17 |
| Energia a napájanie > Napájacie zdroje > Adaptéry USB | Energia a napájanie > Napájacie zdroje | 17 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Podpěrné a distanční izolátory | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 17 |
| Elektro, Smart Home a osvetlenie > Prepäťové ochrany | Elektro, Smart Home a osvetlenie > Ističe a chrániče | 16 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Ostatné | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 16 |
| Energia a napájanie > Fotovoltaika > Konštrukcia pre solárne panely > Profily a lišty | Energia a napájanie > Fotovoltaika | 16 |
| Elektro, Smart Home a osvetlenie > Ističe a chrániče > Prepäťové ochrany DC | Elektro, Smart Home a osvetlenie > Ističe a chrániče | 16 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice > Svorky a svorkovnice | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 16 |
| TV, audio, video a foto technika > Antény a satelity > Konzoly sa třmenem > Na stožár (vertikální) | TV, audio, video a foto technika > Antény a satelity | 16 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice > Vypínače a zásuvky ATLAS IP55 | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 16 |
| Dielňa, náradie a záhrada > Mechanické náradie > Sťahováky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 16 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Gogen | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 16 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Changhong | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 16 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Činky a príslušenstvo > Závažia | Cestovanie, šport a outdoor > Posilňovanie a fitness | 16 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Gravitační žaluzie a klapky > Gravitační žaluzie bez nadstavce (na omítku) | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 16 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Alma | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 15 |
| Cestovanie, šport a outdoor > Ďalekohľady > Pre noční vidění | Cestovanie, šport a outdoor > Ďalekohľady | 15 |
| TV, audio, video a foto technika > Antény a satelity > Třmeny a spojky | TV, audio, video a foto technika > Antény a satelity | 15 |
| Cestovanie, šport a outdoor > Sportovní vybavenie > Raketové športy | Cestovanie, šport a outdoor > Športové vybavenie | 15 |
| TV, audio, video a foto technika > Antény a satelity > Servis | TV, audio, video a foto technika > Antény a satelity | 15 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Priemyselné vidlica a zásuvky > Priemyselné spojky | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 15 |
| Energia a napájanie > Fotovoltaika > Konektory pre fotovoltaiku > Konektory MC4 | Energia a napájanie > Fotovoltaika | 15 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice > Vypínače | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 15 |
| TV, audio, video a foto technika > Antény a satelity > PASIVNÍ PRVKY > Rozbočovače > Televízne | TV, audio, video a foto technika > Antény a satelity | 15 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 25m | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 15 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice > Elektroinštalačný krabice > Krabice zapuštěné (pod omítku) | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 15 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice > Vypínače a zásuvky ATLAS IP65 | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 15 |
| TV, audio, video a foto technika > Antény a satelity > Koaxiálne káble > Metráž | TV, audio, video a foto technika > Antény a satelity | 15 |
| Energia a napájanie > Akumulátory a batérie > NiMh nabíjacie akumulátory | Energia a napájanie > Akumulátory a batérie | 15 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Sharp | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 15 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Sťahovacie pásky > Plastové sťahovacie pásky | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 15 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 7m | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 15 |
| Počítače, mobily a tablety > Rackové skrine a príslušenstvo > Príslušenstvo | Počítače, mobily a tablety > Rackové skrine – príslušenstvo | 15 |
| Počítače, mobily a tablety > Rackové skrine a príslušenstvo | Počítače, mobily a tablety > Rackové skrine – príslušenstvo | 15 |
| Energia a napájanie > Fotovoltaika > Elektromery > 1 fázové elektromery | Energia a napájanie > Fotovoltaika | 15 |
| Dielňa, náradie a záhrada > Elektronické súčiastky > Poistky, pojistkové držiaky > Poistky 5x20mm pomalé (T) | Dielňa, náradie a záhrada > Elektronické súčiastky | 15 |
| Dielňa, náradie a záhrada > Mechanické náradie > Nýtování | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 15 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Philips | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 15 |
| Energia a napájanie > Fotovoltaika > Solárne zostavy | Energia a napájanie > Fotovoltaika | 15 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Káblové spojky > Ostatné káblové spojky | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 15 |
| Cestovanie, šport a outdoor > Zdravotní potreby > Zátěžové deky | Cestovanie, šport a outdoor > Zdravotné a rehabilitačné pomôcky | 15 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Kovové skrine | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 14 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Topfield | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 14 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Termostaty > Bezdrátové | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 14 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Hyundai | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 14 |
| Dielňa, náradie a záhrada > SPÁJKOVACIE TECHNIKA > Servisní stanice | Dielňa, náradie a záhrada > Spájkovacia technika > Spájkovacie stanice a mikrospájkovačky | 14 |
| Energia a napájanie > Fotovoltaika > Elektromery > 3 fázové elektromery | Energia a napájanie > Fotovoltaika | 14 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > VIDEO (VCR) | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 14 |
| Dielňa, náradie a záhrada > Mechanické náradie > Gola sady náradie | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 14 |
| TV, audio, video a foto technika > Antény a satelity > Konektory > Montážne náradie | TV, audio, video a foto technika > Antény a satelity | 14 |
| Energia a napájanie > Akumulátory a batérie > Špeciálne | Energia a napájanie > Akumulátory a batérie | 14 |
| Cestovanie, šport a outdoor > Ďalekohľady > Hvězdářské | Cestovanie, šport a outdoor > Ďalekohľady | 14 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > GoSat | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 14 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Posilňovacie stroje | Cestovanie, šport a outdoor > Posilňovanie a fitness | 14 |
| Energia a napájanie > Akumulátory a batérie > Olovené akumulátory > 6V | Energia a napájanie > Akumulátory a batérie | 14 |
| Energia a napájanie > Fotovoltaika > Rozvádzače > Osadené AC rozvádzače | Energia a napájanie > Fotovoltaika | 14 |
| TV, audio, video a foto technika > Antény a satelity > SATELITNÉ PRIJÍMAČE > Prijímače s UNI čtečkou | TV, audio, video a foto technika > Antény a satelity | 14 |
| Cestovanie, šport a outdoor > Ďalekohľady > Príslušenstvo | Cestovanie, šport a outdoor > Ďalekohľady | 14 |
| Energia a napájanie > Fotovoltaika > Solárne regulátory > Solárne regulátory pre ohrev vody | Energia a napájanie > Fotovoltaika | 14 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Telesystem | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 14 |
| Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Silové káble | Auto-moto > Garáž, dielňa, servis | 14 |
| TV, audio, video a foto technika > Antény a satelity > SATELITNÉ PRIJÍMAČE > Prijímače s OS Linux | TV, audio, video a foto technika > Antény a satelity | 14 |
| Cestovanie, šport a outdoor > Cyklistika > Reflexní prvky | Cestovanie, šport a outdoor > Cyklistika | 14 |
| Energia a napájanie > Záložné zdroje a UPS > Stabilizátory napätie | Energia a napájanie > Záložné zdroje a UPS | 14 |
| Energia a napájanie > Fotovoltaika > Konštrukcia pre solárne panely > Na rovnou střechu | Energia a napájanie > Fotovoltaika | 14 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Sťahovacie pásky > Kovové sťahovacie pásky | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 14 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - základní | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 14 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady DOSPEL | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 14 |
| TV, audio, video a foto technika > Antény a satelity > ANTÉNY > TV antény pokojové | TV, audio, video a foto technika > Antény a satelity | 13 |
| TV, audio, video a foto technika > Antény a satelity > Zdroje a výhybky | TV, audio, video a foto technika > Antény a satelity | 13 |
| TV, audio, video a foto technika > AV káble > HDMI káble | TV, audio, video a foto technika > AV káble | 13 |
| Energia a napájanie > Napájacie zdroje > Adaptéry pulzní | Energia a napájanie > Napájacie zdroje | 13 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ OV | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 13 |
| Cestovanie, šport a outdoor > Bojové športy > Zátěžové vesty | Cestovanie, šport a outdoor > Bojové športy | 13 |
| Cestovanie, šport a outdoor > Bojové športy > Hrušky a speedbagy | Cestovanie, šport a outdoor > Bojové športy | 13 |
| TV, audio, video a foto technika > TV stolíky a držiaky > S náklonem | TV, audio, video a foto technika > TV stolíky a držiaky | 13 |
| TV, audio, video a foto technika > Antény a satelity > Konektory > Kompresní a krimpovací | TV, audio, video a foto technika > Antény a satelity | 13 |
| Energia a napájanie > Fotovoltaika > Káble pre fotovoltaiku > Chráničky | Energia a napájanie > Fotovoltaika | 13 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Spínacie zásuvky > Do zásuvky | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 13 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Strong | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 13 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Rozvádzače samostatné > Skrine AcquaCOMBI IP65 | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 13 |
| TV, audio, video a foto technika > Antény a satelity > SATELITNÉ PRIJÍMAČE > Prijímače ULTRA HD 4K | TV, audio, video a foto technika > Antény a satelity | 13 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Optibox | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 12 |
| Dielňa, náradie a záhrada > MERACIE TECHNIKA > DVB-S/S2/T/T2/C | Dielňa, náradie a záhrada > Meracia technika > Merače TV a satelitného signálu | 12 |
| TV, audio, video a foto technika > Antény a satelity > Satelitné antény | TV, audio, video a foto technika > Antény a satelity | 12 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Finlux | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 12 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Strong | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 12 |
| Dielňa, náradie a záhrada > Mechanické náradie > Skrutkovače, bity, imbusy > Sady skrutkovačov | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 12 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Nástroje | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 12 |
| Cestovanie, šport a outdoor > Sportovní vybavenie > Ostatné športy | Cestovanie, šport a outdoor > Športové vybavenie | 12 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Murárske práce | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 12 |
| Cestovanie, šport a outdoor > Ďalekohľady > Pozorovací | Cestovanie, šport a outdoor > Ďalekohľady | 12 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Můstky na nosnou lištu > Kryté můstky (IP20) | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 12 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Káblové gelové spojky SHARK | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 12 |
| TV, audio, video a foto technika > Antény a satelity > Príslušenstvo ku stožárům | TV, audio, video a foto technika > Antény a satelity | 12 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > SMART elektromery | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 12 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Rozvádzače osadené > AC rozvádzače | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 12 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Octagon | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 12 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Brusivo | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 12 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kľúče > Očkoploché kľúče | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 12 |
| Energia a napájanie > Fotovoltaika > Solárne regulátory > Solárne regulátory PWM | Energia a napájanie > Fotovoltaika | 12 |
| Počítače, mobily a tablety > Disky a pamäťové karty | Počítače, mobily a tablety > Disky a pamäťové karty pre NVR | 12 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kliešte > Kliešte montážne | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 12 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Časové spínače | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 12 |
| Cestovanie, šport a outdoor > Cyklistika > Svietidlá na kolo | Cestovanie, šport a outdoor > Cyklistika | 12 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Rozvádzače samostatné > Rozvodnice Acqua IP65 | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 12 |
| TV, audio, video a foto technika > Antény a satelity > Konektory > IEC konektory | TV, audio, video a foto technika > Antény a satelity | 12 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Rozvádzače samostatné > Rozvodnice TSM | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 12 |
| Cestovanie, šport a outdoor > Turistika > Impregnace | Cestovanie, šport a outdoor > Turistika a outdoor | 12 |
| Cestovanie, šport a outdoor > Bojové športy > Rukavice na karate | Cestovanie, šport a outdoor > Bojové športy | 12 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - základní > Pre průměr potrubie 100 mm | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 12 |
| Dielňa, náradie a záhrada > Elektrické a AKU náradie > Pištole lepící a horúcovzdušné | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Lepiace a horúcovzdušné pištole | 11 |
| TV, audio, video a foto technika > Antény a satelity > ANTÉNY > Antény VKV - FM - DAB+ | TV, audio, video a foto technika > Antény a satelity | 11 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Mascom | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 11 |
| Energia a napájanie > Fotovoltaika > Konektory pre fotovoltaiku > Dutinky na kabel | Energia a napájanie > Fotovoltaika | 11 |
| TV, audio, video a foto technika > Antény a satelity > Satelitné príslušenstvo > Multifeed LNB držiaky | TV, audio, video a foto technika > Antény a satelity | 11 |
| TV, audio, video a foto technika > Antény a satelity > Servis > Náhradné diely | TV, audio, video a foto technika > Antény a satelity | 11 |
| Dielňa, náradie a záhrada > MERACIE TECHNIKA > Osciloskopy a Generátory | Dielňa, náradie a záhrada > Meracia technika > Osciloskopy, generátory a laboratórne zdroje | 11 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie a rozbočovacie svorky > Stoupací svorky > Stoupací svorky (stupačkové) nekryté | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 11 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kladivá, dláta, sekery | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 11 |
| Dielňa, náradie a záhrada > SPÁJKOVACIE TECHNIKA > Zveráky | Dielňa, náradie a záhrada > Spájkovacia technika > Tretia ruka a držiaky | 11 |
| Elektro, Smart Home a osvetlenie > Káble a vodiče > Koaxiálne káble > Včetně konektorů | Elektro, Smart Home a osvetlenie > Káble a vodiče | 11 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Počítadla provozních hodin | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 11 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Toshiba | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 11 |
| Počítače, mobily a tablety > Kancelária a škola > Školské potreby | Počítače, mobily a tablety > Kancelária a škola | 11 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Vibračné plošiny | Cestovanie, šport a outdoor > Posilňovanie a fitness | 11 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Spínacie hodiny > Analogové spínacie hodiny | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 11 |
| TV, audio, video a foto technika > Antény a satelity > Konzoly na stěnu > S T základnou | TV, audio, video a foto technika > Antény a satelity | 11 |
| Dielňa, náradie a záhrada > SPÁJKOVACIE TECHNIKA > Stolové mikropájky | Dielňa, náradie a záhrada > Spájkovacia technika > Spájkovacie stanice a mikrospájkovačky | 11 |
| Energia a napájanie > Fotovoltaika > Ochrana FV instalací > Pojistné odpínače/odpojovače | Energia a napájanie > Fotovoltaika | 11 |
| TV, audio, video a foto technika > Antény a satelity > Spojovacie a kotevní materiál, chémia > Sťahovacie pásky | TV, audio, video a foto technika > Antény a satelity | 11 |
| Elektro, Smart Home a osvetlenie > Inštalačné náradie a ostatné materiál > Lisovací kliešte | Elektro, Smart Home a osvetlenie > Inštalačné náradie a materiál | 11 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 50m | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 11 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Hitachi | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 11 |
| Počítače, mobily a tablety > Disky a pamäťové karty > HDD | Počítače, mobily a tablety > Disky a pamäťové karty pre NVR | 11 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Amiko | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 11 |
| Dielňa, náradie a záhrada > Dielenské vybavenie > Regály, police | Dielňa, náradie a záhrada > Dielenské vybavenie | 11 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VKO1 | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 11 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Spínacie zásuvky > Na DIN lištu | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 11 |
| Dielňa, náradie a záhrada > Dielenské vybavenie > Kufre a organizéry na náradie > Dielenské skříňky a vozíky | Dielňa, náradie a záhrada > Dielenské vybavenie | 11 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Pomôcky na cvičenie > Pomôcky na pilates | Cestovanie, šport a outdoor > Posilňovanie a fitness | 11 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Kotúče rezacie, pílové, brúsne > Kotúče lamelové | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 11 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Pomôcky na cvičenie > Pomôcky na cvičenie břicha | Cestovanie, šport a outdoor > Posilňovanie a fitness | 11 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - s doběhem (časovač) | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 11 |
| TV, audio, video a foto technika > Antény a satelity > Zdroje a výhybky > Napájacie zdroje k zesilovači | TV, audio, video a foto technika > Antény a satelity | 10 |
| TV, audio, video a foto technika > Antény a satelity > Konzoly sa třmenem > Na balkón (horizontální) | TV, audio, video a foto technika > Antény a satelity | 10 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice > TV SAT zásuvky | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 10 |
| Elektro, Smart Home a osvetlenie > Káble a vodiče > Patch káble | Elektro, Smart Home a osvetlenie > Káble a vodiče | 10 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Univerzálne ovládače > Programovatelné | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 10 |
| Energia a napájanie > Fotovoltaika > Náradie pre fotovoltaiku | Energia a napájanie > Fotovoltaika | 10 |
| Energia a napájanie > Záložné zdroje a UPS > UPS | Energia a napájanie > Záložné zdroje a UPS | 10 |
| Cestovanie, šport a outdoor > Hračky > Kreativní hračky | Cestovanie, šport a outdoor > Hračky | 10 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Adaptéry a redukcie > Redukcie a adaptéry | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 10 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Telefunken | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 10 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Príslušenstvo k ventilátorům > Regulátory otáček, termostaty | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 10 |
| TV, audio, video a foto technika > Antény a satelity > Koaxiálne káble > Vonkajšie | TV, audio, video a foto technika > Antény a satelity | 10 |
| Cestovanie, šport a outdoor > Turistika > Chladiace tašky a boxy | Cestovanie, šport a outdoor > Turistika a outdoor | 10 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Rozvádzače samostatné > Skrine AcquaCOMBI IP65 s otvory | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 10 |
| Elektro, Smart Home a osvetlenie > Prepäťové ochrany > Predlžovačky 230V s ochranou | Elektro, Smart Home a osvetlenie > Ističe a chrániče | 10 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > HD-BOX | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 10 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Káblové příchytky a držiaky > Káblové příchytky | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 10 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie a rozbočovacie svorky > Stoupací svorky > Stoupací svorky (stupačkové) kryté | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 10 |
| Počítače, mobily a tablety > Kancelária a škola > Školské potreby > Malování a kreslení | Počítače, mobily a tablety > Kancelária a škola | 10 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Rozvádzače samostatné > Rozvodnice FlatBOX IP65 | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 10 |
| Cestovanie, šport a outdoor > Bojové športy > Boxovací pytle - prázdné | Cestovanie, šport a outdoor > Bojové športy | 10 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kľúče > Očkové kľúče | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 10 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Napájacie káble | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 10 |
| TV, audio, video a foto technika > Antény a satelity > Meracie prístroje | TV, audio, video a foto technika > Antény a satelity | 10 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Adaptéry a redukcie > Rozbočovacie zásuvky | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 10 |
| Počítače, mobily a tablety > Rackové skrine a príslušenstvo > Príslušenstvo > Napájacie lišty | Počítače, mobily a tablety > Rackové skrine – príslušenstvo | 10 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie lišty > Príslušenstvo pre prepojovacie lišty | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 10 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Bloky pre rozdělení fází > Typ UVB 100 A | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 10 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Bloky pre rozdělení fází > Typ UVB 200 A | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 10 |
| Dielňa, náradie a záhrada > Elektronické súčiastky > Poistky, pojistkové držiaky > Poistky 6x30mm | Dielňa, náradie a záhrada > Elektronické súčiastky | 10 |
| Elektro, Smart Home a osvetlenie > Ističe a chrániče > Odpínače/odpojovače | Elektro, Smart Home a osvetlenie > Ističe a chrániče | 10 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Zircon | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 10 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Dvousložkové zalévací gély | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 10 |
| Domáce spotrebiče > Sanitárna technika > Batérie | Domáce spotrebiče > Sanitárna technika | 10 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ M | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 10 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Distribuční bloky | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 10 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice > Zásuvkové bloky a lišty > Vymeniteľné moduly ORNO | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 10 |
| TV, audio, video a foto technika > Antény a satelity > ANTÉNY > Antény pre obytná autá a lode | TV, audio, video a foto technika > Antény a satelity | 9 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Ferguson | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 9 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Globo | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 9 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Opticum | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 9 |
| Počítače, mobily a tablety > Sieťové prvky > Patch káble | Počítače, mobily a tablety > WiFi routery a sieťové karty | 9 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Opensat | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 9 |
| TV, audio, video a foto technika > Antény a satelity > Stožiare a trojnožky > Trojnožky na rovné střechy | TV, audio, video a foto technika > Antény a satelity | 9 |
| Cestovanie, šport a outdoor > Sportovní vybavenie > Raketové športy > Stolové tenis | Cestovanie, šport a outdoor > Športové vybavenie | 9 |
| TV, audio, video a foto technika > Antény a satelity > Satelitné antény > Paraboly | TV, audio, video a foto technika > Antény a satelity | 9 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Wiwa | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 9 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Vzduchovody > Príslušenstvo pre vzduchovody | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 9 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Vzduchovody > Ohebné potrubie - ALU | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 9 |
| TV, audio, video a foto technika > Antény a satelity > PASIVNÍ PRVKY > Rozbočovače > Satelitné | TV, audio, video a foto technika > Antény a satelity | 9 |
| TV, audio, video a foto technika > Antény a satelity > Satelitné príslušenstvo > Rozbočovače satelitné | TV, audio, video a foto technika > Antény a satelity | 9 |
| TV, audio, video a foto technika > Antény a satelity > Držiaky stožárů > Vlnky a objímky | TV, audio, video a foto technika > Antény a satelity | 9 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kliešte > Kliešte odizolovacie | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 9 |
| Dielňa, náradie a záhrada > MERACIE TECHNIKA > Inspekční kamery, endoskopy | Dielňa, náradie a záhrada > Meracia technika > Inšpekčné kamery a endoskopy | 9 |
| Cestovanie, šport a outdoor > Hračky > Výtvarné hračky a tvoření | Cestovanie, šport a outdoor > Hračky | 9 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Káblové gelové spojky EVO IP68 | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 9 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Spínacie zásuvky > Dálkově ovládané | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 9 |
| Energia a napájanie > Fotovoltaika > Solárne panely > Flexibilní solárne panely | Energia a napájanie > Fotovoltaika | 9 |
| Elektro, Smart Home a osvetlenie > Káble a vodiče > Koaxiálne káble > Metráž | Elektro, Smart Home a osvetlenie > Káble a vodiče | 9 |
| TV, audio, video a foto technika > Antény a satelity > Konzoly na stěnu > Držiaky k oknu | TV, audio, video a foto technika > Antény a satelity | 9 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ TT pre | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 9 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Smršťovací bužírky | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 9 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Soumrakové spínače | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 9 |
| Energia a napájanie > Akumulátory a batérie > NiMh nabíjacie akumulátory > AA ceruzkové | Energia a napájanie > Akumulátory a batérie | 9 |
| Dielňa, náradie a záhrada > MERACIE TECHNIKA > Laboratorní zdroje | Dielňa, náradie a záhrada > Meracia technika > Osciloskopy, generátory a laboratórne zdroje | 9 |
| Dielňa, náradie a záhrada > Pneumatické náradie | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Pneumatické náradie | 9 |
| Cestovanie, šport a outdoor > Ďalekohľady > Digitálne fotoaparáty | Cestovanie, šport a outdoor > Ďalekohľady | 9 |
| Energia a napájanie > Akumulátory a batérie > Očká, fastóny, dutinky, spojky > Sady fastonů | Energia a napájanie > Akumulátory a batérie | 9 |
| Cestovanie, šport a outdoor > Sportovní vybavenie > Odrážadlá | Cestovanie, šport a outdoor > Športové vybavenie | 9 |
| Energia a napájanie > Fotovoltaika > Nabíjacie stanice | Energia a napájanie > Fotovoltaika | 9 |
| TV, audio, video a foto technika > Antény a satelity > Účastnické zásuvky > Víčka, krabice | TV, audio, video a foto technika > Antény a satelity | 9 |
| TV, audio, video a foto technika > Antény a satelity > LNB konvertory > Singl 1 TV | TV, audio, video a foto technika > Antény a satelity | 9 |
| Cestovanie, šport a outdoor > Hračky > Vybavenie pokojíčků a školek > Hracie funkční nábytok | Cestovanie, šport a outdoor > Hračky | 9 |
| Cestovanie, šport a outdoor > Hračky > Vybavenie pokojíčků a školek | Cestovanie, šport a outdoor > Hračky | 9 |
| Elektro, Smart Home a osvetlenie > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Komponenty pre svietidlá | 9 |
| Elektro, Smart Home a osvetlenie > Komponenty pre svietidlá > Svítidlové spínače (kolébkové) | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Komponenty pre svietidlá | 9 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Káblové příchytky a držiaky > Sběrné káblové držiaky | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 9 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Činky a príslušenstvo > Činky obouruční, osy | Cestovanie, šport a outdoor > Posilňovanie a fitness | 9 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Laserové senzory pohybu | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 9 |
| Energia a napájanie > Fotovoltaika > Solárne zostavy > Zostavy pre solárne ohrev vody | Energia a napájanie > Fotovoltaika | 9 |
| Domáce spotrebiče > Sanitárna technika > Ostatné | Domáce spotrebiče > Sanitárna technika | 9 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Vrtáky > Sady vrtáků | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 9 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kľúče > HEX, IMBUS, TORX | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 9 |
| Dielňa, náradie a záhrada > Elektrické a AKU náradie > Pištole lepící a horúcovzdušné > Príslušenstvo pre tavné pištole | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Lepiace a horúcovzdušné pištole | 8 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Potrubie | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 8 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 20m | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 8 |
| Elektro, Smart Home a osvetlenie > Kompenzátory jalového výkonu | Elektro, Smart Home a osvetlenie > Ističe a chrániče | 8 |
| TV, audio, video a foto technika > Antény a satelity > Satelitné príslušenstvo > Motory | TV, audio, video a foto technika > Antény a satelity | 8 |
| TV, audio, video a foto technika > Antény a satelity > Stožiare a trojnožky > Nadstavce na stožiare | TV, audio, video a foto technika > Antény a satelity | 8 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kľúče > Ploché kľúče | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 8 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Opticum | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 8 |
| Cestovanie, šport a outdoor > Hračky > Výtvarné hračky a tvoření > Malování, barvy, šablony | Cestovanie, šport a outdoor > Hračky | 8 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Mřížky > Kovové mřížky | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 8 |
| TV, audio, video a foto technika > Antény a satelity > Spojovacie a kotevní materiál, chémia > Káblové příchytky | TV, audio, video a foto technika > Antény a satelity | 8 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Sencor | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 8 |
| Cestovanie, šport a outdoor > Hračky > Školské pomôcky, tabule > Výtvarné potreby | Cestovanie, šport a outdoor > Hračky | 8 |
| Cestovanie, šport a outdoor > Hračky > Školské pomôcky, tabule | Cestovanie, šport a outdoor > Hračky | 8 |
| Elektro, Smart Home a osvetlenie > Ističe a chrániče > Pojistné odpojovače | Elektro, Smart Home a osvetlenie > Ističe a chrániče | 8 |
| TV, audio, video a foto technika > Antény a satelity > Satelitné príslušenstvo > Multipřepínače > 1 družice | TV, audio, video a foto technika > Antény a satelity | 8 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Emos | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 8 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > GoGEN | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 8 |
| TV, audio, video a foto technika > Antény a satelity > Satelitné príslušenstvo > Multipřepínače > 2 družice | TV, audio, video a foto technika > Antény a satelity | 8 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Spínacie hodiny > Digitálne spínacie hodiny | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 8 |
| TV, audio, video a foto technika > AV káble > Dvojlinky | TV, audio, video a foto technika > AV káble | 8 |
| Elektro, Smart Home a osvetlenie > Inštalačné náradie a ostatné materiál > Elektrické zámky | Elektro, Smart Home a osvetlenie > Inštalačné náradie a materiál | 8 |
| Počítače, mobily a tablety > Sieťové prvky > Konektory, zásuvky | Počítače, mobily a tablety > WiFi routery a sieťové karty | 8 |
| Dielňa, náradie a záhrada > Mechanické náradie > Nože a nožnice | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 8 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Termostaty > Zásuvkové | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 8 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Činky a príslušenstvo > Stojany | Cestovanie, šport a outdoor > Posilňovanie a fitness | 8 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Malířství a natěračství > Štětky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 8 |
| Elektro, Smart Home a osvetlenie > Inštalačné náradie a ostatné materiál > Chémia | Elektro, Smart Home a osvetlenie > Inštalačné náradie a materiál | 8 |
| Dielňa, náradie a záhrada > Mechanické náradie > Nýtování > Nity | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 8 |
| Auto-moto > Karavany a obytná autá > Redukcie a adaptéry | Auto-moto > Karavany a obytné autá | 8 |
| Elektro, Smart Home a osvetlenie > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá > Svorky - SLK 3 | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Komponenty pre svietidlá | 8 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Trenažéry > Běžecké pásy | Cestovanie, šport a outdoor > Posilňovanie a fitness | 8 |
| TV, audio, video a foto technika > Antény a satelity > PASIVNÍ PRVKY > Odbočovače | TV, audio, video a foto technika > Antény a satelity | 8 |
| Auto-moto > Nosiče kol > Nosiče na tažné zariadenie | Auto-moto > Nosiče bicyklov a strešné nosiče | 8 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Orava | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 8 |
| Dielňa, náradie a záhrada > Elektronické súčiastky > Priemyselné zdroje | Dielňa, náradie a záhrada > Elektronické súčiastky | 8 |
| Elektro, Smart Home a osvetlenie > Komponenty pre svietidlá > Objímky | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Komponenty pre svietidlá | 8 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > ECG | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 8 |
| Energia a napájanie > Akumulátory a batérie > AA ceruzkové | Energia a napájanie > Akumulátory a batérie | 8 |
| Dielňa, náradie a záhrada > Elektronické súčiastky > Arduino a moduly > Sety Arduino | Dielňa, náradie a záhrada > Elektronické súčiastky | 8 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady DOSPEL > Ventilátory - typ POLO | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 8 |
| Dielňa, náradie a záhrada > SPÁJKOVACIE TECHNIKA > Chémia pre pájení | Dielňa, náradie a záhrada > Spájkovacia technika | 7 |
| Auto-moto > Karavany a obytná autá > Mobilné TV a SAT antény > Antény pre DVB-T2 príjem | Auto-moto > Karavany a obytné autá | 7 |
| Auto-moto > Karavany a obytná autá > Mobilné TV a SAT antény | Auto-moto > Karavany a obytné autá | 7 |
| TV, audio, video a foto technika > Antény a satelity > Konzoly na stěnu > Držiaky na okenní rám | TV, audio, video a foto technika > Antény a satelity | 7 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Dreambox | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 7 |
| TV, audio, video a foto technika > Antény a satelity > Konektory > F spojky | TV, audio, video a foto technika > Antény a satelity | 7 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > DIWAY | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 7 |
| Elektro, Smart Home a osvetlenie > Inštalačné náradie a ostatné materiál > Náradie pre fotovoltaiku | Elektro, Smart Home a osvetlenie > Inštalačné náradie a materiál | 7 |
| Elektro, Smart Home a osvetlenie > Inštalačné náradie a ostatné materiál > Ostatné | Elektro, Smart Home a osvetlenie > Inštalačné náradie a materiál | 7 |
| TV, audio, video a foto technika > Antény a satelity > SATELITNÉ PRIJÍMAČE > Wi-Fi adaptéry | TV, audio, video a foto technika > Antény a satelity | 7 |
| Energia a napájanie > Fotovoltaika > Ochrana FV instalací > Poistky | Energia a napájanie > Fotovoltaika | 7 |
| Energia a napájanie > Akumulátory a batérie > AAA mikrotužkové | Energia a napájanie > Akumulátory a batérie | 7 |
| TV, audio, video a foto technika > Antény a satelity > Satelitné príslušenstvo > Multipřepínače > 4 družice | TV, audio, video a foto technika > Antény a satelity | 7 |
| TV, audio, video a foto technika > Antény a satelity > Držiaky stožárů > Na krovy | TV, audio, video a foto technika > Antény a satelity | 7 |
| Elektro, Smart Home a osvetlenie > Káble a vodiče > Koaxiálne káble > Vonkajšie | Elektro, Smart Home a osvetlenie > Káble a vodiče | 7 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Nástroje > Lepící pásky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 7 |
| TV, audio, video a foto technika > Antény a satelity > Koaxiálne káble > TV účastnické šnúry | TV, audio, video a foto technika > Antény a satelity | 7 |
| TV, audio, video a foto technika > AV káble > TV účastnické šnúry | TV, audio, video a foto technika > AV káble | 7 |
| Energia a napájanie > Fotovoltaika > Solárne panely > Prenosné a skládací | Energia a napájanie > Fotovoltaika | 7 |
| TV, audio, video a foto technika > Audio technika > Slúchadlá | TV, audio, video a foto technika > Audio technika | 7 |
| TV, audio, video a foto technika > Antény a satelity > PASIVNÍ PRVKY > Útlumové články | TV, audio, video a foto technika > Antény a satelity | 7 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Grundig | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 7 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > DVD > Philips | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 7 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Káblové gelové spojky PAGURO IP68 | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 7 |
| TV, audio, video a foto technika > Antény a satelity > Koaxiálne káble > Kabel s F konektory | TV, audio, video a foto technika > Antény a satelity | 7 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kliešte > Kliešte štiepacie | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 7 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Brusivo > Brúsne kotúče | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 7 |
| Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Smršťovací bužírky | Auto-moto > Garáž, dielňa, servis | 7 |
| TV, audio, video a foto technika > Televízory > Televízory na 12V | TV, audio, video a foto technika > Televízory | 7 |
| Auto-moto > Vybavenie autá > Osviežovače vzduchu > Vône AROMA CAR | Auto-moto > Príslušenstvo do auta | 7 |
| Cestovanie, šport a outdoor > Bojové športy > Montážne prvky | Cestovanie, šport a outdoor > Bojové športy | 7 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Ochranné gelové krabičky | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 7 |
| Cestovanie, šport a outdoor > Sportovní vybavenie > Vodné športy, hračky do vody | Cestovanie, šport a outdoor > Športové vybavenie | 7 |
| Auto-moto > Vybavenie autá > Stierače > Sady stieračov FLAT DOUBLE | Auto-moto > Príslušenstvo do auta | 7 |
| TV, audio, video a foto technika > Antény a satelity > LNB konvertory > Quad 4 TV | TV, audio, video a foto technika > Antény a satelity | 7 |
| Cestovanie, šport a outdoor > Ďalekohľady > Monokulární | Cestovanie, šport a outdoor > Ďalekohľady | 7 |
| TV, audio, video a foto technika > Antény a satelity > LNB konvertory > Twin 2 TV | TV, audio, video a foto technika > Antény a satelity | 7 |
| TV, audio, video a foto technika > AV káble > Optické káble | TV, audio, video a foto technika > AV káble | 7 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > JVC | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 7 |
| Cestovanie, šport a outdoor > Cyklistika > Ostatné cyklo doplnky | Cestovanie, šport a outdoor > Cyklistika | 7 |
| Dielňa, náradie a záhrada > Elektronické súčiastky > Poistky, pojistkové držiaky > Pojistková puzdrá a držiaky | Dielňa, náradie a záhrada > Elektronické súčiastky | 7 |
| TV, audio, video a foto technika > TV stolíky a držiaky > Držiaky monitorů | TV, audio, video a foto technika > TV stolíky a držiaky | 7 |
| TV, audio, video a foto technika > Antény a satelity > LNB konvertory > Quattro (H/V) | TV, audio, video a foto technika > Antény a satelity | 7 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Bloky pre rozdělení fází > Typ PVB ("hranaté") 160 - 500 A | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 7 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Zircon | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 7 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ TT | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 7 |
| Auto-moto > Vybavenie autá > Stierače > Stierače HYBRID | Auto-moto > Príslušenstvo do auta | 7 |
| Cestovanie, šport a outdoor > Sportovní vybavenie > Sportovní okuliare | Cestovanie, šport a outdoor > Športové vybavenie | 7 |
| TV, audio, video a foto technika > Antény a satelity > SATELITNÉ PRIJÍMAČE > COMBO SAT/DVBT | TV, audio, video a foto technika > Antény a satelity | 7 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Technisat | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 7 |
| TV, audio, video a foto technika > Antény a satelity > Držiaky stožárů > Patky | TV, audio, video a foto technika > Antény a satelity | 7 |
| TV, audio, video a foto technika > Antény a satelity > Satelitné príslušenstvo > Multipřepínače > 3 družice | TV, audio, video a foto technika > Antény a satelity | 7 |
| Dielňa, náradie a záhrada > Pneumatické náradie > Príslušenstvo k pneu náradie | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Pneumatické náradie | 7 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Kotúče rezacie, pílové, brúsne > Kotúče rezacie diamantové | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 7 |
| Dielňa, náradie a záhrada > Elektronické súčiastky > Priemyselné zdroje > 12v | Dielňa, náradie a záhrada > Elektronické súčiastky | 7 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k multimediálnímu boxu | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 7 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - s doběhem (časovač) > Pre průměr potrubie 100 mm | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 7 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Prepojovacie a rozbočovacie svorky > Přístrojové prepojovacie svorky > Tvar konektoru "vidlička" | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 7 |
| TV, audio, video a foto technika > Antény a satelity > PASIVNÍ PRVKY > Slučovače TV | TV, audio, video a foto technika > Antény a satelity | 6 |
| TV, audio, video a foto technika > Antény a satelity > ZOSILŇOVAČE > Linkové | TV, audio, video a foto technika > Antény a satelity | 6 |
| Domáce spotrebiče > Sanitárna technika > Sprchové hlavice | Domáce spotrebiče > Sanitárna technika | 6 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Zgemma | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 6 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Píly | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 6 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Renault | Auto-moto > Príslušenstvo do auta | 6 |
| Auto-moto > Kolesá > Měřiče tlaku | Auto-moto > Kolesá a pneumatiky | 6 |
| TV, audio, video a foto technika > Antény a satelity > PASIVNÍ PRVKY > Anténní bleskojistky | TV, audio, video a foto technika > Antény a satelity | 6 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Vrtáky > Vŕtacie korunky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 6 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kladivá, dláta, sekery > Paličky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 6 |
| Dielňa, náradie a záhrada > Mechanické náradie > Svěrky, zveráky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 6 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Formuler | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 6 |
| Auto-moto > Autokozmetika, Chémia > Renovace | Auto-moto > Autokozmetika a chémia | 6 |
| Počítače, mobily a tablety > Kancelária a škola > Trezory | Počítače, mobily a tablety > Kancelária a škola | 6 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ QUIET | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 6 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Obkladačské práce | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 6 |
| Dielňa, náradie a záhrada > Mechanické náradie > Náradie pre ženy | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 6 |
| Cestovanie, šport a outdoor > Bojové športy > Tréninková lana | Cestovanie, šport a outdoor > Bojové športy | 6 |
| TV, audio, video a foto technika > Antény a satelity > Konzoly na stěnu > Sa čtvercovou základnou | TV, audio, video a foto technika > Antény a satelity | 6 |
| Elektro, Smart Home a osvetlenie > Inštalačné náradie a ostatné materiál > Ořezávače káblov | Elektro, Smart Home a osvetlenie > Inštalačné náradie a materiál | 6 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice > Svorky a svorkovnice > WAGO svorky | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 6 |
| TV, audio, video a foto technika > Antény a satelity > Uzemnenie, hromosvody > Ekvipotenciální svorkovnice | TV, audio, video a foto technika > Antény a satelity | 6 |
| TV, audio, video a foto technika > Antény a satelity > Konzoly sa třmenem > Univerzálne | TV, audio, video a foto technika > Antény a satelity | 6 |
| TV, audio, video a foto technika > Televízory > 32" (80 - 82 cm) | TV, audio, video a foto technika > Televízory | 6 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Hyundai | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 6 |
| Cestovanie, šport a outdoor > Sportovní vybavenie > Raketové športy > Badminton | Cestovanie, šport a outdoor > Športové vybavenie | 6 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Organizéry káblov | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 6 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Homecast | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 6 |
| Auto-moto > Garáž, Dielňa, Servis > Čerpadlá | Auto-moto > Garáž, dielňa, servis | 6 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > GoSAT | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 6 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Bloky pre rozdělení fází > Typ PDB 160 - 490 A | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 6 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Podvozek > Heváky a zdviháky > Náhradné diely k heverům | Auto-moto > Garáž, dielňa, servis | 6 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice > TV SAT zásuvky > Průběžné | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 6 |
| TV, audio, video a foto technika > Antény a satelity > Účastnické zásuvky > Průběžné | TV, audio, video a foto technika > Antény a satelity | 6 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Malířství a natěračství > Valčeky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 6 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ostatné | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 6 |
| Auto-moto > Karavany a obytná autá > Grily a variče | Auto-moto > Karavany a obytné autá | 6 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Hotelové a senior ovládače | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 6 |
| Dielňa, náradie a záhrada > Chémia > Ostatné chemické prípravky | Dielňa, náradie a záhrada > Dielenské vybavenie > Chémia pre dielňu | 6 |
| TV, audio, video a foto technika > Antény a satelity > Spojovacie a kotevní materiál, chémia > Chémia | TV, audio, video a foto technika > Antény a satelity | 6 |
| Energia a napájanie > Akumulátory a batérie > Prepojovacie káble | Energia a napájanie > Akumulátory a batérie | 6 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Pomôcky na cvičenie > Závažia na kotníky a zápěstí | Cestovanie, šport a outdoor > Posilňovanie a fitness | 6 |
| Cestovanie, šport a outdoor > Turistika > Karimatky, matrace, vankúše | Cestovanie, šport a outdoor > Turistika a outdoor | 6 |
| Energia a napájanie > Akumulátory a batérie > Autobatérie | Energia a napájanie > Akumulátory a batérie | 6 |
| Auto-moto > Vybavenie autá > Autožiarovky > 24V | Auto-moto > Autožiarovky a osvetlenie | 6 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Kaon | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 6 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Zásuvkové elektromery | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 6 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VKO | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 6 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > ATlink | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 6 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Talířové ventily a difuzéry | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 6 |
| Energia a napájanie > Fotovoltaika > Solárne zostavy > Zostavy pre ostrovní systémy (OFF-GRID) | Energia a napájanie > Fotovoltaika | 6 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Humax | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 6 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Hisense | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 6 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > OVP | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 6 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Thomson | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 6 |
| Dielňa, náradie a záhrada > Chémia > Mazivá | Dielňa, náradie a záhrada > Dielenské vybavenie > Chémia pre dielňu | 6 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Termostaty > Příložné | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 6 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Prípravky | Auto-moto > Garáž, dielňa, servis | 6 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Vrtáky > Vrtáky na kov | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 6 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Můstky na nosnou lištu > Distribuční bloky | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 6 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Mercedes-Benz | Auto-moto > Príslušenstvo do auta | 6 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Počítadla provozních hodin > Počítadla provozních hodin do panelu | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 6 |
| Auto-moto > Autokozmetika, Chémia > Oleje, mazivá | Auto-moto > Autokozmetika a chémia | 6 |
| Auto-moto > Garáž, Dielňa, Servis > Kanystry | Auto-moto > Garáž, dielňa, servis | 6 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Predlžovačky 3 fázové | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 6 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Impulzní spínače | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 6 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Můstky na nosnou lištu > Bezšroubové kryté můstky (IP20) | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 6 |
| TV, audio, video a foto technika > Antény a satelity > Konzoly na stěnu > Držiaky na střechu | TV, audio, video a foto technika > Antény a satelity | 5 |
| TV, audio, video a foto technika > Antény a satelity > Účastnické zásuvky > Koncové | TV, audio, video a foto technika > Antény a satelity | 5 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Vestel | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 5 |
| Počítače, mobily a tablety > USB káble > USB A | Počítače, mobily a tablety > USB káble | 5 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Technika | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 5 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Renault > Duster | Auto-moto > Príslušenstvo do auta | 5 |
| Cestovanie, šport a outdoor > Turistika > Kempingové stoly, stoličky, ležadlá | Cestovanie, šport a outdoor > Turistika a outdoor | 5 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ QUIETLINE | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 5 |
| Energia a napájanie > Fotovoltaika > Ochrana FV instalací > Ističe | Energia a napájanie > Fotovoltaika | 5 |
| Cestovanie, šport a outdoor > Cyklistika > Pumpy na kolo | Cestovanie, šport a outdoor > Cyklistika | 5 |
| Elektro, Smart Home a osvetlenie > Prepäťové ochrany > Koaxiálne ochrany | Elektro, Smart Home a osvetlenie > Ističe a chrániče | 5 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Vrtáky > Vrtáky do dreva | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 5 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > DVD > Samsung | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 5 |
| Energia a napájanie > Fotovoltaika > Solárne nabíjačky | Energia a napájanie > Fotovoltaika | 5 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Počítadla provozních hodin > Počítadla provozních hodin na DIN lištu | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 5 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Kotúče rezacie, pílové, brúsne > Kotúče brúsne | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 5 |
| TV, audio, video a foto technika > Antény a satelity > Uzemnenie, hromosvody > Zemnící pásky | TV, audio, video a foto technika > Antény a satelity | 5 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Exteriér > Oprava karoserie | Auto-moto > Garáž, dielňa, servis | 5 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Exteriér | Auto-moto > Garáž, dielňa, servis | 5 |
| Cestovanie, šport a outdoor > Cyklistika > Elektrokola | Cestovanie, šport a outdoor > Cyklistika | 5 |
| TV, audio, video a foto technika > Antény a satelity > Príslušenstvo ku stožárům > Krytky stožárů | TV, audio, video a foto technika > Antény a satelity | 5 |
| Energia a napájanie > Akumulátory a batérie > NiMh nabíjacie akumulátory > AAA mikrotužkové | Energia a napájanie > Akumulátory a batérie | 5 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > AB | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 5 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Sťahováky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 5 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Trenažéry > Veslařské trenažéry | Cestovanie, šport a outdoor > Posilňovanie a fitness | 5 |
| Cestovanie, šport a outdoor > Sportovní vybavenie > Bazény a vířivky | Cestovanie, šport a outdoor > Športové vybavenie | 5 |
| TV, audio, video a foto technika > Antény a satelity > CAM dekodéry a karty | TV, audio, video a foto technika > Antény a satelity | 5 |
| Elektro, Smart Home a osvetlenie > Inštalačné náradie a ostatné materiál > Organizéry | Elektro, Smart Home a osvetlenie > Inštalačné náradie a materiál | 5 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Bensat | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 5 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Ford | Auto-moto > Garáž, dielňa, servis | 5 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Podvozek > Podstavce > Príslušenstvo k podstavcům | Auto-moto > Garáž, dielňa, servis | 5 |
| Dielňa, náradie a záhrada > Dielenské vybavenie > Svářecí stroje | Dielňa, náradie a záhrada > Dielenské vybavenie | 5 |
| Energia a napájanie > Fotovoltaika > Solárne panely > Monokrystalické s rámem | Energia a napájanie > Fotovoltaika | 5 |
| TV, audio, video a foto technika > Antény a satelity > PASIVNÍ PRVKY > Rozbočovače > Televízne aktivní | TV, audio, video a foto technika > Antény a satelity | 5 |
| TV, audio, video a foto technika > Antény a satelity > ZOSILŇOVAČE > Aktivní TV rozbočovače | TV, audio, video a foto technika > Antény a satelity | 5 |
| TV, audio, video a foto technika > AV káble > HDMI spojky a redukcie | TV, audio, video a foto technika > AV káble | 5 |
| Elektro, Smart Home a osvetlenie > Káble a vodiče > Auto káble | Elektro, Smart Home a osvetlenie > Káble a vodiče | 5 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Volkswagen | Auto-moto > Garáž, dielňa, servis | 5 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Vzduchovody > Flexipotrubí kruhové | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 5 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 30m | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 5 |
| TV, audio, video a foto technika > Televízory > LED projektory | TV, audio, video a foto technika > Televízory | 5 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Vzduchovody > Kovové potrubie | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 5 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Mascom | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 5 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Krbové ventilátory | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 5 |
| TV, audio, video a foto technika > Antény a satelity > SET-TOP-BOXY > COMBO DVB-T2 H.265 HEVC/SAT | TV, audio, video a foto technika > Antény a satelity | 5 |
| Dielňa, náradie a záhrada > SPÁJKOVACIE TECHNIKA > Plynové spájkovačky | Dielňa, náradie a záhrada > Spájkovacia technika | 5 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Pomôcky na cvičenie > Švihadlá | Cestovanie, šport a outdoor > Posilňovanie a fitness | 5 |
| Dielňa, náradie a záhrada > Ochranné pomôcky a odevy > Kukly a štíty | Dielňa, náradie a záhrada > Dielenské vybavenie > Ochranné pomôcky a odevy | 5 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Mřížky > Mřížka kruhová s nástavcem | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 5 |
| Auto-moto > Vybavenie autá > Osviežovače vzduchu > Vône LUCKY TOP | Auto-moto > Príslušenstvo do auta | 5 |
| Dielňa, náradie a záhrada > Mechanické náradie > Nýtování > Nitovacie matice | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 5 |
| TV, audio, video a foto technika > Televízory > Príslušenstvo pre televízory | TV, audio, video a foto technika > Televízory | 5 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce BMW > X1, X3, X4, X5, X6 | Auto-moto > Príslušenstvo do auta | 5 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce BMW | Auto-moto > Príslušenstvo do auta | 5 |
| Auto-moto > Vybavenie autá > Osviežovače vzduchu > Vône CAR CITY | Auto-moto > Príslušenstvo do auta | 5 |
| Auto-moto > Vybavenie autá > Osviežovače vzduchu > Vône FRESH POINT | Auto-moto > Príslušenstvo do auta | 5 |
| Auto-moto > Vybavenie autá > Osviežovače vzduchu > Různé | Auto-moto > Príslušenstvo do auta | 5 |
| Energia a napájanie > Akumulátory a batérie > 9V | Energia a napájanie > Akumulátory a batérie | 5 |
| Dielňa, náradie a záhrada > Ochranné pomôcky a odevy > Okuliare | Dielňa, náradie a záhrada > Dielenské vybavenie > Ochranné pomôcky a odevy | 5 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Fiat | Auto-moto > Garáž, dielňa, servis | 5 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Príslušenstvo k ventilátorům > Zpětné klapky, filtračné boxy | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 5 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Schodišťové automaty | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 5 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Citroën | Auto-moto > Garáž, dielňa, servis | 5 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kefy | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 5 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Alfa Romeo | Auto-moto > Garáž, dielňa, servis | 5 |
| Dielňa, náradie a záhrada > MERACIE TECHNIKA > Meranie vody, plynu, vykurovanie, elektřiny | Dielňa, náradie a záhrada > Meracia technika | 5 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kliešte > Kliešte SIKO | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 5 |
| TV, audio, video a foto technika > Antény a satelity > ZOSILŇOVAČE > HLAVNÍ STANICE > ALCAD > Zdroje | TV, audio, video a foto technika > Antény a satelity | 4 |
| TV, audio, video a foto technika > Antény a satelity > ZOSILŇOVAČE > HLAVNÍ STANICE > ALCAD | TV, audio, video a foto technika > Antény a satelity | 4 |
| TV, audio, video a foto technika > Antény a satelity > ZOSILŇOVAČE > HLAVNÍ STANICE | TV, audio, video a foto technika > Antény a satelity | 4 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice > TV SAT zásuvky > Koncové | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 4 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Golden Interstar | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 4 |
| Energia a napájanie > Fotovoltaika > Rozvádzače > Výhodné sety rozvaděč + komponenty | Energia a napájanie > Fotovoltaika | 4 |
| Počítače, mobily a tablety > USB káble > Micro USB káble | Počítače, mobily a tablety > USB káble | 4 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Káblové spojky SHARK IP68 | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 4 |
| Cestovanie, šport a outdoor > Hračky > Autá, bagry, traktory pre deti | Cestovanie, šport a outdoor > Hračky | 4 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Evolve | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 4 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Volkswagen | Auto-moto > Príslušenstvo do auta | 4 |
| Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Odpojovače batérií | Auto-moto > Garáž, dielňa, servis | 4 |
| Elektro, Smart Home a osvetlenie > Ističe a chrániče > Odpojovače batérií | Elektro, Smart Home a osvetlenie > Ističe a chrániče | 4 |
| Auto-moto > Vybavenie autá > Odpojovač batérie | Auto-moto > Príslušenstvo do auta | 4 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Showbox | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 4 |
| TV, audio, video a foto technika > Antény a satelity > LNB konvertory > MonoTwin 2 TV | TV, audio, video a foto technika > Antény a satelity | 4 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Závitníky, príslušenstvo | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 4 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kliešte > Kliešte kombinované | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 4 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Tesla | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 4 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Mřížky > Mřížka sa síťkou s nástavcem | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 4 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Gravitační žaluzie a klapky > Gravitační žaluzie s nástavcem (na omítku) | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 4 |
| Elektro, Smart Home a osvetlenie > Inštalačné náradie a ostatné materiál > Kľúče na F konektory | Elektro, Smart Home a osvetlenie > Inštalačné náradie a materiál | 4 |
| TV, audio, video a foto technika > Antény a satelity > LNB konvertory > Monoblok 1 TV | TV, audio, video a foto technika > Antény a satelity | 4 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > DVD > LG | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 4 |
| Auto-moto > Vybavenie autá > Osviežovače vzduchu > Vône CITY | Auto-moto > Príslušenstvo do auta | 4 |
| Dielňa, náradie a záhrada > Mechanické náradie > Náradie pre elektrikáře | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 4 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 40m | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 4 |
| Dielňa, náradie a záhrada > Dielenské vybavenie > Kufre a organizéry na náradie > Kufre na náradie | Dielňa, náradie a záhrada > Dielenské vybavenie | 4 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Ferguson | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 4 |
| TV, audio, video a foto technika > Antény a satelity > SATELITNÉ PRIJÍMAČE > Prijímače pre freeSAT | TV, audio, video a foto technika > Antény a satelity | 4 |
| TV, audio, video a foto technika > Antény a satelity > PASIVNÍ PRVKY > LTE filtre | TV, audio, video a foto technika > Antény a satelity | 4 |
| Energia a napájanie > Akumulátory a batérie > Li-Ion nabíjacie akumulátory | Energia a napájanie > Akumulátory a batérie | 4 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Malířství a natěračství > Ochranné fólie | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 4 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Technisat | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 4 |
| Energia a napájanie > Fotovoltaika > Solárne batérie | Energia a napájanie > Fotovoltaika | 4 |
| Počítače, mobily a tablety > Rackové skrine a príslušenstvo > Príslušenstvo > Chladenie | Počítače, mobily a tablety > Rackové skrine – príslušenstvo | 4 |
| TV, audio, video a foto technika > Antény a satelity > Príslušenstvo ku stožárům > Manžety | TV, audio, video a foto technika > Antény a satelity | 4 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Optex | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 4 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > BEKO | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 4 |
| TV, audio, video a foto technika > Antény a satelity > SATELITNÉ PRIJÍMAČE > Skylink ready prijímače | TV, audio, video a foto technika > Antény a satelity | 4 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Adaptéry a redukcie > Cestovné adaptéry | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 4 |
| Dielňa, náradie a záhrada > Mechanické náradie > Skrutkovače, bity, imbusy > Skrutkovače pre jemnou mechaniku | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 4 |
| Cestovanie, šport a outdoor > Bojové športy > Pytlovky | Cestovanie, šport a outdoor > Bojové športy | 4 |
| TV, audio, video a foto technika > Audio technika > Soundbary | TV, audio, video a foto technika > Audio technika | 4 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Rozvádzače samostatné > Rozvodnice AcquaPLUS IP65 | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 4 |
| Dielňa, náradie a záhrada > Elektronické súčiastky > Konektory | Dielňa, náradie a záhrada > Elektronické súčiastky | 4 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kliešte > Kliešte štiepacie > Kliešte štiepacie boční | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 4 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kliešte > Kliešte konektorové | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 4 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Mřížky > Mřížka sa síťkou bez nadstavce | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 4 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ CF | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 4 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > TCL | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 4 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice > Elektroinštalačný krabice > Krabice do SDK (sádrokartonu) | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 4 |
| Auto-moto > Garáž, Dielňa, Servis > Hasicí prístroje | Auto-moto > Garáž, dielňa, servis | 4 |
| Dielňa, náradie a záhrada > Elektrické a AKU náradie > Nožnice AKU | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Lepiace a horúcovzdušné pištole | 4 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Trenažéry > Spinningová kolesá | Cestovanie, šport a outdoor > Posilňovanie a fitness | 4 |
| Dielňa, náradie a záhrada > Drobné náradie a príslušenstvo > Podložky a krúžky | Dielňa, náradie a záhrada > Dielenské vybavenie > Sťahovacie pásky a drobné príslušenstvo | 4 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Golden Media | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 4 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Ineos | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 4 |
| TV, audio, video a foto technika > Antény a satelity > CAM dekodéry a karty > CA moduly | TV, audio, video a foto technika > Antény a satelity | 4 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Openbox | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 4 |
| Dielňa, náradie a záhrada > Pneumatické náradie > Príslušenstvo k pneu náradie > Hadice | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Pneumatické náradie | 4 |
| TV, audio, video a foto technika > Antény a satelity > Servis > Aktualizace softvér | TV, audio, video a foto technika > Antény a satelity | 4 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Můstky na nosnou lištu > Nekryté můstky (IP00) | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 4 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > GoSat | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 4 |
| Elektro, Smart Home a osvetlenie > Komponenty pre svietidlá > Objímky > Príslušenstvo k objímkám | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Komponenty pre svietidlá | 4 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kľúče > Nadstavce | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 4 |
| Dielňa, náradie a záhrada > Elektronické súčiastky > Arduino a moduly > Stavebnice Arduino | Dielňa, náradie a záhrada > Elektronické súčiastky | 4 |
| Cestovanie, šport a outdoor > Zdravotní potreby > Rehabilitační rotopedy | Cestovanie, šport a outdoor > Zdravotné a rehabilitačné pomôcky | 4 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Spínacie zásuvky > Smart zásuvky | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 4 |
| Cestovanie, šport a outdoor > Sportovní vybavenie > Hoverboardy | Cestovanie, šport a outdoor > Športové vybavenie | 4 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VK | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 4 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Pilníky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 4 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ OV1 | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 4 |
| Elektro, Smart Home a osvetlenie > Komponenty pre svietidlá > Objímky > Plastové objímky E14 | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Komponenty pre svietidlá | 4 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Hladinvé spínače | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 4 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady DOSPEL > Ventilátory - typ STYL | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 4 |
| Elektro, Smart Home a osvetlenie > Káble a vodiče > Koaxiálne káble > Železné | Elektro, Smart Home a osvetlenie > Káble a vodiče | 3 |
| Dielňa, náradie a záhrada > Mechanické náradie > Sešívání | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 3 |
| Auto-moto > Vybavenie autá > Autožiarovky > 12V Excelite | Auto-moto > Autožiarovky a osvetlenie | 3 |
| Dielňa, náradie a záhrada > Mechanické náradie > Príslušenstvo ku gola sadám > Sady bitů | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 3 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Píly > Pílové kotúče na dřevo | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 3 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Audi | Auto-moto > Príslušenstvo do auta | 3 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Peugeot | Auto-moto > Príslušenstvo do auta | 3 |
| TV, audio, video a foto technika > Antény a satelity > Konzoly sa třmenem > Anténní ráhna | TV, audio, video a foto technika > Antény a satelity | 3 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kladivá, dláta, sekery > Kladivá | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 3 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Thomson | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 3 |
| TV, audio, video a foto technika > Audio technika > Slúchadlá > Slúchadlá herné | TV, audio, video a foto technika > Audio technika | 3 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Murárske práce > Špachtle, stierky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 3 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Murárske práce > Hladidlá a stierky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 3 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Drátěné kefy | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 3 |
| Elektro, Smart Home a osvetlenie > Ističe a chrániče > Ističe DC | Elektro, Smart Home a osvetlenie > Ističe a chrániče | 3 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kliešte > Kliešte štiepacie > Kliešte štiepacie čelné | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 3 |
| TV, audio, video a foto technika > Televízory > do 30" (76 cm) | TV, audio, video a foto technika > Televízory | 3 |
| Dielňa, náradie a záhrada > Mechanické náradie > Príslušenstvo ku gola sadám > Adaptéry a príslušenstvo | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 3 |
| Cestovanie, šport a outdoor > Cyklistika > Cyklodržáky | Cestovanie, šport a outdoor > Cyklistika | 3 |
| Domáce spotrebiče > Sanitárna technika > Dávkovače mydlá | Domáce spotrebiče > Sanitárna technika | 3 |
| Počítače, mobily a tablety > USB káble > Lightning | Počítače, mobily a tablety > USB káble | 3 |
| TV, audio, video a foto technika > Televízory > nad 48" (120 - 165 cm) | TV, audio, video a foto technika > Televízory | 3 |
| TV, audio, video a foto technika > Televízory > Televízory Ultra HD (4K) | TV, audio, video a foto technika > Televízory | 3 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Podvozek > Ostatné | Auto-moto > Garáž, dielňa, servis | 3 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VK EC | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 3 |
| Dielňa, náradie a záhrada > Mechanické náradie > Nože a nožnice > Ulamovací a zasouvací nože | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 3 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Jednosložkové vyplňovací gély | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 3 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Rozvádzače samostatné > Rozvodnice NEPTUN IP65 | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 3 |
| Dielňa, náradie a záhrada > SPÁJKOVACIE TECHNIKA > Odsávačky cínu | Dielňa, náradie a záhrada > Spájkovacia technika | 3 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Murárske práce > Pištole na kartuše | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 3 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > LinkBox | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 3 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice > Rámečky | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 3 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 15m | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 3 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Pre rackové skrine | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 3 |
| Auto-moto > Karavany a obytná autá > Kempingový nábytok | Auto-moto > Karavany a obytné autá | 3 |
| TV, audio, video a foto technika > Televízory > Soundbary k TV | TV, audio, video a foto technika > Televízory | 3 |
| Elektro, Smart Home a osvetlenie > Komponenty pre svietidlá > Svítidlové spínače (kolébkové) > Spínače šňůrové - nožní | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Komponenty pre svietidlá | 3 |
| Elektro, Smart Home a osvetlenie > Komponenty pre svietidlá > Tlumivky, předřadníky, zapalovače > Magnetické předřadníky - tlumivky | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Komponenty pre svietidlá | 3 |
| Elektro, Smart Home a osvetlenie > Komponenty pre svietidlá > Tlumivky, předřadníky, zapalovače | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Komponenty pre svietidlá | 3 |
| TV, audio, video a foto technika > Antény a satelity > Konzoly na stěnu > Držiaky na bok lodžie | TV, audio, video a foto technika > Antény a satelity | 3 |
| TV, audio, video a foto technika > Antény a satelity > Konzoly na plastové okno | TV, audio, video a foto technika > Antény a satelity | 3 |
| TV, audio, video a foto technika > Antény a satelity > Satelitné antény > Príslušenstvo | TV, audio, video a foto technika > Antény a satelity | 3 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Synaps | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 3 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Príslušenstvo pre káblové gelové spojky | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 3 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Pokojové rekuperační jednotky | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 3 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Thomson | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 3 |
| Energia a napájanie > Akumulátory a batérie > Batérie do AKU náradie | Energia a napájanie > Akumulátory a batérie | 3 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Krbové ventilátory > Príslušenstvo pre krbové ventilátory | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 3 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Vu+ | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 3 |
| Energia a napájanie > Napájacie zdroje > Zdroje pre LED pásky | Energia a napájanie > Napájacie zdroje | 3 |
| TV, audio, video a foto technika > Antény a satelity > Uzemnenie, hromosvody > Zemnící tyče | TV, audio, video a foto technika > Antény a satelity | 3 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Vrtáky > Vrtáky do betonu | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 3 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Nástroje > Lana a murárske křídy | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 3 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Polygon | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 3 |
| Elektro, Smart Home a osvetlenie > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 1,4m | Elektro, Smart Home a osvetlenie > Predlžovacie káble a vidlice | 3 |
| Elektro, Smart Home a osvetlenie > Káble a vodiče > Koaxiálne káble > Koaxiálne průchodky | Elektro, Smart Home a osvetlenie > Káble a vodiče | 3 |
| TV, audio, video a foto technika > Antény a satelity > Koaxiálne káble > Koaxiálne průchodky | TV, audio, video a foto technika > Antény a satelity | 3 |
| TV, audio, video a foto technika > Antény a satelity > Stožiare a trojnožky > Teleskopické stožiare | TV, audio, video a foto technika > Antény a satelity | 3 |
| Auto-moto > Nosiče kol > Střešní nosiče | Auto-moto > Nosiče bicyklov a strešné nosiče | 3 |
| Elektro, Smart Home a osvetlenie > Komponenty pre svietidlá > Svítidlové spínače (kolébkové) > Spínače šňůrové - s flexi kabelem | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Komponenty pre svietidlá | 3 |
| Elektro, Smart Home a osvetlenie > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá > Svorky - SLK 3 > 3-pólové svorky - SLK 3/3 | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Komponenty pre svietidlá | 3 |
| Auto-moto > Karavany a obytná autá > Televízory na 12V | Auto-moto > Karavany a obytné autá | 3 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Volvo | Auto-moto > Garáž, dielňa, servis | 3 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kľúče > Rúrkové kľúče | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 3 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - do potrubie | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 3 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kliešte > Kliešte špeciálne | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 3 |
| Energia a napájanie > Akumulátory a batérie > Očká, fastóny, dutinky, spojky > Sady konektorů | Energia a napájanie > Akumulátory a batérie | 3 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Jeep | Auto-moto > Príslušenstvo do auta | 3 |
| Auto-moto > Bezpečnosť > Testery alkoholu | Auto-moto > Bezpečnostné a núdzové vybavenie | 3 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Truhlářské práce > Svěrky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 3 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Truhlářské práce | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 3 |
| Elektro, Smart Home a osvetlenie > Komponenty pre svietidlá > Svítidlové spínače (kolébkové) > Spínače šňůrové - průchozí | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Komponenty pre svietidlá | 3 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Príslušenstvo k ventilátorům > Časová, doběhová relé | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 3 |
| TV, audio, video a foto technika > Antény a satelity > Satelitné príslušenstvo > Zosilňovače satelitné | TV, audio, video a foto technika > Antény a satelity | 3 |
| Energia a napájanie > Akumulátory a batérie > Solárne batérie | Energia a napájanie > Akumulátory a batérie | 3 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VKOMz | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 3 |
| Dielňa, náradie a záhrada > Mechanické náradie > Nože a nožnice > Náhradné břity | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 3 |
| Dielňa, náradie a záhrada > Pneumatické náradie > Príslušenstvo k pneu náradie > Rýchlospojky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Pneumatické náradie | 3 |
| Cestovanie, šport a outdoor > Turistika > Stany | Cestovanie, šport a outdoor > Turistika a outdoor | 3 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Potrubie > Těsnění | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Cabletech | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| Dielňa, náradie a záhrada > Mechanické náradie > Skrutkovače, bity, imbusy > Skrutkovače křížové | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 2 |
| Energia a napájanie > Akumulátory a batérie > Očká, fastóny, dutinky, spojky > Kolíky | Energia a napájanie > Akumulátory a batérie | 2 |
| Cestovanie, šport a outdoor > Cyklistika > Stojany a držiaky na kolesá | Cestovanie, šport a outdoor > Cyklistika | 2 |
| TV, audio, video a foto technika > Antény a satelity > LNB konvertory > MonoQuad 4 TV | TV, audio, video a foto technika > Antény a satelity | 2 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Píly > Píly na dřevo | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Mřížky > Mřížka sa síťkou s nástavcem a s regulací | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > DIWAY | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Vrtáky > Vrtáky do sklá | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 2 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Obkladačské práce > Vrtáky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Fte | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Humax | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Toyota | Auto-moto > Príslušenstvo do auta | 2 |
| Dielňa, náradie a záhrada > Drobné náradie a príslušenstvo > Zámky | Dielňa, náradie a záhrada > Dielenské vybavenie > Sťahovacie pásky a drobné príslušenstvo | 2 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Olej > Olejové vany | Auto-moto > Garáž, dielňa, servis | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Skytec | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kľúče > Momentové kľúče | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 2 |
| Počítače, mobily a tablety > Sieťové prvky > WI-FI extendéry | Počítače, mobily a tablety > WiFi routery a sieťové karty | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Vantage | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Ostatné | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| Dielňa, náradie a záhrada > Elektrické a AKU náradie > Pištole lepící a horúcovzdušné > Horúcovzdušné pištole | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Lepiace a horúcovzdušné pištole | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ OVK | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kliešte > Kliešte ploché | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 2 |
| Energia a napájanie > Záložné zdroje a UPS > Hybridní zdroje energia | Energia a napájanie > Záložné zdroje a UPS | 2 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Rozvádzače samostatné > Gumové skrine RubberBOX IP65 | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 2 |
| Elektro, Smart Home a osvetlenie > Ističe a chrániče > Motorové ističe | Elektro, Smart Home a osvetlenie > Ističe a chrániče | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > DVD > Sony | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| Dielňa, náradie a záhrada > Elektrické a AKU náradie > Vŕtačky, akušroubováky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Lepiace a horúcovzdušné pištole | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Fuba | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| TV, audio, video a foto technika > TV stolíky a držiaky > Pevné | TV, audio, video a foto technika > TV stolíky a držiaky | 2 |
| Energia a napájanie > Akumulátory a batérie > C malé monočlánky | Energia a napájanie > Akumulátory a batérie | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Medialink | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Dreambox | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| TV, audio, video a foto technika > TV stolíky a držiaky > Pre prohnuté televízory | TV, audio, video a foto technika > TV stolíky a držiaky | 2 |
| Elektro, Smart Home a osvetlenie > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá > Svorky - SLK 3 > 2-pólové svorky - SLK 3/2 | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Komponenty pre svietidlá | 2 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Testery | Auto-moto > Garáž, dielňa, servis | 2 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Land Rover | Auto-moto > Garáž, dielňa, servis | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Maxxo | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| Elektro, Smart Home a osvetlenie > Elektromery a spínacie technika > Termostaty > Termostatické hlavice | Elektro, Smart Home a osvetlenie > Elektromery a spínacia technika | 2 |
| Cestovanie, šport a outdoor > Hračky > Vonkajšie hračky | Cestovanie, šport a outdoor > Hračky | 2 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Zásuvkové sloupky | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VVR | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Mřížky > Mřížka kruhová s regulovatelným nástavcem | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Talířové ventily a difuzéry > Kovové talířové ventily | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| Dielňa, náradie a záhrada > Elektrické a AKU náradie > Batérie k AKU náradie | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Lepiace a horúcovzdušné pištole | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > New Digital | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| TV, audio, video a foto technika > Audio technika > Slúchadlá > Slúchadlá | TV, audio, video a foto technika > Audio technika | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Luxtronic | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| Cestovanie, šport a outdoor > Zdravotní potreby > Detské opatrovateľky (chůvičky) | Cestovanie, šport a outdoor > Zdravotné a rehabilitačné pomôcky | 2 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Kotúče rezacie, pílové, brúsne > Kotúče lamelové na stopce | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 2 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Píly > Píly na kov | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 2 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kľúče > Nastaviteľné kľúče | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 2 |
| Cestovanie, šport a outdoor > Hračky > Puzzle > Puzzle klasické drevené | Cestovanie, šport a outdoor > Hračky | 2 |
| Cestovanie, šport a outdoor > Hračky > Puzzle | Cestovanie, šport a outdoor > Hračky | 2 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Káblové příchytky a držiaky > Páskové hmoždinky | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 2 |
| TV, audio, video a foto technika > Antény a satelity > Príslušenstvo ku stožárům > Kolena a průchodky | TV, audio, video a foto technika > Antény a satelity | 2 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Brusivo > Brúsne výseky delta | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Solight | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| Dielňa, náradie a záhrada > Dielenské vybavenie > Pytle na odpad | Dielňa, náradie a záhrada > Dielenské vybavenie | 2 |
| Počítače, mobily a tablety > Kancelária a škola > Skartovače | Počítače, mobily a tablety > Kancelária a škola | 2 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Murárske práce > Pištole na mont. pěnu | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 2 |
| TV, audio, video a foto technika > Audio technika > Slúchadlá > Slúchadlá televízne | TV, audio, video a foto technika > Audio technika | 2 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Kia | Auto-moto > Príslušenstvo do auta | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Edision | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| TV, audio, video a foto technika > TV stolíky a držiaky > Držiaky projektorů | TV, audio, video a foto technika > TV stolíky a držiaky | 2 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Peugeot > Boxer | Auto-moto > Príslušenstvo do auta | 2 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Navijaky a zdviháky | Auto-moto > Garáž, dielňa, servis | 2 |
| Elektro, Smart Home a osvetlenie > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá > Svorky - SLK 3 > 4-pólové svorky - SLK 3/4 | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Komponenty pre svietidlá | 2 |
| Dielňa, náradie a záhrada > Chémia > Chémia pre pájení | Dielňa, náradie a záhrada > Dielenské vybavenie > Chémia pre dielňu | 2 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Chrysler | Auto-moto > Garáž, dielňa, servis | 2 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Brusivo > Brúsne papiere | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 2 |
| TV, audio, video a foto technika > Antény a satelity > Konektory > LAN konektory | TV, audio, video a foto technika > Antény a satelity | 2 |
| Energia a napájanie > Napájacie zdroje > Adaptéry pre notebooky | Energia a napájanie > Napájacie zdroje | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Medialink | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| TV, audio, video a foto technika > Antény a satelity > SET-TOP-BOXY > DVB-T2 s podporou hybridní televízory HbbTV | TV, audio, video a foto technika > Antény a satelity | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - s doběhem (časovač) > Pre průměr potrubie 125 mm | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| TV, audio, video a foto technika > Antény a satelity > Satelitné príslušenstvo > Multipřepínače > Ostatné | TV, audio, video a foto technika > Antény a satelity | 2 |
| Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače > Rozvádzače samostatné > Ostatné skrine a rozvodnice | Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače | 2 |
| TV, audio, video a foto technika > Antény a satelity > TV modulátory | TV, audio, video a foto technika > Antény a satelity | 2 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Mercedes-Benz > Sprinter | Auto-moto > Príslušenstvo do auta | 2 |
| Energia a napájanie > Akumulátory a batérie > D veľké monočlánky | Energia a napájanie > Akumulátory a batérie | 2 |
| Dielňa, náradie a záhrada > Dielenské vybavenie > Přeprava a skladování | Dielňa, náradie a záhrada > Dielenské vybavenie | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Krbové ventilátory > Ventilátory KAM | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ MAO1 | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Talířové ventily a difuzéry > Plastové talířové difuzéry | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Vzduchovody > Ohebné potrubie - POLYVENT | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| TV, audio, video a foto technika > Antény a satelity > Držiaky stožárů > Na komín bez vŕtanie | TV, audio, video a foto technika > Antény a satelity | 2 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Potrubie > Řezáky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 2 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Obkladačské práce > Spárování | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > DVD > Denon | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| TV, audio, video a foto technika > Antény a satelity > Zdroje a výhybky > Výhybky | TV, audio, video a foto technika > Antény a satelity | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Talířové ventily a difuzéry > Plastové talířové ventily | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Skyworth | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| Dielňa, náradie a záhrada > Mechanické náradie > Nože a nožnice > Ostatné nože | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 2 |
| Dielňa, náradie a záhrada > Mechanické náradie > Príslušenstvo ku gola sadám > Nástrčné hlavice > 1/4" nadstavce | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 2 |
| Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Izolačné pásky | Auto-moto > Garáž, dielňa, servis | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Ovládače k DVB-T2 > Philips | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Kruger & Matz | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| Energia a napájanie > Akumulátory a batérie > Boxy a obaly na akumulátory | Energia a napájanie > Akumulátory a batérie | 2 |
| Auto-moto > Vybavenie autá > Autožiarovky > CSP LED žiarovky | Auto-moto > Autožiarovky a osvetlenie | 2 |
| Cestovanie, šport a outdoor > Hračky > Zvieratká, farmy | Cestovanie, šport a outdoor > Hračky | 2 |
| Dielňa, náradie a záhrada > Mechanické náradie > Nýtování > Nitovacie kliešte | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 2 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Olej > Olejničky a maznice | Auto-moto > Garáž, dielňa, servis | 2 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Potrubie > Odhrotování | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 2 |
| Cestovanie, šport a outdoor > Turistika > Hojdacie siete | Cestovanie, šport a outdoor > Turistika a outdoor | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady DOSPEL > Ventilátory - typ TURBO | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady DOSPEL | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Univerzálne ovládače > Samsung | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Jeep > Cherokee | Auto-moto > Príslušenstvo do auta | 2 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Pokrývačské práce > Spájky, horáky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 2 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Pokrývačské práce | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ OVK1 | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VKMz | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > AUDIO (AUX) > AIWA | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 2 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Renault | Auto-moto > Garáž, dielňa, servis | 2 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Mercedes-Benz > Třída C | Auto-moto > Príslušenstvo do auta | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Vzduchovody > Flexipotrubí ploché | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Rúrky a chráničky > Plastové rúrky | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 2 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Lancia | Auto-moto > Garáž, dielňa, servis | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Gravitační žaluzie a klapky > Gravitační klapky s kruhovým nástavcem | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - s doběhem (časovač) > Pre průměr potrubie 150 mm | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Malířství a natěračství > Škrabky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 2 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VN | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 2 |
| TV, audio, video a foto technika > Antény a satelity > Príslušenstvo ku stožárům > Tašky s průchodem pre stožár | TV, audio, video a foto technika > Antény a satelity | 2 |
| Elektro, Smart Home a osvetlenie > Káble a vodiče > Koaxiálne káble > Boxy a stojany | Elektro, Smart Home a osvetlenie > Káble a vodiče | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Univerzálne ovládače > LG | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Audi > Audi Q2 | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Peugeot > 408 | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Volkswagen > Transporter | Auto-moto > Príslušenstvo do auta | 1 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Malířství a natěračství > Kefy | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Apebox | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Toyota > Land Cruiser | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Bezpečnosť > Kamery do autá | Auto-moto > Bezpečnostné a núdzové vybavenie | 1 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Osoušeče rukou | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Dreamsky | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Smart | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Dielňa, náradie a záhrada > Mechanické náradie > Skrutkovače, bity, imbusy > L-klíče | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 1 |
| Energia a napájanie > Akumulátory a batérie > Olovené akumulátory > 36V | Energia a napájanie > Akumulátory a batérie | 1 |
| TV, audio, video a foto technika > Antény a satelity > CAM dekodéry a karty > Dekódovací karty | TV, audio, video a foto technika > Antény a satelity | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Univerzálne ovládače > Panasonic | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Cestovanie, šport a outdoor > Cyklistika > Zámky na kolo | Cestovanie, šport a outdoor > Cyklistika | 1 |
| Dielňa, náradie a záhrada > Pneumatické náradie > Rázové uťahováky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Pneumatické náradie | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Univerzálne ovládače > Toshiba | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Chevrolet | Auto-moto > Garáž, dielňa, servis | 1 |
| Auto-moto > Vybavenie autá > Autopotahy > Univerzálne autopotahy - dodávky > Autopotahy PRACTICAL dodávka | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autopotahy > Univerzálne autopotahy - dodávky | Auto-moto > Príslušenstvo do auta | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > AUDIO (AUX) > TechniSat | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Elektro, Smart Home a osvetlenie > Vypínače, zásuvky, krabice > Elektroinštalačný krabice > Krabice do zateplených fasád | Elektro, Smart Home a osvetlenie > Vypínače a nástenné zásuvky | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Inetbox | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| TV, audio, video a foto technika > TV stolíky a držiaky > Držiaky reproduktorů | TV, audio, video a foto technika > TV stolíky a držiaky | 1 |
| Elektro, Smart Home a osvetlenie > Káble a vodiče > Mikrofonní káble | Elektro, Smart Home a osvetlenie > Káble a vodiče | 1 |
| Elektro, Smart Home a osvetlenie > Káble a vodiče > Koaxiálne káble > Vícenásobné káble | Elektro, Smart Home a osvetlenie > Káble a vodiče | 1 |
| Dielňa, náradie a záhrada > Elektrické a AKU náradie > Pištole lepící a horúcovzdušné > Lepící pištole | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Lepiace a horúcovzdušné pištole | 1 |
| Elektro, Smart Home a osvetlenie > Ističe a chrániče > Pojistková puzdrá | Elektro, Smart Home a osvetlenie > Ističe a chrániče | 1 |
| TV, audio, video a foto technika > TV stolíky a držiaky > Držiaky soundbarů | TV, audio, video a foto technika > TV stolíky a držiaky | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Daewoo | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Dielňa, náradie a záhrada > SPÁJKOVACIE TECHNIKA > Tavné a horúcovzdušné pištole | Dielňa, náradie a záhrada > Spájkovacia technika | 1 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Nissan | Auto-moto > Garáž, dielňa, servis | 1 |
| Cestovanie, šport a outdoor > Hračky > Vonkajšie hračky > Šport | Cestovanie, šport a outdoor > Hračky | 1 |
| Cestovanie, šport a outdoor > Hračky > Sportovní hračky | Cestovanie, šport a outdoor > Hračky | 1 |
| TV, audio, video a foto technika > Antény a satelity > Uzemnenie, hromosvody > Zemnící drát | TV, audio, video a foto technika > Antény a satelity | 1 |
| Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Propojovače batérií | Auto-moto > Garáž, dielňa, servis | 1 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Gravitační žaluzie a klapky > Kovová gravitační žaluzie s nástavcem z hliníku | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 1 |
| Počítače, mobily a tablety > Rackové skrine a príslušenstvo > Príslušenstvo > Patch Panely | Počítače, mobily a tablety > Rackové skrine – príslušenstvo | 1 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Potrubie > Spájky na rúrky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 1 |
| Cestovanie, šport a outdoor > Ďalekohľady > S termovizí | Cestovanie, šport a outdoor > Ďalekohľady | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > CHiQ | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Elektro, Smart Home a osvetlenie > Rozvádzačové prvky > Bloky pre rozdělení fází > Typ PVBS | Elektro, Smart Home a osvetlenie > Rozvádzačové prvky | 1 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kladivá, dláta, sekery > Sekáče SDS | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 1 |
| Dielňa, náradie a záhrada > Dielenské vybavenie > Kufre a organizéry na náradie > Kapsáře na náradie | Dielňa, náradie a záhrada > Dielenské vybavenie | 1 |
| Počítače, mobily a tablety > Kancelária a škola > Pokladny | Počítače, mobily a tablety > Kancelária a škola | 1 |
| Počítače, mobily a tablety > Kancelária a škola > Obalový materiál | Počítače, mobily a tablety > Kancelária a škola | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > AZBox | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Vrtáky > Vykružovací vrtáky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 1 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Kotúče rezacie, pílové, brúsne > Kotúče brúsne diamantové | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 1 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kliešte > Kliešte nitovacie | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 1 |
| Dielňa, náradie a záhrada > Ochranné pomôcky a odevy > Chrániče sluchu | Dielňa, náradie a záhrada > Dielenské vybavenie > Ochranné pomôcky a odevy | 1 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Murárske práce > Vedrá | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Kia > Optima | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Mercedes-Benz > Třída G | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autopotahy > Univerzálne autopotahy | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce SsangYong | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Toyota > Camry | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Volvo > S60 | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Volvo | Auto-moto > Príslušenstvo do auta | 1 |
| Počítače, mobily a tablety > Sieťové prvky > Routery | Počítače, mobily a tablety > WiFi routery a sieťové karty | 1 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Navijaky a zdviháky > Zdviháky a heváky | Auto-moto > Garáž, dielňa, servis | 1 |
| Dielňa, náradie a záhrada > Mechanické náradie > Vodo-topo > Rezačky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 1 |
| Dielňa, náradie a záhrada > Mechanické náradie > Vodo-topo | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 1 |
| Dielňa, náradie a záhrada > Elektrické a AKU náradie > Nabíjačky k AKU náradie | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Lepiace a horúcovzdušné pištole | 1 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Protahovací gély na káble | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 1 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ PF | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 1 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VCN | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 1 |
| Počítače, mobily a tablety > Kancelária a škola > Školské potreby > Školské batohy, aktovky > Školské aktovky | Počítače, mobily a tablety > Kancelária a škola | 1 |
| Počítače, mobily a tablety > Kancelária a škola > Školské potreby > Školské batohy, aktovky | Počítače, mobily a tablety > Kancelária a škola | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Edision | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Elektro, Smart Home a osvetlenie > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá > Svorky - SLK 3 > 5-pólové svorky - SLK 3/5 | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Komponenty pre svietidlá | 1 |
| Energia a napájanie > Akumulátory a batérie > Olovené akumulátory > 48V | Energia a napájanie > Akumulátory a batérie | 1 |
| Auto-moto > Vybavenie autá > Ventilátory | Auto-moto > Príslušenstvo do auta | 1 |
| Energia a napájanie > Napájacie zdroje > Adaptéry cestovné | Energia a napájanie > Napájacie zdroje | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Multibox | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - do potrubie > Pre průměr potrubie 100 mm | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 1 |
| Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Káblové gelové spojky LEDJOY IP68 | Elektro, Smart Home a osvetlenie > Inštalačné príslušenstvo | 1 |
| Dielňa, náradie a záhrada > Elektronické súčiastky > Priemyselné zdroje > 24v | Dielňa, náradie a záhrada > Elektronické súčiastky | 1 |
| Dielňa, náradie a záhrada > Elektrické a AKU náradie > Brúsky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Lepiace a horúcovzdušné pištole | 1 |
| Dielňa, náradie a záhrada > Mechanické náradie > Skrutkovače, bity, imbusy > Skrutkovače elektrikárske | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 1 |
| Energia a napájanie > Akumulátory a batérie > NiMh nabíjacie akumulátory > Sub-C | Energia a napájanie > Akumulátory a batérie | 1 |
| TV, audio, video a foto technika > Antény a satelity > LNB konvertory > Špeciálne | TV, audio, video a foto technika > Antény a satelity | 1 |
| TV, audio, video a foto technika > Antény a satelity > Satelitné príslušenstvo > Ochranné kryty pre LNB | TV, audio, video a foto technika > Antény a satelity | 1 |
| Cestovanie, šport a outdoor > Hračky > Detské hudební nástroje > Sady | Cestovanie, šport a outdoor > Hračky | 1 |
| Cestovanie, šport a outdoor > Hračky > Detské hudební nástroje | Cestovanie, šport a outdoor > Hračky | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Univerzálne ovládače > Sharp | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Elektro, Smart Home a osvetlenie > Prepäťové ochrany > Zásuvkové ochrany 230V | Elektro, Smart Home a osvetlenie > Ističe a chrániče | 1 |
| TV, audio, video a foto technika > TV stolíky a držiaky > Príslušenstvo | TV, audio, video a foto technika > TV stolíky a držiaky | 1 |
| Dielňa, náradie a záhrada > Mechanické náradie > Príslušenstvo ku gola sadám > Nástrčné hlavice > 3/8" bity | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 1 |
| Dielňa, náradie a záhrada > Dielenské vybavenie > Přeprava a skladování > Magnetické pořadače a lišty | Dielňa, náradie a záhrada > Dielenské vybavenie | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > DVD > Sharp | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Evolve | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kladivá, dláta, sekery > Dláta | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 1 |
| Dielňa, náradie a záhrada > Elektrické a AKU náradie > Píly > Píly priamočiare | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Lepiace a horúcovzdušné pištole | 1 |
| Dielňa, náradie a záhrada > Elektrické a AKU náradie > Píly | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Lepiace a horúcovzdušné pištole | 1 |
| Počítače, mobily a tablety > Disky a pamäťové karty > Pamäťové karty | Počítače, mobily a tablety > Disky a pamäťové karty pre NVR | 1 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Mřížky > Mřížka sa síťkou bez nadstavce s regulací | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 1 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Mřížky > Plastové mřížky do dveří | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > DVD > Technics | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Dielňa, náradie a záhrada > Mechanické náradie > Príslušenstvo ku gola sadám > Rázové hlavice | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 1 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ VKOk | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 1 |
| TV, audio, video a foto technika > Audio technika > Slúchadlá > Slúchadlá Bluetooth | TV, audio, video a foto technika > Audio technika | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Jeep > Liberty | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Citroën > Jumper | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Citroën | Auto-moto > Príslušenstvo do auta | 1 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kliešte > Kliešte lisovací | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 1 |
| Cestovanie, šport a outdoor > Hračky > Vonkajšie hračky > Detská ihrisko a doplnky | Cestovanie, šport a outdoor > Hračky | 1 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Nástroje > Dláta, sekáče | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 1 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Nástroje > Páčidlá | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 1 |
| Energia a napájanie > Akumulátory a batérie > Olovené akumulátory > 4V | Energia a napájanie > Akumulátory a batérie | 1 |
| TV, audio, video a foto technika > Televízory > 39" - 42" (98 - 107 cm) | TV, audio, video a foto technika > Televízory | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > KLIMATIZÁCIA | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Kia > Cerato | Auto-moto > Príslušenstvo do auta | 1 |
| TV, audio, video a foto technika > TV stolíky a držiaky > Pojízdné | TV, audio, video a foto technika > TV stolíky a držiaky | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Allbox | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Dizipia | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| TV, audio, video a foto technika > Antény a satelity > Satelitné príslušenstvo > Slučovače SAT+TV | TV, audio, video a foto technika > Antény a satelity | 1 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Přeprava > Madla na sklo | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 1 |
| Dielňa, náradie a záhrada > Dielenské vybavenie > Přísavky manipulační | Dielňa, náradie a záhrada > Dielenské vybavenie | 1 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Přeprava | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 1 |
| Cestovanie, šport a outdoor > Hračky > Výtvarné hračky a tvoření > Detská razítka | Cestovanie, šport a outdoor > Hračky | 1 |
| Cestovanie, šport a outdoor > Hračky > Zvieratká, farmy > Zvieratká | Cestovanie, šport a outdoor > Hračky | 1 |
| Auto-moto > Vybavenie autá > Osviežovače vzduchu > Vône INTENSO | Auto-moto > Príslušenstvo do auta | 1 |
| Dielňa, náradie a záhrada > Dielenské vybavenie > Přeprava a skladování > Organizéry | Dielňa, náradie a záhrada > Dielenské vybavenie | 1 |
| TV, audio, video a foto technika > Antény a satelity > ZOSILŇOVAČE > Kanálové | TV, audio, video a foto technika > Antény a satelity | 1 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Upínacie prostriedky > Háčiky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 1 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Upínacie prostriedky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Audi > Audi Q3 | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Audi > Audi Q8 | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Volkswagen > Amarok | Auto-moto > Príslušenstvo do auta | 1 |
| TV, audio, video a foto technika > Antény a satelity > Satelitné príslušenstvo > DiSEqC prepínače > Pre 2 LNB | TV, audio, video a foto technika > Antény a satelity | 1 |
| TV, audio, video a foto technika > Antény a satelity > Satelitné príslušenstvo > DiSEqC prepínače | TV, audio, video a foto technika > Antény a satelity | 1 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Vzduchovody > Ohebné potrubie - ALU > Príslušenstvo pre ohebné potrubie - ALU | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 1 |
| Energia a napájanie > Akumulátory a batérie > Olovené akumulátory > 24V | Energia a napájanie > Akumulátory a batérie | 1 |
| TV, audio, video a foto technika > Antény a satelity > ANTÉNY > Symetrizační členy | TV, audio, video a foto technika > Antény a satelity | 1 |
| TV, audio, video a foto technika > AV káble > Oddělovací členy | TV, audio, video a foto technika > AV káble | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > AUDIO (AUX) > Philips | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Počítače, mobily a tablety > Sieťové prvky > Napájacie adaptéry a POE | Počítače, mobily a tablety > WiFi routery a sieťové karty | 1 |
| Cestovanie, šport a outdoor > Hračky > Stavebnice | Cestovanie, šport a outdoor > Hračky | 1 |
| TV, audio, video a foto technika > Televízory > 43" (108 - 109 cm) | TV, audio, video a foto technika > Televízory | 1 |
| Dielňa, náradie a záhrada > Elektrické a AKU náradie > Rázové uťahováky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Lepiace a horúcovzdušné pištole | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Alma | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kliešte > Kliešte seeger | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 1 |
| Dielňa, náradie a záhrada > Pneumatické náradie > Pištole > Foukací pištole | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Pneumatické náradie | 1 |
| Dielňa, náradie a záhrada > Pneumatické náradie > Pištole | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Pneumatické náradie | 1 |
| Dielňa, náradie a záhrada > Elektrické a AKU náradie > Príslušenstvo k vrtačkám > Sklíčidla | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Lepiace a horúcovzdušné pištole | 1 |
| Dielňa, náradie a záhrada > Elektrické a AKU náradie > Príslušenstvo k vrtačkám | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Lepiace a horúcovzdušné pištole | 1 |
| Dielňa, náradie a záhrada > Drobné náradie a príslušenstvo > Razidlá | Dielňa, náradie a záhrada > Dielenské vybavenie > Sťahovacie pásky a drobné príslušenstvo | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Renault > Symbol | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Mercedes-Benz > Třída A | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Brzdy > Výměna brzdové kvapaliny | Auto-moto > Garáž, dielňa, servis | 1 |
| Dielňa, náradie a záhrada > Mechanické náradie > Skrutkovače, bity, imbusy > Skrutkovače úderové | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 1 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Rudle a kolieska | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Univerzálne ovládače > SONY | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| TV, audio, video a foto technika > TV stolíky a držiaky > Stojany | TV, audio, video a foto technika > TV stolíky a držiaky | 1 |
| Počítače, mobily a tablety > USB káble > Univerzálne | Počítače, mobily a tablety > USB káble | 1 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Brzdy > Ostatné prípravky na brzdy | Auto-moto > Garáž, dielňa, servis | 1 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Obkladačské práce > Pomôcky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 1 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Potrubie > Kefy | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 1 |
| Dielňa, náradie a záhrada > Mechanické náradie > Kliešte > Nožnice na plech | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie | 1 |
| Elektro, Smart Home a osvetlenie > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá > Svorky - SLK 5 | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Komponenty pre svietidlá | 1 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Sponkovačky a nastreľovačky > Spony | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 1 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Sponkovačky a nastreľovačky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 1 |
| Domáce spotrebiče > Sanitárna technika > Sprchové hadice | Domáce spotrebiče > Sanitárna technika | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Televízne ovládače > Ostatné značky | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Škoda | Auto-moto > Garáž, dielňa, servis | 1 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Seat | Auto-moto > Garáž, dielňa, servis | 1 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Rotačné kefy | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 1 |
| Cestovanie, šport a outdoor > Turistika > Vysielačky | Cestovanie, šport a outdoor > Turistika a outdoor | 1 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - do potrubie > Pre průměr potrubie 150 mm | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 1 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - do potrubie > Pre průměr potrubie 125 mm | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 1 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Obkladačské práce > Kříže a klinky | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 1 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Brusivo > Príslušenstvo | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 1 |
| Dielňa, náradie a záhrada > Stavebné a maliarske náradie > Malířství a natěračství > Vedrá | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Stavebné a maliarske náradie | 1 |
| Dielňa, náradie a záhrada > Dielenské vybavenie > Kufre a organizéry na náradie > Organizéry na náradie | Dielňa, náradie a záhrada > Dielenské vybavenie | 1 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady DOSPEL > Ventilátory - typ RICO | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 1 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - základní > Pre průměr potrubie 125 mm | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 1 |
| Cestovanie, šport a outdoor > Hračky > Plyšové hračky > Plyšáky ostatné | Cestovanie, šport a outdoor > Hračky | 1 |
| Cestovanie, šport a outdoor > Hračky > Plyšové hračky | Cestovanie, šport a outdoor > Hračky | 1 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Gravitační žaluzie a klapky > Gravitační klapky bez kruhového nadstavce | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 1 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory do koupelny/WC - základní > Pre průměr potrubie 150 mm | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > Samsung | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Nissan > Pathfinder | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Nissan | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Dacia > Dokker | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Dacia | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Opel > Zafira | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Opel | Auto-moto > Príslušenstvo do auta | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Satelitné ovládače > SatElita | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače > Univerzálne ovládače > PHILIPS | TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače | 1 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Nožnice > Nožnice na plech | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 1 |
| Dielňa, náradie a záhrada > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie > Nožnice | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Náradie pre brúsenie, vŕtanie, rezanie a pilovanie | 1 |
| Auto-moto > Vybavenie autá > Autopotahy > Univerzálne autopotahy - dvě sedadla > Autotrička BAVLNA | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autopotahy > Univerzálne autopotahy - dvě sedadla | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autopotahy > Opěrky hlavy | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Ford > Explorer | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Ford | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Volkswagen > Crafter | Auto-moto > Príslušenstvo do auta | 1 |
| TV, audio, video a foto technika > Antény a satelity > Konzoly na tepelná čerpadlá a klimatizácia | TV, audio, video a foto technika > Antény a satelity | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Hyundai > Sonata | Auto-moto > Príslušenstvo do auta | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Hyundai | Auto-moto > Príslušenstvo do auta | 1 |
| TV, audio, video a foto technika > Antény a satelity > LNB konvertory > Octoblok 8 TV | TV, audio, video a foto technika > Antény a satelity | 1 |
| Elektro, Smart Home a osvetlenie > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady DOSPEL > Ventilátory - typ EURO | Elektro, Smart Home a osvetlenie > Vzduchotechnika a montážne príslušenstvo | 1 |
| Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Navijaky a zdviháky > Navijaky | Auto-moto > Garáž, dielňa, servis | 1 |
| Auto-moto > Vybavenie autá > Autokoberce > Auto koberce Volkswagen > Polo | Auto-moto > Príslušenstvo do auta | 1 |

## Preložené na predka zo starého stromu

Nový strom tieto hlbšie vetvy vedome nemá — zlúčil ich do nadradenej kategórie.
Produkt zostáva v ponuke, len o úroveň vyššie. Ak si niektorá z nich zaslúži
vlastnú kategóriu, pridať ju do stromu a do `data/stary-novy-strom.json`.

| Kategória z feedu | Zaradené do | Počet produktov |
|---|---|---|
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED žiarovky | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 171 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Vianočné dekorácie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 167 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > PRÍSLUŠENSTVO | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 153 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > SVIETIDLÁ | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 106 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED žiarovky > E27 závit | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 92 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > IP sieťové kamery | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 86 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED svietidlá | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 79 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > SVIETIDLÁ > Čelovky | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 50 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED žiarovky > E14 závit | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 50 |
| Elektro, Smart Home a osvetlenie > Pohony brán a vrát > Bezdrátové zvončeky | Elektro, Smart Home a osvetlenie > Pohony brán a vrát | 46 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED reflektory | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 42 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > SVIETIDLÁ > Nabíjacie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 41 |
| Domáce spotrebiče > Meteostanice > Meteorologické stanice | Domáce spotrebiče > Meteostanice | 40 |
| Cestovanie, šport a outdoor > Posilňovanie a fitness > Príslušenstvo pre posilňovanie | Cestovanie, šport a outdoor > Posilňovanie a fitness | 40 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED reflektory > Bílé svetlo | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 38 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > PRÍSLUŠENSTVO > Držiaky a montážne krabice | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 37 |
| Elektro, Smart Home a osvetlenie > Zabezpečenie – detektory a senzory > PIR čidlá | Elektro, Smart Home a osvetlenie > Zabezpečenie – detektory a senzory | 37 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Bazény a doplnky | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 36 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > PRÍSLUŠENSTVO > Napájacie zdroje | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 35 |
| Energia a napájanie > Nabíjačky batérií a akumulátorov > Nabíjačky autobaterií | Energia a napájanie > Nabíjačky batérií a akumulátorov | 34 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > SVIETIDLÁ > Ručné | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 34 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Odpudzovače škodcov > Odpudzovače a lapače hmyzu | Dielňa, náradie a záhrada > Záhrada a bazén > Odpudzovače škodcov | 34 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Bazény a doplnky > Bazénová chémia | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 32 |
| Energia a napájanie > Nabíjačky batérií a akumulátorov > Nabíjačky pre olovené akumulátory | Energia a napájanie > Nabíjačky batérií a akumulátorov | 32 |
| Domáce spotrebiče > Meteostanice > Bezdrátová čidlá | Domáce spotrebiče > Meteostanice | 31 |
| Elektro, Smart Home a osvetlenie > Pohony brán a vrát > Príslušenstvo pre pohony vrat | Elektro, Smart Home a osvetlenie > Pohony brán a vrát | 27 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje > Náhradné diely pre krovinorezy | Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje | 25 |
| Domáce spotrebiče > Triedenie odpadu a domáce organizéry > Doplnky do domácnosti | Domáce spotrebiče > Triedenie odpadu a domáce organizéry | 24 |
| Domáce spotrebiče > Klimatizácia a vzduch > Vykurovanie | Domáce spotrebiče > Klimatizácia a vzduch | 23 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > IP SMART kamery | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 23 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Odpudzovače škodcov > Odpudzovače kun a hlodavců | Dielňa, náradie a záhrada > Záhrada a bazén > Odpudzovače škodcov | 22 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > PRÍSLUŠENSTVO > Montážne skrine a racky | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 22 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > PRÍSLUŠENSTVO > Káble | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 21 |
| Domáce spotrebiče > Meteostanice > Stanice s připojením k počítači | Domáce spotrebiče > Meteostanice | 21 |
| Energia a napájanie > Nabíjačky batérií a akumulátorov > Nabíjačky LiFePO4 | Energia a napájanie > Nabíjačky batérií a akumulátorov | 21 |
| Elektro, Smart Home a osvetlenie > Zabezpečenie – detektory a senzory > Detektory CO, CO2, plynu a vody | Elektro, Smart Home a osvetlenie > Zabezpečenie – detektory a senzory | 21 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED žiarovky > GU10 patice | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 21 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Osvetlenie | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 21 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Záhradné svietidlá | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 21 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > KAMERY 4v1 | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 19 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > IP sieťové kamery > 2.0 Mpix. (Full HD) / 2.4 Mpix | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 19 |
| Chovateľské potreby > Pelíšky | Chovateľské potreby | 19 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Stolové lampy | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 18 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Pestovanie | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 18 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > IP sieťové kamery > 4.0 Mpix. | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 17 |
| Chovateľské potreby > Pre psov | Chovateľské potreby | 17 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Ostatné smart elektronika | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 17 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > IP sieťové videorekordéry (NVR) | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 17 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Záhradné rukavice | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 17 |
| Chovateľské potreby > Pre mačky | Chovateľské potreby | 16 |
| Domáce spotrebiče > Meteostanice > Teplomery digitálne | Domáce spotrebiče > Meteostanice | 15 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Zavlažovanie | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 15 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Plachty a textilie | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 14 |
| Domáce spotrebiče > Triedenie odpadu a domáce organizéry > Doplnky do domácnosti > Ostatné doplnky do domácnosti | Domáce spotrebiče > Triedenie odpadu a domáce organizéry | 14 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Detektory a alarmy | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 14 |
| Dielňa, náradie a záhrada > Ostatné | Dielňa, náradie a záhrada | 13 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Zvončeky | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 13 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > PRÍSLUŠENSTVO > PoE switche | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 13 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Zásuvky | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 12 |
| Elektro, Smart Home a osvetlenie > Pohony brán a vrát > Parkovací zábrany | Elektro, Smart Home a osvetlenie > Pohony brán a vrát | 12 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné náradie > Záhradné nožnice | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné náradie | 11 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED reflektory > Prenosné | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 11 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > KAMERY 4v1 > 2.0 Mpix. / 2.4 Mpix. | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 11 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Žiarovky | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 11 |
| Domáce spotrebiče > Klimatizácia a vzduch > Príslušenstvo | Domáce spotrebiče > Klimatizácia a vzduch | 11 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Vykurovanie | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 11 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > PRÍSLUŠENSTVO > Interné pevné disky | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 11 |
| Domáce spotrebiče > Triedenie odpadu a domáce organizéry > Doplnky do domácnosti > Koše na tříděný odpad | Domáce spotrebiče > Triedenie odpadu a domáce organizéry | 10 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné náradie > Ostatné | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné náradie | 10 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje > Struny a kotúče | Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje | 10 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Pestovanie > Prípravky proti mravencům | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 10 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > PRÍSLUŠENSTVO > Konektory | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 9 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > Inspekční kamery, endoskopy | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 9 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Sluneční clony | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 9 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Grily | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 9 |
| Elektro, Smart Home a osvetlenie > Zabezpečenie – detektory a senzory > Laserové senzory pohybu | Elektro, Smart Home a osvetlenie > Zabezpečenie – detektory a senzory | 9 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > Domové videotelefony | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 8 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Televízory | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 8 |
| Elektro, Smart Home a osvetlenie > Pohony brán a vrát > Pohony křídlová vrata | Elektro, Smart Home a osvetlenie > Pohony brán a vrát | 8 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Doplnky na záhradu | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 8 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Záhradné svietidlá | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 8 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > IP sieťové kamery > 5.0 Mpix. | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 7 |
| Energia a napájanie > Nabíjačky batérií a akumulátorov > Nabíjačky NiCd, NiMh, NiZn | Energia a napájanie > Nabíjačky batérií a akumulátorov | 7 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > HDCVI a 5v1 videorekordéry | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 7 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Príslušenstvo | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 7 |
| Elektro, Smart Home a osvetlenie > Zabezpečenie – detektory a senzory > Požarní hlásiče | Elektro, Smart Home a osvetlenie > Zabezpečenie – detektory a senzory | 7 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Zavlažovanie > Príslušenstvo | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 7 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > IP sieťové videorekordéry (NVR) > 16 kanálů | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 7 |
| Cestovanie, šport a outdoor > Hudební nástroje | Cestovanie, šport a outdoor | 7 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné náradie > Záhradné nožnice > Pákové nožnice | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné náradie | 6 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > Kamerové sety | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 6 |
| Elektro, Smart Home a osvetlenie > Zabezpečenie – detektory a senzory > Domové alarmy | Elektro, Smart Home a osvetlenie > Zabezpečenie – detektory a senzory | 6 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > IP sieťové kamery > 8.0 Mpix. (4K) | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 6 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > IP sieťové videorekordéry (NVR) > 8 kanálů | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 6 |
| Cestovanie, šport a outdoor > Mikroskopy | Cestovanie, šport a outdoor | 6 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Meteostanice | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 6 |
| Cestovanie, šport a outdoor > Hudební nástroje > Digitálne piana | Cestovanie, šport a outdoor | 6 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > KAMERY 4v1 > 5.0 Mpix. | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 5 |
| Energia a napájanie > Nabíjačky batérií a akumulátorov > Stanice pre elektrokola | Energia a napájanie > Nabíjačky batérií a akumulátorov | 5 |
| Elektro, Smart Home a osvetlenie > Pohony brán a vrát > Pohony posuvné vrata | Elektro, Smart Home a osvetlenie > Pohony brán a vrát | 5 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje > Čerpadlá > Palivová a olejová čerpadlá | Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje | 5 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje > Čerpadlá | Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje | 5 |
| Cestovanie, šport a outdoor > Mikroskopy > Digitálne fotoaparáty | Cestovanie, šport a outdoor | 5 |
| Energia a napájanie > Nabíjačky batérií a akumulátorov > Nabíjačky DC-DC | Energia a napájanie > Nabíjačky batérií a akumulátorov | 5 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné náradie > Sady záhradného náradie | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné náradie | 5 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné náradie > Lopaty | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné náradie | 5 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné náradie > Záhradné nožnice > Záhradné nožnice | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné náradie | 5 |
| Auto-moto > Elektromobilita > Príslušenstvo k elektromobilitě | Auto-moto > Elektromobilita | 5 |
| Auto-moto > Elektromobilita > AC nabíjacie stanice Wallbox | Auto-moto > Elektromobilita | 5 |
| Chovateľské potreby > Klece a ohrádky | Chovateľské potreby | 5 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje > Príslušenstvo | Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje | 5 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Patice, Redukcie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 5 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Pestovanie > Pěstební lampy | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 5 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Odpudzovače škodcov > Odpudzovače ptáků | Dielňa, náradie a záhrada > Záhrada a bazén > Odpudzovače škodcov | 4 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Vypínače | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 4 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > HDCVI, HDTVI, AHD kamery | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 4 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Bazény a doplnky > Záhradné bazény | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 4 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > Domové videotelefony > Analogové | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 4 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED žiarovky > G9 patice | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 4 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED sviečky | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 4 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > SVIETIDLÁ > Kempingové | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 4 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > Atrapy kamer | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 4 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Čerpadlá | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 4 |
| Počítače, mobily a tablety > Projektory | Počítače, mobily a tablety | 4 |
| Elektro, Smart Home a osvetlenie > Zabezpečenie – detektory a senzory > Hasící prístroje | Elektro, Smart Home a osvetlenie > Zabezpečenie – detektory a senzory | 4 |
| Počítače, mobily a tablety > Mobilné telefóny | Počítače, mobily a tablety | 4 |
| Domáce spotrebiče > Triedenie odpadu a domáce organizéry > Termosky, termohrnčeky | Domáce spotrebiče > Triedenie odpadu a domáce organizéry | 4 |
| Energia a napájanie > Nabíjačky batérií a akumulátorov > Solárne nabíjačky | Energia a napájanie > Nabíjačky batérií a akumulátorov | 4 |
| Elektro, Smart Home a osvetlenie > Pohony brán a vrát > Pohony pre garážová vrata | Elektro, Smart Home a osvetlenie > Pohony brán a vrát | 3 |
| Domáce spotrebiče > Drobné kuchynské spotrebiče | Domáce spotrebiče | 3 |
| TV, audio, video a foto technika > Audio technika > Řečnické systémy | TV, audio, video a foto technika > Audio technika | 3 |
| Energia a napájanie > Nabíjačky batérií a akumulátorov > Ochrana batérií | Energia a napájanie > Nabíjačky batérií a akumulátorov | 3 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Klávesnice | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 3 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > PRÍSLUŠENSTVO > Ostatné | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 3 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > Domové videotelefony > IP videotelefony | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 3 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > PRÍSLUŠENSTVO > Pamäťové karty | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 3 |
| Domáce spotrebiče > Triedenie odpadu a domáce organizéry > Upratovanie | Domáce spotrebiče > Triedenie odpadu a domáce organizéry | 3 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > IP sieťové kamery > 6.0 Mpix. | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 3 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Zavlažovanie > Zavlažovače | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 3 |
| TV, audio, video a foto technika > Audio technika > Gramofóny | TV, audio, video a foto technika > Audio technika | 3 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > AUDIO prevodníky | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 3 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > HDMI rozbočovače | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 3 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > HDCVI a 5v1 videorekordéry > 4 kanály | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 3 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Robotické vysávače | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 3 |
| Domáce spotrebiče > Klimatizácia a vzduch > Čističky vzduchu | Domáce spotrebiče > Klimatizácia a vzduch | 3 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED pásky | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 3 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Prenosné lednice, chladiace boxy | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 3 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > IP sieťové videorekordéry (NVR) > 4 kanály | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 3 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > IP sieťové kamery > PTZ kamery | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 3 |
| Počítače, mobily a tablety > USB huby | Počítače, mobily a tablety | 3 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Zavlažovanie > Rozprašovače | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 3 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Záhradné domčeky, garáže | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 3 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Infra žiarovky | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 3 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Odpudzovače škodcov > Odpudzovače psů, mačiek a zvěře | Dielňa, náradie a záhrada > Záhrada a bazén > Odpudzovače škodcov | 2 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED žiarovky > G4 patice | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 2 |
| Domáce spotrebiče > Meteostanice > Dataloggery | Domáce spotrebiče > Meteostanice | 2 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > PRÍSLUŠENSTVO > Prevodníky | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 2 |
| Počítače, mobily a tablety > Foto a kamery | Počítače, mobily a tablety | 2 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Pestovanie > Herbicidy proti plevelům | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 2 |
| Cestovanie, šport a outdoor > Elektrické kolobežky | Cestovanie, šport a outdoor | 2 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Přenosná ohniště | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 2 |
| TV, audio, video a foto technika > Audio technika > Hi-Fi systémy | TV, audio, video a foto technika > Audio technika | 2 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > IP sieťové kamery > 1.0 Mpix. (HD) / 1.3 Mpix. | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 2 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > KAMERY 4v1 > 4.0 Mpix. | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 2 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > HDMI prevodníky | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 2 |
| Počítače, mobily a tablety > GSM antény | Počítače, mobily a tablety | 2 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > Akční kamery | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 2 |
| Domáce spotrebiče > Meteostanice > Náhradné diely | Domáce spotrebiče > Meteostanice | 2 |
| Počítače, mobily a tablety > Podložky | Počítače, mobily a tablety | 2 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Zavlažovanie > Postrekovače | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 2 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné náradie > Hrable | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné náradie | 2 |
| Elektro, Smart Home a osvetlenie > Pohony brán a vrát > Poštovní schránky | Elektro, Smart Home a osvetlenie > Pohony brán a vrát | 2 |
| Chovateľské potreby > Prepravky | Chovateľské potreby | 2 |
| Počítače, mobily a tablety > Ostatné | Počítače, mobily a tablety | 2 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > HDCVI a 5v1 videorekordéry > 16 kanálů | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 2 |
| Cestovanie, šport a outdoor > Mikroskopy > Príslušenstvo | Cestovanie, šport a outdoor | 2 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje > Postrekovače | Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje | 2 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Bezdrátové přenosy signálu | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 2 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > PRÍSLUŠENSTVO > Nálepky, knihy | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 2 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED žiarovky > MR16 patice | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 2 |
| Elektro, Smart Home a osvetlenie > Pohony brán a vrát > Schránky na kľúče | Elektro, Smart Home a osvetlenie > Pohony brán a vrát | 2 |
| Cestovanie, šport a outdoor > Mikroskopy > LCD displej / PC monitor | Cestovanie, šport a outdoor | 1 |
| TV, audio, video a foto technika > Audio technika > Zosilňovače | TV, audio, video a foto technika > Audio technika | 1 |
| Počítače, mobily a tablety > Klávesnice > K televizi | Počítače, mobily a tablety | 1 |
| Počítače, mobily a tablety > Klávesnice | Počítače, mobily a tablety | 1 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Zavlažovanie > Hadice | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 1 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Záhradné sloupky | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 1 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Čističky vzduchu | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 1 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Záhradné nábytok | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 1 |
| Počítače, mobily a tablety > Reproduktory | Počítače, mobily a tablety | 1 |
| Cestovanie, šport a outdoor > Mikroskopy > Monokulární | Cestovanie, šport a outdoor | 1 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > KAMERY 4v1 > 8.0 Mpix. (4K) | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 1 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Stojace lampy | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 1 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje > Vysokotlakové umývačky | Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje | 1 |
| Domáce spotrebiče > Rúry | Domáce spotrebiče | 1 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > IP sieťové videorekordéry (NVR) > 32 kanálů | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 1 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje > Vysávače lístie | Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje | 1 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Bezdrátové přenosy signálu > AUDIO přenosy | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 1 |
| Domáce spotrebiče > Klimatizácia a vzduch > Zvlhčovače | Domáce spotrebiče > Klimatizácia a vzduch | 1 |
| Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia > Rádiá | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 1 |
| Elektro, Smart Home a osvetlenie > Zabezpečenie – detektory a senzory > Ostatné | Elektro, Smart Home a osvetlenie > Zabezpečenie – detektory a senzory | 1 |
| Počítače, mobily a tablety > Myši | Počítače, mobily a tablety | 1 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > HDCVI, HDTVI, AHD kamery > 2.0 Mpix (Full HD) | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 1 |
| Domáce spotrebiče > Triedenie odpadu a domáce organizéry > Kuchynské riad > Panvice | Domáce spotrebiče > Triedenie odpadu a domáce organizéry | 1 |
| Domáce spotrebiče > Triedenie odpadu a domáce organizéry > Kuchynské riad | Domáce spotrebiče > Triedenie odpadu a domáce organizéry | 1 |
| TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike > Bezdrátové přenosy signálu > Bluetooth | TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike | 1 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky > Pestovanie > Fungicidy proti houbám a plísním | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky | 1 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje > Záhradné nožnice | Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje | 1 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > IP sieťové kamery > 3.0 Mpix. | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 1 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > HDCVI, HDTVI, AHD kamery > Otočné | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 1 |
| Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje > Krovinorezy | Dielňa, náradie a záhrada > Záhrada a bazén > Náhradné diely pre záhradné stroje | 1 |
| Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy > HDCVI a 5v1 videorekordéry > 8 kanálů | Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy | 1 |

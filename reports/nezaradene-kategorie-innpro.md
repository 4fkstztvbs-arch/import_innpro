# Nezaradené kategórie — innpro

Vygenerované automaticky pri poslednom behu importu. Tieto kategórie z feedu sa
nezhodujú so žiadnou existujúcou kategóriou v `data/known-categories.json` (živý strom
Shoptetu) ani s jej blízkym pravopisným variantom — produkty pod nimi sa preto
**NEIMPORTUJÚ**, kým sa niekto nerozhodne, kam patria:
- ak ide o skutočne novú, žiadanú kategóriu → pridať ju do Shoptetu a znova spustiť
  `node scripts/build-known-categories.js <čerstvý export> data/known-categories.json`,
- ak má patriť pod existujúcu kategóriu inak pomenovanú → pridať záznam do
  `categoryRenamesByPath` v `scripts/innpro-mapping.json`.

_Žiadne — všetky kategórie z tohto behu sa napárovali na existujúci strom._

## Automaticky napárované na existujúcu kategóriu (blízky pravopisný variant)

| Kategória z feedu | Napárované na | Zhoda | Počet produktov |
|---|---|---|---|
| Počítače, mobily a tablety > Káble > USB káble | Počítače, mobily a tablety > USB káble | 94% | 6 |

## Zložená cesta preložená cez starý koreň

`categoryRenamesByPath` prepisuje iba prefix cesty, takže vznikla cesta s novým
koreňom a starým chvostom. Zaradenie je odvodené z `data/stary-novy-strom.json`.

| Cesta z feedu | Zaradené do | Počet produktov |
|---|---|---|
| Dielňa, náradie a záhrada > Meracie nástroje | Dielňa, náradie a záhrada > Meracia technika | 327 |
| Dielňa, náradie a záhrada > 3D tlač > Vlákna | 3D tlač a digitálna výroba > 3D tlačiarne a materiály | 271 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Príslušenstvo > Pre športové kamery | TV, audio, video a foto technika > Foto a príslušenstvo > Príslušenstvo pre fotoaparáty a akčné kamery | 258 |
| Počítače, mobily a tablety > Obaly na telefóny > Ochranné puzdrá pre smartfóny | Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily | 215 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Príslušenstvo > Pre fotoaparáty a videokamery | TV, audio, video a foto technika > Foto a príslušenstvo > Príslušenstvo pre fotoaparáty a akčné kamery | 131 |
| Cestovanie, šport a outdoor > Príslušenstvo pre drony > Filtre pre drony | Cestovanie, šport a outdoor > Príslušenstvo pre drony | 121 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Fotoateliér > Svietidlá | TV, audio, video a foto technika > Foto a príslušenstvo > Fotoateliér | 114 |
| Elektro, Smart Home a osvetlenie > Riadiace jednotky > Smart ovládače | Elektro, Smart Home a osvetlenie > Smart riadiace jednotky a huby | 113 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Selfie tyče > statívy > držiaky > Postroje, upevňovacie prvky a držiaky | TV, audio, video a foto technika > Foto a príslušenstvo > Statívy, držiaky a upevnenie pre kamery | 104 |
| Dielňa, náradie a záhrada > 3D tlač > Príslušenstvo pre 3D tlačiarne | 3D tlač a digitálna výroba > 3D tlačiarne a materiály | 101 |
| Elektro, Smart Home a osvetlenie > Prvky výkonu > Senzory | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 100 |
| Cestovanie, šport a outdoor > Príslušenstvo pre drony > DJI | Cestovanie, šport a outdoor > Príslušenstvo pre drony | 99 |
| Počítače, mobily a tablety > Smart prstene | Počítače, mobily a tablety > Nositeľná elektronika | 97 |
| TV, audio, video a foto technika > Audio technika > Slúchadlá > Bezdrôtové slúchadlá > TWS slúchadlá | TV, audio, video a foto technika > Audio technika | 94 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Filtre > Pre športové kamery | TV, audio, video a foto technika > Foto a príslušenstvo > Filtre | 86 |
| Počítače, mobily a tablety > Smart hodinky | Počítače, mobily a tablety > Nositeľná elektronika | 78 |
| Dielňa, náradie a záhrada > Potlač textilu | 3D tlač a digitálna výroba > Tlačiarne a lisy na potlač textilu | 77 |
| Elektro, Smart Home a osvetlenie > Riadiace jednotky > Prepínače | Elektro, Smart Home a osvetlenie > Smart riadiace jednotky a huby | 74 |
| Cestovanie, šport a outdoor > Batérie > Lítiové a NiMH | Cestovanie, šport a outdoor > Batérie pre drony a RC modely | 69 |
| TV, audio, video a foto technika > Audio technika > Slúchadlá > Bezdrôtové slúchadlá > Náhlavné slúchadlá | TV, audio, video a foto technika > Audio technika | 65 |
| Počítače, mobily a tablety > Projektory a plátna > Projektory | TV, audio, video a foto technika > Projektory | 64 |
| Dielňa, náradie a záhrada > 3D tlač > 3D tlačiarne | 3D tlač a digitálna výroba > 3D tlačiarne a materiály | 63 |
| Dielňa, náradie a záhrada > Zavlažovacie systémy | Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné zavlažovacie systémy | 53 |
| Cestovanie, šport a outdoor > Príslušenstvo pre drony > Tašky a kufre | Cestovanie, šport a outdoor > Príslušenstvo pre drony | 52 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Selfie tyče > statívy > držiaky > Statívy | TV, audio, video a foto technika > Foto a príslušenstvo > Statívy, držiaky a upevnenie pre kamery | 50 |
| TV, audio, video a foto technika > Audio technika > Slúchadlá > Drôtové slúchadlá | TV, audio, video a foto technika > Audio technika | 48 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Príslušenstvo > Ostatné | TV, audio, video a foto technika > Foto a príslušenstvo > Príslušenstvo pre fotoaparáty a akčné kamery | 46 |
| Cestovanie, šport a outdoor > Fitness Vybavenie | Cestovanie, šport a outdoor > Posilňovanie a fitness > Fitness náradie a vybavenie | 45 |
| Elektro, Smart Home a osvetlenie > Prvky výkonu > Smart zástrčky > Zásuvky | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 42 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Skladovanie a preprava > Puzdrá a obaly | TV, audio, video a foto technika > Foto a príslušenstvo > Skladovanie a preprava | 41 |
| Cestovanie, šport a outdoor > Elektrické bežecké pásy | Cestovanie, šport a outdoor > Posilňovanie a fitness > Elektrické bežecké pásy | 41 |
| Počítače, mobily a tablety > Tablety > Grafické tablety | Počítače, mobily a tablety > Grafické tablety | 41 |
| TV, audio, video a foto technika > Audio technika > Reproduktory > Počítačové reproduktory | TV, audio, video a foto technika > Audio technika > HiFi a domáce reproduktory | 37 |
| Dielňa, náradie a záhrada > Laserové gravírovacie a rezacie stroje > Zariadenie | 3D tlač a digitálna výroba > Laserové gravírovacie a rezacie stroje | 37 |
| Počítače, mobily a tablety > Tvrdené sklo a fólie > Pre smartfóny | Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily | 34 |
| Počítače, mobily a tablety > Kancelária a škola > Tlačiarne štítkov > Štítky | Počítače, mobily a tablety > Kancelária a škola | 33 |
| Dielňa, náradie a záhrada > 3D skenery | 3D tlač a digitálna výroba > 3D skenery | 32 |
| Dielňa, náradie a záhrada > Zariadenia na čistenie bazénov | Dielňa, náradie a záhrada > Záhrada a bazén > Zariadenia na čistenie bazénov | 31 |
| Elektro, Smart Home a osvetlenie > Prvky výkonu > Smart kúrenie > Termostaty | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 30 |
| Počítače, mobily a tablety > Nabíjačky > sieťové nabíjačky | Počítače, mobily a tablety > Nabíjačky pre mobily | 28 |
| Elektro, Smart Home a osvetlenie > Prvky výkonu > Smart zámky | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 28 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Príslušenstvo > Pre stabilizátory | TV, audio, video a foto technika > Foto a príslušenstvo > Príslušenstvo pre fotoaparáty a akčné kamery | 28 |
| TV, audio, video a foto technika > Audio technika > Slúchadlá > Príslušenstvo | TV, audio, video a foto technika > Audio technika | 28 |
| Dielňa, náradie a záhrada > 3D tlač > Živice | 3D tlač a digitálna výroba > 3D tlačiarne a materiály | 28 |
| Elektro, Smart Home a osvetlenie > Osvetlenie > Stropné svietidlá | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 27 |
| Počítače, mobily a tablety > Pamäťové karty | Počítače, mobily a tablety > Pamäťové médiá > Pamäťové karty | 27 |
| Elektro, Smart Home a osvetlenie > Riadiace jednotky > Smart centrály | Elektro, Smart Home a osvetlenie > Smart riadiace jednotky a huby | 26 |
| Domáce spotrebiče > Kuchynské príslušenstvo > Na varenie | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 26 |
| Cestovanie, šport a outdoor > Príslušenstvo pre bicykle > Pumpy | Cestovanie, šport a outdoor > Príslušenstvo pre bicykle | 24 |
| Počítače, mobily a tablety > Kable USB I > USB na Lightning | Počítače, mobily a tablety > USB káble | 23 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Fotoateliér > Softboxy | TV, audio, video a foto technika > Foto a príslušenstvo > Fotoateliér | 22 |
| TV, audio, video a foto technika > Audio technika > Reproduktory > Prenosné Bluetooth reproduktory | TV, audio, video a foto technika > Audio technika > HiFi a domáce reproduktory | 22 |
| TV, audio, video a foto technika > Audio technika > Reproduktory > Soundbary | TV, audio, video a foto technika > Audio technika > HiFi a domáce reproduktory | 22 |
| Auto-moto > Videorekordéry > Videorekordéry | Auto-moto > Elektronika do auta | 22 |
| Elektro, Smart Home a osvetlenie > Osvetlenie > Stolové a nočné lampy | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 21 |
| Dielňa, náradie a záhrada > Laserové gravírovacie a rezacie stroje > Príslušenstvo | 3D tlač a digitálna výroba > Laserové gravírovacie a rezacie stroje | 21 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Selfie tyče > statívy > držiaky > Adaptéry | TV, audio, video a foto technika > Foto a príslušenstvo > Statívy, držiaky a upevnenie pre kamery | 20 |
| TV, audio, video a foto technika > Audio technika > Interkomy | TV, audio, video a foto technika > Audio technika | 20 |
| Dielňa, náradie a záhrada > Spájkovačky | Dielňa, náradie a záhrada > Spájkovacia technika > Spájkovačky a trafospájkovačky | 20 |
| TV, audio, video a foto technika > Audio technika > Mikrofóny > Klopové mikrofóny | TV, audio, video a foto technika > Audio technika | 19 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Selfie tyče > statívy > držiaky > Selfie tyče a držiaky | TV, audio, video a foto technika > Foto a príslušenstvo > Statívy, držiaky a upevnenie pre kamery | 19 |
| Elektro, Smart Home a osvetlenie > Osvetlenie > LED pásy | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie | 18 |
| TV, audio, video a foto technika > Audio technika > Reproduktory > Aktívne reproduktory | TV, audio, video a foto technika > Audio technika > HiFi a domáce reproduktory | 18 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Filtre > Pre zrkadlovky | TV, audio, video a foto technika > Foto a príslušenstvo > Filtre | 18 |
| Počítače, mobily a tablety > Držiaky na TV | TV, audio, video a foto technika > TV stolíky a držiaky | 18 |
| Cestovanie, šport a outdoor > Načítanie > Nabíjačky | Cestovanie, šport a outdoor > Nabíjačky pre drony a RC modely | 17 |
| Energia a napájanie > Elektrické stanice > Príslušenstvo | Energia a napájanie > Prenosné elektrické stanice | 17 |
| Počítače, mobily a tablety > Tablety > Tablety | Počítače, mobily a tablety > Tablety | 16 |
| Počítače, mobily a tablety > Sieťové zariadenia | Počítače, mobily a tablety > NAS servery a sieťové úložiská | 16 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Fotoateliér > Stany bez tieňa | TV, audio, video a foto technika > Foto a príslušenstvo > Fotoateliér | 15 |
| Počítače, mobily a tablety > Herné ovládače | Počítače, mobily a tablety > Herné ovládače pre mobily | 15 |
| Počítače, mobily a tablety > Kancelária a škola > Tlačiarne štítkov > Tlačiarne štítkov | Počítače, mobily a tablety > Kancelária a škola | 15 |
| Počítače, mobily a tablety > Selfie tyče > statívy > stojany > Iné | Počítače, mobily a tablety > Selfie tyče a statívy pre telefóny | 15 |
| Počítače, mobily a tablety > Smartfóny | Počítače, mobily a tablety > Smart telefóny | 15 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Súpravy | TV, audio, video a foto technika > Foto a príslušenstvo > Súpravy príslušenstva pre akčné kamery | 14 |
| Počítače, mobily a tablety > Pendrive | Počítače, mobily a tablety > Pamäťové médiá > USB kľúče | 14 |
| Cestovanie, šport a outdoor > Elektrické bicykle | Cestovanie, šport a outdoor > Elektrické bicykle a cyklotrenažéry | 14 |
| Auto-moto > Držiaky telefónov | Auto-moto > Príslušenstvo do auta | 13 |
| Elektro, Smart Home a osvetlenie > Osvetlenie > Nábytkové svietidlá | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 13 |
| Cestovanie, šport a outdoor > Príslušenstvo pre bicykle > Lampy | Cestovanie, šport a outdoor > Príslušenstvo pre bicykle | 13 |
| Cestovanie, šport a outdoor > Hračky > Edukatívne > Programovateľní roboti | Cestovanie, šport a outdoor > Hračky | 13 |
| TV, audio, video a foto technika > Audio technika > Slúchadlá > Bezdrôtové slúchadlá > Šport | TV, audio, video a foto technika > Audio technika | 13 |
| Počítače, mobily a tablety > Myši, klávesnica | Počítače, mobily a tablety > PC periférie | 13 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Skladovanie a preprava > Tašky | TV, audio, video a foto technika > Foto a príslušenstvo > Skladovanie a preprava | 13 |
| Počítače, mobily a tablety > Kancelária a škola > Fototlačiarne | Počítače, mobily a tablety > Kancelária a škola | 13 |
| Počítače, mobily a tablety > Routery | Počítače, mobily a tablety > Cestovné a VPN routery | 13 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Fotoateliér > Kruhové svetlá | TV, audio, video a foto technika > Foto a príslušenstvo > Fotoateliér | 12 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Fotoateliér > Fotografické pozadia | TV, audio, video a foto technika > Foto a príslušenstvo > Fotoateliér | 12 |
| Energia a napájanie > Powerbanky | Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily > Powerbanky | 12 |
| Domáce spotrebiče > Kuchynské príslušenstvo > Ostatné | Domáce spotrebiče > Kuchynské vybavenie > Kuchynské pomôcky | 12 |
| Domáce spotrebiče > Čistenie | Domáce spotrebiče > Upratovacie pomôcky | 12 |
| Elektro, Smart Home a osvetlenie > Osvetlenie > LED žiarovky | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie | 11 |
| TV, audio, video a foto technika > Audio technika > Reproduktory > Sady reproduktorov | TV, audio, video a foto technika > Audio technika > HiFi a domáce reproduktory | 11 |
| Elektro, Smart Home a osvetlenie > Prvky výkonu > Smart kúrenie > Termostatické hlavice | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 11 |
| Počítače, mobily a tablety > Kable USB I > 3v1 Micro > USB-C > Lightning | Počítače, mobily a tablety > USB káble | 11 |
| Elektro, Smart Home a osvetlenie > Smart záhrada | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 11 |
| Počítače, mobily a tablety > Powerbanky | Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily > Powerbanky | 11 |
| Počítače, mobily a tablety > Akumulátory, batérie > Batérie | Počítače, mobily a tablety > Akumulátory a batérie do elektroniky | 11 |
| Počítače, mobily a tablety > Kable USB I > USB na USB-C | Počítače, mobily a tablety > USB káble | 10 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Kamery > Insta | TV, audio, video a foto technika > Foto a príslušenstvo | 9 |
| Počítače, mobily a tablety > Rámčeky pre disky | Počítače, mobily a tablety > Pamäťové médiá > Externé disky | 9 |
| Dielňa, náradie a záhrada > Wykrywacze metalu | Dielňa, náradie a záhrada > Meracia technika > Detektory a lokátory | 9 |
| Počítače, mobily a tablety > Nabíjačky > Nabíjačky do auta | Energia a napájanie > Nabíjačky batérií a akumulátorov | 8 |
| Cestovanie, šport a outdoor > Príslušenstvo pre drony > Pristátie | Cestovanie, šport a outdoor > Príslušenstvo pre drony | 8 |
| Počítače, mobily a tablety > Čítačky kariet | Počítače, mobily a tablety > Čítačky pamäťových kariet | 8 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Filtre > Pre smartfóny | TV, audio, video a foto technika > Foto a príslušenstvo > Filtre | 8 |
| Cestovanie, šport a outdoor > Hračky > Vzdelávacie a interaktívne | Cestovanie, šport a outdoor > Hračky | 8 |
| Počítače, mobily a tablety > Selfie tyče > statívy > stojany > Selfie stojany | Počítače, mobily a tablety > Selfie tyče a statívy pre telefóny | 8 |
| TV, audio, video a foto technika > Audio technika > Mikrofóny > Hry | TV, audio, video a foto technika > Audio technika | 8 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Fotoateliér > Podšálky | TV, audio, video a foto technika > Foto a príslušenstvo > Fotoateliér | 7 |
| Počítače, mobily a tablety > Selfie tyče > statívy > stojany > Podložky a stojany | Počítače, mobily a tablety > Selfie tyče a statívy pre telefóny | 7 |
| Elektro, Smart Home a osvetlenie > Riadiace jednotky > Ovládacie panely | Elektro, Smart Home a osvetlenie > Smart riadiace jednotky a huby | 6 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Skladovanie a preprava > Batohy | TV, audio, video a foto technika > Foto a príslušenstvo > Skladovanie a preprava | 6 |
| Dielňa, náradie a záhrada > 3D tlač > Diely | 3D tlač a digitálna výroba > 3D tlačiarne a materiály | 6 |
| Energia a napájanie > Elektrické stanice > Elektrické stanice | Energia a napájanie > Prenosné elektrické stanice | 6 |
| Počítače, mobily a tablety > Nabíjačky > Bezdrôtové nabíjačky | Energia a napájanie > Nabíjačky batérií a akumulátorov | 5 |
| Cestovanie, šport a outdoor > Príslušenstvo pre bicykle > Rukoväte | Cestovanie, šport a outdoor > Príslušenstvo pre bicykle | 5 |
| Počítače, mobily a tablety > Projektory a plátna > Plátna pre projektory | TV, audio, video a foto technika > Projektory | 5 |
| TV, audio, video a foto technika > Audio technika > Reproduktory > Subwoofery | TV, audio, video a foto technika > Audio technika > HiFi a domáce reproduktory | 4 |
| Elektro, Smart Home a osvetlenie > Osvetlenie > Svietidlá | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 4 |
| TV, audio, video a foto technika > Audio technika > Mikrofóny > Štúdiové mikrofóny | TV, audio, video a foto technika > Audio technika | 4 |
| TV, audio, video a foto technika > Audio technika > Mikrofóny > Ostatné | TV, audio, video a foto technika > Audio technika | 4 |
| Cestovanie, šport a outdoor > Príslušenstvo pre bicykle > Cyklopočítače | Cestovanie, šport a outdoor > Príslušenstvo pre bicykle | 4 |
| Cestovanie, šport a outdoor > Príslušenstvo pre bicykle > Senzory | Cestovanie, šport a outdoor > Príslušenstvo pre bicykle | 4 |
| Elektro, Smart Home a osvetlenie > Osvetlenie > Dekoratívne osvetlenie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 3 |
| Elektro, Smart Home a osvetlenie > Osvetlenie > Stojacie lampy | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 3 |
| Počítače, mobily a tablety > Predlžovacie káble | Počítače, mobily a tablety > Predlžovacie a rozbočovacie zásuvky k PC | 3 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Selfie tyče > statívy > držiaky > Kruhové svetlá | TV, audio, video a foto technika > Foto a príslušenstvo > Statívy, držiaky a upevnenie pre kamery | 3 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Ďalekohľad | TV, audio, video a foto technika > Foto a príslušenstvo | 3 |
| Počítače, mobily a tablety > Selfie tyče > statívy > stojany > Adaptéry | Počítače, mobily a tablety > Selfie tyče a statívy pre telefóny | 3 |
| Cestovanie, šport a outdoor > Načítanie > Napájacie zdroje | Cestovanie, šport a outdoor > Nabíjačky pre drony a RC modely | 2 |
| Cestovanie, šport a outdoor > Príslušenstvo pre bicykle > Náhradné diely a nástroje | Cestovanie, šport a outdoor > Príslušenstvo pre bicykle | 2 |
| Cestovanie, šport a outdoor > Načítanie > Príslušenstvo | Cestovanie, šport a outdoor > Nabíjačky pre drony a RC modely | 2 |
| Elektro, Smart Home a osvetlenie > Prvky výkonu > Smart kúrenie > Ovládače klimatizácie > tepelného čerpadla | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 2 |
| Elektro, Smart Home a osvetlenie > Prvky výkonu > Smart zástrčky > Napájacie lišty | Elektro, Smart Home a osvetlenie > Smart domácnosť – zariadenia | 2 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Kamery > Akaso | TV, audio, video a foto technika > Foto a príslušenstvo | 2 |
| Cestovanie, šport a outdoor > Príslušenstvo pre bicykle > Cyklotašky | Cestovanie, šport a outdoor > Príslušenstvo pre bicykle | 1 |
| Cestovanie, šport a outdoor > Príslušenstvo pre bicykle > Okuliare | Cestovanie, šport a outdoor > Príslušenstvo pre bicykle | 1 |
| Cestovanie, šport a outdoor > Príslušenstvo pre bicykle > Oblečenie | Cestovanie, šport a outdoor > Príslušenstvo pre bicykle | 1 |
| Cestovanie, šport a outdoor > Hračky > Pre kojencov | Cestovanie, šport a outdoor > Hračky | 1 |
| Elektro, Smart Home a osvetlenie > Osvetlenie > Iné | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 1 |
| TV, audio, video a foto technika > Televízory > Televízory | TV, audio, video a foto technika > Televízory | 1 |
| TV, audio, video a foto technika > Foto a príslušenstvo > Príslušenstvo > Objektívy DJI | TV, audio, video a foto technika > Foto a príslušenstvo > Príslušenstvo pre fotoaparáty a akčné kamery | 1 |
| Počítače, mobily a tablety > Tablety > Iné | Počítače, mobily a tablety > Grafické tablety | 1 |
| Počítače, mobily a tablety > Selfie tyče > statívy > stojany > Statívy a kruhové svetlá | Počítače, mobily a tablety > Selfie tyče a statívy pre telefóny | 1 |
| Počítače, mobily a tablety > Napájacie zdroje > Napájacie zdroje pre notebooky | Energia a napájanie > Napájacie zdroje | 1 |
| Počítače, mobily a tablety > Príslušenstvo | Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily | 1 |

## Preložené na predka zo starého stromu

Nový strom tieto hlbšie vetvy vedome nemá — zlúčil ich do nadradenej kategórie.
Produkt zostáva v ponuke, len o úroveň vyššie. Ak si niektorá z nich zaslúži
vlastnú kategóriu, pridať ju do stromu a do `data/stary-novy-strom.json`.

| Kategória z feedu | Zaradené do | Počet produktov |
|---|---|---|
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Simulátory > Simulácia pretekov | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 97 |
| Domáce spotrebiče > Vysávače > Náhradné diely | Domáce spotrebiče > Vysávače | 86 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Skrine > S ventilátorom | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 63 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Okuliare pre rozšírenú realitu | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 61 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Skrine > Bez ventilátora | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 53 |
| Domáce spotrebiče > Vysávače > Robotické vysávače | Domáce spotrebiče > Vysávače | 47 |
| Cestovanie, šport a outdoor > Turistika a outdoor > Kempovanie | Cestovanie, šport a outdoor > Turistika a outdoor | 44 |
| Cestovanie, šport a outdoor > Turistika a outdoor > Svietidlá > Ostatné | Cestovanie, šport a outdoor > Turistika a outdoor | 43 |
| Elektro, Smart Home a osvetlenie > Príslušenstvo | Elektro, Smart Home a osvetlenie | 38 |
| Chovateľské potreby > Dávkovače krmiva > misky | Chovateľské potreby | 37 |
| Chovateľské potreby > Starostlivosť o zvieratá | Chovateľské potreby | 33 |
| Cestovanie, šport a outdoor > Turistika a outdoor > Rybárčenie > Návnada lode | Cestovanie, šport a outdoor > Turistika a outdoor | 31 |
| Chovateľské potreby > Ostatné príslušenstvo | Chovateľské potreby | 30 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Simulátory > Simulácia letu | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 30 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Príslušenstvo VR | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 30 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Mikrofóny | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 29 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Herné podložky > Podložky | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 29 |
| Cestovanie, šport a outdoor > Turistika a outdoor > Svietidlá > Čelovky | Cestovanie, šport a outdoor > Turistika a outdoor | 27 |
| Chovateľské potreby > Príslušenstvo pre mačacie toalety | Chovateľské potreby | 27 |
| Chovateľské potreby > Venčenie a transport | Chovateľské potreby | 26 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Chladenie počítača > Chladenie vodou | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 25 |
| Domáce spotrebiče > Vysávače > Tyčové vysávače | Domáce spotrebiče > Vysávače | 25 |
| Chovateľské potreby > Fontány > napájačky | Chovateľské potreby | 21 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Chladenie počítača > Ventilátory | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 19 |
| Dielňa, náradie a záhrada > Ostatné | Dielňa, náradie a záhrada | 19 |
| TV, audio, video a foto technika > Audio technika > Doplnky | TV, audio, video a foto technika > Audio technika | 18 |
| Počítače, mobily a tablety > Ostatné | Počítače, mobily a tablety | 17 |
| Chovateľské potreby > Inteligentné toalety pre zvieratá | Chovateľské potreby | 15 |
| Cestovanie, šport a outdoor > Turistika a outdoor > Osvetlenie > Kempingové svetlá | Cestovanie, šport a outdoor > Turistika a outdoor | 12 |
| Dielňa, náradie a záhrada > CNC stroje | Dielňa, náradie a záhrada | 11 |
| Chovateľské potreby > Hračky | Chovateľské potreby | 10 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Reproduktory | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 10 |
| Počítače, mobily a tablety > Adaptéry a meniče | Počítače, mobily a tablety | 10 |
| Chovateľské potreby > Pohlcovače zápachu | Chovateľské potreby | 9 |
| Cestovanie, šport a outdoor > Turistika a outdoor > Osvetlenie > Vonkajšie svetlá | Cestovanie, šport a outdoor > Turistika a outdoor | 9 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Osvetlenie | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 9 |
| Počítače, mobily a tablety > Osvetlenie | Počítače, mobily a tablety | 8 |
| Auto-moto > Mini kompresory | Auto-moto | 8 |
| Zdravie a starostlivosť > Sonické zubné kefky > Sonické zubné kefky | Zdravie a starostlivosť | 8 |
| Počítače, mobily a tablety > Obaly na telefóny > Vodotesné puzdro | Počítače, mobily a tablety | 8 |
| Počítače, mobily a tablety > SSD disky | Počítače, mobily a tablety | 8 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Počítačové zdroje | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 8 |
| Cestovanie, šport a outdoor > Turistika a outdoor > Svietidlá > Pracovné svetlá | Cestovanie, šport a outdoor > Turistika a outdoor | 7 |
| Počítače, mobily a tablety > Stylusy pre tablety | Počítače, mobily a tablety | 7 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Myši > Bezdrôtový | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 7 |
| Počítače, mobily a tablety > Objektívy pre telefóny | Počítače, mobily a tablety | 7 |
| Zdravie a starostlivosť > Matka a dieťa > Kŕmenie dieťaťa | Zdravie a starostlivosť > Matka a dieťa | 7 |
| TV, audio, video a foto technika > Audio technika > Audio káble | TV, audio, video a foto technika > Audio technika | 6 |
| Počítače, mobily a tablety > Kable USB I > USB-C na Lightning | Počítače, mobily a tablety | 6 |
| TV, audio, video a foto technika > Audio technika > Stojany | TV, audio, video a foto technika > Audio technika | 6 |
| Počítače, mobily a tablety > Tvrdené sklo a fólie > Pre tablety | Počítače, mobily a tablety | 6 |
| Počítače, mobily a tablety > Obaly na telefóny > Ochranné puzdrá pre tablety | Počítače, mobily a tablety | 6 |
| Cestovanie, šport a outdoor > Turistika a outdoor > Ostatné | Cestovanie, šport a outdoor > Turistika a outdoor | 6 |
| Počítače, mobily a tablety > Monitor stands | Počítače, mobily a tablety | 6 |
| Cestovanie, šport a outdoor > Turistika a outdoor > Elektrické skútre | Cestovanie, šport a outdoor > Turistika a outdoor | 6 |
| Cestovanie, šport a outdoor > Turistika a outdoor > Svietidlá > UV svietidlá | Cestovanie, šport a outdoor > Turistika a outdoor | 5 |
| Zdravie a starostlivosť > Masážne prístroje | Zdravie a starostlivosť | 5 |
| TV, audio, video a foto technika > Audio technika > Ostatné | TV, audio, video a foto technika > Audio technika | 5 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Herné podložky > Príslušenstvo | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 5 |
| Počítače, mobily a tablety > Externé zvukové karty | Počítače, mobily a tablety | 5 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Chladenie počítača > Aktívne chladenie | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 5 |
| Auto-moto > Nabíjačky do auta | Auto-moto | 5 |
| Dielňa, náradie a záhrada > 3D SLAM ručné skenery | Dielňa, náradie a záhrada | 5 |
| Dielňa, náradie a záhrada > Skrutkovače | Dielňa, náradie a záhrada | 5 |
| Energia a napájanie > Fotovoltaické panely > Fotovoltaické panely | Energia a napájanie | 5 |
| Domáce spotrebiče > Płyty gazowe | Domáce spotrebiče | 5 |
| Zdravie a starostlivosť > Matka a dieťa > Elektronické príslušenstvo > Slúchadlá a reproduktory | Zdravie a starostlivosť > Matka a dieťa | 5 |
| Počítače, mobily a tablety > Kable USB I > USB na Micro USB | Počítače, mobily a tablety | 4 |
| Počítače, mobily a tablety > Rozbočovače | Počítače, mobily a tablety | 4 |
| Auto-moto > Videorekordéry > Príslušenstvo | Auto-moto | 4 |
| Dielňa, náradie a záhrada > Rezacie nástroje | Dielňa, náradie a záhrada | 4 |
| Auto-moto > Android Auto | Auto-moto | 4 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Myši > Káblové | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 4 |
| Počítače, mobily a tablety > Zvukové adaptéry | Počítače, mobily a tablety | 4 |
| Zdravie a starostlivosť > Sonické zubné kefky > Príslušenstvo | Zdravie a starostlivosť | 4 |
| Auto-moto > Umývanie a čistenie > Vysávače do auta | Auto-moto | 4 |
| Cestovanie, šport a outdoor > Elektrické surfy | Cestovanie, šport a outdoor | 4 |
| Cestovanie, šport a outdoor > Turistika a outdoor > Batohy > tašky | Cestovanie, šport a outdoor > Turistika a outdoor | 4 |
| Dielňa, náradie a záhrada > Tašky a boxy na náradie | Dielňa, náradie a záhrada | 4 |
| Auto-moto > Ostatné | Auto-moto | 3 |
| Zdravie a starostlivosť > Osobná starostlivosť | Zdravie a starostlivosť | 3 |
| Zdravie a starostlivosť > Predlžovanie rias | Zdravie a starostlivosť | 3 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Stojany na slúchadlá | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 3 |
| Počítače, mobily a tablety > Kable USB I > USB-C na USB-C | Počítače, mobily a tablety | 3 |
| Zdravie a starostlivosť > Starostlivosť o vlasy > Žehličky na vlasy a kulmy | Zdravie a starostlivosť > Starostlivosť o vlasy | 3 |
| Zdravie a starostlivosť > Prístroje na tvár > Iné | Zdravie a starostlivosť > Prístroje na tvár | 3 |
| Cestovanie, šport a outdoor > Podvodné drony | Cestovanie, šport a outdoor | 3 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Klávesnice > Káblové | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 3 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Klávesnice > Bezdrôtový | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 3 |
| Cestovanie, šport a outdoor > Turistika a outdoor > Rybárčenie > Ostatné | Cestovanie, šport a outdoor > Turistika a outdoor | 3 |
| Dielňa, náradie a záhrada > Robotické kosačky | Dielňa, náradie a záhrada | 3 |
| Zdravie a starostlivosť > Matka a dieťa > Odsávačky mlieka a masážne prístroje > Odsávačky mlieka | Zdravie a starostlivosť > Matka a dieťa | 3 |
| Domáce spotrebiče > Mini chladničky | Domáce spotrebiče | 3 |
| Cestovanie, šport a outdoor > Turistika a outdoor > Príslušenstvo na kľuky | Cestovanie, šport a outdoor > Turistika a outdoor | 3 |
| Auto-moto > Monitory automobilov | Auto-moto | 3 |
| Počítače, mobily a tablety > Organizátory káblov | Počítače, mobily a tablety | 2 |
| Počítače, mobily a tablety > Prstencové držiaky | Počítače, mobily a tablety | 2 |
| Zdravie a starostlivosť > Holiace strojčeky a zastrihávače > Zastrihávače | Zdravie a starostlivosť | 2 |
| Počítače, mobily a tablety > Adaptéry Bluetooth | Počítače, mobily a tablety | 2 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Ostatné | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 2 |
| Počítače, mobily a tablety > Káble > Sieťové káble | Počítače, mobily a tablety | 2 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Podložky pod myš | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 2 |
| Počítače, mobily a tablety > Káble > Ostatné | Počítače, mobily a tablety | 2 |
| Zdravie a starostlivosť > Erotika > Vibrátory | Zdravie a starostlivosť | 2 |
| TV, audio, video a foto technika > Audio technika > Zosilňovače | TV, audio, video a foto technika > Audio technika | 2 |
| Dielňa, náradie a záhrada > Vrtáky a skrutkovače | Dielňa, náradie a záhrada | 2 |
| Cestovanie, šport a outdoor > Náhradné diely | Cestovanie, šport a outdoor | 2 |
| TV, audio, video a foto technika > Audio technika > Hlasové záznamníky | TV, audio, video a foto technika > Audio technika | 2 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Zostavy a sety | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 2 |
| Domáce spotrebiče > Insekticídne zariadenia | Domáce spotrebiče | 2 |
| Cestovanie, šport a outdoor > Nástroje a meradlá | Cestovanie, šport a outdoor | 1 |
| Zdravie a starostlivosť > Holiace strojčeky a zastrihávače > Holiace strojčeky | Zdravie a starostlivosť | 1 |
| Dielňa, náradie a záhrada > Výtlačné a kartušové pištole | Dielňa, náradie a záhrada | 1 |
| Auto-moto > Vysielače do auta | Auto-moto | 1 |
| Počítače, mobily a tablety > Káble > Video káble | Počítače, mobily a tablety | 1 |
| Zdravie a starostlivosť > Ústne sprchy > Ústne sprchy | Zdravie a starostlivosť | 1 |
| Zdravie a starostlivosť > Matka a dieťa > Detská izba > Hodinky a budíky | Zdravie a starostlivosť > Matka a dieťa | 1 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Príslušenstvo pre PlayStation | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 1 |
| Domáce spotrebiče > Vysávače > Ostatné | Domáce spotrebiče > Vysávače | 1 |
| Počítače, mobily a tablety > Herné príslušenstvo pre PC > Herné príslušenstvo - docky, stojany | Počítače, mobily a tablety > Herné príslušenstvo pre PC | 1 |
| Počítače, mobily a tablety > Tašky, obaly, batohy | Počítače, mobily a tablety | 1 |
| Energia a napájanie > Fotovoltaické panely > Príslušenstvo | Energia a napájanie | 1 |
| Počítače, mobily a tablety > Vysielače do auta | Počítače, mobily a tablety | 1 |
| Dielňa, náradie a záhrada > Metalurgia | Dielňa, náradie a záhrada | 1 |
| Energia a napájanie > Fotovoltaické panely > Balkónové systémy | Energia a napájanie | 1 |
| Dielňa, náradie a záhrada > Roboty Humanoidalne > Seria R1 | Dielňa, náradie a záhrada | 1 |
| Cestovanie, šport a outdoor > Turistika a outdoor > Svietidlá > Svetlá na bicykel | Cestovanie, šport a outdoor > Turistika a outdoor | 1 |
| Zdravie a starostlivosť > Váhy | Zdravie a starostlivosť | 1 |
| Domáce spotrebiče > Pre dieťa | Domáce spotrebiče | 1 |
| Dielňa, náradie a záhrada > Brúsky | Dielňa, náradie a záhrada | 1 |
| Počítače, mobily a tablety > Bluetooth slúchadlá | Počítače, mobily a tablety | 1 |
| Cestovanie, šport a outdoor > Golf | Cestovanie, šport a outdoor | 1 |
| Počítače, mobily a tablety > Kable USB I > Iné | Počítače, mobily a tablety | 1 |
| Dielňa, náradie a záhrada > Zváranie | Dielňa, náradie a záhrada | 1 |
| Cestovanie, šport a outdoor > Turizmus | Cestovanie, šport a outdoor | 1 |

# Nezaradené kategórie — atos

Vygenerované automaticky pri poslednom behu importu. Tieto kategórie z feedu sa
nezhodujú so žiadnou existujúcou kategóriou v `data/known-categories.json` (živý strom
Shoptetu) ani s jej blízkym pravopisným variantom — produkty pod nimi sa preto
**NEIMPORTUJÚ**, kým sa niekto nerozhodne, kam patria:
- ak ide o skutočne novú, žiadanú kategóriu → pridať ju do Shoptetu a znova spustiť
  `node scripts/build-known-categories.js <čerstvý export> data/known-categories.json`,
- ak má patriť pod existujúcu kategóriu inak pomenovanú → pridať záznam do
  `categoryRenamesByPath` v `scripts/atos-mapping.json`.

**10 nenapárovaných kategórií, 88 produktov nenaimportovaných.**

| Kategória z feedu | Počet produktov | Príklady produktov |
|---|---|---|
| Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Držiaky a montážne krabice | 37 | CP PLUS CP-PR-70 Přídavný montážní nástavec (pro kameru CP-L4C-DX40FL3); Držák kamer na stožár DKLI pro dvě kamery; CP PLUS CP-PR-44 Přídavná montážní propojovací krabice (134mm); CP PLUS CP-PR-53 Konzole PTZ kamer na strop; CP-PR-124 Přídavný montážní nástavec otevřený |
| Zdravie a starostlivosť > Chovateľské potreby > Pelíšky | 12 | Pelíšek REBEL ANIMALS RA-1102-L  80x65x17  pro psy a kočky  pohovka; Pelíšek REBEL ANIMALS RA-1102-M 70x55x16  pro psy a kočky  pohovka; Zátěžová deka Rebel RBY-2001-4   4 kg (100x150 cm) medvídci; Zátěžová deka Rebel RBY-2000-5   5 kg (100x150 cm) vesmír; Pelíšek REBEL ANIMALS RA-1102-S  60x45x14  pro psy a kočky pohovka |
| Náradie a dielňa > Dielenské vybavenie > Kufre a organizéry na náradie > Dielenské skříňky a vozíky | 11 | Modul s nářadím do dílenského vozíku MECHANIC TOOL TRAY 1, 80ks SIXTOL; Modul s nářadím do dílenského vozíku MECHANIC TOOL TRAY 2, 102ks SIXTOL; Modul s nářadím do dílenského vozíku MECHANIC TOOL TRAY 5, 18ks SIXTOL; Modul s nářadím do dílenského vozíku MECHANIC TOOL TRAY 7, 14ks SIXTOL; Modul s nářadím do dílenského vozíku MECHANIC TOOL TRAY 3, 13ks SIXTOL |
| TV, audio a video > Antény a satelity > Satelitné príslušenstvo > Multipřepínače > 1 družice | 8 | Multipřepínač TESLA by TeleTek 5/24; Multipřepínač TESLA by TeleTek 5/32; Multipřepínač TESLA by TeleTek 5/16; Multipřepínač TESLA by TeleTek 5/4; Multipřepínač TESLA by TeleTek 5/8 |
| Šport, hračky a voľný čas > Posilňovanie a fitness > Činky a príslušenstvo > Stojany | 7 | Stojan na příslušenství HMS STR33; Stojan na 8 párů činek HMS STR36; Stojan na kotouče a osy STR12 HMS PREMIUM; Stojan na 9 olympijských os HMS STR35; Stojan na Body pump sady HMS STR40 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Stožiare a trojnožky > Teleskopické stožiare | 3 | Stožár výsuvný 2 dílný 3,7 m (2x2m) / 42, 48 mm; Stožár výsuvný 2 dílný 3,7 m (2x2m) / 35, 42 mm; Stožár výsuvný 2 dílný 4,7 m (2x2,5m) / 42, 48mm |
| Elektroinštalačný materiál > Ventilačné technika > Krbové ventilátory > Príslušenstvo pre krbové ventilátory | 3 | VENTS KFK 125 filtr pro KAM s odbočkou; VENTS KFK 150 filtr pro KAM s odbočkou; VENTS FFK 125 filtr pro KAM |
| Elektroinštalačný materiál > Montážne skrine a rozvádzače > Zásuvkové sloupky | 3 | Sloupek zásuvkový zs3065 IP54 4x230V s ochr. kolíkem; Sloupek zásuvkový zs30705 IP54 2x230V s ochr. kolíkem, 1x400V/16A/5, 1x400V/32A/5, In=16A; Sloupek zásuvkový zs2963 IP54 3x230V s ochr. kolíkem, 1x400V/16A/5 |
| Záhrada > Záhradné doplnky > Záhradné domčeky, garáže | 3 | Podlaha WPC G21 pro domek GAH 1085, Eben; Zahradní domek G21 GAH 1085 - 340 x 319 cm, antracitový, plechový; Zahradní domek G21 GAH 1085 - 340 x 319 cm, zelený, plechový |
| TV, audio a video > Televízory > 39" - 42" (98 - 107 cm) | 1 | FINLUX 40FFI5661 SMART TV FULL HD TIVO |

## Automaticky napárované na existujúcu kategóriu (blízky pravopisný variant)

| Kategória z feedu | Napárované na | Zhoda | Počet produktov |
|---|---|---|---|
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Držiaky stožárů | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Držiaky stožiarov | 82% | 72 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovacie a kotevní materiál, chémia | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovací a kotviaci materiál, chémia | 86% | 62 |
| TV, audio a video > Antény a satelity > PASIVNÍ PRVKY | TV, audio a video > Antény a satelity > Pasívne prvky | 92% | 61 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Držiaky stožárů > Na stěnu stavitelné | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Držiaky stožiarov > Na stenu nastaviteľné | 92% | 33 |
| TV, audio a video > Antény a satelity > PASIVNÍ PRVKY > Rozbočovače | TV, audio a video > Antény a satelity > Pasívne prvky > Rozbočovače | 99% | 30 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly sa třmenem | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly so strmeňom | 84% | 24 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovacie a kotevní materiál, chémia > Izolačné pásky | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovací a kotviaci materiál, chémia > Izolačné pásky | 98% | 19 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Držiaky stožárů > Na stěnu pevné | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Držiaky stožiarov > Na stenu pevné | 99% | 19 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Uzemnenie, hromosvody > Zemnící svorky | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Uzemnenie, hromosvody > Zemniace svorky | 87% | 18 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly sa třmenem > Na stožár (vertikální) | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly so strmeňom > Na stožiar (vertikálne) | 92% | 17 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovacie a kotevní materiál, chémia > Vruty, hmoždinky | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovací a kotviaci materiál, chémia > Vruty, hmoždinky | 98% | 17 |
| TV, audio a video > Antény a satelity > PASIVNÍ PRVKY > Rozbočovače > Televízne | TV, audio a video > Antény a satelity > Pasívne prvky > Rozbočovače > Televízne | 99% | 16 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Třmeny a spojky | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Strmene a spojky | 88% | 15 |
| TV, audio a video > Antény a satelity > SATELITNÉ PRIJÍMAČE > Prijímače s UNI čtečkou | TV, audio a video > Antény a satelity > Satelitné prijímače > Prijímače s UNI čítačkou | 94% | 14 |
| TV, audio a video > Antény a satelity > Konektory > Kompresní a krimpovací | TV, audio a video > Antény a satelity > Konektory > Kompresné a krimpovacie | 91% | 13 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Príslušenstvo ku stožárům | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Príslušenstvo k stožiarom | 88% | 12 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovacie a kotevní materiál, chémia > Sťahovacie pásky | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovací a kotviaci materiál, chémia > Sťahovacie pásky | 98% | 11 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly sa třmenem > Na balkón (horizontální) | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly so strmeňom > Na balkón (horizontálne) | 96% | 10 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Držiaky stožárů > Vlnky a objímky | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Držiaky stožiarov > Vlnky a objímky | 99% | 9 |
| TV, audio a video > Antény a satelity > ANTÉNY > Antény pre obytná autá a lode | TV, audio a video > Antény a satelity > Antény > Antény pre obytné autá a lode | 98% | 9 |
| TV, audio a video > Antény a satelity > PASIVNÍ PRVKY > Rozbočovače > Satelitné | TV, audio a video > Antény a satelity > Pasívne prvky > Rozbočovače > Satelitné | 99% | 8 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovacie a kotevní materiál, chémia > Káblové příchytky | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovací a kotviaci materiál, chémia > Káblové příchytky | 98% | 8 |
| TV, audio a video > Antény a satelity > PASIVNÍ PRVKY > Odbočovače | TV, audio a video > Antény a satelity > Pasívne prvky > Odbočovače | 99% | 8 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Držiaky stožárů > Patky | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Držiaky stožiarov > Patky | 99% | 7 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovacie a kotevní materiál, chémia > Chémia | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovací a kotviaci materiál, chémia > Chémia | 98% | 7 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Držiaky stožárů > Na krovy | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Držiaky stožiarov > Na krovy | 99% | 7 |
| TV, audio a video > Antény a satelity > PASIVNÍ PRVKY > Útlumové články | TV, audio a video > Antény a satelity > Pasívne prvky > Útlumové články | 99% | 7 |
| TV, audio a video > Antény a satelity > PASIVNÍ PRVKY > Slučovače TV | TV, audio a video > Antény a satelity > Pasívne prvky > Slučovače TV | 99% | 6 |
| TV, audio a video > Antény a satelity > PASIVNÍ PRVKY > Rozbočovače > Televízne aktivní | TV, audio a video > Antény a satelity > Pasívne prvky > Rozbočovače > Televízne aktivní | 99% | 6 |
| TV, audio a video > Antény a satelity > PASIVNÍ PRVKY > Anténní bleskojistky | TV, audio a video > Antény a satelity > Pasívne prvky > Anténní bleskojistky | 99% | 6 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly sa třmenem > Univerzálne | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly so strmeňom > Univerzálne | 99% | 6 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Príslušenstvo ku stožárům > Krytky stožárů | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Príslušenstvo k stožiarom > Krytky stožárů | 99% | 5 |
| TV, audio a video > Antény a satelity > PASIVNÍ PRVKY > LTE filtre | TV, audio a video > Antény a satelity > Pasívne prvky > LTE filtre | 99% | 4 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Príslušenstvo ku stožárům > Manžety | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Príslušenstvo k stožiarom > Manžety | 99% | 4 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly sa třmenem > Anténní ráhna | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly so strmeňom > Anténní ráhna | 99% | 3 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Príslušenstvo ku stožárům > Kolena a průchodky | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Príslušenstvo k stožiarom > Kolena a průchodky | 99% | 2 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Držiaky stožárů > Na komín bez vŕtanie | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Držiaky stožiarov > Na komín bez vŕtanie | 99% | 2 |
| TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Príslušenstvo ku stožárům > Tašky s průchodem pre stožár | TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Príslušenstvo k stožiarom > Tašky s průchodem pre stožár | 99% | 2 |

# Nezaradené kategórie — solight

Vygenerované automaticky pri poslednom behu importu. Tieto kategórie z feedu sa
nezhodujú so žiadnou existujúcou kategóriou v `data/known-categories.json` (živý strom
Shoptetu) ani s jej blízkym pravopisným variantom — produkty pod nimi sa preto
**NEIMPORTUJÚ**, kým sa niekto nerozhodne, kam patria:
- ak ide o skutočne novú, žiadanú kategóriu → pridať ju do Shoptetu a znova spustiť
  `node scripts/build-known-categories.js <čerstvý export> data/known-categories.json`,
- ak má patriť pod existujúcu kategóriu inak pomenovanú → pridať záznam do
  `categoryRenamesByPath` v `scripts/solight-mapping.json`.

_Žiadne — všetky kategórie z tohto behu sa napárovali na existujúci strom._

## Preložené na predka zo starého stromu

Nový strom tieto hlbšie vetvy vedome nemá — zlúčil ich do nadradenej kategórie.
Produkt zostáva v ponuke, len o úroveň vyššie. Ak si niektorá z nich zaslúži
vlastnú kategóriu, pridať ju do stromu a do `data/stary-novy-strom.json`.

| Kategória z feedu | Zaradené do | Počet produktov |
|---|---|---|
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Vianocne osvetlenie > Vianočné LED dekorácie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 79 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie > Interiérové osvetlenie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie | 56 |
| Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál > 230V > Rozbočky | Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál | 46 |
| Elektro, Smart Home a osvetlenie > Viaczásuvkové > Klasické | Elektro, Smart Home a osvetlenie | 43 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED pásky > LED pásiky | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 38 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED panely a podhľadová svetla > LED podhľadové panely a svetlá | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 36 |
| Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál > 230V > Flexo šnúry | Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál | 32 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Vianocne osvetlenie > Vianočné reťaze > Batériové | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 30 |
| Elektro, Smart Home a osvetlenie > Jednozásuvkové > Jednozásuvkové 230V | Elektro, Smart Home a osvetlenie | 29 |
| Elektro, Smart Home a osvetlenie > Výsuvné a vstavané zásuvky | Elektro, Smart Home a osvetlenie | 28 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED žiarovky > E27 | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 28 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED stolové lampy | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 27 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Vianocne osvetlenie > Vianočné reťaze > Sieťové 230V | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 26 |
| Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál > 230V > Koncovky | Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál | 25 |
| Elektro, Smart Home a osvetlenie > Navíjacie bubny | Elektro, Smart Home a osvetlenie | 24 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Svietidlá > Nabíjacie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 23 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED pásky > Príslušenstvo | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 23 |
| Elektro, Smart Home a osvetlenie > Viaczásuvkové > Ostatné | Elektro, Smart Home a osvetlenie | 22 |
| TV, audio, video a foto technika > AV káble > Computer > USB | TV, audio, video a foto technika > AV káble | 22 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie > Vonkajšie osvetlenie > Prisadené osvetlenie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie | 22 |
| Energia a napájanie > Napájacie zdroje > USB adaptéry | Energia a napájanie > Napájacie zdroje | 21 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED žiarovky > E14 | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 17 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie > Technické osvetlenie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie | 15 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED pásky > Napájacie zdroje 12V | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 14 |
| Elektro, Smart Home a osvetlenie > Prepäťové ochrany | Elektro, Smart Home a osvetlenie | 13 |
| Dielňa, náradie a záhrada > Meracia technika > Multimetre a zkúšačky | Dielňa, náradie a záhrada > Meracia technika | 13 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED reflektory > Reflektory so stojanom | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 12 |
| Domáce spotrebiče > Vybavenie domácnosti | Domáce spotrebiče | 12 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED reflektory > Reflektory bez senzora | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 11 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Svietidlá > Čelové | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 11 |
| Elektro, Smart Home a osvetlenie > Záhradné stĺpiky | Elektro, Smart Home a osvetlenie | 11 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Aku náradie a batérie > Príslušenstvo | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Aku náradie a batérie | 11 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie > Kuchynské osvetlenie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie | 10 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Senzory a konektory | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 10 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie > Nočné a dekoratívne svetielka | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie | 10 |
| Auto-moto > Príslušenstvo do auta > Alkohol testery | Auto-moto > Príslušenstvo do auta | 10 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie > Vonkajšie osvetlenie > Solárne osvetlenie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie | 10 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie > Vonkajšie osvetlenie > Fasádne a záhradné osvetlenie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie | 10 |
| TV, audio, video a foto technika > AV káble > Video > HDMI | TV, audio, video a foto technika > AV káble | 9 |
| Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál > Izolačný materiál > Viazacie pásky | Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál | 9 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED trubicové žiarivky | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 9 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Priemyselné LED osvetlenie > High Bay | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 8 |
| Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál > 230V > Viacnásobné zásuvky | Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál | 8 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED žiarovky > GU10 | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 8 |
| Elektro, Smart Home a osvetlenie > Zabezpečenie – detektory a senzory > Kamery | Elektro, Smart Home a osvetlenie > Zabezpečenie – detektory a senzory | 7 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Svietidlá > Lampáše | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 6 |
| TV, audio, video a foto technika > TV stolíky a držiaky > Konzolové držiaky | TV, audio, video a foto technika > TV stolíky a držiaky | 6 |
| TV, audio, video a foto technika > Antény a satelity > Antény > Antény vonkajšie | TV, audio, video a foto technika > Antény a satelity | 6 |
| Energia a napájanie > Napájacie zdroje > Nabíjačky notebookov | Energia a napájanie > Napájacie zdroje | 6 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Svietidlá > Nenabíjacie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 6 |
| Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál > 230V > Vypínače a zásuvky > Slim | Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál | 6 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED panely a podhľadová svetla > Příslušenstvo | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 6 |
| TV, audio, video a foto technika > AV káble > Anténa > Anténne káble > COAX | TV, audio, video a foto technika > AV káble | 6 |
| TV, audio, video a foto technika > AV káble > Computer > UTP | TV, audio, video a foto technika > AV káble | 5 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED žiarovky > G9&G4 | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 5 |
| Energia a napájanie > Napájacie zdroje > Sieťové adaptéry | Energia a napájanie > Napájacie zdroje | 5 |
| Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál > 230V > Držiaky zásuviek | Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál | 5 |
| Domáce spotrebiče > Príslušenstvo, náhradné diely | Domáce spotrebiče | 5 |
| Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál > 230V > Vypínače a zásuvky > Do vlhka | Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál | 5 |
| Elektro, Smart Home a osvetlenie > Jednozásuvkové > Jednozásuvkové  400V | Elektro, Smart Home a osvetlenie | 4 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED reflektory > Reflektory so senzorom | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 4 |
| Domáce spotrebiče > Klimatizácia a vzduch > Sušiaky | Domáce spotrebiče > Klimatizácia a vzduch | 4 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie > Kúpeľňové osvetlenie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie | 4 |
| TV, audio, video a foto technika > TV stolíky a držiaky > Naklápacie držiaky | TV, audio, video a foto technika > TV stolíky a držiaky | 3 |
| Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál > Káble > Koaxiálne | Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál | 3 |
| Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál > 400V | Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál | 3 |
| TV, audio, video a foto technika > Antény a satelity > Antény > Antény izbové | TV, audio, video a foto technika > Antény a satelity | 3 |
| Domáce spotrebiče > Bezozónové | Domáce spotrebiče | 3 |
| Dielňa, náradie a záhrada > Meracia technika > Laserové vodováhy | Dielňa, náradie a záhrada > Meracia technika | 3 |
| Energia a napájanie > Napájacie zdroje > Pre mobily a tablety | Energia a napájanie > Napájacie zdroje | 3 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Priemyselné LED osvetlenie > LED lineárne osvetlenie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 3 |
| Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál > Izolačný materiál > Izolačné PVC pásky | Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál | 3 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED žiarovky > Ostatné svetelné zdroje | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 3 |
| TV, audio, video a foto technika > Antény a satelity > Anténne zdroje | TV, audio, video a foto technika > Antény a satelity | 2 |
| Domáce spotrebiče > Ozónové | Domáce spotrebiče | 2 |
| Energia a napájanie > Napájacie zdroje > Nabíjačky batérií | Energia a napájanie > Napájacie zdroje | 2 |
| TV, audio, video a foto technika > Antény a satelity > Aktívne a pasívne prvky | TV, audio, video a foto technika > Antény a satelity | 2 |
| Dielňa, náradie a záhrada > Meracia technika > Laserové merače vzdialenosti | Dielňa, náradie a záhrada > Meracia technika | 2 |
| TV, audio, video a foto technika > TV stolíky a držiaky > Fixné držiaky | TV, audio, video a foto technika > TV stolíky a držiaky | 2 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Aku náradie a batérie > Pily | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Aku náradie a batérie | 2 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > Svietidlá > Montážne a nabíjacie svetla | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá | 2 |
| TV, audio, video a foto technika > Antény a satelity > Anténne držiaky | TV, audio, video a foto technika > Antény a satelity | 2 |
| Auto-moto > Príslušenstvo do auta > Měniče napätia | Auto-moto > Príslušenstvo do auta | 2 |
| TV, audio, video a foto technika > AV káble > Anténa > Konektory a redukcie > COAX | TV, audio, video a foto technika > AV káble | 2 |
| TV, audio, video a foto technika > Antény a satelity > Anténne zásuvky | TV, audio, video a foto technika > Antény a satelity | 1 |
| Dielňa, náradie a záhrada > Meracia technika > Teplomery | Dielňa, náradie a záhrada > Meracia technika | 1 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie > Vonkajšie osvetlenie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie | 1 |
| TV, audio, video a foto technika > AV káble > Napájanie | TV, audio, video a foto technika > AV káble | 1 |
| Energia a napájanie > Napájacie zdroje > Powerbanky | Energia a napájanie > Napájacie zdroje | 1 |
| Dielňa, náradie a záhrada > Ručné a elektrické náradie > Aku náradie a batérie > Nožnice | Dielňa, náradie a záhrada > Ručné a elektrické náradie > Aku náradie a batérie | 1 |
| Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie > Núdzové osvetlenie | Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá > LED osvetlenie | 1 |
| Energia a napájanie > Fotovoltaika > Batérie a príslušenstvo | Energia a napájanie > Fotovoltaika | 1 |
| Energia a napájanie > Fotovoltaika > Meniče | Energia a napájanie > Fotovoltaika | 1 |
| TV, audio, video a foto technika > AV káble > Video > SCART > Káble | TV, audio, video a foto technika > AV káble | 1 |

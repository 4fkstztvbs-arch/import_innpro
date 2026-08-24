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

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
| TV, audio a video > Televízory > 39" - 42" (98 - 107 cm) | 1 | FINLUX 40FFI5661 SMART TV FULL HD TIVO |

# Nezaradené kategórie — kb

Vygenerované automaticky pri poslednom behu importu. Tieto kategórie z feedu sa
nezhodujú so žiadnou existujúcou kategóriou v `data/known-categories.json` (živý strom
Shoptetu) ani s jej blízkym pravopisným variantom — produkty pod nimi sa preto
**NEIMPORTUJÚ**, kým sa niekto nerozhodne, kam patria:
- ak ide o skutočne novú, žiadanú kategóriu → pridať ju do Shoptetu a znova spustiť
  `node scripts/build-known-categories.js <čerstvý export> data/known-categories.json`,
- ak má patriť pod existujúcu kategóriu inak pomenovanú → pridať záznam do
  `categoryRenamesByPath` v `scripts/kb-mapping.json`.

**1 nenapárovaných kategórií, 3 produktov nenaimportovaných.**

| Kategória z feedu | Počet produktov | Príklady produktov |
|---|---|---|
| Domáce spotrebiče > Malé spotrebiče > Žehličky > Dávkovače mydlá | 3 | GLOX Dávkovač mýdla Pěna NEREZ černý; GLOX Dávkovač mýdla Pěna NEREZ bílý; Glox FM19B bezdotykový dávkovač pěnového |

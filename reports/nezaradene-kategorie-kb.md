# Nezaradené kategórie — kb

Vygenerované automaticky pri poslednom behu importu. Tieto kategórie z feedu sa
nezhodujú so žiadnou existujúcou kategóriou v `data/known-categories.json` (živý strom
Shoptetu) ani s jej blízkym pravopisným variantom — produkty pod nimi sa preto
**NEIMPORTUJÚ**, kým sa niekto nerozhodne, kam patria:
- ak ide o skutočne novú, žiadanú kategóriu → pridať ju do Shoptetu a znova spustiť
  `node scripts/build-known-categories.js <čerstvý export> data/known-categories.json`,
- ak má patriť pod existujúcu kategóriu inak pomenovanú → pridať záznam do
  `categoryRenamesByPath` v `scripts/kb-mapping.json`.

**2 nenapárovaných kategórií, 2 produktov nenaimportovaných.**

| Kategória z feedu | Počet produktov | Príklady produktov |
|---|---|---|
| Zdravie a starostlivosť > Masážne prístroje > Masážne pištole | 1 | TrueLife RelaxGun G3 |
| TV, audio a video > Audio - video káble > CINCH RCA káble | 1 | InAkustik 671934 Kabel jack 3,5 mm 1,5 m |

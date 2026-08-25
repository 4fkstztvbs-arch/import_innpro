# Nezaradené kategórie — innpro

Vygenerované automaticky pri poslednom behu importu. Tieto kategórie z feedu sa
nezhodujú so žiadnou existujúcou kategóriou v `data/known-categories.json` (živý strom
Shoptetu) ani s jej blízkym pravopisným variantom — produkty pod nimi sa preto
**NEIMPORTUJÚ**, kým sa niekto nerozhodne, kam patria:
- ak ide o skutočne novú, žiadanú kategóriu → pridať ju do Shoptetu a znova spustiť
  `node scripts/build-known-categories.js <čerstvý export> data/known-categories.json`,
- ak má patriť pod existujúcu kategóriu inak pomenovanú → pridať záznam do
  `categoryRenamesByPath` v `scripts/innpro-mapping.json`.

**1 nenapárovaných kategórií, 1 produktov nenaimportovaných.**

| Kategória z feedu | Počet produktov | Príklady produktov |
|---|---|---|
| TV, audio a video > Mobily a tablety > Selfie tyče > statívy > stojany > Statívy a kruhové svetlá | 1 | Skladací statív Puluz pre mobilné telefóny |

## Automaticky napárované na existujúcu kategóriu (blízky pravopisný variant)

| Kategória z feedu | Napárované na | Zhoda | Počet produktov |
|---|---|---|---|
| TV, audio a video > Mobily a tablety > Kable USB I > Iné | TV, audio a video > Mobily a tablety > Tablety > Iné | 95% | 1 |

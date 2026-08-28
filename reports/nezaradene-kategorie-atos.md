# Nezaradené kategórie — atos

Vygenerované automaticky pri poslednom behu importu. Tieto kategórie z feedu sa
nezhodujú so žiadnou existujúcou kategóriou v `data/known-categories.json` (živý strom
Shoptetu) ani s jej blízkym pravopisným variantom — produkty pod nimi sa preto
**NEIMPORTUJÚ**, kým sa niekto nerozhodne, kam patria:
- ak ide o skutočne novú, žiadanú kategóriu → pridať ju do Shoptetu a znova spustiť
  `node scripts/build-known-categories.js <čerstvý export> data/known-categories.json`,
- ak má patriť pod existujúcu kategóriu inak pomenovanú → pridať záznam do
  `categoryRenamesByPath` v `scripts/atos-mapping.json`.

**3 nenapárovaných kategórií, 48 produktov nenaimportovaných.**

| Kategória z feedu | Počet produktov | Príklady produktov |
|---|---|---|
| Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Držiaky a montážne krabice | 37 | CP-PR-124 Přídavný montážní nástavec otevřený; CP PLUS CP-PR-41 Přídavný montážní nástavec otevřený (110mm); Přídavný montážní nástavec CP-PR-62; CP-PR-78 Držák na zeď pro dome kamery; CP-PR-83 Držák na zeď pro dome kamery |
| Zdravie a starostlivosť > Chovateľské potreby > Pelíšky | 10 | Pelíšek REBEL ANIMALS RA-1102-L  80x65x17  pro psy a kočky  pohovka; Pelíšek REBEL ANIMALS RA-1102-M 70x55x16  pro psy a kočky  pohovka; Montážní krabice na kameru  KRUGER & MATZ  KM-PPA100 pro dome a bullet; Zátěžová deka Rebel RBY-2000-5   5 kg (100x150 cm) vesmír; Pelíšek REBEL ANIMALS RA-1102-S  60x45x14  pro psy a kočky pohovka |
| TV, audio a video > Televízory > 39" - 42" (98 - 107 cm) | 1 | FINLUX 40FFI5661 SMART TV FULL HD TIVO |

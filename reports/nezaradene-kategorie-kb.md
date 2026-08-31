# Nezaradené kategórie — kb

Vygenerované automaticky pri poslednom behu importu. Tieto kategórie z feedu sa
nezhodujú so žiadnou existujúcou kategóriou v `data/known-categories.json` (živý strom
Shoptetu) ani s jej blízkym pravopisným variantom — produkty pod nimi sa preto
**NEIMPORTUJÚ**, kým sa niekto nerozhodne, kam patria:
- ak ide o skutočne novú, žiadanú kategóriu → pridať ju do Shoptetu a znova spustiť
  `node scripts/build-known-categories.js <čerstvý export> data/known-categories.json`,
- ak má patriť pod existujúcu kategóriu inak pomenovanú → pridať záznam do
  `categoryRenamesByPath` v `scripts/kb-mapping.json`.

**3 nenapárovaných kategórií, 3 produktov nenaimportovaných.**

| Kategória z feedu | Počet produktov | Príklady produktov |
|---|---|---|
| Zdravie a starostlivosť > Masážne prístroje > Masážne pištole | 1 | TrueLife RelaxGun G3 |
| TV, audio a video > Audio - video káble > CINCH RCA káble | 1 | InAkustik 671934 Kabel jack 3,5 mm 1,5 m |
| Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Čaje | 1 | ScanPart Čistící tablety 10 ks pro láhve |

## Automaticky napárované na existujúcu kategóriu (blízky pravopisný variant)

| Kategória z feedu | Napárované na | Zhoda | Počet produktov |
|---|---|---|---|
| TV, audio a video > Reproduktory > Bezdrátové reproduktory | TV, audio a video > Reproduktory > Drátové reproduktory | 87% | 69 |
| TV, audio a video > Digitálny príjem > DVB-T antény | TV, audio a video > Antény a satelity > Antény > DVB-T antény | 85% | 13 |
| TV, audio a video > Reproduktory > Párty reproduktory | TV, audio a video > Audio technika > Reproduktory > Párty reproduktory | 90% | 11 |
| Záhrada > Záhradné potreby > Záhradné náradie > Sady záhradného náradie | Záhrada > Záhradné náradie > Sady záhradného náradie | 88% | 1 |

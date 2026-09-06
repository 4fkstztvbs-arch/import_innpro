# Nezaradené kategórie — kb

Vygenerované automaticky pri poslednom behu importu. Tieto kategórie z feedu sa
nezhodujú so žiadnou existujúcou kategóriou v `data/known-categories.json` (živý strom
Shoptetu) ani s jej blízkym pravopisným variantom — produkty pod nimi sa preto
**NEIMPORTUJÚ**, kým sa niekto nerozhodne, kam patria:
- ak ide o skutočne novú, žiadanú kategóriu → pridať ju do Shoptetu a znova spustiť
  `node scripts/build-known-categories.js <čerstvý export> data/known-categories.json`,
- ak má patriť pod existujúcu kategóriu inak pomenovanú → pridať záznam do
  `categoryRenamesByPath` v `scripts/kb-mapping.json`.

**6 nenapárovaných kategórií, 6 produktov nenaimportovaných.**

| Kategória z feedu | Počet produktov | Príklady produktov |
|---|---|---|
| Domáce spotrebiče > Malé spotrebiče > Nádobie > Zdobičky, Vykrajovačky | 1 | Westmark 2822 2270 Vykrajovač  "Gentle" |
| Náradie a dielňa > Náradie > Pneumatické a hydraulické náradie > Nastreľovačky a Nitovačky | 1 | Güde 40220 Sponkovačka KOMBI sada |
| TV, audio a video > Audio - video káble > CINCH RCA káble | 1 | InAkustik 671934 Kabel jack 3,5 mm 1,5 m |
| Zdravie a starostlivosť > Masážne prístroje > Masážne pištole | 1 | TrueLife RelaxGun G3 |
| Náradie a dielňa > Náradie > Elektrické náradie > Zváračky a rezačky > Elektrodové | 1 | Güde 20001 Elektrodová svářečka GE145W/A |
| Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Čaje | 1 | ScanPart Čistící tablety 10 ks pro láhve |

## Automaticky napárované na existujúcu kategóriu (blízky pravopisný variant)

| Kategória z feedu | Napárované na | Zhoda | Počet produktov |
|---|---|---|---|
| TV, audio a video > Reproduktory > Bezdrátové reproduktory | TV, audio a video > Reproduktory > Drátové reproduktory | 87% | 70 |
| TV, audio a video > Digitálny príjem > DVB-T antény | TV, audio a video > Antény a satelity > Antény > DVB-T antény | 85% | 12 |
| TV, audio a video > Reproduktory > Párty reproduktory | TV, audio a video > Audio technika > Reproduktory > Párty reproduktory | 90% | 10 |
| Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Lúskačky | Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kuchynské pomôcky > Lúskačky | 89% | 1 |

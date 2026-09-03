# Nezaradené kategórie — innpro

Vygenerované automaticky pri poslednom behu importu. Tieto kategórie z feedu sa
nezhodujú so žiadnou existujúcou kategóriou v `data/known-categories.json` (živý strom
Shoptetu) ani s jej blízkym pravopisným variantom — produkty pod nimi sa preto
**NEIMPORTUJÚ**, kým sa niekto nerozhodne, kam patria:
- ak ide o skutočne novú, žiadanú kategóriu → pridať ju do Shoptetu a znova spustiť
  `node scripts/build-known-categories.js <čerstvý export> data/known-categories.json`,
- ak má patriť pod existujúcu kategóriu inak pomenovanú → pridať záznam do
  `categoryRenamesByPath` v `scripts/innpro-mapping.json`.

**6 nenapárovaných kategórií, 289 produktov nenaimportovaných.**

| Kategória z feedu | Počet produktov | Príklady produktov |
|---|---|---|
| Mobily, smart hodinky a tablety > Obaly na telefóny > Ochranné puzdrá pre smartfóny | 214 | Baseus Matné puzdro pre iPhone 13 PRO (čierne) + tvrdené sklo; Joyroom JR-14Q3 Puzdro pre Apple iPhone 14 Plus 6,7 "(čierne); Joyroom JR-14D2 priehľadné puzdro pre iPhone 14 Pro; Joyroom JR-14D4 priehľadné puzdro pre iPhone 14 Pro Max; Joyroom JR-14D5 priehľadné magnetické puzdro pre iPhone 14 |
| Mobily, smart hodinky a tablety > Tvrdené sklo a fólie > Pre smartfóny | 33 | Baseus 0,3 mm celosklenená fólia z tvrdeného skla (balenie 2 ks) pre iPhone XS Max / 11 Pro Max 6,5 palca; Tvrdené sklo Joyroom JR-DH07 pre Apple iPhone 14 Plus 6,7" (5 ks); Tvrdené sklo na ochranu očí Joyroom JR-G03 pre Apple iPhone 14 Plus 6,7"; Tvrdené sklo Joyroom JR-H03 pre Apple iPhone 14 Plus 6,7 "; Tvrdené sklo Joyroom JR-P03 pre Apple iPhone 14 Plus 6,7 " |
| Počítače a notebooky > Držiaky na TV | 18 | TV mount 26-60" Perlesmith PSMFK12; TV mount 26-60" Perlesmith PSMFK1-EU; TV mount 23-60" Perlesmith PSMTK1-EU; TV mount 37-82" Perlesmith PSLTK1; TV mount 37-75" Perlesmith PSTVS13 |
| Počítače a notebooky > Myši, klávesnica | 13 | ONIKUMA CW905 Pink 2.4G Wireless Gaming Mouse; ONIKUMA RGB Wired Gaming Mouse CW905 Purple; Herná myš Onikuma CW917 (čierna); Herná myš Onikuma CW917 (biela); Klávesnica Onikuma G55 (čierna) (QWERTY) |
| Mobily, smart hodinky a tablety > Kable USB I > USB na USB-C | 10 | Kabel Flash Charge USB do Lightning Joyroom SA26-AL3 /3A / 1m (čierny); Kábel Star-Light USB C do USB-C Joyroom SA27-CC5 / 100W / 1,2 m (čierny); Kábel Colorful USB do Lightning Joyroom SA29-AL3 / 3A / 1,2 m (čierny); Kábel Pioneer USB-C do USB C Joyroom SA31-CC5 / 240W / 1,2 m (čierny); Kábel S-AC027A14 USB do USB C Joyroom / 3A / 1,2 m (fialový) |
| Mobily, smart hodinky a tablety > Selfie tyče > statívy > stojany > Statívy a kruhové svetlá | 1 | Skladací statív Puluz pre mobilné telefóny |

## Automaticky napárované na existujúcu kategóriu (blízky pravopisný variant)

| Kategória z feedu | Napárované na | Zhoda | Počet produktov |
|---|---|---|---|
| Foto a príslušenstvo > Selfie tyče > statívy > držiaky > Postroje, upevňovacie prvky a držiaky | Foto a príslušenstvo > Selfie tyče > Postroje, upevňovacie prvky a držiaky | 90% | 94 |
| Foto a príslušenstvo > Selfie tyče > statívy > držiaky > Statívy | Foto a príslušenstvo > Selfie tyče > Statívy | 90% | 51 |
| Mobily, smart hodinky a tablety > Kable USB I > USB na Lightning | Mobily, smart hodinky a tablety > USB káble > USB na Lightning | 94% | 22 |
| Foto a príslušenstvo > Selfie tyče > statívy > držiaky > Selfie tyče a držiaky | Foto a príslušenstvo > Selfie tyče > Selfie tyče a držiaky | 90% | 19 |
| Foto a príslušenstvo > Selfie tyče > statívy > držiaky > Adaptéry | Foto a príslušenstvo > Selfie tyče > Adaptéry | 90% | 16 |
| Mobily, smart hodinky a tablety > Selfie tyče > statívy > stojany > Iné | Mobily, smart hodinky a tablety > Tablety > Iné | 88% | 15 |
| Mobily, smart hodinky a tablety > Kable USB I > 3v1 Micro > USB-C > Lightning | Mobily, smart hodinky a tablety > USB káble > 3v1 Micro > USB-C > Lightning | 96% | 11 |
| Mobily, smart hodinky a tablety > Obaly na telefóny > Vodotesné puzdro | Mobily, smart hodinky a tablety > Príslušenstvo > Puzdrá na mobilné telefóny > Vodotesné puzdro | 89% | 8 |
| Mobily, smart hodinky a tablety > Selfie tyče > statívy > stojany > Selfie stojany | Mobily, smart hodinky a tablety > Selfie tyče > Selfie stojany | 92% | 8 |
| Mobily, smart hodinky a tablety > Selfie tyče > statívy > stojany > Podložky a stojany | Mobily, smart hodinky a tablety > Selfie tyče > Podložky a stojany | 92% | 7 |
| Mobily, smart hodinky a tablety > Kable USB I > USB-C na Lightning | Mobily, smart hodinky a tablety > USB káble > USB-C na Lightning | 94% | 6 |
| Mobily, smart hodinky a tablety > Tvrdené sklo a fólie > Pre tablety | Mobily, smart hodinky a tablety > Príslušenstvo > Tvrdené sklá pre mobilné telefóny > Pre tablety | 88% | 6 |
| Mobily, smart hodinky a tablety > Obaly na telefóny > Ochranné puzdrá pre tablety | Mobily, smart hodinky a tablety > Príslušenstvo > Puzdrá na mobilné telefóny > Ochranné puzdrá pre tablety | 89% | 6 |
| Mobily, smart hodinky a tablety > Kable USB I > USB na Micro USB | Mobily, smart hodinky a tablety > USB káble > USB na Micro USB | 94% | 4 |
| Mobily, smart hodinky a tablety > Kable USB I > USB-C na USB-C | Mobily, smart hodinky a tablety > USB káble > USB-C na USB-C | 94% | 3 |
| Foto a príslušenstvo > Selfie tyče > statívy > držiaky > Kruhové svetlá | Foto a príslušenstvo > Selfie tyče > Kruhové svetlá | 90% | 3 |
| Mobily, smart hodinky a tablety > Selfie tyče > statívy > stojany > Adaptéry | Mobily, smart hodinky a tablety > Selfie tyče > Adaptéry | 92% | 3 |
| Mobily, smart hodinky a tablety > Kable USB I > Iné | Mobily, smart hodinky a tablety > Tablety > Iné | 95% | 1 |

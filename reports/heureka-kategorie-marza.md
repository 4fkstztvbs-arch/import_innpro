# Kategórie podľa marže — návrh, ktoré vypnúť z Heureka CPC feedu

Vygenerované: 2026-08-11T11:35:49.020Z

Marža počítaná z aktuálnych `output/*.xml` (predajná cena bez DPH vs. nákupná cena bez DPH), agregovaná podľa najvrchnejšej kategórie. Produkty pod 0,66 € nemajú CPC prekliky spoplatnené vôbec — pri kategóriách s vysokým podielom takýchto produktov je riziko nižšie, aj keď marža vychádza nízko.

## Odporúčam zvážiť vypnutie / nízky CPC strop (priemerný zisk na kus < 5 €)

Zoradené podľa najnižšieho zisku na kus — to je suma, ktorú vám môže jeden neúspešný CPC klik reálne "zjesť".

| Kategória | Produktov | Zisk/ks | Marža | Priemerná cena | Podiel pod 0,66 € |
|---|---:|---:|---:|---:|---:|
| Auto-moto | 2108 | 3.67 € | 13.4 % | 39.21 € | 1 % |
| Elektroinštalačný materiál | 4264 | 3.88 € | 19.7 % | 34.81 € | 4 % |
| Náradie a dielňa | 2040 | 4.57 € | 12.7 % | 50.20 € | 5 % |
| Zdravie a starostlivosť | 833 | 4.71 € | 11.4 % | 57.67 € | 1 % |
| Záhrada | 688 | 4.74 € | 13.5 % | 51.51 € | 0 % |

## Bezpečnejšie kategórie (zisk na kus ≥ 5 €) — znesú CPC klik lepšie

| Kategória | Produktov | Zisk/ks | Marža |
|---|---:|---:|---:|
| Bezpečnosť a smart domácnosť | 1045 | 6.13 € | 14.6 % |
| Domáce spotrebiče | 3020 | 7.17 € | 10.5 % |
| Fotovoltaika a energie | 1066 | 8.99 € | 13.8 % |
| Dróny a RC modely | 374 | 9.07 € | 14.6 % |
| TV, audio a video | 7281 | 9.10 € | 13.4 % |
| Šport, hračky a voľný čas | 1372 | 12.26 € | 12.1 % |
| Kreatívne technológie | 627 | 67.98 € | 14.1 % |

## Bez dostatočných dát o marži (2 kategórií)

Chýba nákupná cena pri dosť produktoch na spoľahlivý odhad — netreba brať priemer vážne, skontrolovať ručne ak sú objemovo významné.

| Kategória | Produktov | Pokrytie marže |
|---|---:|---:|
| (bez kategórie) | 4 | 4 |
| Profesionálna audio technika | 1800 | 0 |

## Ako to použiť

1. V Shoptet administrácii (Marketing → Feedy → Heureka, alebo nastavenia kategórie) vypnúť "zahrnúť do Heureka feedu" pri kategóriách z prvej tabuľky — najmä tých s vysokým počtom produktov a nízkym podielom pod 0,66 €.
2. Pri kategóriách, ktoré chcete nechať zapnuté, ale opatrne, nastaviť v Heureka administrácii nízky max. CPC namiesto úplného vypnutia.
3. Plný zoznam všetkých kategórií so všetkými číslami je v `reports/heureka-kategorie-marza.csv`.

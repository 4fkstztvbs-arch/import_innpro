# Zlúčenie duplicitných kategórií — 2026-08-25

Na žiadosť: "je nezmysel mať vnorené rovnaké kategórie pod sebou alebo mať kategóriu na viacerých miestach." Každá dvojica nižšie bola pred zlúčením overená proti `data/known-categories.json` (živý export vášho Shoptet stromu) — obe strany reálne existovali ako samostatné kategórie v administrácii.

Mechanizmus: nový `scripts/collapse-duplicate-categories.js` prepíše kategóriu A na kategóriu B priamo vo výstupnom XML každého dodávateľa, zakaždým po jeho behu (pridané ako krok do všetkých `*-sync.yml`). Beží automaticky od teraz, netreba nič ručne spúšťať.

## Čo sa zlúčilo (teraz, jednorazovo na existujúcich `output/*.xml`)

| Zrušená kategória | Produktov | Zlúčené do |
|---|---:|---|
| TV, audio a video > Audio technika > Slúchadlá > **Slúchadlá** | 87 | TV, audio a video > Audio technika > Slúchadlá |
| Profesionálna audio technika > JTS > Slúchadlá > **Slúchadlá** | 3 | Profesionálna audio technika > JTS > Slúchadlá |
| Záhrada > Odpudzovače a lapače hmyzu > **Odpudzovače a lapače hmyzu** | 36 | Záhrada > Odpudzovače a lapače hmyzu |
| TV, audio a video > Mobily a tablety > Smart hodinky > **Smart hodinky** | 58 | TV, audio a video > Mobily a tablety > Smart hodinky |
| TV, audio a video > AV káble > **AV káble** | 28 | TV, audio a video > AV káble |
| TV, audio a video > Počítače a príslušenstvo > Tablety > **Tablety** | 10 | TV, audio a video > Počítače a príslušenstvo > Tablety |
| Elektroinštalačný materiál > Osvetlenie > **LED žiarovky** (malé ž, plochá) | 231 | Elektroinštalačný materiál > Osvetlenie > LED Žiarovky (veľké Ž, delená na E14/E27/GU10...) |
| TV, audio a video > Príslušenstvo k TV, audio, video > **Diaľkové ovládače** | 8 | TV, audio a video > Diaľkové ovládače |
| TV, audio a video > **Reproduktory** (holé) | 82 | TV, audio a video > Audio technika > Reproduktory |
| Bezpečnosť a smart domácnosť > Smart domácnosť > **IP kamery** | 20 | Bezpečnosť a smart domácnosť > IP kamery |
| TV, audio a video > Počítače a príslušenstvo > Sieťové prvky > **IP kamery** | 3 | Bezpečnosť a smart domácnosť > IP kamery |
| Bezpečnosť a smart domácnosť > Smart domácnosť > **Robotické vysávače** | 25 | Domáce spotrebiče > Malé spotrebiče > Vysávače > Robotické vysávače |

**Spolu: 12 kategórií zrušených, 591 zaradení produktov presunutých.**

## Dôležité — čo treba urobiť ručne v Shoptete

Náš XML feed vie kategórie len pridávať/aktualizovať, **nikdy nie mazať**. Tých 12 zrušených kategórií (ľavý stĺpec vyššie) teda po najbližšom behu všetkých dodávateľov **ostane v Shoptet administrácii prázdnych** (0 produktov) — treba ich tam ručne skryť alebo zmazať. Presné názvy na vyhľadanie v administrácii sú v ľavom stĺpci tabuľky vyššie.

## Čo sa NEZLUČOVALO (a prečo)

Pri prvej kontrole som mylne označil viacero kategórií za "duplicity", no po overení proti živému stromu ide o zámernú štruktúru (všeobecná/ostatná podkategória vedľa konkrétnych, napr. "Osvetlenie" pod Elektroinštalačným materiálom vs pod Bezpečnosťou a smart domácnosťou vs pod Outdoor výbavou — každá je iný kontext). Tie som nechal bez zásahu.

Hlboké zanorenie (6 úrovní) v `Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > <značka auta>` je tiež ponechané — bez značky vozidla by sa aretačné prípravky nedali rozlíšiť, nejde o chybu.

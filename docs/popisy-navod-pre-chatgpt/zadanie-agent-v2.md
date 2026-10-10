# Zadanie v2: bohaté slovenské popisy produktov (PremiumStore.sk)

Vstup: JSON súbor so skupinou produktov jednej kategórie (kód, názov, EAN, údaje z feedu dodávateľa, obrázky z feedu).
Výstup: pre KAŽDÝ produkt jeden HTML popis v slovenčine.

Vzor štruktúry a tried: /mnt/project-files/televizory/popisy/vystup/skupina-03.json (hotové popisy televízorov; vezmi 1 až 2 ako vzor) a pilot /mnt/project-files/popisy/pilot-bohate-popisy-2026-10-09/import-pilot-5-produktov.csv. Triedy: ps-product-catalog (id="ps-<slug>"), psc-hero, psc-hero-copy, psc-eyebrow, psc-facts, psc-nav, psc-row, psc-section psc-soft, psc-cards/psc-card, psc-note, psc-specs/psc-spec, details/summary FAQ. Žiadny <script>/<style>, žiadne externé odkazy. Odkazy na prelinkovanie (iné modely, súvisiace kategórie) pridávam sám neskôr, ty ich nepíš. Neuzatváraj popis blokom "Ďalšie produkty".
Kontrolný zoznam: /mnt/project-files/referencie/kvasnicka-konverzia-ranking-v-dobe-ai.txt.

PRAVIDLÁ OBSAHU (od majiteľa, záväzné):
0. POVINNÉ: pre každý model (alebo sériu) spusti aspoň jedno WebSearch/WebFetch na stránku výrobcu alebo overené špecifikácie a výsledok premietni do popisu; popis len z feedu je podpriemerný a nežiaduci. Ak pre model naozaj nič nenájdeš, použi aspoň všeobecnú znalosť typu produktu (použitie, výber, údržba), nie vymyslené čísla.
1. Pre každý model hľadaj na webe (WebSearch/WebFetch) stránku výrobcu a špecifikácie. Použi len OVERENÉ pozitívne fakty. Čo nevieš overiť, jednoducho NESPOMÍNAJ. Nikdy nepíš vety typu "neuvádzame", "údaje sa líšia", "v podkladoch", "podľa feedu/dodávateľa", "overte si", "nepodarilo sa overiť", "Vo feede neuvedený".
2. ŽIADNE upozornenia na nevýhody ani "chyby": nepíš o vysokej spotrebe, ani o energetickej triede (nepíš ju vôbec, ani v tabuľke), ani o chýbajúcich vstupoch/funkciách, ani blok "Čo produkt nerieši / Dôležité pred výberom". Píš o tom, v čom je produkt dobrý, pre koho je a ako sa používa. Nepíš FAQ s negatívnou odpoveďou (Nie, nepodporuje...).
3. Vlastnými slovami, po slovensky (nie preklad), vecne a presvedčivo, informačne bohato. Aspoň 3 údaje špecifické pre model a 4 otázky FAQ s pozitívnou/informačnou odpoveďou (rozmery, inštalácia, údržba, použitie, balenie, záruka).
4. Obrázky: IBA URL z poľa images (hero = prvý). Ak žiadny nie je, hero bez <img>.
5. V parametroch vždy: kód modelu, EAN, záruka (z feedu) a najdôležitejšie technické údaje, ktoré si overil. Nepíš ceny, dostupnosť ani dodacie lehoty.
6. Slovenské typografické úvodzovky, desatinná čiarka, medzera pred jednotkou.
7. Zoznam použitých zdrojov zapíš do súboru zdroje-skupina-NN.md vo vystup/ danej kategórie (len interné poznámky, nie do popisu).

Výstupný formát: vystup/skupina-NN.json v priečinku kategórie = objekt {"KÓD": "<div class=\"ps-product-catalog\" ...>...</div>", ...} pre všetky kódy zo vstupu (presne ako vo vstupe). Validný JSON, popis končí uzatváracím </div>, za ním nič. Neinštaluj nič, nepoužívaj git. Pred zápisom skontroluj, že nepíšeš cudzí súbor.
Na konci vráť jednu vetu: počet hotových popisov.

# Cenové anomálie vynechané z feedu — atos — 2026-08-29

Tieto produkty boli vynechané z tohto importu — pravdepodobne chyba vo feede dodávateľa, nie skutočná zmena ceny. Treba ručne overiť a prípadne opraviť/vylúčiť natrvalo.

**Poznámka (2026-08-29, dodatočná úprava):** pôvodne tento report obsahoval 144 produktov — 135 z nich boli legitímne prechody zo starej (rozbitej nákup×markup) ceny na novú, správnu `PRICE`-based cenu; referenčná cena bola sama založená na rozbitom vzorci, takže oprava vyzerala ako extrémny skok. Ručne overené a doplnené do `output/atos.xml` (commit `ad1a5e4`). Zostáva tu len 9 produktov so skutočne nulovou/neplatnou cenou (žiadne použiteľné `PRICE` ani `PURCHASE_PRICE` vo feede) — tie ostávajú správne vylúčené.

| Kód | EAN | Názov | Dôvod | Referenčná cena | Nová cena | Pomer | Vzorka |
|---|---|---|---|---:|---:|---:|---:|
| ELE-1000427 | 8595177500108 | Vrut (ZH) kříž 3x13 zapuštěná hlava | nulová/neplatná cena |  | 0.00 € |  |  |
| ELE-1000428 | 8595177530136 | Vrut (PZ) kříž 3x13 půlkulatá hlava | nulová/neplatná cena |  | 0.00 € |  |  |
| ELE-1000426 | 8592679617884 | Vrut (PH) combi 3x16 půlkulatá hlava | nulová/neplatná cena |  | 0.00 € |  |  |
| INSPRICH6 | 8595563712993 | Příchytka kabelová 6 mm bílá | nulová/neplatná cena |  | 0.00 € |  |  |
| INSPRICH7 | 8595563716526 | Příchytka kabelová 7 mm bílá | nulová/neplatná cena |  | 0.00 € |  |  |
| IST-DBSKAIR0011 | 8595689802837 | Kaon MZ-52 - DOTOVANÝ PŘIJÍMAČ | nulová/neplatná cena |  | 0.00 € |  |  |
| TOC-SX1182 | 8595697702914 | Multifunkční sada k demontáži čalounění a interiéru MECHANIC TRIM SET 38, 38ks S | nulová/neplatná cena |  | 0.00 € |  |  |
| TIP-03040081 | 8595563712832 | Pásek stahovací standard  150x3.5mm  černý | nulová/neplatná cena |  | 0.00 € |  |  |
| TIP-03040082 | 8595563716595 | Pásek stahovací standard  150x3.5mm  přírodní | nulová/neplatná cena |  | 0.00 € |  |  |

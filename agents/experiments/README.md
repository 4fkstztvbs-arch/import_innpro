# Experimenty

Jeden experiment je jeden súbor `E-RRRRMMDD-<krátky-názov>.md`. Zakladá ho rola, ktorá zmenu robí, vyhodnocuje rola meranie. Šablóna: [_SABLONA.md](_SABLONA.md).

## Typy

| Typ | Kedy | Ako sa meria |
|---|---|---|
| `seo-skupiny` | Titulky, meta, názvy, popisy, texty kategórií | Stránky sa rozdelia na TEST a KONTROLA s podobnými zobrazeniami a pozíciou. Porovná sa zmena CTR a pozície pred a po v oboch skupinách (rozdiel rozdielov). Dáta zo Search Console po stránkach. |
| `ab-web` | Šablóna, rozloženie stránky, košík | Návštevníci sa náhodne delia na vetvy A a B skriptom v `assets/ux/`, vetva sa posiela do GA4 udalosťou `ps_experiment`. Porovná sa konverzia vetiev. |
| `pred-po` | Keď sa kontrolná skupina nedá zostaviť | Len porovnanie pred a po. Výsledok je vždy „súvisí so zmenou“, nikdy dôkaz. Používať výnimočne. |

## Pravidlá

- Hypotéza a hlavná metrika sa zapíšu **pred** nasadením a potom sa nemenia.
- Minimálne veľkosti skupín a dĺžka sú v `config.json` (`experimenty`). Štandardná dĺžka je 28 dní, najmenej 14. Obdobie pred a po má rovnakú dĺžku a rovnaké dni v týždni.
- Stránky v skupinách TEST aj KONTROLA nikto nemení až do vyhodnotenia. Preto má každý experiment zoznam kódov a URL v súbore `E-...-skupiny.csv` (stĺpce `skupina;kod;url`).
- Poistky sleduje meranie denne. Stránka, ktorú poistka vráti, sa v experimente označí a z vyhodnotenia vypadne.
- Verdikt: `ponechat-a-rozsirit` (zlepšenie je štatisticky významné a poistky nezasiahli), `vratit` (významné zhoršenie), `nerozhodne` (ostatné; zmena ostáva, ale postup sa nerozširuje bez nového testu).
- Súbežné vplyvy (sezóna, Black Friday, importy, iné zmeny na tých istých stránkach) sa uvedú vo vyhodnotení.

## Výpočet

```
node agents/tools/experiment-stats.js seo data.json     # seo-skupiny
node agents/tools/experiment-stats.js ab data.json      # ab-web
```

Formát vstupu je v [tools/README.md](../tools/README.md).

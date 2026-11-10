# Reklamné kanály PremiumStore.sk – verejný súhrn (2026-11-10)

Verejný súbor: len relatívne zmeny a návrhy úloh. Absolútne čísla (tržby, objednávky, náklady) sú v súkromnom priečinku projektu.
Obdobie: posledných 30 dní vs. predchádzajúcich 30 dní, zdroj GA4. Nič sa nemenilo, len čítanie.

## Medzery
- Heureka administrácia a Google Ads nie sú dostupné (chýba Chrome s prihlásením, Google Ads nie je pripojený do Korzaro), preto nie sú dáta o nákladoch a nedá sa počítať ROAS.

## Zistenia (relatívne)
- Google CPC: tržby rastú (+16 %) pri menšom počte relácií (−9 %); kanál je zdravý.
- Heureka referral: relácie −50 %, tržby −44 %. Viaceré kategórie majú návštevnosť bez objednávok.
- shoptet / cpc: veľmi nízka kvalita návštev, takmer žiadna konverzia.
- Merchant Center: približne 1,9 % produktov zamietnutých.
- Meranie: časť relácií bez priradenia (not set) a kampaň s číselným ID namiesto názvu.
- Organic Search: tržby −25 %. AI asistenti (ChatGPT): malý objem, vysoká hodnota objednávky.

## Návrhy úloh
| Názov | Prečo | Očakávaný dopad | Náročnosť | Komu |
|---|---|---|---|---|
| Opraviť UTM / auto-tagging | not set relácie a číselná kampaň | Presnejšie meranie | nízka | meranie |
| Opraviť zamietnuté produkty v Merchant Center | ~1,9 % katalógu zamietnutých | Viac zobrazení vo free listings | stredná | obsah |
| Export nákladov Heureky a Google Ads | Chýba ROAS | Odblokuje návrhy N1–N5 (schvaľuje Martin) | nízka | reklama |
| Prešetriť pokles Heureka referral | −50 % relácií | Obnova návštevnosti | stredná | reklama |
| Skontrolovať shoptet/cpc kampaň | nízka kvalita | Prípadná úspora (schvaľuje Martin) | nízka | reklama |
| Štruktúrované dáta a FAQ pre AI asistentov | ChatGPT prináša hodnotné objednávky | Viac AI návštev | stredná | seo |
| Prešetriť pokles organiky | tržby −25 % | Obnova SEO | stredná | seo |

## Doplnenie: Heureka export (relatívne)
- Heureka je efektívny kanál (ROAS rádovo 15–20), ale návštevy a ROAS klesajú od augusta do októbra (ROAS približne −26 %).
- Zhruba 3/4 nákladov ide na produkty bez objednávky; reálne problémových je ~100 produktov (~18 % nákladov) a ~24 kategórií bez objednávky.
- Tržby sú koncentrované: top 10 produktov ≈ štvrtina tržieb. Najlepší pomer výkonu: reprosústavy, monitory, svetlá, tlačiarne štítkov, štúdiové svetlá, zavážacie loďky.
- Atribúcia tržieb Heureka vs. GA4 sa veľmi líši – úloha pre meranie.

Návrhy úloh (doplnenie):
| Názov | Prečo | Dopad | Náročnosť | Komu |
|---|---|---|---|---|
| Heureka hidden pre produkty bez objednávky | ~18 % nákladov bez objednávok | Úspora (schvaľuje Martin) | nízka | reklama |
| Zvýšiť CPC v kategóriách s najvyšším ROAS | Vysoká návratnosť | Viac objednávok (schvaľuje Martin) | nízka | reklama |
| Zosúladiť Heureka vs. GA4 atribúciu | Rozdiel tržieb | Dôveryhodné meranie | stredná | meranie |
| Prešetriť pokles od augusta | Klesá ROAS aj návštevy | Obnova výkonu | stredná | reklama |

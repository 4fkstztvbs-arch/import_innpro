# Mapovanie starých URL na nové (redirect plán)

Vygenerované: 2026-08-09T19:07:40.819Z

## Vstupy
- Starý Heureka export (premiumstore.sk, platforma SHOPTEC): **16628** produktov, **6377** s EAN.
- Nový katalóg (output/*.xml, aktuálne dodávateľské feedy): **24651** unikátnych EAN spolu, podľa dodávateľa: {"atos":10266,"innpro":6222,"kb":5211,"monacor":1771,"solight":1295}.

## Výsledok párovania (podľa EAN)
- **Spárované (produkt existuje v starom aj novom katalógu): 4808**
- **Vyradené z ponuky (boli v starom katalógu, už nie sú u žiadneho dodávateľa): 1569**
- **Nové produkty (v novom katalógu, v starom neboli — najmä InnPro, ktorého sme predtým nemali):** 19936, z toho podľa dodávateľa: {"atos":8514,"innpro":6222,"kb":4446,"monacor":153,"solight":601}

## Čo ešte chýba k finálnej redirect tabuľke
Shoptet negeneruje URL produktu na základe hodnoty v importnom XML — vytvára ju sám automaticky z názvu produktu. Preto v tomto behu **nemáme k dispozícii reálnu novú URL**, iba vieme, ktoré produkty (podľa EAN) sa majú na seba mapovať.
Riadky so stavom `CAKA_NA_NOVU_URL` v `redirect-map.csv` sú spárované, ale bez novej URL.

Dva spôsoby, ako doplniť reálne nové URL:
1. **Po spustení importov do produkčného Shoptetu** prejsť `sitemap.xml` nového shopu a z každej produktovej stránky vytiahnuť EAN (je v štruktúrovaných dátach stránky) → postaviť EAN → nová URL mapu → spustiť tento skript znova s `--new-urls=mapa.json`.
2. **Zapnúť Heureka feed aj na novom Shoptet shope** (Marketing → Feedy) — ten obsahuje EAN aj URL v rovnakom formáte ako starý export, čiže mapovanie pôjde rovnako ako teraz zo starého shopu.

Až po doplnení `nova_url` vznikne `redirect-map-shoptet-import.csv` pripravený na priamy import do **Marketing → Základné SEO → Presmerovanie adries (URL)** (formát fromUrl;toUrl;automatic, relatívne cesty s lomítkom na konci).

## Vyradené produkty (1569)
Tieto EAN boli v starom katalógu, no žiadny dodávateľ ich už neposkytuje. Odporúčanie: buď 301 na najbližšiu kategóriu (ak majú stále dopyt/spätné odkazy), alebo nechať prirodzene padnúť na 404 — Google to pri vypredanom tovare toleruje. Zoznam je v `redirect-map.csv` so stavom `VYRADENY_Z_PONUKY`.

# Konverzie a UX: prieskum dňa 1 (2026-11-10)

Obdobie dát: 2026-10-11 až 2026-11-09 (30 dní), porovnanie s 2026-09-11 až 2026-10-10. Zdroje: GA4 (cez OpenSEO), Microsoft Clarity, verejné stránky eshopu, web research. Nič sa nezapisovalo do eshopu a nedokončila sa žiadna objednávka. Ceny, viditeľnosť a sklad sa neriešia.

## Východisková situácia (GA4, 30 dní)

- Relácie 5 231, objednávky 207, tržby cca 18,5 tis. € (priemerná objednávka cca 90 €). Konverzný pomer cca 4,0 %, čo je na elektroniku vysoké, takže hlavná páka je návštevnosť a menšie straty v pokladni, nie zásadná prestavba.
- Mobil: 3 079 relácií, 117 objednávok (3,8 %). Desktop: 2 059 relácií, 88 objednávok (4,3 %). Tablet: 93 relácií, 2 objednávky.
- Oproti predchádzajúcim 30 dňom relácie klesli o cca 25 %. Najväčší prepad: Referral relácie -50 %, objednávky 103 → 58, tržby -44 % (-3,9 tis. €). Mobilné relácie -36 %. Organic Search -16 % relácií, tržby -25 %. Direct tržby +105 %, AI Assistant tržby +1,6 tis. € (8 objednávok).
- Lievik (používatelia, GA4): košík 415 → krok 1 356 (86 %) → krok 2 245 (69 %) → ďakujeme 206 (84 %). Z košíka sa objedná cca 50 %. Najväčšia strata je medzi krokom 1 a 2.
- Položky: zobrazenia 4 083, do košíka 863, kúpené 500. Údaje o zobrazeniach produktov sú podozrivo nízke (pozri príležitosť 1).
- Clarity (30 dní): 18 889 relácií, rage clicks takmer nula (4), mŕtve kliky 466, quickback kliky 1 349 (PC 694, mobil 641). Priemerný scroll 59 % PC, 55 % mobil. INP cca 220 až 260 ms (hraničné), LCP na mobile cca 1,6 s (dobré). PC LCP 49 s je zjavne odľahlá hodnota, treba overiť.

## Zoradené príležitosti

Odhad prínosu je hrubý a slúži na zoradenie. Skratky: P = vplyv, N = náročnosť.

### 1. Opraviť meranie (GA4 vs Clarity, site search) — P vysoký, N nízka
- Dáta: Clarity vidí 18 889 relácií, GA4 len 5 231 (28 %). Časť rozdielu môžu byť boti a iná definícia relácie, ale pravdepodobne chýba časť dát kvôli zamietnutým cookies (consent mode). Hlásenie GA4 `view_item` je tiež nízke voči počtu relácií. Vyhľadávanie (/vyhladavanie/, 404 zobrazení) nemá v GA4 žiadne search termy, takže nevidíme, čo ľudia hľadajú a nenachádzajú. Unassigned (164) a Paid Other (46) relácie naznačujú chýbajúce UTM.
- Návrh: overiť Consent Mode v2 (advanced mode, modelovanie), skontrolovať view_item, add_to_cart, begin_checkout, add_shipping_info, add_payment_info v GA4 a dataLayer, zapnúť parameter vyhľadávania (`q` alebo podľa Shoptetu) a nastaviť UTM pre všetky platené zdroje. Bez tohto sú A/B testy nespoľahlivé.
- Meranie: porovnanie počtu objednávok GA4 vs administrácia eshopu (cieľ odchýlka pod 5 %), podiel Unassigned pod 2 %.

### 2. Prepad Referral návštevnosti a tržieb — P vysoký, N stredná
- Dáta: Referral -50 % relácií a -3,9 tis. € tržieb, najväčší jednotlivý prepad v sledovanom období.
- Hypotéza: porovnávače (Heureka, Zboží a pod.) sú v GA4 vedené ako referral, takže ide pravdepodobne o zmenu v reklame alebo exporte. Toto patrí do vlákna reklamy; zmeny kampaní a Heureka hidden len so schválením Martina.
- Návrh: identifikovať zdroje cez Source/Medium, porovnať s Heureka administráciou a odovzdať reklamnému agentovi.

### 3. Cena dopravy a doba dodania priamo pri cene a v košíku — P vysoký, N nízka
- Dáta: na produktovej stránke (Gorenje WG2PS72A12) je pri cene len odkaz „Možnosti doručenia“, žiadna cena dopravy, dátum doručenia ani platobné metódy. Stránka Doprava a platba: žiadny stanovený limit dopravy zdarma, nejasné „doručenie nasledujúci pracovný deň“ (od objednávky alebo od expedície), chýba čas uzávierky objednávok. Dopravy stoja 4,90 € až 9,90 €, paletová 24,90 €. Kombinácie dopravy a platby vidno až v kroku 2.
- Návrh: blok pri tlačidle „Do košíka“: „Doručenie od 4,90 €, expedujeme do X hod., kartou/Apple Pay/Google Pay/QR/dobierka“. Doplniť na stránku Doprava a platba jasný čas a limit dopravy zdarma (len ak existuje; ceny a pravidlá nemeníme, len ich zobrazujeme).
- Meranie: A/B test blok vs bez bloku, metrika add_to_cart rate a míra prechodu košík → krok 1; dĺžka testu aspoň 3 až 4 týždne alebo 150 objednávok na variant.

### 4. Strata medzi krokom 1 a krokom 2 pokladne (31 %) — P vysoký, N stredná
- Dáta: 356 → 245 používateľov. Quickback kliky na /kosik/ (65) a /objednavka/krok-1/ (15), mŕtve kliky na kroku 1 (4).
- Hypotéza: formulár kroku 1 je príliš dlhý alebo vyžaduje údaje, ktoré zákazník nechce zadať; chyby validácie; neprehľadný výber dopravy a platby.
- Návrh: prejsť krok 1 na mobile aj desktope v Clarity nahrávkach (filter: exitUrls krok-1), zistiť ktoré políčka zdržujú, zapnúť automatické dopĺňanie, nechať minimum povinných polí, ponúknuť objednávku bez registrácie na prvom mieste.
- Nasledujúci krok pre agenta: pozrieť 30 až 50 nahrávok sedení, ktoré skončili na kroku 1, a nahrávky z mobilu osobitne. Tento prechod nákupom som dnes neurobil vizuálne cez prehliadač (len cez dáta a verejné stránky), treba ho dodať v ďalšom kole.

### 5. Prázdne hodnotenie „0,0 z 5“ na produktových kartách — P stredný až vysoký, N nízka
- Dáta: produktová stránka ukazuje „Priemerné hodnotenie 0,0 z 5, Neohodnotené“. Na domovskej stránke nie je viditeľné žiadne hodnotenie ani odznak Heureka „Overené zákazníkmi“.
- Návrh: skryť blok hodnotenia, kým nie je aspoň 1 hodnotenie, doplniť odznak Heureka a hodnotenie obchodu na domovskú stránku a do pokladne, spustiť zbieranie recenzií po dodaní (Heureka dotazník, Shoptet recenzie). Podmienka: recenzie sa nesmú vymýšľať.
- Meranie: miera pridania do košíka na kartách so skrytým blokom (A/B), počet nových recenzií za týždeň.

### 6. Obsah produktovej stránky (galéria, parametre, FAQ, texty) — P stredný, N stredná (škáluje sa cez agenta)
- Dáta: audit Gorenje WG2PS72A12 (patrí medzi top 3 videné produkty, 79 zobrazení, 21 do košíka, 2 kúpené, čiže miera kúpy z košíka je nízka): jediný obrázok, chýbajúce parametre (spotreba vody, hlučnosť, typ bubna), duplicitná záruka, FAQ opakuje parametre, nezhoda H1 a meta title (hĺbka 43,5 cm je len v meta title), chyba v texte („predom plnená“ namiesto „predne plnená“), alternatívy len ako textové odkazy, odkaz na zdieľanie cez Twitter.
- Návrh: šablóna kvalitnej produktovej stránky (nadpis s kľúčovým parametrom, 4 až 6 obrázkov, tabuľka parametrov, texty o použití, FAQ s dopravou a inštaláciou, karty alternatív a príslušenstva). Pilot na 20 produktoch s najvyššou návštevnosťou, potom škálovať. Týka sa to aj skillu `eshop-product-content`.
- Meranie: pre každý pilotný produkt porovnať 4 týždne pred a po (add_to_cart rate, kúpy, organické zobrazenia); kde sa dá, A/B v rámci podobných produktov.

### 7. Nafúknuté menu a domovská stránka — P stredný, N stredná
- Dáta: domovská stránka je najviac navštívená (1 447 zobrazení) a má najviac quickback klikov (109) a mŕtvych klikov (31). Menu obsahuje opakujúce sa položky („Vstavané chladenie“, „Elektromery a spínacia technika“, „Kancelária a škola“ dvakrát), tlačidlo „Viac“ je nejasné, na stránke je viditeľné prihlasovacie pole a upozornenie na JavaScript, chýba odkaz na newsletter.
- Návrh: zlúčiť duplicity, skrátiť menu na 8 až 10 kategórií, presunúť prihlásenie do hlavičky, odstrániť zbytočné upozornenie na JavaScript a skontrolovať skryté pole (honeypot), ktoré sa môže zobrazovať.
- Meranie: Clarity (quickback kliky a mŕtve kliky na /), klikanie v menu.

### 8. Mŕtve kliky na /kontakty/, /klient/moja-objednavka/, /objednavka/dakujeme/ — P nízky až stredný, N nízka
- Dáta: /kontakty/ 28 mŕtvych klikov, moja-objednavka 22, ďakujeme 16, domovská 31.
- Návrh: v Clarity zistiť, na čo ľudia klikajú (telefón, e-mail, adresa bez odkazu?). Urobiť z nich klikateľné odkazy (tel:, mailto:, mapa). Stránka ďakujeme môže ponúknuť sledovanie zásielky a odkaz na recenziu.

### 9. Návštevnosť z AI asistentov a posun k odpovediam — P stredný, N nízka
- Dáta: AI Assistant 187 relácií, 8 objednávok, 1,8 tis. € (priemerná objednávka 225 €), tržby +1,6 tis. € oproti predošlému obdobiu.
- Návrh: zistiť, ktoré URL AI odkazuje, a posilniť ich FAQ a štruktúrované dáta (prenecháme SEO agentovi).

### 10. Ďalšie nápady na neskôr
- Porovnanie produktov a kombinované balíky (príslušenstvo) na kartách spotrebičov.
- Opustený košík cez e-mail (Shoptet), ak je zapnuté zbieranie e-mailov v kroku 1 (Email kanál má len 7 relácií).
- Mobilný lepkavý pruh „Do košíka“ pri scrollovaní produktu.
- Skrátenie INP (cca 220 až 260 ms) kontrolou skriptov tretích strán.

## Návrh A/B testov (poradie)

1. Blok doprava, termín a platby pri tlačidle Do košíka (príležitosť 3).
2. Skrytie hodnotenia 0,0 (príležitosť 5).
3. Zjednodušenie kroku 1 pokladne (príležitosť 4).
4. Šablóna produktovej stránky na pilotnej skupine (príležitosť 6).

Spôsob merania: Shoptet nemá natívne A/B testovanie, takže sa počíta najmä pred/po a na porovnateľných skupinách produktov. Minimálna dĺžka 3 až 4 týždne a aspoň 150 objednávok na variant, inak sa výsledok berie len ako orientačný.

## Hranice dnešnej práce

- Prechod nákupom desktop aj mobil cez Chrome sa dnes neurobil, použil sa verejný obsah stránok a analytické dáta. Doplniť v ďalšom kole spolu s prezeraním nahrávok z Clarity.
- Chrome s prihlásením, Heureka administrácia a Search Console sa nepoužili. Search Console a SEO patria vláknu SEO.
- Clarity nevrátila členenie krokov pokladne (prázdny výsledok), takže lievik je z GA4.
- Čísla v lieviku sú používatelia, nie relácie; kvôli problému merania (príležitosť 1) sú len orientačné.

## Zdroje (UX postupy)

- Baymard Institute, výskum pokladne a UX: https://baymard.com/blog/current-state-of-checkout-ux
- Baymard, Checkout UX Guide: https://baymard.com/learn/checkout-flow-ux-optimization
- Shopify, ecommerce checkout optimization: https://www.shopify.com/blog/ecommerce-checkout-optimization

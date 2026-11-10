# Konverzie a UX: prieskum dňa 1 (2026-11-10)

Obdobie dát: posledných 30 dní (2026-10-11 až 2026-11-09), porovnanie s predchádzajúcimi 30 dňami. Zdroje: GA4, Microsoft Clarity, verejné stránky eshopu, web research. Nič sa nezapisovalo do eshopu a nedokončila sa žiadna objednávka. Ceny, viditeľnosť a sklad sa neriešia. Absolútne obchodné čísla (tržby, objednávky) sú v súkromnom priečinku projektu, nie v tomto verejnom repozitári.

## Východisková situácia

- Konverzný pomer cca 4 %, čo je na elektroniku vysoké. Hlavná páka je návštevnosť a menšie straty v pokladni, nie zásadná prestavba. Mobil 3,8 %, desktop 4,3 %.
- Podiel relácií: mobil 59 %, desktop 39 %, tablet 2 %.
- Oproti predchádzajúcim 30 dňom relácie klesli o cca 25 % (mobil -36 %, desktop +3 %). Najväčší prepad: Referral relácie -50 %, objednávky -44 %. Organic Search -16 % relácií. Direct objednávky výrazne vzrástli, AI Assistant tržby vzrástli viac než desaťnásobne z malého základu.
- Lievik (používatelia): košík → krok 1 (86 %) → krok 2 (69 % z kroku 1) → ďakujeme (84 % z kroku 2). Z košíka sa objedná cca 50 %. Najväčšia strata je medzi krokom 1 a 2.
- Údaje o zobrazeniach produktov v GA4 sú podozrivo nízke (príležitosť 1).
- Clarity (30 dní): rage clicks takmer nula, mŕtve kliky cca 2,5 % relácií, quickback kliky cca 7 % relácií (PC aj mobil rovnako). Priemerný scroll 59 % PC, 55 % mobil. INP cca 220 až 260 ms (hraničné), LCP na mobile cca 1,6 s (dobré). PC LCP 49 s je zjavne odľahlá hodnota, treba overiť.

## Zoradené príležitosti

Odhad prínosu je hrubý a slúži na zoradenie. P = vplyv, N = náročnosť.

### 1. Opraviť meranie (GA4 vs Clarity, site search) — P vysoký, N nízka
- Dáta: Clarity vidí cca 3,6-krát viac relácií než GA4. Časť rozdielu môžu byť boti a iná definícia relácie, ale pravdepodobne chýba časť dát kvôli zamietnutým cookies (consent mode). Vyhľadávanie (/vyhladavanie/) nemá v GA4 žiadne search termy, takže nevidíme, čo ľudia hľadajú a nenachádzajú. Unassigned a Paid Other relácie naznačujú chýbajúce UTM.
- Návrh: overiť Consent Mode v2 (advanced mode, modelovanie), skontrolovať view_item, add_to_cart, begin_checkout, add_shipping_info, add_payment_info v GA4 a dataLayer, zapnúť parameter vyhľadávania a nastaviť UTM pre všetky platené zdroje. Bez tohto sú A/B testy nespoľahlivé.
- Meranie: odchýlka počtu objednávok GA4 vs administrácia pod 5 %, podiel Unassigned pod 2 %.

### 2. Prepad Referral návštevnosti a objednávok — P vysoký, N stredná
- Dáta: Referral -50 % relácií a -44 % objednávok, najväčší jednotlivý prepad.
- Hypotéza: porovnávače (Heureka, Zboží a pod.) sú v GA4 vedené ako referral, takže ide pravdepodobne o zmenu v reklame alebo exporte. Patrí do vlákna reklamy; zmeny kampaní a Heureka hidden len so schválením Martina.
- Návrh: identifikovať zdroje cez Source/Medium, porovnať s Heureka administráciou a odovzdať reklamnému agentovi.

### 3. Cena dopravy a doba dodania priamo pri cene a v košíku — P vysoký, N nízka
- Dáta: na produktovej stránke (Gorenje WG2PS72A12) je pri cene len odkaz „Možnosti doručenia“, žiadna cena dopravy, dátum doručenia ani platobné metódy. Stránka Doprava a platba: nie je stanovený limit dopravy zdarma, nejasné „doručenie nasledujúci pracovný deň“ (od objednávky alebo od expedície), chýba čas uzávierky objednávok. Kombinácie dopravy a platby vidno až v kroku 2.
- Návrh: blok pri tlačidle „Do košíka“: „Doručenie od 4,90 €, expedujeme do X hod., kartou/Apple Pay/Google Pay/QR/dobierka“. Na stránku Doprava a platba doplniť jasný čas uzávierky a limit dopravy zdarma, ak existuje (ceny a pravidlá nemeníme, len ich zobrazujeme).
- Meranie: A/B test blok vs bez bloku, metrika add_to_cart rate a prechod košík → krok 1; dĺžka testu aspoň 3 až 4 týždne alebo 150 objednávok na variant.

### 4. Strata medzi krokom 1 a krokom 2 pokladne (31 %) — P vysoký, N stredná
- Dáta: 31 % používateľov odíde po kroku 1. Quickback kliky na /kosik/ a /objednavka/krok-1/.
- Hypotéza: formulár kroku 1 je príliš dlhý alebo vyžaduje údaje, ktoré zákazník nechce zadať; chyby validácie; neprehľadný výber dopravy a platby.
- Návrh: prejsť krok 1 na mobile aj desktope v Clarity nahrávkach (filter exitUrls krok-1), zistiť ktoré políčka zdržujú, zapnúť automatické dopĺňanie, minimum povinných polí, objednávka bez registrácie na prvom mieste.
- Poznámka: prechod nákupom cez Chrome sa dnes neurobil, doplniť v ďalšom kole.

### 5. Prázdne hodnotenie „0,0 z 5“ na produktových kartách — P stredný až vysoký, N nízka
- Dáta: produktová stránka ukazuje „Priemerné hodnotenie 0,0 z 5, Neohodnotené“. Na domovskej stránke nie je viditeľné žiadne hodnotenie ani odznak Heureka „Overené zákazníkmi“.
- Návrh: skryť blok hodnotenia, kým nie je aspoň 1 hodnotenie, doplniť odznak Heureka a hodnotenie obchodu na domovskú stránku a do pokladne, spustiť zbieranie recenzií po dodaní. Recenzie sa nesmú vymýšľať.
- Meranie: miera pridania do košíka (A/B), počet nových recenzií za týždeň.

### 6. Obsah produktovej stránky (galéria, parametre, FAQ, texty) — P stredný, N stredná (škáluje sa cez agenta)
- Dáta: audit Gorenje WG2PS72A12 (patrí medzi najnavštevovanejšie produkty, no pomer kúpy k vloženiu do košíka je nízky): jediný obrázok, chýbajúce parametre (spotreba vody, hlučnosť, typ bubna), duplicitná záruka, FAQ opakuje parametre, nezhoda H1 a meta title (hĺbka 43,5 cm je len v meta title), chyba v texte („predom plnená“ namiesto „predne plnená“), alternatívy len ako textové odkazy, zdieľanie cez Twitter.
- Návrh: šablóna kvalitnej produktovej stránky (nadpis s kľúčovým parametrom, 4 až 6 obrázkov, tabuľka parametrov, texty o použití, FAQ s dopravou a inštaláciou, karty alternatív a príslušenstva). Pilot na 20 najnavštevovanejších produktoch, potom škálovať.
- Meranie: 4 týždne pred a po (add_to_cart rate, kúpy, organické zobrazenia).

### 7. Nafúknuté menu a domovská stránka — P stredný, N stredná
- Dáta: domovská stránka má najviac quickback a mŕtvych klikov. Menu obsahuje opakujúce sa položky („Vstavané chladenie“, „Elektromery a spínacia technika“, „Kancelária a škola“), tlačidlo „Viac“ je nejasné, na stránke je viditeľné prihlasovacie pole a upozornenie na JavaScript, chýba newsletter.
- Návrh: zlúčiť duplicity, skrátiť menu na 8 až 10 kategórií, presunúť prihlásenie do hlavičky, odstrániť zbytočné upozornenie na JavaScript, skontrolovať skryté pole (honeypot).
- Meranie: Clarity (quickback a mŕtve kliky na /), klikanie v menu.

### 8. Mŕtve kliky na /kontakty/, /klient/moja-objednavka/, /objednavka/dakujeme/ — P nízky až stredný, N nízka
- Návrh: v Clarity zistiť, na čo ľudia klikajú (telefón, e-mail, adresa bez odkazu?) a urobiť z toho klikateľné odkazy (tel:, mailto:, mapa). Stránka ďakujeme môže ponúknuť sledovanie zásielky a odkaz na recenziu.

### 9. Návštevnosť z AI asistentov — P stredný, N nízka
- Dáta: AI Assistant prináša malý počet relácií, ale vysokú hodnotu objednávky a rastie.
- Návrh: zistiť, ktoré URL AI odkazuje, a posilniť ich FAQ a štruktúrované dáta (SEO agent).

### 10. Ďalšie nápady na neskôr
- Porovnanie produktov a balíky s príslušenstvom na kartách spotrebičov.
- Opustený košík cez e-mail (Shoptet).
- Mobilný lepkavý pruh „Do košíka“ pri scrollovaní produktu.
- Skrátenie INP kontrolou skriptov tretích strán.

## Hranice dnešnej práce

- Prechod nákupom desktop aj mobil cez Chrome sa dnes neurobil (verejný obsah a analytické dáta). Doplniť v ďalšom kole spolu s nahrávkami z Clarity.
- Chrome s prihlásením, Heureka administrácia a Search Console sa nepoužili (SEO patrí inému vláknu).
- Clarity nevrátila členenie krokov pokladne, lievik je z GA4. Čísla sú orientačné kvôli príležitosti 1.

## Zdroje (UX postupy)

- Baymard, stav UX pokladne: https://baymard.com/blog/current-state-of-checkout-ux
- Baymard, Checkout UX Guide: https://baymard.com/learn/checkout-flow-ux-optimization
- Shopify, ecommerce checkout optimization: https://www.shopify.com/blog/ecommerce-checkout-optimization

## Navrhované úlohy

| Názov | Prečo | Očakávaný dopad | Náročnosť | Komu |
|---|---|---|---|---|
| Audit a oprava GA4 (consent mode, view_item, search, UTM) | GA4 vidí zlomok relácií a nemeria vyhľadávanie | vysoký (spoľahlivé dáta pre všetko) | nízka | meranie |
| Rozbor prepadu Referral (-50 %) | najväčší pokles objednávok | vysoký | stredná | reklama, meranie |
| Blok doprava, termín, platby pri „Do košíka“ + A/B | chýba rozhodovacia informácia pri cene | vysoký | nízka | ux-cro |
| Rozbor nahrávok kroku 1 pokladne a zjednodušenie formulára | 31 % strata po kroku 1 | vysoký | stredná | ux-cro |
| Skryť hodnotenie 0,0 a spustiť zbieranie recenzií | prázdny sociálny dôkaz | stredný až vysoký | nízka | ux-cro, obsah |
| Šablóna produktovej stránky a pilot 20 produktov | slabé galérie, parametre a FAQ | stredný | stredná | obsah |
| Čistenie menu a domovskej stránky | duplicity, quickback kliky | stredný | stredná | ux-cro |
| Klikateľné kontakty a odkazy (mŕtve kliky) | mŕtve kliky na kontaktoch a objednávke | nízky až stredný | nízka | ux-cro |
| Posilniť stránky, na ktoré odkazuje AI | rastúci kanál s vysokou hodnotou | stredný | nízka | seo |

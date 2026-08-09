# Návod: prechod premiumstore.sk zo SHOPTEC na Shoptet

Praktický checklist pre prepnutie domény `premiumstore.sk` zo starej platformy SHOPTEC
na nový Shoptet e-shop (aktuálne bežiaci na dočasnej doméne `806405.myshoptet.com`).
Kroky sú zoradené chronologicky, s vyznačením priority a toho, čo už máme hotové
z tohto repozitára.

Legenda priority: 🔴 kritické (bez toho migráciu nerobiť) · 🟡 dôležité (výrazne to
ovplyvní výsledok, ale dá sa dohnať aj po spustení) · 🟢 pekné navyše (netreba čakať naň)

---

## Fáza 1 — Pred spustením (týždne dopredu)

### 🔴 1.1 Katalóg a ceny
- [x] Všetci dodávatelia (InnPro, ATOS, K+B, Solight, MONACOR) naimportovaní a XML validované — hotové, bežiace na nočných importoch.
- [x] Obrázky sa sťahujú spoľahlivo (ATOS/Solight cez Cloudflare proxy, ostatní priamo) — hotové.
- [x] Alt texty pri obrázkoch (názov produktu) — hotové pre všetkých 5 dodávateľov.
- [ ] **Skontrolovať, či nič nechýba oproti starému katalógu** — porovnať počet aktívnych produktov na starom a novom shope, over že to sedí s tým, čo očakávaš (časť starého sortimentu je vyradená, časť — hlavne InnPro — je nová, viď `reports/redirect-map-summary.md`).

### 🔴 1.2 URL a presmerovania (301)
- [x] Mapovanie stará URL → nová URL cez EAN — hotové, `reports/redirect-map-shoptet-import.csv` (4 557 párov).
- [x] Presmerovanie vyradených produktov na najbližšiu kategóriu — hotové, `reports/redirect-map-discontinued-shoptet-import.csv` (529 párov, over ešte raz manuálne pred importom).
- [ ] **Naimportovať oba CSV súbory do Shoptetu ešte TERAZ**, na dočasnej doméne (Marketing → Základné SEO → Presmerovanie adries URL). Neaktivujú sa, kým `premiumstore.sk` nebeží na Shoptete — takže žiadne riziko, len ušetríš si prácu na deň D.
- [ ] Otestovať 10-15 náhodných presmerovaní priamo na `806405.myshoptet.com/<stará-cesta>/`.
- [ ] Rozhodnúť, čo s produktmi bez presmerovania (1 040 zo zoznamu vyradených) — nechať 404, alebo doplniť ručne.

### 🟡 1.3 SEO obsah kategórií
- [x] Title tag + Meta description pre všetky kategórie, Horný popis pre 13 koreňových — hotové, treba len naimportovať cez Shoptet import kategórií.
- [ ] **Naimportovať vyplnený CSV kategórií do Shoptetu** (ten, čo si dostal — `categories6-vyplnene.csv`), ideálne tiež ešte pred D-dňom.
- [ ] Skontrolovať, že sa Title/Description reálne zobrazujú vo výpise (zdrojový kód stránky, nie len v administrácii).

### 🟡 1.4 Feedy a porovnávače (Heureka a pod.)
- [x] Heureka feed na novom shope je funkčný (`https://806405.myshoptet.com/heureka/export/products.xml`) — overené.
- [ ] **Nahlásiť Heureke novú feed URL** (namiesto starej `premiumstore.sk/export/heureka.xml`) — inak sa produkty na Heureke po prepnutí prestanú aktualizovať/zmiznú. Toto treba urobiť **presne v deň prepnutia**, nie skôr (kým premiumstore.sk beží na starom systéme, starý feed musí zostať aktívny).
- [ ] Ak používaš aj iné porovnávače/marketingové kanály (Google Shopping, Glami, Zbozi.cz a pod.), over, či majú podobný feed a priprav si zmenu URL rovnako.
- [ ] Google Ads / Merchant Center — ak beží nákupný feed, priprav si prepnutie zdroja dát.

### 🟡 1.5 Parametrické filtre
- [x] Filter podľa kompatibilného TV modelu pri ATOS diaľkových ovládačoch — dáta pripravené v XML (`INFORMATION_PARAMETERS`).
- [ ] **Aktivovať filter v administrácii** (Nastavenia → Produkty → Parametrické filtre) — bez tohto kroku sa parameter naimportuje, ale nezobrazí sa ako filter v kategórii.

### 🔴 1.6 Veci, ktoré tento repozitár nerieši — treba ich pripraviť samostatne
- [ ] **Platobné brány** — nastaviť a otestovať všetky spôsoby platby (karta, na dobierku, prevod...) na novom shope, vrátane reálnej testovacej platby.
- [ ] **Doprava** — porovnať dopravcov/ceny/výdajné miesta so starým shopom, over že sedia.
- [ ] **E-maily** — potvrdenie objednávky, faktúra, newsletter (ak sa posiela cez inú službu, over prepojenie).
- [ ] **Zákaznícke účty** — over, ako sa migrujú existujúci zákazníci (heslá sa spravidla neprenášajú 1:1, zákazníci si často musia heslo obnoviť pri prvom prihlásení — dopredu to komunikuj).
- [ ] **GDPR / právne texty** — obchodné podmienky, reklamačný poriadok, ochrana osobných údajov, cookie lišta — musia byť na novom shope pred spustením, nie až dodatočne.
- [ ] **Fakturačný/účtovný systém** — ak je napojený na starý systém (napr. cez API), over prepojenie na Shoptet.

---

## Fáza 2 — Deň D (prepnutie domény)

Poradie v rámci dňa D je dôležité — najprv technika, potom komunikácia von.

1. 🔴 **Poslednýkrát skontrolovať, že nový shop je pripravený** — spustiť checklist z Fázy 1 ešte raz, najmä body bez ✅.
2. 🔴 **Prepnúť DNS `premiumstore.sk` na Shoptet** (podľa návodu Shoptet podpory pre pripojenie vlastnej domény).
3. 🔴 **Počkať na prejavenie DNS a overiť SSL certifikát** — `https://premiumstore.sk` musí bežať bez upozornenia prehliadača (Shoptet SSL certifikát sa väčšinou vygeneruje automaticky po nasmerovaní domény, ale môže to trvať desiatky minút až hodiny).
4. 🔴 **Otestovať naostro**: homepage, pár kategórií, detail produktu, celý nákupný proces (vloženie do košíka → pokladňa → reálna platba, ak sa dá test-platbou) — na novej doméne, nie na `myshoptet.com`.
5. 🔴 **Otestovať presmerovania na finálnej doméne** — tie isté vzorky, čo si testoval na `myshoptet.com` v Fáze 1, teraz na `premiumstore.sk`.
6. 🟡 **Prepnúť Heureka feed URL** v Heureka administrácii na novú adresu (bod 1.4).
7. 🟡 **Google Search Console** — pridať/overiť vlastníctvo `premiumstore.sk` (ak certifikát vlastníctva bol viazaný na starý systém, over že platí aj naďalej), odoslať novú sitemapu.
8. 🟢 Skontrolovať, že staré služby (ak bežal starý SHOPTEC systém súbežne) sú vypnuté/presmerované, aby nedochádzalo k duplicitnému obsahu na dvoch doménach súčasne.

---

## Fáza 3 — Po spustení (prvý mesiac)

### 🔴 3.1 Prvý týždeň — denná kontrola
- [ ] Google Search Console → sekcia Pokrytie/Coverage — sledovať nové 404 chyby, ktoré presmerovania nepokryli.
- [ ] Skontrolovať objednávky reálne prechádzajú (platby, e-maily, sklad).
- [ ] Sledovať Analytics (GA4) — porovnať návštevnosť/tržby s obdobím pred migráciou, zachytiť prípadný prepad včas.

### 🟡 3.2 Priebežne prvý mesiac
- [ ] Doplniť presmerovania pre 404-ky, ktoré sa objavia v Search Console a pôvodne neboli pokryté (nové zdroje návštevnosti sa objavujú postupne, nie všetko sa odhalí hneď).
- [ ] Skontrolovať pozície kľúčových produktov/kategórií vo vyhľadávaní — po 301 presmerovaní trvá týždne, kým sa "SEO hodnota" starej URL prejaví na novej, prepad prvý týždeň je normálny.
- [ ] Overiť rýchlosť načítania (PageSpeed Insights / Core Web Vitals) na hlavných typoch stránok.

### 🟢 3.3 Neskôr, keď je systém stabilný
- [ ] Dokončiť rozšírenie parametrických filtrov (InnPro Kompatibilita a pod. — pozri `reports/prehlad-importov.md`, sekcia 7).
- [ ] Zvážiť ďalšie SEO vylepšenia podľa výsledkov z prvého mesiaca (napr. kategórie s veľkým prepadom návštevnosti môžu potrebovať lepší popis/obsah).

---

## Zhrnutie — čo je už z tejto strany hotové vs. čo ešte treba spraviť vy

| Oblasť | Stav |
|---|---|
| Import katalógu, ceny, obrázky, alt texty | ✅ Hotové, beží automaticky |
| Mapovanie URL → 301 presmerovania (aktívne aj vyradené produkty) | ✅ Vygenerované, čaká na import do administrácie |
| SEO obsah kategórií (Title/Description/popis) | ✅ Vygenerované, čaká na import |
| Heureka feed na novom shope | ✅ Funkčný, len treba prepnúť URL v Heureka administrácii v deň D |
| Parametrický filter TV kompatibility | ✅ Dáta pripravené, čaká na aktiváciu v administrácii |
| Platby, doprava, e-maily, GDPR texty, zákaznícke účty, účtovníctvo | ❌ Mimo tohto repozitára — treba pripraviť/otestovať samostatne |
| DNS prepnutie, SSL, Search Console, Heureka URL prepnutie v deň D | ❌ Ručný krok v deň D |

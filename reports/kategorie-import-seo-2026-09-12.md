# SEO obsah pre nový strom kategórií (2026-09-12)

Import súbor: `data/kategorie-import-2026-09-12.csv` – 227 kategórií, presný formát Shoptet
CSV importu (`id;parentId;parentUrl;expandInMenu;visible;priority;access;title;linkText;url;
topDescription;bottomDescription;metaTitle;metaDescription`), overený proti živému exportu
(`https://www.premiumstore.sk/export/categories.csv`). `id`/`parentId` sú zámerne prázdne a
hierarchia sa rieši cez `parentUrl` (názov URL rodiča) – podľa oficiálnej Shoptet dokumentácie
pre import nových kategórií (https://podpora.shoptet.cz/hc/cs/articles/360003161971).

## Cieľ a metodika

Zadanie: kategórie majú byť zrozumiteľné nielen pre Google, ale aj pre Bing, ChatGPT,
Perplexity, Gemini a ďalšie AI/shopping systémy – jednoznačný názov, jasný typ produktu,
konkrétny kontext namiesto všeobecnej marketingovej frázy.

Pre každú z 227 kategórií som:
1. Vytiahol **skutočné zloženie produktov** (z `data/shoptet-products-export-2026-09-11.csv`,
   cez prepojenie 851-kategóriového návrhu na tento uzol) – počty podľa pod-typu a najčastejšie
   značky/slová v názvoch produktov.
2. Až na základe reálnych dát napísal title/meta title/meta description/popis – žiadny text
   nie je len všeobecná fráza o danej produktovej oblasti bez overenia, čo sa v nej naozaj predáva.
3. Popis kategórie (`topDescription`) drží formát z tvojho príkladu (Solárne panely): 1-2
   odseky, ktoré hneď v úvode pomenujú o aký typ produktu ide, a v druhej časti dávajú
   praktický kontext na výber (parametre, na čo si dať pozor).

## Zistenia počas písania obsahu (dôležité pre presnosť)

- **"Fotovoltaika" (uzol g158) premenovaný na "Fotovoltaické inštalačné príslušenstvo"** –
  pôvodne navrhované URL by viedlo k dojmu, že ide o predaj solárnych panelov, no reálne dáta
  ukázali, že samotné panely tvoria len 19 z 616 produktov (3 %); dominujú konštrukcie, káble,
  rozvádzače a ochrana FV inštalácií. Názov aj popis boli podľa toho upravené (URL zostala
  nezmenená, ide len o zmenu zobrazovaného title/popisu).
- Viacero kategórií malo v návrhu generický názov ("Náradie", "Meracie prístroje",
  "Príslušenstvo") – v texte (nie v samotnom `title` poli, ktoré zostáva kvôli stabilite URL/
  štruktúry nezmenené) som doplnil konkrétny kontext (typ produktu, značky), aby stránka bola
  jednoznačná aj bez ďalšieho klikania.

## Nevyriešené štrukturálne nálezy (odporúčam ako fast-follow po nedeľnom nasadení)

Tieto veci by chcelo riešiť **zmenou stromu** (nové/zlúčené kategórie), nie len textom – zatiaľ
sú len opísané čo najpresnejšie v rámci existujúcej štruktúry:

1. **Meracia technika je rozdelená do 3 samostatných uzlov** (Dielňa a záhrada): "MERACIE
   TECHNIKA" (461 produktov, multimetre/testery/klieštové merače), "Meracie prístroje" (253,
   Uni-T/Habotest špecializované – decibelomer, detektor plynu, pyrometer) a "Meracia technika"
   (19, výhradne Solight). Obsahovo ide o jednu oblasť rozdelenú na 3 kategórie – kandidát na
   zlúčenie.
2. **Rovnaký vzor pri spájkovaní**: "SPÁJKOVACIE TECHNIKA" (186) vs. "Spájkovačky" (16,
   výhradne FNIRSI) – malá značková podmnožina väčšej kategórie.
3. **"Profesionálna audio technika > Nové produkty" a "Výpredaj"** nie sú typy produktov, ale
   marketingové štítky (7, resp. 4 produkty) – časom sa ich obsah mení, takže ako trvalé
   kategórie v strome dávajú menej zmysla než filter/štítok pri produkte.
4. Skôr spomenuté zmiešané domény (Elektro/Smart Home/osvetlenie; drony a hračky v
   Cestovanie/šport; chovateľské potreby v Zdravie a starostlivosť) – stále čakajú na
   rozhodnutie o rozdelení, dohodnuté zatiaľ odložiť po termíne nasadenia.

## Dodatočná oprava URL (druhé kolo, po tvojom upozornení na "-2" prípony)

Všimol si si, že veľa kategórií malo URL končiace číslom (napr. `filtre-2`, `dialkove-ovladace-2`).
U **46 z pôvodných 50** išlo o legitímnu vec – presne taký istý (aj s číslom) URL mala už
kategória v pôvodnom strome (Shoptet si číslo pridal sám pred rokmi, keď vznikla ďalšia
kategória rovnakého mena inde v strome) – ide teda o zámerné zachovanie presne tej istej,
už existujúcej URL kvôli SEO, nie o chybu.

Zvyšné **4 prípady ale boli skutočne zbytočné** – vznikli chybou v mojom vlastnom skripte
(kontrola URL kolízií si sama sebe "blokovala" cestu k správnej URL, alebo si vôbec nevšimla,
že kategória bez vlastných produktov má správneho predchodcu cez svoje podkategórie). Po oprave
skriptu sa ukázalo, že takýchto prípadov bolo v skutočnosti **20** (nie len tie 4, čo boli vidno
na prvý pohľad) – všetky teraz získali späť svoju správnu, existujúcu URL bez čísla na konci,
napr. `dialkove-ovladace` namiesto `dialkove-ovladace-2`, `fotovoltaika` namiesto `fotovoltaika-2`.

Dôležité: v žiadnom z týchto 227 prípadov nešlo o "vnorenú duplicitu" v zmysle rodič→dieťa→
rovnomenné vnúča v novom strome (taký vzor sa v strome nenašiel) – priezvisko "-N" je čisto
záležitosť URL, nie duplicitná kategória na zmazanie. `data/kategorie-import-2026-09-12.csv`
a redirect mapy boli prebudované s opravenými URL.

## Poradie v menu
Stĺpec `priority` je zoradený zostupne podľa počtu produktov v podkategórii (najsilnejšia
podkategória prvá) – čisto orientačné, dá sa v administrácii kedykoľvek preusporiadať
drag&drop bez potreby nového importu.

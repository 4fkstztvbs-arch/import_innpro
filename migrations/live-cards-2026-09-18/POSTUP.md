# Kontrola nespárovaných kariet – 18. 9. 2026

Balík rieši kontrolovanú skupinu 426 kariet. Nie je finálnym importom nového stromu ani dokončením auditu všetkých 27 247 kariet.

## Čo nahrať

Súbor `01-opravy-zaradenia.csv` obsahuje 122 existujúcich produktov bez variantov. Aktualizuje iba `defaultCategory` a `categoryText`; identifikuje ich aktuálnym kódom e-shopu. Neobsahuje ceny, sklad, názvy, viditeľnosť ani URL. Netreba import kategórií ani presmerovaní: všetky cieľové kategórie už sú v exportovanom strome.

1. V Shoptete otvorte **Produkty → Import** a vyberte súbor `01-opravy-zaradenia.csv`.
2. Použite **Nemeniť produkty a varianty, ktoré nie sú obsiahnuté v importovanom súbore**. Nemeňte URL podľa názvov. Ak rozhranie ponúkne výber aktualizovaných polí, vyberte iba kategórie.
3. Po importe skontrolujte log: očakáva sa aktualizácia existujúcich kariet, žiadne nové produkty ani mazanie. Pri kartách s nesprávnou pôvodnou kategóriou overte aj odstránenie starého priradenia; samotné doplnenie novej kategórie nie je dokončená oprava.
4. Overte napríklad Sonos Ace Ear Cushion Replacement (kód ECUSHWW1BLK) v príslušenstve, kefu MOVA 089582 v príslušenstve k malým spotrebičom a akciový Behringer BAS_BASYS-B112D2 v PA reproduktoroch.

## Dve variantové karty BOSE

Zaraďte v administrácii celú existujúcu kartu do uvedenej kategórie. Varianty ostávajú na tej istej karte:

- **BOSE  Module 700 - akcia** — ID 621573, varianty 621573/BIE, 621573/CIE: `TV, audio, video a foto technika > Audio technika > HiFi a domáce reproduktory`.
- **BOSE soundbar 900 Ultra -akcia** — ID 621249, varianty 621249/BIE, 621249/CIE: `TV, audio, video a foto technika > Audio technika > Soundbary`.

Úplný XML export neobsahuje overený `pairCode` týchto kariet. Preto ho nevymýšľame a varianty nepatria do CSV pre bezvariantové produkty. Ich ceny, sklad aj označenie „akcia“ ponechajte.

## Výsledok párovania

426 pôvodne nespárovaných = 182 viditeľných + 244 skrytých. Dodatočne 18 zhôd cez zápis kódu a názov; 1 kandidát GARNI cez rovnaký názov pri odlišnom kóde. Zostávajúcich 407 nie je automaticky chybných: zahŕňa 108 Sonos, 244 skrytých Penta, 4 samostatné akciové ponuky a 51 ďalších viditeľných kariet. Aktuálne výstupy nie sú dôkazom celého sortimentu dodávateľa ani všetkých importov nastavených v Shoptete.

Skryté karty sa v tomto opravnom importe nemenia. Pri Sonos Era 100 Pro Surface Mount (E1PMPWW1BLK, E1PMPWW1) je navyše nesprávny pôvodný popis: držiak opisuje ako reproduktor. Súbor `02-opravy-popisov-drziakov-sonos.csv` opravuje iba krátky a dlhý popis týchto dvoch kariet. Nahrajte ho rovnakým postupom po súbore 01. Názvy, ceny, sklad a URL nemení. Overené podľa výrobcu: https://www.sonos.com/en-us/shop/era-100-pro-mount

## Nočné importy

Zmeny kódu alebo zlučovanie kariet tento balík nerobí. Tieto karty sa nemajú nasilu spájať s podobnými modelmi dodávateľa. Pri kartách dodatočne spárovaných treba samostatne overiť nastavenie predpôn a aktualizácie kategórií v Shoptete. Potvrdené opravy dodávateľských feedov už boli nasadené v MAIN samostatnou dávkou.

Zdroj formátu: https://podpora.shoptet.sk/import-produktov/

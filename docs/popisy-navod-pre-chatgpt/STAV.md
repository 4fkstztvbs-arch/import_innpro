# Stav prepisu popisov – Hotové / Čakajúce (k 2026-10-10)

Základný odkaz na CSV: `https://4fkstztvbs-arch.github.io/import_innpro/migrations/popisy-kategorie-2026-10-09/<súbor>`
(Televízory: `.../migrations/televizory-popisy-2026-10-09/<súbor>`)

## A) HOTOVÉ – CSV vytvorené (tieto kategórie NEROBIŤ znova)

Stĺpec „Import“: ✔ = Martin potvrdil import; ? = CSV je hotový, ale Martin import zatiaľ nepotvrdil (overiť s ním, nepísať znova).

| Kategória (slug na webe) | Produktov v CSV | Súbor (platný / posledný) | Import |
|---|---|---|---|
| Televízory (`televizory`) | 136 | televizory-popisy-2026-10-09-v2.csv (v1 už importovaná, v2 = bez nevýhod, nahrádza v1) | v1 ✔, v2 ? |
| Práčky (`pracky`) | 95 | import-pracky-2026-10-09.csv | ✔ |
| Chladničky (`chladnicky`) | 111 | import-chladnicky-2026-10-10.csv (nahrádza 2026-10-09, 108) | 10-09 ✔, 10-10 ? |
| Mrazničky (`mraznicky`) | 20 | import-mraznicky-2026-10-09.csv | ✔ |
| Soundbary (`soundbary`) | 50 | import-soundbary-2026-10-10.csv (nahrádza 2026-10-09, 29) | 10-09 ✔, 10-10 ? |
| Varné dosky (`varne-dosky`) | 58 | import-varne-dosky-2026-10-10.csv (nahrádza 2026-10-09, 52) | 10-09 ✔, 10-10 ? |
| Monitory (`monitory`) | 12 | import-monitory-2026-10-10.csv | ? |
| Projektory (`projektory-4`) | 66 | import-projektory-4-2026-10-10.csv | ? |
| Športové vybavenie (`sportove-vybavenie`) | 142 | import-sportove-vybavenie-2026-10-10.csv | ? |
| Satelitné prijímače (`satelitne-prijimace`) | 67 | import-satelitne-prijimace-2026-10-10.csv | ? |
| Fritézy a hrnce (`fritezy-a-hrnce`) | 136 | import-fritezy-a-hrnce-2026-10-10.csv | ? |
| Kávovary a espressá (`kavovary-a-espressa`) | 221 | import-kavovary-a-espressa-2026-10-10.csv | ? |
| Fotovoltaika (`fotovoltaika`) | 546 | import-fotovoltaika-kompletne-2026-10-10.csv (nahrádza čiastkový s 274) | ? |
| Prenosné Bluetooth reproduktory (`audio-technika-prenosne-bluetooth-reproduktory`) | 44 | import-audio-technika-prenosne-bluetooth-reproduktory-2026-10-10.csv | ? |
| Slúchadlá (`sluchadla`) | 459 | import-sluchadla-2026-10-10.csv | ? |

Poznámka: súbory `*-2026-10-09.csv` sú staršie verzie (len produkty z feedov ATOS a K-B); súbory `*-2026-10-10.csv` sú ÚPLNÉ (obsahujú aj produkty InnPro, Penta, Basys...) a majú sa importovať namiesto nich.

Produkty, ktoré nemajú popis, lebo nie sú v ŽIADNOM našom feede (nemá z čoho vzniknúť): ~37 Fotovoltaika, 10 Soundbary (Sonos), 2 Satelitné (VU+ Duo 4K, Abcom), 14 BT reproduktory (Sonos Roam/Move a pod.), 21 Kávovary, 1 Slúchadlá (komunikačná súprava Bluetooth).

Známe drobné nedostatky v hotových CSV (opraviť pri najbližšej príležitosti, nie je to blokujúce):
- Slúchadlá: Monacor MD-390 a MD-480 nevysvetľujú, že 6,3 mm adaptér patrí k slúchadlám; MD-460 má impedanciu 32 Ω z feedu (iný zdroj uvádzal inú hodnotu – overiť).
- Slúchadlá: tri herné myši (kódy 088722, 088723, 088724) sú v kategórii omylom, majú popis ako myši.
- Produkty s prázdnou zárukou vo feede majú „24 mesiacov“ alebo záruku vynechanú (Martin chcel overiť pri kódoch 086330, 095146, 091858, 093486).
- Slabo overené modely (v popise je len to, čo sa potvrdilo): napr. Remosky, Beper, Amiko, Sati, Starbucks, Ariete, Rixon, ONIKUMA, QCY.

## B) ROZPRACOVANÉ – doťahnúť

**Smart telefóny** (slug `smart-telefony-2`, 220 produktov, 13 skupín po 17):
- skupiny 01–08 (136 produktov) sú napísané: `rozpracovane/smart-telefony-2/vystup/skupina-01..08.json`
- skupiny 09–13 (84 produktov) NIE SÚ napísané: vstupy sú v `rozpracovane/smart-telefony-2/vstup/skupina-09..13.json`
- Postup: napísať 09–13 podľa NAVOD-CHATGPT.md, uložiť do `vystup/skupina-09..13.json`, potom spustiť `catasm.py smart-telefony-2` (predtým doplniť do slovníka REL v catasm.py súvisiace kategórie pre telefóny, napr. /mobilne-telefony-a-prislusenstvo/, /sluchadla/, /nabijacky-a-powerbanky/ – overiť reálne URL na webe).

## C) ČAKAJÚCE – ešte nezačaté

- Reprosústavy (slug nenájdený – nájsť v menu `https://www.premiumstore.sk/`; „veľká“ kategória)
- Grafické tablety (slug nenájdený)
- Všetky ostatné kategórie obchodu, ktoré nie sú v tabuľke A (zoznam odkazov: `https://www.premiumstore.sk/sitemap.xml` alebo menu). Odporúčané poradie: najprv kategórie s najviac produktmi a najvyššou návštevnosťou/obratom (overiť v GA4/Shoptete), potom menšie.
- Produkty bez prefixu v kóde = InnPro (nikdy ich nepovažovať za „nie sú v našich feedoch“).

## D) Pravidlá importu (Martin)
- Import cez Shoptet: Produkty → Import → aktualizácia existujúcich produktov; hlavička `code;pairCode;description`; manuálny import nemá limit.
- Po importe skontrolovať 2–3 produkty na webe (obrázok, FAQ, odkazy, mobil).

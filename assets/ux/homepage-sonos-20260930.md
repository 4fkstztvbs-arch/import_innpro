# Homepage SONOS – 30. 9. 2026

Publikované 30. 9. 2026 približne o19:15 CEST po výslovnom schválení používateľom. Verejný web overený s CSS v7 / JS v3; zdroje zlúčené cez PR66, commit57f130e7bc03300d26bee98ea5f551939fa78bd5. Nahrádza iba homepage pilot CSS v5 / JS v1 za CSS v7 / JS v3. Dve originálne SONOS fotografie sú zmenšené bez retuše pre web. Natívna hlavička, footer, produktové dáta, formuláre, dodávateľské importy a analytika ostávajú zachované.

Bannery: SONOS Beam Ultra čierny (BMULTEU1BLK), Ace Ultra Sand (ACEULWW1SAND), Superfire M9-E (SKLBBSKLBB-025661). Skladový štítok Superfire sa odvodzuje z natívnej produktovej karty; ak chýba alebo nemá Skladom na predajni, zobrazí sa neutrálny text. Novinky SONOS nepoužívajú tvrdenie o sklade na predajni.

Mobil: kategórie → prvá produktová skupina → blok informácií o nákupe so spresneným doručením → Beam banner → ďalšie skupiny. Bočné bannery sú skryté. Desktop: 320 px bannery → kategórie → benefity → produkty. Na tablete 768–1000 px sa bočné bannery presunú pod Beam.

Doručenie je spresnené v homepage benefitoch na „Doručenie od 2 dní / Platí pre tovar skladom na predajni“. Dopravné pravidlá sa nemenia. Dnes v akcii sa na homepage mení na Vybrali sme pre vás, pretože skupina obsahuje aj tovar bez zľavy. Produktové CTA majú lepší kontrast; ostatné stránky sa nemenia.

Nasadenie: súbory v Shoptet /user/documents/upload/; v HEAD nahradiť presne dva odkazy verziami v7.css a v3.js. Pôvodné assety neprepisovať. Záloha pred zásahom je súkromne u vlastníka; raw admin kód nepatrí do verejného repozitára.

Rollback: v HEAD vrátiť v7.css → v5.css a v3.js → v1.js, uložiť, obnoviť návrhára a overiť náhľad, publikovať, overiť verejný web. Nové obrázky môžu zostať nepoužité. Pred publikovaním vždy kontrolovať presné načítané verzie; náhľad po uložení môže do obnovenia návrhára zobrazovať starú verziu.

Fotografie a fakty: https://brand.sonos.com/etail-experience ; https://brand.sonos.com/beam-ultra ; https://newsroom.sonos.com/269852-sonos-welcomes-beam-ultra-and-sonos-ace-ultra-to-its-system/ . Použité pôvodné fotografie Beam Black a Ace Sand zo schválených podkladov. Superfire fotografia z aktuálnej produktovej galérie. Lumény v banneroch neuvádzame kvôli rozporu v zdrojoch.

Toto je schválené nasadenie dizajnu, nie A/B test. Nárast CTR ani konverzií nie je preukázaný; pre meranie treba v rovnakých segmentoch sledovať impressions aj clicks a downstream konverzie, revenue/session a maržu.

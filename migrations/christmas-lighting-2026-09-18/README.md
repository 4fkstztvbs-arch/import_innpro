# Vianočné osvetlenie – nasadenie 18. 9. 2026

Existujúca kategória `/vianocne-osvetlenie/` (50322), 247 overených SKU/EAN. 246 svetiel/dekorácií + 1 príslušenstvo. Zmenené názvy a SEO titulky do slovenčiny na žiadosť používateľa. Ceny, sklad, URL, identifikátory a viditeľnosť zachované.

Shoptet: popis hore/dole z priložených HTML, štýl `/user/documents/upload/christmas-lighting-v2.css?v=20260918`, správanie z `assets/ux/christmas-lighting-v1.js` vložené do päty. Rozcestník je v krátkom aj dlhom popise; skript na detaile ponechá jednu kópiu pod úvodnou hlavičkou. Bez JavaScriptu zostávajú odkazy v popise.

Natívne filtre iba pre kategóriu 50322: Druh vianočného osvetlenia (39), Farba vianočného svetla (42), Použitie osvetlenia (45), Smart osvetlenie (48), Napájanie osvetlenia (51), Časovač osvetlenia (54). Priame URL hodnôt sú v konfigurácii. Parametre sa dopĺňajú iba podľa výslovne uvedených údajov; chýbajúca hodnota neznamená „nie“. Dĺžky sa automaticky nedopĺňajú kvôli nezrovnalostiam dodávateľských popisov.

Každý dodávateľský workflow obnoví zaradenie a bloky po úpravách stromu. Nový workflow aktualizuje existujúce feedy pri zmene konfigurácie. Presná allowlist zabraňuje zasiahnutiu bežného osvetlenia; nové SKU treba skontrolovať a doplniť. Chýbajúce SKU hlási report; zmenený EAN import zastaví.

Meranie: GA4 udalosť `christmas_navigation`, parametre `link_type`, `lighting_group`, `link_url`. Odosiela sa len ak najnovší Shoptet `cookie_consent.analytics` je `granted` a existuje gtag. Nevytvára vlastné cookies ani úložisko. V GA4 Explore možno segment návštev s touto udalosťou porovnať podľa následného add_to_cart/purchase v tej istej návšteve; neoznačovať klik za nákupnú konverziu. Prijatie udalosti v účte GA4 treba potvrdiť v Realtime/DebugView; lokálny test preveruje súhlas a volanie gtag.

Mobilná oprava: rozcestník nesmie používať ID `categories`, pretože existujúci globálny štýl `#categories a` vnucuje odkazu horizontálny flex. Používa `ps-christmas-categories`. Texty minimálne 13 px, hlavné odseky 16 px, odkazy a názvy dlaždíc 14 px.

## Slovenské názvy

Konfigurácia uchováva pôvodný názov, nový názov a SEO titulok. Názvy sú unikátne, do 135 znakov, titulky do 85 znakov; nejde o pevné limity Google, ale o redakčný štandard. Slovenský druh tovaru je na začiatku, nasleduje značka/model a rozlišujúce parametre. Pôvodné URL zostávajú. Import `slovenske-nazvy.csv` obsahuje len code, pairCode, name, seoTitle.

Overená oprava: SOL_1V110-M má osvetlenú dĺžku 5 m namiesto chybných 50 m v pôvodnom názve. Zdroj výrobcu: https://www.solight.cz/solight-led-venkovni-vanocni-retez-50-led-5m-privod-3m-8-funkci-casovac-ip44-vicebarevny-detail-2OB2000201.aspx . Dodávateľské popisy môžu mať ďalšie nezrovnalosti (napr. 1V13-WIFI); plošný prepis technických popisov nie je súčasťou jazykovej úpravy názvov.

Zásady titulkov: https://developers.google.com/search/docs/appearance/title-link . Bez sľubu pozícií; nebola vykonaná analýza objemu vyhľadávania jednotlivých slov.

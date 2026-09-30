CHANGE_ID: PS-20260930-HOMEPAGE-PREVIEW
DATE: 2026-09-30
ACTOR: Codex
AREA: UX / homepage
URL/PAGE/SCOPE: PremiumStore.sk homepage, publikované po schválení používateľom
AFFECTED_PRODUCTS/PAGES: iba homepage; produktové záznamy bezo zmien
DESCRIPTION: BOSE hero, Smart Home a 3D tlač bannery, vstupy do kategórií, spodný blok domácnosti; pôvodný header/footer a natívne produkty.
REASON: implementovať používateľom zvolenú možnosť 2 do náhľadu.
HYPOTHESIS: zrozumiteľné vizuálne vstupy zlepšia objavenie relevantných kategórií/produktov.
BASELINE: aktuálny verejný web bez hero/kategóriových kariet; číselný KPI baseline nebol v tomto dizajnovom pilote stanovovaný.
PRIMARY_METRIC: pri prípadnom schválenom experimente CTR homepage -> kategória/produkt; najprv overiť impressions aj clicks.
GUARDRAIL_METRICS: konverzie, revenue/session, checkout, výkon a mobilné pretekanie.
IMPLEMENTATION: nové samostatné CSS/JS, scope body.type-index main#content; pôvodne konceptový HEAD publikovaný po schválení. Shoptet assets nahrané s jedinečnými názvami.
FILES_CHANGED: assets/ux/premiumstore-homepage-pilot-20260930-v5.css; assets/ux/premiumstore-homepage-pilot-20260930-v1.js; assets/ux/homepage-pilot-20260930.md; tento ledger.
COMMIT / PR: agent/homepage-preview-pilot-20260930
APPROVAL / APPROVER: user 2026-09-30 explicitly approved deployment: upravu mozes nasadit.
EXPERIMENT_ID: PS-HOMEPAGE-VISUAL-PILOT-20260930; bez návštevníckeho A/B experimentu.
PRE_DEPLOY_VALIDATION: pôvodné admin polia a UX assets zálohované; JS syntax; zachovanie pôvodného HEAD prefixu; uložený koncept prežil reload; CSS/JS aktívne len v preview; verejná homepage nemá pilot ani jeho asset odkazy.
DEPLOYED_AT: 2026-09-30 approximately 18:20 CEST; Shoptet Publish verified on public homepage.
POST_DEPLOY_VALIDATION: public CSS v5 / JS v1; 36 destination pages, 10 new images, native header/footer, desktop and mobile, search, menu, login dialog, slider, cart add/remove with empty final cart. Shipping/payment step checked during pilot validation. No order or payment submitted.
RESULT: deployed; no business outcome measured.
DECISION: KEEP following explicit user deployment approval.
ROLLBACK / ROLLBACK_COMMIT: remove only added homepage-pilot HEAD block, inspect preview, publish rollback and verify public homepage. Existing assets unchanged.

FOLLOW-UP 2026-09-30: používateľ požiadal jemné otočenie kategóriových obrázkov pri hover. Pridané v CSS v4 s reduced-motion a hover/pointer guardom; konceptový HEAD pred zmenou zvlášť zálohovaný.

FOLLOW-UP CARD SIZING: používateľ upozornil na neprimerane veľké produktové boxy oproti kategóriám. CSS v5 komprimuje obrázky a vertikálne medzery natívnych produktových kariet, zväčšuje desktopové kategórie a zachováva funkcie slidera/formulárov. Konceptový HEAD pred úpravou zálohovaný.

VALIDATION V5: desktop 1280 px: kategória 214 px (predtým 181), produktová karta cca 365 px (predtým 448), celý rad cca 463 px (predtým 590). Mobil 390 px bez horizontálneho pretekania, tlačidlo 44 px. Vyhľadávanie BOSE QuietComfort zobrazilo produkty. Pridanie 1 ks GEKO do pôvodne prázdneho košíka z homepage úspešné, krok dopravy/platby sa načítal; skúšobná položka odstránená a košík znova prázdny. Objednávka ani platba sa neodosielali.

PRODUCTION FOLLOW-UP: The earlier preview-only state above is historical. This change is now published with explicit approval. Source version 18c8162f085ebcd38e6614827b4c9f98d54c2867.

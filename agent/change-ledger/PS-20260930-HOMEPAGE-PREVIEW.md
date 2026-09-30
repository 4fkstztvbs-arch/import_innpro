CHANGE_ID: PS-20260930-HOMEPAGE-PREVIEW
DATE: 2026-09-30
ACTOR: Codex
AREA: UX / homepage
URL/PAGE/SCOPE: PremiumStore.sk homepage, nezverejnený koncept Návrhára šablón
AFFECTED_PRODUCTS/PAGES: iba homepage; produktové záznamy bezo zmien
DESCRIPTION: BOSE hero, Smart Home a 3D tlač bannery, vstupy do kategórií, spodný blok domácnosti; pôvodný header/footer a natívne produkty.
REASON: implementovať používateľom zvolenú možnosť 2 do náhľadu.
HYPOTHESIS: zrozumiteľné vizuálne vstupy zlepšia objavenie relevantných kategórií/produktov.
BASELINE: aktuálny verejný web bez hero/kategóriových kariet; číselný KPI baseline nebol v tomto dizajnovom pilote stanovovaný.
PRIMARY_METRIC: pri prípadnom schválenom experimente CTR homepage -> kategória/produkt; najprv overiť impressions aj clicks.
GUARDRAIL_METRICS: konverzie, revenue/session, checkout, výkon a mobilné pretekanie.
IMPLEMENTATION: nové samostatné CSS/JS, scope body.type-index main#content; odkazy iba v konceptovom HEAD. Shoptet assets nahrané s jedinečnými názvami.
FILES_CHANGED: assets/ux/premiumstore-homepage-pilot-20260930-v3.css; assets/ux/premiumstore-homepage-pilot-20260930-v1.js; assets/ux/homepage-pilot-20260930.md; tento ledger.
COMMIT / PR: agent/homepage-preview-pilot-20260930
APPROVAL / APPROVER: používateľ 30.9.2026 výslovne schválil prvý pilot v náhľade a zálohu pred úpravami. Verejné nasadenie neschválené.
EXPERIMENT_ID: PS-HOMEPAGE-VISUAL-PILOT-20260930; bez návštevníckeho A/B experimentu.
PRE_DEPLOY_VALIDATION: pôvodné admin polia a UX assets zálohované; JS syntax; zachovanie pôvodného HEAD prefixu; uložený koncept prežil reload; CSS/JS aktívne len v preview; verejná homepage nemá pilot ani jeho asset odkazy.
DEPLOYED_AT: NOT DEPLOYED TO PRODUCTION; saved in Shoptet concept 2026-09-30.
POST_DEPLOY_VALIDATION: verejná homepage bez pilotu; vizuálna/responzívna QA konceptu pokračuje v sprievodnom protokole.
RESULT: prepared but not deployed; obchodný výsledok nehodnotený.
DECISION: REVIEW
ROLLBACK / ROLLBACK_COMMIT: odstrániť iba pridaný blok z konceptového HEAD; pri absencii iných úprav zrušiť celý koncept. Pôvodné živé assets bezo zmien. Základ a7f4d9cfc6063f22d847e24f64f162e34ec50a4e.

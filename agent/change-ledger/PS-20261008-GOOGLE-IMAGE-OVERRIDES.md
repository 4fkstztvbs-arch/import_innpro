# PS-20261008-GOOGLE-IMAGE-OVERRIDES

- CHANGE_ID: PS-20261008-GOOGLE-IMAGE-OVERRIDES
- DATE: 2026-10-08
- ACTOR: Claude (agent), na pokyn majiteľa
- AREA: Produktové fotky pre Google/Meta reklamy (reklamný nástroj Shoptet)
- URL/PAGE/SCOPE: output/{atos,kb,penta,innpro,solight}.xml, poradie <IMAGES>
- AFFECTED_PRODUCTS/PAGES: 33 produktov (zoznam v data/image-overrides.json)
- DESCRIPTION: Nový krok apply-image-overrides.js vo finalize-feed presúva vybranú fotku z galérie produktu na prvé miesto.
- REASON: Reklamný nástroj hlásil „Zásadný problém“ (produkt sa neinzeruje): 36× vodoznak/logo na fotke, 46× fotka pod 250 px. Pri 33 z nich má produkt v galérii vhodnú fotku.
- HYPOTHESIS: Opravené produkty sa začnú inzerovať v Google kampaniach.
- BASELINE: Štatistiky reklamného nástroja 18.8.–7.10.2026: 46 produktov s nízkym rozlíšením, 36 s vodoznakom.
- PRIMARY_METRIC: Počet produktov so „Zásadným problémom“ v reklamnom nástroji.
- GUARDRAIL_METRICS: Počet fotiek vo feede nezmenený; žiadne nové chyby importu obrázkov v Shoptete.
- IMPLEMENTATION: data/image-overrides.json + scripts/apply-image-overrides.js + krok v .github/actions/finalize-feed/action.yml; aplikované aj na aktuálne output/*.xml.
- FILES_CHANGED: data/image-overrides.json, scripts/apply-image-overrides.js, scripts/tests/apply-image-overrides.test.js, .github/actions/finalize-feed/action.yml, output/*.xml
- COMMIT / PR: priamo do main (tento commit)
- APPROVAL / APPROVER: majiteľ, 2026-10-08 („áno môžeš to spraviť tak“)
- EXPERIMENT_ID: —
- PRE_DEPLOY_VALIDATION: test scripts/tests/apply-image-overrides.test.js (2/2); skúšobný beh na kópiách feedov (33 prehodených, 2. beh 0 zmien, počet fotiek rovnaký); vizuálna kontrola náhradných fotiek (vzorka).
- DEPLOYED_AT: nočné sync behy 2026-10-08
- POST_DEPLOY_VALIDATION: po importe skontrolovať v reklamnom nástroji, či zmizli tieto produkty zo zoznamov
- RESULT: zatiaľ nevyhodnotené
- DECISION: —
- ROLLBACK / ROLLBACK_COMMIT: revert tohto commitu

Nevyriešené (nie je k dispozícii lepšia fotka): zámok Avatto ZSDL-A270 (logo Tuya na všetkých fotkách), diaľkové ovládače Alien (jediná reklamná fotka), HP GT52 (Icecat má len textovú tabuľku), 16 produktov s jedinou malou fotkou (6× ATOS, 10× K-B), ADATA XPG a ASICS (nie sú v našich feedoch).

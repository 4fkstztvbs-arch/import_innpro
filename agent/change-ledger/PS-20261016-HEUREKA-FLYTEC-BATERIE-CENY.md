# PS-20261016-HEUREKA-FLYTEC-BATERIE-CENY

- CHANGE_ID: PS-20261016-HEUREKA-FLYTEC-BATERIE-CENY
- DATE: 2026-10-16
- STATUS: DEPLOYED (push do main 2026-10-16 ráno, pred aktualizačným importom InnPro 09:05)
- ACTOR: Claude (agent), na pokyn majiteľa
- AREA: Heureka cenové ciele (price-targets.json), ceny InnPro
- SCOPE: data/heureka-reports/price-targets.json (−2 EAN), output/innpro.xml (PRICE_VAT 2 produkty)
- AFFECTED_PRODUCTS: 078901 Batéria Flytec V900 12000mah (EAN 5907085524870): 223,90 € → 16,00 €; 078908 Batéria pre zavážaciu loďku Flytec V030, 20 000 mAh (EAN 5907085524887): 223,90 € → 44,50 €.
- DESCRIPTION: Report premiumstore-sk_2026-10-16_07-43.csv spároval oba produkty s cenou najlacnejšieho konkurenta 224 € (Heureka karta „Flytec V066 18 000 mAh lodná batéria“, https://zavazacie-lodky.heureka.sk/flytec-v066-18-000-mah-lodna-bateria). Majiteľ potvrdil, že 224 € je cena lodiek (nesprávne párovanie) a pôvodná cena batérie je správna. Cieľové ceny odstránené a ceny v output/innpro.xml vrátené na pôvodné.
- REASON: Chybné párovanie EAN na Heureke zvýšilo cenu 14× a 5× nad správnu.
- RISK / OPEN: price-targets.json sa znovu generuje pri novom sortiment reporte; ak Heureka nechá chybné párovanie, ciele sa vytvoria znova. Treba opraviť párovanie v Heureka administrácii (Spárovanosť produktov > Párovanie ponúk) alebo doplniť v skripte blokový zoznam EAN.
- APPROVAL / APPROVER: majiteľ, 2026-10-16 („Áno, sú to určite ceny lodiek. Pôvodná cena je správna cena za batériu“)
- POST_DEPLOY_VALIDATION: po 9:05 skontrolovať cenu oboch produktov na e-shope (16 € a 44,50 €).
- ROLLBACK: nie je potrebný; pri novom reporte skontrolovať znova.

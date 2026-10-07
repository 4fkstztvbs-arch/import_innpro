# PS-20261007-HEUREKA-CPC-LIST

- CHANGE_ID: PS-20261007-HEUREKA-CPC-LIST
- DATE: 2026-10-07
- ACTOR: Claude (agent), na pokyn majiteľa
- AREA: Heureka – CPC vylúčenia (HEUREKA_HIDDEN)
- URL/PAGE/SCOPE: data/heureka-reports/cpc-hidden-products.json
- AFFECTED_PRODUCTS/PAGES: 19 produktov vrátených do Heureky, 8 nových vylúčení (zoznam nižšie)
- DESCRIPTION: Odstránenie ziskových produktov zo zoznamu CPC vylúčení a pridanie aktívnych produktov s nákladom bez objednávky.
- REASON: Dávka vylúčení zo 4.10. sa pozerala len na okno 5.9.–4.10., takže vylúčila aj produkty s augustovými objednávkami. Rozbor celého obdobia 10.8.–7.10. ukázal 19 vylúčených produktov, ktoré zarobili viac, ako stáli ich prekliky (spolu ~272 € po prekliky).
- HYPOTHESIS: Vrátené produkty prinesú objednávky so ziskom nad náklad na prekliky; nové vylúčenia znížia náklad bez objednávok (~32 € za obdobie).
- BASELINE: Heureka CPC 10.8.–7.10.: 9 321 klikov, 2 584 € bez DPH, 335 objednávok; týždeň 28.9.: 1 151 klikov, 318 €, 32 objednávok, CR 2,8 %.
- PRIMARY_METRIC: Hrubý zisk z objednávok vrátených produktov mínus ich náklad na prekliky (denné sledovanie od 8.10.).
- GUARDRAIL_METRICS: Celkový týždenný náklad na CPC, počet objednávok z Heureky, CR.
- IMPLEMENTATION: Úprava JSON zoznamu; HEUREKA_HIDDEN sa prepočíta pri najbližšom behu sync workflow dodávateľov.
- FILES_CHANGED: data/heureka-reports/cpc-hidden-products.json, agent/change-ledger/PS-20261007-HEUREKA-CPC-LIST.md
- COMMIT / PR: priamo do main (tento commit)
- APPROVAL / APPROVER: majiteľ e-shopu, 2026-10-07 v konverzácii („súhlasím s tvojimi návrhmi z reportu“)
- EXPERIMENT_ID: —
- PRE_DEPLOY_VALIDATION: node --test scripts/tests/heureka-cpc-exclusions.test.js scripts/tests/heureka-price-margin.test.js (8/8); kontrola, že vrátené produkty neskryje iné pravidlo
- DEPLOYED_AT: pri nočných sync behoch 2026-10-07/08
- POST_DEPLOY_VALIDATION: po sync behu overiť, že vrátené EAN nemajú HEUREKA_HIDDEN a pridané ho majú
- RESULT: zatiaľ nevyhodnotené
- DECISION: vyhodnotiť po 14 dňoch
- ROLLBACK / ROLLBACK_COMMIT: revert tohto commitu

Poznámka: 6 ďalších navrhnutých produktov (AT_DONCRY6, AT_DONTH812, AT_DOLGAKB35840202N, AT_DOLGMKJ40653802N, AT_DOEC40LED722N, AT_TIP-04280257) nemá vo feede EAN, preto sa nedajú vylúčiť cez tento zoznam; majú maržu pod 3 €.

## Vrátené do Heureky

- 4262533460287 `083093` Ultimea Skywave X50 Soundbar
- 6980064920015 `090304` Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne)
- 0810098382274 `083118` FunWater SUP paddleboard SUPFW07A 3,2m (modrý)
- 8592718047986 `SOL_1D76S` Solight vonkajšia otočná IP kamera
- 8809288541685 `AT_VUIR300` VU+ IR300 RCU diaľkový ovládač
- 6971636400998 `061008` 3D Tlačiareň Creality CR-10 SE
- 3045388593727 `KB_342200094838` TEFAL MB 756 G 31
- 6923520286461 `062436` Edifier R990BT Speakers (Black)
- 6972436985326 `064563` Colmi i28 smartwatch Ultra (gold)
- 6976297860129 `065087` GPS bike computer Cycplus M1
- 6930444805647 `077181` Grafický tablet Huion Kamvas 16 GEN 3 GS1563
- 5907085524146 `078895` Flytec V030 Basic zavážecí návnadová loďka 20000 mAh
- 6971131382539 `090434` Router GL.iNet Opal Wi-Fi 5
- 8594172540560 `KB_100000236690` Limo Bar Eco White
- 5905156102873 `083135` Euhomy BR001-89 70L chladnička na nápoje (čierna)
- 5905156102118 `083983` Flytec V803 RC zavážecí loďka 12000mAh
- 4711527002427 `075751` Počítačová skriňa Darkflash DB330M Mesh (čierna)
- 6975755965079 `084204` Flextail Max Pump 3-O ()
- 5905156103610 `085823` Ležérny cvičebný bicykel MERACH MR-S23B1-EU (čierny)

## Nové vylúčenia

- 5905156102231 `084433` FNIRSI SAG-55 PLUS inteligentná teplovzdušná pištoľ
- 8595181137970 `KB_100000473376` Aligator ALI BT sluchátka AH02,FM,SD,bílá AH02WT
- 6957141409169 `069217` TWS QCY MeloBuds Pro HT08 headphones, ANC (gold)
- 5900804003335 `AT_BL-82-216` Baterie olověná 12V / 12Ah XTREME / Enerwell bezúdržbový akumulátor
- 5905156108004 `089318` Spájkovacia stanica FNIRSI DWS-200F s výkonom 200 W
- 6939093016268 `KB_100002204355` POCO F9 Ultra 12/256GB Black
- 8595616500492 `AT_TIP-06560465` Impregnace na obuv INPRODUCTS 400 ml
- 5905156108165 `089331` LCR tester FNIRSI LCR-ST2Plus

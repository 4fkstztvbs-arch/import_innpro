# Kategórie mimo stromu — monacor

Kontrola z 2026-09-13 20:21 UTC.

Tieto kategórie feed zapisoval, ale v strome neexistujú. Shoptet by ich pri
importe vytvoril, preto boli **skrátené na najhlbšieho existujúceho predka** (produkty
zostali v ponuke, len o úroveň vyššie).

Zaradenie treba doriešiť: buď opraviť `categoryRenamesByPath` daného dodávateľa, alebo
kategóriu vedome pridať do Shoptetu a obnoviť `data/known-categories.json` cez
`node scripts/build-known-categories.js`.

| Kategória mimo stromu | Produktov | Zaradené namiesto toho do | Príklad produktu |
|---|---|---|---|
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie)` | 96 | `Profesionálna audio technika` | Monacor ECM-200 PA pultový mikrofón |
| `Profesionálna audio technika > Nové produkty` | 88 | `Profesionálna audio technika` | Monacor PA-4125DX 4-zónový multifunkčný mixážny zosilňovač,  |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > mikrofóny` | 78 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor ECM-402L Elektretový mikrofón so sponou |
| `Profesionálna audio technika > Káble, konektory a redukcie > Konektory a redukcie` | 48 | `Profesionálna audio technika > Káble, konektory a redukcie` | Monacor AC-71/3,5MM Telefónny adaptér |
| `Profesionálna audio technika > Káble, konektory a redukcie > Káble` | 48 | `Profesionálna audio technika > Káble, konektory a redukcie` | Monacor ACA-15/1 Stereo audio/video káblový adaptér |
| `Profesionálna audio technika > Káble, konektory a redukcie > Konektory a redukcie > XLR` | 42 | `Profesionálna audio technika > Káble, konektory a redukcie` | Neutrik NA-2FP NEUTRIK adaptér XLR/6.3 mm mono zástrčka |
| `Profesionálna audio technika > Tlmočnícke, sprievodcovské a konferenčné systémy` | 40 | `Profesionálna audio technika` | Monacor WAP-5 Zosilňovač s linkovým vstupom (na pás) |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > Statívy a držiaky pre reproduktory` | 35 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | DIV KM-12180 Stolný stojan |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > Statívy/držiaky > reproduktorov` | 35 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | KNG KM-19674 Násuvný sklopný adaptér pre reproduktorové stoj |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > mikrofóny > príslušenstvo` | 34 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | IMG Stage Line EMA-1 Adaptér pre fantomové napájanie |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > reproduktorové systémy > príslušenstvo` | 34 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | IMG Stage Line LR-1000U U-konzola |
| `Profesionálna audio technika > Svetlá > Špeciálne efekty a náplne > Príslušenstvo k špeciálnym efektom` | 34 | `Profesionálna audio technika` | BoomTone DJ BUBBLEFLUID1L Fluids |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Reproduktory` | 33 | `Profesionálna audio technika` | IMG Stage Line BAG-12M Ochranný obal pre MEGA-112MK2, MEGA-D |
| `Profesionálna audio technika > Reproduktory > Príslušenstvo k reproduktorom` | 32 | `Profesionálna audio technika` | Monacor BP-100G Dvojica banánových zástrčiek pre reproduktor |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Reproduktory > nástenné 100V` | 32 | `Profesionálna audio technika` | Monacor ESP-152/WS PA nástenný reproduktor |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Reproduktory > podhľadové 100V` | 31 | `Profesionálna audio technika` | Monacor EDL-11TW PA nástenné reproduktory |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > mikrofóny > bezdrôtové > frekvencie vyžadujúce povolenie na prevádzku v SR` | 31 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | IMG Stage Line TXS-606 Multifrekvenčný prijímač, 672.000-696 |
| `Profesionálna audio technika > Káble, konektory a redukcie > Konektory a redukcie > 6.3mm` | 30 | `Profesionálna audio technika > Káble, konektory a redukcie` | Monacor HA-37 Adaptér |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > reproduktorové systémy > aktívne` | 30 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor MKA-50SET/SW Aktívny 2-pásmový stereo reproduktorový |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > zosilňovače > stereo` | 30 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor SA-100 Kompaktný univerzálny stereo zosilňovač |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > Transportné kufre a racky pre audio techniku` | 28 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor MZF-8502 Kovový roh puzdra |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > Príslušenstvo k reproduktorom` | 28 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor TXA-1802CD Modul CD prehrávača |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > mikrofóny > dynamické` | 27 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | IMG Stage Line DM-065 Nostalgický dynamický mikrofón |
| `Profesionálna audio technika > Svetlá` | 27 | `Profesionálna audio technika` | JAB GD-04K Vytáčacia a riadiaca jednotka GSM |
| `Profesionálna audio technika > Reproduktory > stredo-basové` | 27 | `Profesionálna audio technika` | Monacor SP-100/8 Hi-fi stredobasový reproduktor, 30 W, 8 Ω |
| `Profesionálna audio technika > Káble, konektory a redukcie > Káble > XLR` | 26 | `Profesionálna audio technika > Káble, konektory a redukcie` | Monacor MCA-127J Audio pripájací kábel, 1 m |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > transportné kufre a racky > príslušenstvo > ostatné` | 25 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor RH-200 482 mm (19") montážna doska, 2 RS |
| `Profesionálna audio technika > Reproduktory > výškové` | 25 | `Profesionálna audio technika` | Monacor AIRMT-85 Špičkový výškový reproduktor Air Motion Tra |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > Príslušenstvo pre pódiové a DJ vybavenie` | 25 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | ADV AT-202/SW Gaffa páska, čierna |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > Statívy/držiaky > Príslušenstvo k statívom a držiakom` | 24 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor BAG-10MS Nylonová taška na stojany |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Reproduktory > nástenné` | 23 | `Profesionálna audio technika` | Monacor EUL-26/SW Dvojice miniatúrnych PA reproduktorových s |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > mikrofóny > náhlavové` | 23 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor HM-30 Dynamický mikrofón s hlavovým oblúkom |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > IP reproduktory a ozvučovacie systémy` | 23 | `Profesionálna audio technika` | Monacor AKB-160DT PA zosilňovač |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Regulátory hlasitosti` | 22 | `Profesionálna audio technika` | Monacor ATT-1950 6-pásmový ovládač hlasitosti PA pre 482 mm  |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > mikrofóny > husí krk` | 22 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor DMG-400 Dynamický mikrofón husí krk, 385 mm |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > PA ozvučovacie systémy pre pódium a DJ` | 22 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | IMG Stage Line L-RAY/1000 L-RAY/1000 |
| `Profesionálna audio technika > Reproduktory > Príslušenstvo k reproduktorom > kondenzátory` | 22 | `Profesionálna audio technika` | Monacor LSC-1000NP Bipolárny elektrolytický kondenzátor 1.5- |
| `Profesionálna audio technika > Reproduktory > Príslušenstvo k reproduktorom > cievky` | 22 | `Profesionálna audio technika` | Monacor LSIF-330/1 Feritová cievka, 3.3 mH |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > mixy a powermixy > audio (MMX-)` | 22 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | IMG Stage Line MMX-11USB MMX-11USB, 2-kanálový miniatúrny au |
| `Profesionálna audio technika > Káble, konektory a redukcie > Konektory a redukcie > RCA` | 22 | `Profesionálna audio technika > Káble, konektory a redukcie` | Neutrik NA-2MPMF NEUTRIK adaptér XLR/RCA jack |
| `Profesionálna audio technika > Svetlá > Diskotékové a pódiové svetelné efekty` | 22 | `Profesionálna audio technika` | BoomTone DJ BEEFXLZR Led Lighting Effects |
| `Profesionálna audio technika > Káble, konektory a redukcie > Káble > reproduktorové na kotúči` | 21 | `Profesionálna audio technika > Káble, konektory a redukcie` | Monacor SPC-515/SW Reproduktorový kábel, 2 x 1.5 mm2, 100 m |
| `Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika` | 21 | `Profesionálna audio technika` | ORG CF-120M/BB Axiálny ventilátor |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > reproduktorové systémy > pasívne` | 21 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor CLUB-1TOP CLUB-1TOP, reproduktorové systémy, profesi |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > mikrofóny > elektretové/veľkomembránové` | 21 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor ECM-10/SW Vstavané fantomové mikrofóny |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > mikrofóny > bezdrôtové` | 21 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | JTS BAG-BELT/L Kapsa s opaskom |
| `Profesionálna audio technika > JTS > Inštalácie > Inštalačné mikrofóny` | 21 | `Profesionálna audio technika` | JTS CM-22G6B Závesný kondenzátorový mikrofón |
| `Profesionálna audio technika > Tlmočnícke, sprievodcovské a konferenčné systémy > Bezdrôtový, sprievodcovský systém` | 20 | `Profesionálna audio technika` | Monacor ATS-20R 16-kanálový miniatúrny prijímač |
| `Profesionálna audio technika > Reproduktory > Príslušenstvo k reproduktorom > rezistory` | 20 | `Profesionálna audio technika` | Monacor LSR-100/20 Výkonný cementový odpor, 10 Ω, 20 W |
| `Profesionálna audio technika > Káble, konektory a redukcie > Neutrik > XLR` | 20 | `Profesionálna audio technika > Káble, konektory a redukcie` | Neutrik NA-2FP NEUTRIK adaptér XLR/6.3 mm mono zástrčka |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Zosilňovače > zónové` | 20 | `Profesionálna audio technika` | Monacor PA-1120 5-zónový mono PA mixážny zosilňovač |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Prenosné PA ozvučovacie systémy` | 20 | `Profesionálna audio technika` | Monacor TXA-1000BAG Ochranné puzdro |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Matrix/mixy audio` | 19 | `Profesionálna audio technika` | Monacor ARM-880 Audio matrix router |
| `Profesionálna audio technika > Svetlá > Statívy a príslušenstvo pre svetlá` | 19 | `Profesionálna audio technika` | Monacor CU-4 4-kanálový bezdrôtový LED ovládač |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Reproduktory > podhľadové` | 19 | `Profesionálna audio technika` | Monacor SPE-110P/WS Podomietkové reproduktory odolné voči po |
| `Profesionálna audio technika > Svetlá > Špeciálne efekty a náplne` | 19 | `Profesionálna audio technika` | BoomTone DJ CIRRUS1000 Heavy Fog Machine |
| `Profesionálna audio technika > Reproduktory > Príslušenstvo k reproduktorom > terminály` | 18 | `Profesionálna audio technika` | Monacor BP-260G Dvojica reproduktorových pólových svoriek |
| `Profesionálna audio technika > Káble, konektory a redukcie > Káble > reproduktorové` | 18 | `Profesionálna audio technika > Káble, konektory a redukcie` | Monacor MSC-102/SW Reproduktorový kábel, 2 m, 2-pólový NEUTR |
| `Profesionálna audio technika > Tlmočnícke, sprievodcovské a konferenčné systémy > Konferenčný systém` | 18 | `Profesionálna audio technika` | JTS CS-1CH Predsednícka mikrofónna stanica |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Reproduktory > reproduktorové stĺpiky 100V` | 17 | `Profesionálna audio technika` | Monacor ETS-210TW/WS PA stĺpové reproduktory, hliníkové, sli |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Reproduktory > tlakové 100V` | 17 | `Profesionálna audio technika` | Monacor IT-110 Tlakový reproduktor |
| `Profesionálna audio technika > JTS > Mikrofóny a bezdrôtové systémy > Príslušenstvo` | 17 | `Profesionálna audio technika` | JTS 801C3 Pripojovací kábel |
| `Profesionálna audio technika > Svetlá > Architektonické LED osvetlenie` | 17 | `Profesionálna audio technika` | BoomTone DJ BEAMBAR Led Bar |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Zosilňovače > mixážne` | 16 | `Profesionálna audio technika` | Monacor PA-102 Mono PA mixážny zosilňovač |
| `Profesionálna audio technika > JTS > Inštalácie` | 16 | `Profesionálna audio technika` | JTS D7P-10 Predlžovací kábel,  10 m |
| `Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Stavebnice reproduktorových skríň DIY` | 15 | `Profesionálna audio technika` | Monacor AH-63/SW Úžitkové puzdro, 65 x 36.5 x 207 mm, čierne |
| `Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Meracie prístroje` | 15 | `Profesionálna audio technika` | Monacor CC-313 Testovacie káble |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > mikrofóny > pre hudobné nástroje` | 15 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | IMG Stage Line ECM-250 Set elektretových mikrofónov |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > mixy a powermixy` | 15 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | IMG Stage Line MPX-20USB 3-kanálový stereo DJ mix |
| `Profesionálna audio technika > Reproduktory > univerzálne` | 15 | `Profesionálna audio technika` | Monacor SP-10/4S Univerzálny reproduktor, 15 W, 4 Ω |
| `Profesionálna audio technika > JTS > Inštalácie > Inštalačné konferenčné systémy JTS` | 15 | `Profesionálna audio technika` | JTS CS-1CH Predsednícka mikrofónna stanica |
| `Profesionálna audio technika > JTS > Mikrofóny a bezdrôtové systémy > Bezdrôtové systémy` | 15 | `Profesionálna audio technika` | JTS JSS-20/5 Dynamický rúčkový UHF PLL mikrofón |
| `Profesionálna audio technika > Svetlá > Špeciálne efekty a náplne > Výrobníky dymu` | 15 | `Profesionálna audio technika` | BoomTone DJ F1000PRO Smoke Machine |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Reproduktory > tlakové` | 14 | `Profesionálna audio technika` | Monacor DH-10 Tlakový reproduktor |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Zosilňovače > koncové` | 14 | `Profesionálna audio technika` | Monacor PA-1250D PA výkonový zosilňovač mono triedy D |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Reproduktory > príslušenstvo` | 13 | `Profesionálna audio technika` | Monacor AR-30 Budič / rezonátor odolný voči počasiu, 8 Ω |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > reproduktorové systémy > subwoofery` | 13 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor CLUB-1SUB Profesionálny subwoofer, 600 W/8 Ω or 2 Ω  |
| `Profesionálna audio technika > Reproduktory` | 13 | `Profesionálna audio technika` | Monacor MHD-1255/VC Náhradná hlasová cievka pre MHD-55 a MHD |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > mikrofóny > bezdrôtové > Príslušenstvo k bezdrôtovým mikrofónom` | 13 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | IMG Stage Line RCB-870 482 mm (19") držiak zariadenia, 1 U |
| `Profesionálna audio technika > Reproduktory > širokopásmové` | 13 | `Profesionálna audio technika` | Monacor SP-205/8 Univerzálny reproduktor s plným rozsahom, 8 |
| `Profesionálna audio technika > JTS` | 13 | `Profesionálna audio technika` | JTS CM-22G6B Závesný kondenzátorový mikrofón |
| `Profesionálna audio technika > Svetlá > Otočné hlavy a skenery > Moving Heads Beam` | 13 | `Profesionálna audio technika` | BoomTone DJ MAXIBEAM100 Moving Heads Beam |
| `Profesionálna audio technika > Káble, konektory a redukcie > Káble > napájacie` | 12 | `Profesionálna audio technika > Káble, konektory a redukcie` | Monacor AAC-100IEC Sieťový kábel |
| `Profesionálna audio technika > Káble, konektory a redukcie > Káble > mikrofónové / audio na kotúči` | 12 | `Profesionálna audio technika > Káble, konektory a redukcie` | Monacor AC-102/SW Audio kábel, 100 m |
| `Profesionálna audio technika > Car audio > Príslušenstvo pre autorádiá a car audio` | 12 | `Profesionálna audio technika > Car audio` | Monacor AES-5 Špeciálny bezdrôtový reproduktor, 3 W, 4 Ω |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Systémy požiarneho a evakuačného rozhlasu > EN54` | 12 | `Profesionálna audio technika` | Monacor EDL-165C/WS PA stropný reproduktor |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Systémy požiarneho a evakuačného rozhlasu` | 12 | `Profesionálna audio technika` | Monacor EDL-606EN PA stropné reproduktory |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > Statívy/držiaky > mikrofónové podlahové` | 12 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | KNG KM-210/9 Stojan pre mikrofón |
| `Profesionálna audio technika > Káble, konektory a redukcie > Neutrik > Ostatné` | 12 | `Profesionálna audio technika > Káble, konektory a redukcie` | Neutrik NAC-3FCA NEUTRIK POWERCON konektor, typ A |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > mikrofóny > bezdrôtové > frekvencie povolené v SR` | 12 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor TXA-802SR 2-kanálový multifrekvenčný prijímač |
| `Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Akumulátory, batérie a nabíjačky` | 11 | `Profesionálna audio technika` | ORG LS-14250 Lítiová batéria |
| `Profesionálna audio technika > Káble, konektory a redukcie > Napájanie` | 11 | `Profesionálna audio technika > Káble, konektory a redukcie` | Monacor AAC-150J Panelová zástrčka |
| `Profesionálna audio technika > Káble, konektory a redukcie > Káble > 6,3mm` | 11 | `Profesionálna audio technika > Káble, konektory a redukcie` | Monacor ACM-2635 Mono audio prepojovací kábel, 2 m |
| `Profesionálna audio technika > Tlmočnícke, sprievodcovské a konferenčné systémy > Bezdrôtový, sprievodcovský systém > vysielače` | 11 | `Profesionálna audio technika` | Monacor ATS-12HT Mikrofón s integrovaným vysielačom |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > Slúchadlá` | 11 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor BH-009 Profesionálne stereo slúchadlá s dynamickým m |
| `Profesionálna audio technika > Reproduktory > basové/subwoofery` | 11 | `Profesionálna audio technika` | Monacor SP-10/250PRO PA Basový reproduktor, subwoofer, 250 W |
| `Profesionálna audio technika > JTS > Mikrofóny a bezdrôtové systémy` | 11 | `Profesionálna audio technika` | JTS CM-125IF Elektretový klopový mikrofón |
| `Profesionálna audio technika > Svetlá > Otočné hlavy a skenery > Moving Heads Spot` | 11 | `Profesionálna audio technika` | BoomTone DJ MAXISPOT60 Moving Heads Spot |
| `Profesionálna audio technika > Svetlá > Otočné hlavy a skenery > Moving Heads Wash (pohyblivé hlavy)` | 11 | `Profesionálna audio technika` | BoomTone DJ ROBOWASH7X12W Moving Heads Wash |
| `Profesionálna audio technika > Káble, konektory a redukcie > Káble > iné` | 10 | `Profesionálna audio technika > Káble, konektory a redukcie` | Monacor CCX-5M Špirálový Helix kábel pre mikrofóny, Ø 5 mm |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Zosilňovače > príslušenstvo` | 10 | `Profesionálna audio technika` | Monacor DH-95N Dynamický ručný mikrofón |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > Statívy/držiaky > mikrofónové stolové` | 10 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor DMS-1 Základňa stolného mikrofónu |
| `Profesionálna audio technika > Výpredaj` | 10 | `Profesionálna audio technika` | Monacor DT-25N Neodymový Hi-Fi výškový reproduktor, 40 W, 8  |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > Audio káble a konektory` | 10 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor FS-50 Nožný spínač |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > Statívy/držiaky > Statívy pre hudobné nástroje a noty` | 10 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor GS-42/SW Gitarový stojan na elektrické a klasické gi |
| `Profesionálna audio technika > Reproduktory > Príslušenstvo k reproduktorom > nožičky a hroty` | 10 | `Profesionálna audio technika` | Monacor HF-140 Gumená nožička |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > transportné kufre a racky > Príslušenstvo k transportným kufrom a rackom` | 10 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor MZF-8502 Kovový roh puzdra |
| `Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Napájacie zdroje` | 10 | `Profesionálna audio technika` | ORG POE-130MID Power over Ethernet midspan |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Zosilňovače` | 10 | `Profesionálna audio technika` | Monacor PA-900DT Mono PA mixážny zosilňovač s modulom Dante® |
| `Profesionálna audio technika > JTS > Mikrofóny a bezdrôtové systémy > Káblové mikrofóny` | 10 | `Profesionálna audio technika` | JTS CM-22G6B Závesný kondenzátorový mikrofón |
| `Profesionálna audio technika > Svetlá > Reflektory PAR > LED PAR reflektory` | 10 | `Profesionálna audio technika` | BoomTone DJ LEDPAR7X10W5IN1 Led Par Cans |
| `Profesionálna audio technika > Káble, konektory a redukcie > Káble > RCA` | 9 | `Profesionálna audio technika > Káble, konektory a redukcie` | Monacor AC-122 Stereo audio pripojovacie káble |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Zosilňovače > s malým výkonom` | 9 | `Profesionálna audio technika` | Monacor AKB-160 PA zosilňovač |
| `Profesionálna audio technika > Tlmočnícke, sprievodcovské a konferenčné systémy > Bezdrôtový, sprievodcovský systém > Nabíjačky a príslušenstvo k sprievodcovským systémom` | 9 | `Profesionálna audio technika` | Monacor ATS-12CB Taška s integrovanou funkciou nabíjania |
| `Profesionálna audio technika > Káble, konektory a redukcie > Konektory a redukcie > 3.5/2.5mm` | 9 | `Profesionálna audio technika > Káble, konektory a redukcie` | Monacor HA-37 Adaptér |
| `Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Potenciometre, prepínače a gombíky` | 9 | `Profesionálna audio technika` | Monacor KN-11/SW Otočný gombík, čierna |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > Distribútory audio signálu` | 9 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | IMG Stage Line LC-31 2-kanálový 2-pásmový linkový zlučovač |
| `Profesionálna audio technika > Reproduktory > Príslušenstvo k reproduktorom > iné` | 9 | `Profesionálna audio technika` | Monacor MBF-85 Rámové hmoždinky pre reproduktory, súprava |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > Slúchadlá > náhlavové` | 9 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor MD-260 Stereo slúchadlá |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > transportné kufre a racky > rackové skrine` | 9 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | ORG RACK-12W Nástenná skriňa pre 482 mm (19") zariadenia, 12 |
| `Profesionálna audio technika > Svetlá > Lasery > Multicolor diskotékové lasery` | 9 | `Profesionálna audio technika` | BoomTone DJ KUB255RGB Multicolor laser |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > DI boxy a transformátory` | 8 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | IMG Stage Line DIB-100 DI box |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Mikrofóny > PTT` | 8 | `Profesionálna audio technika` | Monacor ECM-200 PA pultový mikrofón |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > mikrofóny > na stôl` | 8 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | Monacor ECM-200 PA pultový mikrofón |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Reproduktory > závesné` | 8 | `Profesionálna audio technika` | Monacor EDL-412/WS Guľový PA reproduktor odolný voči poveter |
| `Profesionálna audio technika > Káble, konektory a redukcie > Neutrik > Jack` | 8 | `Profesionálna audio technika > Káble, konektory a redukcie` | Neutrik MZT-223G 6.3 mm stereo panelová zásuvka |
| `Profesionálna audio technika > Káble, konektory a redukcie > Konektory a redukcie > Speakon/Powercon` | 8 | `Profesionálna audio technika > Káble, konektory a redukcie` | Neutrik NCJ-6FIS Combo stereo panelová samica |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Zdroje zvuku` | 8 | `Profesionálna audio technika` | Monacor DMP-102 Vkladací modul kompaktného prehrávača MP3 |
| `Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Bezdrôtové ozvučenie` | 8 | `Profesionálna audio technika` | ORG OMNI-TRACK/SW Spottune OMNI TRACK speaker, black |

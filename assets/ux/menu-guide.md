# Menu PremiumStore: mobil a obrázky

Názov zostáva **Produkty**. Na mobile: **Menu → Produkty → hlavné kategórie → podkategórie**. Názov kategórie je priamy odkaz, samostatná šípka otvára jej podkategórie. Hore je návrat späť, nižšie zostáva prihlásenie a kontakt. Desktop a rozloženia stránok sa nemenia.

## Obrázky

Pre tento návrh priprav **400 × 400 px**, PNG s priehľadným pozadím alebo JPG s bielym pozadím. Produkt má zaberať približne 80 % štvorca, bez textu, cien, rámčekov a vodoznakov. Použi jednotný pohľad a mierku; orientačne do 50–100 kB na obrázok. Sú to odporúčania pre naše menu, nie povinné limity Shoptetu.

Desktop zobrazuje obrázok v rámci 100 × 100 px (88 × 88 px na užšom desktope); mobil v rámci 46 × 46 px. Obrázok sa zmenší bez deformácie a bez orezania. Pri chýbajúcom alebo nefunkčnom obrázku zostane ikona.

Obrázok kategórie nahraj v Shoptete cez **Produkty → Kategórie → detail kategórie → Všeobecné nastavenie → Obrázok kategórie**. [Oficiálny postup Shoptetu](https://podpora.shoptet.sk/kategorie-produktov/).

Automatické prevzatie funguje, ak Shoptet obrázok danej kategórie vykreslí v natívnom menu alebo v zozname podkategórií na aktuálnej stránke. Skript hľadá iba obrázok s rovnakým odkazom kategórie; nepoužíva obrázok náhodnej podkategórie či prvého produktu. V aktuálnom HTML hlavné položky menu vlastné obrázky nemajú. Preto nemožno sľúbiť, že samotné nahranie obrázka v administrácii ho sprístupní na každej stránke.

Pre spoľahlivé zobrazenie hlavných kategórií na celom webe môžeš do pripravenej mapy doplniť URL toho istého obrázka nahraného v Shoptete. Nemusíš meniť kategórie, ich URL ani nadradenosť. Žiadne obrázky ani ich adresy sa nesťahujú z administrácie pri každom otvorení menu.

## Voliteľná mapa obrázkov

Vlož nasledujúci blok do **HTML hlavičky**, pred načítanie `premiumstore-cro.js`. Prázdne hodnoty ponechajú automatické vyhľadanie a potom ikonu. Hodnotu nahraď úplnou HTTPS adresou nahraného obrázka. JSON nedovoľuje komentáre ani čiarku za poslednou položkou.

```html
<script type="application/json" id="ps-category-images">
{
  "49635": "",
  "49644": "",
  "49659": "",
  "49647": "",
  "49668": "",
  "49638": "",
  "49650": "",
  "49641": "",
  "49662": "",
  "49653": "",
  "49656": "",
  "49665": ""
}
</script>
```

| ID | Kategória | Príklad motívu |
|---|---|---|
| 49635 | 3D tlač a digitálna výroba | 3D tlačiareň |
| 49644 | Chovateľské potreby | Pelech alebo miska |
| 49659 | Počítače, mobily a tablety | Notebook |
| 49647 | Dielňa, náradie a záhrada | Aku vŕtačka |
| 49668 | Zdravie a starostlivosť | Osobná váha |
| 49638 | Auto-moto | Autokamera |
| 49650 | Domáce spotrebiče | Vysávač |
| 49641 | Cestovanie, šport a outdoor | Turistický batoh |
| 49662 | Profesionálna audio technika | PA reproduktor |
| 49653 | Elektro, Smart Home a osvetlenie | Inteligentná žiarovka |
| 49656 | Energia a napájanie | Prenosná nabíjacia stanica |
| 49665 | TV, audio, video a foto technika | Televízor |

Motívy sú návrhy, vyber výrobky, ktoré reálne predávaš. Pri širokých kategóriách obrázok nezastúpi názov celej skupiny; preto názvy zostávajú viditeľné.

## Zákazníci a vyhľadávanie

Výhoda pre zákazníka: po otvorení Produktov má všetkých 12 hlavných oblastí na jednom mieste. Nie sú však všetky viditeľné už v zatvorenej hlavičke. Fotografie môžu pomôcť rozpoznávaniu, ale pri nejasnom alebo príliš úzkom motíve môžu aj zavádzať. Užitočné je následne sledovať používanie menu a mieru odchodov z kategórií.

Samotný vzhľad menu nezaručuje lepšie pozície v Google. Pôvodný strom a odkazy zostávajú v HTML, nové odkazy majú `href` a nemenia URL kategórií. [Google: prehľadateľné odkazy](https://developers.google.com/search/docs/crawling-indexing/links-crawlable). Dôležité zostávajú aj obsah kategórií, interné prepojenie a rýchlosť webu. Položka „Viac“ sama osebe nie je technická SEO chyba.

## Stav a nasadenie

Návrh je súčasťou PR #14, nie je zlúčený do main. Po schválení, zlúčení a publikovaní GitHub Pages nahraď existujúce odkazy:

```html
<link rel="stylesheet" href="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/premiumstore-cro.css?v=66">
<script src="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/premiumstore-cro.js?v=20"></script>
```

CSS patrí do hlavičky, JavaScript do pätičky. Nepridávaj druhý exemplár skriptu. Na 768–991 px zostáva existujúce tabletové menu; nové mobilné rozhranie rešpektuje natívny mobilný breakpoint Disco do 767 px.

Overené v lokálnom náhľade: otvorenie mobilného menu, všetkých 12 kategórií, dve ďalšie úrovne podkategórií, správne odkazy, návrat a zatvorenie, reset na úvod pri ďalšom otvorení. Pri meranom mobile 390 px nebolo horizontálne pretečenie. Podpora obrázka bola overená samostatnou testovacou mapou a testovacím SVG (400 px, zobrazené v mobilnom menu); produkčný náhľad používa pôvodné ikony. JavaScript prešiel kontrolou syntaxe a zmeny kontrolou formátu.

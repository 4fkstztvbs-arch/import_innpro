# Automatické príznaky Novinka a Akcia

**Stav: pripravené, zatiaľ NEAKTÍVNE.** Skript existuje a je otestovaný, ale zámerne nie je
zapojený do žiadneho workflowu — aktivuje sa až jedným riadkom, viď nižšie.

## Pravidlá

| Príznak | Kedy sa nastaví | Ako dlho svieti |
|---|---|---|
| `NEW` (Novinka) | produkt, ktorý v predošlom behu vo feede nebol | 3 dni |
| `ACTION` (Akcia) | produkt zlacnel o viac než 5 % | 3 dni |

**Akcia sa nastavuje len pri zlacnení.** Pôvodné zadanie znelo „zmena ceny o viac ako 5 %", ale
pri zdražení by zákazník videl akciový štítok na tovare, ktorý práve podražel — zavádzajúce
a pri kontrole problematické.

## Ktorých dodávateľov sa to týka

Len tí, ktorí vlastné príznaky neposielajú: **InnPro, K-B, Solight, MONACOR**.

**ATOS, Penta a BASYS sa nechávajú tak** — ATOS a Penta preberajú príznaky priamo od dodávateľa,
BASYS nastavuje `ACTION` pri reálnej promo cene. Prepísať ich vlastnou logikou by zahodilo
skutočné akcie od dodávateľa.

## Ako to funguje

Shoptet pri príznakoch neberie dátum platnosti (je to len 0/1), takže tie tri dni si držíme sami
v `data/product-flags-state.json`. Pri každom behu sa príznak buď nastaví (nová udalosť),
ponechá (lehota ešte beží), alebo zhasne a záznam sa zo stavu vymaže.

Predošlé ceny a zoznam kódov sa čítajú z verzie `output/<dodavatel>.xml` v poslednom commite
(`git show HEAD:...`) — transform ten súbor práve prepísal, ale v gite je ešte predošlý beh.
Netreba teda žiadnu novú databázu ani zmenu v transform skriptoch.

## Poistky

**Výpadok feedu.** Keby dodávateľ poslal prázdny alebo useknutý feed, nasledujúci deň by sa
prakticky všetky jeho produkty tvárili ako nové a e-shop by zaplavila „Novinka". Ak má predošlý
feed menej než 70 % dnešného počtu položiek, nové udalosti sa v tom behu nevyhodnocujú a dôvod
sa zaloguje ako warning. Už bežiace trojdňové lehoty dobiehajú ďalej.

**Opakované spustenie.** Skript je idempotentný — pred zápisom odstráni prípadný zvyšok `<FLAGS>`
z predošlého behu, takže sa príznaky neduplikujú a vypršaný príznak naozaj zhasne.

**Prvé zapnutie nespôsobí záplavu.** Predošlý feed obsahuje všetky súčasné kódy, takže v prvom
behu nie je nič nové ani zlacnené.

## Ako to aktivovať

Do `innpro-sync.yml`, `kb-sync.yml`, `solight-sync.yml` a `monacor-sync.yml` pridať krok
**za `Enforce tree categories`** (teda až keď sú ceny aj kategórie finálne) a pred commit:

```yaml
      - name: Príznaky Novinka a Akcia
        run: node scripts/apply-product-flags.js
```

Stavový súbor `data/product-flags-state.json` sa commitne spolu s výstupom — workflow už používa
`git add -A`.

## Overené

Na izolovanej kópii feedu Solight (200 položiek):

- zlacnenie o 10 % → `ACTION=1`
- zdraženie o 20 % → žiadny príznak
- 2 nové kódy → `NEW=1`
- druhý beh bez zmien → príznaky zostali (lehota beží)
- po vypršaní → príznaky zhasli a stav sa upratal
- predošlý feed skrátený na 10 % → nové udalosti preskočené + warning
- tri spustenia po sebe → rovnaký výsledok, žiadna duplicita

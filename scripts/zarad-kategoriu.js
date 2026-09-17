// Zaradenie produktu do stromu. Jedno pravidlo, jedno miesto.
//
// Nahrádza kaskádu ôsmich vrstiev, cez ktorú sa o zaradení rozhodovalo predtým: prefixový prepis v
// categoryRenamesByPath, bránu proti stromu, fuzzy findMatch, preklad starý->nový strom, odvodenie
// zložených ciest, výslovné pravidlá pre ne, pád na predka a orezanie v enforce-tree. Každá vrstva
// vznikla ako záplata na zlyhanie tej predchádzajúcej a dokopy sa nedalo prečítať, prečo produkt
// skončil tam, kde skončil — 13. 9. 2026 tak 6166 produktov (23 %) viselo na koreni stromu bez
// toho, aby to bolo čokoľvek rozhodnutie.
//
// Pravidlo: v data/kategorie/<dodavatel>.json sa hľadá NAJDLHŠÍ prefix cesty dodávateľa a jeho
// cieľ nahrádza CELÚ cestu. Chvost dodávateľa sa zahadzuje — práve jeho ponechávanie vyrábalo
// zložené cesty typu "Dielňa, náradie a záhrada > Meracie prístroje", ktoré v strome nie sú.
//
// Dva dôsledky, na ktorých celé zjednodušenie stojí:
//   - výsledok je VŽDY uzol stromu, takže Shoptet nemá ako vytvoriť kategóriu navyše a
//     enforce-tree-categories.js nemá čo orezávať,
//   - keď pravidlo nesedí, opraví sa jeden riadok v jednom súbore namiesto ladenia ôsmich vrstiev.
//
// Cesta bez pravidla sa NEHÁDA: produkt sa vráti bez kategórie a nahlási sa. Skôr to bol dôvod
// produkt zahodiť alebo ho fuzzy odhadom poslať inam; jedno aj druhé bolo horšie než priznať, že
// pravidlo chýba. Súbory generuje scripts/build-category-rules.py.

const fs = require('fs');
const path = require('path');

const KOREN = path.join(__dirname, '..');
const STROM = new Set(JSON.parse(
  fs.readFileSync(path.join(KOREN, 'data', 'known-categories.json'), 'utf-8')));

// Shoptet páruje kategórie podľa URL slugu, takže "Stacionárne Bicykle" a "Stacionárne bicykle" sú
// preň tá istá kategória. Porovnáva sa preto normalizovane, rovnako ako všade inde v pipeline.
function normalizuj(s) {
  return String(s || '').split(' > ')
    .map((seg) => seg.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, ' ').trim())
    .join(' > ');
}

const STROM_NORM = new Map();
for (const uzol of STROM) STROM_NORM.set(normalizuj(uzol), uzol);

function vytvorZaradovac(dodavatel) {
  const suborPravidiel = path.join(KOREN, 'data', 'kategorie', `${dodavatel}.json`);
  let pravidla = new Map();
  try {
    const surove = JSON.parse(fs.readFileSync(suborPravidiel, 'utf-8')).pravidla || {};
    for (const [zdroj, ciel] of Object.entries(surove)) pravidla.set(normalizuj(zdroj), ciel);
  } catch {
    // Dodávateľ bez súboru pravidiel (BASYS, MONACOR, WiiM zapisujú kategórie priamo).
  }

  const chybajuce = new Map(); // zdrojová cesta -> { cesta, pocet, priklady: [] }
  // KAŽDÁ cesta z feedu a to, kam viedla — nielen tie bez pravidla. Presne tento prehľad dovolil
  // 13. 9. 2026 nahradiť kaskádu ôsmich vrstiev jednou tabuľkou pravidiel; keď sa prestal písať,
  // stratili sme možnosť zistiť, ako má dodávateľ sortiment rozdelený, a pri novom tovare sa
  // cieľová kategória dala už len odhadovať z názvov produktov.
  const vsetky = new Map(); // zdrojová cesta -> Map(cieľ -> počet)

  function zapis(zdrojovaCesta, ciel) {
    const zaznam = vsetky.get(zdrojovaCesta) || new Map();
    zaznam.set(ciel, (zaznam.get(ciel) || 0) + 1);
    vsetky.set(zdrojovaCesta, zaznam);
  }

  function zarad(zdrojovaCesta, { produkt } = {}) {
    if (!zdrojovaCesta) return { kategoria: '', chyba: false };

    const segs = String(zdrojovaCesta).split(' > ');
    for (let d = segs.length; d > 0; d--) {
      const ciel = pravidla.get(normalizuj(segs.slice(0, d).join(' > ')));
      if (!ciel) continue;
      // Cieľ pravidla musí byť uzol stromu. Keď nie je, je chybné pravidlo — nie dôvod hádať.
      const vStrome = STROM_NORM.get(normalizuj(ciel));
      if (vStrome) { zapis(zdrojovaCesta, vStrome); return { kategoria: vStrome, chyba: false }; }
    }
    zapis(zdrojovaCesta, '(bez pravidla)');

    const zaznam = chybajuce.get(zdrojovaCesta)
      || { cesta: zdrojovaCesta, pocet: 0, priklady: [] };
    zaznam.pocet++;
    if (produkt && zaznam.priklady.length < 5) zaznam.priklady.push(produkt);
    chybajuce.set(zdrojovaCesta, zaznam);
    return { kategoria: '', chyba: true };
  }

  // Predkovia cieľa — Shoptet ich čaká ako ďalšie <CATEGORY>, aby produkt bol aj vo vyšších úrovniach.
  function predkovia(kategoria) {
    const segs = String(kategoria || '').split(' > ');
    const out = [];
    for (let i = 1; i < segs.length; i++) out.push(segs.slice(0, i).join(' > '));
    return out;
  }

  function zapisReport() {
    const cesta = path.join(KOREN, 'reports', `chybajuce-pravidla-${dodavatel}.md`);
    const r = [`# Chýbajúce pravidlá zaradenia — ${dodavatel}`, '',
      `Kontrola z ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC.`, ''];
    if (!chybajuce.size) {
      r.push('_Žiadne — každá cesta z feedu má pravidlo._');
    } else {
      const spolu = [...chybajuce.values()].reduce((s, z) => s + z.pocet, 0);
      r.push(`**${chybajuce.size} ciest bez pravidla, ${spolu} produktov bez kategórie.**`, '',
        `Doplň ich do \`data/kategorie/${dodavatel}.json\` — kľúč je cesta z feedu, hodnota uzol`,
        'stromu. Stačí pravidlo na spoločnom prefixe, platí pre celú vetvu pod ním.', '',
        '| Cesta z feedu | Produktov | Príklady |', '|---|---|---|');
      for (const z of [...chybajuce.values()].sort((a, b) => b.pocet - a.pocet)) {
        r.push(`| \`${z.cesta}\` | ${z.pocet} | ${z.priklady.join('; ')} |`);
      }
    }
    fs.mkdirSync(path.dirname(cesta), { recursive: true });
    fs.writeFileSync(cesta, r.join('\n') + '\n');

    // Surové cesty dodávateľa a to, kam dnes vedú. Zámerne sa prepisuje celý súbor, nie zlučuje
    // so starým: zlúčením by v ňom navždy ostávali kategórie, ktoré dodávateľ už neposiela, a
    // súbor by prestal odpovedať na otázku "ako to má dodávateľ rozdelené TERAZ".
    if (vsetky.size) {
      const dir = path.join(KOREN, 'data', 'zdrojove-kategorie');
      fs.mkdirSync(dir, { recursive: true });
      const out = {};
      for (const [zdroj, ciele] of [...vsetky].sort((a, b) => a[0].localeCompare(b[0]))) {
        out[zdroj] = Object.fromEntries([...ciele].sort((a, b) => b[1] - a[1]));
      }
      fs.writeFileSync(path.join(dir, `${dodavatel}.json`), JSON.stringify(out, null, 1) + '\n');
    }

    return {
      cestyBezPravidla: chybajuce.size,
      produktyBezPravidla: [...chybajuce.values()].reduce((s, z) => s + z.pocet, 0),
    };
  }

  return { zarad, predkovia, zapisReport, pocetPravidiel: pravidla.size };
}

module.exports = { vytvorZaradovac, normalizuj };

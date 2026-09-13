// Guard rail against uncontrolled category-tree sprawl.
//
// Background: transform-innpro.js / transform-atos.js / transform-kb.js / transform-solight.js
// each apply a hand-curated categoryRenamesByPath override on top of the supplier feed's own
// category text, but when a specific category (or none of its ancestors) has no override, the
// code has always fallen back to the RAW feed category name verbatim. Any time a supplier feed
// introduces a category we've never explicitly reviewed, that raw text got written straight into
// the Shoptet XML — and Shoptet's automatic import auto-creates it as a brand new live category.
// Over time this silently sprawled the tree with near-duplicates, untranslated CZ/PL leftovers,
// and one-off nodes that were never a deliberate decision (see reports/nezaradene-kategorie-*.md
// for what this has caught, and the 2026-08-24 cleanup commit for the retroactive fix).
//
// data/known-categories.json is a snapshot of the real, live Shoptet category tree (built by
// scripts/build-known-categories.js from a Shoptet category export). It is the source of truth
// for "an existing category" — NOT auto-updated by any *-sync.yml workflow, so the known tree only
// grows when a human deliberately regenerates it (after reviewing a nezaradene-kategorie report,
// or after manually adding a real new category in Shoptet).
//
// Usage per transform script: only gate categories that were NOT reached via an explicit
// categoryRenamesByPath override (those stay fully trusted, unchanged — someone already reviewed
// them). For everything else, resolve(category) either passes it through (already a known live
// category), silently upgrades it to the closest known near-duplicate (near-identical spelling,
// same parent — see findMatch), or excludes the product and logs it for review.

const fs = require('fs');
const path = require('path');

function normalize(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // strip diacritics
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n;
  if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = a[i - 1] === b[j - 1] ? prev[j - 1] : 1 + Math.min(prev[j - 1], prev[j], cur[j - 1]);
    }
    prev = cur;
  }
  return prev[n];
}

// 1.0 = identical after normalization, 0.0 = nothing in common.
function similarity(a, b) {
  const na = normalize(a), nb = normalize(b);
  if (!na || !nb) return 0;
  if (na === nb) return 1;
  const dist = levenshtein(na, nb);
  return 1 - dist / Math.max(na.length, nb.length);
}

const KNOWN_PATH = path.join(__dirname, '..', 'data', 'known-categories.json');

function loadKnownCategories() {
  return JSON.parse(fs.readFileSync(KNOWN_PATH, 'utf-8'));
}

// Shoptet matches an incoming feed category to an existing one by its URL slug, which is
// diacritics-stripped and lowercased — so "Vybavenie autá" (what the ATOS feed emits) and
// "Vybavenie auta" (what the live tree stores) are the SAME category to Shoptet, both slugging to
// "vybavenie-auta". Comparing raw strings across those two sources therefore produces false
// "unknown category" verdicts; every lookup against the known tree must go through this instead.
// Verified 2026-08-24: 102 live categories under Auto-moto differ from our XML by exactly this.
function normalizePath(p) {
  return String(p || '')
    .split(' > ')
    .map((seg) => normalize(seg))
    .join(' > ');
}

function splitLeaf(fullPath) {
  const idx = fullPath.lastIndexOf(' > ');
  return idx === -1 ? { parent: '', leaf: fullPath } : { parent: fullPath.slice(0, idx), leaf: fullPath.slice(idx + 3) };
}

// Prekladová vrstva starý strom -> nový strom (2026-09-13).
//
// Transformy stavajú cestu z kategórie dodávateľa a `categoryRenamesByPath` pokrýva len tie, na
// ktorých sa niekto vedome rozhodol; zvyšok prejde tak, ako prišiel z feedu. Kým bol
// known-categories.json snímkou starého Shoptet stromu, tieto surové cesty v ňom boli (starý strom
// z feedov postupne vyrástol), takže bránou prešli. Po prepnutí na kurátorovaný strom (252 ciest)
// by ich brána zahodila aj s produktmi — pri prvom behu InnPro to bolo 6112 produktov.
//
// Tento súbor preto prekladá každú cestu starého stromu na jej náprotivok v novom (1341 záznamov,
// pokrýva všetky cesty, ktoré transformy dnes reálne produkujú). Aplikuje sa PRED bránou, takže
// brána už vidí cestu nového stromu a produkt neprepadne.
const OLD_TO_NEW_PATH = path.join(__dirname, '..', 'data', 'stary-novy-strom.json');
let OLD_TO_NEW_NORM = null;
function loadOldToNew() {
  if (OLD_TO_NEW_NORM) return OLD_TO_NEW_NORM;
  OLD_TO_NEW_NORM = new Map();
  try {
    const raw = JSON.parse(fs.readFileSync(OLD_TO_NEW_PATH, 'utf-8'));
    // kľúčuje sa normalizovane z rovnakého dôvodu ako isKnownPath — Shoptet páruje podľa slugu
    for (const [from, to] of Object.entries(raw)) OLD_TO_NEW_NORM.set(normalizePath(from), to);
  } catch {
    // súbor je voliteľný: pred prepnutím na nový strom neexistoval a nič ho nepotrebovalo
  }
  return OLD_TO_NEW_NORM;
}

// supplierName: used only for the report filename (reports/nezaradene-kategorie-<supplierName>.md).
function createCategoryMatcher(supplierName) {
  const known = loadKnownCategories();
  const oldToNew = loadOldToNew();
  const knownSet = new Set(known);
  const knownByNorm = new Set(known.map(normalizePath));
  const byParent = new Map();
  for (const p of known) {
    const { parent, leaf } = splitLeaf(p);
    if (!byParent.has(parent)) byParent.set(parent, []);
    byParent.get(parent).push({ path: p, leaf });
  }
  // Slug-equal to something in the live tree == already an existing category (see normalizePath).
  function isKnownPath(p) { return knownSet.has(p) || knownByNorm.has(normalizePath(p)); }

  // Zložená cesta: `categoryRenamesByPath` prepisuje iba PREFIX cesty dodávateľa, takže z pravidla
  // "Druhy > NÁŘADÍ  DÍLNA" -> "Dielňa, náradie a záhrada" vznikne cesta, ktorá má nový koreň, ale
  // starý chvost: "Dielňa, náradie a záhrada > Meracie prístroje". Taká cesta nie je ani v strome,
  // ani v prekladovej mape (tá je kľúčovaná starými cestami), takže by prepadla až na koreň.
  //
  // Stačí ale koreň dočasne vrátiť na starý a mapu sa spýtať znova: "Náradie a dielňa > Meracie
  // prístroje" v nej je a vedie na "Dielňa, náradie a záhrada > Meracia technika". Skúšajú sa
  // všetky staré korene, ktoré sa na tento nový premenovali, a postupne aj kratšie chvosty.
  const oldRootsByNew = new Map();
  for (const [from, to] of oldToNew) {
    // kľúč aj hodnota normalizovane — `from` je už normalizovaný kľúč mapy, `to` je surová cesta
    const novy = normalizePath(String(to).split(' > ')[0]);
    if (!oldRootsByNew.has(novy)) oldRootsByNew.set(novy, new Set());
    oldRootsByNew.get(novy).add(from.split(' > ')[0]);
  }
  // Výslovné pravidlá pre zložené cesty, ktoré sa odvodiť nedajú — chvost v starom strome pod
  // týmto koreňom nikdy nebol, alebo patrí do inej vetvy nového stromu. Majú prednosť pred
  // odvodením, lebo sú to rozhodnutia človeka.
  const ZLOZENE = new Map();
  try {
    const raw = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'zlozene-cesty.json'), 'utf-8'));
    for (const [from, to] of Object.entries(raw.cesty || {})) ZLOZENE.set(normalizePath(from), to);
  } catch { /* súbor je voliteľný */ }

  function prelozZlozenu(cesta) {
    const vyslovne = ZLOZENE.get(normalizePath(cesta));
    if (vyslovne && isKnownPath(vyslovne)) return vyslovne;

    const segs = String(cesta).split(' > ');
    const stareKorene = oldRootsByNew.get(normalizePath(segs[0]));
    if (!stareKorene || segs.length < 2) return null;
    const pouzitelny = (ciel) => ciel && isKnownPath(ciel)
      && normalizePath(ciel) !== normalizePath(segs[0]) ? ciel : null;
    for (let d = segs.length - 1; d >= 1; d--) {
      const chvost = segs.slice(1, d + 1);
      // Chvost môže sám začínať starým koreňom ("Dielňa, náradie a záhrada > Kreatívne technológie
      // > 3D tlač > Vlákna") — vtedy je celý chvost rovno starou cestou a nový koreň sa zahodí.
      const zChvosta = pouzitelny(oldToNew.get(normalizePath(chvost.join(' > '))));
      if (zChvosta) return zChvosta;
      for (const stary of stareKorene) {
        const ciel = pouzitelny(oldToNew.get(normalizePath([stary, ...chvost].join(' > '))));
        if (ciel) return ciel;
      }
    }
    return null;
  }

  function findMatch(unknownPath) {
    const { parent, leaf } = splitLeaf(unknownPath);

    // Tier 1 (highest confidence): the parent already exists as a known node, and one of its
    // known children is a near-spelling-variant of this leaf (e.g. "Odražedla" vs "Odrážadlá",
    // both already living under the same known "... > Sportovní vybavenie").
    if (isKnownPath(parent) && byParent.has(parent)) {
      let best = null, bestScore = 0;
      for (const c of byParent.get(parent)) {
        const score = similarity(leaf, c.leaf);
        if (score > bestScore) { bestScore = score; best = c; }
      }
      if (best && bestScore >= 0.82) return { path: best.path, score: bestScore, tier: 'same-parent' };
    }

    // Tier 2 (lower confidence): a near-exact leaf name exists ANYWHERE in the tree AND the
    // parent path is also at least a plausible textual match — guards against merging e.g. a new
    // "Karaoke" under Audio technika into an unrelated "Karaoke" under toys.
    let best = null, bestScore = 0;
    for (const p of known) {
      const kp = splitLeaf(p);
      const leafScore = similarity(leaf, kp.leaf);
      if (leafScore < 0.9) continue;
      const parentScore = similarity(parent, kp.parent);
      const score = leafScore * 0.7 + parentScore * 0.3;
      if (score > bestScore) { bestScore = score; best = p; }
    }
    if (best && bestScore >= 0.85) return { path: best, score: bestScore, tier: 'leaf-anywhere' };

    return null;
  }

  const unmatched = new Map(); // category -> { category, count, examples: [] }
  const autoMatched = new Map(); // "from|to" -> { from, to, score, count }
  const ancestorMatched = new Map(); // "from|to" -> { from, to, count } — preklad podľa predka
  const composedMatched = new Map(); // "from|to" -> { from, to, count } — zložená cesta

  // trusted=true skips the gate entirely (category came from an explicit, human-reviewed rename).
  function resolve(category, { trusted, productLabel } = {}) {
    if (!category || trusted) return { category, excluded: false, redirected: false };

    // Preklad starý strom -> nový beží ešte pred bránou, nech brána vidí cestu, ktorá v strome
    // naozaj je. Bez toho by produkt prepadol, hoci preň existuje presné miesto.
    const prelozene = oldToNew.get(normalizePath(category));
    if (prelozene) return { category: prelozene, excluded: false, redirected: true };
    // Pass the ORIGINAL string through untouched when it's already a known category (possibly only
    // slug-equal) — rewriting it to the tree's spelling would be a no-op for Shoptet's matching but
    // could churn the live category title, so leave today's import behaviour exactly as it is.
    if (isKnownPath(category)) return { category, excluded: false, redirected: false };

    // Zložená cesta (nový koreň + starý chvost) sa rieši ešte pred fuzzy hľadaním: ide o odvodenie
    // z kurátorovanej mapy, kým findMatch je odhad podľa podobnosti názvu.
    const zoZlozenej = prelozZlozenu(category);
    if (zoZlozenej) {
      const key = category + '|' + zoZlozenej;
      const r = composedMatched.get(key) || { from: category, to: zoZlozenej, count: 0 };
      r.count++;
      composedMatched.set(key, r);
      return { category: zoZlozenej, excluded: false, redirected: true };
    }

    const m = findMatch(category);
    if (m) {
      const key = category + '|' + m.path;
      const rec = autoMatched.get(key) || { from: category, to: m.path, score: m.score, count: 0 };
      rec.count++;
      autoMatched.set(key, rec);
      return { category: m.path, excluded: false, redirected: true };
    }

    // Posledná záchrana pred zahodením: preložiť podľa najhlbšieho PREDKA, ktorý v mape je. Starý
    // strom mal 2928 uzlov a mapa pokrýva 1342 z nich — zvyšok sú hlbšie vetvy, ktoré nový strom
    // vedome nemá (napr. "Auto-moto > Autorádiá > Autorádiá s CD" pod zlúčeným "Autorádiá"). Bez
    // tohto kroku by produkt vypadol celý, hoci preň miesto o úroveň vyššie existuje. So záchranou
    // pokrýva mapa 2927 z 2928 uzlov starého stromu.
    const segs = String(category).split(' > ');
    for (let depth = segs.length - 1; depth > 0; depth--) {
      const cesta = segs.slice(0, depth).join(' > ');
      // Predok môže byť v mape (stará cesta) alebo už priamo v novom strome — korene ako
      // "Auto-moto" si meno nechali, takže pre ne mapa žiaden záznam nemá.
      const predok = oldToNew.get(normalizePath(cesta)) || (isKnownPath(cesta) ? cesta : null);
      if (predok) {
        const key = category + '|' + predok;
        const r = ancestorMatched.get(key) || { from: category, to: predok, count: 0 };
        r.count++;
        ancestorMatched.set(key, r);
        return { category: predok, excluded: false, redirected: true };
      }
    }

    const rec = unmatched.get(category) || { category, count: 0, examples: [] };
    rec.count++;
    if (productLabel && rec.examples.length < 5) rec.examples.push(productLabel);
    unmatched.set(category, rec);
    return { category: '', excluded: true, redirected: false };
  }

  function writeReport() {
    const reportPath = path.join(__dirname, '..', 'reports', `nezaradene-kategorie-${supplierName}.md`);
    const lines = [];
    lines.push(`# Nezaradené kategórie — ${supplierName}`);
    lines.push('');
    lines.push('Vygenerované automaticky pri poslednom behu importu. Tieto kategórie z feedu sa');
    lines.push('nezhodujú so žiadnou existujúcou kategóriou v `data/known-categories.json` (živý strom');
    lines.push('Shoptetu) ani s jej blízkym pravopisným variantom — produkty pod nimi sa preto');
    lines.push('**NEIMPORTUJÚ**, kým sa niekto nerozhodne, kam patria:');
    lines.push(`- ak ide o skutočne novú, žiadanú kategóriu → pridať ju do Shoptetu a znova spustiť`);
    lines.push(`  \`node scripts/build-known-categories.js <čerstvý export> data/known-categories.json\`,`);
    lines.push(`- ak má patriť pod existujúcu kategóriu inak pomenovanú → pridať záznam do`);
    lines.push(`  \`categoryRenamesByPath\` v \`scripts/${supplierName}-mapping.json\`.`);
    lines.push('');
    if (!unmatched.size) {
      lines.push('_Žiadne — všetky kategórie z tohto behu sa napárovali na existujúci strom._');
    } else {
      const total = [...unmatched.values()].reduce((s, r) => s + r.count, 0);
      lines.push(`**${unmatched.size} nenapárovaných kategórií, ${total} produktov nenaimportovaných.**`);
      lines.push('');
      lines.push('| Kategória z feedu | Počet produktov | Príklady produktov |');
      lines.push('|---|---|---|');
      const sorted = [...unmatched.values()].sort((a, b) => b.count - a.count);
      for (const r of sorted) lines.push(`| ${r.category} | ${r.count} | ${r.examples.join('; ')} |`);
    }
    if (autoMatched.size) {
      lines.push('');
      lines.push('## Automaticky napárované na existujúcu kategóriu (blízky pravopisný variant)');
      lines.push('');
      lines.push('| Kategória z feedu | Napárované na | Zhoda | Počet produktov |');
      lines.push('|---|---|---|---|');
      const sortedM = [...autoMatched.values()].sort((a, b) => b.count - a.count);
      for (const r of sortedM) lines.push(`| ${r.from} | ${r.to} | ${(r.score * 100).toFixed(0)}% | ${r.count} |`);
    }
    if (composedMatched.size) {
      lines.push('');
      lines.push('## Zložená cesta preložená cez starý koreň');
      lines.push('');
      lines.push('`categoryRenamesByPath` prepisuje iba prefix cesty, takže vznikla cesta s novým');
      lines.push('koreňom a starým chvostom. Zaradenie je odvodené z `data/stary-novy-strom.json`.');
      lines.push('');
      lines.push('| Cesta z feedu | Zaradené do | Počet produktov |');
      lines.push('|---|---|---|');
      for (const r of [...composedMatched.values()].sort((a, b) => b.count - a.count)) {
        lines.push(`| ${r.from} | ${r.to} | ${r.count} |`);
      }
    }
    if (ancestorMatched.size) {
      lines.push('');
      lines.push('## Preložené na predka zo starého stromu');
      lines.push('');
      lines.push('Nový strom tieto hlbšie vetvy vedome nemá — zlúčil ich do nadradenej kategórie.');
      lines.push('Produkt zostáva v ponuke, len o úroveň vyššie. Ak si niektorá z nich zaslúži');
      lines.push('vlastnú kategóriu, pridať ju do stromu a do `data/stary-novy-strom.json`.');
      lines.push('');
      lines.push('| Kategória z feedu | Zaradené do | Počet produktov |');
      lines.push('|---|---|---|');
      const sortedA = [...ancestorMatched.values()].sort((a, b) => b.count - a.count);
      for (const r of sortedA) lines.push(`| ${r.from} | ${r.to} | ${r.count} |`);
    }
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, lines.join('\n') + '\n');
    const unmatchedProducts = [...unmatched.values()].reduce((s, r) => s + r.count, 0);
    const autoMatchedProducts = [...autoMatched.values()].reduce((s, r) => s + r.count, 0);
    const ancestorMatchedProducts = [...ancestorMatched.values()].reduce((s, r) => s + r.count, 0);
    const composedMatchedProducts = [...composedMatched.values()].reduce((s, r) => s + r.count, 0);
    return { unmatchedCategories: unmatched.size, unmatchedProducts, autoMatchedCategories: autoMatched.size, autoMatchedProducts,
      ancestorMatchedCategories: ancestorMatched.size, ancestorMatchedProducts,
      composedMatchedCategories: composedMatched.size, composedMatchedProducts };
  }

  return { isKnown: isKnownPath, findMatch, resolve, writeReport };
}

module.exports = { createCategoryMatcher, normalize, normalizePath, similarity, loadKnownCategories };

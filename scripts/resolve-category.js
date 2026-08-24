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

// supplierName: used only for the report filename (reports/nezaradene-kategorie-<supplierName>.md).
function createCategoryMatcher(supplierName) {
  const known = loadKnownCategories();
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

  // trusted=true skips the gate entirely (category came from an explicit, human-reviewed rename).
  function resolve(category, { trusted, productLabel } = {}) {
    if (!category || trusted) return { category, excluded: false, redirected: false };
    // Pass the ORIGINAL string through untouched when it's already a known category (possibly only
    // slug-equal) — rewriting it to the tree's spelling would be a no-op for Shoptet's matching but
    // could churn the live category title, so leave today's import behaviour exactly as it is.
    if (isKnownPath(category)) return { category, excluded: false, redirected: false };

    const m = findMatch(category);
    if (m) {
      const key = category + '|' + m.path;
      const rec = autoMatched.get(key) || { from: category, to: m.path, score: m.score, count: 0 };
      rec.count++;
      autoMatched.set(key, rec);
      return { category: m.path, excluded: false, redirected: true };
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
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, lines.join('\n') + '\n');
    const unmatchedProducts = [...unmatched.values()].reduce((s, r) => s + r.count, 0);
    const autoMatchedProducts = [...autoMatched.values()].reduce((s, r) => s + r.count, 0);
    return { unmatchedCategories: unmatched.size, unmatchedProducts, autoMatchedCategories: autoMatched.size, autoMatchedProducts };
  }

  return { isKnown: isKnownPath, findMatch, resolve, writeReport };
}

module.exports = { createCategoryMatcher, normalize, normalizePath, similarity, loadKnownCategories };

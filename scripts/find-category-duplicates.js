// One-time/occasional retroactive cleanup pass: scans the live Shoptet category export for
// near-duplicate category branches — spelling/language variants of a category that already
// exists under the same parent — and proposes merging the newer/smaller one into the
// older/established one.
//
// SAFETY NOTES (read before changing thresholds):
// - Candidate pairs are rejected outright if they differ in any digit (e.g. "IP55" vs "IP65",
//   "45 cm" vs "60 cm", "1-fázové" vs "3-fázové") or in a short (2-4 letter) uppercase token
//   (e.g. "AC" vs "DC", "LED" vs "OLED") — those are almost always genuinely DIFFERENT product
//   categories that just happen to share most of their text, not spelling duplicates. An earlier
//   version of this script did not have this guard and would have merged e.g. "AC rozvádzače"
//   into "DC rozvádzače" — never trust a plain string-similarity score alone in this domain.
// - The canonical (surviving) category in a duplicate pair is the one with the LOWER Shoptet
//   category id (created first == the original, established one) — NOT the one with more
//   directly-assigned products, because a structural parent category legitimately has 0 direct
//   products (everything lives in its subcategories). Using product count as the tiebreaker
//   picked the *newer, leaked* duplicate as canonical in testing (see "Karavany a obytná autá",
//   id 48000, vs the real one "Karavany a obytné autá", id 41163) — id order is the reliable
//   signal here, product count is not.
// - When the LOSING side of a merge has children (it's a structural branch, not a single leaf),
//   every descendant path gets its own rename entry too (prefix-substituted) — a single rename
//   for the parent string does NOT cascade to children on its own, since categoryRenamesByPath is
//   matched by exact raw path per product, not by tree structure.
// - If the losing side's recursive product total (own + all descendants) is more than
//   RATIO_SAFETY_GUARD times the winning side's, the pair is NOT auto-applied — that pattern
//   means the id-order heuristic is probably wrong here, so it goes to manual review instead.
//
// Usage: node scripts/find-category-duplicates.js [path-to-shoptet-categories.csv]
// Writes: reports/kategorie-na-zjednotenie-<date>.md, data/shoptet-categories-hide.csv
// Mutates: scripts/{innpro,atos,kb,solight}-mapping.json (adds categoryRenamesByPath entries for
// high-confidence merges only). Does NOT touch output/*.xml — changes only take effect on each
// supplier's next scheduled sync.

const fs = require('fs');
const path = require('path');
const { similarity } = require('./resolve-category');

const AUTO_THRESHOLD = 0.90;
const REVIEW_THRESHOLD = 0.78;
const RATIO_SAFETY_GUARD = 3; // loser's recursive total must be <= 3x winner's to auto-apply

const REPO_ROOT = path.join(__dirname, '..');
const DATE = new Date().toISOString().slice(0, 10);
const csvArg = process.argv.slice(2).find((a) => !a.startsWith('--'));
const CSV_PATH = csvArg || path.join(REPO_ROOT, 'data', 'shoptet-categories-2026-08-24.csv');

function parseCsvLine(line) {
  const fields = [];
  let cur = '';
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQ) { if (c === '"') { if (line[i + 1] === '"') { cur += '"'; i++; } else inQ = false; } else cur += c; }
    else if (c === '"') inQ = true;
    else if (c === ';') { fields.push(cur); cur = ''; }
    else cur += c;
  }
  fields.push(cur);
  return fields;
}

function loadTree() {
  let raw = fs.readFileSync(CSV_PATH, 'utf-8').replace(/^﻿/, '');
  const lines = raw.split(/\r\n|\n/).filter(Boolean);
  const byId = new Map(); // id -> { id, parentId, title }
  for (let i = 1; i < lines.length; i++) {
    const f = parseCsvLine(lines[i]);
    if (f.length < 8) continue;
    byId.set(f[0], { id: f[0], parentId: f[1], title: f[7] });
  }
  const pathOf = new Map();
  function fullPath(id) {
    if (pathOf.has(id)) return pathOf.get(id);
    const r = byId.get(id);
    const parts = [r.title];
    let cur = r, guard = 0;
    while (cur.parentId && cur.parentId !== '1' && byId.has(cur.parentId) && guard++ < 20) {
      cur = byId.get(cur.parentId);
      parts.unshift(cur.title);
    }
    const p = parts.join(' > ');
    pathOf.set(id, p);
    return p;
  }
  const nodes = []; // { id, path, parentId }
  for (const [id, r] of byId) {
    if (!r.title || r.title === 'Druhy') continue;
    nodes.push({ id, path: fullPath(id), parentId: r.parentId });
  }
  const idByPath = new Map(nodes.map((n) => [n.path, n.id]));
  const childrenOf = new Map(); // path -> [child paths]
  for (const n of nodes) {
    const idx = n.path.lastIndexOf(' > ');
    const parent = idx === -1 ? '' : n.path.slice(0, idx);
    if (!childrenOf.has(parent)) childrenOf.set(parent, []);
    childrenOf.get(parent).push(n.path);
  }
  return { nodes, idByPath, childrenOf };
}

function splitLeaf(p) {
  const idx = p.lastIndexOf(' > ');
  return idx === -1 ? { parent: '', leaf: p } : { parent: p.slice(0, idx), leaf: p.slice(idx + 3) };
}

function digitsOf(s) { return (s.match(/\d+/g) || []).join(','); }
function acronymsOf(s) { return new Set((s.match(/\b[A-Z]{2,4}\b/g) || [])); }
function setsDiffer(a, b) {
  if (a.size !== b.size) return true;
  for (const x of a) if (!b.has(x)) return true;
  return false;
}
// Product/model type codes (e.g. "typ VKOMz" vs "typ VKMz", "MAO1" vs "VKO1") — short tokens
// shaped like ≤4 leading uppercase letters + a short lowercase/digit tail. Two DIFFERENT such
// codes commonly still score high on plain string similarity, but are almost certainly distinct
// real products in a manufacturer's line-up, not a spelling duplicate.
const CODE_SHAPE = /^[A-Z]{1,4}[a-z0-9]{0,3}$/;
function lastToken(s) { const parts = s.trim().split(/\s+/); return parts[parts.length - 1]; }
function looksLikeModelCodePair(leafA, leafB) {
  const a = lastToken(leafA), b = lastToken(leafB);
  if (a === b) return false;
  return CODE_SHAPE.test(a) && CODE_SHAPE.test(b);
}
// Negation pairs ("kryté" vs "nekryté" = covered vs uncovered) — opposite meaning, not a
// duplicate, even though the strings otherwise match almost exactly.
function looksLikeNegationPair(leafA, leafB) {
  const wordsA = leafA.toLowerCase().split(/\s+/);
  const wordsB = leafB.toLowerCase().split(/\s+/);
  for (const wa of wordsA) {
    for (const wb of wordsB) {
      if (wa === 'ne' + wb || wb === 'ne' + wa) return true;
    }
  }
  return false;
}
// Rejects pairs that are almost certainly genuinely different categories despite scoring high on
// plain string similarity. See file header for why each of these matters — this list exists
// because an earlier version of this script would have merged real, distinct product categories
// (different electrical ratings, opposite covered/uncovered variants, different model codes).
function looksLikeRealDifference(leafA, leafB) {
  if (digitsOf(leafA) !== digitsOf(leafB)) return true;
  if (setsDiffer(acronymsOf(leafA), acronymsOf(leafB))) return true;
  if (looksLikeModelCodePair(leafA, leafB)) return true;
  if (looksLikeNegationPair(leafA, leafB)) return true;
  return false;
}

function countLiveDirectCounts() {
  const counts = new Map();
  const outDir = path.join(REPO_ROOT, 'output');
  for (const file of fs.readdirSync(outDir)) {
    if (!file.endsWith('.xml')) continue;
    const text = fs.readFileSync(path.join(outDir, file), 'utf-8');
    const blockRe = /<CATEGORIES>([\s\S]*?)<\/CATEGORIES>/g;
    let block;
    while ((block = blockRe.exec(text))) {
      const m = /<CATEGORY><!\[CDATA\[([\s\S]*?)\]\]><\/CATEGORY>/.exec(block[1]);
      if (!m) continue;
      counts.set(m[1], (counts.get(m[1]) || 0) + 1);
    }
  }
  return counts;
}

function recursiveTotals(paths, childrenOf, directCounts) {
  const totals = new Map();
  function total(p) {
    if (totals.has(p)) return totals.get(p);
    let t = directCounts.get(p) || 0;
    for (const c of childrenOf.get(p) || []) t += total(c);
    totals.set(p, t);
    return t;
  }
  for (const p of paths) total(p);
  return totals;
}

function allDescendants(p, childrenOf) {
  const out = [];
  const stack = [...(childrenOf.get(p) || [])];
  while (stack.length) {
    const cur = stack.pop();
    out.push(cur);
    for (const c of childrenOf.get(cur) || []) stack.push(c);
  }
  return out;
}

function findClusters(nodes, childrenOf) {
  const byParent = new Map();
  for (const n of nodes) {
    const { parent, leaf } = splitLeaf(n.path);
    if (!byParent.has(parent)) byParent.set(parent, []);
    byParent.get(parent).push({ path: n.path, leaf, id: n.id });
  }

  const clusters = [];
  for (const [, siblings] of byParent) {
    if (siblings.length < 2) continue;
    const used = new Set();
    for (let i = 0; i < siblings.length; i++) {
      if (used.has(i)) continue;
      const group = [siblings[i]];
      for (let j = i + 1; j < siblings.length; j++) {
        if (used.has(j)) continue;
        if (looksLikeRealDifference(siblings[i].leaf, siblings[j].leaf)) continue;
        if (similarity(siblings[i].leaf, siblings[j].leaf) >= REVIEW_THRESHOLD) { group.push(siblings[j]); used.add(j); }
      }
      if (group.length > 1) {
        used.add(i);
        let minScore = 1;
        for (let a = 0; a < group.length; a++) for (let b = a + 1; b < group.length; b++) minScore = Math.min(minScore, similarity(group[a].leaf, group[b].leaf));
        // canonical = lowest id (created first, i.e. the established one)
        const sorted = [...group].sort((a, b) => Number(a.id) - Number(b.id));
        clusters.push({ members: sorted, canonical: sorted[0], score: minScore });
      }
    }
  }
  clusters.sort((a, b) => b.score - a.score);
  return clusters;
}

function main({ apply = true } = {}) {
  const { nodes, childrenOf } = loadTree();
  const knownPaths = nodes.map((n) => n.path);
  const directCounts = countLiveDirectCounts();
  const totals = recursiveTotals(knownPaths, childrenOf, directCounts);

  const clusters = findClusters(nodes, childrenOf);
  const autoClusters = [];
  const reviewClusters = [];
  for (const c of clusters) {
    if (c.score < AUTO_THRESHOLD) { reviewClusters.push(c); continue; }
    const losers = c.members.filter((m) => m.path !== c.canonical.path);
    const winnerTotal = totals.get(c.canonical.path) || 0;
    const safe = losers.every((l) => (totals.get(l.path) || 0) <= Math.max(1, winnerTotal) * RATIO_SAFETY_GUARD || winnerTotal === 0 && (totals.get(l.path) || 0) === 0);
    if (safe) autoClusters.push(c); else reviewClusters.push(c);
  }

  // Build the full rename set: each loser's own path + every descendant path, prefix-substituted.
  const renamePairs = []; // { from, to, viaCluster }
  for (const c of autoClusters) {
    for (const loser of c.members) {
      if (loser.path === c.canonical.path) continue;
      renamePairs.push({ from: loser.path, to: c.canonical.path });
      for (const desc of allDescendants(loser.path, childrenOf)) {
        renamePairs.push({ from: desc, to: c.canonical.path + desc.slice(loser.path.length) });
      }
    }
  }

  const suppliers = ['innpro', 'atos', 'kb', 'solight'];
  const appliedPerSupplier = {};
  for (const supplier of suppliers) {
    const mappingPath = path.join(REPO_ROOT, 'scripts', `${supplier}-mapping.json`);
    const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'));
    mapping.categoryRenamesByPath = mapping.categoryRenamesByPath || {};
    let added = 0;
    for (const { from, to } of renamePairs) {
      const rawKey = from.split(' > ').join('/');
      if (mapping.categoryRenamesByPath[rawKey] === to) continue;
      mapping.categoryRenamesByPath[rawKey] = to;
      added++;
    }
    if (apply && added) fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2) + '\n');
    appliedPerSupplier[supplier] = added;
  }

  // "Empty right now" (no pending merges assumed) — safe to hide immediately regardless of
  // whether the auto-merge candidates above get approved.
  const emptyCategories = knownPaths.filter((p) => (totals.get(p) || 0) === 0).sort();

  // ---- Report ----
  const lines = [];
  lines.push(`# Zjednotenie duplicitných kategórií — ${DATE}`);
  lines.push('');
  lines.push(`Analyzovaných ${knownPaths.length} kategórií zo živého Shoptet stromu (export ${path.basename(CSV_PATH)}).`);
  lines.push(`${renamePairs.length} pravidiel pridaných do mapovaní (kanonická kategória = nižšie Shoptet ID, t.j. staršia/pôvodná).`);
  lines.push('');
  lines.push('## Automaticky zjednotené');
  lines.push('');
  if (!autoClusters.length) {
    lines.push('_Žiadne._');
  } else {
    lines.push('Zapísané do `scripts/*-mapping.json`, vrátane všetkých podkategórií zlúčenej vetvy —');
    lines.push('prejaví sa pri najbližšom nočnom behu daného dodávateľa.');
    lines.push('');
    lines.push('| Zhoda | Kanonická (ostáva, nižšie ID) | Zlúčené (presúva sa sem) |');
    lines.push('|---|---|---|');
    for (const c of autoClusters) {
      const others = c.members.filter((m) => m.path !== c.canonical.path);
      lines.push(`| ${(c.score * 100).toFixed(0)}% | ${c.canonical.path} _(id ${c.canonical.id}, spolu ${totals.get(c.canonical.path) || 0} produktov)_ | ${others.map((o) => `${o.path} _(id ${o.id}, spolu ${totals.get(o.path) || 0})_`).join('; ')} |`);
    }
  }
  lines.push('');
  lines.push('## Na ručné posúdenie');
  lines.push('');
  lines.push('Buď nižšia zhoda, alebo prešlo cez bezpečnostný pomer (jedna strana má neúmerne viac');
  lines.push('produktov než by pri automatickom zlúčení "prehrala") — pozri komentár na začiatku');
  lines.push('`scripts/find-category-duplicates.js`.');
  lines.push('');
  if (!reviewClusters.length) {
    lines.push('_Žiadne._');
  } else {
    lines.push('| Zhoda | Kategórie v skupine (ID, spolu produktov vrátane podkategórií) |');
    lines.push('|---|---|');
    for (const c of reviewClusters) {
      lines.push(`| ${(c.score * 100).toFixed(0)}% | ${c.members.map((m) => `${m.path} _(id ${m.id}, spolu ${totals.get(m.path) || 0})_`).join('; ')} |`);
    }
  }
  lines.push('');
  lines.push(`## Kategórie na vypnutie (visible=0) — ${emptyCategories.length} bez produktov (vrátane podkategórií), stav TERAZ`);
  lines.push('');
  lines.push('Toto je bezpečné vypnúť hneď — nezávisí od schválenia zlúčení vyššie (0 produktov teraz aj po');
  lines.push('nich). Po schválení a nasadení zlúčení pribudnú do prázdneho zoznamu aj kategórie z tabuľky');
  lines.push('vyššie (spustiť tento skript znova s `--dry-run` po najbližšom nočnom behu, aby sa to overilo).');
  lines.push('');
  lines.push('Strojovo spracované v `data/shoptet-categories-hide.csv` (rovnaký formát ako pôvodný export,');
  lines.push('`visible` prepnuté na `0`), pripravené na re-import cez Shoptet (Nastavenia → Import dát → Kategórie).');
  lines.push('');
  for (const p of emptyCategories.slice(0, 500)) lines.push(`- ${p}`);
  if (emptyCategories.length > 500) lines.push(`- _(a ďalších ${emptyCategories.length - 500}, pozri CSV)_`);

  fs.mkdirSync(path.join(REPO_ROOT, 'reports'), { recursive: true });
  fs.writeFileSync(path.join(REPO_ROOT, 'reports', `kategorie-na-zjednotenie-${DATE}.md`), lines.join('\n') + '\n');

  // ---- visible=0 CSV, same column layout as the source export ----
  const rawLines = fs.readFileSync(CSV_PATH, 'utf-8').replace(/^﻿/, '').split(/\r\n|\n/).filter(Boolean);
  const header = rawLines[0];
  const emptySet = new Set(emptyCategories);
  const idToPath = new Map(nodes.map((n) => [n.id, n.path]));
  const outCsvLines = [header];
  for (let i = 1; i < rawLines.length; i++) {
    const f = parseCsvLine(rawLines[i]);
    if (f.length < 8) continue;
    const p = idToPath.get(f[0]);
    if (!p || !emptySet.has(p)) continue;
    f[4] = '0'; // visible column
    outCsvLines.push(f.map((v) => `"${v.replace(/"/g, '""')}"`).join(';') + ';');
  }
  fs.writeFileSync(path.join(REPO_ROOT, 'data', 'shoptet-categories-hide.csv'), outCsvLines.join('\r\n') + '\r\n');

  console.log(JSON.stringify({
    knownCategories: knownPaths.length,
    autoClusters: autoClusters.length,
    reviewClusters: reviewClusters.length,
    renamePairsApplied: renamePairs.length,
    appliedPerSupplier,
    emptyCategories: emptyCategories.length,
  }, null, 2));
}

if (require.main === module) main({ apply: !process.argv.includes('--dry-run') });
module.exports = { main };

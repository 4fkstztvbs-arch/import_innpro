// Nightly self-adjusting fix for "thin" categories: any category with too few directly-assigned
// products across ALL supplier feeds combined gets folded up into its immediate parent category
// (which always already exists — it's one segment shorter). This is the generic, ongoing
// counterpart to collapse-duplicate-categories.js's hand-curated COLLAPSE_MAP: instead of a fixed
// list of known-bad paths, it recomputes which categories are thin FROM SCRATCH on every run, so
// it automatically keeps working as suppliers add/remove/rename products night after night —
// no manual list to maintain.
//
// WHY fold into the parent rather than hide/delete: a category with only 1-3 products is a weak,
// mostly-empty page (bad for SEO and for customer trust — "3 products" reads as a dead corner of
// the shop), but the products themselves are still real, sellable inventory. Rolling them up into
// the parent (e.g. "Domáce spotrebiče > Malé spotrebiče > Meracie prístroje" (2) into "Domáce
// spotrebiče > Malé spotrebiče") keeps the product visible on a page that already has real traffic,
// with zero risk of losing the product from navigation entirely. Once a supplier feed grows a thin
// category past the threshold, this script simply stops touching it — no manual "un-merge" step.
//
// Threshold rationale: MIN_CATEGORY_SIZE=4 mirrors the same "≤3 products" cutoff used in the
// 2026-08-27 category audit (reports/kategorizacia-akcny-plan.md) — a category needs at least a
// handful of products before it's worth a dedicated page.
//
// SAFETY NOTES (same spirit as find-category-duplicates.js):
// - Never touches a category that has no parent (single-segment, top-level) — there is nowhere
//   safe to fold it into. Those are handled separately (orphan-routing fixes per supplier).
// - Counts are recomputed fresh every pass from the CURRENT state of output/*.xml (after
//   collapse-duplicate-categories.js and fix-ignored-categories.js have already run), so a
//   category that becomes non-thin because siblings were folded into it in an earlier pass is
//   correctly left alone in a later pass.
// - Runs to a fixed point (categories only ever gain products by folding, never lose), capped at
//   MAX_PASSES as a hard stop against any unforeseen cycle.
//
// Usage: node scripts/collapse-thin-categories.js (rewrites every output/*.xml in place)
// Run this AFTER collapse-duplicate-categories.js and fix-ignored-categories.js in each
// *-sync.yml workflow, so it always operates on the already-normalized category text.
'use strict';

const fs = require('fs');
const path = require('path');
const { normalizePath } = require('./resolve-category');

const OUTPUT_DIR = path.join(__dirname, '..', 'output');
const REPO_ROOT = path.join(__dirname, '..');
const MIN_CATEGORY_SIZE = parseInt(process.env.THIN_CATEGORY_MIN || '4', 10);
const MAX_PASSES = 5;

function xmlCdata(s) { return '<![CDATA[' + s.replace(/]]>/g, ']]&gt;') + ']]>'; }

function parentOf(fullPath) {
  const idx = fullPath.lastIndexOf(' > ');
  return idx === -1 ? null : fullPath.slice(0, idx);
}

// Extracts every distinct category path assigned to each product (dedup within a product), across
// all output/*.xml, and returns { counts: Map<normalizedPath, number>, displayOf: Map<normalizedPath, string> }.
// displayOf keeps one real (non-normalized) spelling per normalized key so renames stay readable.
function computeCounts(files) {
  const counts = new Map();
  const displayOf = new Map();
  for (const { text } of files) {
    const blockRe = /<CATEGORIES>([\s\S]*?)<\/CATEGORIES>/g;
    let block;
    while ((block = blockRe.exec(text))) {
      const cats = [...block[1].matchAll(/<CATEGORY>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([^<]*))<\/CATEGORY>/g)]
        .map((m) => (m[1] !== undefined ? m[1] : m[2]));
      const seen = new Set();
      for (const c of cats) {
        const norm = normalizePath(c);
        if (seen.has(norm)) continue;
        seen.add(norm);
        counts.set(norm, (counts.get(norm) || 0) + 1);
        if (!displayOf.has(norm)) displayOf.set(norm, c);
      }
    }
  }
  return { counts, displayOf };
}

// Single regex pass per file (Map lookup instead of one split/join per rename pair) — with
// hundreds of thin categories per run, the naive split/join-per-pair approach used by
// collapse-duplicate-categories.js (fine for its much shorter hand-curated list) is far too slow
// across ~130MB of combined output/*.xml.
function applyRenames(files, renameMap) {
  let totalRewritten = 0;
  const catTagRe = /<CATEGORY>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([^<]*))<\/CATEGORY>/g;
  for (const f of files) {
    let changedAny = false;
    f.text = f.text.replace(catTagRe, (full, cdata, plain) => {
      const inner = cdata !== undefined ? cdata : plain;
      const to = renameMap.get(inner);
      if (to === undefined) return full;
      totalRewritten++;
      changedAny = true;
      return `<CATEGORY>${xmlCdata(to)}</CATEGORY>`;
    });
    if (!changedAny) continue;
    // Dedupe CATEGORIES blocks: a product may now list the same (post-rename) path twice, or
    // already listed the parent separately from the just-renamed child.
    f.text = f.text.replace(/<CATEGORIES>[\s\S]*?<\/CATEGORIES>/g, (block) => {
      const lines = block.match(/  <CATEGORY>.*?<\/CATEGORY>/g) || [];
      const seen = new Set();
      const kept = [];
      for (const line of lines) {
        if (seen.has(line)) continue;
        seen.add(line);
        kept.push(line);
      }
      if (kept.length === lines.length) return block;
      return '<CATEGORIES>\n' + kept.join('\n') + '\n</CATEGORIES>';
    });
  }
  return totalRewritten;
}

function main() {
  const fileNames = fs.readdirSync(OUTPUT_DIR).filter((f) => f.endsWith('.xml'));
  const files = fileNames.map((name) => ({
    name,
    fullPath: path.join(OUTPUT_DIR, name),
    text: fs.readFileSync(path.join(OUTPUT_DIR, name), 'utf-8'),
  }));

  const foldedTotals = new Map(); // display path -> { intoDisplay, productEntriesRewritten, finalOwnCount }
  let pass = 0;
  let totalRewritten = 0;

  for (; pass < MAX_PASSES; pass++) {
    const { counts, displayOf } = computeCounts(files);
    const renamePairs = [];
    for (const [norm, count] of counts) {
      if (count >= MIN_CATEGORY_SIZE) continue;
      const display = displayOf.get(norm);
      const parentDisplay = parentOf(display);
      if (!parentDisplay) continue; // top-level category, nothing safe to fold into
      renamePairs.push([display, parentDisplay]);
    }
    if (!renamePairs.length) break;

    const renameMap = new Map(renamePairs);
    const rewritten = applyRenames(files, renameMap);
    totalRewritten += rewritten;
    for (const [from, to] of renamePairs) {
      const prev = foldedTotals.get(from);
      foldedTotals.set(from, { into: to, count: (counts.get(normalizePath(from)) || 0) });
    }
  }

  for (const f of files) fs.writeFileSync(f.fullPath, f.text, 'utf-8');

  const foldedList = [...foldedTotals.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  console.log(`Collapsed ${foldedList.length} thin categories (< ${MIN_CATEGORY_SIZE} products) over ${pass} pass(es), ${totalRewritten} product category entries rewritten.`);
  for (const [from, info] of foldedList) {
    console.log(`  [${info.count}] ${from}  ->  ${info.into}`);
  }
}

main();

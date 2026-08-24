// Ground-truth check for the "hide these empty categories" list.
//
// WHY THIS EXISTS: an earlier version of find-category-duplicates.js decided whether a category
// was empty purely from our own output/*.xml. That is NOT the same question as "is this category
// empty in the shop":
//   1. output/*.xml only contains what passes today's filters — *_EXCLUDE_UNAVAILABLE=1 drops
//      every out-of-stock product, but those products stay live (and categorised) in Shoptet.
//   2. Products added manually in Shoptet admin, or left behind by a supplier feed that no longer
//      carries them, never appear in output/*.xml at all.
// Both make a populated category look empty. Verified 2026-08-24: "Řečnické systémy" showed 0
// products by the XML method while the live category page listed 3.
//
// So the only trustworthy source for "is it empty" is the live shop itself. This script fetches
// each candidate category page and counts products inside the category listing container
// (deliberately NOT the "products-top" recommendation carousel, which renders on empty pages too
// and was what first made the XML-based numbers look plausible).
//
// A category is kept on the hide list only if it AND every one of its descendants list zero
// products live.
//
// Usage: node scripts/verify-empty-categories.js
// Reads:  data/shoptet-categories-hide.csv (candidates), data/shoptet-categories-<date>.csv (tree)
// Writes: data/shoptet-categories-hide.csv (filtered down to the verified-empty ones)
//         reports/kategorie-vypnutie-overenie-<date>.md

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.join(__dirname, '..');
const DATE = new Date().toISOString().slice(0, 10);
const HIDE_CSV = path.join(REPO_ROOT, 'data', 'shoptet-categories-hide.csv');
const TREE_CSV = process.argv[2] || path.join(REPO_ROOT, 'data', 'shoptet-categories-2026-08-24.csv');
const BASE_URL = process.env.SHOP_BASE_URL || 'https://www.premiumstore.sk';
const CONCURRENCY = 4;

function parseCsvLine(line) {
  const fields = [];
  let cur = '', inQ = false;
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

function readCsv(file) {
  const raw = fs.readFileSync(file, 'utf-8').replace(/^﻿/, '');
  const lines = raw.split(/\r\n|\n/).filter(Boolean);
  return { header: lines[0], rows: lines.slice(1).map(parseCsvLine).filter((f) => f.length >= 10) };
}

// Counts products inside the category listing only. The "products-top" block is a recommendation
// carousel Shoptet also renders on genuinely empty categories — counting it reports false hits.
function countProductsInListing(html) {
  const start = html.indexOf('products products-page products-block');
  if (start < 0) return 0;
  let seg = html.slice(start);
  const end = seg.indexOf('products-top-wrapper');
  if (end > 0) seg = seg.slice(0, end);
  return (seg.match(/data-micro="product"/g) || []).length;
}

async function fetchCount(url, attempt = 0) {
  try {
    const res = await fetch(url, { redirect: 'follow', headers: { 'User-Agent': 'premiumstore-category-audit/1.0' } });
    if (res.status === 404) return { count: 0, status: 404 };
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const html = await res.text();
    return { count: countProductsInListing(html), status: res.status };
  } catch (e) {
    if (attempt < 2) {
      await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
      return fetchCount(url, attempt + 1);
    }
    return { count: null, status: 'ERROR', error: String(e.message || e) };
  }
}

async function mapLimit(items, limit, fn) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: limit }, async () => {
    while (i < items.length) {
      const idx = i++;
      out[idx] = await fn(items[idx], idx);
    }
  }));
  return out;
}

async function main() {
  const tree = readCsv(TREE_CSV);
  const byId = new Map(tree.rows.map((f) => [f[0], { id: f[0], parentId: f[1], title: f[7], url: f[9] }]));
  const childrenOf = new Map();
  for (const [, r] of byId) {
    if (!childrenOf.has(r.parentId)) childrenOf.set(r.parentId, []);
    childrenOf.get(r.parentId).push(r.id);
  }
  function descendants(id) {
    const out = [];
    const stack = [...(childrenOf.get(id) || [])];
    while (stack.length) { const c = stack.pop(); out.push(c); for (const g of childrenOf.get(c) || []) stack.push(g); }
    return out;
  }
  function fullPath(id) {
    const parts = [];
    let cur = byId.get(id), guard = 0;
    while (cur && guard++ < 20) { parts.unshift(cur.title); if (!cur.parentId || cur.parentId === '1') break; cur = byId.get(cur.parentId); }
    return parts.join(' > ');
  }

  const hide = readCsv(HIDE_CSV);
  const candidateIds = hide.rows.map((f) => f[0]);

  // Fetch every candidate AND every descendant of a candidate — a parent may only be hidden if the
  // whole subtree below it is empty too.
  const needed = new Set();
  for (const id of candidateIds) { needed.add(id); for (const d of descendants(id)) needed.add(d); }
  const ids = [...needed].filter((id) => byId.has(id) && byId.get(id).url);
  console.log(`Overujem ${ids.length} kategórií proti živému eshopu (${candidateIds.length} kandidátov + ich podkategórie)...`);

  let done = 0;
  const results = await mapLimit(ids, CONCURRENCY, async (id) => {
    const r = byId.get(id);
    const res = await fetchCount(`${BASE_URL}/${r.url}/`);
    if (++done % 25 === 0) console.log(`  ${done}/${ids.length}`);
    return { id, url: r.url, title: r.title, ...res };
  });
  const countById = new Map(results.map((r) => [r.id, r.count]));
  const errors = results.filter((r) => r.count === null);

  const verifiedEmpty = [];
  const falsePositives = [];
  const unverified = [];
  for (const id of candidateIds) {
    const own = countById.get(id);
    const descs = descendants(id);
    const anyUnknown = own === null || descs.some((d) => countById.get(d) === null);
    if (anyUnknown) { unverified.push(id); continue; }
    const subtreeTotal = (own || 0) + descs.reduce((s, d) => s + (countById.get(d) || 0), 0);
    if (subtreeTotal > 0) falsePositives.push({ id, own: own || 0, subtreeTotal });
    else verifiedEmpty.push(id);
  }

  // Rewrite the hide CSV down to only the verified-empty rows.
  const keep = new Set(verifiedEmpty);
  const outLines = [hide.header];
  for (const f of hide.rows) if (keep.has(f[0])) outLines.push(f.map((v) => `"${v.replace(/"/g, '""')}"`).join(';') + ';');
  fs.writeFileSync(HIDE_CSV, outLines.join('\r\n') + '\r\n');

  const lines = [];
  lines.push(`# Overenie kategórií na vypnutie oproti živému eshopu — ${DATE}`);
  lines.push('');
  lines.push('Zoznam „prázdnych" kategórií pôvodne vznikol počítaním produktov v `output/*.xml`. To je');
  lines.push('nespoľahlivé: XML obsahuje len produkty, ktoré prejdú dnešnými filtrami (`*_EXCLUDE_UNAVAILABLE=1`');
  lines.push('zahodí všetko, čo nie je skladom), pričom v eshope tie produkty ďalej existujú — plus produkty');
  lines.push('pridané ručne alebo vypadnuté z feedu v XML nikdy neboli. Preto sa každý kandidát (a celý jeho');
  lines.push('podstrom) overuje priamo na živej kategórii.');
  lines.push('');
  lines.push(`- Kandidátov pôvodne: **${candidateIds.length}**`);
  lines.push(`- Overene prázdnych (ostávajú v CSV na vypnutie): **${verifiedEmpty.length}**`);
  lines.push(`- Falošne označených, v skutočnosti majú produkty (odstránené): **${falsePositives.length}**`);
  if (unverified.length) lines.push(`- Nepodarilo sa overiť (chyba siete, ponechané NEvypnuté): **${unverified.length}**`);
  lines.push('');
  if (falsePositives.length) {
    lines.push('## Falošne označené — majú produkty v eshope, NEvypínať');
    lines.push('');
    lines.push('| Kategória | Produktov (vlastných / celý podstrom) | URL |');
    lines.push('|---|---|---|');
    for (const fp of falsePositives.sort((a, b) => b.subtreeTotal - a.subtreeTotal)) {
      lines.push(`| ${fullPath(fp.id)} | ${fp.own} / ${fp.subtreeTotal} | ${BASE_URL}/${byId.get(fp.id).url}/ |`);
    }
    lines.push('');
  }
  if (unverified.length) {
    lines.push('## Neoverené (chyba pri načítaní) — ponechané zapnuté');
    lines.push('');
    for (const id of unverified) lines.push(`- ${fullPath(id)} — ${BASE_URL}/${byId.get(id).url}/`);
    lines.push('');
  }
  lines.push(`## Overene prázdne — pripravené na vypnutie (${verifiedEmpty.length})`);
  lines.push('');
  for (const id of verifiedEmpty) lines.push(`- ${fullPath(id)}`);
  fs.writeFileSync(path.join(REPO_ROOT, 'reports', `kategorie-vypnutie-overenie-${DATE}.md`), lines.join('\n') + '\n');

  console.log(JSON.stringify({
    candidates: candidateIds.length,
    verifiedEmpty: verifiedEmpty.length,
    falsePositives: falsePositives.length,
    unverified: unverified.length,
    fetchErrors: errors.length,
  }, null, 2));
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

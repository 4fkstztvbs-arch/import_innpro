// Daily-ish job: checks data/heureka-reports/nesparovane/ for a Heureka "Nespárované produkty"
// CSV newer than the last one we processed, and if found:
//   1. Builds data/heureka-reports/name-overrides.json (EAN -> suggested name) for the "quick
//      win" cases: Heureka DOES know the product (matched by EAN, suggestEan === EAN) and
//      already proposes an exact catalogue name for it. Consumed live by every transform-*.js
//      via heureka-name-overrides.js (NAME_TO_EXPORTS tag), behind the HEUREKA_NAME_OVERRIDE
//      kill switch - see that file.
//   2. Builds a category-mismatch analysis: for each of OUR category paths appearing in the
//      report, finds the majority Heureka category Heureka itself suggests for products in it,
//      resolves that to a real numeric CATEGORY_ID via the live Heureka category tree
//      (heureka-sekce.xml), and compares it against what's already (or not) in
//      scripts/heureka-mapping.json - producing a reviewable list of categories to add/fix
//      there. This script only *proposes*; heureka-mapping.json itself stays a manual edit, same
//      as when it was first built (see reports/heureka-mapovanie-navrh-2026-08-07.xlsx).
//   3. Writes a readable reports/heureka-nesparovane-<date>.md summary.
//
// "Newer" is decided the same way as process-heureka-report.js: by the date/time in the
// filename, not upload/mtime.
//
// Usage: node process-heureka-unmatched.js [--dir=data/heureka-reports/nesparovane] [--force]
// Exit code 0 always; prints PROCESSED:<path> or NOTHING_NEW on stdout.

const fs = require('fs');
const path = require('path');
const https = require('https');
const { parse } = require('csv-parse/sync');

const REPO_ROOT = path.join(__dirname, '..');
const DEFAULT_DIR = path.join(REPO_ROOT, 'data', 'heureka-reports', 'nesparovane');
const MAPPING_PATH = path.join(__dirname, 'heureka-mapping.json');
const HEUREKA_TREE_URL = 'https://www.heureka.sk/direct/xml-export/shops/heureka-sekce.xml';

// Price-plausibility tolerance around Heureka's [suggestPriceMin, suggestPriceMax] window - a
// real match won't usually be an exact match with the sortiment-report price (VAT/rounding/
// timing drift), but a suggestion whose window our price falls nowhere near is much more likely
// a case where OUR OWN feed has the wrong EAN on that product than a genuine name mismatch -
// applying the suggested name there would just paper over a data bug. 30% each side, chosen by
// checking the actual 2026-08-19 report: 2552/2669 (95.6%) suggestions fall inside this window,
// and the 104 outside it include clear EAN-mismatch cases (e.g. our price 10.5 vs supplier's
// mapped-onto suggestion window 4.89-5.79 for an unrelated Neutrik connector).
const PRICE_TOLERANCE = 0.3;

function extractTimestamp(filename) {
  const m = filename.match(/(\d{4})-?(\d{2})-?(\d{2})[_-](\d{2})-?(\d{2})/);
  if (m) { const [, yyyy, mm, dd, hh, min] = m; return `${yyyy}${mm}${dd}${hh}${min}`; }
  return null;
}

function findLatestReport(dir) {
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith('.csv'));
  let best = null;
  for (const f of files) {
    const ts = extractTimestamp(f) || fs.statSync(path.join(dir, f)).mtime.toISOString().replace(/\D/g, '').slice(0, 12);
    if (!best || ts > best.ts) best = { file: f, ts };
  }
  return best;
}

function loadState(statePath) {
  if (!fs.existsSync(statePath)) return null;
  try { return JSON.parse(fs.readFileSync(statePath, 'utf-8')); } catch { return null; }
}

function fnum(s) { const v = parseFloat(s); return Number.isFinite(v) ? v : null; }

function readCsvRows(csvPath) {
  const raw = fs.readFileSync(csvPath, 'utf-8');
  return parse(raw, { columns: true, skip_empty_lines: true, bom: true });
}

// Fetches the live Heureka category tree and returns CATEGORY_FULLNAME -> CATEGORY_ID. Its
// fullname format ("Heureka.sk | A | B | C") is exactly what suggestCategoryTree in the report
// already uses, so this is a direct text lookup, no fuzzy matching needed. Network failure is
// non-fatal - category analysis is just skipped, name overrides still get built.
function fetchHeurekaCategoryTree() {
  return new Promise((resolve) => {
    const req = https.get(HEUREKA_TREE_URL, { timeout: 20000 }, (res) => {
      if (res.statusCode !== 200) { res.resume(); resolve(null); return; }
      let data = '';
      res.on('data', (c) => { data += c; });
      res.on('end', () => {
        const map = {};
        const re = /<CATEGORY_ID>(\d+)<\/CATEGORY_ID><CATEGORY_NAME>[^<]*<\/CATEGORY_NAME><CATEGORY_FULLNAME>([^<]*)<\/CATEGORY_FULLNAME>/g;
        let m;
        while ((m = re.exec(data))) {
          // Report's suggestCategoryTree omits the leading "Heureka.sk | " that CATEGORY_FULLNAME
          // always has - strip it so both sides match on the same text.
          const fullname = m[2].replace(/^Heureka\.sk \| /, '');
          map[fullname] = parseInt(m[1], 10);
        }
        resolve(map);
      });
    });
    req.on('error', () => resolve(null));
    req.on('timeout', () => { req.destroy(); resolve(null); });
  });
}

function ourKeyFromCategoryText(categoryText) {
  // Report's CATEGORYTEXT / our <CATEGORIES> both describe the same path; Shoptet renders ours
  // with " | ", heureka-mapping.json keys use " > " (see scripts/heureka-category.js).
  return (categoryText || '').split('|').map((s) => s.trim()).filter(Boolean).join(' > ');
}

function buildNameOverrides(rows) {
  const overrides = {};
  let candidates = 0;
  let rejectedByPrice = 0;
  for (const r of rows) {
    const suggestName = (r.suggestProductName || '').trim();
    const ean = (r.EAN || '').trim();
    const suggestEan = (r.suggestEan || '').trim();
    if (!suggestName || !ean || ean !== suggestEan) continue;
    candidates++;
    const price = fnum(r.PRICE_VAT);
    const lo = fnum(r.suggestPriceMin);
    const hi = fnum(r.suggestPriceMax);
    if (price !== null && lo !== null && hi !== null) {
      const loT = lo * (1 - PRICE_TOLERANCE);
      const hiT = hi * (1 + PRICE_TOLERANCE);
      if (price < loT || price > hiT) { rejectedByPrice++; continue; }
    }
    overrides[ean] = {
      name: suggestName,
      itemId: r.ITEM_ID || '',
      ourName: r.PRODUCT || '',
      generatedAt: undefined, // filled in by caller once, see main()
    };
  }
  return { overrides, candidates, rejectedByPrice };
}

// Groups rows by OUR category path, and for each finds whether Heureka's suggestions converge
// on one category, resolving it to a real CATEGORY_ID via the live tree.
function buildCategoryAnalysis(rows, heurekaTreeMap) {
  const byCategory = new Map(); // ourKey -> { count, suggestCounts: Map<suggestText, count> }
  for (const r of rows) {
    const ourKey = ourKeyFromCategoryText(r.CATEGORYTEXT);
    if (!ourKey) continue;
    if (!byCategory.has(ourKey)) byCategory.set(ourKey, { count: 0, suggestCounts: new Map() });
    const entry = byCategory.get(ourKey);
    entry.count++;
    const suggest = (r.suggestCategoryTree || '').trim();
    if (suggest) entry.suggestCounts.set(suggest, (entry.suggestCounts.get(suggest) || 0) + 1);
  }

  const currentMapping = JSON.parse(fs.readFileSync(MAPPING_PATH, 'utf-8'));

  const results = [];
  for (const [ourKey, entry] of byCategory) {
    let topSuggest = null; let topCount = 0; let suggestTotal = 0;
    for (const [text, count] of entry.suggestCounts) {
      suggestTotal += count;
      if (count > topCount) { topSuggest = text; topCount = count; }
    }
    const agreementPct = suggestTotal ? Math.round((topCount / suggestTotal) * 100) : 0;
    const currentId = currentMapping[ourKey] || null;
    const suggestedId = topSuggest && heurekaTreeMap ? (heurekaTreeMap[topSuggest] || null) : null;
    let status;
    if (!topSuggest || suggestTotal < 3 || agreementPct < 60) status = 'NEDOSTATOK_DAT';
    else if (!currentId && suggestedId) status = 'PRIDAŤ';
    else if (currentId && suggestedId && currentId !== suggestedId) status = 'OPRAVIŤ';
    else if (currentId && suggestedId && currentId === suggestedId) status = 'UŽ_SPRÁVNE';
    else status = 'NEDOSTATOK_DAT'; // no suggestedId resolvable (tree fetch failed or text not found)

    results.push({
      ourKey, count: entry.count, topSuggest, topCount, suggestTotal, agreementPct,
      currentId, suggestedId, status,
    });
  }
  results.sort((a, b) => b.count - a.count);
  return results;
}

function toMarkdown(rows, categoryResults, nameOverrideStats, sourceCsvName, heurekaTreeOk) {
  const total = rows.length;
  const withSuggest = rows.filter((r) => (r.suggestProductName || '').trim()).length;
  const noEan = rows.filter((r) => !(r.EAN || '').trim()).length;
  const isoDate = new Date().toISOString().slice(0, 10);

  const lines = [];
  lines.push(`# Nespárované produkty na Heureke — návrh opráv — ${isoDate}`);
  lines.push('');
  lines.push(`Vstup: \`${sourceCsvName}\` (${total} nespárovaných produktov, automaticky spracované).`);
  lines.push('');
  lines.push('## Súhrn');
  lines.push('');
  lines.push(`- Nespárovaných produktov celkom: **${total}**`);
  lines.push(`- S návrhom od Heureky (suggestProductName): **${withSuggest}**`);
  lines.push(`- Bez EAN v našom feede: **${noEan}**`);
  lines.push(`- Návrh názvu s EAN zhodou (suggestEan === EAN): **${nameOverrideStats.candidates}**`);
  lines.push(`  - Zamietnuté kontrolou ceny (mimo ±${Math.round(PRICE_TOLERANCE * 100)}% okna navrhovanej ceny — pravdepodobne chybný EAN u nás, nie problém názvu): **${nameOverrideStats.rejectedByPrice}**`);
  lines.push(`  - **Prijaté do \`name-overrides.json\` (pripravené na živé nasadenie): ${Object.keys(nameOverrideStats.overrides).filter((k) => k !== '__meta').length}**`);
  lines.push('');
  lines.push('Mechanizmus je za kill-switchom `HEUREKA_NAME_OVERRIDE=1` v `env:` príslušného `*-sync.yml` workflow (rovnaký princíp ako cenový override) — skontroluj tam aktuálny stav pred spoliehaním sa na tieto čísla ako na to, čo sa práve posiela na Heureku. Pozri `scripts/heureka-name-overrides.js`.');
  lines.push('');

  lines.push('## Kategórie na doplnenie/opravu v `scripts/heureka-mapping.json`');
  lines.push('');
  if (!heurekaTreeOk) {
    lines.push('_Nepodarilo sa stiahnuť živý Heureka strom kategórií (`heureka-sekce.xml`) — táto sekcia je bez konkrétnych CATEGORY_ID, len prehľad počtov._');
    lines.push('');
  }
  const toFix = categoryResults.filter((r) => r.status === 'PRIDAŤ' || r.status === 'OPRAVIŤ');
  lines.push(`Nájdených **${toFix.length}** kategórií s dostatočne presvedčivým návrhom (≥3 produkty, ≥60% zhoda medzi návrhmi Heureky) na doplnenie/opravu. Ručne pridaj/uprav v \`scripts/heureka-mapping.json\` a over namátkovo na Heureke pred nasadením.`);
  lines.push('');
  lines.push('| Stav | Naša kategória | Počet produktov | Heureka návrh | Zhoda | Terajšie ID | Navrhované ID |');
  lines.push('|---|---|---:|---|---:|---:|---:|');
  for (const r of toFix.slice(0, 60)) {
    lines.push(`| ${r.status} | ${r.ourKey} | ${r.count} | ${r.topSuggest} | ${r.agreementPct}% | ${r.currentId ?? '—'} | ${r.suggestedId ?? '—'} |`);
  }
  lines.push('');
  if (toFix.length > 60) lines.push(`_(+ ďalších ${toFix.length - 60} kategórií, pozri \`heureka-mapping-candidates.json\`)_`);
  lines.push('');

  const noData = categoryResults.filter((r) => r.status === 'NEDOSTATOK_DAT' && r.count >= 5);
  lines.push(`## Kategórie bez dostatočne jasného návrhu (${noData.length}, ≥5 produktov)`);
  lines.push('');
  lines.push('Tu Heureka návrhy medzi sebou nesúhlasia (rôzne EAN → rôzne produkty), alebo nie je dosť dát — vyžaduje ručné preskúmanie jednotlivých produktov, nie hromadnú opravu kategórie.');
  lines.push('');
  lines.push('| Naša kategória | Počet produktov | Najčastejší návrh | Zhoda |');
  lines.push('|---|---:|---|---:|');
  for (const r of noData.slice(0, 30)) {
    lines.push(`| ${r.ourKey} | ${r.count} | ${r.topSuggest || '—'} | ${r.agreementPct}% |`);
  }
  lines.push('');

  const alreadyOk = categoryResults.filter((r) => r.status === 'UŽ_SPRÁVNE');
  lines.push(`## Už správne namapované, no stále nespárované (${alreadyOk.length} kategórií)`);
  lines.push('');
  lines.push('Kategória už má správne `HEUREKA_CATEGORY_ID`, produkty sú napriek tomu nespárované — príčina je inde (názov, chýbajúci EAN, alebo Heureka ešte nestihla prepárovať po poslednom importe).');
  lines.push('');

  return lines.join('\n');
}

function main() {
  const args = process.argv.slice(2);
  const dirArg = args.find((a) => a.startsWith('--dir='));
  const dir = dirArg ? path.join(REPO_ROOT, dirArg.slice('--dir='.length)) : DEFAULT_DIR;
  const force = args.includes('--force');

  const statePath = path.join(dir, '.last-processed.json');
  const latest = findLatestReport(dir);
  if (!latest) {
    console.log('NOTHING_NEW');
    console.log(`Žiadny CSV report v ${dir}.`);
    return;
  }

  const state = loadState(statePath);
  if (!force && state && state.ts >= latest.ts) {
    console.log('NOTHING_NEW');
    console.log(`Najnovší súbor (${latest.file}, ${latest.ts}) už bol spracovaný ${state.processedAt}.`);
    return;
  }

  const csvPath = path.join(dir, latest.file);
  const dateStr = latest.ts.slice(0, 8);
  const isoDate = `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6, 8)}`;
  const rows = readCsvRows(csvPath);

  console.log(`Spracúvam: ${latest.file} (${latest.ts}), ${rows.length} riadkov`);

  const { overrides, candidates, rejectedByPrice } = buildNameOverrides(rows);
  const generatedAt = new Date().toISOString();
  for (const key of Object.keys(overrides)) overrides[key].generatedAt = generatedAt;
  overrides.__meta = { generatedAt, sourceReport: latest.file, count: Object.keys(overrides).length };

  const overridesPath = path.join(REPO_ROOT, 'data', 'heureka-reports', 'name-overrides.json');
  fs.writeFileSync(overridesPath, JSON.stringify(overrides, null, 1), 'utf-8');
  console.log(`Návrhy názvov: ${Object.keys(overrides).length - 1} produktov -> ${overridesPath}`);

  return fetchHeurekaCategoryTree().then((treeMap) => {
    const categoryResults = buildCategoryAnalysis(rows, treeMap);
    const candidatesPath = path.join(REPO_ROOT, 'data', 'heureka-reports', 'heureka-mapping-candidates.json');
    fs.writeFileSync(candidatesPath, JSON.stringify(categoryResults, null, 1), 'utf-8');

    const mdPath = path.join(REPO_ROOT, 'reports', `heureka-nesparovane-${isoDate}.md`);
    const md = toMarkdown(rows, categoryResults, { overrides, candidates, rejectedByPrice }, latest.file, !!treeMap);
    fs.mkdirSync(path.dirname(mdPath), { recursive: true });
    fs.writeFileSync(mdPath, md, 'utf-8');

    fs.writeFileSync(statePath, JSON.stringify({
      file: latest.file, ts: latest.ts, processedAt: new Date().toISOString(),
      reportPath: path.relative(REPO_ROOT, mdPath),
      nameOverridesCount: Object.keys(overrides).length - 1,
      categoryCandidatesPath: path.relative(REPO_ROOT, candidatesPath),
    }, null, 1), 'utf-8');

    console.log(`PROCESSED:${mdPath}`);
  });
}

main();

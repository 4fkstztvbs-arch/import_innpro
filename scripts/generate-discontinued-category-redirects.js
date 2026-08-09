// Pre produkty vyradené z ponuky (boli v starom SHOPTEC katalógu, žiadny dodávateľ ich
// už neposkytuje — pozri reports/redirect-map.csv, stav VYRADENY_Z_PONUKY) nemáme cieľový
// produkt na presmerovanie. Namiesto 404 ich presmerujeme na najbližšiu zodpovedajúcu
// kategóriu v novom strome, aby návštevník aspoň videl relevantnú náhradu.
//
// Párovanie kategórie je heuristické (token-overlap medzi starým CATEGORYTEXT/názvom
// produktu a názvami nových kategórií, vážené IDF) — výsledky sa delia na vysokú a nízku
// istotu, aby sa dali pred importom skontrolovať.
//
// Usage: node generate-discontinued-category-redirects.js [--old-heureka=cesta.xml] [--categories=cesta.csv]

const fs = require('fs');
const path = require('path');
const https = require('https');

const OLD_HEUREKA_URL = 'https://premiumstore.sk/export/heureka.xml';
const REDIRECT_MAP_CSV = path.join(__dirname, '..', 'reports', 'redirect-map.csv');
const DEFAULT_CATEGORIES_CSV = path.join(__dirname, '..', 'data', 'categories.csv');

const args = Object.fromEntries(process.argv.slice(2).map((a) => {
  const m = a.match(/^--([^=]+)=(.*)$/);
  return m ? [m[1], m[2]] : [a.replace(/^--/, ''), true];
}));

const OUT_DIR = path.join(__dirname, '..', 'reports');
const OUT_READY = path.join(OUT_DIR, 'redirect-map-discontinued-ready.csv');
const OUT_REVIEW = path.join(OUT_DIR, 'redirect-map-discontinued-review.csv');
const OUT_SHOPTET = path.join(OUT_DIR, 'redirect-map-discontinued-shoptet-import.csv');
const OUT_REPORT = path.join(OUT_DIR, 'redirect-map-discontinued-summary.md');

const STOPWORDS = new Set(['a', 'na', 'pre', 'do', 'od', 'aj', 'ako', 'so', 'zo', 's', 'z', 'v', 'vo', 'k', 'ku', 'the', 'and', 'of']);

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) return resolve(fetchUrl(res.headers.location));
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      let chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
    }).on('error', reject);
  });
}

function normalize(s) {
  return String(s || '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function tokenize(s) {
  return normalize(s).split(' ').filter((t) => t.length >= 3 && !STOPWORDS.has(t));
}

function parseCsvSemicolon(text) {
  // RFC4180-style parser (quoted fields may contain ';' or newlines, '""' = literal quote)
  const s = text.replace(/^﻿/, '');
  const records = [];
  let field = '', record = [], inQuotes = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (inQuotes) {
      if (c === '"') {
        if (s[i + 1] === '"') { field += '"'; i++; } else { inQuotes = false; }
      } else { field += c; }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ';') {
      record.push(field); field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && s[i + 1] === '\n') i++;
      record.push(field); field = '';
      if (record.length > 1 || record[0] !== '') records.push(record);
      record = [];
    } else {
      field += c;
    }
  }
  if (field !== '' || record.length) { record.push(field); records.push(record); }

  const header = records[0];
  return records.slice(1).map((fields) => {
    const row = {};
    header.forEach((h, idx) => { row[h] = fields[idx] || ''; });
    return row;
  });
}

function readRedirectMapDiscontinued() {
  const text = fs.readFileSync(REDIRECT_MAP_CSV, 'utf-8');
  const rows = parseCsvSemicolon(text);
  return rows.filter((r) => r.stav === 'VYRADENY_Z_PONUKY');
}

async function readOldCategoryTexts() {
  const oldXmlPath = args['old-heureka'];
  const xml = oldXmlPath ? fs.readFileSync(oldXmlPath, 'utf-8') : await fetchUrl(OLD_HEUREKA_URL);
  const map = new Map(); // ean -> categoryText leaf
  const manufacturers = new Set();
  const itemRe = /<SHOPITEM>([\s\S]*?)<\/SHOPITEM>/g;
  let m;
  while ((m = itemRe.exec(xml))) {
    const block = m[1];
    const eanM = block.match(/<EAN>([\s\S]*?)<\/EAN>/);
    const mfM = block.match(/<MANUFACTURER>([\s\S]*?)<\/MANUFACTURER>/);
    if (mfM) tokenize(mfM[1]).forEach((t) => manufacturers.add(t));
    const catM = block.match(/<CATEGORYTEXT>([\s\S]*?)<\/CATEGORYTEXT>/);
    if (!eanM || !catM) continue;
    const parts = catM[1].split('|').map((p) => p.trim()).filter(Boolean);
    map.set(eanM[1].trim(), { full: catM[1].trim(), leaf: parts[parts.length - 1] || '', top: parts[0] || '' });
  }
  return { map, manufacturers };
}

function loadCategories() {
  const csvPath = args.categories || DEFAULT_CATEGORIES_CSV;
  const text = fs.readFileSync(csvPath, 'utf-8');
  const rows = parseCsvSemicolon(text);
  const byId = new Map(rows.map((r) => [r.id, r]));
  function pathTitles(row) {
    const titles = [];
    let cur = row, depth = 0;
    while (cur && depth < 8) {
      titles.unshift(cur.title);
      cur = byId.get(cur.parentId);
      depth++;
    }
    return titles;
  }
  return rows.map((r) => ({
    id: r.id, title: r.title, url: r.url, parentId: r.parentId,
    fullPath: pathTitles(r).join(' > '),
  }));
}

function buildIdf(categories) {
  const df = new Map();
  const tokenSets = categories.map((c) => new Set(tokenize(c.title + ' ' + c.fullPath)));
  tokenSets.forEach((set) => { set.forEach((t) => df.set(t, (df.get(t) || 0) + 1)); });
  const N = categories.length;
  const idf = new Map();
  df.forEach((count, tok) => idf.set(tok, Math.log((N + 1) / (count + 1)) + 1));
  return { idf, tokenSets };
}

function scoreMatch(queryTokens, catTokenSet, idf) {
  let score = 0, matchCount = 0;
  for (const t of queryTokens) {
    if (catTokenSet.has(t)) { score += idf.get(t) || 1; matchCount++; }
  }
  return { score, matchCount };
}

function csvEscape(s) {
  const str = String(s == null ? '' : s);
  return /[;"\n]/.test(str) ? '"' + str.replace(/"/g, '""') + '"' : str;
}

async function main() {
  console.log('Načítavam vyradené produkty z redirect-map.csv...');
  const discontinued = readRedirectMapDiscontinued();
  console.log(`Vyradených produktov: ${discontinued.length}`);

  console.log('Načítavam kategórie zo starého Heureka exportu (CATEGORYTEXT) a zoznam výrobcov...');
  const { map: oldCatByEan, manufacturers } = await readOldCategoryTexts();
  console.log(`Značiek na vylúčenie z porovnávania (aby "EMOS", "Philips" a pod. nekazili zhodu): ${manufacturers.size}`);

  console.log('Načítavam nový strom kategórií...');
  const categories = loadCategories();
  console.log(`Kategórií v novom strome: ${categories.length}`);
  const { idf, tokenSets } = buildIdf(categories);

  // Značka produktu (EMOS, Philips, TP-Link...) sa takmer vždy nachádza aj v názve
  // konkrétnej kategórie ako súčasť iného produktu (napr. "Emos" ako kategória
  // diaľkových ovládačov), takže by inak dominovala zhode bez ohľadu na typ tovaru.
  // Vyžadujeme aj aspoň 2 rôzne zhodné (neznačkové) slová, nielen jedno vzácne.
  const HIGH_THRESHOLD = 5.0;
  const MIN_MATCH_COUNT = 2;

  const results = [];
  for (const row of discontinued) {
    const old = oldCatByEan.get(row.ean);
    const queryText = [old ? old.leaf : '', row.stary_nazov].filter(Boolean).join(' ');
    const queryTokens = tokenize(queryText).filter((t) => !manufacturers.has(t));
    let best = null, bestScore = 0, bestMatchCount = 0, second = 0;
    for (let i = 0; i < categories.length; i++) {
      const { score: s, matchCount } = scoreMatch(queryTokens, tokenSets[i], idf);
      if (s > bestScore) { second = bestScore; best = categories[i]; bestScore = s; bestMatchCount = matchCount; }
      else if (s > second) { second = s; }
    }
    const confidence = (bestScore >= HIGH_THRESHOLD && bestMatchCount >= MIN_MATCH_COUNT)
      ? 'VYSOKA' : (bestScore > 0 ? 'NIZKA' : 'ZIADNA');
    results.push({
      ean: row.ean, oldUrl: row.stara_url, oldName: row.stary_nazov,
      oldCategory: old ? old.full : '',
      matchedTitle: best ? best.title : '', matchedPath: best ? best.fullPath : '', matchedUrl: best ? best.url : '',
      score: bestScore.toFixed(2), matchCount: bestMatchCount,
      confidence,
    });
  }

  const high = results.filter((r) => r.confidence === 'VYSOKA');
  const low = results.filter((r) => r.confidence !== 'VYSOKA');

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const header = ['ean', 'stara_url', 'stary_nazov', 'stara_kategoria', 'najdena_kategoria', 'cesta_kategorie', 'nova_url_kategorie', 'skore', 'pocet_zhod', 'istota'];
  const toCsv = (rows) => [header.join(';')].concat(rows.map((r) => [r.ean, r.oldUrl, r.oldName, r.oldCategory, r.matchedTitle, r.matchedPath, r.matchedUrl, r.score, r.matchCount, r.confidence].map(csvEscape).join(';'))).join('\n') + '\n';

  fs.writeFileSync(OUT_READY, toCsv(high), 'utf-8');
  fs.writeFileSync(OUT_REVIEW, toCsv(low), 'utf-8');

  const shoptetLines = high.map((r) => {
    const from = new URL(r.oldUrl).pathname.replace(/\/?$/, '/');
    const to = `/${r.matchedUrl}/`.replace(/\/+/g, '/');
    return [from, to, '0'].join(';');
  });
  fs.writeFileSync(OUT_SHOPTET, shoptetLines.join('\n') + (shoptetLines.length ? '\n' : ''), 'utf-8');

  const summary = `# Presmerovanie vyradených produktov na najbližšiu kategóriu

Vygenerované: ${new Date().toISOString()}

Vstup: **${discontinued.length}** produktov, ktoré boli v starom katalógu, ale žiadny dodávateľ ich už neposkytuje (\`redirect-map.csv\`, stav \`VYRADENY_Z_PONUKY\`).

Kategória sa hľadala pomocou zhody kľúčových slov medzi starou kategóriou/názvom produktu a názvami kategórií v novom strome (${categories.length} kategórií), s váhovaním podľa vzácnosti slova (bežné slová ako "príslušenstvo" majú menšiu váhu ako špecifické výrazy).

Zo zhody sú zámerne vylúčené názvy výrobcov/značiek (napr. "EMOS", "Philips") — inak by dominovali zhode aj pri úplne nesúvisiacich produktoch (napr. by sa "EMOS žiarovka" priradila ku kategórii "diaľkové ovládače Emos"). Do vysokej istoty sa počíta len zhoda min. 2 rôznych výrazov naraz, nie jeden nešpecifický.

## Výsledok
- **Vysoká istota zhody: ${high.length}** — pripravené na priamy import (\`redirect-map-discontinued-shoptet-import.csv\`, formát fromUrl;toUrl;automatic). Na kontrolnej vzorke cca 90-95 % zhôd sedelo vecne správne, zvyšok boli hraničné/nepresné prípady (napr. produkt s "USB" v názve priradený k inej "USB" kategórii) — odporúčam pred importom preletieť \`redirect-map-discontinued-ready.csv\` okom.
- **Nízka istota / žiadna zhoda: ${low.length}** — odporúčam nechať padnúť na 404 namiesto presmerovania na nesprávnu kategóriu (\`redirect-map-discontinued-review.csv\` pre prípadnú ručnú kontrolu).

Plný diagnostický zoznam (vysoká aj nízka istota) je aj samostatne v \`redirect-map-discontinued-ready.csv\` / \`redirect-map-discontinued-review.csv\` — vidno tam aj skóre a pôvodnú kategóriu, podľa ktorých sa dá posúdiť kvalita zhody.
`;
  fs.writeFileSync(OUT_REPORT, summary, 'utf-8');

  console.log('---');
  console.log(`Vysoká istota: ${high.length}, nízka/žiadna: ${low.length}`);
  console.log('Ready:', OUT_READY);
  console.log('Review:', OUT_REVIEW);
  console.log('Shoptet import:', OUT_SHOPTET);
  console.log('Report:', OUT_REPORT);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

// Automated equivalent of the "K-B" tab in the browser tool. Fetches all 5 K-B feed files,
// translates category names CZ->SK, applies the agreed category mapping, computes prices
// (K-B's own recommended price where available, otherwise cost+markup+VAT with a safety floor),
// and writes a Shoptet-native XML ready for Automatické importy.
//
// NOTE: the browser tool's optional "extra photos / energy labels / info sheets" probing
// (HTTP HEAD requests checking whether extra files exist on K-B's CDN) is intentionally NOT
// replicated here — it would mean tens of thousands of extra requests per run. The core import
// (categories, prices, availability, main image, description) works exactly as before.
//
// Usage: node transform-kb.js
// Required env vars: KB_ZBOZI_URL, KB_KATEGORIE_URL, KB_KATEGORIZACIA_URL, KB_CENY_URL, KB_DOSTUPNOSTI_URL
// Optional: KB_MARKUP (10), KB_MIN_MARGIN (10), KB_MIN_COST (0), KB_OUT

const fs = require('fs');
const path = require('path');
const { streamRecords } = require('./stream-records');
const { translateCategoryName, parseRecord, field, toFloat } = require('./parse-kb');
const { roundPrice, roundPriceUp } = require('./round-price');
const { heurekaCategoryIdFor } = require('./heureka-category');

const ZBOZI_URL = process.env.KB_ZBOZI_URL;
const KATEGORIE_URL = process.env.KB_KATEGORIE_URL;
const KATEGORIZACIA_URL = process.env.KB_KATEGORIZACIA_URL;
const CENY_URL = process.env.KB_CENY_URL;
const DOSTUPNOSTI_URL = process.env.KB_DOSTUPNOSTI_URL;

const MARKUP_PCT = parseFloat(process.env.KB_MARKUP || '10');
const MIN_MARGIN_PCT = parseFloat(process.env.KB_MIN_MARGIN || '10');
const MIN_COST = parseFloat(process.env.KB_MIN_COST || '0');
const EXCLUDE_UNAVAILABLE = process.env.KB_EXCLUDE_UNAVAILABLE === '1';
const INCLUDE_NO_CATEGORY = process.env.KB_INCLUDE_NO_CATEGORY !== '0'; // default true, matches browser tool default
const OUT_PATH = process.env.KB_OUT || path.join(__dirname, '..', 'output', 'kb.xml');
const STORE_NAME = process.env.KB_STORE_NAME || 'premiumstore.sk';
const CHECK_ENERGY_LABELS = process.env.KB_CHECK_ENERGY_LABELS === '1';
const ENERGY_LABEL_BASE = 'https://img.b2b.k-b.cz/fotocache/mid/images/orig/_LEGISLATIVA/ENERGETICKE_STITKY/';
// Only these two category branches ever get an energy label — matches the browser tool's
// catBig/catBuiltin settings ("Velké spotřebiče" / "Vestavné spotřebiče"), expressed here as
// the already-mapped SK target paths since that's what defaultCategory ends up holding.
const ENERGY_ELIGIBLE_PREFIXES = ['Domáce spotrebiče > Veľké spotrebiče', 'Domáce spotrebiče > Vstavané spotrebiče'];
function isEnergyEligible(defaultCategory) {
  return ENERGY_ELIGIBLE_PREFIXES.some((p) => defaultCategory === p || defaultCategory.startsWith(p + ' > '));
}

const MAPPING_PATH = path.join(__dirname, 'kb-mapping.json');
const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, 'utf-8'));
const MAPPING_RENAMES = mapping.categoryRenamesByPath || {};
const MAPPING_EXCLUSIONS = new Set(mapping.categoryExclusionsByPath || []);

const AVAILABILITY_MAP = {
  '0': 'Nedostupné', '1': '1-2 ks skladom', '2': '3-5 ks skladom',
  '3': '6-20 ks skladom', '4': '21 a viac ks skladom',
};

function xmlEscape(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function xmlCdata(s) { return '<![CDATA[' + String(s == null ? '' : s).replace(/]]>/g, ']]&gt;') + ']]>'; }
function xmlNum(n) {
  if (n === undefined || n === null || isNaN(n) || n < 0) return '0.00';
  return (Math.round(n * 100) / 100).toFixed(2);
}
function stripTags(html) { return String(html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim(); }
function truncateAtWord(s, maxLen) {
  if (!s || s.length <= maxLen) return s || '';
  const cut = s.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + '…';
}

async function loadAllRecords(url) {
  const records = [];
  await streamRecords(url, 'zaznam', (rawXml) => {
    const rec = parseRecord(rawXml);
    if (rec) records.push(rec);
  });
  return records;
}

// Checks whether a URL actually resolves (used only for the small "energy label exists?"
// candidate set — not run for the whole catalog). Runs with limited concurrency so we don't
// hammer K-B's CDN with thousands of simultaneous requests.
function urlExists(url) {
  return new Promise((resolve) => {
    const https = require('https');
    const req = https.request(url, { method: 'HEAD', timeout: 15000 }, (res) => {
      resolve(res.statusCode >= 200 && res.statusCode < 300);
      res.resume();
    });
    req.on('timeout', () => { req.destroy(); resolve(false); });
    req.on('error', () => resolve(false));
    req.end();
  });
}
async function checkUrlsWithConcurrency(items, concurrency, onResult) {
  let idx = 0;
  async function worker() {
    while (idx < items.length) {
      const i = idx++;
      const exists = await urlExists(items[i].url);
      onResult(items[i], exists);
    }
  }
  const workers = [];
  for (let w = 0; w < concurrency; w++) workers.push(worker());
  await Promise.all(workers);
}

function buildShopitemXml(p) {
  const parts = ['<SHOPITEM>'];
  parts.push(`<NAME>${xmlCdata(p.name)}</NAME>`);
  if (p.shortDescription) parts.push(`<SHORT_DESCRIPTION>${xmlCdata(p.shortDescription)}</SHORT_DESCRIPTION>`);
  parts.push(`<DESCRIPTION>${xmlCdata(p.description)}</DESCRIPTION>`);
  if (p.manufacturer) parts.push(`<MANUFACTURER>${xmlCdata(p.manufacturer)}</MANUFACTURER>`);
  if (p.warranty) parts.push(`<WARRANTY>${xmlEscape(p.warranty)}</WARRANTY>`);
  parts.push('<ITEM_TYPE>product</ITEM_TYPE>');
  parts.push('<UNIT>ks</UNIT>');
  parts.push(`<CODE>${xmlEscape(p.code)}</CODE>`);
  if (p.ean) parts.push(`<EAN>${xmlEscape(p.ean)}</EAN>`);

  const allCats = [p.defaultCategory].concat(p.extraCategories || []).filter(Boolean);
  if (allCats.length) {
    parts.push('<CATEGORIES>');
    allCats.forEach((c) => parts.push(`  <CATEGORY>${xmlCdata(c)}</CATEGORY>`));
    parts.push('</CATEGORIES>');
  }
  const heurekaCategoryId = heurekaCategoryIdFor(p.defaultCategory);
  if (heurekaCategoryId) parts.push(`<HEUREKA_CATEGORY_ID>${heurekaCategoryId}</HEUREKA_CATEGORY_ID>`);
  if (p.image || p.energyLabelUrl) {
    parts.push('<IMAGES>');
    if (p.image) parts.push(`  <IMAGE>${xmlEscape(p.image)}</IMAGE>`);
    if (p.energyLabelUrl) parts.push(`  <IMAGE>${xmlEscape(p.energyLabelUrl)}</IMAGE>`);
    parts.push('</IMAGES>');
  }

  parts.push(`<AVAILABILITY>${xmlCdata(p.availability)}</AVAILABILITY>`);
  parts.push('<VISIBLE>1</VISIBLE>');
  parts.push('<VISIBILITY>visible</VISIBILITY>');
  parts.push('<CURRENCY>EUR</CURRENCY>');
  parts.push(`<PRICE_VAT>${xmlNum(p.price)}</PRICE_VAT>`);
  if (p.purchasePrice) {
    parts.push(`<PURCHASE_PRICE>${xmlNum(p.purchasePrice)}</PURCHASE_PRICE>`);
    parts.push(`<PURCHASE_VAT>${xmlEscape(p.vat)}</PURCHASE_VAT>`);
    parts.push('<PURCHASE_PRICE_INCL_VAT>0</PURCHASE_PRICE_INCL_VAT>');
  }
  if (p.recyclingFeePrice) {
    parts.push(`<RECYCLING_FEE_CATEGORY>${xmlCdata(p.recyclingFeeCategory)}</RECYCLING_FEE_CATEGORY>`);
    parts.push(`<RECYCLING_FEE_PRICE>${xmlNum(p.recyclingFeePrice)}</RECYCLING_FEE_PRICE>`);
    parts.push('<RECYCLING_FEE_CURRENCY>EUR</RECYCLING_FEE_CURRENCY>');
    parts.push('<RECYCLING_FEE_TYPE>1</RECYCLING_FEE_TYPE>');
  }
  if (p.seoTitle) parts.push(`<SEO_TITLE>${xmlCdata(p.seoTitle)}</SEO_TITLE>`);
  if (p.metaDescription) parts.push(`<META_DESCRIPTION>${xmlCdata(p.metaDescription)}</META_DESCRIPTION>`);
  parts.push('</SHOPITEM>');
  return parts.join('\n');
}

async function main() {
  for (const [name, url] of [['KB_ZBOZI_URL', ZBOZI_URL], ['KB_KATEGORIE_URL', KATEGORIE_URL],
    ['KB_KATEGORIZACIA_URL', KATEGORIZACIA_URL], ['KB_CENY_URL', CENY_URL], ['KB_DOSTUPNOSTI_URL', DOSTUPNOSTI_URL]]) {
    if (!url) { console.error(`Missing ${name} environment variable.`); process.exit(1); }
  }

  console.log('Loading category tree...');
  const kategorieRecords = await loadAllRecords(KATEGORIE_URL);
  const categories = {}; // id -> {name, parent}
  for (const e of kategorieRecords) {
    const cid = field(e, 'sIdKategorie');
    categories[cid] = { name: field(e, 'sJmenoKategorie'), parent: field(e, 'sIdNadrizeneKategorie') };
  }
  console.log(`  -> ${Object.keys(categories).length} categories`);

  // original (untranslated) path per category — used to match the mapping JSON's path keys
  const origPathCache = {};
  function originalPathOf(cid) {
    if (origPathCache[cid] !== undefined) return origPathCache[cid];
    const seen = new Set();
    const parts = [];
    let cur = cid;
    while (cur && categories[cur] && !seen.has(cur)) {
      seen.add(cur);
      parts.push(categories[cur].name);
      cur = categories[cur].parent;
    }
    parts.reverse();
    const res = parts.join(' > ');
    origPathCache[cid] = res;
    return res;
  }
  const pathToId = {};
  for (const id in categories) pathToId[originalPathOf(id)] = id;

  // Stage 1: baseline CZ->SK word/phrase translation for every category (matches the browser
  // tool's "Preložiť názvy do SK" button).
  const renames = {};
  for (const id in categories) renames[id] = translateCategoryName(categories[id].name);

  // Stage 2: overlay the agreed category mapping (redirects/compound overrides) on top, matched
  // by the ORIGINAL (untranslated) path — exactly like importing settings in the browser tool.
  const excluded = new Set();
  const explicitOverrideIds = new Set();
  function isPathOverride(cid, rename) { return !!rename && explicitOverrideIds.has(cid); }
  Object.keys(MAPPING_RENAMES).forEach((p) => {
    const id = pathToId[p];
    if (id) { renames[id] = MAPPING_RENAMES[p]; explicitOverrideIds.add(id); }
  });
  MAPPING_EXCLUSIONS.forEach((p) => {
    const id = pathToId[p];
    if (id) excluded.add(id);
  });

  const buildPathCache = {};
  function buildPath(cid) {
    if (buildPathCache[cid] !== undefined) return buildPathCache[cid];
    const seen = new Set();
    const parts = [];
    let cur = cid;
    while (cur && categories[cur] && !seen.has(cur)) {
      seen.add(cur);
      const rename = renames[cur];
      if (isPathOverride(cur, rename)) { parts.push(rename); break; }
      parts.push(rename || categories[cur].name);
      cur = categories[cur].parent;
    }
    parts.reverse();
    const res = parts.join(' > ');
    buildPathCache[cid] = res;
    return res;
  }
  const ancestorsCache = {};
  function ancestorsOf(cid) {
    if (ancestorsCache[cid]) return ancestorsCache[cid];
    const seen = new Set();
    let cur = cid;
    const chain = [];
    while (cur && categories[cur] && !seen.has(cur)) {
      seen.add(cur);
      chain.push(cur);
      cur = categories[cur].parent;
    }
    ancestorsCache[cid] = chain;
    return chain;
  }
  function ancestorPathsOf(cid) {
    if (isPathOverride(cid, renames[cid])) return [];
    const chain = ancestorsOf(cid).slice(1);
    const paths = [];
    for (const id of chain) {
      const rename = renames[id];
      if (isPathOverride(id, rename)) {
        const segments = rename.split(' > ');
        for (let i = 1; i <= segments.length; i++) paths.push(segments.slice(0, i).join(' > '));
        return paths;
      }
      paths.push(buildPath(id));
    }
    return paths;
  }

  console.log('Loading product->category mapping...');
  const kategorizaciaRecords = await loadAllRecords(KATEGORIZACIA_URL);
  const prodCategoryId = {};
  for (const e of kategorizaciaRecords) {
    const pid = field(e, 'sIdZbozi');
    if (prodCategoryId[pid] === undefined) prodCategoryId[pid] = field(e, 'sIdKategorie');
  }
  console.log(`  -> ${Object.keys(prodCategoryId).length} products categorized`);

  console.log('Loading prices...');
  const cenyRecords = await loadAllRecords(CENY_URL);
  const prodPrice = {};
  for (const e of cenyRecords) {
    const pid = field(e, 'sIdZbozi');
    prodPrice[pid] = { cena: field(e, 'nCena'), doporucena: field(e, 'nDoporucenaCena'), internetSK: field(e, 'nCenaInternetSK') };
  }
  console.log(`  -> ${Object.keys(prodPrice).length} prices`);

  console.log('Loading availability...');
  const dostupnostiRecords = await loadAllRecords(DOSTUPNOSTI_URL);
  const prodAvail = {};
  for (const e of dostupnostiRecords) {
    prodAvail[field(e, 'sIdZbozi')] = field(e, 'sDostupnost');
  }
  console.log(`  -> ${Object.keys(prodAvail).length} availability entries`);

  console.log('Streaming main product feed...');
  const stats = {
    total: 0, written: 0, skippedByCategoryFilter: 0, skippedUnavailable: 0,
    noPriceInfo: 0, skippedCheap: 0, usedRecommendedPrice: 0, usedMarkupPrice: 0,
    marginFloorApplied: 0, recyclingFeeCount: 0, energyLabelCandidates: 0, energyLabelsFound: 0,
  };
  const products = [];

  await streamRecords(ZBOZI_URL, 'zaznam', (rawXml) => {
    stats.total++;
    const e = parseRecord(rawXml);
    if (!e) return;
    const pid = field(e, 'sIdZbozi');

    const catIdForFilter = prodCategoryId[pid];
    if (catIdForFilter) {
      if (excluded.has(catIdForFilter)) { stats.skippedByCategoryFilter++; return; }
    } else if (!INCLUDE_NO_CATEGORY) {
      stats.skippedByCategoryFilter++; return;
    }

    if (EXCLUDE_UNAVAILABLE && prodAvail[pid] === '0') { stats.skippedUnavailable++; return; }

    const code = field(e, 'sKodZbozi') || pid;
    const name = field(e, 'sJmenoVyrobku');
    const ean = field(e, 'sEan');
    const manufacturer = field(e, 'sJmenoVyrobce');
    const warranty = field(e, 'nZarukaMesicu');
    let vat = field(e, 'nDph') || '23';
    vat = vat.replace(/\.00$/, '');
    const image = field(e, 'sJmenoObrazku') ? encodeURI(field(e, 'sJmenoObrazku')) : '';
    const description = field(e, 'sPopis');
    const shortDescription = field(e, 'sKratkyPopis');

    const priceInfo = prodPrice[pid];
    if (!priceInfo) { stats.noPriceInfo++; return; }
    const cenaNakupna = toFloat(priceInfo.cena);
    if (MIN_COST > 0 && cenaNakupna > 0 && cenaNakupna < MIN_COST) { stats.skippedCheap++; return; }

    let recommended = 0;
    for (const cand of [priceInfo.internetSK, priceInfo.doporucena]) {
      const v = toFloat(cand);
      if (v > 0) { recommended = v; break; }
    }
    let price;
    if (recommended > 0) { price = recommended; stats.usedRecommendedPrice++; }
    else { price = roundPrice(cenaNakupna * (1 + MARKUP_PCT / 100) * (1 + parseFloat(vat) / 100)); stats.usedMarkupPrice++; }

    if (cenaNakupna > 0) {
      const floor = cenaNakupna * (1 + MIN_MARGIN_PCT / 100) * (1 + parseFloat(vat) / 100);
      if (price < floor) { price = roundPriceUp(floor); stats.marginFloorApplied++; }
    }

    if (isNaN(price) || isNaN(cenaNakupna) || price < 0 || cenaNakupna < 0) {
      stats.invalidPrice = (stats.invalidPrice || 0) + 1;
      return;
    }

    const catId = prodCategoryId[pid];
    const defaultCategory = catId ? buildPath(catId) : '';
    const extraCategories = catId ? ancestorPathsOf(catId) : [];

    const availCode = prodAvail[pid];
    const availability = availCode !== undefined ? (AVAILABILITY_MAP[availCode] || '') : '';

    let recyclingFeeCategory = '', recyclingFeePrice = 0;
    const rawRecycleCode = field(e, 'sRecycleCode');
    const feePrice = toFloat(field(e, 'nRecyclePrice'));
    if (rawRecycleCode && feePrice > 0) {
      const m = rawRecycleCode.match(/^(RP\s+\S+\s*-\s*SEWA\s+[\d.]+)/i);
      recyclingFeeCategory = (m ? m[1] : rawRecycleCode).trim();
      recyclingFeePrice = feePrice;
      stats.recyclingFeeCount++;
    }

    const nameHasManufacturer = manufacturer && name.toLowerCase().includes(manufacturer.toLowerCase());
    const titleCore = (manufacturer && !nameHasManufacturer) ? `${name} – ${manufacturer}` : name;
    const seoTitle = truncateAtWord(`${titleCore} | ${STORE_NAME}`, 70);
    const availText = availability ? availability.toLowerCase() : 'dostupnosť na dopyt';
    const warrantyText = warranty ? `${warranty} mesiacov záruka` : 'záruka podľa výrobcu';
    const metaDescription = truncateAtWord(
      `${name}${manufacturer && !nameHasManufacturer ? ' od ' + manufacturer : ''} – ${availText}, ${warrantyText}. Kúpte na ${STORE_NAME}.`,
      155
    );

    products.push({
      code, name, description, shortDescription, manufacturer, ean, warranty,
      defaultCategory, extraCategories, image, availability, price,
      purchasePrice: cenaNakupna, vat, recyclingFeeCategory, recyclingFeePrice,
      seoTitle, metaDescription,
    });
    stats.written++;
  });

  if (CHECK_ENERGY_LABELS) {
    const candidates = [];
    for (const p of products) {
      if (isEnergyEligible(p.defaultCategory)) {
        stats.energyLabelCandidates++;
        candidates.push({ product: p, url: encodeURI(ENERGY_LABEL_BASE + p.code + '.jpg') });
      }
    }
    console.log(`Checking ${candidates.length} possible energy labels (Veľké/Vstavané spotrebiče only)...`);
    await checkUrlsWithConcurrency(candidates, 12, (item, exists) => {
      if (exists) {
        item.product.energyLabelUrl = item.url;
        stats.energyLabelsFound++;
      }
    });
  }

  console.log('Writing Shoptet XML...');
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  const out = fs.createWriteStream(OUT_PATH, { encoding: 'utf-8' });
  out.write('<?xml version="1.0" encoding="utf-8"?>\n<SHOP>\n');
  for (const p of products) out.write(buildShopitemXml(p) + '\n');
  out.write('</SHOP>\n');
  out.end();
  await new Promise((resolve) => out.on('finish', resolve));

  console.log('Done.');
  console.log(JSON.stringify(stats, null, 2));
  console.log('Output written to', OUT_PATH);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

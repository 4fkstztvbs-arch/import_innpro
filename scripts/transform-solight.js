// Automated equivalent of the "Solight" tab in the browser tool. Fetches the Solight product
// feed (cenik.xml) and writes a Shoptet-native XML ready for Automatické importy. Uses
// Solight's own eshop price directly (it's the real price Solight itself sells at), fixes the
// known broken image URL path, and strips stray whitespace characters some filenames have.
// Also skips any image whose URL is on data/solight-broken-images.json — Solight's own feed
// sometimes lists gallery images that don't exist on their server at all (confirmed by hand
// 2026-08-14); see check-solight-images.js for how that list gets built/refreshed.
//
// Usage: node transform-solight.js
// Required env vars: SOLIGHT_URL
// Optional: SOLIGHT_MARKUP (0), SOLIGHT_MIN_COST (0), SOLIGHT_VAT (23),
//           SOLIGHT_MAX_IMAGES (5), SOLIGHT_OUT

const fs = require('fs');
const path = require('path');
const { streamRecords } = require('./stream-records');
const { parseSolightProduct } = require('./parse-solight');
const { roundPrice } = require('./round-price');
const { heurekaCategoryIdFor } = require('./heureka-category');
const { applyHeurekaPriceTarget } = require('./heureka-price-targets');
const { loadPreviousPrices, checkPriceSanity, buildCategoryPriceStats, buildOwnPreviousCategoryStats, buildFeedCategoryStats, mergeCategoryStats, checkCategoryOutlier, writeAnomalyReport } = require('./price-sanity');
const { isCpcNonConverter } = require('./heureka-cpc-exclusions');

// Mobilné klimatizácie (portable AC units) explicitly hidden from the Heureka feed on request
// 2026-08-26: 114,85 EUR spent over the first 17 days live, only 2 orders, and CPC ~50% above
// the catalog average - a losing category for this store's margin regardless of the general
// Solight HEUREKA_HIDDEN opt-out below. Matched on the raw category leaf (not the resolved/
// renamed p.defaultCategory, which is shared with "Teplovzdušné konvektory"/"Ventilátory" under
// the same "Vzduchotechnika" bucket and would over-hide those too).
const MOBILE_AC_CATEGORY_RE = /mobiln[ée]\s+klimatiz[aá]cie/i;

const URL = process.env.SOLIGHT_URL;
const MARKUP_PCT = parseFloat(process.env.SOLIGHT_MARKUP || '0');
const MIN_COST = parseFloat(process.env.SOLIGHT_MIN_COST || '0');
const VAT = process.env.SOLIGHT_VAT || '23';
const MAX_IMAGES = Math.max(1, parseInt(process.env.SOLIGHT_MAX_IMAGES || '5', 10));
// Optional caching proxy (cloudflare-worker-solight/) in front of solight.sk's own image CDN —
// Shoptet's bulk import can trip solight.sk's rate limit (HTTP 429) when a lot of new products
// land at once; routing through Cloudflare's network instead of Shoptet's single IP avoids that,
// and repeat imports hit the proxy's cache instead of solight.sk at all. Falls back to solight.sk
// directly (today's behaviour) when unset.
const IMAGE_PROXY_BASE = (process.env.SOLIGHT_IMAGE_PROXY_BASE || '').replace(/\/+$/, '');
// Path suffixes (not full URLs — survives proxy-base/cache-bust changes) that check-solight-images.js
// found to 404 both through the proxy and directly against solight.sk — i.e. genuinely missing on
// Solight's own server, not a problem on our end. Refreshed periodically (see
// check-solight-images.yml), consumed here so we don't keep shipping URLs already known to fail.
const BROKEN_IMAGES_PATH = path.join(__dirname, '..', 'data', 'solight-broken-images.json');
const BROKEN_IMAGE_SUFFIXES = new Set(
  fs.existsSync(BROKEN_IMAGES_PATH) ? JSON.parse(fs.readFileSync(BROKEN_IMAGES_PATH, 'utf-8')) : []
);
const OUT_PATH = process.env.SOLIGHT_OUT || path.join(__dirname, '..', 'output', 'solight.xml');
const STORE_NAME = process.env.SOLIGHT_STORE_NAME || 'premiumstore.sk';
const OUT_OF_STOCK_TEXT = process.env.SOLIGHT_OUT_OF_STOCK_TEXT || 'Na objednávku';
const EXCLUDE_UNAVAILABLE = process.env.SOLIGHT_EXCLUDE_UNAVAILABLE === '1';

const MAPPING_PATH = path.join(__dirname, 'solight-mapping.json');
const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, 'utf-8'));
const EXCLUSIONS = new Set(mapping.categoryExclusionsByPath || []);
const { vytvorZaradovac } = require('./zarad-kategoriu');
const zaradovac = vytvorZaradovac('solight');

function resolveCategory(rawCategoryName, productLabel) {
  if (!rawCategoryName) return { category: '', extraCategories: [], excluded: false };
  const parts = rawCategoryName.split('/').map((s) => s.trim()).filter(Boolean);
  const keys = [];
  let cur = '';
  for (const p of parts) {
    cur = cur ? cur + ' > ' + p : p;
    keys.push({ key: cur, name: p });
  }
  if (!keys.length) return { category: '', extraCategories: [], excluded: false };
  if (EXCLUSIONS.has(keys[keys.length - 1].key)) return { category: '', extraCategories: [], excluded: true };

  // Zaradenie rieši jediná tabuľka data/kategorie/solight.json — najdlhší prefix vyhráva a jeho
  // cieľ nahrádza celú cestu. Nahradilo to kaskádu prefixového prepisu, brány, fuzzy hľadania,
  // prekladu starý->nový strom a pádu na predka; podrobnosti v scripts/zarad-kategoriu.js.
  const zdroj = keys[keys.length - 1].key;
  const { kategoria } = zaradovac.zarad(zdroj, { produkt: productLabel });
  // Chýbajúce pravidlo NIE JE dôvod produkt zahodiť: ostane bez kategórie, hide-uncategorised ho
  // skryje a reports/chybajuce-pravidla-solight.md povie, aké pravidlo doplniť.
  if (!kategoria) return { category: '', extraCategories: [], excluded: false };
  return { category: kategoria, extraCategories: zaradovac.predkovia(kategoria), excluded: false };
}

const DOC_LANG_LABELS = { cz: 'CZ', sk: 'SK', en: 'EN', de: 'DE' };
// Solight's document filenames follow "{kod-produktu}_{nazov dokumentu}.pdf" (e.g.
// "wo8017_sk návod.pdf", "xa05_produktový list.pdf") — derive a human label from the
// filename itself since the feed's <ProductDocument> node carries no separate title.
function humanizeDocLabel(url) {
  try {
    const rawName = decodeURIComponent((url.split('/').pop() || '').split('?')[0]);
    let base = rawName.replace(/\.[a-z0-9]+$/i, '');
    if (base.includes('_')) base = base.slice(base.indexOf('_') + 1);
    base = base.replace(/_/g, ' ').trim();
    if (!base) return null;

    const tokens = base.split(/\s+/);
    const langs = [];
    while (tokens.length > 1 && DOC_LANG_LABELS[tokens[0].toLowerCase()]) {
      langs.push(DOC_LANG_LABELS[tokens.shift().toLowerCase()]);
    }
    while (tokens.length > 1 && DOC_LANG_LABELS[tokens[tokens.length - 1].toLowerCase()]) {
      langs.push(DOC_LANG_LABELS[tokens.pop().toLowerCase()]);
    }
    let label = tokens.join(' ').trim();
    if (!label) return null;
    label = label.charAt(0).toUpperCase() + label.slice(1);
    return langs.length ? `${label} (${[...new Set(langs)].join('/')})` : label;
  } catch {
    return null;
  }
}

function xmlEscape(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function xmlAttr(s) { return xmlEscape(s).replace(/"/g, '&quot;'); }
function imageAltFor(name, index, total) {
  return total > 1 ? `${name} - obrázok ${index + 1}` : name;
}
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

// truncateAtWord na celý reťazec "nadpis | Obchod" vie pri hranici odseknúť posledné slovo -
// ak je to práve názov obchodu (napr. mu chýba len 1 znak do limitu), celý názov obchodu zmizne
// a titulok skončí osamoteným "|…". Názov obchodu sa preto nikdy neorezáva - orezáva sa len
// samotný názov produktu tak, aby sa celé "core | Obchod" zmestilo do limitu.
function buildSeoTitle(core, storeName, maxLen) {
  const suffix = ` | ${storeName}`;
  const full = `${core}${suffix}`;
  if (full.length <= maxLen) return full;
  return truncateAtWord(core, maxLen - suffix.length) + suffix;
}

// Cache-bust query param: Shoptet appears to skip re-downloading an image whose URL string is
// unchanged from a previous (possibly failed) import attempt — a large batch of proxy URLs that
// failed while the Cloudflare Worker was still cold/unstable right after deploy (2026-08-09)
// stayed permanently imageless even after the worker became reliable, because the URL never
// changed. Bumping this forces Shoptet to treat every URL as new and retry the download.
// Increment only if another such stuck-batch is ever suspected again.
const IMAGE_CACHE_BUST = 'v2';

function fixImageUrl(rawUrl) {
  const cleaned = rawUrl.replace(/\s+/g, '');
  const fixed = cleaned.replace('/userdata/images/storecards/', '/userdata/cache/images/storecards/550/');
  const proxied = IMAGE_PROXY_BASE ? fixed.replace(/^https?:\/\/[^/]+/, IMAGE_PROXY_BASE) : fixed;
  return IMAGE_PROXY_BASE ? `${proxied}?${IMAGE_CACHE_BUST}` : proxied;
}

// The blocklist is keyed by the raw (pre-proxy) path, i.e. the same
// /userdata/cache/images/storecards/... suffix fixImageUrl() would produce — check before
// proxying/cache-busting so the comparison doesn't depend on either.
// NOTE: deliberately NOT using the global URL class here (new URL(...).pathname) — this module
// has its own top-level `const URL = process.env.SOLIGHT_URL` (the feed URL string), which
// shadows the built-in URL constructor for the whole file. That silently turned every call here
// into "URL is not a constructor", so isKnownBrokenImage always fell back to comparing the
// *whole* URL (incl. domain) against the blocklist's domain-less suffixes and never matched
// anything (confirmed 2026-08-15 via temporary debug logging in a live workflow run). Plain
// string slicing avoids the name collision entirely.
function isKnownBrokenImage(rawUrl) {
  const cleaned = rawUrl.replace(/\s+/g, '');
  const fixed = cleaned.replace('/userdata/images/storecards/', '/userdata/cache/images/storecards/550/');
  const withoutQuery = fixed.split('?')[0];
  const afterScheme = withoutQuery.replace(/^https?:\/\//, '');
  const slashIdx = afterScheme.indexOf('/');
  const suffix = slashIdx >= 0 ? afterScheme.slice(slashIdx) : withoutQuery;
  return BROKEN_IMAGE_SUFFIXES.has(suffix);
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
  if (p.minQty > 1) {
    parts.push('<STOCK>');
    parts.push(`  <MINIMAL_AMOUNT>${xmlEscape(p.minQty)}</MINIMAL_AMOUNT>`);
    parts.push('</STOCK>');
  }
  if (p.ean) parts.push(`<EAN>${xmlEscape(p.ean)}</EAN>`);

  const extraCats = [...new Set((p.extraCategories || []).filter((c) => c && c !== p.defaultCategory))];
  if (p.defaultCategory || extraCats.length) {
    parts.push('<CATEGORIES>');
    // Shoptet RNG vyžaduje CATEGORY elementy pred DEFAULT_CATEGORY.
    extraCats.forEach((c) => parts.push(`  <CATEGORY>${xmlCdata(c)}</CATEGORY>`));
    if (p.defaultCategory) parts.push(`  <DEFAULT_CATEGORY>${xmlCdata(p.defaultCategory)}</DEFAULT_CATEGORY>`);
    parts.push('</CATEGORIES>');
  }
  const heurekaCategoryId = heurekaCategoryIdFor(p.defaultCategory);
  if (heurekaCategoryId) parts.push(`<HEUREKA_CATEGORY_ID>${heurekaCategoryId}</HEUREKA_CATEGORY_ID>`);
  // Solight zámerne vynechaný z kategóriového/cenového HEUREKA_HIDDEN pravidla (na žiadosť
  // 2026-08-11) — scripts/heureka-hidden-categories.json by tu zasiahlo 88 % sortimentu.
  // Napriek tomu sa HEUREKA_HIDDEN nastaví, ak je produkt preukázaný neprevádzajúci CPC klik
  // (isCpcNonConverter) alebo patrí do explicitne vylúčenej kategórie Mobilné klimatizácie
  // (heurekaHidden, viď MOBILE_AC_CATEGORY_RE vyššie a volanie buildShopitemXml nižšie).
  if (p.heurekaHidden) parts.push('<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN>');
  if (p.images.length) {
    parts.push('<IMAGES>');
    p.images.forEach((img, i) => parts.push(`  <IMAGE description="${xmlAttr(imageAltFor(p.name, i, p.images.length))}">${xmlEscape(img)}</IMAGE>`));
    parts.push('</IMAGES>');
  }
  if (p.params.length) {
    parts.push('<TEXT_PROPERTIES>');
    p.params.forEach((pv) => {
      const idx = pv.indexOf(';');
      if (idx > 0) {
        parts.push('  <TEXT_PROPERTY>');
        parts.push(`    <NAME>${xmlCdata(pv.slice(0, idx))}</NAME>`);
        parts.push(`    <VALUE>${xmlCdata(pv.slice(idx + 1))}</VALUE>`);
        parts.push('  </TEXT_PROPERTY>');
      }
    });
    parts.push('</TEXT_PROPERTIES>');
  }
  parts.push(`<AVAILABILITY>${xmlCdata(p.availability)}</AVAILABILITY>`);
  parts.push('<VISIBLE>1</VISIBLE>');
  parts.push('<VISIBILITY>visible</VISIBILITY>');
  parts.push(`<LOGISTIC><WEIGHT>${xmlNum(p.weightKg || 0)}</WEIGHT></LOGISTIC>`);
  parts.push('<CURRENCY>EUR</CURRENCY>');
  parts.push(`<PRICE_VAT>${xmlNum(p.price)}</PRICE_VAT>`);
  if (p.purchasePrice) {
    parts.push(`<PURCHASE_PRICE>${xmlNum(p.purchasePrice)}</PURCHASE_PRICE>`);
    parts.push(`<PURCHASE_VAT>${xmlEscape(VAT)}</PURCHASE_VAT>`);
    parts.push('<PURCHASE_PRICE_INCL_VAT>0</PURCHASE_PRICE_INCL_VAT>');
  }
  if (p.seoTitle) parts.push(`<SEO_TITLE>${xmlCdata(p.seoTitle)}</SEO_TITLE>`);
  if (p.metaDescription) parts.push(`<META_DESCRIPTION>${xmlCdata(p.metaDescription)}</META_DESCRIPTION>`);
  parts.push('</SHOPITEM>');
  return parts.join('\n');
}

async function main() {
  if (!URL) { console.error('Missing SOLIGHT_URL environment variable.'); process.exit(1); }

  console.log('Streaming Solight feed and building Shoptet XML...');
  const previousPrices = loadPreviousPrices(OUT_PATH);
  const catalogCategoryStats = buildCategoryPriceStats(OUT_PATH);
  const ownPreviousCategoryStats = buildOwnPreviousCategoryStats(OUT_PATH);
  const bypassCategoryStats = mergeCategoryStats(catalogCategoryStats, ownPreviousCategoryStats);
  const anomalies = [];

  const stats = {
    total: 0, written: 0, skippedCheap: 0, skippedUnavailable: 0, skippedByCategory: 0, skippedUnmatchedCategory: 0,
    noPrice: 0, withDocs: 0, withVideo: 0, invalidPrice: 0,
  };
  const seenCodes = new Set();
  const candidates = [];
  const minOdbery = [];

  await streamRecords(URL, 'product', (rawXml) => {
    stats.total++;
    let p;
    try { p = parseSolightProduct(rawXml); } catch (e) { return; }
    if (!p) return;
    if (p.costEUR <= 0) {
      stats.noPrice++;
      anomalies.push({ code: p.code, ean: p.ean, name: p.name, reason: 'zero-price', newPrice: 0 });
      return;
    }
    if (MIN_COST > 0 && p.costEUR < MIN_COST) { stats.skippedCheap++; return; }

    let code = p.code || ('SOL' + stats.total);
    if (seenCodes.has(code)) code = code + '-2';
    seenCodes.add(code);

    const basePrice = p.eshopPriceEUR > 0 ? p.eshopPriceEUR : p.costEUR;
    let price = roundPrice(basePrice * (1 + MARKUP_PCT / 100));
    price = applyHeurekaPriceTarget(p.ean, price, p.costEUR, parseFloat(VAT));
    if (isNaN(price) || price <= 0) {
      stats.invalidPrice++;
      anomalies.push({ code, ean: p.ean, name: p.name, reason: 'zero-price', newPrice: price || 0 });
      return;
    }

    const { category, extraCategories, excluded, unmatchedCategory } = resolveCategory(p.categoryRaw, p.name);
    const heurekaHidden = isCpcNonConverter(p.ean) || MOBILE_AC_CATEGORY_RE.test(p.categoryRaw || '');
    if (excluded) { if (unmatchedCategory) stats.skippedUnmatchedCategory++; else stats.skippedByCategory++; return; }

    let availability, isAvailable;
    if (p.stockQty > 0) {
      availability = 'Skladom';
      isAvailable = true;
    } else if (p.deliveryDate && p.deliveryDate !== 'neznámé') {
      availability = `Dostupné od ${p.deliveryDate}`;
      isAvailable = true;
    } else {
      availability = OUT_OF_STOCK_TEXT;
      isAvailable = false;
    }
    if (EXCLUDE_UNAVAILABLE && !isAvailable) { stats.skippedUnavailable++; return; }

    let description = p.description;
    if (p.docs.length) {
      stats.withDocs++;
      p.docs.forEach((url, i) => {
        const label = humanizeDocLabel(url) || `Dokument${p.docs.length > 1 ? ' ' + (i + 1) : ''}`;
        description += `<p><a href="${encodeURI(url)}" target="_blank" rel="noopener">Stiahnuť: ${label}</a></p>`;
      });
    }
    if (p.videoLink) {
      description += `<p><a href="${encodeURI(p.videoLink)}" target="_blank" rel="noopener">Zobraziť video</a></p>`;
      stats.withVideo++;
    }
    const shortDescription = truncateAtWord(stripTags(description), 200) || p.shortDescFallback;

    const nameHasManufacturer = p.manufacturer && p.name.toLowerCase().includes(p.manufacturer.toLowerCase());
    const titleCore = (p.manufacturer && !nameHasManufacturer) ? `${p.name} – ${p.manufacturer}` : p.name;
    const seoTitle = buildSeoTitle(titleCore, STORE_NAME, 70);
    const metaDescription = truncateAtWord(
      `${p.name}${p.manufacturer && !nameHasManufacturer ? ' od ' + p.manufacturer : ''} – ${availability.toLowerCase()}. Kúpte na ${STORE_NAME}.`,
      155
    );

    const images = p.images.filter((u) => !isKnownBrokenImage(u)).slice(0, MAX_IMAGES).map(fixImageUrl);

    candidates.push({
      code, ean: p.ean, name: p.name, category, price,
      shopitemData: {
        code, name: p.name, description, shortDescription, manufacturer: p.manufacturer,
        warranty: p.warranty, ean: p.ean, defaultCategory: category, extraCategories,
        images, params: p.params, availability, weightKg: p.weightKg, price,
        purchasePrice: p.costEUR, seoTitle, metaDescription, heurekaHidden,
        minQty: p.minQty, packageQty: p.packageQty,
      },
    });
  });

  const feedCategoryStats = buildFeedCategoryStats(candidates);
  const categoryStats = mergeCategoryStats(feedCategoryStats, catalogCategoryStats);

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  const out = fs.createWriteStream(OUT_PATH, { encoding: 'utf-8' });
  out.write('<?xml version="1.0" encoding="utf-8"?>\n<SHOP>\n');

  for (const c of candidates) {
    const sanity = checkPriceSanity(previousPrices, c.code, c.ean, c.price);
    if (!sanity.sane) {
      stats.skippedPriceAnomaly = (stats.skippedPriceAnomaly || 0) + 1;
      anomalies.push({ code: c.code, ean: c.ean, name: c.name, reason: 'day-over-day', ...sanity });
      continue;
    }
    const categoryOutlier = checkCategoryOutlier(categoryStats, bypassCategoryStats, c.category, c.price);
    if (!categoryOutlier.sane) {
      stats.skippedPriceAnomaly = (stats.skippedPriceAnomaly || 0) + 1;
      anomalies.push({ code: c.code, ean: c.ean, name: c.name, reason: 'category-outlier', ...categoryOutlier });
      continue;
    }
    out.write(buildShopitemXml(c.shopitemData) + '\n');
    if (c.shopitemData.minQty > 1) {
      minOdbery.push({
        code: c.code,
        name: c.name,
        minQty: c.shopitemData.minQty,
        packageQty: c.shopitemData.packageQty,
      });
    }
    stats.written++;
  }

  out.write('</SHOP>\n');
  out.end();
  await new Promise((resolve) => out.on('finish', resolve));

  console.log('Done.');
  writeAnomalyReport('solight', anomalies);

  if (minOdbery.length) {
    const r = ['# Minimálny odber — Solight', '',
      `Kontrola z ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC.`, '',
      `Solight pri **${minOdbery.length}** produktoch vo výslednom XML uvádza MINQTY > 1.`,
      'Do XML sa zapisuje ako `<STOCK><MINIMAL_AMOUNT>…</MINIMAL_AMOUNT></STOCK>`.',
      '`package` je iba veľkosť kartónu/balenia dodávateľa a nepoužíva sa ako minimum.', '',
      '| Kód | Produkt | MINQTY | package |', '|---|---|---:|---:|'];
    for (const m of minOdbery.sort((a, b) => b.minQty - a.minQty)) {
      r.push(`| \`${m.code}\` | ${m.name.slice(0, 60)} | ${m.minQty} | ${m.packageQty || '—'} |`);
    }
    fs.writeFileSync(path.join(__dirname, '..', 'reports', 'minimalny-odber-solight.md'),
      r.join('\n') + '\n');
    console.log(`  -> ${minOdbery.length} produktov s MINQTY > 1, report: reports/minimalny-odber-solight.md`);
  }
  const categoryReport = zaradovac.zapisReport();
  console.log(JSON.stringify({ ...stats, categoryReport }, null, 2));
  console.log('Output written to', OUT_PATH);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

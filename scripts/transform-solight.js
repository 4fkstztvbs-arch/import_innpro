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
const { applyHeurekaPriceTarget, cannotCompeteOnPrice } = require('./heureka-price-targets');

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
const RENAMES = mapping.categoryRenamesByPath || {};
const EXCLUSIONS = new Set(mapping.categoryExclusionsByPath || []);

function isPathOverride(cumKey, rename) { return !!rename && cumKey.includes(' > '); }

// Identical logic to the browser tool's solDisplayPath()/extraCategories.
function resolveCategory(rawCategoryName) {
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

  const partsResult = [];
  for (let i = keys.length - 1; i >= 0; i--) {
    const rename = RENAMES[keys[i].key];
    if (isPathOverride(keys[i].key, rename)) { partsResult.unshift(rename); break; }
    partsResult.unshift(rename || keys[i].name);
  }
  const category = partsResult.join(' > ');
  const segs = category.split(' > ');
  const extraCategories = [];
  for (let i = 1; i < segs.length; i++) extraCategories.push(segs.slice(0, i).join(' > '));
  return { category, extraCategories, excluded: false };
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
  if (p.ean) parts.push(`<EAN>${xmlEscape(p.ean)}</EAN>`);

  const allCats = [p.defaultCategory].concat(p.extraCategories || []).filter(Boolean);
  if (allCats.length) {
    parts.push('<CATEGORIES>');
    allCats.forEach((c) => parts.push(`  <CATEGORY>${xmlCdata(c)}</CATEGORY>`));
    parts.push('</CATEGORIES>');
  }
  const heurekaCategoryId = heurekaCategoryIdFor(p.defaultCategory);
  if (heurekaCategoryId) parts.push(`<HEUREKA_CATEGORY_ID>${heurekaCategoryId}</HEUREKA_CATEGORY_ID>`);
  // Solight zámerne vynechaný z kategóriového/cenového HEUREKA_HIDDEN pravidla (na žiadosť
  // 2026-08-11) — scripts/heureka-hidden-categories.json by tu zasiahlo 88 % sortimentu. Toto je
  // ale iný, oveľa užší prípad (na žiadosť 2026-08-13): produkt, kde sme aj po znížení na
  // maržovú podlahu preukázateľne nekonkurencieschopní cenou - tých je rádovo menej a ide o
  // konkrétne produkty, nie celé kategórie.
  if (cannotCompeteOnPrice(p.ean)) parts.push('<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN>');
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
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  const out = fs.createWriteStream(OUT_PATH, { encoding: 'utf-8' });
  out.write('<?xml version="1.0" encoding="utf-8"?>\n<SHOP>\n');

  const stats = {
    total: 0, written: 0, skippedCheap: 0, skippedUnavailable: 0, skippedByCategory: 0,
    noPrice: 0, withDocs: 0, withVideo: 0, invalidPrice: 0,
  };
  const seenCodes = new Set();

  await streamRecords(URL, 'product', (rawXml) => {
    stats.total++;
    let p;
    try { p = parseSolightProduct(rawXml); } catch (e) { return; }
    if (!p) return;
    if (p.costEUR <= 0) { stats.noPrice++; return; }
    if (MIN_COST > 0 && p.costEUR < MIN_COST) { stats.skippedCheap++; return; }

    let code = p.code || ('SOL' + stats.total);
    if (seenCodes.has(code)) code = code + '-2';
    seenCodes.add(code);

    const basePrice = p.eshopPriceEUR > 0 ? p.eshopPriceEUR : p.costEUR;
    let price = roundPrice(basePrice * (1 + MARKUP_PCT / 100));
    price = applyHeurekaPriceTarget(p.ean, price, p.costEUR, parseFloat(VAT));
    if (isNaN(price) || price < 0) { stats.invalidPrice++; return; }

    const { category, extraCategories, excluded } = resolveCategory(p.categoryRaw);
    if (excluded) { stats.skippedByCategory++; return; }

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
    const seoTitle = truncateAtWord(`${titleCore} | ${STORE_NAME}`, 70);
    const metaDescription = truncateAtWord(
      `${p.name}${p.manufacturer && !nameHasManufacturer ? ' od ' + p.manufacturer : ''} – ${availability.toLowerCase()}. Kúpte na ${STORE_NAME}.`,
      155
    );

    const images = p.images.filter((u) => !isKnownBrokenImage(u)).slice(0, MAX_IMAGES).map(fixImageUrl);

    const shopitem = buildShopitemXml({
      code, name: p.name, description, shortDescription, manufacturer: p.manufacturer,
      warranty: p.warranty, ean: p.ean, defaultCategory: category, extraCategories,
      images, params: p.params, availability, weightKg: p.weightKg, price,
      purchasePrice: p.costEUR, seoTitle, metaDescription,
    });
    out.write(shopitem + '\n');
    stats.written++;
  });

  out.write('</SHOP>\n');
  out.end();
  await new Promise((resolve) => out.on('finish', resolve));

  console.log('Done.');
  console.log(JSON.stringify(stats, null, 2));
  console.log('Output written to', OUT_PATH);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

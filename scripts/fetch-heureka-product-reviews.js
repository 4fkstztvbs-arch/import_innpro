// Downloads Heureka's product-review export (export-product-review.php) and groups the reviews
// by our own products (matched via EAN against output/*.xml, same join key/approach as
// compare-heureka-prices.js - Heureka's own product/order IDs aren't portable across our store).
//
// This is a DATA step only: it produces data/heureka-reviews.json for later use (e.g. review
// snippets, a report, or eventually pushing into Shoptet via its REST API) - it does not write
// anything into the e-shop itself.
//
// Heureka export docs: https://sluzby.heureka.sk/napoveda/data-zo-sluzby/
//   https://www.heureka.sk/direct/dotaznik/export-product-review.php?key=<32-char key>
//   -> last ~6 months of product reviews, refreshed every 6h.
//
// Required env var: HEUREKA_PRODUCT_REVIEW_KEY (the export key, from Heureka support/admin -
// not the same as any price-report CSV export, which has no key at all).
// Optional env vars: HEUREKA_DOMAIN (default heureka.sk), HEUREKA_REVIEWS_OUT (default
// data/heureka-reviews.json), HEUREKA_REVIEWS_XML (default output/ - dir of our product XMLs).
//
// Usage: node fetch-heureka-product-reviews.js

const fs = require('fs');
const path = require('path');
const { XMLParser } = require('fast-xml-parser');

const API_KEY = process.env.HEUREKA_PRODUCT_REVIEW_KEY;
const DOMAIN = process.env.HEUREKA_DOMAIN || 'heureka.sk';
const OUT_PATH = process.env.HEUREKA_REVIEWS_OUT || path.join(__dirname, '..', 'data', 'heureka-reviews.json');
const XML_DIR = process.env.HEUREKA_REVIEWS_XML || path.join(__dirname, '..', 'output');

function loadOurProductsByEan(xmlDir) {
  const byEan = new Map();
  const xmlPaths = fs.readdirSync(xmlDir).filter((f) => f.endsWith('.xml')).map((f) => path.join(xmlDir, f));
  for (const xmlPath of xmlPaths) {
    const data = fs.readFileSync(xmlPath, 'utf-8');
    const items = data.split('<SHOPITEM>').slice(1);
    for (const raw of items) {
      const it = raw.split('</SHOPITEM>')[0];
      const ean = (it.match(/<EAN>(.*?)<\/EAN>/) || [])[1];
      if (!ean) continue;
      const name = (((it.match(/<NAME><!\[CDATA\[([\s\S]*?)\]\]><\/NAME>/) || [])[1] || '').trim());
      const code = (it.match(/<CODE>(.*?)<\/CODE>/) || [])[1] || '';
      if (!byEan.has(ean)) byEan.set(ean, { ean, name, code, source: path.basename(xmlPath) });
    }
  }
  return byEan;
}

function asArray(v) {
  if (v === undefined || v === null) return [];
  return Array.isArray(v) ? v : [v];
}

function text(v) {
  if (v === undefined || v === null) return '';
  if (typeof v === 'object') return String(v['#text'] ?? '').trim();
  return String(v).trim();
}

async function main() {
  if (!API_KEY) {
    console.error('Missing env var HEUREKA_PRODUCT_REVIEW_KEY (Heureka product-review export key).');
    process.exit(1);
  }

  const url = `https://www.${DOMAIN}/direct/dotaznik/export-product-review.php?key=${encodeURIComponent(API_KEY)}`;
  console.log(`Fetching: ${url.replace(API_KEY, '***')}`);
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Heureka export request failed: HTTP ${res.status} ${res.statusText}`);
    process.exit(1);
  }
  const xml = await res.text();

  const parser = new XMLParser({ ignoreAttributes: true, textNodeName: '#text' });
  const parsed = parser.parse(xml);
  const root = parsed.SHOP || parsed.shop || parsed.PRODUCTS || parsed.products || parsed;
  const productsRaw = asArray(root.PRODUCT || root.product);
  console.log(`  -> ${productsRaw.length} products in Heureka export`);

  console.log(`Loading our products (by EAN) from: ${XML_DIR}`);
  const ourByEan = loadOurProductsByEan(XML_DIR);
  console.log(`  -> ${ourByEan.size} of our products have an EAN`);

  const products = [];
  let matched = 0;
  let noEan = 0;
  let noMatch = 0;

  for (const p of productsRaw) {
    const ean = text(p.EAN || p.ean);
    const reviewsRaw = asArray((p.REVIEWS || p.reviews || {}).REVIEW || (p.REVIEWS || p.reviews || {}).review);
    const reviews = reviewsRaw.map((r) => ({
      ratingId: text(r.RATING_ID || r.rating_id),
      orderId: text(r.ORDER_ID || r.order_id),
      author: text(r.NAME || r.name),
      rating: parseFloat(text(r.RATING || r.rating)) || null,
      pros: text(r.PROS || r.pros),
      cons: text(r.CONS || r.cons),
      summary: text(r.SUMMARY || r.summary),
      reaction: text(r.REACTION || r.reaction),
      unixTimestamp: parseInt(text(r.UNIX_TIMESTAMP || r.unix_timestamp), 10) || null,
    }));

    const ratings = reviews.map((r) => r.rating).filter((v) => v !== null);
    const avgRating = ratings.length ? +(ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2) : null;

    let ours = null;
    if (!ean) noEan++;
    else {
      ours = ourByEan.get(ean);
      if (ours) matched++; else noMatch++;
    }

    products.push({
      ean: ean || null,
      heurekaProductName: text(p.PRODUCT_NAME || p.product_name || p.NAME || p.name),
      heurekaUrl: text(p.URL || p.url),
      ourName: ours ? ours.name : null,
      ourCode: ours ? ours.code : null,
      ourSource: ours ? ours.source : null,
      reviewCount: reviews.length,
      avgRating,
      reviews,
    });
  }

  products.sort((a, b) => b.reviewCount - a.reviewCount);

  const out = {
    fetchedAt: new Date().toISOString(),
    domain: DOMAIN,
    productCount: products.length,
    matchedProductCount: matched,
    unmatchedEanCount: noMatch,
    noEanCount: noEan,
    products,
  };

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(out, null, 2) + '\n', 'utf-8');

  console.log('\n=== Súhrn ===');
  console.log(`Produktov v exporte: ${products.length}`);
  console.log(`Spárovaných s našimi produktmi (cez EAN): ${matched}`);
  console.log(`Bez EAN v exporte: ${noEan}`);
  console.log(`S EAN, ale bez zhody v našich produktoch: ${noMatch}`);
  console.log(`Recenzií spolu: ${products.reduce((sum, p) => sum + p.reviewCount, 0)}`);
  console.log(`\nUložené do: ${OUT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

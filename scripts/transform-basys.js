// Automated import for BASYS (basys.sk) — the FULL BASYS product feed (all manufacturers:
// Bose, Bose Pro, Behringer, Pioneer, Energy Sistem, Beyerdynamic, TC Electronic, Meze, Klark
// Teknik, Lab Gruppen, Tannoy, SPL, TC Helicon, Midas, Aston Microphones — ~1376 products).
//
// Pricing has two tiers, per product (matched by objKod/ITEM_ID):
//   1. Official price list (data/basys-bose-pricelist.json, extracted from the "BOSE VOC FY27_ALL"
//      sheet of a manually-supplied xlsx — see reports/prehlad-importov.md) — real EAN and both
//      prices (MOC = official retail incl. VAT, VOC bez DPH = real purchase price excl. VAT) for
//      76 curated Bose/Bose Pro SKUs. Always wins when a feed item matches one of these.
//   2. Everything else (the remaining ~1300 products, including non-price-listed Bose/Bose Pro
//      accessories) — no EAN and no purchase-price field exists anywhere in the BASYS feed, so
//      the purchase price is ESTIMATED: we take the feed's own PRICE_VAT as our sell price, and
//      back out an assumed cost at ~15% markup (purchaseExclVat = priceExclVat / 1.15) — the same
//      estimation basis used for the original pre-official-pricelist Bose attempt. This is a
//      rough placeholder for margin-floor/profitability purposes until real supplier price lists
//      are obtained (requested from BASYS for the other brands too — see reports/prehlad-importov.md).
//
// Images/description come from two enrichment sources, in priority order:
//   1. data/basys-bose-cloud-images.json — a curated match against BASYS's own official product
//      photo library (two Nextcloud shares BASYS sent directly, ~8700 files total) built by
//      scripts/match-basys-cloud-images.js. Token-overlap matching weighted by word rarity, with
//      an explicit reject when a rare/distinctive word in the product name (e.g. "omnijewell")
//      doesn't appear in any folder at all — safer to show no image than the wrong product/colour.
//      Covers 49/76 products; also picks the colour-correct photos within a folder when the
//      product is plain black/white (see the BLACK_HINTS/WHITE_HINTS sort in that script).
//   2. The BASYS Heureka feed (data/basys-heureka-feed-sample.xml, or BASYS_LOCAL_FILE/BASYS_URL)
//      — the original per-product IMGURL/IMGURL_ALTERNATIVE + DESCRIPTION, matched by order code
//      (obj.kod == ITEM_ID, normalized). Used for products the cloud match didn't cover, and
//      always used for description text (the cloud library is photos only, no copy).
// A product with no match in either source still gets imported, just without images/description.
//
// BASYS also sends periodic promo price lists (a few times a year) — each one extracted into its
// own data/basys-bose-promo-*.json (validFrom/validUntil/items, see
// scripts/extract-basys-promo-example in commit history for the extraction shape). Every such
// file present is loaded automatically; a product's promo price applies only while today falls
// inside that file's [validFrom, validUntil] window, so an expired promo silently stops applying
// on its own without needing anyone to remember to revert it — just leave the JSON file in place.
// When a promo is active: PRICE_VAT stays the real regular price (MOC), ACTION_PRICE carries the
// promo price (Shoptet shows this instead of PRICE_VAT while it's present), and FLAGS>ACTION is
// set so it's also marked as an "akcia".
//
// Usage: node transform-basys.js
// Optional: BASYS_URL (feed URL) or BASYS_LOCAL_FILE (local path) for the enrichment source;
//           falls back to data/basys-heureka-feed-sample.xml if neither is set.
//           BASYS_PRICELIST (path to the extracted JSON), BASYS_VAT (23), BASYS_OUT

const fs = require('fs');
const path = require('path');
const { roundPrice, roundPriceDown } = require('./round-price');
const { heurekaCategoryIdFor, isHeurekaHidden } = require('./heureka-category');
const { streamRecords } = require('./stream-records');
const { applyHeurekaPriceTarget, cannotCompeteOnPrice } = require('./heureka-price-targets');
const { isCpcNonConverter } = require('./heureka-cpc-exclusions');

const PRICELIST_PATH = process.env.BASYS_PRICELIST || path.join(__dirname, '..', 'data', 'basys-bose-pricelist.json');
const CLOUD_IMAGES_PATH = process.env.BASYS_CLOUD_IMAGES || path.join(__dirname, '..', 'data', 'basys-bose-cloud-images.json');
const DATA_DIR = path.join(__dirname, '..', 'data');
const URL = process.env.BASYS_URL;
const LOCAL_FILE = process.env.BASYS_LOCAL_FILE || path.join(__dirname, '..', 'data', 'basys-heureka-feed-sample.xml');
const VAT = process.env.BASYS_VAT || '23';
// Safety floor for promo prices BASYS sends us: their promo pricelist is set independently of
// our cost, and has been seen to dip below our purchase price (e.g. Ultra Open Earbuds at
// 280€ promo vs 229.80€ ex-VAT cost — a straight loss). Never publish a promo price that
// doesn't clear this minimum margin; fall back to the regular MOC price instead.
const MIN_PROMO_MARGIN_PCT = parseFloat(process.env.BASYS_MIN_PROMO_MARGIN || '10');
const OUT_PATH = process.env.BASYS_OUT || path.join(__dirname, '..', 'output', 'basys.xml');
const STORE_NAME = process.env.BASYS_STORE_NAME || 'premiumstore.sk';
const EXCLUDE_UNAVAILABLE = process.env.BASYS_EXCLUDE_UNAVAILABLE === '1';

const mapping = JSON.parse(fs.readFileSync(path.join(__dirname, 'basys-mapping.json'), 'utf-8'));
const PRICE_LIST_CATEGORY_MAP = mapping.priceListCategoryMap || {};
const CATEGORY_MAP = mapping.categoryMap || {};
const FALLBACK_BY_MANUFACTURER = mapping.fallbackByManufacturer || {};
const MANUAL_PRICE_OVERRIDES = mapping.manualPriceOverridesByCode || {};
// Assumed markup used to back out an estimated purchase price from the feed's own PRICE_VAT for
// every product that has no entry in the official price list (see file header, tier 2). Same
// basis as the original pre-official-pricelist Bose estimate.
const ESTIMATED_MARKUP_MULTIPLIER = 1.15;

function xmlEscape(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function xmlAttr(s) { return xmlEscape(s).replace(/"/g, '&quot;'); }
function imageAltFor(name, index, total) {
  return total > 1 ? `${name} - obrázok ${index + 1}` : name;
}
function xmlCdata(s) { return '<![CDATA[' + String(s == null ? '' : s).replace(/]]>/g, ']]&gt;') + ']]>'; }
function xmlNum(n) { return (Math.round(n * 100) / 100).toFixed(2); }
function stripTags(html) { return String(html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim(); }
function truncateAtWord(s, maxLen) {
  if (!s || s.length <= maxLen) return s || '';
  const cut = s.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + '…';
}
function norm(s) { return String(s || '').replace(/\s+/g, ' ').trim().toUpperCase(); }

// Loads every data/basys-bose-promo-*.json present and returns objKod -> promoMocInclVat for
// only those whose [validFrom, validUntil] window includes today. A promo file left in place
// after its own end date simply stops contributing anything — no manual revert needed.
function loadActivePromos() {
  const today = new Date().toISOString().slice(0, 10);
  const map = new Map();
  const files = fs.readdirSync(DATA_DIR).filter((f) => /^basys-bose-promo.*\.json$/.test(f));
  for (const file of files) {
    const promo = JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), 'utf-8'));
    const active = today >= promo.validFrom && today <= promo.validUntil;
    console.log(`  promo ${file}: ${promo.validFrom} – ${promo.validUntil} (${active ? 'AKTÍVNA' : 'neaktívna'}), ${promo.items.length} produktov`);
    if (!active) continue;
    for (const item of promo.items) {
      map.set(norm(item.objKod), { promoMocInclVat: item.promoMocInclVat, supportExclVat: item.supportExclVat || 0 });
    }
  }
  return map;
}

// Parses one <SHOPITEM> block from the BASYS Heureka feed into a full record and stores it in
// map, keyed by normalized ITEM_ID. Shared by both the live-URL and local-file code paths. Used
// both as enrichment (images/description/stock) for official-price-list products, and as the
// full source (name/manufacturer/category/price) for every product NOT in the price list.
function addFeedRecord(map, block) {
  const idM = block.match(/<ITEM_ID>([\s\S]*?)<\/ITEM_ID>/);
  if (!idM) return;
  const he = require('he');
  const nameM = block.match(/<PRODUCTNAME>([\s\S]*?)<\/PRODUCTNAME>/);
  const manufacturerM = block.match(/<MANUFACTURER>([\s\S]*?)<\/MANUFACTURER>/);
  const categoryM = block.match(/<CATEGORYTEXT>([\s\S]*?)<\/CATEGORYTEXT>/);
  const priceM = block.match(/<PRICE_VAT>([\s\S]*?)<\/PRICE_VAT>/);
  const imgM = block.match(/<IMGURL>([\s\S]*?)<\/IMGURL>/);
  const imgAltM = block.match(/<IMGURL_ALTERNATIVE>([\s\S]*?)<\/IMGURL_ALTERNATIVE>/);
  const descM = block.match(/<DESCRIPTION>([\s\S]*?)<\/DESCRIPTION>/);
  const deliveryM = block.match(/<DELIVERY_DATE>([\s\S]*?)<\/DELIVERY_DATE>/);
  const images = [imgM && imgM[1].trim(), imgAltM && imgAltM[1].trim()].filter(Boolean);
  const productName = nameM ? he.decode(nameM[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim()) : '';
  const manufacturer = manufacturerM ? manufacturerM[1].trim() : '';
  const categoryText = categoryM ? he.decode(categoryM[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim()) : '';
  const priceVat = priceM ? parseFloat(priceM[1]) : NaN;
  const description = descM ? he.decode(he.decode(descM[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim())) : '';
  // BASYS's own DELIVERY_DATE: "0" = ships immediately (in stock), any other number = days
  // until it can ship (on order from their supplier) — the only stock signal this feed has.
  const deliveryDate = deliveryM ? deliveryM[1].trim() : null;
  map.set(norm(idM[1]), { itemId: idM[1].trim(), productName, manufacturer, categoryText, priceVat, images, description, deliveryDate });
}

// Builds ITEM_ID -> full feed record from the BASYS Heureka feed. Prefers a live BASYS_URL fetch
// (the production path); falls back to a local file (BASYS_LOCAL_FILE, or the checked-in sample)
// when no URL is configured.
async function loadFeed() {
  const map = new Map();
  if (URL) {
    await streamRecords(URL, 'SHOPITEM', (block) => addFeedRecord(map, block));
    return map;
  }
  if (LOCAL_FILE && fs.existsSync(LOCAL_FILE)) {
    const xml = fs.readFileSync(LOCAL_FILE, 'utf-8');
    const blocks = xml.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g) || [];
    for (const block of blocks) addFeedRecord(map, block);
    return map;
  }
  console.warn(`No BASYS feed found at ${LOCAL_FILE} and no BASYS_URL set — proceeding without image/description enrichment, and without any products beyond the official price list.`);
  return map;
}

function buildShopitemXml(p) {
  const parts = ['<SHOPITEM>'];
  parts.push(`<NAME>${xmlCdata(p.name)}</NAME>`);
  if (p.shortDescription) parts.push(`<SHORT_DESCRIPTION>${xmlCdata(p.shortDescription)}</SHORT_DESCRIPTION>`);
  parts.push(`<DESCRIPTION>${xmlCdata(p.description)}</DESCRIPTION>`);
  parts.push(`<MANUFACTURER>${xmlCdata(p.manufacturer)}</MANUFACTURER>`);
  parts.push('<ITEM_TYPE>product</ITEM_TYPE>');
  parts.push('<UNIT>ks</UNIT>');
  parts.push(`<CODE>${xmlEscape(p.code)}</CODE>`);
  if (p.ean) parts.push(`<EAN>${xmlEscape(p.ean)}</EAN>`);

  parts.push(`<CATEGORIES><CATEGORY>${xmlCdata(p.defaultCategory)}</CATEGORY></CATEGORIES>`);
  const heurekaCategoryId = heurekaCategoryIdFor(p.defaultCategory);
  if (heurekaCategoryId) parts.push(`<HEUREKA_CATEGORY_ID>${heurekaCategoryId}</HEUREKA_CATEGORY_ID>`);
  if (isHeurekaHidden(p.defaultCategory, p.price) || cannotCompeteOnPrice(p.ean) || isCpcNonConverter(p.ean)) parts.push('<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN>');
  if (p.images.length) {
    parts.push('<IMAGES>');
    p.images.forEach((img, i) => parts.push(`  <IMAGE description="${xmlAttr(imageAltFor(p.name, i, p.images.length))}">${xmlEscape(img)}</IMAGE>`));
    parts.push('</IMAGES>');
  }
  if (p.onPromo) parts.push('<FLAGS><ACTION>1</ACTION><NEW>0</NEW><TIP>0</TIP></FLAGS>');
  parts.push(`<AVAILABILITY>${xmlCdata(p.availability)}</AVAILABILITY>`);
  parts.push('<VISIBLE>1</VISIBLE>');
  parts.push('<VISIBILITY>visible</VISIBILITY>');
  parts.push('<CURRENCY>EUR</CURRENCY>');
  parts.push(`<PRICE_VAT>${xmlNum(p.price)}</PRICE_VAT>`);
  // ACTION_PRICE — shown instead of PRICE_VAT while present. Only emitted while our own promo
  // JSON's [validFrom, validUntil] window is active (see loadActivePromos()) — PRICE_VAT itself
  // always stays the real regular price, never swapped, so nothing needs to be "reverted" once
  // the promo ends: the element just stops being written.
  if (p.onPromo) parts.push(`<ACTION_PRICE>${xmlNum(p.actionPrice)}</ACTION_PRICE>`);
  parts.push(`<PURCHASE_PRICE>${xmlNum(p.purchasePrice)}</PURCHASE_PRICE>`);
  parts.push(`<PURCHASE_VAT>${VAT}</PURCHASE_VAT>`);
  parts.push('<PURCHASE_PRICE_INCL_VAT>0</PURCHASE_PRICE_INCL_VAT>');
  if (p.seoTitle) parts.push(`<SEO_TITLE>${xmlCdata(p.seoTitle)}</SEO_TITLE>`);
  if (p.metaDescription) parts.push(`<META_DESCRIPTION>${xmlCdata(p.metaDescription)}</META_DESCRIPTION>`);
  parts.push('</SHOPITEM>');
  return parts.join('\n');
}

async function main() {
  if (!fs.existsSync(PRICELIST_PATH)) {
    console.error(`Missing price list: ${PRICELIST_PATH}`);
    process.exit(1);
  }
  const priceList = JSON.parse(fs.readFileSync(PRICELIST_PATH, 'utf-8'));
  console.log(`Loaded ${priceList.length} products from official BASYS/Bose price list.`);

  const feedMap = await loadFeed();
  console.log(`Loaded ${feedMap.size} products from the BASYS feed.`);

  const cloudImages = fs.existsSync(CLOUD_IMAGES_PATH)
    ? JSON.parse(fs.readFileSync(CLOUD_IMAGES_PATH, 'utf-8'))
    : {};
  console.log(`Loaded curated cloud-library images for ${Object.keys(cloudImages).length} products.`);

  console.log('Checking for active promo price lists...');
  const activePromos = loadActivePromos();
  console.log(`  -> ${activePromos.size} produktov má dnes aktívnu akciovú cenu.`);

  // Build one unified list of products to import: every price-list product first (its official
  // price/EAN always wins), then every remaining feed product not covered by the price list, with
  // an estimated purchase price (see file header, tier 2). Both flow through the same pricing/
  // promo/category logic below so nothing diverges between the two tiers except how mocInclVat/
  // purchasePriceExclVat/ean/category were derived.
  const pricelistCodes = new Set(priceList.map((item) => norm(item.objKod)));
  const resolvedItems = [];
  for (const item of priceList) {
    const mappedCategory = PRICE_LIST_CATEGORY_MAP[item.category];
    resolvedItems.push({
      objKod: item.objKod, ean: item.ean, isFromPriceList: true,
      name: [item.name, item.color].filter(Boolean).join(' - ').replace(/\s+/g, ' ').trim(),
      manufacturer: 'Bose',
      defaultCategory: mappedCategory || FALLBACK_BY_MANUFACTURER.Bose || 'TV, audio a video > Audio technika',
      categoryWasMapped: !!mappedCategory,
      mocInclVat: item.mocInclVat, purchasePriceExclVat: item.purchasePriceExclVat,
    });
  }
  let skippedNoPrice = 0;
  for (const [key, f] of feedMap) {
    if (pricelistCodes.has(key)) continue;
    if (!Number.isFinite(f.priceVat) || f.priceVat <= 0) { skippedNoPrice++; continue; }
    const priceExclVat = f.priceVat / (1 + parseFloat(VAT) / 100);
    const mappedCategory = CATEGORY_MAP[f.categoryText];
    resolvedItems.push({
      objKod: f.itemId, ean: '', isFromPriceList: false,
      name: f.productName,
      manufacturer: f.manufacturer,
      defaultCategory: mappedCategory || FALLBACK_BY_MANUFACTURER[f.manufacturer] || 'TV, audio a video > Audio technika > Doplnky',
      categoryWasMapped: !!mappedCategory,
      mocInclVat: f.priceVat, purchasePriceExclVat: priceExclVat / ESTIMATED_MARKUP_MULTIPLIER,
    });
  }
  console.log(`Skipped ${skippedNoPrice} feed products with no usable price.`);
  console.log(`Total products to import: ${resolvedItems.length} (${priceList.length} z oficiálneho cenníka, ${resolvedItems.length - priceList.length} s odhadovanou nákupnou cenou z feedu).`);

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  const out = fs.createWriteStream(OUT_PATH, { encoding: 'utf-8' });
  out.write('<?xml version="1.0" encoding="utf-8"?>\n<SHOP>\n');

  const stats = {
    total: resolvedItems.length, fromPriceList: priceList.length, estimated: resolvedItems.length - priceList.length,
    written: 0, enriched: 0, noEnrichment: 0, onPromo: 0, cloudImages: 0, feedImages: 0, noImages: 0,
    categoryMapped: 0, categoryFallback: 0,
  };

  for (const item of resolvedItems) {
    const enrich = feedMap.get(norm(item.objKod));
    const hasEnrichment = !!enrich;
    if (hasEnrichment) stats.enriched++; else stats.noEnrichment++;

    const name = item.name;
    const description = hasEnrichment && enrich.description
      ? enrich.description
      : `<p>${xmlEscape(name)}</p>`;
    const cloudImgs = cloudImages[item.objKod];
    const images = (cloudImgs && cloudImgs.length) ? cloudImgs : (hasEnrichment ? enrich.images : []);
    if (cloudImgs && cloudImgs.length) stats.cloudImages++;
    else if (images.length) stats.feedImages++;
    else stats.noImages++;
    // "0" = BASYS ships it immediately (in stock); any other number of days, or no match at all
    // in the feed, falls back to "Na objednávku" — the only honest default when we have no real
    // stock signal for a product.
    const availability = hasEnrichment && enrich.deliveryDate === '0' ? 'Skladom' : 'Na objednávku';
    if (availability === 'Skladom') stats.inStock = (stats.inStock || 0) + 1;
    if (EXCLUDE_UNAVAILABLE && availability !== 'Skladom') { stats.skippedUnavailable = (stats.skippedUnavailable || 0) + 1; continue; }

    const defaultCategory = item.defaultCategory;
    if (item.categoryWasMapped) stats.categoryMapped++; else stats.categoryFallback++;

    const purchasePrice = item.purchasePriceExclVat;
    // Official MOC is the starting point, but a live Heureka price-target (from the last
    // processed sortiment report) can nudge it up (if we're the cheapest, toward the 2nd-cheapest
    // competitor) or down (if we're not, toward undercutting the cheapest) — same mechanism as
    // ATOS/InnPro/K-B/Solight, gated by HEUREKA_PRICE_OVERRIDE and always bounded by the margin
    // floor derived from purchasePriceExclVat (the real cost from the official price list, never
    // estimated). Note this can in principle push the price above Bose's own MOC if we're
    // currently the cheapest seller by a wide margin.
    const price = applyHeurekaPriceTarget(item.ean, roundPrice(item.mocInclVat), purchasePrice, parseFloat(VAT));
    const promoEntry = activePromos.get(norm(item.objKod));
    const supportExclVat = promoEntry ? promoEntry.supportExclVat : 0;
    // BASYS pays back "Podpora bez DPH/ks" (a per-unit subsidy) for every unit sold during the
    // promo window, on top of what the customer pays — so the real margin during a promo isn't
    // just (promo price - cost), it's (promo price + subsidy - cost). Missing this the first time
    // made a genuinely fine promo (Ultra Open Earbuds: 280€ + 48€ subsidy = 16.6% margin) look
    // like a straight loss.
    function marginPctWithSupport(grossPriceInclVat) {
      const exVat = grossPriceInclVat / (1 + parseFloat(VAT) / 100);
      const effectiveRevenue = exVat + supportExclVat;
      return (effectiveRevenue - purchasePrice) / effectiveRevenue * 100;
    }
    let onPromo = false;
    let actionPrice = null;
    if (promoEntry !== undefined) {
      const promoMarginPct = marginPctWithSupport(promoEntry.promoMocInclVat);
      if (promoEntry.promoMocInclVat >= price) {
        // A regular-price cut since the promo list was built can leave the old promo price at or
        // above the new MOC — e.g. QuietComfort headphones: MOC dropped 299→239€ but the promo
        // file still says 250€, which would show as a "discount" that's actually more expensive.
        stats.promoAboveRegular = (stats.promoAboveRegular || 0) + 1;
        console.log(`  Preskakujem promo cenu pre ${item.objKod} (${item.name}): ${promoEntry.promoMocInclVat}€ nie je lacnejšia než aktuálna regulárna cena ${price}€ (MOC medzičasom klesla).`);
      } else if (promoMarginPct >= MIN_PROMO_MARGIN_PCT) {
        onPromo = true;
        actionPrice = roundPrice(promoEntry.promoMocInclVat);
      } else {
        stats.promoBelowFloor = (stats.promoBelowFloor || 0) + 1;
        console.log(`  Preskakujem promo cenu pre ${item.objKod} (${item.name}): ${promoEntry.promoMocInclVat}€ (+ ${supportExclVat}€ podpora) by dalo len ${promoMarginPct.toFixed(1)}% marže (min ${MIN_PROMO_MARGIN_PCT}%). Ostáva regulárna cena ${price}€.`);
      }
    }
    // Manual overrides are a deliberate, already-reviewed decision (e.g. matching a specific
    // Heureka competitor) — only block an outright loss, not the same 10% floor as an unreviewed
    // BASYS promo price. Still counts any active per-unit subsidy for the same SKU.
    const manualOverride = MANUAL_PRICE_OVERRIDES[item.objKod];
    if (manualOverride !== undefined) {
      const overrideMarginPct = marginPctWithSupport(manualOverride);
      if (manualOverride >= price) {
        stats.manualOverrideAboveRegular = (stats.manualOverrideAboveRegular || 0) + 1;
        console.log(`  Preskakujem manuálnu cenu pre ${item.objKod} (${item.name}): ${manualOverride}€ nie je lacnejšia než aktuálna regulárna cena ${price}€.`);
      } else if (overrideMarginPct >= 0) {
        onPromo = true;
        // roundPriceDown, not roundPrice: this is meant to undercut a specific competitor price
        // (e.g. "258.99 to beat their 259.00") — rounding to nearest could snap back up to a tie.
        actionPrice = roundPriceDown(manualOverride);
      } else {
        stats.manualOverrideBelowFloor = (stats.manualOverrideBelowFloor || 0) + 1;
        console.log(`  Preskakujem manuálnu cenu pre ${item.objKod} (${item.name}): ${manualOverride}€ (+ ${supportExclVat}€ podpora) by bolo pod nákladovou cenou (${overrideMarginPct.toFixed(1)}% marža).`);
      }
    }
    if (onPromo) stats.onPromo++;

    const shortDescription = truncateAtWord(stripTags(description), 200);
    const seoTitle = truncateAtWord(`${name} | ${STORE_NAME}`, 70);
    const metaDescription = truncateAtWord(`${name} – ${availability.toLowerCase()}. Kúpte na ${STORE_NAME}.`, 155);

    const shopitem = buildShopitemXml({
      code: 'BASYS-' + item.objKod, ean: item.ean, name, manufacturer: item.manufacturer, description, shortDescription, availability,
      defaultCategory, images, price, actionPrice, onPromo, purchasePrice, seoTitle, metaDescription,
    });
    out.write(shopitem + '\n');
    stats.written++;
  }

  out.write('</SHOP>\n');
  out.end();

  console.log('Done.');
  console.log(JSON.stringify(stats, null, 2));
  console.log('Output written to', OUT_PATH);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

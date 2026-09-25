// Automated equivalent of the "InnPro" tab in the browser tool. Fetches full.xml (product
// data) and light.xml (real discounted price + stock), merges them, applies the agreed
// category mapping, and writes a Shoptet-native XML ready for Automatické importy.
//
// Usage: node transform-innpro.js
// Required env vars: INNPRO_FULL_URL, INNPRO_LIGHT_URL
// Optional env vars: INNPRO_MARKUP (default 15), INNPRO_MIN_COST (default 0),
//                     INNPRO_MAX_IMAGES (default 5), INNPRO_OUT (default ./output/innpro.xml),
//                     INNPRO_EXCLUDE_UNAVAILABLE (default off) — set to '1' to skip every product
//                     that isn't actually in stock ('Skladom') instead of importing it as
//                     "Na objednávku" / "Dostupné od ..."

const fs = require('fs');
const { createAs2NameOverride } = require('./innpro-as2-name');
const { createNameOverride } = require('./innpro-name-overrides');
const path = require('path');
const { streamProducts } = require('./stream-products');
const { parseProduct } = require('./parse-product');
const { roundPrice } = require('./round-price');
const { heurekaCategoryIdFor, isHeurekaHidden } = require('./heureka-category');
const { applyHeurekaPriceTarget } = require('./heureka-price-targets');
const { loadPreviousPrices, checkPriceSanity, buildCategoryPriceStats, buildOwnPreviousCategoryStats, buildFeedCategoryStats, mergeCategoryStats, checkCategoryOutlier, writeAnomalyReport } = require('./price-sanity');
const { isPilotUnhidden } = require('./heureka-pilot-unhidden');
const { isCpcNonConverter } = require('./heureka-cpc-exclusions');
const { vytvorZaradovac } = require('./zarad-kategoriu');
const { createCrossSupplierFilter } = require('./lib/cross-supplier-dedupe');
const { validateState } = require('./lib/vypredaj-core');

// Značky, ktoré berieme od iného dodávateľa, sa tu preskočia – viď scripts/cross-supplier-preferences.json.
const crossSupplier = createCrossSupplierFilter('innpro');
const zaradovac = vytvorZaradovac('innpro');

const FULL_URL = process.env.INNPRO_FULL_URL;
const LIGHT_URL = process.env.INNPRO_LIGHT_URL;
const MARKUP_PCT = parseFloat(process.env.INNPRO_MARKUP || '15');
const MIN_COST = parseFloat(process.env.INNPRO_MIN_COST || '0');
const MAX_IMAGES = parseInt(process.env.INNPRO_MAX_IMAGES || '5', 10);
const OUT_PATH = process.env.INNPRO_OUT || path.join(__dirname, '..', 'output', 'innpro.xml');
const STORE_NAME = process.env.INNPRO_STORE_NAME || 'premiumstore.sk';
const OUT_OF_STOCK_TEXT = process.env.INNPRO_OUT_OF_STOCK_TEXT || 'Na objednávku';
// When set, only products that are actually in stock right now (availability === 'Skladom')
// are exported — "Na objednávku" and "Dostupné od ..." products are skipped entirely, not just
// hidden/greyed out. Same convention as KB_EXCLUDE_UNAVAILABLE in transform-kb.js.
const EXCLUDE_UNAVAILABLE = process.env.INNPRO_EXCLUDE_UNAVAILABLE === '1';
const SALE_STATE_PATH = path.join(__dirname, '..', 'data', 'vypredaj.json');
const saleState = fs.existsSync(SALE_STATE_PATH)
  ? validateState(JSON.parse(fs.readFileSync(SALE_STATE_PATH, 'utf8')))
  : { items: {} };

const MAPPING_PATH = path.join(__dirname, 'innpro-mapping.json');
const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, 'utf-8'));
const EXCLUSIONS = new Set(mapping.categoryExclusionsByPath || []);
const CATEGORY_OVERRIDES_BY_CODE = mapping.categoryOverridesByCode || {};

function pathToExtraCategories(category) {
  const segs = category.split(' > ');
  const extraCategories = [];
  for (let i = 1; i < segs.length; i++) extraCategories.push(segs.slice(0, i).join(' > '));
  return extraCategories;
}


// InnPro posiela celú meraciu techniku (~253 produktov) v jedinej surovej kategórii, takže na
// úrovni kategórií sa rozdeliť nedá – jediná spoľahlivá informácia je názov produktu. Pravidlá
// sú dátami v mapping súbore (categorySubRulesByName), poradie je významné (vyhráva prvé
// pravidlo, ktoré sa zhoduje). Produkt, na ktorý nesadne žiadne, zostáva v nadradenej kategórii.
const SUB_RULES = Object.entries(mapping.categorySubRulesByName || {}).map(([parent, rules]) => ({
  parent,
  rules: rules.map((r) => ({ category: r.category, re: new RegExp(r.pattern, 'i') })),
}));

function applySubRules(category, productLabel) {
  if (!productLabel) return category;
  for (const { parent, rules } of SUB_RULES) {
    if (category !== parent) continue;
    for (const { category: target, re } of rules) {
      if (re.test(productLabel)) return `${parent} > ${target}`;
    }
    break;
  }
  return category;
}

// Identical logic to the browser tool's innDisplayPath()/extraCategories: build the cumulative
// "/"-split path, walk from the leaf back toward the root, and stop at the first override.
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

  // Zaradenie rieši jediná tabuľka data/kategorie/innpro.json — najdlhší prefix vyhráva a jeho
  // cieľ nahrádza celú cestu. Podrobnosti v scripts/zarad-kategoriu.js.
  const zdroj = keys[keys.length - 1].key;
  const { kategoria } = zaradovac.zarad(zdroj, { produkt: productLabel });
  // Chýbajúce pravidlo NIE JE dôvod produkt zahodiť: ostane bez kategórie, hide-uncategorised ho
  // skryje a reports/chybajuce-pravidla-innpro.md povie, aké pravidlo doplniť.
  if (!kategoria) return { category: '', extraCategories: [], excluded: false };
  // Podpravidlá podľa názvu produktu bežia AŽ za zaradením: tá istá kategória dodávateľa sa podľa
  // názvu rozpadá na konkrétnejšie uzly (meracia technika -> osciloskopy / termokamery / ...), čo
  // tabuľka cesta->uzol vyjadriť nevie, lebo nezávisí od cesty.
  const finalna = applySubRules(kategoria, productLabel);
  return { category: finalna, extraCategories: zaradovac.predkovia(finalna), excluded: false };
}

function xmlEscape(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function xmlAttr(s) { return xmlEscape(s).replace(/"/g, '&quot;'); }
// Without a description attribute, Shoptet derives alt text from the image filename instead of
// the product name — hurts accessibility and image-search SEO.
function imageAltFor(name, index, total) {
  return total > 1 ? `${name} - obrázok ${index + 1}` : name;
}
function xmlCdata(s) {
  return '<![CDATA[' + String(s == null ? '' : s).replace(/]]>/g, ']]&gt;') + ']]>';
}
function xmlNum(n) { return (Math.round(n * 100) / 100).toFixed(2); }
function stripTags(html) {
  return String(html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}
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

async function loadLightData(url) {
  const map = new Map();
  await streamProducts(url, (rawXml) => {
    // light.xml products are much simpler — reuse parseProduct's price/stock extraction by
    // wrapping the same fast-xml-parser call inline (avoids requiring description/category).
    const { XMLParser } = require('fast-xml-parser');
    const p = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_', isArray: (n) => ['stock'].includes(n) }).parse(rawXml).product;
    if (!p) return;
    const id = p['@_id'];
    const priceNet = p.price ? parseFloat(String(p.price['@_net'] || '0').replace(',', '.')) : 0;
    let stock = 0;
    let infinite = false;
    const stockList = [];
    (function collectStocks(node) {
      if (!node || typeof node !== 'object') return;
      for (const [k, v] of Object.entries(node)) {
        if (k === 'stock') {
          for (const s of (Array.isArray(v) ? v : [v])) {
            const q = s['@_quantity'];
            if (q === '-1') infinite = true; else stock += parseFloat(q || '0');
          }
        } else if (typeof v === 'object') {
          collectStocks(v);
        }
      }
    })(p.sizes);
    if (priceNet > 0) map.set(id, { price: priceNet, stock, infinite });
  });
  return map;
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
  const minOrder = Math.max(p.minOrderRetail || 0, p.minOrderWholesale || 0);
  if (minOrder > 1) {
    parts.push('<STOCK>');
    parts.push(`  <MINIMAL_AMOUNT>${minOrder}</MINIMAL_AMOUNT>`);
    parts.push('</STOCK>');
  }
  if (p.ean) parts.push(`<EAN>${xmlEscape(p.ean)}</EAN>`);

  const allCats = [p.category].concat(p.extraCategories || []).filter(Boolean);
  if (allCats.length) {
    parts.push('<CATEGORIES>');
    allCats.forEach((c) => parts.push(`  <CATEGORY>${xmlCdata(c)}</CATEGORY>`));
    parts.push('</CATEGORIES>');
  }
  const heurekaCategoryId = heurekaCategoryIdFor(p.category);
  if (heurekaCategoryId) parts.push(`<HEUREKA_CATEGORY_ID>${heurekaCategoryId}</HEUREKA_CATEGORY_ID>`);
  if ((isHeurekaHidden(p.defaultCategory, p.price) || isCpcNonConverter(p.ean)) && !isPilotUnhidden(p.ean)) parts.push('<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN>');
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
    parts.push(`<PURCHASE_VAT>${xmlEscape(p.vat || '23')}</PURCHASE_VAT>`);
    parts.push('<PURCHASE_PRICE_INCL_VAT>0</PURCHASE_PRICE_INCL_VAT>');
  }
  if (p.seoTitle) parts.push(`<SEO_TITLE>${xmlCdata(p.seoTitle)}</SEO_TITLE>`);
  if (p.metaDescription) parts.push(`<META_DESCRIPTION>${xmlCdata(p.metaDescription)}</META_DESCRIPTION>`);
  parts.push('</SHOPITEM>');
  return parts.join('\n');
}

async function main() {
  if (!FULL_URL || !LIGHT_URL) {
    console.error('Missing INNPRO_FULL_URL / INNPRO_LIGHT_URL environment variables.');
    process.exit(1);
  }

  console.log('Loading light.xml (price/stock overrides)...');
  const lightData = await loadLightData(LIGHT_URL);
  console.log(`  -> ${lightData.size} products with live price/stock`);

  console.log('Streaming full.xml and building Shoptet XML...');
  const previousPrices = loadPreviousPrices(OUT_PATH);
  const catalogCategoryStats = buildCategoryPriceStats(OUT_PATH);
  const ownPreviousCategoryStats = buildOwnPreviousCategoryStats(OUT_PATH);
  const bypassCategoryStats = mergeCategoryStats(catalogCategoryStats, ownPreviousCategoryStats);
  const anomalies = [];

  const minOdbery = [];
  // Podklad na overenie, odkiaľ sa berie "Skladom". InnPro posiela v light.xml aj
  // quantity="-1"; skript to odjakživa chápe ako "neobmedzený sklad" a produkt vyhlási za
  // skladom, hoci to dodávateľ môže myslieť inak (u 071558 Neakasa P2 PRO má InnPro vo svojom
  // systéme 0 ks a najbližšie naskladnenie 17. 11., u nás je pritom Skladom). Domnienku sa nedá
  // overiť lokálne — feed je za prihlásením — takže sa surové hodnoty zapíšu do reportu.
  const sklad = [];
  const stats = { total: 0, written: 0, skippedNoPrice: 0, skippedCheap: 0, skippedCategory: 0, skippedUnmatchedCategory: 0, skippedUnavailable: 0, fromLight: 0 };
  const candidates = [];

  await streamProducts(FULL_URL, (rawXml) => {
    stats.total++;
    let p;
    try { p = parseProduct(rawXml); } catch (e) { return; }
    if (!p || !p.name) { stats.skippedNoPrice++; return; }
    if (crossSupplier.shouldExclude(p.manufacturer, p.name)) { stats.skippedCrossSupplier = (stats.skippedCrossSupplier || 0) + 1; return; }

    const lightEntry = lightData.get(p.id);
    let cost;
    if (lightEntry) { cost = lightEntry.price; stats.fromLight++; }
    else cost = p.priceNet;
    if (cost <= 0) {
      stats.skippedNoPrice++;
      anomalies.push({ code: p.codeOnCard || p.id, ean: p.ean, name: p.name, reason: 'zero-price', newPrice: 0 });
      return;
    }
    if (MIN_COST > 0 && cost < MIN_COST) { stats.skippedCheap++; return; }

    let price = roundPrice(cost * (1 + MARKUP_PCT / 100) * (1 + parseFloat(p.vat) / 100));
    price = applyHeurekaPriceTarget(p.ean, price, cost, parseFloat(p.vat));

    let { category, extraCategories, excluded, unmatchedCategory } = resolveCategory(p.category, p.name);
    if (excluded) { if (unmatchedCategory) stats.skippedUnmatchedCategory++; else stats.skippedCategory++; return; }
    const productCode = p.codeOnCard || p.id;
    const isReturnStockSale = (saleState.items[productCode]?.quantity || 0) > 0;
    if (CATEGORY_OVERRIDES_BY_CODE[productCode]) {
      category = CATEGORY_OVERRIDES_BY_CODE[productCode];
      extraCategories = pathToExtraCategories(category);
    }

    // Skladom vyhlásime len na základe light.xml. To je živý feed dostupnosti; full.xml nesie
    // starší snímok a vie tvrdiť, že tovar na sklade je, aj keď nie je. Presne to nahlásil
    // zákazník 14. 9. 2026 pri Neakase P2 PRO (071558): full.xml uvádzal 1 ks, v light.xml
    // produkt vôbec nebol a InnPro vo svojom systéme viedol 0 ks s naskladnením 17. 11.
    // Týka sa to 84 z 5419 produktov vyhlásených za skladom (1,5 %) — u zvyšku sa nič nemení.
    // Samotný budúci dátum ďalšej dodávky signálom nie je: má ho 1536 skladových produktov,
    // pričom väčšina má reálne stovky kusov (bežné doobjednanie), takže sa podľa neho neriadime.
    let stockQty = 0, stockInfinite = false;
    if (lightEntry) { stockQty = lightEntry.stock; stockInfinite = lightEntry.infinite; }

    let supplierAvailability;
    if (stockInfinite || stockQty > 0) supplierAvailability = 'Skladom';
    else if (p.nextDeliveryDate) supplierAvailability = `Dostupné od ${p.nextDeliveryDate}`;
    else supplierAvailability = OUT_OF_STOCK_TEXT;
    // Returned goods are physically in our warehouse even when InnPro has no stock.
    // Keep tracked sale items in the feed and advertise the local returned unit as available.
    const availability = isReturnStockSale ? 'Skladom' : supplierAvailability;

    sklad.push({ code: productCode, name: p.name, light: !!lightEntry,
      lightStock: lightEntry ? lightEntry.stock : null, infinite: stockInfinite,
      fullStock: p.stock, dalsiaDodavka: p.nextDeliveryDate || '', availability: supplierAvailability,
      returnStockSale: isReturnStockSale });

    if (EXCLUDE_UNAVAILABLE && supplierAvailability !== 'Skladom' && !isReturnStockSale) {
      stats.skippedUnavailable++; return;
    }

    let description = p.longDesc;
    if (p.docs.length) {
      p.docs.forEach((url, i) => {
        description += `<p><a href="${encodeURI(url)}" target="_blank" rel="noopener">Stiahnuť dokument${p.docs.length > 1 ? ' ' + (i + 1) : ''}</a></p>`;
      });
    }
    const shortDescription = truncateAtWord(stripTags(p.longDesc), 200);

    const nameHasManufacturer = p.manufacturer && p.name.toLowerCase().includes(p.manufacturer.toLowerCase());
    const titleCore = (p.manufacturer && !nameHasManufacturer) ? `${p.name} – ${p.manufacturer}` : p.name;
    const seoTitle = buildSeoTitle(titleCore, STORE_NAME, 70);
    const metaDescription = truncateAtWord(
      `${p.name}${p.manufacturer && !nameHasManufacturer ? ' od ' + p.manufacturer : ''} – ${availability.toLowerCase()}. Kúpte na ${STORE_NAME}.`,
      155
    );

    candidates.push({
      code: productCode, ean: p.ean, name: p.name, category, price,
      shopitemData: {
        code: productCode,
        name: p.name,
        description,
        shortDescription,
        manufacturer: p.manufacturer,
        warranty: p.warranty,
        ean: p.ean,
        category,
        extraCategories,
        images: p.images.slice(0, MAX_IMAGES),
        params: p.params,
        availability,
        weightKg: p.weightKg,
        price,
        purchasePrice: cost,
        vat: p.vat,
        seoTitle,
        metaDescription,
        minOrderRetail: p.minOrderRetail,
        minOrderWholesale: p.minOrderWholesale,
      },
    });
  });

  const feedCategoryStats = buildFeedCategoryStats(candidates);
  const categoryStats = mergeCategoryStats(feedCategoryStats, catalogCategoryStats);

  // Resolve approved supplier names by exact CODE/EAN/name; identity drift keeps source content.
  const nameTargets = candidates.map(c => c.shopitemData);
  const applyAs2Name = createAs2NameOverride(nameTargets);
  const applyNameOverride = createNameOverride(nameTargets);
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
    out.write(applyNameOverride(applyAs2Name(buildShopitemXml(c.shopitemData), c.shopitemData), c.shopitemData) + '\n');
    // Zámerne `c.shopitemData`, nie `p`: `p` je premenná callbacku streamProducts a tu už nie je
    // v dosahu — pôvodné znenie by na prvom zapísanom produkte spadlo na ReferenceError.
    const d = c.shopitemData;
    if (d.minOrderRetail > 1 || d.minOrderWholesale > 1) {
      minOdbery.push({ code: c.code, name: c.name,
        retail: d.minOrderRetail, wholesale: d.minOrderWholesale });
    }
    stats.written++;
  }

  out.write('</SHOP>\n');
  out.end();

  await new Promise((resolve) => out.on('finish', resolve));

  console.log('Done.');
  writeAnomalyReport('innpro', anomalies);
  // Prehľad minimálnych odberov — podklad na overenie, že sa hodnoty z feedu čítajú správne
  // a že maloobchodné minimum je naozaj to, ktoré dodávateľ vyžaduje od nás.
  if (minOdbery.length) {
    const r = ['# Minimálny odber — InnPro', '',
      `Kontrola z ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC.`, '',
      `InnPro pri **${minOdbery.length}** produktoch uvádza minimálny odber väčší než 1 kus.`,
      'Do XML sa zapisuje väčšie z oboch miním ako `<STOCK><MINIMAL_AMOUNT>…</MINIMAL_AMOUNT></STOCK>`.', '',
      '| Kód | Produkt | Maloobchodné | Veľkoobchodné |', '|---|---|---:|---:|'];
    for (const m of minOdbery.sort((a, b) => b.retail - a.retail)) {
      r.push(`| \`${m.code}\` | ${m.name.slice(0, 60)} | ${m.retail || '—'} | ${m.wholesale || '—'} |`);
    }
    fs.writeFileSync(path.join(__dirname, '..', 'reports', 'minimalny-odber-innpro.md'),
      r.join('\n') + '\n');
    console.log(`  -> ${minOdbery.length} produktov s minimálnym odberom > 1, `
      + 'report: reports/minimalny-odber-innpro.md');
  }

  // Skladový prehľad — z čoho vzniklo "Skladom". Do reportu idú len zaujímavé prípady:
  // quantity="-1" (vyhlásené za neobmedzený sklad) a produkty s uvedeným ďalším naskladnením.
  {
    const nekonecne = sklad.filter((s) => s.infinite);
    const sDodavkou = sklad.filter((s) => s.dalsiaDodavka);
    const r = ['# Sklad — InnPro', '',
      `Kontrola z ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC.`, '',
      `Produktov v full.xml: **${sklad.length}**, z toho `
      + `${sklad.filter((s) => s.light).length} má záznam aj v light.xml.`,
      `Dostupnosť: Skladom ${sklad.filter((s) => s.availability === 'Skladom').length}, `
      + `ostatné ${sklad.filter((s) => s.availability !== 'Skladom').length} `
      + '(tie sa do XML nezapisujú, INNPRO_EXCLUDE_UNAVAILABLE=1).', '',
      `## quantity="-1" — ${nekonecne.length} produktov`, '',
      'Tieto sú vyhlásené za skladom bez ohľadu na skutočné množstvo. Ak tu je tovar, ktorý',
      'InnPro vo svojom systéme vedie ako 0 ks, znamená to, že `-1` neznamená neobmedzený sklad',
      'a podmienka v transform-innpro.js sa musí zmeniť.', '',
      '| Kód | Produkt | light stock | full stock | Ďalšia dodávka |', '|---|---|---:|---:|---|'];
    for (const s of nekonecne.slice(0, 300)) {
      r.push(`| \`${s.code}\` | ${s.name.slice(0, 55)} | ${s.lightStock} | ${s.fullStock} `
        + `| ${s.dalsiaDodavka || '—'} |`);
    }
    r.push('', `## S uvedeným ďalším naskladnením — ${sDodavkou.length} produktov`, '',
      '| Kód | Produkt | Dostupnosť u nás | light stock | Ďalšia dodávka |',
      '|---|---|---|---:|---|');
    for (const s of sDodavkou.slice(0, 300)) {
      r.push(`| \`${s.code}\` | ${s.name.slice(0, 55)} | ${s.availability} | ${s.lightStock} `
        + `| ${s.dalsiaDodavka} |`);
    }
    fs.writeFileSync(path.join(__dirname, '..', 'reports', 'sklad-innpro.md'), r.join('\n') + '\n');
    // Markdown je len prehľad a je orezaný; CSV má všetky produkty, aby sa dal dohľadať
    // konkrétny kód, keď zákazník nahlási nesedelo skladu.
    const csv = ['kod;nazov;light;light_stock;nekonecny;full_stock;dalsia_dodavka;dostupnost'];
    for (const s of sklad) {
      csv.push([s.code, String(s.name).replace(/[;\r\n]/g, ' '), s.light ? 1 : 0,
        s.lightStock === null ? '' : s.lightStock, s.infinite ? 1 : 0, s.fullStock,
        s.dalsiaDodavka, s.availability].join(';'));
    }
    fs.writeFileSync(path.join(__dirname, '..', 'reports', 'sklad-innpro.csv'),
      csv.join('\n') + '\n');
    console.log(`  -> sklad: ${nekonecne.length} s quantity="-1", ${sDodavkou.length} s ďalšou `
      + 'dodávkou, report: reports/sklad-innpro.md');
  }

  const categoryReport = zaradovac.zapisReport();
  console.log(JSON.stringify({ ...stats, categoryReport }, null, 2));
  console.log('Output written to', OUT_PATH);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

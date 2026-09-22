'use strict';

const fs = require('fs');
const path = require('path');
const sax = require('sax');
const { XMLParser } = require('fast-xml-parser');

const ROOT = path.join(__dirname, '..');
const OUTPUT_DIR = path.join(ROOT, 'output');
const RECENT_WINDOWS = [3, 7, 30];
const EXACT_EUR = 0.02;
const CLOSE_REL = 0.01;
const MAJOR_REL = 0.10;

function n(value) {
  if (value === null || value === undefined || value === '') return null;
  const x = Number(String(value).trim().replace(/\s/g, '').replace(',', '.'));
  return Number.isFinite(x) ? x : null;
}

function isoDate(value) {
  const m = String(value || '').match(/^(\d{4})-(\d{2})-(\d{2})/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : null;
}

function shiftDays(iso, delta) {
  const d = new Date(iso + 'T00:00:00Z');
  if (Number.isNaN(d.getTime())) return null;
  d.setUTCDate(d.getUTCDate() + delta);
  return d.toISOString().slice(0, 10);
}

function isCancelled(status) {
  return String(status || '').toLocaleLowerCase('sk').includes('storn');
}

function pct(a, b) {
  return b > 0 ? Number(((a / b) * 100).toFixed(1)) : 0;
}

async function fetchOrders() {
  const url = process.env.PREMIUMSTORE_ORDERS_EXPORT_URL;
  if (!url) throw new Error('Missing PREMIUMSTORE_ORDERS_EXPORT_URL');

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 60000);
  try {
    const res = await fetch(url, {
      headers: { 'user-agent': 'PremiumStore-Agent-Margin-Reconciliation/1.0' },
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`Orders export HTTP ${res.status}`);
    return await res.text();
  } catch (err) {
    if (err.name === 'AbortError') throw new Error('Orders export timeout');
    if (/HTTP \d+/.test(String(err.message))) throw err;
    throw new Error('Orders export network/fetch failure');
  } finally {
    clearTimeout(timer);
  }
}

function addCatalogRecord(map, code, rec) {
  if (!code) return;
  if (!map.has(code)) {
    map.set(code, { ...rec, ambiguous: false, sources: [rec.source] });
    return;
  }
  const cur = map.get(code);
  cur.sources.push(rec.source);
  const priceConflict =
    cur.purchasePrice != null &&
    rec.purchasePrice != null &&
    Math.abs(cur.purchasePrice - rec.purchasePrice) > EXACT_EUR;
  const eanConflict = cur.ean && rec.ean && cur.ean !== rec.ean;
  if (priceConflict || eanConflict) cur.ambiguous = true;
  if (cur.purchasePrice == null && rec.purchasePrice != null) cur.purchasePrice = rec.purchasePrice;
  if (cur.priceVat == null && rec.priceVat != null) cur.priceVat = rec.priceVat;
  if (cur.purchaseVat == null && rec.purchaseVat != null) cur.purchaseVat = rec.purchaseVat;
  if (!cur.ean && rec.ean) cur.ean = rec.ean;
}

function parseSupplierOutput(filePath, source, catalog) {
  return new Promise((resolve, reject) => {
    const wanted = new Set(['CODE', 'EAN', 'PRICE_VAT', 'PRICE', 'PURCHASE_PRICE', 'PURCHASE_VAT']);
    let item = null;
    let activeTag = null;
    let activeValue = '';

    const parser = sax.createStream(true, {
      trim: false,
      normalize: false,
      xmlns: false,
    });

    parser.on('opentag', (node) => {
      const tag = node.name;
      if (tag === 'SHOPITEM') {
        item = {};
        activeTag = null;
        activeValue = '';
      } else if (item && wanted.has(tag)) {
        activeTag = tag;
        activeValue = '';
      }
    });

    parser.on('text', (text) => {
      if (item && activeTag) activeValue += text;
    });
    parser.on('cdata', (text) => {
      if (item && activeTag) activeValue += text;
    });

    parser.on('closetag', (tag) => {
      if (!item) return;

      if (activeTag && tag === activeTag) {
        item[activeTag] = activeValue.trim();
        activeTag = null;
        activeValue = '';
      }

      if (tag === 'SHOPITEM') {
        const code = String(item.CODE || '').trim();
        addCatalogRecord(catalog, code, {
          source,
          ean: String(item.EAN || '').trim(),
          priceVat: n(item.PRICE_VAT ?? item.PRICE),
          purchasePrice: n(item.PURCHASE_PRICE),
          purchaseVat: n(item.PURCHASE_VAT),
        });
        item = null;
      }
    });

    parser.on('error', reject);
    parser.on('end', resolve);
    fs.createReadStream(filePath).on('error', reject).pipe(parser);
  });
}

async function loadCatalog() {
  const catalog = new Map();
  const files = fs.readdirSync(OUTPUT_DIR)
    .filter((f) => f.endsWith('.xml'))
    .sort();

  for (const file of files) {
    await parseSupplierOutput(path.join(OUTPUT_DIR, file), file, catalog);
  }
  return { catalog, files };
}

function parseOrders(xml) {
  const parser = new XMLParser({
    trimValues: true,
    parseTagValue: false,
    processEntities: true,
  });
  let orders = parser.parse(xml)?.ORDERS?.ORDER || [];
  if (!Array.isArray(orders)) orders = [orders];
  return orders;
}

function productItems(order) {
  let items = order?.ITEMS?.ITEM || [];
  if (!Array.isArray(items)) items = [items];
  return items.filter(
    (i) =>
      String(i?.TYPE || '').toLowerCase() === 'product' &&
      String(i?.CODE || '').trim()
  );
}

function classifyDiff(orderUnitPurchase, currentPurchase) {
  const abs = Math.abs(orderUnitPurchase - currentPurchase);
  const rel = currentPurchase > 0 ? abs / currentPurchase : null;
  if (abs <= EXACT_EUR) return 'exact';
  if (rel !== null && rel <= CLOSE_REL) return 'close';
  if (rel !== null && rel > MAJOR_REL) return 'major';
  return 'drift';
}

function aggregate(candidates, catalog, latestDate, days) {
  const from = shiftDays(latestDate, -(days - 1));
  const rows = candidates.filter((x) => x.date >= from && x.date <= latestDate);

  const stats = {
    windowDays: days,
    from,
    to: latestDate,
    eligibleSingleProductOrders: rows.length,
    matchedCode: 0,
    unmatchedCode: 0,
    ambiguousCode: 0,
    missingSupplierPurchasePrice: 0,
    comparablePurchasePrice: 0,
    exact: 0,
    close: 0,
    drift: 0,
    major: 0,
    salePriceComparable: 0,
    formulaCoherent: 0,
  };

  for (const row of rows) {
    const cat = catalog.get(row.code);
    if (!cat) {
      stats.unmatchedCode++;
      continue;
    }
    stats.matchedCode++;

    if (cat.ambiguous) {
      stats.ambiguousCode++;
      continue;
    }
    if (!(cat.purchasePrice > 0)) {
      stats.missingSupplierPurchasePrice++;
      continue;
    }

    stats.comparablePurchasePrice++;
    stats[classifyDiff(row.unitPurchasePrice, cat.purchasePrice)]++;

    const vatPct = cat.purchaseVat != null ? cat.purchaseVat : 23;
    const currentUnitNet = cat.priceVat > 0 ? cat.priceVat / (1 + vatPct / 100) : null;
    if (
      currentUnitNet != null &&
      row.amount > 0 &&
      row.totalWithoutVat != null &&
      Math.abs(row.totalWithoutVat - currentUnitNet * row.amount) <= 0.05
    ) {
      stats.salePriceComparable++;
      const orderSpread = row.totalWithoutVat - row.orderPurchasePrice;
      const catalogMargin = (currentUnitNet - cat.purchasePrice) * row.amount;
      if (Math.abs(orderSpread - catalogMargin) <= 0.05) stats.formulaCoherent++;
    }
  }

  return {
    ...stats,
    codeMatchPct: pct(stats.matchedCode, stats.eligibleSingleProductOrders),
    purchasePriceComparablePct: pct(stats.comparablePurchasePrice, stats.eligibleSingleProductOrders),
    purchasePriceExactOrClosePct: pct(stats.exact + stats.close, stats.comparablePurchasePrice),
    majorDriftPct: pct(stats.major, stats.comparablePurchasePrice),
    marginFormulaCoherencePct: pct(stats.formulaCoherent, stats.salePriceComparable),
  };
}

(async () => {
  const ordersXml = await fetchOrders();
  const orders = parseOrders(ordersXml);
  const { catalog, files } = await loadCatalog();

  const candidates = [];
  let latestDate = null;
  let activeOrders = 0;
  let singleProductOrders = 0;
  let missingOrderPurchasePrice = 0;

  for (const order of orders) {
    if (isCancelled(order.STATUS)) continue;
    activeOrders++;

    const date = isoDate(order.DATE);
    if (!date) continue;
    if (!latestDate || date > latestDate) latestDate = date;

    const items = productItems(order);
    if (items.length !== 1) continue;
    singleProductOrders++;

    const orderPurchasePrice = n(order.PURCHASE_PRICE);
    if (!(orderPurchasePrice >= 0)) {
      missingOrderPurchasePrice++;
      continue;
    }

    const amount = n(items[0].AMOUNT) || 1;
    const code = String(items[0].CODE || '').trim();
    const totalWithoutVat = n(order.TOTAL_WITHOUT_VAT);

    candidates.push({
      date,
      code,
      amount,
      orderPurchasePrice,
      unitPurchasePrice: amount > 0 ? orderPurchasePrice / amount : null,
      totalWithoutVat,
    });
  }

  if (!latestDate) throw new Error('No valid active order dates found');

  const windows = Object.fromEntries(
    RECENT_WINDOWS.map((days) => [String(days), aggregate(candidates, catalog, latestDate, days)])
  );

  const w3 = windows['3'];
  let status = 'PASS';
  const reasons = [];

  if (w3.comparablePurchasePrice < 10) {
    status = 'WARN';
    reasons.push('LOW_RECENT_SAMPLE');
  }
  if (w3.purchasePriceComparablePct < 80) {
    status = 'WARN';
    reasons.push('LOW_PURCHASE_PRICE_COVERAGE');
  }
  if (w3.comparablePurchasePrice >= 10 && w3.purchasePriceExactOrClosePct < 80) {
    status = 'WARN';
    reasons.push('LOW_RECENT_PURCHASE_PRICE_ALIGNMENT');
  }
  if (w3.comparablePurchasePrice >= 10 && w3.majorDriftPct > 10) {
    status = 'WARN';
    reasons.push('HIGH_MAJOR_DRIFT');
  }

  const summary = {
    checkedAt: new Date().toISOString(),
    mode: 'read-only',
    status,
    reasons,
    privacy: 'aggregate-only; no order IDs, customer data, SKUs or monetary values are logged',
    inputs: {
      supplierOutputFiles: files.length,
      catalogCodes: catalog.size,
      activeOrders,
      singleProductOrders,
      missingOrderPurchasePrice,
    },
    windows,
    interpretation: {
      purchasePriceExactOrClose:
        'Shoptet single-product order PURCHASE_PRICE per unit versus current supplier output PURCHASE_PRICE; <= €0.02 exact, <=1% close.',
      majorDrift:
        '>10% difference; may be legitimate historical supplier-price movement and requires historical snapshot review before treating as an error.',
      marginFormulaCoherence:
        'Only orders whose order net total matches the current product net price are comparable; paid shipping/payment or historical price changes are skipped.',
    },
  };

  console.log(JSON.stringify(summary, null, 2));
})().catch((err) => {
  console.error(JSON.stringify({
    checkedAt: new Date().toISOString(),
    mode: 'read-only',
    status: 'BLOCKED',
    error: String(err.message || err),
  }, null, 2));
  process.exit(2);
});

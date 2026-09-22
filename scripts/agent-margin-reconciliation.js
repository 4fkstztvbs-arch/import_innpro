'use strict';

const fs = require('fs');
const path = require('path');
const sax = require('sax');
const { XMLParser } = require('fast-xml-parser');

const ROOT = path.join(__dirname, '..');
const OUTPUT_DIR = path.join(ROOT, 'output');
const EXACT_EUR = 0.02;
const CLOSE_REL = 0.01;
const MAJOR_REL = 0.10;

function n(value) {
  if (value === null || value === undefined || value === '') return null;
  const x = Number(String(value).trim().replace(/\s/g, '').replace(',', '.'));
  return Number.isFinite(x) ? x : null;
}

function pct(a, b) {
  return b > 0 ? Number(((a / b) * 100).toFixed(1)) : 0;
}

function isCancelled(status) {
  return String(status || '').toLocaleLowerCase('sk').includes('storn');
}

async function fetchPrivate(envName, label) {
  const url = process.env[envName];
  if (!url) throw new Error(`Missing ${envName}`);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 90000);
  try {
    const res = await fetch(url, {
      headers: { 'user-agent': 'PremiumStore-Agent-Margin-Reconciliation/2.0' },
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`${label} HTTP ${res.status}`);
    return await res.text();
  } catch (err) {
    if (err.name === 'AbortError') throw new Error(`${label} timeout`);
    if (/HTTP \d+/.test(String(err.message))) throw err;
    throw new Error(`${label} network/fetch failure`);
  } finally {
    clearTimeout(timer);
  }
}

function classifyDiff(a, b) {
  const abs = Math.abs(a - b);
  const rel = b > 0 ? abs / b : null;
  if (abs <= EXACT_EUR) return 'exact';
  if (rel !== null && rel <= CLOSE_REL) return 'close';
  if (rel !== null && rel > MAJOR_REL) return 'major';
  return 'drift';
}

function addRecord(map, code, rec) {
  if (!code) return;
  if (!map.has(code)) {
    map.set(code, { ...rec, ambiguous: false, sources: rec.source ? [rec.source] : [] });
    return;
  }

  const cur = map.get(code);
  if (rec.source) cur.sources.push(rec.source);

  const purchaseConflict =
    cur.purchasePrice != null &&
    rec.purchasePrice != null &&
    Math.abs(cur.purchasePrice - rec.purchasePrice) > EXACT_EUR;
  const priceConflict =
    cur.priceVat != null &&
    rec.priceVat != null &&
    Math.abs(cur.priceVat - rec.priceVat) > EXACT_EUR;
  const eanConflict = cur.ean && rec.ean && cur.ean !== rec.ean;

  if (purchaseConflict || priceConflict || eanConflict) cur.ambiguous = true;
  if (cur.purchasePrice == null && rec.purchasePrice != null) cur.purchasePrice = rec.purchasePrice;
  if (cur.priceVat == null && rec.priceVat != null) cur.priceVat = rec.priceVat;
  if (cur.vat == null && rec.vat != null) cur.vat = rec.vat;
  if (!cur.ean && rec.ean) cur.ean = rec.ean;
}

function parseShopXmlString(xml, source = null) {
  const map = new Map();
  const wanted = new Set(['CODE', 'EAN', 'PRICE_VAT', 'PURCHASE_PRICE', 'VAT', 'PURCHASE_VAT']);
  let item = null;
  let itemDepth = 0;
  let activeTag = null;
  let activeValue = '';

  const parser = sax.parser(true, { trim: false, normalize: false, xmlns: false });

  parser.onopentag = (node) => {
    if (node.name === 'SHOPITEM') {
      item = {};
      itemDepth = 0;
      activeTag = null;
      activeValue = '';
      return;
    }
    if (!item) return;

    itemDepth += 1;
    if (itemDepth === 1 && wanted.has(node.name)) {
      activeTag = node.name;
      activeValue = '';
    }
  };

  parser.ontext = (text) => {
    if (item && activeTag) activeValue += text;
  };
  parser.oncdata = (text) => {
    if (item && activeTag) activeValue += text;
  };

  parser.onclosetag = (tag) => {
    if (!item) return;

    if (activeTag && itemDepth === 1 && tag === activeTag) {
      item[activeTag] = activeValue.trim();
      activeTag = null;
      activeValue = '';
    }

    if (tag === 'SHOPITEM') {
      const code = String(item.CODE || '').trim();
      addRecord(map, code, {
        source,
        ean: String(item.EAN || '').trim(),
        priceVat: n(item.PRICE_VAT),
        purchasePrice: n(item.PURCHASE_PRICE),
        vat: n(item.VAT ?? item.PURCHASE_VAT),
      });
      item = null;
      itemDepth = 0;
      return;
    }

    itemDepth -= 1;
  };

  let error = null;
  parser.onerror = (err) => {
    error = err;
    parser.resume();
  };
  parser.write(xml).close();
  if (error) throw error;

  return map;
}

function parseSupplierOutput(filePath, source, catalog) {
  return new Promise((resolve, reject) => {
    const wanted = new Set(['CODE', 'EAN', 'PRICE_VAT', 'PRICE', 'PURCHASE_PRICE', 'VAT', 'PURCHASE_VAT']);
    let item = null;
    let itemDepth = 0;
    let activeTag = null;
    let activeValue = '';

    const parser = sax.createStream(true, {
      trim: false,
      normalize: false,
      xmlns: false,
    });

    parser.on('opentag', (node) => {
      if (node.name === 'SHOPITEM') {
        item = {};
        itemDepth = 0;
        activeTag = null;
        activeValue = '';
        return;
      }
      if (!item) return;

      itemDepth += 1;
      if (itemDepth === 1 && wanted.has(node.name)) {
        activeTag = node.name;
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

      if (activeTag && itemDepth === 1 && tag === activeTag) {
        item[activeTag] = activeValue.trim();
        activeTag = null;
        activeValue = '';
      }

      if (tag === 'SHOPITEM') {
        const code = String(item.CODE || '').trim();
        addRecord(catalog, code, {
          source,
          ean: String(item.EAN || '').trim(),
          priceVat: n(item.PRICE_VAT ?? item.PRICE),
          purchasePrice: n(item.PURCHASE_PRICE),
          vat: n(item.VAT ?? item.PURCHASE_VAT),
        });
        item = null;
        itemDepth = 0;
        return;
      }

      itemDepth -= 1;
    });

    parser.on('error', reject);
    parser.on('end', resolve);
    fs.createReadStream(filePath).on('error', reject).pipe(parser);
  });
}

async function loadSupplierCatalog() {
  const catalog = new Map();
  const files = fs.readdirSync(OUTPUT_DIR).filter((f) => f.endsWith('.xml')).sort();

  for (const file of files) {
    await parseSupplierOutput(path.join(OUTPUT_DIR, file), file, catalog);
  }

  return { catalog, files };
}

function uniqueEanIndex(map) {
  const first = new Map();
  const duplicate = new Set();

  for (const rec of map.values()) {
    const ean = String(rec.ean || '').trim();
    if (!ean) continue;
    if (first.has(ean)) duplicate.add(ean);
    else first.set(ean, rec);
  }

  for (const ean of duplicate) first.delete(ean);
  return { index: first, duplicateCount: duplicate.size };
}

function compareCurrentCatalog(supplier, live) {
  const supplierEans = uniqueEanIndex(supplier);
  const liveEans = uniqueEanIndex(live);

  const out = {
    supplierCodes: supplier.size,
    liveCodes: live.size,
    supplierWithPurchasePrice: 0,
    liveWithPurchasePrice: 0,
    joinedByCode: 0,
    joinedByUniqueEanFallback: 0,
    joinedTotal: 0,
    supplierDuplicateEans: supplierEans.duplicateCount,
    liveDuplicateEans: liveEans.duplicateCount,
    comparablePurchasePrice: 0,
    purchaseExact: 0,
    purchaseClose: 0,
    purchaseDrift: 0,
    purchaseMajor: 0,
    comparableSalePrice: 0,
    saleExact: 0,
    saleClose: 0,
    saleDrift: 0,
    saleMajor: 0,
    ambiguousSupplierCode: 0,
  };

  for (const x of supplier.values()) {
    if (x.purchasePrice > 0) out.supplierWithPurchasePrice++;
    if (x.ambiguous) out.ambiguousSupplierCode++;
  }
  for (const x of live.values()) {
    if (x.purchasePrice > 0) out.liveWithPurchasePrice++;
  }

  for (const [code, s] of supplier) {
    let l = live.get(code);
    let method = null;

    if (l) {
      method = 'code';
    } else if (s.ean && supplierEans.index.get(s.ean) === s) {
      const eanMatch = liveEans.index.get(s.ean);
      if (eanMatch) {
        l = eanMatch;
        method = 'ean';
      }
    }

    if (!l) continue;

    out.joinedTotal++;
    if (method === 'code') out.joinedByCode++;
    else out.joinedByUniqueEanFallback++;

    if (!s.ambiguous && s.purchasePrice > 0 && l.purchasePrice > 0) {
      out.comparablePurchasePrice++;
      out['purchase' + ({
        exact: 'Exact',
        close: 'Close',
        drift: 'Drift',
        major: 'Major',
      })[classifyDiff(l.purchasePrice, s.purchasePrice)]]++;
    }

    if (!s.ambiguous && s.priceVat > 0 && l.priceVat > 0) {
      out.comparableSalePrice++;
      out['sale' + ({
        exact: 'Exact',
        close: 'Close',
        drift: 'Drift',
        major: 'Major',
      })[classifyDiff(l.priceVat, s.priceVat)]]++;
    }
  }

  return {
    ...out,
    codeJoinPct: pct(out.joinedByCode, out.supplierCodes),
    totalJoinPct: pct(out.joinedTotal, out.supplierCodes),
    purchasePriceCoveragePct: pct(out.comparablePurchasePrice, out.supplierWithPurchasePrice),
    purchaseExactOrClosePct: pct(out.purchaseExact + out.purchaseClose, out.comparablePurchasePrice),
    purchaseMajorDriftPct: pct(out.purchaseMajor, out.comparablePurchasePrice),
    saleExactOrClosePct: pct(out.saleExact + out.saleClose, out.comparableSalePrice),
    saleMajorDriftPct: pct(out.saleMajor, out.comparableSalePrice),
  };
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

function orderItems(order) {
  let items = order?.ORDER_ITEMS?.ITEM ?? order?.ITEMS?.ITEM ?? [];
  if (!Array.isArray(items)) items = [items];
  return items;
}

function productItems(order) {
  return orderItems(order).filter((i) => {
    const type = String(i?.TYPE || '').toLowerCase();
    return type === 'product' && String(i?.CODE || '').trim();
  });
}

function orderCode(order) {
  return String(order?.CODE ?? order?.ORDER_CODE ?? order?.ORDER_ID ?? '').trim();
}

function orderMap(orders) {
  const map = new Map();
  for (const order of orders) {
    const code = orderCode(order);
    if (code) map.set(code, order);
  }
  return map;
}

function itemNetTotal(item) {
  const total = n(item?.TOTAL_PRICE?.WITHOUT_VAT);
  if (total != null) return total;
  const unit = n(item?.UNIT_PRICE?.WITHOUT_VAT);
  const amount = n(item?.AMOUNT) || 1;
  return unit != null ? unit * amount : null;
}

function matchCatalogItem(catalog, eanIndex, item) {
  const code = String(item?.CODE || '').trim();
  if (code && catalog.has(code)) return catalog.get(code);

  const ean = String(item?.EAN || '').trim();
  if (ean && eanIndex.index.has(ean)) return eanIndex.index.get(ean);

  return null;
}

function reconcileMarginOrders(standardOrders, marginOrders, supplierCatalog) {
  const standard = orderMap(standardOrders);
  const supplierEans = uniqueEanIndex(supplierCatalog);

  const out = {
    marginOrders: marginOrders.length,
    activeMarginOrders: 0,
    marginPurchasePriceAvailable: 0,
    overlapWithStandardOrders: 0,
    productRows: 0,
    supplierMatchedProductRows: 0,
    fullySupplierComparableOrders: 0,
    supplierCostExact: 0,
    supplierCostClose: 0,
    supplierCostDrift: 0,
    supplierCostMajor: 0,
    formulaReadyOrders: 0,
  };

  for (const marginOrder of marginOrders) {
    if (isCancelled(marginOrder.STATUS)) continue;
    out.activeMarginOrders++;

    const purchase = n(marginOrder.PURCHASE_PRICE);
    if (purchase != null) out.marginPurchasePriceAvailable++;

    const code = orderCode(marginOrder);
    const std = code ? standard.get(code) : null;
    if (std) out.overlapWithStandardOrders++;

    const items = productItems(marginOrder);
    out.productRows += items.length;

    let currentSupplierCost = 0;
    let supplierComparable = items.length > 0;
    for (const item of items) {
      const matched = matchCatalogItem(supplierCatalog, supplierEans, item);
      const amount = n(item.AMOUNT) || 1;
      if (!matched || matched.ambiguous || !(matched.purchasePrice > 0)) {
        supplierComparable = false;
        continue;
      }
      out.supplierMatchedProductRows++;
      currentSupplierCost += matched.purchasePrice * amount;
    }

    if (purchase != null && supplierComparable) {
      out.fullySupplierComparableOrders++;
      const cls = classifyDiff(purchase, currentSupplierCost);
      out['supplierCost' + ({
        exact: 'Exact',
        close: 'Close',
        drift: 'Drift',
        major: 'Major',
      })[cls]]++;
    }

    if (purchase != null && std && !isCancelled(std.STATUS)) {
      const stdProducts = productItems(std);
      if (stdProducts.length) {
        let complete = true;
        let productSalesExVat = 0;
        for (const item of stdProducts) {
          const value = itemNetTotal(item);
          if (value == null) {
            complete = false;
            break;
          }
          productSalesExVat += value;
        }
        // If complete, exact historical gross margin is derivable privately as:
        // productSalesExVat - marginOrder.PURCHASE_PRICE.
        // Never print the monetary value to public CI logs.
        if (complete && Number.isFinite(productSalesExVat - purchase)) {
          out.formulaReadyOrders++;
        }
      }
    }
  }

  return {
    ...out,
    marginPurchasePriceCoveragePct: pct(out.marginPurchasePriceAvailable, out.activeMarginOrders),
    standardOrderOverlapPct: pct(out.overlapWithStandardOrders, out.activeMarginOrders),
    supplierProductJoinPct: pct(out.supplierMatchedProductRows, out.productRows),
    supplierComparableOrderPct: pct(out.fullySupplierComparableOrders, out.activeMarginOrders),
    supplierExactOrClosePct: pct(
      out.supplierCostExact + out.supplierCostClose,
      out.fullySupplierComparableOrders
    ),
    supplierMajorDriftPct: pct(out.supplierCostMajor, out.fullySupplierComparableOrders),
    historicalMarginFormulaReadyPct: pct(out.formulaReadyOrders, out.activeMarginOrders),
  };
}

function orderReadiness(orders) {
  const out = {
    orders: orders.length,
    activeOrders: 0,
    productItemRows: 0,
    singleProductOrders: 0,
    orderPurchasePriceAvailable: 0,
    productSalePriceWithoutVatAvailable: 0,
    productCodeAvailable: 0,
    productEanAvailable: 0,
    sourceOrRefererAvailable: 0,
  };

  for (const order of orders) {
    if (isCancelled(order.STATUS)) continue;
    out.activeOrders++;

    const products = productItems(order);
    out.productItemRows += products.length;
    if (products.length === 1) out.singleProductOrders++;

    if (n(order.PURCHASE_PRICE) != null) out.orderPurchasePriceAvailable++;

    const sourceText = [
      order.REFERER,
      order.SOURCE,
      order.SOURCE_NAME,
      order?.SOURCE?.NAME,
    ].filter(Boolean).join(' ');
    if (sourceText) out.sourceOrRefererAvailable++;

    for (const item of products) {
      if (String(item.CODE || '').trim()) out.productCodeAvailable++;
      if (String(item.EAN || '').trim()) out.productEanAvailable++;
      if (n(item?.TOTAL_PRICE?.WITHOUT_VAT ?? item?.UNIT_PRICE?.WITHOUT_VAT) != null) {
        out.productSalePriceWithoutVatAvailable++;
      }
    }
  }

  return {
    ...out,
    orderPurchasePriceCoveragePct: pct(out.orderPurchasePriceAvailable, out.activeOrders),
    productCodeCoveragePct: pct(out.productCodeAvailable, out.productItemRows),
    productEanCoveragePct: pct(out.productEanAvailable, out.productItemRows),
    productSalePriceCoveragePct: pct(out.productSalePriceWithoutVatAvailable, out.productItemRows),
    sourceOrRefererCoveragePct: pct(out.sourceOrRefererAvailable, out.activeOrders),
  };
}

(async () => {
  const [ordersXml, marginOrdersXml, productsXml, supplierData] = await Promise.all([
    fetchPrivate('PREMIUMSTORE_ORDERS_EXPORT_URL', 'orders'),
    fetchPrivate('PREMIUMSTORE_ORDERS_MARGIN_EXPORT_URL', 'orders-margin'),
    fetchPrivate('PREMIUMSTORE_PRODUCTS_EXPORT_URL', 'products'),
    loadSupplierCatalog(),
  ]);

  const liveProducts = parseShopXmlString(productsXml, 'live-products-export');
  const orders = parseOrders(ordersXml);
  const marginOrders = parseOrders(marginOrdersXml);

  const current = compareCurrentCatalog(supplierData.catalog, liveProducts);
  const readiness = orderReadiness(orders);
  const marginReconciliation = reconcileMarginOrders(
    orders,
    marginOrders,
    supplierData.catalog
  );

  let status = 'PASS';
  const reasons = [];

  if (current.comparablePurchasePrice < 100) {
    status = 'WARN';
    reasons.push('LOW_PURCHASE_PRICE_SAMPLE');
  }
  if (current.purchasePriceCoveragePct < 85) {
    status = 'WARN';
    reasons.push('LOW_PURCHASE_PRICE_JOIN_COVERAGE');
  }
  if (current.comparablePurchasePrice >= 100 && current.purchaseExactOrClosePct < 90) {
    status = 'WARN';
    reasons.push('LOW_CURRENT_PURCHASE_PRICE_ALIGNMENT');
  }
  if (current.comparablePurchasePrice >= 100 && current.purchaseMajorDriftPct > 5) {
    status = 'WARN';
    reasons.push('HIGH_CURRENT_PURCHASE_PRICE_DRIFT');
  }

  if (readiness.productCodeCoveragePct < 95 || readiness.productSalePriceCoveragePct < 95) {
    status = 'WARN';
    reasons.push('ORDER_ITEM_MARGIN_INPUTS_INCOMPLETE');
  }

  if (readiness.orderPurchasePriceCoveragePct === 0) {
    reasons.push('STANDARD_ORDER_EXPORT_HAS_NO_ORDER_PURCHASE_PRICE');
  }

  if (marginReconciliation.marginPurchasePriceCoveragePct < 95) {
    status = 'WARN';
    reasons.push('LOW_MARGIN_EXPORT_PURCHASE_PRICE_COVERAGE');
  }
  if (marginReconciliation.standardOrderOverlapPct < 90) {
    status = 'WARN';
    reasons.push('LOW_STANDARD_MARGIN_ORDER_OVERLAP');
  }
  if (marginReconciliation.historicalMarginFormulaReadyPct < 85) {
    status = 'WARN';
    reasons.push('LOW_HISTORICAL_MARGIN_FORMULA_COVERAGE');
  }

  const summary = {
    checkedAt: new Date().toISOString(),
    mode: 'read-only',
    status,
    reasons,
    privacy: 'aggregate-only; no order IDs, customer data, SKUs or monetary values are logged',
    supplierOutputs: {
      files: supplierData.files.length,
      catalogCodes: supplierData.catalog.size,
    },
    currentProductReconciliation: current,
    orderMarginInputReadiness: readiness,
    marginOrderReconciliation: marginReconciliation,
    interpretation: {
      currentPurchasePrice:
        'Compares current supplier output PURCHASE_PRICE to current live Shoptet products-export PURCHASE_PRICE using exact CODE first, then only a unique EAN fallback.',
      exactOrClose:
        'Exact means <= EUR 0.02 absolute difference; close means <=1% relative difference.',
      currentSalePrice:
        'Compares supplier output PRICE_VAT to live Shoptet products-export PRICE_VAT; differences can also indicate import lag or protected pricing overrides.',
      orderHistory:
        'The standard orders export supplies product-level net sale prices; the private margin orders export supplies historical order PURCHASE_PRICE. When the same active order is present in both, exact historical gross margin is privately derivable as product sales ex VAT minus order purchase price.',
      supplierOrderCheck:
        'Margin-order PURCHASE_PRICE is also compared with the sum of current supplier purchase prices as a drift/sanity signal only; differences can be legitimate historical supplier-cost changes.',
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

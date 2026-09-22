'use strict';

const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');
const { XMLParser } = require('fast-xml-parser');
const {
  decideProduct,
  reconcileWindows,
  finite,
  round,
} = require('./lib/heureka-shadow-core');

const ROOT = path.join(__dirname, '..');
const REQUIRED = [
  'date',
  'shop_item_id',
  'shop_item_name',
  'visits_total',
  'visits_free',
  'visits_bidded',
  'visits_not_bidded',
  'costs_without_vat_total',
  'costs_without_vat_bidded',
  'costs_without_vat_not_bidded',
  'orders_total',
  'orders_free',
  'orders_bidded',
  'orders_not_bidded',
  'revenue_total',
  'revenue_free',
  'revenue_bidded',
  'revenue_not_bidded',
];

const DEFAULT_POLICY = path.join(__dirname, 'heureka-shadow-policy.json');
const DEFAULT_EXCLUSIONS = path.join(
  ROOT,
  'data',
  'heureka-reports',
  'cpc-hidden-products.json'
);

function args(xs) {
  const out = {};
  for (const x of xs) {
    if (!x.startsWith('--')) continue;
    const i = x.indexOf('=');
    out[x.slice(2, i < 0 ? undefined : i)] = i < 0 ? true : x.slice(i + 1);
  }
  return out;
}

function date(value) {
  const m = String(value || '').match(/^(\d{4}-\d{2}-\d{2})/);
  return m ? m[1] : null;
}

function shiftDays(isoDate, delta) {
  const d = new Date(isoDate + 'T00:00:00Z');
  if (Number.isNaN(d.getTime())) return null;
  d.setUTCDate(d.getUTCDate() + delta);
  return d.toISOString().slice(0, 10);
}

function maxDate(a, b) {
  if (!a) return b;
  if (!b) return a;
  return a > b ? a : b;
}

function minDate(a, b) {
  if (!a) return b;
  if (!b) return a;
  return a < b ? a : b;
}

function num(value, empty = 0) {
  if (value == null || String(value).trim() === '') return empty;
  const n = Number(String(value).replace(/\s/g, '').replace(',', '.').replace('%', ''));
  return Number.isFinite(n) ? n : empty;
}

function med(xs) {
  xs = xs.filter(Number.isFinite).sort((a, b) => a - b);
  if (!xs.length) return null;
  const m = Math.floor(xs.length / 2);
  return xs.length % 2 ? xs[m] : (xs[m - 1] + xs[m]) / 2;
}

function json(file, fallback = {}) {
  return file && fs.existsSync(file)
    ? JSON.parse(fs.readFileSync(file, 'utf8'))
    : fallback;
}

function tag(block, names) {
  for (const name of names) {
    const re = new RegExp(
      `<${name}(?:\\s[^>]*)?>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${name}>`,
      'i'
    );
    const m = block.match(re);
    if (m) {
      return String(m[1])
        .replace(/<!\[CDATA\[/g, '')
        .replace(/\]\]>/g, '')
        .trim();
    }
  }
  return '';
}

function readHeurekaRows(file) {
  const rows = parse(fs.readFileSync(file, 'utf8'), {
    bom: true,
    columns: true,
    skip_empty_lines: true,
    relax_column_count: true,
  });
  if (!rows.length) throw new Error('Heureka report is empty');
  const missing = REQUIRED.filter((c) => !(c in rows[0]));
  if (missing.length) {
    throw new Error('Unsupported Heureka CPC report, missing: ' + missing.join(', '));
  }
  return rows;
}

function bounds(rows) {
  let first = null;
  let last = null;
  for (const row of rows) {
    const d = date(row.date);
    if (!d) continue;
    first = minDate(first, d);
    last = maxDate(last, d);
  }
  return { first, last };
}

function performance(rows, from, to) {
  const map = new Map();

  for (const r of rows) {
    const d = date(r.date);
    const code = String(r.shop_item_id || '').trim();
    if (!d || !code || (from && d < from) || (to && d > to)) continue;

    if (!map.has(code)) {
      map.set(code, {
        code,
        name: '',
        v: 0,
        fv: 0,
        bv: 0,
        nv: 0,
        c: 0,
        bc: 0,
        nc: 0,
        o: 0,
        fo: 0,
        bo: 0,
        no: 0,
        rev: 0,
        days: new Set(),
        paidDays: new Set(),
        daily: [],
      });
    }

    const x = map.get(code);
    x.name = String(r.shop_item_name || x.name);
    x.v += num(r.visits_total);
    x.fv += num(r.visits_free);
    x.bv += num(r.visits_bidded);
    x.nv += num(r.visits_not_bidded);
    x.c += num(r.costs_without_vat_total);
    x.bc += num(r.costs_without_vat_bidded);
    x.nc += num(r.costs_without_vat_not_bidded);
    x.o += num(r.orders_total);
    x.fo += num(r.orders_free);
    x.bo += num(r.orders_bidded);
    x.no += num(r.orders_not_bidded);
    x.rev += num(r.revenue_total);
    x.days.add(d);
    if (num(r.visits_bidded) + num(r.visits_not_bidded) > 0) x.paidDays.add(d);
    x.daily.push({ date: d, orders: num(r.orders_total) });
  }

  return map;
}

function zeroPerformance(code, name = '') {
  return {
    code,
    name,
    v: 0,
    fv: 0,
    bv: 0,
    nv: 0,
    c: 0,
    bc: 0,
    nc: 0,
    o: 0,
    fo: 0,
    bo: 0,
    no: 0,
    rev: 0,
    days: new Set(),
    paidDays: new Set(),
    daily: [],
  };
}

function normalizePerformance(p) {
  return {
    totalVisits: p.v,
    freeVisits: p.fv,
    paidVisits: p.bv + p.nv,
    paidCostExVat: p.bc + p.nc,
    totalCostExVat: p.c,
    totalOrders: p.o,
    freeOrders: p.fo,
    paidOrders: p.bo + p.no,
    totalRevenue: p.rev,
    distinctPaidDays: p.paidDays.size,
    distinctDays: p.days.size,
  };
}

function economics(dir, vatDefault, codePrefixes = {}) {
  const map = new Map();
  const files = fs.readdirSync(dir).filter((x) => x.endsWith('.xml'));
  if (!codePrefixes || typeof codePrefixes !== 'object' || Array.isArray(codePrefixes)) {
    throw new Error('Code prefixes must be an object keyed by supplier output filename');
  }
  for (const [file, prefix] of Object.entries(codePrefixes)) {
    if (!files.includes(file) || typeof prefix !== 'string' || !/^[A-Za-z0-9_-]{1,32}$/.test(prefix)) {
      throw new Error('Invalid supplier code-prefix mapping');
    }
  }

  for (const file of files) {
    const xml = fs.readFileSync(path.join(dir, file), 'utf8');
    const blocks = xml.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/gi) || [];

    for (const block of blocks) {
      const code = tag(block, ['CODE']);
      if (!code) continue;

      const record = {
        code,
        sourceCode: code,
        matchMethod: 'exact-code',
        source: file,
        name: tag(block, ['PRODUCTNAME', 'NAME']),
        ean: tag(block, ['EAN']),
        price: num(tag(block, ['PRICE_VAT', 'PRICE']), null),
        buy: num(tag(block, ['PURCHASE_PRICE']), null),
        vat: num(tag(block, ['VAT', 'PURCHASE_VAT']), vatDefault),
        amb: false,
        sources: [file],
      };

      if (!map.has(code)) {
        map.set(code, record);
        continue;
      }

      const existing = map.get(code);
      existing.sources.push(file);
      if (
        (existing.ean && record.ean && existing.ean !== record.ean) ||
        (existing.price && record.price && Math.abs(existing.price - record.price) > 0.02) ||
        (existing.buy && record.buy && Math.abs(existing.buy - record.buy) > 0.02)
      ) {
        existing.amb = true;
      }
      if (!existing.ean) existing.ean = record.ean;
      if (!existing.price) existing.price = record.price;
      if (!existing.buy) existing.buy = record.buy;
    }
  }

  // Explicit, audited Shoptet import prefixes only. Do not guess prefixes from
  // CPC codes, mutate source files, or apply fuzzy/case-insensitive SKU matching.
  const rawRecords = [...map.values()];
  for (const record of rawRecords) {
    for (const file of record.sources) {
      const prefix = codePrefixes[file];
      if (!prefix) continue;
      const alias = prefix + record.sourceCode;
      const candidate = {
        ...record,
        code: alias,
        source: file,
        matchMethod: 'configured-import-prefix',
        sources: [...record.sources],
      };
      if (map.has(alias)) {
        // A configured alias colliding with any real/aliased SKU is not proof
        // of identity, even if its current price happens to be identical.
        map.set(alias, { ...map.get(alias), amb: true });
      } else {
        map.set(alias, candidate);
      }
    }
  }

  return map;
}

function orders(file, from, to) {
  const map = new Map();
  if (!file || !fs.existsSync(file)) return map;

  const parser = new XMLParser({
    trimValues: true,
    parseTagValue: false,
    processEntities: true,
  });

  let rows = parser.parse(fs.readFileSync(file, 'utf8'))?.ORDERS?.ORDER || [];
  if (!Array.isArray(rows)) rows = [rows];

  const get = (code) => {
    if (!map.has(code)) {
      map.set(code, { single: 0, multi: 0, unitBuys: [] });
    }
    return map.get(code);
  };

  for (const order of rows) {
    if (String(order.STATUS || '').toLocaleLowerCase('sk').includes('storn')) continue;

    const orderDate = date(order.DATE);
    if ((from && orderDate && orderDate < from) || (to && orderDate && orderDate > to)) continue;

    let items = order?.ITEMS?.ITEM || [];
    if (!Array.isArray(items)) items = [items];
    items = items.filter(
      (item) =>
        String(item?.TYPE || '').toLowerCase() === 'product' &&
        String(item?.CODE || '').trim()
    );

    const isHeureka = String(order.REFERER || '').toLowerCase().includes('heureka.sk');
    const purchasePrice = num(order.PURCHASE_PRICE, null);

    for (const item of items) {
      const stats = get(String(item.CODE).trim());
      if (isHeureka) {
        if (items.length === 1) stats.single += 1;
        else stats.multi += 1;
      }
    }

    if (items.length === 1 && purchasePrice != null) {
      const amount = num(items[0].AMOUNT, 1) || 1;
      get(String(items[0].CODE).trim()).unitBuys.push(purchasePrice / amount);
    }
  }

  return map;
}

function operationalFor(map, code) {
  const o = map.get(code) || { single: 0, multi: 0, unitBuys: [] };
  return {
    heurekaReferredSingleProductOrders: o.single,
    heurekaReferredMultiProductContains: o.multi,
  };
}

function reportMd(payload) {
  const s = payload.summary;
  const lines = [
    '# Heureka Shadow Optimizer',
    '',
    '**SHADOW ONLY — žiadne zmeny feedu/CPC.**',
    '',
    `Decision window: **${payload.windows.long.from} → ${payload.windows.long.to}** (${payload.windows.long.days}d)`,
    `Freshness window: **${payload.windows.short.from} → ${payload.windows.short.to}** (${payload.windows.short.days}d)`,
    '',
    `BID **${s.BID}** · BASE **${s.BASE}** · WATCH **${s.WATCH}** · EXCLUDE **${s.EXCLUDE}**`,
    `Ekonomika spárovaná: **${s.economicsCoveragePct}%**, nákupná cena známa: **${s.purchasePriceCoveragePct}%**`,
    '',
  ];

  for (const state of ['BID', 'EXCLUDE', 'WATCH']) {
    lines.push(
      `## ${state}`,
      '',
      '| Kód | Produkt | 30d kliky/obj. | 7d kliky/obj. | 30d náklad | 7d náklad | Marža/ks | CPC návrh | Dôvody |',
      '|---|---|---:|---:|---:|---:|---:|---:|---|'
    );

    for (const r of payload.products
      .filter((x) => x.decision.state === state)
      .sort((a, b) => b.performance.long.paidCostExVat - a.performance.long.paidCostExVat)
      .slice(0, 30)) {
      lines.push(
        `| ${r.code} | ${r.name.replace(/\|/g, '/').slice(0, 55)} | ` +
        `${r.performance.long.paidVisits}/${r.performance.long.paidOrders} | ` +
        `${r.performance.short.paidVisits}/${r.performance.short.paidOrders} | ` +
        `${r.performance.long.paidCostExVat.toFixed(2)} € | ` +
        `${r.performance.short.paidCostExVat.toFixed(2)} € | ` +
        `${r.economics.grossMarginPerSale == null ? '—' : r.economics.grossMarginPerSale.toFixed(2) + ' €'} | ` +
        `${r.decision.recommendedCpc == null ? '—' : r.decision.recommendedCpc.toFixed(2) + ' €'} | ` +
        `${r.decision.reasons.join(', ')} |`
      );
    }

    lines.push('');
  }

  return lines.join('\n');
}

function main() {
  const a = args(process.argv.slice(2));

  if (a.apply || a.publish || a.writeFeed) {
    throw new Error('Shadow optimizer refuses production writes');
  }
  if (!a.heureka) throw new Error('Missing --heureka=report.csv');

  const policy = json(a.policy || DEFAULT_POLICY);
  if (policy.mode !== 'shadow') throw new Error('Policy mode must be shadow');

  const rows = readHeurekaRows(a.heureka);
  const reportBounds = bounds(rows);
  const requestedFrom = a.from && date(a.from);
  const requestedTo = a.to && date(a.to);

  const to = requestedTo || reportBounds.last;
  if (!to) throw new Error('Cannot determine report end date');

  const longDays = finite(policy?.multiWindow?.longWindowDays, 30);
  const shortDays = finite(policy?.multiWindow?.shortWindowDays, 7);

  let longFrom = shiftDays(to, -(longDays - 1));
  longFrom = maxDate(longFrom, requestedFrom || reportBounds.first);
  const shortFrom = maxDate(shiftDays(to, -(shortDays - 1)), longFrom);

  const outputDir = a['output-dir'] || path.join(ROOT, 'output');
  const longRaw = performance(rows, longFrom, to);
  const shortRaw = performance(rows, shortFrom, to);
  const codePrefixes = a['code-prefixes'] ? json(a['code-prefixes'], null) : {};
  const eco = economics(outputDir, finite(policy?.economics?.defaultVatPct, 23), codePrefixes);
  const longOrders = orders(a.orders, longFrom, to);
  const shortOrders = orders(a.orders, shortFrom, to);
  const exclusions = json(a.exclusions || DEFAULT_EXCLUSIONS);

  const shortPolicy = {
    ...policy,
    evidence: {
      ...(policy.evidence || {}),
      ...(policy.freshnessEvidence || {}),
    },
  };

  const products = [];
  let joined = 0;
  let known = 0;

  for (const longItem of longRaw.values()) {
    const code = longItem.code;
    const shortItem = shortRaw.get(code) || zeroPerformance(code, longItem.name);
    const longOrder = longOrders.get(code) || { single: 0, multi: 0, unitBuys: [] };

    const current = eco.get(code) || {
      code,
      source: null,
      sources: [],
      name: '',
      ean: '',
      price: null,
      buy: null,
      vat: finite(policy?.economics?.defaultVatPct, 23),
      amb: false,
    };

    const historicalPurchasePrice = med(longOrder.unitBuys);
    const purchasePrice =
      current.buy > 0
        ? current.buy
        : historicalPurchasePrice > 0
          ? historicalPurchasePrice
          : null;
    const purchasePriceSource =
      current.buy > 0
        ? 'current-output'
        : historicalPurchasePrice > 0
          ? 'historical-order-median'
          : null;

    const netSalePrice =
      current.price > 0 ? current.price / (1 + current.vat / 100) : null;
    const grossMargin =
      netSalePrice != null && purchasePrice > 0
        ? netSalePrice - purchasePrice
        : null;

    const existingExclusion = current.ean ? exclusions[current.ean] : null;

    const longPerformance = normalizePerformance(longItem);
    const shortPerformance = normalizePerformance(shortItem);

    if (existingExclusion?.generatedAt) {
      const exclusionDate = date(existingExclusion.generatedAt);
      longPerformance.postExistingExclusionOrders = longItem.daily
        .filter((d) => d.date > exclusionDate)
        .reduce((sum, d) => sum + d.orders, 0);
      shortPerformance.postExistingExclusionOrders = shortItem.daily
        .filter((d) => d.date > exclusionDate)
        .reduce((sum, d) => sum + d.orders, 0);
    }

    const economy = {
      priceInclVat: current.price,
      purchasePriceExVat: purchasePrice,
      grossMarginPerSale: grossMargin,
      ambiguous: current.amb,
    };

    const longOperational = operationalFor(longOrders, code);
    const shortOperational = operationalFor(shortOrders, code);

    const longDecision = decideProduct(
      {
        performance: longPerformance,
        economics: economy,
        operational: longOperational,
        existingExcluded: !!existingExclusion,
      },
      policy
    );

    const shortDecision = decideProduct(
      {
        performance: shortPerformance,
        economics: economy,
        operational: shortOperational,
        existingExcluded: !!existingExclusion,
      },
      shortPolicy
    );

    const decision = reconcileWindows(
      {
        longDecision,
        shortDecision,
        longPerformance,
        shortPerformance,
        longOperational,
        shortOperational,
        existingExcluded: !!existingExclusion,
      },
      policy
    );

    if (current.source) joined += 1;
    if (purchasePrice > 0) known += 1;

    products.push({
      code,
      name: longItem.name || current.name,
      ean: current.ean || '',
      supplierOutput: current.source,
      supplierCode: current.sourceCode || null,
      economicsMatchMethod: current.matchMethod || null,
      economics: {
        priceInclVat: round(current.price),
        purchasePriceExVat: round(purchasePrice),
        purchasePriceSource,
        netSalePrice: round(netSalePrice),
        grossMarginPerSale: round(grossMargin),
        historicalPurchasePriceMedian: round(historicalPurchasePrice),
        historicalPurchasePriceSamples: longOrder.unitBuys.length,
        ambiguous: current.amb,
      },
      performance: {
        long: longPerformance,
        short: shortPerformance,
      },
      operational: {
        long: longOperational,
        short: shortOperational,
      },
      existingExclusion: existingExclusion || null,
      decision,
    });
  }

  const counts = { BID: 0, BASE: 0, WATCH: 0, EXCLUDE: 0 };
  for (const r of products) counts[r.decision.state] += 1;

  const summary = {
    products: products.length,
    ...counts,
    economicsCoveragePct: products.length
      ? round((joined / products.length) * 100, 1)
      : 0,
    purchasePriceCoveragePct: products.length
      ? round((known / products.length) * 100, 1)
      : 0,
  };

  const payload = {
    schemaVersion: 2,
    mode: 'shadow',
    generatedAt: new Date().toISOString(),
    windows: {
      long: { from: longFrom, to, days: longDays },
      short: { from: shortFrom, to, days: shortDays },
    },
    summary,
    products: products.sort(
      (a, b) =>
        b.performance.long.paidCostExVat - a.performance.long.paidCostExVat
    ),
  };

  if (a['out-json']) {
    fs.mkdirSync(path.dirname(path.resolve(a['out-json'])), { recursive: true });
    fs.writeFileSync(a['out-json'], JSON.stringify(payload, null, 2));
  }

  if (a['out-md']) {
    fs.mkdirSync(path.dirname(path.resolve(a['out-md'])), { recursive: true });
    fs.writeFileSync(a['out-md'], reportMd(payload));
  }

  console.log(JSON.stringify({ windows: payload.windows, ...summary }, null, 2));
}

if (require.main === module) {
  try {
    main();
  } catch (e) {
    console.error(String(e.message || e));
    process.exit(2);
  }
}

module.exports = {
  date,
  shiftDays,
  readHeurekaRows,
  bounds,
  performance,
  economics,
  orders,
  reportMd,
};

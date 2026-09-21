'use strict';

const { XMLParser } = require('fast-xml-parser');

function normalizeDate(value) {
  const s = String(value ?? '').trim();
  let m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (m) return `${m[1]}-${m[2]}-${m[3]}`;
  m = s.match(/^(\d{2})[.\/]([0-1]\d)[.\/](\d{4})/);
  if (m) return `${m[3]}-${m[2]}-${m[1]}`;
  return null;
}

function num(value) {
  if (value === null || value === undefined || value === '') return null;
  if (typeof value === 'number') return Number.isFinite(value) ? value : null;
  const parsed = Number(String(value).trim().replace(/\s/g, '').replace(',', '.'));
  return Number.isFinite(parsed) ? parsed : null;
}

function grossTotal(order) {
  const total = order?.TOTAL_PRICE;
  if (total && typeof total === 'object') {
    for (const key of ['WITH_VAT', 'PRICE_WITH_VAT', 'TOTAL_WITH_VAT', '#text']) {
      const n = num(total[key]);
      if (n !== null) return n;
    }
  }
  return num(total);
}

function statusValue(order) {
  const raw = order?.STATUS;
  if (raw && typeof raw === 'object') {
    for (const key of ['NAME', 'CODE', '#text']) {
      if (raw[key] !== undefined) return String(raw[key]).trim();
    }
    return '[structured-status]';
  }
  return String(raw ?? '').trim() || '[empty]';
}

async function main() {
  const url = process.env.PREMIUMSTORE_ORDERS_EXPORT_URL;
  if (!url) throw new Error('Missing PREMIUMSTORE_ORDERS_EXPORT_URL');

  const res = await fetch(url, { headers: { 'user-agent': 'PremiumStore-Agent-Order-Aggregator/1.0' } });
  if (!res.ok) throw new Error(`Orders export HTTP ${res.status}`);
  const xml = await res.text();

  const parser = new XMLParser({
    ignoreAttributes: false,
    trimValues: true,
    parseTagValue: false,
    processEntities: true,
  });
  const parsed = parser.parse(xml);
  let orders = parsed?.ORDERS?.ORDER ?? [];
  if (!Array.isArray(orders)) orders = [orders];

  const daily = new Map();
  const statuses = new Map();
  let missingDate = 0;
  let missingGrossTotal = 0;

  for (const order of orders) {
    const date = normalizeDate(order?.DATE);
    if (!date) {
      missingDate += 1;
      continue;
    }
    const status = statusValue(order);
    statuses.set(status, (statuses.get(status) || 0) + 1);
    const gross = grossTotal(order);
    if (gross === null) missingGrossTotal += 1;

    if (!daily.has(date)) daily.set(date, {
      orders: 0, grossRevenue: 0, pricedOrders: 0,
      activeOrders: 0, activeGrossRevenue: 0,
      cancelledOrders: 0, cancelledGrossRevenue: 0,
      statuses: {}
    });
    const d = daily.get(date);
    const cancelled = status.toLocaleLowerCase('sk').includes('storn');
    d.orders += 1;
    if (cancelled) d.cancelledOrders += 1;
    else d.activeOrders += 1;
    if (gross !== null) {
      d.grossRevenue += gross;
      d.pricedOrders += 1;
      if (cancelled) d.cancelledGrossRevenue += gross;
      else d.activeGrossRevenue += gross;
    }
    d.statuses[status] = (d.statuses[status] || 0) + 1;
  }

  const days = [...daily.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([date, d]) => ({
      date,
      orders: d.orders,
      grossRevenue: Number(d.grossRevenue.toFixed(2)),
      activeOrders: d.activeOrders,
      activeGrossRevenue: Number(d.activeGrossRevenue.toFixed(2)),
      cancelledOrders: d.cancelledOrders,
      cancelledGrossRevenue: Number(d.cancelledGrossRevenue.toFixed(2)),
      pricedOrders: d.pricedOrders,
      statuses: d.statuses,
    }));

  // Aggregate-only output. Never emit order IDs, names, emails, addresses, phone numbers or item-level customer data.
  console.log(JSON.stringify({
    orderCount: orders.length,
    missingDate,
    missingGrossTotal,
    statusCounts: Object.fromEntries([...statuses.entries()].sort((a,b)=>b[1]-a[1])),
    daily: days,
  }, null, 2));
}

main().catch((err) => {
  console.error(String(err.message || err));
  process.exit(2);
});

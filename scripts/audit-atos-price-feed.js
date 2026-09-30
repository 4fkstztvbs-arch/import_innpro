'use strict';

// Read-only comparison of ATOS daytime stock and ordering-price exports.
const BASE_URL = 'https://shop.atoselektro.cz/i6ws/Default.asmx/GetResult';
const FEEDS = {
  stock: 'StoItemQtyFree_El',
  price: 'StoItemPriceOrd_El',
};
const TARGETS = ['ATO-A500004012', 'A500004012', '8594199731811', 'MPU-3500-48'];

function decode(value) {
  return String(value || '').replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'").trim();
}
function field(xml, name) {
  const child = xml.match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)<\\/${name}\\s*>`, 'i'));
  if (child) return decode(child[1]);
  const attr = xml.match(new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, 'i'));
  return attr ? decode(attr[2]) : '';
}
function norm(value) { return String(value || '').trim().toUpperCase(); }

async function fetchFeed(label, resultType, authorization) {
  const url = new URL(BASE_URL);
  url.searchParams.set('resultType', resultType);
  const response = await fetch(url, {
    headers: { Authorization: `Basic ${authorization}`, Accept: 'application/xml,text/xml,*/*' },
    signal: AbortSignal.timeout(180000),
  });
  if (!response.ok) {
    await response.body?.cancel();
    throw new Error(`${label} export returned HTTP ${response.status}`);
  }
  const xml = await response.text();
  if (!/<(?:[\\w.-]+:)?Result\\b/i.test(xml)) throw new Error(`${label} export has no Result root`);
  const records = [];
  const pattern = /<(?:[\w.-]+:)?StoItem\b([^>]*?)(?:\/>|>([\s\S]*?)<\/(?:[\w.-]+:)?StoItem\s*>)/gi;
  for (const match of xml.matchAll(pattern)) {
    const raw = `${match[1] || ''} ${match[2] || ''}`;
    records.push({
      code: norm(field(raw, 'Code')),
      code2: norm(field(raw, 'Code2')),
      partNo: norm(field(raw, 'PartNo')),
      ean: norm(field(raw, 'EAN')),
      stock: field(raw, 'QtyFreeIs') || field(raw, 'QtyFree'),
      priceOrd: field(raw, 'PriceOrd'),
      priceEU: field(raw, 'PriceEU'),
    });
  }
  if (!records.length) throw new Error(`${label} export returned zero StoItem records`);
  return records;
}
function index(records) {
  const map = new Map();
  for (const item of records) {
    for (const id of [item.code, item.code2, item.partNo, item.ean].filter(Boolean)) {
      if (!map.has(id)) map.set(id, item);
    }
  }
  return map;
}
function matchTarget(map) {
  for (const id of TARGETS) if (map.has(norm(id))) return map.get(norm(id));
  return null;
}

async function main() {
  const username = process.env.ATOS_USERNAME;
  const password = process.env.ATOS_PASSWORD;
  if (!username || !password) throw new Error('Missing ATOS Actions credentials.');
  const authorization = Buffer.from(`${username}:${password}`).toString('base64');

  const stock = await fetchFeed('ATOS stock', FEEDS.stock, authorization);
  console.log(`ATOS stock export ${FEEDS.stock}: ${stock.length} records.`);
  const price = await fetchFeed('ATOS price', FEEDS.price, authorization);
  console.log(`ATOS price export ${FEEDS.price}: ${price.length} records.`);

  const stockIndex = index(stock);
  const priceIndex = index(price);
  let both = 0, stockOnly = 0, priceOnly = 0;
  const stockOnlySamples = [], priceOnlySamples = [];
  for (const [id, item] of stockIndex) {
    if (priceIndex.has(id)) both++;
    else if (stockOnlySamples.length < 20) stockOnlySamples.push(`${id} (${item.code})`);
    if (!priceIndex.has(id)) stockOnly++;
  }
  for (const [id, item] of priceIndex) {
    if (!stockIndex.has(id)) {
      priceOnly++;
      if (priceOnlySamples.length < 20) priceOnlySamples.push(`${id} (${item.code})`);
    }
  }
  console.log(`Identity comparison (Code/Code2/PartNo/EAN): shared ${both}; stock-only ${stockOnly}; price-only ${priceOnly}.`);
  console.log(`Stock-only sample: ${stockOnlySamples.join('; ') || 'none'}`);
  console.log(`Price-only sample: ${priceOnlySamples.join('; ') || 'none'}`);

  const targetStock = matchTarget(stockIndex);
  const targetPrice = matchTarget(priceIndex);
  console.log(`Target in stock export: ${targetStock ? `Code=${targetStock.code || '—'}, EAN=${targetStock.ean || '—'}, QtyFreeIs/QtyFree=${targetStock.stock || '—'}` : 'absent'}.`);
  console.log(`Target in price export: ${targetPrice ? `Code=${targetPrice.code || '—'}, EAN=${targetPrice.ean || '—'}, PriceOrd=${targetPrice.priceOrd || '—'}, PriceEU=${targetPrice.priceEU || '—'}` : 'absent'}.`);
}
main().catch((error) => {
  console.error(`ATOS feed comparison failed: ${error.message}`);
  process.exitCode = 1;
});

'use strict';

// Read-only, per-identifier comparison of ATOS daytime stock and price exports.
const API_URL = 'https://shop.atoselektro.cz/i6ws/Default.asmx/GetResultByCode';
const IDENTIFIERS = ['ATO-A500004012', 'A500004012', '8594199731811', 'MPU-3500-48'];
const FEEDS = [
  ['stock', 'StoItemQtyFree_El'],
  ['price-standard', 'StoItemPriceOrd'],
  ['price-el', 'StoItemPriceOrd_El'],
];

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
async function query(resultType, identifier, authorization) {
  const url = new URL(API_URL);
  url.searchParams.set('resultType', resultType);
  url.searchParams.set('code', identifier);
  const response = await fetch(url, {
    headers: { Authorization: `Basic ${authorization}`, Accept: 'application/xml,text/xml,*/*' },
    signal: AbortSignal.timeout(45000),
  });
  if (!response.ok) {
    await response.body?.cancel();
    return { error: `HTTP ${response.status}` };
  }
  const xml = await response.text();
  if (!/<(?:[\w.-]+:)?Result\b/i.test(xml)) return { error: 'invalid XML response' };
  const match = xml.match(/<(?:[\w.-]+:)?StoItem\b([^>]*?)(?:\/>|>([\s\S]*?)<\/(?:[\w.-]+:)?StoItem\s*>)/i);
  if (!match) return { absent: true };
  const raw = `${match[1] || ''} ${match[2] || ''}`;
  const item = {
    code: field(raw, 'Code'), code2: field(raw, 'Code2'),
    partNo: field(raw, 'PartNo'), ean: field(raw, 'EAN'),
    qtyFreeIs: field(raw, 'QtyFreeIs'), qtyFree: field(raw, 'QtyFree'),
    priceOrd: field(raw, 'PriceOrd'), priceEU: field(raw, 'PriceEU'),
  };
  if (![item.code, item.ean, item.partNo, item.code2].some(Boolean)) return { absent: true };
  return { item };
}
async function main() {
  const username = process.env.ATOS_USERNAME;
  const password = process.env.ATOS_PASSWORD;
  if (!username || !password) throw new Error('Missing ATOS Actions credentials.');
  const authorization = Buffer.from(`${username}:${password}`).toString('base64');
  for (const identifier of IDENTIFIERS) {
    for (const [label, resultType] of FEEDS) {
      try {
        const result = await query(resultType, identifier, authorization);
        if (result.error) console.log(`${label} ${resultType} ${identifier}: ${result.error}`);
        else if (result.absent) console.log(`${label} ${resultType} ${identifier}: no StoItem record`);
        else {
          const x = result.item;
          console.log(`${label} ${resultType} ${identifier}: Code=${x.code || '—'}, Code2=${x.code2 || '—'}, EAN=${x.ean || '—'}, PartNo=${x.partNo || '—'}, QtyFreeIs=${x.qtyFreeIs || '—'}, QtyFree=${x.qtyFree || '—'}, PriceOrd=${x.priceOrd || '—'}, PriceEU=${x.priceEU || '—'}`);
        }
      } catch (error) {
        console.log(`${label} ${resultType} ${identifier}: request failed (${error.name})`);
      }
    }
  }
}
main().catch((error) => {
  console.error(`ATOS targeted feed comparison failed: ${error.message}`);
  process.exitCode = 1;
});

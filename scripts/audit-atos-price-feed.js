'use strict';

// Read-only check of ATOS's daytime price export for one product's code variants and EAN.
const API_URL = 'https://shop.atoselektro.cz/i6ws/Default.asmx/GetResultByCode';
const RESULT_TYPE = 'StoItemPriceOrd_El';
const IDENTIFIERS = ['ATO-A500004012', 'A500004012', '8594199731811', 'MPU-3500-48'];

function xmlField(xml, name) {
  const child = xml.match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)<\\/${name}\\s*>`, 'i'));
  if (child) return child[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim();
  const attribute = xml.match(new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, 'i'));
  return attribute ? attribute[2].trim() : '';
}

async function main() {
  const username = process.env.ATOS_USERNAME;
  const password = process.env.ATOS_PASSWORD;
  if (!username || !password) throw new Error('Missing ATOS Actions credentials.');
  const authorization = Buffer.from(`${username}:${password}`).toString('base64');

  for (const identifier of IDENTIFIERS) {
    const url = new URL(API_URL);
    url.searchParams.set('resultType', RESULT_TYPE);
    url.searchParams.set('code', identifier);
    try {
      const response = await fetch(url, {
        headers: { Authorization: `Basic ${authorization}`, Accept: 'application/xml,text/xml,*/*' },
        signal: AbortSignal.timeout(30000),
      });
      if (!response.ok) {
        await response.body?.cancel();
        console.log(`ATOS price feed ${identifier}: HTTP ${response.status}.`);
        continue;
      }
      const xml = await response.text();
      const item = xml.match(/<(?:[\w.-]+:)?StoItem\b([^>]*?)(?:\/>|>([\s\S]*?)<\/(?:[\w.-]+:)?StoItem\s*>)/i);
      if (!item) {
        console.log(`ATOS price feed ${identifier}: no StoItem record.`);
        continue;
      }
      const record = `${item[1] || ''}${item[2] || ''}`;
      const code = xmlField(record, 'Code');
      const ean = xmlField(record, 'EAN');
      const partNo = xmlField(record, 'PartNo');
      if (!code && !ean && !partNo) {
        console.log(`ATOS price feed ${identifier}: empty StoItem response; no product record.`);
        continue;
      }
      console.log(`ATOS price feed ${identifier}: found Code=${code || '—'}, EAN=${ean || '—'}, PartNo=${partNo || '—'}, PriceOrd=${xmlField(record, 'PriceOrd') || '—'}, PriceEU=${xmlField(record, 'PriceEU') || '—'}.`);
    } catch (error) {
      console.log(`ATOS price feed ${identifier}: request failed (${error.name}).`);
    }
  }
}

main().catch((error) => {
  console.error(`ATOS price feed audit failed: ${error.message}`);
  process.exitCode = 1;
});

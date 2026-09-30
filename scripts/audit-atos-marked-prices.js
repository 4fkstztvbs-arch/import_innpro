'use strict';

const fs = require('node:fs');
const API_URL = 'https://shop.atoselektro.cz/i6ws/Default.asmx/GetResult';
const RESULT_TYPE = 'StoItemPriceOrd';

function decode(value) {
  return String(value || '').replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'").trim();
}
function field(xml, name) {
  const child = xml.match(new RegExp('<' + name + '\\b[^>]*>([\\s\\S]*?)<\\/' + name + '\\s*>', 'i'));
  if (child) return decode(child[1]);
  const attrs = [...xml.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)].find(m => m[1].toLowerCase() === name.toLowerCase());
  return attrs ? decode(attrs[2] || attrs[3]) : '';
}
function normalizedName(value) {
  return decode(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, ' ').trim().replace(/\s+/g, ' ');
}
function markedProducts(xml) {
  const products = [];
  for (const match of xml.matchAll(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM\s*>/gi)) {
    const raw = match[0];
    if (normalizedName(field(raw, 'AVAILABILITY')) !== 'vypredane' ||
        normalizedName(field(raw, 'VISIBILITY')) !== 'detailonly') continue;
    products.push({ name: field(raw, 'NAME'), code: field(raw, 'CODE'), ean: field(raw, 'EAN') });
  }
  return products;
}
async function main() {
  const username = process.env.ATOS_USERNAME;
  const password = process.env.ATOS_PASSWORD;
  if (!username || !password) throw new Error('Missing ATOS Actions credentials.');
  const products = markedProducts(fs.readFileSync('output/atos.xml', 'utf8'));
  if (!products.length) throw new Error('No sold-out detailOnly products found in current output XML.');
  console.log('Marked products loaded from current output: ' + products.length);

  const url = new URL(API_URL);
  url.searchParams.set('resultType', RESULT_TYPE);
  const authorization = Buffer.from(username + ':' + password).toString('base64');
  let response;
  try {
    response = await fetch(url, {
      headers: { Authorization: 'Basic ' + authorization, Accept: 'application/xml,text/xml,*/*' },
      signal: AbortSignal.timeout(180000),
    });
  } catch (error) {
    throw new Error('Full price export request failed: ' + error.name + (error.cause && error.cause.code ? ' (' + error.cause.code + ')' : ''));
  }
  if (!response.ok) {
    await response.body?.cancel();
    throw new Error('Full price export returned HTTP ' + response.status);
  }
  const feed = await response.text();
  if (!/<(?:[\w.-]+:)?Result\b/i.test(feed)) throw new Error('Full price export has no Result root.');
  const byName = new Map();
  const recordPattern = /<(?:[\w.-]+:)?StoItem\b([^>]*?)(?:\/>|>([\s\S]*?)<\/(?:[\w.-]+:)?StoItem\s*>)/gi;
  let records = 0, names = 0;
  for (const match of feed.matchAll(recordPattern)) {
    records++;
    const raw = (match[1] || '') + ' ' + (match[2] || '');
    const name = field(raw, 'Name');
    const key = normalizedName(name);
    if (!key) continue;
    names++;
    if (!byName.has(key)) byName.set(key, []);
    byName.get(key).push({ name, priceOrd: field(raw, 'PriceOrd'), priceEU: field(raw, 'PriceEU') });
  }
  if (!records || !names) throw new Error('Price export contains no parsable product names.');

  let found = 0, absent = 0, ambiguous = 0;
  console.log('ATOS price export ' + RESULT_TYPE + ': ' + records + ' records; ' + names + ' with names.');
  for (const product of products) {
    const hits = byName.get(normalizedName(product.name)) || [];
    if (hits.length) found++;
    else absent++;
    if (hits.length > 1) ambiguous++;
    console.log((hits.length ? 'NAME_FOUND' : 'NAME_ABSENT') + '\t' + product.name + '\tmatches=' + hits.length +
      (hits.length === 1 ? '\tPriceOrd=' + (hits[0].priceOrd || '—') + '\tPriceEU=' + (hits[0].priceEU || '—') : ''));
  }
  console.log('SUMMARY\tmarked=' + products.length + '\tname-found=' + found + '\tname-absent=' + absent + '\tambiguous=' + ambiguous);
}
main().catch(error => {
  console.error('ATOS original-name price audit failed: ' + error.message);
  process.exitCode = 1;
});

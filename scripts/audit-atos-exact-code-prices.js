'use strict';

const fs = require('node:fs');
const API_URL = 'https://shop.atoselektro.cz/i6ws/Default.asmx/GetResultByCode';
const PRICE_TYPES = ['StoItemPriceOrd', 'StoItemPriceOrd_El'];
const CONCURRENCY = 4;

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
function markedProducts(xml) {
  const products = [];
  for (const match of xml.matchAll(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM\s*>/gi)) {
    const raw = match[0];
    if (field(raw, 'AVAILABILITY').toLowerCase() !== 'vypredané' ||
        field(raw, 'VISIBILITY').toLowerCase() !== 'detailonly') continue;
    const code = field(raw, 'CODE');
    if (!code) throw new Error('A marked product has no CODE.');
    products.push({ code, name: field(raw, 'NAME'), ean: field(raw, 'EAN') });
  }
  return products;
}
async function query(resultType, exactCode, authorization) {
  const url = new URL(API_URL);
  url.searchParams.set('resultType', resultType);
  url.searchParams.set('code', exactCode);
  const response = await fetch(url, {
    headers: { Authorization: 'Basic ' + authorization, Accept: 'application/xml,text/xml,*/*' },
    signal: AbortSignal.timeout(45000),
  });
  if (!response.ok) {
    await response.body?.cancel();
    return { error: 'HTTP ' + response.status };
  }
  const xml = await response.text();
  if (!/<(?:[\w.-]+:)?Result\b/i.test(xml)) return { error: 'invalid XML response' };
  const match = xml.match(/<(?:[\w.-]+:)?StoItem\b([^>]*?)(?:\/>|>([\s\S]*?)<\/(?:[\w.-]+:)?StoItem\s*>)/i);
  if (!match) return { absent: true };
  const raw = (match[1] || '') + ' ' + (match[2] || '');
  const returnedCode = field(raw, 'Code');
  if (!returnedCode) return { absent: true };
  if (returnedCode.trim().toUpperCase() !== exactCode.trim().toUpperCase()) {
    return { mismatch: returnedCode };
  }
  return { item: { code: returnedCode, priceOrd: field(raw, 'PriceOrd'), priceEU: field(raw, 'PriceEU') } };
}
async function audit(product, authorization) {
  let errors = 0;
  let mismatch = '';
  for (const type of PRICE_TYPES) {
    try {
      const result = await query(type, product.code, authorization);
      if (result.error) { errors++; continue; }
      if (result.item) return { product, found: true, type, item: result.item };
      if (result.mismatch) mismatch = result.mismatch;
    } catch (error) {
      errors++;
    }
  }
  return { product, found: false, incomplete: errors > 0, errors, mismatch };
}
async function main() {
  const username = process.env.ATOS_USERNAME;
  const password = process.env.ATOS_PASSWORD;
  if (!username || !password) throw new Error('Missing ATOS Actions credentials.');
  const products = markedProducts(fs.readFileSync('output/atos.xml', 'utf8'));
  if (!products.length) throw new Error('No Vypredané + detailOnly products in current output XML.');
  console.log('Exact-code audit; marked products in live XML: ' + products.length);
  const authorization = Buffer.from(username + ':' + password).toString('base64');
  const results = new Array(products.length);
  let next = 0;
  async function worker() {
    while (true) {
      const index = next++;
      if (index >= products.length) return;
      results[index] = await audit(products[index], authorization);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  let found = 0, absent = 0, incomplete = 0, mismatch = 0;
  for (const result of results) {
    const p = result.product;
    if (result.found) {
      found++;
      console.log('PRICE_FOUND\t' + p.code + '\t' + p.name + '\t' + result.type + '\tPriceOrd=' + (result.item.priceOrd || '—') + '\tPriceEU=' + (result.item.priceEU || '—'));
    } else if (result.incomplete) {
      incomplete++;
      console.log('CHECK_INCOMPLETE\t' + p.code + '\t' + p.name + '\trequest-errors=' + result.errors);
    } else if (result.mismatch) {
      mismatch++;
      console.log('CODE_MISMATCH\t' + p.code + '\t' + p.name + '\treturned-code=' + result.mismatch);
    } else {
      absent++;
      console.log('PRICE_ABSENT\t' + p.code + '\t' + p.name);
    }
  }
  console.log('SUMMARY\tmarked=' + products.length + '\tprice-found=' + found + '\tprice-absent=' + absent + '\tcode-mismatch=' + mismatch + '\tincomplete=' + incomplete);
}
main().catch(error => {
  console.error('ATOS exact-code audit failed: ' + error.message);
  process.exitCode = 1;
});

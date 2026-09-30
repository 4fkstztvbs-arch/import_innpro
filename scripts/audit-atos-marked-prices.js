'use strict';

const fs = require('node:fs');
const XML_PATH = 'output/atos.xml';
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
function norm(value) { return String(value || '').trim().toUpperCase(); }
function shopItems(xml) {
  const result = [];
  const re = /<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM\s*>/gi;
  for (const match of xml.matchAll(re)) {
    const raw = match[0];
    if (norm(field(raw, 'AVAILABILITY')) !== 'VYPREDANÉ' || norm(field(raw, 'VISIBILITY')) !== 'DETAILONLY') continue;
    result.push({
      code: field(raw, 'CODE'),
      ean: field(raw, 'EAN'),
      partNo: field(raw, 'PART_NUMBER'),
      name: field(raw, 'NAME'),
    });
  }
  return result;
}
async function query(resultType, identifier, authorization) {
  const url = new URL(API_URL);
  url.searchParams.set('resultType', resultType);
  url.searchParams.set('code', identifier);
  const response = await fetch(url, {
    headers: { Authorization: 'Basic ' + authorization, Accept: 'application/xml,text/xml,*/*' },
    signal: AbortSignal.timeout(45000),
  });
  if (!response.ok) {
    await response.body?.cancel();
    return { error: 'HTTP ' + response.status };
  }
  const xml = await response.text();
  if (!/<(?:[\w.-]+:)?Result\b/i.test(xml)) return { error: 'invalid XML' };
  const m = xml.match(/<(?:[\w.-]+:)?StoItem\b([^>]*?)(?:\/>|>([\s\S]*?)<\/(?:[\w.-]+:)?StoItem\s*>)/i);
  if (!m) return { absent: true };
  const raw = (m[1] || '') + ' ' + (m[2] || '');
  const item = {
    code: field(raw, 'Code'), code2: field(raw, 'Code2'),
    ean: field(raw, 'EAN'), partNo: field(raw, 'PartNo'),
    priceOrd: field(raw, 'PriceOrd'), priceEU: field(raw, 'PriceEU'),
  };
  if (![item.code, item.code2, item.ean, item.partNo].some(Boolean)) return { absent: true };
  return { item };
}
async function auditProduct(product, authorization) {
  const identifiers = [...new Set([
    product.code,
    product.code.replace(/^ATO-/i, ''),
    product.ean,
    product.partNo,
  ].map(norm).filter(Boolean))];
  let errors = 0;
  for (const identifier of identifiers) {
    for (const resultType of PRICE_TYPES) {
      try {
        const result = await query(resultType, identifier, authorization);
        if (result.error) { errors++; continue; }
        if (!result.item) continue;
        const ids = new Set([result.item.code, result.item.code2, result.item.ean, result.item.partNo].map(norm).filter(Boolean));
        if (!identifiers.some(id => ids.has(id))) continue;
        return { product, found: true, resultType, identifier, item: result.item };
      } catch (error) {
        errors++;
      }
    }
  }
  return { product, found: false, incomplete: errors > 0, errors };
}
async function main() {
  const username = process.env.ATOS_USERNAME;
  const password = process.env.ATOS_PASSWORD;
  if (!username || !password) throw new Error('Missing ATOS Actions credentials.');
  const products = shopItems(fs.readFileSync(XML_PATH, 'utf8'));
  if (!products.length) throw new Error('No Vypredané + detailOnly products found in output XML.');
  console.log('Products selected from current output XML: ' + products.length);
  const authorization = Buffer.from(username + ':' + password).toString('base64');
  const results = new Array(products.length);
  let next = 0;
  async function worker() {
    while (true) {
      const i = next++;
      if (i >= products.length) return;
      results[i] = await auditProduct(products[i], authorization);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  let found = 0, absent = 0, incomplete = 0;
  for (const r of results) {
    const p = r.product;
    if (r.found) {
      found++;
      console.log('PRICE_FOUND\t' + p.code + '\t' + p.ean + '\t' + r.resultType + '\t' + r.identifier + '\t' + (r.item.priceOrd || r.item.priceEU || 'price-field-empty'));
    } else if (r.incomplete) {
      incomplete++;
      console.log('PRICE_CHECK_INCOMPLETE\t' + p.code + '\t' + p.ean + '\trequest-errors=' + r.errors);
    } else {
      absent++;
      console.log('PRICE_ABSENT\t' + p.code + '\t' + p.ean);
    }
  }
  console.log('SUMMARY\tselected=' + products.length + '\tprice-found=' + found + '\tprice-absent=' + absent + '\tincomplete=' + incomplete);
}
main().catch(error => {
  console.error('ATOS marked-products price audit failed: ' + error.message);
  process.exitCode = 1;
});

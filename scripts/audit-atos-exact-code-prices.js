'use strict';

const fs = require('node:fs');
const API_URL = 'https://shop.atoselektro.cz/i6ws/Default.asmx/GetResultByCode';
const STOCK_TYPE = 'StoItemQtyFree_El';
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
    products.push({ code, name: field(raw, 'NAME') });
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
  if (returnedCode.trim().toUpperCase() !== exactCode.trim().toUpperCase()) return { mismatch: returnedCode };
  return { item: {
    code: returnedCode,
    qtyFreeIs: field(raw, 'QtyFreeIs'),
    qtyFree: field(raw, 'QtyFree'),
    priceOrd: field(raw, 'PriceOrd'),
    priceEU: field(raw, 'PriceEU'),
  } };
}
async function audit(product, authorization) {
  let errors = 0, codeMismatches = 0;
  let stock = null, price = null;
  const stockResult = await query(STOCK_TYPE, product.code, authorization).catch(() => ({ error: 'request failed' }));
  if (stockResult.error) errors++;
  else if (stockResult.item) stock = stockResult.item;
  else if (stockResult.mismatch) codeMismatches++;

  for (const type of PRICE_TYPES) {
    const result = await query(type, product.code, authorization).catch(() => ({ error: 'request failed' }));
    if (result.error) { errors++; continue; }
    if (result.item) { price = { ...result.item, type }; break; }
    if (result.mismatch) codeMismatches++;
  }
  return { product, stock, price, errors, codeMismatches };
}
function stockState(item) {
  if (!item) return 'absent';
  const value = item.qtyFreeIs || item.qtyFree;
  if (!value) return 'record-no-quantity';
  if (/^(1|true|yes)$/i.test(value.trim())) return 'available';
  const number = Number(value.replace(',', '.'));
  if (Number.isFinite(number)) return number > 0 ? 'available' : 'zero';
  if (/^(0|false|no)$/i.test(value.trim())) return 'zero';
  return 'unknown:' + value;
}
async function main() {
  const username = process.env.ATOS_USERNAME;
  const password = process.env.ATOS_PASSWORD;
  if (!username || !password) throw new Error('Missing ATOS Actions credentials.');
  const products = markedProducts(fs.readFileSync('output/atos.xml', 'utf8'));
  if (!products.length) throw new Error('No Vypredané + detailOnly products in current output XML.');
  console.log('Exact imported-code comparison; marked products: ' + products.length);
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

  let stockRecords = 0, stockAvailable = 0, stockZero = 0, stockAbsent = 0;
  let priceFound = 0, priceAbsent = 0, incomplete = 0, mismatches = 0;
  const conflictCodes = [];
  for (const result of results) {
    const p = result.product;
    const ss = stockState(result.stock);
    if (result.stock) stockRecords++;
    if (ss === 'available') { stockAvailable++; conflictCodes.push(p.code); }
    if (ss === 'zero') stockZero++;
    if (ss === 'absent') stockAbsent++;
    if (result.price) priceFound++; else priceAbsent++;
    if (result.errors) incomplete++;
    mismatches += result.codeMismatches;
    console.log('ITEM\t' + p.code + '\tstock=' + ss +
      (result.stock ? '(QtyFreeIs=' + (result.stock.qtyFreeIs || '—') + ',QtyFree=' + (result.stock.qtyFree || '—') + ')' : '') +
      '\tprice=' + (result.price ? 'found(' + result.price.type + ',PriceOrd=' + (result.price.priceOrd || '—') + ')' : 'absent') +
      '\terrors=' + result.errors + '\t' + p.name);
  }
  console.log('SUMMARY\tmarked=' + products.length + '\tstock-records=' + stockRecords +
    '\tstock-available=' + stockAvailable + '\tstock-zero=' + stockZero + '\tstock-absent=' + stockAbsent +
    '\tprice-found=' + priceFound + '\tprice-absent=' + priceAbsent + '\tincomplete=' + incomplete +
    '\tcode-mismatches=' + mismatches);
  console.log('SOLDOUT_XML_BUT_STOCK_AVAILABLE\t' + (conflictCodes.join(',') || 'none'));
}
main().catch(error => {
  console.error('ATOS exact-code stock/price comparison failed: ' + error.message);
  process.exitCode = 1;
});

'use strict';

// Refreshes availability in the existing ATOS Shoptet XML from ATOS's daytime stock export.
// Prices and product content remain owned by the nightly full-feed transformation.

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const XML_PATH = path.join(ROOT, 'output', 'atos.xml');
const STATE_PATH = path.join(ROOT, 'data', 'availability-state', 'atos-live.json');
const STOCK_URL = 'https://shop.atoselektro.cz/i6ws/Default.asmx/GetResult?resultType=StoItemQtyFree_El';
const OUT_OF_STOCK = process.env.ATOS_OUT_OF_STOCK_LABEL || 'Vypredané';
const MIN_FEED_RECORDS = Number(process.env.ATOS_STOCK_MIN_RECORDS || '100');
const MIN_MATCH_RATIO = Number(process.env.ATOS_STOCK_MIN_MATCH_RATIO || '0.05');

function decodeXml(value) {
  return String(value || '')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'").replace(/&amp;/g, '&').trim();
}

function xmlField(xml, name) {
  const child = xml.match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)<\\/${name}\\s*>`, 'i'));
  if (child) return decodeXml(child[1]);
  const attr = xml.match(new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, 'i'));
  return attr ? decodeXml(attr[2]) : '';
}

function normalized(value) {
  return String(value || '').trim().toUpperCase();
}

function identity(code) {
  return `code:${normalized(code)}`;
}

function readState() {
  try {
    const state = JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
    if (state.version !== 1 || !state.managedVisibility || typeof state.managedVisibility !== 'object') {
      throw new Error('unexpected state format');
    }
    return state.managedVisibility;
  } catch (error) {
    if (error.code === 'ENOENT') return {};
    throw new Error(`Cannot read ATOS availability state: ${error.message}`);
  }
}

function readShopItems(xml) {
  const items = [...xml.matchAll(/<SHOPITEM\b[^>]*>([\s\S]*?)<\/SHOPITEM\s*>/gi)];
  if (!/<SHOP(?:\s[^>]*)?>[\s\S]*<\/SHOP\s*>/i.test(xml) || items.length < 100) {
    throw new Error(`Refusing invalid or unexpectedly small ATOS output (${items.length} products).`);
  }
  return items;
}

function replaceTag(item, name, value) {
  const tag = new RegExp(`<${name}\\b[^>]*>[\\s\\S]*?<\\/${name}\\s*>`, 'i');
  const replacement = `<${name}>${value}</${name}>`;
  if (tag.test(item)) return item.replace(tag, replacement);
  return item.replace(/<\/SHOPITEM\s*>/i, `  ${replacement}\n</SHOPITEM>`);
}

async function fetchStock() {
  const username = process.env.ATOS_USERNAME;
  const password = process.env.ATOS_PASSWORD;
  if (!username || !password) throw new Error('Missing ATOS_USERNAME or ATOS_PASSWORD Actions secret.');

  const authorization = Buffer.from(`${username}:${password}`).toString('base64');
  const response = await fetch(STOCK_URL, {
    headers: {
      Authorization: `Basic ${authorization}`,
      Accept: 'application/xml,text/xml,*/*',
      'User-Agent': 'PremiumStore-ATOS-availability-sync',
    },
    signal: AbortSignal.timeout(120000),
  });
  if (!response.ok) {
    await response.body?.cancel();
    throw new Error(`ATOS daytime stock export returned HTTP ${response.status}.`);
  }

  const source = await response.text();
  if (!/<(?:[\w.-]+:)?Result\b/i.test(source)) throw new Error('ATOS stock export has no Result root.');
  const itemPattern = /<(?:[\w.-]+:)?StoItem\b([^>]*?)(?:\/>|>([\s\S]*?)<\/(?:[\w.-]+:)?StoItem\s*>)/gi;
  const stockByCode = new Map();
  const stockByEan = new Map();
  let recordCount = 0;
  let badQuantities = 0;

  for (const match of source.matchAll(itemPattern)) {
    recordCount++;
    const record = `${match[1] || ''}${match[2] || ''}`;
    const code = xmlField(record, 'Code');
    const ean = xmlField(record, 'EAN');
    const rawQty = xmlField(record, 'QtyFreeIs') || xmlField(record, 'QtyFree');
    const qty = Number(rawQty.replace(',', '.'));
    if (!code) throw new Error(`ATOS stock record ${recordCount} has no product code.`);
    if (!rawQty || !Number.isFinite(qty) || qty < 0) {
      throw new Error(`ATOS stock record ${recordCount} has an invalid stock availability value.`);
    }
    const entry = { code: normalized(code), ean: normalized(ean), qty };
    if (stockByCode.has(entry.code)) throw new Error(`Duplicate ATOS stock code ${entry.code}.`);
    stockByCode.set(entry.code, entry);
    if (entry.ean) stockByEan.set(entry.ean, entry);
    if (qty <= 0) badQuantities++;
  }

  if (recordCount < MIN_FEED_RECORDS) {
    throw new Error(`ATOS stock export has only ${recordCount} products; minimum is ${MIN_FEED_RECORDS}.`);
  }
  return { stockByCode, stockByEan, recordCount, zeroQtyRecords: badQuantities };
}

async function main() {
  if (!Number.isInteger(MIN_FEED_RECORDS) || MIN_FEED_RECORDS < 1) {
    throw new Error('ATOS_STOCK_MIN_RECORDS must be a positive integer.');
  }
  if (!Number.isFinite(MIN_MATCH_RATIO) || MIN_MATCH_RATIO <= 0 || MIN_MATCH_RATIO > 1) {
    throw new Error('ATOS_STOCK_MIN_MATCH_RATIO must be greater than 0 and at most 1.');
  }

  const xml = fs.readFileSync(XML_PATH, 'utf8');
  const items = readShopItems(xml);
  const stock = await fetchStock();
  const oldManaged = readState();
  const nextManaged = {};
  let matched = 0;
  let inStockCount = 0;
  let outOfStockCount = 0;
  let changedAvailability = 0;
  let changedVisibility = 0;

  const output = xml.replace(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM\s*>/gi, (fullItem) => {
    const code = xmlField(fullItem, 'CODE');
    if (!code) throw new Error('ATOS output contains a product without CODE.');
    const ean = normalized(xmlField(fullItem, 'EAN'));
    const key = identity(code);
    const record = stock.stockByCode.get(normalized(code)) || (ean ? stock.stockByEan.get(ean) : null);
    if (record) matched++;
    const available = Boolean(record && record.qty > 0);
    if (available) inStockCount++; else outOfStockCount++;

    const beforeAvailability = xmlField(fullItem, 'AVAILABILITY');
    const beforeVisibility = xmlField(fullItem, 'VISIBILITY') || 'visible';
    const hasName = Boolean(xmlField(fullItem, 'NAME'));
    let nextVisibility = beforeVisibility;

    if (!available && hasName && ['visible', 'detailOnly'].includes(beforeVisibility)) {
      if (!Object.prototype.hasOwnProperty.call(oldManaged, key)) {
        nextManaged[key] = beforeVisibility;
      } else {
        nextManaged[key] = oldManaged[key];
      }
      nextVisibility = 'detailOnly';
    } else if (available && hasName && Object.prototype.hasOwnProperty.call(oldManaged, key)) {
      nextVisibility = oldManaged[key];
    } else if (Object.prototype.hasOwnProperty.call(oldManaged, key)) {
      nextManaged[key] = oldManaged[key];
    }

    const nextAvailability = available ? 'Skladom' : OUT_OF_STOCK;
    let updated = fullItem;
    if (beforeAvailability !== nextAvailability) {
      updated = replaceTag(updated, 'AVAILABILITY', nextAvailability);
      changedAvailability++;
    }
    if (beforeVisibility !== nextVisibility) {
      updated = replaceTag(updated, 'VISIBILITY', nextVisibility);
      changedVisibility++;
    }
    return updated;
  });

  const minMatches = Math.max(100, Math.ceil(items.length * MIN_MATCH_RATIO));
  if (matched < minMatches) {
    throw new Error(`Only ${matched}/${items.length} ATOS output products matched the stock export; minimum is ${minMatches}. No files were changed.`);
  }

  fs.mkdirSync(path.dirname(STATE_PATH), { recursive: true });
  const stateText = JSON.stringify({ version: 1, managedVisibility: nextManaged }, null, 2) + '\n';
  const stateChanged = !fs.existsSync(STATE_PATH) || fs.readFileSync(STATE_PATH, 'utf8') !== stateText;
  const xmlChanged = output !== xml;
  if (xmlChanged) {
    const tempPath = `${XML_PATH}.tmp`;
    fs.writeFileSync(tempPath, output);
    fs.renameSync(tempPath, XML_PATH);
  }
  if (stateChanged) {
    const tempPath = `${STATE_PATH}.tmp`;
    fs.writeFileSync(tempPath, stateText);
    fs.renameSync(tempPath, STATE_PATH);
  }

  console.log(`ATOS daytime stock: ${stock.recordCount} supplier records, ${matched}/${items.length} matched; ${inStockCount} available, ${outOfStockCount} sold out; ${changedAvailability} availability and ${changedVisibility} visibility changes${xmlChanged || stateChanged ? '' : ' (no file changes)'}.`);
}

main().catch((error) => {
  console.error(`ATOS daytime availability refresh failed: ${error.message}`);
  process.exitCode = 1;
});

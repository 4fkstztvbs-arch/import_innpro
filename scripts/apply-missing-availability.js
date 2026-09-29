'use strict';

// Retains products removed from one supplier's generated feed as minimal tombstones.
// Shoptet receives the product in the same import, with unavailable availability and
// detailOnly visibility. SKLADBB is intentionally unsupported and must not call this.

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const SALE_STATE_PATH = path.join(ROOT, 'data', 'vypredaj.json');
const SALE_SOURCE_CACHE_PATH = path.join(ROOT, 'data', 'sklbb-source-items.json');
const MIN_COUNT_RATIO = Number(process.env.MISSING_PRODUCT_MIN_RATIO || '0.70');
const UNAVAILABLE_LABEL = process.env.MISSING_PRODUCT_AVAILABILITY || 'Vypredané';
const DETAIL_ONLY = 'detailOnly';

function arg(name) {
  const prefix = `--${name}=`;
  const found = process.argv.find(value => value.startsWith(prefix));
  return found ? found.slice(prefix.length) : '';
}

function decodeXml(value) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'").replace(/&amp;/g, '&').trim();
}

function xmlText(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function field(item, name) {
  const match = item.match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)<\\/${name}>`, 'i'));
  return match ? decodeXml(match[1]) : '';
}

function clearSaleState(block, regularPrice = '') {
  let updated = block;
  for (const name of ['ACTION', 'CUSTOM1']) {
    const legacy = new RegExp(`<${name}\\b[^>]*>[\\s\\S]*?<\\/${name}>`, 'i');
    if (legacy.test(updated)) updated = updated.replace(legacy, `<${name}>0</${name}>`);
    else {
      const flag = new RegExp(`(<FLAG\\b[^>]*>[\\s\\S]*?<CODE>\\s*${name.toLowerCase()}\\s*<\\/CODE>[\\s\\S]*?<ACTIVE>)[\\s\\S]*?(<\\/ACTIVE>[\\s\\S]*?<\\/FLAG>)`, 'i');
      if (flag.test(updated)) updated = updated.replace(flag, (_m, before, after) => `${before}0${after}`);
      else {
        const flags = updated.match(/<FLAGS\b[^>]*>[\s\S]*?<\/FLAGS>/i);
        if (flags) updated = updated.replace(flags[0], flags[0].replace('</FLAGS>', `<${name}>0</${name}></FLAGS>`));
        else updated = updated.replace('</SHOPITEM>', `<FLAGS><${name}>0</${name}></FLAGS>\n  </SHOPITEM>`);
      }
    }
  }
  if (regularPrice) {
    const escaped = xmlText(regularPrice);
    for (const name of ['STANDARD_PRICE', 'ACTION_PRICE']) {
      const re = new RegExp(`<${name}\\b[^>]*>[\\s\\S]*?<\\/${name}>`, 'i');
      if (re.test(updated)) updated = updated.replace(re, `<${name}>${escaped}</${name}>`);
      else updated = updated.replace('</SHOPITEM>', `<${name}>${escaped}</${name}>\n  </SHOPITEM>`);
    }
  }
  return updated;
}

function productIdentity(code, ean) {
  const normalizedEan = String(ean || '').replace(/\s+/g, '').toUpperCase();
  return normalizedEan ? `ean:${normalizedEan}` : `code:${String(code).trim().toUpperCase()}`;
}

function readState(statePath) {
  try {
    const state = JSON.parse(fs.readFileSync(statePath, 'utf8'));
    if (state.version !== 2 || !Array.isArray(state.activeProducts)
        || !Array.isArray(state.missingProducts) || !Number.isInteger(state.activeItemCount)) {
      throw new Error('invalid state shape');
    }
    return state;
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw new Error(`Cannot read ${path.relative(ROOT, statePath)}: ${error.message}`);
  }
}

function main() {
  const supplier = arg('supplier').toLowerCase();
  const xmlPath = path.resolve(ROOT, arg('xml'));
  if (!supplier || !arg('xml')) throw new Error('Usage: node scripts/apply-missing-availability.js --supplier=<name> --xml=output/<name>.xml');
  if (supplier === 'skladbb') throw new Error('SKLADBB is explicitly excluded from missing-availability processing.');
  if (!xmlPath.startsWith(`${path.join(ROOT, 'output')}${path.sep}`)) throw new Error('XML path must be inside output/.');
  if (!Number.isFinite(MIN_COUNT_RATIO) || MIN_COUNT_RATIO <= 0 || MIN_COUNT_RATIO > 1) {
    throw new Error(`MISSING_PRODUCT_MIN_RATIO must be > 0 and <= 1 (got ${MIN_COUNT_RATIO}).`);
  }

  const xml = fs.readFileSync(xmlPath, 'utf8');
  if (!/<SHOP(?:\s[^>]*)?>[\s\S]*<\/SHOP>/i.test(xml)) throw new Error(`${supplier}: missing or incomplete SHOP root.`);
  const rows = [...xml.matchAll(/<SHOPITEM\b[^>]*>([\s\S]*?)<\/SHOPITEM>/gi)].map(match => match[1]);
  if (rows.length === 0) throw new Error(`${supplier}: refusing an empty supplier feed.`);

  const currentByIdentity = new Map();
  const existingTombstones = new Map();
  let activeItemCount = 0;
  for (let index = 0; index < rows.length; index++) {
    const code = field(rows[index], 'CODE');
    if (!code) throw new Error(`${supplier}: SHOPITEM ${index + 1} has no CODE.`);
    const ean = field(rows[index], 'EAN');
    const key = productIdentity(code, ean);
    const isTombstone = !field(rows[index], 'NAME')
      && field(rows[index], 'VISIBILITY') === DETAIL_ONLY
      && field(rows[index], 'AVAILABILITY') === UNAVAILABLE_LABEL;
    if (isTombstone) {
      existingTombstones.set(key, { key, code, ean });
      continue;
    }
    if (currentByIdentity.has(key)) throw new Error(`${supplier}: duplicate product identity ${code}${ean ? ` / EAN ${ean}` : ''}.`);
    currentByIdentity.set(key, { key, code, ean });
    activeItemCount++;
  }
  if (activeItemCount === 0) throw new Error(`${supplier}: no active product rows in supplier feed.`);
  for (const key of currentByIdentity.keys()) existingTombstones.delete(key);

  const statePath = path.join(ROOT, 'data', 'availability-state', `${supplier}.json`);
  const saleState = fs.existsSync(SALE_STATE_PATH) ? JSON.parse(fs.readFileSync(SALE_STATE_PATH, 'utf8')) : { items: {} };
  const saleSourceCache = fs.existsSync(SALE_SOURCE_CACHE_PATH) ? JSON.parse(fs.readFileSync(SALE_SOURCE_CACHE_PATH, 'utf8')) : {};
  const prior = readState(statePath);
  if (prior?.activeItemCount && activeItemCount / prior.activeItemCount < MIN_COUNT_RATIO) {
    throw new Error(`${supplier}: product count dropped to ${(100 * activeItemCount / prior.activeItemCount).toFixed(1)}% of the last complete feed (${activeItemCount}/${prior.activeItemCount}); refusing to classify products as missing.`);
  }

  const nextMissing = new Map();
  for (const [key, product] of existingTombstones) nextMissing.set(key, product);
  if (prior) {
    for (const product of prior.missingProducts) {
      if (!currentByIdentity.has(product.key)) nextMissing.set(product.key, product);
    }
    for (const product of prior.activeProducts) {
      if (!currentByIdentity.has(product.key)) nextMissing.set(product.key, product);
    }
  }

  const tombstones = [...nextMissing.entries()].filter(([key]) => !existingTombstones.has(key))
    .map(([, product]) => product).sort((a, b) => a.code.localeCompare(b.code)).map(product => {
      const soldOutSale = saleState.items?.[product.code]?.quantity === 0;
      let tombstone = `  <SHOPITEM>\n    <CODE>${xmlText(product.code)}</CODE>${product.ean ? `\n    <EAN>${xmlText(product.ean)}</EAN>` : ''}\n    <AVAILABILITY>${xmlText(UNAVAILABLE_LABEL)}</AVAILABILITY>\n    <VISIBILITY>${DETAIL_ONLY}</VISIBILITY>\n  </SHOPITEM>`;
      if (soldOutSale) {
        const source = saleSourceCache[product.code]?.block || '';
        const regular = source ? Number(field(source, 'PRICE_VAT')) : 0;
        const supplierAction = source ? Number(field(source, 'ACTION_PRICE')) : 0;
        const restoredPrice = supplierAction > 0 && supplierAction < regular ? supplierAction : regular;
        tombstone = clearSaleState(tombstone, Number.isFinite(restoredPrice) && restoredPrice > 0 ? restoredPrice.toFixed(2) : '');
      }
      return tombstone;
    });
  let output = xml.replace(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/gi, block => {
    const code = field(block, 'CODE');
    if (saleState.items?.[code]?.quantity !== 0 || field(block, 'VISIBILITY') !== DETAIL_ONLY
        || field(block, 'AVAILABILITY') !== UNAVAILABLE_LABEL) return block;
    const source = saleSourceCache[code]?.block || '';
    const regular = source ? Number(field(source, 'PRICE_VAT')) : 0;
    const supplierAction = source ? Number(field(source, 'ACTION_PRICE')) : 0;
    const restoredPrice = supplierAction > 0 && supplierAction < regular ? supplierAction : regular;
    return clearSaleState(block, Number.isFinite(restoredPrice) && restoredPrice > 0 ? restoredPrice.toFixed(2) : '');
  });
  if (tombstones.length) output = output.replace(/\s*<\/SHOP>\s*$/i, `\n${tombstones.join('\n')}\n</SHOP>\n`);
  if (output === xml && tombstones.length) throw new Error(`${supplier}: could not append tombstones to XML.`);

  fs.mkdirSync(path.dirname(statePath), { recursive: true });
  fs.writeFileSync(statePath, JSON.stringify({
    version: 2,
    activeItemCount,
    activeProducts: [...currentByIdentity.values()].sort((a, b) => a.key.localeCompare(b.key)),
    missingProducts: [...nextMissing.values()].sort((a, b) => a.key.localeCompare(b.key)),
  }, null, 2) + '\n');
  fs.writeFileSync(xmlPath, output);

  console.log(`${supplier}: ${activeItemCount} current products, ${nextMissing.size} URL-only unavailable products${prior ? '' : ' (baseline initialized; no removals inferred)'}.`);
}

try { main(); }
catch (error) {
  console.error(`apply-missing-availability: ${error.message}`);
  process.exitCode = 1;
}

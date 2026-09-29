#!/usr/bin/env node
'use strict';

// Applies email-managed sale state to the existing supplier products. Product CODE,
// supplier assignment, URL, content, and categories remain those of the original item.
const fs = require('node:fs');
const path = require('node:path');
const he = require('he');
const { validateState } = require('./lib/vypredaj-core');

const ROOT = path.join(__dirname, '..');
const STATE_PATH = path.join(ROOT, 'data', 'vypredaj.json');
const CACHE_PATH = path.join(ROOT, 'data', 'sklbb-source-items.json');
const OUTPUT_DIR = path.join(ROOT, 'output');
const SALE_FLAG = 'CUSTOM1';
const SALE_AVAILABILITY = 'Skladom na predajni';

function tag(block, name) {
  const m = block.match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)<\\/${name}>`, 'i'));
  return m ? he.decode(m[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')).trim() : '';
}
function setTag(block, name, value) {
  const re = new RegExp(`<${name}\\b[^>]*>[\\s\\S]*?<\\/${name}>`, 'gi');
  const found = block.match(re) || [];
  if (found.length > 1) throw new Error(`Viac polí ${name} v jednom produkte.`);
  const field = `<${name}>${value}</${name}>`;
  return found.length ? block.replace(re, field) : block.replace('</SHOPITEM>', `${field}\n</SHOPITEM>`);
}
function setFlag(block, name, active) {
  const match = block.match(/<FLAGS\b[^>]*>([\s\S]*?)<\/FLAGS>/i);
  const flags = new Map();
  if (match) {
    for (const m of match[1].matchAll(/<(NEW|TIP|ACTION|CUSTOM\d+)\b[^>]*>([\s\S]*?)<\/\1>/gi)) {
      const code = m[1].toLowerCase();
      flags.set(code, { code, active: /^(1|true|yes)$/i.test(he.decode(m[2].trim())) });
    }
    for (const m of match[1].matchAll(/<FLAG\b[^>]*>([\s\S]*?)<\/FLAG>/gi)) {
      const code = tag(m[1], 'CODE').toLowerCase();
      if (!code) continue;
      const prior = flags.get(code) || { code, active: false };
      const value = tag(m[1], 'ACTIVE');
      flags.set(code, {
        ...prior,
        active: value ? /^(1|true|yes)$/i.test(value) : prior.active,
        validFrom: tag(m[1], 'VALID_FROM') || prior.validFrom || '',
        validUntil: tag(m[1], 'VALID_UNTIL') || prior.validUntil || '',
      });
    }
  }
  const code = name.toLowerCase();
  flags.set(code, { ...(flags.get(code) || {}), code, active });
  const body = [...flags.values()].map((f) => `<FLAG><CODE>${f.code}</CODE><ACTIVE>${f.active ? 1 : 0}</ACTIVE>${f.validFrom ? `<VALID_FROM>${f.validFrom}</VALID_FROM>` : ''}${f.validUntil ? `<VALID_UNTIL>${f.validUntil}</VALID_UNTIL>` : ''}</FLAG>`).join('');
  const xml = `<FLAGS>${body}</FLAGS>`;
  return match ? block.replace(/<FLAGS\b[^>]*>[\s\S]*?<\/FLAGS>/i, xml) : block.replace('</SHOPITEM>', `${xml}\n</SHOPITEM>`);
}
function code(block) { return tag(block, 'CODE'); }
function flagActive(block, name) {
  const direct = block.match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)<\\/${name}>`, 'i'));
  if (direct) return /^(1|true|yes)$/i.test(tag(block, name));
  const flags = block.match(/<FLAGS\b[^>]*>([\s\S]*?)<\/FLAGS>/i)?.[1] || '';
  for (const match of flags.matchAll(/<FLAG\b[^>]*>([\s\S]*?)<\/FLAG>/gi)) {
    if (tag(match[1], 'CODE').toLowerCase() === name.toLowerCase()) {
      return /^(1|true|yes)$/i.test(tag(match[1], 'ACTIVE'));
    }
  }
  return false;
}
function isSaleAdjusted(block) {
  return flagActive(block, SALE_FLAG) && tag(block, 'AVAILABILITY') === SALE_AVAILABILITY;
}
function updateBlock(block, item, productCode) {
  let updated = block;
  const regular = Number(tag(block, 'PRICE_VAT'));
  if (!Number.isFinite(regular) || regular <= 0) throw new Error(`Pre ${productCode} chýba platná PRICE_VAT.`);
  const supplierAction = Number(tag(block, 'ACTION_PRICE') || 0);
  const reference = supplierAction > 0 && supplierAction < regular ? supplierAction : regular;
  if (item.quantity > 0) {
    const discount = Math.round(reference * 0.95 * 100) / 100;
    const purchase = Number(tag(block, 'PURCHASE_PRICE') || 0);
    const vat = Number(tag(block, 'VAT') || tag(block, 'PURCHASE_VAT') || 23);
    const incl = Number(tag(block, 'PURCHASE_PRICE_INCL_VAT') || 0) === 1;
    const purchaseNet = incl ? purchase / (1 + vat / 100) : purchase;
    const saleNet = discount / (1 + vat / 100);
    const safePrice = !purchase || saleNet + 0.000001 >= purchaseNet;
    const actionPrice = safePrice ? discount : reference;
    if (!safePrice) console.warn(`Výpredaj ${productCode}: zľava 5 % by bola pod nákupnou cenou; ponechávam dodávateľskú cenu a nastavujem interný príznak.`);
    updated = setTag(updated, 'STANDARD_PRICE', reference.toFixed(2));
    updated = setTag(updated, 'ACTION_PRICE', actionPrice.toFixed(2));
    // Sale stock is held at the shop. This Shoptet availability already carries
    // a 24-hour delivery estimate; do not represent these units as sold out.
    updated = setTag(updated, 'AVAILABILITY', `<![CDATA[${SALE_AVAILABILITY}]]>`);
    updated = setTag(updated, 'VISIBLE', '1');
    updated = setTag(updated, 'VISIBILITY', 'visible');
  } else {
    // A fresh supplier transform restores its current price; explicitly cancel our old sale price.
    updated = setTag(updated, 'ACTION_PRICE', (supplierAction > 0 && supplierAction < regular ? supplierAction : regular).toFixed(2));
  }
  updated = setFlag(updated, 'ACTION', false);
  updated = setFlag(updated, SALE_FLAG, item.quantity > 0);
  return updated;
}
function main() {
  const state = validateState(JSON.parse(fs.readFileSync(STATE_PATH, 'utf8')));
  const cache = fs.existsSync(CACHE_PATH) ? JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8')) : {};
  const files = fs.readdirSync(OUTPUT_DIR).filter((f) => f.endsWith('.xml')).sort();
  if (!files.length) throw new Error('Chýbajú výstupné XML feedy.');
  const feeds = new Map(files.map((name) => [name, fs.readFileSync(path.join(OUTPUT_DIR, name), 'utf8')]));
  const locations = new Map();
  for (const [name, xml] of feeds) {
    for (const m of xml.matchAll(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/g)) {
      const productCode = code(m[0]);
      if (productCode) locations.set(productCode, [...(locations.get(productCode) || []), { name, block: m[0] }]);
    }
  }
  const active = Object.entries(state.items).filter(([, item]) => item.quantity > 0);
  const touched = new Map(feeds);
  const nextCache = { ...cache };
  for (const [productCode, item] of Object.entries(state.items)) {
    const found = locations.get(productCode) || [];
    if (found.length > 1) throw new Error(`Kód ${productCode} sa nachádza vo viacerých dodávateľských feedech.`);
    let targetName = found[0]?.name;
    const currentBlock = found[0]?.block;
    const alreadyAdjusted = currentBlock ? isSaleAdjusted(currentBlock) : false;
    let sourceBlock = alreadyAdjusted ? cache[productCode]?.block : currentBlock;
    if (found.length && !alreadyAdjusted) nextCache[productCode] = { sourceFile: targetName, block: sourceBlock };
    if (alreadyAdjusted && !sourceBlock) {
      throw new Error(`Pre ${productCode} chýba čistý dodávateľský záznam potrebný na opakovanie alebo ukončenie výpredaja.`);
    }
    if (!found.length && item.quantity > 0 && cache[productCode]?.block && cache[productCode]?.sourceFile) {
      targetName = cache[productCode].sourceFile;
      sourceBlock = cache[productCode].block;
      if (!touched.has(targetName)) throw new Error(`Zdrojový feed ${targetName} pre aktívny výpredaj ${productCode} neexistuje.`);
      // Cache contains the original supplier block. Its CODE is retained verbatim.
      touched.set(targetName, touched.get(targetName).replace(/<\/SHOP>\s*$/i, `${sourceBlock}\n</SHOP>\n`));
      locations.set(productCode, [{ name: targetName, block: sourceBlock }]);
      nextCache[productCode] = { sourceFile: targetName, block: sourceBlock };
    }
    if (sourceBlock && targetName && touched.has(targetName)) {
      const updated = item.quantity > 0 ? updateBlock(sourceBlock, item, productCode) : sourceBlock;
      let replaced = false;
      touched.set(targetName, touched.get(targetName).replace(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/g, (block) => {
        if (!replaced && code(block) === productCode) { replaced = true; return updated; }
        return block;
      }));
      if (!replaced) throw new Error(`Nepodarilo sa zapísať produkt ${productCode} do ${targetName}.`);
      continue;
    }
    if (item.quantity > 0) throw new Error(`Aktívny výpredajový kód ${productCode} nemá produkt v dodávateľskom feede ani v obnoviteľnej cache.`);
  }
  for (const [name, xml] of touched) fs.writeFileSync(path.join(OUTPUT_DIR, name), xml);
  fs.writeFileSync(CACHE_PATH, JSON.stringify(nextCache, null, 2) + '\n');
  console.log(`Výpredaj: ${active.length} aktívnych položiek spracovaných pod pôvodnými kódmi v ${feeds.size} feedech.`);
}

try { main(); } catch (error) { console.error(`Výpredajové feedy sa nepublikujú: ${error.message}`); process.exitCode = 1; }

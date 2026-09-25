#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const he = require('he');
const { validateState } = require('./lib/vypredaj-core');

const ROOT = path.join(__dirname, '..');
const STATE_PATH = path.join(ROOT, 'data', 'vypredaj.json');
const CACHE_PATH = path.join(ROOT, 'data', 'sklbb-source-items.json');
const SOURCE_DIR = path.join(ROOT, 'output');
const BB_DIR = path.join(ROOT, 'output-sklad-bb');
const BB_PATH = path.join(BB_DIR, 'sklad-bb.xml');
const PREFIX = 'SKLBB-';
const AVAILABILITY = 'Skladom na predajni';
const SUPPLIER = 'Sklad BB';

function decodeTag(xml, name) {
  const re = new RegExp('<' + name + '\\b[^>]*>([\\s\\S]*?)<\\/' + name + '>', 'i');
  const match = String(xml).match(re);
  if (!match) return null;
  return he.decode(match[1].replace(/<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>/g, '$1')).trim();
}
function escapeXml(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function atomicWrite(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const temp = file + '.tmp';
  fs.writeFileSync(temp, data, 'utf8');
  fs.renameSync(temp, file);
}
function readJson(file, fallback) {
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : fallback;
}
function codeOf(block) { return decodeTag(block, 'CODE'); }
function getBlocks(xml) {
  return [...String(xml).matchAll(/<SHOPITEM\b[^>]*>[\\s\\S]*?<\\/SHOPITEM>/g)].map((m) => m[0]);
}
function replaceTag(block, tag, value) {
  const re = new RegExp('<' + tag + '\\b[^>]*>[\\s\\S]*?<\\/' + tag + '>', 'i');
  const matches = block.match(new RegExp(re.source, 'gi')) || [];
  if (matches.length > 1) throw new Error('SHOPITEM obsahuje viacero polí ' + tag + '.');
  const encoded = '<' + tag + '>' + value + '</' + tag + '>';
  if (matches.length) return block.replace(re, encoded);
  const end = block.lastIndexOf('</SHOPITEM>');
  if (end < 0) throw new Error('Neúplný SHOPITEM.');
  return block.slice(0, end) + encoded + '\\n' + block.slice(end);
}
function setFlag(block, name, active) {
  const flagsMatch = block.match(/<FLAGS\\b[^>]*>([\\s\\S]*?)<\\/FLAGS>/i);
  const value = '<' + name + '>' + (active ? '1' : '0') + '</' + name + '>';
  if (!flagsMatch) return replaceTag(block, 'FLAGS', value);
  const flags = flagsMatch[1];
  const re = new RegExp('<' + name + '\\b[^>]*>[\\s\\S]*?<\\/' + name + '>', 'i');
  const newFlags = re.test(flags) ? flags.replace(re, value) : flags + value;
  return block.replace(/<FLAGS\\b[^>]*>[\\s\\S]*?<\\/FLAGS>/i, '<FLAGS>' + newFlags + '</FLAGS>');
}
function prepareBbItem(sourceBlock, originalCode, quantity) {
  let block = sourceBlock;
  const sourcePrice = Number(decodeTag(sourceBlock, 'PRICE_VAT'));
  if (!Number.isFinite(sourcePrice) || sourcePrice <= 0) throw new Error('Pre ' + originalCode + ' chýba platná PRICE_VAT.');
  const vat = Number(decodeTag(sourceBlock, 'VAT') || 23);
  const purchasePrice = Number(decodeTag(sourceBlock, 'PURCHASE_PRICE') || 0);
  const purchaseInclVat = Number(decodeTag(sourceBlock, 'PURCHASE_PRICE_INCL_VAT') || 0) === 1;
  const purchaseNet = purchaseInclVat ? purchasePrice / (1 + vat / 100) : purchasePrice;
  const salePrice = Math.round(sourcePrice * 95) / 100;
  if (purchasePrice > 0 && salePrice / (1 + vat / 100) + 0.000001 < purchaseNet) {
    throw new Error('Zľava 5 % dostane ' + originalCode + ' pod nákupnú cenu; položka sa zastavila.');
  }
  if (!/^[A-Za-z0-9_ /.-]+$/.test(originalCode)) throw new Error('Kód obsahuje znaky nepodporované v kóde produktu Shoptet: ' + originalCode);
  const bbCode = PREFIX + originalCode;
  if (bbCode.length > 64) throw new Error('Kód ' + bbCode + ' prekračuje limit 64 znakov.');
  block = replaceTag(block, 'CODE', escapeXml(bbCode));
  block = replaceTag(block, 'PRICE_VAT', salePrice.toFixed(2));
  block = replaceTag(block, 'STANDARD_PRICE', sourcePrice.toFixed(2));
  block = replaceTag(block, 'ACTION_PRICE', '');
  block = setFlag(block, 'ACTION', false);
  block = setFlag(block, 'CUSTOM1', true);
  block = replaceTag(block, 'AVAILABILITY', '<![CDATA[' + AVAILABILITY + ']]>');
  block = replaceTag(block, 'SUPPLIER', '<![CDATA[' + SUPPLIER + ']]>');
  block = replaceTag(block, 'VISIBLE', '1');
  block = replaceTag(block, 'VISIBILITY', 'visible');
  const stock = block.match(/<STOCK\\b[^>]*>([\\s\\S]*?)<\\/STOCK>/i);
  const stockNode = '<STOCK><AMOUNT>' + quantity + '</AMOUNT>' + (stock ? stock[1].replace(/<AMOUNT\\b[^>]*>[\\s\\S]*?<\\/AMOUNT>/i, '') : '') + '</STOCK>';
  if (stock) block = block.replace(/<STOCK\\b[^>]*>[\\s\\S]*?<\\/STOCK>/i, stockNode);
  else block = replaceTag(block, 'STOCK', '<AMOUNT>' + quantity + '</AMOUNT>');
  return { code: bbCode, block };
}

function main() {
  if (!fs.existsSync(STATE_PATH)) throw new Error('Chýba data/vypredaj.json.');
  const state = validateState(readJson(STATE_PATH, null));
  const cache = readJson(CACHE_PATH, {});
  if (!cache || typeof cache !== 'object' || Array.isArray(cache)) throw new Error('Neplatný data/sklbb-source-items.json.');
  const files = fs.readdirSync(SOURCE_DIR).filter((name) => name.endsWith('.xml')).sort()
    .map((name) => ({ name, file: path.join(SOURCE_DIR, name), xml: fs.readFileSync(path.join(SOURCE_DIR, name), 'utf8') }));
  if (!files.length) throw new Error('Chýbajú zdrojové XML v output/.');
  const parsed = files.map((f) => ({ ...f, blocks: getBlocks(f.xml) }));
  const active = Object.entries(state.items).filter(([, item]) => item.quantity > 0);
  const activeCodes = new Set(active.map(([code]) => code));
  const sourceLocations = new Map();
  for (const feed of parsed) for (const block of feed.blocks) {
    const code = codeOf(block);
    if (!code) continue;
    sourceLocations.set(code, [...(sourceLocations.get(code) || []), { feed, block }]);
  }

  const outputs = new Map(parsed.map((f) => [f.file, f.xml]));
  const bbBlocks = [];
  const nextCache = { ...cache };
  const foundInSource = new Set();
  for (const [code, sale] of active) {
    const matches = sourceLocations.get(code) || [];
    if (matches.length > 1) throw new Error('Kód ' + code + ' sa našiel vo viacerých dodávateľských feedoch.');
    const cached = cache[code];
    const sourceBlock = matches[0]?.block || cached?.block;
    const sourceFile = matches[0]?.feed.name || cached?.sourceFile;
    if (!sourceBlock) {
      console.warn('Čaká sa na úplný zdrojový produkt ' + code + '; položka ostáva aktívna v stave.');
      continue;
    }
    if (matches.length) {
      foundInSource.add(code);
      nextCache[code] = { sourceFile, block: sourceBlock };
    }
    bbBlocks.push(prepareBbItem(sourceBlock, code, sale.quantity).block);

    // Dodávateľské importy mažú produkty, ktoré vo feede chýbajú. Keď je položka aktívna
    // na Sklad BB, pôvodný kód preto nesmie zostať ani v jednom dodávateľskom feede.
    if (matches.length) {
      const feed = matches[0].feed;
      let removed = false;
      const updated = feed.xml.replace(/<SHOPITEM\\b[^>]*>[\\s\\S]*?<\\/SHOPITEM>/g, (block) => {
        if (!removed && codeOf(block) === code) { removed = true; return ''; }
        return block;
      });
      outputs.set(feed.file, updated);
    }
  }

  // Neobnovujeme blok z cache do dodávateľského feedu. Po objednávke ďalší
  // dodávateľský transform určí z aktuálnej dostupnosti, či sa pôvodný kód vráti.
  for (const [code, item] of Object.entries(cache)) {
    if (activeCodes.has(code)) nextCache[code] = item;
    else delete nextCache[code];
  }

  for (const [file, xml] of outputs) atomicWrite(file, xml);
  atomicWrite(CACHE_PATH, JSON.stringify(nextCache, null, 2) + '\\n');
  atomicWrite(BB_PATH, '<?xml version="1.0" encoding="utf-8"?>\\n<SHOP>\\n' + bbBlocks.join('\\n') + '\\n</SHOP>\\n');
  console.log('Sklad BB: ' + bbBlocks.length + ' produktov; aktívnych kódov ' + active.length + '.');
}
try { main(); } catch (err) { console.error('Sklad BB feed sa nepublikuje: ' + err.message); process.exit(1); }

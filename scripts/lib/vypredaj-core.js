'use strict';

const he = require('he');

const SCHEMA_VERSION = 1;
const MAX_QUANTITY_PER_LINE = 10000;
const MAX_ORDER_IDS_PER_ITEM = 50000;

function createEmptyState() {
  return {
    schemaVersion: SCHEMA_VERSION,
    items: {},
    mail: { uidValidity: null, lastUid: 0, activationAfter: new Date().toISOString() },
    ignoredMail: [],
  };
}

function validateState(state) {
  if (!state || state.schemaVersion !== SCHEMA_VERSION || !state.items || typeof state.items !== 'object') {
    throw new Error('Neplatný alebo nepodporovaný data/vypredaj.json. Feed sa nesmie publikovať.');
  }
  for (const [code, item] of Object.entries(state.items)) {
    if (!code || !item || !Number.isSafeInteger(item.quantity) || item.quantity < 0
      || !Number.isFinite(Date.parse(item.activatedAt || ''))) {
      throw new Error(`Neplatný záznam výpredaja pre kód ${code || '(prázdny)'}.`);
    }
    if (!Array.isArray(item.appliedOrderIds)) item.appliedOrderIds = [];
  }
  if (!state.mail) state.mail = { uidValidity: null, lastUid: 0 };
  if (!state.mail.activationAfter) state.mail.activationAfter = new Date().toISOString();
  if (!Array.isArray(state.ignoredMail)) state.ignoredMail = [];
  return state;
}

function parseCommandBody(body) {
  const sums = new Map();
  const lines = String(body || '').replace(/\r/g, '').split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const match = line.match(/^([^;\n]+);([1-9]\d*)$/);
    if (!match) throw new Error(`Riadok ${i + 1} musí mať tvar KÓD;POČET.`);
    const code = match[1].trim();
    const quantity = Number(match[2]);
    if (!/^[A-Za-z0-9_ /.-]+$/.test(code)) throw new Error(`Neplatný kód produktu na riadku ${i + 1}.`);
    if (!Number.isSafeInteger(quantity) || quantity > MAX_QUANTITY_PER_LINE) {
      throw new Error(`Počet kusov na riadku ${i + 1} musí byť 1 až ${MAX_QUANTITY_PER_LINE}.`);
    }
    sums.set(code, (sums.get(code) || 0) + quantity);
    if (sums.get(code) > MAX_QUANTITY_PER_LINE) throw new Error(`Súčet kusov pre ${code} je príliš vysoký.`);
  }
  if (!sums.size) throw new Error('E-mail neobsahuje žiadnu položku KÓD;POČET.');
  return [...sums].map(([code, quantity]) => ({ code, quantity }));
}

function hasUniqueProduct(feedXml, code) {
  const sources = Array.isArray(feedXml) ? feedXml : [feedXml];
  const matches = sources.flatMap((xml) => [...String(xml).matchAll(/<SHOPITEM\b[^>]*>([\s\S]*?)<\/SHOPITEM>/g)])
    .filter((m) => {
      const cm = m[1].match(/<CODE\b[^>]*>([\s\S]*?)<\/CODE>/);
      return cm && he.decode(cm[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')).trim() === code;
    });
  return matches.length === 1;
}

function addItems(stateInput, rows, addedAt) {
  const state = validateState(stateInput);
  const timestamp = new Date(addedAt).toISOString();
  for (const { code, quantity } of rows) {
    const item = state.items[code];
    if (item && item.quantity > 0) {
      item.quantity += quantity;
      if (item.quantity > MAX_QUANTITY_PER_LINE) throw new Error(`Celkový počet kusov pre ${code} je príliš vysoký.`);
    } else {
      state.items[code] = {
        quantity,
        activatedAt: timestamp,
        appliedOrderIds: item?.appliedOrderIds || [],
      };
    }
  }
  return state;
}

function asList(value) { return value == null ? [] : Array.isArray(value) ? value : [value]; }
function text(value) {
  if (value == null) return '';
  if (typeof value === 'object') return String(value['#text'] ?? '').trim();
  return String(value).trim();
}

function parseOrderTimestamp(value) {
  const raw = text(value);
  const local = raw.match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2}):(\d{2})$/);
  if (!local) return Date.parse(raw);
  const parts = local.slice(1).map(Number);
  const localAsUtc = Date.UTC(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
  const intl = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Bratislava', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23',
  });
  const wall = Object.fromEntries(intl.formatToParts(new Date(localAsUtc))
    .filter((part) => part.type !== 'literal').map((part) => [part.type, Number(part.value)]));
  const wallAsUtc = Date.UTC(wall.year, wall.month - 1, wall.day, wall.hour, wall.minute, wall.second);
  return localAsUtc - (wallAsUtc - localAsUtc);
}

function applyOrders(stateInput, orders) {
  const state = validateState(stateInput);
  const changes = [];
  for (const order of asList(orders)) {
    const quantities = new Map();
    const orderItems = asList(order.ITEMS?.ITEM);
    for (const line of orderItems) {
      const code = text(line.CODE);
      const item = state.items[code];
      if (!item || item.quantity <= 0) continue;
      // Zásoba je evidencia opätovne zaradených kusov: podľa pravidla používateľa jedna
      // objednávka spotrebuje najviac jeden výpredajový kus daného kódu, aj ak má viac riadkov.
      quantities.set(code, 1);
    }
    if (!quantities.size) continue;
    const orderId = text(order.CODE) || text(order.ORDER_ID);
    const createdAt = parseOrderTimestamp(order.DATE);
    if (!orderId || !Number.isFinite(createdAt)) {
      throw new Error('Objednávka s výpredajovou položkou nemá identifikátor alebo platný dátum.');
    }
    for (const [code, amount] of quantities) {
      const item = state.items[code];
      if (createdAt < Date.parse(item.activatedAt) || item.appliedOrderIds.includes(orderId)) continue;
      const before = item.quantity;
      item.quantity = Math.max(0, before - amount);
      item.appliedOrderIds.push(orderId);
      if (item.appliedOrderIds.length > MAX_ORDER_IDS_PER_ITEM) item.appliedOrderIds.shift();
      changes.push({ orderId, code, amount, before, after: item.quantity, createdAt });
    }
  }
  return { state, changes };
}

function replaceOrInsert(block, tag, value) {
  const re = new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?<\\/${tag}>`, 'g');
  const matches = block.match(re) || [];
  if (matches.length > 1) throw new Error(`SHOPITEM obsahuje viacero ${tag} polí.`);
  if (matches.length) return block.replace(re, `<${tag}>${value}</${tag}>`);
  const close = block.lastIndexOf('</SHOPITEM>');
  if (close < 0) throw new Error('Neúplný SHOPITEM blok.');
  return block.slice(0, close) + `<${tag}>${value}</${tag}>\n` + block.slice(close);
}

function setActionFlag(block, active) {
  const flag = `<ACTION>${active ? 1 : 0}</ACTION>`;
  const flagsMatch = block.match(/<FLAGS\b[^>]*>([\s\S]*?)<\/FLAGS>/);
  if (!flagsMatch) return replaceOrInsert(block, 'FLAGS', flag);
  let flags = flagsMatch[1];
  const action = /<ACTION\b[^>]*>[\s\S]*?<\/ACTION>/i;
  if (action.test(flags)) flags = flags.replace(action, flag);
  else flags += flag;
  return block.replace(/<FLAGS\b[^>]*>[\s\S]*?<\/FLAGS>/, `<FLAGS>${flags}</FLAGS>`);
}

function applyVypredajToXml(feedXml, stateInput, options = {}) {
  const state = validateState(stateInput);
  const targets = state.items;
  const found = new Set();
  const xml = String(feedXml).replace(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/g, (block) => {
    const codeMatch = block.match(/<CODE\b[^>]*>([\s\S]*?)<\/CODE>/);
    if (!codeMatch) return block;
    const code = he.decode(codeMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')).trim();
    const item = targets[code];
    if (!item) return block;
    if (found.has(code)) throw new Error(`Kód ${code} sa v dodávateľskom feede nachádza viackrát.`);
    found.add(code);

    const priceMatch = block.match(/<PRICE_VAT\b[^>]*>([\s\S]*?)<\/PRICE_VAT>/);
    const regularPrice = Number(priceMatch?.[1]);
    if (!Number.isFinite(regularPrice) || regularPrice <= 0) throw new Error(`Pre ${code} chýba platná PRICE_VAT.`);

    const vatRate = Number((block.match(/<VAT\b[^>]*>([\s\S]*?)<\/VAT>/) || [])[1] || 23);
    const purchasePrice = Number((block.match(/<PURCHASE_PRICE\b[^>]*>([\s\S]*?)<\/PURCHASE_PRICE>/) || [])[1] || 0);
    const purchaseInclVat = Number((block.match(/<PURCHASE_PRICE_INCL_VAT\b[^>]*>([\s\S]*?)<\/PURCHASE_PRICE_INCL_VAT>/) || [])[1] || 0) === 1;
    const purchasePriceNet = purchaseInclVat ? purchasePrice / (1 + vatRate / 100) : purchasePrice;
    const salePrice = Math.round(regularPrice * 95) / 100;
    if (item.quantity > 0 && purchasePrice > 0 && salePrice / (1 + vatRate / 100) + 0.000001 < purchasePriceNet) {
      throw new Error(`Zľava 5 % by dostala ${code} pod nákupnú cenu. Položka sa zastavila na kontrolu.`);
    }
    // Novšie Shoptet importy prázdne/neprítomné polia nemusia mazať. Pri vypredaní preto
    // posielame ACTION_PRICE rovný aktuálnej štandardnej cene a vypíname príznak Akcia.
    const actionPrice = item.quantity > 0 ? salePrice : regularPrice;
    let updated = replaceOrInsert(block, 'ACTION_PRICE', actionPrice.toFixed(2));
    updated = setActionFlag(updated, item.quantity > 0);
    return updated;
  });

  if (options.requireAll !== false) {
    for (const [code, item] of Object.entries(targets)) {
      if (item.quantity > 0 && !found.has(code)) throw new Error(`Aktívny výpredajový kód ${code} sa v tomto feede nenašiel.`);
    }
  }
  return { xml, updatedCodes: [...found] };
}

module.exports = {
  createEmptyState,
  validateState,
  parseCommandBody,
  hasUniqueProduct,
  addItems,
  applyOrders,
  parseOrderTimestamp,
  applyVypredajToXml,
};

'use strict';
// Temporary Black Friday allowlist for Heureka paid CPC visibility.
// It overrides automatic HEUREKA_HIDDEN rules only through the campaign end date.
// Product identity is matched by EAN where available, or by explicit product code for
// Black Friday items without an EAN.

const fs = require('fs');
const path = require('path');
const ALLOWLIST_PATH = path.join(__dirname, '..', 'data', 'heureka-reports', 'black-friday-allowlist.json');
let cache;
function loadAllowlist() {
  if (cache !== undefined) return cache;
  try {
    cache = JSON.parse(fs.readFileSync(ALLOWLIST_PATH, 'utf-8'));
  } catch (e) {
    console.error(`Warning: could not read Black Friday Heureka allowlist: ${e.message}`);
    cache = { eans: [], codes: [], activeUntil: '' };
  }
  return cache;
}
// Aktívne výpredajové položky s pevnou cenou (data/vypredaj.json) zostávajú viditeľné na Heureke,
// kým ich zo stavu neodstránime, bez ohľadu na activeUntil.
const SALE_STATE_PATH = path.join(__dirname, '..', 'data', 'vypredaj.json');
let saleCodes;
function loadSaleCodes() {
  if (saleCodes !== undefined) return saleCodes;
  try {
    const items = JSON.parse(fs.readFileSync(SALE_STATE_PATH, 'utf-8')).items || {};
    saleCodes = new Set(Object.entries(items)
      .filter(([, item]) => item.quantity > 0 && item.salePrice != null)
      .map(([code]) => code.trim().toUpperCase()));
  } catch (e) {
    saleCodes = new Set();
  }
  return saleCodes;
}
function normalizeEan(ean) {
  const value = String(ean || '').trim();
  return /^\d{1,12}$/.test(value) ? value.padStart(13, '0') : value;
}
function isBlackFridayAllowed(ean, code, now = Date.now()) {
  const normalizedSaleCode = String(code || '').trim().toUpperCase();
  if (normalizedSaleCode && loadSaleCodes().has(normalizedSaleCode)) return true;
  const list = loadAllowlist();
  const expiry = list.activeUntil ? Date.parse(`${list.activeUntil}T23:59:59.999Z`) : NaN;
  if (Number.isFinite(expiry) && now > expiry) return false;
  const normalizedEan = normalizeEan(ean);
  if (normalizedEan && (list.eans || []).some((item) => normalizeEan(item) === normalizedEan)) return true;
  const normalizedCode = String(code || '').trim().toUpperCase();
  return !!normalizedCode && (list.codes || []).some((item) => String(item).trim().toUpperCase() === normalizedCode);
}
module.exports = { isBlackFridayAllowed, loadAllowlist, ALLOWLIST_PATH, normalizeEan };

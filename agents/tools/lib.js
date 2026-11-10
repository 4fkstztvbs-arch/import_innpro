'use strict';

const fs = require('node:fs');
const path = require('node:path');

const AGENTS_DIR = path.resolve(__dirname, '..');

function readConfig(dir = AGENTS_DIR) {
  return JSON.parse(fs.readFileSync(path.join(dir, 'config.json'), 'utf8'));
}

// Jednoduchá hlavička súboru: riadky "kluc: hodnota" medzi dvoma "---".
// Hodnota v hranatých zátvorkách je zoznam, prázdna hodnota je null.
function parseFrontmatter(text) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!match) return null;
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (value === '') {
      data[key] = null;
    } else if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value.slice(1, -1).split(',').map((v) => v.trim()).filter(Boolean);
    } else {
      data[key] = value.replace(/^["']|["']$/g, '');
    }
  }
  return { data, body: text.slice(match[0].length) };
}

// Súbory v priečinku okrem README a šablón (názov začína podčiarkovníkom).
function listFiles(dir, ext) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...listFiles(full, ext));
    } else if (
      entry.name.endsWith(ext) &&
      !entry.name.startsWith('_') &&
      entry.name !== 'README.md'
    ) {
      out.push(full);
    }
  }
  return out.sort();
}

function isDate(value) {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));
}

// Dnešný dátum v časovej zóne e-shopu (RRRR-MM-DD).
function today(timeZone = 'Europe/Bratislava', now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
}

function addDays(date, days) {
  const d = new Date(`${date}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

module.exports = { AGENTS_DIR, readConfig, parseFrontmatter, listFiles, isDate, today, addDays };

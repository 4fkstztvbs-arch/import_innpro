const fs = require('fs');
const path = require('path');
const { XMLParser } = require('fast-xml-parser');

const dict = JSON.parse(fs.readFileSync(path.join(__dirname, 'cz-sk-dict.json'), 'utf-8'));
const PHRASE_OVERRIDES = dict.phraseOverrides;
const WORD_DICT = dict.wordDict;

function translateCategoryName(name) {
  if (!name) return name;
  if (PHRASE_OVERRIDES[name]) return PHRASE_OVERRIDES[name];
  const parts = name.split(/(\s+|\/|,)/);
  return parts.map((part) => {
    if (/^\s+$|^\/$|^,$/.test(part)) return part;
    const lower = part.toLowerCase();
    const translated = WORD_DICT[lower];
    if (!translated || translated.toLowerCase() === lower) return part;
    if (part[0] === part[0].toUpperCase() && part.slice(1) === part.slice(1).toLowerCase()) {
      return translated.charAt(0).toUpperCase() + translated.slice(1);
    }
    if (part === part.toUpperCase()) return translated.toUpperCase();
    return translated;
  }).join('');
}

const recordParser = new XMLParser({ ignoreAttributes: true, textNodeName: '#text' });
function parseRecord(rawXml) {
  const doc = recordParser.parse(rawXml);
  return doc.zaznam || null;
}
function field(rec, tag) {
  const v = rec ? rec[tag] : undefined;
  if (v === undefined || v === null) return '';
  if (typeof v === 'object') return String(v['#text'] || '');
  return String(v).trim();
}
function toFloat(s) {
  if (s === undefined || s === null || s === '') return 0;
  const v = parseFloat(String(s).replace(',', '.'));
  return isNaN(v) ? 0 : v;
}

module.exports = { translateCategoryName, parseRecord, field, toFloat };

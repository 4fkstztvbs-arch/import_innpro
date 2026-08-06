const fs = require('fs');
const path = require('path');
const { XMLParser } = require('fast-xml-parser');
const { translateCategoryName } = require('./translate-cz-sk');

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

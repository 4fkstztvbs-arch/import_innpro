'use strict';

const sax = require('sax');

const sources = [
  ['products', 'PREMIUMSTORE_PRODUCTS_EXPORT_URL', 'xml'],
  ['categories', 'PREMIUMSTORE_CATEGORIES_EXPORT_URL', 'csv'],
  ['orders', 'PREMIUMSTORE_ORDERS_EXPORT_URL', 'xml'],
];

function topEntries(map, n = 20) {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([tag, count]) => ({ tag, count }));
}

async function fetchSafe(label, envName) {
  const url = process.env[envName];
  if (!url) throw new Error(`${label}: missing secret ${envName}`);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 60000);
  try {
    const res = await fetch(url, {
      headers: { 'user-agent': 'PremiumStore-Agent-Export-Validator/1.0' },
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`${label}: HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    return {
      buf,
      contentType: res.headers.get('content-type') || '',
      status: res.status,
    };
  } catch (err) {
    if (err.name === 'AbortError') throw new Error(`${label}: timeout`);
    if (/HTTP \d+/.test(String(err.message))) throw err;
    // Deliberately do not print the authenticated URL.
    throw new Error(`${label}: network/fetch failure`);
  } finally {
    clearTimeout(timer);
  }
}

function inspectXml(buf) {
  const counts = new Map();
  let root = null;
  let parseError = null;

  const parser = sax.parser(true, { trim: false, normalize: false, xmlns: false });
  parser.onopentag = (node) => {
    if (!root) root = node.name;
    counts.set(node.name, (counts.get(node.name) || 0) + 1);
  };
  parser.onerror = (err) => {
    parseError = err.message;
    parser.resume();
  };
  parser.write(buf.toString('utf8')).close();
  if (parseError) throw new Error(`XML parse failed: ${parseError}`);

  const candidateRecordTags = ['SHOPITEM', 'PRODUCT', 'ITEM', 'ORDER', 'ORDER_ITEM', 'ORDERITEM'];
  const records = {};
  for (const tag of candidateRecordTags) {
    if (counts.has(tag)) records[tag] = counts.get(tag);
  }

  const fields = [
    'CODE', 'SKU', 'EAN', 'NAME', 'URL', 'PRICE_VAT', 'PURCHASE_PRICE',
    'AVAILABILITY', 'CATEGORY_ID', 'CATEGORYTEXT', 'ORDER_CODE', 'ORDER_ID',
    'DATE', 'TOTAL_PRICE', 'PRICE', 'STATUS',
  ];
  const fieldPresence = {};
  for (const tag of fields) {
    if (counts.has(tag)) fieldPresence[tag] = counts.get(tag);
  }

  return { root, records, fieldPresence, topTags: topEntries(counts) };
}

function parseCsvLine(line, delimiter) {
  const out = [];
  let current = '';
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (quoted && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        quoted = !quoted;
      }
    } else if (char === delimiter && !quoted) {
      out.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  out.push(current);
  return out;
}

function inspectCsv(buf) {
  const text = buf.toString('utf8').replace(/^\uFEFF/, '');
  const lines = text.split(/\r?\n/).filter((line) => line.trim() !== '');
  if (!lines.length) throw new Error('CSV empty');

  const semicolons = (lines[0].match(/;/g) || []).length;
  const commas = (lines[0].match(/,/g) || []).length;
  const delimiter = semicolons >= commas ? ';' : ',';
  const headers = parseCsvLine(lines[0], delimiter).map((value) => value.trim());

  let malformedRows = 0;
  for (const line of lines.slice(1)) {
    if (parseCsvLine(line, delimiter).length !== headers.length) malformedRows += 1;
  }

  return {
    rows: Math.max(0, lines.length - 1),
    columns: headers.length,
    headers,
    delimiter: delimiter === ';' ? 'semicolon' : 'comma',
    malformedRows,
  };
}

(async () => {
  let failed = false;
  const summary = { checkedAt: new Date().toISOString(), results: {} };

  for (const [label, envName, type] of sources) {
    try {
      const { buf, contentType, status } = await fetchSafe(label, envName);
      const detail = type === 'xml' ? inspectXml(buf) : inspectCsv(buf);
      summary.results[label] = {
        ok: true,
        httpStatus: status,
        contentType,
        bytes: buf.length,
        ...detail,
      };
    } catch (err) {
      failed = true;
      summary.results[label] = { ok: false, error: String(err.message) };
    }
  }

  // Safe aggregate/schema output only. Raw exports and customer PII are never written to disk.
  console.log(JSON.stringify(summary, null, 2));
  if (failed) process.exit(2);
})();

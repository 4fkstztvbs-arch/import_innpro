// Streams a (potentially huge) XML file and calls onRecord(rawXmlString) for every top-level
// element matching `recordTag` (e.g. "SHOPITEM"), without loading the whole document into
// memory. Supports HTTP Basic Auth for endpoints that require it (like ATOS's i6ws feed).

const sax = require('sax');
const https = require('https');
const http = require('http');

function fetchStream(url, auth) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const headers = { 'User-Agent': 'premiumstore-sk-import/1.0' };
    if (auth && auth.username) {
      const b64 = Buffer.from(`${auth.username}:${auth.password}`).toString('base64');
      headers['Authorization'] = `Basic ${b64}`;
    }
    const req = lib.get(url, { headers }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(fetchStream(res.headers.location, auth));
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} fetching ${url}`));
        return;
      }
      resolve(res);
    });
    req.on('error', reject);
  });
}

async function streamRecords(source, recordTag, onRecord, auth) {
  let stream;
  if (/^https?:\/\//i.test(source)) {
    stream = await fetchStream(source, auth);
  } else {
    stream = require('fs').createReadStream(source);
  }

  const parser = sax.createStream(true, { xmlns: false, lowercase: false });
  let depth = 0;
  let recordDepthStart = null;
  let buffer = '';
  let count = 0;

  return new Promise((resolve, reject) => {
    parser.on('error', (e) => { reject(e); });

    parser.on('opentag', (node) => {
      depth++;
      if (node.name === recordTag && recordDepthStart === null) {
        recordDepthStart = depth;
        buffer = '<' + node.name + attrsToString(node.attributes) + '>';
        return;
      }
      if (recordDepthStart !== null) {
        buffer += '<' + node.name + attrsToString(node.attributes) + '>';
      }
    });

    parser.on('text', (text) => {
      if (recordDepthStart !== null && text) buffer += escapeXmlText(text);
    });

    parser.on('cdata', (text) => {
      if (recordDepthStart !== null) buffer += '<![CDATA[' + text + ']]>';
    });

    parser.on('closetag', (name) => {
      if (recordDepthStart !== null) buffer += '</' + name + '>';
      if (name === recordTag && depth === recordDepthStart) {
        count++;
        onRecord(buffer);
        buffer = '';
        recordDepthStart = null;
      }
      depth--;
    });

    parser.on('end', () => resolve(count));

    stream.on('error', reject);
    stream.pipe(parser);
  });
}

function attrsToString(attributes) {
  let s = '';
  for (const [k, v] of Object.entries(attributes || {})) {
    s += ` ${k}="${escapeXmlAttr(String(v))}"`;
  }
  return s;
}
function escapeXmlAttr(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}
function escapeXmlText(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

module.exports = { streamRecords, fetchStream };

// Streams a (potentially huge) IOF XML file and calls onProduct(rawXmlString) for every
// top-level <product>...</product> element found, without ever loading the whole document
// into memory. Mirrors the same "process one product at a time" approach used during
// development (Python's iterparse) but works directly on a live HTTP response stream.

const sax = require('sax');
const https = require('https');
const http = require('http');

function fetchStream(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(url, { headers: { 'User-Agent': 'premiumstore-sk-import/1.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // follow a single redirect (some EDI endpoints redirect once)
        resolve(fetchStream(res.headers.location));
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

async function streamProducts(source, onProduct) {
  // `source` is either a URL string or a local file path (for local testing)
  let stream;
  if (/^https?:\/\//i.test(source)) {
    stream = await fetchStream(source);
  } else {
    stream = require('fs').createReadStream(source);
  }

  const parser = sax.createStream(true, { xmlns: false, lowercase: false });
  let depth = 0;
  let productDepthStart = null;
  let buffer = '';
  let count = 0;

  return new Promise((resolve, reject) => {
    parser.on('error', (e) => { reject(e); });

    parser.on('opentag', (node) => {
      depth++;
      if (node.name === 'product' && productDepthStart === null) {
        productDepthStart = depth;
        buffer = '<product' + attrsToString(node.attributes) + '>';
        return;
      }
      if (productDepthStart !== null) {
        buffer += '<' + node.name + attrsToString(node.attributes) + '>';
      }
    });

    parser.on('text', (text) => {
      if (productDepthStart !== null && text) buffer += escapeXmlText(text);
    });

    parser.on('cdata', (text) => {
      if (productDepthStart !== null) buffer += '<![CDATA[' + text + ']]>';
    });

    parser.on('closetag', (name) => {
      if (productDepthStart !== null) {
        buffer += '</' + name + '>';
      }
      if (name === 'product' && depth === productDepthStart) {
        count++;
        onProduct(buffer);
        buffer = '';
        productDepthStart = null;
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

module.exports = { streamProducts };

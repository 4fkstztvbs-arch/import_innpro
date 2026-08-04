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
    const options = { headers };
    if (auth && auth.username) {
      // ATOS's i6ws endpoint expects credentials embedded directly in the URL
      // (https://user:pass@host/path), not a standard Authorization header — Node's http/https
      // client supports this natively via the `auth` request option.
      options.auth = `${auth.username}:${auth.password}`;
    }
    const req = lib.get(url, options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(fetchStream(res.headers.location, auth));
        return;
      }
      if (res.statusCode !== 200) {
        let body = '';
        res.on('data', (chunk) => { if (body.length < 2000) body += chunk; });
        res.on('end', () => {
          reject(new Error(`HTTP ${res.statusCode} fetching ${url}\nResponse body (first 2000 chars): ${body.slice(0, 2000)}`));
        });
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

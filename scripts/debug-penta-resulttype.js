// One-off probe: tests whether an alternative i6ws resultType (e.g. StoItemPriceOrd) is
// reachable OUTSIDE StoItemShoptet_El's 21:00-08:00 night window, and if so, what it contains.
// Prints HTTP status + first ~4000 chars of the raw response body. Not part of the regular
// pipeline — delete once the answer is known.
//
// Usage: node scripts/debug-penta-resulttype.js
// Required env vars: PENTA_URL, PENTA_USERNAME, PENTA_PASSWORD
// Optional: PENTA_RESULT_TYPES (comma-separated, default: StoItemPriceOrd)

const { fetchStream } = require('./stream-records');

const BASE_URL = process.env.PENTA_URL;
const USERNAME = process.env.PENTA_USERNAME;
const PASSWORD = process.env.PENTA_PASSWORD;
const RESULT_TYPES = (process.env.PENTA_RESULT_TYPES || 'StoItemPriceOrd').split(',').map((s) => s.trim()).filter(Boolean);

function withResultType(rawUrl, resultType) {
  const u = new URL(rawUrl);
  u.searchParams.set('resultType', resultType);
  return u.toString();
}

async function probe(resultType) {
  const url = withResultType(BASE_URL, resultType);
  console.log(`\n=== resultType=${resultType} ===`);
  console.log('URL:', url.replace(/\/\/[^@]*@/, '//<auth>@'));
  try {
    const res = await fetchStream(url, { username: USERNAME, password: PASSWORD });
    console.log('HTTP', res.statusCode, res.headers['content-type'] || '');
    let body = '';
    await new Promise((resolve) => {
      res.on('data', (chunk) => { if (body.length < 4000) body += chunk; });
      res.on('end', resolve);
      res.on('error', resolve);
    });
    console.log('--- first 4000 chars ---');
    console.log(body.slice(0, 4000));
  } catch (e) {
    console.log('FAILED:', e.message);
  }
}

async function main() {
  if (!BASE_URL || !USERNAME || !PASSWORD) {
    console.error('Missing PENTA_URL / PENTA_USERNAME / PENTA_PASSWORD environment variables.');
    process.exit(1);
  }
  for (const rt of RESULT_TYPES) {
    await probe(rt);
  }
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

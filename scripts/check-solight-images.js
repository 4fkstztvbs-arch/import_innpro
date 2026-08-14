// Periodic maintenance check for Solight product images: Solight's own feed (donwload_link0/1/2
// fields, parse-solight.js) sometimes lists gallery image URLs that don't actually exist on
// their server — confirmed by hand 2026-08-14 (e.g. wd140_1.jpg, wo763_1.jpg return 404 both
// through our Cloudflare Worker proxy AND directly against solight.sk, ruling out a proxy bug).
// These show up as repeated "Status code 404" warnings in Shoptet's own import log.
//
// This script HEAD-checks every image URL currently in output/solight.xml and writes the ones
// that don't resolve to data/solight-broken-images.json, keyed by the stable path suffix
// (/userdata/cache/images/storecards/<size>/<file>.<ext>) rather than the full URL — that suffix
// survives proxy-base or cache-bust query param changes, so the blocklist doesn't go stale every
// time transform-solight.js's URL scheme changes for unrelated reasons.
//
// transform-solight.js loads this file (if present) and skips any image whose suffix is listed,
// instead of shipping a URL already known to 404.
//
// Run occasionally (see check-solight-images.yml, weekly cron + workflow_dispatch) — NOT on
// every nightly sync, since a full-catalog check is a lot of requests and the blocklist doesn't
// need to be that fresh (Solight's own broken links don't churn daily).
//
// Usage: node check-solight-images.js [path/to/solight.xml]

const fs = require('fs');
const path = require('path');

const XML_PATH = process.argv[2] || path.join(__dirname, '..', 'output', 'solight.xml');
const OUT_PATH = path.join(__dirname, '..', 'data', 'solight-broken-images.json');
// Deliberately low and paced — this proxy exists specifically because solight.sk rate-limits
// bulk requests (429s), and a first attempt at this script (2026-08-14) confirmed hammering it
// with 12-way concurrency and no delay produces exactly that: 4798/5235 URLs "failed", but
// re-checking a sample one at a time immediately after showed every single one was actually a
// healthy 200 — the mass run was rate-limiting itself, not finding real 404s. Low concurrency +
// a per-request delay avoids that; a real 404 doesn't care about pacing, only false ones do.
const CONCURRENCY = 3;
const DELAY_MS = 150;

function pathSuffix(url) {
  try {
    return new URL(url).pathname;
  } catch (e) {
    return url;
  }
}

function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }

// Returns 'broken' only for a confirmed 404 (checked twice, a beat apart, to rule out a
// transient blip) — 'ok' for 200, and 'unknown' for anything else (429, 5xx, timeout, network
// error). 'unknown' is never blocklisted: better to keep shipping a URL that might be fine than
// to wrongly hide a working image because of a rate limit or a flaky network moment.
async function checkUrl(url) {
  const first = await tryFetch(url);
  if (first === 200) return 'ok';
  if (first !== 404) return 'unknown';
  await sleep(500);
  const second = await tryFetch(url);
  return second === 404 ? 'broken' : 'unknown';
}

async function tryFetch(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    if (res.status === 405 || res.status === 501) {
      const res2 = await fetch(url, { method: 'GET' });
      return res2.status;
    }
    return res.status;
  } catch (e) {
    return null;
  }
}

async function main() {
  if (!fs.existsSync(XML_PATH)) {
    console.error(`Missing ${XML_PATH}`);
    process.exit(1);
  }
  const xml = fs.readFileSync(XML_PATH, 'utf-8');
  const urls = [...xml.matchAll(/<IMAGE[^>]*>([^<]*)<\/IMAGE>/g)].map((m) => m[1]);
  const uniqueBySuffix = new Map(); // suffix -> one representative full URL to check
  for (const u of urls) {
    const suffix = pathSuffix(u);
    if (!uniqueBySuffix.has(suffix)) uniqueBySuffix.set(suffix, u);
  }
  const entries = [...uniqueBySuffix.entries()];
  console.log(`Checking ${entries.length} unique image URLs (${urls.length} total tags)...`);

  const broken = [];
  let checked = 0;
  let i = 0;
  async function worker() {
    while (i < entries.length) {
      const idx = i++;
      const [suffix, url] = entries[idx];
      const result = await checkUrl(url);
      if (result === 'broken') broken.push(suffix);
      checked++;
      if (checked % 500 === 0) console.log(`  ...${checked}/${entries.length}`);
      await sleep(DELAY_MS);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  broken.sort();
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(broken, null, 2) + '\n', 'utf-8');
  console.log(`Done. ${broken.length}/${entries.length} broken image URLs written to ${OUT_PATH}`);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

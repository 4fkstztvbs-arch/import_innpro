// WiiM (audio.sk source) image proxy — caching relay in front of a small, explicit whitelist of
// product photos on cdn.myshoptet.com.
//
// Unlike ATOS/Solight — where the proxy exists because Shoptet's import bot gets rate-limited or
// IP-blocked by the origin — this one exists because the images originate from a competing
// retailer's own product pages (audio.sk), scraped once by hand (scripts/enrich-wiim-audiosk.js)
// rather than pulled from an official manufacturer/distributor feed. Proxying instead of
// hotlinking directly keeps our own domain in front of Shoptet's importer, but the origin is
// still audio.sk's storefront — see the discussion that led to this file for the tradeoffs
// before extending this pattern to any other supplier.
//
// allowed-paths.json is an explicit whitelist (not a filename pattern like ATOS/Solight use)
// because audio.sk's filenames aren't uniform enough to regex-match safely, and cdn.myshoptet.com
// is shared infrastructure across every Shoptet-hosted store — a loose pattern here could turn
// this into an open proxy for arbitrary Shoptet-hosted images, not just our own scraped set.
// Regenerate it by re-running scripts/enrich-wiim-audiosk.js after re-scraping.

import ALLOWED_PATHS from './allowed-paths.json';

const ORIGIN_HOST = 'cdn.myshoptet.com';
const ALLOWED_SET = new Set(ALLOWED_PATHS);
const CACHE_SECONDS = 60 * 60 * 24 * 30; // 30 days

export default {
  async fetch(request, env, ctx) {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method not allowed', { status: 405 });
    }

    const url = new URL(request.url);
    if (!ALLOWED_SET.has(url.pathname)) {
      return new Response('Not found', { status: 404 });
    }

    const cache = caches.default;
    const cacheKey = new Request(url.toString(), request);
    let response = await cache.match(cacheKey);
    if (response) return response;

    const originUrl = `https://${ORIGIN_HOST}${url.pathname}`;
    const originResponse = await fetch(originUrl, {
      cf: { cacheTtl: CACHE_SECONDS, cacheEverything: true },
    });

    if (!originResponse.ok) {
      return new Response('Upstream error', { status: originResponse.status });
    }

    response = new Response(originResponse.body, originResponse);
    response.headers.set('Cache-Control', `public, max-age=${CACHE_SECONDS}, immutable`);
    response.headers.delete('Set-Cookie');

    ctx.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  },
};

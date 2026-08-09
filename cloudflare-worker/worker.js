// ATOS image proxy — caching relay in front of shop.atoselektro.cz's image CDN.
//
// Why this exists: Shoptet's automatic import gets HTTP 403 / connection timeout when it tries
// to download ATOS product images directly (confirmed repeatedly in Shoptet's own import log —
// it happens on both the old img.asp endpoint and the img0-3.atoselektro.cz static CDN, so it's
// an IP-level block/rate-limit against Shoptet's server, not a URL problem). Cloudflare's edge
// network fetches the origin instead — Shoptet then only ever talks to this Worker's own domain.
//
// Only accepts the exact filename patterns fetch-atos-images.js generates (x_ien<id>.jpg,
// x_i<id>.jpg, x_ies<id>.jpg) — deliberately not a general-purpose proxy, so this can't be
// abused to fetch arbitrary URLs through our Cloudflare account.
//
// Caches aggressively (30 days) since these are static product photos that rarely change.

const ORIGIN_HOST = 'img0.atoselektro.cz'; // any of img0-3 are interchangeable mirrors
const FILENAME_PATTERN = /^x_(?:ien|ies|i)\d+\.jpg$/;
const CACHE_SECONDS = 60 * 60 * 24 * 30; // 30 days

export default {
  async fetch(request, env, ctx) {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method not allowed', { status: 405 });
    }

    const url = new URL(request.url);
    const filename = url.pathname.slice(1);
    if (!FILENAME_PATTERN.test(filename)) {
      return new Response('Not found', { status: 404 });
    }

    const cache = caches.default;
    const cacheKey = new Request(url.toString(), request);
    let response = await cache.match(cacheKey);
    if (response) return response;

    const originUrl = `https://${ORIGIN_HOST}/${filename}`;
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

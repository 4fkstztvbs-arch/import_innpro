// Solight image proxy — caching relay in front of www.solight.sk's image CDN.
//
// Why this exists: when the full Solight catalog gets recreated at once (e.g. after deleting
// all products), Shoptet's automatic import has to download hundreds/thousands of images in a
// short burst — Solight's server responds with HTTP 429 ("Too Many Requests") partway through,
// confirmed directly in Shoptet's own import log. Requests through this Worker come from
// Cloudflare's network instead of Shoptet's single IP, which should avoid tripping a per-client
// rate limit — and once an image is cached here (30 days), repeat imports never hit Solight's
// origin again at all.
//
// Only proxies the exact path shape Solight's own feed already uses
// (/userdata/cache/images/storecards/<size>/<file>.<ext>) — deliberately not a general-purpose
// proxy, so this can't be abused to fetch arbitrary URLs through our Cloudflare account.

const ORIGIN_HOST = 'www.solight.sk';
const PATH_PATTERN = /^\/userdata\/cache\/images\/storecards\/\d+\/[a-z0-9._-]+\.(jpg|jpeg|png|webp)$/i;
const CACHE_SECONDS = 60 * 60 * 24 * 30; // 30 days

export default {
  async fetch(request, env, ctx) {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method not allowed', { status: 405 });
    }

    const url = new URL(request.url);
    if (!PATH_PATTERN.test(url.pathname)) {
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

// ATOS image proxy — caching relay in front of shop.atoselektro.cz's image CDN.
//
// Why this exists: Shoptet's automatic import gets HTTP 403 / connection timeout when it tries
// to download ATOS product images directly (confirmed repeatedly in Shoptet's own import log —
// it happens on both the old img.asp endpoint and the img0-3.atoselektro.cz static CDN, so it's
// an IP-level block/rate-limit against Shoptet's server, not a URL problem). Cloudflare's edge
// network fetches the origin instead — Shoptet then only ever talks to this Worker's own domain.
//
// Two routes, both deliberately narrow (not a general-purpose proxy) so this can't be abused to
// fetch arbitrary URLs through our Cloudflare account:
//   - /x_ien<id>.jpg, /x_i<id>.jpg, /x_ies<id>.jpg -> the static img0-3.atoselektro.cz CDN
//     (fetch-atos-images.js's primary image source).
//   - /imgasp?attid=<id> or /imgasp?stiid=<id> -> shop.atoselektro.cz/img.asp, the feed's own
//     fallback URL for the ~0.4% of products with no static-CDN image at all. Confirmed by hand
//     (2026-08-14) that img.asp itself works fine from a non-Shoptet IP — it's the same
//     IP-level block as the CDN, not a broken URL — so proxying it the same way recovers those
//     images instead of dropping them.
//
// Caches aggressively (30 days) since these are static product photos that rarely change.

const CDN_HOST = 'img0.atoselektro.cz'; // any of img0-3 are interchangeable mirrors
const ASP_HOST = 'shop.atoselektro.cz';
const FILENAME_PATTERN = /^x_(?:ien|ies|i)\d+\.jpg$/;
const CACHE_SECONDS = 60 * 60 * 24 * 30; // 30 days

function resolveOriginUrl(url) {
  const filename = url.pathname.slice(1);
  if (FILENAME_PATTERN.test(filename)) {
    return `https://${CDN_HOST}/${filename}`;
  }
  if (url.pathname === '/imgasp') {
    const attid = url.searchParams.get('attid');
    const stiid = url.searchParams.get('stiid');
    if (attid && /^\d+$/.test(attid)) return `https://${ASP_HOST}/img.asp?attid=${attid}`;
    if (stiid && /^\d+$/.test(stiid)) return `https://${ASP_HOST}/img.asp?stiid=${stiid}`;
  }
  return null;
}

export default {
  async fetch(request, env, ctx) {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method not allowed', { status: 405 });
    }

    const url = new URL(request.url);
    const originUrl = resolveOriginUrl(url);
    if (!originUrl) {
      return new Response('Not found', { status: 404 });
    }

    const cache = caches.default;
    const cacheKey = new Request(url.toString(), request);
    let response = await cache.match(cacheKey);
    if (response) return response;

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

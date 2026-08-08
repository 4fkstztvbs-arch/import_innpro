// Builds a code -> [image URLs] map for ATOS products from the StoItemBase_El result type,
// using the static img{0-3}.atoselektro.cz CDN instead of the dynamic img.asp script.
//
// Why this exists: ATOS's own feed (StoItemShoptet_El) embeds img.asp?attid=... URLs, and
// Shoptet's automatic import gets HTTP 429/403/timeout from shop.atoselektro.cz when it tries
// to bulk-download those (confirmed via Shoptet's own import log, 6.8. and 8.8.2026). The
// public storefront (shop.atoselektro.cz) instead serves images from img0-img3.atoselektro.cz,
// which are static CDN mirrors — confirmed by hand:
//   - the SEO slug in the path is cosmetic; only the trailing _ien<id>/_ies<id>.jpg suffix
//     is used for routing (any slug text, or none, resolves to the same file)
//   - img0/img1/img2/img3 are interchangeable mirrors of the exact same file
//   - https://img{N}.atoselektro.cz/x_ien<StoItem.Id>.jpg -> main product photo
//     (this is the StoItem's "enlargement"-quality image, not the smaller default one)
//   - https://img{N}.atoselektro.cz/x_ies<ImgGal.Id>.jpg  -> one large gallery photo,
//     for each <ImgGal> entry whose <Tag> is "sys-gal-enl" (the "-thu" thumbnail variants
//     are skipped — we already have the same photo at full/enlargement quality)
//
// StoItemBase_El is only queryable via plain GetResult during ATOS's night window
// (21:00-07:00, same restriction as StoItemShoptet_El) — run this right before
// transform-atos.js in the same nightly job.
//
// Usage: node fetch-atos-images.js
// Required env vars: ATOS_URL_BASE (e.g. https://shop.atoselektro.cz/i6ws/Default.asmx/GetResult),
//                     ATOS_USERNAME, ATOS_PASSWORD
// Optional: ATOS_IMAGES_OUT (./data/atos-image-urls.json)

const fs = require('fs');
const path = require('path');
const { streamRecords } = require('./stream-records');

const USERNAME = process.env.ATOS_USERNAME;
const PASSWORD = process.env.ATOS_PASSWORD;
const OUT_PATH = process.env.ATOS_IMAGES_OUT || path.join(__dirname, '..', 'data', 'atos-image-urls.json');
// img0-img3 are interchangeable static mirrors (verified: identical file size/content on all
// four for the same id). Round-robin across them instead of hammering just one hostname, in
// case whatever rate-limited img.asp also applies per-hostname here.
const CDN_HOSTS = ['img0.atoselektro.cz', 'img1.atoselektro.cz', 'img2.atoselektro.cz', 'img3.atoselektro.cz'];
let cdnIndex = 0;
function nextCdnHost() {
  const host = CDN_HOSTS[cdnIndex % CDN_HOSTS.length];
  cdnIndex++;
  return host;
}

const HOST_URL = 'https://shop.atoselektro.cz/i6ws/Default.asmx/GetResult?resultType=StoItemBase_El';

function firstTag(xml, tag) {
  const m = xml.match(new RegExp(`<${tag}>([^<]*)</${tag}>`));
  return m ? m[1] : '';
}

async function main() {
  if (!USERNAME || !PASSWORD) {
    console.error('Missing ATOS_USERNAME / ATOS_PASSWORD environment variables.');
    process.exit(1);
  }

  const map = {};
  let total = 0, withImages = 0;

  await streamRecords(HOST_URL, 'StoItem', (rawXml) => {
    total++;
    const code = firstTag(rawXml, 'Code');
    if (!code) return;

    const urls = [];

    // Main image lives directly on StoItem, not inside an ImgGal block, so it's safe to
    // read <Id> here as long as we do it before scanning ImgGal sub-blocks below.
    const imgIs = firstTag(rawXml, 'ImgIs') === '1';
    const stiId = firstTag(rawXml, 'Id');
    if (imgIs && stiId) urls.push(`https://${nextCdnHost()}/x_ien${stiId}.jpg`);

    const galBlocks = rawXml.match(/<ImgGal>[\s\S]*?<\/ImgGal>/g) || [];
    for (const block of galBlocks) {
      const tag = firstTag(block, 'Tag');
      const galId = firstTag(block, 'Id');
      if (galId && tag === 'sys-gal-enl') urls.push(`https://${nextCdnHost()}/x_ies${galId}.jpg`);
    }

    if (urls.length) {
      map[code] = urls;
      withImages++;
    }
  }, { username: USERNAME, password: PASSWORD });

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(map, null, 0));

  console.log(`StoItemBase_El: ${total} produktov, ${withImages} s obrázkom (${OUT_PATH})`);
}

main().catch((err) => { console.error(err); process.exit(1); });

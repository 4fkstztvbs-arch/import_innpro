// Enriches an already-generated wiim.xml (from transform-wiim.js) with images and a Slovak
// product description scraped from audio.sk product pages — matched by our own <CODE>, via
// data/wiim-audiosk-enrichment.json (built by re-running the audio.sk scrape; see that file's
// header comment / the conversation that produced it for the scraping method and the
// third-party-content caveat that applies to this whole enrichment).
//
// Only the 16 WiiM SKUs audio.sk actually stocks get enriched — audio.sk doesn't carry
// accessories (remotes, stands) or a few color variants, so those keep the CZ description from
// transform-wiim.js untouched and get no images.
//
// Image URLs are rewritten to WIIM_AUDIOSK_PROXY_BASE (the cloudflare-worker-wiim-audiosk Worker
// domain) instead of linking to cdn.myshoptet.com directly — see that Worker's own header
// comment for why this isn't a plain hotlink. If the proxy base isn't set yet (e.g. testing
// before the Worker is deployed), falls back to the original audio.sk URL and warns.
//
// Usage: node enrich-wiim-audiosk.js
// Required env vars: WIIM_XML_IN, WIIM_AUDIOSK_JSON
// Optional: WIIM_XML_OUT (defaults to WIIM_XML_IN), WIIM_AUDIOSK_PROXY_BASE

const fs = require('fs');
const { streamRecords } = require('./stream-records');

const XML_IN = process.env.WIIM_XML_IN;
const JSON_IN = process.env.WIIM_AUDIOSK_JSON;
const XML_OUT = process.env.WIIM_XML_OUT || XML_IN;
const PROXY_BASE = process.env.WIIM_AUDIOSK_PROXY_BASE || '';

function xmlEscape(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function xmlCdata(s) { return '<![CDATA[' + String(s == null ? '' : s).replace(/]]>/g, ']]&gt;') + ']]>'; }
function imageAltFor(name, index, total) {
  return total > 1 ? `${name} - obrázok ${index + 1}` : name;
}

function proxiedUrl(originalUrl) {
  if (!PROXY_BASE) return originalUrl;
  const path = new URL(originalUrl).pathname;
  return PROXY_BASE.replace(/\/$/, '') + path;
}

async function main() {
  if (!XML_IN || !JSON_IN) {
    console.error('Missing WIIM_XML_IN / WIIM_AUDIOSK_JSON environment variables.');
    process.exit(1);
  }
  if (!PROXY_BASE) {
    console.warn('WARNING: WIIM_AUDIOSK_PROXY_BASE not set — images will link directly to ' +
      'audio.sk\'s CDN. Set it once cloudflare-worker-wiim-audiosk is deployed.');
  }

  const enrichment = JSON.parse(fs.readFileSync(JSON_IN, 'utf-8'));
  console.log(`Loaded audio.sk data for ${Object.keys(enrichment).length} product codes.`);

  const stats = { total: 0, matched: 0 };
  const outParts = ['<?xml version="1.0" encoding="utf-8"?>', '<SHOP>'];

  await streamRecords(XML_IN, 'SHOPITEM', (rawXml) => {
    stats.total++;
    const codeMatch = rawXml.match(/<CODE>([^<]*)<\/CODE>/);
    const code = codeMatch ? codeMatch[1].trim() : '';
    const data = code ? enrichment[code] : null;

    if (!data) { outParts.push(rawXml); return; }
    stats.matched++;
    let item = rawXml;

    if (data.images && data.images.length) {
      const nameMatch = item.match(/<NAME><!\[CDATA\[([\s\S]*?)\]\]><\/NAME>/);
      const name = nameMatch ? nameMatch[1] : '';
      const imageTags = data.images.map((u, i) =>
        `  <IMAGE description="${xmlEscape(imageAltFor(name, i, data.images.length))}">${xmlEscape(proxiedUrl(u))}</IMAGE>`).join('\n');
      item = item.replace('<AVAILABILITY>', `<IMAGES>\n${imageTags}\n</IMAGES>\n<AVAILABILITY>`);
    }

    if (data.description_html) {
      item = item.replace(/<DESCRIPTION>[\s\S]*?<\/DESCRIPTION>/, `<DESCRIPTION>${xmlCdata(data.description_html)}</DESCRIPTION>`);
    }
    if (data.short_description) {
      item = item.replace(/<SHORT_DESCRIPTION>[\s\S]*?<\/SHORT_DESCRIPTION>/, `<SHORT_DESCRIPTION>${xmlCdata(data.short_description)}</SHORT_DESCRIPTION>`);
    }

    outParts.push(item);
  });

  outParts.push('</SHOP>');
  fs.writeFileSync(XML_OUT, outParts.join('\n'), 'utf-8');

  console.log('Done.');
  console.log(JSON.stringify(stats, null, 2));
  console.log('Output written to', XML_OUT);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

'use strict';

// Shared contract with apply-missing-availability: a URL-only availability update
// is deliberately not a complete product and must survive content/dedupe passes.
function field(xml, name) {
  const match = xml.match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)<\\/${name}>`, 'i'));
  return match ? match[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(parseInt(n, 10)))
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'").replace(/&amp;/g, '&').trim() : '';
}

function isUnavailableUpdate(xml) {
  return !field(xml, 'NAME')
    && field(xml, 'VISIBILITY') === 'detailOnly'
    && field(xml, 'AVAILABILITY') === (process.env.MISSING_PRODUCT_AVAILABILITY || 'Vypredané');
}

module.exports = { isUnavailableUpdate };

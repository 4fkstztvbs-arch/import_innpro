// Parses a single <SHOPITEM> block from BASYS's own Heureka-format XML feed (they don't offer a
// dedicated B2B/dropship feed — the only thing available is the same feed they send to Heureka.sk
// for the price-comparison listing, so we reuse it as our product source too).
//
// Notably this feed has NO purchase price (only BASYS's own retail PRICE_VAT) and NO EAN —
// see transform-basys.js for how the purchase price is estimated and README for the caveat.

const he = require('he');

function text(m) { return m ? he.decode(m[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim()) : ''; }
function field(rawXml, tag) {
  const m = rawXml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return text(m);
}
function toFloat(s) {
  if (!s) return 0;
  const v = parseFloat(String(s).replace(',', '.'));
  return isNaN(v) ? 0 : v;
}

function parseBasysProduct(rawXml) {
  const itemId = field(rawXml, 'ITEM_ID');
  const name = field(rawXml, 'PRODUCTNAME');
  if (!itemId || !name) return null;

  const manufacturer = field(rawXml, 'MANUFACTURER');
  // DESCRIPTION is HTML-entity-escaped one extra time beyond normal XML escaping (e.g. "&lt;p&gt;"
  // instead of "<p>") — he.decode() in text()/field() above only undoes it once; the resulting
  // string is still real HTML (with entities like &amp;yacute; inside it) that needs a second pass.
  const description = he.decode(field(rawXml, 'DESCRIPTION'));
  const url = field(rawXml, 'URL');
  const imgUrl = field(rawXml, 'IMGURL');
  const imgUrlAlt = field(rawXml, 'IMGURL_ALTERNATIVE');
  const images = [imgUrl, imgUrlAlt].filter(Boolean);
  const videoUrl = field(rawXml, 'VIDEO_URL');
  const priceInclVat = toFloat(field(rawXml, 'PRICE_VAT'));
  const categoryText = field(rawXml, 'CATEGORYTEXT');
  const deliveryDate = field(rawXml, 'DELIVERY_DATE');

  return {
    itemId, name, manufacturer, description, url, images, videoUrl,
    priceInclVat, categoryText, deliveryDate,
  };
}

module.exports = { parseBasysProduct };

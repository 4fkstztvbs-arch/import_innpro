// Parses the DisplayME Sonos catalog export (data/sonos-displayme-catalog.xml) into structured
// product records. This file is a one-time/periodic manual export (like the WiiM PDF) — there's
// no known live URL for it, unlike the DisplayME stock/price feed (see fetch-sonos-stock.js).
//
// Dedup + filtering happen here (not in transform-sonos.js) since they're inherent properties of
// this specific source's data quality, not policy the transform step should own:
//  - Some SKUs appear more than once (e.g. "Sonos Beam Black" appears twice, neither with an
//    EAN-worthy category; "Sonos One (Gen2) White" / "Sonos One White" share a SKU) — kept entry
//    is whichever has more of: a real (multi-segment) category, a price, and at least one image.
//  - "category" with only one segment (e.g. bare "Audio") isn't enough to place in the shop's
//    tree, so it's treated the same as no category at all.

const { XMLParser } = require('fast-xml-parser');

const parser = new XMLParser({
  ignoreAttributes: true,
  isArray: (name) => ['item', 'files', 'param-audio', 'param-gril', 'param-pool-cleaners'].includes(name)
    || name.startsWith('param-'),
});

function text(v) {
  if (v === undefined || v === null) return '';
  if (typeof v === 'object') return '';
  return String(v).trim();
}
function num(v) {
  const n = parseFloat(text(v));
  return isNaN(n) ? undefined : n;
}
function hasRealCategory(cat) {
  return !!cat && cat.split(',').length >= 2;
}
function completenessScore(rec) {
  return (hasRealCategory(rec.category) ? 2 : 0) + (rec.priceEur > 0 ? 1 : 0) + (rec.images.length ? 1 : 0);
}

function parseSonosCatalog(xmlText) {
  const doc = parser.parse(xmlText);
  const rawItems = (doc.data && doc.data.item) || [];

  const bySku = new Map();
  rawItems.forEach((raw) => {
    const sku = text(raw.sku);
    if (!sku) return;

    const params = {};
    // param-audio is the only populated param-* block for this brand (param-gril and
    // param-pool-cleaners are empty template leftovers from DisplayME's generic schema).
    const pa = raw['param-audio'];
    const paBlock = Array.isArray(pa) ? pa[0] : pa;
    if (paBlock && typeof paBlock === 'object') {
      for (const [k, v] of Object.entries(paBlock)) {
        const t = text(v);
        if (t) params[k] = t;
      }
    }

    const images = (raw.files || [])
      .map((f) => text(f && f.url))
      .filter(Boolean);

    const rec = {
      sku,
      ean: text(raw.ean_code),
      name: text(raw.name),
      description: text(raw.description),
      descriptionHtml: text(raw.description_html),
      packageContents: text(raw['package-contents']),
      priceEur: num(raw['rrp-retail-price-eur']) || 0,
      priceCzk: num(raw['rrp-retail-price-czk']) || 0,
      category: text(raw.category),
      productLine: text(raw['product-line']),
      images,
      params,
      lengthNettoCm: num(raw['length-netto']),
      widthNettoCm: num(raw['width-netto']),
      heightNettoCm: num(raw['height-netto']),
      weightNettoKg: num(raw['weight-netto']),
      lengthBruttoCm: num(raw['length-brutto']),
      widthBruttoCm: num(raw['width-brutto']),
      heightBruttoCm: num(raw['height-brutto']),
      weightBruttoKg: num(raw['weight-brutto']),
      masterCartonWeightKg: num(raw['master-carton-weight']),
      masterCartonLengthCm: num(raw['master-carton-length']),
      masterCartonWidthCm: num(raw['master-carton-width']),
      masterCartonHeightCm: num(raw['master-carton-height']),
      unitsPerCase: num(raw['units-per-case']),
      unitsPerMasterCarton: num(raw['units-per-master-carton']),
      unitsPerPalette: num(raw['units-per-palette']),
      unitsPerPaletteLayerQty: num(raw['units-per-palette-layer-qty']),
      countryOfOrigin: text(raw['country-of-origin']) || text(raw['country-code']),
      hsCode: text(raw['hs-code']),
    };

    const existing = bySku.get(sku);
    if (!existing || completenessScore(rec) > completenessScore(existing)) {
      bySku.set(sku, rec);
    }
  });

  return [...bySku.values()];
}

module.exports = { parseSonosCatalog, hasRealCategory };

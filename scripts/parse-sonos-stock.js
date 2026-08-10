// Fetches DisplayME's live stock/price feed (all brands they distribute, not just Sonos) and
// returns Sonos rows keyed by SKU (ItemCode). This is the freshness source for price and stock
// quantity — the catalog export (parse-sonos-catalog.js) has neither.
//
// PriceMOCeur/PriceMOCczk in this feed are EX-VAT, unlike the catalog's rrp-retail-price-eur
// (already VAT-inclusive) — confirmed by cross-checking overlapping SKUs: catalog price ==
// live price * (1 + VatRate/100) to the cent, for every matched product. incVatPriceEur below
// applies that conversion so callers always get a VAT-inclusive retail price, matching the
// catalog field and every other supplier transform in this repo (PRICE_VAT).

const { XMLParser } = require('fast-xml-parser');

const parser = new XMLParser({ ignoreAttributes: true, isArray: (name) => name === 'Row' });

function text(v) { return v === undefined || v === null ? '' : String(v).trim(); }
function num(v) { const n = parseFloat(text(v)); return isNaN(n) ? 0 : n; }

async function fetchSonosStock(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Stock feed request failed: HTTP ${res.status}`);
  const xmlText = await res.text();
  const doc = parser.parse(xmlText);
  const rows = (doc.Data && doc.Data.Rows && doc.Data.Rows.Row) || [];

  const bySku = new Map();
  rows.forEach((row) => {
    const name = text(row.ItemName);
    if (!/sonos/i.test(name)) return;
    const sku = text(row.ItemCode);
    if (!sku) return;
    const vatRate = num(row.VatRate);
    const priceEurExVat = num(row.PriceMOCeur);
    bySku.set(sku, {
      sku,
      ean: text(row.CodeBars),
      name,
      qty: num(row.DispQty),
      vatRate,
      incVatPriceEur: priceEurExVat * (1 + vatRate / 100),
    });
  });
  return bySku;
}

module.exports = { fetchSonosStock };

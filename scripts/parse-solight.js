const { XMLParser } = require('fast-xml-parser');

const parser = new XMLParser({
  ignoreAttributes: true,
  textNodeName: '#text',
  isArray: (name) => ['PARAM', 'ProductDocument'].includes(name),
});

function asArray(v) { return v === undefined ? [] : (Array.isArray(v) ? v : [v]); }
function toFloatComma(s) {
  if (s === undefined || s === null || s === '') return 0;
  const v = parseFloat(String(s).replace(',', '.'));
  return isNaN(v) ? 0 : v;
}
function text(v) {
  if (v === undefined || v === null) return '';
  if (Array.isArray(v)) return text(v[0]);
  if (typeof v === 'object') return String(v['#text'] || '');
  return String(v).trim();
}

function parseSolightProduct(rawXml) {
  const doc = parser.parse(rawXml);
  const p = doc.product;
  if (!p) return null;

  const code = text(p.objednaci_cislo);
  const ean = text(p.EAN);
  const name = text(p.sk_nazev);
  const description = text(p.sk_popis);
  const shortDescFallback = text(p.sk_sekce_nazev);
  const manufacturer = text(p.brand) || 'Solight';
  const warranty = text(p.guaranteelength);
  const weightKg = toFloatComma(text(p.weight));
  const costEUR = toFloatComma(text(p.eur_vase_cena_bez_dph));
  const eshopPriceEUR = toFloatComma(text(p.eur_eshop_price));
  const stockQty = toFloatComma(text(p.skladem));
  const deliveryDate = text(p.delivery_date);
  const categoryRaw = text(p.sk_hlsekce_nazev);
  const videoLink = text(p.videolink);

  const images = [];
  if (p.donwload_links) {
    for (let i = 0; i < 20; i++) {
      const key = 'donwload_link' + i;
      if (p.donwload_links[key] === undefined) break;
      const raw = text(p.donwload_links[key]);
      if (!raw) break;
      images.push(raw);
    }
  }

  const docs = p.ProductDocuments ? asArray(p.ProductDocuments.ProductDocument).map(text).filter(Boolean) : [];

  const params = [];
  for (const par of asArray(p.PARAM)) {
    const pn = text(par.PARAM_NAME);
    const pv = text(par.VAL);
    if (pn && pv) params.push(`${pn};${pv}`);
  }

  return {
    code, ean, name, description, shortDescFallback, manufacturer, warranty, weightKg,
    costEUR, eshopPriceEUR, stockQty, deliveryDate, categoryRaw, videoLink, images, docs, params,
  };
}

module.exports = { parseSolightProduct };

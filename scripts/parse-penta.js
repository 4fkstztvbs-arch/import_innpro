const { XMLParser } = require('fast-xml-parser');

const parser = new XMLParser({
  ignoreAttributes: true,
  textNodeName: '#text',
  isArray: (name) => ['CATEGORY', 'IMAGE', 'TEXT_PROPERTY', 'CODE'].includes(name),
});

function asArray(v) { return v === undefined ? [] : (Array.isArray(v) ? v : [v]); }
function toFloat(s) {
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

// Penta's StoItemShoptet_El feed (i6ws, same Cybersoft I6 webservice platform as ATOS) already
// sends a computed <PRICE_VAT> — their own recommended retail price incl. VAT — plus a
// <DEFAULT_CATEGORY> pointing at one of the (possibly several) <CATEGORY> full paths. Unlike
// ATOS, no currency conversion is needed: Penta bills SK dealers directly in EUR.
function parsePentaItem(rawXml) {
  const doc = parser.parse(rawXml);
  const it = doc.SHOPITEM;
  if (!it) return null;

  const code = text(it.CODE);
  const ean = text(it.EAN);
  const name = text(it.NAME);
  const manufacturer = text(it.MANUFACTURER);
  const shortDescription = text(it.SHORT_DESCRIPTION);
  const description = text(it.DESCRIPTION);
  const warranty = text(it.WARRANTY);
  const priceVat = toFloat(it.PRICE_VAT);
  const purchasePrice = toFloat(it.PURCHASE_PRICE);
  const vat = it.VAT !== undefined ? String(Math.round(parseFloat(text(it.VAT)))) : '23';
  const weightKg = it.LOGISTIC ? toFloat(it.LOGISTIC.WEIGHT) : 0;
  const heightCm = it.LOGISTIC ? toFloat(it.LOGISTIC.HEIGHT) : 0;
  const widthCm = it.LOGISTIC ? toFloat(it.LOGISTIC.WIDTH) : 0;
  const depthCm = it.LOGISTIC ? toFloat(it.LOGISTIC.DEPTH) : 0;
  const stockAmount = it.STOCK ? toFloat(it.STOCK.AMOUNT) : 0;
  const availabilityRaw = text(it.AVAILABILITY).toLowerCase();

  const categoryTexts = it.CATEGORIES ? asArray(it.CATEGORIES.CATEGORY).map(text) : [];
  const defaultCategoryRaw = it.CATEGORIES ? text(it.CATEGORIES.DEFAULT_CATEGORY) : '';

  const images = it.IMAGES ? asArray(it.IMAGES.IMAGE).map(text).filter(Boolean) : [];

  const params = [];
  if (it.TEXT_PROPERTIES) {
    for (const tp of asArray(it.TEXT_PROPERTIES.TEXT_PROPERTY)) {
      const pn = text(tp.NAME);
      const pv = text(tp.VALUE);
      if (pn && pv) params.push(`${pn};${pv}`);
    }
  }

  const alternatives = it.ALTERNATIVE_PRODUCTS ? asArray(it.ALTERNATIVE_PRODUCTS.CODE).map(text).filter(Boolean) : [];

  let actionFlag = '0', newFlag = '0', tipFlag = '0';
  if (it.FLAGS) {
    actionFlag = text(it.FLAGS.ACTION) === '1' ? '1' : '0';
    newFlag = text(it.FLAGS.NEW) === '1' ? '1' : '0';
    tipFlag = text(it.FLAGS.TIP) === '1' ? '1' : '0';
  }

  return {
    code, ean, name, manufacturer, shortDescription, description, warranty,
    priceVat, purchasePrice, vat, weightKg, heightCm, widthCm, depthCm,
    stockAmount, availabilityRaw, categoryTexts, defaultCategoryRaw,
    images, params, alternatives, actionFlag, newFlag, tipFlag,
  };
}

module.exports = { parsePentaItem };

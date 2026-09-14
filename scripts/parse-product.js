const { XMLParser } = require('fast-xml-parser');
const { fixDescriptionImageUrls } = require('./lib/fix-description-image-urls');

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text',
  isArray: (name) => ['name', 'long_desc', 'short_desc', 'image', 'stock', 'parameter', 'value', 'file', 'size'].includes(name),
});

function asArray(v) { return v === undefined ? [] : (Array.isArray(v) ? v : [v]); }
function toFloat(s) {
  if (s === undefined || s === null || s === '') return 0;
  const v = parseFloat(String(s).replace(',', '.'));
  return isNaN(v) ? 0 : v;
}

// Picks the Slovak (xml:lang="slo") variant of a repeated <name>/<long_desc> node, falling
// back to the first available language if no Slovak text exists for this product — identical
// behaviour to the browser tool's innSlo() helper.
function pickSlovak(nodes) {
  const arr = asArray(nodes);
  let fallback = '';
  for (const n of arr) {
    const text = typeof n === 'object' ? (n['#text'] || '') : String(n || '');
    const lang = typeof n === 'object' ? n['@_xml:lang'] : undefined;
    if (!fallback && text) fallback = text;
    if (lang === 'slo') return text;
  }
  return fallback;
}

function parseProduct(rawXml) {
  const doc = parser.parse(rawXml);
  const p = doc.product;
  if (!p) return null;

  const id = p['@_id'] || '';
  const codeOnCard = p['@_code_on_card'] || '';
  const vatRaw = p['@_vat'];
  const vat = vatRaw !== undefined ? String(Math.round(parseFloat(vatRaw))) : '23';

  const desc = p.description || {};
  const name = pickSlovak(desc.name);
  const longDesc = fixDescriptionImageUrls(pickSlovak(desc.long_desc));

  const producer = p.producer || {};
  const manufacturer = producer['@_name'] || '';

  const category = (p.category && p.category['@_name']) || '';

  const warranty = (p.warranty && p.warranty['@_period']) || '';

  const priceNode = p.price || {};
  const priceNet = toFloat(priceNode['@_net']);

  // size-level fields (regular products have exactly one <size>)
  const sizesNode = p.sizes || {};
  const sizeArr = asArray(sizesNode.size);
  const size0 = sizeArr[0] || {};
  const ean = size0['@_iaiext:code_external'] || '';
  const weightG = toFloat(size0['@_weight']);

  let stock = 0;
  for (const sz of sizeArr) {
    const stockArr = asArray((sizesNode.size ? sz : {}).stock);
    for (const st of stockArr) stock += toFloat(st['@_quantity']);
  }
  // (regular products: sizes.size.stock; the loop above already covers this since sz IS the size)

  // images (large only, matching the browser tool)
  const images = [];
  const imagesNode = p.images || {};
  const largeNode = imagesNode.large || {};
  for (const img of asArray(largeNode.image)) {
    const u = typeof img === 'object' ? img['@_url'] : undefined;
    if (u) images.push(u);
  }

  // parameters (customer-facing specs only)
  const BLACKLIST = new Set([
    'Stiahnuť manuál', 'Informácie o generovaní údajov', 'GPSR Link', 'PPWR', 'base_xml',
    'Wybierz wariant', 'Kod producenta', 'Stan', 'Stan opakowania', 'Rodzaj produktu',
    'Kolejna dostawa', 'Ostatnia dostawa', 'Množstvo v kartóne', 'HS Code',
    'Minimalna liczba towaru w zamówieniu detalicznym', 'Minimalna liczba towaru w zamówieniu hurtowym',
  ]);
  const params = [];
  let nextDeliveryDate = '';
  // InnPro pri časti tovaru predáva len po balíkoch — napr. fólia 088959 má minimálny odber 5 ks.
  // Posiela to ako parameter, ktorý je na BLACKLIST-e (do popisu produktu nepatrí), ale samotná
  // hodnota je pre nás dôležitá: bez nej si zákazník objedná 1 ks a my ho od dodávateľa nedokážeme
  // kúpiť inak než po piatich. Berie sa prvé celé číslo v hodnote, lebo InnPro píše raz "5" a inde
  // "5 szt." Odkladá sa oboje — maloobchodné aj veľkoobchodné minimum — kým sa neoverí, ktoré
  // zodpovedá tomu, čo dodávateľ naozaj vyžaduje od nás.
  let minOrderRetail = 0;
  let minOrderWholesale = 0;
  const paramsNode = p.parameters || {};
  for (const par of asArray(paramsNode.parameter)) {
    const pname = par['@_name'];
    if (pname === 'Kolejna dostawa') {
      const v0 = asArray(par.value)[0];
      if (v0) nextDeliveryDate = v0['@_name'] || '';
      continue;
    }
    if (pname === 'Minimalna liczba towaru w zamówieniu detalicznym'
        || pname === 'Minimalna liczba towaru w zamówieniu hurtowym') {
      const v0 = asArray(par.value)[0];
      const n = parseInt(String(v0 ? v0['@_name'] : '').replace(/[^\d]/g, ''), 10);
      if (Number.isFinite(n) && n > 1) {
        if (pname.endsWith('detalicznym')) minOrderRetail = n; else minOrderWholesale = n;
      }
      continue;
    }
    if (par['@_hide'] === 'y' || BLACKLIST.has(pname)) continue;
    const v0 = asArray(par.value)[0];
    const pval = v0 ? v0['@_name'] : '';
    if (pname && pval) params.push(`${pname};${pval}`);
  }

  // PDF attachments
  const docs = [];
  const attNode = p.attachments || {};
  for (const f of asArray(attNode.file)) {
    if (f['@_url']) docs.push(f['@_url']);
  }

  return {
    id, codeOnCard, vat, name, longDesc, manufacturer, category, warranty,
    priceNet, ean, weightKg: weightG / 1000, stock, images, params, docs, nextDeliveryDate,
    minOrderRetail, minOrderWholesale,
  };
}

module.exports = { parseProduct };

const { XMLParser } = require('fast-xml-parser');
const he = require('he');

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text',
  isArray: (name) => ['picture', 'category', 'file', 'movie'].includes(name),
});

const MON_BRAND_MAP = {
  MON: 'Monacor', IMG: 'IMG Stage Line', JTS: 'JTS', NEU: 'Neutrik', BZBGE: 'BZBGEAR',
  YUASA: 'Yuasa', PAN: 'Panasonic', HEL: 'Helvia', HELVIA: 'Helvia',
  BoomT: 'BoomTone DJ', 'BoomTone DJ': 'BoomTone DJ', Eloka: 'Elokance', Elokance: 'Elokance',
};

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
// The feed's text (name, description) is HTML-entity-escaped ONE extra time beyond normal XML
// escaping — matching the browser tool's htmlUnescapeOnce(), decode entities exactly once more.
function unescapeOnce(str) {
  return str ? he.decode(str) : '';
}
function parseWeight(raw) {
  const m = (raw || '').match(/([\d.,]+)/);
  return m ? parseFloat(m[1].replace(',', '.')) : 0;
}

function parseMonacorProduct(rawXml) {
  const doc = parser.parse(rawXml);
  const p = doc.product;
  if (!p) return null;

  const id = text(p.id);
  const ordercode = text(p.ordercode);
  const number = text(p.number);
  const ean = text(p.ean);
  const baseName = unescapeOnce(text(p.name));
  const priceRaw = text(p.price);
  const basePrice = toFloat(priceRaw);
  const brandCode = text(p.manufacturer);
  const manufacturer = MON_BRAND_MAP[brandCode] || brandCode;
  const weightKg = parseWeight(text(p.weight));
  const stock = toFloat(p.stock);
  const foreignstock = toFloat(p.foreignstock);
  const description = unescapeOnce(text(p.description));

  const categoryTexts = p.categories ? asArray(p.categories.category).map((c) => text(c)) : [];

  const images = [];
  if (p.pictures && p.pictures.picture) {
    const pics = asArray(p.pictures.picture)
      .map((pic) => ({ pos: parseInt((pic && pic['@_position']) || '0', 10), url: text(pic) }))
      .filter((x) => x.url)
      .sort((a, b) => a.pos - b.pos);
    pics.forEach((x) => images.push(x.url));
  }

  const files = p.files && p.files.file ? asArray(p.files.file).map(text).filter(Boolean) : [];
  const software = p.software && p.software.file ? asArray(p.software.file).map(text).filter(Boolean) : [];
  const movies = p.movies && p.movies.movie ? asArray(p.movies.movie).map(text).filter(Boolean) : [];

  return {
    id, ordercode, number, ean, baseName, basePrice, brandCode, manufacturer,
    weightKg, stock, foreignstock, description, categoryTexts, images, files, software, movies,
  };
}

module.exports = { parseMonacorProduct };

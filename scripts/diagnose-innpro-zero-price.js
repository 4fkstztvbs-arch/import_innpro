// One-off diagnostic: why do ~650 InnPro products end up with a zero cost (cenove-anomalie-innpro.md)?
// Streams the full and light feeds, lists every product whose cost would be <= 0 and shows the raw
// price in each feed. Env: INNPRO_FULL_URL, INNPRO_LIGHT_URL. Writes CSV + a raw XML sample.
const fs = require('fs');
const { XMLParser } = require('fast-xml-parser');
const { streamProducts } = require('./stream-products');
const { parseProduct } = require('./parse-product');

const q = (v) => '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';
const OUT = process.env.DIAG_OUT || 'data/innpro-diagnostic';

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const light = new Map();
  const lp = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
  let lightSample = null;
  await streamProducts(process.env.INNPRO_LIGHT_URL, (raw) => {
    const p = lp.parse(raw).product;
    if (!p) return;
    const net = p.price ? parseFloat(String(p.price['@_net'] || '0').replace(',', '.')) : 0;
    light.set(p['@_id'], net);
    if (!lightSample && net <= 0) lightSample = raw;
  });
  const rows = [['id', 'code_on_card', 'name', 'manufacturer', 'category', 'full_price_net', 'in_light', 'light_price_net', 'stock', 'ean']];
  const stats = { full: 0, zeroCost: 0, zeroFull_noLight: 0, zeroFull_lightZero: 0, light: light.size };
  let fullSample = null;
  await streamProducts(process.env.INNPRO_FULL_URL, (raw) => {
    stats.full++;
    let p; try { p = parseProduct(raw); } catch (e) { return; }
    if (!p || !p.name) return;
    const lightNet = light.get(p.id);
    const cost = lightNet > 0 ? lightNet : p.priceNet;
    if (cost > 0) return;
    stats.zeroCost++;
    if (lightNet === undefined) stats.zeroFull_noLight++; else stats.zeroFull_lightZero++;
    if (!fullSample) fullSample = raw.slice(0, 4000);
    rows.push([p.id, p.codeOnCard, p.name, p.manufacturer, p.category, p.priceNet, lightNet === undefined ? 'nie' : 'ano', lightNet === undefined ? '' : lightNet, p.stock, p.ean]);
  });
  fs.writeFileSync(`${OUT}/innpro-nulova-cena.csv`, rows.map((r) => r.map(q).join(',')).join('\n') + '\n');
  fs.writeFileSync(`${OUT}/sumar.json`, JSON.stringify(stats, null, 2) + '\n');
  fs.writeFileSync(`${OUT}/vzorka-full.xml.txt`, String(fullSample || ''));
  fs.writeFileSync(`${OUT}/vzorka-light.xml.txt`, String(lightSample || ''));
  console.log(JSON.stringify(stats));
}
main().catch((e) => { console.error(e); process.exit(1); });

// Pomocka k scripts/cross-supplier-preferences.json: prejde vsetky output/*.xml, najde produkty,
// ktore dodava viac dodavatelov naraz (parovanie zhodne s lib/cross-supplier-dedupe.js), a pri
// kazdej znacke povie, ktory dodavatel je lacnejsi na NASEJ NAKUPNEJ CENE (PURCHASE_PRICE),
// model po modeli. Vysledok sa rucne prepise do preferencii - zamerne to nie je automaticke,
// lebo cena nie je jediny faktor (dostupnost, dodacia lehota, kvalita popisov).
//
// Usage: node scripts/compare-supplier-purchase-prices.js

const fs = require('fs'), path = require('path');
const { modelOf } = require('./lib/cross-supplier-dedupe');
const OUT = path.join(__dirname, '..', 'output');
const cd = (it, t) => {
  const m = it.match(new RegExp(`<${t}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${t}>`))
    || it.match(new RegExp(`<${t}>([^<]*)</${t}>`));
  return m ? m[1].trim() : '';
};
const idx = new Map();
for (const f of fs.readdirSync(OUT).filter((x) => x.endsWith('.xml'))) {
  const src = f.replace('.xml', '');
  for (const it of fs.readFileSync(path.join(OUT, f), 'utf8').match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g) || []) {
    const man = cd(it, 'MANUFACTURER');
    if (!man) continue;
    const name = cd(it, 'PRODUCTNAME') || cd(it, 'NAME');
    const m = modelOf(name);
    if (!m) continue;
    const buy = parseFloat((cd(it, 'PURCHASE_PRICE') || '0').replace(',', '.')) || 0;
    const k = man.toLowerCase() + ' ' + m;
    if (!idx.has(k)) idx.set(k, { man, model: m, per: {} });
    if (!idx.get(k).per[src]) idx.get(k).per[src] = { src, name, buy };
  }
}
const byBrand = new Map();
for (const v of idx.values()) {
  if (Object.keys(v.per).length < 2) continue;
  if (!byBrand.has(v.man)) byBrand.set(v.man, []);
  byBrand.get(v.man).push(v);
}
const out = {};
for (const [brand, list] of [...byBrand].sort((a, b) => b[1].length - a[1].length)) {
  const wins = {};
  let noPrice = 0;
  for (const v of list) {
    const ps = Object.values(v.per).filter((x) => x.buy > 0.5);
    if (ps.length < Object.keys(v.per).length) { noPrice++; continue; }
    const w = ps.reduce((a, b) => (a.buy <= b.buy ? a : b)).src;
    wins[w] = (wins[w] || 0) + 1;
  }
  const winner = Object.entries(wins).sort((a, b) => b[1] - a[1])[0];
  out[brand] = winner ? winner[0] : null;
  console.log(`${brand.padEnd(14)} ${String(list.length).padStart(3)} zhod  ${JSON.stringify(wins)}`
    + `${noPrice ? ' bez ceny:' + noPrice : ''}  -> ${winner ? winner[0] : 'NEROZHODNUTE'}`);
}

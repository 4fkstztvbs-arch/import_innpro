// Read-only diagnostika: čo ATOS i6ws hovorí o jednom kódy produktu (sklad, ByCode výstupy).
const https = require('https');
const USER = process.env.ATOS_USERNAME; const PASS = process.env.ATOS_PASSWORD;
if (!USER || !PASS) { console.error('Missing credentials'); process.exit(1); }
const CODE = process.env.PROBE_CODE || 'ABT-A500009126';
function get(path, limit = 40000000) {
  return new Promise((resolve) => {
    const req = https.get({ host: 'shop.atoselektro.cz', path, auth: `${USER}:${PASS}`, timeout: 120000, headers: { 'User-Agent': 'PremiumStore-probe' } }, (res) => {
      const chunks = []; let size = 0;
      res.on('data', (c) => { size += c.length; if (size <= limit) chunks.push(c); });
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString('utf8') }));
    });
    req.on('timeout', () => { req.destroy(); resolve({ status: 0, body: 'timeout' }); });
    req.on('error', (e) => resolve({ status: 0, body: String(e.message) }));
  });
}
const strip = (s) => s.replace(/<(DESCRIPTION|SHORT_DESCRIPTION|Note|Description)\b[\s\S]*?<\/\1>/gi, '<$1>…</$1>');
(async () => {
  const raw = CODE.replace(/^ABT-/, '');
  const stock = await get('/i6ws/Default.asmx/GetResult?resultType=StoItemQtyFree_El');
  console.log('stock export HTTP', stock.status, 'bytes', stock.body.length);
  const recs = [...stock.body.matchAll(/<(?:[\w.-]+:)?StoItem\b[^>]*?(?:\/>|>[\s\S]*?<\/(?:[\w.-]+:)?StoItem\s*>)/gi)].map(m => m[0]);
  console.log('records', recs.length);
  for (const c of [CODE, raw]) {
    const hit = recs.filter(r => r.toUpperCase().includes(c.toUpperCase()));
    console.log(`--- stock record for ${c}: ${hit.length}`);
    hit.slice(0, 3).forEach(h => console.log(h.slice(0, 1500)));
  }
  console.log('sample records:'); recs.slice(0, 2).forEach(r => console.log(r.slice(0, 600)));
  const attrs = new Map();
  for (const r of recs) for (const m of r.matchAll(/\b([A-Za-z]\w*)=/g)) attrs.set(m[1], (attrs.get(m[1]) || 0) + 1);
  console.log('attributes:', JSON.stringify([...attrs]));
  for (const t of ['StoItemQtyFree_El', 'StoItemShoptet_El', 'StoItemBase_El']) for (const c of [CODE, raw]) {
    const r = await get(`/i6ws/Default.asmx/GetResultByCode?resultType=${t}&code=${encodeURIComponent(c)}`, 400000);
    console.log(`--- ByCode ${t} ${c}: HTTP ${r.status}, ${r.body.length} B`);
    console.log(strip(r.body).replace(/\s+/g, ' ').slice(0, 2500));
  }
})();

// Follow-up probe of ATOS i6ws: do GetResultByCode / GetResultByFromTo (which, unlike GetResult,
// may not be restricted to the night window) return product data incl. weight?
// Required env: ATOS_USERNAME, ATOS_PASSWORD. Optional: CODES (comma separated).
const https = require('https');
const fs = require('fs');
const USER = process.env.ATOS_USERNAME; const PASS = process.env.ATOS_PASSWORD;
if (!USER || !PASS) { console.error('Missing credentials'); process.exit(1); }
const CODES = (process.env.CODES || 'TIP-14530826,CMP-10055,EMO1905110001,LEC-KM2021,EMO1525736409,CMP-TO-53630').split(',');
const TYPES = ['StoItemShoptet_El', 'StoItemBase_El', 'StoItemQtyFree_El'];
const WEIGHT_RE = /weight|wght|hmotn|brutto|netto|gross|\bkg\b|mass|vaha|váha|logistic/i;
const out = []; const log = (s = '') => { console.log(s); out.push(s); };

function get(path, limit = 300000) {
  return new Promise((resolve) => {
    const req = https.get({ host: 'shop.atoselektro.cz', path, auth: `${USER}:${PASS}`, timeout: 90000, headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      const chunks = []; let size = 0;
      res.on('data', (c) => { size += c.length; if (size <= limit) chunks.push(c); else res.destroy(); });
      const done = () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString('utf8'), size });
      res.on('end', done); res.on('close', done);
    });
    req.on('timeout', () => { req.destroy(); resolve({ status: 0, body: 'timeout', size: 0 }); });
    req.on('error', (e) => resolve({ status: 0, body: String(e.message), size: 0 }));
  });
}
function summarize(label, r) {
  const msg = r.body.replace(/\s+/g, ' ');
  if (r.status !== 200) { log(`- ${label}: HTTP ${r.status} ${msg.slice(0, 140)}`); return; }
  const tags = [...new Set([...r.body.matchAll(/<([A-Za-z_][\w.-]*)[ />]/g)].map((m) => m[1]))];
  const w = tags.filter((t) => WEIGHT_RE.test(t));
  log(`- **${label}**: HTTP 200, ${r.size} B, ${tags.length} tagov, tagy hmotnosti: ${w.join(', ') || 'žiadne'}`);
  log(`  - tagy: ${tags.slice(0, 90).join(', ')}`);
  for (const t of w.slice(0, 5)) {
    const v = [...r.body.matchAll(new RegExp(`<${t}[^>]*>([^<]{0,40})<`, 'g'))].map((m) => m[1].trim()).filter(Boolean);
    log(`  - ${t}: ${v.slice(0, 8).join(' | ')}`);
  }
  log('  - začiatok odpovede:\n```xml\n' + r.body.replace(/<(DESCRIPTION|SHORT_DESCRIPTION|Note)>[\s\S]*?<\/\1>/g, '<$1>…</$1>').slice(0, 2200) + '\n```');
}

(async () => {
  log('# ATOS i6ws: ByCode / ByFromTo'); log(`Spustené: ${new Date().toISOString()}`);
  const root = await get('/i6ws/', 100000);
  log(`\n## /i6ws/ : HTTP ${root.status}\n${root.body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 1500)}`);
  const links = [...new Set([...root.body.matchAll(/href="([^"]+)"/gi)].map((m) => m[1]))].slice(0, 40);
  if (links.length) log(`Odkazy: ${links.join(', ')}`);
  for (const op of ['GetResultByCode', 'GetResultByFromTo']) {
    const d = await get(`/i6ws/Default.asmx?op=${op}`, 60000);
    log(`\n## Popis ${op}\n` + d.body.replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 900));
  }
  log('\n## GetResultByCode');
  for (const t of TYPES) for (const c of CODES.slice(0, 3)) {
    summarize(`${t} code=${c}`, await get(`/i6ws/Default.asmx/GetResultByCode?resultType=${t}&code=${encodeURIComponent(c)}`));
  }
  log('\n## GetResultByFromTo');
  for (const t of TYPES) for (const [f, to] of [['1', '3'], ['2026-10-01', '2026-10-05'], ['A', 'B']]) {
    summarize(`${t} from=${f} to=${to}`, await get(`/i6ws/Default.asmx/GetResultByFromTo?resultType=${t}&from=${f}&to=${to}`, 120000));
  }
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, out.join('\n') + '\n');
})();

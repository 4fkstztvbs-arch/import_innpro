// One-off discovery of what the ATOS i6ws webservice offers, to find a source of product weight
// (the regular StoItemShoptet_El feed has LOGISTIC/WEIGHT 0 for ~89 % of products).
//
// Does: 1) lists the service operations (Default.asmx index / WSDL), 2) probes candidate
// resultTypes (plus any found in the WSDL), 3) for every type that answers HTTP 200 reads up to
// SAMPLE_BYTES, lists the XML tag names and looks for weight-like tags with their values,
// 4) for the types that carry a weight tag, streams the whole result and counts non-zero values.
// Output goes to the job log and $GITHUB_STEP_SUMMARY. Credentials are never printed.
//
// Required env: ATOS_USERNAME, ATOS_PASSWORD. Only works in ATOS's night window (21:00-07:00).
// Optional: ATOS_EXTRA_TYPES (comma separated), SAMPLE_BYTES (default 400000).

const https = require('https');
const fs = require('fs');

const HOST = 'shop.atoselektro.cz';
const BASE = '/i6ws/Default.asmx';
const USER = process.env.ATOS_USERNAME;
const PASS = process.env.ATOS_PASSWORD;
const SAMPLE_BYTES = parseInt(process.env.SAMPLE_BYTES || '400000', 10);
if (!USER || !PASS) { console.error('Missing ATOS_USERNAME / ATOS_PASSWORD.'); process.exit(1); }

const KNOWN = ['StoItemShoptet_El', 'StoItemBase_El', 'StoItemQtyFree_El', 'SPresentTree_El'];
const CANDIDATES = [
  'StoItem_El', 'StoItemFull_El', 'StoItemAll_El', 'StoItemExt_El', 'StoItemDetail_El', 'StoItemInfo_El',
  'StoItemParam_El', 'StoItemParams_El', 'StoItemPar_El', 'StoItemProp_El', 'StoItemAttr_El',
  'StoItemLogistic_El', 'StoItemPack_El', 'StoItemPackage_El', 'StoItemEan_El', 'StoItemPrice_El',
  'StoItemShoptetFull_El', 'StoItemShoptetBase_El', 'StoItemBaseFull_El', 'StoItemTech_El',
  'StoItemDesc_El', 'StoItemText_El', 'StoItemImg_El', 'StoItemPhoto_El', 'StoItemWeight_El',
  'StoItemShoptet', 'StoItemBase', 'StoItemFeed_El', 'StoItemGoogle_El', 'StoItemHeureka_El',
  'StoItemZbozi_El', 'SItem_El', 'SItemBase_El', 'SPresent_El', 'SPresentItem_El',
];
const WEIGHT_RE = /weight|wght|hmotn|brutto|netto|gross|kg\b|mass|vaha|váha/i;

function get(path, opts = {}) {
  return new Promise((resolve) => {
    const req = https.get({
      host: HOST, path, auth: `${USER}:${PASS}`, timeout: 90000,
      headers: { 'User-Agent': 'Mozilla/5.0', Accept: 'application/xml,text/xml,text/html,*/*' },
    }, (res) => {
      const chunks = []; let size = 0; const limit = opts.limit || Infinity;
      res.on('data', (c) => {
        size += c.length;
        if (opts.onChunk) opts.onChunk(c);
        if (size <= limit) chunks.push(c);
        if (opts.limit && size >= limit) { res.destroy(); }
      });
      const done = () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString('utf8'), size });
      res.on('end', done); res.on('close', done);
    });
    req.on('timeout', () => { req.destroy(); resolve({ status: 0, body: 'timeout', size: 0 }); });
    req.on('error', (e) => resolve({ status: 0, body: String(e.message), size: 0 }));
  });
}

const out = [];
const log = (s = '') => { console.log(s); out.push(s); };

async function main() {
  log('# ATOS i6ws discovery');
  log(`Spustené: ${new Date().toISOString()}`);

  const idx = await get(BASE);
  log(`\n## Index služby (${BASE}): HTTP ${idx.status}`);
  const ops = [...new Set([...idx.body.matchAll(/Default\.asmx\?op=(\w+)/g)].map((m) => m[1]))];
  log(`Operácie: ${ops.join(', ') || '(nenájdené)'}`);

  const wsdl = await get(`${BASE}?WSDL`, { limit: 600000 });
  log(`\n## WSDL: HTTP ${wsdl.status}, ${wsdl.size} B`);
  const wsdlTypes = [...new Set([...wsdl.body.matchAll(/\b(S[A-Za-z]+_[A-Za-z]{2})\b/g)].map((m) => m[1]))];
  if (wsdlTypes.length) log(`Názvy podobné resultType vo WSDL: ${wsdlTypes.join(', ')}`);
  for (const op of ops.slice(0, 15)) {
    const o = await get(`${BASE}?op=${op}`, { limit: 100000 });
    const params = [...o.body.matchAll(/<td[^>]*>\s*(\w+)\s*:?\s*<\/td>/gi)].map((m) => m[1]).slice(0, 12);
    log(`- op ${op}: HTTP ${o.status}${params.length ? `, parametre/riadky: ${params.join(', ')}` : ''}`);
  }

  const extra = (process.env.ATOS_EXTRA_TYPES || '').split(',').map((s) => s.trim()).filter(Boolean);
  const types = [...new Set([...KNOWN, ...wsdlTypes, ...extra, ...CANDIDATES])];
  const withWeight = [];

  log('\n## Skúšané resultType');
  for (const t of types) {
    const r = await get(`${BASE}/GetResult?resultType=${encodeURIComponent(t)}`, { limit: SAMPLE_BYTES });
    const isXml = /^\s*<\?xml|^\s*</.test(r.body);
    if (r.status !== 200 || !isXml) {
      const msg = r.body.replace(/\s+/g, ' ').slice(0, 110);
      log(`- ${t}: HTTP ${r.status} ${r.status === 200 ? '(nie XML) ' : ''}${msg}`);
      continue;
    }
    const tags = new Map();
    for (const m of r.body.matchAll(/<([A-Za-z_][\w.-]*)[ />]/g)) tags.set(m[1], (tags.get(m[1]) || 0) + 1);
    const attrNames = new Set([...r.body.matchAll(/\s([A-Za-z_][\w.-]*)=\"/g)].map((m) => m[1]));
    const wTags = [...tags.keys()].filter((k) => WEIGHT_RE.test(k)).concat([...attrNames].filter((k) => WEIGHT_RE.test(k)));
    log(`- **${t}**: HTTP 200, prečítaných ${r.size >= SAMPLE_BYTES ? '>=' : ''}${r.size} B, ${tags.size} názvov tagov`);
    log(`  - tagy: ${[...tags.keys()].slice(0, 80).join(', ')}`);
    if (wTags.length) {
      withWeight.push({ t, wTags });
      for (const w of wTags.slice(0, 6)) {
        const vals = [...r.body.matchAll(new RegExp(`<${w}[^>]*>([^<]{0,40})<`, 'g'))].map((m) => m[1].trim()).filter(Boolean);
        const attrVals = [...r.body.matchAll(new RegExp(`\\s${w}=\"([^\"]{0,40})\"`, 'g'))].map((m) => m[1]);
        const all = vals.concat(attrVals);
        const nonZero = all.filter((v) => parseFloat(String(v).replace(',', '.')) > 0).length;
        log(`  - ${w}: ${all.length} hodnôt vo vzorke, nenulových ${nonZero}, príklady: ${all.slice(0, 6).join(' | ')}`);
      }
    }
    const first = r.body.match(/<(StoItem|Item|Row|SHOPITEM)\b[\s\S]*?<\/\1>/);
    if (first) log('  - vzorový záznam (skrátený):\n```xml\n' + first[0].replace(/<(DESCRIPTION|SHORT_DESCRIPTION)>[\s\S]*?<\/\1>/g, '<$1>…</$1>').slice(0, 2500) + '\n```');
    fs.mkdirSync('discovery-samples', { recursive: true });
    fs.writeFileSync(`discovery-samples/${t}.xml`, r.body.slice(0, 150000));
  }

  log('\n## Pokrytie hmotnosti (celý export)');
  for (const { t, wTags } of withWeight) {
    for (const w of wTags.slice(0, 3)) {
      let total = 0; let nonZero = 0; let buf = '';
      const re1 = new RegExp(`<${w}[^>]*>([^<]{0,40})<`, 'g');
      const re2 = new RegExp(`\\s${w}=\"([^\"]{0,40})\"`, 'g');
      const count = (s) => { for (const m of s.matchAll(re1)) { total++; if (parseFloat(m[1].replace(',', '.')) > 0) nonZero++; } for (const m of s.matchAll(re2)) { total++; if (parseFloat(m[1].replace(',', '.')) > 0) nonZero++; } };
      await get(`${BASE}/GetResult?resultType=${encodeURIComponent(t)}`, {
        onChunk: (c) => { buf += c.toString('utf8'); const cut = buf.lastIndexOf('<'); if (cut > 0 && buf.length > 2e6) { count(buf.slice(0, cut)); buf = buf.slice(cut); } },
      });
      count(buf);
      log(`- ${t} / ${w}: ${total} výskytov, ${nonZero} nenulových`);
    }
  }
  if (!withWeight.length) log('Žiadny z odpovedajúcich výstupov neobsahuje tag podobný hmotnosti.');

  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, out.join('\n') + '\n');
}
main().catch((e) => { console.error(e); process.exit(1); });

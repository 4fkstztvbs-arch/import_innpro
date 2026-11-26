'use strict';
// Read-only diagnostic: histogram of raw DELIVERY_DATE values in the BASYS feed. Prints no URLs.
const { streamRecords } = require('../stream-records');
(async () => {
  const hist = new Map(), br = new Map(), cats = new Map(); let n = 0, missing = 0;
  await streamRecords(process.env.BASYS_URL, 'SHOPITEM', (block) => {
    n++;
    const m = block.match(/<DELIVERY_DATE>([\s\S]*?)<\/DELIVERY_DATE>/);
    if (!m) { missing++; return; }
    const v = JSON.stringify(m[1]);
    hist.set(v, (hist.get(v) || 0) + 1);
    const mf = (block.match(/<MANUFACTURER>([\s\S]*?)<\/MANUFACTURER>/) || [,'?'])[1].trim();
    const cat = (block.match(/<CATEGORYTEXT>([\s\S]*?)<\/CATEGORYTEXT>/) || [,'?'])[1].replace(/<!\[CDATA\[|\]\]>/g,'').trim().split('|')[0];
    const k = mf + ' | ' + v; br.set(k, (br.get(k) || 0) + 1);
    if (v === '"7"') cats.set(cat, (cats.get(cat) || 0) + 1);
  });
  console.log({ items: n, missingTag: missing });
  console.log([...br.entries()].sort((a,b)=>b[1]-a[1]).slice(0,40));
  console.log([...cats.entries()].sort((a,b)=>b[1]-a[1]).slice(0,25));
  console.log([...hist.entries()].sort((a, b) => b[1] - a[1]).slice(0, 30));
})().catch((e) => { console.error('diag failed:', e.message); process.exit(1); });

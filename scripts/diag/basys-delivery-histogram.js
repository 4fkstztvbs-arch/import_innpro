'use strict';
// Read-only diagnostic: histogram of raw DELIVERY_DATE values in the BASYS feed. Prints no URLs.
const { streamRecords } = require('../stream-records');
(async () => {
  const hist = new Map(); let n = 0, missing = 0;
  await streamRecords(process.env.BASYS_URL, 'SHOPITEM', (block) => {
    n++;
    const m = block.match(/<DELIVERY_DATE>([\s\S]*?)<\/DELIVERY_DATE>/);
    if (!m) { missing++; return; }
    const v = JSON.stringify(m[1]);
    hist.set(v, (hist.get(v) || 0) + 1);
  });
  console.log({ items: n, missingTag: missing });
  console.log([...hist.entries()].sort((a, b) => b[1] - a[1]).slice(0, 30));
})().catch((e) => { console.error('diag failed:', e.message); process.exit(1); });

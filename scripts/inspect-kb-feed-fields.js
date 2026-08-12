// One-off diagnostic: lists every distinct field name (and one example value) seen across a
// sample of <zaznam> records in the K-B "zbozi" (product) feed, to check whether it carries a
// weight field we're not parsing yet. Never prints the feed URL itself, only field names/values.
//
// Usage: KB_ZBOZI_URL=... node scripts/inspect-kb-feed-fields.js
'use strict';

const { streamRecords } = require('./stream-records');
const { parseRecord, field } = require('./parse-kb');

const URL = process.env.KB_ZBOZI_URL;
const SAMPLE_SIZE = parseInt(process.env.KB_INSPECT_SAMPLE || '500', 10);

async function main() {
  if (!URL) {
    console.error('Missing KB_ZBOZI_URL');
    process.exit(1);
  }

  const fieldExamples = new Map();
  let n = 0;

  await streamRecords(URL, 'zaznam', (rawXml) => {
    if (n >= SAMPLE_SIZE) return;
    n++;
    const rec = parseRecord(rawXml);
    if (!rec) return;
    for (const tag of Object.keys(rec)) {
      if (!fieldExamples.has(tag)) {
        fieldExamples.set(tag, field(rec, tag));
      }
    }
  });

  console.log(`Sampled ${n} records. Distinct fields (${fieldExamples.size}):`);
  for (const [tag, example] of [...fieldExamples.entries()].sort()) {
    console.log(`  ${tag} = ${JSON.stringify(String(example).slice(0, 60))}`);
  }
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

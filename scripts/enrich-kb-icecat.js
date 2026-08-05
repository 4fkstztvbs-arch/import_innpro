// Enriches an already-generated kb.xml (from transform-kb.js) with data from an Icecat
// coverage-export CSV, matched by EAN: weight, extra gallery images, EU energy label image,
// and real product specs (as TEXT_PROPERTY entries). Products with no EAN match are left
// completely untouched.
//
// Usage: node enrich-kb-icecat.js
// Required env vars: KB_XML_IN, ICECAT_CSV, KB_XML_OUT
// Optional: KB_MAX_EXTRA_IMAGES (5), KB_MAX_SPECS (40)

const fs = require('fs');
const { streamRecords } = require('./stream-records');
const { loadIcecatData } = require('./parse-icecat-csv');

const XML_IN = process.env.KB_XML_IN;
const CSV_IN = process.env.ICECAT_CSV;
const XML_OUT = process.env.KB_XML_OUT || XML_IN;
const MAX_EXTRA_IMAGES = parseInt(process.env.KB_MAX_EXTRA_IMAGES || '5', 10);
const MAX_SPECS = parseInt(process.env.KB_MAX_SPECS || '40', 10);

function xmlEscape(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function xmlCdata(s) { return '<![CDATA[' + String(s == null ? '' : s).replace(/]]>/g, ']]&gt;') + ']]>'; }
function xmlNum(n) { return (Math.round(n * 100) / 100).toFixed(2); }

async function main() {
  if (!XML_IN || !CSV_IN) {
    console.error('Missing KB_XML_IN / ICECAT_CSV environment variables.');
    process.exit(1);
  }

  console.log('Loading Icecat CSV...');
  const icecat = loadIcecatData(CSV_IN);
  console.log(`  -> ${icecat.size} products with usable Icecat data (matched, free tier)`);

  console.log('Streaming existing kb.xml and enriching by EAN...');
  const stats = { total: 0, matched: 0, weightAdded: 0, imagesAdded: 0, energyLabelAdded: 0, specsAdded: 0 };
  const outParts = ['<?xml version="1.0" encoding="utf-8"?>', '<SHOP>'];

  await streamRecords(XML_IN, 'SHOPITEM', (rawXml) => {
    stats.total++;
    const eanMatch = rawXml.match(/<EAN>([^<]*)<\/EAN>/);
    const ean = eanMatch ? eanMatch[1].trim() : '';
    const data = ean ? icecat.get(ean) : null;

    if (!data) {
      outParts.push(rawXml);
      return;
    }
    stats.matched++;
    let item = rawXml;

    // 1) weight — K-B's own output never includes LOGISTIC/WEIGHT, so insert a new block
    //    right before <CURRENCY> (a tag every SHOPITEM always has).
    if (data.weightKg > 0) {
      item = item.replace('<CURRENCY>', `<LOGISTIC><WEIGHT>${xmlNum(data.weightKg)}</WEIGHT></LOGISTIC>\n<CURRENCY>`);
      stats.weightAdded++;
    }

    // 2) extra gallery images — append inside the existing <IMAGES> block if present,
    //    otherwise create a new one right before <AVAILABILITY>.
    const extraImages = data.images.slice(0, MAX_EXTRA_IMAGES);
    if (extraImages.length) {
      const imageTags = extraImages.map((u) => `  <IMAGE>${xmlEscape(u)}</IMAGE>`).join('\n');
      if (item.includes('</IMAGES>')) {
        item = item.replace('</IMAGES>', `${imageTags}\n</IMAGES>`);
      } else {
        item = item.replace('<AVAILABILITY>', `<IMAGES>\n${imageTags}\n</IMAGES>\n<AVAILABILITY>`);
      }
      stats.imagesAdded++;
    }

    // 3) EU energy label — add as one more image (same pattern the browser tool uses).
    if (data.energyLabelUrl) {
      const tag = `  <IMAGE>${xmlEscape(data.energyLabelUrl)}</IMAGE>`;
      if (item.includes('</IMAGES>')) {
        item = item.replace('</IMAGES>', `${tag}\n</IMAGES>`);
      } else {
        item = item.replace('<AVAILABILITY>', `<IMAGES>\n${tag}\n</IMAGES>\n<AVAILABILITY>`);
      }
      stats.energyLabelAdded++;
    }

    // 4) real specs -> TEXT_PROPERTY entries (skip if K-B's own feed already produced some,
    //    to avoid mixing two different naming conventions in one product).
    if (data.specs.length && !item.includes('<TEXT_PROPERTIES>')) {
      const specs = data.specs.slice(0, MAX_SPECS);
      const propTags = specs.map((pv) => {
        const idx = pv.indexOf(';');
        const name = pv.slice(0, idx), value = pv.slice(idx + 1);
        return `  <TEXT_PROPERTY>\n    <NAME>${xmlCdata(name)}</NAME>\n    <VALUE>${xmlCdata(value)}</VALUE>\n  </TEXT_PROPERTY>`;
      }).join('\n');
      item = item.replace('<AVAILABILITY>', `<TEXT_PROPERTIES>\n${propTags}\n</TEXT_PROPERTIES>\n<AVAILABILITY>`);
      stats.specsAdded++;
    }

    outParts.push(item);
  });

  outParts.push('</SHOP>');
  fs.writeFileSync(XML_OUT, outParts.join('\n'), 'utf-8');

  console.log('Done.');
  console.log(JSON.stringify(stats, null, 2));
  console.log('Output written to', XML_OUT);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

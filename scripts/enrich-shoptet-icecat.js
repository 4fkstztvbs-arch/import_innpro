// Generic version of the K-B Icecat enricher — works on any already-generated Shoptet SHOPITEM
// XML (K-B, ATOS, ...), matched by EAN. Unlike the K-B-specific script, this one is careful not
// to overwrite data the supplier's own feed already provided (K-B had NO weight/specs at all, so
// overwriting was safe there; ATOS already has some of its own, so we only fill in gaps here).
//
// Usage: node enrich-shoptet-icecat.js
// Required env vars: XML_IN, ICECAT_CSV, XML_OUT
// Optional: MAX_EXTRA_IMAGES (5), MAX_SPECS (40), REPLACE_DESCRIPTION (0/1, default 0),
//           REPLACE_IMAGES (0/1, default 0) — see note below.

const fs = require('fs');
const { streamRecords } = require('./stream-records');
const { loadIcecatData } = require('./parse-icecat-csv');

const XML_IN = process.env.XML_IN;
const CSV_IN = process.env.ICECAT_CSV;
const XML_OUT = process.env.XML_OUT || XML_IN;
const MAX_EXTRA_IMAGES = parseInt(process.env.MAX_EXTRA_IMAGES || '5', 10);
const MAX_SPECS = parseInt(process.env.MAX_SPECS || '40', 10);
const REPLACE_DESCRIPTION = process.env.REPLACE_DESCRIPTION === '1';
// ATOS's own image URLs (img.asp?attid=...) don't reliably download into Shoptet's automatic
// import — REPLACE_IMAGES=1 makes Icecat's gallery the product's IMAGES block instead of just
// appending to the supplier's own (broken) ones. Products with no Icecat image match keep
// whatever the supplier's feed provided, so nothing loses its images outright.
const REPLACE_IMAGES = process.env.REPLACE_IMAGES === '1';

function xmlEscape(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function xmlCdata(s) { return '<![CDATA[' + String(s == null ? '' : s).replace(/]]>/g, ']]&gt;') + ']]>'; }
function xmlNum(n) { return (Math.round(n * 100) / 100).toFixed(2); }

async function main() {
  if (!XML_IN || !CSV_IN) {
    console.error('Missing XML_IN / ICECAT_CSV environment variables.');
    process.exit(1);
  }

  console.log('Loading Icecat CSV...');
  const icecat = loadIcecatData(CSV_IN);
  console.log(`  -> ${icecat.size} products with usable Icecat data (matched, free tier)`);

  console.log('Streaming existing XML and enriching by EAN...');
  const stats = {
    total: 0, matched: 0, weightAdded: 0, weightSkippedAlreadyHad: 0,
    imagesAdded: 0, imagesReplaced: 0, imagesKeptOriginal: 0,
    energyLabelAdded: 0, specsAdded: 0, specsSkippedAlreadyHad: 0, descriptionReplaced: 0,
  };
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

    // 1) weight — only fill in if the supplier's own feed didn't already give a real (>0)
    //    weight. If <LOGISTIC><WEIGHT> exists but is 0 or empty, replace it; if missing
    //    entirely, insert a new block before <CURRENCY>.
    if (data.weightKg > 0) {
      const wMatch = item.match(/<LOGISTIC><WEIGHT>([\d.]*)<\/WEIGHT><\/LOGISTIC>/);
      if (wMatch) {
        const existing = parseFloat(wMatch[1]) || 0;
        if (existing > 0) {
          stats.weightSkippedAlreadyHad++;
        } else {
          item = item.replace(/<LOGISTIC><WEIGHT>[\d.]*<\/WEIGHT><\/LOGISTIC>/, `<LOGISTIC><WEIGHT>${xmlNum(data.weightKg)}</WEIGHT></LOGISTIC>`);
          stats.weightAdded++;
        }
      } else {
        item = item.replace('<CURRENCY>', `<LOGISTIC><WEIGHT>${xmlNum(data.weightKg)}</WEIGHT></LOGISTIC>\n<CURRENCY>`);
        stats.weightAdded++;
      }
    }

    // 2) gallery images — either appended to the supplier's own (default), or made the sole
    //    source when REPLACE_IMAGES=1 (see note above). Products without a matched Icecat
    //    image keep the supplier's original images either way.
    const extraImages = data.images.slice(0, MAX_EXTRA_IMAGES);
    if (extraImages.length) {
      const imageTags = extraImages.map((u) => `  <IMAGE>${xmlEscape(u)}</IMAGE>`).join('\n');
      if (REPLACE_IMAGES) {
        if (item.includes('<IMAGES>')) {
          item = item.replace(/<IMAGES>[\s\S]*?<\/IMAGES>/, `<IMAGES>\n${imageTags}\n</IMAGES>`);
        } else {
          item = item.replace('<AVAILABILITY>', `<IMAGES>\n${imageTags}\n</IMAGES>\n<AVAILABILITY>`);
        }
        stats.imagesReplaced++;
      } else {
        if (item.includes('</IMAGES>')) {
          item = item.replace('</IMAGES>', `${imageTags}\n</IMAGES>`);
        } else {
          item = item.replace('<AVAILABILITY>', `<IMAGES>\n${imageTags}\n</IMAGES>\n<AVAILABILITY>`);
        }
        stats.imagesAdded++;
      }
    } else if (REPLACE_IMAGES) {
      stats.imagesKeptOriginal++;
    }

    // 3) EU energy label — add as one more image.
    if (data.energyLabelUrl) {
      const tag = `  <IMAGE>${xmlEscape(data.energyLabelUrl)}</IMAGE>`;
      if (item.includes('</IMAGES>')) {
        item = item.replace('</IMAGES>', `${tag}\n</IMAGES>`);
      } else {
        item = item.replace('<AVAILABILITY>', `<IMAGES>\n${tag}\n</IMAGES>\n<AVAILABILITY>`);
      }
      stats.energyLabelAdded++;
    }

    // 4) real specs -> TEXT_PROPERTY entries, only if the supplier didn't already give its own
    //    (avoids mixing two different naming/unit conventions on one product).
    if (data.specs.length) {
      if (item.includes('<TEXT_PROPERTIES>')) {
        stats.specsSkippedAlreadyHad++;
      } else {
        const specs = data.specs.slice(0, MAX_SPECS);
        const propTags = specs.map((pv) => {
          const idx = pv.indexOf(';');
          const name = pv.slice(0, idx), value = pv.slice(idx + 1);
          return `  <TEXT_PROPERTY>\n    <NAME>${xmlCdata(name)}</NAME>\n    <VALUE>${xmlCdata(value)}</VALUE>\n  </TEXT_PROPERTY>`;
        }).join('\n');
        item = item.replace('<AVAILABILITY>', `<TEXT_PROPERTIES>\n${propTags}\n</TEXT_PROPERTIES>\n<AVAILABILITY>`);
        stats.specsAdded++;
      }
    }

    // 5) description replacement — OFF by default here (unlike the dedicated K-B script) since
    //    we haven't verified ATOS's own descriptions have the same kind of errors K-B's did.
    //    Set REPLACE_DESCRIPTION=1 to turn it on.
    if (REPLACE_DESCRIPTION && data.longDescription) {
      item = item.replace(/<DESCRIPTION>[\s\S]*?<\/DESCRIPTION>/, `<DESCRIPTION>${xmlCdata(data.longDescription)}</DESCRIPTION>`);
      stats.descriptionReplaced++;
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

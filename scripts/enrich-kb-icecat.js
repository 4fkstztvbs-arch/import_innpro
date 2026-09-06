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
const { shouldEnrich, buildEnrichedDescription } = require('./lib/kb-description-enrichment');

const XML_IN = process.env.KB_XML_IN;
const CSV_IN = process.env.ICECAT_CSV;
const XML_OUT = process.env.KB_XML_OUT || XML_IN;
const MAX_EXTRA_IMAGES = parseInt(process.env.KB_MAX_EXTRA_IMAGES || '5', 10);
const MAX_SPECS = parseInt(process.env.KB_MAX_SPECS || '40', 10);

// Fallback weight (kg) for categories where the carrier's own weight tier tops out at 15kg —
// products here are reliably heavy (large/built-in appliances), so defaulting just above that
// threshold is far safer for shipping-cost matching than leaving them unweighted (which would
// otherwise fall into a lighter, cheaper tier than what the carrier will actually charge for).
const DEFAULT_WEIGHT_KG = parseFloat(process.env.KB_DEFAULT_WEIGHT_KG || '16');
const DEFAULT_WEIGHT_CATEGORIES = ['Veľké spotrebiče', 'Vstavané spotrebiče'];
// Small accessory/spare-part sub-branches under those two categories (hoses, filters, anti-
// vibration pads...) are excluded — they weigh grams, not kilos, and a blanket 16kg would badly
// overcharge shipping on them.
const ACCESSORY_BRANCH_WORDS = ['príslušenstvo', 'filtre', 'chladiace tašky a boxy'];

function needsDefaultWeight(item) {
  if (item.includes('<LOGISTIC>')) return false;
  const categoryLines = [...item.matchAll(/<CATEGORY><!\[CDATA\[([^\]]*)\]\]><\/CATEGORY>/g)].map((m) => m[1]);
  const relevant = categoryLines.filter((c) => DEFAULT_WEIGHT_CATEGORIES.some((cat) => c.includes(`> ${cat} >`) || c.endsWith(`> ${cat}`)));
  if (relevant.length === 0) return false;
  const isAccessory = categoryLines.some((c) => ACCESSORY_BRANCH_WORDS.some((w) => c.toLowerCase().includes(w)));
  return !isAccessory;
}

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
  const stats = { total: 0, matched: 0, weightAdded: 0, imagesAdded: 0, energyLabelAdded: 0, specsAdded: 0, defaultWeightApplied: 0 };
  const outParts = ['<?xml version="1.0" encoding="utf-8"?>', '<SHOP>'];

  await streamRecords(XML_IN, 'SHOPITEM', (rawXml) => {
    stats.total++;
    const eanMatch = rawXml.match(/<EAN>([^<]*)<\/EAN>/);
    const ean = eanMatch ? eanMatch[1].trim() : '';
    const data = ean ? icecat.get(ean) : null;

    if (!data) {
      let item = rawXml;
      if (needsDefaultWeight(item)) {
        item = item.replace('<CURRENCY>', `<LOGISTIC><WEIGHT>${xmlNum(DEFAULT_WEIGHT_KG)}</WEIGHT></LOGISTIC>\n<CURRENCY>`);
        stats.defaultWeightApplied++;
      }
      outParts.push(item);
      return;
    }
    stats.matched++;
    let item = rawXml;

    // 1) weight — K-B's own output never includes LOGISTIC/WEIGHT, so insert a new block
    //    right before <CURRENCY> (a tag every SHOPITEM always has).
    if (data.weightKg > 0) {
      item = item.replace('<CURRENCY>', `<LOGISTIC><WEIGHT>${xmlNum(data.weightKg)}</WEIGHT></LOGISTIC>\n<CURRENCY>`);
      stats.weightAdded++;
    } else if (needsDefaultWeight(item)) {
      item = item.replace('<CURRENCY>', `<LOGISTIC><WEIGHT>${xmlNum(DEFAULT_WEIGHT_KG)}</WEIGHT></LOGISTIC>\n<CURRENCY>`);
      stats.defaultWeightApplied++;
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

    // 5) description replacement — Icecat's manufacturer-sourced text replaces K-B's own
    //    description/short description when available (per your choice — K-B's own text has
    //    shown real errors, e.g. duplicated airflow figures on the Electrolux LFV619K).
    //    EXCEPT when transform-kb.js already built a formatted description (heading + image +
    //    parameter list, see scripts/lib/kb-description-enrichment.js) — that text contains
    //    real HTML tags, which K-B's own raw feed text never does. Overwriting it here would
    //    silently undo that enrichment (including hand-curated PRODUCT_FACTS) on every run,
    //    since this step runs right after transform-kb.js in kb-sync.yml.
    const descMatch = item.match(/<DESCRIPTION><!\[CDATA\[([\s\S]*?)\]\]><\/DESCRIPTION>/);
    const alreadyEnriched = !!(descMatch && /<[a-z][\s\S]*>/i.test(descMatch[1]));
    if (data.longDescription && !alreadyEnriched) {
      item = item.replace(/<DESCRIPTION>[\s\S]*?<\/DESCRIPTION>/, `<DESCRIPTION>${xmlCdata(data.longDescription)}</DESCRIPTION>`);
      stats.descriptionReplaced = (stats.descriptionReplaced || 0) + 1;
    } else if (data.longDescription) {
      stats.descriptionSkippedAlreadyEnriched = (stats.descriptionSkippedAlreadyEnriched || 0) + 1;
    }
    if (data.shortDescription && !alreadyEnriched) {
      if (item.includes('<SHORT_DESCRIPTION>')) {
        item = item.replace(/<SHORT_DESCRIPTION>[\s\S]*?<\/SHORT_DESCRIPTION>/, `<SHORT_DESCRIPTION>${xmlCdata(data.shortDescription)}</SHORT_DESCRIPTION>`);
      } else {
        item = item.replace('<DESCRIPTION>', `<SHORT_DESCRIPTION>${xmlCdata(data.shortDescription)}</SHORT_DESCRIPTION>\n<DESCRIPTION>`);
      }
    }

    // 6) druhá šanca na obohatenie popisu - transform-kb.js sa rozhoduje obohatiť popis LEN
    //    podľa PÔVODNÉHO K-B textu, predtým než tento skript prípadne (krok 5 vyššie) nahradí
    //    popis textom od Icecatu. Ak K-B text nebol "chudobný" (shouldEnrich vrátilo false), ale
    //    Icecat text, ktorý ho práve nahradil, chudobný JE, produkt by inak zostal navždy bez
    //    kurátorského obohatenia - Icecat popis sa už nikdy neprehodnocuje. Preto sa tu enrichment
    //    skúša znova nad AKTUÁLNYM (finálnym) textom popisu, nech pochádza odkiaľkoľvek.
    const finalDescMatch = item.match(/<DESCRIPTION><!\[CDATA\[([\s\S]*?)\]\]><\/DESCRIPTION>/);
    if (finalDescMatch && !/<[a-z][\s\S]*>/i.test(finalDescMatch[1])) {
      const nameM = item.match(/<NAME><!\[CDATA\[(.*?)\]\]><\/NAME>/s);
      const manufM = item.match(/<MANUFACTURER><!\[CDATA\[(.*?)\]\]><\/MANUFACTURER>/s);
      const codeM = item.match(/<CODE>(.*?)<\/CODE>/);
      const catM = item.match(/<CATEGORY><!\[CDATA\[(.*?)\]\]><\/CATEGORY>/s);
      const imgM = item.match(/<IMAGE\s[^>]*>(.*?)<\/IMAGE>/);
      const candidate = {
        code: codeM ? codeM[1] : '',
        name: nameM ? nameM[1] : '',
        manufacturer: manufM ? manufM[1] : '',
        description: finalDescMatch[1],
        image: imgM ? imgM[1] : '',
        defaultCategory: catM ? catM[1] : '',
      };
      if (shouldEnrich(candidate)) {
        const enriched = buildEnrichedDescription(candidate);
        item = item.replace(finalDescMatch[0], `<DESCRIPTION>${xmlCdata(enriched)}</DESCRIPTION>`);
        stats.enrichedAfterIcecatReplace = (stats.enrichedAfterIcecatReplace || 0) + 1;
      }
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

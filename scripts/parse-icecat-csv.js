const fs = require('fs');
const { parse } = require('csv-parse/sync');

// Parses an Icecat "coverage export" CSV (like the one downloaded from icecat.com after
// uploading an EAN list) into a Map keyed by EAN, with the fields we actually want to use:
// weight (kg), gallery images, EU energy label image, and real specs (Name;Value pairs,
// skipping section headers like "Dizajn"/"Výkon" that have no colon).
function loadIcecatData(csvPath) {
  const raw = fs.readFileSync(csvPath, 'utf-8');
  const records = parse(raw, { columns: true, skip_empty_lines: true, relax_column_count: true });

  const specCols = Object.keys(records[0] || {}).filter((c) => c.startsWith('Specs '));
  const map = new Map();

  for (const r of records) {
    if (r.ErrorMessage) continue; // not matched (or requires paid Full Icecat) — skip
    const ean = (r['GTIN(EAN/UPC)'] || r['Requested_GTIN(EAN/UPC)'] || '').trim();
    if (!ean) continue;

    let weightKg = 0;
    const specs = [];
    for (const c of specCols) {
      const val = (r[c] || '').trim();
      if (!val) continue;
      const idx = val.indexOf(':');
      if (idx < 0) continue; // section header (e.g. "Dizajn"), not an actual spec
      const name = val.slice(0, idx).trim();
      const value = val.slice(idx + 1).trim();
      if (!name || !value) continue;
      if (/^hmotnosť$/i.test(name) && weightKg === 0) {
        const m = value.match(/([\d.,]+)\s*(kg|g)\b/i);
        if (m) {
          const num = parseFloat(m[1].replace(',', '.'));
          weightKg = m[2].toLowerCase() === 'kg' ? num : num / 1000;
        }
      }
      specs.push(`${name};${value}`);
    }

    const gallery = (r.ProductGallery || '').split(/[|,;]\s*/).map((s) => s.trim()).filter(Boolean);
    const mainPic = (r.HighPic || r['Pic500x500'] || '').trim();
    const images = [];
    if (mainPic) images.push(mainPic);
    for (const g of gallery) if (g && !images.includes(g)) images.push(g);

    const energyLabelUrl = (r['EU Energy Label'] || '').trim();
    const shortDescription = (r.ShortSummaryDescription || '').trim();
    const longDescription = (r.LongSummaryDescription || '').trim();

    map.set(ean, { weightKg, images, energyLabelUrl, specs, shortDescription, longDescription });
  }
  return map;
}

module.exports = { loadIcecatData };

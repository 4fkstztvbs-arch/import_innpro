// Parses the "layout"-preserving plain text of the WiiM DMOC (maloobchodní ceník) PDF from
// Perfect Sound Group into structured product records. The PDF is a manually distributed price
// list (not a live feed) — regenerate the text with `pdftotext -layout <pdf> -` when a new
// version arrives, see transform-wiim.js.
//
// The layout is fairly regular: a category title line, then one or more product blocks, each
// block being a product-name line, a "Barevné provedení / SKU / EAN / DMOC CZK / DMOC EUR / RP"
// column header, one row per colour variant, and finally a free-text description paragraph.

const FURNITURE_PATTERNS = [
  /^\d+\s*\/\s*\d{4}$/, // "7 / 2026" page marker
  /^Wi{1,2}[mM]$/, // bare "WiiM" brand line repeated at the top of every page
  /^www\.perfectsoundgroup\.cz/,
  /^Společnost PERFECT SOUND GROUP/,
  /^DMOC maloobchodní/,
  /kontaktujte naše logistické oddělení/,
];

const VARIANT_ROW_RE = /^(\S.*?)\s{2,}(\S+)\s{2,}(\d{8,14})\s{2,}([\d\s]+?)\s*Kč\s+([\d,.]+)\s*EUR\s*(\*)?$/;
const TABLE_HEADER_RE = /Barevné provedení/;
const PRODUCT_NAME_RE = /^Wi{1,2}[mM]\s+\S/; // "WiiM ..." / "Wiim ..." (source is inconsistent about the second i's case)

function isFurniture(line) {
  return FURNITURE_PATTERNS.some((re) => re.test(line));
}

function normalizeProductName(name) {
  // Source PDF inconsistently writes the brand as "WiiM" or "Wiim" — normalize to "WiiM".
  return name.replace(/^Wi{1,2}[mM]/, 'WiiM');
}

function parseWiimPricelist(text) {
  const lines = text.split('\n');
  const products = [];
  let currentCategory = null;
  let current = null; // { name, variants: [], descLines: [] }
  // Consecutive skipped (blank/furniture) lines since the last real content line. Colour-variant
  // rows are separated by exactly one blank line, and the last variant row is followed
  // immediately (zero blanks) by the description paragraph — but a real section boundary
  // (end of one product's description to the next category title) always has 2+ in between,
  // even without an intervening page break. That gap is what tells a category title apart from
  // an ordinary description line, since both are otherwise unstructured free text.
  let blankRun = 0;

  function finalizeCurrent() {
    if (!current || current.variants.length === 0) { current = null; return; }
    const description = current.descLines.join(' ').replace(/\s+/g, ' ').trim();
    const weightMatch = description.match(/[Hh]motnost:?\s*([\d,.]+)\s*(kg|g)\b/);
    let weightKg;
    if (weightMatch) {
      const val = parseFloat(weightMatch[1].replace(',', '.'));
      weightKg = weightMatch[2] === 'g' ? val / 1000 : val;
    }
    current.variants.forEach((v) => {
      products.push({
        category: current.category,
        productName: current.name,
        description,
        weightKg,
        ...v,
      });
    });
    current = null;
  }

  for (const raw of lines) {
    const trimmed = raw.trim();
    if (trimmed === '' || isFurniture(trimmed)) { blankRun++; continue; }

    if (TABLE_HEADER_RE.test(trimmed)) { blankRun = 0; continue; }

    const variantMatch = trimmed.match(VARIANT_ROW_RE);
    if (variantMatch && current) {
      const [, color, sku, ean, priceCzkRaw, priceEurRaw, rpFlag] = variantMatch;
      current.variants.push({
        color: color.trim(),
        sku: sku.trim(),
        ean: ean.trim(),
        priceCzk: parseInt(priceCzkRaw.replace(/\s/g, ''), 10),
        priceEur: parseFloat(priceEurRaw.replace(',', '.')),
        recyclingFee: rpFlag === '*',
      });
      blankRun = 0;
      continue;
    }

    if (PRODUCT_NAME_RE.test(trimmed)) {
      finalizeCurrent();
      // Snapshot the category now — it must not be the *shared* variable, since a later
      // category title (read before this product block is finalized) would otherwise overwrite
      // it retroactively.
      current = { name: normalizeProductName(trimmed), category: currentCategory, variants: [], descLines: [] };
      blankRun = 0;
      continue;
    }

    // Neither a variant row nor a product-name line: either a category title (a 2+ line gap
    // since the last content line) or part of the free-text description that immediately
    // follows a product's variant rows (0-line gap).
    if (blankRun >= 2 || !current || current.variants.length === 0) {
      currentCategory = trimmed;
    } else {
      current.descLines.push(trimmed);
    }
    blankRun = 0;
  }
  finalizeCurrent();

  return products;
}

module.exports = { parseWiimPricelist };

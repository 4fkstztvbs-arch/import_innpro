// Precita PDF faktúru od dodávateľa (ATOS / K+B / InnPro), vytiahne polozky tovaru
// a sparuje ich s existujucimi Shoptet produktami (podla EAN, resp. podla nazvu pre
// K+B, ktoreho faktury EAN neobsahuju) - aby bolo jasne, co a v akom mnozstve treba
// v Shoptete naskladnit (Produkty -> Sklad -> Naskladnenie).
//
// Pouzitie:
//   node scripts/parse-supplier-invoice.js <faktura.pdf> [--supplier=atos|kb|innpro]
//
// Bez --supplier sa dodavatel skusi rozpoznat automaticky podla textu v hlavicke PDF.
// Vystup: tabulka do konzoly + CSV subor output/naskladnenie-<datum>-<dodavatel>.csv

const fs = require('fs');
const path = require('path');
const { XMLParser } = require('fast-xml-parser');

// pdfjs-dist v6 pouziva DOMMatrix uz pri importe (modulova konstanta) aj ked ideme len
// po texte (ziadne renderovanie) - v Node.js bez volitelneho @napi-rs/canvas balicka
// (33 MB natives, ktore tu nepotrebujeme) treba minimalny polyfill.
if (typeof globalThis.DOMMatrix === 'undefined') {
  globalThis.DOMMatrix = class DOMMatrix {
    constructor() { this.a = 1; this.b = 0; this.c = 0; this.d = 1; this.e = 0; this.f = 0; }
  };
}

const FEED_FILES = {
  atos: path.join(__dirname, '..', 'output', 'atos.xml'),
  kb: path.join(__dirname, '..', 'output', 'kb.xml'),
  innpro: path.join(__dirname, '..', 'output', 'innpro.xml'),
};

// Riadky, ktore nie su fyzicky tovar (poplatky, doprava, dobierka...) - nenaskladnujeme ich.
const NON_STOCK_KEYWORDS = [
  'dobierka', 'dobírka', 'doprava', 'postovne', 'poštovné', 'recyklac', 'recyklač',
  'koszty dostawy', 'przesyłki', 'przesylki', 'shipping', 'dorucenie', 'doručenie',
  'balikovne', 'balíkovné', 'dopravne', 'dopravné',
];

function normalize(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // odstran diakritiku
    .replace(/\s+/g, ' ')
    .trim();
}
function isNonStock(name) {
  const n = normalize(name);
  return NON_STOCK_KEYWORDS.some((kw) => n.includes(normalize(kw)));
}
function toFloat(s) {
  if (s === undefined || s === null) return 0;
  const v = parseFloat(String(s).replace(/\s/g, '').replace(',', '.'));
  return Number.isNaN(v) ? 0 : v;
}

// ---------- nacitanie PDF a rekonstrukcia riadkov (zoskupenie textovych fragmentov podla Y) ----------
async function extractRows(pdfPath) {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ data, standardFontDataUrl: path.join(__dirname, '..', 'node_modules', 'pdfjs-dist', 'standard_fonts') + '/' }).promise;
  const rows = [];
  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const content = await page.getTextContent();
    const items = content.items
      .filter((it) => it.str.trim() !== '')
      .map((it) => ({ str: it.str.trim(), x: it.transform[4], y: it.transform[5] }));
    const buckets = [];
    for (const it of items) {
      let bucket = buckets.find((b) => Math.abs(b.y - it.y) <= 2);
      if (!bucket) { bucket = { y: it.y, items: [] }; buckets.push(bucket); }
      bucket.items.push(it);
    }
    buckets.sort((a, b) => b.y - a.y);
    for (const b of buckets) {
      const cells = b.items.sort((a, c) => a.x - c.x).map((it) => it.str);
      rows.push(cells);
    }
  }
  return rows;
}

function detectSupplier(rows) {
  const text = normalize(rows.map((r) => r.join(' ')).join(' '));
  if (text.includes('atos spol')) return 'atos';
  if (text.includes('k+b progres')) return 'kb';
  if (text.includes('innpro robert')) return 'innpro';
  return null;
}

// ---------- ATOS: polozka je rozdelena na 2 riadky (kod/ean/mnozstvo/nazov + cenove stlpce) ----------
function parseAtos(rows) {
  const items = [];
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i];
    if (cells.length < 3) continue;
    if (!/^\d{4,}$/.test(cells[0])) continue; // prvy stlpec = interny kod ATOS (ciste cislo)
    let idx = 1;
    let ean = '';
    if (/^\d{8,14}$/.test(cells[idx])) { ean = cells[idx]; idx++; }
    const qty = toFloat(cells[idx]); idx++;
    const unit = cells[idx] || ''; idx++;
    const name = cells.slice(idx).join(' ').replace(/^\S{2,4}\/\s*/, ''); // odstran prefix "aut/", "mer/" ...
    if (!name) continue;
    // dalsi riadok s cenami (Cena/MJ, Cena/MJ s prispevkami, Celkom bez DPH, DPH %, Celkom s DPH)
    const priceRow = rows[i + 1] || [];
    const unitPriceNet = toFloat(priceRow[0]);
    items.push({ code: cells[0], ean, name, quantity: qty || 1, unitPriceNet });
  }
  return items;
}

// ---------- K+B: jeden riadok na polozku, oddeleny stlpcami z hlavicky tabulky ----------
function parseKb(rows) {
  const items = [];
  for (const cells of rows) {
    if (cells.length < 8) continue;
    if (!/^\d+$/.test(cells[0])) continue; // Č.r. = poradove cislo riadku
    const code = cells[1];
    if (!/^[A-Z]\d+$/i.test(code)) continue;
    const name = cells[2];
    const qty = toFloat(cells[3]);
    const unitPriceNet = toFloat(cells[4]);
    items.push({ code, ean: '', name, quantity: qty || 1, unitPriceNet });
  }
  return items;
}

// ---------- InnPro: jeden riadok na polozku, EAN (Barcode) je posledny stlpec ----------
function parseInnpro(rows) {
  const items = [];
  for (const cells of rows) {
    if (cells.length < 6) continue;
    if (!/^\d+$/.test(cells[0])) continue; // No.
    const last = cells[cells.length - 1];
    const hasEan = /^\d{8,14}$/.test(last);
    const name = cells[1];
    const qty = toFloat(cells[3]);
    const unitPriceNet = toFloat(cells[7] !== undefined ? cells[7] : cells[4]);
    items.push({ code: hasEan ? (cells[cells.length - 2] || '') : '', ean: hasEan ? last : '', name, quantity: qty || 1, unitPriceNet });
  }
  return items;
}

const SUPPLIER_PARSERS = { atos: parseAtos, kb: parseKb, innpro: parseInnpro };
const SUPPLIER_LABELS = { atos: 'ATOS', kb: 'K+B', innpro: 'InnPro' };

// ---------- nacitanie existujucich Shoptet feedov (EAN -> CODE, NAME -> CODE) ----------
function loadFeedIndex(supplier) {
  const feedPath = FEED_FILES[supplier];
  const byEan = new Map();
  const byName = new Map();
  if (!fs.existsSync(feedPath)) {
    console.warn(`  [!] feed ${feedPath} neexistuje - parovanie s Shoptet produktmi nebude mozne`);
    return { byEan, byName };
  }
  // parseTagValue vypnuty - inak fast-xml-parser skonvertuje kody ako "029278" na cislo 29278 (strata uvodnej nuly)
  const parser = new XMLParser({ ignoreAttributes: true, textNodeName: '#text', parseTagValue: false });
  const doc = parser.parse(fs.readFileSync(feedPath, 'utf8'));
  let shopitems = doc?.SHOP?.SHOPITEM || [];
  if (!Array.isArray(shopitems)) shopitems = [shopitems];
  for (const it of shopitems) {
    const code = typeof it.CODE === 'object' ? it.CODE['#text'] : it.CODE;
    const ean = typeof it.EAN === 'object' ? it.EAN['#text'] : it.EAN;
    const name = typeof it.NAME === 'object' ? it.NAME['#text'] : it.NAME;
    if (ean) byEan.set(String(ean).trim(), { code: String(code || '').trim(), name });
    if (name) byName.set(normalize(name), { code: String(code || '').trim(), name });
  }
  return { byEan, byName };
}

function matchItem(item, index) {
  if (item.ean && index.byEan.has(item.ean)) return { ...index.byEan.get(item.ean), matchedBy: 'EAN' };
  const byName = index.byName.get(normalize(item.name));
  if (byName) return { ...byName, matchedBy: 'nazov' };
  return null;
}

async function main() {
  const pdfPath = process.argv[2];
  if (!pdfPath) {
    console.error('Pouzitie: node scripts/parse-supplier-invoice.js <faktura.pdf> [--supplier=atos|kb|innpro]');
    process.exit(1);
  }
  const supplierArg = process.argv.find((a) => a.startsWith('--supplier='));
  let supplier = supplierArg ? supplierArg.split('=')[1] : null;

  console.log(`Nacitavam ${pdfPath} ...`);
  const rows = await extractRows(pdfPath);

  if (!supplier) {
    supplier = detectSupplier(rows);
    if (!supplier) {
      console.error('Nepodarilo sa automaticky rozpoznat dodavatela. Pouzi --supplier=atos|kb|innpro');
      process.exit(1);
    }
    console.log(`Rozpoznany dodavatel: ${SUPPLIER_LABELS[supplier]}`);
  }
  const parser = SUPPLIER_PARSERS[supplier];
  if (!parser) { console.error(`Neznamy dodavatel "${supplier}"`); process.exit(1); }

  const rawItems = parser(rows);
  const index = loadFeedIndex(supplier);

  const results = [];
  for (const item of rawItems) {
    if (isNonStock(item.name)) {
      results.push({ ...item, status: 'preskocene (poplatok/doprava)', code: '', matchedBy: '' });
      continue;
    }
    const match = matchItem(item, index);
    if (match) {
      results.push({ ...item, status: 'OK', shoptetCode: match.code, matchedBy: match.matchedBy });
    } else {
      results.push({ ...item, status: 'NEPARENE - over rucne', shoptetCode: '', matchedBy: '' });
    }
  }

  console.log(`\nDodavatel: ${SUPPLIER_LABELS[supplier]} | Polozky spolu: ${rawItems.length}\n`);
  const colWidths = { name: 45, code: 14, ean: 14, qty: 6 };
  const pad = (s, n) => String(s ?? '').slice(0, n).padEnd(n);
  console.log(pad('Nazov', colWidths.name), pad('Shoptet kod', colWidths.code), pad('EAN', colWidths.ean), pad('Mn.', colWidths.qty), 'Stav');
  for (const r of results) {
    console.log(pad(r.name, colWidths.name), pad(r.shoptetCode || '-', colWidths.code), pad(r.ean || '-', colWidths.ean), pad(r.quantity, colWidths.qty), r.status + (r.matchedBy ? ` (${r.matchedBy})` : ''));
  }

  const toStock = results.filter((r) => r.status === 'OK');
  const unmatched = results.filter((r) => r.status.startsWith('NEPARENE'));
  console.log(`\nNa naskladnenie: ${toStock.length}. Neparovane (over rucne): ${unmatched.length}.`);

  const today = new Date().toISOString().slice(0, 10);
  const outDir = path.join(__dirname, '..', 'output');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `naskladnenie-${today}-${supplier}.csv`);
  const csvLines = ['nazov;shoptet_kod;ean;mnozstvo;jednotkova_cena_bez_dph;stav'];
  for (const r of results) {
    csvLines.push([r.name, r.shoptetCode || '', r.ean || '', r.quantity, r.unitPriceNet, r.status].map((v) => String(v).replace(/;/g, ',')).join(';'));
  }
  fs.writeFileSync(outPath, csvLines.join('\r\n') + '\r\n', 'utf8');
  console.log(`CSV ulozene -> ${outPath}`);
}

main().catch((err) => {
  console.error(`Chyba: ${err.message}`);
  process.exit(1);
});

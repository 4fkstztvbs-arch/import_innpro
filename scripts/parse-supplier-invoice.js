// Precita PDF faktúru od dodávateľa (ATOS / K+B / InnPro), vytiahne polozky tovaru
// a sparuje ich s existujucimi Shoptet produktami (podla EAN, resp. podla nazvu pre
// K+B, ktoreho faktury EAN neobsahuju) - aby bolo jasne, co a v akom mnozstve treba
// v Shoptete naskladnit (Produkty -> Sklad -> Naskladnenie).
//
// Pouzitie:
//   node scripts/parse-supplier-invoice.js <faktura.pdf> [--supplier=atos|kb|innpro|basys|solight]
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
  basys: path.join(__dirname, '..', 'output', 'basys.xml'),
  solight: path.join(__dirname, '..', 'output', 'solight.xml'),
};

// Riadky, ktore nie su fyzicky tovar (poplatky, doprava, dobierka...) - nenaskladnujeme ich.
const NON_STOCK_KEYWORDS = [
  'dobierka', 'dobírka', 'doprava', 'postovne', 'poštovné', 'recyklac', 'recyklač',
  'koszty dostawy', 'przesyłki', 'przesylki', 'shipping', 'dorucenie', 'doručenie',
  'balikovne', 'balíkovné', 'dopravne', 'dopravné', 'prepravne', 'přepravné', 'preprava', 'přeprava',
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
// EAN-13 sa niekedy uvadza aj bez uvodnej nuly (napr. skonvertovany z UPC-A, alebo strateny pri inom
// systeme) - pri parovani preto porovnavame bez uvodnych nul, aby "017817856560" naslo "17817856560".
function normalizeEan(ean) {
  return String(ean || '').replace(/^0+/, '');
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

// Niektori dodavatelia (potvrdene K+B) niekedy posielaju viacero faktur v jednom PDF - treba ich
// rozdelit, aby kazda dostala vlastnu prijemku so spravnym cislom faktury a vlastnymi vedlajsimi
// nakladmi (inak by sa vsetky polozky spojili do jednej prijemky pod cislom prvej faktury a druha
// faktura by sa v Omege "stratila").
const INVOICE_BOUNDARY_PATTERNS = {
  kb: /^FAKTÚRA\s*-\s*DAŇOVÝ DOKLAD\s*č\./i,
};
function splitInvoices(rows, supplier) {
  const pattern = INVOICE_BOUNDARY_PATTERNS[supplier];
  if (!pattern) return [rows];
  const groups = [];
  let current = [];
  for (const cells of rows) {
    if (cells.length >= 1 && pattern.test(cells[0]) && current.length > 0) {
      groups.push(current);
      current = [];
    }
    current.push(cells);
  }
  if (current.length > 0) groups.push(current);
  return groups.length > 0 ? groups : [rows];
}

function detectSupplier(rows) {
  const text = normalize(rows.map((r) => r.join(' ')).join(' '));
  if (text.includes('atos spol')) return 'atos';
  if (text.includes('k+b progres')) return 'kb';
  if (text.includes('innpro robert')) return 'innpro';
  if (text.includes('basys cs')) return 'basys';
  if (text.includes('solight holding')) return 'solight';
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
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i];
    if (cells.length < 8) continue;
    if (!/^\d+$/.test(cells[0])) continue; // Č.r. = poradove cislo riadku
    const code = cells[1];
    if (!/^[A-Z]\d+$/i.test(code)) continue;
    const name = cells[2];
    const qty = toFloat(cells[3]);
    const unitPriceNet = toFloat(cells[4]);
    // EAN niekedy chyba, niekedy je na nasledujucom riadku ("EAN: <cislo>"), a ak sa nazov
    // produktu zalomi na 2 riadky, EAN je este o riadok nizsie - hladame v najblizsich 2 riadkoch.
    let ean = '';
    for (let k = 1; k <= 2 && !ean; k++) {
      const nextCells = rows[i + k] || [];
      const found = nextCells.find((c) => /^\d{8,14}$/.test(c));
      if (found) ean = found;
    }
    items.push({ code, ean, name, quantity: qty || 1, unitPriceNet });
  }
  return items;
}

// ---------- InnPro: jeden riadok na polozku, EAN (Barcode) je posledny stlpec ----------
function parseInnpro(rows) {
  const items = [];
  for (const raw of rows) {
    if (raw.length < 5) continue;
    let cells = raw;
    // Pri dvojcifernom cisle polozky (10+) sa "No." a "Item name" v PDF extrakcii casto zlucia
    // do jednej bunky (napr. "10 Lexar Smart Photo Frame") - rozdelime na povodne 2 stlpce.
    const merged = String(cells[0]).match(/^(\d+)\s+(\S.*)$/);
    if (merged) {
      cells = [merged[1], merged[2], ...cells.slice(1)];
    } else if (!/^\d+$/.test(cells[0])) {
      continue; // No.
    }
    if (cells.length < 6) continue;

    // Supplier's item code a Barcode su normalne 2 samostatne posledne stlpce, ale niekedy sa
    // tiez zlucia do jednej bunky ("PX-110BLKGL 843367138463") - rozdelime podla posledneho tokenu.
    const lastCell = String(cells[cells.length - 1] || '').trim();
    let code = '';
    let ean = '';
    if (/^\d{8,14}$/.test(lastCell)) {
      ean = lastCell;
      code = cells[cells.length - 2] || '';
    } else {
      const parts = lastCell.split(/\s+/);
      if (parts.length > 1 && /^\d{8,14}$/.test(parts[parts.length - 1])) {
        ean = parts.pop();
        code = parts.join(' ');
      } else {
        // EAN je niekedy prilepeny priamo na koniec kodu bez medzery (napr. "Stratos 4 Pro B6980064920015" -
        // kod "Stratos 4 Pro B" a EAN "6980064920015" sa v PDF extrakcii spoja do jedneho textoveho behu).
        const lastPart = parts[parts.length - 1] || '';
        const glued = lastPart.match(/^(\S*?)(\d{8,14})$/);
        if (glued) {
          ean = glued[2];
          code = parts.slice(0, -1).concat(glued[1] ? [glued[1]] : []).join(' ');
        }
      }
    }

    const name = cells[1];
    const qty = toFloat(cells[3]);
    const unitPriceNet = toFloat(cells[7] !== undefined ? cells[7] : cells[4]);
    items.push({ code, ean, name, quantity: qty || 1, unitPriceNet });
  }
  return items;
}

// BASYS pouziva "." ako oddelovac tisicok (napr. "1.800,00" = 1800.00) - bezny toFloat() by to
// zle sparsoval ("1.800.00" po nahradeni ciarky -> parseFloat zastavi na druhej bodke -> 1.8).
function toFloatEuro(s) {
  if (s === undefined || s === null) return 0;
  const v = parseFloat(String(s).replace(/\s/g, '').replace(/\./g, '').replace(',', '.'));
  return Number.isNaN(v) ? 0 : v;
}

// ---------- BASYS: polozka na 1 riadku (kod/nazov/mnozstvo/cena), EAN na nasledujucom riadku ----------
function parseBasys(rows) {
  const items = [];
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i];
    // riadok polozky: kod, nazov, mnozstvo, jednotka, sklad, JC bez DPH, sleva %, JC po slevě, celkom bez DPH, mena
    if (cells.length < 9) continue;
    if (!/^(pc\.|ks|kus)$/i.test(cells[3] || '')) continue; // stlpec "jednotka" rozlisi riadok polozky od ostatnych
    const code = cells[0];
    const name = cells[1];
    const qty = toFloatEuro(cells[2]);
    const unitPriceNet = toFloatEuro(cells[7]); // "JC po slevě" - cena po zlave
    const nextRow = rows[i + 1] || [];
    const ean = /^\d{8,14}$/.test(nextRow[0]) ? nextRow[0] : '';
    items.push({ code, ean, name, quantity: qty || 1, unitPriceNet });
  }
  return items;
}

// ---------- SOLIGHT: kod+EAN na riadku polozky, nazov sa casto zalomi na dalsie riadky ----------
function parseSolight(rows) {
  const items = [];
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i];
    if (cells.length === 0) continue;
    // Dopravne a pod. nemaju kod/EAN - riadok je len "nazov, celkom bez DPH, sadzba, DPH, celkom s DPH"
    if (cells.length >= 4 && isNonStock(cells[0])) {
      items.push({ code: '', ean: '', name: cells[0].replace(/:$/, ''), quantity: 1, unitPriceNet: toFloat(cells[1]) });
      continue;
    }
    if (cells.length < 8) continue;
    if (!/^\d{8,14}$/.test(cells[1] || '')) continue; // stlpec EAN identifikuje riadok polozky
    const code = cells[0];
    let name = cells[2] || '';
    // nazov produktu sa casto zalomi na dalsie riadky (max. 2 pokracovania) - "Seriove cisla" a
    // samotne ciselne retazce seriovych cisel nie su sucastou nazvu.
    for (let k = 1; k <= 2; k++) {
      const next = rows[i + k];
      if (!next || next.length !== 1 || /^\d/.test(next[0]) || /^sériov/i.test(next[0])) break;
      name += ' ' + next[0];
    }
    const qty = toFloat(cells[4]);
    const unitPriceNet = toFloat(cells[6]); // "Cena za jedn." (bez DPH)
    items.push({ code, ean: cells[1], name: name.trim(), quantity: qty || 1, unitPriceNet });
  }
  return items;
}

const SUPPLIER_PARSERS = { atos: parseAtos, kb: parseKb, innpro: parseInnpro, basys: parseBasys, solight: parseSolight };
const SUPPLIER_LABELS = { atos: 'ATOS', kb: 'K+B', innpro: 'InnPro', basys: 'BaSys', solight: 'Solight' };

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
    if (ean) byEan.set(normalizeEan(ean), { code: String(code || '').trim(), name, ean: String(ean).trim() });
    if (name) byName.set(normalize(name), { code: String(code || '').trim(), name, ean: ean ? String(ean).trim() : '' });
  }
  return { byEan, byName };
}

function matchItem(item, index) {
  if (item.ean && index.byEan.has(normalizeEan(item.ean))) return { ...index.byEan.get(normalizeEan(item.ean)), matchedBy: 'EAN' };
  const byName = index.byName.get(normalize(item.name));
  if (byName) return { ...byName, matchedBy: 'nazov' };
  return null;
}

async function main() {
  const pdfPath = process.argv[2];
  if (!pdfPath) {
    console.error('Pouzitie: node scripts/parse-supplier-invoice.js <faktura.pdf> [--supplier=atos|kb|innpro|basys|solight]');
    process.exit(1);
  }
  const supplierArg = process.argv.find((a) => a.startsWith('--supplier='));
  let supplier = supplierArg ? supplierArg.split('=')[1] : null;

  console.log(`Nacitavam ${pdfPath} ...`);
  const rows = await extractRows(pdfPath);

  if (!supplier) {
    supplier = detectSupplier(rows);
    if (!supplier) {
      console.error('Nepodarilo sa automaticky rozpoznat dodavatela. Pouzi --supplier=atos|kb|innpro|basys|solight');
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

if (require.main === module) {
  main().catch((err) => {
    console.error(`Chyba: ${err.message}`);
    process.exit(1);
  });
}

module.exports = {
  extractRows, detectSupplier, splitInvoices, SUPPLIER_PARSERS, SUPPLIER_LABELS,
  loadFeedIndex, matchItem, isNonStock, normalize, normalizeEan, toFloat,
};

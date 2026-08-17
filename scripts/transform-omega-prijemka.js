// Precita PDF fakturu od dodavatela (rovnaky parser ako parse-supplier-invoice.js) a vygeneruje
// Omega import pre prijemku (T02, typ P) - stlpcove mapovanie odvodene z realneho T02 exportu
// z Omegy (data/omega-export-samples/prijem-2026-08-14.txt), krizovo overene s PDF fakturami
// (poradie a mnozstva poloziek sa zhodovali 1:1 s existujucimi skladovymi kartami).
//
// DOLEZITE OBMEDZENIE: cislo skladovej karty (T02 R02 stlpec 4) MUSI byt existujuca Omega karta -
// vytvorenie NOVEJ karty (T03) tento skript nerobi (chyba overeny vzor T03 exportu). Polozky, ktorych
// EAN nie je v data/omega-stock-cards.json, sa do prijemky NEZAHRNU - vypisu sa zvlast na rucne riesenie.
//
// Pouzitie:
//   node scripts/transform-omega-prijemka.js <faktura.pdf> [--supplier=atos|kb|innpro] [--sklad="Eshop"]

const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');
const {
  extractRows, detectSupplier, SUPPLIER_PARSERS, SUPPLIER_LABELS, loadFeedIndex, isNonStock,
} = require('./parse-supplier-invoice');

const CARDS_PATH = path.join(__dirname, '..', 'data', 'omega-stock-cards.json');
const SELLER_NAME = 'Trokšiar .';

// Dodavatelia tak, ako su zaevidovani v Omege (partnerske cislo, IC, adresa) - zistene z realneho
// T02 exportu. K+B tam zatial nie je zastupene (chyba prijemka od K+B na overenie).
const SUPPLIER_OMEGA_IDENTITY = {
  atos: {
    name: 'ATOS spol. s r.o.', ico: '18055761', partnerId: '0002',
    street: 'Bohumínska 1556', zip: '969 01', city: 'Rychvald',
  },
  innpro: {
    name: 'INNPRO Robert Bledowski SP. z. o.o.', ico: '', partnerId: '9066',
    street: 'Rudzka 65C', zip: '982 65', city: 'Rybnik',
  },
  kb: { name: 'K+B Progres, a.s., organizační složka SK', ico: '', partnerId: '', street: '', zip: '', city: '' },
};

function nat(n) {
  let s = (Math.round((n + Number.EPSILON) * 100) / 100).toFixed(2);
  s = s.replace(/0+$/, '').replace(/\.$/, '');
  return s === '' || s === '-' ? '0' : s;
}
function dateToOmega(d) {
  const p = (x) => String(x).padStart(2, '0');
  return `${p(d.getDate())}.${p(d.getMonth() + 1)}.${d.getFullYear()}`;
}
function nowTime() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}.000`;
}

function loadCards() {
  if (!fs.existsSync(CARDS_PATH)) return {};
  return JSON.parse(fs.readFileSync(CARDS_PATH, 'utf8'));
}

function buildHeaderRow(supplier, invoiceNumber, freightTotal, sklad) {
  const identity = SUPPLIER_OMEGA_IDENTITY[supplier] || {};
  const cols = new Array(38).fill('');
  cols[0] = 'R01';
  cols[1] = sklad;
  cols[2] = ''; // cislo dokladu prijemky - necha sa na Omegu (auto-cislovanie), over pri prvom teste
  cols[3] = 'P';
  cols[4] = '2';
  cols[5] = identity.name || SUPPLIER_LABELS[supplier];
  cols[6] = identity.ico || '';
  cols[7] = dateToOmega(new Date());
  cols[8] = 'PV';
  cols[9] = 'P';
  cols[10] = identity.partnerId || '';
  cols[11] = ''; cols[12] = ''; cols[13] = '';
  cols[14] = identity.street || '';
  cols[15] = identity.zip || '';
  cols[16] = identity.city || '';
  cols[17] = '';
  cols[18] = invoiceNumber || '';
  cols[19] = SELLER_NAME;
  cols[20] = 'EUR';
  cols[21] = '1';
  cols[22] = '1';
  cols[23] = nat(freightTotal);
  cols[24] = nat(freightTotal);
  cols[25] = '0.0000';
  cols[26] = '1';
  cols[27] = '1';
  cols[28] = nowTime();
  cols[29] = '-1';
  cols[30] = '';
  cols[31] = '0';
  cols[32] = '0';
  cols[33] = '';
  cols[34] = '-999';
  cols[35] = '1';
  cols[36] = '0';
  cols[37] = '';
  return cols;
}

function buildItemRow(name, quantity, unitPriceNet, cardCode) {
  const cols = new Array(30).fill('');
  cols[0] = 'R02';
  cols[1] = name;
  cols[2] = String(quantity);
  cols[3] = nat(unitPriceNet);
  cols[4] = cardCode;
  cols[5] = '0';
  cols[6] = nat(unitPriceNet);
  cols[7] = nat(unitPriceNet);
  cols[8] = '0';
  cols[9] = '"ks"';
  cols[10] = String(quantity);
  cols[11] = '';
  cols[12] = '-6';
  cols[13] = '3';
  cols[14] = '0';
  cols[15] = '-3';
  cols[16] = nat(unitPriceNet);
  cols[17] = '0';
  cols[18] = nat(unitPriceNet);
  cols[19] = '0';
  cols[20] = '0';
  cols[21] = 'X'; cols[22] = '(Nedefinované)';
  cols[23] = 'X'; cols[24] = '(Nedefinované)';
  cols[25] = 'X'; cols[26] = '(Nedefinované)';
  cols[27] = 'X'; cols[28] = '(Nedefinované)';
  cols[29] = '';
  return cols;
}

// Cislo faktury dodavatela - format sa lisi na kazdej fakture, hlada sa podla dodavatela.
// Omega uklada len uvodnu ciselnu cast (napr. "27197" z "27197/MAG/08/2026").
function extractInvoiceNumber(rows, supplier) {
  const flatRows = rows.map((r) => r.join(' '));
  if (supplier === 'atos') {
    for (let i = 0; i < rows.length; i++) {
      const idx = rows[i].findIndex((c) => /^číslo$/i.test(c));
      if (idx >= 0 && rows[i][idx + 1] && /^\d{4,}$/.test(rows[i][idx + 1])) return rows[i][idx + 1];
    }
  }
  if (supplier === 'kb') {
    for (const line of flatRows) {
      const m = line.match(/č\.\s*(\d{4,})/i);
      if (m) return m[1];
    }
  }
  if (supplier === 'innpro') {
    for (const line of flatRows) {
      const m = line.match(/invoice\s+(\d{3,})/i);
      if (m) return m[1];
    }
  }
  return '';
}

async function main() {
  const pdfPath = process.argv[2];
  if (!pdfPath) {
    console.error('Pouzitie: node scripts/transform-omega-prijemka.js <faktura.pdf> [--supplier=atos|kb|innpro] [--sklad="Eshop"]');
    process.exit(1);
  }
  const supplierArg = process.argv.find((a) => a.startsWith('--supplier='));
  let supplier = supplierArg ? supplierArg.split('=')[1] : null;
  const skladArg = process.argv.find((a) => a.startsWith('--sklad='));
  const sklad = skladArg ? skladArg.split('=')[1].replace(/^"|"$/g, '') : 'Eshop';

  console.log(`Nacitavam ${pdfPath} ...`);
  const rows = await extractRows(pdfPath);

  if (!supplier) {
    supplier = detectSupplier(rows);
    if (!supplier) { console.error('Nepodarilo sa rozpoznat dodavatela. Pouzi --supplier=atos|kb|innpro'); process.exit(1); }
    console.log(`Rozpoznany dodavatel: ${SUPPLIER_LABELS[supplier]}`);
  }
  const parser = SUPPLIER_PARSERS[supplier];
  if (!parser) { console.error(`Neznamy dodavatel "${supplier}"`); process.exit(1); }

  const rawItems = parser(rows);
  const feedIndex = loadFeedIndex(supplier);
  const cards = loadCards();

  const invoiceNumber = extractInvoiceNumber(rows, supplier);

  const toReceive = [];
  const skipped = [];
  const needsCard = [];
  let freightTotal = 0;

  for (const item of rawItems) {
    if (isNonStock(item.name)) {
      freightTotal += (item.unitPriceNet || 0) * (item.quantity || 1);
      skipped.push(item);
      continue;
    }
    const ean = item.ean;
    let card = ean && cards[ean];
    if (!card && ean && feedIndex.byEan.has(ean)) {
      // EAN pozname zo Shoptet feedu, ale este nemame jeho Omega kartu v databaze
      needsCard.push({ ...item, shoptetCode: feedIndex.byEan.get(ean).code });
      continue;
    }
    if (!card) { needsCard.push(item); continue; }
    toReceive.push({ ...item, cardCode: card.kod, cardName: card.nazov });
  }

  console.log(`\nDodavatel: ${SUPPLIER_LABELS[supplier]} | Faktura c.: ${invoiceNumber || '(nenajdene)'}`);
  console.log(`Na prijemku (znama karta): ${toReceive.length}`);
  for (const r of toReceive) console.log(`  OK   ${r.cardCode}  ${r.cardName}  x${r.quantity}`);
  if (needsCard.length) {
    console.log(`Chyba karta v databaze (over v Omege a dopln do data/omega-stock-cards.json): ${needsCard.length}`);
    for (const r of needsCard) console.log(`  ???  EAN ${r.ean || '(chyba)'}  ${r.name}  x${r.quantity}`);
  }
  if (skipped.length) console.log(`Preskocene (poplatky/doprava): ${skipped.length}`);

  if (toReceive.length === 0) {
    console.log('\nZiadna polozka so znamou skladovou kartou - prijemka sa nevygenerovala.');
    return;
  }

  const identity = SUPPLIER_OMEGA_IDENTITY[supplier] || {};
  if (!identity.partnerId) {
    console.warn(`  [!] pre dodavatela "${supplier}" nepoznam Omega partnerske cislo - over v Omege pred importom`);
  }

  const headerCols = buildHeaderRow(supplier, invoiceNumber, freightTotal, sklad);
  const lines = ['R00\tT02', headerCols.join('\t')];
  for (const r of toReceive) {
    lines.push(buildItemRow(r.cardName, r.quantity, r.unitPriceNet, r.cardCode).join('\t'));
  }

  const today = new Date().toISOString().slice(0, 10);
  const outDir = path.join(__dirname, '..', 'output');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `omega-prijemka-${today}-${supplier}.txt`);
  fs.writeFileSync(outPath, iconv.encode(lines.join('\r\n') + '\r\n', 'win1250'));
  console.log(`\nPrijemka ulozena -> ${outPath}`);
}

main().catch((err) => {
  console.error(`Chyba: ${err.message}`);
  process.exit(1);
});

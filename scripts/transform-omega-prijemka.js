// Precita PDF fakturu od dodavatela (rovnaky parser ako parse-supplier-invoice.js) a vygeneruje
// Omega import pre sklad "Eshop" (kod 03, jediny sklad s ktorym tento nastroj pracuje - "Predajna"
// sa rieši rucne priamo v Omege): (1) T03 - nove skladove karty pre produkty, ktore este nemaju
// kartu v Eshope, (2) T02 - prijemka (typ P) pre vsetky polozky na fakture (existujuce aj nove karty).
//
// Stlpcove mapovanie odvodene z realnych T02/T03 exportov z Omegy (obsahovali osobne udaje/citlive
// data, preto sa neuklada do repozitara - len z nich odvodene poznatky a data/omega-stock-cards.json).
//
// Cisla novych kariet pridel'uje cloudflare-worker-omega-cards/ (Omega cards API) - jediny zdroj
// pravdy zdielany s naskladnenie.html, ukladá priamo do data/omega-stock-cards.json v repozitari
// (zaciatok cislovania 202600001, podla zadania).
//
// DOLEZITY NEOVERENY PREDPOKLAD: predpoklada sa, ze Omega pri importe T03 s explicitne vyplnenym
// cislom karty toto cislo POUZIJE (nepridelí vlastne). Toto NIE JE overene skutocnym testovacim
// importom - pred bezným pouzivanim over jednym testovacim produktom, ci karta v Omege naozaj
// dostane presne toto cislo.
//
// Import v Omege MUSI prebehnut v poradi: najprv T03 subor (zalozi karty), potom az T02 (prijemka) -
// oba subory su samostatne, kombinovanie T01/T02/T03 v jednom subore nie je overene.
//
// Pouzitie:
//   node scripts/transform-omega-prijemka.js <faktura.pdf> [--supplier=atos|kb|innpro|basys|solight]

const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');
const XLSX = require('xlsx');
const {
  extractRows, detectSupplier, splitInvoices, SUPPLIER_PARSERS, SUPPLIER_LABELS, isNonStock, loadFeedIndex, matchItem,
} = require('./parse-supplier-invoice');

// Omega cards API (cloudflare-worker-omega-cards/) - jediny zdroj pravdy pre cisla skladovych
// kariet, zdielany s naskladnenie.html. Pridel'uje cisla a ukladá ich priamo do repozitara.
const OMEGA_CARDS_API_URL = process.env.OMEGA_CARDS_API_URL || 'https://omega-cards-api.dt7vy7byn2.workers.dev';
const OMEGA_CARDS_API_KEY = process.env.OMEGA_CARDS_API_KEY || 'V77bC1yTE_ATf46jy_Xyx5efDgVj_BDm';
const SELLER_NAME = 'Trokšiar .';
const SKLAD_NAME = 'Eshop';
const SKLAD_KOD = '03';
const MARKUP = 1.15; // rovnaka prirazka ako pri ostatnych Shoptet feedoch tohto repozitara (README)
const VAT_RATE = 0.23;
// Kod cenovej hladiny pre eshopovu maloobchodnu cenu v Omege (Import skladovych kariet z Excelu -
// https://podpora.kros.sk/faq/import-z-excelu - stlpce "Cena Kod"/"Cena bez DPH"). Na rozdiel od
// stareho textoveho T03 importu tento format predajnu cenu skutocne nastavi bez dialogu "Pridaj
// predajnu cenu" pri zalozeni karty.
const PRICE_LEVEL_CODE = '01';

// Dodavatelia tak, ako su zaevidovani v Omege (partnerske cislo, IC, adresa) - zistene z realneho
// T02 exportu. K+B a BaSys tam zatial nie su zastupene (chyba prijemka na overenie) - partnerId
// zostava prazdny, Omega si partnera pri importe dohlada/zalozi sama podla ostatnych udajov.
const SUPPLIER_OMEGA_IDENTITY = {
  atos: {
    name: 'ATOS spol. s r.o.', ico: '18055761', partnerId: '0002',
    street: 'Bohumínska 1556', zip: '969 01', city: 'Rychvald', label: 'Atos',
  },
  innpro: {
    name: 'INNPRO Robert Bledowski SP. z. o.o.', ico: '', partnerId: '9066',
    street: 'Rudzka 65C', zip: '982 65', city: 'Rybnik', label: 'Innpro',
  },
  kb: {
    name: 'K+B Progres, a.s., organizační složka SK', ico: '', partnerId: '',
    street: '', zip: '', city: '', label: 'K+B',
  },
  basys: {
    name: 'BaSys CS, s.r.o.', ico: '49615581', partnerId: '',
    street: 'Sodomkova 1478/8', zip: '102 00', city: 'Praha 10', label: 'BaSys',
  },
  solight: {
    name: 'Solight Holding s.r.o.', ico: '28320573', partnerId: '',
    street: 'Na Brně 1972', zip: '500 06', city: 'Hradec Králové', label: 'Solight',
  },
};

function nat(n, decimals = 2) {
  let s = (Math.round((n + Number.EPSILON) * 10 ** decimals) / 10 ** decimals).toFixed(decimals);
  s = s.replace(/0+$/, '').replace(/\.$/, '');
  return s === '' || s === '-' ? '0' : s;
}
function natComma(n, decimals = 2) { return nat(n, decimals).replace('.', ','); }
function dateToOmega(d) {
  const p = (x) => String(x).padStart(2, '0');
  return `${p(d.getDate())}.${p(d.getMonth() + 1)}.${d.getFullYear()}`;
}
function nowTime() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}.000`;
}

async function reserveOmegaCards(items) {
  const res = await fetch(`${OMEGA_CARDS_API_URL}/reserve`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Api-Key': OMEGA_CARDS_API_KEY },
    body: JSON.stringify({ items }),
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.error || `Omega cards API zlyhalo (${res.status})`);
  return body.assigned;
}

// ---------- T02 (prijemka) ----------
function buildPrijemkaHeaderRow(supplier, invoiceNumber, freightTotal) {
  const identity = SUPPLIER_OMEGA_IDENTITY[supplier] || {};
  const cols = new Array(38).fill('');
  cols[0] = 'R01';
  cols[1] = SKLAD_NAME;
  cols[2] = ''; // cislo dokladu prijemky - necha sa na Omegu (auto-cislovanie od 202600001)
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
function buildPrijemkaItemRow(name, quantity, unitPriceNet, cardCode) {
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

// ---------- T03 (nove skladove karty) ----------
function buildWarehouseHeaderRow() {
  const cols = new Array(16).fill('');
  cols[0] = 'R01'; cols[1] = SKLAD_NAME; cols[2] = SKLAD_KOD;
  cols[3] = ''; cols[4] = ''; cols[5] = '';
  cols[6] = 'P'; cols[7] = 'ks'; cols[8] = '132'; cols[9] = '000'; cols[10] = '604'; cols[11] = '001';
  cols[12] = '';
  cols[13] = 'V'; cols[14] = '0'; cols[15] = '0';
  return cols;
}
function buildNewCardRow(name, cardCode, ean, unitPriceNet, supplierLabel) {
  const sellNet = unitPriceNet * MARKUP;
  const sellGross = sellNet * (1 + VAT_RATE);
  const cols = new Array(50).fill('');
  cols[0] = 'R02';
  cols[1] = name;
  cols[2] = cardCode;
  cols[3] = 'ks';
  cols[4] = ean || '';
  cols[5] = '0'; cols[6] = ''; cols[7] = '0'; cols[8] = '0';
  cols[9] = name;
  cols[10] = 'V'; cols[11] = '132'; cols[12] = '000'; cols[13] = '604'; cols[14] = '001';
  cols[15] = supplierLabel || '';
  cols[16] = ''; cols[17] = ''; cols[18] = '0'; cols[19] = '0'; cols[20] = '-1';
  cols[21] = ''; cols[22] = ''; cols[23] = '';
  cols[24] = '0'; cols[25] = '0'; cols[26] = ''; cols[27] = '0'; cols[28] = '0'; cols[29] = '0'; cols[30] = '0';
  cols[31] = natComma(sellNet, 4);
  cols[32] = natComma(sellGross, 2);
  cols[33] = '131'; cols[34] = '000';
  cols[35] = ''; cols[36] = ''; cols[37] = '';
  cols[38] = '0'; cols[39] = '0'; cols[40] = '0';
  cols[41] = 'ks'; cols[42] = '1'; cols[43] = '0';
  cols[44] = 'SK'; cols[45] = 'SK'; cols[46] = '504'; cols[47] = '000'; cols[48] = '0'; cols[49] = '0';
  return cols;
}

// Excel import predajnych cien pre nove karty (podpora.kros.sk/faq/import-z-excelu) - samostatny
// subor od T03, naimportuje sa AZ PO zalozeni kariet cez T03 (karty musia uz existovat).
function buildNewCardPricesWorkbook(newCards) {
  const rows = newCards.map((r) => ({
    'Kód skladu': SKLAD_KOD,
    'Kód karty': r.cardCode,
    'Názov karty': r.name,
    'Cena Kód': PRICE_LEVEL_CODE,
    'Cena bez DPH': Number((r.unitPriceNet * MARKUP).toFixed(4)),
  }));
  const sheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, sheet, 'Ceny');
  return workbook;
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
  if (supplier === 'basys') {
    for (const line of flatRows) {
      const m = line.match(/variabiln[íi]\s*symbol:?\s*(\d{4,})/i);
      if (m) return m[1];
    }
  }
  if (supplier === 'solight') {
    for (const line of flatRows) {
      const m = line.match(/(FV-\d+\/\d+)/i);
      if (m) return m[1];
    }
  }
  return '';
}

async function main() {
  const pdfPath = process.argv[2];
  if (!pdfPath) {
    console.error('Pouzitie: node scripts/transform-omega-prijemka.js <faktura.pdf> [--supplier=atos|kb|innpro|basys|solight] [--no-prices]');
    process.exit(1);
  }
  const supplierArg = process.argv.find((a) => a.startsWith('--supplier='));
  let supplier = supplierArg ? supplierArg.split('=')[1] : null;
  const withPrices = !process.argv.includes('--no-prices');

  console.log(`Nacitavam ${pdfPath} ...`);
  const rows = await extractRows(pdfPath);

  if (!supplier) {
    supplier = detectSupplier(rows);
    if (!supplier) { console.error('Nepodarilo sa rozpoznat dodavatela. Pouzi --supplier=atos|kb|innpro|basys|solight'); process.exit(1); }
    console.log(`Rozpoznany dodavatel: ${SUPPLIER_LABELS[supplier]}`);
  }
  const parser = SUPPLIER_PARSERS[supplier];
  if (!parser) { console.error(`Neznamy dodavatel "${supplier}"`); process.exit(1); }

  const identity = SUPPLIER_OMEGA_IDENTITY[supplier] || {};
  const feedIndex = loadFeedIndex(supplier);

  // Niektori dodavatelia (potvrdene K+B) posielaju viacero faktur v jednom PDF - kazda dostane
  // vlastnu prijemku (vlastne cislo faktury + vlastne vedlajsie naklady), aby sa v Omege nestratili.
  const invoiceGroups = splitInvoices(rows, supplier);
  if (invoiceGroups.length > 1) console.log(`Rozpoznanych faktur v PDF: ${invoiceGroups.length}`);

  const perInvoice = [];
  for (const groupRows of invoiceGroups) {
    const rawItems = parser(groupRows);
    const invoiceNumber = extractInvoiceNumber(groupRows, supplier);
    const physicalItems = [];
    let freightTotal = 0;
    for (const item of rawItems) {
      if (isNonStock(item.name)) {
        freightTotal += (item.unitPriceNet || 0) * (item.quantity || 1);
        continue;
      }
      // K+B faktury EAN vobec neposielaju - ak sa polozka sparuje podla nazvu, pouzijeme EAN z
      // Shoptet feedu (ma ho ulozeny ten istý produkt) ako kluc pre Omega cards API namiesto neho.
      let ean = item.ean;
      if (!ean) {
        const match = matchItem(item, feedIndex);
        if (match && match.ean) ean = match.ean;
      }
      if (!ean) {
        console.warn(`  [!] polozka bez EAN (aj v Shoptet feede), preskocena (nedokazem overit/zalozit kartu bez EAN): ${item.name}`);
        continue;
      }
      physicalItems.push({ ...item, ean });
    }
    perInvoice.push({ invoiceNumber, freightTotal, physicalItems });
  }

  const allPhysicalItems = perInvoice.flatMap((inv) => inv.physicalItems);
  let assigned = {};
  if (allPhysicalItems.length > 0) {
    assigned = await reserveOmegaCards(allPhysicalItems.map((i) => {
      const match = matchItem(i, feedIndex);
      return { ean: i.ean, name: i.name, supplier, code: match ? match.code : '' };
    }));
  }

  const newCards = [];
  const newCardEans = new Set();
  for (const inv of perInvoice) {
    inv.toReceive = [];
    for (const item of inv.physicalItems) {
      const card = assigned[item.ean];
      if (!card) continue;
      if (card.isNew && !newCardEans.has(item.ean)) { newCards.push({ ...item, cardCode: card.kod }); newCardEans.add(item.ean); }
      inv.toReceive.push({ ...item, cardCode: card.kod, cardName: card.nazov });
    }
  }

  const totalToReceive = perInvoice.reduce((n, inv) => n + inv.toReceive.length, 0);
  console.log(`\nDodavatel: ${SUPPLIER_LABELS[supplier]}`);
  for (const inv of perInvoice) {
    console.log(`Faktura c.: ${inv.invoiceNumber || '(nenajdene)'} | polozky na prijemku: ${inv.toReceive.length}`);
    for (const r of inv.toReceive) {
      const tag = newCards.some((n) => n.ean === r.ean) ? 'NOVA' : 'existujuca';
      console.log(`  ${r.cardCode}  (${tag})  ${r.cardName}  x${r.quantity}`);
    }
  }

  if (totalToReceive === 0) {
    console.log('\nZiadna polozka na spracovanie (vsetko poplatky/doprava, alebo chyba EAN) - nic sa nevygenerovalo.');
    return;
  }

  const today = new Date().toISOString().slice(0, 10);
  const outDir = path.join(__dirname, '..', 'output');
  fs.mkdirSync(outDir, { recursive: true });

  if (newCards.length > 0) {
    const lines = ['R00\tT03', buildWarehouseHeaderRow().join('\t')];
    for (const r of newCards) lines.push(buildNewCardRow(r.name, r.cardCode, r.ean, r.unitPriceNet, identity.label).join('\t'));
    const outPath = path.join(outDir, `omega-nove-karty-${today}-${supplier}.txt`);
    fs.writeFileSync(outPath, iconv.encode(lines.join('\r\n') + '\r\n', 'win1250'));
    console.log(`\nNove skladove karty ulozene -> ${outPath} (naimportuj v Omege AKO PRVE)`);

    if (withPrices) {
      const pricesWorkbook = buildNewCardPricesWorkbook(newCards);
      const pricesPath = path.join(outDir, `omega-nove-ceny-${today}-${supplier}.xlsx`);
      XLSX.writeFile(pricesWorkbook, pricesPath);
      console.log(`Predajne ceny novych kariet ulozene -> ${pricesPath} (naimportuj cez Import z Excelu AZ PO T03)`);
    }
  }

  const prijemkaLines = ['R00\tT02'];
  for (const inv of perInvoice) {
    if (inv.toReceive.length === 0) continue;
    prijemkaLines.push(buildPrijemkaHeaderRow(supplier, inv.invoiceNumber, inv.freightTotal).join('\t'));
    for (const r of inv.toReceive) prijemkaLines.push(buildPrijemkaItemRow(r.cardName, r.quantity, r.unitPriceNet, r.cardCode).join('\t'));
  }
  const prijemkaPath = path.join(outDir, `omega-prijemka-${today}-${supplier}.txt`);
  fs.writeFileSync(prijemkaPath, iconv.encode(prijemkaLines.join('\r\n') + '\r\n', 'win1250'));
  console.log(`Prijemka ulozena -> ${prijemkaPath}${newCards.length > 0 ? ' (naimportuj v Omege AZ PO novych kartach)' : ''}`);
}

main().catch((err) => {
  console.error(`Chyba: ${err.message}`);
  process.exit(1);
});

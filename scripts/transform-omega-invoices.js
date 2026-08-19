// Prevod Shoptet exportu (formát Stormware Pohoda XML, "Vystavené faktúry") na
// textový import pre KROS Omega (Firma -> Import -> Import z textového súboru).
//
// Použitie:
//   node scripts/transform-omega-invoices.js [vstupny-subor.xml] [vystupny-subor.txt]
// Predvolené cesty: data/stormware_invoices.xml -> output/omega-invoices.txt
//
// DÔLEŽITÉ: formát Omega importu nie je verejne zdokumentovaný do detailu (166 možných
// stĺpcov, KROS poskytuje len sprievodný Excel k oficiálnej príručke). Táto mapovanie
// stĺpcov vychádza z reálneho exportu z Omegy (data/omega-sample-export.txt) porovnaním
// 6 hlavičiek a 16 položiek. Stĺpce, ktorých význam sa nedal jednoznačne určiť, sú
// ponechané prázdne/0 (rovnaká hodnota ako v konštantných stĺpcoch vzorky) — pred prvým
// ostrým importom OVERTE výsledok testovacím importom do Omegy (najlepšie do skúšobnej
// firmy) a until confirmed.

const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');
const { XMLParser } = require('fast-xml-parser');

const IN_PATH = process.argv[2] || path.join(__dirname, '..', 'data', 'stormware_invoices.xml');
const OUT_PATH = process.argv[3] || path.join(__dirname, '..', 'output', 'omega-invoices.txt');

// Omega cards API (cloudflare-worker-omega-cards/) - odtial sa zisti, akemu cislu skladovej karty
// v sklade Eshop zodpoveda predavany produkt (podla Shoptet kodu), aby sa na fakture spravne
// vyplnilo "Kod polozky" (cislo karty v Omege NIE JE to iste ako Shoptet CODE). Vydajku zo skladu
// pri editacii/ulozeni faktury generuje Omega sama - tento nastroj ju negeneruje.
const OMEGA_CARDS_API_URL = process.env.OMEGA_CARDS_API_URL || 'https://omega-cards-api.dt7vy7byn2.workers.dev';

// --- Údaje predávajúceho (konštantné, zistené zo vzorového exportu z Omegy) ---
const SELLER = {
  name: 'Trokšiar .',
  bankAccount: '2943138960/1100',
  bankName: 'Tatrabanka as',
  bankCity: 'Banská Bystrica',
  bic: 'TATRSKBX',
  iban: 'SK6711000000002943138960',
  dic: '2121848729',
  country: 'SLOVENSKO',
  radKod: '0008', // konstanta zistena z realneho exportu Omegy 19.8.2026 (nesuvisi s poradovym cislom radu OFE)
};

const PAYMENT_TYPE_MAP = {
  cash: 'Hotovosť',
  cod: 'Dobierka',
  delivery: 'Dobierka', // alternativny Pohoda kod pre dobierku cez dopravcu (napr. Packeta Pickup)
  creditcard: 'Platba kartou',
  banktransfer: 'Prevodný príkaz',
  advance: 'Zálohová platba',
  postal: 'Poštová poukážka',
};

// Riadkove polozky dopravy/dobierky (typ "S" = sluzba) su v Omege vedene ako skladove karty typu
// "Služba" v evidencii SL (Firma - Cislovnik sluzieb) - stav sa neodpisuje, len sa pouzije suma.
// Kody zistene priamo z Omegy (2026-08-17), nazvy sposobov dopravy z administracie premiumstore.sk
// (Nastavenia -> Doprava a platby).
const SERVICE_CODES = [
  { code: '000002', pattern: /packeta/i },
  { code: '000003', pattern: /sps.*doru[cč]enie/i },
  { code: '000004', pattern: /bal[ií]kovo/i },
  { code: '000006', pattern: /bal[ií]kobox|alzabox/i },
  { code: '000005', pattern: /slovensk[aá]\s*po[sš]ta/i },
  { code: '000007', pattern: /geis/i },
  { code: '000008', pattern: /dobierk|dob[ií]rk/i },
  { code: '000009', pattern: /osobn[yý]\s*odber/i },
];
function matchServiceCode(text) {
  const hit = SERVICE_CODES.find((s) => s.pattern.test(text));
  return hit ? hit.code : '';
}

// vysoka/znizena/dalsia znizena/nulova sadzba DPH (SK od 2025: 23 / 19 / 5 / 0)
const VAT_RATE_MAP = { high: 0.23, low: 0.19, third: 0.05, none: 0 };

function field(obj, tag) {
  const v = obj ? obj[tag] : undefined;
  if (v === undefined || v === null) return '';
  if (typeof v === 'object') return String(v['#text'] ?? '').trim();
  return String(v).trim();
}
function toFloat(s) {
  if (s === undefined || s === null || s === '') return 0;
  const v = parseFloat(String(s).replace(',', '.'));
  return Number.isNaN(v) ? 0 : v;
}
function round2(n) {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}
// Omegin vlastny export orezava koncove nuly (napr. "65" nie "65.00", "190.1" nie "190.10") -
// replikujeme rovnaky format, aby vystup zodpovedal overenej vzorke.
function nat(n) {
  let s = round2(n).toFixed(2);
  s = s.replace(/0+$/, '').replace(/\.$/, '');
  return s === '' || s === '-' ? '0' : s;
}
function natComma(n) {
  return nat(n).replace('.', ',');
}
function dateToOmega(isoDate) {
  if (!isoDate) return '';
  const [y, m, d] = isoDate.split('-');
  if (!y || !m || !d) return '';
  return `${d}.${m}.${y}`;
}
function nowTime() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}
function mapPaymentType(code) {
  const mapped = PAYMENT_TYPE_MAP[code];
  if (!mapped) {
    console.warn(`  [!] neznamy paymentType "${code}" - pouzivam surovu hodnotu, over v Omege`);
    return code || '';
  }
  return mapped;
}
function vatRateFraction(code) {
  if (!(code in VAT_RATE_MAP)) {
    console.warn(`  [!] neznama sadzba DPH "${code}" - pouzivam 23 %, over v Omege`);
    return 0.23;
  }
  return VAT_RATE_MAP[code];
}

function extractInvoices(xmlPath) {
  const raw = fs.readFileSync(xmlPath, 'utf8');
  // parseTagValue vypnuty - inak fast-xml-parser skonvertuje kody ako "085473" na cislo 85473 (strata uvodnej nuly)
  const parser = new XMLParser({ ignoreAttributes: true, removeNSPrefix: true, textNodeName: '#text', parseTagValue: false });
  const doc = parser.parse(raw);
  const dataPack = doc.dataPack;
  if (!dataPack) throw new Error('Neplatny XML subor: chyba <dat:dataPack>');
  let items = dataPack.dataPackItem || [];
  if (!Array.isArray(items)) items = [items];
  return items.map((it) => it.invoice).filter(Boolean);
}

// Shoptet CODE -> cislo skladovej karty v Omege (sklad Eshop) - z Omega cards API.
async function loadCardIndex() {
  const index = new Map();
  try {
    const res = await fetch(`${OMEGA_CARDS_API_URL}/state`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const db = await res.json();
    for (const card of Object.values(db.eshop?.cards || {})) {
      if (card.code) index.set(card.code, card.kod);
    }
  } catch (err) {
    console.warn(`  [!] Omega cards API nedostupne (${err.message}) - predavany tovar sa nespojazdni s kartou, over rucne v Omege`);
    index.apiError = err.message;
  }
  return index;
}

function buildItemRow(item, cardIndex, warnings) {
  const text = field(item, 'text');
  const quantity = toFloat(field(item, 'quantity')) || 1;
  const unit = field(item, 'unit');
  const rateCode = field(item, 'rateVAT') || 'high';
  const rate = vatRateFraction(rateCode);
  const home = item.homeCurrency || {};
  const unitPriceNet = toFloat(field(home, 'unitPrice'));
  const code = field(item, 'code');
  const stockIds = item.stockItem && item.stockItem.stockItem ? field(item.stockItem.stockItem, 'ids') : '';
  const cardCode = cardIndex.get(code) || cardIndex.get(stockIds) || '';

  let typ; // S = sluzba, K = skladova karta (tovar), V = volna polozka
  let serviceCode = '';
  if (stockIds) {
    if (cardCode) {
      typ = 'K';
    } else {
      typ = 'V'; // bez znamej karty v Eshope sa neda spravne odpisat - radsej volna polozka nez zla karta
      warnings.push(`Produkt "${text}" (kod ${code || stockIds}) nema znamu kartu v sklade Eshop - polozka bude ako volna (V) namiesto tovaru (K), pred ulozenim faktury v Omege priprav/priraď kartu rucne.`);
    }
  } else if (/^(SHIPPING|BILLING)/i.test(code)) {
    serviceCode = matchServiceCode(text);
    if (serviceCode) {
      typ = 'S';
    } else {
      typ = 'V'; // neznamy sposob dopravy/platby - nema priradenu sluzbu SL v Omege
      if (unitPriceNet !== 0) {
        warnings.push(`Doprava/platba "${text}" nema znamu kartu sluzby v Omege (evidencia SL) - over v Omege.`);
      }
    }
  } else typ = 'V';

  const unitPriceGross = round2(unitPriceNet * (1 + rate));
  const analytika = 'D2'; // '/A1' pre firmy sa doplna v buildHeaderRow volajucim kodom, tu default B2C

  const cols = new Array(58).fill('');
  cols[0] = 'R02';
  cols[1] = text;
  cols[2] = String(quantity);
  cols[3] = unit;
  cols[4] = nat(unitPriceNet);
  cols[5] = 'V';
  cols[6] = '0'; // nakupna cena - nie je v Shoptet exporte k dispozicii
  cols[7] = nat(unitPriceNet);
  cols[8] = '0'; // zlava/korekcia
  cols[9] = typ;
  cols[10] = typ === 'K' ? text : '';
  cols[11] = ''; // EAN - v Pohoda exporte zo Shoptetu nie je k dispozicii
  cols[12] = '0';
  cols[13] = ''; // ucet/stredisko - vynechane, uzivatel pri editacii faktury v Omege rucne vyberie polozku/sluzbu zo skladu
  cols[14] = typ === 'V' ? '' : '001';
  cols[15] = '';
  cols[16] = '';
  cols[17] = typ === 'K' ? cardCode : (typ === 'S' ? serviceCode : '');
  cols[18] = '';
  cols[19] = '';
  cols[20] = 'X'; cols[21] = '(Nedefinované)';
  cols[22] = 'X'; cols[23] = '(Nedefinované)';
  cols[24] = 'X'; cols[25] = '(Nedefinované)';
  cols[26] = 'X'; cols[27] = '(Nedefinované)';
  cols[28] = '';
  cols[29] = '03';
  cols[30] = '0'; cols[31] = '0'; cols[32] = '0'; cols[33] = '0';
  cols[34] = '0'; cols[35] = '0'; cols[36] = '0';
  cols[37] = unit;
  cols[38] = String(quantity);
  cols[39] = ''; cols[40] = ''; cols[41] = ''; cols[42] = ''; cols[43] = '';
  cols[44] = '-2';
  cols[45] = '3';
  cols[46] = typ === 'S' ? '2' : '0';
  cols[47] = '';
  cols[48] = natComma(unitPriceGross);
  cols[49] = typ === 'V' ? '0' : '-1';
  cols[50] = natComma(unitPriceGross);
  cols[51] = '0';
  cols[52] = '0';
  cols[53] = analytika;
  cols[54] = ''; cols[55] = ''; cols[56] = '';
  cols[57] = '0,0000';
  return { cols, lineNetTotal: round2(unitPriceNet * quantity), rateCode };
}

function buildHeaderRow(invoice, itemRows, totals) {
  const header = invoice.invoiceHeader || {};
  const address = (header.partnerIdentity && header.partnerIdentity.address) || {};
  const company = field(address, 'company');
  const personName = field(address, 'name');
  const partnerName = company || personName;
  const ico = field(address, 'ico');
  const icDph = field(address, 'icDph');
  const street = field(address, 'street');
  const zip = field(address, 'zip');
  const city = field(address, 'city');
  const isCompany = !!ico;

  const invoiceNumber = field(header.number, 'numberRequested');
  const orderNumber = field(header, 'numberOrder') || field(header, 'symVar');
  const paymentType = mapPaymentType(field(header.paymentType, 'paymentType'));
  const carrier = header.carrier ? field(header.carrier, 'ids') : '';
  const dateIssue = dateToOmega(field(header, 'date'));
  const dateTax = dateToOmega(field(header, 'dateTax') || field(header, 'date'));
  const dateDue = dateToOmega(field(header, 'dateDue'));

  // Vsetky vzorky z realneho Omega exportu mali polozky vylucne v sadzbe 23 % (stlpce pre
  // 19 %/0 % sadzbu boli vzdy "0.0000" - ich skutocny vyznam/format sme nemohli overit).
  // Preto vsetky sumy pripisujeme do overeneho "23 %" kosika a pri inej sadzbe len upozornime.
  if (totals.low || totals.third || totals.none) {
    console.warn(`  [!] faktura ${invoiceNumber}: obsahuje polozky mimo sadzby 23 % - stlpce pre 19 %/0 % nie su overene, skontroluj rucne v Omege`);
  }
  const totalNet = round2(totals.high + totals.low + totals.third + totals.none);
  const totalVat = round2(totals.highVat + totals.lowVat + totals.thirdVat);
  const totalGross = round2(totalNet + totalVat);

  // analytika D2 (B2C) / A1 (B2B) - podla pritomnosti ICO, pouzite aj v poloziach
  const analytika = isCompany ? 'A1' : 'D2';
  itemRows.forEach((r) => { r.cols[53] = analytika; });

  const cols = new Array(97).fill('');
  cols[0] = 'R01';
  cols[1] = invoiceNumber; // interne cislo dokladu - pouzivame Shoptet cislo faktury (unikatne, idempotentne)
  cols[2] = partnerName;
  cols[3] = ico;
  cols[4] = dateIssue;
  cols[5] = dateDue;
  cols[6] = dateTax;
  cols[7] = '0.0000';
  cols[8] = nat(totalNet);
  cols[9] = '0.0000';
  cols[10] = '0.0000';
  cols[11] = '19';
  cols[12] = '23';
  cols[13] = '0.0000';
  cols[14] = nat(totalVat);
  cols[15] = '0';
  cols[16] = nat(totalGross);
  cols[17] = '0';
  cols[18] = 'OF'; // konstanta (nezavisla od nazvu radu) - zistene z realneho exportu Omegy 19.8.2026
  cols[19] = 'OFE'; // skutocny kod ciselneho radu
  cols[20] = ''; // cislo v rade - ponechane prazdne, nech Omega prideli podla radu 0008
  cols[21] = ''; cols[22] = ''; cols[23] = '';
  cols[24] = street;
  cols[25] = zip;
  cols[26] = city;
  cols[27] = icDph;
  cols[28] = nowTime();
  cols[29] = '';
  cols[30] = '';
  cols[31] = '';
  cols[32] = orderNumber;
  cols[33] = '';
  cols[34] = '(Nedefinované)'; // konstanta zistena z realneho exportu Omegy - nie nazov predajcu
  cols[35] = SELLER.radKod;
  cols[36] = '';
  cols[37] = paymentType;
  cols[38] = carrier;
  cols[39] = 'EUR';
  cols[40] = '1';
  cols[41] = '1';
  cols[42] = nat(totalGross);
  cols[43] = '';
  cols[44] = '';
  cols[45] = '';
  cols[46] = SELLER.country;
  cols[47] = icDph ? 'SK' : '';
  cols[48] = icDph;
  cols[49] = SELLER.bankAccount;
  cols[50] = SELLER.bankName;
  cols[51] = SELLER.bankCity;
  cols[52] = SELLER.country;
  cols[53] = 'X';
  cols[54] = partnerName.slice(0, 15);
  cols[55] = SELLER.bic;
  cols[56] = SELLER.iban;
  cols[57] = 'SK';
  cols[58] = SELLER.dic;
  cols[59] = SELLER.country;
  cols[60] = '-2';
  cols[61] = '3';
  cols[62] = '0';
  cols[63] = '999';
  cols[64] = '';
  cols[65] = '0.0000';
  cols[66] = '1';
  cols[67] = '0';
  cols[68] = '';
  cols[69] = '0';
  cols[70] = invoiceNumber;
  cols[71] = '';
  cols[72] = partnerName;
  cols[73] = '';
  cols[74] = '';
  cols[75] = street;
  cols[76] = zip;
  cols[77] = city;
  cols[78] = ''; cols[79] = ''; cols[80] = ''; cols[81] = ''; cols[82] = ''; cols[83] = '';
  cols[84] = '0';
  cols[85] = '0';
  cols[86] = ''; cols[87] = '';
  cols[88] = '0';
  cols[89] = ''; cols[90] = ''; cols[91] = '';
  cols[92] = '0';
  cols[93] = '0';
  cols[94] = '5';
  cols[95] = '0.0000';
  cols[96] = '0.0000';
  return cols;
}

function convertInvoice(invoice, cardIndex, warnings) {
  const detail = invoice.invoiceDetail || {};
  let rawItems = detail.invoiceItem || [];
  if (!Array.isArray(rawItems)) rawItems = [rawItems];

  const itemRows = [];
  const totals = { high: 0, highVat: 0, low: 0, lowVat: 0, third: 0, thirdVat: 0, none: 0 };
  for (const item of rawItems) {
    const built = buildItemRow(item, cardIndex, warnings);
    itemRows.push(built);
    const home = item.homeCurrency || {};
    const lineNet = toFloat(field(home, 'price')) || built.lineNetTotal;
    const lineVat = toFloat(field(home, 'priceVAT'));
    if (built.rateCode === 'high') { totals.high += lineNet; totals.highVat += lineVat; }
    else if (built.rateCode === 'low') { totals.low += lineNet; totals.lowVat += lineVat; }
    else if (built.rateCode === 'third') { totals.third += lineNet; totals.thirdVat += lineVat; }
    else { totals.none += lineNet; }
  }

  const headerCols = buildHeaderRow(invoice, itemRows, totals);
  const lines = [headerCols.join('\t')];
  for (const r of itemRows) lines.push(r.cols.join('\t'));
  return lines;
}

async function main() {
  console.log(`Nacitavam ${IN_PATH} ...`);
  const invoices = extractInvoices(IN_PATH);
  console.log(`Najdenych faktur: ${invoices.length}`);
  const cardIndex = await loadCardIndex();

  const warnings = [];
  if (cardIndex.apiError) {
    warnings.push(
      `Nepodarilo sa spojit s databazou skladovych kariet (${cardIndex.apiError}). ` +
      `Vsetky polozky nizsie su preto oznacene ako nezname, "Kod polozky" ostane prazdny. ` +
      `Skontroluj internetove pripojenie a skus konverziu znova.`
    );
  }
  const lines = ['R00\tT01'];
  for (const invoice of invoices) {
    lines.push(...convertInvoice(invoice, cardIndex, warnings));
  }

  const outText = lines.join('\r\n') + '\r\n';
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, iconv.encode(outText, 'win1250'));
  console.log(`Hotovo -> ${OUT_PATH} (Windows-1250, ${invoices.length} faktur)`);

  if (warnings.length) {
    console.warn(`\nUpozornenia (${warnings.length}):`);
    for (const w of warnings) console.warn(`  [!] ${w}`);
  }
}

main().catch((err) => {
  console.error(`Chyba: ${err.message}`);
  process.exit(1);
});

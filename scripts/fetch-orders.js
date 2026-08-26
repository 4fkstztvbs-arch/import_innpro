'use strict';

// Sťahuje a parsuje orders.xml export zo Shoptetu (Nastavení -> Objednávky -> Export,
// URL s tokenom v query stringu). Vracia pole objednávok s pomocnými funkciami na
// dohľadanie objednávky podľa čísla alebo emailu zákazníka.
//
// Používa sa aj samostatne (CLI) na rýchlu kontrolu, aj ako modul zo scan-support-emails.js.

const { XMLParser } = require('fast-xml-parser');

const parser = new XMLParser({ ignoreAttributes: true, textNodeName: '#text' });

function field(order, tag) {
  const v = order ? order[tag] : undefined;
  if (v === undefined || v === null) return '';
  if (typeof v === 'object') return String(v['#text'] || '');
  return String(v).trim();
}

async function fetchOrders(url) {
  if (!url) {
    throw new Error('Chýba URL orders.xml exportu (ORDERS_XML_URL).');
  }
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Nepodarilo sa stiahnuť orders.xml: HTTP ${res.status}`);
  }
  const xml = await res.text();
  const doc = parser.parse(xml);
  const raw = doc.ORDERS?.ORDER || [];
  return Array.isArray(raw) ? raw : [raw];
}

// Najnovšia objednávka daného zákazníckeho emailu, prípadne konkrétna objednávka podľa čísla.
function findOrder(orders, { email, orderCode } = {}) {
  if (orderCode) {
    const byCode = orders.find((o) => field(o, 'CODE') === String(orderCode));
    if (byCode) return byCode;
  }
  if (email) {
    const matches = orders
      .filter((o) => field(o.CUSTOMER, 'EMAIL').toLowerCase() === email.toLowerCase())
      .sort((a, b) => new Date(field(b, 'DATE')) - new Date(field(a, 'DATE')));
    if (matches.length) return matches[0];
  }
  return null;
}

function summarizeOrder(order) {
  if (!order) return null;
  return {
    code: field(order, 'CODE'),
    date: field(order, 'DATE'),
    status: field(order, 'STATUS'),
    totalWithVat: field(order.TOTAL_PRICE, 'WITH_VAT'),
    currency: field(order.CURRENCY, 'CODE'),
    packageNumber: field(order, 'PACKAGE_NUMBER'),
  };
}

module.exports = { fetchOrders, findOrder, summarizeOrder, field };

if (require.main === module) {
  (async () => {
    const orders = await fetchOrders(process.env.ORDERS_XML_URL);
    console.log(`Načítaných ${orders.length} objednávok.`);
    const email = process.argv[2];
    if (email) {
      const order = findOrder(orders, { email });
      console.log(`Najnovšia objednávka pre ${email}:`, summarizeOrder(order));
    }
  })().catch((err) => {
    console.error('Chyba:', err.message);
    process.exit(1);
  });
}

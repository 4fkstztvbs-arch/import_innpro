#!/usr/bin/env node
'use strict';

// Read-only krok č. 2: prejde posledných SCAN_LIMIT správ v INBOXe a vypíše, ktoré
// vyzerajú ako zákaznícky dotaz na objednávku (filter + lookup logika je v
// scripts/lib/order-email-filter.js - zdieľaná s draft-order-replies.js, aby sa
// nerozišli dve kópie tej istej logiky).
//
// Nič neposiela, nič neoznačuje ako prečítané - len na overenie filtra.

const { ImapFlow } = require('imapflow');
const { simpleParser } = require('mailparser');
const { fetchOrders } = require('./fetch-orders');
const { scanInboxForOrderQueries } = require('./lib/order-email-filter');

const IMAP_HOST = process.env.SEZNAM_IMAP_HOST || 'imap.seznam.cz';
const IMAP_PORT = Number(process.env.SEZNAM_IMAP_PORT || 993);
const IMAP_USER = process.env.SEZNAM_IMAP_USER;
const IMAP_PASSWORD = process.env.SEZNAM_IMAP_PASSWORD;
const ORDERS_XML_URL = process.env.ORDERS_XML_URL;
const SCAN_LIMIT = Number(process.env.SCAN_LIMIT || 50);

async function main() {
  if (!IMAP_USER || !IMAP_PASSWORD) {
    console.error('Chýba SEZNAM_IMAP_USER / SEZNAM_IMAP_PASSWORD v prostredí.');
    process.exit(1);
  }

  let orders = [];
  try {
    orders = await fetchOrders(ORDERS_XML_URL);
    console.log(`Načítaných ${orders.length} objednávok z orders.xml.`);
  } catch (err) {
    console.warn(`Objednávky sa nepodarilo načítať (${err.message}) - pokračujem bez lookupu.`);
  }

  const client = new ImapFlow({
    host: IMAP_HOST,
    port: IMAP_PORT,
    secure: true,
    auth: { user: IMAP_USER, pass: IMAP_PASSWORD },
    logger: false,
  });

  let candidates = [];
  let scanned = 0;
  try {
    await client.connect();
    const lock = await client.getMailboxLock('INBOX');
    try {
      const result = await scanInboxForOrderQueries(client, orders, {
        limit: SCAN_LIMIT,
        simpleParser,
        onSkip: (seq, err) => console.warn(`   (správa #${seq} sa nedala spracovať: ${err.message} - preskakujem)`),
      });
      candidates = result.candidates;
      scanned = result.scanned;
    } finally {
      lock.release();
    }
  } finally {
    // Odhlásiť sa aj keď sken vyššie zlyhal, aby sa nenechávalo visieť pripojenie.
    await client.logout().catch(() => {});
  }

  console.log(`Prezretých ${scanned} správ, nájdených ${candidates.length} pravdepodobných zákazníckych dotazov:\n`);
  for (const c of candidates) {
    console.log(`#${c.seq} | ${c.date ? c.date.toISOString() : '?'} | ${c.from} | "${c.subject}"`);
    if (c.matchedBy === 'code' || c.matchedBy === 'email') {
      const o = c.matchedOrder;
      console.log(`   -> objednávka ${o.code} | stav: ${o.status} | ${o.totalWithVat} ${o.currency} | ${o.date}`);
    } else if (c.matchedBy === 'email-fallback') {
      const o = c.matchedOrder;
      console.log(
        `   -> POZOR: objednávka ${c.orderNumber} spomenutá v maile sa v exporte nenašla (možno stornovaná/mimo exportu). ` +
          `Najnovšia objednávka tohto zákazníka je ${o.code} (stav: ${o.status}) - NEMUSÍ to byť tá, na ktorú sa pýta.`
      );
    } else {
      console.log(`   -> objednávka sa nenašla (rozpoznané číslo: ${c.orderNumber || 'žiadne'})`);
    }
  }
}

main().catch((err) => {
  // ImapFlow vie vyhodiť len strohé "Command failed" - vypísať všetko dostupné
  // (kód, IMAP response, stack), nech sa dá pri ďalšom zlyhaní rovno diagnostikovať.
  console.error('Chyba pri skenovaní schránky:', err.message);
  if (err.code) console.error('  kód:', err.code);
  if (err.response) console.error('  IMAP odpoveď:', err.response);
  if (err.responseText) console.error('  IMAP text:', err.responseText);
  if (err.stack) console.error(err.stack);
  process.exit(1);
});

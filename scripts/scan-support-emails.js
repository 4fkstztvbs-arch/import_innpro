#!/usr/bin/env node
'use strict';

// Read-only krok č. 2: prejde posledných SCAN_LIMIT správ v INBOXe, odfiltruje
// automatické systémové maily (Shoptet, dodávatelia, kuriéri) a z ostatných vyberie
// tie, čo vyzerajú ako zákaznícky dotaz na objednávku - buď odpoveď na mail o
// objednávke, alebo obsahujú kľúčové slová typu "stav objednávky". Ku každému
// takému dotazu skúsi dohľadať objednávku v orders.xml podľa emailu/čísla objednávky.
//
// Zatiaľ nič neposiela, nič neoznačuje ako prečítané - len vypisuje nálezy na overenie
// filtra pred tým, ako sa na to naviaže generovanie odpovedí.

const { ImapFlow } = require('imapflow');
const { simpleParser } = require('mailparser');
const { fetchOrders, findOrder, summarizeOrder } = require('./fetch-orders');

const IMAP_HOST = process.env.SEZNAM_IMAP_HOST || 'imap.seznam.cz';
const IMAP_PORT = Number(process.env.SEZNAM_IMAP_PORT || 993);
const IMAP_USER = process.env.SEZNAM_IMAP_USER;
const IMAP_PASSWORD = process.env.SEZNAM_IMAP_PASSWORD;
const ORDERS_XML_URL = process.env.ORDERS_XML_URL;
const SCAN_LIMIT = Number(process.env.SCAN_LIMIT || 50);

// Odosielatelia, ktorí posielajú automatické systémové maily, nie zákaznícke otázky.
// Dopĺňať podľa toho, čo sa v praxi objaví ako falošný zásah.
const SYSTEM_SENDER_PATTERNS = [
  /@shoptet\.sk$/i,
  /@innpro\.(sk|pl)$/i,
  /@slposta\.sk$/i,
  /@basys\.cz$/i, // dodávateľ BASYS - komunikácia o vlastných objednávkach u nich, nie zákaznícka podpora
  /@k-b\.sk$/i, // dodávateľ K+B - to isté
  /^premiumstore@premiumstore\.sk$/i, // vlastná adresa - kópie/forwardy sebe
  // TODO: doplniť domény zvyšných dodávateľov (ATOS, MONACOR, Solight, Penta, WiiM),
  // len čo sa potvrdia - viď poznámka v zhrnutí pre používateľa.
];

// "Re:" na pôvodný mail o objednávke (predmet obsahuje "objednávk...")
const ORDER_SUBJECT_RE = /objedn[áa]vk/i;
// Priame dotazy aj bez odpovede na konkrétny mail
const ORDER_KEYWORD_RE =
  /\b(stav objedn[áa]vky|kde je (moja )?objedn[áa]vka|sledovanie z[áa]sielky|reklam[áa]cia|vr[áa]tenie tovaru|storno|nedostal|nepri[šs]lo|meškanie|dorucen)\b/i;
// Číslo objednávky vo formáte použitom v orders.xml (napr. 202600658)
const ORDER_NUMBER_RE = /\b(20\d{6})\b/;

function isSystemSender(addr) {
  if (!addr) return false;
  return SYSTEM_SENDER_PATTERNS.some((re) => re.test(addr));
}

function looksLikeCustomerQuery(subject, bodyText) {
  const isReply = /^re:/i.test((subject || '').trim());
  const subjectMentionsOrder = ORDER_SUBJECT_RE.test(subject || '');
  const keywordHit = ORDER_KEYWORD_RE.test(subject || '') || ORDER_KEYWORD_RE.test(bodyText || '');
  return (isReply && subjectMentionsOrder) || keywordHit;
}

function extractOrderNumber(subject, bodyText) {
  const fromSubject = subject && subject.match(ORDER_NUMBER_RE);
  if (fromSubject) return fromSubject[1];
  const fromBody = bodyText && bodyText.match(ORDER_NUMBER_RE);
  return fromBody ? fromBody[1] : null;
}

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

  const candidates = [];
  let scanned = 0;
  let skippedOnError = 0;
  try {
    await client.connect();
    const lock = await client.getMailboxLock('INBOX');
    try {
      const status = await client.status('INBOX', { messages: true });
      const from = Math.max(1, status.messages - SCAN_LIMIT + 1);

      for await (const msg of client.fetch(`${from}:*`, { source: true })) {
        scanned += 1;
        try {
          const parsed = await simpleParser(msg.source);
          const fromAddr = parsed.from?.value?.[0]?.address || '';
          if (isSystemSender(fromAddr)) continue;

          const subject = parsed.subject || '';
          const bodyText = parsed.text || '';
          if (!looksLikeCustomerQuery(subject, bodyText)) continue;

          const orderNumber = extractOrderNumber(subject, bodyText);
          const { order, matchedBy } = findOrder(orders, { email: fromAddr, orderCode: orderNumber });

          candidates.push({
            seq: msg.seq,
            date: parsed.date,
            from: fromAddr,
            subject,
            orderNumber,
            matchedOrder: summarizeOrder(order),
            matchedBy,
          });
        } catch (perMessageErr) {
          // Jedna poškodená/nezvyčajná správa nesmie zhodiť celý sken - preskočiť a ísť ďalej.
          skippedOnError += 1;
          console.warn(`   (správa #${msg.seq} sa nedala spracovať: ${perMessageErr.message} - preskakujem)`);
        }
      }
    } finally {
      lock.release();
    }
  } finally {
    // Odhlásiť sa aj keď sken vyššie zlyhal, aby sa nenechávalo visieť pripojenie.
    await client.logout().catch(() => {});
  }

  if (skippedOnError > 0) {
    console.warn(`Preskočených ${skippedOnError} správ pre chybu pri spracovaní.`);
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

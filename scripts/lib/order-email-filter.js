'use strict';

// Zdieľaná filter/lookup logika medzi scan-support-emails.js (read-only report) a
// draft-order-replies.js (generovanie návrhov). Držať na jednom mieste - rozdelenie
// do dvoch kópií už raz spôsobilo, že sa oprava regexu na číslo objednávky prejavila
// len v jednej z nich.

const { findOrder, summarizeOrder } = require('../fetch-orders');

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
  // len čo sa potvrdia.
];

// "Re:" na pôvodný mail o objednávke (predmet obsahuje "objednávk...")
const ORDER_SUBJECT_RE = /objedn[áa]vk/i;
// Priame dotazy aj bez odpovede na konkrétny mail
const ORDER_KEYWORD_RE =
  /\b(stav objedn[áa]vky|kde je (moja )?objedn[áa]vka|sledovanie z[áa]sielky|reklam[áa]cia|vr[áa]tenie tovaru|storno|nedostal|nepri[šs]lo|meškanie|dorucen)\b/i;
// Číslo objednávky vo formáte použitom v orders.xml - 9 číslic, "20" + rok + 5-miestne
// poradové číslo (napr. 202600658).
const ORDER_NUMBER_RE = /\b(20\d{7})\b/;

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

// Prejde otvorenú IMAP schránku (mailbox lock musí mať volajúci) a vráti kandidátov -
// maily, ktoré vyzerajú ako zákaznícky dotaz na objednávku, spolu s dohľadanou
// objednávkou. onSkip(seq, err) je voliteľný callback pre logovanie nespracovateľných
// správ (jedna zlá správa nesmie zhodiť celý beh).
async function scanInboxForOrderQueries(client, orders, { limit = 50, simpleParser, onSkip } = {}) {
  const status = await client.status('INBOX', { messages: true });
  const from = Math.max(1, status.messages - limit + 1);

  const candidates = [];
  let scanned = 0;

  for await (const msg of client.fetch(`${from}:*`, { source: true, uid: true })) {
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
        uid: msg.uid,
        date: parsed.date,
        from: fromAddr,
        subject,
        bodyText,
        messageId: parsed.messageId || null,
        references: parsed.references || null,
        orderNumber,
        matchedOrder: summarizeOrder(order),
        rawOrder: order,
        matchedBy,
      });
    } catch (err) {
      if (onSkip) onSkip(msg.seq, err);
    }
  }

  return { candidates, scanned };
}

module.exports = {
  SYSTEM_SENDER_PATTERNS,
  isSystemSender,
  looksLikeCustomerQuery,
  extractOrderNumber,
  ORDER_NUMBER_RE,
  scanInboxForOrderQueries,
};

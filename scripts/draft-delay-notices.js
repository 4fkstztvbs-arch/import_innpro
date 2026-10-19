#!/usr/bin/env node
'use strict';

// Upokojujúci email o "drobnom zdržaní" pre zákazníkov s otvorenou objednávkou staršou
// ako MIN_AGE_DAYS. Email sa ULOŽÍ LEN DO PRIEČINKA DRAFTS (obchod@premiumstore.sk) -
// nikdy sa neodosiela automaticky, kolega ho pred odoslaním skontroluje.
//
// Pravidlá výberu (dohodnuté s majiteľom):
//  - stav objednávky: "Objednané ...", "Vybavuje sa", "Nevybavená" (všetko ostatné sa preskočí)
//  - vek aspoň MIN_AGE_DAYS (3) a najviac MAX_AGE_DAYS (10); staršie sa len vypíšu na ručné riešenie
//  - preskočí sa osobný odber a objednávky s hodnotou 0 EUR
//  - jeden email na objednávku: ak už v Drafts alebo Sent existuje správa s predmetom
//    obsahujúcim číslo objednávky, preskočí sa (žiadny stavový súbor v repozitári)
//
// Logy v GitHub Actions sú pri verejnom repozitári verejné, preto sa nikdy nelogujú
// emaily ani mená zákazníkov - len čísla objednávok a počty.
//
// DRY_RUN=1 nepripája IMAP a len vypíše, čo by sa vytvorilo.

const { ImapFlow } = require('imapflow');
const MailComposer = require('nodemailer/lib/mail-composer');
const { fetchOrders, field } = require('./fetch-orders');

const IMAP_HOST = process.env.SEZNAM_IMAP_HOST || 'imap.seznam.cz';
const IMAP_PORT = Number(process.env.SEZNAM_IMAP_PORT || 993);
const IMAP_USER = process.env.SEZNAM_IMAP_USER;
const IMAP_PASSWORD = process.env.SEZNAM_IMAP_PASSWORD;
const ORDERS_XML_URL = process.env.ORDERS_XML_URL;
const FROM_NAME = process.env.REPLY_FROM_NAME || 'PremiumStore.sk';
const MIN_AGE_DAYS = Number(process.env.MIN_AGE_DAYS || 3);
const MAX_AGE_DAYS = Number(process.env.MAX_AGE_DAYS || 10);
const DELIVERY_WORKING_DAYS = Number(process.env.DELIVERY_WORKING_DAYS || 3);
const MAX_DRAFTS_PER_RUN = Number(process.env.MAX_DRAFTS_PER_RUN || 100);
const DRY_RUN = process.env.DRY_RUN === '1';
const PHONE = process.env.CONTACT_PHONE || '+421 48 4151999';
const HOURS = process.env.CONTACT_HOURS || 'Po–Pi 9:00–17:00';

const OPEN_STATUS = /^(Objednané|Vybavuje sa$|Nevybavená$)/;
// Pevné slovenské sviatky (MM-DD). Veľkonočný piatok/pondelok sa dopĺňa ručne cez EXTRA_HOLIDAYS.
const FIXED_HOLIDAYS = ['01-01', '01-06', '05-01', '05-08', '07-05', '08-29', '09-01', '09-15', '11-01', '11-17', '12-24', '12-25', '12-26'];
const EXTRA_HOLIDAYS = (process.env.EXTRA_HOLIDAYS || '').split(',').map((s) => s.trim()).filter(Boolean); // YYYY-MM-DD

function pad(n) { return String(n).padStart(2, '0'); }
function ymd(d) { return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; }
function isHoliday(d) {
  return FIXED_HOLIDAYS.includes(`${pad(d.getMonth() + 1)}-${pad(d.getDate())}`) || EXTRA_HOLIDAYS.includes(ymd(d));
}
function addWorkingDays(from, n) {
  const d = new Date(from);
  let left = n;
  while (left > 0) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0 && d.getDay() !== 6 && !isHoliday(d)) left -= 1;
  }
  return d;
}
function formatDate(d) { return `${d.getDate()}. ${d.getMonth() + 1}. ${d.getFullYear()}`; }

function asArray(v) { return v === undefined || v === null ? [] : Array.isArray(v) ? v : [v]; }

function shippingName(order) {
  const items = asArray(order.ORDER_ITEMS?.ITEM);
  const ship = items.find((it) => it.TYPE === 'shipping');
  return ship ? String(ship.NAME || '') : '';
}

function ageInDays(order, now) {
  const raw = field(order, 'DATE'); // "2026-10-19 09:37:34", čas v časovej zóne obchodu
  const t = new Date(raw.replace(' ', 'T'));
  return Number.isNaN(t.getTime()) ? NaN : Math.floor((now - t) / 864e5);
}

function selectOrders(orders, now) {
  const picked = [];
  const tooOld = [];
  const unknownStatuses = new Set();
  for (const o of orders) {
    const status = field(o, 'STATUS');
    if (!OPEN_STATUS.test(status)) {
      if (!/^(Stornovaná|Vybavená|Čaká na platbu|Výzva na opätovné zaplatenie|Pripravené na osobný odber)$/.test(status)) unknownStatuses.add(status);
      continue;
    }
    const age = ageInDays(o, now);
    if (!(age >= MIN_AGE_DAYS)) continue;
    if (/osobn/i.test(shippingName(o))) continue;
    if (!(parseFloat(field(o.TOTAL_PRICE, 'WITH_VAT')) > 0)) continue;
    const email = field(o.CUSTOMER, 'EMAIL');
    const code = field(o, 'CODE');
    if (!email || !code) continue;
    if (age > MAX_AGE_DAYS) { tooOld.push({ code, status, age }); continue; }
    picked.push({ code, email, status, age });
  }
  return { picked, tooOld, unknownStatuses: [...unknownStatuses] };
}

function buildSubject(code) {
  return `Vaša objednávka č. ${code} – všetko prebieha podľa plánu`;
}

function buildBody(code, deliveryDate) {
  return [
    'Dobrý deň,',
    '',
    `ďakujeme Vám za objednávku č. ${code} a za trpezlivosť.`,
    '',
    'Chceme Vás ubezpečiť, že je všetko v poriadku a Vaša objednávka je u nás v spracovaní. Vzhľadom na zvýšený počet objednávok trvá príprava Vašej zásielky o niečo dlhšie, ako by sme si obaja priali.',
    '',
    `Predpokladaný termín doručenia: do ${formatDate(deliveryDate)}`,
    '',
    'Hneď ako zásielku odovzdáme prepravcovi, pošleme Vám e-mail s číslom na sledovanie balíka. Z Vašej strany už nie je potrebné nič robiť.',
    '',
    `Ak by ste mali akúkoľvek otázku, stačí odpovedať na tento e-mail alebo nám zavolať na ${PHONE} (${HOURS}). Radi Vám pomôžeme.`,
    '',
    'S pozdravom',
    'tím PremiumStore.sk',
    '',
  ].join('\n');
}

function compose(to, subject, text) {
  const mail = new MailComposer({ from: `${FROM_NAME} <${IMAP_USER}>`, to, subject, text });
  return new Promise((resolve, reject) => mail.compile().build((err, msg) => (err ? reject(err) : resolve(msg))));
}

async function findMailbox(client, specialUse, nameRe) {
  const list = await client.list();
  const box = list.find((b) => b.specialUse === specialUse) || list.find((b) => nameRe.test(b.name));
  if (!box) throw new Error(`Priečinok ${specialUse} sa nenašiel.`);
  return box.path;
}

async function hasMailWithCode(client, mailboxPath, code) {
  const lock = await client.getMailboxLock(mailboxPath);
  try {
    const hits = await client.search({ subject: code });
    return Array.isArray(hits) && hits.length > 0;
  } finally {
    lock.release();
  }
}

async function main() {
  const now = new Date();
  const orders = await fetchOrders(ORDERS_XML_URL);
  console.log(`Načítaných ${orders.length} objednávok.`);
  const { picked, tooOld, unknownStatuses } = selectOrders(orders, now);
  const deliveryDate = addWorkingDays(now, DELIVERY_WORKING_DAYS);
  console.log(`Vyhovuje pravidlám: ${picked.length} objednávok (vek ${MIN_AGE_DAYS}-${MAX_AGE_DAYS} dní), predpokladané doručenie do ${formatDate(deliveryDate)}.`);
  if (tooOld.length) console.log(`Staršie ako ${MAX_AGE_DAYS} dní (vyriešiť ručne, email sa nevytvára): ${tooOld.map((t) => `${t.code} [${t.status}, ${t.age} d]`).join(', ')}`);
  if (unknownStatuses.length) console.log(`Neznáme stavy (preskočené): ${unknownStatuses.join(', ')}`);

  if (DRY_RUN) {
    console.log(`DRY_RUN: vytvorili by sa koncepty pre: ${picked.map((p) => p.code).join(', ') || '(žiadne)'}`);
    console.log('--- ukážka ---\nPredmet: ' + buildSubject(picked[0]?.code || '2026XXXXXX') + '\n\n' + buildBody(picked[0]?.code || '2026XXXXXX', deliveryDate));
    return;
  }
  if (!IMAP_USER || !IMAP_PASSWORD) throw new Error('Chýba SEZNAM_IMAP_USER / SEZNAM_IMAP_PASSWORD.');

  const client = new ImapFlow({ host: IMAP_HOST, port: IMAP_PORT, secure: true, auth: { user: IMAP_USER, pass: IMAP_PASSWORD }, logger: false });
  let created = 0;
  let already = 0;
  try {
    await client.connect();
    const drafts = await findMailbox(client, '\\Drafts', /^drafts$/i);
    const sent = await findMailbox(client, '\\Sent', /^(sent|odeslan)/i);
    for (const p of picked) {
      if (created >= MAX_DRAFTS_PER_RUN) { console.log(`Dosiahnutý limit ${MAX_DRAFTS_PER_RUN} konceptov na jeden beh.`); break; }
      if ((await hasMailWithCode(client, drafts, p.code)) || (await hasMailWithCode(client, sent, p.code))) { already += 1; continue; }
      const mime = await compose(p.email, buildSubject(p.code), buildBody(p.code, deliveryDate));
      await client.append(drafts, mime, ['\\Draft']);
      created += 1;
      console.log(`Koncept uložený: objednávka ${p.code}`);
    }
  } finally {
    await client.logout().catch(() => {});
  }
  console.log(`Hotovo: ${created} nových konceptov, ${already} už existovalo (Drafts/Sent).`);
}

module.exports = { selectOrders, addWorkingDays, buildBody, buildSubject };

if (require.main === module) {
  main().catch((err) => { console.error('Chyba:', err.message); process.exit(1); });
}

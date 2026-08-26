#!/usr/bin/env node
'use strict';

// Jednorazový nástroj: zmaže drafty v priečinku Drafts adresované na zadané emailové
// adresy (DELETE_RECIPIENTS, čiarkou oddelené). Používa sa na vyčistenie starých
// draftov pred tým, ako ich draft-order-replies.js vygeneruje nanovo (napr. po oprave
// promptu, keď boli staré drafty vecne nesprávne).

const { ImapFlow } = require('imapflow');
const { simpleParser } = require('mailparser');

const IMAP_HOST = process.env.SEZNAM_IMAP_HOST || 'imap.seznam.cz';
const IMAP_PORT = Number(process.env.SEZNAM_IMAP_PORT || 993);
const IMAP_USER = process.env.SEZNAM_IMAP_USER;
const IMAP_PASSWORD = process.env.SEZNAM_IMAP_PASSWORD;
const RECIPIENTS = (process.env.DELETE_RECIPIENTS || '')
  .split(',')
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

async function findDraftsMailbox(client) {
  const list = await client.list();
  const bySpecialUse = list.find((box) => box.specialUse === '\\Drafts');
  if (bySpecialUse) return bySpecialUse.path;
  const byName = list.find((box) => /^drafts$/i.test(box.name));
  if (byName) return byName.path;
  throw new Error('Priečinok Drafts sa nenašiel.');
}

async function main() {
  if (!IMAP_USER || !IMAP_PASSWORD) {
    console.error('Chýba SEZNAM_IMAP_USER / SEZNAM_IMAP_PASSWORD.');
    process.exit(1);
  }
  if (!RECIPIENTS.length) {
    console.error('Chýba DELETE_RECIPIENTS (čiarkou oddelený zoznam emailov).');
    process.exit(1);
  }

  const client = new ImapFlow({
    host: IMAP_HOST,
    port: IMAP_PORT,
    secure: true,
    auth: { user: IMAP_USER, pass: IMAP_PASSWORD },
    logger: false,
  });

  await client.connect();
  const draftsPath = await findDraftsMailbox(client);
  const lock = await client.getMailboxLock(draftsPath);
  let deleted = 0;
  try {
    const status = await client.status(draftsPath, { messages: true });

    // Najprv len POZBIERAŤ zhody - vydávať ďalší IMAP príkaz (messageDelete) uprostred
    // prebiehajúceho FETCH streamu rozbije protokol ("Command failed" bez detailu).
    const toDelete = [];
    for await (const msg of client.fetch(`1:${status.messages}`, { source: true, uid: true })) {
      const parsed = await simpleParser(msg.source);
      const toAddr = (parsed.to?.value?.[0]?.address || '').toLowerCase();
      if (RECIPIENTS.includes(toAddr)) {
        toDelete.push({ uid: msg.uid, toAddr, subject: parsed.subject });
      }
    }

    if (toDelete.length) {
      await client.messageDelete(toDelete.map((m) => m.uid).join(','), { uid: true });
      for (const m of toDelete) {
        deleted += 1;
        console.log(`Zmazané: ${m.toAddr} | "${m.subject}"`);
      }
    }
  } finally {
    lock.release();
  }
  await client.logout();
  console.log(`\nHotovo: zmazaných ${deleted} draftov.`);
}

main().catch((err) => {
  console.error('Chyba:', err.message);
  process.exit(1);
});

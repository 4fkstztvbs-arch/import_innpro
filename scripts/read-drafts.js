#!/usr/bin/env node
'use strict';

// Diagnostický/kontrolný skript: vypíše obsah posledných N správ v priečinku Drafts,
// aby sa dala skontrolovať kvalita návrhov vygenerovaných draft-order-replies.js.
// Read-only.

const { ImapFlow } = require('imapflow');
const { simpleParser } = require('mailparser');

const IMAP_HOST = process.env.SEZNAM_IMAP_HOST || 'imap.seznam.cz';
const IMAP_PORT = Number(process.env.SEZNAM_IMAP_PORT || 993);
const IMAP_USER = process.env.SEZNAM_IMAP_USER;
const IMAP_PASSWORD = process.env.SEZNAM_IMAP_PASSWORD;
const LIMIT = Number(process.env.READ_DRAFTS_LIMIT || 10);

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
  try {
    const status = await client.status(draftsPath, { messages: true });
    const from = Math.max(1, status.messages - LIMIT + 1);
    for await (const msg of client.fetch(`${from}:*`, { source: true })) {
      const parsed = await simpleParser(msg.source);
      console.log('='.repeat(70));
      console.log(`Komu: ${parsed.to?.text || '?'}`);
      console.log(`Predmet: ${parsed.subject || '?'}`);
      console.log(`In-Reply-To: ${parsed.inReplyTo || '-'}`);
      console.log('---');
      console.log(parsed.text || '(bez textu)');
    }
  } finally {
    lock.release();
  }
  await client.logout();
}

main().catch((err) => {
  console.error('Chyba:', err.message);
  process.exit(1);
});

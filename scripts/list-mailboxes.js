#!/usr/bin/env node
'use strict';

// Jednorazový diagnostický skript: vypíše zoznam priečinkov v schránke a ich
// special-use flagy (\Drafts, \Sent, ...), aby sme vedeli presný názov priečinka
// Drafts pre append. Read-only, nič nemení.

const { ImapFlow } = require('imapflow');

const IMAP_HOST = process.env.SEZNAM_IMAP_HOST || 'imap.seznam.cz';
const IMAP_PORT = Number(process.env.SEZNAM_IMAP_PORT || 993);
const IMAP_USER = process.env.SEZNAM_IMAP_USER;
const IMAP_PASSWORD = process.env.SEZNAM_IMAP_PASSWORD;

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
  const list = await client.list();
  for (const box of list) {
    console.log(`${box.path} | special-use: ${box.specialUse || '-'} | name: ${box.name}`);
  }
  await client.logout();
}

main().catch((err) => {
  console.error('Chyba:', err.message);
  process.exit(1);
});

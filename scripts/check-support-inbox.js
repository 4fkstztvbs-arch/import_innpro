#!/usr/bin/env node
'use strict';

// Read-only test: pripojí sa na zákaznícku schránku cez IMAP a vypíše posledných
// N správ (odosielateľ, predmet, dátum). Nič nemení, nič neposiela - slúži na
// overenie prístupových údajov a IMAP nastavení pred tým, ako sa na tom postaví
// čokoľvek automatizované.

const { ImapFlow } = require('imapflow');
const { simpleParser } = require('mailparser');

const HOST = process.env.SEZNAM_IMAP_HOST || 'imap.seznam.cz';
const PORT = Number(process.env.SEZNAM_IMAP_PORT || 993);
const USER = process.env.SEZNAM_IMAP_USER;
const PASS = process.env.SEZNAM_IMAP_PASSWORD;
const LIMIT = Number(process.env.INBOX_CHECK_LIMIT || 10);

if (!USER || !PASS) {
  console.error('Chýba SEZNAM_IMAP_USER / SEZNAM_IMAP_PASSWORD v prostredí.');
  process.exit(1);
}

async function main() {
  const client = new ImapFlow({
    host: HOST,
    port: PORT,
    secure: true,
    auth: { user: USER, pass: PASS },
    logger: false,
  });

  await client.connect();
  console.log(`Pripojené na ${HOST} ako ${USER}`);

  const lock = await client.getMailboxLock('INBOX');
  try {
    const status = await client.status('INBOX', { messages: true, unseen: true });
    console.log(`INBOX: ${status.messages} správ celkovo, ${status.unseen} neprečítaných`);

    if (status.messages === 0) {
      return;
    }

    const from = Math.max(1, status.messages - LIMIT + 1);
    for await (const msg of client.fetch(`${from}:*`, { source: true })) {
      const parsed = await simpleParser(msg.source);
      const fromAddr = parsed.from?.text || '(neznámy odosielateľ)';
      const subject = parsed.subject || '(bez predmetu)';
      const date = parsed.date ? parsed.date.toISOString() : '(bez dátumu)';
      console.log(`#${msg.seq} | ${date} | ${fromAddr} | ${subject}`);
    }
  } finally {
    lock.release();
  }

  await client.logout();
}

main().catch((err) => {
  console.error('Chyba pri čítaní schránky:', err.message);
  process.exit(1);
});

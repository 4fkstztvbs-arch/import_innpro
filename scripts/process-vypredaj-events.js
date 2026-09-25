#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { ImapFlow } = require('imapflow');
const { simpleParser } = require('mailparser');
const he = require('he');
const { fetchOrders } = require('./fetch-orders');
const { streamProducts } = require('./stream-products');
const { parseProduct } = require('./parse-product');
const { streamRecords } = require('./stream-records');
const { parseRecord, field } = require('./parse-kb');
const { parsePentaItem } = require('./parse-penta');
const { parseAtosItem } = require('./parse-atos');
const { parseSolightProduct } = require('./parse-solight');
const { parseMonacorProduct } = require('./parse-monacor');
const {
  createEmptyState, validateState, parseCommandBody, hasUniqueProduct, addItems, applyOrders,
} = require('./lib/vypredaj-core');

const ADDRESS = 'obchod@premiumstore.sk';
const STATE_PATH = path.join(__dirname, '..', 'data', 'vypredaj.json');
const FEED_DIR = path.join(__dirname, '..', 'output');
const MAX_ORDERS_LOOKBACK_DAYS = 90;

function mailAddresses(parsed, field) {
  return (parsed[field]?.value || []).map((entry) => String(entry.address || '').toLowerCase());
}

function readState() {
  if (!fs.existsSync(STATE_PATH)) return createEmptyState();
  return validateState(JSON.parse(fs.readFileSync(STATE_PATH, 'utf8')));
}

function stableMessageKey(message, uidValidity) {
  return message.parsed.messageId
    ? `message-id:${message.parsed.messageId.trim().toLowerCase()}`
    : `imap:${uidValidity}:${message.uid}`;
}

async function findSupplierProductCodes(codes) {
  const sources = [
    process.env.INNPRO_FULL_URL, process.env.KB_ZBOZI_URL, process.env.BASYS_URL,
    process.env.PENTA_URL, process.env.ATOS_URL, process.env.SOLIGHT_URL, process.env.MONACOR_URL,
  ].filter(Boolean);
  if (!sources.length) throw new Error('Chýbajú dodávateľské vstupné URL na overenie chýbajúcich kódov.');
  const found = new Map([...codes].map((code) => [code, 0]));
  if (process.env.INNPRO_FULL_URL) {
    await streamProducts(process.env.INNPRO_FULL_URL, (rawXml) => {
      let product;
      try { product = parseProduct(rawXml); } catch { return; }
      const code = String(product?.codeOnCard || product?.id || '');
      if (found.has(code)) found.set(code, found.get(code) + 1);
    });
  }
  if (process.env.KB_ZBOZI_URL) {
    await streamRecords(process.env.KB_ZBOZI_URL, 'zaznam', (rawXml) => {
      let record;
      try { record = parseRecord(rawXml); } catch { return; }
      const code = String(field(record, 'sKodZbozi') || field(record, 'sIdZbozi') || '');
      if (found.has(code)) found.set(code, found.get(code) + 1);
    });
  }
  if (process.env.BASYS_URL) {
    await streamRecords(process.env.BASYS_URL, 'SHOPITEM', (rawXml) => {
      const match = rawXml.match(/<CODE\b[^>]*>([\s\S]*?)<\/CODE>/i);
      if (!match) return;
      const supplierCode = he.decode(match[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')).trim();
      const code = `BASYS-${supplierCode}`;
      if (found.has(code)) found.set(code, found.get(code) + 1);
    });
  }
  if (process.env.PENTA_URL) {
    const auth = process.env.PENTA_USERNAME && process.env.PENTA_PASSWORD
      ? { username: process.env.PENTA_USERNAME, password: process.env.PENTA_PASSWORD } : undefined;
    await streamRecords(process.env.PENTA_URL, 'SHOPITEM', (rawXml) => {
      let product; try { product = parsePentaItem(rawXml); } catch { return; }
      const code = String(product?.code || '');
      if (found.has(code)) found.set(code, found.get(code) + 1);
    }, auth);
  }
  if (process.env.ATOS_URL) {
    const auth = process.env.ATOS_USERNAME && process.env.ATOS_PASSWORD
      ? { username: process.env.ATOS_USERNAME, password: process.env.ATOS_PASSWORD } : undefined;
    await streamRecords(process.env.ATOS_URL, 'SHOPITEM', (rawXml) => {
      let product; try { product = parseAtosItem(rawXml); } catch { return; }
      const code = String(product?.code || '');
      if (found.has(code)) found.set(code, found.get(code) + 1);
    }, auth);
  }
  if (process.env.SOLIGHT_URL) {
    await streamRecords(process.env.SOLIGHT_URL, 'product', (rawXml) => {
      let product; try { product = parseSolightProduct(rawXml); } catch { return; }
      const code = String(product?.code || '');
      if (found.has(code)) found.set(code, found.get(code) + 1);
    });
  }
  if (process.env.MONACOR_URL) {
    await streamRecords(process.env.MONACOR_URL, 'product', (rawXml) => {
      let product; try { product = parseMonacorProduct(rawXml); } catch { return; }
      const code = String(product?.number || product?.id || '');
      if (found.has(code)) found.set(code, found.get(code) + 1);
    });
  }
  return found;
}

async function main() {
  const user = process.env.SEZNAM_IMAP_USER;
  const password = process.env.SEZNAM_IMAP_PASSWORD;
  if (!user || !password || user.toLowerCase() !== ADDRESS) {
    throw new Error(`IMAP účet musí byť ${ADDRESS} a jeho heslo musí byť nastavené ako GitHub Secret.`);
  }
  if (!process.env.ORDERS_XML_URL) throw new Error('Chýba GitHub Secret ORDERS_XML_URL.');
  const feedPaths = fs.readdirSync(FEED_DIR).filter((name) => name.endsWith('.xml'))
    .map((name) => path.join(FEED_DIR, name));
  if (!feedPaths.length) throw new Error('Chýbajú aktuálne dodávateľské XML výstupy v output/.');
  const feeds = feedPaths.map((file) => fs.readFileSync(file, 'utf8'));
  const state = readState();
  const orders = await fetchOrders(process.env.ORDERS_XML_URL);
  const oldestTrackedActivation = Object.values(state.items)
    .filter((item) => item.quantity > 0)
    .reduce((oldest, item) => Math.min(oldest, Date.parse(item.activatedAt)), Date.now());
  const exportStart = Date.now() - MAX_ORDERS_LOOKBACK_DAYS * 24 * 60 * 60 * 1000;
  if (oldestTrackedActivation < exportStart) {
    throw new Error(`Aktívna výpredajová položka je staršia ako ${MAX_ORDERS_LOOKBACK_DAYS} dní; export objednávok nemusí pokrývať celý čas aktivity. Feed sa nemení.`);
  }
  const client = new ImapFlow({
    host: process.env.SEZNAM_IMAP_HOST || 'imap.seznam.cz',
    port: Number(process.env.SEZNAM_IMAP_PORT || 993),
    secure: true,
    auth: { user, pass: password },
    logger: false,
  });

  let nextState = state;
  let mailChanges = 0;
  const orderChanges = [];
  try {
    await client.connect();
    const lock = await client.getMailboxLock('INBOX');
    try {
      const uidValidity = String(client.mailbox.uidValidity);
      let lastUid = Number(state.mail.lastUid || 0);
      let initialSetup = false;
      if (state.mail.uidValidity && String(state.mail.uidValidity) !== uidValidity) {
        // UIDs may be reassigned after a mailbox rebuild. Re-scan today's messages from the
        // activation date instead of searching the whole Inbox.
        lastUid = 0;
        initialSetup = true;
        console.warn('IMAP UIDVALIDITY sa zmenil; znovu kontrolujem správy od aktivácie agenta.');
      } else if (!state.mail.uidValidity) {
        // On the first run, restrict IMAP to the activation date; internalDate below keeps the
        // exact activation-time boundary. This avoids fetching the entire mailbox history.
        lastUid = 0;
        initialSetup = true;
        console.log('Prvý beh: kontrolujem iba správy od dátumu aktivácie agenta.');
      }
      const searchCriteria = { uid: `${lastUid + 1}:*` };
      if (initialSetup) searchCriteria.since = new Date(state.mail.activationAfter);
      const uids = await client.search(searchCriteria, { uid: true });
      const messages = [];
      if (uids.length) {
        for await (const message of client.fetch(uids, { uid: true, source: true, internalDate: true }, { uid: true })) {
          try {
            messages.push({
              uid: message.uid,
              internalDate: message.internalDate,
              parsed: await simpleParser(message.source),
            });
          } catch (err) {
            console.warn(`Správa UID ${message.uid} sa nedá prečítať; stav výpredaja nemením: ${err.message}`);
            throw new Error(`Nespracovateľná správa UID ${message.uid}; feed sa nesmie obnoviť.`);
          }
        }
      }
      messages.sort((a, b) => a.uid - b.uid);

      const seen = new Set(state.mail.processedMessageKeys || []);
      for (const message of messages) {
        lastUid = Math.max(lastUid, message.uid);
        const parsed = message.parsed;
        const from = mailAddresses(parsed, 'from');
        const to = [...mailAddresses(parsed, 'to'), ...mailAddresses(parsed, 'cc')];
        const key = stableMessageKey(message, uidValidity);
        if (seen.has(key)) continue;
        const subject = (parsed.subject || '').normalize('NFC').trim().toLocaleUpperCase('sk-SK');
        if (!from.includes(ADDRESS) || !to.includes(ADDRESS) || subject !== 'VÝPREDAJ') continue;
        if (initialSetup && Date.parse(message.internalDate || parsed.date || 0) < Date.parse(state.mail.activationAfter)) {
          seen.add(key);
          continue;
        }

        try {
          const rows = parseCommandBody(parsed.text || '');
          const missingFromOutput = rows.filter((row) => !hasUniqueProduct(feeds, row.code));
          if (missingFromOutput.length) {
            // Stock-only supplier transforms omit unavailable items from output/*.xml. Confirm
            // missing codes against the live InnPro, K-B and BASYS catalogs.
            const sourceMatches = await findSupplierProductCodes(new Set(missingFromOutput.map((row) => row.code)));
            for (const row of missingFromOutput) {
              if (sourceMatches.get(row.code) !== 1) {
                throw new Error(`Kód ${row.code} nie je práve raz v aktuálnych výstupoch ani v živom InnPro katalógu.`);
              }
            }
          }
          nextState = addItems(nextState, rows, message.internalDate || parsed.date || new Date());
          mailChanges += rows.length;
          console.log(`Prijatý výpredajový e-mail: ${rows.length} produktových riadkov.`);
        } catch (err) {
          nextState.ignoredMail.push({ key, reason: err.message, at: new Date().toISOString() });
          nextState.ignoredMail = nextState.ignoredMail.slice(-200);
          console.warn(`Výpredajový e-mail UID ${message.uid} odmietnutý: ${err.message}`);
        }
        seen.add(key);
      }
      nextState.mail = {
        uidValidity,
        lastUid,
        activationAfter: state.mail.activationAfter,
        processedMessageKeys: [...seen].slice(-5000),
      };
    } finally {
      lock.release();
    }
  } finally {
    await client.logout().catch(() => {});
  }

  const orderResult = applyOrders(nextState, orders);
  nextState = orderResult.state;
  orderChanges.push(...orderResult.changes);

  fs.mkdirSync(path.dirname(STATE_PATH), { recursive: true });
  const tempPath = `${STATE_PATH}.tmp`;
  fs.writeFileSync(tempPath, `${JSON.stringify(nextState, null, 2)}\n`, { mode: 0o600 });
  fs.renameSync(tempPath, STATE_PATH);
  console.log(`Objednávok: ${orders.length}; nové výpredajové položky: ${mailChanges}; odpočítané riadky objednávok: ${orderChanges.length}.`);
  for (const change of orderChanges) {
    console.log(`Objednávka ${change.orderId}, kód ${change.code}: -${change.amount}; zostáva ${change.after}.`);
  }
}

main().catch((err) => {
  console.error(`Výpredajová kontrola zlyhala: ${err.message}`);
  process.exit(1);
});

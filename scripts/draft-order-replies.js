#!/usr/bin/env node
'use strict';

// Krok č. 3: pre nové zákaznícke maily o objednávkach (nájdené rovnakým filtrom ako
// scan-support-emails.js) vygeneruje cez Claude návrh odpovede a ULOŽÍ HO DO PRIEČINKA
// DRAFTS - nikdy nič neodosiela automaticky. Človek si návrh v poštovom klientovi
// prezrie, prípadne upraví a sám odošle.
//
// Aby sa ten istý mail neprekladal do draftu opakovane pri každom behu, drží si
// v data/drafted-order-emails.json zoznam Message-ID, ktoré už spracoval.

const fs = require('fs');
const path = require('path');
const { ImapFlow } = require('imapflow');
const { simpleParser } = require('mailparser');
const MailComposer = require('nodemailer/lib/mail-composer');
const Anthropic = require('@anthropic-ai/sdk');
const { fetchOrders, findOrder, summarizeOrder } = require('./fetch-orders');
const { scanInboxForOrderQueries } = require('./lib/order-email-filter');

const IMAP_HOST = process.env.SEZNAM_IMAP_HOST || 'imap.seznam.cz';
const IMAP_PORT = Number(process.env.SEZNAM_IMAP_PORT || 993);
const IMAP_USER = process.env.SEZNAM_IMAP_USER;
const IMAP_PASSWORD = process.env.SEZNAM_IMAP_PASSWORD;
const ORDERS_XML_URL = process.env.ORDERS_XML_URL;
const SCAN_LIMIT = Number(process.env.SCAN_LIMIT || 50);
const FROM_NAME = process.env.REPLY_FROM_NAME || 'PremiumStore.sk';
const FROM_ADDRESS = IMAP_USER;
const STATE_PATH = path.join(__dirname, '..', 'data', 'drafted-order-emails.json');
const CLAUDE_MODEL = process.env.CLAUDE_MODEL || 'claude-opus-5';

function loadState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
  } catch {
    return {};
  }
}

function saveState(state) {
  fs.mkdirSync(path.dirname(STATE_PATH), { recursive: true });
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2) + '\n');
}

// Nájde priečinok Drafts podľa IMAP SPECIAL-USE flagu (RFC 6154) - nespoliehať sa na
// pevný názov, servery ho pomenúvajú rôzne ("Drafts", "drafts", "INBOX.Drafts", ...).
async function findDraftsMailbox(client) {
  const list = await client.list();
  const bySpecialUse = list.find((box) => box.specialUse === '\\Drafts');
  if (bySpecialUse) return bySpecialUse.path;
  const byName = list.find((box) => /^drafts$/i.test(box.name));
  if (byName) return byName.path;
  throw new Error('Priečinok Drafts sa nenašiel (žiadny \\Drafts special-use flag ani priečinok "Drafts").');
}

function buildOrderContext(order) {
  if (!order) return 'Objednávka sa v systéme nenašla.';
  const items = (order.ORDER_ITEMS?.ITEM || [])
    .map((it) => (Array.isArray(it) ? it : [it]))
    .flat()
    .filter((it) => it.TYPE === 'product')
    .map((it) => `- ${it.NAME} (${it.AMOUNT}x)`)
    .join('\n');
  const s = summarizeOrder(order);
  return [
    `Číslo objednávky: ${s.code}`,
    `Dátum vytvorenia: ${s.date}`,
    `Aktuálny stav: ${s.status}`,
    `Suma: ${s.totalWithVat} ${s.currency}`,
    s.packageNumber ? `Číslo balíka/zásielky: ${s.packageNumber}` : null,
    items ? `Položky:\n${items}` : null,
  ]
    .filter(Boolean)
    .join('\n');
}

function buildPrompt(candidate, latestOrderForEmail) {
  const system = `Si zákaznícka podpora e-shopu PremiumStore.sk. Dostaneš email od zákazníka
a údaje o jeho objednávke z nášho interného systému. Napíš stručný, zdvorilý a vecný
návrh odpovede v slovenčine.

Prísne pravidlá:
- Používaj VÝHRADNE fakty, ktoré dostaneš nižšie alebo ktoré sú v citovanom pôvodnom
  maile od zákazníka (napr. citovaná Shoptet notifikácia môže obsahovať výdajné miesto
  alebo spôsob platby - to je v poriadku použiť). Nikdy si nevymýšľaj presné časy zmien
  stavu ani čokoľvek iné, čo v žiadnom z týchto zdrojov nie je - náš systém históriu
  zmien stavu s časmi neposkytuje.
- DÔLEŽITÉ vysvetlenie stavov objednávky - VŠETOK tovar je vždy skladom, nikdy nečakáme
  na dodávateľa:
  - Stav v tvare "Objednané <NÁZOV>" (napr. "Objednané ATOS", "Objednané INNPRO",
    "Objednané v ATOSE") NEZNAMENÁ, že tovar nie je skladom alebo že sa u dodávateľa
    overuje dostupnosť. Znamená to, že tovar je už na ceste k nám a objednávka bude
    zákazníkovi odoslaná v priebehu 1-2 dní. Zákazníkovi vždy napíš práve toto - že
    objednávka bude čoskoro odoslaná a dostane o tom informáciu. NIKDY nepíš, že je
    niečo "objednané u dodávateľa", že "overujeme dostupnosť tovaru" alebo že "čakáme
    na naskladnenie" - to je vecne nesprávne a zbytočne znepokojuje zákazníka.
  - Stav "Nevybavená" = objednávka je nová, ešte sa nezačala spracovávať, čoskoro bude.
  - Stav "Vybavuje sa" = práve sa spracováva/balí.
  - Stav "Vybavená" = odoslaná (ak je aj číslo balíka, môžeš ho uviesť ako sledovacie).
  - Stav "Stornovaná" = zrušená.
- Ak sa objednávka, ktorú zákazník spomína, v systéme nenašla, priznaj to a napíš, že
  to preveríte manuálne - nikdy nepredstieraj istotu ani nepodsúvaj inú objednávku ako
  odpoveď na jeho pôvodnú otázku.
- Bežný scenár: ak zákazníkovi zlyhá platba, môže vzniknúť viac objednávok pod rôznymi
  číslami a staršie sa automaticky stornujú - platná je vždy najnovšia nestornovaná.
  Ak to sedí na situáciu, môžeš to zákazníkovi vysvetliť, len ak to podporujú dáta nižšie.
- Neuvádzaj žiadne interné informácie (nákupné ceny, marže, interné poznámky, názvy
  konkrétnych dodávateľov ako ATOS/INNPRO/atď. - zákazníkovi na tom nezáleží a stav
  "Objednané <dodávateľ>" mu vysvetli len ako "na ceste k nám", nie menom dodávateľa).
- Osloviteľ zákazníka menom, ak ho poznáme.
- Podpíš sa ako "Tím PremiumStore.sk".
- Vráť LEN text emailu (bez predmetu, bez "Predmet:", bez úvodzoviek okolo).`;

  const orderBlock = buildOrderContext(candidate.rawOrder);
  const otherOrderBlock =
    latestOrderForEmail && (!candidate.rawOrder || summarizeOrder(latestOrderForEmail).code !== summarizeOrder(candidate.rawOrder).code)
      ? `\n\nNAJNOVŠIA OBJEDNÁVKA TOHTO ZÁKAZNÍKA (pre kontext, nemusí byť tá, na ktorú sa pýta):\n${buildOrderContext(latestOrderForEmail)}`
      : '';

  const user = `PÔVODNÝ EMAIL OD ZÁKAZNÍKA
Od: ${candidate.from}
Predmet: ${candidate.subject}
Text:
${candidate.bodyText.slice(0, 4000)}

ÚDAJE O OBJEDNÁVKE (zhoda: ${candidate.matchedBy})
${orderBlock}${otherOrderBlock}`;

  return { system, user };
}

async function draftReplyText(anthropic, candidate, latestOrderForEmail) {
  const { system, user } = buildPrompt(candidate, latestOrderForEmail);
  const response = await anthropic.messages.create({
    model: CLAUDE_MODEL,
    max_tokens: 2048,
    system,
    messages: [{ role: 'user', content: user }],
  });
  const textBlock = response.content.find((b) => b.type === 'text');
  if (!textBlock) throw new Error('Claude nevrátil textovú odpoveď.');
  return textBlock.text.trim();
}

function buildReplySubject(originalSubject) {
  return /^re:/i.test(originalSubject.trim()) ? originalSubject.trim() : `Re: ${originalSubject}`;
}

async function composeDraftMime(candidate, replyText) {
  const mail = new MailComposer({
    from: `${FROM_NAME} <${FROM_ADDRESS}>`,
    to: candidate.from,
    subject: buildReplySubject(candidate.subject),
    inReplyTo: candidate.messageId || undefined,
    references: [candidate.references, candidate.messageId].filter(Boolean).join(' ') || undefined,
    text: replyText,
  });
  return new Promise((resolve, reject) => {
    mail.compile().build((err, message) => (err ? reject(err) : resolve(message)));
  });
}

async function main() {
  if (!IMAP_USER || !IMAP_PASSWORD) {
    console.error('Chýba SEZNAM_IMAP_USER / SEZNAM_IMAP_PASSWORD v prostredí.');
    process.exit(1);
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('Chýba ANTHROPIC_API_KEY v prostredí.');
    process.exit(1);
  }

  const state = loadState();
  const anthropic = new Anthropic();

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

  let drafted = 0;
  let skipped = 0;

  try {
    await client.connect();
    const draftsPath = await findDraftsMailbox(client);
    console.log(`Priečinok Drafts: ${draftsPath}`);

    const lock = await client.getMailboxLock('INBOX');
    let candidates = [];
    try {
      const result = await scanInboxForOrderQueries(client, orders, {
        limit: SCAN_LIMIT,
        simpleParser,
        onSkip: (seq, err) => console.warn(`   (správa #${seq} sa nedala spracovať: ${err.message} - preskakujem)`),
      });
      candidates = result.candidates;
      console.log(`Prezretých ${result.scanned} správ, ${candidates.length} vyzerá ako zákaznícky dotaz na objednávku.`);
    } finally {
      lock.release();
    }

    for (const candidate of candidates) {
      const stateKey = candidate.messageId || `seq:${candidate.uid}`;
      if (state[stateKey]) {
        skipped += 1;
        continue;
      }

      try {
        const { order: latest } = findOrder(orders, { email: candidate.from });
        const replyText = await draftReplyText(anthropic, candidate, latest);
        const mimeMessage = await composeDraftMime(candidate, replyText);
        await client.append(draftsPath, mimeMessage, ['\\Draft']);

        state[stateKey] = {
          draftedAt: new Date().toISOString(),
          from: candidate.from,
          subject: candidate.subject,
          orderCode: candidate.matchedOrder?.code || null,
          matchedBy: candidate.matchedBy,
        };
        drafted += 1;
        console.log(`Draft uložený: ${candidate.from} | "${candidate.subject}" | zhoda: ${candidate.matchedBy}`);
      } catch (err) {
        console.error(`Nepodarilo sa vytvoriť draft pre "${candidate.subject}" (${candidate.from}): ${err.message}`);
      }
    }
  } finally {
    await client.logout().catch(() => {});
  }

  saveState(state);
  console.log(`\nHotovo: ${drafted} nových draftov, ${skipped} už bolo spracovaných predtým.`);
}

main().catch((err) => {
  console.error('Chyba pri generovaní draftov:', err.message);
  if (err.stack) console.error(err.stack);
  process.exit(1);
});

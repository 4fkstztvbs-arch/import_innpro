#!/usr/bin/env node
'use strict';
// InnPro Black Friday: počas okna validFrom..validUntil zapíše do output/innpro.xml
// PRICE_VAT = doporučená cena (prečiarknutá), ACTION_PRICE = akciová cena a príznak Akcia.
// Po skončení (alebo ak chýba akciová cena) vráti ACTION_PRICE = PRICE_VAT a Akcia 0,
// lebo Shoptet import prázdne/chýbajúce ACTION_PRICE nevymaže.
// Spúšťa sa pred apply-heureka-conversion-rules (tie počítajú s ACTION_PRICE).
const fs = require('fs');
const path = require('path');

const feedPath = process.argv[2] || path.join(__dirname, '..', 'output', 'innpro.xml');
const dataPath = process.env.INNPRO_BF_DATA || path.join(__dirname, '..', 'data', 'innpro-black-friday.json');
const today = process.env.INNPRO_BF_TODAY || new Date().toISOString().slice(0, 10);

const tag = (b, t) => (b.match(new RegExp(`<${t}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${t}>`)) || [])[1];
function setTag(b, t, v) {
  const re = new RegExp(`<${t}\\b[^>]*>[\\s\\S]*?</${t}>`);
  if (re.test(b)) return b.replace(re, `<${t}>${v}</${t}>`);
  return b.replace(/<\/SHOPITEM>/, `<${t}>${v}</${t}>\n</SHOPITEM>`);
}
function setActionFlag(b, active) {
  const v = active ? 1 : 0;
  const fm = b.match(/<FLAGS\b[^>]*>([\s\S]*?)<\/FLAGS>/);
  const entry = `<FLAG><CODE>action</CODE><ACTIVE>${v}</ACTIVE></FLAG>`;
  if (!fm) return b.replace(/<\/SHOPITEM>/, `<FLAGS>${entry}</FLAGS>\n</SHOPITEM>`);
  let flags = fm[1];
  if (/<FLAG\b/.test(flags) || !flags.trim()) {
    const re = /<FLAG>\s*<CODE>action<\/CODE>[\s\S]*?<\/FLAG>/i;
    flags = re.test(flags) ? flags.replace(re, entry) : flags + entry;
  } else if (/<ACTION>/.test(flags)) flags = flags.replace(/<ACTION>[^<]*<\/ACTION>/, `<ACTION>${v}</ACTION>`);
  else flags += `<ACTION>${v}</ACTION>`;
  return b.replace(fm[0], `<FLAGS>${flags}</FLAGS>`);
}

function main() {
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const active = today >= data.validFrom && today <= data.validUntil;
  const xml = fs.readFileSync(feedPath, 'utf8');
  const seen = new Set();
  const st = { applied: 0, reset: 0, noStrike: 0, skipped: 0 };
  const out = xml.replace(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g, (b) => {
    const ean = (tag(b, 'EAN') || '').trim();
    const it = data.items[ean];
    if (!it) return b;
    const price = Number(tag(b, 'PRICE_VAT'));
    if (!(price > 0)) { st.skipped++; return b; }
    seen.add(ean);
    if (!active) { st.reset++; return setActionFlag(setTag(b, 'ACTION_PRICE', price.toFixed(2)), false); }
    const action = it.actionPrice;
    const standard = it.standardPrice || action;
    const purchase = Number(tag(b, 'PURCHASE_PRICE') || 0);
    const vat = Number(tag(b, 'PURCHASE_VAT') || 23);
    const purchaseNet = Number(tag(b, 'PURCHASE_PRICE_INCL_VAT')) === 1 ? purchase / (1 + vat / 100) : purchase;
    if (!(action > 0) || action > standard + 1e-9 || (purchaseNet > 0 && action / (1 + vat / 100) < purchaseNet)) {
      console.warn(`BF ${ean}: neplatná akciová cena ${action} (štandard ${standard}, nákup ${purchaseNet}); preskakujem.`);
      st.skipped++; return b;
    }
    let u = setTag(b, 'PRICE_VAT', standard.toFixed(2));
    u = setTag(u, 'STANDARD_PRICE', standard.toFixed(2));
    u = setTag(u, 'ACTION_PRICE', action.toFixed(2));
    const strike = it.standardPrice && action < standard - 1e-9;
    if (!strike) st.noStrike++;
    st.applied++;
    return setActionFlag(u, strike);
  });
  const tmp = `${feedPath}.bf.tmp`;
  fs.writeFileSync(tmp, out, 'utf8');
  fs.renameSync(tmp, feedPath);
  const missing = Object.keys(data.items).filter((e) => !seen.has(e)).length;
  console.log(`InnPro BF (${active ? 'aktívna' : 'neaktívna'}, dnes ${today}): zapísané ${st.applied}, bez prečiarknutia ${st.noStrike}, reset ${st.reset}, preskočené ${st.skipped}, nenájdené vo feede ${missing}.`);
}
try { main(); } catch (e) { console.error(`BF krok zlyhal: ${e.message}`); process.exit(1); }

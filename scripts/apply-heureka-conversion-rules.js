'use strict';
// Skryje z plateného Heureka CPC feedu produkty, ktoré podľa CPC reportu zbytočne míňajú kliky
// (pravidlá a dôvody: scripts/heureka-conversion-rules.json). Spúšťa sa po každom spracovaní
// Heureka reportu (heureka-price-report.yml) aj na konci každého behu dodávateľa, lebo transformy
// generujú HEUREKA_HIDDEN nanovo a o týchto pravidlách nevedia.
//
// Len pridáva HEUREKA_HIDDEN, nikdy ho neodoberá — z XML sa nedá zistiť, ktoré iné pravidlo ho
// nastavilo (rovnaký dôvod ako v apply-price-targets.js). Produkt, na ktorý pravidlo prestane
// platiť, sa vráti pri najbližšom nočnom behu dodávateľa.
//
// Použitie: node scripts/apply-heureka-conversion-rules.js [--xml=output/kb.xml] [--nasucho]
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');
const { isPilotUnhidden } = require('./heureka-pilot-unhidden');

const ROOT = path.join(__dirname, '..');
const RULES_PATH = path.join(__dirname, 'heureka-conversion-rules.json');
const REPORTS_DIR = path.join(ROOT, 'data', 'heureka-reports');
const TARGETS_PATH = path.join(REPORTS_DIR, 'price-targets.json');

const normEan = (e) => { const s = String(e || '').trim(); return /^\d{1,12}$/.test(s) ? s.padStart(13, '0') : s; };
const tag = (s, t) => s.match(new RegExp(`<${t}>(?:<!\\[CDATA\\[)?(.*?)(?:\\]\\]>)?</${t}>`, 's'))?.[1]?.trim();

// Najlacnejší iný predajca podľa posledného spracovaného reportu (naša ponuka už je odčítaná).
function loadCheapest() {
  const out = new Map();
  if (!fs.existsSync(TARGETS_PATH)) return out;
  for (const [ean, t] of Object.entries(JSON.parse(fs.readFileSync(TARGETS_PATH, 'utf-8')))) {
    const prices = (t.competitorPrices || []).filter((p) => p > 0);
    if (prices.length) out.set(normEan(ean), Math.min(...prices));
  }
  return out;
}

// Heureka kategória (list) podľa EAN z najnovšieho sortiment reportu.
function loadCategories() {
  const out = new Map();
  const last = fs.existsSync(REPORTS_DIR) && fs.readdirSync(REPORTS_DIR).filter((f) => /^premiumstore-sk_.*\.csv$/i.test(f)).sort().pop();
  if (!last) return out;
  const rows = parse(fs.readFileSync(path.join(REPORTS_DIR, last)), { columns: true, bom: true, relax_column_count: true, skip_empty_lines: true });
  for (const r of rows) if (r.EAN && r['Kategória']) out.set(normEan(r.EAN), r['Kategória'].trim());
  return out;
}

function hideReason(item, rules, ctx) {
  const ean = normEan(tag(item, 'EAN'));
  if (ean && (rules.keepEans?.[ean] || ctx.isPilot(ean))) return null;
  const price = parseFloat(tag(item, 'PRICE_VAT'));
  if (!(price > 0)) return null;
  if (rules.priceAtLeast > 0 && price >= rules.priceAtLeast) return 'cena';
  if (rules.hideWithoutPurchasePrice && !(parseFloat(tag(item, 'PURCHASE_PRICE')) > 0)) return 'bezNakupnej';
  if (!ean) return null;
  if (ctx.categories.has(ean) && rules.heurekaCategories?.includes(ctx.categories.get(ean))) return 'kategoria';
  const cheapest = ctx.cheapest.get(ean);
  if (rules.maxAboveCheapestPct > 0 && cheapest > 0 && price > cheapest * (1 + rules.maxAboveCheapestPct / 100)) return 'drahsi';
  return null;
}

function applyConversionRules(xml, rules, ctx) {
  const stats = { cena: 0, bezNakupnej: 0, kategoria: 0, drahsi: 0 };
  const out = xml.replace(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g, (item) => {
    if (/<HEUREKA_HIDDEN>1<\/HEUREKA_HIDDEN>/.test(item)) return item;
    const reason = hideReason(item, rules, ctx);
    if (!reason) return item;
    stats[reason]++;
    return item.replace(/<PRICE_VAT>/, '<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN>\n<PRICE_VAT>');
  });
  return { xml: out, stats };
}

function main() {
  const arg = process.argv.find((a) => a.startsWith('--xml='))?.slice(6);
  const nasucho = process.argv.includes('--nasucho');
  const outDir = path.join(ROOT, 'output');
  const files = arg ? [arg] : fs.readdirSync(outDir).filter((f) => f.endsWith('.xml')).sort().map((f) => path.join(outDir, f));
  const rules = JSON.parse(fs.readFileSync(RULES_PATH, 'utf-8'));
  const ctx = { cheapest: loadCheapest(), categories: loadCategories(), isPilot: isPilotUnhidden };
  for (const f of files) {
    if (!fs.existsSync(f)) continue;
    const { xml, stats } = applyConversionRules(fs.readFileSync(f, 'utf-8'), rules, ctx);
    const total = Object.values(stats).reduce((a, b) => a + b, 0);
    if (total && !nasucho) fs.writeFileSync(f, xml, 'utf-8');
    console.log(`Heureka konverzné pravidlá (${path.basename(f)}): skrytých ${total}${nasucho ? ' (nasucho)' : ''}`
      + ` — drahší o >${rules.maxAboveCheapestPct} % ${stats.drahsi}, cena ≥${rules.priceAtLeast} € ${stats.cena},`
      + ` kategória ${stats.kategoria}, bez nákupnej ceny ${stats.bezNakupnej}`);
  }
}

if (require.main === module) main();
module.exports = { applyConversionRules, hideReason, normEan };

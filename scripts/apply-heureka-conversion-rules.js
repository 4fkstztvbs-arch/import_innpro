'use strict';
// Heureka-only visibility rules. Prices, availability, identity and shop visibility stay intact.
// Runs after report-based repricing and at the end of each supplier pipeline.
// Except for explicitly force-visible suppliers, existing exclusions are preserved: a supplier
// rebuild reevaluates them from source. Never clear an unowned CPC/category exclusion by guesswork.
// Usage: node scripts/apply-heureka-conversion-rules.js [--xml=output/kb.xml] [--nasucho]
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const RULES_PATH = path.join(__dirname, 'heureka-conversion-rules.json');
const REPORTS_DIR = path.join(ROOT, 'data', 'heureka-reports');
const TARGETS_PATH = path.join(REPORTS_DIR, 'price-targets.json');

const normEan = (e) => { const s = String(e || '').trim(); return /^\d{1,12}$/.test(s) ? s.padStart(13, '0') : s; };
const tag = (s, t) => s.match(new RegExp(`<${t}>(?:<!\\[CDATA\\[)?(.*?)(?:\\]\\]>)?</${t}>`, 's'))?.[1]?.trim();
const isHidden = (item) => /<HEUREKA_HIDDEN>\s*1\s*<\/HEUREKA_HIDDEN>/.test(item);
const supplierIn = (suppliers, supplier) => Array.isArray(suppliers) && suppliers.includes(supplier);

// Use validated observations from the same processed report, excluding our own offer (the
// pricing processor already removes it once). An unknown/invalid market is NOT a lost first place.
function cheapestFromTargets(targets, sourceReport) {
  const out = new Map();
  if (!sourceReport || !targets || typeof targets !== 'object' || Array.isArray(targets)) return out;
  for (const [ean, t] of Object.entries(targets)) {
    if (!t || t.sourceReport !== sourceReport || t.mode !== 'market'
      || !Number.isFinite(t.sellerCount) || t.sellerCount < 2
      || !Array.isArray(t.competitorPrices) || !t.competitorPrices.length
      || t.competitorPrices.some((p) => !Number.isFinite(p) || p <= 0)) continue;
    const key = normEan(ean);
    if (key) out.set(key, Math.min(...t.competitorPrices));
  }
  return out;
}

function loadCheapest() {
  const statePath = path.join(REPORTS_DIR, '.last-processed.json');
  if (!fs.existsSync(TARGETS_PATH) || !fs.existsSync(statePath)) return new Map();
  const state = JSON.parse(fs.readFileSync(statePath, 'utf-8'));
  return cheapestFromTargets(JSON.parse(fs.readFileSync(TARGETS_PATH, 'utf-8')), state?.file);
}

// Keep the existing category rule separate from the price-position rule.
function loadCategories() {
  const { parse } = require('csv-parse/sync');
  const out = new Map();
  const last = fs.existsSync(REPORTS_DIR) && fs.readdirSync(REPORTS_DIR).filter((f) => /^premiumstore-sk_.*\.csv$/i.test(f)).sort().pop();
  if (!last) return out;
  const rows = parse(fs.readFileSync(path.join(REPORTS_DIR, last)), { columns: true, bom: true, relax_column_count: true, skip_empty_lines: true });
  for (const r of rows) if (r.EAN && r['Kategória']) out.set(normEan(r.EAN), r['Kategória'].trim());
  return out;
}

function hideReason(item, rules, ctx) {
  if (supplierIn(rules.forceVisibleSuppliers, ctx.supplier) || supplierIn(rules.skipSuppliers, ctx.supplier)) return null;
  const ean = normEan(tag(item, 'EAN'));
  if (ean && (rules.keepEans?.[ean] || ctx.isPilot?.(ean))) return null;
  const price = Number(tag(item, 'PRICE_VAT'));
  if (!Number.isFinite(price) || !(price > 0)) return null;
  const cheapest = ean ? ctx.cheapest.get(ean) : undefined;
  // Compare the actual post-repricing feed price in cents. A tied cheapest price also counts
  // as first place. Exactly EUR 1000 and missing market evidence do not trigger this rule.
  if (rules.priceAbove > 0 && price > rules.priceAbove && Number.isFinite(cheapest) && cheapest > 0
    && Math.round(price * 100) > Math.round(cheapest * 100)) return 'cena';
  if (rules.hideWithoutPurchasePrice && !(parseFloat(tag(item, 'PURCHASE_PRICE')) > 0)
    && !(rules.estimatedMarginPctBySupplier?.[ctx.supplier] > 0)) return 'bezNakupnej';
  if (!ean) return null;
  if (ctx.categories.has(ean) && rules.heurekaCategories?.includes(ctx.categories.get(ean))) return 'kategoria';
  if (rules.maxAboveCheapestPct > 0 && Number.isFinite(cheapest) && cheapest > 0
    && price > cheapest * (1 + rules.maxAboveCheapestPct / 100)) return 'drahsi';
  return null;
}

// Emit an explicit 0 for force-visible suppliers: omitting the field would not reliably clear
// an already imported 1 in Shoptet. Replace existing values and avoid duplicate elements.
function setHidden(item, value) {
  const element = `<HEUREKA_HIDDEN>${value}</HEUREKA_HIDDEN>`;
  let seen = false;
  const out = item.replace(/<HEUREKA_HIDDEN>[\s\S]*?<\/HEUREKA_HIDDEN>/g, () => {
    if (seen) return '';
    seen = true;
    return element;
  });
  if (seen) return out;
  if (out.includes('<PRICE_VAT>')) return out.replace('<PRICE_VAT>', `${element}\n<PRICE_VAT>`);
  return out.replace('</SHOPITEM>', `${element}\n</SHOPITEM>`);
}

function applyConversionRules(xml, rules, ctx) {
  const stats = { cena: 0, bezNakupnej: 0, kategoria: 0, drahsi: 0, restored: 0, visible: 0 };
  const forceVisible = supplierIn(rules.forceVisibleSuppliers, ctx.supplier);
  if (!forceVisible && supplierIn(rules.skipSuppliers, ctx.supplier)) return { xml, stats };
  const out = xml.replace(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g, (item) => {
    if (forceVisible) {
      if (isHidden(item)) stats.restored++;
      stats.visible++;
      return setHidden(item, 0);
    }
    // Preserve independent historical CPC/category exclusions and their expiry/re-entry policy.
    if (isHidden(item)) return item;
    const reason = hideReason(item, rules, ctx);
    if (!reason) return item;
    stats[reason]++;
    return setHidden(item, 1);
  });
  return { xml: out, stats };
}

function main() {
  const { isPilotUnhidden } = require('./heureka-pilot-unhidden');
  const arg = process.argv.find((a) => a.startsWith('--xml='))?.slice(6);
  const nasucho = process.argv.includes('--nasucho');
  const outDir = path.join(ROOT, 'output');
  const files = arg ? [arg] : fs.readdirSync(outDir).filter((f) => f.endsWith('.xml')).sort().map((f) => path.join(outDir, f));
  const rules = JSON.parse(fs.readFileSync(RULES_PATH, 'utf-8'));
  const base = { cheapest: loadCheapest(), categories: loadCategories(), isPilot: isPilotUnhidden };
  for (const f of files) {
    if (!fs.existsSync(f)) continue;
    const supplier = path.basename(f);
    if (supplierIn(rules.skipSuppliers, supplier) && !supplierIn(rules.forceVisibleSuppliers, supplier)) {
      console.log(`Heureka konverzné pravidlá (${supplier}): vynechané`);
      continue;
    }
    const original = fs.readFileSync(f, 'utf-8');
    const { xml, stats } = applyConversionRules(original, rules, { ...base, supplier });
    const total = stats.cena + stats.bezNakupnej + stats.kategoria + stats.drahsi;
    if (xml !== original && !nasucho) fs.writeFileSync(f, xml, 'utf-8');
    console.log(`Heureka konverzné pravidlá (${supplier}): skrytých ${total}${nasucho ? ' (nasucho)' : ''}`
      + ` — drahší o >${rules.maxAboveCheapestPct} % ${stats.drahsi}, nad ${rules.priceAbove} € a mimo cenového 1. miesta ${stats.cena},`
      + ` kategória ${stats.kategoria}, bez nákupnej ceny ${stats.bezNakupnej}`
      + `; výnimka viditeľnosti ${stats.visible}, obnovených zo skrytia ${stats.restored}`);
  }
}

if (require.main === module) main();
module.exports = { applyConversionRules, hideReason, normEan, cheapestFromTargets, setHidden };

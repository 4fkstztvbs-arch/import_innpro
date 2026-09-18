// Compares our current prices (from output/*.xml, i.e. what the next Automatický import would
// send) against a Heureka.sk "sortiment report" CSV export (Marketing -> Heureka -> Sortiment
// report in the Heureka admin; columns include EAN, Vaša cena, Najnižšia cena, PriceMin2..10,
// PriceMax10..2, Najvyššia cena, E-shopov predávajúcich produkt), and suggests a new price for
// each matched product using the following rule:
//
// Ranked price columns are merged by OFFER POSITION, then exactly one own
// offer (identified using the REPORT price) is removed. Shared policy targets
// the cheapest other offer, preserving a minimum markup without a maximum markup cap.
// See heureka-pricing-policy.json and heureka-pricing.js.
//
// The report's own "Item ID" column is Shoptet's internal product ID from whichever store the
// report was pulled from — it does NOT match our supplier CODE and isn't portable across a
// store rebuild, so it's ignored entirely. EAN is the only reliable join key between the report
// and our own product data, and it survives a full re-import / new store since it identifies the
// physical product, not a store-specific record.
//
// Usage: node compare-heureka-prices.js <heureka-report.csv> [--out=path.csv] [--xml=dir] [--min-margin=5]
// Reads product data from all *.xml files in output/ by default (override with --xml=dir).

const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');
const { POLICY, validatePolicy, readCompetition, priceDecision } = require('./heureka-pricing');

function xmlUnescape(s) {
  return String(s || '')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

function loadOurProducts(xmlPaths) {
  // EAN -> { name, price, category, code, source, purchasePrice, purchaseVat, ean }
  const byEan = new Map();
  // CODE -> same shape, BASYS-only (see byCode fallback-matching comment near the join loop).
  const byCode = new Map();
  let dupes = 0;
  for (const xmlPath of xmlPaths) {
    const data = fs.readFileSync(xmlPath, 'utf-8');
    const items = data.split('<SHOPITEM>').slice(1);
    for (const raw of items) {
      const it = raw.split('</SHOPITEM>')[0];
      const ean = (it.match(/<EAN>(.*?)<\/EAN>/) || [])[1];
      if (!ean) continue;
      const name = xmlUnescape(((it.match(/<NAME><!\[CDATA\[([\s\S]*?)\]\]><\/NAME>/) || [])[1] || '').trim());
      const price = parseFloat((it.match(/<PRICE_VAT>(.*?)<\/PRICE_VAT>/) || [])[1] || 'NaN');
      const category = xmlUnescape(((it.match(/<CATEGORY><!\[CDATA\[([\s\S]*?)\]\]><\/CATEGORY>/) || [])[1] || '').trim());
      const code = (it.match(/<CODE>(.*?)<\/CODE>/) || [])[1] || '';
      // PURCHASE_PRICE is always excl. VAT in our XML (PURCHASE_PRICE_INCL_VAT is hardcoded 0) -
      // see reports/prehlad-importov.md section 3.
      const purchasePriceRaw = (it.match(/<PURCHASE_PRICE>(.*?)<\/PURCHASE_PRICE>/) || [])[1];
      const purchasePrice = purchasePriceRaw ? parseFloat(purchasePriceRaw) : null;
      const purchaseVatRaw = (it.match(/<PURCHASE_VAT>(.*?)<\/PURCHASE_VAT>/) || [])[1];
      const purchaseVat = purchaseVatRaw !== undefined ? parseFloat(purchaseVatRaw) : null;
      if (byEan.has(ean)) { dupes++; continue; }
      const entry = { name, price, category, code, source: path.basename(xmlPath), purchasePrice, purchaseVat, ean };
      byEan.set(ean, entry);
      if (code.startsWith('BASYS-')) byCode.set(code.replace(/\s+/g, ' ').trim(), entry);
    }
  }
  return { byEan, byCode, dupes };
}

function num(s) {
  const v = parseFloat(String(s || '').replace(',', '.'));
  return Number.isFinite(v) ? v : null;
}

function main() {
  const args = process.argv.slice(2);
  const csvPath = args.find((a) => !a.startsWith('--'));
  if (!csvPath) {
    console.error('Usage: node compare-heureka-prices.js <heureka-report.csv> [--out=path.csv] [--xml=dir] [--min-margin=5]');
    process.exit(1);
  }
  const outArg = args.find((a) => a.startsWith('--out='));
  const outPath = outArg ? outArg.slice('--out='.length) : path.join(__dirname, '..', 'reports', `heureka-price-compare-${new Date().toISOString().slice(0, 10)}.csv`);
  const xmlArg = args.find((a) => a.startsWith('--xml='));
  const outputDir = xmlArg ? xmlArg.slice('--xml='.length) : path.join(__dirname, '..', 'output');
  const marginArg = args.find((a) => a.startsWith('--min-margin='));
  const MIN_MARGIN_PCT = marginArg ? Number(marginArg.slice('--min-margin='.length)) : POLICY.minMarkupPct;
  const policy = validatePolicy({ ...POLICY, minMarkupPct: MIN_MARGIN_PCT });
  const xmlPaths = fs.readdirSync(outputDir)
    .filter((f) => f.endsWith('.xml'))
    .map((f) => path.join(outputDir, f));

  console.log(`Loading our products from: ${xmlPaths.join(', ')}`);
  const { byEan, byCode, dupes } = loadOurProducts(xmlPaths);
  console.log(`  -> ${byEan.size} of our products have an EAN${dupes ? ` (${dupes} duplicate EANs skipped)` : ''}`);
  console.log(`Minimum margin safety floor: ${MIN_MARGIN_PCT}%`);

  console.log(`Reading Heureka report: ${csvPath}`);
  const csvRaw = fs.readFileSync(csvPath, 'utf-8');
  // Heureka's export has a trailing comma on every data row (one extra empty field past the
  // last header column) - tolerate the mismatched column count instead of erroring on it.
  const rows = parse(csvRaw, { bom: true, columns: (headers) => {
    for (const required of ['EAN', 'Vaša cena', 'Najnižšia cena', 'Najvyššia cena', 'E-shopov predávajúcich produkt']) {
      if (!headers.includes(required)) throw new Error(`Heureka report is missing column: ${required}`);
    }
    return headers;
  }, skip_empty_lines: true, relax_column_count: true });
  if (!rows.length) throw new Error('Heureka report is empty');
  console.log(`  -> ${rows.length} rows in report`);

  const matched = [];
  let noEan = 0;
  let noMatch = 0;
  let noPurchasePrice = 0;

  for (const row of rows) {
    const reportEan = String(row.EAN || '').trim();
    let ours = reportEan ? byEan.get(reportEan) : undefined;
    if (!ours) {
      // Heureka doesn't send EAN at all for some niche/small-brand listings (seen consistently
      // for every Bose product via BASYS - the EAN column is blank). The report's "Item ID" is
      // normally an opaque per-store Shoptet ID we can't rely on (see file header) - but for
      // BASYS specifically it's derived directly from our own CODE (we prefix it "BASYS-..."
      // ourselves), so normalizing it and matching against byCode is a safe, exact fallback -
      // verified 12/12 Bose report rows resolve correctly, no fuzzy/name matching involved.
      const itemId = String(row['Item ID'] || '').trim();
      if (itemId.startsWith('BASYS-')) {
        ours = byCode.get(itemId.replace(/_/g, ' ').replace(/\s+/g, ' ').trim());
      }
    }
    if (!ours) { if (!reportEan) noEan++; else noMatch++; continue; }
    // Always key by OUR OWN real EAN (from the product's own data), never the report's - it may
    // be blank when we only matched via the Item ID fallback above.
    const ean = ours.ean;

    const competition = readCompetition(row);
    const decision = priceDecision(ours.price, ours.purchasePrice, ours.purchaseVat, competition, policy, ours.source);
    if (!(ours.purchasePrice > 0) || !Number.isFinite(ours.purchaseVat)) noPurchasePrice++;
    const heurekaMin = competition.cheapest;
    const heurekaMin2 = competition.prices[1] ?? null;
    const sellerCount = competition.sellerCount;
    const estimatedPosition = competition.valid && competition.complete
      ? competition.prices.filter((p) => p < ours.price).length + 1 : null;
    const diff = heurekaMin !== null ? +(ours.price - heurekaMin).toFixed(2) : null;
    const diffPct = heurekaMin ? +((diff / heurekaMin) * 100).toFixed(1) : null;
    const { floor: floorPrice, action, price: suggestedPrice, reason: note, target: rawTarget, cantCompete } = decision;

    // Margin (our "marža" convention throughout this codebase, see transform-kb.js's
    // MIN_MARGIN floor): markup over purchase price excl. VAT, i.e.
    // margin% = priceExclVat / purchaseExclVat - 1, NOT (price-cost)/price.
    let currentMarginPct = null;
    let newMarginPct = null;
    if (ours.purchasePrice > 0 && Number.isFinite(ours.purchaseVat)) {
      const priceExclVat = ours.price / (1 + ours.purchaseVat / 100);
      currentMarginPct = +((priceExclVat / ours.purchasePrice - 1) * 100).toFixed(1);
      const suggestedExclVat = suggestedPrice / (1 + ours.purchaseVat / 100);
      newMarginPct = +((suggestedExclVat / ours.purchasePrice - 1) * 100).toFixed(1);
    }

    matched.push({
      ean,
      nazov: ours.name,
      kategoria: ours.category,
      dodavatel: ours.source,
      nasaCena: ours.price,
      nakupnaCenaBezDph: ours.purchasePrice,
      floorCena: floorPrice,
      marzaTerazPct: currentMarginPct,
      marzaPoUpravePct: newMarginPct,
      heurekaNajnizsia: heurekaMin,
      heurekaDruhaNajnizsia: heurekaMin2,
      heurekaNajvyssia: num(row['Najvyššia cena']),
      pocetPredajcov: sellerCount,
      odhadovanaPozicia: estimatedPosition,
      rozdielEur: diff,
      rozdielPct: diffPct,
      akcia: action,
      odporucanaCena: suggestedPrice,
      surovyCiel: rawTarget,
      poznamka: note,
      nemozemeVyhrat: cantCompete,
      heurekaUrl: row['Heureka URL'] || '',
      competitorPrices: competition.prices.join(';'),
      completeRanking: competition.complete ? '1' : '0',
      reportPrice: num(row['Vaša cena']),
      competitionValid: competition.valid ? '1' : '0',
    });
  }

  matched.sort((a, b) => (b.rozdielEur || -Infinity) - (a.rozdielEur || -Infinity));

  const header = ['EAN', 'Nazov', 'Kategoria', 'Dodavatel', 'NasaCenaEUR', 'NakupnaCenaBezDphEUR', 'FloorCenaEUR',
    'MarzaTerazPct', 'MarzaPoUpravePct', 'HeurekaNajnizsiaEUR', 'HeurekaDruhaNajnizsiaEUR', 'HeurekaNajvyssiaEUR',
    'PocetPredajcov', 'OdhadovanaPozicia', 'RozdielEUR', 'RozdielPct', 'Akcia', 'OdporucanaCenaEUR', 'SurovyCielEUR', 'Poznamka', 'NemozemeVyhrat', 'HeurekaURL', 'KonkurencneCeny', 'UplnyRebricek', 'NasaCenaVReporteEUR', 'KonkurenciaPlatna'];
  const lines = [header.join(',')];
  for (const m of matched) {
    lines.push([
      m.ean, `"${m.nazov.replace(/"/g, '""')}"`, `"${m.kategoria.replace(/"/g, '""')}"`, m.dodavatel,
      m.nasaCena, m.nakupnaCenaBezDph ?? '', m.floorCena ?? '',
      m.marzaTerazPct ?? '', m.marzaPoUpravePct ?? '',
      m.heurekaNajnizsia ?? '', m.heurekaDruhaNajnizsia ?? '', m.heurekaNajvyssia ?? '', m.pocetPredajcov ?? '',
      m.odhadovanaPozicia ?? '', m.rozdielEur ?? '', m.rozdielPct ?? '', m.akcia, m.odporucanaCena ?? '', m.surovyCiel ?? '',
      `"${m.poznamka.replace(/"/g, '""')}"`, m.nemozemeVyhrat ? '1' : '0', m.heurekaUrl, m.competitorPrices, m.completeRanking, m.reportPrice ?? '', m.competitionValid,
    ].join(','));
  }
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, lines.join('\n') + '\n', 'utf-8');

  const drahsi = matched.filter((m) => m.rozdielEur > 0).length;
  const lacnejsi = matched.filter((m) => m.rozdielEur < 0).length;
  const rovnako = matched.filter((m) => m.rozdielEur === 0).length;
  const zvysit = matched.filter((m) => m.akcia === 'ZVÝŠIŤ').length;
  const znizit = matched.filter((m) => m.akcia === 'ZNÍŽIŤ').length;
  const floorLimited = matched.filter((m) => m.akcia === 'ZNÍŽIŤ' && m.poznamka.includes('floor')).length;

  console.log('\n=== Súhrn ===');
  console.log(`Riadkov v reporte bez EAN: ${noEan}`);
  console.log(`Riadkov s EAN, ale bez zhody v našich produktoch: ${noMatch}`);
  console.log(`Spárovaných produktov: ${matched.length}`);
  console.log(`  - sme drahší než najlacnejší: ${drahsi}`);
  console.log(`  - sme lacnejší než najlacnejší iný predajca: ${lacnejsi}`);
  console.log(`  - rovnaká cena ako najlacnejší: ${rovnako}`);
  console.log(`  - bez nákupnej ceny (nedá sa navrhnúť cena): ${noPurchasePrice}`);
  console.log(`Návrh: zvýšiť cenu u ${zvysit}, znížiť u ${znizit} produktov`);
  console.log(`  - z toho obmedzené min. maržou (${MIN_MARGIN_PCT}%): ${floorLimited}`);
  console.log(`\nReport uložený do: ${outPath}`);
}

if (require.main === module) main();
module.exports = { loadOurProducts };

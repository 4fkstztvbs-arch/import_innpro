// Compares our current prices (from output/*.xml, i.e. what the next Automatický import would
// send) against a Heureka.sk "sortiment report" CSV export (Marketing -> Heureka -> Sortiment
// report in the Heureka admin; columns include EAN, Vaša cena, Najnižšia cena, PriceMin2..10,
// PriceMax10..2, Najvyššia cena, E-shopov predávajúcich produkt).
//
// The report's own "Item ID" column is Shoptet's internal product ID from whichever store the
// report was pulled from — it does NOT match our supplier CODE and isn't portable across a
// store rebuild, so it's ignored entirely. EAN is the only reliable join key between the report
// and our own product data, and it survives a full re-import / new store since it identifies the
// physical product, not a store-specific record.
//
// Usage: node compare-heureka-prices.js <heureka-report.csv> [--out=path.csv] [--xml=dir]
// Reads product data from all *.xml files in output/ by default (override with --xml=dir).

const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

function xmlUnescape(s) {
  return String(s || '')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

function loadOurProducts(xmlPaths) {
  // EAN -> { name, price, category, code, source }
  const byEan = new Map();
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
      if (byEan.has(ean)) { dupes++; continue; }
      byEan.set(ean, { name, price, category, code, source: path.basename(xmlPath) });
    }
  }
  return { byEan, dupes };
}

function num(s) {
  const v = parseFloat(String(s || '').replace(',', '.'));
  return Number.isFinite(v) ? v : null;
}

function main() {
  const args = process.argv.slice(2);
  const csvPath = args.find((a) => !a.startsWith('--'));
  if (!csvPath) {
    console.error('Usage: node compare-heureka-prices.js <heureka-report.csv> [--out=path.csv] [--xml=dir]');
    process.exit(1);
  }
  const outArg = args.find((a) => a.startsWith('--out='));
  const outPath = outArg ? outArg.slice('--out='.length) : path.join(__dirname, '..', 'reports', `heureka-price-compare-${new Date().toISOString().slice(0, 10)}.csv`);
  const xmlArg = args.find((a) => a.startsWith('--xml='));
  const outputDir = xmlArg ? xmlArg.slice('--xml='.length) : path.join(__dirname, '..', 'output');
  const xmlPaths = fs.readdirSync(outputDir)
    .filter((f) => f.endsWith('.xml'))
    .map((f) => path.join(outputDir, f));

  console.log(`Loading our products from: ${xmlPaths.join(', ')}`);
  const { byEan, dupes } = loadOurProducts(xmlPaths);
  console.log(`  -> ${byEan.size} of our products have an EAN${dupes ? ` (${dupes} duplicate EANs skipped)` : ''}`);

  console.log(`Reading Heureka report: ${csvPath}`);
  const csvRaw = fs.readFileSync(csvPath, 'utf-8');
  // Heureka's export has a trailing comma on every data row (one extra empty field past the
  // last header column) - tolerate the mismatched column count instead of erroring on it.
  const rows = parse(csvRaw, { columns: true, skip_empty_lines: true, relax_column_count: true });
  console.log(`  -> ${rows.length} rows in report`);

  const PRICE_LADDER_COLS = [
    'Najnižšia cena', 'PriceMin2', 'PriceMin3', 'PriceMin4', 'PriceMin5', 'PriceMin6', 'PriceMin7', 'PriceMin8', 'PriceMin9', 'PriceMin10',
    'PriceMax10', 'PriceMax9', 'PriceMax8', 'PriceMax7', 'PriceMax6', 'PriceMax5', 'PriceMax4', 'PriceMax3', 'PriceMax2', 'Najvyššia cena',
  ];

  const matched = [];
  let noEan = 0;
  let noMatch = 0;

  for (const row of rows) {
    const ean = String(row.EAN || '').trim();
    if (!ean) { noEan++; continue; }
    const ours = byEan.get(ean);
    if (!ours) { noMatch++; continue; }

    const ladder = PRICE_LADDER_COLS.map((c) => num(row[c])).filter((v) => v !== null);
    const heurekaMin = ladder.length ? Math.min(...ladder) : null;
    const sellerCount = num(row['E-shopov predávajúcich produkt']);

    let estimatedPosition = null;
    if (heurekaMin !== null && ours.price !== null) {
      estimatedPosition = ladder.filter((v) => v < ours.price).length + 1;
    }

    const diff = heurekaMin !== null ? +(ours.price - heurekaMin).toFixed(2) : null;
    const diffPct = heurekaMin ? +((diff / heurekaMin) * 100).toFixed(1) : null;

    matched.push({
      ean,
      nazov: ours.name,
      kategoria: ours.category,
      dodavatel: ours.source,
      nasaCena: ours.price,
      heurekaNajnizsia: heurekaMin,
      heurekaNajvyssia: num(row['Najvyššia cena']),
      pocetPredajcov: sellerCount,
      odhadovanaPozicia: estimatedPosition,
      rozdielEur: diff,
      rozdielPct: diffPct,
      heurekaUrl: row['Heureka URL'] || '',
    });
  }

  matched.sort((a, b) => (b.rozdielEur || -Infinity) - (a.rozdielEur || -Infinity));

  const header = ['EAN', 'Nazov', 'Kategoria', 'Dodavatel', 'NasaCenaEUR', 'HeurekaNajnizsiaEUR',
    'HeurekaNajvyssiaEUR', 'PocetPredajcov', 'OdhadovanaPozicia', 'RozdielEUR', 'RozdielPct', 'HeurekaURL'];
  const lines = [header.join(',')];
  for (const m of matched) {
    lines.push([
      m.ean, `"${m.nazov.replace(/"/g, '""')}"`, `"${m.kategoria.replace(/"/g, '""')}"`, m.dodavatel,
      m.nasaCena, m.heurekaNajnizsia ?? '', m.heurekaNajvyssia ?? '', m.pocetPredajcov ?? '',
      m.odhadovanaPozicia ?? '', m.rozdielEur ?? '', m.rozdielPct ?? '', m.heurekaUrl,
    ].join(','));
  }
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, lines.join('\n') + '\n', 'utf-8');

  const drahsi = matched.filter((m) => m.rozdielEur > 0).length;
  const lacnejsi = matched.filter((m) => m.rozdielEur < 0).length;
  const rovnako = matched.filter((m) => m.rozdielEur === 0).length;

  console.log('\n=== Súhrn ===');
  console.log(`Riadkov v reporte bez EAN: ${noEan}`);
  console.log(`Riadkov s EAN, ale bez zhody v našich produktoch: ${noMatch}`);
  console.log(`Spárovaných produktov: ${matched.length}`);
  console.log(`  - sme drahší než najlacnejší: ${drahsi}`);
  console.log(`  - sme lacnejší/najlacnejší: ${lacnejsi}`);
  console.log(`  - rovnaká cena ako najlacnejší: ${rovnako}`);
  console.log(`\nReport uložený do: ${outPath}`);
}

main();

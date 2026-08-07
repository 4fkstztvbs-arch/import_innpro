// Compares our current prices (from output/*.xml, i.e. what the next Automatický import would
// send) against a Heureka.sk "sortiment report" CSV export (Marketing -> Heureka -> Sortiment
// report in the Heureka admin; columns include EAN, Vaša cena, Najnižšia cena, PriceMin2..10,
// PriceMax10..2, Najvyššia cena, E-shopov predávajúcich produkt), and suggests a new price for
// each matched product using the following rule:
//
//   - We're currently the cheapest (or tied) -> too cheap, leaving margin on the table. Raise
//     to match the second-cheapest competitor (PriceMin2) - stay very competitive, but stop
//     giving away the gap to whoever is currently #2.
//   - We're not the cheapest -> undercut the current cheapest competitor by one rounding step,
//     to become the new #1 - but never below a minimum-margin safety floor on our purchase price
//     (excl. VAT, --min-margin, default 5%): floor = purchasePriceExclVat * (1+margin) * (1+VAT).
//     If matching/undercutting the competitor would break the floor, price only goes down to the
//     floor (not all the way to the competitor) and the row is flagged.
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
const { roundPrice, roundPriceUp, roundPriceDown } = require('./round-price');

function xmlUnescape(s) {
  return String(s || '')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

function loadOurProducts(xmlPaths) {
  // EAN -> { name, price, category, code, source, purchasePrice, purchaseVat }
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
      // PURCHASE_PRICE is always excl. VAT in our XML (PURCHASE_PRICE_INCL_VAT is hardcoded 0) -
      // see reports/prehlad-importov.md section 3.
      const purchasePriceRaw = (it.match(/<PURCHASE_PRICE>(.*?)<\/PURCHASE_PRICE>/) || [])[1];
      const purchasePrice = purchasePriceRaw ? parseFloat(purchasePriceRaw) : null;
      const purchaseVatRaw = (it.match(/<PURCHASE_VAT>(.*?)<\/PURCHASE_VAT>/) || [])[1];
      const purchaseVat = purchaseVatRaw ? parseFloat(purchaseVatRaw) : 23;
      if (byEan.has(ean)) { dupes++; continue; }
      byEan.set(ean, { name, price, category, code, source: path.basename(xmlPath), purchasePrice, purchaseVat });
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
    console.error('Usage: node compare-heureka-prices.js <heureka-report.csv> [--out=path.csv] [--xml=dir] [--min-margin=5]');
    process.exit(1);
  }
  const outArg = args.find((a) => a.startsWith('--out='));
  const outPath = outArg ? outArg.slice('--out='.length) : path.join(__dirname, '..', 'reports', `heureka-price-compare-${new Date().toISOString().slice(0, 10)}.csv`);
  const xmlArg = args.find((a) => a.startsWith('--xml='));
  const outputDir = xmlArg ? xmlArg.slice('--xml='.length) : path.join(__dirname, '..', 'output');
  const marginArg = args.find((a) => a.startsWith('--min-margin='));
  const MIN_MARGIN_PCT = marginArg ? parseFloat(marginArg.slice('--min-margin='.length)) : 5;
  const xmlPaths = fs.readdirSync(outputDir)
    .filter((f) => f.endsWith('.xml'))
    .map((f) => path.join(outputDir, f));

  console.log(`Loading our products from: ${xmlPaths.join(', ')}`);
  const { byEan, dupes } = loadOurProducts(xmlPaths);
  console.log(`  -> ${byEan.size} of our products have an EAN${dupes ? ` (${dupes} duplicate EANs skipped)` : ''}`);
  console.log(`Minimum margin safety floor: ${MIN_MARGIN_PCT}%`);

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
  let noPurchasePrice = 0;

  for (const row of rows) {
    const ean = String(row.EAN || '').trim();
    if (!ean) { noEan++; continue; }
    const ours = byEan.get(ean);
    if (!ours) { noMatch++; continue; }

    const ladderAll = PRICE_LADDER_COLS.map((c) => num(row[c])).filter((v) => v !== null);
    const ladderSorted = [...ladderAll].sort((a, b) => a - b);
    const heurekaMin = ladderSorted.length ? ladderSorted[0] : null;
    const heurekaMin2 = ladderSorted.length > 1 ? ladderSorted[1] : null;
    const sellerCount = num(row['E-shopov predávajúcich produkt']);

    let estimatedPosition = null;
    if (heurekaMin !== null && ours.price !== null) {
      estimatedPosition = ladderAll.filter((v) => v < ours.price).length + 1;
    }

    const diff = heurekaMin !== null ? +(ours.price - heurekaMin).toFixed(2) : null;
    const diffPct = heurekaMin ? +((diff / heurekaMin) * 100).toFixed(1) : null;

    // --- price suggestion ---
    let floorPrice = null;
    if (ours.purchasePrice) {
      floorPrice = roundPriceUp(ours.purchasePrice * (1 + MIN_MARGIN_PCT / 100) * (1 + ours.purchaseVat / 100));
    } else {
      noPurchasePrice++;
    }

    let action = 'BEZ ZMENY';
    let suggestedPrice = ours.price;
    let note = '';

    if (heurekaMin === null) {
      note = 'žiadna konkurencia v rebríčku';
    } else if (!floorPrice) {
      note = 'chýba nákupná cena, nedá sa overiť min. marža';
    } else if (ours.price <= heurekaMin) {
      // We're the cheapest (or tied) - raise toward the 2nd-cheapest competitor.
      if (heurekaMin2 !== null && heurekaMin2 > ours.price) {
        suggestedPrice = roundPrice(Math.max(floorPrice, heurekaMin2));
        if (suggestedPrice > ours.price) {
          action = 'ZVÝŠIŤ';
          note = floorPrice > heurekaMin2
            ? `min. marža (${MIN_MARGIN_PCT}%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho`
            : 'dobehnutie 2. najlacnejšieho konkurenta';
        }
      } else {
        note = 'sme najlacnejší, ale nie je známy 2. najlacnejší konkurent';
      }
    } else {
      // We're not the cheapest - undercut the current cheapest, floor permitting.
      const undercut = roundPriceDown(heurekaMin - 0.01);
      suggestedPrice = roundPrice(Math.max(floorPrice, undercut));
      if (suggestedPrice < ours.price) {
        action = 'ZNÍŽIŤ';
        note = suggestedPrice >= heurekaMin
          ? `floor (min. marža ${MIN_MARGIN_PCT}%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší`
          : 'stávame sa najlacnejší';
      }
    }

    matched.push({
      ean,
      nazov: ours.name,
      kategoria: ours.category,
      dodavatel: ours.source,
      nasaCena: ours.price,
      nakupnaCenaBezDph: ours.purchasePrice,
      floorCena: floorPrice,
      heurekaNajnizsia: heurekaMin,
      heurekaDruhaNajnizsia: heurekaMin2,
      heurekaNajvyssia: num(row['Najvyššia cena']),
      pocetPredajcov: sellerCount,
      odhadovanaPozicia: estimatedPosition,
      rozdielEur: diff,
      rozdielPct: diffPct,
      akcia: action,
      odporucanaCena: suggestedPrice,
      poznamka: note,
      heurekaUrl: row['Heureka URL'] || '',
    });
  }

  matched.sort((a, b) => (b.rozdielEur || -Infinity) - (a.rozdielEur || -Infinity));

  const header = ['EAN', 'Nazov', 'Kategoria', 'Dodavatel', 'NasaCenaEUR', 'NakupnaCenaBezDphEUR', 'FloorCenaEUR',
    'HeurekaNajnizsiaEUR', 'HeurekaDruhaNajnizsiaEUR', 'HeurekaNajvyssiaEUR', 'PocetPredajcov', 'OdhadovanaPozicia',
    'RozdielEUR', 'RozdielPct', 'Akcia', 'OdporucanaCenaEUR', 'Poznamka', 'HeurekaURL'];
  const lines = [header.join(',')];
  for (const m of matched) {
    lines.push([
      m.ean, `"${m.nazov.replace(/"/g, '""')}"`, `"${m.kategoria.replace(/"/g, '""')}"`, m.dodavatel,
      m.nasaCena, m.nakupnaCenaBezDph ?? '', m.floorCena ?? '',
      m.heurekaNajnizsia ?? '', m.heurekaDruhaNajnizsia ?? '', m.heurekaNajvyssia ?? '', m.pocetPredajcov ?? '',
      m.odhadovanaPozicia ?? '', m.rozdielEur ?? '', m.rozdielPct ?? '', m.akcia, m.odporucanaCena ?? '',
      `"${m.poznamka.replace(/"/g, '""')}"`, m.heurekaUrl,
    ].join(','));
  }
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, lines.join('\n') + '\n', 'utf-8');

  const drahsi = matched.filter((m) => m.rozdielEur > 0).length;
  const lacnejsi = matched.filter((m) => m.rozdielEur < 0).length;
  const rovnako = matched.filter((m) => m.rozdielEur === 0).length;
  const zvysit = matched.filter((m) => m.akcia === 'ZVÝŠIŤ').length;
  const znizit = matched.filter((m) => m.akcia === 'ZNÍŽIŤ').length;
  const floorLimited = matched.filter((m) => m.poznamka.includes('floor')).length;

  console.log('\n=== Súhrn ===');
  console.log(`Riadkov v reporte bez EAN: ${noEan}`);
  console.log(`Riadkov s EAN, ale bez zhody v našich produktoch: ${noMatch}`);
  console.log(`Spárovaných produktov: ${matched.length}`);
  console.log(`  - sme drahší než najlacnejší: ${drahsi}`);
  console.log(`  - sme lacnejší/najlacnejší: ${lacnejsi}`);
  console.log(`  - rovnaká cena ako najlacnejší: ${rovnako}`);
  console.log(`  - bez nákupnej ceny (nedá sa navrhnúť cena): ${noPurchasePrice}`);
  console.log(`Návrh: zvýšiť cenu u ${zvysit}, znížiť u ${znizit} produktov`);
  console.log(`  - z toho obmedzené min. maržou (${MIN_MARGIN_PCT}%): ${floorLimited}`);
  console.log(`\nReport uložený do: ${outPath}`);
}

main();

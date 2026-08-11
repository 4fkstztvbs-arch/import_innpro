// Zoznam kategórií podľa priemernej marže — pomôcka na rozhodnutie, ktoré kategórie vypnúť
// z Heureka feedu (alebo im dať nízky CPC strop), aby CPC prekliky pri nízkomaržovom tovare
// zbytočne nežrali kredit. Nerieši Heureka Marketplace/Košík (tam existuje per-produktový
// prepínač priamo v Shoptet administrácii) — toto je pre bežný porovnávací CPC feed, kde
// jediná páka je kategória (Shoptet: "zahrnúť do Heureka feedu") a max. CPC v Heureka administrácii.
//
// Marža = (PRICE_VAT bez DPH - PURCHASE_PRICE bez DPH) / PURCHASE_PRICE bez DPH, agregovaná
// na úrovni najvyššej (top-level, resp. druhej úrovne) kategórie z <CATEGORIES><CATEGORY> cesty.
//
// Usage: node generate-heureka-category-risk.js

const fs = require('fs');
const path = require('path');

const FILES = ['atos', 'innpro', 'kb', 'monacor', 'solight', 'wiim'].map((s) => ({
  supplier: s, path: path.join(__dirname, '..', 'output', `${s}.xml`),
}));

const OUT_CSV = path.join(__dirname, '..', 'reports', 'heureka-kategorie-marza.csv');
const OUT_MD = path.join(__dirname, '..', 'reports', 'heureka-kategorie-marza.md');

const CLICK_FREE_THRESHOLD = 0.66; // EUR — pod touto cenou Heureka prekliky vôbec neúčtuje

function parseItems(xml) {
  return xml.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g) || [];
}

function firstTag(block, tag) {
  const m = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return m ? m[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim() : null;
}

function topCategory(block) {
  // prva <CATEGORY> je zvycajne najhlbsia cesta (napr. "A > B > C"); zoberieme prvy segment
  const m = block.match(/<CATEGORY>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/CATEGORY>/);
  if (!m) return '(bez kategórie)';
  const full = m[1].trim();
  return full.split('>')[0].trim();
}

function main() {
  const stats = new Map(); // top category -> { count, sumMargin, marginCount, sumPrice, underThreshold, supplierSet }

  for (const { supplier, path: p } of FILES) {
    if (!fs.existsSync(p)) continue;
    const xml = fs.readFileSync(p, 'utf-8');
    const items = parseItems(xml);
    for (const it of items) {
      const cat = topCategory(it);
      const priceStr = firstTag(it, 'PRICE_VAT');
      const purchStr = firstTag(it, 'PURCHASE_PRICE');
      const purchVatStr = firstTag(it, 'PURCHASE_VAT');
      const inclFlag = firstTag(it, 'PURCHASE_PRICE_INCL_VAT');
      const price = priceStr ? parseFloat(priceStr) : null;
      const purch = purchStr ? parseFloat(purchStr) : null;
      const purchVat = purchVatStr ? parseFloat(purchVatStr) : 23;

      if (!stats.has(cat)) stats.set(cat, { count: 0, sumMargin: 0, sumProfit: 0, marginCount: 0, sumPrice: 0, underThreshold: 0, suppliers: new Set() });
      const s = stats.get(cat);
      s.count++;
      s.suppliers.add(supplier);
      if (price != null) {
        s.sumPrice += price;
        if (price < CLICK_FREE_THRESHOLD) s.underThreshold++;
      }
      if (price != null && purch != null && purch > 0) {
        const purchExcl = inclFlag === '1' ? purch / (1 + purchVat / 100) : purch;
        // predpoklad 23% predajne DPH (rovnake ako pouzivaju vsetky transform-*.js pre SK predaj)
        const priceExcl = price / 1.23;
        const margin = ((priceExcl - purchExcl) / purchExcl) * 100;
        const profitEur = priceExcl - purchExcl;
        if (isFinite(margin)) {
          s.sumMargin += margin;
          s.sumProfit += profitEur;
          s.marginCount++;
        }
      }
    }
  }

  const rows = [...stats.entries()].map(([cat, s]) => ({
    cat,
    count: s.count,
    avgMargin: s.marginCount ? s.sumMargin / s.marginCount : null,
    avgProfitEur: s.marginCount ? s.sumProfit / s.marginCount : null,
    marginCoverage: s.marginCount,
    avgPrice: s.count ? s.sumPrice / s.count : 0,
    underThresholdPct: s.count ? (s.underThreshold / s.count) * 100 : 0,
    suppliers: [...s.suppliers].join(', '),
  }));

  rows.sort((a, b) => (a.avgProfitEur ?? 9999) - (b.avgProfitEur ?? 9999));

  const csvHeader = ['kategoria', 'pocet_produktov', 'priemerny_zisk_eur', 'priemerna_marza_pct', 'pokrytie_marze', 'priemerna_cena', 'podiel_pod_066e_pct', 'dodavatelia'];
  const csvLines = [csvHeader.join(';')];
  for (const r of rows) {
    csvLines.push([
      r.cat, r.count,
      r.avgProfitEur != null ? r.avgProfitEur.toFixed(2) : '',
      r.avgMargin != null ? r.avgMargin.toFixed(1) : '',
      r.marginCoverage, r.avgPrice.toFixed(2), r.underThresholdPct.toFixed(0), r.suppliers,
    ].join(';'));
  }
  fs.writeFileSync(OUT_CSV, csvLines.join('\n') + '\n', 'utf-8');

  // Riziko = nízky absolútny zisk na kus (to skutočne "zožerie" jeden CPC klik), nie len percento
  // marže — vysoká % marža pri lacnom produkte môže v eurách znamenať menej než nízka % marža pri
  // drahom produkte. Vynechávame kategórie s vysokým podielom produktov pod 0,66 € (tie sa
  // beztak neúčtujú za klik, takže riziko je nižšie, aj keď zisk na kus vyzerá nízko).
  const LOW_PROFIT_THRESHOLD_EUR = 5;
  const risky = rows.filter((r) => r.avgProfitEur != null && r.avgProfitEur < LOW_PROFIT_THRESHOLD_EUR && r.marginCoverage >= 5);
  const safe = rows.filter((r) => r.avgProfitEur != null && r.avgProfitEur >= LOW_PROFIT_THRESHOLD_EUR);
  const noData = rows.filter((r) => r.avgProfitEur == null || r.marginCoverage < 5);

  const md = [];
  md.push('# Kategórie podľa marže — návrh, ktoré vypnúť z Heureka CPC feedu');
  md.push('');
  md.push(`Vygenerované: ${new Date().toISOString()}`);
  md.push('');
  md.push('Marža počítaná z aktuálnych `output/*.xml` (predajná cena bez DPH vs. nákupná cena bez DPH), agregovaná podľa najvrchnejšej kategórie. Produkty pod 0,66 € nemajú CPC prekliky spoplatnené vôbec — pri kategóriách s vysokým podielom takýchto produktov je riziko nižšie, aj keď marža vychádza nízko.');
  md.push('');
  md.push(`## Odporúčam zvážiť vypnutie / nízky CPC strop (priemerný zisk na kus < ${LOW_PROFIT_THRESHOLD_EUR} €)`);
  md.push('');
  md.push('Zoradené podľa najnižšieho zisku na kus — to je suma, ktorú vám môže jeden neúspešný CPC klik reálne "zjesť".');
  md.push('');
  md.push('| Kategória | Produktov | Zisk/ks | Marža | Priemerná cena | Podiel pod 0,66 € |');
  md.push('|---|---:|---:|---:|---:|---:|');
  for (const r of risky) {
    md.push(`| ${r.cat} | ${r.count} | ${r.avgProfitEur.toFixed(2)} € | ${r.avgMargin.toFixed(1)} % | ${r.avgPrice.toFixed(2)} € | ${r.underThresholdPct.toFixed(0)} % |`);
  }
  md.push('');
  md.push(`## Bezpečnejšie kategórie (zisk na kus ≥ ${LOW_PROFIT_THRESHOLD_EUR} €) — znesú CPC klik lepšie`);
  md.push('');
  md.push('| Kategória | Produktov | Zisk/ks | Marža |');
  md.push('|---|---:|---:|---:|');
  for (const r of safe.slice(0, 25)) {
    md.push(`| ${r.cat} | ${r.count} | ${r.avgProfitEur.toFixed(2)} € | ${r.avgMargin.toFixed(1)} % |`);
  }
  if (safe.length > 25) md.push(`| … a ďalších ${safe.length - 25} kategórií | | | |`);
  md.push('');
  if (noData.length) {
    md.push(`## Bez dostatočných dát o marži (${noData.length} kategórií)`);
    md.push('');
    md.push('Chýba nákupná cena pri dosť produktoch na spoľahlivý odhad — netreba brať priemer vážne, skontrolovať ručne ak sú objemovo významné.');
    md.push('');
    md.push('| Kategória | Produktov | Pokrytie marže |');
    md.push('|---|---:|---:|');
    for (const r of noData.slice(0, 15)) {
      md.push(`| ${r.cat} | ${r.count} | ${r.marginCoverage} |`);
    }
  }
  md.push('');
  md.push('## Ako to použiť');
  md.push('');
  md.push('1. V Shoptet administrácii (Marketing → Feedy → Heureka, alebo nastavenia kategórie) vypnúť "zahrnúť do Heureka feedu" pri kategóriách z prvej tabuľky — najmä tých s vysokým počtom produktov a nízkym podielom pod 0,66 €.');
  md.push('2. Pri kategóriách, ktoré chcete nechať zapnuté, ale opatrne, nastaviť v Heureka administrácii nízky max. CPC namiesto úplného vypnutia.');
  md.push('3. Plný zoznam všetkých kategórií so všetkými číslami je v `reports/heureka-kategorie-marza.csv`.');

  fs.writeFileSync(OUT_MD, md.join('\n') + '\n', 'utf-8');

  console.log(`Kategórií spolu: ${rows.length}`);
  console.log(`Rizikové (nízka marža): ${risky.length}`);
  console.log(`Bezpečné: ${safe.length}`);
  console.log(`Bez dát: ${noData.length}`);
  console.log('CSV:', OUT_CSV);
  console.log('Report:', OUT_MD);
}

main();

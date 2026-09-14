// Tovar sa nesmie predávať pod nákupnú cenu. Kde k tomu dôjde, produkt sa do e-shopu nepustí.
//
// PREČO SA SKRÝVA A NIE VYHADZUJE Z FEEDU: Shoptet produkt, ktorý sa vo feede prestane
// objavovať, sám nezmaže ani neskryje — ostal by v e-shope s poslednou naimportovanou cenou,
// teda presne s tou stratovou. Vyhodenie z feedu by cieľ minulo. Produkt sa preto posiela ďalej,
// ale s <VISIBLE>0</VISIBLE> a <VISIBILITY>hidden</VISIBILITY>, takže import ho v e-shope
// aktívne stiahne. Keď dodávateľ cenu opraví, skript ho prestane skrývať sám od seba.
//
// Porovnáva sa predajná cena BEZ DPH proti nákupnej cene bez DPH — <PRICE_VAT> je s DPH,
// <PURCHASE_PRICE> bez nej, takže bez prepočtu by porovnanie vychádzalo nezmyselne v náš prospech.
//
// Beží ako jeden z POSLEDNÝCH krokov, až za apply-price-targets.js: aj konkurenčná cena z Heureky
// môže cenu stlačiť (nemala by — má maržové dno —, ale poistka má stáť za všetkými, ktorí cenu
// menia, nie pred nimi).
//
// Odkiaľ sa také produkty berú: ATOS predáva za svoju odporúčanú cenu <PRICE>, ktorá vie byť pod
// jeho vlastnou nákupnou cenou (190 z 194 prípadov pri zavedení 14. 9. 2026); zvyšok sú drobné
// zaokrúhľovacie prepady u Penty a Solightu, marže rádovo −1 %.
//
// Usage: node scripts/hide-below-cost-products.js (prepisuje každý output/*.xml na mieste)
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'output');
const REPORTS_DIR = path.join(ROOT, 'reports');

const tag = (item, t) => {
  const m = item.match(new RegExp(`<${t}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${t}>`));
  return m ? m[1].trim() : null;
};
const num = (v) => { const n = parseFloat(v); return Number.isFinite(n) ? n : null; };

let spolu = 0;
const podlaDodavatela = [];

for (const file of fs.readdirSync(OUT_DIR).filter((f) => f.endsWith('.xml'))) {
  const filePath = path.join(OUT_DIR, file);
  const xml = fs.readFileSync(filePath, 'utf-8');
  const skryte = [];

  const out = xml.replace(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g, (item) => {
    const cenaSDph = num(tag(item, 'PRICE_VAT'));
    const nakup = num(tag(item, 'PURCHASE_PRICE'));
    const dph = num(tag(item, 'PURCHASE_VAT'));
    // Bez nákupnej ceny sa stratovosť nedá posúdiť (MONACOR, WiiM ju neposielajú) — tam sa
    // nezasahuje. Nulová či záporná nákupná cena je pokazený údaj, nie zisk; tiež sa ignoruje.
    if (cenaSDph === null || nakup === null || dph === null || nakup <= 0 || cenaSDph <= 0) return item;
    const cenaBezDph = cenaSDph / (1 + dph / 100);
    if (cenaBezDph >= nakup) return item;

    skryte.push({
      code: tag(item, 'CODE') || '',
      name: (tag(item, 'PRODUCTNAME') || tag(item, 'NAME') || '').slice(0, 70),
      cena: cenaSDph, bezDph: cenaBezDph, nakup,
      marza: ((cenaBezDph - nakup) / nakup) * 100,
    });

    // Obe polia, rovnako ako hide-uncategorised-products.js — Shoptet berie <VISIBLE> 1/0 aj
    // <VISIBILITY> visible/hidden a nesmie sa stať, že si import vyberie to druhé.
    return item
      .replace(/<VISIBLE>[\s\S]*?<\/VISIBLE>/, '<VISIBLE>0</VISIBLE>')
      .replace(/<VISIBILITY>[\s\S]*?<\/VISIBILITY>/, '<VISIBILITY>hidden</VISIBILITY>');
  });

  if (out !== xml) fs.writeFileSync(filePath, out);
  if (skryte.length) {
    spolu += skryte.length;
    podlaDodavatela.push([file.replace('.xml', ''), skryte]);
  }
}

fs.mkdirSync(REPORTS_DIR, { recursive: true });
const r = ['# Produkty pod nákupnou cenou (skryté)', '',
  `Kontrola z ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC.`, ''];
if (!spolu) {
  r.push('Žiadne — žiadny produkt sa nepredáva pod nákupnú cenu.');
} else {
  r.push(`Týchto **${spolu}** produktov má predajnú cenu bez DPH nižšiu než nákupnú, takže by sme`,
    'na každom predanom kuse prerobili. Sú preto nastavené ako **skryté** a v e-shope sa',
    'nepredávajú. Keď dodávateľ cenu opraví, skript ich prestane skrývať sám od seba.', '');
  for (const [dod, s] of podlaDodavatela) {
    s.sort((a, b) => a.marza - b.marza);
    r.push(`## ${dod} — ${s.length} ks`, '',
      '| Kód | Produkt | Predaj s DPH | Predaj bez DPH | Nákup | Marža |',
      '|---|---|---:|---:|---:|---:|');
    for (const x of s) {
      r.push(`| \`${x.code}\` | ${x.name} | ${x.cena.toFixed(2)} € | ${x.bezDph.toFixed(2)} € `
        + `| ${x.nakup.toFixed(2)} € | ${x.marza.toFixed(1)} % |`);
    }
    r.push('');
  }
}
fs.writeFileSync(path.join(REPORTS_DIR, 'produkty-pod-nakupnou-cenou.md'), r.join('\n') + '\n');

for (const [dod, s] of podlaDodavatela) {
  console.log(`::warning::${dod}: ${s.length} produktov pod nákupnou cenou skrytých `
    + '— viď reports/produkty-pod-nakupnou-cenou.md');
}
console.log(`hide-below-cost-products: skrytých ${spolu} produktov`);

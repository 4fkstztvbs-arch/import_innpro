// Ranná kontrola feedov: hľadá kategórie, ktoré vygenerované feedy zapisujú do produktov, ale
// ktoré v našom strome neexistujú. Shoptet takú kategóriu pri importe ticho vytvorí – presne tak
// vznikali tie „zamiešané" kategórie, ktoré sme celým projektom odstraňovali.
//
// Prečo to samotný gate v resolve-category.js nestačí: `categoryRenamesByPath` je označený ako
// trusted a kontrolu proti known-categories.json úplne obchádza (aby sa dala cielene vytvoriť
// nová kategória), a transform-basys.js nemá gate vôbec. Keď teda dodávateľ pridá novú vetvu
// alebo sa mapping rozíde so stromom, produkty prejdú a Shoptet kategóriu vytvorí.
//
// Porovnáva sa proti data/known-categories.json, čo je snapshot reálneho stromu v Shoptete –
// kontrola preto funguje rovnako pred prepnutím na nový strom aj po ňom.
//
// Píše reports/kategorie-mimo-stromu.md a pri náleze skončí chybou, aby GitHub poslal upozornenie.
//
// Usage: node scripts/check-unknown-categories.js

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'output');
const KNOWN_PATH = path.join(ROOT, 'data', 'known-categories.json');
const REPORT_PATH = path.join(ROOT, 'reports', 'kategorie-mimo-stromu.md');
// Zoznam uz zaznamenanych kategorii mimo stromu. Sluzi ako zakladna ciara: report vypisuje vzdy
// vsetky, ale upozornenie sa poslu len na tie, ktore v nom NIE su - teda na nove, ktore vznikli
// az pridanim novych produktov. Po prepnuti na novy strom sa subor vyprazdni, aby sa zaciatocny
// stav nastavil nanovo.
const BASELINE_PATH = path.join(ROOT, 'data', 'kategorie-mimo-stromu-baseline.json');

function normalize(s) {
  return s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/\s+/g, ' ')
    .replace(/\s*>\s*/g, ' > ').trim();
}

const known = new Set(JSON.parse(fs.readFileSync(KNOWN_PATH, 'utf-8')).map(normalize));

// kategória -> { supplier -> { count, sample } }
const unknown = new Map();
const perSupplierTotal = new Map();

for (const file of fs.readdirSync(OUT_DIR).filter((f) => f.endsWith('.xml'))) {
  const supplier = file.replace('.xml', '');
  const xml = fs.readFileSync(path.join(OUT_DIR, file), 'utf-8');
  let total = 0;
  for (const item of xml.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g) || []) {
    total++;
    const nameM = item.match(/<PRODUCTNAME><!\[CDATA\[([\s\S]*?)\]\]><\/PRODUCTNAME>/)
      || item.match(/<NAME><!\[CDATA\[([\s\S]*?)\]\]><\/NAME>/);
    const productName = nameM ? nameM[1].trim() : '';
    for (const m of item.matchAll(/<CATEGORY><!\[CDATA\[([\s\S]*?)\]\]><\/CATEGORY>/g)) {
      const category = m[1].trim();
      if (!category || known.has(normalize(category))) continue;
      if (!unknown.has(category)) unknown.set(category, new Map());
      const bySupplier = unknown.get(category);
      if (!bySupplier.has(supplier)) bySupplier.set(supplier, { count: 0, sample: productName });
      bySupplier.get(supplier).count++;
    }
  }
  perSupplierTotal.set(supplier, total);
}

// Zoradiť podľa počtu produktov – to je aj poradie naliehavosti
const rows = [...unknown.entries()]
  .map(([category, bySupplier]) => ({
    category,
    bySupplier,
    total: [...bySupplier.values()].reduce((n, v) => n + v.count, 0),
  }))
  .sort((a, b) => b.total - a.total);

const baseline = new Set(
  (fs.existsSync(BASELINE_PATH) ? JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf-8')) : []).map(normalize)
);
const fresh = rows.filter((r) => !baseline.has(normalize(r.category)));

const lines = ['# Kategórie mimo nášho stromu', '',
  `Kontrola z ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC, ` +
  `proti \`data/known-categories.json\` (${known.size} kategórií).`, '',
  fresh.length
    ? `**${fresh.length} NOVÝCH** oproti základnej čiare (\`data/kategorie-mimo-stromu-baseline.json\`): `
      + fresh.map((r) => `\`${r.category}\``).join(', ')
    : 'Žiadna **nová** oproti základnej čiare — nižšie uvedené sú už známe.', ''];

if (!rows.length) {
  lines.push('Žiadne — všetky kategórie vo vygenerovaných feedoch existujú v našom strome.');
} else {
  const affected = rows.reduce((n, r) => n + r.total, 0);
  lines.push(`**${rows.length} kategórií, ktoré v strome neexistujú** (${affected} produktov).`,
    'Shoptet ich pri importe vytvorí – ak ich tam nechceme, treba buď opraviť',
    '`categoryRenamesByPath` príslušného dodávateľa, alebo kategóriu do stromu doplniť',
    'a obnoviť `data/known-categories.json`.', '',
    '| Kategória | Produktov | Dodávateľ | Príklad produktu |', '|---|---|---|---|');
  for (const r of rows.slice(0, 60)) {
    for (const [supplier, info] of [...r.bySupplier].sort((a, b) => b[1].count - a[1].count)) {
      lines.push(`| \`${r.category}\` | ${info.count} | ${supplier} | ${info.sample.slice(0, 60)} |`);
    }
  }
  if (rows.length > 60) lines.push('', `… a ďalších ${rows.length - 60} kategórií.`);
}

fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
fs.writeFileSync(REPORT_PATH, lines.join('\n') + '\n');

if (!fresh.length) {
  console.log(`Žiadna nová kategória mimo stromu (${rows.length} už známych).`);
  process.exit(0);
}
const top = fresh.slice(0, 5).map((r) => `${r.category} (${r.total} ks)`).join(', ');
console.log(`::error::Objavili sa NOVÉ kategórie mimo nášho stromu: ${fresh.length}. `
  + `Shoptet ich pri importe vytvorí. ${top}. `
  + 'Detaily v reports/kategorie-mimo-stromu.md');
process.exit(1);

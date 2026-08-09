// Buduje mapovaciu tabuľku (stará URL zo starého SHOPTEC eshopu) -> (nová Shoptet URL)
// pre 301 presmerovania pri prechode domény premiumstore.sk na Shoptet.
// Formát výstupu zodpovedá CSV importu do Shoptet "Marketing > Základné SEO >
// Presmerovanie adries (URL)": fromUrl;toUrl;automatic (relatívne URL, lomítko na konci).
//
// Párovanie ide cez EAN (jediný spoľahlivý spoločný kľúč medzi starým Heureka
// exportom a naším dodávateľským XML). Nová URL sa dopĺňa až vtedy, keď je
// k dispozícii zdroj skutočných URL z nového shopu (pozri POZNÁMKA nižšie) —
// bez toho skript len ukáže, ktoré produkty VIEME spárovať a ktoré nie.
//
// Usage: node generate-redirect-map.js [--old=cesta/k/heureka.xml] [--new-urls=cesta/k/mapa.json]
//   --old        cesta k stiahnutému starému Heureka XML (default: stiahne live z premiumstore.sk/export/heureka.xml)
//   --new-urls   voliteľná EAN -> nová URL mapa (JSON), ak už existuje (napr. z crawlu sitemap.xml po ostrej migrácii)

const fs = require('fs');
const path = require('path');
const https = require('https');

const OLD_HEUREKA_URL = 'https://premiumstore.sk/export/heureka.xml';
const NEW_SITE_ORIGIN = 'https://premiumstore.sk'; // po prepnutí domény na Shoptet

const args = Object.fromEntries(process.argv.slice(2).map((a) => {
  const m = a.match(/^--([^=]+)=(.*)$/);
  return m ? [m[1], m[2]] : [a.replace(/^--/, ''), true];
}));

const OUT_DIR = path.join(__dirname, '..', 'reports');
const OUT_CSV = path.join(OUT_DIR, 'redirect-map.csv');
const OUT_REPORT = path.join(OUT_DIR, 'redirect-map-summary.md');

const SUPPLIER_FILES = {
  atos: 'atos.xml',
  innpro: 'innpro.xml',
  kb: 'kb.xml',
  monacor: 'monacor.xml',
  solight: 'solight.xml',
};

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(res.headers.location));
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      let data = '';
      res.setEncoding('utf-8');
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extractOldUrlToEan(xml) {
  // старый Heureka export: <SHOPITEM><...><URL>...</URL>...<EAN>...</EAN>...</SHOPITEM>
  const map = new Map(); // ean -> {url, name}
  const itemRe = /<SHOPITEM>([\s\S]*?)<\/SHOPITEM>/g;
  let m;
  let total = 0;
  while ((m = itemRe.exec(xml))) {
    total++;
    const block = m[1];
    const urlM = block.match(/<URL>([\s\S]*?)<\/URL>/);
    const eanM = block.match(/<EAN>([\s\S]*?)<\/EAN>/);
    const nameM = block.match(/<PRODUCTNAME>([\s\S]*?)<\/PRODUCTNAME>/);
    if (!urlM || !eanM) continue;
    const ean = eanM[1].trim();
    if (!ean) continue;
    map.set(ean, { url: urlM[1].trim(), name: nameM ? nameM[1].trim() : '' });
  }
  return { map, total };
}

function extractNewCatalog(xmlPath, supplier) {
  const xml = fs.readFileSync(xmlPath, 'utf-8');
  const items = [];
  const itemRe = /<SHOPITEM>([\s\S]*?)<\/SHOPITEM>/g;
  let m;
  while ((m = itemRe.exec(xml))) {
    const block = m[1];
    const eanM = block.match(/<EAN>([\s\S]*?)<\/EAN>/);
    const nameM = block.match(/<NAME><!\[CDATA\[([\s\S]*?)\]\]><\/NAME>/);
    const codeM = block.match(/<CODE>([\s\S]*?)<\/CODE>/);
    if (!eanM) continue;
    const ean = eanM[1].trim();
    if (!ean) continue;
    items.push({ ean, name: nameM ? nameM[1].trim() : '', code: codeM ? codeM[1].trim() : '', supplier });
  }
  return items;
}

function csvEscape(s) {
  const str = String(s == null ? '' : s);
  return /[;"\n]/.test(str) ? '"' + str.replace(/"/g, '""') + '"' : str;
}

async function main() {
  console.log('Sťahujem starý Heureka export...');
  const oldXmlPath = args.old;
  const oldXml = oldXmlPath ? fs.readFileSync(oldXmlPath, 'utf-8') : await fetchUrl(OLD_HEUREKA_URL);
  const { map: oldByEan, total: oldTotal } = extractOldUrlToEan(oldXml);
  console.log(`Starý export: ${oldTotal} produktov, ${oldByEan.size} s EAN.`);

  let newUrlByEan = new Map();
  if (args['new-urls']) {
    const j = JSON.parse(fs.readFileSync(args['new-urls'], 'utf-8'));
    newUrlByEan = new Map(Object.entries(j));
    console.log(`Načítaná mapa reálnych nových URL: ${newUrlByEan.size} položiek.`);
  }

  const newCatalog = [];
  const bySupplierCount = {};
  for (const [supplier, file] of Object.entries(SUPPLIER_FILES)) {
    const p = path.join(__dirname, '..', 'output', file);
    if (!fs.existsSync(p)) { console.log(`(preskakujem ${supplier}, ${file} neexistuje)`); continue; }
    const items = extractNewCatalog(p, supplier);
    bySupplierCount[supplier] = items.length;
    newCatalog.push(...items);
  }
  console.log('Nový katalóg podľa dodávateľa (s EAN):', bySupplierCount);

  // dedupe EAN v novom katalógu (ak by sa rovnaký EAN objavil vo viacerých feedoch, berieme prvý)
  const newByEan = new Map();
  for (const item of newCatalog) {
    if (!newByEan.has(item.ean)) newByEan.set(item.ean, item);
  }

  const rows = []; // { ean, oldUrl, oldName, newSupplier, newName, newUrl, status }
  let matched = 0, discontinued = 0;
  for (const [ean, old] of oldByEan) {
    const nw = newByEan.get(ean);
    if (!nw) {
      discontinued++;
      rows.push({ ean, oldUrl: old.url, oldName: old.name, newSupplier: '', newName: '', newUrl: '', status: 'VYRADENY_Z_PONUKY' });
      continue;
    }
    matched++;
    const newUrl = newUrlByEan.get(ean) || '';
    rows.push({ ean, oldUrl: old.url, oldName: old.name, newSupplier: nw.supplier, newName: nw.name, newUrl, status: newUrl ? 'OK' : 'CAKA_NA_NOVU_URL' });
  }

  const newOnly = newCatalog.filter((i) => !oldByEan.has(i.ean));
  const newOnlyBySupplier = {};
  for (const i of newOnly) newOnlyBySupplier[i.supplier] = (newOnlyBySupplier[i.supplier] || 0) + 1;

  fs.mkdirSync(OUT_DIR, { recursive: true });

  // 1) plná diagnostická tabuľka (na kontrolu)
  const header = ['ean', 'stara_url', 'stary_nazov', 'novy_dodavatel', 'novy_nazov', 'nova_url', 'stav'];
  const csvLines = [header.join(';')];
  for (const r of rows) {
    csvLines.push([r.ean, r.oldUrl, r.oldName, r.newSupplier, r.newName, r.newUrl, r.status].map(csvEscape).join(';'));
  }
  fs.writeFileSync(OUT_CSV, csvLines.join('\n') + '\n', 'utf-8');

  // 2) Shoptet-ready import (len riadky, kde poznáme aj novú URL): fromUrl;toUrl;automatic
  const shoptetReadyPath = path.join(OUT_DIR, 'redirect-map-shoptet-import.csv');
  const ready = rows.filter((r) => r.status === 'OK');
  const shoptetLines = ready.map((r) => {
    const from = new URL(r.oldUrl).pathname.replace(/\/?$/, '/');
    const to = r.newUrl.replace(/\/?$/, '/');
    return [from, to, '0'].join(';');
  });
  fs.writeFileSync(shoptetReadyPath, shoptetLines.join('\n') + (shoptetLines.length ? '\n' : ''), 'utf-8');

  const summary = `# Mapovanie starých URL na nové (redirect plán)

Vygenerované: ${new Date().toISOString()}

## Vstupy
- Starý Heureka export (premiumstore.sk, platforma SHOPTEC): **${oldTotal}** produktov, **${oldByEan.size}** s EAN.
- Nový katalóg (output/*.xml, aktuálne dodávateľské feedy): **${newByEan.size}** unikátnych EAN spolu, podľa dodávateľa: ${JSON.stringify(bySupplierCount)}.

## Výsledok párovania (podľa EAN)
- **Spárované (produkt existuje v starom aj novom katalógu): ${matched}**
- **Vyradené z ponuky (boli v starom katalógu, už nie sú u žiadneho dodávateľa): ${discontinued}**
- **Nové produkty (v novom katalógu, v starom neboli — najmä InnPro, ktorého sme predtým nemali):** ${newOnly.length}, z toho podľa dodávateľa: ${JSON.stringify(newOnlyBySupplier)}

## Čo ešte chýba k finálnej redirect tabuľke
Shoptet negeneruje URL produktu na základe hodnoty v importnom XML — vytvára ju sám automaticky z názvu produktu. Preto v tomto behu **nemáme k dispozícii reálnu novú URL**, iba vieme, ktoré produkty (podľa EAN) sa majú na seba mapovať.
Riadky so stavom \`CAKA_NA_NOVU_URL\` v \`redirect-map.csv\` sú spárované, ale bez novej URL.

Dva spôsoby, ako doplniť reálne nové URL:
1. **Po spustení importov do produkčného Shoptetu** prejsť \`sitemap.xml\` nového shopu a z každej produktovej stránky vytiahnuť EAN (je v štruktúrovaných dátach stránky) → postaviť EAN → nová URL mapu → spustiť tento skript znova s \`--new-urls=mapa.json\`.
2. **Zapnúť Heureka feed aj na novom Shoptet shope** (Marketing → Feedy) — ten obsahuje EAN aj URL v rovnakom formáte ako starý export, čiže mapovanie pôjde rovnako ako teraz zo starého shopu.

Až po doplnení \`nova_url\` vznikne \`redirect-map-shoptet-import.csv\` pripravený na priamy import do **Marketing → Základné SEO → Presmerovanie adries (URL)** (formát fromUrl;toUrl;automatic, relatívne cesty s lomítkom na konci).

## Vyradené produkty (${discontinued})
Tieto EAN boli v starom katalógu, no žiadny dodávateľ ich už neposkytuje. Odporúčanie: buď 301 na najbližšiu kategóriu (ak majú stále dopyt/spätné odkazy), alebo nechať prirodzene padnúť na 404 — Google to pri vypredanom tovare toleruje. Zoznam je v \`redirect-map.csv\` so stavom \`VYRADENY_Z_PONUKY\`.
`;
  fs.writeFileSync(OUT_REPORT, summary, 'utf-8');

  console.log('---');
  console.log(`Spárované: ${matched}, vyradené: ${discontinued}, nové (najmä InnPro): ${newOnly.length}`);
  console.log('Výstup:', OUT_CSV);
  console.log('Shoptet-ready (zatiaľ prázdne, kým nemáme nové URL):', shoptetReadyPath);
  console.log('Report:', OUT_REPORT);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

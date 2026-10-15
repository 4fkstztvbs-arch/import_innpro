'use strict';
// Dohľadá oficiálne produktové fotky na bose.com (CDN assets.bosecreative.com) pre SKU z cenníka BaSys/Bose
// a uloží ich do data/basys-bose-official-images.json (objKod -> [url]). transform-basys.js ich použije
// len tam, kde produkt nemá fotky z BaSys cloudu ani vlastný override.
// Použitie: node scripts/fetch-bose-official-images.js [--dry]
const fs = require('fs');
const path = require('path');
const https = require('https');

const OUT = path.join(__dirname, '..', 'data', 'basys-bose-official-images.json');
const B = 'https://www.bose.com/p/';
// SKU -> [stránka produktu, hodnota dwvar farby alebo null]
const TARGETS = {
  'B 901067-2100': ['home-theater/bose-tv-speaker-2nd-gen/TVSPKR2-SOUNDBAR', null],
  'B 890101-0110': ['headphones/bose-quietcomfort-ultra-headphones-2nd-gen/QCUH2-HEADPHONEARN', 'CHERRY CHOCOLATE'],
  'B 890101-0120': ['headphones/bose-quietcomfort-ultra-headphones-2nd-gen/QCUH2-HEADPHONEARN', 'OLIVE GREEN'],
  'B 897806-0010': ['earbuds/bose-ultra-open-earbuds-2nd-gen/ULT2-HEADPHONEOPN', 'BLACK'],
  'B 897806-0020': ['earbuds/bose-ultra-open-earbuds-2nd-gen/ULT2-HEADPHONEOPN', 'WHITE'],
  'B 897806-0030': ['earbuds/bose-ultra-open-earbuds-2nd-gen/ULT2-HEADPHONEOPN', 'CHERRY CHOCOLATE'],
  'B 897806-0040': ['earbuds/bose-ultra-open-earbuds-2nd-gen/ULT2-HEADPHONEOPN', 'OLIVE GREEN'],
  'B 901149-0010': ['earbuds/bose-open-earbuds/SPORTOPN26-HEADPHONEOPN', 'BLACK'],
  'B 901149-0020': ['earbuds/bose-open-earbuds/SPORTOPN26-HEADPHONEOPN', 'WHITE'],
  'B 901149-0030': ['earbuds/bose-open-earbuds/SPORTOPN26-HEADPHONEOPN', 'EUCALYPTUS GREEN'],
  'B 906940-0010': ['earbuds/bose-noise-cancelling-wired-earbuds/NCWEARB-HEADPHONEIN', 'BLACK'],
  'B 906940-0020': ['earbuds/bose-noise-cancelling-wired-earbuds/NCWEARB-HEADPHONEIN', 'WHITE SMOKE'],
  'B 906940-0030': ['earbuds/bose-noise-cancelling-wired-earbuds/NCWEARB-HEADPHONEIN', 'DEWDROP MINT'],
  'B 880416-0140': ['accessories/bose-quietcomfort-ultra-headphones-carry-case/CMWB-QCUH-CASECARRY', 'BLACK'],
  'B 880416-0150': ['accessories/bose-quietcomfort-ultra-headphones-carry-case/CMWB-QCUH-CASECARRY', 'WHITE SMOKE'],
  'B 752341-0010': ['accessories/omnijewel-wall-bracket-per-pair/CMSP-FOJW_WALL-BRACKETKIT', 'BLACK'],
  'B 752341-0020': ['accessories/omnijewel-wall-bracket-per-pair/CMSP-FOJW_WALL-BRACKETKIT', 'WHITE'],
  'B 757658-0010': ['accessories/omnijewel-centre-channel-wall-bracket/CMSP-FOJWC_WALL-BRACKETKIT', 'BLACK'],
  'B 757658-0020': ['accessories/omnijewel-centre-channel-wall-bracket/CMSP-FOJWC_WALL-BRACKETKIT', 'WHITE'],
  'B 722141-0010': ['accessories/ub20-series-ii-wallceiling-bracket/CMSP-FUB20_WALL_CEIL-BRACKETKIT', 'BLACK'],
  'B 722141-0020': ['accessories/ub20-series-ii-wallceiling-bracket/CMSP-FUB20_WALL_CEIL-BRACKETKIT', 'WHITE'],
  'B 802171-0010': ['accessories/bose-soundbar-wall-bracket/CMSP-FSB_WALL-BRACKETKIT', 'BLACK'],
  'B 802171-0020': ['accessories/bose-soundbar-wall-bracket/CMSP-FSB_WALL-BRACKETKIT', 'WHITE'],
};

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Accept-Language': 'en' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) return resolve(get(new URL(res.headers.location, url).href));
      if (res.statusCode !== 200) { res.resume(); return reject(new Error(`${res.statusCode} ${url}`)); }
      const chunks = []; res.on('data', (c) => chunks.push(c)); res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    }).on('error', reject);
  });
}

// Galéria produktu = obrázky s "Gal" v názve (EcomGal1, PDP_Gal...), v poradí podľa čísla; hlavný obrázok je prvý.
function galleryFrom(html, colorSlug) {
  const found = new Map();
  for (const m of html.matchAll(/https:\/\/assets\.bosecreative\.com\/transform\/([0-9a-f-]{36})\/([A-Za-z0-9_.-]+)\?/g)) {
    const [, id, name] = m;
    if (!/Gal\d*/i.test(name) || /_M_|_Life_M|Nav|Logo/i.test(name)) continue;
    if (colorSlug && !new RegExp(colorSlug, 'i').test(name)) continue;
    if (!found.has(id)) found.set(id, name);
  }
  const num = (n) => Number((n.match(/Gal(\d+)/i) || [])[1] || 99);
  return [...found.entries()].sort((a, b) => num(a[1]) - num(b[1]))
    .map(([id, name]) => `https://assets.bosecreative.com/transform/${id}/${name}?format=jpg&quality=95`);
}

// Očakávaný farebný znak v názve súboru pre farbu SKU - fotky inej farby sa nikdy nepoužijú.
const EXPECT = { BLACK: /Blk|Black/i, WHITE: /WhtSmk|White/i, 'WHITE SMOKE': /WhtSmk|White/i, 'CHERRY CHOCOLATE': /ChryChoc|Cherry/i, 'OLIVE GREEN': /OlvGrn|Olive/i, 'EUCALYPTUS GREEN': /EucaGrn|Eucalyptus/i, 'DEWDROP MINT': /DewMint|Dewdrop/i };

// Príslušenstvo nemá "EcomGal" názvy - berieme obrázky s názvom farby (napr. CREA-1001_QCUH24_OpenCaseFront_Black_...).
function accessoryImages(html, colorRe) {
  const found = new Map();
  for (const m of html.matchAll(/https:\/\/assets\.bosecreative\.com\/transform\/([0-9a-f-]{36})\/([A-Za-z0-9_.-]+)\?/g)) {
    const [, id, name] = m;
    if (/Nav|Logo|Flyout|Life_|HP_|Collection/i.test(name) || !colorRe.test(name)) continue;
    if (!found.has(id)) found.set(id, name);
  }
  return [...found.entries()].map(([id, name]) => `https://assets.bosecreative.com/transform/${id}/${name}?format=jpg&quality=95`);
}

(async () => {
  const out = {};
  const report = [];
  const cache = new Map();
  for (const [sku, [page, color]] of Object.entries(TARGETS)) {
    const url = `${B}${page}.html`;
    const key = page.split('/').pop();
    try {
      const full = color ? `${url}?dwvar_${key}_color=${encodeURIComponent(color)}` : url;
      let html = cache.get(full);
      if (!html) { try { html = await get(full); } catch (e) { html = await get(url); } cache.set(full, html); }
      const want = color ? EXPECT[color] : null;
      let imgs = galleryFrom(html, null).filter((u) => !want || want.test(u.split('/').pop()));
      if (!imgs.length && want) imgs = accessoryImages(html, want);
      imgs = imgs.slice(0, 8);
      report.push(`${sku} ${color || ''}: ${imgs.length} fotiek ${imgs[0] ? imgs[0].split('/').pop().split('?')[0] : ''}`);
      if (imgs.length) out[sku] = imgs;
    } catch (e) { report.push(`${sku} ${color || ''}: ${e.message.split('\n')[0]}`); }
  }
  console.log(report.join('\n'));
  if (!process.argv.includes('--dry')) {
    fs.writeFileSync(OUT, JSON.stringify({ _comment: 'Oficiálne fotky z bose.com (assets.bosecreative.com) pre SKU z cenníka BaSys/Bose, ktoré nemajú fotky z BaSys cloudu. Generuje scripts/fetch-bose-official-images.js.', fetched: new Date().toISOString().slice(0, 10), items: out }, null, 1) + '\n');
    console.log(`Zapísané ${Object.keys(out).length} SKU -> ${path.relative(process.cwd(), OUT)}`);
  }
})();

// Parametre z HTML popisu produktu: tabuľky (th/td) a riadky "Kľúč: hodnota" v zoznamoch.
// Berie len krátke, jednoznačné dvojice; slúži ako zdroj skutočných špecifikácií pre Heureka PARAM.

const KEY_MAP = {
  'color': 'Farba', 'colour': 'Farba', 'barva': 'Farba',
  'weight': 'Hmotnosť', 'hmotnost': 'Hmotnosť', 'váha': 'Hmotnosť', 'vaha': 'Hmotnosť', 'hmotnosť': 'Hmotnosť',
  'dimensions': 'Rozmery', 'rozměry': 'Rozmery', 'rozmery': 'Rozmery',
  'material': 'Materiál', 'materiál': 'Materiál',
  'compatibility': 'Kompatibilita',
  'délka': 'Dĺžka', 'dĺžka': 'Dĺžka', 'šířka': 'Šírka', 'šírka': 'Šírka', 'výška': 'Výška', 'výška ': 'Výška',
  'tloušťka': 'Hrúbka', 'napájení': 'Napájanie', 'nosnost': 'Nosnosť', 'frekvence': 'Frekvencia',
};
// Kľúče, ktoré sú identifikátory alebo sa dopĺňajú inde.
const SKIP = new Set(['model', 'výrobca', 'výrobce', 'manufacturer', 'názov', 'název', 'name', 'značka', 'brand',
  'záruka', 'záruka:', 'ean', 'kód', 'kod', 'code', 'sku', 'výrobné číslo', 'katalógové číslo']);

const clean = (s) => String(s)
  .replace(/<[^>]*>/g, ' ')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&deg;/g, '°').replace(/&sup2;/g, '²').replace(/&times;/g, '×').replace(/&#?\w+;/g, ' ')
  .replace(/\s+/g, ' ').trim();

function pairs(html) {
  const out = [];
  const src = String(html || '');
  for (const row of src.match(/<tr[\s\S]*?<\/tr>/gi) || []) {
    const cells = (row.match(/<t[dh][^>]*>[\s\S]*?<\/t[dh]>/gi) || []).map(clean);
    if (cells.length === 2) out.push([cells[0], cells[1]]);
  }
  for (const li of src.match(/<li[^>]*>[\s\S]*?<\/li>/gi) || []) {
    const m = clean(li).match(/^([^:]{2,30}):\s*(.+)$/);
    if (m) out.push([m[1], m[2]]);
  }
  return out;
}

function extractDescriptionParams(html, max = 10) {
  const res = [];
  for (let [k, v] of pairs(html)) {
    k = k.replace(/[:\s]+$/, '').trim();
    v = v.replace(/\s*[;,.]$/, '').trim();
    if (!k || !v || k.split(' ').length > 4 || v.length > 80 || /[.!?]\s/.test(v)) continue;
    const lk = k.toLowerCase();
    if (SKIP.has(lk)) continue;
    if (/^(áno|nie|-|–|n\/a)$/i.test(v)) continue;
    let name = KEY_MAP[lk] || k.charAt(0).toUpperCase() + k.slice(1);
    if (name.length > 40 || res.some((p) => p.name.toLowerCase() === name.toLowerCase())) continue;
    res.push({ name, value: v });
    if (res.length >= max) break;
  }
  return res;
}

module.exports = { extractDescriptionParams };

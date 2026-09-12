// Ten istý produkt vie do e-shopu priniesť viacero dodávateľov naraz (UNI-T dodáva ATOS aj
// InnPro, Pioneer BASYS aj K-B, ...). Výsledkom sú dve karty toho istého tovaru: rozdelené
// recenzie, dve URL súťažiace o rovnaké kľúčové slovo, dve rôzne ceny a dvojité hlásenia
// do Heureky. Táto knižnica pri každom behu importu vyhodí z feedu "porazeného" dodávateľa tie
// produkty, ktoré ten istý deň vie dodať aj preferovaný dodávateľ.
//
// EAN na párovanie použiť nejde – každý dodávateľ má vlastný (ATOS české distribútorské číslo,
// InnPro číslo výrobcu), zhoda podľa EAN naprieč všetkými feedmi nájde jediný prípad. Páruje sa
// preto podľa značky a modelového kódu z názvu produktu.
//
// Preferencie sú v scripts/cross-supplier-preferences.json.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const PREFS_PATH = path.join(ROOT, 'scripts', 'cross-supplier-preferences.json');
const OUTPUT_DIR = path.join(ROOT, 'output');

const MODEL_RE = /\b([A-Z]{1,4}[-\s]?\d{2,5}[A-Z+]{0,4})\b/g;
// tokeny, ktoré vyzerajú ako modelový kód, ale sú to technické údaje spoločné mnohým produktom
const NOT_A_MODEL = new Set(['USB', 'LED', 'RGB', 'IP65', 'IP67', 'IP44', 'IP54', 'IP20', 'DC', 'AC', '4K']);

// Samotny modelovy kod na porovnanie nestaci - "Tapo L530E" a "Tapo L530E (2-pack)" maju rovnaky
// kod, ale je to iny tovar, rovnako "RV30 Max" vs "RV30 Max Plus" alebo ten isty reproduktor
// v ciernej a bielej. Preto sa ku kodu pripaja aj to, co produkt odlisuje od svojich variantov:
// velkost balenia, farba a kvalifikatory radu. Ked to jeden dodavatel v nazve uvedie a druhy nie,
// zhoda nevznikne - radsej necha duplicitu, nez by zmazal produkt, ktory duplicita nie je.
const QUALIFIERS = ['plus', 'pro', 'max', 'ultra', 'lite', 'mini', 'combo', 'kit', 'set'];
const COLOURS = {
  cierna: ['čierny', 'čierna', 'čierne', 'černý', 'černá', 'black'],
  biela: ['biely', 'biela', 'biele', 'bílý', 'bílá', 'white'],
  seda: ['sivý', 'sivá', 'šedý', 'šedá', 'grey', 'gray'],
  strieborna: ['strieborný', 'strieborná', 'stříbrný', 'silver'],
  modra: ['modrý', 'modrá', 'blue'],
  cervena: ['červený', 'červená', 'red'],
  zelena: ['zelený', 'zelená', 'green'],
  ruzova: ['ružový', 'ružová', 'růžová', 'pink'],
  fialova: ['fialový', 'fialová', 'purple'],
  zlta: ['žltý', 'žltá', 'žlutý', 'yellow'],
};

function variantTags(name) {
  const low = name.toLowerCase();
  const tags = [];
  const pack = low.match(/(\d+)\s*-?\s*(?:pack|ks\b|kusov|kusy)/);
  if (pack && pack[1] !== '1') tags.push(`pack${pack[1]}`);
  // \b je v JS ASCII-ove, takze pri slovach s diakritikou ("cerny") hranicu nenajde - preto
  // vlastna hranica cez unicode triedu pismen
  const word = (w) => new RegExp(`(^|[^\\p{L}\\p{N}])${w}($|[^\\p{L}\\p{N}])`, 'u');
  for (const q of QUALIFIERS) if (word(q).test(low)) tags.push(q);
  for (const [tag, words] of Object.entries(COLOURS)) {
    if (words.some((w) => word(w).test(low))) { tags.push(tag); break; }
  }
  return tags.sort();
}

function modelOf(name) {
  if (!name) return null;
  MODEL_RE.lastIndex = 0;
  let m;
  while ((m = MODEL_RE.exec(name))) {
    const key = m[1].toUpperCase().replace(/[\s-]/g, '');
    if (key.length >= 4 && !NOT_A_MODEL.has(key)) {
      const tags = variantTags(name);
      return tags.length ? `${key}|${tags.join('|')}` : key;
    }
  }
  return null;
}

function readFeedModels(supplier, brandsWanted) {
  const file = path.join(OUTPUT_DIR, `${supplier}.xml`);
  if (!fs.existsSync(file)) return null;
  const xml = fs.readFileSync(file, 'utf-8');
  const byBrand = new Map();
  for (const item of xml.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g) || []) {
    const cdata = (tag) => {
      const m = item.match(new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`))
        || item.match(new RegExp(`<${tag}>([^<]*)</${tag}>`));
      return m ? m[1].trim() : '';
    };
    const brand = cdata('MANUFACTURER').toLowerCase();
    if (!brandsWanted.has(brand)) continue;
    const model = modelOf(cdata('PRODUCTNAME') || cdata('NAME'));
    if (!model) continue;
    if (!byBrand.has(brand)) byBrand.set(brand, new Set());
    byBrand.get(brand).add(model);
  }
  return byBrand;
}

// Vráti { shouldExclude(product), stats } pre daného dodávateľa. shouldExclude je true len vtedy,
// keď ten istý model tej istej značky reálne je vo feede preferovaného dodávateľa.
function createCrossSupplierFilter(supplier) {
  const stats = { excluded: 0, byBrand: {}, skippedBrands: [] };
  let prefs;
  try {
    prefs = JSON.parse(fs.readFileSync(PREFS_PATH, 'utf-8')).preferredSupplierByBrand || {};
  } catch {
    return { shouldExclude: () => false, stats };
  }

  // značky, kde tento dodávateľ NIE je preferovaný -> jeho kusy sa majú ustúpiť
  const losingBrands = new Map(); // brand -> preferovaný dodávateľ
  for (const [brand, winner] of Object.entries(prefs)) {
    if (winner.toLowerCase() !== supplier.toLowerCase()) losingBrands.set(brand.toLowerCase(), winner);
  }
  if (!losingBrands.size) return { shouldExclude: () => false, stats };

  const byWinner = new Map();
  for (const [brand, winner] of losingBrands) {
    if (!byWinner.has(winner)) byWinner.set(winner, new Set());
    byWinner.get(winner).add(brand);
  }

  const known = new Map(); // brand -> Set(model)
  for (const [winner, brands] of byWinner) {
    const models = readFeedModels(winner, brands);
    for (const brand of brands) {
      const set = models && models.get(brand);
      // Chýbajúci alebo prázdny feed preferovaného dodávateľa neznamená "vylúč všetko" – vtedy
      // sa pre danú značku nevylučuje nič, nech výpadok jedného feedu nezmaže sortiment.
      if (!set || !set.size) { stats.skippedBrands.push(`${brand} (${winner})`); continue; }
      known.set(brand, set);
    }
  }

  function shouldExclude(manufacturer, name) {
    if (!manufacturer) return false;
    const set = known.get(manufacturer.trim().toLowerCase());
    if (!set) return false;
    const model = modelOf(name);
    if (!model || !set.has(model)) return false;
    stats.excluded++;
    const b = manufacturer.trim();
    stats.byBrand[b] = (stats.byBrand[b] || 0) + 1;
    return true;
  }

  return { shouldExclude, stats };
}

module.exports = { createCrossSupplierFilter, modelOf };

// Parametre produktov Monacor (TEXT_PROPERTIES v Shoptet feede -> PARAM v Heureka feede).
// Popis Monacor produktov obsahuje na konci riadky "Kluc: hodnota<br />" v angličtine
// (Colour: black, Material: steel, ...). Vyberieme zmysluplné z nich, preložíme názov
// a bežné hodnoty do slovenčiny. Bez parametrov Heureka produkt nezaradí do filtrov kategórie.

// Poradie = poradie parametrov vo feede. Kľúč je anglický názov z popisu.
const KEY_MAP = {
  'Colour': 'Farba',
  'Material': 'Materiál',
  'Housing material': 'Materiál puzdra',
  'Dimensions': 'Rozmery',
  'Width': 'Šírka',
  'Height': 'Výška',
  'Depth': 'Hĺbka',
  'Length': 'Dĺžka',
  'Frequency range': 'Frekvenčný rozsah',
  'Audio frequency range': 'Frekvenčný rozsah',
  'Power rating': 'Výkon',
  'Power rating (RMS)': 'Výkon RMS',
  'Total power rating': 'Celkový výkon',
  'Nominal impedance': 'Impedancia',
  'Impedance (Z)': 'Impedancia',
  'SPL': 'Citlivosť (SPL)',
  'Sensitivity': 'Citlivosť',
  'Polar pattern': 'Smerová charakteristika',
  'Active/passive': 'Aktívny/pasívny',
  'Channels': 'Počet kanálov',
  'Number of speakers': 'Počet reproduktorov',
  'Speaker size': 'Veľkosť reproduktora',
  'Connection': 'Pripojenie',
  'Connections': 'Pripojenie',
  'Inputs': 'Vstupy',
  'Transmission technology': 'Spôsob prenosu',
  'Transmission method': 'Spôsob prenosu',
  'Power supply': 'Napájanie',
  'Admiss. ambient temp.': 'Prevádzková teplota',
  'Weight': 'Hmotnosť',
  'Net weight': 'Hmotnosť',
};

// Rovnaký slovenský názov sa vo feede objaví len raz (prvý nájdený kľúč vyhráva).
const VALUE_MAP = {
  'black': 'čierna', 'white': 'biela', 'grey': 'sivá', 'gray': 'sivá', 'silver': 'strieborná',
  'red': 'červená', 'blue': 'modrá', 'green': 'zelená', 'yellow': 'žltá', 'orange': 'oranžová',
  'brown': 'hnedá', 'gold': 'zlatá', 'transparent': 'priehľadná', 'beige': 'béžová',
  'metal': 'kov', 'plastic': 'plast', 'steel': 'oceľ', 'aluminium': 'hliník', 'aluminum': 'hliník',
  'wood': 'drevo', 'birch plywood': 'brezová preglejka', 'brass': 'mosadz', 'copper': 'meď',
  'rubber': 'guma', 'glass': 'sklo', 'textile': 'textil', 'leather': 'koža',
  'active': 'aktívny', 'passive': 'pasívny', 'pasive': 'pasívny', 'active/passive': 'aktívny/pasívny',
  'cable': 'káblový', 'wireless': 'bezdrôtový', 'cable/wireless': 'káblový/bezdrôtový',
  'cardioid': 'kardioida', 'supercardioid': 'superkardioida', 'hypercardioid': 'hyperkardioida',
  'omnidirectional': 'všesmerová', 'omnidir.': 'všesmerová', 'figure-of-eight': 'osmičková',
  'dynamic': 'dynamický', 'electret': 'elektrétový', 'back electret': 'elektrétový',
};

function decodeEntities(s) {
  return String(s)
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/ /g, ' ')
    .replace(/\s+/g, ' ').trim();
}

function translateValue(key, rawValue) {
  const value = decodeEntities(rawValue);
  if (!value) return '';
  const translated = VALUE_MAP[value.toLowerCase()];
  if (translated) return translated;
  if (key === 'Colour' || key === 'Material' || key === 'Housing material') {
    // Zoznamy ako "black, white" alebo "aluminium sheet, ABS plastic" prelož po častiach.
    const parts = value.split(/\s*,\s*/).map((p) => VALUE_MAP[p.toLowerCase()] || p);
    return parts.join(', ');
  }
  return value;
}

// Vráti pole [{ name, value }], najviac `max` položiek, bez duplicít názvov.
function extractMonacorParams(descriptionHtml, manufacturer, max = 12) {
  const html = String(descriptionHtml || '');
  const start = html.indexOf('<br /><br />');
  const seg = start >= 0 ? html.slice(start).split('<p>')[0] : '';
  const params = [];
  const seen = new Set();
  const re = /<br\s*\/?>\s*([A-Z][^<:]{1,45}?):\s*([^<]*)/g;
  let m;
  while ((m = re.exec(seg))) {
    const name = KEY_MAP[m[1].trim()];
    if (!name || seen.has(name)) continue;
    const value = translateValue(m[1].trim(), m[2]);
    if (!value || /^(see drawing|not applicable|-+)$/i.test(value)) continue;
    seen.add(name);
    params.push({ name, value });
    if (params.length >= max) break;
  }
  // Každý produkt má aspoň jeden parameter (Heureka inak hlási chýbajúci PARAM).
  if (manufacturer && !seen.has('Značka')) params.unshift({ name: 'Značka', value: manufacturer });
  return params;
}

module.exports = { extractMonacorParams, translateValue, KEY_MAP };

// Záložné parametre produktov (TEXT_PROPERTIES -> Heureka PARAM, filtre v kategóriách).
// Používa sa pre položky, ktoré po všetkých zdrojoch (feed dodávateľa, Icecat) nemajú žiadne
// parametre. Hodnoty sa odvodzujú len z toho, čo je v položke isté: značka, záruka, farba
// a rozmery/výkon/objem/kapacita z názvu alebo popisu. Nič sa nehádá.

// \b v JS nepozná diakritiku (č, š, ý...), preto vlastné hranice slov cez Unicode vlastnosti.
const wb = (src) => new RegExp(`(?<![\\p{L}\\d])(?:${src})(?![\\p{L}\\d])`, 'iu');
const COLORS = [
  ['čierna', wb('čiern\\p{L}*|cern\\p{L}*|černý|černá|černé|black|noir')],
  ['biela', wb('biel\\p{L}*|bíl\\p{L}*|bil\\p{L}*|white')],
  ['sivá', wb('siv\\p{L}*|šedá|šedý|šedé|sedá|grey|gray|graphite|grafit\\p{L}*|antracit\\p{L}*')],
  ['strieborná', wb('striebor\\p{L}*|stříbr\\p{L}*|silver|inox|nerez\\p{L}*')],
  ['červená', wb('červen\\p{L}*|cerven\\p{L}*|red')],
  ['modrá', wb('modr\\p{L}*|blue|blueberry|navy')],
  ['zelená', wb('zelen\\p{L}*|green')],
  ['žltá', wb('žlt\\p{L}*|žlut\\p{L}*|yellow')],
  ['oranžová', wb('oranž\\p{L}*|orange')],
  ['ružová', wb('ružov\\p{L}*|růžov\\p{L}*|pink|rose')],
  ['fialová', wb('fialov\\p{L}*|purple|violet|lilac')],
  ['hnedá', wb('hned\\p{L}*|hněd\\p{L}*|brown')],
  ['zlatá', wb('zlat\\p{L}*|gold')],
  ['béžová', wb('béžov\\p{L}*|bezov\\p{L}*|beige|cream|krém\\p{L}*')],
];

const { extractDescriptionParams } = require('./description-params');

function decode(s) {
  return String(s || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/ /g, ' ').replace(/\s+/g, ' ').trim();
}
const num = (s) => String(s).replace('.', ',');

function detectColor(name) {
  const found = COLORS.filter(([, re]) => re.test(name)).map(([c]) => c);
  // Viac farieb v názve (napr. "Black/Silver") -> nejednoznačné, nechaj prvú len ak je jedna.
  return found.length === 1 ? found[0] : '';
}

// item: { name, description, manufacturer, warranty }. Vracia pole { name, value }.
function buildFallbackParams(item) {
  const name = decode(item.name);
  const desc = decode(item.description);
  const text = `${name} ${desc}`;
  const params = [];
  const add = (n, v) => { if (v && !params.some((p) => p.name === n)) params.push({ name: n, value: v }); };

  add('Značka', decode(item.manufacturer));
  for (const p of extractDescriptionParams(item.description)) add(p.name, p.value);
  add('Farba', detectColor(name));

  let m = name.match(/\b(\d{1,2})\s?\/\s?(\d{2,4})\s?(GB|TB)\b/i);
  if (m) { add('Pamäť RAM', `${m[1]} GB`); add('Úložisko', `${m[2]} ${m[3].toUpperCase()}`); }
  else if ((m = name.match(/\b(\d{2,4})\s?(GB|TB)\b/i))) add('Úložisko', `${m[1]} ${m[2].toUpperCase()}`);
  if ((m = desc.match(/\bRAM\s*(\d{1,2})\s?GB\b/i))) add('Pamäť RAM', `${m[1]} GB`);

  if ((m = name.match(/\b(\d{2,3}(?:[.,]\d)?)\s?(?:"|”|″|palc\w*|inch)/i) || desc.match(/\b(?:displej|obrazovka|uhlopriečka)\w*\s+(\d{1,2}(?:[.,]\d)?)\s?(?:"|”|″|palc\w*)/i))) {
    add('Uhlopriečka', `${num(m[1])}"`);
  }

  if ((m = name.match(/\b(\d{2,4})\s?W\b/) || desc.match(/\b(?:p[rř]íkon|výkon|příkon)\w*\s*:?\s*(?:až\s*|max\.?\s*)?(\d{2,4}(?:[.,]\d)?)\s?W\b/i))) {
    add('Výkon', `${num(m[1])} W`);
  }

  if ((m = name.match(/\b(\d{1,3}(?:[.,]\d{1,2})?)\s?(?:l|L|litr\w*)\b(?![\w.])/) || desc.match(/\bobjem\w*\s*:?\s*(\d{1,3}(?:[.,]\d{1,2})?)\s?(?:l|litr\w*)\b/i))) {
    add('Objem', `${num(m[1])} l`);
  }

  const conn = [];
  if (/\bBluetooth\b/i.test(text)) conn.push('Bluetooth');
  if (/\bwi-?fi\b/i.test(text)) conn.push('Wi-Fi');
  if (/\bNFC\b/.test(text)) conn.push('NFC');
  if (/\b5G\b/.test(text)) conn.push('5G');
  if (/\bUSB-?C\b/i.test(text)) conn.push('USB-C');
  if (/\bHDMI\b/.test(text)) conn.push('HDMI');
  if (conn.length) add('Konektivita', conn.join(', '));

  const w = parseInt(item.warranty, 10);
  if (w > 0) add('Záruka', `${w} mesiacov`);
  return params;
}

module.exports = { buildFallbackParams, detectColor };
